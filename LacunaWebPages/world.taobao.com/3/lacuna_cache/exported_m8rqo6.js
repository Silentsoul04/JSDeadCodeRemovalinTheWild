
window.addEventListener('load', function(){

    KISSY.config({
        modules: {
            'util':{
                alias:'kg/kmd-adapter/0.1.5/util'
            },
            'feature':{
                alias:'kg/kmd-adapter/0.1.5/feature'
            },
            'event-dom':{
                alias:'event'
            },
            'event-custom':{
                alias:'event'
            },
            'event-gesture':{
                alias:'event'
            },
            'flash':{
                alias:['gallery/flash/1.0/']
            },
            'kg/tb-gnav':{
                alias:'kg/tb-gnav/1.1.7/',
                requires:['kg/global-util/1.0.5/index']
            }
        }
    });
    KISSY.getScript('//g.alicdn.com/tb/tracker/4.0.1/p/index/index.js')
    KISSY.use('kg/global-util/1.0.5/index,kg/tb-gnav/1.1.7/index');
})
