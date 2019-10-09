
export default {
  init: function (options) {
    this.baseUrl = options.baseUrl;
    this.urls = {
      basketApiGet: `${this.baseUrl}/api/basket`,
      basketApiPatch: `${this.baseUrl}/api/basket`,
      basketApiDelete: `${this.baseUrl}/api/remove`,
      splitApi: `${this.baseUrl}/api/split`
    };
  }
};
