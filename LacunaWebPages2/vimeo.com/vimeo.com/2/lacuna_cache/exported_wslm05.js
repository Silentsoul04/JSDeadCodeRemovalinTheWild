
    var __fa = __fa || [];
    /**
     * Because single page applications such as the app shell will be tracking
     * Fatal Attraction page views on React lifecycle hooks (componentDidMount)
     * we want to avoid dispatching the pageview event from the PHP template
     * and defer this sort of tracking logic to the front end.
     *
     * This check allows us to declare in a controller whether or not we
     * want to dispatch that preliminary pageview.
     *
     * The property is additive only, as to not affect existing pageviews.
     */
            __fa.push(['trackPageview']);
    
    /**
     * Add server side ABLincoln experiments to GTM data layer.
     */
    
        var _extend = function(){for(var r=arguments[0],n=1,e=arguments.length;e>n;n++){var t=arguments[n];for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a])}return r};

        var CSS_DIR = 'https://f.vimeocdn.com/styles/css_opt/',
        JS_DIR = 'https://f.vimeocdn.com/js_opt/',
        IMAGE_DIR = 'https://f.vimeocdn.com/images_v6/',
        FONT_DIR = 'https://f.vimeocdn.com/fonts/',
        SVG_DIR = 'https://f.vimeocdn.com/svg/',
                BUILD_HASH = '4e59a';

    
        var vimeo = _extend((window.vimeo || {}), {"app_version ":"v6 ","domain ":"vimeo.com ","url ":"vimeo.com ","cur_user ":false,"origin_user_id ":null,"origin_user ":false,"is_mobile ":true});
    vimeo.config = _extend((vimeo.config || {}), {"sticky_topnav ":{"excluded_pages ":["Vimeo\\Controller\\AboutController:main ","Vimeo\\Controller\\AboutController:professionals ","Vimeo\\Controller\\AboutController:create ","Vimeo\\Controller\\AboutController:everyone
                                ","Vimeo\\Controller\\HomeController:upgrade ","Vimeo\\Controller\\StoreController:main ","Vimeo\\Controller\\User\\Settings2Controller:main ","Vimeo\\Controller\\User\\Settings2Controller:team_members ","Vimeo\\Controller\\User\\Settings2Controller:password
                                ","Vimeo\\Controller\\UserController:main ","Vimeo\\Controller\\ClipStatsController:main ","Vimeo\\Controller\\Clip\\Settings\\EmbedController:embed ","Vimeo\\Controller\\VideoManagerController ","Vimeo\\Controller\\VideoReviewController
                                ","Vimeo\\Controller\\MessagesController ","Vimeo\\Controller\\StatsController ","Vimeo\\Controller\\UploadController ","Vimeo\\Controller\\BlogController ","Vimeo\\Controller\\OnDemand\\SettingsController ","Vimeo\\Controller\\Clip\\SettingsController
                                "],"sticky_included_pages ":["Vimeo\\Controller\\Stock\\StockHomePageController ","Vimeo\\Controller\\Stock\\StockFootageController ","Vimeo\\Controller\\Stock\\StockSearchController ","Vimeo\\Controller\\Stock\\StockCollectionsController
                                ","Vimeo\\Controller\\AlbumController "],"topnav_wrap_selector ":"#topnav_outer_wrap ","content_wrap_selector ":".wrap_content "},"locale ":"en "});

        var __i18nLocale = 'en';
    var localeConfig = {
        lang: 'en',
        'Date': {
            months: ["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "],
            months_abbr: ["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "],
            days: ["Sunday ","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "],
            days_abbr: ["Sun ","Mon ","Tue ","Wed ","Thu ","Fri ","Sat "],

            // Culture's date order: MM/DD/YYYY
            dateOrder: ['date', 'month', 'year'],
            shortDate: '%d/%m/%Y',
            shortTime: '%I:%M%p',
            AM: 'AM',
            PM: 'PM',
            firstDayOfWeek: 0,

            // Date.Extras
            ordinal: function(dayOfMonth){
                return dayOfMonth;
            }
        },
        'DatePicker': {
            select_a_time: "Select a time ",
            use_mouse_wheel: "Use the mouse wheel to quickly change value ",
            time_confirm_button: "OK ",
            apply_range: "Apply ",
            cancel: "Cancel ",
            week: "Wk "        },
                'Number': {
            decimal: '.',
            group: ',',
            currency: {
                suffix: '10,00 €'
            }
        },
        'FormValidator': {"required ":"This field is required. ","requiredChk ":"This field is required. "}    };

    var fullLocale = '';

    
        var Copy = {translate:function(t,i,u){var e='object'!=typeof this.dict[t]?this.dict[t]:i?this.dict[t].plural:this.dict[t].singular;return'object'==typeof u&&(e=this.substitute(e,u)),e},substitute:function(t,i){return void 0!==t.substitute?t.substitute(i):t.replace(/\\?\{([^{}]+)\}/g,function(t,u){return'\\'==t.charAt(0)?t.slice(1):null!=i[u]?i[u]:''})},dict:{}};
    Copy.dict = {"did_you_mean_email ":"Did you mean <em>{SUGGEST}
                            <\/em>?","email_password_mismatch":"Email and password do not match","oops_try_again":"Oops! Something went wrong. Please try again.","just_now":"just now","seconds_ago":{"singular":"{COUNT} second ago","plural":"{COUNT} seconds
                                ago"},"minutes_ago":{"singular":"{COUNT} minute ago","plural":"{COUNT} minutes ago"},"hours_ago":{"singular":"{COUNT} hour ago","plural":"{COUNT} hours ago"},"open_comment_box":"Add new comment instead &raquo;","url_unavailable":"Sorry,
                                this url is unavailable.","unsaved_changes_generic":"You have unsaved changes, are you sure you wish to leave?","add":"Add","remove":"Remove","select":"Select","no_followers_for_letter":"You don&rsquo;t follow anyone that
                                begin with the letter &ldquo;{PAGE_LETTER}&rdquo;","share_limit_reached":"You have reached the maximum number of users to share with.","at_least_one":"There must be at least one user.","available":"Available","unavailable":"Unavailable","browse_error_generic":"Sorry,
                                there was an error","browse_error_no_videos":"Sorry, no videos found","follow":"Follow","following":"Following","unfollow":"Unfollow","unfollowing":"Unfollowing","count_comments":{"singular":"{COUNT} comment","plural":"{COUNT}
                                comments"},"first_comment":"Be the first to comment\u2026","no_comments_for_you":"Forbidden. You cannot post comments on this page.","oops":"Oops!","player_try_again":"That wasn't supposed to happen. Please try again in
                                a few minutes.","duration_input_min_duration":"The duration cannot be less than {MIN_DURATION}.","duration_input_max_duration":"The duration cannot be greater than {MAX_DURATION}.","duration_input_invalid_characters":"0-9
                                and : are the only acceptable inputs.","close":"Close","expand":"Expand","loading":"Loading...","top":"top","advanced_search":"Advanced Search","no_suggestions":"No suggestions","recent_searches":"Recent Searches","search_all":"Search
                                All of Vimeo","email_and_password":"Please enter your email and password","email_address":"Please enter a valid email address","name_email_and_password":"Please enter your name, email, and password"};
                                