import { Application } from 't3js';
import apiService from '@buzzfeed/buzzblocks/js/services/component-api';
import sidebarModule from '@buzzfeed/buzzblocks/js/services/sidebar-module';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import globalEvents from '@buzzfeed/buzzblocks/js/services/global-events';

/**
 * Default SiteComponentList, others with different behaviour should ideally
 * extend from this.
 *
 * Example usage:
 *
 * <div data-module="section-list">
 *   <script type="text/x-config">
 *     {
 *       "unit": "trending",
 *       "unitType": "list",
 *       "color": "pink",
 *       "imageCrop": "wide",
 *       "loadXsmall": false,
 *       "loadSmall": false,
 *       "loadMedium": true,
 *       "loadLarge": true,
 *       "showNumber": true,
 *       "showImage": true
 *     }
 *   </script>
 * </div>
 */
class SectionList {
  /**
   * @param {Object} apiService - An object with a get(componentName, config) and returns a Promise
   * @param {Object} solid - A service which can detect the current browser resolution
   */
  constructor(_apiService, _solid, ctx) {
    this.apiService = _apiService;
    this.solid = _solid;

    if (typeof ctx !== 'undefined') {
      this.element = ctx.getElement();
      this.config = this.loadConfig(ctx);
    }
  }

  /**
   * Allows overriding of configuration on an already instantiated module
   */
  setConfig(k, v) {
    this.config[k] = v;
  }

  /**
   * @returns {Object} module - T3 module
   */
  generateModule() {
    return ctx => new SectionList(this.apiService, this.solid, ctx);
  }

  /**
   * Loads the config, some values will have defaults set. You must explicitly
   * set all of the sizes which you want it to load
   *
   * @param {Object} context - T3 module context
   * @returns {Object}
   */
  loadConfig(context) {
    return {
      unit: context.getConfig('unit') || 'trending',
      unitType: context.getConfig('unitType') || 'list',
      loadXsmall: !!context.getConfig('loadXsmall'),
      loadSmall: !!context.getConfig('loadSmall'),
      loadMedium: !!context.getConfig('loadMedium'),
      loadLarge: !!context.getConfig('loadLarge'),
      title: context.getConfig('title') || 'Trending Now',
      link: context.getConfig('link') || '',
      titleIcon: context.getConfig('titleIcon') || '',
      showImage: !!context.getConfig('showImage'),
      showNumber: !!context.getConfig('showNumber'),
      color: context.getConfig('color') || 'pink',
      listClass: context.getConfig('listClass') || 'list-unstyled',
      itemClass: context.getConfig('itemClass') || 'xs-mt1 clearfix',
      imgClass: context.getConfig('imgClass') || 'xs-relative xs-block xs-mb1',
      containerClasses: context.getConfig('containerClasses') || '',
      firstPage: context.getConfig('firstPage') || 1,
      pageSize: context.getConfig('pageSize') || 15,
      imageCrop: context.getConfig('imageCrop') || 'wide',
      variant: context.getConfig('variant') || '',
      baseUrl: context.getGlobal('BZFD').Config.webRoot || '',
      service: document.documentElement.getAttribute('data-app') || '',
      params: context.getConfig('params') || '',
      module: context.getConfig('module') || '',
      ariaLabel: context.getConfig('ariaLabel') || 'Article List',
    };
  }

  /**
   * Returns the template contents
   * @returns {string} template
   */
  loadTemplate() {
    return require('../../components/feedpage/sidebars/section-list.html');
  }

  /**
   * Renders the actual template, called from promise
   * @param {Object} data - Data from an XHR to the site_component_api
   */
  renderTemplate(data) {
    // if no results from dataSource, return early
    if (!data.length) {
      return;
    }

    let templateData = Object.assign({buzz: {}, buzzes: []}, this.config);
    let buzzes = data.map(function(item, index) {
      return {
        id: item.id,
        image: item.image,
        image_alt_text: item.image_alt_text,
        unit: this.config.unit,
        unitType: this.config.unitType,
        name: item.name,
        description: item.description,
        number: index + 1,
        url: item.url,
        params: this.config.params,
        dataSource: item.data_source,
        position: index,
        variant: this.config.variant,
        ariaLabel: this.config.ariaLabel,
      };
    }, this);

    templateData.buzz = buzzes.shift();
    templateData.buzzes = buzzes;

    // render component template
    sidebarModule.renderTemplate({
      element: this.element,
      template: this.loadTemplate(),
      templateData
    });
  }

  /**
   * Code that runs when this module has been loaded.
   */
  loadComplete() {
    const idxInParent = Number(this.element.dataset.idxInParent);
    Application.broadcast(
      globalEvents.componentLoaded, {id: this.element.id, idxInParent}
    );
  }

  /**
   * Initializes the module (set as module.init())
   */
  init() {
    if((this.config.loadXsmall && this.solid.isXsmall()) ||
       (this.config.loadSmall && this.solid.isSmall()) ||
       (this.config.loadMedium && this.solid.isMedium()) ||
       (this.config.loadLarge && this.solid.isLarge())) {

      let componentConfig = {
        page: this.config.firstPage,
        pageSize: this.config.pageSize,
        imageCrop: this.config.imageCrop,
        origin: this.config.baseUrl,
        service: this.config.service,
        variant: this.config.variant,
      };

      this.apiService.get(this.config.unit, componentConfig)
        .then(data => {
          this.renderTemplate(data);
        })
        .catch(e => {
          throw e;
        })
        .then(() => this.loadComplete());
    } else {
      this.loadComplete();
    }
    return null;
  }

  /**
   * Initializes the module (set as module.destroy())
   */
  destroy() {
    this.element = null;
    this.config = null;
  }
}

export default SectionList;

Application.addModule(
  'section-list',
  new SectionList(apiService, solid).generateModule()
);
