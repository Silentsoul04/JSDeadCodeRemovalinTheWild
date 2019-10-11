
        var ablincoln_config = ablincoln_config || {};
        ablincoln_config.tests = {
            "JS.MobileMenu": {
                "id": 367,
                "name": "JS.MobileMenu",
                "buckets": 1000,
                "input": "vuid",
                "url": "https:\/\/www.vimeo.com",
                "experiments": [{
                    "id": 940,
                    "name": "Mobile Menu Priority",
                    "buckets": 100,
                    "state": 1,
                    "published_on": "2019-10-09 13:44:28",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "0000-00-00 00:00:00",
                    "parameters": [{
                        "id": 1654,
                        "name": "mobile_nav_priority",
                        "choice": "control",
                        "weight": 1
                    }, {
                        "id": 1655,
                        "name": "mobile_nav_priority",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }]
            },
            "JS.Topnav.SolutionsDropdown": {
                "id": 357,
                "name": "JS.Topnav.SolutionsDropdown",
                "buckets": 1000,
                "input": "vuid",
                "url": "vimeo.com",
                "experiments": [{
                    "id": 920,
                    "name": "top nav solutions dropdown",
                    "buckets": 1000,
                    "state": 1,
                    "published_on": "2019-09-23 08:27:33",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "0000-00-00 00:00:00",
                    "parameters": [{
                        "id": 1623,
                        "name": "show_solutions_dropdown",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }]
            },
            "JS.Home.LoggedOut.MarketplaceLaunchCta": {
                "id": 356,
                "name": "JS.Home.LoggedOut.MarketplaceLaunchCta",
                "buckets": 1000,
                "input": "vuid",
                "url": "vimeo.com",
                "experiments": [{
                    "id": 919,
                    "name": "launch cta for marketplace",
                    "buckets": 1000,
                    "state": 3,
                    "published_on": "2019-09-23 08:28:08",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "2019-10-02 17:47:56",
                    "parameters": [{
                        "id": 1622,
                        "name": "show_marketplace_launch_cta",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }, {
                    "id": 929,
                    "name": "Enterprise \/ Marketplace \/ Control LOHP Pill",
                    "buckets": 1000,
                    "state": 1,
                    "published_on": "2019-10-02 17:48:06",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "0000-00-00 00:00:00",
                    "parameters": [{
                        "id": 1633,
                        "name": "show_pill_cta",
                        "choice": "for_hire_cta",
                        "weight": 2
                    }, {
                        "id": 1634,
                        "name": "show_pill_cta",
                        "choice": "enterprise_cta",
                        "weight": 2
                    }, {
                        "id": 1643,
                        "name": "show_pill_cta",
                        "choice": "control",
                        "weight": 1
                    }],
                    "segments": []
                }]
            },
            "JS.Home.LoggedOut.Mobile": {
                "id": 308,
                "name": "JS.Home.LoggedOut.Mobile",
                "buckets": 1000,
                "input": "vuid",
                "url": "http:\/\/www.vimeo.com",
                "experiments": [{
                    "id": 787,
                    "name": "10% Mobile LOHP Join Form",
                    "buckets": 100,
                    "state": 3,
                    "published_on": "2019-05-22 12:34:50",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "2019-06-13 12:26:35",
                    "parameters": [{
                        "id": 1365,
                        "name": "has_inline_join_form",
                        "choice": "control",
                        "weight": 1
                    }, {
                        "id": 1366,
                        "name": "has_inline_join_form",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }, {
                    "id": 807,
                    "name": "90% Mobile LOHP Join Form",
                    "buckets": 900,
                    "state": 3,
                    "published_on": "2019-05-28 15:10:44",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "2019-06-13 12:26:38",
                    "parameters": [{
                        "id": 1401,
                        "name": "has_inline_join_form",
                        "choice": "control",
                        "weight": 1
                    }, {
                        "id": 1402,
                        "name": "has_inline_join_form",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }, {
                    "id": 816,
                    "name": "100% Mobile LOHP Join Form",
                    "buckets": 1000,
                    "state": 3,
                    "published_on": "2019-06-13 17:30:08",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "2019-07-08 15:03:13",
                    "parameters": [{
                        "id": 1420,
                        "name": "has_inline_join_form",
                        "choice": "control",
                        "weight": 1
                    }, {
                        "id": 1421,
                        "name": "has_inline_join_form",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }, {
                    "id": 906,
                    "name": "10% Mobile LOHP Join Form at bottom",
                    "buckets": 100,
                    "state": 1,
                    "published_on": "2019-08-29 13:51:49",
                    "paused_on": "0000-00-00 00:00:00",
                    "stopped_on": "0000-00-00 00:00:00",
                    "parameters": [{
                        "id": 1596,
                        "name": "has_inline_join_form",
                        "choice": "control",
                        "weight": 1
                    }, {
                        "id": 1597,
                        "name": "has_inline_join_form",
                        "choice": "variant",
                        "weight": 1
                    }],
                    "segments": []
                }]
            }
        };
    