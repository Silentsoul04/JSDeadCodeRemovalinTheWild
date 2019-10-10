import * as R from 'ramda';
import amplitudeClient from '../../src/amplitudeClient';
import pageAttributes from '../../src/pageAttributes';

type Dictionary<T> = { [key: string]: T };

// map from page attribute to amplitude event
const PAGE_EVENT_MAP: Dictionary<string> = {
  address_count: 'AddressCount',
  app_cta_shown: 'App_CTA_Shown',
  geo_location: 'GeoLocation',
  historical_search: 'HistoricalSearch',
  line_type: 'LineType',
  num_associated_people: 'NumAssociatedPeople',
  num_results: 'ResultCount',
  number_count: 'PhoneNumCount',
  owner_type: 'PhoneOwner',
  page_type: 'PageType',
  path_name: 'PathName',
  relatives_count: 'RelativesCount',
  referring_button: 'ReferringPage',
  result_type: 'ResultType',
  result_accuracy: 'ResultAccuracy',
  search_term: 'SEMKeyword',
  seo_test_id: 'SEOTestId',
  tenant_banner_shown: 'TenantBannerShown'
};

// map from element attribute to amplitude event
const ATTRIBUTE_EVENT_MAP: Dictionary<string> = {
  actiontype: 'ActionType',
  adtype: 'AdType',
  checkedboxes: 'CheckedBoxes',
  linktype: 'LinkType',
  offset: 'Offset',
  pathname: 'PathName',
  phonenumber: 'PhoneNumber',
  searchtype: 'SearchType',
  shortid: 'ShortID',
  step: 'Step',
  submittedurl: 'SubmittedUrl',
  toggletype: 'Toggletype',
  upselltype: 'UpsellType',
  wpid: 'WPID',
  wpuser: 'WPUser'
};

const commonKeys = (objA: object, objB: object) =>
  R.intersection(R.keys(objA), R.keys(objB));

// example: mapDataValues({ a: 'b', c: 'd' }, { c: 5, f: 7 }) => { d: 5 }
const mapDataValues = (map, data) => {
  const common = commonKeys(map, data);
  return R.zipObj(
    R.map(key => map[key], common),
    R.map(key => data[key], common)
  );
};

// page-level amplitude event attributes
const pageEventAttributes = mapDataValues(PAGE_EVENT_MAP, pageAttributes);

// amplitude events to send on click
const pageAndElementAttributes = elementAttributes =>
  R.merge(pageEventAttributes, elementAttributes);

$(() => {
  // Amplitude setup
  amplitudeClient.setup(
    pageAttributes.path_name,
    pageAttributes.original_url,
    pageAttributes.referer_domain,
    pageAttributes.referer,
    pageAttributes.page_type,
    pageAttributes.test_id,
    pageAttributes.wp_user,
    pageAttributes.user_id
  );

  amplitudeClient.updateDeviceIDCookie();

  // Fire SEM event if configured
  if (pageAttributes.sem) {
    amplitudeClient.logSEM(pageAttributes.sem);
  }

  // fire page event if configured
  if (pageAttributes.page_event) {
    amplitudeClient.log(pageAttributes.page_event, pageEventAttributes);
  }

  // setup click event handlers
  $(document).on('click', '[data-ampevent]', function() {
    // map the element's data values over the recognized event attributes
    const elementEvents = mapDataValues(ATTRIBUTE_EVENT_MAP, this.dataset);
    amplitudeClient.log(
      this.dataset.ampevent,
      pageAndElementAttributes(elementEvents)
    );
  });
});
