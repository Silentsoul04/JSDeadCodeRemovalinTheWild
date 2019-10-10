var bb = bb || {};

bb.main = function() {
    // ADFORM
    var additional_costs = bb.data.messages[0].additional_costs,
        background_visual = bb.data.messages[0].background_visual,
        copy_frame_1 = bb.data.messages[0].copy_frame_1,
        cta_text = bb.data.messages[0].cta_text,
        default_order = bb.data.messages[0].default_order,
        description = bb.data.messages[0].description,
        description2 = bb.data.messages[0].description2,
        product_category = bb.data.messages[0].product_category,
        product_category_id = bb.data.messages[0].product_category_id,
        product_deeplink = bb.data.messages[0].product_deeplink,
        product_id = bb.data.messages[0].product_id,
        product_image = bb.data.messages[0].product_image,
        product_name = bb.data.messages[0].product_name,
        product_price = bb.data.messages[0].product_price,
        //productPlusValue = "dit is de productPlus";
        productPlusValue = bb.data.messages[0].productplus;
    //
    var browser = new browserCheck();
    var debug = false;
    var fromFeed = true;
    var mouseObj = {
        x: width / 2,
        y: height / 2,
        over: false
    };
    if (!browser.mobile) {
        bb.defaults = {
            rotationZ: .001
        };
        if (browser.isChrome) bb.defaults.webkitPerspective = 1000;
    }
    var width = 300;
    var height = 250;
    var magenta = '#E20074';
    var white = '#FFFFFF';
    var bannerHolder = bb.createElement({
        id: "bannerHolder",
        width: width,
        height: height,
        backgroundColor: "#E20074",
        parent: document.body
    });
    var banner = bb.createElement({
        id: "bannerBB",
        opacity: 0,
        width: width,
        height: height,
        backgroundImage: background_visual,
        /*backgroundColor: bb.settings.magenta,*/ overflow: "hidden",
        cursor: "pointer",
        parent: bannerHolder
    });
    if (!fromFeed) bb.json = {};
    var phoneURL = product_image || 'images/phone.png';
    var images = [phoneURL, 'images/logo.png', 'images/background.jpg'];
    var main_tl;
    var animation;
    var priceArr = [];
    var bijbetalingPrice;

    var descArr = [];

    function splitDescription() {
        var thisDesc = bb.json.description.split('+ ');
        descArr.push(thisDesc[0]);
        descArr.push(thisDesc[1]);
    }

    function splitBijbetaling() {
        var thisBijbetaling = additional_costs.split('.');
        bijbetalingPrice = thisBijbetaling[0] + ',-';
    }

    function splitPrice() {
        var thisPrice = product_price.split('.');
        priceArr.push(thisPrice[0]);
    }
    bb.preloadImages(images, function() {
        splitPrice();
        splitBijbetaling();
        //splitDescription();
        var frame1Copy = bb.createElement({
            id: 'frame1Copy',
            left: 18,
            top: 0,
            parent: banner
        });
        var frame1CopyP = bb.createElement({
            type: 'p',
            id: 'frame1CopyP',
            parent: frame1Copy
        });

        var phoneTitleCopy = bb.createElement({
            id: 'phoneTitleCopy',
            left: 120,
            top: 53,
            parent: banner
        });
        var phoneTitleCopyP = bb.createElement({
            type: 'p',
            id: 'phoneTitleCopyP',
            parent: phoneTitleCopy
        });

        var usp_1 = bb.createElement({
            id: 'usp_1',
            left: 119,
            top: 132,
            parent: banner
        });
        var usp_1P = bb.createElement({
            type: 'p',
            id: 's',
            parent: usp_1
        });

        var usp_2 = bb.createElement({
            id: 'usp_2',
            left: 119,
            top: 150,
            parent: banner
        });
        var usp_2P = bb.createElement({
            type: 'p',
            id: 'usp_2P',
            parent: usp_2
        });

        //var bijbetaling = bb.createElement({id:'bijbetaling', left:115, top:218, parent: banner});
        //var bijbetalingP = bb.createElement({type:'p', id:'subCopyP2',  backgroundColor:'transparent',parent: bijbetaling});	

        var logo = bb.createElement({
            id: 'logo',
            left: 15,
            top: 15,
            height: 22,
            backgroundImage: 'images/logo.png',
            parent: banner
        });

        //var letop = bb.createElement({id:'letop', left:0, top:-2, height:250, backgroundImage:'images/letop.png', parent: banner});
        /*
        var priceHolder = bb.createElement({id:'priceHolder', left:110, top:124, width:'100%', parent: banner});	
        	var euroSign = bb.createElement({type:'p',id:'euroSign', top:10,left:4,parent: priceHolder, backgroundColor:'transparent', borderRadius:0});
        	var maand = bb.createElement({type:'p',id:'maand', top:56, left:26,parent: priceHolder, backgroundColor:'transparent', borderRadius:0});
        	var price = bb.createElement({type:'p',id:'price', left:26, parent: priceHolder, backgroundColor:'transparent', borderRadius:0});
        */
        var phoneHolder = bb.createElement({
            id: 'phoneHolder',
            left: 5,
            top: 50,
            width: 110,
            height: 162,
            parent: banner
        });
        var phone = new PhoneInteractive(phoneHolder, bb.image_cache[phoneURL], phoneHolder.get('width'), phoneHolder.get('height'), width, height, true);
        phone.activate();
        // PRODUCTPLUS
        var productPlus = bb.createElement({
            id: 'productPlus',
            left: 60,
            top: 170,
            width: 100,
            height: 60,
            parent: banner
        })
        var productPlusP = bb.createElement({
            type: 'p',
            id: 'productPlusP',
            backgroundColor: '#3c7eb',
            parent: productPlus
        });
        var ctaHolder = bb.createElement({
            id: 'ctaHolder',
            left: 180,
            top: 190,
            width: '100%',
            parent: banner
        });
        var ctaBg = bb.createElement({
            id: 'ctaBg',
            parent: ctaHolder,
            backgroundColor: '#fff',
            borderRadius: 0
        });
        var ctaTxtP = bb.createElement({
            type: 'p',
            id: 'ctaTxtP',
            parent: ctaHolder
        });

        /* TEXT OBJECTZ */
        var textObj_frame1Copy = new TextObj({
            debug: debug,
            holder: frame1CopyP,
            text: copy_frame_1,
            splitLines: true,
            background: true,
            backgroundColor: white,
            fontColor: magenta,
            fontSize: 30,
            maxFontSize: 43,
            minFontSize: 15,
            padding: {
                top: 0,
                right: 4,
                bottom: 0,
                left: 4
            },
            sizeBox: {
                width: 260,
                height: 220
            }
        });
        //textObj_frame1Copy.resize();

        var textObj_phoneTitle = new TextObj({
            debug: debug,
            holder: phoneTitleCopyP,
            text: product_name || 'SAMSUNG S7 EDGE',
            splitLines: true,
            fontSize: 30,
            background: true,
            backgroundColor: white,
            fontColor: magenta,
            maxFontSize: 34,
            minFontSize: 10,
            lineHeightMultiplier: 1,
            padding: {
                top: 0,
                right: 4,
                bottom: 0,
                left: 4
            },
            sizeBox: {
                width: 176,
                height: 80
            }
        });
        //textObj_phoneTitle.resize();

        var textObj_usp_1 = new TextObj({
            debug: debug,
            holder: usp_1P,
            text: description,
            fontFamily: 'TeleGrotesk Headline Ultra',
            splitLines: true,
            fontSize: 16,
            background: true,
            backgroundColor: '#fff',
            fontColor: magenta,
            maxFontSize: 16,
            minFontSize: 16,
            lineHeightMultiplier: 1.2,
            padding: {
                top: 0,
                right: 2,
                bottom: 0,
                left: 2
            },
            sizeBox: {
                width: 170,
                height: 18
            }
        });
        //textObj_usp_1.resize();

        var textObj_usp_2 = new TextObj({
            debug: debug,
            holder: usp_2P,
            text: description2,
            fontFamily: 'TeleGrotesk Headline Ultra',
            splitLines: true,
            fontSize: 16,
            background: true,
            backgroundColor: '#fff',
            fontColor: magenta,
            maxFontSize: 16,
            minFontSize: 16,
            lineHeightMultiplier: 1.2,
            padding: {
                top: 0,
                right: 2,
                bottom: 0,
                left: 2
            },
            sizeBox: {
                width: 170,
                height: 18
            }
        });
        //textObj_usp_2.resize();

        //var textObj_bijbetaling = new TextObj({debug:debug, holder:bijbetalingP, text: 'Eenmalige bijbetaling €'+bijbetalingPrice,/*text:bb.json_u.usp2,*/  fontFamily:'TeleGrotesk Headline Ultra', splitLines:true, fontSize:10, background:false, backgroundColor:'#000000', fontColor:magenta,  maxFontSize:10, minFontSize:10, lineHeightMultiplier:1.2, padding:{top:0, right:2, bottom:0, left:2}, sizeBox:{width:180, height:18}});
        //textObj_bijbetaling.resize();

        var textObj_cta = new TextObj({
            debug: debug,
            holder: ctaTxtP,
            text: cta_text,
            fontSize: 14,
            fontFamily: 'TeleGrotesk Headline Ultra',
            splitLines: false,
            lineHeight: 14,
            background: false,
            padding: {
                top: 5,
                right: 22,
                bottom: 1,
                left: 22
            },
            sizeBox: {
                width: 155,
                height: 38
            }
        });

        var textObj_productPlus = new TextObj({
            debug: debug,
            id: "ppText",
            holder: productPlusP,
            text: productPlusValue,
            splitLines: true,
            background: true,
            backgroundColor: "#3c7eb",
            fontColor: "#fff",
            fontSize: 16,
            maxFontSize: 14,
            minFontSize: 12,
            lineHeightMultiplier: 1.1,
            padding: {
                top: 8,
                right: 6,
                bottom: 10,
                left: 6
            },
            sizeBox: {
                width: 80,
                height: 60
            }
        });

        //var textObj_price = new TextObj({debug:debug, holder:price, text:priceArr[0], splitLines:true, fontSize:60, background:false, fontColor:"FFFFFF",  maxFontSize:60, minFontSize:5, lineHeightMultiplier:1.2, padding:{top:1, right:2, bottom:0, left:2}, sizeBox:{width:120, height:70}});
        //textObj_price.resize();
        //var textObj_euroSign = new TextObj({debug:debug, holder:euroSign, text:'€', fontFamily:'TeleGrotesk Headline',splitLines:true, fontSize:32, background:false, fontColor:"FFFFFF",  maxFontSize:32, minFontSize:5, lineHeightMultiplier:1.2, padding:{top:1, right:2, bottom:0, left:2}, sizeBox:{width:34, height:34}});

        //var textObj_maand = new TextObj({debug:debug, holder:maand, text:'/MAAND', fontFamily:'TeleGrotesk Headline',splitLines:true, fontSize:15, background:false, fontColor:"FFFFFF",  maxFontSize:15, minFontSize:5, lineHeightMultiplier:1.2, padding:{top:1, right:2, bottom:0, left:2}, sizeBox:{width:180, height:100}});

        //textObj_maand.resize();

        /* eslint-enable indent */
        var arrayHideOriginal = [frame1CopyP, phoneTitleCopyP, usp_1P, usp_2P];
        var arrayTextObjects = [textObj_frame1Copy, textObj_phoneTitle, textObj_usp_1, textObj_usp_2, textObj_cta];

        bb.utils.setBoxShadow(ctaBg, 3, 8, 15, 0, 'rgba(0,0,0,0.3)');
        bb.utils.setBoxShadow(productPlusP, 3, 8, 12, 0, 'rgba(0,0,0,0.2)');
        /* STYLE */

        function init() {
            textObj_frame1Copy.resize();
            textObj_phoneTitle.resize();
            textObj_usp_1.resize();
            textObj_usp_2.resize();
            textObj_productPlus.resize();
            //textObj_bijbetaling.resize();
            //textObj_price.resize();
            var checkVar = 0;
            textObj_cta.resizeMultiline();
            var i = 0;
            for (i = 0; i < arrayHideOriginal.length; i++) {
                var originalObj = arrayHideOriginal[i];
                TweenMax.set(originalObj, {
                    visibility: 'hidden'
                });
                checkVar++;
            }
            for (i = 0; i < arrayTextObjects.length; i++) {
                var textObj = arrayTextObjects[i];
                textObj.init();
            }
            ctaBg.set({
                width: ctaTxtP.offsetWidth,
                height: ctaTxtP.offsetHeight
            });
            frame1Copy.set({
                top: (height / 2) - (frame1CopyP.offsetHeight / 2) + 10
            });
            usp_1.set({
                top: (phoneTitleCopy.offsetTop) + (phoneTitleCopyP.offsetHeight) + 6
            });
            usp_2.set({
                top: (usp_1.offsetTop) + (usp_1P.offsetHeight) + 2
            });
            //priceHolder.set({top:(usp_2.offsetTop)+(usp_2P.offsetHeight)-12});
            if (productPlusValue == '-' || productPlusValue == '' || productPlusValue == undefined) {
                TweenMax.set("#productPlus", {
                    visibility: 'hidden'
                });
            }
        }

        /* START BANNER */

        TweenLite.delayedCall(.15, init);
        TweenLite.delayedCall(.5, startBanner);

        function startBanner() {
            TweenMax.set(banner, {
                opacity: 1
            });
            animation = new bb.animations();
            addInteraction();
            timeline();
        }

        /* ANIMATIONS */

        function timeline() {
            main_tl = new BBTimeline()
                .add(animation.backgroundIn())
                .add("loop")
                .offset(.5)
                .add(animation.logoIn())
                .add(animation.txtIn(textObj_frame1Copy, .2, 20))
                .chain(1.5)
                .offset(3)
                .add(animation.txtOut(textObj_frame1Copy, .01))
                .chain(-.3)
                .add(animation.phoneIn())
                .chain(-.45)
                .add(animation.txtIn(textObj_phoneTitle, .1, 20))
                .chain(-.7)
                .add(animation.txtIn(textObj_usp_1, .1, 15))
                .add(animation.txtIn(textObj_usp_2, .1, 25))
                .chain(-.2)
                .add(animation.productPlus_In())
                //.add(animation.priceIn())
                //.add(animation.bijbetalingIn())
                //.add(animation.letopIn())
                .chain(-.1)
                .add(animation.ctaIn())
                .chain()
                .add(animation.ctaJump())
                .chain()
                .call(function() {
                    phone.showHorizontalShine();
                })
                .add(animation.ctaJump())
                .chain(1)
                .add(animation.ctaJump())
                .chain()
                .add(animation.ctaJump())
                .chain();
            //main_tl.pause(4);
        }

        /* INTERACTIONS */

        banner.addEventListener("click", function() {
            mraid.open(product_deeplink);
        });

        function addInteraction() {
            banner.addEventListener("mouseenter", onMouseenter);
            banner.addEventListener("mouseleave", onMouseleave);
            ctaHolder.addEventListener("mouseenter", onMouseenterCta);
            ctaHolder.addEventListener("mouseleave", onMouseleaveCta);
        }

        function removeInteraction() {

            banner.removeEventListener("mouseenter", onMouseenter);
            banner.removeEventListener("mouseleave", onMouseleave);

            ctaHolder.removeEventListener("mouseenter", onMouseenterCta);
            ctaHolder.removeEventListener("mouseleave", onMouseleaveCta);
        }

        function onMouseenter(e) {
            mouseObj.over = true;
            banner.onmousemove = onMouseMove;
            phone.updateMousePosition(mouseObj.x, mouseObj.y);
            phone.enableInteractiveShine(.5);
        }

        function onMouseleave(e) {
            mouseObj.over = false;
            banner.onmousemove = null;
            mouseObj = {
                x: width / 2,
                y: height / 2
            };
            phone.updateMousePosition(mouseObj.x, mouseObj.y);
            phone.showHorizontalShine();
            phone.disableInteractiveShine(.5);
        }

        function onMouseenterCta(e) {

            var tl = animation.ctaJump();
            tl.play(0);
        }

        function onMouseleaveCta(e) {

        }

        function onMouseMove(p) {
            mouseObj.x = p.clientX;
            mouseObj.y = p.clientY;
            phone.updateMousePosition(mouseObj.x, mouseObj.y);
        }

    });
};
bb.animations = function() {
    var animation = {
        txtIn: function(textObj, offsetDelay, xPos) {
            var tl = new BBTimeline();
            var lineObjects = textObj.lineObjects();
            var spd = .6;

            if (!xPos) xPos = -15;
            for (var i = 0; i < lineObjects.length; i++) {
                var height = lineObjects[i][1].offsetHeight;
                var width = lineObjects[i][1].offsetWidth;
                var rect = bb.utils.createRect(0, width, 0, 0);
                tl.absolute(offsetDelay * i);
                tl.from(lineObjects[i], spd, {
                    x: xPos,
                    ease: Expo.easeOut
                });
                tl.from(lineObjects[i][0], spd, {
                    scaleX: 0,
                    ease: Expo.easeOut
                });
                tl.offset(.1);
                tl.from(lineObjects[i][1], spd + .2, {
                    clip: rect,
                    ease: Expo.easeOut
                });
            }
            return tl;
        },
        txtInTop: function(textObj, offsetDelay, spd) {
            var tl = new BBTimeline();
            var lineObjects = textObj.lineObjects();
            spd = spd || 1.2;
            var count = 0;
            for (var i = lineObjects.length - 1; i >= 0; i--) {
                tl.absolute(offsetDelay * count);
                tl.from(lineObjects[i], spd, {
                    scaleY: 1.1,
                    y: -250,
                    ease: Power1.easeOut
                });
                tl.from(lineObjects[i], spd, {
                    alpha: 0,
                    ease: Power2.easeOut
                });
                tl.offset(.1);
                count++;
            }
            return tl;
        },
        txtOut: function(textObj, offsetDelay) {
            var tl = new BBTimeline();
            var lineObjects = textObj.lineObjects();
            var widths = [];
            for (var i = 0; i < lineObjects.length; i++) {
                widths.push(lineObjects[i][1].offsetWidth);
            }
            var maxWidth = Math.max.apply(null, widths);
            var heights = [];
            for (var i = 0; i < lineObjects.length; i++) {
                heights.push(lineObjects[i][1].offsetHeight);
            }
            var maxHeight = Math.max.apply(null, heights);
            for (i = 0; i < lineObjects.length; i++) {
                var rect = bb.utils.createRect(0, maxWidth, maxHeight, maxWidth);
                tl.absolute(offsetDelay * i);
                tl.to(lineObjects[i][1], .55, {
                    alpha: 0,
                    clip: rect,
                    ease: Power2.easeInOut
                });
                tl.to(lineObjects[i][0], .55, {
                    alpha: 0,
                    scaleX: 0,
                    transformOrigin: '100% 50%',
                    ease: Power2.easeInOut
                });
            }
            return tl;
        },
        backgroundIn: function() {
            return new BBTimeline()
                .from('#banner', .5, {
                    opacity: 0,
                    ease: Expo.easeOut
                });
        },
        letopIn: function() {
            return new BBTimeline()
                .from('#letop', .5, {
                    opacity: 0,
                    ease: Expo.easeOut
                });
        },
        productPlus_In: function() {
            return new BBTimeline()
                .from('#productPlus', 0.5, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
        },
        priceIn: function() {
            return new BBTimeline()

                .fromTo('#priceHolder', .5, {
                    x: 10,
                    clip: "rect(0px 0px 280px 0px)"
                }, {
                    x: 0,
                    clip: "rect(0px 100px 280px 0px)",
                    ease: Expo.easeOut
                });
        },
        bijbetalingIn: function() {
            return new BBTimeline()
                .from('#bijbetaling', .5, {
                    opacity: 0,
                    ease: Expo.easeOut
                });
        },
        phoneIn: function() {
            return new BBTimeline()
                //.from('#phoneHolder', 1, {rotationY:80, x: -20, ease: Expo.easeOut});
                .fromTo('#phoneHolder', .7, {
                    x: 40,
                    clip: "rect(0px 0px 280px 0px)"
                }, {
                    x: 0,
                    clip: "rect(0px 336px 280px 0px)",
                    ease: Expo.easeOut
                });
        },
        logoIn: function() {
            return new BBTimeline()
                .from('#logo', 0.5, {
                    alpha: 0,
                    ease: Sine.easeOut
                });
        },
        ctaIn: function() {
            return new BBTimeline()
                .from('#ctaHolder', 0.7, {
                    x: 5,
                    alpha: 0,
                    ease: Power3.easeOut
                });
        },
        ctaJump: function() {
            return new BBTimeline()
                .to('#ctaBg', 0.12, {
                    scale: 1.1,
                    ease: Power1.easeOut
                })
                .offset(.1)
                .to('#ctaTxtP', 0.12, {
                    scale: 1.1,
                    ease: Power1.easeOut
                })
                .chain()
                .to(['#ctaBg', '#ctaTxtP'], 0.2, {
                    scale: 1,
                    ease: Power1.easeInOut
                });
        }
    };

    return animation;

}