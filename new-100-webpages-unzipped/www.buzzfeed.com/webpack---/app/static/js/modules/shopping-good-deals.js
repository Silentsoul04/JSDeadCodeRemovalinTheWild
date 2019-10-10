import {
    Application
} from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import apiService from '@buzzfeed/buzzblocks/js/services/component-api';
import dealTemplate from '../../components/shopping/good-deals/deal.html';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import util from '@buzzfeed/buzzblocks/js/services/util';
import {
    name as skimlinksXcustModifier
} from '@buzzfeed/buzzblocks/js/behaviors/skimlinks-xcust-modifier';
import {
    name as amazonSubtagModifier
} from '@buzzfeed/buzzblocks/js/behaviors/amazon-subtag-modifier';

class ShoppingGoodDeals {
    constructor(context) {
        this.element = context.getElement();
        this.current_position = 0;
        this.not_showed_products = [];
        this.is_loading = false;
        this.origin = 'df';
        this.edition = 'en-us';
    }

    /**
     * Affiliate link conversion behaviors
     */
    behaviors = [
        skimlinksXcustModifier,
        amazonSubtagModifier,
    ];

    get platform() {
        return solid.isAny(['xs', 'sm']) ? 'mobileweb' : 'desktop';
    }

    loadData() {
        return apiService
            .get('good-deals', {
                convertLinks: true,
                platform: this.platform,
                edition: this.edition,
            })
            .then(data => {
                this.not_showed_products = data.items;
            });
    }

    getHref(targetEl) {
        var href = targetEl instanceof Element ? dom.getAttr(targetEl, 'href') : '';
        return href || '';
    }

    showNextDeal() {
        if (this.current_position >= this.not_showed_products.length) {
            this.current_position = 0;
        }
        let product = this.not_showed_products[this.current_position];
        this.element.innerHTML = dealTemplate.render({
            'image': product.amzn_img_url,
            'price': product.price,
            'dek': product.subbuzz_text,
            'link_to_post': product.buzz_url + `?origin=${this.origin}#` + product.subuzz_id,
            'title': product.subbuzz_title,
        });
        // Add origin to external links
        util.each(
            this.element.querySelectorAll('a[target="_blank"]'),
            (i, link) => {
                link.setAttribute('data-origin', `bf-${this.origin}`);
                link.setAttribute('data-bfa', '@a:post;@d:df;');
            }
        );

        dom.removeClass(this.element, 'loading');
        this.is_loading = false;
        this.current_position++;
    }

    init() {
        this.loadData();
    }

    onclick(ev, elem, elemType) {
        if (!this.is_loading && elemType === 'show-deal') {
            // this.showNextDeal();
            this.is_loading = true;
            dom.addClass(elem, 'active button--disabled');
            dom.addClass(this.element, 'loading');
            setTimeout(this.showNextDeal.bind(this), 1000);

        }
    }
}

Application.addModule('shopping-good-deals', ctx => new ShoppingGoodDeals(ctx));