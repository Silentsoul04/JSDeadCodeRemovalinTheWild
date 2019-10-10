import {
    serverData
} from './clientConfigService';

const {
    authorSlug,
    blogSlug,
    channelColor,
    channelId,
    channelName,
    edittools,
    is404,
    name,
    sectionId,
    subBlog,
    subBlogLocation,
    variantUri,
} = serverData;

document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.getElementsByTagName('html')[0];
    const headElement = document.getElementsByTagName('head')[0];
    const mainRowsContainer = document.querySelector('body>.main-content>main');

    let promotedContentCache = {};

    let isEditToolsInitialized = false;

    /**
     * Check for edittools cookie
     */
    function editToolsCookieExists() {
        return document.cookie.indexOf('forbeseditor') !== -1;
    }

    /**
     * Prevent scenario where a user could edit production data built to a staging server.
     * Also prevent edittools from editing HP content on 404 page.
     */
    function allowEditTools() {
        const isProdEdittools = edittools === 'edittools.forbes.com';
        const isStagingUrl = window.location.host.indexOf('www-staging') !== -1;
        let allow = true;
        if ((isProdEdittools && isStagingUrl) || is404) {
            allow = false;
        }
        return allow;
    }

    /**
     * Insert jQuery onto the page so that edittools loader
     * (that is dependent on jQuery) doesn't blow up.
     */
    function insertJQueryScript() {
        const script = document.createElement('script');
        script.src = 'https://i.forbesimg.com/assets/js/core/jquery-1.7.2.min.js';

        document.body.appendChild(script);
    }

    /**
     * Insert the edittools loader script.
     */
    function insertEditToolsScript() {
        const script = document.createElement('script');
        script.src = `https://${edittools}/tools/init`;

        document.body.appendChild(script);
    }

    /**
     * Insert the fbs-typography stylesheet from headend.
     */
    function insertFbsTypographyStylesheet() {
        const link = document.createElement('link');
        link.href = 'https://images.forbes.com/assets/fonts/fbs-typography/0233/fbs-typography-2.33.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        headElement.appendChild(link);
    }

    /**
     * Insert HTML and run scripts that may be in it
     */
    function insertHtml(text) {
        const div = document.createElement('div');
        div.innerHTML = text;

        const fragment = new DocumentFragment();
        fragment.appendChild(div);

        const scripts = fragment.querySelectorAll('script');
        scripts.forEach((element) => {
            const script = document.createElement('script');
            script.innerText = element.innerText;

            headElement.appendChild(script);

            element.remove();
        });

        mainRowsContainer.innerHTML = '';

        let node = div.firstChild;
        while (node) {
            mainRowsContainer.appendChild(node);
            mainRowsContainer.classList.add('injectButtons');
            node = div.firstChild;
        }

        mainRowsContainer.classList.add('injectButtons');
    }

    /**
     * Fetch server rendered HTML for rows given Edit Tools data
     */
    function fetchAndRenderRows(promotedContent) {
        let channelSectionData;
        let reqBody = {};

        if (channelId) {
            channelSectionData = {
                id: sectionId ? channelId.concat(sectionId) : channelId,
                sectionId,
                channelName,
                sectionName: name,
            };
            reqBody.channelSectionData = channelSectionData;
            reqBody.color = channelColor;
            reqBody.promotedContent = promotedContent;
        } else if (blogSlug) {
            reqBody = {
                content: {
                    promotedContent,
                },
                subBlogLocation,
            };
        } else {
            reqBody = { ...promotedContent
            };
        }

        // TODO - just do this server side and pass the edittools path for all in clientConfigService
        let path;
        if (blogSlug && authorSlug) {
            path = `/simple-data/contributor-homepage/rows/${blogSlug}/people/${authorSlug}`;
        } else if (blogSlug) {
            path = `/simple-data/contributor-homepage/rows/${blogSlug}`;
            if (subBlog) {
                path += `/${subBlog}`;
            }
        } else if (channelId) {
            path = `/simple-data/chansec/${name}/rows`;
        } else if (variantUri) {
            path = `/simple-data/homepage/${variantUri}/rows`;
        }

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        }).then(data => data.text()).then((text) => {
            insertHtml(text);
            window.jQuery('.injectButtons').trigger('change');
        });
    }

    /**
     * Listen to Edit Tools jQuery events
     */
    function attachEventListeners() {
        window.jQuery(document)
            .on('editToolsPreviewInit', (event, response) => {
                promotedContentCache = response.data.promotedContent;
                fetchAndRenderRows(promotedContentCache);
            })
            .on('editToolsPreviewUpdate', (event, response) => {
                Object.keys(response.data.promotedContent).forEach((key) => {
                    promotedContentCache[key] = response.data.promotedContent[key];
                });
                fetchAndRenderRows(promotedContentCache);
            });
    }

    /**
     * Do necessary things to put edittools onto the page.
     */
    function launchEditTools() {
        window.fbs_settings = {};

        insertJQueryScript();

        const jQueryInterval = setInterval(() => {
            if (window.jQuery) {
                clearInterval(jQueryInterval);

                attachEventListeners();
                insertEditToolsScript();
            }
        }, 200);
    }

    /**
     * Check for edit tools initialization and toggle sidebar
     */
    function createEditToolsButtonHandler(labelElement) {
        return () => {
            // Check to see if ET is initialized
            if (!isEditToolsInitialized) {
                launchEditTools();
                isEditToolsInitialized = true;
                labelElement.textContent = 'Hide Tools';
            } else if (isEditToolsInitialized && (!htmlElement.classList.contains('et-on'))) {
                // Hide sidebar
                htmlElement.classList.add('et-on');
                labelElement.textContent = 'Hide Tools';
            } else if (isEditToolsInitialized && (htmlElement.classList.contains('et-on'))) {
                // Show sidebar
                htmlElement.classList.remove('et-on');
                labelElement.textContent = 'Show Tools';
            }
        };
    }

    /**
     * Add UI element that allows a logged in user to launch edittools.
     */
    function insertLaunchButton() {
        insertFbsTypographyStylesheet();

        const button = document.createElement('button');
        const icon = document.createElement('i');
        const label = document.createElement('span');
        icon.setAttribute('class', 'icon icon-cog');
        label.setAttribute('class', 'et-label');
        label.textContent = 'Edit This Page';
        button.setAttribute('class', 'edittools-btn');
        button.appendChild(label);
        button.appendChild(icon);
        button.onclick = createEditToolsButtonHandler(label);
        document.body.appendChild(button);
    }

    /**
     * Get this party started.
     */
    function init() {
        if (editToolsCookieExists() && allowEditTools()) {
            insertLaunchButton();
        }
    }

    init();
});



// WEBPACK FOOTER //
// ./src/assets/js/shared/edittools.js