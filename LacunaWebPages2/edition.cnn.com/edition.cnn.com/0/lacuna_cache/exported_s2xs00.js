
        if (!window.COMPONENTS) window.COMPONENTS = [];
        window.COMPONENTS.push({
            "id": 1,
            "component": "./elements/ui/header-wrapper/header-wrapper.component.jsx",
            "props": {
                "edition": "international",
                "editions": [{
                    "host": "//us.cnn.com",
                    "label": "U.S.",
                    "name": "domestic"
                }, {
                    "host": "//edition.cnn.com",
                    "label": "International",
                    "name": "international"
                }, {
                    "host": "//arabic.cnn.com",
                    "label": "Arabic",
                    "name": "arabic"
                }, {
                    "host": "//cnnespanol.cnn.com",
                    "label": "Español",
                    "name": "espanol"
                }],
                "enableEditionPicker": true,
                "enableWatchLiveButton": true,
                "nav": {
                    "legal": [{
                        "label": "Terms of Use",
                        "url": "/terms",
                        "name": "terms-of-use"
                    }, {
                        "label": "Privacy Policy",
                        "url": "/privacy",
                        "name": "privacy-policy"
                    }, {
                        "label": "Accessibility & CC",
                        "url": "/accessibility",
                        "name": "accessibility"
                    }, {
                        "label": "AdChoices",
                        "url": "#",
                        "name": "adchoices"
                    }, {
                        "label": "About Us",
                        "url": "/about",
                        "name": "about-us"
                    }, {
                        "label": "CNN Studio Tours",
                        "url": "/tour",
                        "name": "cnn-studio-tours",
                        "excludeEdition": "international"
                    }, {
                        "label": "Modern Slavery Act Statement",
                        "url": "/msa",
                        "name": "modern-slavery-act-statement",
                        "excludeEdition": "domestic"
                    }, {
                        "label": "Advertise with us",
                        "url": "https://commercial.cnn.com",
                        "name": "advertise-with-us",
                        "excludeEdition": "domestic"
                    }, {
                        "label": "CNN Store",
                        "url": "//store.cnn.com",
                        "name": "cnn-store"
                    }, {
                        "label": "Newsletters",
                        "url": "/newsletters",
                        "name": "newsletters"
                    }, {
                        "label": "Transcripts",
                        "url": "/transcripts",
                        "name": "transcripts"
                    }, {
                        "label": "License Footage",
                        "url": "/collection",
                        "name": "license-footage"
                    }, {
                        "label": "CNN Newsource",
                        "url": "http://cnnnewsource.com",
                        "name": "cnn-newsource"
                    }, {
                        "label": "Sitemap",
                        "url": "https://www.cnn.com/sitemap.html",
                        "name": "sitemap"
                    }],
                    "sections": [{
                        "section": "us",
                        "enableSectionLink": true,
                        "excludeEdition": "international",
                        "subs": [{
                            "label": "Crime + Justice",
                            "name": "crime-and-justice",
                            "url": "/specials/us/crime-and-justice"
                        }, {
                            "label": "Energy + Environment",
                            "name": "energy-and-environment",
                            "url": "/specials/us/energy-and-environment"
                        }, {
                            "label": "Extreme Weather",
                            "name": "extreme-weather",
                            "url": "/specials/us/extreme-weather"
                        }, {
                            "label": "Space + Science",
                            "name": "space-science",
                            "url": "/specials/space-science"
                        }]
                    }, {
                        "section": "world",
                        "enableSectionLink": true,
                        "subs": [{
                            "section": "africa"
                        }, {
                            "section": "americas"
                        }, {
                            "section": "asia"
                        }, {
                            "section": "australia"
                        }, {
                            "section": "china"
                        }, {
                            "section": "europe"
                        }, {
                            "section": "india"
                        }, {
                            "section": "middleeast"
                        }, {
                            "section": "uk"
                        }]
                    }, {
                        "section": "politics",
                        "enableSectionLink": true,
                        "labelOverride": {
                            "editions": ["international"],
                            "label": "US Politics"
                        },
                        "subs": [{
                            "label": "45",
                            "name": "president",
                            "url": "/specials/politics/president-donald-trump-45"
                        }, {
                            "label": "Congress",
                            "name": "congress",
                            "url": "/specials/politics/congress-capitol-hill"
                        }, {
                            "label": "SCOTUS",
                            "name": "supreme-court",
                            "url": "/specials/politics/supreme-court-nine"
                        }, {
                            "label": "Facts First",
                            "name": "facts-first",
                            "url": "/specials/politics/fact-check-politics"
                        }, {
                            "label": "2020",
                            "name": "election",
                            "url": "/specials/politics/2020-election-coverage"
                        }, {
                            "label": "2019 Elections",
                            "name": "elections-2019",
                            "url": "/election/2019"
                        }]
                    }, {
                        "section": "business",
                        "deepNav": true,
                        "enableSectionLink": true,
                        "subs": [{
                            "label": "Markets",
                            "url": "https://money.cnn.com/data/markets/",
                            "name": "markets",
                            "subs": [{
                                "label": "Premarkets",
                                "url": "https://money.cnn.com/data/premarket/",
                                "name": "premarkets"
                            }, {
                                "label": "Dow 30",
                                "url": "https://money.cnn.com/data/dow30/",
                                "name": "dow-30"
                            }, {
                                "label": "After-Hours",
                                "url": "https://money.cnn.com/data/afterhours/",
                                "name": "after-hours"
                            }, {
                                "label": "Market Movers",
                                "url": "https://money.cnn.com/data/hotstocks/",
                                "name": "market-movers"
                            }, {
                                "label": "Fear & Greed",
                                "url": "https://money.cnn.com/data/fear-and-greed/",
                                "name": "fear-greed"
                            }, {
                                "label": "World Markets",
                                "url": "https://money.cnn.com/data/world_markets/americas/",
                                "name": "world-markets"
                            }, {
                                "label": "Sector Performance",
                                "url": "https://markets.money.cnn.com/Marketsdata/Sectors/",
                                "name": "sector-performance"
                            }, {
                                "label": "Investing",
                                "url": "/business/investing",
                                "name": "investing"
                            }, {
                                "label": "Markets Now",
                                "url": "https://money.cnn.com/investing/markets-now",
                                "name": "markets-now"
                            }, {
                                "label": "Before the Bell",
                                "url": "/specials/investing/before-the-bell",
                                "name": "before-the-bell"
                            }, {
                                "label": "Leading Indicator",
                                "url": "/specials/investing/leading-indicator",
                                "name": "leading-indicator"
                            }, {
                                "label": "Global Energy Challenge",
                                "url": "/specials/business/global-energy-challenge",
                                "name": "global-energy-challenge"
                            }, {
                                "label": "Economy",
                                "url": "/business/economy",
                                "name": "economy"
                            }, {
                                "label": "Energy",
                                "url": "/business/energy",
                                "name": "energy"
                            }]
                        }, {
                            "section": "tech",
                            "subs": [{
                                "label": "Innovate",
                                "url": "/specials/tech/innovate",
                                "name": "innovate"
                            }, {
                                "label": "Gadget",
                                "url": "/specials/tech/gadget",
                                "name": "gadget"
                            }, {
                                "label": "Mission: Ahead",
                                "url": "/specials/tech/mission-ahead",
                                "name": "mission-ahead"
                            }, {
                                "label": "Upstarts",
                                "url": "/specials/tech/upstarts",
                                "name": "upstarts"
                            }, {
                                "label": "Business Evolved",
                                "url": "/specials/tech/business-evolved",
                                "name": "business-evolved"
                            }, {
                                "label": "Work Transformed",
                                "url": "/specials/tech/work-transformed",
                                "name": "work-transformed"
                            }, {
                                "label": "Innovative Cities",
                                "url": "/specials/tech/innovative-cities",
                                "name": "innovative-cities"
                            }, {
                                "label": "Unhackable",
                                "url": "/specials/tech/unhackable",
                                "name": "unhackable"
                            }]
                        }, {
                            "section": "media",
                            "subs": [{
                                "label": "Reliable Sources",
                                "url": "/shows/reliable-sources",
                                "name": "reliable-sources"
                            }]
                        }, {
                            "section": "success",
                            "subs": [{
                                "label": "Boss Files",
                                "url": "/specials/success/boss-files",
                                "name": "boss-files"
                            }, {
                                "label": "Fresh Money",
                                "url": "/specials/success/fresh-money",
                                "name": "fresh-money"
                            }, {
                                "label": "Invest Ahead",
                                "url": "/specials/success/invest-ahead",
                                "name": "invest-ahead"
                            }, {
                                "label": "Cars",
                                "url": "/business/cars",
                                "name": "cars"
                            }, {
                                "label": "Homes",
                                "url": "/business/homes",
                                "name": "homes"
                            }, {
                                "label": "Wealth Coach",
                                "url": "/specials/success/wealth-coach",
                                "name": "wealth-coach"
                            }, {
                                "label": "Biz + Leisure",
                                "url": "/specials/success/biz-leisure",
                                "name": "biz-leisure"
                            }]
                        }, {
                            "label": "Center Piece",
                            "url": "/specials/business/center-piece",
                            "name": "center-piece",
                            "enableSectionLink": false,
                            "disableInMegaNavSubLinks": true
                        }, {
                            "section": "perspectives"
                        }, {
                            "section": "business-videos",
                            "labelOverride": {
                                "editions": ["domestic", "international"],
                                "label": "Videos"
                            }
                        }, {
                            "label": "International",
                            "url": "https://edition.cnn.com/business",
                            "name": "international-business",
                            "enableSectionLink": false,
                            "disableInMegaNavSubLinks": true,
                            "subs": [{
                                "label": "Switzerland",
                                "url": "https://www.cnnmoney.ch",
                                "name": "switzerland"
                            }, {
                                "label": "India",
                                "url": "/business/india",
                                "name": "business-india"
                            }, {
                                "label": "Davos",
                                "url": "/specials/business/davos/",
                                "name": "davos"
                            }, {
                                "label": "Reliable Sources",
                                "url": "/shows/reliable-sources",
                                "name": "reliable-sources"
                            }, {
                                "label": "Passion to Portfolio",
                                "url": "/specials/business/passion-to-portfolio",
                                "name": "passion-portfolio"
                            }, {
                                "label": "On: Germany",
                                "url": "/specials/business/on-germany",
                                "name": "on-germany"
                            }]
                        }, {
                            "label": "More",
                            "enableSectionLink": false,
                            "disableInMegaNavSubLinks": true,
                            "subs": [{
                                "label": "Accessibility & CC",
                                "url": "/accessibility",
                                "name": "accessibility"
                            }, {
                                "label": "About Us",
                                "url": "/about",
                                "name": "about-us"
                            }, {
                                "label": "Newsletters",
                                "url": "/newsletters",
                                "name": "newsletters"
                            }]
                        }]
                    }, {
                        "section": "opinions",
                        "enableSectionLink": true,
                        "excludeEdition": "international",
                        "subs": [{
                            "label": "Political Op-Eds",
                            "name": "opinion-politics",
                            "url": "/specials/opinion/opinion-politics"
                        }, {
                            "label": "Social Commentary",
                            "name": "opinion-social-issues",
                            "url": "/specials/opinion/opinion-social-issues"
                        }]
                    }, {
                        "section": "health",
                        "enableSectionLink": true,
                        "subs": [{
                            "label": "Food",
                            "name": "food",
                            "url": "/specials/health/food-diet"
                        }, {
                            "label": "Fitness",
                            "name": "fitness",
                            "url": "/specials/health/fitness-excercise"
                        }, {
                            "label": "Wellness",
                            "name": "wellness",
                            "url": "/specials/health/wellness"
                        }, {
                            "label": "Parenting",
                            "name": "parenting",
                            "url": "/specials/health/parenting"
                        }, {
                            "label": "Vital Signs",
                            "name": "vital-signs",
                            "url": "/specials/health/vital-signs"
                        }]
                    }, {
                        "section": "entertainment",
                        "enableSectionLink": true,
                        "subs": [{
                            "label": "Stars",
                            "name": "stars",
                            "url": "/entertainment/celebrities"
                        }, {
                            "label": "Screen",
                            "name": "screen",
                            "url": "/entertainment/movies"
                        }, {
                            "label": "Binge",
                            "name": "binge",
                            "url": "/entertainment/tv-shows"
                        }, {
                            "label": "Culture",
                            "name": "culture",
                            "url": "/entertainment/culture"
                        }, {
                            "label": "Media",
                            "name": "media",
                            "url": "/business/media"
                        }]
                    }, {
                        "section": "tech",
                        "enableSectionLink": false,
                        "subs": [{
                            "label": "Innovate",
                            "name": "innovate",
                            "url": "/specials/tech/innovate"
                        }, {
                            "label": "Gadget",
                            "name": "gadget",
                            "url": "/specials/tech/gadget"
                        }, {
                            "label": "Mission: Ahead",
                            "name": "mission-ahead",
                            "url": "/specials/tech/mission-ahead"
                        }, {
                            "label": "Upstarts",
                            "name": "upstarts",
                            "url": "/specials/tech/upstarts"
                        }, {
                            "label": "Work Transformed",
                            "name": "work-transformed",
                            "url": "/specials/tech/work-transformed"
                        }, {
                            "label": "Innovative Cities",
                            "name": "innovative-cities",
                            "url": "/specials/tech/innovative-cities"
                        }]
                    }, {
                        "section": "style",
                        "enableSectionLink": true,
                        "subs": [{
                            "label": "Arts",
                            "name": "arts",
                            "url": "/style/arts"
                        }, {
                            "label": "Design",
                            "name": "design",
                            "url": "/style/design"
                        }, {
                            "label": "Fashion",
                            "name": "fashion",
                            "url": "/style/fashion"
                        }, {
                            "label": "Architecture",
                            "name": "architecture",
                            "url": "/style/architecture"
                        }, {
                            "label": "Luxury",
                            "name": "luxury",
                            "url": "/style/luxury"
                        }, {
                            "label": "Autos",
                            "name": "autos",
                            "url": "/style/autos"
                        }, {
                            "label": "Video",
                            "name": "style-videos",
                            "url": "/style/videos"
                        }]
                    }, {
                        "section": "travel",
                        "enableSectionLink": true,
                        "subs": [{
                            "label": "Destinations",
                            "name": "destinations",
                            "url": "/travel/destinations"
                        }, {
                            "label": "Food & Drink",
                            "name": "food-and-drink",
                            "url": "/travel/food-and-drink"
                        }, {
                            "label": "Play",
                            "name": "play",
                            "url": "/travel/play"
                        }, {
                            "label": "Stay",
                            "name": "stay",
                            "url": "/travel/stay"
                        }, {
                            "label": "Videos",
                            "name": "travel-videos",
                            "url": "/travel/videos"
                        }]
                    }, {
                        "label": "Sports",
                        "section": "bleacher",
                        "name": "bleacher",
                        "url": "http://bleacherreport.com",
                        "enableSectionLink": true,
                        "excludeEdition": "international",
                        "subs": [{
                            "label": "Pro Football",
                            "name": "nfl",
                            "url": "http://bleacherreport.com/nfl"
                        }, {
                            "label": "College Football",
                            "name": "college-football",
                            "url": "http://bleacherreport.com/college-football"
                        }, {
                            "label": "Basketball",
                            "name": "nba",
                            "url": "http://bleacherreport.com/nba"
                        }, {
                            "label": "Baseball",
                            "name": "mlb",
                            "url": "http://bleacherreport.com/mlb"
                        }, {
                            "label": "Soccer",
                            "name": "world-football",
                            "url": "http://bleacherreport.com/world-football"
                        }, {
                            "label": "Olympics",
                            "name": "olympics",
                            "url": "/specials/sport/winter-olympics-2018"
                        }]
                    }, {
                        "section": "sport",
                        "enableSectionLink": true,
                        "excludeEdition": "domestic",
                        "name": "sports",
                        "labelOverride": {
                            "editions": ["international"],
                            "label": "Sports"
                        },
                        "subs": [{
                            "section": "football"
                        }, {
                            "section": "tennis"
                        }, {
                            "section": "equestrian"
                        }, {
                            "section": "golf"
                        }, {
                            "section": "skiing"
                        }, {
                            "section": "horseracing"
                        }, {
                            "section": "motorsport"
                        }, {
                            "section": "sailing"
                        }, {
                            "label": "Rugby",
                            "name": "rugby",
                            "url": "/specials/sport/rugby-world-cup-japan-2019-spt-intl"
                        }, {
                            "label": "Formula E",
                            "name": "formula-e",
                            "url": "/specials/sport/formula-e"
                        }, {
                            "label": "Esports",
                            "name": "esports",
                            "url": "/specials/esports"
                        }]
                    }, {
                        "section": "videos",
                        "enableSectionLink": true,
                        "subs": [{
                            "label": "Live TV ",
                            "name": "live-tv",
                            "url": "//cnn.it/go2"
                        }, {
                            "label": "Digital Studios",
                            "name": "digital-studios",
                            "url": "/specials/digital-studios"
                        }, {
                            "label": "CNN Films",
                            "name": "digital-shorts",
                            "url": "/specials/videos/digital-shorts"
                        }, {
                            "label": "HLN",
                            "name": "hln",
                            "url": "/specials/videos/hln"
                        }, {
                            "label": "TV Schedule",
                            "name": "tv-schedule",
                            "url": "/tv/schedule/cnn"
                        }, {
                            "label": "TV Shows A-Z",
                            "name": "all-shows",
                            "url": "/specials/tv/all-shows"
                        }, {
                            "label": "CNNVR",
                            "name": "vr",
                            "url": "/vr"
                        }]
                    }, {
                        "section": "features",
                        "label": "Features",
                        "name": "features",
                        "disableMegaNavLink": false,
                        "enableSectionLink": false,
                        "excludeEdition": "domestic",
                        "url": "/specials",
                        "subs": [{
                            "label": "Freedom Project",
                            "name": "freedom-project",
                            "url": "/specials/world/freedom-project"
                        }, {
                            "label": "Impact Your World",
                            "name": "impact-your-world",
                            "url": "/specials/impact-your-world"
                        }, {
                            "label": "Inside Africa",
                            "name": "inside-africa",
                            "url": "/specials/africa/inside-africa"
                        }, {
                            "label": "2 Degrees",
                            "name": "two-degrees",
                            "url": "/specials/opinions/two-degrees"
                        }, {
                            "label": "CNN Heroes",
                            "name": "cnn-heroes",
                            "url": "/specials/cnn-heroes"
                        }, {
                            "label": "All Features",
                            "name": "all-features",
                            "url": "/specials"
                        }]
                    }, {
                        "label": "Coupons",
                        "name": "coupons",
                        "section": "Coupons",
                        "url": "//coupons.cnn.com",
                        "enableSectionLink": false,
                        "excludeEdition": "international",
                        "subs": [{
                            "label": "CNN Underscored",
                            "name": "cnn-underscored",
                            "url": "/cnn-underscored/"
                        }, {
                            "label": "Explore",
                            "name": "underscored-explore",
                            "url": "/specials/cnn-underscored/explore/"
                        }, {
                            "label": "Wellness",
                            "name": "underscored-wellness",
                            "url": "/specials/cnn-underscored/wellness/"
                        }, {
                            "label": "Gadgets",
                            "name": "underscored-gadgets",
                            "url": "/specials/cnn-underscored/gadgets/"
                        }, {
                            "label": "Lifestyle",
                            "name": "underscored-lifestyle",
                            "url": "/specials/cnn-underscored/lifestyle/"
                        }, {
                            "label": "CNN Store",
                            "name": "cnn-store",
                            "url": "//store.cnn.com/?utm_source=cnn.com&utm_medium=referral&utm_campaign=navbar"
                        }]
                    }, {
                        "section": "vr",
                        "disableMegaNavLink": true,
                        "enableSectionLink": false,
                        "subs": [{
                            "label": "How To Watch VR",
                            "name": "how-to-watch-vr",
                            "url": "/2017/03/04/vr/how-to-watch-vr"
                        }, {
                            "label": "Archives",
                            "name": "vr-archives",
                            "url": "/specials/vr/vr-archives"
                        }]
                    }, {
                        "section": "more",
                        "name": "more",
                        "enableSectionLink": false,
                        "subs": [{
                            "label": "Photos",
                            "name": "photos",
                            "url": "/specials/photos"
                        }, {
                            "label": "Longform",
                            "name": "longform",
                            "url": "/specials/cnn-longform"
                        }, {
                            "label": "Investigations",
                            "name": "cnn-investigates",
                            "url": "/specials/cnn-investigates"
                        }, {
                            "label": "CNN Profiles",
                            "name": "profiles",
                            "url": "/specials/profiles"
                        }, {
                            "label": "CNN Leadership",
                            "name": "leadership",
                            "url": "/specials/more/cnn-leadership"
                        }, {
                            "label": "CNN Newsletters",
                            "name": "newsletters",
                            "url": "/email/subscription"
                        }, {
                            "label": "Work for CNN",
                            "name": "jobs",
                            "url": "https://www.turnerjobs.com/search-jobs?orgIds=1174&ac=19299"
                        }]
                    }],
                    "social": {
                        "domestic": {
                            "links": [{
                                "name": "facebook",
                                "label": "Facebook page",
                                "url": "//facebook.com/CNN"
                            }, {
                                "name": "twitter",
                                "label": "Twitter feed",
                                "url": "//twitter.com/CNN"
                            }, {
                                "name": "instagram",
                                "label": "Instagram feed",
                                "url": "//instagram.com/cnn"
                            }]
                        },
                        "international": {
                            "links": [{
                                "name": "facebook",
                                "label": "Facebook page",
                                "url": "//facebook.com/cnninternational"
                            }, {
                                "name": "twitter",
                                "label": "Twitter feed",
                                "url": "//twitter.com/cnni"
                            }, {
                                "name": "instagram",
                                "label": "Instagram feed",
                                "url": "//instagram.com/cnn"
                            }]
                        },
                        "business": {
                            "entity": "Business",
                            "links": [{
                                "name": "facebook",
                                "label": "Facebook page",
                                "url": "//facebook.com/cnnbusiness"
                            }, {
                                "name": "twitter",
                                "label": "Twitter feed",
                                "url": "//twitter.com/CNNbusiness"
                            }, {
                                "name": "instagram",
                                "label": "Instagram feed",
                                "url": "//instagram.com/cnnbusiness"
                            }]
                        },
                        "politics": {
                            "entity": "Politics",
                            "links": [{
                                "name": "facebook",
                                "label": "Facebook page",
                                "url": "//facebook.com/cnnpolitics"
                            }, {
                                "name": "twitter",
                                "label": "Twitter feed",
                                "url": "//twitter.com/cnnpolitics"
                            }, {
                                "name": "instagram",
                                "label": "Instagram feed",
                                "url": "//instagram.com/cnn"
                            }, {
                                "label": "YouTube",
                                "name": "youtube",
                                "url": "//youtube.com/user/CNN"
                            }]
                        },
                        "entertainment": {
                            "entity": "Entertainment",
                            "links": [{
                                "name": "facebook",
                                "label": "Facebook page",
                                "url": "//facebook.com/CNNent"
                            }, {
                                "name": "twitter",
                                "label": "Twitter feed",
                                "url": "//twitter.com/CNNent"
                            }, {
                                "name": "instagram",
                                "label": "Instagram feed",
                                "url": "//instagram.com/cnnentertainment"
                            }]
                        }
                    }
                },
                "pageType": "section",
                "searchUrl": "/search",
                "sectionName": "intl_homepage",
                "sectionsInfo": {
                    "africa": {
                        "basePath": "/africa",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Africa",
                        "parent": "intl_regions",
                        "sites": ["www", "edition"],
                        "title": "Africa News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/africa/index.html",
                        "name": "africa",
                        "sectionPath": "/africa"
                    },
                    "airport-delays": {
                        "basePath": "/airport-delays",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Airport Delays",
                        "sites": ["www", "edition"],
                        "title": "Airport Delays",
                        "uri": "/airport-delays/index.html",
                        "name": "airport-delays",
                        "sectionPath": "/airport-delays"
                    },
                    "americas": {
                        "basePath": "/americas",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Americas",
                        "parent": "intl_regions",
                        "sites": ["www", "edition"],
                        "title": "Americas News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/americas/index.html",
                        "name": "americas",
                        "sectionPath": "/americas"
                    },
                    "app-health-section": {
                        "basePath": "/app-health-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Health Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-health-section/index.html",
                        "name": "app-health-section",
                        "sectionPath": "/app-health-section"
                    },
                    "app-international-edition": {
                        "basePath": "/app-international-edition",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App International Edition",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-international-edition/index.html",
                        "name": "app-international-edition",
                        "sectionPath": "/app-international-edition"
                    },
                    "app-money-section": {
                        "basePath": "/app-money-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Money Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-money-section/index.html",
                        "name": "app-money-section",
                        "sectionPath": "/app-money-section"
                    },
                    "app-news-section": {
                        "basePath": "/app-news-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App News Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-news-section/index.html",
                        "name": "app-news-section",
                        "sectionPath": "/app-news-section"
                    },
                    "app-opinion-section": {
                        "basePath": "/app-opinion-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Opinion Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-opinion-section/index.html",
                        "name": "app-opinion-section",
                        "sectionPath": "/app-opinion-section"
                    },
                    "app-politics-section": {
                        "basePath": "/app-politics-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Politics Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-politics-section/index.html",
                        "name": "app-politics-section",
                        "sectionPath": "/app-politics-section"
                    },
                    "app-specials": {
                        "basePath": "/app-specials",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Specials",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-specials/index.html",
                        "name": "app-specials",
                        "sectionPath": "/app-specials"
                    },
                    "app-sports-section": {
                        "basePath": "/app-sports-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Sports Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-sports-section/index.html",
                        "name": "app-sports-section",
                        "sectionPath": "/app-sports-section"
                    },
                    "app-style-section": {
                        "basePath": "/app-style-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Style Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-style-section/index.html",
                        "name": "app-style-section",
                        "sectionPath": "/app-style-section"
                    },
                    "app-tech-section": {
                        "basePath": "/app-tech-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Tech Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-tech-section/index.html",
                        "name": "app-tech-section",
                        "sectionPath": "/app-tech-section"
                    },
                    "app-travel-section": {
                        "basePath": "/app-travel-section",
                        "canonicalSite": "app",
                        "children": [],
                        "isSubsection": false,
                        "label": "App Travel Section",
                        "sites": ["www", "edition"],
                        "title": "",
                        "uri": "/app-travel-section/index.html",
                        "name": "app-travel-section",
                        "sectionPath": "/app-travel-section"
                    },
                    "architecture": {
                        "basePath": "/style/architecture",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Architecture",
                        "parent": "style",
                        "sectionPath": "/architecture",
                        "sites": ["www", "edition"],
                        "title": "Architecture",
                        "uri": "/style/architecture/index.html",
                        "name": "architecture"
                    },
                    "area51": {
                        "basePath": "/area51",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Area 51",
                        "sites": ["www", "edition"],
                        "title": "Area 51",
                        "uri": "/area51/index.html",
                        "name": "area51",
                        "sectionPath": "/area51"
                    },
                    "arts": {
                        "basePath": "/style/arts",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Arts",
                        "parent": "style",
                        "sectionPath": "/arts",
                        "sites": ["www", "edition"],
                        "title": "Arts",
                        "uri": "/style/arts/index.html",
                        "name": "arts"
                    },
                    "asia": {
                        "basePath": "/asia",
                        "canonicalSite": "www",
                        "children": ["china", "india"],
                        "isSubsection": true,
                        "label": "Asia",
                        "parent": "intl_regions",
                        "sites": ["www", "edition"],
                        "title": "Asia News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/asia/index.html",
                        "name": "asia",
                        "sectionPath": "/asia"
                    },
                    "australia": {
                        "basePath": "/australia",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Australia",
                        "parent": "asia",
                        "sites": ["www", "edition"],
                        "title": "Australia News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/australia/index.html",
                        "name": "australia",
                        "sectionPath": "/australia"
                    },
                    "autos": {
                        "basePath": "/style/autos",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Autos",
                        "parent": "style",
                        "sectionPath": "/autos",
                        "sites": ["www", "edition"],
                        "title": "Autos",
                        "uri": "/style/autos/index.html",
                        "name": "autos"
                    },
                    "aviation": {
                        "basePath": "/travel/aviation",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Aviation",
                        "parent": "travel",
                        "sectionPath": "/aviation",
                        "sites": ["www", "edition"],
                        "title": "Innovation in Aviation from Airplanes to Airports",
                        "uri": "/travel/aviation/index.html",
                        "name": "aviation"
                    },
                    "business": {
                        "basePath": "/business",
                        "canonicalSite": "www",
                        "children": ["business-india", "business-videos", "cars", "economy", "energy", "homes", "investing", "media", "perspectives", "success", "tech"],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Business",
                        "sites": ["www"],
                        "title": "Business",
                        "uri": "/business/index.html",
                        "name": "business",
                        "sectionPath": "/business"
                    },
                    "business-india": {
                        "basePath": "/business-india",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "India",
                        "isSubsection": true,
                        "label": "Business - India",
                        "parent": "business",
                        "sectionPath": "/business-india",
                        "sites": ["www", "edition"],
                        "title": "Business - India",
                        "uri": "/business/india/index.html",
                        "name": "business-india"
                    },
                    "business-planning": {
                        "adsName": "business",
                        "basePath": "/business-planning",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "Planning",
                        "isSubsection": true,
                        "label": "Business Planning",
                        "sites": ["www", "edition"],
                        "title": "Business Planning",
                        "uri": "/business-planning/index.html",
                        "name": "business-planning",
                        "sectionPath": "/business-planning"
                    },
                    "business-videos": {
                        "adsName": "video",
                        "basePath": "/business-videos",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "Video",
                        "isSubsection": true,
                        "label": "Business Videos",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Business Videos",
                        "uri": "/business/videos/index.html",
                        "name": "business-videos",
                        "sectionPath": "/business-videos"
                    },
                    "celebrities": {
                        "basePath": "/entertainment/celebrities",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": true,
                        "label": "Celebrities",
                        "parent": "entertainment",
                        "sectionPath": "/celebrities",
                        "sites": ["www", "edition"],
                        "title": "Celebrities - Entertainment News",
                        "uri": "/entertainment/celebrities/index.html",
                        "name": "celebrities"
                    },
                    "china": {
                        "basePath": "/china",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "China",
                        "parent": "asia",
                        "sites": ["www", "edition"],
                        "title": "China News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/china/index.html",
                        "name": "china",
                        "sectionPath": "/china"
                    },
                    "cnn-underscored": {
                        "basePath": "/cnn-underscored",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "CNN Underscored",
                        "sites": ["www", "edition"],
                        "title": "Product Reviews, Gift Ideas, Gadget Guides and More",
                        "uri": "/cnn-underscored/index.html",
                        "name": "cnn-underscored",
                        "sectionPath": "/cnn-underscored"
                    },
                    "cnn10": {
                        "basePath": "/cnn10",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "CNN 10",
                        "sites": ["www", "edition"],
                        "title": "CNN 10",
                        "uri": "/cnn10/index.html",
                        "name": "cnn10",
                        "sectionPath": "/cnn10"
                    },
                    "cnnmoney": {
                        "basePath": "/",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "CNN Money",
                        "sites": ["www", "edition"],
                        "title": "CNN Money",
                        "uri": "",
                        "name": "cnnmoney",
                        "sectionPath": "/"
                    },
                    "culture": {
                        "basePath": "/entertainment/culture",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": true,
                        "label": "Culture",
                        "parent": "entertainment",
                        "sectionPath": "/culture",
                        "sites": ["www", "edition"],
                        "title": "Pop Culture - Entertainment News",
                        "uri": "/entertainment/culture/index.html",
                        "name": "culture"
                    },
                    "design": {
                        "basePath": "/style/design",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Design",
                        "parent": "style",
                        "sectionPath": "/design",
                        "sites": ["www", "edition"],
                        "title": "Design",
                        "uri": "/style/design/index.html",
                        "name": "design"
                    },
                    "destinations": {
                        "basePath": "/travel/destinations",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Destinations",
                        "parent": "travel",
                        "sectionPath": "/destinations",
                        "sites": ["www", "edition"],
                        "title": "Destinations",
                        "uri": "/travel/destinations/index.html",
                        "name": "destinations"
                    },
                    "economy": {
                        "basePath": "/economy",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Economy",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Business",
                        "uri": "/business/economy/index.html",
                        "name": "economy",
                        "sectionPath": "/economy"
                    },
                    "election-2018": {
                        "adsName": "elections",
                        "basePath": "/election",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Election 2018",
                        "parent": "politics",
                        "sites": ["www", "edition"],
                        "title": "2018 Elections",
                        "uri": "/election/index.html",
                        "name": "election-2018",
                        "sectionPath": "/election"
                    },
                    "election-center-2016": {
                        "basePath": "/election/2016",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Election Center 2016",
                        "parent": "politics",
                        "sites": ["www", "edition"],
                        "title": "2016 Elections",
                        "uri": "/election/2016/index.html",
                        "name": "election-center-2016",
                        "sectionPath": "/election/2016"
                    },
                    "entertainment": {
                        "basePath": "/entertainment",
                        "canonicalSite": "www",
                        "children": ["celebrities", "culture", "movies", "tv-shows"],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Entertainment",
                        "sites": ["www", "edition"],
                        "title": "Entertainment News - Celebrities, Movies, TV, Music",
                        "uri": "/entertainment/index.html",
                        "name": "entertainment",
                        "sectionPath": "/entertainment"
                    },
                    "equestrian": {
                        "basePath": "/sport/equestrian",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Equestrian",
                        "parent": "sport",
                        "sectionPath": "/equestrian",
                        "sites": ["www", "edition"],
                        "title": "Equestrian News",
                        "uri": "/sport/equestrian/index.html",
                        "name": "equestrian"
                    },
                    "europe": {
                        "basePath": "/europe",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Europe",
                        "parent": "intl_regions",
                        "sites": ["www", "edition"],
                        "title": "Europe News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/europe/index.html",
                        "name": "europe",
                        "sectionPath": "/europe"
                    },
                    "fashion": {
                        "basePath": "/style/fashion",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Fashion",
                        "parent": "style",
                        "sectionPath": "/fashion",
                        "sites": ["www", "edition"],
                        "title": "Fashion",
                        "uri": "/style/fashion/index.html",
                        "name": "fashion"
                    },
                    "foodanddrink": {
                        "basePath": "/travel/food-and-drink",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Food and Drink",
                        "parent": "travel",
                        "sectionPath": "/foodanddrink",
                        "sites": ["www", "edition"],
                        "title": "Food & Drink",
                        "uri": "/travel/food-and-drink/index.html",
                        "name": "foodanddrink"
                    },
                    "football": {
                        "basePath": "/sport/football",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Football",
                        "parent": "sport",
                        "sectionPath": "/football",
                        "sites": ["www", "edition"],
                        "title": "Football News",
                        "uri": "/sport/football/index.html",
                        "name": "football"
                    },
                    "golf": {
                        "basePath": "/sport/golf",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Golf",
                        "parent": "sport",
                        "sectionPath": "/golf",
                        "sites": ["www", "edition"],
                        "title": "Golf News",
                        "uri": "/sport/golf/index.html",
                        "name": "golf"
                    },
                    "health": {
                        "basePath": "/health",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Health",
                        "logo": "//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/cnn_health_banner.png",
                        "sites": ["www", "edition"],
                        "title": "Health News",
                        "uri": "/health/index.html",
                        "name": "health",
                        "sectionPath": "/health"
                    },
                    "homepage": {
                        "basePath": "/",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Domestic Homepage",
                        "sites": ["www"],
                        "title": "Breaking News, Latest News and Videos",
                        "uri": "/index.html",
                        "name": "homepage",
                        "sectionPath": "/"
                    },
                    "homepage-magellan": {
                        "basePath": "/",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Homepage Magellan",
                        "sites": ["www", "edition"],
                        "title": "Breaking News, U.S., World, Weather, Entertainment & Video News",
                        "uri": "/index3.html",
                        "name": "homepage-magellan",
                        "sectionPath": "/"
                    },
                    "horseracing": {
                        "adsName": "winningpost",
                        "basePath": "/sport/horse-racing",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Horse Racing",
                        "parent": "sport",
                        "sectionPath": "/horseracing",
                        "sites": ["www", "edition"],
                        "title": "Horse Racing News",
                        "uri": "/sport/horse-racing/index.html",
                        "name": "horseracing"
                    },
                    "hotels": {
                        "basePath": "/travel/hotels",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Hotels",
                        "parent": "travel",
                        "sectionPath": "/hotels",
                        "sites": ["www", "edition"],
                        "title": "Worldwide Inspiration for Hotel Stays",
                        "uri": "/travel/hotels/index.html",
                        "name": "hotels"
                    },
                    "india": {
                        "basePath": "/india",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "India",
                        "parent": "asia",
                        "sites": ["www", "edition"],
                        "title": "India News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/india/index.html",
                        "name": "india",
                        "sectionPath": "/india"
                    },
                    "intl_business": {
                        "adsName": "business",
                        "basePath": "/business",
                        "canonicalSite": "edition",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Intl - Business",
                        "sites": ["edition"],
                        "title": "CNN Business",
                        "uri": "/business/intl_index.html",
                        "name": "intl_business",
                        "sectionPath": "/business"
                    },
                    "intl_entertainment": {
                        "basePath": "/entertainment",
                        "canonicalSite": "edition",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Intl - Entertainment",
                        "sites": ["edition"],
                        "title": "Entertainment News - Celebrities, Movies, TV, Music",
                        "uri": "/entertainment/intl_index.html",
                        "name": "intl_entertainment",
                        "sectionPath": "/entertainment"
                    },
                    "intl_homepage": {
                        "basePath": "/",
                        "canonicalSite": "edition",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "International Homepage",
                        "sites": ["edition"],
                        "title": "Breaking News, US News, World News and Video",
                        "uri": "/intl_index.html",
                        "name": "intl_homepage",
                        "sectionPath": "/"
                    },
                    "intl_more": {
                        "basePath": "/more",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": false,
                        "label": "Intl - More",
                        "sites": ["edition"],
                        "title": "More From CNN",
                        "uri": "/more/intl_index.html",
                        "name": "intl_more",
                        "sectionPath": "/more"
                    },
                    "intl_regions": {
                        "adsName": "regions",
                        "basePath": "/regions",
                        "canonicalSite": "edition",
                        "children": ["africa", "americas", "asia", "australia", "china", "europe", "india", "middleeast", "uk"],
                        "isSubsection": false,
                        "label": "Intl - Regions",
                        "sites": ["edition"],
                        "title": "World News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/regions/intl_index.html",
                        "name": "intl_regions",
                        "sectionPath": "/regions"
                    },
                    "intl_travel": {
                        "adsName": "travel",
                        "basePath": "/travel",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": false,
                        "label": "Intl - Travel",
                        "sites": ["edition"],
                        "title": "CNN Travel | Global Destinations, Tips & Video",
                        "uri": "/travel/intl_index.html",
                        "name": "intl_travel",
                        "sectionPath": "/travel"
                    },
                    "intl_tv": {
                        "basePath": "/tv",
                        "canonicalSite": "edition",
                        "children": ["intl_tv-schedule-americas", "intl_tv-schedule-asia", "intl_tv-schedule-europe", "intl_tv-shows"],
                        "isSubsection": false,
                        "label": "Intl - TV",
                        "sites": ["edition"],
                        "title": "CNN International TV",
                        "uri": "/tv/intl_index.html",
                        "name": "intl_tv",
                        "sectionPath": "/tv"
                    },
                    "intl_tv-schedule-americas": {
                        "basePath": "/tv/schedule/americas",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Intl - TV Schedule Americas",
                        "parent": "intl_tv",
                        "sites": ["edition"],
                        "title": "Americas TV Schedule",
                        "uri": "/tv/schedule/americas/index.html",
                        "name": "intl_tv-schedule-americas",
                        "sectionPath": "/tv/schedule/americas"
                    },
                    "intl_tv-schedule-asia": {
                        "basePath": "/tv/schedule/asia",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Intl - TV Schedule Asia",
                        "parent": "intl_tv",
                        "sites": ["edition"],
                        "title": "Asia TV Schedule",
                        "uri": "/tv/schedule/asia/index.html",
                        "name": "intl_tv-schedule-asia",
                        "sectionPath": "/tv/schedule/asia"
                    },
                    "intl_tv-schedule-europe": {
                        "basePath": "/tv/schedule/europe",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Intl - TV Schedule Europe",
                        "parent": "intl_tv",
                        "sites": ["edition"],
                        "title": "Europe TV Schedule",
                        "uri": "/tv/schedule/europe/index.html",
                        "name": "intl_tv-schedule-europe",
                        "sectionPath": "/tv/schedule/europe"
                    },
                    "intl_tv-shows": {
                        "basePath": "/tv/shows",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Intl - TV Shows",
                        "parent": "intl_tv",
                        "sites": ["edition"],
                        "title": "International TV Shows",
                        "uri": "/tv/shows/intl_index.html",
                        "name": "intl_tv-shows",
                        "sectionPath": "/tv/shows"
                    },
                    "intl_videos": {
                        "basePath": "/videos",
                        "canonicalSite": "edition",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Intl - Videos",
                        "sites": ["edition"],
                        "title": "Video News",
                        "uri": "/videos/intl_index.html",
                        "name": "intl_videos",
                        "sectionPath": "/videos"
                    },
                    "intl_world": {
                        "adsName": "world",
                        "basePath": "/world",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": false,
                        "label": "Intl - World",
                        "sites": ["edition"],
                        "title": "World News",
                        "uri": "/world/intl_index.html",
                        "name": "intl_world",
                        "sectionPath": "/world"
                    },
                    "investing": {
                        "basePath": "investing",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Investing",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Investing",
                        "uri": "/business/investing/index.html",
                        "name": "investing",
                        "sectionPath": "investing"
                    },
                    "living": {
                        "basePath": "/living",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Living",
                        "sites": ["www", "edition"],
                        "title": "Living News",
                        "uri": "/living/index.html",
                        "name": "living",
                        "sectionPath": "/living"
                    },
                    "luxury": {
                        "basePath": "/style/luxury",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Luxury",
                        "parent": "style",
                        "sectionPath": "/luxury",
                        "sites": ["www", "edition"],
                        "title": "Luxury",
                        "uri": "/style/luxury/index.html",
                        "name": "luxury"
                    },
                    "media": {
                        "basePath": "/media",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Media",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Media",
                        "uri": "/business/media/index.html",
                        "name": "media",
                        "sectionPath": "/media"
                    },
                    "middleeast": {
                        "basePath": "/middle-east",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Middle East",
                        "parent": "intl_regions",
                        "sites": ["www", "edition"],
                        "title": "Middle East News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/middle-east/index.html",
                        "name": "middleeast",
                        "sectionPath": "/middle-east"
                    },
                    "more": {
                        "basePath": "/more",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "More",
                        "sites": ["www"],
                        "title": "More From CNN",
                        "uri": "/more/index.html",
                        "name": "more",
                        "sectionPath": "/more"
                    },
                    "motorsport": {
                        "basePath": "/sport/motorsport",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Motorsport",
                        "parent": "sport",
                        "sectionPath": "/motorsport",
                        "sites": ["www", "edition"],
                        "title": "Motorsport News",
                        "uri": "/sport/motorsport/index.html",
                        "name": "motorsport"
                    },
                    "movies": {
                        "basePath": "/entertainment/movies",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": true,
                        "label": "Movies",
                        "parent": "entertainment",
                        "sectionPath": "/movies",
                        "sites": ["www", "edition"],
                        "title": "Movies - Entertainment News",
                        "uri": "/entertainment/movies/index.html",
                        "name": "movies"
                    },
                    "olympics": {
                        "basePath": "/sport/olympics",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Olympics",
                        "parent": "sport",
                        "sectionPath": "/olympics",
                        "sites": ["www", "edition"],
                        "title": "2016 Summer Olympics in Rio, Brazil",
                        "uri": "/sport/olympics/index.html",
                        "name": "olympics"
                    },
                    "opinions": {
                        "adsName": "opinion",
                        "basePath": "/opinions",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Opinion",
                        "sites": ["www"],
                        "title": "Opinion, Commentary, Analysis",
                        "uri": "/opinions/index.html",
                        "name": "opinions",
                        "sectionPath": "/opinions"
                    },
                    "perspectives": {
                        "basePath": "/perspectives",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Perspectives",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Perspectives",
                        "uri": "/business/perspectives/index.html",
                        "name": "perspectives",
                        "sectionPath": "/perspectives"
                    },
                    "energy": {
                        "basePath": "/energy",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Energy",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Energy",
                        "uri": "/business/energy/index.html",
                        "name": "energy",
                        "sectionPath": "/energy"
                    },
                    "cars": {
                        "basePath": "/cars",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Cars",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Cars",
                        "uri": "/business/cars/index.html",
                        "name": "cars",
                        "sectionPath": "/cars"
                    },
                    "homes": {
                        "basePath": "/homes",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Homes",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Homes",
                        "uri": "/business/homes/index.html",
                        "name": "homes",
                        "sectionPath": "/homes"
                    },
                    "play": {
                        "basePath": "/travel/play",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Play",
                        "parent": "travel",
                        "sectionPath": "/travel-play",
                        "sites": ["www", "edition"],
                        "title": "What To Do",
                        "uri": "/travel/play/index.html",
                        "name": "play"
                    },
                    "politics": {
                        "basePath": "/politics",
                        "canonicalSite": "www",
                        "children": ["election-2018", "election-center-2016"],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Politics",
                        "sites": ["www", "edition"],
                        "title": "Political News, Analysis and Opinion",
                        "uri": "/politics/index.html",
                        "name": "politics",
                        "sectionPath": "/politics"
                    },
                    "profiles": {
                        "basePath": "/profiles",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "CNN Profiles",
                        "isSubsection": false,
                        "label": "Profiles",
                        "sites": ["www", "edition"],
                        "title": "CNN Profiles",
                        "uri": "/profiles/index.html",
                        "name": "profiles",
                        "sectionPath": "/profiles"
                    },
                    "sailing": {
                        "adsName": "mainsail",
                        "basePath": "/sport/sailing",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Sailing",
                        "parent": "sport",
                        "sectionPath": "/sailing",
                        "sites": ["www", "edition"],
                        "title": "Sailing News",
                        "uri": "/sport/sailing/index.html",
                        "name": "sailing"
                    },
                    "skiing": {
                        "basePath": "/sport/skiing",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Skiing",
                        "parent": "sport",
                        "sectionPath": "/skiing",
                        "sites": ["www", "edition"],
                        "title": "Skiing News",
                        "uri": "/sport/skiing/index.html",
                        "name": "skiing"
                    },
                    "sport": {
                        "adsName": "worldsport",
                        "basePath": "/sport",
                        "canonicalSite": "edition",
                        "children": ["equestrian", "football", "golf", "horseracing", "motorsport", "olympics", "sailing", "skiing", "tennis"],
                        "isSubsection": false,
                        "label": "Sports",
                        "sites": ["www", "edition"],
                        "title": "Sport News",
                        "uri": "/sport/index.html",
                        "name": "sport",
                        "sectionPath": "/sport"
                    },
                    "sports": {
                        "basePath": "/sports",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Sports",
                        "sites": ["www"],
                        "title": "Sports News",
                        "uri": "/sports/index.html",
                        "name": "sports",
                        "sectionPath": "/sports"
                    },
                    "stay": {
                        "basePath": "/travel/stay",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Stay",
                        "parent": "travel",
                        "sectionPath": "/travel-stay",
                        "sites": ["www", "edition"],
                        "title": "Places to Stay",
                        "uri": "/travel/stay/index.html",
                        "name": "stay"
                    },
                    "style": {
                        "basePath": "/style",
                        "canonicalSite": "www",
                        "children": ["architecture", "arts", "autos", "design", "fashion", "luxury"],
                        "isSubsection": false,
                        "label": "Style",
                        "sites": ["www", "edition"],
                        "title": "CNN Style - Fashion, Design, Art, Architecture and Luxury",
                        "uri": "/style/index.html",
                        "name": "style",
                        "sectionPath": "/style"
                    },
                    "style-home": {
                        "basePath": "/style-home",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Style - Home",
                        "parent": "style",
                        "sites": ["www", "edition"],
                        "title": "CNN Style - Fashion, Design, Art, Architecture and Luxury",
                        "uri": "/style-home/index.html",
                        "name": "style-home",
                        "sectionPath": "/style-home"
                    },
                    "style-show": {
                        "basePath": "/style-show",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Style - Show",
                        "parent": "style",
                        "sites": ["www", "edition"],
                        "title": "Style Show",
                        "uri": "/style-show/index.html",
                        "name": "style-show",
                        "sectionPath": "/style-show"
                    },
                    "success": {
                        "basePath": "/success",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Success",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Success",
                        "uri": "/business/success/index.html",
                        "name": "success",
                        "sectionPath": "/success"
                    },
                    "tech": {
                        "basePath": "/tech",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Tech",
                        "parent": "business",
                        "sites": ["www", "edition"],
                        "title": "Tech News",
                        "uri": "/business/tech/index.html",
                        "name": "tech",
                        "sectionPath": "/tech"
                    },
                    "tennis": {
                        "basePath": "/sport/tennis",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "Tennis",
                        "parent": "sport",
                        "sectionPath": "/tennis",
                        "sites": ["www", "edition"],
                        "title": "Tennis News",
                        "uri": "/sport/tennis/index.html",
                        "name": "tennis"
                    },
                    "travel": {
                        "basePath": "/travel",
                        "canonicalSite": "www",
                        "children": ["destinations", "foodanddrink", "hotels", "play", "stay", "travel-home", "travel-video-hub"],
                        "isSubsection": false,
                        "label": "Travel",
                        "sites": ["www", "edition"],
                        "title": "CNN Travel | Global Destinations, Tips & Video",
                        "uri": "/travel/index.html",
                        "name": "travel",
                        "sectionPath": "/travel"
                    },
                    "travel-home": {
                        "basePath": "/travel-home",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Travel - Home",
                        "parent": "travel",
                        "sites": ["www", "edition"],
                        "title": "CNN Travel | Global Destinations, Tips & Video",
                        "uri": "/travel-home/index.html",
                        "name": "travel-home",
                        "sectionPath": "/travel-home"
                    },
                    "travel-video-hub": {
                        "basePath": "/travel/videos",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Travel Video Hub",
                        "parent": "travel",
                        "sectionPath": "/travel-video-hub",
                        "sites": ["www", "edition"],
                        "title": "Travel Videos",
                        "uri": "/travel/videos/index.html",
                        "name": "travel-video-hub"
                    },
                    "tv": {
                        "basePath": "/tv",
                        "canonicalSite": "www",
                        "children": ["tv-schedule-cnn"],
                        "isSubsection": false,
                        "label": "TV",
                        "sites": ["www"],
                        "title": "CNN TV",
                        "uri": "/tv/index.html",
                        "name": "tv",
                        "sectionPath": "/tv"
                    },
                    "tv-schedule-cnn": {
                        "basePath": "/tv/schedule/cnn",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "TV Schedule - CNN",
                        "parent": "tv",
                        "sites": ["www"],
                        "title": "TV Schedule - CNN",
                        "uri": "/tv/schedule/cnn/index.html",
                        "name": "tv-schedule-cnn",
                        "sectionPath": "/tv/schedule/cnn"
                    },
                    "tv-shows": {
                        "basePath": "/entertainment/tv-shows",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": true,
                        "label": "TV Shows",
                        "parent": "entertainment",
                        "sectionPath": "/tv-shows",
                        "sites": ["www"],
                        "title": "TV Shows - Entertainment News",
                        "uri": "/entertainment/tv-shows/index.html",
                        "name": "tv-shows"
                    },
                    "uk": {
                        "basePath": "/uk",
                        "canonicalSite": "edition",
                        "children": [],
                        "isSubsection": true,
                        "label": "United Kingdom",
                        "parent": "europe",
                        "sites": ["www", "edition"],
                        "title": "U.K. News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/uk/index.html",
                        "name": "uk",
                        "sectionPath": "/uk"
                    },
                    "us": {
                        "basePath": "/us",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "US",
                        "isSubsection": false,
                        "label": "US",
                        "sites": ["www", "edition"],
                        "title": "U.S. News - Breaking News, Video, Headlines and Opinion",
                        "uri": "/us/index.html",
                        "name": "us",
                        "sectionPath": "/us"
                    },
                    "videos": {
                        "adsName": "video",
                        "basePath": "/videos",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "Videos",
                        "sites": ["www"],
                        "title": "Video News",
                        "uri": "/videos/index.html",
                        "name": "videos",
                        "sectionPath": "/videos"
                    },
                    "vr": {
                        "basePath": "/vr",
                        "canonicalSite": "www",
                        "children": [],
                        "displayLabel": "",
                        "isSubsection": false,
                        "label": "VR",
                        "sites": ["www", "edition"],
                        "title": "Virtual Reality & 360° Video - CNNVR",
                        "uri": "/vr/index.html",
                        "name": "vr",
                        "sectionPath": "/vr"
                    },
                    "watch-cnn": {
                        "basePath": "/tv/watch/cnn",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": true,
                        "label": "Watch CNN",
                        "parent": "tv",
                        "sectionPath": "/watch-cnn",
                        "sites": ["www", "edition"],
                        "title": "Watch CNN Live - Stream CNN Live Online",
                        "uri": "/tv/watch/cnn/index.html",
                        "name": "watch-cnn"
                    },
                    "weather": {
                        "basePath": "/weather",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "Weather",
                        "sites": ["www", "edition"],
                        "title": "Latest Weather and Extended Forecast",
                        "uri": "/weather/index.html",
                        "name": "weather",
                        "sectionPath": "/weather"
                    },
                    "world": {
                        "basePath": "/world",
                        "canonicalSite": "www",
                        "children": [],
                        "isSubsection": false,
                        "label": "World",
                        "sites": ["www"],
                        "title": "World News",
                        "uri": "/world/index.html",
                        "name": "world",
                        "sectionPath": "/world"
                    }
                },
                "uri": "/intl_index.html",
                "vertical": "",
                "watchLiveButton": {
                    "copy": "Live TV",
                    "link": "http://go.cnn.com/?stream=cnni&sr=watchLiveHPbutton&source=edition",
                    "validCountries": ["US", "CA", "PR", "VI"]
                }
            }
        });
    