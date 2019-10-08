// Copyright 2006-2019 ClickTale Ltd., US Patent Pending


window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};


ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function() {
    var recordingThreshold = Math.random() * 100;

    return {
        isRecordingApproved: function(percentage) {
            return recordingThreshold <= percentage;
        }
    }
})();


// Copyright 2006-2019 ClickTale Ltd., US Patent Pending
// PID: 100

var ctRules_PrePCC = {
    "rules": "id|3b101c67-d1e8-4524-8231-ecf11d216ef7|name|VE+Action+%7C+All+pages+%7C+Click+on+Creativity+&+Design|type|ClickEvent|title|Click+Event|isActive|action|MultipleAction|children|CTEventAction|eventName|VE+Action+%7C+All+pages+%7C+Click+on+Creativity+&+Design|isETR|isPII|StaticEventNameAction|VE+Action+%7C+All+pages+%7C+Click+on+Creativity+&+Design|eventId|triggers|OrCondition|childConditions|comparisonMode|Equals|ctSelector|querySelector|#Globalnav\\.Creativity_Design|alias|query-selector|ClickCondition|states|LocationCondition|url|https://www.adobe.com/|mode|StartsWith|ignoreQueryString|compositeName|54f993aa-9f54-416d-b7c6-7ff32633b70a|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav5+–+Result|Click+Event|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav5+–+Result|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav5+–+Result|.btn.merchpod-cta-button|/products/photoshop-lightroom|Contains|/creativecloud/photography.html|e8f4df58-c47c-4245-a524-1365cc44fae0|VE+Action+%7C+All+Pages+%7C+Subnav+CTA:|Click+Event|dynamicEventName|parts|TextValue|VE+Action+%7C+All+Pages+%7C+Subnav+CTA:|ElementValue|subType|AllInnerText|.Subnav-menu-button|delimiter|+|DynamicEventNameAction|VE+Action+%7C+All+Pages+%7C+Subnav+CTA:|+|6be3e3be-97fc-45e8-ba40-fa6f28994856|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav3+–+Quantity|Click+Event|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav3+–+Quantity|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav3+–+Quantity|#frequency+.js_next|d7ed79e9-bd95-4d18-af7c-1959326f287e|Onload+%7C+REquest+Demo+or+Get+Started+Form|PageEventByElement|Page+Event+By+Component|Onload+%7C+REquest+Demo+or+Get+Started+Form|Onload+%7C+REquest+Demo+or+Get+Started+Form|DelayCondition|delay|AndCondition|#amc-rfi|ExistsCondition|#faaswr|dab2cf00-3701-467b-a116-bf6a628cbd54|VE+Action+%7C+All+pages+%7C+Click+on+Global+Navigation|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+Global+Navigation|VE+Action+%7C+All+pages+%7C+Click+on+Global+Navigation|.Gnav-menu+.Gnav-menu-label|adobe.com|184b56e4-d7a6-4686-b16b-ef3de3d36d14|VE+Action+%7C+Get+Started+%7C+Click+on+any+of+the+cards|Click+Event|VE+Action+%7C+Get+Started+%7C+Click+on+any+of+the+cards|VE+Action+%7C+Get+Started+%7C+Click+on+any+of+the+cards|.tutorial-cards-container|https://helpx.adobe.com/photoshop/get-started|cf51c74c-1c0c-4761-9153-af37ed4c824b|Action+%7C+Solutions+Pages+%7C+Lower+CTAs|Click+Event|Action+%7C+Solutions+Pages+%7C+Lower+CTAs|Action+%7C+Solutions+Pages+%7C+Lower+CTAs|button[title='Download+the+report'],+button[title='Learn+more']|www.adobe.com/marketing-cloud.html|www.adobe.com/data-analytics-cloud.html|www.adobe.com/advertising-cloud.html|86f98b8c-3c8b-44f0-b759-f0215de2abda|VE+Action+%7C+Acrobat+homepage+%7C+Click+on+ADC+logo|Click+Event|VE+Action+%7C+Acrobat+homepage+%7C+Click+on+ADC+logo|VE+Action+%7C+Acrobat+homepage+%7C+Click+on+ADC+logo|.Subnav-logo|https://acrobat.adobe.com/us/en/|774a80e0-a40c-4397-a0dc-45d2bd0452ab|CEC+VE+Plans+%7C+Button+%7C+CTA+Click+(Any)|Click+Event|CEC+VE+Plans+%7C+Button+%7C+CTA+Click+(Any)|CEC+VE+Plans+%7C+Button+%7C+CTA+Click+(Any)|.btn.primary|https://www.adobe.com/creativecloud/plans.html|734c3903-68ba-4bfe-a4e3-fa7b373afab6|VE+Click+%7C+Click+on+Chat+Icon|Click+Event|@ET@VE+Click+%7C+Click+on+Chat+Icon|@ET@VE+Click+%7C+Click+on+Chat+Icon|#adbmsgCta|30e9e146-fb11-4698-b6c7-c2bc36ce0014|Action+%7C+Use-Cases+%7C+Learn+More+about+cross-channel+marketing|Click+Event|Action+%7C+Use-Cases+%7C+Learn+More+about+cross-channel+marketing|Action+%7C+Use-Cases+%7C+Learn+More+about+cross-channel+marketing|div.grid-row.grid-padded-v6x+a[href*='cross-channel-marketing']|www.adobe.com/experience-cloud/use-cases.html|88ba0caa-5047-4b04-bb59-aa6905bcb3cc|Onload+%7C+Adobe+Experience+Cloud+%7C+Request+a+demo+Form|Page+Event+By+Component|Onload+%7C+Adobe+Experience+Cloud+%7C+Request+a+demo+Form|Onload+%7C+Adobe+Experience+Cloud+%7C+Request+a+demo+Form|www.adobe.com/experience-cloud.html|8becf381-ad51-4b6c-b19f-4529dedcd839|Action+%7C+Solutions+Pages+%7C+All+Use-Cases|Click+Event|Action+%7C+Solutions+Pages+%7C+All+Use-Cases|Action+%7C+Solutions+Pages+%7C+All+Use-Cases|div.grid-row+div+a[href='/experience-cloud/use-cases.html']|477becd2-3ad9-4c0d-a53f-a4b6672f8da3|Action+%7C+Product+Pages+%7C+Download+Solution+Overview|Click+Event|Action+%7C+Product+Pages+%7C+Download+Solution+Overview|Action+%7C+Product+Pages+%7C+Download+Solution+Overview|div.grid-padded-t9x+div.text-5-block+span.text-light+a|www.adobe.com/marketing-cloud/target.html|2a22343e-d174-4bf6-b491-2a241b4b433f|Action+%7C+Solutions+Pages+%7C+Learn+More+about+Adobe+Cloud|Click+Event|Action+%7C+Solutions+Pages+%7C+Learn+More+about+Adobe+Cloud|Action+%7C+Solutions+Pages+%7C+Learn+More+about+Adobe+Cloud|div.custom-column-collapse-actions+a|EndsWith|df7563aa-e496-46e5-9c23-b5b5455015de|Action+%7C+Solutions+Pages+%7C+Need+something+more?|Click+Event|Action+%7C+Solutions+Pages+%7C+Need+something+more?|Action+%7C+Solutions+Pages+%7C+Need+something+more?|div.grid-cols-3+div.text-6-block+>+a+>+span,+div.grid-cols-3.text-start+>+div+>+a+img|32a00b01-da4c-4796-8057-6985d11b006b|Action+%7C+All+Pages+%7C+Watch+Video++-+specific+for+solutions|Click+Event|Action+%7C+All+Pages+%7C+Watch+Video|Action+%7C+All+Pages+%7C+Watch+Video|div.grid-row.grid-padded-v7x+a[href=\"#heineken\"],+div.grid-row.grid-padded-v7x+a[href=\"#starcom\"]|d357e14e-4e04-4900-869a-7e594ba9345b|VE+Action+%7C+Evidon+Banner+GDPR+-+Clicked+Accept|Click+Event|VE+Action+%7C+Evidon+Banner+GDPR+-+Clicked+Accept|VE+Action+%7C+Evidon+Banner+GDPR+-+Clicked+Accept|#_evidon-accept-button|9bd7e67a-fd1f-4529-9f8d-a50a4494c256|VE+Action+%7C+All+pages+%7C+Click+on+PDF+&+E-signatures|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+PDF+&+E-signatures|VE+Action+%7C+All+pages+%7C+Click+on+PDF+&+E-signatures|#Globalnav\\.Documents_and_E_Signatures|f6a9a508-ef43-42ce-bf5a-3ec965a63004|Action+%7C+All+Pages+%7C+Interacted+with+Form|Click+Event|Action+%7C+All+Pages+%7C+Interacted+with+Form|Action+%7C+All+Pages+%7C+Interacted+with+Form|div#faaswr+input,+#faaswr+select,+#faaswr+textarea|AllPages|c1dce533-11e0-42f1-b2ba-511699ef45fb|VE+Action+%7C+All+pages+%7C+Click+on+Support+in+gnav|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+Support+in+gnav|VE+Action+%7C+All+pages+%7C+Click+on+Support+in+gnav|.has-submenu#Globalnav\\.Support|https://www.adobe.com|8b26b33a-6234-4af3-8129-2c7d4e42124e|Action+%7C+All+Pages+%7C+Local+Navigation+click|Click+Event|Action+%7C+All+Pages+%7C+Local+Navigation+click|Action+%7C+All+Pages+%7C+Local+Navigation+click|div#AdobeSecondaryNav+ul.Subnav-menu+>+li.Subnav-menu-item+>+a|http://www.adobe.com/experience-cloud/overview.html|ef900e76-e835-46b1-944e-20ef875a8702|Action+%7C+All+Pages+%7C+Global+Navigation+Open|Click+Event|Action+%7C+All+Pages+%7C+Global+Navigation+Open|Action+%7C+All+Pages+%7C+Global+Navigation+Open|div.Gnav-menu-content+ul.Gnav-menu+>+li+>+a|ec6a169d-9d98-4818-80cd-6df04db2f61f|VE+Action+%7C+All+Pages+%7C+Contact+Us+New|Click+Event|VE+Action+%7C+All+Pages+%7C+Contact+Us+New|VE+Action+%7C+All+Pages+%7C+Contact+Us+New|button[title=\"Contact+us\"],+.contact-pod-cta-button,+a[title=\"Contact+us\"],+button.merchpod-cta-button[title='Get+in+touch']|07a3428e-3687-4974-97ee-f6954fa42faf|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+any+Buy+Now|Click+Event|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+any+Buy+Now|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+any+Buy+Now|.ui-button|https://www.adobe.com/products/illustrator/plans.html?promoid=W2T7JZH2&mv=other|0c7e134b-1fa2-498a-8aa4-69cfc8dcd75c|VE+Action+%7C+Need+Analyzer+%7C+Click+Los+geht's!|Click+Event|VE+Action+%7C+Need+Analyzer+%7C+Click+Los+geht's!|VE+Action+%7C+Need+Analyzer+%7C+Click+Los+geht's!|.btn|value|Los+geht's!|https://www.adobe.com/de/creativecloud/photography.html|74c5a82d-942d-48f9-b8d7-b015701ee20e|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Find+Out+more+-+Shared+Device|Click+Event|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Find+Out+more+-+Shared+Device|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Find+Out+more+-+Shared+Device|.learnLink|excludeTagNames|https://www.adobe.com/uk/creativecloud/plans.html|14ad71dd-0beb-4220-8b79-530b16e5dd5d|Onload+%7C+Request+Demo+Form|Page+Event+By+Component|Onload+%7C+Request+Demo+Form|Onload+%7C+Request+Demo+Form|https://www.adobe.com/industries/retail.html|.dummy2|32be1a8b-ec53-467a-86f9-44ec2b42f888|VE+Action+%7C+Need+Analyzer+%7C+Let's+Go|Click+Event|@ET@VE+Action+%7C+Need+Analyzer+%7C+Let's+Go|@ET@VE+Action+%7C+Need+Analyzer+%7C+Let's+Go|btn.js_start.js_next+js_history.merchpod-cta-button|f3ab778a-f1f5-41b0-a835-97ac503c61cd|VE+CEC+Action+%7C+Experience+Makers+%7C+Top+Brand+Case+Studies|Click+Event|VE+CEC+Action+%7C+Experience+Makers+%7C+Top+Brand+Case+Studies|VE+CEC+Action+%7C+Experience+Makers+%7C+Top+Brand+Case+Studies|.grid-padded-v9x+.grid-offset-2+img:not([src=\"https://wwwimages2.adobe.com/content/dam/acom/en/enterprise/experience-business/54658.en.ent.exb.feature.carnival-thumb-wh.330x200.png\"])|.grid-padded-v9x+.grid-offset-2+.text-light|www.adobe.com/enterprise/experience-makers.html|a3697e4b-53ae-4f39-9b4e-2a16f32be766|Action+%7C+Product+Pages+%7C+Integrate+with+Experience+Cloud|Click+Event|Action+%7C+Product+Pages+%7C+Integrate+with+Experience+Cloud|Action+%7C+Product+Pages+%7C+Integrate+with+Experience+Cloud|.flex-grid.solutions-list.big-icons+a|www.adobe.com/marketing-cloud/primetime.html|cce9cb44-19ed-4d54-ab02-b56c57db7f80|Onload+%7C+Use+Cases|PageLoadEvent|Page+Event|Onload+%7C+Use+Cases|Onload+%7C+Use+Cases|PageLoadCondition|dbb660b3-08b1-42a6-9fb2-a268caa0ac8d|VE+Onload+%7C+CC+Plans+Page|Page+Event|VE+Onload+%7C+CC+Plans+Page|VE+Onload+%7C+CC+Plans+Page|/creativecloud/plans.html?|ff2b2641-3fb8-401c-b97d-0549a772fa4f|Action+%7C+Product+Pages+%7C+Learn+More+Links|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|div.text-6-block+a[href='/data-analytics-cloud/analytics/analysis-workspace.html'],++div.feature+ul+li+div.feature-box-content+a|www.adobe.com/data-analytics-cloud/|www.adobe.com/marketing-cloud/|www.adobe.com/advertising-cloud/|www.adobe.com/experience-cloud/products.html|042e431c-eec2-471d-af3b-cf132e5a1b2d|VE+Onload+%7C+Contact+Us+3.0+Self+Help+Modal|Page+Event+By+Component|VE+Onload+%7C+Contact+Us+3.0+Self+Help+Modal|VE+Onload+%7C+Contact+Us+3.0+Self+Help+Modal|https://helpx.adobe.com/contact/support.html|.select-solve|UrlHashExistsCondition|solve-anchor|4371980b-d6e0-4acb-a502-af33bf0d72d7|Action+%7C+Contact+Us+or+Request+Demo+Form+%7C+Submit+Form|Click+Event|Action+%7C+Contact+Us+or+Request+Demo+Form+%7C+Submit+Form|Action+%7C+Contact+Us+or+Request+Demo+Form+%7C+Submit+Form|div#faaswr+input[type='submit']|https://www.adobe.com/industries/high-tech.html|7131fe3b-7dd3-4b49-981d-181c949b86ee|Action+%7C+Search+Results+Page+%7C+Product+Query+modal+box+%7C+Click+Download|Click+Event|Action+%7C+Search+Results+Page+%7C+Product+Query+modal+box+%7C+Click+Download|Action+%7C+Search+Results+Page+%7C+Product+Query+modal+box+%7C+Click+Download|div.product-download-link|https://helpx.adobe.com/search.html#q=|b18b574f-b2c9-4c41-8d6c-8a112c12f47f|CEC+VE+%7C+Plans+%7C+Tabs+Click|Click+Event|CEC+VE+%7C+Plans+%7C+Tabs+Click|CEC+VE+%7C+Plans+%7C+Tabs+Click|.tabs-labels|8f36beaf-26c1-486e-ac07-b52ce9d1faae|Action+%7C+Product+Catalog+%7C+click+on+main+CTA|Click+Event|Action+%7C+Product+Catalog+%7C+click+on+main+CTA|Action+%7C+Product+Catalog+%7C+click+on+main+CTA|[cardtype]+ul+[target=\"_self\"]|products/catalog.html|6db559de-26a7-42ae-a588-4c3e9859e220|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+Photography|Click+Event|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+Photography|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+Photography|[data-join-link=\"\\/join\\/photography\"]|be7382fe-5345-4aef-bfde-67bab0aa9d30|Action+%7C+Experience+Landing+Page+%7C+Clicked+Learn+More|Click+Event|Action+%7C+Experience+Landing+Page+%7C+Clicked+Learn+More|Action+%7C+Experience+Landing+Page+%7C+Clicked+Learn+More|nav.list+a.cta|.links.cta|section.grid-container+div.grid-offset-2.text-center.grid-padded-t6x+div.grid-cols-4.text-start+a|www.adobe.com/experience-cloud/overview.html|50f2f195-9dc6-47f4-8db9-f3267c76d4a6|Action+%7C+All+Pages%7C+Footer+Click|Click+Event|Action+%7C+All+Pages%7C+Footer+Click|Action+%7C+All+Pages%7C+Footer+Click|footer#AdobeFooterNav+a|5de7eb97-e86e-4fc8-a143-7057d049d2d2|VE+Action+%7C+APAC0109+ANZ++Plans+page+%7C+Click+comp+chart+modal|Click+Event|VE+Action+%7C+APAC0109+ANZ++Plans+page+%7C+Click+comp+chart+modal|VE+Action+%7C+APAC0109+ANZ++Plans+page+%7C+Click+comp+chart+modal|#lr-modal-trigger|https://www.adobe.com/au/creativecloud/plans.html|d5fed0a7-77d3-4cd0-8262-3d820a5dba5b|Onload+%7C+Experience+Landing+Page+%7C+Control|Page+Event|Onload+%7C+Experience+Landing+Page+%7C+Control|Onload+%7C+Experience+Landing+Page+%7C+Control|6a348613-7002-4310-86ac-5cfa8bcf985f|Action+%7C+All+Products+Page+%7C+Select+solution|Click+Event|Action+%7C+All+Products+Page+%7C+Select+solution|Action+%7C+All+Products+Page+%7C+Select+solution|section.grid-container.colCtrlLightGrayCool+a|4a7fe56f-5451-47d8-8407-afd36fed9b82|VE+Action+%7C+Acrobat+Family+Page+%7C+Click+on+anything+on+page|Click+Event|VE+Action+%7C+Acrobat+Family+Page+%7C+Click+on+anything+on+page|VE+Action+%7C+Acrobat+Family+Page+%7C+Click+on+anything+on+page|.Lobby|3fec2ba3-d044-47c8-ad63-08d990317280|Action+%7C+Solutions+Pages+%7C+Clickable+Product+Links|Click+Event|Action+%7C+Solutions+Pages+%7C+Clickable+Product+Links|Action+%7C+Solutions+Pages+%7C+Clickable+Product+Links|.at-element-marker+.grid-row+.text-light|[alt=\"Cross-channel\\,+End-to-End\"],[alt=\"Audience+at+the+Core\"],.at-element-marker+.text-start:nth-of-type(1)+div:nth-child(3)+.text-light,.at-element-marker+.text-start:nth-of-type(2)+div:nth-child(3)+.text-light,.at-element-marker+.text-start:nth-of-type(3)+div:nth-child(3)+.text-light,.text-start:nth-of-type(4)+div:nth-child(3)+.text-light,.text-start:nth-of-type(1)+div:nth-child(4)+.text-light,.text-start:nth-of-type(2)+div:nth-child(4)+.text-light,.text-start:nth-of-type(3)+div:nth-child(4)+.text-light,.text-start:nth-of-type(4)+div:nth-child(4)+.text-light,[alt=\"Performance+without+Compromise\"],[alt=\"Data-driven+Creative\"]|cloud|48528f1f-0dbe-407c-ad91-902696802598|Action+%7C+All+Pages+%7C+Button+Click+Abonnieren+-+Footer|Click+Event|Action+%7C+All+Pages+%7C+Button+Click+Abonnieren+-+Footer|Action+%7C+All+Pages+%7C+Button+Click+Abonnieren+-+Footer|.merchpod-cta-button[title=\"Abonnieren\"]|https://www.adobe.com/de/creativecloud/business/teams.html|6dacd7cd-153d-4a09-ae13-dc155b529237|VE+Action+%7C+Plans+Page+%7C+Click+on+Schools+and+Universities+Tab|Click+Event|VE+Action+%7C+Plans+Page+%7C+Click+on+Schools+and+Universities+Tab|VE+Action+%7C+Plans+Page+%7C+Click+on+Schools+and+Universities+Tab|#universityplan_label|5f6022dd-10e9-4e73-b77e-4b4f321ddf82|VE+Action+%7C+Subnav+CTA+Click+(for+all+languages+and+texts)|Click+Event|VE+Action+%7C+Subnav+CTA+Click+(for+all+languages+and+texts)|VE+Action+%7C+Subnav+CTA+Click+(for+all+languages+and+texts)|ee4a7b51-8490-4ab4-b47e-d5c12fbd008d|Action+%7C+Industries+Pages+%7C+Content+Click|Click+Event|Action+%7C+Industries+Pages+%7C+Content+Click|Action+%7C+Industries+Pages+%7C+Content+Click|section.grid-container+a|www.adobe.com/industries/|a7094f41-080e-4d4d-bf1d-9b066408c9c0|Action+%7C+Product+Pages+%7C+Button+Click|Click+Event|Action+%7C+Product+Pages+%7C+Button+Click|Action+%7C+Product+Pages+%7C+Button+Click|button.merchpod-cta-button|a5e49e8e-3695-4df9-9f94-661aca5362a4|VE+Action+%7C+Help+Pages+%7C+Click+'No'+page+wasn't+helpful|Click+Event|VE+Action+%7C+Help+Pages+%7C+Click+'No'+page+wasn't+helpful|VE+Action+%7C+Help+Pages+%7C+Click+'No'+page+wasn't+helpful|#no-container|https://helpx.adobe.com/|cde45fd4-f59d-42ef-8777-f6f814df4be4|Action+%7C+Product+Pages+%7C+Capabilities|Click+Event|Action+%7C+Product+Pages+%7C+Capabilities|Action+%7C+Product+Pages+%7C+Capabilities|div.grid-container.tabs+a,+div.grid-container.tabs+label|58ade3c9-525e-45ee-ad18-79dcd1122d55|Action+%7C+Article+3+%7C+Click+on+User+Guide+Breadcrumb|Click+Event|Action+%7C+Article+3+%7C+Click+on+User+Guide+Breadcrumb|Action+%7C+Article+3+%7C+Click+on+User+Guide+Breadcrumb|a.breadcrumb-ug-link|https://helpx.adobe.com/photoshop/using/|3bd9ea21-15e0-4be8-a08f-bac63f5b047c|Action+%7C+Product+Pages+%7C+Use+Cases|Click+Event|Action+%7C+Product+Pages+%7C+Use+Cases|Action+%7C+Product+Pages+%7C+Use+Cases|section.grid-container+div.grid-row.grid-padded-b9x+div.grid-cols-4+>+div+>+a+img,+section.grid-container+div.grid-row.grid-padded-b9x+div.grid-cols-4+div.text-5-block+a,+button[title='See+all+use+cases']|www.adobe.com/marketing-cloud/campaign.html|www.adobe.com/marketing-cloud/experience-manager.html|www.adobe.com/data-analytics-cloud/audience-manager.html|www.adobe.com/data-analytics-cloud/analytics.html|76305895-767b-4fcc-9439-5ccc3c271b88|VE+Action+%7C+CC+Overview+%7C+Click+on+See+all+plans+and+pricing|Click+Event|VE+Action+%7C+CC+Overview+%7C+Click+on+See+all+plans+and+pricing|VE+Action+%7C+CC+Overview+%7C+Click+on+See+all+plans+and+pricing|.no-top-padding+.merchpod-cta-button|/creativecloud.html|0520ca88-d755-4437-b492-854dc20fe0a0|Action+%7C+Adobe+Experience+Cloud+%7C+Click+any+Request+Demo|Click+Event|Action+%7C+Adobe+Experience+Cloud+%7C+Click+any+Request+Demo|Action+%7C+Adobe+Experience+Cloud+%7C+Click+any+Request+Demo|.grid-padded-t2x+.merchpod-cta-button+,+.anchornav-button|cc6b7928-9327-4900-a8e7-e13f85b42858|VE+Action+%7C+All+pages+%7C+Click+on+Search+icon|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+Search+icon|VE+Action+%7C+All+pages+%7C+Click+on+Search+icon|.Gnav-action-search|.adobe.com/|3f87e4bb-f772-4ca1-89fc-5e58d56f74da|VE+Action+%7C+Click+abonnieren+in+sub+nav|Click+Event|VE+Action+%7C+Click+abonnieren+in+sub+nav|VE+Action+%7C+Click+abonnieren+in+sub+nav|df6bfe4d-fc10-454c-b97e-5f38c5d8cf76|Action+%7C+Product+Pages+%7C+Success+Stories+-+specific+for+social+and+media|Click+Event|Action+%7C+Product+Pages+%7C+Success+Stories|Action+%7C+Product+Pages+%7C+Success+Stories|div.grid-span-1of3+a|www.adobe.com/advertising-cloud/media-optimizer.html|www.adobe.com/marketing-cloud/social.html|0367ab23-ad05-491e-a4bd-012c57cbd0e4|Action+%7C+Use-Cases+%7C+Learn+More+about+programmatic+advertising|Click+Event|Action+%7C+Use-Cases+%7C+Learn+More+about+programmatic+advertising|Action+%7C+Use-Cases+%7C+Learn+More+about+programmatic+advertising|div.grid-row.grid-padded-v6x+a[href*='programmatic-advertising']|de96df89-a18a-4fb5-b509-f9a9c0e992b6|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+in+page+Request+Demo|Click+Event|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+in+page+Request+Demo|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+in+page+Request+Demo|.grid-padded-t2x+.merchpod-cta-button|https://www.adobe.com/experience-cloud.html|46d6f550-92cd-400c-a349-eb86feafbc44|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Annual|Click+Event|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Annual|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Annual|#annual-commit|24733a35-771c-494a-9807-dc684bfe6e79|VE+Action+%7C+Plans+page+%7C+Students+and+teachers+%7C+Click+Buy+Now|Click+Event|VE+Action+%7C+Plans+page+%7C+Students+and+teachers+%7C+Click+Buy+Now|InnerText|.edu_tab_content+.plan_title|VE+Action+%7C+Plans+page+%7C+Students+and+teachers+%7C+Click+Buy+Now|.edu_tab_content+.plan_title|.edu_tab_content+.btn|https://www.adobe.com/creativecloud/plans.html?|697f69dc-58a3-401d-8c26-4b8daa41e86f|VE+Action+%7C+Acrobat+Global+Nav+%7C+Click+on+Learn+&+Support|Click+Event|VE+Action+%7C+Acrobat+Global+Nav+%7C+Click+on+Learn+&+Support|VE+Action+%7C+Acrobat+Global+Nav+%7C+Click+on+Learn+&+Support|.dc-link%2B+.dc-link+a|https://acrobat.adobe.com/us/en/acrobat.html|8950cfd4-2fc8-49e2-84bc-01b79bb5e290|Onload+%7C+Referrer+%7C+Demdex|Page+Event+By+Component|Onload+%7C+Referrer+%7C+Demdex|Onload+%7C+Referrer+%7C+Demdex|somesortofelement|04d01e0d-28f2-46c8-a4d6-e40bc080e7c4|VE+Onload+%7C+Plans+Page+%7C+Error|Page+Event+By+Component|VE+Onload+%7C+Plans+Page+%7C+Error+-|+|VE+Onload+%7C+Plans+Page+%7C+Error+-|+|/creativecloud/plans.htm|NotCondition|condition|.error.hiddenDefault|dc4693ae-5990-433b-a18c-9b4fa86cd62b|Action+%7C+Use-Cases+%7C+Learn+More+about+mobile+marketing|Click+Event|Action+%7C+Use-Cases+%7C+Learn+More+about+mobile+marketing|Action+%7C+Use-Cases+%7C+Learn+More+about+mobile+marketing|div.grid-row.grid-padded-v6x+a[href*='mobile-marketing']|8e4e144c-4a91-426e-afa7-5f53d1e8897d|Action+%7C+All+Pages+%7C+Request+Demo|Click+Event|Action+%7C+All+Pages+%7C+Request+Demo|Action+%7C+All+Pages+%7C+Request+Demo|a[title='Request+demo'],+a[title='Request+a+demo'],+button[title='Request+a+demo']|http://www.adobe.com/experience-cloud.html|d7e45862-3043-4fea-8178-1511a9715926|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Monthly|Click+Event|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Monthly|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Monthly|#monthly-commit|75568817-e29a-4c29-a8a4-1f49a86efb15|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Request+a+Consultation|Click+Event|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Request+a+Consultation|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Request+a+Consultation|[href=\"\\/uk\\/solutions\\/request-consultation\\/education\\.html\"]|6d7a03f6-627c-4f74-8a17-669bfdf92df8|VE+Action+%7C+All+pages+%7C+Click+on+Marketing+&+Analytics|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+Marketing+&+Analytics|VE+Action+%7C+All+pages+%7C+Click+on+Marketing+&+Analytics|#Globalnav\\.Marketing_Analytics|92298572-0070-4f2c-8dd1-479bce9e7166|Action+%7C+Experience+Landing+Page+%7C+Microsoft+Adobe+Partnership|Click+Event|Action+%7C+Experience+Landing+Page+%7C+Microsoft+Adobe+Partnership|Action+%7C+Experience+Landing+Page+%7C+Microsoft+Adobe+Partnership|section.grid-container+.text-6-block+>+a[href='/enterprise/microsoft-partnership.html']|e5bb31e5-a864-4518-b914-970774eff1a3|Onload+%7C+Product+Pages:+[specific]|Page+Event|Onload+%7C+Product+Pages:|div.Subnav-logo+span.Subnav-logo-text|+|Onload+%7C+Product+Pages:|div.Subnav-logo+span.Subnav-logo-text|+|6f1db586-9492-47ec-88db-bb19e16ab2d7|Action+%7C+Solutions+Pages+%7C+All+Customer+Stories|Click+Event|Action+%7C+Solutions+Pages+%7C+All+Customer+Stories|Action+%7C+Solutions+Pages+%7C+All+Customer+Stories|a[href='/customershowcase.html']+span|6fae8257-0ce2-4d72-915e-9b850faf54cd|Onload+%7C+Search+Results+Page+%7C+Product+Query+modal+box|Page+Event+By+Component|Onload+%7C+Search+Results+Page+%7C+Product+Query+modal+box|p.product-title|%7C|Onload+%7C+Search+Results+Page+%7C+Product+Query+modal+box|%7C|div.CoveoTriggers|355af239-f065-4e6a-b021-84e3439e206e|VE+Onload+%7C+Adobe+Experience+Cloud+%7C+Sub+Nav+CTA:|Page+Event+By+Component|VE+Onload+%7C+Adobe+Experience+Cloud+%7C+Sub+Nav+CTA:|+|VE+Onload+%7C+Adobe+Experience+Cloud+%7C+Sub+Nav+CTA:|+|-cloud|79508f50-e003-45ca-92bc-416d5b56cb78|VE+Action+%7C+Plans+Page+%7C+Student+plans+%7C+Click+Buy+Now|Click+Event|VE+Action+%7C+Plans+Page+%7C+Student+plans+%7C+Click+Buy+Now|VE+Action+%7C+Plans+Page+%7C+Student+plans+%7C+Click+Buy+Now|.edu_tab_content+.btn|.adobe.com/plans?|3e48fd94-bc08-4db7-b31f-1542c04ac339|Action+%7C+All+Pages+%7C+Watch+Video|Click+Event|Action+%7C+All+Pages+%7C+Watch+Video|Action+%7C+All+Pages+%7C+Watch+Video|figure.hero2.hero2-theme-1+div.hero2-button+a,+a.globalPlayButton,+button[title='Watch+now'],+a[href*='video'],+nav.list+a.button|https://www.adobe.com/marketing-cloud/target.html|d1619c74-5022-41a5-8c3c-c06107b36a1c|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+any+'Choose+a+plan'|Click+Event|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+any+'Choose+a+plan'|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+any+'Choose+a+plan'|a[title=\"Choose+a+plan\"]|www.adobe.com/creativecloud.html|b8b82bc5-c28b-469d-b061-37a3904f3300|VE+Action+%7C+XD+Starter+page+%7C+Click+any+Get+XD+for+Free+(all+languages)|Click+Event|VE+Action+%7C+XD+Starter+page+%7C+Click+any+Get+XD+for+Free+(all+languages)|VE+Action+%7C+XD+Starter+page+%7C+Click+any+Get+XD+for+Free+(all+languages)|.merchpod-cta-button|/products/xd.html|84456aa9-931f-4793-bfdd-cbc578206b75|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Select+Your+Plans|Click+Event|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Select+Your+Plans|VE+Action+%7C+Plans+Page+%7C+Schools+and+Universities%7C+Select+Your+Plans|.step_one_content+.parbase:nth-of-type(1)+.btn|2faac785-c28c-4491-86c7-c5fdc11769ea|Action+%7C+Contact+Us+or+Request+Demo+Form+%7C+Close+Form|Click+Event|Action+%7C+Contact+Us+or+Request+Demo+Form+%7C+Close+Form|Action+%7C+Contact+Us+or+Request+Demo+Form+%7C+Close+Form|div.faasform.form+i.adobe-icon-darkcircle-close|6207f2e5-2c68-43d4-b0ae-77085c2f8c00|VE+Action+%7C+Plans+page+%7C+Schools+and+Universities+%7C+Click|Click+Event|VE+Action+%7C+Plans+page+%7C+Schools+and+Universities+%7C+Click|TriggeredElementValue|VE+Action+%7C+Plans+page+%7C+Schools+and+Universities+%7C+Click|.step_one_content+.step_one_plans+.btn|https://www.adobe.com/creativecloud/plans.html?sin|0ebee248-b820-4e07-85fd-5eac22985dfb|Action+%7C+Solutions+Pages+%7C+See+What+you+Can+Do|Click+Event|Action+%7C+Solutions+Pages+%7C+See+What+you+Can+Do|Action+%7C+Solutions+Pages+%7C+See+What+you+Can+Do|div.grid-span-1of5.text-start+a|830005bf-a0ff-4271-aa99-0cc91cb680ed|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav4+–+Features|Click+Event|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav4+–+Features|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav4+–+Features|[data-i18n=\"go-to-result\"]|206a7dad-d41f-4b68-b984-85099327465d|Action+%7C+Product+Pages+%7C+Use+Cases++-+specific+for+3+pages|Click+Event|Action+%7C+Product+Pages+%7C+Use+Cases|Action+%7C+Product+Pages+%7C+Use+Cases|div.grid-row.grid-padded-b9x+a+img,+div.grid-row.grid-padded-b9x+.text-5-block+span+a|8b36a403-aa28-4143-8c29-e1113dc89b6b|VE+Onload+%7C+Plans+Page+%7C+Choose+Plans+Error|Click+Event|VE+Onload+%7C+Plans+Page+%7C+Click+on+CTA:|+|VE+Onload+%7C+Plans+Page+%7C+Click+on+CTA:|+|#COM_multiApp_btn[data-country-specific=\"0\"]|/creativecloud/plans.html|e164711c-64a9-499c-a1a2-26f502998789|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav1+–+Level|Click+Event|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav1+–+Level|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav1+–+Level|#editing+.js_next|b492dee0-d443-461f-9c10-233af27bd5b1|Action+%7C+Experience+Landing+Page+%7C+View+All+Industries|Click+Event|Action+%7C+Experience+Landing+Page+%7C+View+All+Industries|Action+%7C+Experience+Landing+Page+%7C+View+All+Industries|button[title='View+all+industries']|25cf8b9c-aee6-461c-b8ec-0346cac8fbfe|Action+%7C+CC+Catalog+Page+%7C+Click+on+blue+bar+Choose+a+Plan|Click+Event|Action+%7C+CC+Catalog+Page+%7C+Click+on+blue+bar+Choose+a+Plan|Action+%7C+CC+Catalog+Page+%7C+Click+on+blue+bar+Choose+a+Plan|a.promo-cta.button|www.adobe.com/creativecloud/catalog/desktop.html|5ba9cd27-f033-4637-af69-89dce293fbaf|VE+Action+%7C+AEC+new+section+form+%7C+Click+Submit|Click+Event|VE+Action+%7C+AEC+new+section+form+%7C+Click+Submit|VE+Action+%7C+AEC+new+section+form+%7C+Click+Submit|#Form40_submit|request-consultation/|12a28213-2f38-4134-992d-f3c39d285298|Action+%7C+CC+Catalog+Page+%7C+Click+on+any+Download+or+Lean+more|Click+Event|Action+%7C+CC+Catalog+Page+%7C+Click+on+any+Download+or+Lean+more|Action+%7C+CC+Catalog+Page+%7C+Click+on+any+Download+or+Lean+more|a.button.catalog-download|https://www.adobe.com/creativecloud/catalog/desktop.html|07d71f5a-d15f-41b0-9013-91488c7eae20|VE+Action+%7C+New+Chat|Click+Event|@ET@VE+Action+%7C+New+Chat|@ET@VE+Action+%7C+New+Chat|[aria-label=\"Get+started\"]|bc6b8881-5ea1-4162-ab37-4c0958403644|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+Single+App|Click+Event|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+Single+App|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+Single+App|[data-card-id=\"individualCards_singleapp\"]+#COM_multiApp_btn|7c8071ed-e2bb-430a-8bb7-62f7978a3ae0|VE+Action+%7C+All+Pages+%7C+Click+any+Abonnieren|Click+Event|VE+Action+%7C+All+Pages+%7C+Click+any+Abonnieren|VE+Action+%7C+All+Pages+%7C+Click+any+Abonnieren|.promo-cta.button|cda26fa6-37b3-49b9-ae9d-a922f9b40424|Onload+%7C+Solutions+Page|Page+Event|Onload+%7C+Solutions+Page|Onload+%7C+Solutions+Page|aabf7243-6e8c-426f-8be6-16a2ef905d7a|VE+Onload+%7C+EC+Form+Thank+you+page|Page+Event|@ET@VE+Onload+%7C+EC+Form+Thank+you+page|@ET@VE+Onload+%7C+EC+Form+Thank+you+page|/products/request-consultation/thankyou.html|cabc854b-1292-4c35-80b8-87cf4a43bb8d|VE+Action+%7C+All+pages+%7C+Click+Search+icon+in+nav|Click+Event|VE+Action+%7C+All+pages+%7C+Click+Search+icon+in+nav|VE+Action+%7C+All+pages+%7C+Click+Search+icon+in+nav|.SAYT-action-close|www.adobe|d9b34d2c-28ca-44f4-9ab5-b9bde9aec6a0|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+Form+Submit|Click+Event|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+Form+Submit|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+Form+Submit|2d6defa3-30b3-447f-b60c-ce452946d63b|Onload+%7C+Browser:+FF38|Page+Event+By+Component|Onload+%7C+Browser:+FF38|Onload+%7C+Browser:+FF38|.placeholderforbroswerevent|f9b66c91-263f-4476-b640-4a399e272a01|Action+%7C+Experience+Landing+Page+%7C+Adobe+IO+Learn+More|Click+Event|Action+%7C+Experience+Landing+Page+%7C+Adobe+IO+Learn+More|Action+%7C+Experience+Landing+Page+%7C+Adobe+IO+Learn+More|div.grid-cols-10+div.text-6-block+a[href='/enterprise/cloud-platform.html']|63c8817f-79ec-4a91-ad23-1ef56da83b95|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+All+Apps+%2B+Adobe+Stock|Click+Event|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+All+Apps+%2B+Adobe+Stock|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+All+Apps+%2B+Adobe+Stock|#COM_CCSN_STKS_btn|c2dc9008-ef52-41d9-94c6-881d11f93717|Action+%7C+Product+Pages+%7C+Learn+More+Links+-+specifc+for+4+pages|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|.marquee-content+div.text-5-block+span.text-light+>+a,+span.text-light+a[href%5E='/experience-cloud/use-cases/advertising-optimization.html'],+div.text-6-block+a[href%5E='https://wwwimages2.adobe.com/content/dam/Adobe/en/customer-success/pdfs/']|div.text-6-block+a[href='http://www.adobetargetpro.com/'],+span.text-light+a[href='http://navigator.adobe-target.com/']|1efb4c5c-07eb-4a6c-96b1-de13eb4095b6|VE+Action+%7C+Help+Pages+%7C+Click+'Yes'+page+was+helpful|Click+Event|VE+Action+%7C+Help+Pages+%7C+Click+'Yes'+page+was+helpful|VE+Action+%7C+Help+Pages+%7C+Click+'Yes'+page+was+helpful|#yes-container|2417e86a-1b37-4587-85f1-92b97ae05f5a|Action+%7C+Product+Pages+%7C+Success+Stories+-+specific+products|Click+Event|Action+%7C+Product+Pages+%7C+Success+Stories|Action+%7C+Product+Pages+%7C+Success+Stories|.grid-row.grid-padded-b9x+div.grid-cols-4+div.text-6-block+>+span.text-light+>+a[target='_blank'],+.grid-row.grid-padded-b9x+div.grid-cols-4+div.text-6-block+>+span.text-light+>+a[target='modal-frame']|ce86a65f-960b-49ef-9a51-3b1513295b1a|Onload+%7C+Solution+Page+-+Advertising+Cloud|Page+Event|Onload+%7C+Solution+Page+-+Advertising+Cloud|Onload+%7C+Solution+Page+-+Advertising+Cloud|c96cee1e-68e1-4781-8261-b138bd8f51b3|Action+%7C+All+Pages+%7C+Sign+In|Click+Event|Action+%7C+All+Pages+%7C+Sign+In|Action+%7C+All+Pages+%7C+Sign+In|a[title='Sign+In'],+a[title='Sign+in']|afa2f14d-47a8-49fa-b6b2-eead7e2c027d|VE+Action+%7C+Choose+Plans+error|Click+Event|VE+Action+%7C+Choose+Plans+error|[data-default-product-code]+.error|VE+Action+%7C+Choose+Plans+error|[data-default-product-code]+.error|41598960-8cea-4017-88b1-fc7cf15cf9dc|VE+Action+%7C+All+Pages+%7C+Click+on+Phone+Number|Click+Event|VE+Action+%7C+All+Pages+%7C+Click+on+Phone+Number|VE+Action+%7C+All+Pages+%7C+Click+on+Phone+Number|.contact-pod-phone-item|.contact-pod-phone-item-label|60a62005-faf0-4e10-86e7-739fe0361670|CEC+VE+%7C+Homepage+%7C+CTA+Button+%7C|Click+Event|CEC+VE+%7C+Homepage+%7C+CTA+Button+%7C|CEC+VE+%7C+Homepage+%7C+CTA+Button+%7C|.ctas|5013dd93-40ff-45d3-8488-b91744151ffd|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav2+–+Location|Click+Event|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav2+–+Location|VE+Action+%7C+Need+Analyzer+%7C+Pna-nav2+–+Location|#mobility+.js_next|products/photoshop-lightroom|f47ad119-1761-457d-9cbb-9eff77e8dce1|VE+Action+%7C+Plans+Page+%7C+Individual+plans+%7C+Click+Buy+Now|Click+Event|VE+Action+%7C+Plans+Page+%7C+Individual+plans+%7C+Click+Buy+Now|VE+Action+%7C+Plans+Page+%7C+Individual+plans+%7C+Click+Buy+Now|.individual_plans+.plans_list+.btn|adobe.com/plans?|ddd1b112-1614-471e-938d-49d99b08a26d|Action+%7C+Solutions+Pages+%7C+Use-Cases|Click+Event|Action+%7C+Solutions+Pages+%7C+Use-Cases|Action+%7C+Solutions+Pages+%7C+Use-Cases|section.grid-container+div.text-start+div.text-5-block+span.text-light+a,+div.grid-row+div+a[href='/experience-cloud/use-cases.html']|e75134af-2209-446c-a5a4-73cb2bfeb333|Action+%7C+All+Pages+%7C+Global+Navigation+Choose+Option|Click+Event|Action+%7C+All+Pages+%7C+Global+Navigation+Choose+Option|Action+%7C+All+Pages+%7C+Global+Navigation+Choose+Option|div.Gnav-menu-content+ul.Gnav-menu++.Gnav-submenu-item+a|f6460011-9dfb-4cf3-93a6-b9a6d5775891|Action+%7C+Solutions+Pages+%7C+Customer+Stories|Click+Event|Action+%7C+Solutions+Pages+%7C+Customer+Stories|Action+%7C+Solutions+Pages+%7C+Customer+Stories|div.grid-row.grid-padded-v7x+a+span,+a[href=\"/customershowcase.html\"],+img[title='Time+Warner+Cable'],+img[title='Lenovo'],+img[title='Hyatt'],+div.grid-span-1of2.text-start+a|bc753654-1ba8-4864-ab1a-bc05f0d17f7d|Onload+%7C+Contact+Us+or+Request+a+Demo+%7C+Error|Page+Event+By+Component|Onload+%7C+Contact+Us+or+Request+a+Demo+%7C+Error|Onload+%7C+Contact+Us+or+Request+a+Demo+%7C+Error|0393ed2c-c202-4593-80bf-49db8372c7ee|VE+Onload+%7C+Evidon+Banner+GDPR|Page+Event+By+Component|VE+Onload+%7C+Evidon+Banner+GDPR|VE+Onload+%7C+Evidon+Banner+GDPR|.evidon-banner-title|8ffc39e9-73f0-47ab-a7e9-9a34f2c7b63e|VE+Action+%7C+Plans+Page+%7C+Click+on+Students+and+Teachers+Tab|Click+Event|VE+Action+%7C+Plans+Page+%7C+Click+on+Students+and+Teachers+Tab|VE+Action+%7C+Plans+Page+%7C+Click+on+Students+and+Teachers+Tab|#studentsplan_label|6bf49664-1386-493f-be33-fc6b8f567462|VE+CEC+%7C+Experience+Makers+%7C+Contact+Us+CTA|Click+Event|VE+CEC+%7C+Experience+Makers+%7C+Contact+Us+CTA|VE+CEC+%7C+Experience+Makers+%7C+Contact+Us+CTA|5b6a2bfb-a089-47f9-815e-caeca8c1efe0|VE+Action+%7C+Plans+page+%7C+Business+plans+%7C+Click+Select+Your+Plans|Click+Event|VE+Action+%7C+Plans+page+%7C+Business+plans+%7C+Click+Select+Your+Plans|VE+Action+%7C+Plans+page+%7C+Business+plans+%7C+Click+Select+Your+Plans|[title=\"SELECT+YOUR+PLANS\"]|07de3235-41a8-4a96-b849-939fdb086fed|Onload+%7C+All+Pages+%7C+Authenticated|Page+Event+By+Component|Onload+%7C+All+Pages+%7C+Authenticated|Onload+%7C+All+Pages+%7C+Authenticated|div.Profile|9a67f0a8-1d1a-4a7b-9ea5-a3edd407c90c|Action+%7C+Product+Pages+%7C+Learn+More+CTA|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+CTA|Action+%7C+Product+Pages+%7C+Learn+More+CTA|button.merchpod-cta-button[title='Learn+more']|7818aa0a-6764-4106-a154-af23927cb214|Onload+%7C+Adobe+Experience+Cloud+%7C+Main+page|Page+Event|Onload+%7C+Adobe+Experience+Cloud+%7C+Main+page|Onload+%7C+Adobe+Experience+Cloud+%7C+Main+page|ef36c09d-e9eb-47bc-88e5-6610dd9169e1|Action+%7C+All+Pages+%7C+Button+Click+[specific]|Click+Event|Action+%7C+All+Pages+%7C+Button+Click|Action+%7C+All+Pages+%7C+Button+Click|.button|http://www.adobe.com/experience-cloud/overview.html?adobe_mc_ref=http%253A%252F%252Fsubs20.app.clicktale.com%252FVisualEditor%252F100|9ca25731-70ec-4e5f-be9d-67fbbe9b3bd1|Action+%7C+Experience+Landing+Page+%7C+Examine+Industries|Click+Event|Action+%7C+Experience+Landing+Page+%7C+Examine+Industries|Action+%7C+Experience+Landing+Page+%7C+Examine+Industries|div.grid-span-1of3+div.text-6-block+a+span.text-light,+div.grid-span-1of3+a+>+img|e6ee3789-2cb8-45a8-94f2-f38f9e4a8b47|Action+%7C+All+Pages+%7C+Watch+Video+-+specific+for+/marketing-cloud/campaign|Click+Event|Action+%7C+All+Pages+%7C+Watch+Video|Action+%7C+All+Pages+%7C+Watch+Video|div.grid-padded-b9x+div.text-6-block+a|45ec073b-d788-42d2-9c9f-808b5b615b33|Action+%7C+Product+Pages+%7C+Success+Stories+-+4+specific|Click+Event|Action+%7C+Product+Pages+%7C+Success+Stories|Action+%7C+Product+Pages+%7C+Success+Stories|section.grid-container.at-element-marker.colCtrlMobileBlack+a,+div.grid-row.grid-padded-b9x+div.text-6-block+a,++div.grid-cols-12.grid-offset-2+div.text-6-block+>+a,++div.grid-row.grid-padded-b8x+a|7e97d1b1-ac5f-410d-965f-4bbcb6231dfa|Action+%7C+All+Pages+%7C+Watch+Video+-+specific+for+healthcare|Click+Event|Action+%7C+All+Pages+%7C+Watch+Video|Action+%7C+All+Pages+%7C+Watch+Video|div.grid-row+.text-6-block+a[href='#kaiser']|www.adobe.com/industries/healthcare.html|c62efc86-1b99-4c03-9226-f6f610c2250f|VE+Action+%7C+Plans+Page+%7C+Business+plans+%7C+Click+Buy+Now|Click+Event|VE+Action+%7C+Plans+Page+%7C+Business+plans+%7C+Click+Buy+Now|VE+Action+%7C+Plans+Page+%7C+Business+plans+%7C+Click+Buy+Now|.plan_team+.btn|5ecf8a11-0d19-4728-bb7e-6a3fa9d5f9a0|Action+%7C+Product+Pages+%7C+Learn+More+Links+-+specific+for+audience+manager|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|.grid-row.grid-padded-v9x+div.text-6-block+a|df00a2ea-2393-4b33-8fb0-bab18746f3f8|VE+Action+%7C+Plans+Page+%7C+Students+and+Teachers%7C+Buy+Now|Click+Event|VE+Action+%7C+Plans+Page+%7C+Students+and+Teachers%7C+Buy+Now|VE+Action+%7C+Plans+Page+%7C+Students+and+Teachers%7C+Buy+Now|#EDU_CCSN_btn|427b4278-455e-43ec-b1c6-63ed85447f77|Onload+%7C+Experience+Landing+Page+%7C+Test|Page+Event|Onload+%7C+Experience+Landing+Page|Onload+%7C+Experience+Landing+Page|b7a072ec-d085-4be4-9ae7-b909f9cf5150|CEC+VE+Plans+%7C+Button+Click+%7C|Click+Event|CEC+VE+Plans+%7C+Button+Click+%7C|Attribute|CEC+VE+Plans+%7C+Button+Click+%7C|0c09b8c9-b742-4e2c-9009-5237991ba0b2|Onload+%7C+Industry+Pages|Page+Event|Onload+%7C+Industry+Pages|Onload+%7C+Industry+Pages|5cbf3e52-376e-4219-b616-7b130336efba|VE+Action+%7C+Plans+Page+%7C+Click+on+Learn+More+About+Creative+Cloud|Click+Event|VE+Action+%7C+Plans+Page+%7C+Click+on+Learn+More+About+Creative+Cloud|VE+Action+%7C+Plans+Page+%7C+Click+on+Learn+More+About+Creative+Cloud|[href=\"\\/uk\\/creativecloud\\.html\"]|53b3b38e-0f30-43ce-8e3d-1651851b4f8a|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+blue+bar+'Choose+a+plan'|Click+Event|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+blue+bar+'Choose+a+plan'|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+blue+bar+'Choose+a+plan'|span.promo-button|.promo-cta|https://www.adobe.com/creativecloud.html|ab967f2c-ab25-4eef-896f-0768b63c476b|VE+Action+%7C+All+pages+%7C+Click+on+Business+Solutions|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+Business+Solutions|VE+Action+%7C+All+pages+%7C+Click+on+Business+Solutions|#Globalnav\\.Business_Solutions|ef94dca1-d6e7-4ccd-86c8-467738223fd4|VE+Onload+%7C+Advertising+Cloud+Consultation+Form|Page+Event|@ET@VE+Onload+%7C+Advertising+Cloud+Consultation+Form|@ET@VE+Onload+%7C+Advertising+Cloud+Consultation+Form|/request-consultation/advertising-cloud.html|9fc36171-9274-41cd-868c-e6cb92deea11|Action+%7C+Use-Cases+%7C+Learn+More+about+data-driven+marketing|Click+Event|Action+%7C+Use-Cases+%7C+Learn+More+about+data-driven+marketing|Action+%7C+Use-Cases+%7C+Learn+More+about+data-driven+marketing|div.grid-row.grid-padded-v6x+a[href*='data-driven-marketing']|10bc8627-5240-4df3-93ad-c9294a160062|VE+Action+%7C+Photoshop+learn+&+support+%7C+click+on+accordian+title+selected|Click+Event|VE+Action+%7C+Photoshop+learn+&+support+%7C+click+on|VE+Action+%7C+Photoshop+learn+&+support+%7C+click+on|.accordian-title|https://helpx.adobe.com/support/photoshop.html|998fa0bc-50d3-4ff1-a5c0-61029d7a5d94|VE+Action+%7C+Help+Product+Hub+%7C+Click+on+mnemonic+logo|Click+Event|VE+Action+%7C+Help+Product+Hub+%7C+Click+on+mnemonic+logo|VE+Action+%7C+Help+Product+Hub+%7C+Click+on+mnemonic+logo|https://helpx.adobe.com/support/|3d6c4f16-5e16-4c7f-a6b9-3d60985f0871|Action+%7C+Product+Pages+%7C+Learn+More+Links+-+specific+for+social|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|.marquee-textbox+.marquee-content+a,+div.text-6-block+a[href%5E='http://wwwimages.adobe.com/']|82c1ad7a-d169-4c9d-bbd9-21154e5c0178|VE+Action+%7C+CC+Product+Pages+%7C+Click+on+promo+CTA:|Click+Event|VE+Action+%7C+CC+Product+Pages+%7C+Click+on+promo+CTA:|+|VE+Action+%7C+CC+Product+Pages+%7C+Click+on+promo+CTA:|+|/products/|79e1a31b-4045-4657-a9b4-7ad730c07fcd|VE+Action+%7C+Plans+Page+%7C+Schools+plans+%7C+Click+Buy+Now|Click+Event|VE+Action+%7C+Plans+Page+%7C+Schools+plans+%7C+Click+Buy+Now|VE+Action+%7C+Plans+Page+%7C+Schools+plans+%7C+Click+Buy+Now|.plan_team_edu+.btn|ca1d2932-4bc2-4f06-883c-f4945561701a|Action+%7C+Product+Pages+%7C+Learn+More+Links+-+specific+for+2+similar+pages|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|div.grid-cols-10+span.text-light+a,+div.grid-cols-10+a+>span.text-light,+div.marquee-content+a>+span.text-light|0d12d9c7-2522-4a90-b04f-a19b4ecec850|Onload+%7C+Solution+Page+-+Analytics+Cloud|Page+Event|Onload+%7C+Solution+Page+-+Analytics+Cloud|Onload+%7C+Solution+Page+-+Analytics+Cloud|ae65cd32-c9b7-4af4-a691-c81a3fe9b506|Onload+%7C+Solution+Page+-+Marketing+Cloud|Page+Event|Onload+%7C+Solution+Page+-+Marketing+Cloud|Onload+%7C+Solution+Page+-+Marketing+Cloud|bfd8547a-7ed1-4fb4-849a-b2be4fda4424|VE+Action+%7C+Plans+Page+%7C+Click+on+Business+Tab|Click+Event|VE+Action+%7C+Plans+Page+%7C+Click+on+Business+Tab|VE+Action+%7C+Plans+Page+%7C+Click+on+Business+Tab|#businessplan_label|34bc5f37-9eef-41bd-a0d3-c869cf78ec5a|Action+%7C+All+Products+Page+%7C+Select+Product|Click+Event|Action+%7C+All+Products+Page+%7C+Select+Product|Action+%7C+All+Products+Page+%7C+Select+Product|ul.flex-grid.solutions-list.big-icons+a|c847d8ec-33c0-4954-b3da-d12a1c09ebeb|Action+%7C+Search+Results+Page+%7C+Product+Query+modal+box+%7C+Click+on+one+of+the+product+links|Click+Event|Action+%7C+Search+Results+Page+%7C+Product+Query+modal+box+%7C+Click+on+one+of+the+product+links|Action+%7C+Search+Results+Page+%7C+Product+Query+modal+box+%7C+Click+on+one+of+the+product+links|span.product-link|68c3bc84-02c4-4be7-8688-f40c7f050aba|VE+Action+%7C+Plans+Page+%7C+Click+on+Photography+Choose+a+Plan|Click+Event|VE+Action+%7C+Plans+Page+%7C+Click+on+Photography+Choose+a+Plan|VE+Action+%7C+Plans+Page+%7C+Click+on+Photography+Choose+a+Plan|[data-default-product-code=\"PHLT\"]+.plan_options+.multi_app|0963ce8f-60da-49b2-9560-df2aed2ca286|Onload+%7C+Demo+Success|Page+Event|Onload+%7C+Demo+Success|Onload+%7C+Demo+Success|www.adobe.com/products/request-consultation/thankyou.html|b978aca6-49a7-45a8-a628-f4eec55f96d5|Action+%7C+Use-Cases+%7C+Learn+More+about+customer+experience|Click+Event|Action+%7C+Use-Cases+%7C+Learn+More+about+customer+experience|Action+%7C+Use-Cases+%7C+Learn+More+about+customer+experience|div.grid-row.grid-padded-v6x+a[href*='customer-experience']|704928e1-b990-49df-ac32-de68884d7261|Action+%7C+Product+Pages+%7C+Get+Started|Click+Event|Action+%7C+Product+Pages+%7C+Get+Started|Action+%7C+Product+Pages+%7C+Get+Started|button.merchpod-cta-button[title='Get+started']|22c182d7-e574-496a-8ddd-e877be845668|Action+%7C+Product+Pages+%7C+Learn+More+Links+-+specific+for+product+list|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|section.grid-container.colCtrlLightGrayCool+a,.text-6-block+span.text-light+a[href%5E='http://wwwimages.adobe.com/content/dam/Adobe/en/customer-success/pdfs/']|09baf75f-b7df-46b3-a1d1-65a3bfa15b44|Action+%7C+Experience+Landing+Page+%7C+Examine+other+Clouds|Click+Event|Action+%7C+Experience+Landing+Page+%7C+Examine+other+Clouds|Action+%7C+Experience+Landing+Page+%7C+Examine+other+Clouds|section.grid-container+div.grid-row.grid-padded-v9x+.text-start+a|4705c3d6-83b4-4356-a43e-3f60f686634f|Onload+%7C+Experience+League+Landing+Page+-+March+2018|Page+Event+By+Component|Onload+%7C+Experience+League+Landing+Page+-+March+2018|Onload+%7C+Experience+League+Landing+Page+-+March+2018|https://landing.adobe.com/experience-league/|#resources+.row|6109e8fe-ca5b-4989-8ebd-7af32f81fac0|VE+Action+%7C+Contact+us+%7C+Click+on+start+chat|Click+Event|VE+Action+%7C+Contact+us+%7C+Click+on+start+chat|VE+Action+%7C+Contact+us+%7C+Click+on+start+chat|#startChat|helpx.adobe.com/contact|cde0393a-1d1a-4112-ba6a-1608f93f5b0d|Action+%7C+All+Pages+%7C+Contact+Us|Click+Event|Action+%7C+All+Pages+%7C+Contact+Us|Action+%7C+All+Pages+%7C+Contact+Us|button[title=\"Contact+us\"],+.contact-pod-cta-button,+a[title=\"Contact+us\"],+button.merchpod-cta-button[title='Get+in+touch']|0ae228cd-0d53-4e8c-85f2-64ee25952d4b|VE+Action+%7C+Help+Product+Hub+%7C+Click+on+Buy+Now+or+Download|Click+Event|VE+Action+%7C+Help+Product+Hub+%7C+Click+on|+|VE+Action+%7C+Help+Product+Hub+%7C+Click+on|+|8d1dda57-19b0-490b-8b4d-28eef32b5f4e|Action+%7C+Article+3+%7C+Click+on+related+article+list+Drop+down|Page+Event+By+Component|Action+%7C+Article+3+%7C+Click+on+related+article+list+Drop+down|Action+%7C+Article+3+%7C+Click+on+related+article+list+Drop+down|ul.article-list-container|a1464c66-19bf-448d-962f-76266c4e7363|Action+%7C+Product+Pages+%7C+Success+Stories+-+specific+for+audience+manager|Click+Event|Action+%7C+Product+Pages+%7C+Success+Stories|Action+%7C+Product+Pages+%7C+Success+Stories|div.grid-row.grid-padded-v6x+a|a5e662e9-c342-47fc-991d-3495f77f8f69|VE+Onload+%7C+Plans+Page+%7C+Error+-+Please+choose+a+Plan|Page+Event+By+Component|VE+Onload+%7C+Plans+Page+%7C+Error+-+Please+choose+a+Plan|VE+Onload+%7C+Plans+Page+%7C+Error+-+Please+choose+a+Plan|.error:not(.hiddenDefault)|7b0a659d-ff4e-4064-9756-3b7f9dc63095|VE+Onload+%7C+Experience+Cloud+Consultation+Form|Page+Event|@ET@VE+Onload+%7C+Experience+Cloud+Consultation+Form|@ET@VE+Onload+%7C+Experience+Cloud+Consultation+Form|/request-consultation/experience-cloud.html|86e57f0c-c4a2-4d64-a583-8ee2426170fb|Action+%7C+Product+Pages+%7C+Learn+More+Links+-+specific+for+campaign|Click+Event|Action+%7C+Product+Pages+%7C+Learn+More+Links|Action+%7C+Product+Pages+%7C+Learn+More+Links|div.grid-padded-v2x+div.grid-cols-16+.text-light+a,+.grid-container+.text-start+a|d7d57b6c-3220-4c0b-b01b-b90619b27a57|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+All+Apps|Click+Event|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+All+Apps|VE+Action+%7C+Plans+Page+%7C+Individuals+%7C+Buy+Now+All+Apps|#COM_CCSN_btn|97270851-2fdf-459d-9c37-7463dee06b01|VE+Action+%7C+Plans+Page+%7C+Business%7C+Select+Your+Plans|Click+Event|VE+Action+%7C+Plans+Page+%7C+Business%7C+Select+Your+Plans|VE+Action+%7C+Plans+Page+%7C+Business%7C+Select+Your+Plans|[title=\"SELECT+YOUR+PLANS\"]|b16f7d8a-639d-4e34-937d-4fd7a0d51845|Action+%7C+Experience+Landing+Page+%7C+Adobe+IO|Click+Event|Action+%7C+Experience+Landing+Page+%7C+Adobe+IO|Action+%7C+Experience+Landing+Page+%7C+Adobe+IO|a[href='https://www.adobe.io/']|97935105-5b1e-491e-9271-9cd5c77c4f18|VE+Action+%7C+All+pages+%7C+Click+on+CTA:|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+CTA:|a[class*=\"merchpod-cta-button\"]|+|VE+Action+%7C+All+pages+%7C+Click+on+CTA:|+|991f2377-6e4f-4999-9a97-3522c0ed3e4f|VE+CEC+%7C+Plans+%7C+CTA+-|Click+Event|VE+CEC+%7C+Plans+%7C+CTA+-|VE+CEC+%7C+Plans+%7C+CTA+-|aeccec45-679c-4a9e-b7a0-3baf3592c138|VE+Action+%7C+Global+Nav+%7C+Click+on+Learn+and+Support|Click+Event|VE+Action+%7C+Global+Nav+%7C+Click+on+Learn+and+Support|VE+Action+%7C+Global+Nav+%7C+Click+on+Learn+and+Support|a[href*=helpx]|https://www.adobe.com/products/|adf4e80a-7a7d-440a-9962-8eeb17bddcd0|Onload+%7C+Product+Pages|Page+Event|Onload+%7C+Product+Pages|Onload+%7C+Product+Pages|660950ac-d192-4017-a35b-74bdc9caadbb|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Pre+paid+switch|Click+Event|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Paid-Pre+paid+switch|Action+%7C+Illustrator+CCM+0374+Var+1+%7C+Click+on+Paid-Pre+paid+switch|#puf-switcher-btn|2facb392-3ed0-4f6e-8c8d-11e241bbdf9f|VE+CEC+Creative+Cloud+Home+%7C+watch+video|Click+Event|VE+CEC+Creative+Cloud+Home+%7C+watch+video|VE+CEC+Creative+Cloud+Home+%7C+watch+video|.hero2-featuredVideo-video|66973d33-d059-4fbd-85a7-5ff78356f4d7|VE+Action+%7C+Plans+page+%7C+individual+plans+%7C+Click+Buy+Now|Click+Event|VE+Action+%7C+Plans+page+%7C+individual+plans+%7C+Click+Buy+Now|.individual_plans+.plans_list+.plan_title|+|VE+Action+%7C+Plans+page+%7C+individual+plans+%7C+Click+Buy+Now|.individual_plans+.plans_list+.plan_title|+|.individual_plans+.plans_list+.btn|c6a1d7c5-825d-4a5c-81d8-aad59d33b5dc|VE+Action+%7C+All+pages+%7C+Click+on+Sign+In|Click+Event|VE+Action+%7C+All+pages+%7C+Click+on+Sign+In|VE+Action+%7C+All+pages+%7C+Click+on+Sign+In|.Gnav-action-login|adobe.com/|fa5be036-3262-4a39-a897-1b6f8ae47d89|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+top+nav+'Choose+a+plan'|Click+Event|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+top+nav+'Choose+a+plan'|VE+Action+%7C+Creative+Cloud+Homepage+%7C+Click+on+top+nav+'Choose+a+plan'|.Subnav-menu-button.fadeIn|265b5b7f-cf8c-4bb4-b790-7567badfb0e4|Onload+%7C+Product+Pages:+All+Products|Page+Event|Onload+%7C+Product+Pages:+All+Products|Onload+%7C+Product+Pages:+All+Products|964a8c25-1c7c-435c-89ec-957efcfeee6d|Action+%7C+All+Pages+%7C+Local+Navigation+clicked+[specific]|Click+Event|Action+%7C+All+Pages+%7C+Local+Navigation+clicked|Action+%7C+All+Pages+%7C+Local+Navigation+clicked|div#AdobeSecondaryNav+ul.Subnav-menu+>+li.Subnav-menu-item+>+a|504459a4-0a98-474b-8510-ab8f1af0ae56|VE+Action+%7C+Plans+Page+%7C+Click+on+Individuals+Tab|Click+Event|VE+Action+%7C+Plans+Page+%7C+Click+on+Individuals+Tab|VE+Action+%7C+Plans+Page+%7C+Click+on+Individuals+Tab|#individualplan_label|f69976ae-2ebf-48e4-b641-ffb55de9e07c|Onload+%7C+Contact+Us+Form|Page+Event+By+Component|Onload+%7C+Contact+Us+Form|Onload+%7C+Contact+Us+Form|.dummy|f737ec8f-395f-48fe-9660-60b76aa94b22|VE+Action+%7C+AEC+new+section+form+%7C+Interacted+with+form+fields|Click+Event|VE+Action+%7C+AEC+new+section+form+%7C+Interacted+with+form+fields|VE+Action+%7C+AEC+new+section+form+%7C+Interacted+with+form+fields|#Form40_11,#Form40_1,#Form40_26,#Form40_51,#Form40_20,#Form40_19,#Form40_9,#Form40_8,#Form40_10,#Form40_15,#Form40_14|/request-consultation/|11e3c221-233c-4db1-a13f-aadcd6c7fc78|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+top+nav+Request+Demo|Click+Event|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+top+nav+Request+Demo|Action+%7C+Adobe+Experience+Cloud+%7C+Click+on+top+nav+Request+Demo|a.anchornav-button|cbaa60c6-221d-4d2c-9b72-df67d08a5191|VE+Action+%7C+Get+Started+%7C+Click+on+Download|Click+Event|VE+Action+%7C+Get+Started+%7C+Click+on+Download|VE+Action+%7C+Get+Started+%7C+Click+on+Download|.button-container+.button|196d926d-e296-4ace-a543-4326a00d4549|Action+%7C+All+Pages+%7C+Request+Demo+-+target+specific|Click+Event|Action+%7C+All+Pages+%7C+Request+Demo|Action+%7C+All+Pages+%7C+Request+Demo|div.text-6-block+a[href='#amc-rfi']|bb57c031-9270-44a8-8c51-f57fa3056f33|Econsultancy+Form+Page|Page+Event|@ET@Econsultancy+Form+Page|@ET@Econsultancy+Form+Page|/modal-offers/econsultancy_digital_trends_2019_report.html^L02|NLC|AA4|NLA|9L5|0|2PS|2Q1|30O|2Q2|6IQ|OQK|348|2PN|0|301|33X|316|315|2ZF|DWK|L04|37C|L06|2YE|2YC|328|2Q4|9VR|12Y7|35C|0|PNO|6N1|33W|2YY|DWL|318|2PV|0|34E|2P9|6IR|2PQ|12Y0|2ZS|2YB|6XE|30H|33Z|5F0|649|9ML|12XY|E70|34D|33O|CAJ|33N|2PH|33H|AKD|2PK|2UL|9MN|33P|34A|2Q6|2PZ|2PX|2PD|3JZ|0|72R|0|349|2X6|2P8|12Y8|L03|30L|2YX|302|2PL|0|A08|0|2PC|2ZF|2P6|E85|12Y6|34F|2PG|314|NLB|33H|72W|NNC|2ZR|2P7|I4L|2Q3|UVX|12Y1|9MM|2YI|LSW|I4N|2PR|3JW|0|30K|12Y3|318|CAI|33P|2YJ|2YH|78X|3HM|6IM|NL9|2PM|300|2YD|30M|35D|0|DUT|0|12XX|6N0|2PU|313|RS|317|2PP|2ZX|30I|2ZF|33P|2ZF|2Q5|318|12Y5|2X5|6IP|2YZ|12XZ|2Q8|L05|VC0|345|2PT|44K|318|AA5|2PI|318|2YL|2YK|12XW|33Y|2PW|72S|2Z1|346|33R|318|30G|BV4|1JK|2PJ|2YA|44L|2PA|0|33P|72T|RS|VBZ|318|12Y2|12Y4|30J|AA6|4D7|2PB|2YM|2PF|6IN|2PE|2UM|2Q7|35I|2YF|72P|35B|0|I4M|2PO|2PY|2X6|TTL^^@$0|1|2|3|4|5|6|7|8|-1|9|$4|A|B|@$4|C|D|E|F|-2|G|-2]|$4|H|D|I|F|-2|G|-2|J|ZJ]]]|K|$4|L|M|@$N|O|P|$Q|R]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|10|11|-1]]]|12|-5]|$0|13|2|14|4|5|6|15|8|-1|9|$4|A|B|@$4|C|D|16|F|-2|G|-2]|$4|H|D|17|F|-2|G|-2|J|ZK]]]|K|$4|L|M|@$N|O|P|$Q|18]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|19|Z|1A|11|-1]|$4|W|X|1B|Z|1A|11|-1]]]|12|-5]|$0|1C|2|1D|4|5|6|1E|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|1I]|$4|1J|1K|1L|P|$Q|1M]]]|1N|1O]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|1Q]|$4|1J|1K|1L|P|$Q|1M]]]|1N|1R]|J|ZL]]]|K|$4|L|M|@$N|O|P|$Q|1M]|1K|1L|2|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|10|11|-1]]]|12|-5]|$0|1S|2|1T|4|5|6|1U|8|-1|9|$4|A|B|@$4|C|D|1V|F|-2|G|-2]|$4|H|D|1W|F|-2|G|-2|J|ZM]]]|K|$4|L|M|@$N|O|P|$Q|1X]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|19|Z|1A|11|-1]|$4|W|X|1B|Z|1A|11|-1]]]|12|-5]|$0|1Y|2|1Z|4|20|6|21|8|-1|9|$4|A|B|@$4|C|D|22]|$4|H|D|23|J|ZN]]]|K|$4|24|25|ZO]|V|$4|26|M|@$4|L|M|@$4|W|X|27|Z|1A|11|-1]]]|$4|26|M|@$N|O|4|28|S|T|1K|-4|P|$Q|29]]]]]]|12|-5]|$0|2A|2|2B|4|5|6|2C|8|-1|9|$4|A|B|@$4|C|D|2D]|$4|H|D|2E|J|ZP]]]|K|$4|L|M|@$4|U|P|$Q|2F]|S|T]]]|V|$4|W|X|2G|Z|1A|11|-1]|12|-5]|$0|2H|2|2I|4|5|6|2J|8|-1|9|$4|A|B|@$4|C|D|2K]|$4|H|D|2L|J|ZQ]]]|K|$4|L|M|@$4|U|P|$Q|2M]|S|T]]]|V|$4|W|X|2N|Z|10|11|-1]|12|-5]|$0|2O|2|2P|4|5|6|2Q|8|-1|9|$4|A|B|@$4|C|D|2R]|$4|H|D|2S|J|ZR]]]|K|$4|L|M|@$4|U|P|$Q|2T]|S|T]]]|V|$4|L|M|@$4|W|X|2U|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]|$4|W|X|2W|Z|1A|11|-1]]]|12|-5]|$0|2X|2|2Y|4|5|6|2Z|8|-1|9|$4|A|B|@$4|C|D|30]|$4|H|D|31|J|ZS]]]|K|$4|L|M|@$4|U|P|$Q|32]|S|T]]]|V|$4|W|X|33|Z|10|11|-1]|12|-5]|$0|34|2|35|4|5|6|36|8|-1|9|$4|A|B|@$4|C|D|37]|$4|H|D|38|J|ZT]]]|K|$4|L|M|@$P|$Q|39]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|3A|Z|O|11|-1]]]|12|-5]|$0|3B|2|3C|4|5|6|3D|8|-1|9|$4|A|B|@$4|C|D|3E|F|-1|G|-2]|$4|H|D|3F|F|-1|G|-2|J|ZU]]]|K|$4|L|M|@$N|O|P|$Q|3G]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|2G|Z|1A|11|-1]]]|12|-5]|$0|3H|2|3I|4|5|6|3J|8|-1|9|$4|A|B|@$4|C|D|3K]|$4|H|D|3L|J|ZV]]]|K|$4|L|M|@$4|U|P|$Q|3M]|S|T]]]|V|$4|L|M|@$4|W|X|3N|Z|1A|11|-1]]]|12|-5]|$0|3O|2|3P|4|20|6|3Q|8|-1|9|$4|A|B|@$4|C|D|3R]|$4|H|D|3S|J|ZW]]]|K|$4|24|25|ZX]|V|$4|26|M|@$4|L|M|@$4|W|X|3T|Z|1A|11|-1]]]|$4|26|M|@$4|28|P|$Q|27]|S|T]]]]]|12|-5]|$0|3U|2|3V|4|5|6|3W|8|-1|9|$4|A|B|@$4|C|D|3X]|$4|H|D|3Y|J|ZY]]]|K|$4|L|M|@$4|U|P|$Q|3Z]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]]]|12|-5]|$0|40|2|41|4|5|6|42|8|-1|9|$4|A|B|@$4|C|D|43]|$4|H|D|44|J|ZZ]]]|K|$4|L|M|@$4|U|P|$Q|45]|S|T]]]|V|$4|L|M|@$4|W|X|46|Z|1A|11|-1]]]|12|-5]|$0|47|2|48|4|5|6|49|8|-1|9|$4|A|B|@$4|C|D|4A]|$4|H|D|4B|J|100]]]|K|$4|L|M|@$4|U|P|$Q|4C]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|4D|11|-1]|$4|W|X|2V|Z|4D|11|-1]|$4|W|X|2U|Z|4D|11|-1]]]|12|-5]|$0|4E|2|4F|4|5|6|4G|8|-1|9|$4|A|B|@$4|C|D|4H]|$4|H|D|4I|J|101]]]|K|$4|L|M|@$4|U|P|$Q|4J]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]]]|12|-5]|$0|4K|2|4L|4|5|6|4M|8|-1|9|$4|A|B|@$4|C|D|4N]|$4|H|D|4O|J|102]]]|K|$4|L|M|@$4|U|P|$Q|4P]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]]]|12|-5]|$0|4Q|2|4R|4|5|6|4S|8|-1|9|$4|A|B|@$4|C|D|4T]|$4|H|D|4U|J|103]]]|K|$4|L|M|@$N|O|P|$Q|4V]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|2G|Z|1A|11|-1]]]|12|-5]|$0|4W|2|4X|4|5|6|4Y|8|-1|9|$4|A|B|@$4|C|D|4Z|F|-2|G|-2]|$4|H|D|50|F|-2|G|-2|J|104]]]|K|$4|L|M|@$N|O|P|$Q|51]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|10|11|-1]]]|12|-5]|$0|52|2|53|4|5|6|54|8|-1|9|$4|A|B|@$4|C|D|55]|$4|H|D|56|J|105]]]|K|$4|L|M|@$4|U|P|$Q|57]|S|T]]]|V|$4|L|M|@$4|W|X|-4|Z|58|11|-1]]]|12|-5]|$0|59|2|5A|4|5|6|5B|8|-1|9|$4|A|B|@$4|C|D|5C|F|-2|G|-2]|$4|H|D|5D|F|-2|G|-2|J|106]]]|K|$4|L|M|@$N|O|P|$Q|5E]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|5F|Z|10|11|-1]]]|12|-5]|$0|5G|2|5H|4|5|6|5I|8|-1|9|$4|A|B|@$4|C|D|5J]|$4|H|D|5K|J|107]]]|K|$4|L|M|@$4|U|P|$Q|5L]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|5N|2|5O|4|5|6|5P|8|-1|9|$4|A|B|@$4|C|D|5Q]|$4|H|D|5R|J|108]]]|K|$4|L|M|@$4|U|P|$Q|5S]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|5T|2|5U|4|5|6|5V|8|-1|9|$4|A|B|@$4|C|D|5W]|$4|H|D|5X|J|109]]]|K|$4|L|M|@$4|U|P|$Q|5Y]|S|T]]]|V|$4|L|M|@$4|W|X|-4|Z|58|11|-1]]]|12|-5]|$0|5Z|2|60|4|5|6|61|8|-1|9|$4|A|B|@$4|C|D|62]|$4|H|D|63|J|10A]]]|K|$4|L|M|@$4|U|P|$Q|64]|S|T]]]|V|$4|W|X|65|Z|10|11|-1]|12|-5]|$0|66|2|67|4|5|6|68|8|-1|9|$4|A|B|@$4|C|D|69]|$4|H|D|6A|J|10B]]]|K|$4|L|M|@$N|O|P|$Q|6B]|1K|1L|2|-4|6C|6D|S|T|4|U]]]|V|$4|L|M|@$4|W|X|6E|Z|58|11|-1]]]|12|-5]|$0|6F|2|6G|4|5|6|6H|8|-1|9|$4|A|B|@$4|C|D|6I|F|-2|G|-2]|$4|H|D|6J|F|-2|G|-2|J|10C]]]|K|$4|L|M|@$4|U|P|$Q|6K]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|6N|2|6O|4|20|6|6P|8|-1|9|$4|A|B|@$4|C|D|6Q]|$4|H|D|6R|J|10D]]]|K|$4|24|25|10E]|V|$4|26|M|@$4|L|M|@$4|W|X|6S|Z|58|11|-1]]]|$4|26|M|@$4|28|P|$Q|6T]|S|T]]]]]|12|-5]|$0|6U|2|6V|4|5|6|6W|8|-1|9|$4|A|B|@$4|C|D|6X|F|-1|G|-2]|$4|H|D|6Y|F|-1|G|-2|J|10F]]]|K|$4|L|M|@$N|O|P|$Q|6Z]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|2G|Z|1A|11|-1]|$4|W|X|1B|Z|1A|11|-1]]]|12|-5]|$0|70|2|71|4|5|6|72|8|-1|9|$4|A|B|@$4|C|D|73]|$4|H|D|74|J|10G]]]|K|$4|L|M|@$P|$Q|75]|S|T|4|U]|$P|$Q|76]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|77|Z|4D|11|-1]]]|12|-5]|$0|78|2|79|4|5|6|7A|8|-1|9|$4|A|B|@$4|C|D|7B]|$4|H|D|7C|J|10H]]]|K|$4|L|M|@$4|U|P|$Q|7D]|S|T]]]|V|$4|L|M|@$4|W|X|7E|Z|4D|11|-1]]]|12|-5]|$0|7F|2|7G|4|7H|6|7I|8|-1|9|$4|A|B|@$4|C|D|7J]|$4|H|D|7K|J|10I]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|3N|Z|1A|11|-1]]]|12|-5]|$0|7M|2|7N|4|7H|6|7O|8|-1|9|$4|A|B|@$4|C|D|7P]|$4|H|D|7Q|J|10J]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|7R|Z|1A|11|-1]]]|12|-5]|$0|7S|2|7T|4|5|6|7U|8|-1|9|$4|A|B|@$4|C|D|7V]|$4|H|D|7W|J|10K]]]|K|$4|L|M|@$4|U|P|$Q|7X]|S|T]]]|V|$4|L|M|@$4|W|X|7Y|Z|1A|11|-1]|$4|W|X|7Z|Z|1A|11|-1]|$4|W|X|80|Z|1A|11|-1]|$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|82|2|83|4|20|6|84|8|-1|9|$4|A|B|@$4|C|D|85]|$4|H|D|86|J|10L]]]|K|$4|24|25|10M]|V|$4|26|M|@$4|W|X|87|Z|1A|11|-1]|$4|26|M|@$4|28|P|$Q|88]|S|T]|$4|89|2|8A]]]]]|12|-5]|$0|8B|2|8C|4|5|6|8D|8|-1|9|$4|A|B|@$4|C|D|8E]|$4|H|D|8F|J|10N]]]|K|$4|L|M|@$4|U|P|$Q|8G]|S|T]]]|V|$4|L|M|@$4|W|X|8H|Z|58|11|-1]]]|12|-5]|$0|8I|2|8J|4|5|6|8K|8|-1|9|$4|A|B|@$4|C|D|8L]|$4|H|D|8M|J|10O]]]|K|$4|L|M|@$4|U|P|$Q|8N]|S|T]]]|V|$4|W|X|8O|Z|10|11|-1]|12|-5]|$0|8P|2|8Q|4|5|6|8R|8|-1|9|$4|A|B|@$4|C|D|8S]|$4|H|D|8T|J|10P]]]|K|$4|L|M|@$P|$Q|8U]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|3A|Z|O|11|-1]]]|12|-5]|$0|8V|2|8W|4|5|6|8X|8|-1|9|$4|A|B|@$4|C|D|8Y]|$4|H|D|8Z|J|10Q]]]|K|$4|L|M|@$4|U|P|$Q|90]|S|T]]]|V|$4|W|X|91|Z|1A|11|-1]|12|-5]|$0|92|2|93|4|5|6|94|8|-1|9|$4|A|B|@$4|C|D|95|F|-2|G|-2]|$4|H|D|96|F|-2|G|-2|J|10R]]]|K|$4|L|M|@$4|U|P|$Q|97]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|1A|11|-1]]]|12|-5]|$0|98|2|99|4|5|6|9A|8|-1|9|$4|A|B|@$4|C|D|9B]|$4|H|D|9C|J|10S]]]|K|$4|L|M|@$4|U|P|$Q|9D]|S|T]|$4|U|P|$Q|9E]|S|T]|$4|U|P|$Q|9F]|S|T]]]|V|$4|L|M|@$4|W|X|9G|Z|4D|11|-1]|$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|9H|2|9I|4|5|6|9J|8|-1|9|$4|A|B|@$4|C|D|9K]|$4|H|D|9L|J|10T]]]|K|$4|L|M|@$4|U|P|$Q|9M]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|9N|2|9O|4|5|6|9P|8|-1|9|$4|A|B|@$4|C|D|9Q]|$4|H|D|9R|J|10U]]]|K|$4|L|M|@$P|$Q|9S]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|9T|Z|10|11|-1]]]|12|-5]|$0|9U|2|9V|4|7H|6|9W|8|-1|9|$4|A|B|@$4|C|D|9X]|$4|H|D|9Y|J|10V]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|9Z|2|A0|4|5|6|A1|8|-1|9|$4|A|B|@$4|C|D|A2]|$4|H|D|A3|J|10W]]]|K|$4|L|M|@$4|U|P|$Q|A4]|S|T]]]|V|$4|L|M|@$4|W|X|81|Z|4D|11|-1]]]|12|-5]|$0|A5|2|A6|4|5|6|A7|8|-1|9|$4|A|B|@$4|C|D|A8]|$4|H|D|A9|J|10X]]]|K|$4|L|M|@$P|$Q|AA]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|33|Z|O|11|-1]]]|12|-5]|$0|AB|2|AC|4|5|6|AD|8|-1|9|$4|A|B|@$4|C|D|AE]|$4|H|D|AF|J|10Y]]]|K|$4|L|M|@$P|$Q|AG]|S|T|4|U]|$P|$Q|AH]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|AI|Z|1A|11|-1]]]|12|-5]|$0|AJ|2|AK|4|5|6|AL|8|-1|9|$4|A|B|@$4|C|D|AM]|$4|H|D|AN|J|10Z]]]|K|$4|L|M|@$4|U|P|$Q|AO]|S|T]]]|V|$4|L|M|@$4|W|X|AP|Z|10|11|-1]]]|12|-5]|$0|AQ|2|AR|4|5|6|AS|8|-1|9|$4|A|B|@$4|C|D|AT|F|-2|G|-2]|$4|H|D|AU|F|-2|G|-2|J|110]]]|K|$4|L|M|@$4|U|P|$Q|AV]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|AW|2|AX|4|5|6|AY|8|-1|9|$4|A|B|@$4|C|D|AZ]|$4|H|D|B0|J|111]]]|K|$4|L|M|@$N|O|P|$Q|1M]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|2G|Z|1A|11|-1]]]|12|-5]|$0|B1|2|B2|4|5|6|B3|8|-1|9|$4|A|B|@$4|C|D|B4]|$4|H|D|B5|J|112]]]|K|$4|L|M|@$4|U|P|$Q|B6]|S|T]]]|V|$4|L|M|@$4|W|X|B7|Z|1A|11|-1]]]|12|-5]|$0|B8|2|B9|4|5|6|BA|8|-1|9|$4|A|B|@$4|C|D|BB]|$4|H|D|BC|J|113]]]|K|$4|L|M|@$4|U|P|$Q|BD]|S|T]]]|V|$4|L|M|@$4|W|X|7Z|Z|1A|11|-1]|$4|W|X|80|Z|1A|11|-1]|$4|W|X|7Y|Z|1A|11|-1]|$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|BE|2|BF|4|5|6|BG|8|-1|9|$4|A|B|@$4|C|D|BH]|$4|H|D|BI|J|114]]]|K|$4|L|M|@$N|O|P|$Q|BJ]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|BK|Z|10|11|-1]]]|12|-5]|$0|BL|2|BM|4|5|6|BN|8|-1|9|$4|A|B|@$4|C|D|BO]|$4|H|D|BP|J|115]]]|K|$4|L|M|@$4|U|P|$Q|BQ]|S|T]]]|V|$4|L|M|@$4|W|X|7Y|Z|1A|11|-1]|$4|W|X|7Z|Z|1A|11|-1]|$4|W|X|80|Z|1A|11|-1]|$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|BR|2|BS|4|5|6|BT|8|-1|9|$4|A|B|@$4|C|D|BU]|$4|H|D|BV|J|116]]]|K|$4|L|M|@$4|U|P|$Q|BW]|S|T]]]|V|$4|W|X|BX|Z|10|11|-1]|12|-5]|$0|BY|2|BZ|4|5|6|C0|8|-1|9|$4|A|B|@$4|C|D|C1]|$4|H|D|C2|J|117]]]|K|$4|L|M|@$4|U|P|$Q|C3]|S|T]]]|V|$4|L|M|@$4|W|X|C4|Z|1A|11|-1]|$4|W|X|C5|Z|1A|11|-1]|$4|W|X|C6|Z|1A|11|-1]|$4|W|X|C7|Z|1A|11|-1]]]|12|-5]|$0|C8|2|C9|4|5|6|CA|8|-1|9|$4|A|B|@$4|C|D|CB]|$4|H|D|CC|J|118]]]|K|$4|L|M|@$N|O|P|$Q|CD]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|CE|Z|1A|11|-1]]]|12|-5]|$0|CF|2|CG|4|5|6|CH|8|-1|9|$4|A|B|@$4|C|D|CI]|$4|H|D|CJ|J|119]]]|K|$4|L|M|@$4|U|P|$Q|CK]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|CL|2|CM|4|5|6|CN|8|-1|9|$4|A|B|@$4|C|D|CO]|$4|H|D|CP|J|11A]]]|K|$4|L|M|@$4|U|P|$Q|CQ]|S|T]]]|V|$4|L|M|@$4|W|X|CR|Z|1A|11|-1]]]|12|-5]|$0|CS|2|CT|4|5|6|CU|8|-1|9|$4|A|B|@$4|C|D|CV]|$4|H|D|CW|J|11B]]]|K|$4|L|M|@$4|U|P|$Q|1M]|S|T]]]|V|$4|L|M|@$4|W|X|AP|Z|10|11|-1]]]|12|-5]|$0|CX|2|CY|4|5|6|CZ|8|-1|9|$4|A|B|@$4|C|D|D0]|$4|H|D|D1|J|11C]]]|K|$4|L|M|@$4|U|P|$Q|D2]|S|T]]]|V|$4|L|M|@$4|W|X|D3|Z|1A|11|-1]|$4|W|X|D4|Z|1A|11|-1]]]|12|-5]|$0|D5|2|D6|4|5|6|D7|8|-1|9|$4|A|B|@$4|C|D|D8]|$4|H|D|D9|J|11D]]]|K|$4|L|M|@$4|U|P|$Q|DA]|S|T]]]|V|$4|L|M|@$4|W|X|3N|Z|4D|11|-1]]]|12|-5]|$0|DB|2|DC|4|5|6|DD|8|-1|9|$4|A|B|@$4|C|D|DE]|$4|H|D|DF|J|11E]]]|K|$4|L|M|@$4|U|P|$Q|DG]|S|T]]]|V|$4|W|X|DH|Z|10|11|-1]|12|-5]|$0|DI|2|DJ|4|5|6|DK|8|-1|9|$4|A|B|@$4|C|D|DL]|$4|H|D|DM|J|11F]]]|K|$4|L|M|@$4|U|P|$Q|DN]|S|T]]]|V|$4|W|X|65|Z|10|11|-1]|12|-5]|$0|DO|2|DP|4|5|6|DQ|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|DR]|$4|1J|1K|DS|P|$Q|DT]]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|DU]|$4|1J|1K|DS|P|$Q|DV]]]]|J|11G]]]|K|$4|L|M|@$4|U|P|$Q|DW]|S|T]]]|V|$4|W|X|DX|Z|10|11|-1]|12|-5]|$0|DY|2|DZ|4|5|6|E0|8|-1|9|$4|A|B|@$4|C|D|E1]|$4|H|D|E2|J|11H]]]|K|$4|L|M|@$4|U|P|$Q|E3]|S|T]]]|V|$4|W|X|E4|Z|10|11|-1]|12|-5]|$0|E5|2|E6|4|20|6|E7|8|-1|9|$4|A|B|@$4|C|D|E8]|$4|H|D|E9|J|11I]]]|K|$4|24|25|11J]|V|$4|26|M|@$4|L|M|@$4|W|X|-4|Z|58|11|-1]]]|$4|26|M|@$4|28|P|$Q|EA]|S|T]]]]]|12|-5]|$0|EB|2|EC|4|20|6|ED|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|EE]]|1N|EF]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|EG]]|1N|EH]|J|11K]]]|K|$4|24|25|11L]|V|$4|26|M|@$4|L|M|@$4|W|X|EI|Z|1A|11|-1]]]|$4|EJ|EK|$4|26|M|@$4|28|S|T|1K|-4|P|$Q|EL]]]]]]]|12|-5]|$0|EM|2|EN|4|5|6|EO|8|-1|9|$4|A|B|@$4|C|D|EP]|$4|H|D|EQ|J|11M]]]|K|$4|L|M|@$4|U|P|$Q|ER]|S|T]]]|V|$4|L|M|@$4|W|X|3N|Z|4D|11|-1]]]|12|-5]|$0|ES|2|ET|4|5|6|EU|8|-1|9|$4|A|B|@$4|C|D|EV]|$4|H|D|EW|J|11N]]]|K|$4|L|M|@$4|U|P|$Q|EX]|S|T]]]|V|$4|L|M|@$4|W|X|EY|Z|58|11|-1]]]|12|-5]|$0|EZ|2|F0|4|5|6|F1|8|-1|9|$4|A|B|@$4|C|D|F2]|$4|H|D|F3|J|11O]]]|K|$4|L|M|@$4|U|P|$Q|F4]|S|T]]]|V|$4|W|X|65|Z|10|11|-1]|12|-5]|$0|F5|2|F6|4|5|6|F7|8|-1|9|$4|A|B|@$4|C|D|F8|F|-2|G|-2]|$4|H|D|F9|F|-2|G|-2|J|11P]]]|K|$4|L|M|@$4|U|P|$Q|FA]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|FB|2|FC|4|5|6|FD|8|-1|9|$4|A|B|@$4|C|D|FE|F|-2|G|-2]|$4|H|D|FF|F|-2|G|-2|J|11Q]]]|K|$4|L|M|@$N|O|P|$Q|FG]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|10|11|-1]]]|12|-5]|$0|FH|2|FI|4|5|6|FJ|8|-1|9|$4|A|B|@$4|C|D|FK]|$4|H|D|FL|J|11R]]]|K|$4|L|M|@$4|U|P|$Q|FM]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|FN|2|FO|4|7H|6|FP|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|FQ]|$4|1J|1K|DS|P|$Q|FR]]]|1N|FS]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|FT]|$4|1J|1K|DS|P|$Q|FU]]]|1N|FV]|J|11S]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|7Z|Z|1A|11|-1]|$4|W|X|7Y|Z|1A|11|-1]|$4|W|X|80|Z|1A|11|-1]]]|12|-5]|$0|FW|2|FX|4|5|6|FY|8|-1|9|$4|A|B|@$4|C|D|FZ]|$4|H|D|G0|J|11T]]]|K|$4|L|M|@$4|U|P|$Q|G1]|S|T]]]|V|$4|L|M|@$4|W|X|2V|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]|$4|W|X|2W|Z|1A|11|-1]]]|12|-5]|$0|G2|2|G3|4|20|6|G4|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|G5]|$4|1J|1K|DS|P|$Q|G6]]]|1N|G7]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|G8]|$4|1J|1K|DS|P|$Q|G6]]]|1N|G9]|J|11U]]]|K|$4|24|25|11V]|V|$4|26|M|@$4|W|X|8O|Z|10|11|-1]|$4|26|M|@$4|28|P|$Q|GA]|S|T]]]]]|12|-5]|$0|GB|2|GC|4|20|6|GD|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|GE]|$4|1J|1K|1L|P|$Q|1M]]]|1N|GF]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|GG]|$4|1J|1K|1L|P|$Q|1M]]]|1N|GH]|J|11W]]]|K|$4|24|25|11X]|V|$4|26|M|@$4|L|M|@$4|W|X|GI|Z|1A|11|-1]]]|$4|26|M|@$N|O|4|28|S|T|1K|-4|P|$Q|1M]]]]]]|12|-5]|$0|GJ|2|GK|4|5|6|GL|8|-1|9|$4|A|B|@$4|C|D|GM]|$4|H|D|GN|J|11Y]]]|K|$4|L|M|@$4|U|P|$Q|GO]|S|T]]]|V|$4|W|X|GP|Z|1A|11|-1]|12|-5]|$0|GQ|2|GR|4|5|6|GS|8|-1|9|$4|A|B|@$4|C|D|GT]|$4|H|D|GU|J|11Z]]]|K|$4|L|M|@$4|U|P|$Q|GV]|S|T]]]|V|$4|L|M|@$4|W|X|GW|Z|58|11|-1]]]|12|-5]|$0|GX|2|GY|4|5|6|GZ|8|-1|9|$4|A|B|@$4|C|D|H0]|$4|H|D|H1|J|120]]]|K|$4|L|M|@$4|U|P|$Q|H2]|S|T]]]|V|$4|L|M|@$4|W|X|H3|Z|10|11|-1]]]|12|-5]|$0|H4|2|H5|4|5|6|H6|8|-1|9|$4|A|B|@$4|C|D|H7]|$4|H|D|H8|J|121]]]|K|$4|L|M|@$N|O|P|$Q|H9]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|HA|Z|1A|11|-1]]]|12|-5]|$0|HB|2|HC|4|5|6|HD|8|-1|9|$4|A|B|@$4|C|D|HE|F|-2|G|-2]|$4|H|D|HF|F|-2|G|-2|J|122]]]|K|$4|L|M|@$4|U|P|$Q|HG]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|HH|2|HI|4|5|6|HJ|8|-1|9|$4|A|B|@$4|C|D|HK]|$4|H|D|HL|J|123]]]|K|$4|L|M|@$4|U|P|$Q|HM]|S|T]]]|V|$4|L|M|@$4|W|X|8H|Z|58|11|-1]]]|12|-5]|$0|HN|2|HO|4|5|6|HP|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|HQ]|$4|HR|1K|DS]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|HS]|$4|HR|1K|DS]]]|J|124]]]|K|$4|L|M|@$4|U|P|$Q|HT]|S|T]]]|V|$4|W|X|HU|Z|10|11|-1]|12|-5]|$0|HV|2|HW|4|5|6|HX|8|-1|9|$4|A|B|@$4|C|D|HY]|$4|H|D|HZ|J|125]]]|K|$4|L|M|@$4|U|P|$Q|I0]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]]]|12|-5]|$0|I1|2|I2|4|5|6|I3|8|-1|9|$4|A|B|@$4|C|D|I4|F|-2|G|-2]|$4|H|D|I5|F|-2|G|-2|J|126]]]|K|$4|L|M|@$N|O|P|$Q|I6]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|19|Z|1A|11|-1]|$4|W|X|1B|Z|1A|11|-1]]]|12|-5]|$0|I7|2|I8|4|5|6|I9|8|-1|9|$4|A|B|@$4|C|D|IA]|$4|H|D|IB|J|127]]]|K|$4|L|M|@$4|U|P|$Q|IC]|S|T]]]|V|$4|L|M|@$4|W|X|D3|Z|4D|11|-1]|$4|W|X|46|Z|4D|11|-1]|$4|W|X|7E|Z|4D|11|-1]]]|12|-5]|$0|ID|2|IE|4|5|6|IF|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|IG]|$4|1J|1K|DS|P|$Q|EL]]]|1N|IH]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|II]|$4|1J|1K|DS|P|$Q|EL]]]|1N|IJ]|J|128]]]|K|$4|L|M|@$P|$Q|IK]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|IL|Z|1A|11|-1]]]|12|-5]|$0|IM|2|IN|4|5|6|IO|8|-1|9|$4|A|B|@$4|C|D|IP|F|-2|G|-2]|$4|H|D|IQ|F|-2|G|-2|J|129]]]|K|$4|L|M|@$4|U|P|$Q|IR]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|19|Z|1A|11|-1]|$4|W|X|1B|Z|1A|11|-1]]]|12|-5]|$0|IS|2|IT|4|5|6|IU|8|-1|9|$4|A|B|@$4|C|D|IV]|$4|H|D|IW|J|12A]]]|K|$4|L|M|@$4|U|P|$Q|IX]|S|T]]]|V|$4|L|M|@$4|W|X|9G|Z|4D|11|-1]|$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|IY|2|IZ|4|5|6|J0|8|-1|9|$4|A|B|@$4|C|D|J1]|$4|H|D|J2|J|12B]]]|K|$4|L|M|@$4|U|P|$Q|J3]|S|T]]]|V|$4|L|M|@$4|W|X|J4|Z|4D|11|-1]]]|12|-5]|$0|J5|2|J6|4|5|6|J7|8|-1|9|$4|A|B|@$4|C|D|J8|F|-2|G|-2]|$4|H|D|J9|F|-2|G|-2|J|12C]]]|K|$4|L|M|@$4|U|P|$Q|JA]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|JB|Z|1A|11|-1]]]|12|-5]|$0|JC|2|JD|4|5|6|JE|8|-1|9|$4|A|B|@$4|C|D|JF]|$4|H|D|JG|J|12D]]]|K|$4|L|M|@$4|U|P|$Q|JH]|S|T]]]|V|$4|W|X|JI|Z|10|11|-1]|12|-5]|$0|JJ|2|JK|4|5|6|JL|8|-1|9|$4|A|B|@$4|C|D|JM|F|-1|G|-2]|$4|H|D|JN|F|-1|G|-2|J|12E]]]|K|$4|L|M|@$4|U|P|$Q|JO]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|DH|Z|58|11|-1]]]|12|-5]|$0|JP|2|JQ|4|5|6|JR|8|-1|9|$4|A|B|@$4|C|D|JS|F|-2|G|-2]|$4|H|D|JT|F|-2|G|-2|J|12F]]]|K|$4|L|M|@$4|U|P|$Q|JU]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|JV|2|JW|4|5|6|JX|8|-1|9|$4|A|B|@$4|C|D|JY]|$4|H|D|JZ|J|12G]]]|K|$4|L|M|@$4|U|P|$Q|1M]|S|T]|$N|O|P|$Q|K0]|S|T|4|U]|$N|O|P|$Q|AO]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|AP|Z|10|11|-1]]]|12|-5]|$0|K1|2|K2|4|7H|6|K3|8|-1|9|$4|A|B|@$4|C|D|K4]|$4|H|D|K5|J|12H]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]]]|12|-5]|$0|K6|2|K7|4|7H|6|K8|8|-1|9|$4|A|B|@$4|C|D|K9|F|-1|G|-2]|$4|H|D|KA|F|-1|G|-2|J|12I]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|KB|Z|1A|11|-1]]]|12|-5]|$0|KC|2|KD|4|5|6|KE|8|-1|9|$4|A|B|@$4|C|D|KF|F|-2|G|-2]|$4|H|D|KG|F|-2|G|-2|J|12J]]]|K|$4|L|M|@$N|O|P|$Q|KH]|1K|-4|2|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|KI|Z|1A|11|-1]]]|12|-5]|$0|KJ|2|KK|4|5|6|KL|8|-1|9|$4|A|B|@$4|C|D|KM]|$4|H|D|KN|J|12K]]]|K|$4|L|M|@$4|U|P|$Q|JA]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|1A|11|-1]]]|12|-5]|$0|KO|2|KP|4|20|6|KQ|8|-1|9|$4|A|B|@$4|C|D|KR]|$4|H|D|KS|J|12L]]]|K|$4|24|25|12M]|V|$4|26|M|@$4|L|M|@$4|W|X|-4|Z|58|11|-1]]]|$4|26|M|@$4|28|P|$Q|KT]|S|T]]]]]|12|-5]|$0|KU|2|KV|4|5|6|KW|8|-1|9|$4|A|B|@$4|C|D|KX]|$4|H|D|KY|J|12N]]]|K|$4|L|M|@$4|U|P|$Q|KZ]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|L0|2|L1|4|5|6|L2|8|-1|9|$4|A|B|@$4|C|D|L3|F|-2|G|-2]|$4|H|D|L4|F|-2|G|-2|J|12O]]]|K|$4|L|M|@$4|U|P|$Q|L5]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|L6|2|L7|4|5|6|L8|8|-1|9|$4|A|B|@$4|C|D|L9]|$4|H|D|LA|J|12P]]]|K|$4|L|M|@$4|U|P|$Q|LB]|S|T]|$4|U|P|$Q|LC]|S|T]]]|V|$4|L|M|@$4|W|X|C6|Z|4D|11|-1]|$4|W|X|C4|Z|4D|11|-1]|$4|W|X|7E|Z|4D|11|-1]|$4|W|X|46|Z|4D|11|-1]]]|12|-5]|$0|LD|2|LE|4|5|6|LF|8|-1|9|$4|A|B|@$4|C|D|LG]|$4|H|D|LH|J|12Q]]]|K|$4|L|M|@$N|O|P|$Q|LI]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|BK|Z|10|11|-1]]]|12|-5]|$0|LJ|2|LK|4|5|6|LL|8|-1|9|$4|A|B|@$4|C|D|LM]|$4|H|D|LN|J|12R]]]|K|$4|L|M|@$4|U|P|$Q|LO]|S|T]]]|V|$4|L|M|@$4|W|X|81|Z|4D|11|-1]]]|12|-5]|$0|LP|2|LQ|4|7H|6|LR|8|-1|9|$4|A|B|@$4|C|D|LS]|$4|H|D|LT|J|12S]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|2W|Z|4D|11|-1]]]|12|-5]|$0|LU|2|LV|4|5|6|LW|8|-1|9|$4|A|B|@$4|C|D|LX]|$4|H|D|LY|J|12T]]]|K|$4|L|M|@$4|U|P|$Q|LZ]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|M0|2|M1|4|5|6|M2|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|M3]|$4|1J|1K|DS|P|$Q|M4]]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|M5]|$4|1J|1K|DS|P|$Q|M6]]]]|J|12U]]]|K|$4|L|M|@$P|$Q|IK]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|IL|Z|1A|11|-1]]]|12|-5]|$0|M7|2|M8|4|5|6|M9|8|-1|9|$4|A|B|@$4|C|D|MA]|$4|H|D|MB|J|12V]]]|K|$4|L|M|@$4|U|P|$Q|MC]|S|T]|$4|U|P|$Q|MD]|S|T]]]|V|$4|L|M|@$4|W|X|-4|Z|58|11|-1]]]|12|-5]|$0|ME|2|MF|4|5|6|MG|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|MH]|$4|HR|1K|1L]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|MI]|$4|HR|1K|1L]]]|J|12W]]]|K|$4|L|M|@$P|$Q|MJ]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|O|11|-1]]]|12|-5]|$0|MK|2|ML|4|5|6|MM|8|-1|9|$4|A|B|@$4|C|D|MN|F|-2|G|-2]|$4|H|D|MO|F|-2|G|-2|J|12X]]]|K|$4|L|M|@$N|O|P|$Q|MP]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|MQ|Z|1A|11|-1]|$4|W|X|1B|Z|1A|11|-1]]]|12|-5]|$0|MR|2|MS|4|5|6|MT|8|-1|9|$4|A|B|@$4|C|D|MU]|$4|H|D|MV|J|12Y]]]|K|$4|L|M|@$4|U|P|$Q|MW]|S|T]]]|V|$4|W|X|MX|Z|1A|11|-1]|12|-5]|$0|MY|2|MZ|4|5|6|N0|8|-1|9|$4|A|B|@$4|C|D|N1]|$4|H|D|N2|J|12Z]]]|K|$4|L|M|@$4|U|P|$Q|N3]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]]]|12|-5]|$0|N4|2|N5|4|5|6|N6|8|-1|9|$4|A|B|@$4|C|D|N7]|$4|H|D|N8|J|130]]]|K|$4|L|M|@$4|U|P|$Q|N9]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|NA|2|NB|4|5|6|NC|8|-1|9|$4|A|B|@$4|C|D|ND]|$4|H|D|NE|J|131]]]|K|$4|L|M|@$4|U|P|$Q|NF]|S|T]]]|V|$4|L|M|@$4|W|X|2W|Z|1A|11|-1]|$4|W|X|2V|Z|1A|11|-1]|$4|W|X|2U|Z|1A|11|-1]]]|12|-5]|$0|NG|2|NH|4|20|6|NI|8|-1|9|$4|A|B|@$4|C|D|NJ]|$4|H|D|NK|J|132]]]|K|$4|24|25|133]|V|$4|26|M|@$4|L|M|@$4|W|X|6S|Z|58|11|-1]]]|$4|26|M|@$4|28|P|$Q|6T]|S|T]]]]]|12|-5]|$0|NL|2|NM|4|20|6|NN|8|-1|9|$4|A|B|@$4|C|D|NO]|$4|H|D|NP|J|134]]]|K|$4|24|25|135]|V|$4|26|M|@$4|L|M|@$4|W|X|2G|Z|1A|11|-1]]]|$4|26|M|@$N|O|4|28|S|T|1K|-4|P|$Q|NQ]]]]]]|12|-5]|$0|NR|2|NS|4|5|6|NT|8|-1|9|$4|A|B|@$4|C|D|NU|F|-2|G|-2]|$4|H|D|NV|F|-2|G|-2|J|136]]]|K|$4|L|M|@$4|U|P|$Q|NW]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|NX|2|NY|4|5|6|NZ|8|-1|9|$4|A|B|@$4|C|D|O0]|$4|H|D|O1|J|137]]]|K|$4|L|M|@$P|$Q|H9]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|77|Z|4D|11|-1]]]|12|-5]|$0|O2|2|O3|4|5|6|O4|8|-1|9|$4|A|B|@$4|C|D|O5]|$4|H|D|O6|J|138]]]|K|$4|L|M|@$4|U|P|$Q|O7]|S|T]]]|V|$4|W|X|DX|Z|10|11|-1]|12|-5]|$0|O8|2|O9|4|20|6|OA|8|-1|9|$4|A|B|@$4|C|D|OB]|$4|H|D|OC|J|139]]]|K|$4|24|25|13A]|V|$4|26|M|@$4|L|M|@$4|W|X|-4|Z|58|11|-1]]]|$4|26|M|@$4|28|P|$Q|OD]|S|T]]]]]|12|-5]|$0|OE|2|OF|4|5|6|OG|8|-1|9|$4|A|B|@$4|C|D|OH]|$4|H|D|OI|J|13B]]]|K|$4|L|M|@$4|U|P|$Q|OJ]|S|T]]]|V|$4|L|M|@$4|W|X|7Z|Z|1A|11|-1]|$4|W|X|80|Z|1A|11|-1]|$4|W|X|7Y|Z|1A|11|-1]|$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|OK|2|OL|4|7H|6|OM|8|-1|9|$4|A|B|@$4|C|D|ON]|$4|H|D|OO|J|13C]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|3T|Z|1A|11|-1]]]|12|-5]|$0|OP|2|OQ|4|5|6|OR|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|OS]|$4|HR|1K|DS]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|OT]|$4|HR|1K|DS]]]|J|13D]]]|K|$4|L|M|@$4|U|P|$Q|OU]|S|T]]]|V|$4|L|M|@$4|W|X|OV|Z|58|11|-1]]]|12|-5]|$0|OW|2|OX|4|5|6|OY|8|-1|9|$4|A|B|@$4|C|D|OZ]|$4|H|D|P0|J|13E]]]|K|$4|L|M|@$4|U|P|$Q|P1]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|P2|2|P3|4|5|6|P4|8|-1|9|$4|A|B|@$4|C|D|P5]|$4|H|D|P6|J|13F]]]|K|$4|L|M|@$4|U|P|$Q|P7]|S|T]]]|V|$4|L|M|@$4|W|X|C4|Z|1A|11|-1]]]|12|-5]|$0|P8|2|P9|4|5|6|PA|8|-1|9|$4|A|B|@$4|C|D|PB]|$4|H|D|PC|J|13G]]]|K|$4|L|M|@$4|U|P|$Q|PD]|S|T]]]|V|$4|L|M|@$4|W|X|C5|Z|4D|11|-1]|$4|W|X|C4|Z|4D|11|-1]|$4|W|X|7E|Z|4D|11|-1]|$4|W|X|46|Z|4D|11|-1]]]|12|-5]|$0|PE|2|PF|4|5|6|PG|8|-1|9|$4|A|B|@$4|C|D|PH]|$4|H|D|PI|J|13H]]]|K|$4|L|M|@$4|U|P|$Q|PJ]|S|T]]]|V|$4|L|M|@$4|W|X|PK|Z|4D|11|-1]]]|12|-5]|$0|PL|2|PM|4|5|6|PN|8|-1|9|$4|A|B|@$4|C|D|PO]|$4|H|D|PP|J|13I]]]|K|$4|L|M|@$4|U|P|$Q|PQ]|S|T]]]|V|$4|W|X|GP|Z|1A|11|-1]|12|-5]|$0|PR|2|PS|4|5|6|PT|8|-1|9|$4|A|B|@$4|C|D|PU]|$4|H|D|PV|J|13J]]]|K|$4|L|M|@$4|U|P|$Q|PW]|S|T]]]|V|$4|L|M|@$4|W|X|C6|Z|1A|11|-1]]]|12|-5]|$0|PX|2|PY|4|5|6|PZ|8|-1|9|$4|A|B|@$4|C|D|Q0|F|-2|G|-2]|$4|H|D|Q1|F|-2|G|-2|J|13K]]]|K|$4|L|M|@$4|U|P|$Q|Q2]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|Q3|2|Q4|4|7H|6|Q5|8|-1|9|$4|A|B|@$4|C|D|Q6]|$4|H|D|Q7|J|13L]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|9G|Z|4D|11|-1]]]|12|-5]|$0|Q8|2|Q9|4|5|6|QA|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|QB]|$4|HR|1K|QC|2|0]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|QD]|$4|HR|1K|QC|2|0]]]|J|13M]]]|K|$4|L|M|@$P|$Q|39]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|3A|Z|O|11|-1]]]|12|-5]|$0|QE|2|QF|4|7H|6|QG|8|-1|9|$4|A|B|@$4|C|D|QH]|$4|H|D|QI|J|13N]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|B7|Z|1A|11|-1]]]|12|-5]|$0|QJ|2|QK|4|5|6|QL|8|-1|9|$4|A|B|@$4|C|D|QM|F|-2|G|-2]|$4|H|D|QN|F|-2|G|-2|J|13O]]]|K|$4|L|M|@$4|U|P|$Q|QO]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|QP|2|QQ|4|5|6|QR|8|-1|9|$4|A|B|@$4|C|D|QS]|$4|H|D|QT|J|13P]]]|K|$4|L|M|@$4|U|P|$Q|QU]|S|T]|$P|$Q|QV]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|QW|Z|10|11|-1]]]|12|-5]|$0|QX|2|QY|4|5|6|QZ|8|-1|9|$4|A|B|@$4|C|D|R0|F|-2|G|-2]|$4|H|D|R1|F|-2|G|-2|J|13Q]]]|K|$4|L|M|@$N|O|P|$Q|R2]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|10|11|-1]]]|12|-5]|$0|R3|2|R4|4|7H|6|R5|8|-1|9|$4|A|B|@$4|C|D|R6|F|-1|G|-2]|$4|H|D|R7|F|-1|G|-2|J|13R]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|R8|Z|1A|11|-1]]]|12|-5]|$0|R9|2|RA|4|5|6|RB|8|-1|9|$4|A|B|@$4|C|D|RC]|$4|H|D|RD|J|13S]]]|K|$4|L|M|@$4|U|P|$Q|RE]|S|T]]]|V|$4|L|M|@$4|W|X|3N|Z|1A|11|-1]]]|12|-5]|$0|RF|2|RG|4|5|6|RH|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|RI]|$4|HR|1K|DS]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|RJ]|$4|HR|1K|DS]]]|J|13T]]]|K|$4|L|M|@$4|U|P|$Q|RK]|S|T]]]|V|$4|W|X|RL|Z|O|11|-1]|12|-5]|$0|RM|2|RN|4|5|6|RO|8|-1|9|$4|A|B|@$4|C|D|RP]|$4|H|D|RQ|J|13U]]]|K|$4|L|M|@$4|U|P|$Q|32]|S|T]]]|V|$4|L|M|@$4|W|X|RR|Z|10|11|-1]]]|12|-5]|$0|RS|2|RT|4|5|6|RU|8|-1|9|$4|A|B|@$4|C|D|RV]|$4|H|D|RW|J|13V]]]|K|$4|L|M|@$4|U|P|$Q|RX]|S|T]]]|V|$4|L|M|@$4|W|X|D4|Z|4D|11|-1]]]|12|-5]|$0|RY|2|RZ|4|5|6|S0|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|S1]|$4|1J|1K|1L|P|$Q|QV]]]|1N|S2]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|S3]|$4|1J|1K|1L|P|$Q|QV]]]|1N|S4]|J|13W]]]|K|$4|L|M|@$N|O|P|$Q|QV]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|S5|Z|1A|11|-1]]]|12|-5]|$0|S6|2|S7|4|5|6|S8|8|-1|9|$4|A|B|@$4|C|D|S9]|$4|H|D|SA|J|13X]]]|K|$4|L|M|@$4|U|P|$Q|SB]|S|T]]]|V|$4|W|X|GP|Z|1A|11|-1]|12|-5]|$0|SC|2|SD|4|5|6|SE|8|-1|9|$4|A|B|@$4|C|D|SF]|$4|H|D|SG|J|13Y]]]|K|$4|L|M|@$4|U|P|$Q|SH]|S|T]]]|V|$4|L|M|@$4|W|X|C5|Z|1A|11|-1]|$4|W|X|D3|Z|1A|11|-1]]]|12|-5]|$0|SI|2|SJ|4|7H|6|SK|8|-1|9|$4|A|B|@$4|C|D|SL]|$4|H|D|SM|J|13Z]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|2V|Z|1A|11|-1]]]|12|-5]|$0|SN|2|SO|4|7H|6|SP|8|-1|9|$4|A|B|@$4|C|D|SQ]|$4|H|D|SR|J|140]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|2U|Z|1A|11|-1]]]|12|-5]|$0|SS|2|ST|4|5|6|SU|8|-1|9|$4|A|B|@$4|C|D|SV|F|-2|G|-2]|$4|H|D|SW|F|-2|G|-2|J|141]]]|K|$4|L|M|@$4|U|P|$Q|SX]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|SY|2|SZ|4|5|6|T0|8|-1|9|$4|A|B|@$4|C|D|T1]|$4|H|D|T2|J|142]]]|K|$4|L|M|@$4|U|P|$Q|T3]|S|T]]]|V|$4|L|M|@$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|T4|2|T5|4|5|6|T6|8|-1|9|$4|A|B|@$4|C|D|T7]|$4|H|D|T8|J|143]]]|K|$4|L|M|@$4|U|P|$Q|T9]|S|T]]]|V|$4|W|X|8O|Z|10|11|-1]|12|-5]|$0|TA|2|TB|4|5|6|TC|8|-1|9|$4|A|B|@$4|C|D|TD]|$4|H|D|TE|J|144]]]|K|$4|L|M|@$P|$Q|TF]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|IL|Z|1A|11|-1]]]|12|-5]|$0|TG|2|TH|4|7H|6|TI|8|-1|9|$4|A|B|@$4|C|D|TJ]|$4|H|D|TK|J|145]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|TL|Z|1A|11|-1]]]|12|-5]|$0|TM|2|TN|4|5|6|TO|8|-1|9|$4|A|B|@$4|C|D|TP]|$4|H|D|TQ|J|146]]]|K|$4|L|M|@$4|U|P|$Q|TR]|S|T]]]|V|$4|L|M|@$4|W|X|3N|Z|1A|11|-1]]]|12|-5]|$0|TS|2|TT|4|5|6|TU|8|-1|9|$4|A|B|@$4|C|D|TV]|$4|H|D|TW|J|147]]]|K|$4|L|M|@$4|U|P|$Q|TX]|S|T]]]|V|$4|L|M|@$4|W|X|C4|Z|1A|11|-1]|$4|W|X|7E|Z|1A|11|-1]]]|12|-5]|$0|TY|2|TZ|4|5|6|U0|8|-1|9|$4|A|B|@$4|C|D|U1]|$4|H|D|U2|J|148]]]|K|$4|L|M|@$4|U|P|$Q|U3]|S|T]]]|V|$4|L|M|@$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|U4|2|U5|4|5|6|U6|8|-1|9|$4|A|B|@$4|C|D|U7]|$4|H|D|U8|J|149]]]|K|$4|L|M|@$4|U|P|$Q|U9]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|UA|2|UB|4|20|6|UC|8|-1|9|$4|A|B|@$4|C|D|UD]|$4|H|D|UE|J|14A]]]|K|$4|24|25|14B]|V|$4|26|M|@$4|L|M|@$4|W|X|UF|Z|10|11|-1]]]|$4|26|M|@$N|O|4|28|S|T|1K|-4|P|$Q|UG]]]]]]|12|-5]|$0|UH|2|UI|4|5|6|UJ|8|-1|9|$4|A|B|@$4|C|D|UK]|$4|H|D|UL|J|14C]]]|K|$4|L|M|@$4|U|P|$Q|UM]|S|T]]]|V|$4|W|X|UN|Z|1A|11|-1]|12|-5]|$0|UO|2|UP|4|5|6|UQ|8|-1|9|$4|A|B|@$4|C|D|UR]|$4|H|D|US|J|14D]]]|K|$4|L|M|@$4|U|P|$Q|UT]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|UU|2|UV|4|5|6|UW|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|UX]]|1N|UY]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|UZ]]|1N|V0]|J|14E]]]|K|$4|L|M|@$4|U|P|$Q|1M]|S|T]]]|V|$4|L|M|@$4|W|X|RR|Z|O|11|-1]]]|12|-5]|$0|V1|2|V2|4|20|6|V3|8|-1|9|$4|A|B|@$4|C|D|V4]|$4|H|D|V5|J|14F]]]|K|$4|24|25|14G]|V|$4|26|M|@$4|W|X|BX|Z|10|11|-1]|$4|26|M|@$4|28|P|$Q|V6]|S|T]]]]]|12|-5]|$0|V7|2|V8|4|5|6|V9|8|-1|9|$4|A|B|@$4|C|D|VA]|$4|H|D|VB|J|14H]]]|K|$4|L|M|@$4|U|P|$Q|VC]|S|T]]]|V|$4|L|M|@$4|W|X|C6|Z|4D|11|-1]]]|12|-5]|$0|VD|2|VE|4|20|6|VF|8|-1|9|$4|A|B|@$4|C|D|VG]|$4|H|D|VH|J|14I]]]|K|$4|24|25|14J]|V|$4|26|M|@$4|L|M|@$4|W|X|IL|Z|1A|11|-1]]]|$4|26|M|@$4|28|S|T|1K|1L|P|$Q|VI]]]]]]|12|-5]|$0|VJ|2|VK|4|7H|6|VL|8|-1|9|$4|A|B|@$4|C|D|VM|F|-1|G|-2]|$4|H|D|VN|F|-1|G|-2|J|14K]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|VO|Z|1A|11|-1]]]|12|-5]|$0|VP|2|VQ|4|5|6|VR|8|-1|9|$4|A|B|@$4|C|D|VS]|$4|H|D|VT|J|14L]]]|K|$4|L|M|@$4|U|P|$Q|VU]|S|T]]]|V|$4|L|M|@$4|W|X|C4|Z|1A|11|-1]]]|12|-5]|$0|VV|2|VW|4|5|6|VX|8|-1|9|$4|A|B|@$4|C|D|VY|F|-2|G|-2]|$4|H|D|VZ|F|-2|G|-2|J|14M]]]|K|$4|L|M|@$4|U|P|$Q|W0]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|W1|2|W2|4|5|6|W3|8|-1|9|$4|A|B|@$4|C|D|W4|F|-2|G|-2]|$4|H|D|W5|F|-2|G|-2|J|14N]]]|K|$4|L|M|@$4|U|P|$Q|W6]|S|T|6L|@]]]]|V|$4|L|M|@$4|W|X|6M|Z|O|11|-1]]]|12|-5]|$0|W7|2|W8|4|5|6|W9|8|-1|9|$4|A|B|@$4|C|D|WA]|$4|H|D|WB|J|14O]]]|K|$4|L|M|@$4|U|P|$Q|WC]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|4D|11|-1]]]|12|-5]|$0|WD|2|WE|4|5|6|WF|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|WG]|$4|1J|1K|1L|P|$Q|WH]]]|1N|WI]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|WJ]|$4|1J|1K|1L|P|$Q|WH]]]|1N|WK]|J|14P]]]|K|$4|L|M|@$N|O|P|$Q|WH]|1K|1L|2|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|Y|Z|10|11|-1]]]|12|-5]|$0|WL|2|WM|4|5|6|WN|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|WO]|$4|HR|1K|1L]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|WP]|$4|HR|1K|1L]]]|J|14Q]]]|K|$4|L|M|@$4|U|P|$Q|39]|S|T]]]|V|$4|L|M|@$4|W|X|3A|Z|10|11|-1]]]|12|-5]|$0|WQ|2|WR|4|5|6|WS|8|-1|9|$4|A|B|@$4|C|D|WT]|$4|H|D|WU|J|14R]]]|K|$4|L|M|@$4|U|P|$Q|WV]|S|T]]]|V|$4|W|X|WW|Z|10|11|-1]|12|-5]|$0|WX|2|WY|4|7H|6|WZ|8|-1|9|$4|A|B|@$4|C|D|X0]|$4|H|D|X1|J|14S]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|7Y|Z|1A|11|-1]|$4|W|X|7Z|Z|1A|11|-1]|$4|W|X|80|Z|1A|11|-1]|$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|X2|2|X3|4|5|6|X4|8|-1|9|$4|A|B|@$4|C|D|X5]|$4|H|D|X6|J|14T]]]|K|$4|L|M|@$4|U|P|$Q|X7]|S|T]]]|V|$4|W|X|65|Z|O|11|-1]|12|-5]|$0|X8|2|X9|4|5|6|XA|8|-1|9|$4|A|B|@$4|C|D|XB]|$4|H|D|XC|J|14U]]]|K|$4|L|M|@$P|$Q|XD]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|QW|Z|O|11|-1]]]|12|-5]|$0|XE|2|XF|4|5|6|XG|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|XH]|$4|1J|1K|DS|P|$Q|XI]]]|1N|XJ]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|XK]|$4|1J|1K|DS|P|$Q|XL]]]|1N|XM]|J|14V]]]|K|$4|L|M|@$4|U|P|$Q|XN]|S|T]]]|V|$4|W|X|3A|Z|10|11|-1]|12|-5]|$0|XO|2|XP|4|5|6|XQ|8|-1|9|$4|A|B|@$4|C|D|XR]|$4|H|D|XS|J|14W]]]|K|$4|L|M|@$4|U|P|$Q|XT]|S|T]]]|V|$4|L|M|@$4|W|X|XU|Z|1A|11|-1]]]|12|-5]|$0|XV|2|XW|4|5|6|XX|8|-1|9|$4|A|B|@$4|C|D|XY]|$4|H|D|XZ|J|14X]]]|K|$4|L|M|@$4|U|P|$Q|Y0]|S|T]]]|V|$4|L|M|@$4|W|X|QW|Z|10|11|-1]]]|12|-5]|$0|Y1|2|Y2|4|7H|6|Y3|8|-1|9|$4|A|B|@$4|C|D|Y4]|$4|H|D|Y5|J|14Y]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|81|Z|1A|11|-1]]]|12|-5]|$0|Y6|2|Y7|4|5|6|Y8|8|-1|9|$4|A|B|@$4|C|D|-4|1F|$1G|@$4|1H|2|Y9]|$4|HR|1K|DS]]]]|$4|1P|D|-4|1F|$1G|@$4|1H|2|YA]|$4|HR|1K|DS]]]|J|14Z]]]|K|$4|L|M|@$4|U|P|$Q|YB]|S|T]]]|V|$4|L|M|@$4|W|X|5M|Z|58|11|-1]]]|12|-5]|$0|YC|2|YD|4|5|6|YE|8|-1|9|$4|A|B|@$4|C|D|YF]|$4|H|D|YG|J|150]]]|K|$4|L|M|@$P|$Q|YH]|S|T|4|U]]]|V|$4|L|M|@$4|W|X|IL|Z|1A|11|-1]]]|12|-5]|$0|YI|2|YJ|4|20|6|YK|8|-1|9|$4|A|B|@$4|C|D|YL]|$4|H|D|YM|J|151]]]|K|$4|24|25|152]|V|$4|26|M|@$4|L|M|@$4|W|X|6S|Z|58|11|-1]]]|$4|26|M|@$4|28|P|$Q|YN]|S|T]]]]]|12|-5]|$0|YO|2|YP|4|5|6|YQ|8|-1|9|$4|A|B|@$4|C|D|YR|F|-2|G|-2]|$4|H|D|YS|F|-2|G|-2|J|153]]]|K|$4|L|M|@$N|O|P|$Q|YT]|1K|-4|S|T|4|U]]]|V|$4|L|M|@$4|W|X|YU|Z|1A|11|-1]]]|12|-5]|$0|YV|2|YW|4|5|6|YX|8|-1|9|$4|A|B|@$4|C|D|YY]|$4|H|D|YZ|J|154]]]|K|$4|L|M|@$4|U|P|$Q|Z0]|S|T]]]|V|$4|L|M|@$4|W|X|3T|Z|1A|11|-1]]]|12|-5]|$0|Z1|2|Z2|4|5|6|Z3|8|-1|9|$4|A|B|@$4|C|D|Z4]|$4|H|D|Z5|J|155]]]|K|$4|L|M|@$4|U|P|$Q|Z6]|S|T]]]|V|$4|W|X|2N|Z|10|11|-1]|12|-5]|$0|Z7|2|Z8|4|5|6|Z9|8|-1|9|$4|A|B|@$4|C|D|ZA]|$4|H|D|ZB|J|156]]]|K|$4|L|M|@$4|U|P|$Q|ZC]|S|T]]]|V|$4|L|M|@$4|W|X|46|Z|1A|11|-1]]]|12|-5]|$0|ZD|2|ZE|4|7H|6|ZF|8|-1|9|$4|A|B|@$4|C|D|ZG|F|-1|G|-2]|$4|H|D|ZH|F|-1|G|-2|J|157]]]|K|$4|7L]|V|$4|L|M|@$4|W|X|ZI|Z|1A|11|-1]]]|12|-5]]",
    "isTransformed": true
};

var ctCustomCode_PrePCC = {};

(function() {
    var ctVEconfig = {
        VE_BASE_URL: "https://ve-cec-na1.app.clicktale.com/",
        VE_PROXY_BASE_URL: "https://vep-cec-na1.app.clicktale.com/"
    };
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

        function e() {}

        function n() {
            return r.apply(this instanceof e ? this : t, o.concat(Array.prototype.slice.call(arguments)))
        }
        var o = Array.prototype.slice.call(arguments, 1),
            r = this;
        return this.prototype && (e.prototype = this.prototype), n.prototype = new e, n
    }), "function" != typeof Object.create && (Object.create = function() {
        function r() {}
        var a = Object.prototype.hasOwnProperty;
        return function(t) {
            if ("object" != typeof t) throw TypeError("Object prototype may only be an Object or null");
            r.prototype = t;
            var e = new r;
            if (r.prototype = null, 1 < arguments.length) {
                var n = Object(arguments[1]);
                for (var o in n) a.call(n, o) && (e[o] = n[o])
            }
            return e
        }
    }()), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                n = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var o = arguments[1], r = 0; r < n;) {
                var a = e[r];
                if (t.call(o, a, r, e)) return r;
                r++
            }
            return -1
        },
        configurable: !0,
        writable: !0
    });
    var logger = function() {
        for (var t = {}, e = !(!window.localStorage || "true" !== localStorage.getItem("ctRuleEngineDebug")), n = window.location.search.split("&"), o = [], r = 0; r < n.length; r++) /^\??ctRuleEngine=/.test(n[r]) && o.push(n[r]);

        function a() {
            var t = Array.prototype.slice.call(arguments);
            e && (window.console && window.console.log ? (t.unshift((new Date).toJSON() + " - RuleEngine :"), window.console.log.apply(window.console, t)) : window.alert && window.alert(t.join(" ")))
        }
        return o.length && (e = "true" === o[0].split("=").splice(1)[0], window.localStorage && localStorage.setItem("ctRuleEngineDebug", e)), t.log = function() {
            a.apply(this, arguments)
        }, t.error = function(t) {
            a.apply(this, arguments)
        }, t
    }();

    function CTSimplePromise() {
        var n = [],
            o = !1,
            r = void 0;
        this.resolve = function(t) {
            if (!o) {
                r = t, o = !0;
                for (var e = 0; e < n.length; e++) n[e](t);
                n = []
            }
        }, this.then = function(t) {
            o ? t(r) : n.push(t)
        }
    }

    function CTAnyPromise(t) {
        for (var e = new CTSimplePromise, n = 0; n < t.length; n++) t[n].then(function(t) {
            e.resolve(t)
        });
        return e
    }! function() {
        if (!window.ct || !ct.ElementAddressing) {
            var t, u = !0,
                m = null,
                d = !1,
                a = this,
                f = {
                    Z: {}
                },
                n = (t = document.documentElement).compareDocumentPosition || t.contains ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t;
                    return t === e || n.contains && n.contains(e) || t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return u;
                    return d
                },
                l = Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                } : function(t, e) {
                    for (var n = t.length, o = 0; o < n; o++)
                        if (t[o] === e) return o;
                    return -1
                },
                e = Array.prototype.every ? function(t, e) {
                    return t.every(e)
                } : function(t, e) {
                    for (var n = t.length, o = 0; o < n; o++)
                        if (!e(t[o])) return d;
                    return u
                };
            f.version = "3.0.23", f.p = d, f.h = {}, f.f = {}, f.A = function(t, e) {
                e = !!e, f.j = t, /complete|interactive/.test(document.readyState) ? f.m(t, e) : t.document.addEventListener ? t.document.addEventListener("DOMContentLoaded", function() {
                    f.m(t, e)
                }, d) : document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && f.m(t, e)
                })
            }, f.m = function(t, e) {
                e && f.z(f.f, t.document.documentElement), f.p = u
            }, f.b = function(t) {
                f.j.console && f.debug && f.j.console.log(t)
            }, f.z = function(t, e) {
                var n = e.firstChild;
                for (f.W(t, e); n; n = n.nextSibling) 1 === n.nodeType && f.z(t, n)
            }, f.V = function(t) {
                return t in f.h && f.h[t]
            }, f.o = function(t, e) {
                f.q(t).CustomID = e
            }, f.O = function(t, e) {
                f.o(t, e), f.f[e] = t
            }, f.D = function(t, e) {
                e in f.f ? (f.h[e] = u, f.b("duplicate registration of custom id " + e + " were found on multiple elements")) : (f.o(t, e), f.p && (f.f[e] = t))
            }, f.Q = f.d, f.d = function(t) {
                return f.q(t).CustomID
            }, f.q = function(t) {
                var e = t.ClickTale;
                return e || (e = {}, t.ClickTale = e), e
            }, f.W = function(t, e) {
                var n = f.d(e);
                n && (n in t ? (f.h[n] = u, f.b("duplicate registration of custom id " + n + "were found on multiple elements")) : t[n] = e)
            }, f.H = function(t, e, n) {
                var o = !(t[0] instanceof Array);
                return o && (t = [t]), t = r(t, function(t) {
                    return f.I(t, e, n)
                }), o ? t[0] : t
            }, f.F = function(t, e) {
                var n = !(t[0] instanceof Array);
                n && (t = [t]);
                var o = r(t, function(t) {
                    return f.K(t, e)
                });
                return n ? o[0] : o
            }, f.I = function(t, e, n) {
                return (t = f.r(e, t)).a && 0 < t.e.length && (t.a = f.l(t.e, t.a)), !n && t.a && f.v(t.a) ? m : t.a
            }, f.K = function(t, e) {
                var n = f.r(e, t);
                if (n.a && 0 < n.e.length && (n.a = f.l(n.e, n.a)), n.a) {
                    var o = {};
                    return o.dom = n.a, o.isHidden = f.v(n.a), o
                }
                return m
            }, f.v = function(t) {
                return "hidden" === f.t(t).visibility.toLowerCase()
            }, f.t = function(t) {
                return f.j.getComputedStyle ? f.j.getComputedStyle(t, m) : t.currentStyle
            }, f.G = function(t) {
                return f.f[t]
            }, f.J = function(t) {
                return !!f.d(t)
            }, f.$ = function(t, e) {
                return f.d(t) === e
            }, f.n = {}, f.i = function(t) {
                return f.n[t] || (f.n[t] = f.B(t)), f.n[t]
            }, f.B = function(t) {
                return (t.charCodeAt(0) - 64 & 31) + ((t.charCodeAt(1) - 64 & 28) << 3) + ((t.charCodeAt(2) - 64 & 30) << 7)
            }, f.k = function(t) {
                return (t.charCodeAt(0) - 64 & 7) + ((t.charCodeAt(0) - 64 & 16) >> 1) + ((t.charCodeAt(1) - 64 & 4) << 2) + ((t.charCodeAt(3) - 64 & 4) << 3)
            }, f.u = function(t, e) {
                var n = e.elementID,
                    o = e.customID,
                    r = f.c(t, "id"),
                    a = f.d(t);
                return !f.g([o, a]) && o !== a || !f.g([n, r]) && n !== r
            }, f.X = function(t, e) {
                var n = e.name,
                    o = f.c(t, "name");
                return f.d(t), !f.g([n, o]) && n !== o
            }, f.l = function(t, e, n) {
                var o, r = 0,
                    a = m;
                o = d;
                for (var i = m, c = m, l = t.length, s = 0; e && s < l; s++) {
                    for (o = d, c = t[s], a = e.firstChild, r = 0; !o && a; a = a.nextSibling)
                        if (1 === a.nodeType && f.i(a.tagName) === c.tagCode) {
                            if (r === c.index) {
                                if (i = a, !n && (f.u(i, c) || f.X(i, c))) return m;
                                if (e = c.typeCode, o = f.c(i, "type"), !f.g([e, o]) && o && e != f.k(o)) return m;
                                o = u, e = i
                            }
                            r++
                        }
                    if (o === d) return m
                }
                return (o = o && "none" !== f.t(e).display.toLowerCase()) ? e : m
            }, f.c = function(t, e) {
                var n = t.getAttributeNode(e);
                return n ? n.value : m
            }, f.g = function(t) {
                return e(t, function(t) {
                    return !t
                })
            }, f.s = function(t, e) {
                var n = e.customID;
                return n ? f.L(n) : f.M(t, e.elementID)
            }, f.L = function(t) {
                var e;
                return f.V(t) ? f.b("duplicate custom id " + t + " were found on multiple elements") : e = f.G(t), e
            }, f.M = function(t, e) {
                var n, o;
                return e ? (o = f.P(t, e)) && 0 !== o.length ? 1 === o.length ? (n = o[0], f.J(n) ? m : n) : (f.b("duplicate id " + e + " were found on multiple elements."), n) : (f.b("no element with id " + e + " was found."), n) : n
            }, f.P = function(e, n) {
                var o;
                try {
                    (o = e.querySelectorAll("#" + n)).length || (o = e.querySelectorAll("[id='" + n.replace(/'/g, "\\'") + "']"))
                } catch (t) {
                    o = e.querySelectorAll("[id='" + n.replace(/'/g, "\\'") + "']")
                }
                return o
            }, f.r = function(t, e) {
                for (var n, o, r, a = e.length, i = a, c = {}, l = t.ownerDocument; 0 < i; i--)
                    if (r = e[i - 1], !(o = f.s(l, r)) && (n = r.name) && i === a && (o = f.S(l, n, e, i)) && f.u(o, r) && (o = m), o) return n = e.slice(i, a), c.e = n, c.a = o, c;
                return c.e = e, c.a = t, c
            }, f.S = function(t, e, n, o) {
                var r, a = m;
                o = n.slice(0, o - 1);
                return (r = f.T(t, o)) ? a = f.N(t, e, r, n) : f.b("could not resolve form. form doesn't have an anchor."), a
            }, f.N = function(t, e, n, o) {
                var r;
                if (1 < (t = t.getElementsByName(e)).length) {
                    if (t = function(t, e) {
                            var n;
                            if (t.filter) n = t.filter(e, void 0);
                            else {
                                n = [];
                                for (var o = t.length, r = window, a = 0; a < o; a++) {
                                    var i = t[a];
                                    e.call(r, i, a) && n.push(i)
                                }
                            }
                            return n
                        }(t, function(t) {
                            return f.w(n, t)
                        }), f.C(t)) return e = o[o.length - 1].index, f.R(t, e);
                    f.b("duplicate name " + e + " found on multiple non radio elements.")
                } else 1 === t.length && (o = t[0], f.w(n, o) ? r = o : f.b("could not resolve nested element with name " + e + " in form."));
                return r
            }, f.R = function(t, e) {
                for (var n, o, r, a = [], i = d, c = 0; c < t.length; c++)
                    if (o = (r = t[c]).parentNode, -1 === l(a, o) && (a.push(o), (o = o.getElementsByTagName(r.tagName)).length - 1 >= e)) {
                        if (i) return m;
                        n = o[e], i = u
                    }
                return n
            }, f.C = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (!f.U(t[e])) return d;
                return u
            }, f.U = function(t) {
                return !!(t = f.c(t, "type")) && "radio" === t.toLowerCase()
            }, f.w = function(t, e) {
                return n(t, e)
            }, f.T = function(t, e) {
                for (var n, o = e.length; 0 < o; o--)
                    if (n = e[o - 1], (n = f.s(t, n)) && 1 === n.nodeType && "form" === n.tagName.toLowerCase()) return n;
                return m
            }, f.Y = function(t, e) {
                var n, o = 0,
                    r = 0,
                    a = m,
                    i = [],
                    c = t;
                if (!e) return f.b("Base element was not specified"), i;
                for (; c && c !== e;)
                    if (1 !== c.nodeType) c = c.parentNode;
                    else {
                        for (r = 0, a = {}, t = c, o = f.i(c.nodeName), a.tagCode = o, (n = f.d(t)) && (a.customID = n), (n = f.c(t, "id")) && (a.elementID = n), (n = f.c(t, "name")) && (a.name = n), (n = f.c(t, "type")) && (a.typeCode = f.k(n)), n = c; n = n.previousSibling;) f.i(n.nodeName) === o && r++;
                        a.index = r, c = c.parentNode, i.push(a)
                    }
                return i.reverse(), i
            }, o("ct.ElementAddressing.bootstrap", f.A), o("ct.ElementAddressing.elementFromPath", f.H), o("ct.ElementAddressing.pathFromElement", f.Y), o("ct.ElementAddressing.elementAndVisibilityFromPath", f.F), o("ct.ElementAddressing.setCustomElementID", f.D), o("ct.ElementAddressing.getCustomElementID", f.Q), o("ct.ElementAddressing.forceSetCustomElementID", f.O), o("ct.ElementAddressing.calcTagCode", f.i), o("ct.ElementAddressing.calcTypeCode", f.k), o("ct.ElementAddressing.findByPath", f.l), o("ct.ElementAddressing.version", f.version)
        }

        function o(t, e) {
            var n, o = t.split("."),
                r = a;
            o[0] in r || !r.execScript || r.execScript("var " + o[0]);
            for (; o.length && (n = o.shift());) o.length || void 0 === e ? r = r[n] ? r[n] : r[n] = {} : r[n] = e
        }

        function r(t, e) {
            var n;
            if (t.map) n = t.map(e, void 0);
            else {
                n = [];
                for (var o = t.length, r = window, a = 0; a < o; a++) n.push(e.call(r, t[a], a))
            }
            return n
        }
    }();
    var ctRecordingPromise = new CTSimplePromise,
        ctMonitorReadyPromise = new CTSimplePromise,
        ctAnyRecorderReadyPromise = new CTAnyPromise([ctRecordingPromise, ctMonitorReadyPromise]),
        CTLogicalPageEvent = function() {
            var e = [];

            function n() {
                setTimeout(function() {
                    for (var t = 0; t < e.length; t++) e[t]()
                }, 250)
            }
            return ctAnyRecorderReadyPromise.then(function() {
                if (window.ClickTaleMonitor) {
                    var t = window.ClickTaleMonitor.restart;
                    ClickTaleMonitor.restart = function() {
                        "function" == typeof t && t.apply(this, arguments), n()
                    }
                } else {
                    t = window.ClickTaleLogical;
                    window.ClickTaleLogical = function() {
                        "function" == typeof t && t.apply(this, arguments), n()
                    }
                }
            }), {
                subscribe: function(t) {
                    e.push(t)
                }
            }
        }(),
        exports = {},
        rulesEngine = exports;

    function Rule(t) {
        void 0 !== t.name && (logger.log("Rule name: ", t.name), this.name = t.name);
        var e = void 0 !== t.states ? t.states : t.conditionData.states,
            n = void 0 !== t.triggers ? t.triggers : t.conditionData.triggers,
            o = actionsFactory.construct(t.action, t),
            r = statesFactory.construct(e),
            a = observablesFactory.construct(n, r);
        a && a.subscribe(function(t) {
            if (r.evaluate()) return o.execute(t)
        })
    }

    function Observable() {
        this.subscribers = []
    }
    Observable.prototype.subscribe = function(t) {
        this.subscribers.push(t)
    }, Observable.prototype.notify = function(n) {
        var o;
        return this.subscribers.forEach(function(t) {
            var e = t(n);
            null != e && (o = e)
        }), o
    };
    var observablesFactory = {
        construct: function(t, e) {
            return null == t ? null : this["construct" + t.type.replace("Condition", "")](t, e)
        }
    };

    function State(t) {}
    State.prototype.evaluate = function(t) {};
    var statesFactory = {
            construct: function(t) {
                return this["construct" + t.type.replace("Condition", "")](t)
            }
        },
        actionsFactory = {
            construct: function(t, e) {
                return this["construct" + t.type.replace("Action", "")](t, e)
            }
        };

    function Action(t) {}
    Action.prototype.execute = function(t) {};
    var ctSelectorUtils = function() {
        var a = {};

        function n(t) {
            var e = [];
            if (t.elementAddressing && "undefined" != typeof ct && void 0 !== ct.ElementAddressing && void 0 !== ct.ElementAddressing.elementFromPath) {
                var n = ct.ElementAddressing.elementFromPath(t.elementAddressing, document.body, !0);
                n && e.push(n)
            } else if (t.querySelector) try {
                e = Array.prototype.slice.call(document.querySelectorAll(t.querySelector))
            } catch (t) {}
            return e
        }

        function i(t, e) {
            var n, o = t.length;
            for (n = 0; n < o; n += 1)
                if (t[n] === e) return !0;
            return !1
        }
        var o = ["DIV", "SPAN", "A", "LABEL"];
        return a.isElementVisible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) && function(e) {
                return null != e && "object" == typeof e && (o.findIndex(function(t) {
                    return t == e.tagName
                }) < 0 || "" != e.innerHTML.trim())
            }(t)
        }, a.bindEventHandler = function(t, e, n) {
            var o = function(t) {
                switch (Object.keys(t)[0]) {
                    case "elementAddressing":
                        return JSON.stringify(t.elementAddressing);
                    case "querySelector":
                        return t.querySelector
                }
            }(e.ctSelector);
            t[o] = t[o] || [], t[o].push({
                callback: n,
                triggerData: e
            })
        }, a.isAncestor = function(t, e) {
            return null != a.getAncestorDomElement(t, e)
        }, a.getAncestorDomElement = function(t, e) {
            for (var n = !1, o = e, r = a.getDOMelements(t); !n && "HTML" !== o.tagName && o.parentElement;)(n = i(r, o)) || (o = o.parentElement);
            return n ? o : null
        }, a.getDOMelements = function(t) {
            if (Array.isArray(t)) {
                var e = [];
                return t.forEach(function(t) {
                    e = e.concat(n(t))
                }), e
            }
            return n(t)
        }, a.getFirstDOMelement = function(t) {
            if (t && null != t) {
                var e = n(t);
                if (null != e && 0 < e.length) return e[0]
            }
            return null
        }, a.compareData = function(t, e, n) {
            if (void 0 === t || null == t || void 0 === e || null == e) return !1;
            switch (void 0 === n && (n = "Equals"), n) {
                case "Equals":
                    return t.toString() === e.toString();
                case "NotEquals":
                    return t.toString() != e.toString();
                case "StartsWith":
                    return 0 == t.toString().indexOf(e.toString());
                case "EndsWith":
                    return 0 <= t.toString().indexOf(e.toString(), t.toString().length - e.toString().length);
                case "Contains":
                    return 0 <= t.toString().indexOf(e.toString());
                case "NotStartsWith":
                    return 0 != t.toString().indexOf(e.toString());
                case "NotEndsWith":
                    return t.toString().indexOf(e.toString(), t.toString().length - e.toString().length) < 0;
                case "NotContains":
                    return t.toString().indexOf(e.toString()) < 0;
                case "Greater":
                    return Number(t) > Number(e);
                case "Less":
                    return Number(t) < Number(e);
                case "GreaterOrEquals":
                    return Number(t) >= Number(e);
                case "LessOrEquals":
                    return Number(t) <= Number(e)
            }
            return !1
        }, a
    }();

    function ClickObservable(t) {
        Observable.call(this);
        var e = this;
        e.triggerData = t, ctSelectorUtils.bindEventHandler(clickHandlers, t, function(t) {
            e.notify({
                domElement: t,
                triggerSource: "mouse click",
                domType: e.triggerData.domType
            })
        })
    }
    ClickObservable.prototype = Object.create(Observable.prototype), ClickObservable.prototype.constructor = ClickObservable, observablesFactory.constructClick = function(t) {
        return new ClickObservable(t)
    }, document.addEventListener && (document.addEventListener("mousedown", onMouseDown, !1), document.addEventListener("mouseup", onMouseUp, !1));
    var clickHandlers = {},
        currentMouseDownElement = null;

    function onMouseDown(t) {
        currentMouseDownElement = t.target || t.srcElement
    }

    function onMouseUp(t) {
        var e = t.target || t.srcElement;
        if (e == currentMouseDownElement) {
            for (var n in clickHandlers)
                if (clickHandlers.hasOwnProperty(n)) {
                    var o = clickHandlers[n][0].triggerData;
                    if (!(void 0 !== o.excludeTagNames && 0 <= o.excludeTagNames.findIndex(function(t) {
                            return t == e.tagName
                        }))) {
                        var r = ctSelectorUtils.getAncestorDomElement(o.ctSelector, e);
                        null != r && clickHandlers[n].forEach(function(t) {
                            if (void 0 !== o.value) {
                                var e = {
                                        subType: o.subType,
                                        name: o.name
                                    },
                                    n = dynamicEventNameUtils.getDomElementContent(e, r);
                                if (!ctSelectorUtils.compareData(n, o.value, o.comparisonMode)) return
                            }
                            t.callback.call(null, r)
                        })
                    }
                }
            currentMouseDownElement = null
        } else currentMouseDownElement = null
    }

    function DelayObservable(t) {
        Observable.call(this);
        var e = this;

        function n() {
            setTimeout(function() {
                e.notify()
            }, t)
        }
        onRulesBoundHandlers.push(n), CTLogicalPageEvent.subscribe(n)
    }
    DelayObservable.prototype = Object.create(Observable.prototype), DelayObservable.prototype.constructor = DelayObservable, observablesFactory.constructDelay = function(t) {
        return new DelayObservable(t.delay)
    };
    var elementDeclarationHandlers = {};

    function ElementDeclarationObservable(t) {
        this.triggerData = t, Observable.call(this);
        var e = this;
        ctSelectorUtils.bindEventHandler(elementDeclarationHandlers, t, function(t) {
            return logger.log("Element declaration event associated with selector: ", e.triggerData.ctSelector), e.notify()
        })
    }

    function EnterClickObservable(t) {
        Observable.call(this);
        var e = this;
        e.triggerData = t, ctSelectorUtils.bindEventHandler(enterClickHandlers, t, function(t) {
            e.notify({
                domElement: t,
                triggerSource: "enter click",
                domType: e.triggerData.domType
            })
        })
    }
    ElementDeclarationObservable.prototype = Object.create(Observable.prototype), ElementDeclarationObservable.prototype.constructor = ElementDeclarationObservable, observablesFactory.constructElementDeclaration = function(t) {
        return new ElementDeclarationObservable(t)
    }, window.ClickTaleSettings = window.ClickTaleSettings || {}, window.ClickTaleSettings.ElementDeclarationAugmentElementPathHandler = function(o) {
        var r;
        for (var t in elementDeclarationHandlers)
            if (elementDeclarationHandlers.hasOwnProperty(t)) {
                var a = elementDeclarationHandlers[t][0].triggerData,
                    i = ctSelectorUtils.getAncestorDomElement(a.ctSelector, o);
                null != i && elementDeclarationHandlers[t].forEach(function(t) {
                    if (void 0 !== a.value) {
                        var e = {
                                subType: a.subType,
                                name: a.name
                            },
                            n = dynamicEventNameUtils.getDomElementContent(e, i);
                        if (!ctSelectorUtils.compareData(n, a.value, a.comparisonMode)) return
                    }
                    r = t.callback.call(null, o) || r
                })
            }
        return null != r ? {
            type: "pathdata",
            data: {
                categoryid: r
            }
        } : null
    }, window.ClickTaleSettings.defineElementDeclarationAugmentElementPathHandler = function() {
        var e = 10,
            n = 0;
        ! function t() {
            n++, "function" == typeof ClickTaleAddAugmentElementPathHandler ? (logger.log("define ElementDeclarationAugmentElementPathHandler"), ClickTaleAddAugmentElementPathHandler("pathdata", window.ClickTaleSettings.ElementDeclarationAugmentElementPathHandler)) : n <= e && setTimeout(t, 500)
        }()
    }, window.ClickTaleSettings.defineElementDeclarationAugmentElementPathHandler(), EnterClickObservable.prototype = Object.create(Observable.prototype), EnterClickObservable.prototype.constructor = EnterClickObservable, observablesFactory.constructEnterClick = function(t) {
        return new EnterClickObservable(t)
    }, document.addEventListener && document.addEventListener("keypress", onKeyPress, !1);
    var enterClickHandlers = {};

    function onKeyPress(t) {
        if (13 == t.which) {
            var e = t.target || t.srcElement;
            for (var n in enterClickHandlers)
                if (enterClickHandlers.hasOwnProperty(n)) {
                    var o = enterClickHandlers[n][0].triggerData;
                    if (!(void 0 !== o.excludeTagNames && 0 <= o.excludeTagNames.findIndex(function(t) {
                            return t == e.tagName
                        }))) {
                        var r = ctSelectorUtils.getAncestorDomElement(o.ctSelector, e);
                        null != r && enterClickHandlers[n].forEach(function(t) {
                            if (void 0 !== o.value) {
                                var e = {
                                        subType: o.subType,
                                        name: o.name
                                    },
                                    n = dynamicEventNameUtils.getDomElementContent(e, r);
                                if (!ctSelectorUtils.compareData(n, o.value, o.comparisonMode)) return
                            }
                            t.callback.call(null, r)
                        })
                    }
                }
        }
    }

    function IntervalObservable(t, e) {
        Observable.call(this);
        var n = this,
            o = null,
            r = 0;

        function a() {
            o = setInterval(function() {
                e.evaluate() ? (clearInterval(o), n.notify()) : r >= t.totalTime && clearInterval(o), r += t.intervalTime
            }, t.intervalTime)
        }
        void 0 === t.totalTime && (t.totalTime = 15e3), void 0 !== t.startListenImmediately && t.startListenImmediately ? a() : (onRulesBoundHandlers.push(a), CTLogicalPageEvent.subscribe(a))
    }
    IntervalObservable.prototype = Object.create(Observable.prototype), IntervalObservable.prototype.constructor = IntervalObservable, observablesFactory.constructInterval = function(t, e) {
        return new IntervalObservable(t, e)
    };
    var linkAnalyticsHandlers = {};

    function LinkAnalyticsObservable(t) {
        this.triggerData = t, Observable.call(this);
        var e = this;
        ctSelectorUtils.bindEventHandler(linkAnalyticsHandlers, t, function(t) {
            return logger.log("Link Analytics event associated with selector: ", e.triggerData.ctSelector), e.notify()
        })
    }

    function OrObservable(t) {
        Observable.call(this);
        var e = this;
        t.forEach(function(t) {
            t.subscribe(function(t) {
                return e.notify(t)
            })
        })
    }

    function PageLoadObservable() {
        Observable.call(this);
        var t = this;

        function e() {
            logger.log("PageLoad event"), t.notify()
        }
        onRulesBoundHandlers.push(e), CTLogicalPageEvent.subscribe(e)
    }
    LinkAnalyticsObservable.prototype = Object.create(Observable.prototype), LinkAnalyticsObservable.prototype.constructor = LinkAnalyticsObservable, observablesFactory.constructLinkAnalytics = function(t) {
        return new LinkAnalyticsObservable(t)
    }, window.ClickTaleSettings = window.ClickTaleSettings || {}, window.ClickTaleSettings.LinkAnalyticsAugmentElementPathHandler = function(o) {
        var r;
        for (var t in linkAnalyticsHandlers)
            if (linkAnalyticsHandlers.hasOwnProperty(t)) {
                var a = linkAnalyticsHandlers[t][0].triggerData,
                    i = ctSelectorUtils.getAncestorDomElement(a.ctSelector, o);
                null != i && linkAnalyticsHandlers[t].forEach(function(t) {
                    if (void 0 !== a.value) {
                        var e = {
                                subType: a.subType,
                                name: a.name
                            },
                            n = dynamicEventNameUtils.getDomElementContent(e, i);
                        if (!ctSelectorUtils.compareData(n, a.value, a.comparisonMode)) return
                    }
                    r = t.callback.call(null, o) || r
                })
            }
        return null != r ? {
            data: {
                interesting: r
            }
        } : null
    }, window.ClickTaleSettings.defineLinkAnalyticsAugmentElementPathHandler = function() {
        var e = 10,
            n = 0;
        ! function t() {
            n++, "function" == typeof ClickTaleAddAugmentElementPathHandler ? (logger.log("define LinkAnalyticsAugmentElementPathHandler"), ClickTaleAddAugmentElementPathHandler("Linkanalytics", window.ClickTaleSettings.LinkAnalyticsAugmentElementPathHandler)) : n <= e && setTimeout(t, 500)
        }()
    }, window.ClickTaleSettings.defineLinkAnalyticsAugmentElementPathHandler(), OrObservable.prototype = Object.create(Observable.prototype), OrObservable.prototype.constructor = OrObservable, observablesFactory.constructOr = function(t) {
        return new OrObservable(t.childConditions.map(function(t) {
            return observablesFactory.construct(t)
        }))
    }, PageLoadObservable.prototype = Object.create(Observable.prototype), PageLoadObservable.prototype.constructor = PageLoadObservable, observablesFactory.constructPageLoad = function() {
        return new PageLoadObservable
    };
    var rules, dynamicEventNameUtils = function() {
        var t = {
                getDynamicEventName: function(t, e) {
                    var n = "";
                    if (t && t.parts && 0 < t.parts.length) {
                        for (var o = void 0 !== t.delimiter ? t.delimiter : " ", r = void 0 !== t.triggerEventNameMode ? t.triggerEventNameMode : "allComponentsExist", a = 0, i = 0, c = 0; c < t.parts.length; c++) {
                            var l = t.parts[c],
                                s = "";
                            try {
                                switch (l.type) {
                                    case "TextValue":
                                        s = l.name;
                                        break;
                                    case "ElementValue":
                                        s = u(l);
                                        break;
                                    case "TriggeredElementValue":
                                        void 0 !== e && null != e && (s = m(l, e));
                                        break;
                                    case "CookieValue":
                                        s = v(l.name);
                                        break;
                                    case "JSVariableValue":
                                        s = d(l.name);
                                        break;
                                    case "SessionStorageValue":
                                        s = p(l.name);
                                        break;
                                    case "LocalStorageValue":
                                        s = y(l.name);
                                        break;
                                    case "CustomCodeValue":
                                        s = "function" == typeof l.execMethod ? l.execMethod(l.name) : h(l.name);
                                        break;
                                    case "QueryStringParamName":
                                        s = b(l.name);
                                        break;
                                    case "BookmarkName":
                                        s = g();
                                        break;
                                    case "URLValue":
                                        s = f()
                                }
                            } catch (t) {
                                void 0 !== logger && logger.error("getDynamicEventName: ", t)
                            }
                            if (null == s && (s = ""), "TextValue" != l.type && i++, "" == s && (a++, "allComponentsExist" == r)) break;
                            n += o + s
                        }
                        0 < n.length && (n = n.substring(o.length)), ("allComponentsExist" == r && 0 < a || "atLeastOneComponentExist" == r && i <= a || a == t.parts.length) && (n = "")
                    }
                    return n
                }
            },
            u = function(t) {
                var e = ctSelectorUtils.getFirstDOMelement(t.ctSelector);
                return null != e ? m(t, e) : ""
            },
            m = function(t, e) {
                switch (t.subType) {
                    case "Attribute":
                        var n = t.name,
                            o = e.getAttribute(n);
                        return null != o ? o : e[n];
                    case "AllInnerText":
                        return i(e).join(" ");
                    case "InnerText":
                    default:
                        return void 0 !== e.firstChild && null != e.firstChild && null != e.firstChild.nodeValue ? "function" == typeof e.firstChild.nodeValue.trim ? e.firstChild.nodeValue.trim() : e.firstChild.nodeValue : void 0 !== e.value && null != e.value ? "function" == typeof e.value.trim ? e.value.trim() : e.value : ""
                }
            };
        t.getDomElementContent = function(t, e) {
            return m(t, e)
        };
        var d = function(t) {
            for (var e = t.split("."), n = window[e[0]], o = 1; o < e.length; o++) {
                if (void 0 === n) return null;
                n = n[e[o]]
            }
            return r(n)
        };
        t.getJSVariable = function(t) {
            return d(t)
        };
        var r = function(t) {
                return t = void 0 === t || "object" == typeof t ? null : t.toString()
            },
            f = function(t) {
                return t = t || "-", window.location.pathname.split("/").join(t).substring(1)
            },
            g = function() {
                return window.location.hash ? window.location.hash.split("#")[1] : null
            },
            v = function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    for (var r = n[o];
                        " " == r.charAt(0);) r = r.substring(1);
                    if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
                }
                return ""
            };
        t.getCookieValue = function(t) {
            return v(t)
        };

        function e(t, e) {
            if (void 0 === window[t]) {
                var n, o, r = ["CT_testRules", "CT_testRules_Loaded", "ve-settings-highlighting", "ctRuleEngineDebug"];
                window[t] = {};
                for (var a = 0, i = e.length; a < i; ++a)
                    if (n = e.key(a), !(0 <= r.indexOf(n))) {
                        o = e.getItem(n);
                        try {
                            o = JSON.parse(o)
                        } catch (t) {}
                        window[t][n.replace(/\./g, "_")] = o
                    }
            }
            return t
        }

        function n() {
            return e("ctLocalStorage", window.localStorage)
        }
        t.setLocalStorageInGlobalVariable = function() {
            return n()
        };

        function o() {
            return e("ctSessionStorage", window.sessionStorage)
        }
        t.setSessionStorageInGlobalVariable = function() {
            return o()
        };
        var p = function(t) {
            if (!window.sessionStorage || void 0 === t || "" == t) return null;
            var e = o();
            return d(e += "." + t)
        };
        t.getSessionStorageValue = function(t) {
            return p(t)
        };
        var y = function(t) {
            if (!window.localStorage || void 0 === t || "" == t) return null;
            var e = n();
            return d(e += "." + t)
        };
        t.getLocalStorageValue = function(t) {
            return y(t)
        };
        var h = function(t) {
            return ctCustomCode_PrePCC[t]()
        };
        t.getCustomCodeValue = function(t) {
            return h(t)
        };
        var b = function(t, e) {
            e = e || window.location.href, t = t.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        };
        t.getQueryStringParameterValue = function(t) {
            return b(t)
        };
        var a = function(t, e) {
                for (e(t), t = t.firstChild; t;) a(t, e), t = t.nextSibling
            },
            i = function(t) {
                "string" == typeof t && (t = document.getElementById(t));
                var e = [];
                return a(t, function(t) {
                    switch (t.nodeType) {
                        case 1:
                            void 0 !== t.value && null != t.value && e.push("function" == typeof t.value.trim ? t.value.trim() : t.value);
                            break;
                        case 3:
                            void 0 !== t.nodeValue && null != t.nodeValue && e.push("function" == typeof t.nodeValue.trim ? t.nodeValue.trim() : t.nodeValue)
                    }
                }), e
            };
        return t
    }();

    function CTEventAction(t) {
        this.actionData = t
    }

    function ElementCategoryAction(t) {
        this.categoryId = t
    }

    function LinkAnalyticsAction(t) {
        this.useThisElement = t
    }

    function FormInitEventAction(t) {
        this.actionData = t
    }

    function FormSubmitEventAction(t) {
        this.actionData = t
    }

    function FormSuccessFailureAction(t) {
        this.actionData = t
    }

    function MultipleAction(t) {
        this.children = t || []
    }

    function TestRuleEventAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function DynamicEventNameAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function StaticEventNameAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function AndCondition(t) {
        this.children = t
    }

    function CookieExistsState(t) {
        this.stateData = t
    }

    function CustomCodeSuccessState(t) {
        this.stateData = t
    }

    function ExistsState(t) {
        this.stateData = t
    }

    function JSVariableExistsState(t) {
        this.stateData = t
    }

    function LocalStorageExistsState(t) {
        this.stateData = t
    }

    function LocationState(t) {
        logger.log("stateData: ", t), this.url = t.url.toLowerCase(), this.mode = t.mode, this.ignoreQueryString = t.ignoreQueryString
    }

    function NotCondition(t) {
        this.childState = t
    }

    function OrCondition(t) {
        this.children = t
    }

    function QSParamExistsState(t) {
        this.stateData = t
    }

    function SessionStorageExistsState(t) {
        this.stateData = t
    }

    function UrlHashExistsState(t) {
        this.urlHashValue = t
    }

    function init() {
        onDomReady(function() {
            startRulesEngine(), whenRecording(function() {
                ctRecordingPromise.resolve()
            }), whenMonitor(function() {
                ctMonitorReadyPromise.resolve()
            })
        })
    }

    function whenRecording(t) {
        if (void 0 !== window.ClickTaleIsRecording && !0 === window.ClickTaleIsRecording()) t();
        else {
            var e = window.ClickTaleOnRecording;
            window.ClickTaleOnRecording = function() {
                t(), void 0 !== e && "function" == typeof e && e.apply(this, arguments)
            }
        }
    }

    function whenMonitor(t) {
        if (void 0 !== window.ClickTaleMonitor)
            if (void 0 !== window.ClickTaleMonitor.isMonitoring && window.ClickTaleMonitor.isMonitoring()) t();
            else if (void 0 !== window.ClickTaleMonitor.Settings) {
            window.ClickTaleMonitor.Settings.get().onReady(function() {
                t()
            })
        }
    }

    function startRulesEngine() {
        try {
            if (!isSupportedBrowser()) return;
            logger.log("startRulesEngine"), "undefined" == typeof ct && (window.ct = {}), "undefined" != typeof ct && void 0 !== ct.ElementAddressing && void 0 !== ct.ElementAddressing.bootstrap && ct.ElementAddressing.bootstrap(window, !0), sessionStorage.getItem("CT_testRules") ? buildRulesOnTestRulesMode() : buildRules()
        } catch (t) {
            logger.error("startRulesEngine error: ", t)
        }
    }

    function buildRulesOnTestRulesMode() {
        sessionStorage.setItem("CT_testRules_BuildStarted", !0), sessionStorage.setItem("CT_testRules_Loaded", !1), logger.log("buildRulesOnTestRulesMode");
        var n = 20,
            o = 0;
        ! function t() {
            o++;
            var e = sessionStorage.getItem("CT_testRules_Loaded");
            logger.log("currentTry: ", o, ", CT_testRules_Loaded: ", e), void 0 !== e && "true" == e ? buildRules() : o <= n && setTimeout(t, 500)
        }()
    }

    function onDomReady(t) {
        var n = !1;

        function o() {
            n || (n = !0, t())
        }
        if ("complete" !== document.readyState && "interactive" !== document.readyState) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", o, !1);
            else if (document.attachEvent) {
                try {
                    var e = null != window.frameElement
                } catch (t) {}
                if (document.documentElement.doScroll && !e) {
                    ! function e() {
                        if (!n) try {
                            document.documentElement.doScroll("left"), o()
                        } catch (t) {
                            setTimeout(e, 10)
                        }
                    }()
                }
                document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && o()
                })
            }
            if (window.addEventListener) window.addEventListener("load", o, !1);
            else if (window.attachEvent) window.attachEvent("onload", o);
            else {
                var r = window.onload;
                window.onload = function() {
                    r && r(), o()
                }
            }
        } else o()
    }

    function isIE() {
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1])
    }

    function isSupportedBrowser() {
        try {
            return !isIE() || 9 < isIE()
        } catch (t) {
            return logger.error("isSupportedBrowser: ", t), !1
        }
    }

    function buildRules() {
        if ("undefined" != typeof ctRules_PrePCC && logger.log("buildRules, rules:", ctRules_PrePCC), "undefined" != typeof ctRules_PrePCC && null != ctRules_PrePCC) {
            var t = null;
            void 0 !== (t = ctRules_PrePCC.isTransformed ? rulesEngine.jsonUnpacker.unpack(ctRules_PrePCC.rules) : ctRules_PrePCC.rules) && null != t && (rules = t.map(function(t) {
                return new Rule(t)
            }))
        }
        onRulesBoundHandlers.forEach(function(t) {
            t()
        })
    }
    CTEventAction.prototype = Object.create(Action.prototype), CTEventAction.prototype.constructor = Action, CTEventAction.prototype.execute = function(e) {
            var n = this;
            ctRecordingPromise.then(function() {
                if ("function" == typeof window.ClickTaleIsRecording && window.ClickTaleIsRecording()) {
                    var t = n.getEventName(e);
                    "" != t && ("Static" == n.getEventNameMode() && n.actionData.isETR ? "function" == typeof window.ClickTaleEventTrigger ? window.ClickTaleEventTrigger(t) : logger.log("window.ClickTaleEventTrigger not exists") : "function" == typeof window.ClickTaleEvent ? window.ClickTaleEvent(t) : logger.log("window.ClickTaleEvent not exists"), logger.log("CT-Core ClickTaleEvent: " + t))
                } else logger.log("window.ClickTaleIsRecording not exists or recording is not active")
            })
        }, CTEventAction.prototype.getEventName = function(t) {
            var e = "",
                n = "";
            if (this.actionData.dynamicEventName) {
                var o = void 0 !== t ? t.domElement : null;
                "" != (n = dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, o)) && this.actionData.isPII && (e = "@ID@")
            } else n = this.actionData.eventName;
            return e + n
        }, CTEventAction.prototype.getEventNameMode = function() {
            var t = this.actionData.dynamicEventName;
            return void 0 !== t && null != t ? "Dynamic" : "Static"
        }, actionsFactory.constructCTEvent = function(t) {
            return new CTEventAction(t)
        }, ElementCategoryAction.prototype = Object.create(Action.prototype), ElementCategoryAction.prototype.constructor = Action, ElementCategoryAction.prototype.execute = function() {
            return this.categoryId
        }, actionsFactory.constructElementCategory = function(t) {
            return new ElementCategoryAction(t.categoryId)
        }, LinkAnalyticsAction.prototype = Object.create(Action.prototype), LinkAnalyticsAction.prototype.constructor = Action, LinkAnalyticsAction.prototype.execute = function() {
            return this.useThisElement
        }, actionsFactory.constructLinkAnalytics = function(t) {
            return new LinkAnalyticsAction(t.useThisElement)
        }, FormInitEventAction.prototype = Object.create(Action.prototype), FormInitEventAction.prototype.constructor = Action, FormInitEventAction.prototype.execute = function(t) {
            var r = this;
            ctRecordingPromise.then(function() {
                if ("" == r.actionData.form.querySelector)
                    if ("function" == typeof window.ClickTaleLogicalForm) {
                        0 < r.actionData.disabledForms.length && ("function" == typeof window.ClickTaleFormDisable ? r.actionData.disabledForms.forEach(function(t) {
                            var e = document.querySelector(t.querySelector);
                            null != e && window.ClickTaleFormDisable(e)
                        }) : logger.log("Unable to disable native forms because window.ClickTaleFormDisable not exists"));
                        var e = [];
                        r.actionData.form.fields.forEach(function(t) {
                            e = e.concat(Array.prototype.slice.call(document.querySelectorAll(t.querySelector)))
                        });
                        var t, n = Array.prototype.slice.call(document.querySelectorAll(r.actionData.form.submit.querySelector)),
                            o = window.ClickTaleLogicalForm(r.actionData.form.name, e, n);
                        if (logger.log("window.ClickTaleLogicalForm activated - formName: " + r.actionData.form.name + ", formId: " + o), void 0 !== (t = r.actionData.childRuleData)) {
                            t.action.children[0].form.id = o;
                            new Rule(t)
                        }
                    } else logger.log("Unable to init logical form because window.ClickTaleLogicalForm not exists");
                else if (void 0 !== (t = r.actionData.childRuleData)) new Rule(t)
            })
        }, actionsFactory.constructFormInitEvent = function(t) {
            return new FormInitEventAction(t)
        }, FormSubmitEventAction.prototype = Object.create(Action.prototype), FormSubmitEventAction.prototype.constructor = Action, FormSubmitEventAction.prototype.execute = function(t) {
            var o = this;
            ctRecordingPromise.then(function() {
                if (0 <= actionsFactory.submittedForms.findIndex(function(t) {
                        return t.name == o.actionData.form.name
                    })) {
                    var t = Object.assign({}, o.actionData);
                    t.submitSuccessful = !1, actionsFactory.constructFormSuccessFailure(t).execute()
                }
                if ("function" == typeof window.ClickTaleRegisterFormSubmit) {
                    var e = o.actionData.childRuleData;
                    if (void 0 !== o.actionData.form.id) window.ClickTaleRegisterFormSubmit(o.actionData.form.id), logger.log("window.ClickTaleRegisterFormSubmit activated for logical form - formName: " + o.actionData.form.name + ", formId: " + o.actionData.form.id), void 0 !== e && (e.action.form.id = o.actionData.form.id), actionsFactory.submittedForms.push({
                        name: o.actionData.form.name
                    });
                    else if ("" != o.actionData.form.querySelector) {
                        var n = document.querySelector(o.actionData.form.querySelector);
                        null != n ? (window.ClickTaleRegisterFormSubmit(n), logger.log("window.ClickTaleRegisterFormSubmit activated for native form - formName: " + o.actionData.form.name + ", formQuerySelector: " + o.actionData.form.querySelector), actionsFactory.submittedForms.push({
                            name: o.actionData.form.name
                        })) : logger.log("window.ClickTaleRegisterFormSubmit NOT activated for native form because not found - formName: " + o.actionData.form.name + ", formQuerySelector: " + o.actionData.form.querySelector)
                    }
                    if (void 0 !== e) new Rule(e)
                } else logger.log("Unable to register form submit because window.ClickTaleRegisterFormSubmit not exist")
            })
        }, actionsFactory.submittedForms = [], actionsFactory.constructFormSubmitEvent = function(t) {
            return new FormSubmitEventAction(t)
        }, FormSuccessFailureAction.prototype = Object.create(Action.prototype), FormSuccessFailureAction.prototype.constructor = Action, FormSuccessFailureAction.prototype.execute = function(t) {
            var e = this;
            ctRecordingPromise.then(function() {
                if (e.actionData.submitSuccessful && "function" == typeof window.ClickTaleRegisterFormSubmitSuccess)
                    if (void 0 !== e.actionData.form.id) window.ClickTaleRegisterFormSubmitSuccess(e.actionData.form.id), logger.log("window.ClickTaleRegisterFormSubmitSuccess activated for logical form - formName: " + e.actionData.form.name + ", formId: " + e.actionData.form.id);
                    else if ("" != e.actionData.form.querySelector) {
                    null != (t = document.querySelector(e.actionData.form.querySelector)) ? (window.ClickTaleRegisterFormSubmitSuccess(t), logger.log("window.ClickTaleRegisterFormSubmitSuccess activated for native form - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)) : logger.log("window.ClickTaleRegisterFormSubmitSuccess NOT activated for native form because not found - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)
                } else window.ClickTaleRegisterFormSubmitSuccess(), logger.log("window.ClickTaleRegisterFormSubmitSuccess activated for previous page");
                else if (e.actionData.submitSuccessful || "function" != typeof window.ClickTaleRegisterFormSubmitFailure) logger.log("Unable to register form submit status because window.ClickTaleRegisterFormSubmitSuccess or window.ClickTaleRegisterFormSubmitFailure not exist");
                else if (actionsFactory.submittedForms = actionsFactory.submittedForms.filter(function(t) {
                        return t.name != e.actionData.form.name
                    }), void 0 !== e.actionData.form.id) window.ClickTaleRegisterFormSubmitFailure(e.actionData.form.id), logger.log("window.ClickTaleRegisterFormSubmitFailure activated for logical form - formName: " + e.actionData.form.name + ", formId: " + e.actionData.form.id);
                else if ("" != e.actionData.form.querySelector) {
                    var t;
                    null != (t = document.querySelector(e.actionData.form.querySelector)) ? (window.ClickTaleRegisterFormSubmitFailure(t), logger.log("window.ClickTaleRegisterFormSubmitFailure activated for native form - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)) : logger.log("window.ClickTaleRegisterFormSubmitFailure NOT activated for native form because not found - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)
                } else window.ClickTaleRegisterFormSubmitFailure(), logger.log("window.ClickTaleRegisterFormSubmitFailure activated for previous page")
            })
        }, actionsFactory.constructFormSuccessFailure = function(t) {
            return new FormSuccessFailureAction(t)
        }, MultipleAction.prototype = Object.create(Action.prototype), MultipleAction.prototype.constructor = Action, MultipleAction.prototype.execute = function(e) {
            this.children.forEach(function(t) {
                t.execute(e)
            }), logger.log("Executing Multiple Action")
        }, actionsFactory.constructMultiple = function(t, e) {
            var n = this;
            return n.ruleData = e, new MultipleAction(t.children.map(function(t) {
                return actionsFactory.construct(t, n.ruleData)
            }))
        }, TestRuleEventAction.prototype = Object.create(Action.prototype), TestRuleEventAction.prototype.constructor = Action, TestRuleEventAction.prototype.execute = function(t) {
            this.triggeredDomElement = void 0 !== t ? t.domElement : null;
            var e = this.getTestActionParams(t);
            null != e && window.ct_ve_parent_window && null != e.data && window.ct_ve_parent_window.postMessage({
                name: "testRuleEvent",
                params: e
            }, "*")
        }, TestRuleEventAction.prototype.getTestActionParams = function(t) {
            var e = this.getData(t);
            return null == e ? null : {
                testTime: (new Date).getTime(),
                clickletId: this.ruleData.id,
                clickletName: this.ruleData.name,
                clickletTitle: this.ruleData.title,
                clickletType: this.ruleData.type,
                isActive: this.ruleData.isActive,
                platform: this.getPlatform(),
                data: e.text,
                tooltip: e.tooltip,
                eventNameMode: this.getEventNameMode()
            }
        }, TestRuleEventAction.prototype.getPlatform = function() {
            switch (this.actionData.actualType) {
                case "CTEventAction":
                    return "Core";
                case "StaticEventNameAction":
                case "DynamicEventNameAction":
                    return "CEC";
                default:
                    return ""
            }
        }, TestRuleEventAction.prototype.getEventNameMode = function() {
            return void 0 === this.actionData.dynamicEventName && void 0 === this.actionData.eventName ? "" : void 0 !== this.actionData.dynamicEventName && null != this.actionData.dynamicEventName ? "Dynamic" : "Static"
        }, TestRuleEventAction.prototype.getData = function(t) {
            var e = this,
                n = null,
                o = null,
                r = "";
            if (0 <= ["CTEventAction", "StaticEventNameAction", "DynamicEventNameAction"].findIndex(function(t) {
                    return t == e.actionData.actualType
                }) && "" == (r = this.getEventName())) return null;
            switch (this.actionData.actualType) {
                case "CTEventAction":
                    n = r;
                    break;
                case "StaticEventNameAction":
                    n = r + " [EventId:" + this.actionData.eventId + "]";
                    break;
                case "DynamicEventNameAction":
                    var a = 3;
                    if (this.ruleData.type, a = 4, this.actionData.isPII) break;
                    n = r + " [EventId: " + this.actionData.eventId + ", Type: " + a + "]";
                    break;
                case "ElementCategoryAction":
                    n = this.actionData.categoryName + " [CategoryId: " + this.actionData.categoryId + "]";
                    break;
                case "LinkAnalyticsAction":
                    n = "Use this element in Link Analytics [State: " + this.actionData.useThisElement + "]";
                    break;
                case "FormInitEventAction":
                    if (n = "FormInit - [FormName: " + this.actionData.form.name + "]", o = "Form state - init\nForm name - " + this.actionData.form.name + "\nForm mode - " + ("" == this.actionData.form.querySelector ? "logical" : "native"), 0 < this.actionData.disabledForms.length) {
                        o += "\nDisabled Forms";
                        for (var i = 0; i < this.actionData.disabledForms.length; i++) o += "\n - " + this.actionData.disabledForms[i].name
                    }
                    var c = this.actionData.childRuleData;
                    if (void 0 !== c) new Rule(c);
                    break;
                case "FormSubmitEventAction":
                    n = "FormSubmit - [FormName: " + this.actionData.form.name + "]", o = "Form state - submit\nForm name - " + this.actionData.form.name + "\nForm mode - " + ("" == this.actionData.form.querySelector ? "logical" : "native") + "\nForm submit source - " + t.triggerSource + "\nForm submit by - " + t.domType.replace("Element", " element");
                    var l = this;
                    if (0 <= actionsFactory.submittedForms.findIndex(function(t) {
                            return t.name == l.actionData.form.name
                        })) {
                        var s = Object.assign({}, this.actionData);
                        s.actualType = "FormSuccessFailureAction", s.submitSuccessful = !1, s.reason = "submitted twice", actionsFactory.constructTestRuleEvent(s, this.ruleData).execute()
                    }
                    actionsFactory.submittedForms.push({
                        name: this.actionData.form.name
                    });
                    var u = this.actionData.childRuleData;
                    if (void 0 !== u) new Rule(u);
                    break;
                case "FormSuccessFailureAction":
                    n = "FormSubmitStatus - [Status: " + (this.actionData.submitSuccessful ? "Successful" : "Failed") + "]", o = "Form state - submit status\nForm submit status - " + (this.actionData.submitSuccessful ? "successful" : "failed"), void 0 !== this.actionData.reason && (o += "\nSubmit " + (this.actionData.submitSuccessful ? "successful" : "failed") + " reason - " + this.actionData.reason), "" == this.actionData.form.name ? o += "\nForm mode - previous page" : o += "\nForm name - " + this.actionData.form.name + "\nForm mode - " + ("" == this.actionData.form.querySelector ? "logical" : "native");
                    l = this;
                    actionsFactory.submittedForms = actionsFactory.submittedForms.filter(function(t) {
                        return t.name != l.actionData.form.name
                    })
            }
            return {
                text: n,
                tooltip: null == o ? n : o
            }
        }, TestRuleEventAction.prototype.getEventName = function() {
            var t = "",
                e = "";
            return this.actionData.dynamicEventName ? "" != (e = dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, this.triggeredDomElement)) && this.actionData.isPII && (t = "@ID@") : e = this.actionData.eventName, t + e
        }, actionsFactory.constructTestRuleEvent = function(t, e) {
            return new TestRuleEventAction(t, e)
        }, DynamicEventNameAction.prototype = Object.create(Action.prototype), DynamicEventNameAction.prototype.constructor = Action, DynamicEventNameAction.prototype.execute = function(e) {
            var n = this;
            ctMonitorReadyPromise.then(function() {
                try {
                    if (n.actionData.isPII) return void logger.log("CEC ClickTaleEvent - not executed because IsPII", ", eventId: ", n.actionData.eventId);
                    n.triggeredDomElement = void 0 !== e ? e.domElement : null;
                    var t = n.geEventName();
                    if ("" != t) switch (n.ruleData.type) {
                        case "ClickEvent":
                        case "FormEvent":
                            if ("function" == typeof window.ClickTaleMonitor.addDynamicAction) try {
                                window.ClickTaleMonitor.addDynamicAction(n.actionData.eventId, t), logger.log("CEC ClickTaleEvent - ", "eventName: ", t, ", eventId: ", n.actionData.eventId)
                            } catch (t) {
                                logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addDynamicAction throws exception")
                            } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addDynamicAction not exists");
                            break;
                        case "PageEventByElement":
                        case "PageLoadEvent":
                            if ("function" == typeof window.ClickTaleMonitor.addPageTag) try {
                                window.ClickTaleMonitor.addPageTag(n.actionData.eventId, t), logger.log("CEC ClickTaleEvent - ", "eventName: ", t, ", eventId: ", n.actionData.eventId)
                            } catch (t) {
                                logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addPageTag throws exception")
                            } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addPageTag not exists")
                    } else logger.log("CEC ClickTaleEvent - event name is empty for eventId: ", n.actionData.eventId)
                } catch (t) {}
            })
        }, DynamicEventNameAction.prototype.geEventName = function() {
            return this.actionData.dynamicEventName ? dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, this.triggeredDomElement) : this.actionData.eventName
        }, actionsFactory.constructDynamicEventName = function(t, e) {
            return new DynamicEventNameAction(t, e)
        }, StaticEventNameAction.prototype = Object.create(Action.prototype), StaticEventNameAction.prototype.constructor = Action, StaticEventNameAction.prototype.execute = function() {
            var t = this;
            ctMonitorReadyPromise.then(function() {
                try {
                    "function" == typeof window.ClickTaleMonitor.addEvent ? (window.ClickTaleMonitor.addEvent(t.actionData.eventId), logger.log("CEC ClickTaleEvent - eventId: ", t.actionData.eventId)) : logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addEvent not exists")
                } catch (t) {}
            })
        }, actionsFactory.constructStaticEventName = function(t, e) {
            return new StaticEventNameAction(t, e)
        }, AndCondition.prototype = Object.create(State.prototype), (AndCondition.prototype.constructor = AndCondition).prototype.evaluate = function() {
            for (var t = 0; t < this.children.length; t++) {
                if (0 == this.children[t].evaluate()) return !1
            }
            return !0
        }, statesFactory.constructAnd = function(t) {
            return new AndCondition(t.childConditions.map(function(t) {
                return statesFactory.construct(t)
            }))
        }, CookieExistsState.prototype = Object.create(State.prototype), (CookieExistsState.prototype.constructor = CookieExistsState).prototype.evaluate = function() {
            for (var t = this, e = !1, n = document.cookie.split(";"), o = 0; o < n.length; o++)
                if (n[o].split("=")[0].trim() == t.stateData.name) {
                    e = !0;
                    break
                }
            if (e) {
                if (void 0 === t.stateData.value) return !0;
                var r = dynamicEventNameUtils.getCookieValue(t.stateData.name);
                return ctSelectorUtils.compareData(r, t.stateData.value, t.stateData.comparisonMode)
            }
            return !1
        }, statesFactory.constructCookieExists = function(t) {
            return new CookieExistsState(t)
        }, CustomCodeSuccessState.prototype = Object.create(State.prototype), (CustomCodeSuccessState.prototype.constructor = CustomCodeSuccessState).prototype.evaluate = function() {
            var t = dynamicEventNameUtils.getCustomCodeValue(this.stateData.name);
            return "boolean" == typeof t && t
        }, statesFactory.constructCustomCodeSuccess = function(t) {
            return new CustomCodeSuccessState(t)
        }, ExistsState.prototype = Object.create(State.prototype), (ExistsState.prototype.constructor = ExistsState).prototype.evaluate = function() {
            var o = this,
                t = ctSelectorUtils.getDOMelements(o.stateData.ctSelector);
            return void 0 !== o.stateData.triggerOnHidden && o.stateData.triggerOnHidden || (t = t.filter(function(t) {
                return ctSelectorUtils.isElementVisible(t)
            })), void 0 !== o.stateData.value ? t.some(function(t) {
                var e = {
                        subType: o.stateData.subType,
                        name: o.stateData.name
                    },
                    n = dynamicEventNameUtils.getDomElementContent(e, t);
                return ctSelectorUtils.compareData(n, o.stateData.value, o.stateData.comparisonMode)
            }) : 0 < t.length
        }, statesFactory.constructExists = function(t) {
            return new ExistsState(t)
        }, JSVariableExistsState.prototype = Object.create(State.prototype), (JSVariableExistsState.prototype.constructor = JSVariableExistsState).prototype.evaluate = function() {
            try {
                for (var t = this.stateData.name.split("."), e = window[t[0]], n = 1; n < t.length; n++) e = e[t[n]]
            } catch (t) {}
            return void 0 !== e && (void 0 === this.stateData.value || (null === e && (e = "null"), ctSelectorUtils.compareData(e, this.stateData.value, this.stateData.comparisonMode)))
        }, statesFactory.constructJSVariableExists = function(t) {
            return new JSVariableExistsState(t)
        }, LocalStorageExistsState.prototype = Object.create(State.prototype), (LocalStorageExistsState.prototype.constructor = LocalStorageExistsState).prototype.evaluate = function() {
            var t = dynamicEventNameUtils.getLocalStorageValue(this.stateData.name);
            return null != t && (void 0 === this.stateData.value || ctSelectorUtils.compareData(t, this.stateData.value, this.stateData.comparisonMode))
        }, statesFactory.constructLocalStorageExists = function(t) {
            return new LocalStorageExistsState(t)
        }, LocationState.prototype = Object.create(State.prototype), LocationState.prototype.constructor = State, LocationState.prototype.evaluate = function(t) {
            var e = t || window.location.href;
            if (0 == (e = e.toLowerCase()).indexOf(ctVEconfig.VE_PROXY_BASE_URL)) {
                var n = decodeURIComponent(dynamicEventNameUtils.getCookieValue("ct-proxyTargetHost"));
                e = e.replace(ctVEconfig.VE_PROXY_BASE_URL, n)
            }
            switch (!0 === this.ignoreQueryString && (e = e.split(/[?#]/)[0], this.url = this.url.split(/[?#]/)[0]), this.mode) {
                case "AllPages":
                    return !0;
                case "StartsWith":
                    return 0 == e.indexOf(this.url);
                case "EndsWith":
                    return 0 <= e.indexOf(this.url, e.length - this.url.length);
                case "Equals":
                    return e === this.url;
                case "Contains":
                    return 0 <= e.indexOf(this.url);
                case "NotStartsWith":
                    return 0 != e.indexOf(this.url);
                case "NotEndsWith":
                    return e.indexOf(this.url, e.length - this.url.length) < 0;
                case "NotEquals":
                    return e != this.url;
                case "NotContains":
                    return e.indexOf(this.url) < 0
            }
        }, statesFactory.constructLocation = function(t) {
            return new LocationState(t)
        }, NotCondition.prototype = Object.create(State.prototype), (NotCondition.prototype.constructor = NotCondition).prototype.evaluate = function() {
            return !this.childState.evaluate()
        }, statesFactory.constructNot = function(t) {
            return new NotCondition(statesFactory.construct(t.condition))
        }, OrCondition.prototype = Object.create(State.prototype), (OrCondition.prototype.constructor = OrCondition).prototype.evaluate = function() {
            for (var t = 0; t < this.children.length; t++) {
                if (1 == this.children[t].evaluate()) return !0
            }
            return !1
        }, statesFactory.constructOr = function(t) {
            return new OrCondition(t.childConditions.map(function(t) {
                return statesFactory.construct(t)
            }))
        }, QSParamExistsState.prototype = Object.create(State.prototype), (QSParamExistsState.prototype.constructor = QSParamExistsState).prototype.evaluate = function() {
            for (var t = this, e = !1, n = window.location.search.substring(1).split("&"), o = 0; o < n.length; o++)
                if (n[o].split("=")[0] == t.stateData.name) {
                    e = !0;
                    break
                }
            if (e) {
                if (void 0 === t.stateData.value) return !0;
                var r = dynamicEventNameUtils.getQueryStringParameterValue(t.stateData.name);
                return ctSelectorUtils.compareData(r, t.stateData.value, t.stateData.comparisonMode)
            }
            return !1
        }, statesFactory.constructQSParamExists = function(t) {
            return new QSParamExistsState(t)
        }, SessionStorageExistsState.prototype = Object.create(State.prototype), (SessionStorageExistsState.prototype.constructor = SessionStorageExistsState).prototype.evaluate = function() {
            var t = dynamicEventNameUtils.getSessionStorageValue(this.stateData.name);
            return null != t && (void 0 === this.stateData.value || ctSelectorUtils.compareData(t, this.stateData.value, this.stateData.comparisonMode))
        }, statesFactory.constructSessionStorageExists = function(t) {
            return new SessionStorageExistsState(t)
        }, UrlHashExistsState.prototype = Object.create(State.prototype), (UrlHashExistsState.prototype.constructor = UrlHashExistsState).prototype.evaluate = function() {
            return window.location.hash.split("#")[1] == this.urlHashValue
        }, statesFactory.constructUrlHashExists = function(t) {
            return new UrlHashExistsState(t.name)
        },
        function() {
            var d = function(t) {
                    return "string" != typeof t ? t : t.replace(/\+|%2B|%7C|%5E|%25/g, function(t) {
                        return {
                            "+": " ",
                            "%2B": "+",
                            "%7C": "|",
                            "%5E": "^",
                            "%25": "%"
                        }[t]
                    })
                },
                f = function(t) {
                    return parseInt(t, 36)
                };
            exports.jsonUnpacker = {
                unpack: function(t) {
                    return function(t) {
                        var e = t.split("^"),
                            a = [],
                            n = e[0];
                        if ("" !== n)
                            for (var o = 0, r = (n = n.split("|")).length; o < r; o++) a.push(d(n[o]));
                        if ("" !== (n = e[1]))
                            for (o = 0, r = (n = n.split("|")).length; o < r; o++) a.push(f(n[o]));
                        if ("" !== (n = e[2]))
                            for (o = 0, r = (n = n.split("|")).length; o < r; o++) a.push(parseFloat(n[o]));
                        delete n;
                        var i = "",
                            c = [],
                            l = e[3].length;
                        for (o = 0; o < l; o++) {
                            var s = e[3].charAt(o);
                            "|" === s || "$" === s || "@" === s || "]" === s ? (i && (c.push(f(i)), i = ""), "|" !== s && c.push(s)) : i += s
                        }
                        var u = c.length,
                            m = 0;
                        return function t() {
                            var e = c[m++];
                            if ("@" === e) {
                                for (var n = []; m < u; m++) {
                                    if ("]" === (o = c[m])) return n;
                                    if ("@" === o || "$" === o) n.push(t());
                                    else switch (o) {
                                        case -1:
                                            n.push(!0);
                                            break;
                                        case -2:
                                            n.push(!1);
                                            break;
                                        case -3:
                                            n.push(null);
                                            break;
                                        case -5:
                                            n.push(void 0);
                                            break;
                                        case -4:
                                            n.push("");
                                            break;
                                        default:
                                            n.push(a[o])
                                    }
                                }
                                return n
                            }
                            if ("$" !== e) throw new TypeError("Bad token " + e + " isn't a type");
                            for (n = {}; m < u; m++) {
                                var o, r = c[m];
                                if ("]" === r) return n;
                                if (r = -4 === r ? "" : a[r], "@" === (o = c[++m]) || "$" === o) n[r] = t();
                                else switch (o) {
                                    case -1:
                                        n[r] = !0;
                                        break;
                                    case -2:
                                        n[r] = !1;
                                        break;
                                    case -3:
                                        n[r] = null;
                                        break;
                                    case -5:
                                        n[r] = void 0;
                                        break;
                                    case -4:
                                        n[r] = "";
                                        break;
                                    default:
                                        n[r] = a[o]
                                }
                            }
                            return n
                        }()
                    }(t)
                }
            }
        }();
    var onRulesBoundHandlers = [];
    init();
}());

/*browsers exclusion start*/
function doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;

    if (--times < 0 && typeof failHandler === 'function') {
        failHandler();
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function() {
        doOnlyWhen(toDoHandler, toCheckHandler, interval, times);
    }, interval);
}
doOnlyWhen(function() {
    if (window.ClickTaleSettings.PTC.okToRunPCC) {
        (function() {
            window.ClickTaleSettings = window.ClickTaleSettings || {};
            window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
            window.ClickTaleSettings.PTC.originalPCCLocation = "P20_PID100";

            var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) {
                    a != Array.prototype && a != Object.prototype && (a[b] = d.value)
                },
                ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

            function ca(a) {
                if (a) {
                    for (var b = ba, d = ["Array", "prototype", "find"], f = 0; f < d.length - 1; f++) {
                        var n = d[f];
                        n in b || (b[n] = {});
                        b = b[n]
                    }
                    d = d[d.length - 1];
                    f = b[d];
                    a = a(f);
                    a != f && null != a && aa(b, d, {
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            }
            ca(function(a) {
                return a ? a : function(a, d) {
                    a: {
                        var b = this;b instanceof String && (b = String(b));
                        for (var n = b.length, c = 0; c < n; c++) {
                            var m = b[c];
                            if (a.call(d, m, c, b)) {
                                a = m;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a
                }
            });
            var da;

            function h(a, b, d, f, n) {
                a && b && ("undefined" == typeof d && (d = 1E3), "undefined" == typeof f && (f = 20), 0 > --f ? "function" === typeof n && n() : b() ? a() : setTimeout(function() {
                    h(a, b, d, f, n)
                }, d))
            }

            function l(a) {
                var b = "someText".trim,
                    d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                da = b && !b.call(new String("\ufeff\u00a0")) ? function(a) {
                    return null == a ? "" : b.call(a)
                } : function(a) {
                    return null == a ? "" : (a + "").replace(d, "")
                };
                return da(a)
            }

            function ea(a) {
                return "string" == typeof a ? ea(document.querySelectorAll(a)) : Array.prototype.filter.call(a, function(a) {
                    return !!(a && a.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_CONTAINS && (a.offsetWidth || a.offsetHeight || a.getClientRects().length))
                })
            };

            function p(a, b) {
                b || (b = document);
                return b instanceof Element || b instanceof Document ? Array.prototype.slice.call(b.querySelectorAll(a)) : "string" === typeof b ? p(a, document.querySelectorAll(b)) : Array.isArray(b) || b instanceof HTMLCollection || b instanceof NodeList ? Array.prototype.reduce.call(b, function(b, f) {
                    return b.concat(Array.prototype.slice.call(f.querySelectorAll(a)))
                }, []) : []
            }

            function r(a, b) {
                if (a && a.nodeType && 9 === a.nodeType) return !1;
                var d = Element.prototype;
                r = function(a, b) {
                    return a && document.documentElement.contains(a) ? r.matches.call(a, b) : !1
                };
                r.matches = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.msMatchesSelector;
                return r(a, b)
            }

            function t(a, b) {
                return a instanceof Element ? b instanceof Element ? a === b : r(a, b) : !1
            }

            function u(a, b) {
                u = Element.prototype.closest ? function(a, b) {
                    return a && a instanceof Element ? Element.prototype.closest.call(a, b) : null
                } : function(a, b) {
                    for (; a && !r(a, b);) a = a.parentElement;
                    return a
                };
                return u(a, b)
            };
            var v = !1,
                fa = Object.defineProperty && Object.defineProperty({}, "passive", {
                    get: function() {
                        v = !0
                    }
                });
            document.addEventListener("test", function() {}, fa);
            var w = v ? {
                    passive: !0,
                    capture: !0
                } : !0,
                x = v ? {
                    passive: !0,
                    capture: !1
                } : !1;

            function y(a) {
                function b() {
                    2 == ++y.b && a()
                }
                ha(b);
                if ("function" == typeof ClickTaleIsRecording && !0 === ClickTaleIsRecording()) b();
                else {
                    var d = window.ClickTaleOnRecording || function() {};
                    window.ClickTaleOnRecording = function() {
                        b();
                        return d.apply(this, arguments)
                    }
                }
            }
            y.b = 0;

            function ha(a) {
                function b() {
                    d || (d = !0, a())
                }
                var d = !1;
                "loading" != document.readyState ? b() : document.addEventListener && document.addEventListener("DOMContentLoaded", b, !1)
            }

            function z(a, b, d, f, n) {
                if ("string" === typeof a) a = document.querySelectorAll(a), Array.prototype.forEach.call(a, function(a) {
                    z(a, b, d, f, n)
                });
                else if (a instanceof Array || a instanceof NodeList) Array.prototype.forEach.call(a, function(a) {
                    z(a, b, d, f, n)
                });
                else {
                    var c = "";
                    "string" == typeof d && ("mouseenter" == b ? (b = "mouseover", c = "mouseenter") : "mouseleave" == b && (b = "mouseout", c = "mouseleave"));
                    a.addEventListener(b, function(a, b, e, g, c, d) {
                        return function(q) {
                            if ("function" === typeof e) e.apply(this, arguments), c && a.removeEventListener(b,
                                arguments.callee, x);
                            else {
                                var f = q.relatedTarget,
                                    k = u(q.target, e);
                                k && a.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_CONTAINED_BY && ("mouseenter" == d || "mouseleave" == d ? f && (f == k || k.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_CONTAINED_BY) || g.apply(k, arguments) : g.apply(k, arguments), c && a.removeEventListener(b, arguments.callee, x))
                            }
                        }
                    }(a, b, d, f, n, c), x);
                    return a
                }
            }

            function A(a, b, d, f, n) {
                if ("string" === typeof a) a = document.querySelectorAll(a), Array.prototype.forEach.call(a, function(a) {
                    A(a, b, d, f, n)
                });
                else if (a instanceof Array || a instanceof NodeList) Array.prototype.forEach.call(a, function(a) {
                    A(a, b, d, f, n)
                });
                else {
                    var c = "";
                    "string" == typeof d && ("mouseenter" == b ? (b = "mouseover", c = "mouseenter") : "mouseleave" == b && (b = "mouseout", c = "mouseleave"));
                    a.addEventListener(b, function(a, b, e, g, c, d) {
                        return function(q) {
                            if ("function" === typeof e) e.apply(this, arguments), c && a.removeEventListener(b,
                                arguments.callee, w);
                            else {
                                var f = q.relatedTarget,
                                    k = u(q.target, e);
                                k && a.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_CONTAINED_BY && ("mouseenter" == d || "mouseleave" == d ? f && (f == k || k.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_CONTAINED_BY) || g.apply(k, arguments) : g.apply(k, arguments), c && a.removeEventListener(b, arguments.callee, w))
                            }
                        }
                    }(a, b, d, f, n, c), w)
                }
            }

            function ia(a, b) {
                document.addEventListener("mouseup", function(d) {
                    a === d.target && b();
                    document.removeEventListener("mouseup", arguments.callee, x)
                }, x)
            }

            function ja(a, b) {
                document.addEventListener("mouseup", function(d) {
                    a === d.target && b();
                    document.removeEventListener("mouseup", arguments.callee, w)
                }, w)
            }

            function ka(a, b) {
                function d(d) {
                    document.removeEventListener("touchend", arguments.callee, x);
                    a === d.target && b()
                }
                document.addEventListener("touchend", d, x);
                document.addEventListener("touchmove", function(a) {
                    document.removeEventListener("touchmove", arguments.callee, x);
                    document.removeEventListener("touchend", d, x)
                }, x)
            }

            function la(a, b) {
                function d(d) {
                    document.removeEventListener("touchend", arguments.callee, w);
                    a === d.target && b()
                }
                document.addEventListener("touchend", d, w);
                document.addEventListener("touchmove", function(a) {
                    document.removeEventListener("touchmove", arguments.callee, w);
                    document.removeEventListener("touchend", d, w)
                }, w)
            }

            function B(a, b) {
                var d = C();
                d && (B = d.m ? ka : ia, B(a, b))
            }

            function D(a, b) {
                var d = C();
                d && (D = d.m ? la : ja, D(a, b))
            }

            function E(a, b) {
                if ("string" === typeof a) a = document.querySelectorAll(a), Array.prototype.forEach.call(a, function(a) {
                    E(a, b)
                });
                else if (a instanceof Array || a instanceof NodeList) Array.prototype.forEach.call(a, function(a) {
                    E(a, b)
                });
                else {
                    var d = document.createEvent("HTMLEvents");
                    d.initEvent(b, !0, !0);
                    return !a.dispatchEvent(d)
                }
            };

            function F(a) {
                if (window.CSS && "function" === typeof window.CSS.escape) F = function(a) {
                    return window.CSS.escape.call(window.CSS, a)
                };
                else {
                    var b = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                        d = function(a, b) {
                            return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                        };
                    F = function(a) {
                        return a.replace(b, d)
                    }
                }
                return F(a)
            }

            function ma(a) {
                return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(a, d) {
                    return String.fromCharCode(+("0x" + d))
                }))
            };

            function na() {
                return !(!window.ClickTaleMonitor || "function" !== typeof window.ClickTaleMonitor.isMonitoring || !window.ClickTaleMonitor.isMonitoring())
            }

            function G(a) {
                window.ClickTaleMonitor && "function" === typeof window.ClickTaleMonitor.addEvent && (G = function(a) {
                    isNaN(a) || ClickTaleMonitor.addEvent(a)
                }, G(a))
            }

            function oa() {
                if (window.ClickTaleMonitor && ClickTaleMonitor.Settings && "function" === typeof ClickTaleMonitor.Settings.get) {
                    var a = ClickTaleMonitor.Settings.get();
                    a.monitor && a.monitor.onStop && "function" == typeof a.monitor.onStop && (a.monitor.onStop(function() {
                        a.started = !1
                    }), ClickTaleMonitor.App.prototype.dispose.call(a.monitor, !1, !1, !0))
                }
            }

            function pa(a, b) {
                if (window.ClickTaleMonitor && "function" == typeof ClickTaleMonitor.restart && H()) {
                    var d = d || 500;
                    if (I) {
                        I = !1;
                        var f = ClickTaleMonitor.Settings.get(),
                            n = f.shouldStartMonitorCallback || function() {},
                            c = "";
                        f && f.config && f.config.transport && (c = f.config.transport.url || "");
                        oa();
                        f = ClickTaleMonitor.Settings.get();
                        c && f.configure({
                            transport: {
                                url: c
                            }
                        });
                        "function" === typeof f.shouldStartMonitor && f.shouldStartMonitor(n);
                        ClickTaleMonitor.restart(a, b);
                        setTimeout(function() {
                            I = !0
                        }, d)
                    }
                }
            }
            var I = !0;

            function H() {
                var a = !1;
                if (na()) a = !0;
                else if (window.ClickTaleMonitor) {
                    var b = window.ClickTaleMonitor && ClickTaleMonitor.Settings && "function" == typeof ClickTaleMonitor.Settings.get ? ClickTaleMonitor.Settings.get() : null;
                    if (b) b.onStart(function() {
                        H.b = !0
                    })
                } else return h(H, function() {
                    return !!window.ClickTaleMonitor
                }, 1E3, 10), !1;
                H = function() {
                    return H.b
                };
                H.b = a;
                return H.b
            }
            H.b = !1;
            H();

            function qa() {
                var a = J.toString();
                "function" === typeof ClickTaleField && ClickTaleField("isMobile", a)
            }

            function K(a) {
                "function" === typeof ClickTaleExec && ClickTaleExec(a)
            }

            function ra() {
                "function" === typeof ClickTaleStop && ClickTaleStop()
            }

            function L(a, b) {
                "function" === typeof ClickTaleEvent && (b ? !0 !== L.b[a] && (L.b[a] = !0, ClickTaleEvent(a)) : ClickTaleEvent(a))
            }
            L.b = {};

            function M(a) {
                var b = "etr";
                b = "string" === typeof b ? b.toLowerCase() : "id";
                switch (b) {
                    case "etr":
                        a = "@ET@" + a;
                        "function" === typeof ClickTaleEventTrigger ? ClickTaleEventTrigger(a) : L(a, !0);
                        break;
                    default:
                        L("@ID@" + a, !0)
                }
            }

            function sa(a) {
                "function" === typeof window.ClickTaleRegisterElementAction && ClickTaleRegisterElementAction("click", a)
            }

            function ta(a, b) {
                var d = {},
                    f;
                for (f in a) d[f] = a[f];
                d.target = b;
                d.srcElement = b;
                sa(d)
            }

            function ua(a, b) {
                a && "object" == typeof a && "string" == typeof b && (window.ClickTaleContext && -1 != document.referrer.indexOf(location.hostname) && window.parent.ct && window.parent.ct.ElementAddressing && "function" === typeof window.parent.ct.ElementAddressing.forceSetCustomElementID ? window.parent.ct.ElementAddressing.forceSetCustomElementID(a, b) : (window.ClickTaleContext || "function" !== typeof ClickTaleSetCustomElementID || -1 == ClickTaleSetCustomElementID.toString().indexOf("duplicate registration of custom id") ? window.ClickTaleSetCustomElementID =
                    window.ClickTaleSetCustomElementID || function(a, b) {
                        a.ClickTale = a.ClickTale || {};
                        a.ClickTale.CustomID = b
                    } : ua = function(a, b) {
                        a.ClickTale = a.ClickTale || {};
                        a.ClickTale.CustomID = b
                    }, window.ClickTaleSetCustomElementID(a, b)))
            }

            function va() {
                Array.prototype.forEach.call(document.querySelectorAll('[id]:not([id=""])'), function(a) {
                    if (!r(a, 'input[type="hidden"], script')) {
                        var b = a.getAttribute("id");
                        b.match(/(?:\r|\n)/) && wa("ctlib.api.SetCustomElementIdDuplicates: ids with line break found!");
                        a = document.querySelectorAll('[id="' + F(b) + '"]');
                        var d = xa;
                        1 < a.length && !d[b] && (d[b] = !0, Array.prototype.forEach.call(a, function(a, d) {
                            ua(a, b.replace(/(\r|\n|\r\n|\s+)+/g, "_").replace(/\W/g, "_") + "_" + d)
                        }))
                    }
                })
            }
            var xa = {};

            function ya(a, b) {
                "function" === typeof ClickTaleLogical && (L.b = {}, xa = {}, N.b && N.b instanceof za && N.b.clear(), b ? ClickTaleLogical(a, b) : ClickTaleLogical(a))
            }

            function C() {
                if ("function" === typeof ClickTaleDetectAgent) {
                    var a = ClickTaleDetectAgent();
                    if (a) return C = function() {
                        return a
                    }, C()
                }
                return null
            }

            function wa(a) {
                "function" === typeof ClickTaleNote && ClickTaleNote(a)
            }

            function O(a) {
                if ("function" === typeof ClickTaleRegisterTouchAction) {
                    var b = a.getBoundingClientRect();
                    ClickTaleRegisterTouchAction(a, b.left + document.body.scrollLeft, b.top + document.body.scrollTop)
                }
            }

            function Aa(a, b, d) {
                if ("boolean" != typeof P) {
                    var f = C();
                    f && (P = !!f.m)
                }
                a || (a = "mousedown", P && (a = "touchstart"));
                d = d || "img, a, button, textarea, input, select";
                P && (d += ", label[for]");
                A(document, a, d, function(a) {
                    var c = a.target,
                        d = this;
                    if (!b || !r(this, b))
                        if (P)
                            if (r(this, "label[for]")) D(c, function(a) {
                                return function() {
                                    var e, b;
                                    (e = a.getAttribute("for")) && (b = document.getElementById(e)) && O(b)
                                }.bind(d)
                            }(c, a));
                            else {
                                var q = -1,
                                    e = function(e) {
                                        clearTimeout(q);
                                        document.removeEventListener("touchstart", arguments.callee, x);
                                        D(c,
                                            function(a) {
                                                return function() {
                                                    function e(a) {
                                                        document.removeEventListener("touchend", arguments.callee, x);
                                                        clearTimeout(b)
                                                    }
                                                    var b = -1;
                                                    document.addEventListener("touchend", e, x);
                                                    b = setTimeout(function() {
                                                        document.removeEventListener("touchend", e, x);
                                                        O(a)
                                                    }, 50)
                                                }.bind(d)
                                            }(c, a))
                                    };
                                document.addEventListener("touchstart", e, x);
                                q = setTimeout(function() {
                                    document.removeEventListener("touchstart", e, x);
                                    O(c)
                                }, 50)
                            }
                    else D(c, function(a, e) {
                        return function() {
                            function b(e) {
                                e.target === a && (Ba = !0);
                                document.removeEventListener("click",
                                    arguments.callee, !0);
                                clearTimeout(q)
                            }
                            var q = setTimeout(function() {
                                Ba || sa(e);
                                document.removeEventListener("click", b, !0);
                                Ba = void 0
                            }, 200);
                            document.addEventListener("click", b, !0)
                        }.bind(d)
                    }(c, a))
                })
            }
            var P, Ba;

            function Q() {
                var a = Ca,
                    b = document.location,
                    d = Da;
                if (Ea) {
                    Ea = !1;
                    var f = f || 400;
                    ra();
                    window.ClickTaleIncludedOnDOMReady = !0;
                    window.ClickTaleIncludedOnWindowLoad = !0;
                    "function" === typeof ClickTaleUploadPage && ClickTaleUploadPage(void 0, void 0);
                    ya(b.href, d);
                    pa(b, d);
                    a();
                    setTimeout(function() {
                        Ea = !0
                    }, f)
                }
            }
            var Ea = !0;

            function Fa(a) {
                "function" === typeof ClickTaleAddAugmentElementPathHandler && ClickTaleAddAugmentElementPathHandler("Linkanalytics", a)
            }

            function Ga(a) {
                Ha = a;
                var b = "";
                a.forEach(function(a) {
                    !0 === a[1] && (b += "," + a[0])
                });
                b && Aa("", "", b.replace(/^,/, ""));
                Fa(function(a) {
                    return function(b) {
                        for (var d = 0, c = a.length; d < c; d++) {
                            var f = a[d],
                                q = f[0];
                            if (b && r(b, q) && (q = f[2], "function" != typeof q || q())) return {
                                data: {
                                    interesting: f[1]
                                }
                            }
                        }
                        return null
                    }
                }(Ha))
            }
            var Ha = [];

            function za() {
                this.f = !1;
                this.b = "";
                this.init = function(a) {
                    this.f || (this.f = !0, document.addEventListener("input", this.g, w));
                    this.h(a);
                    this.b = this.b ? this.b + "," + a : a
                };
                this.g = function(a) {
                    a = a.target;
                    if (r(a, this.b)) {
                        var b = p(this.b).indexOf(a);
                        K("document.querySelectorAll('" + this.b + "')[" + b + "].value = Base64Decode('" + ma(a.value) + "');")
                    }
                }.bind(this);
                this.h = function(a) {
                    var b = "";
                    p(a).forEach(function(d, f) {
                        b += "document.querySelectorAll('" + a + "')[" + f + "].value = Base64Decode('" + ma(d.value) + "'); "
                    });
                    b && K(b)
                };
                this.clear =
                    function() {
                        document.removeEventListener("input", this.g, w);
                        this.f = !1;
                        this.b = ""
                    }
            }

            function N(a) {
                N.b = N.b || new za;
                N.b.init(a)
            }
            N.b = null;
            var R = L,
                Ia = z,
                Ja = E,
                S = ua,
                Ka = ea,
                La = B;

            function Ma(a) {
                var b;
                var d = function(a) {
                    if (window.ClickTaleMonitor && "function" === typeof ClickTaleMonitor.ctData)
                        if (b = function(a) {
                                a && ClickTaleMonitor.ctData({
                                    event: "abtest",
                                    vendor: "Unknown",
                                    experience: a
                                })
                            }, na()) b(a);
                        else ClickTaleMonitor.Settings.get().onStart(function() {
                            b(a)
                        })
                };
                var f = function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var m = a[b];
                        if (m)
                            if ("string" === typeof m) {
                                if (m = l(m)) L(m), window.ClickTaleMonitor && (-1 < m.indexOf("Campaign:") && -1 < m.indexOf("Experience:") && (m = m.replace("Campaign:", "Cmp:"), m = m.replace("Experience:",
                                    "Exp:")), 100 < m.length && (m = m.substr(m.length - 100)), d(m))
                            } else Array.isArray(m) && f(m)
                    }
                };
                arguments.length && f(arguments)
            }
            Ma.version = "2.2";
            var T = function() {
                function a(a, b) {
                    return Array.prototype.concat.apply(a, b)
                }

                function b(b) {
                    return new c(this.map(b).reduce(a, []))
                }

                function d(a) {
                    return /\[object (?:Window|HTMLDocument|HTML(?:\w*)Element)\]/.test(Object.prototype.toString.call(a))
                }

                function f(a) {
                    return /\[object HTML(?:\w*)Element\]/.test(Object.prototype.toString.call(a))
                }

                function n(a) {
                    return !!(a && a.ownerDocument && a.compareDocumentPosition(a.ownerDocument) & Node.DOCUMENT_POSITION_CONTAINS && (a.offsetWidth || a.offsetHeight || a.getClientRects().length))
                }

                function c(a, b) {
                    if (!(this instanceof c)) return new c(a, b);
                    b ? "string" === typeof b && (b = new c(b)) : b = document;
                    var e = [];
                    if (a)
                        if (a instanceof c || Array.isArray(a)) e = a;
                        else if (m[Object.prototype.toString.call(a)]) e = Array.prototype.slice.call(a);
                    else if ("string" === typeof a)
                        if (d(b) && b.querySelectorAll) e = Array.prototype.slice.call(b.querySelectorAll(a));
                        else {
                            if (Array.isArray(b) || m[Object.prototype.toString.call(b)] || b instanceof c) e = Array.prototype.reduce.call(b, function(b, e) {
                                return b.concat(Array.prototype.slice.call(e.querySelectorAll(a)))
                            }, [])
                        }
                    else d(a) && (e = [a]);
                    this.push.apply(this, e.filter(function(a, b, e) {
                        return d(a) && e.indexOf(a) == b
                    }))
                }
                var m = {
                    "[object HTMLCollection]": !0,
                    "[object NodeList]": !0
                };
                c.prototype = Object.create(Array.prototype);
                c.prototype.constructor = c;
                c.version = "1.0.1";
                c.extend = function(a, b) {
                    if ("string" === typeof a) c.prototype[a] = b;
                    else if ("object" === typeof a)
                        for (var e in a) a.hasOwnProperty(e) && (c.prototype[e] = a[e])
                };
                c.prototype.concat = function() {
                    var b = Array.prototype.concat.apply(Array.prototype.slice.call(this), Array.prototype.reduce.call(arguments,
                        a, []));
                    return new c(b)
                };
                c.prototype.filter = function(a) {
                    if ("string" == typeof a) {
                        if (":" === a[0] && ":not" != a) {
                            if (":visible" === a) return this.visible();
                            if (":hidden" === a) return this.hidden()
                        }
                        var b = Array.prototype.filter.call(this, function(b) {
                            return t(b, a)
                        })
                    } else b = Array.prototype.filter.apply(this, arguments);
                    return new c(b)
                };
                c.prototype.forEach = function() {
                    Array.prototype.forEach.apply(this, arguments);
                    return this
                };
                c.prototype.indexOf = function(a) {
                    var b = this.length;
                    if ("string" == typeof a)
                        for (var g = 0; g < b; g++) {
                            var d =
                                this[g];
                            if ("[object Window]" != Object.prototype.toString.call(d) && r(d, a)) return g
                        } else if (a instanceof c || m[Object.prototype.toString.call(a)])
                            for (g = 0; g < b; g++) {
                                if (-1 != Array.prototype.indexOf.call(a, this[g])) return g
                            } else return Array.prototype.indexOf.call(this, a);
                    return -1
                };
                c.prototype.lastIndexOf = function(a) {
                    var b = this.length;
                    a = b - this.reverse().indexOf(a) - 1;
                    this.reverse();
                    return a === b ? -1 : a
                };
                c.prototype.push = function() {
                    var a = this,
                        b = Array.prototype.filter.call(arguments, function(b) {
                            return d(b) && -1 ==
                                a.indexOf(b)
                        });
                    return Array.prototype.push.apply(this, b)
                };
                c.prototype.slice = function() {
                    return new c(Array.prototype.slice.apply(this, arguments))
                };
                c.prototype.splice = function() {
                    return new c(Array.prototype.splice.apply(this, arguments))
                };
                c.prototype.unshift = function() {
                    var a = this,
                        b = Array.prototype.filter.call(arguments, function(b) {
                            return d(b) && -1 == a.indexOf(b)
                        });
                    return Array.prototype.unshift.apply(this, b)
                };
                c.prototype.add = function(a) {
                    a = new c(a);
                    return this.concat(a)
                };
                c.prototype.addClass = function(a) {
                    var b =
                        a.trim().split(/\s+/);
                    return this.forEach(function(a) {
                        var e = a.className;
                        if ("string" == typeof e && f(a)) {
                            var c = e.split(/\s+/);
                            b.forEach(function(a) {
                                -1 == c.indexOf(a) && c.push(a)
                            });
                            a.className = c.join(" ")
                        }
                    })
                };
                c.prototype.attr = function(a, b) {
                    var e = typeof a;
                    if ("object" === e) return this.forEach(function(b) {
                        if (b.setAttribute)
                            for (var e in a) a.hasOwnProperty(e) && b.setAttribute(e, a[e])
                    });
                    if ("string" === e) {
                        if ("string" === typeof b) return this.forEach(function(e) {
                            e.setAttribute && e.setAttribute(a, b)
                        });
                        e = 0;
                        for (var c = this.length; e <
                            c; e++) {
                            var d = this[e];
                            if (d.getAttribute) return d.getAttribute(a)
                        }
                        return ""
                    }
                };
                c.prototype.children = function(a) {
                    var e = b.call(this, function(a) {
                        return a.children
                    });
                    a && (e = e.filter(a));
                    return e
                };
                c.prototype.closest = function(a) {
                    return new c(this.map(function(b) {
                        return u(b, a)
                    }))
                };
                c.prototype.css = function(a, b) {
                    var e = typeof a;
                    if ("object" === e) return this.forEach(function(b) {
                        if (f(b) && b.style && b.style.setProperty)
                            for (var e in a)
                                if (a.hasOwnProperty(e)) {
                                    var c = e,
                                        d = a[e];
                                    /[A-Z]/.test(c) && (c = c.replace(/[A-Z]/g, function(a) {
                                        return "-" +
                                            a.toLowerCase()
                                    }));
                                    var g = ""; - 1 != d.indexOf("!important") && (d = d.replace(/!important/g, ""), g = "important");
                                    b.style.setProperty(c, d, g)
                                }
                    });
                    if ("string" === e) {
                        if ("string" !== typeof b || /^:/.test(b)) {
                            e = null;
                            "string" === typeof b && (e = b);
                            for (var c = 0, d = this.length; c < d; c++) {
                                var q = this[c];
                                if (f(q)) return getComputedStyle(q, e)[a]
                            }
                            return ""
                        }
                        /[A-Z]/.test(a) && (a = a.replace(/[A-Z]/g, function(a) {
                            return "-" + a.toLowerCase()
                        }));
                        var m = ""; - 1 != b.indexOf("!important") && (b = b.replace(/\s*!important/g, ""), m = "important");
                        return this.forEach(function(e) {
                            f(e) &&
                                e.style && e.style.setProperty && e.style.setProperty(a, b, m)
                        })
                    }
                };
                c.prototype.eq = function(a) {
                    return new c(this[a])
                };
                c.prototype.first = function() {
                    return new c(this[0])
                };
                c.prototype.has = function(a) {
                    return this.filter(function(b) {
                        return !(!b.querySelector || !b.querySelector(a))
                    })
                };
                c.prototype.hasClass = function(a) {
                    if (!a) return !1;
                    for (var b = this.length, c = 0; c < b; c++) {
                        var d;
                        if ((d = this[c].className) && "string" == typeof d) return -1 != d.split(/\s+/).indexOf(a)
                    }
                    return !1
                };
                c.prototype.hidden = function() {
                    return this.filter(function(a) {
                        return !n(a)
                    })
                };
                c.prototype.html = function(a) {
                    return "string" === typeof a ? this.forEach(function(b) {
                        b.innerHTML = a
                    }) : this[0].innerHTML || ""
                };
                c.prototype.is = function(a) {
                    return -1 != this.indexOf(a)
                };
                c.prototype.last = function() {
                    return new c(this[this.length - 1])
                };
                c.prototype.next = function(a) {
                    var b = new c(this.map(function(a) {
                        return a.nextElementSibling
                    }));
                    a && (b = b.filter(a));
                    return b
                };
                c.prototype.nextAll = function(a) {
                    return b.call(this, function(b) {
                        for (var e = []; b = b.nextElementSibling;) a && !r(b, a) || e.push(b);
                        return e
                    })
                };
                c.prototype.nextUntil =
                    function(a, e) {
                        return b.call(this, function(b) {
                            for (var c = [];
                                (b = b.nextElementSibling) && !t(b, a);) e && !r(b, e) || c.push(b);
                            return c
                        })
                    };
                c.prototype.not = function(a) {
                    return this.filter(function(b) {
                        return !t(b, a)
                    })
                };
                c.prototype.offset = function() {
                    for (var a = 0, b = this.length; a < b; a++) {
                        var c = this[a];
                        if ("function" == typeof c.getBoundingClientRect) return c.getBoundingClientRect()
                    }
                };
                c.prototype.on = function() {
                    var a = Array.prototype.slice.apply(arguments);
                    return this.forEach(function(b) {
                        z.apply(this, [b].concat(a))
                    })
                };
                c.prototype.outerHTML =
                    function(a) {
                        return "string" === typeof a ? this.forEach(function(b) {
                            b.outerHTML = a
                        }) : this[0].outerHTML || ""
                    };
                c.prototype.parent = function(a) {
                    var b = new c(this.map(function(a) {
                        return a.parentElement
                    }));
                    a && (b = b.filter(a));
                    return b
                };
                c.prototype.parents = function(a) {
                    return b.call(this, function(b) {
                        for (var e = []; b = b.parentElement;) a && !r(b, a) || e.push(b);
                        return e
                    })
                };
                c.prototype.parentsUntil = function(a, e) {
                    return b.call(this, function(b) {
                        for (var c = [];
                            (b = b.parentElement) && !t(b, a);) e && !r(b, e) || c.push(b);
                        return c
                    })
                };
                c.prototype.prev =
                    function(a) {
                        var b = new c(this.map(function(a) {
                            return a.previousElementSibling
                        }));
                        a && (b = b.filter(a));
                        return b
                    };
                c.prototype.prevAll = function(a) {
                    return b.call(this, function(b) {
                        for (var c = []; b = b.previousElementSibling;) a && !r(b, a) || c.push(b);
                        return c
                    })
                };
                c.prototype.prevUntil = function(a, c) {
                    return b.call(this, function(b) {
                        for (var e = [];
                            (b = b.previousElementSibling) && !t(b, a);) c && !r(b, c) || e.push(b);
                        return e
                    })
                };
                c.prototype.prop = function(a, b) {
                    var c = typeof a;
                    if ("object" === c) return this.forEach(function(b) {
                        for (var c in a) a.hasOwnProperty(c) &&
                            (b[c] = a[c])
                    });
                    if ("string" === c) return 2 == arguments.length ? this.forEach(function(c) {
                        c[a] = b
                    }) : this[0][a]
                };
                c.prototype.querySelector = function(a) {
                    for (var b = 0, c = this.length; b < c; b++) {
                        var d = this[b],
                            f;
                        if (d.querySelector && (f = d.querySelector(a))) return f
                    }
                    return null
                };
                c.prototype.querySelectorAll = function(a) {
                    return new c(a, this)
                };
                c.prototype.find = c.prototype.querySelectorAll;
                c.prototype.removeAttr = function(a) {
                    var b = a.trim().split(/\s+/);
                    return this.forEach(function(a) {
                        a.removeAttribute && b.forEach(function(b) {
                            a.removeAttribute(b)
                        })
                    })
                };
                c.prototype.removeClass = function(a) {
                    var b = a.trim().split(/\s+/);
                    return this.forEach(function(a) {
                        var c = a.className;
                        if ("string" == typeof c && f(a)) {
                            var e = c.split(/\s+/);
                            b.forEach(function(a) {
                                a = e.indexOf(a); - 1 != a && e.splice(a, 1)
                            });
                            a.className = e.join(" ")
                        }
                    })
                };
                c.prototype.siblings = function(a) {
                    return this.prevAll(a).concat(this.nextAll(a))
                };
                c.prototype.scrollLeft = function(a) {
                    return isNaN(a) ? this[0].scrollLeft || 0 : this.forEach(function(b) {
                        b.scrollLeft = a
                    })
                };
                c.prototype.scrollTop = function(a) {
                    return isNaN(a) ? this[0].scrollTop ||
                        0 : this.forEach(function(b) {
                            b.scrollTop = a
                        })
                };
                c.prototype.text = function(a) {
                    var b = this.length;
                    if ("string" == typeof a) {
                        for (var c = 0; c < b; c++) {
                            var d = this[c];
                            f(d) && (d.textContent = a)
                        }
                        return a
                    }
                    for (c = 0; c < b; c++)
                        if (d = this[c], f(d)) return d.textContent || "";
                    return ""
                };
                c.prototype.toArray = function() {
                    return Array.from ? Array.from(this) : Array.prototype.slice.call(this)
                };
                c.prototype.val = function(a) {
                    var b = this.length;
                    if ("string" == typeof a) {
                        for (var c = 0; c < b; c++) {
                            var d = this[c];
                            f(d) && (d.value = a)
                        }
                        return a
                    }
                    for (c = 0; c < b; c++)
                        if (d =
                            this[c], f(d)) return d.value || "";
                    return ""
                };
                c.prototype.visible = function() {
                    return this.filter(function(a) {
                        return n(a)
                    })
                };
                return c
            }();
            var U = "",
                V = "",
                W = "",
                J = null,
                Na = !0,
                Da = location.href,
                Oa, X, Pa, Qa = {
                    childList: !0
                },
                Ra;

            function Y(a, b) {
                a && "string" === typeof a && (R(a), b && !isNaN(b) && G(b))
            }

            function Sa() {
                h(function() {
                    T("#faaswr input, #faaswr textarea").on("focus", function(a) {
                        "function" === typeof ClickTaleRegisterElementAction && ClickTaleRegisterElementAction("focus", a)
                    });
                    document.querySelectorAll("#faaswr").length && document.querySelector("#faaswr").addEventListener("scroll", function() {
                        var a = T(this).scrollTop();
                        K('jQuery("#faaswr").scrollTop("' + a + '");')
                    })
                }, function() {
                    return !!document.querySelector("#faaswr input[type='submit']")
                }, 500, 60)
            }

            function Ta(a) {
                a && a.ClickTale && a.ClickTale.EPID && (a = a.ClickTale.EPID, window.ClickTaleGlobal && window.ClickTaleGlobal.symbols && "function" == typeof window.ClickTaleGlobal.symbols.WRa && !isNaN(window.WRInitTime) && window.ClickTaleGlobal.symbols.WRa({
                    a: "focus",
                    i: a,
                    t: Date.now() - window.WRInitTime
                }))
            }

            function Ca() {
                va();
                document.querySelectorAll("ul.filter-list").length && (T("ul.filter-list").forEach(function(a) {
                    S(this, "filterList" + a)
                }), T("ul.filter-list input").forEach(function(a) {
                    S(this, "filterListInput" + a)
                }));
                qa();
                V = U = "";
                W = document.location.pathname.toLowerCase();
                Oa = document.querySelector(".modal-forms");
                X = C();
                Pa = document.referrer;
                if (/\/request-consultation\/advertising\-cloud\.html/i.test(W)) {
                    var a;
                    h(function() {
                        wa("00");
                        if (a) {
                            S(a, "faasForm");
                            wa("01");
                            var b = Ka(a.querySelectorAll("input, select, textarea"));
                            Ua(a, b);
                            var d;
                            Array.prototype.forEach.call(b, function(a) {
                                var b = a.getAttribute("placeholder");
                                b ? d = b.replace(/\W/g, "") : (b = a.parentNode) && b.querySelector("label") && (d = b.querySelector("label").textContent.replace(/\W/g, ""));
                                t(a, 'form[id*="faas-form"] input[type=submit]') && (d = "SubmitForm");
                                d && S(a, d)
                            })
                        }
                    }, function() {
                        a = document.querySelector('form[id*="faas-form"]');
                        return Va(a) && window.ClickTaleLogicalForm
                    }, 1E3, 5)
                }
                if (Na) Na = !1;
                else
                    for (var b = window.ClickTaleSettings && window.ClickTaleSettings.PTC && window.ClickTaleSettings.PTC.InitFuncs ?
                            window.ClickTaleSettings.PTC.InitFuncs : [], d = 0, f = b.length; d < f; d++)
                        if ("function" === typeof b[d]) b[d]();
                Va(".globalnav__js__menu-bar__item__profile") && R("Onload | Logged in user");
                /collect.iperceptions.com/i.test(location.host) && M(" Onload | iPerceptions");
                /\/search.html/i.test(location.pathname) && (U = "Search page", T(".adobe-results-column").is(":visible") && (U += " result"), Wa());
                /\/support.html/i.test(location.pathname) && (/\/contact\/support.html/i.test(location.pathname) ? (U = "Contact Support", Xa()) : (U =
                    "Help With Your Product", (d = T('#support-hub-drop>option[ng-selected="true"]').text().trim()) && (U += ": " + d)), Ya());
                /\/(photoshop|premiere)-elements\/using\/topics.html/i.test(location.pathname) && (U = /\/photoshop/i.test(location.pathname) ? "Photoshop" : "Premiere", U += " elements");
                if (/\/\/acrobat.adobe.com\/us\/en/i.test(location.href)) {
                    b = document.querySelectorAll(".Gnav-active .Gnav-menu-item.has-submenu");
                    for (d = 0; d < b.length; d++) S(b[d], "gnav-menu-item_" + d);
                    /\/\/acrobat.adobe.com\/us\/en\/sign\/contact.html/i.test(location.href) &&
                        M(" Onload | adobe acrobat | contact");
                    /\/\/acrobat.adobe.com\/us\/en\/free-trial-download-thanks.html/i.test(location.href) && M(" Onload | adobe acrobat | free trial download thanks")
                }
                /\/\/creative.adobe.com\/(?:products\/download\/(?:ccpp|photoshop|indesign)\/)?starter(?:\?redeem=yes)?/i.test(location.href) && (d = "", "/starter" == location.pathname && (d = /redeem=yes/i.test(location.search) ? "redeem" : "starter"), /\/ccpp\/starter/i.test(location.pathname) && (d = "ccpp starter"), /\/photoshop\/starter/i.test(location.pathname) &&
                    (d = "photoshop starter"), /\/indesign\/starter/i.test(location.pathname) && (d = "indesign starter"), d && M(" Onload | adobe creative | " + d));
                /creative.adobe.com\/((?:products\/download\/(?:ccpp|photoshop|indesign)\/starter)|starter|\/starter\?redeem=yes)/i.test(location.href) && M(" Onload | adobe creative | product download"); - 1 < location.href.indexOf("acrobat.adobe.com/jp/ja/") && (-1 < W.indexOf("/business.html") ? M("Onload | js_ja_business") : -1 < W.indexOf("/acrobat.html") && M("Onload | js_ja_acrobat"));
                if ("MutationObserver" in
                    window && Oa && Qa) {
                    var n = new MutationObserver(function() {
                        document.querySelector("#faaswr") && (Sa(), n.disconnect())
                    });
                    n.observe(Oa, Qa)
                }
                X && X.a && "ff38" == X.a.toLowerCase() && (G(4604), R("Onload | Browser: FF38"));
                Pa && -1 < Pa.toLowerCase().indexOf("demdex") && (G(4607), R("Onload | Referrer | Demdex")); - 1 < location.href.indexOf("adobe.com/de/creativecloud/business/teams.html") ? M(" Onload | Creative cloud | business | teams") : -1 < location.href.indexOf("adobe.com/de/creativecloud/business.html") && M(" Onload | Creative cloud |business");
                U && R("Onload | " + U)
            }

            function Wa() {
                if (!Za && (Za = !0, window.MutationObserver)) {
                    var a = new window.MutationObserver(function() {
                        Q()
                    });
                    var b = {
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ["style"]
                        },
                        d = document.querySelector("#main-search-section .adobe-results-column");
                    d && a.observe(d, b)
                }
            }
            var Za;

            function Xa() {
                V = "";
                (V = T('.active[id*="anchor"], #selected-support').filter(function() {
                    var a = T(this).filter(":not(#solve-anchor)").filter(":visible");
                    return a[0] && 0 < a[0].offsetHeight
                }).find("h2:visible").text().replace(/^(?:\d. )?/, "").replace(/\?/g, "").trim()) && R("Onload | " + U + " | " + V)
            }

            function $a() {
                if (!Va(".loader")) {
                    var a = T('.active[id*="anchor"], #selected-support').filter(function() {
                        var a = T(this).filter(":not(#solve-anchor)").filter(":visible");
                        return a[0] && 0 < a[0].offsetHeight
                    }).find("h2:visible");
                    1 == a.length && (a = a.text().replace(/^(?:\d. )?/, "").replace(/\?/g, "").trim(), 0 < a.length && a != V && Q())
                }
            }

            function Ya() {
                if (!ab)
                    if (ab = !0, /\/contact\/support.html/i.test(location.pathname)) {
                        if (window.MutationObserver)
                            for (var a = {
                                    attributes: !0,
                                    attributeFilter: ["style"],
                                    attributeOldValue: !0
                                }, b = document.querySelectorAll('[id*="anchor"]:not(#solve-anchor), #selected-support:not(#solve-anchor)'), d = 0; d < b.length; d++)(new window.MutationObserver(function() {
                                $a()
                            })).observe(b[d], a)
                    } else window.addEventListener("hashchange", function() {
                        /\/all_products\/[a-z]/i.test(location.hash) || h(function() {
                                Q()
                            }, function() {
                                return T(".product-picker-products").is(":visible")
                            },
                            1E3, 10)
                    })
            }
            var ab;

            function Va(a) {
                a && "string" == typeof a && (a = document.querySelectorAll(a));
                a instanceof NodeList && (a = a[0]);
                return a instanceof Element ? 0 < a.offsetWidth && 0 < a.offsetHeight || 0 < a.getClientRects().length : !1
            }

            function Z(a) {
                setTimeout(function() {
                    var b = Ka(".modal_dialog.modal_dialog_terms")[0];
                    b && (b.ClickTale = b.ClickTale || {}, b.ClickTale.CustomID = a)
                }, 500)
            }

            function bb(a, b) {
                J ? O(b) : ta(a, b)
            }

            function cb(a) {
                "function" === typeof ClickTaleRegisterFormSubmit && ClickTaleRegisterFormSubmit(a);
                Ja(document.body, "keydown");
                h(function() {
                    "function" === typeof ClickTaleRegisterFormSubmitFailure && ClickTaleRegisterFormSubmitFailure();
                    Ja(document.body, "keydown")
                }, function() {
                    return 0 < Ka(".errorMessage").length
                }, 500, 3)
            }

            function Ua(a, b) {
                (a = a.querySelector("input[type=submit]")) && b && ("function" === typeof ClickTaleFormDisableAll && ClickTaleFormDisableAll(), a = [a], Ra = "function" === typeof window.ClickTaleLogicalForm ? window.ClickTaleLogicalForm("Advertising", b, a) : 0)
            }

            function db() {
                if (!window.ClickTaleFirstPCCGo) {
                    window.ClickTaleFirstPCCGo = !0;
                    var a = C();
                    a && (J = a.m);
                    Ca();
                    a = document.querySelectorAll('[id="Globalnav.Support"]');
                    for (var b = 0; b < a.length; b++) S(a[b], "Support_" + b);
                    a = ""; - 1 < W.indexOf("request-consultation/advertising-cloud.html") ? a += ",form#faas-form-9" : -1 < W.indexOf("/request-consultation/experience-cloud.html") && (a += ",form#faas-form-40");
                    a && (a = a.replace(/^,/im, ""), A(document, "submit", a, function() {
                        t(this, "form#faas-form-40") && cb(this);
                        t(this, "form#faas-form-9") &&
                            Ra && cb(Ra)
                    }));
                    a = J ? "touchstart" : "mousedown";
                    b = 'div#faaswr input[type=\'submit\'], button[title="Contact us"], .contact-pod-cta-button, a[title="Contact us"], button.merchpod-cta-button[title=\'Get in touch\'],a[title=\'Request demo\'], a[title=\'Request a demo\'], button[title=\'Request a demo\'], a.globalnav__sitemap__item__link, .globalnav__sitemap__section-list__item, a.globalnav__sitemap__item__call-to-action, ul.globalnav__sitemap__group__content li.globalnav__sitemap__link-list__item, .globalnav__sitemap__group--with-header,[name="feedback"], #contactus, .globalnav__menu-bar__button[data-menu-id], a.Gnav-menu-label, a.Gnav-submenu-link, a.Subnav-menu-label, a.Subnav-menu-button, a.Subnav-submenu-link,#js_result-hook .bundle,.products .program,span.subTabDesign,span.subTabPhotography,span.subTabUX,span.subTabVideo,a.planDetailsPHLT,a.planDetailsCCSN,a.planDetailsPHSP,a.planDetailsILST,a.planDetailsIDSN,a.planDetailsSPRK, form[id*="faas-form"] input[type="text"], form[id*="faas-form"] input[type="email"], form[id*="faas-form"] input[type="tel"], form[id*="faas-form"] textarea';
                    /Search page( result)?/i.test(U) && (b += ", .download-links a, .account-links a, .support a.right, .learn a.right, .community a.right, .forum-product a, a.CoveoResultLink, a.CoveoFieldValue, #relevancySort, #recentSort, .redirectTab, .CoveoTab, .coveo-facet-header, .coveo-facet-selectable, .coveo-facet-search-middle, .hx-back-to-top, .CoveoPager");
                    /(Photoshop|Premiere) elements/i.test(U) && (b += ", .multi-column.section .parbase.section td>a, .multi-column.section .accordion-item, .dntShowBorder p>a");
                    /\/products\/illustrator.html/i.test(location.pathname) && (b += ', a[href="#x"]');
                    /\/contact\/support.html/i.test(location.pathname) && (b += ', .plan-col>a, a[href="https://www.adobe.com/products/catalog/software._sl_id-contentfilter_sl_catalog_sl_software_sl_mostpopular.html"], a[href="https://helpx.adobe.com/support.html"], a[class^="change"], .tabs a, .sub-prod>a, a.issue-button-solve, a.solve-resource, a.nonmodal-skip, a.show-solve, .support-col>[class^="support"]');
                    b && (a = [a, b], T(document).on(a[0],
                        a[1],
                        function(a) {
                            var b = a.target;
                            T(b);
                            var d = T(this);
                            La(b, function(b, d, f) {
                                return function() {
                                    var c = T(d);
                                    !J && c.closest('form[id*="faas-form"] input[type="text"], form[id*="faas-form"] input[type="email"], form[id*="faas-form"] input[type="tel"], form[id*="faas-form"] textarea') && (Ta(d), "function" === typeof ClickTaleRegisterElementAction && ClickTaleRegisterElementAction("click", f)); - 1 < W.indexOf("/creativecloud/plans") && (b.is("span.subTabDesign") ? Y("Action | Plans | Click on Design", 31564) : b.is("span.subTabPhotography") ?
                                        Y("Action | Plans | Click on Photography", 31565) : b.is("span.subTabUX") ? Y("Action | Plans | Click on Web & UX", 31567) : b.is("span.subTabVideo") ? Y("Action | Plans | Click on Video & Audio", 31566) : b.is("a.planDetailsPHLT") ? (Y("Action | Plans | Click on CCP plans & Pricing", 31568), Z("popup_ccp")) : b.is("a.planDetailsCCSN") ? (Y("Action | Plans | Click on CC All plans & Pricing", 31569), Z("popup_cc")) : b.is("a.planDetailsPHSP") ? (Y("Action | Plans | Click on Ps plans & pricing", 31570), Z("popup_ps")) : b.is("a.planDetailsILST") ?
                                        (Y("Action | Plans | Click on Illustratot plans & pricing", 31571), Z("popup_Illustratot")) : b.is("a.planDetailsIDSN") ? Y("Action | Plans | Click on InDesign plans & pricing", 31572) : b.is("a.planDetailsSPRK") && Y("Action | Plans | Click on XD plans & pricing", 31573));
                                    if (c.closest(".globalnav__menu-bar__button[data-menu-id]")) {
                                        var g;
                                        c.closest('[data-menu-id="sitemap"]') && (g = "Menu");
                                        c.closest('[data-menu-id="search"]') && (g = "Search");
                                        c.closest('[data-menu-id="signin"]') && (g = "Log In");
                                        c.closest('[data-menu-id="profile"]') &&
                                            (g = "User");
                                        c.closest('[data-menu-id="logo"]') && (g = "Adobe");
                                        g && R("Action | All Pages | click on " + g, !0)
                                    } else if (c.closest("#js_result-hook .bundle")) bb(a, c.closest("#js_result-hook .bundle")[0]);
                                    else if (c.closest(".products .program")) bb(a, c.closest("#js_result-hook .bundle")[0]);
                                    else if (c.closest("a.globalnav__sitemap__item__link")) {
                                        var k = "";
                                        c.closest(".globalnav__sitemap__item--leading-item") ? k = "Menu" : k = T(".globalnav__sitemap__section-list__item__button--selected").text().trim();
                                        g = c.closest("a.globalnav__sitemap__item__link").text().trim();
                                        k && g && R("Action| " + k + "| Clicked on " + g, !0)
                                    } else c.closest(".globalnav__sitemap__section-list__item") ? (g = c.closest(".globalnav__sitemap__section-list__item").find("div.globalnav__sitemap__section-list__item__button__title"), 0 < g.length && (g = g.text().trim()) && R("Action| Menu| Clicked on " + g, !0), g = c.closest(".globalnav__sitemap__section-list__item").find("button.globalnav__sitemap__section-list__item__button"), 0 < g.length && ta(a, g[0])) : c.closest("a.globalnav__sitemap__item__call-to-action") ? (g = c.closest("li").find("a.globalnav__sitemap__item__link"),
                                            0 < g.length && (g = g.text().trim(), k = c.closest("a.globalnav__sitemap__item__call-to-action").text().replace(">", "").trim(), g && k && R("Action|Learn & Support| clicked on " + g + " " + k, !0))) : c.closest("ul.globalnav__sitemap__group__content li.globalnav__sitemap__link-list__item") ? (g = c.closest("ul.globalnav__sitemap__group__content li.globalnav__sitemap__link-list__item").find("a"), 0 < g.length && (g = g.text().trim()) && R("Action|About Adobe| clicked on " + g, !0)) : c.closest(".globalnav__sitemap__group--with-header") ?
                                        R("Action | About Adobe | interacted with News", !0) : c.is("[name='feedback']") ? (R("Action | Help pages | interacted with was this helpful?", !0), c.is("#radioyes") && R("Action | Help pages | page was helpful", !0), c.is("#radiono") && (R("Action | Help pages | page wasn't helpful", !0), M(" Action | Help pages | page wasn't helpful"))) : c.closest("#contactus") ? (R("Action | all pages | click on contact us", !0), M(" Action | all pages | click on contact us")) : b.is("a.Gnav-menu-label, a.Gnav-submenu-link") ? (R("Action | Gnav Menu | Interacted with Gnav", !0), g = 0 < b.children().length ? b.children().filter(":first-child") : b, (g = g.text().trim()) && R("Action | Gnav Menu | Clicked on " + g, !0)) : b.is("a.Subnav-menu-label, a.Subnav-menu-button, a.Subnav-submenu-link") && (R("Action | Gnav Submenu | Interacted with Gnav Submenu", !0), (g = b.text().trim()) && R("Action | Gnav Submenu | Clicked on " + g, !0));
                                    if (/Search page( result)?/i.test(U))
                                        if (k = U.replace(" page", ""), c.closest(".download-links a:not(.more-link)")) R("Action|" + k + "| interacted with Download & install");
                                        else if (c.closest(".account-links a:not(.more-link)")) R("Action|" +
                                        k + "| interacted with Account management");
                                    else if (c.closest(".download-links a.more-link")) R("Action|" + k + "|Clicked on See More");
                                    else if (c.closest(".account-links a.more-link")) R("Action|" + k + "|Clicked on Go to your account");
                                    else if (c.closest(".support a.right")) R("Action|" + k + "| Clicked on support visit now");
                                    else {
                                        if (c.closest(".learn a.right")) {
                                            R("Action|" + k + "| Clicked on learn visit now");
                                            return
                                        }
                                        if (c.closest(".community a.right")) R("Action|" + k + "| Clicked on See all forums");
                                        else if (c.closest(".forum-product"))(g =
                                            c.closest(".forum-product a").text().trim()) && R("Action|" + k + "| Clicked on " + g);
                                        else {
                                            if (c.closest(".aem-url a.CoveoResultLink")) {
                                                R("Action|" + k + "|clicked on URL result");
                                                return
                                            }
                                            c.closest(":not(.aem-url) a.CoveoResultLink") ? (g = c.closest(":not(.aem-url) a.CoveoResultLink").text().trim()) && R("Action|" + k + "|interacted with search result " + g) : c.closest("#relevancySort") ? R("Action|" + k + "|clicked on Most Relevant") : c.closest("#recentSort") ? R("Action|" + k + "|clicked on most recent") : c.closest(".redirectTab") ? R("Action|" +
                                                    k + "|clicked on All Adobe") : c.closest(".CoveoTab") ? (g = c.closest(".CoveoTab").text().trim()) && R("Action|" + k + "|clicked on " + g) : c.closest(".coveo-facet-header") ? R("Action|" + k + "|clicked on product") : c.closest(".coveo-facet-selectable") ? (g = c.closest(".coveo-facet-selectable").find(".coveo-facet-value-caption").text().trim()) && R("Action|" + k + "|clicked on " + g) : c.closest(".coveo-facet-search-middle") ? R("Action|" + k + "| interacted on product lookup") : c.closest(".hx-back-to-top") ? R("Action|" + k + "|Back to Top") :
                                                c.closest(".CoveoPager") && R("Action|" + k + "|interacted with pagination")
                                        }
                                    }
                                    /(Photoshop|premiere) elements/i.test(U) && (b.is(".multi-column.section .parbase.section td>a") ? (c = b.find("p").text().trim()) && R("Action | " + U + " | Clicked on " + c, !0) : b.is(".multi-column.section .accordion-item") ? (c = b.find("h3.accordion-item-title").text().trim()) && R("Action | " + U + " | Clicked on " + c, !0) : b.is(".dntShowBorder p>a") && (c = b.text().trim()) && R("Action | " + U + " | Clicked on " + c, !0));
                                    /\/products\/illustrator.html/i.test(location.pathname) &&
                                        b.is('a[href="#x"]') && R("Action | Products Illustrator | Clicked on Close Adobe Stock iframe Modal", !0);
                                    if (window.ClickTaleMonitor) {
                                        if (t(this, "a[title='Request demo'], a[title='Request a demo'], button[title='Request a demo']")) {
                                            h(function() {
                                                G(4080);
                                                R("Onload | Request Demo Form")
                                            }, function() {
                                                return !!document.querySelector("#faaswr input[type='submit']")
                                            }, 500, 60);
                                            return
                                        }
                                        if (t(this, 'button[title="Contact us"], .contact-pod-cta-button, a[title="Contact us"], button.merchpod-cta-button[title=\'Get in touch\']')) {
                                            h(function() {
                                                G(4079);
                                                R("Onload | Contact Us Form")
                                            }, function() {
                                                return !!document.querySelector("#faaswr input[type='submit']")
                                            }, 500, 60);
                                            return
                                        }
                                        if (t(this, "div#faaswr input[type='submit']")) {
                                            setTimeout(function() {
                                                document.querySelector("div.errorSummary") && (G(4081), R("Onload | Contact Us or Request a Demo | Error"))
                                            }, 1500);
                                            return
                                        }
                                    }
                                    /\/contact\/support.html/i.test(location.pathname) && (b.is(".plan-col>a") ? (c = b.find(".plan-group").text().trim()) && R("Action | " + U + " | Clicked on " + c) : b.is('a[href="https://www.adobe.com/products/catalog/software._sl_id-contentfilter_sl_catalog_sl_software_sl_mostpopular.html"]') ?
                                        R("Action | " + U + " | Clicked on Need help deciding what to buy") : b.is('a[href="https://helpx.adobe.com/support.html"]') ? R("Action | " + U + " | Clicked on Adobe support") : b.is('a[class^="change"]') ? R("Action | " + U + " | Clicked on Change") : b.is(".tabs a") ? (c = b.text().trim()) && R("Action | " + U + " |" + (V ? " " + V + " |" : "") + " Clicked on " + c) : b.is(".sub-prod>a") ? (g = b.closest(".sub-products").siblings(".tabs").find(".selected>a").text().trim(), c = b.text().trim(), 0 < g.length && 0 < c.length && R("Action | " + U + " |" + (V ? " " + V +
                                            " |" : "") + " " + g + " | Clicked on " + c)) : b.is("a.issue-button-solve") ? (c = b.text().trim()) && R("Action | " + U + " |" + (V ? " " + V + " |" : "") + " Clicked on " + c) : b.is("a.nonmodal-skip") ? R("Action | " + U + " | Try self-help | Clicked on Skip self-help") : b.is("a.show-solve") ? R("Action | " + U + " | Solve it now | Clicked on Show self-help options") : b.is("a.solve-resource") ? (c = b.find(".resource-title").text().trim()) && R("Action | " + U + " | Try self-help | Clicked on " + c) : b.is('.support-col>[class^="support"]') && (c = b.contents().filter(function() {
                                            return 3 ==
                                                this.nodeType
                                        }).text().trim()) && R("Action | " + U + " |" + (V ? " " + V + " |" : "") + " Clicked on " + c))
                                }.bind(b[0])
                            }(d, b, a))
                        }));
                    document.querySelector("#faaswr") && Sa();
                    Array.prototype.forEach.call("#feedbacktext;#search-input;#globalnav__search__input;.search-input-field;#search-term;#selected-support textarea.contact-chat".split(";"), function(a) {
                        var b = document.querySelector(a);
                        b && (b = b.value, (b = l(b)) && K('jQuery("' + a + '").val(unescape("' + escape(b) + '"));'), Ia(document, "input", a, function() {
                            var b = this.value;
                            (b = l(b)) &&
                            K('jQuery("' + a + '").val(unescape("' + escape(b) + '"));');
                            "Search page" != U && "Search page result" != U || R("Action|" + U.replace(" page", "") + "|interacted with search bar", !0)
                        }))
                    });
                    /\/photoshop\/using\/image-size-resolution.html/i.test(location.pathname) && document.querySelectorAll(".article-container").length && document.querySelector(".article-container").addEventListener("mouseover", function() {
                        K('jQuery(".article-list-container").show();')
                    }, function() {
                        K('jQuery(".article-list-container").hide();')
                    });
                    Ga([
                        ["span.subTabAll,span.subTabDesign,span.subTabPhotography,span.subTabUX,span.subTabVideo,.noUi-handle,#js_result-hook .bundle,.products .program", !0],
                        [".tabs-labels label", !0, function() {
                            return /\/creativecloud\/plans.html/i.test(location.pathname)
                        }],
                        ['.plans-tabs input[type="radio"],.tabs-labels .tile *', !1, function() {
                            return /\/creativecloud\/plans.html/i.test(location.pathname)
                        }]
                    ])
                }
            }
            y(function() {
                Aa();
                db()
            });
            window.clickTaleStartEventSignal = function(a) {
                Q();
                a && "string" === typeof a && R(a)
            };
            window.clickTaleEndEventSignal = function() {
                ra()
            };
            window.ClicktaleIntegrationExperienceHandler = Ma;
        })();
    }
}, function() {
    return !!(window.ClickTaleSettings && window.ClickTaleSettings.PTC && typeof window.ClickTaleSettings.PTC.okToRunPCC != 'undefined');
}, 500, 20);


//Signature:mrMfszI3DkhOh4ePnU2bH8k2xn4+eF8LApyP+Jch0y0Zo7Q1UAfBf5N/FWNuwWPwKxyXPHI3EzglWG5jkRrn/PEiEoNaz/dOpcLQzxuAxoTQBxXiQjyfJGtHoiWM2SOA6FmmHVoH/FVW8owXG6tO0lgOZ8FV8QrJsG4z+jarGrk=