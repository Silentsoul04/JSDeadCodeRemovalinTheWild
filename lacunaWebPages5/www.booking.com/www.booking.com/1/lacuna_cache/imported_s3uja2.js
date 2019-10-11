// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
var _i_=this._i_||function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[28:30]", functionData => eval(functionData))},_r_=this._r_||function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[56:66]", functionData => eval(functionData))},_sp_=this._sp_||function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[94:199]", functionData => eval(functionData))};b.env.scripts_tracking.lp={loaded:1,run:0};var b=window.b||{};b.map=b.map||{},B.define("component/dropdown",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[323:1796]", functionData => eval(functionData))}),$(function(){if(_i_("b71:52718e00"),"city"!=b.env.b_action||$(".lp_sb_trigger").is("[data-tab-target]"))return _r_();$(".lp_sb_trigger").on("click",function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[1957:2035]", functionData => eval(functionData))}),_r_()}),function(a){"use strict";_i_("b71:0c71c0ed"),B.define("component/seo/more_relevant_nearby_cities",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[2158:2614]", functionData => eval(functionData))}),_r_()}(B.require("jquery")),function(){"use strict";_i_("b71:2f679b1d"),B.define("component/seo/top-accommodations",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[2747:3457]", functionData => eval(functionData))}),B.define("component/seo/top-accommodations-snap",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[3523:4857]", functionData => eval(functionData))}),_r_()}(),function(){"use strict";_i_("b71:192b450b"),B.define("component/seo/tabs-navigation",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[4968:5575]", functionData => eval(functionData))}),_r_()}(),function(){"use strict";_i_("b71:6996a028"),B.define("component/seo/target-click",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[5683:6324]", functionData => eval(functionData))}),_r_()}(),_i_("b71:9603028c"),B.define("component/multiple-states",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[6407:6950]", functionData => eval(functionData))}),B.when({events:"ready"}).run(function(e){_i_("b71:1731f73f");var t=e("jquery");t(".js-click-search").on("click",function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[7074:7129]", functionData => eval(functionData))}),_r_()}),_r_(),$(document).on("click",".js-toggle-long-text__content",function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[7210:7269]", functionData => eval(functionData))}),B.when({events:"click .lp-usp-banner__close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[7333:7444]", functionData => eval(functionData))}),_i_("b71:95cf2ddf"),B.when({action:["index"]}).run(function(e){_i_("b71:b147e0e2");var t=e("event-bus");if(!B.env.cross_product_search_overlays)return _r_();if(!t)return _r_(!1);var i=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[7641:7852]", functionData => eval(functionData))};$(".dualcal").each(function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[7882:7945]", functionData => eval(functionData))}),t.on(t.EVENTS.CALENDAR_UPDATE,function(e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[7990:8031]", functionData => eval(functionData))}),_r_()}),_r_(),b.require("jquery")(function(r){if(_i_("b71:d7b1fbb6"),"index"!=b.env.b_action)return _r_();r("#top-destinations_postcard").on("click","a.city_link",function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[8207:8611]", functionData => eval(functionData))}),_r_()}),B.require(["jquery","et","events","searchbox/destinations"],function(e,t,i,n){if(_i_("b71:497ddca4"),"index"!==B.env.b_action)return _r_();n.initEventHandlers(),_r_()}),B.define("component/tabs",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[8831:9691]", functionData => eval(functionData))}),B.when({action:"index",events:"ready"}).run(function(e){_i_("b71:01f2d0fa");var i=e("jquery");i(".js--how-works-cta").on("click",function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[9832:10028]", functionData => eval(functionData))}),_r_()}),window.addEventListener("pageshow",function(e){if(_i_("b71:2221c472"),B&&B.env&&"index"===B.env.b_action&&e.persisted){var t=document.getElementById("input_destination");t&&t.disabled&&t.removeAttribute("disabled")}_r_()},!1),B.when({action:"index",events:"ready",condition:$(".js-ge-popbox-controller").length&&!B.env.fe_show_genius_week}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[10394:10887]", functionData => eval(functionData))}),B.when({action:"index",events:"ready"}).run(function(e){_i_("b71:879df8d4");var t=e("jquery"),i=t(".ugc-pending-modal"),n="booking_hide_pending_review_modal";(function(e){_i_("b71:7a2e2469");var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return _r_(t?t[2]:null)})(n)||i.fadeIn(500),t(".ugc-pending-modal__close").on("click",function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[11233:11420]", functionData => eval(functionData))}),_r_()}),B.define("component/dismissible-item/cookie-block",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[11496:12087]", functionData => eval(functionData))}),B.define("component/async-carousel",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[12140:13412]", functionData => eval(functionData))}),B.define("watcher",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[13448:15876]", functionData => eval(functionData))}),B.define("component/bh/exposure-counter",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[15934:16869]", functionData => eval(functionData))}),B.when({action:["index","searchresults","hotel"],events:"load",condition:function(e){return _i_("b71:dd433292"),_r_(!!e.bhaw_display_survey)}}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[17030:19914]", functionData => eval(functionData))}),booking.jstmpl("m_booking_home_selected_properties_card",function(){_i_("b71:782d4d48");var d,u=["\n    ",'\n        <li class="bui-carousel__item" data-bui-ref="carousel-item">\n            <a\n                href="','bhc_from_index=1"\n                target="_blank"\n                class="bui-card bui-card--media bui-card--transparent"\n                data-et-click="customGoal:',':1"\n            >\n                <div\n                    class="bui-card__image-container c-async-carousel__photo"\n                    ','\n                    style="background-image: url(',')"\n                    ','\n                ></div>\n                <div class="bui-card__content">\n                    ',"\n                        ","\n\n\n","\n","\n\n\n\n"," \n",'\n\n<span\n    class="',"bh-quality-bars bh-quality-bars--"," ","",'"\n    ','\n    data-bui-component="Tooltip"\n    ','\n    title="',"/private/bhqc_sr_qc_desc_tooltip_affiliate/name","/private/bh_sr_quality_explanationv3/name",'\n    data-tooltip-position="bottom"\n    ','data-et-click="','"','data-et-mouseenter="',"\n>\n    ","iconset/square_rating","\n</span>\n\n","medium","\n                    ",'\n                    <h1 class="bui-card__title bh_carousel--new-title"><span>','</span></h1>\n                    <h2 class="bui-card__subtitle bui-spacer--medium">',"</h2>\n                    ",'\n                    <p class="bui_font_caption bui-spacer--medium">',"/private/bh_index_carousel_starting_from/name","</p>\n                    ","\n                    <div>\n                        ","/private/review_adj_bad/name","/private/review_adj_very_poor/name","/private/review_adj_poor/name","/private/review_adj_disappointing/name","/private/review_adj_average_passable/name","/private/review_adj_average_okay/name","/private/review_adj_pleasant/name","/private/review_adj_good/name","/private/review_adj_very_good/name","/private/review_adj_fabulous/name","/private/review_adj_superb/name","/private/review_adj_exceptional/name","/private/comp_fd_lp_header_rs/name",'<div class="','"> <div class="bui-review-score__badge" aria-label="',"/private/a11y_rating_score_for_screenreader/name",'"> '," </div> ",'<div class="bui-review-score__content"> <div class="bui-review-score__title"> ','<div class="bui-review-score__text"> ',"/private/comp_num_reviews_sr_page/name","</div> ","\n                    </div>\n                </div>\n            </a>\n        </li>\n    ","/booking-home/index","bhc_from_index_bh=1",'\n    <li class="bui-carousel__item" data-bui-ref="carousel-item">\n        <a\n            href="','"\n            class="bui-card bui-card--media bui-card--transparent bh-carousel--new__more"\n            target="_blank"\n            data-et-click="customGoal:',':2"\n        >\n            <h1 class="bh-carousel--new__more-title">',"/private/bh_index_carousel_more_homes_apartments_header/name",'</h1>\n            <button class="bui-button bui-button--secondary bh-carousel--new__more-cta" type="button">\n                <span class="bui-button__text">',"/private/bh_awareness_banner_discover_homes_cta/name","</span>\n            </button>\n        </a>\n    </li>\n"],b=["b_properties","b_query_params_delimiter","fe_bar_size","fe_custom_classes","fe_bar_level","fe_is_affiliate","fe_companyname","fe_site_type","fe_no_tooltip","fe_click_tracking","fe_mouseenter_tracking","fe_icon_size","b_companyname","b_site_info","b_site_type","fe_classes","fe_modifier_outline","fe_modifier_end","fe_modifier_inverse","fe_modifier_inline","fe_modifier_text","fe_modifier_small","fe_modifier_smaller","fe_allow_zero","fe_score","fe_show_adjective","fe_custom_adjective","fe_adjective_text","fe_adjective","fe_hide_low_adjectives","fe_can_show_adjective","fe_score_formatted","fe_reviews_number","fe_bh_carousel_show_all_url","nonsecure_hostname","b_query_params_with_lang"];return _r_(function(_){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[23816:29630]", functionData => eval(functionData))})}()),B.define("component/bh/async-carousel",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[29690:30840]", functionData => eval(functionData))}),B.define("component/surveygizmo_survey",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[30897:32433]", functionData => eval(functionData))}),booking.jstmpl("surveygizmo_survey_invite",function(){_i_("b71:787c85e0");var n=['\n    <div class="surveygizmo-survey-invite surveygizmo-survey-invite--hidden surveygizmo-survey-invite--position-','">\n        <div class="surveygizmo-survey-invite__title">','</div>\n        <div class="surveygizmo-survey-invite__description">','</div>\n        <div class="surveygizmo-survey-invite__buttons-wrapper">\n            <a class="surveygizmo-survey-invite__button js-surveygizmo-survey-cancel">\n                ',"/private/m_pod_survey_intro_no/name",'\n            </a>\n            <a class="surveygizmo-survey-invite__button surveygizmo-survey-invite__button--primary js-surveygizmo-survey-ok">\n                ',"/private/m_pod_survey_intro_yes/name","\n            </a>\n        </div>\n    </div>\n"],a=["invite_position","title","description"];return _r_(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[33307:33490]", functionData => eval(functionData))})}()),B.define("referral/raf-goal",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[33540:33671]", functionData => eval(functionData))}),B.define("referral/rap-goal",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[33717:33840]", functionData => eval(functionData))}),function(b){_i_("b71:a6bb0ba0");function h(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[33887:33959]", functionData => eval(functionData))}b.define("component/referral/copy-input",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[34015:35484]", functionData => eval(functionData))}),_r_()}(window.B),B.define("referral/clipboard",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[35548:37153]", functionData => eval(functionData))}),B.define("component/referral/share-buttons",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[37214:40463]", functionData => eval(functionData))}),B.define("component/referral/web-virality/ga",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[40526:42244]", functionData => eval(functionData))}),booking.lightbox=function(){_i_("b71:47a1a86e");var c,l,a,r,o,_,i,n=$("body"),s={bAnimation:!0,bCloseButton:!0,bMaskClick:!0,closeOnEsc:!0,customWrapperClassName:"",customMaskClassName:"",bFullscreen:!1,hideCallBack:null,hideBeforeCallBack:null,positionBeforeCallBack:null,positionAfterCallBack:null,cloneElement:!1,bCanScroll:!1,bOverflowVisible:!1,autoCenter:!0,limitHeight:!1,opacity:.5,autoWidth:!1,position:"fixed",topMargin:0,bottomMargin:0,preventBodyScroll:!1,trapFocus:!0,addDialogStartEndText:!1,modalLabeledById:""},d={},t=[],u=function(){_i_("b71:b0c0e96f");for(var e=["","moz","webkit"],t=0;t<3;t++)if(e[t]+(""===e[t]?"b":"B")+"oxSizing"in document.body.style)return _r_(!0);return _r_(!1)}(),b=!1;var h=function(i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[42974:44704]", functionData => eval(functionData))},f=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[44718:44771]", functionData => eval(functionData))},p=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[44784:45437]", functionData => eval(functionData))},m=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[45451:45508]", functionData => eval(functionData))},v=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[45521:47400]", functionData => eval(functionData))},g=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[47413:48088]", functionData => eval(functionData))};return _r_({show:function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[48121:48915]", functionData => eval(functionData))},hide:p,rePosition:f,open:function(e,t,i,n){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[48958:49017]", functionData => eval(functionData))},isVisible:function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49038:49073]", functionData => eval(functionData))},pushEscStack:function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49098:49135]", functionData => eval(functionData))},popEscStack:function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49158:49193]", functionData => eval(functionData))},hideWithFade:function(e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49220:49322]", functionData => eval(functionData))}})}(),B.define("lightbox",booking.lightbox),B.define("dismiss-item",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49405:49614]", functionData => eval(functionData))}),B.when({action:"index",events:"click #btn_deals_index_banner_close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49701:49768]", functionData => eval(functionData))}),B.when({action:"index",events:"click #raf_banner_close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49843:49902]", functionData => eval(functionData))}),B.when({action:"index",events:"click #emk_banner_index_close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[49983:50048]", functionData => eval(functionData))}),B.when({action:"index",events:"click #signin_banner_close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[50126:50188]", functionData => eval(functionData))}),B.when({action:"index",events:"click #join_index_banner_close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[50270:50336]", functionData => eval(functionData))}),B.when({action:"index",events:"click #genius_banner_index_close"}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[50420:50488]", functionData => eval(functionData))}),B.when({action:"index",condition:B.env.b_deals_index_banners}).run(function(e){_i_("b71:4279e6b0");for(var i=e("dismiss-item"),t=0;t<B.env.b_deals_index_banners.length;t++){var n=B.env.b_deals_index_banners[t].campaign_id;$("#btn_deals_index_banner_"+n+"_close").click(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[50770:50869]", functionData => eval(functionData))})}_r_()}),B.when({events:"ready"}).run(function(e){_i_("b71:736e8acc");var t=e("jquery"),i=t(".ccp__acb__rb__toggle"),n=t(".ccp__acb__rb__coupon_list");0<t(".ccp__acb__reminding_banner.ccp__acb__reminding_banner_header").length&&i.click(function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[51116:51215]", functionData => eval(functionData))}),_r_()}),B.when({experiment:"OMMKMBNFMBYDEZREaaUBfIdLHe",condition:"index"===B.env.b_action&&!B.env.b_ppc_theme&&!B.env.b_landingpage_theme&&"zh-cn"===B.env.b_locale}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[51399:55273]", functionData => eval(functionData))}),B.when({experiment:"OMMKMBNFMBYDEZREaaUBfIdLHe",condition:"index"===B.env.b_action&&!B.env.b_ppc_theme&&!B.env.b_landingpage_theme&&"zh-cn"===B.env.b_locale}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[55449:57383]", functionData => eval(functionData))}),B.when({experiment:"OMMKMBNFMBYDEZREaaUBfIdLHe",condition:"index"===B.env.b_action&&!B.env.b_ppc_theme&&!B.env.b_landingpage_theme&&"zh-cn"===B.env.b_locale}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[57559:59241]", functionData => eval(functionData))}),B.when({experiment:"OMMKMBNFMBYDEZREaaUBfIdLHe",condition:"index"===B.env.b_action&&!B.env.b_ppc_theme&&!B.env.b_landingpage_theme&&"zh-cn"===B.env.b_locale}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[59417:59502]", functionData => eval(functionData))}),B.when({events:"ready"}).run(function(a){_i_("b71:7a6a363d"),{priority:9,run:function(){_i_("b71:89d0a48b");var e=$("#survey").attr("surveyurl");if(e&&(window.b_survey_url=e,booking.env.survey_key=$("#survey").attr("surveykey"),booking.env.surveytracklink="/outgoinglink/survey/"+booking.env.survey_key),void 0!==window.b_survey_url&&window.b_survey_url){var i=$("#conf_survey,#survey,#conf_survey_bottom"),n=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[59923:60012]", functionData => eval(functionData))},t=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[60026:60472]", functionData => eval(functionData))};booking.env.showRevdSurvey2016Q1?(booking.events.on("REVIEWS:fetched",function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[60553:60599]", functionData => eval(functionData))}),i.find("button").on("click",t)):(i.fadeIn("normal",n),i.find("button").click(t))}_r_()},init:function(){if(_i_("b71:dff626a9"),this.run(),B.env.b_run_sr_ajax){var t=this;B.require(["searchresults/events"],function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[60817:60917]", functionData => eval(functionData))})}_r_()}}.init(),_r_()}),booking.jstmpl("budget_themes",function(){_i_("b71:2aaf1020");var s,c=["\n    ",'\n    <section class="budget-themes" data-ga-track="view|Hostels-CLP|Budget Themes|onView_budget_theme">\n        <div class="budget-themes__header--container">\n            ','\n                <h3 class="budget-themes__header">',"/private/hstsls_m_clp_filtered_entry_head/name",'</h3>\n                <h4 class="budget-themes__subheader">',"/private/hstsls_m_clp_filtered_entry_sub/name","</h4>\n            ",'\n                <span class="budget-themes__header">','</span> <br>\n                <span class="budget-themes__subheader">',"</span>\n            ",'\n        </div>\n        <ul class="budget-themes__list">\n            ',"\n                ",'\n    <li class="budget-themes__list--item">\n        <a target="_blank" class="budget-themes__list--item-url" data-ga-track="','" href="','">\n            <div class="budget-themes__list--content" >\n                <div class="budget-themes__list--item-emoji">\n                    ','\n                </div>\n                <div class="budget-themes__list--item-content">\n                    <span class="budget-themes__list--item-header">','</span> <br>\n                    <span class="budget-themes__list--item-subheader">','</span>\n                </div>\n                <div class="budget-themes__list--item-arrow">\n                    ',"\n                        ","iconset/navarrow_left","larger","\n                    ","iconset/navarrow_right","\n                </div>\n            </div>\n        </a>\n    </li>\n","\n",'\n                          <hr class="bui-divider" />\n                    ',"\n            ","\n        </ul>\n\n        ",'\n            <a target="_blank" class="budget-themes__search-link" href="','"> ',"/private/hstsls_m_clp_filtered_entry_view_all/name"," </a>\n        ","\n    </section>\n"],l=["fe_budget_themes_city","fe_budget_theme_data","fe_ga_tracking","fe_budget_search_url","fe_list_emoji","fe_list_item_header","fe_list_item_subheader","fe_is_rtl","fe_base_search_url"];return _r_(function(o){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[63041:64648]", functionData => eval(functionData))})}()),B.define("component/landpages/budget-themes",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[64714:67075]", functionData => eval(functionData))}),B.when({events:"ready"}).run(function(e){_i_("b71:5fa3c614");var i=e("jquery"),t=i(".featured-properties-sr_header--quick-btn-filter"),n=i(".featured-properties-sr_header--quick-btn-map"),a=document.getElementById("form_search_location"),r=i("#submit_search");if(void 0!==a&&i("<input />").attr("type","hidden").attr("name","lpsr").attr("value","1").appendTo("#form_search_location"),t.length&&n.length&&void 0!==a){t.click(function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[67511:67584]", functionData => eval(functionData))}),n.click(function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[67604:67669]", functionData => eval(functionData))})}function o(e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[67686:67825]", functionData => eval(functionData))}r.length&&t.length&&n.length&&r.click(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[67874:68052]", functionData => eval(functionData))}),_r_()}),B.when({events:"ready"}).run(function(e){_i_("b71:2ce9b458");var t=e("jquery"),i=t("[name=group_adults]");function n(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[68181:68342]", functionData => eval(functionData))}i.length&&i.click(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[68371:68443]", functionData => eval(functionData))}),_r_()}),B.define("component/landing_pages/beach/lp-accordion-switch",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[68529:69681]", functionData => eval(functionData))}),B.define("component/company/dom-utils/scroll",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[69744:70377]", functionData => eval(functionData))}),B.define("component/trip-types/show-more",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[70436:72005]", functionData => eval(functionData))}),B.when({action:["city","region"],events:"ready",condition:function(e){return _i_("b71:1074cd6b"),_r_(e.fe_should_track_bdlp)}}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[72150:72927]", functionData => eval(functionData))}),function(r){function o(e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[72956:73109]", functionData => eval(functionData))}_i_("b71:da8ddea9"),r.define("component/feedback-base",function(a,e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[73179:79008]", functionData => eval(functionData))}),o.prototype.getStorage=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79044:79179]", functionData => eval(functionData))},o.prototype.saveData=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79211:79332]", functionData => eval(functionData))},o.prototype.loadData=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79364:79481]", functionData => eval(functionData))},o.prototype.removeExpired=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79518:79698]", functionData => eval(functionData))},o.prototype.isExpired=function(e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79734:79857]", functionData => eval(functionData))},o.prototype.remove=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79888:79951]", functionData => eval(functionData))},o.prototype.set=function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[79983:80140]", functionData => eval(functionData))},o.prototype.get=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[80168:80279]", functionData => eval(functionData))},_r_()}(window.booking),function(c){_i_("b71:6bfd22f0"),c.define("component/feedback-inline",function(_,e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[80387:86921]", functionData => eval(functionData))}),_r_()}(window.booking),booking.lightbox=function(){_i_("b71:47a1a86e1");var c,l,a,r,o,_,i,n=$("body"),s={bAnimation:!0,bCloseButton:!0,bMaskClick:!0,closeOnEsc:!0,customWrapperClassName:"",customMaskClassName:"",bFullscreen:!1,hideCallBack:null,hideBeforeCallBack:null,positionBeforeCallBack:null,positionAfterCallBack:null,cloneElement:!1,bCanScroll:!1,bOverflowVisible:!1,autoCenter:!0,limitHeight:!1,opacity:.5,autoWidth:!1,position:"fixed",topMargin:0,bottomMargin:0,preventBodyScroll:!1,trapFocus:!0,addDialogStartEndText:!1,modalLabeledById:""},d={},t=[],u=function(){_i_("b71:b0c0e96f1");for(var e=["","moz","webkit"],t=0;t<3;t++)if(e[t]+(""===e[t]?"b":"B")+"oxSizing"in document.body.style)return _r_(!0);return _r_(!1)}(),b=!1;var h=function(i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[87676:89408]", functionData => eval(functionData))},f=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[89422:89476]", functionData => eval(functionData))},p=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[89489:90144]", functionData => eval(functionData))},m=function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[90158:90216]", functionData => eval(functionData))},v=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[90229:92114]", functionData => eval(functionData))},g=function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[92127:92805]", functionData => eval(functionData))};return _r_({show:function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[92838:93634]", functionData => eval(functionData))},hide:p,rePosition:f,open:function(e,t,i,n){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[93677:93737]", functionData => eval(functionData))},isVisible:function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[93758:93794]", functionData => eval(functionData))},pushEscStack:function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[93819:93857]", functionData => eval(functionData))},popEscStack:function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[93880:93916]", functionData => eval(functionData))},hideWithFade:function(e,t){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[93943:94047]", functionData => eval(functionData))}})}(),B.define("lightbox",booking.lightbox),B.require(["jquery"],function(e){_i_("b71:6fcc3aa3"),e("#yielding_free_cancellation_addon_banner").on("click",".bui-banner__close",function(){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[94232:94317]", functionData => eval(functionData))}),_r_()}),B.define("component/fragment/joinapp-retargeting",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[94392:94626]", functionData => eval(functionData))}),B.define("component/sp-banner/floating",function(e,t,i){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[94683:95232]", functionData => eval(functionData))}),B.when({events:"ready",condition:B.env.fe_track_ski_discovery}).run(function(e){lacuna_lazy_load("lacuna_cache/imported_s3uja2.js[95313:96423]", functionData => eval(functionData))}),b.env.scripts_tracking.lp.run=1;