
   var win = window;
var doc = win.document;
var i18n = {};

/**
 * 多语言版本
 */
var fields = {
  'zh-cn': {
    'TAOBAO_CONSUMER': '淘宝网消费者保障',
    'TAOBAO_CONSUMER_CONTENT': '未收到货，全额退款；商品与描述不符，退货退款',
    'ALIPAY_PROMISE': '支付宝担保交易',
    'ALIPAY_PROMISE_CONTENT': '没有您的同意，我们不会将您的钱款交付给卖家',
    'HELP_ONLINE': '24小时在线帮助',
    'HELP_ONLINE_CONTENT': '购物小帮手，为您提供无忧购物体验',

    'CONSUMER_GUIDE': '消费者指南',
    'NEW_USER_GUIDE': '新手入门',
    'REGISTER_ACCOUNT': '註冊賬戶',
    'PAY_TYPE': '付款方式',
    'INTERNATIONAL_TRANSPORT': '國際運送',
    'FREQUENT_ASK': '常見問題',
    'BUSINESS_GUIDE': '商家指南',
    'SELLER_CENTER': '卖家中心',
    'SELLER_RULES': '海外交易规则',
    'LOGISTICS_SERVICES': '物流服务',
    'TM_HELP': '喵言喵语',
    'CONTACT_SERVICE': '联系客服',
    'CONTACT_US': '联系我们',
    'TAOBAO_OPEN_CONSOLE': '淘宝开放平台',
    'TAOBAO_LEAGUE': '淘宝联盟',
    'ALI_BAICHUAN': '阿里百川',
    'COUNTRY_CONSUMER_ON_TAOBAO': '超过<span class="num">200</span>个国家的消费者<br/>已在淘宝网成功购物',

    'COUNTRY_AREA': '国家和地区',
    'GLOBAL': '全球站(所有地区)',
    'CHINA': '中国大陆',
    'TAIWAN': '中国台湾',
    'HONGKONG': '中国香港',
    'MACAO': '中国澳门',
    'JAPAN': '日本',
    'KOREA': '韩国',
    'SINGAPORE': '新加坡',
    'MALAYSIA': '马来西亚',
    'AMERICA': '美国',
    'CANADA': '加拿大',
    'NEW_ZEALAND': '新西兰',
    'AUSTRALIA': '澳大利亚',
    'PARTNER': '合作伙伴',

    'ALIBABA': '阿里巴巴集团',
    'TABAO': '淘宝网',
    'TMALL': '天猫',
    'JU_TAOBAO': '聚划算',
    'ALIEXPRESS': '全球速卖通',
    'ALI_MARKET': '阿里巴巴国际交易市场',
    'ALIMAMA': '阿里妈妈',
    'ALIYUN': '阿里云计算',
    'NET': '万网',
    'TAOBAO_TRIP': '淘宝旅行',
    'XIAMI': '虾米',
    'LAIWANG': '来往',
    'ALIPAY': '支付宝',

    'ABOUT_TAOBAO': '关于淘宝',
    'MARKET_CENTER': '营销中心',
    'INTELLECTUAL_PROPERTY': '知识产权',
    'LIANZHENG': '廉正举报',
    'OPEN_CONSOLE': '开放平台',
    'RECRUIT': '诚征英才',
    'SITE_MAP': '网站地图',
    'LAW_STATEMENT': '法律声明',
    'COPYRIGHT': '版权所有',
    'NET_CULTURE_LICENSE': '网络文化经营许可证',
    'WENWANGWEN': '文网文[2010]040号',
    'CT_LICENSE': '增值电信业务经营许可证：浙B2-20080224-1',
    'MEDIA_LICENSE': '信息网络传播视听节目许可证：1109364号'
  },
  'zh-tw': {
    'TAOBAO_CONSUMER': '淘寶網消費者保障',
    'TAOBAO_CONSUMER_CONTENT': '未收到貨，全額退款；商品與描述不符，退貨退款',
    'ALIPAY_PROMISE': '支付寶擔保交易',
    'ALIPAY_PROMISE_CONTENT': '沒有您的同意，我們不會將您的錢款交付給賣家',
    'HELP_ONLINE': '24小时在线帮助',
    'HELP_ONLINE_CONTENT': '購物小幫手，為您提供無憂購物體驗',
    
    
    'CONSUMER_GUIDE': '消费者指南',
    'NEW_USER_GUIDE': '新手入门',
    'REGISTER_ACCOUNT': '註冊賬戶',
    'PAY_TYPE': '付款方式',
    'INTERNATIONAL_TRANSPORT': '國際運送',
    'FREQUENT_ASK': '常見問題',
    'BUSINESS_GUIDE': '商家指南',
    'SELLER_CENTER': '卖家中心',
    'SELLER_RULES': '海外交易规则',
    'LOGISTICS_SERVICES': '物流服务',
    'TM_HELP': '喵言喵语',
    'CONTACT_SERVICE': '聯繫客服',
    'CONTACT_US': '聯繫我們',
    'TAOBAO_OPEN_CONSOLE': '淘寶開放平台',
    'TAOBAO_LEAGUE': '淘寶聯盟',
    'ALI_BAICHUAN': '阿里百川',
    'COUNTRY_CONSUMER_ON_TAOBAO': '超過<span class="num">200</span>個國家的消費者<br/>已在淘寶網成功購物',

    'COUNTRY_AREA': '國家和地區',
    'GLOBAL': '全球站(所有地區)',
    'CHINA': '中國大陸',
    'TAIWAN': '中國台灣',
    'HONGKONG': '中國香港',
    'MACAO': '中國澳門',
    'JAPAN': '日本',
    'KOREA': '韓國',
    'SINGAPORE': '新加坡',
    'MALAYSIA': '馬來西亞',
    'AMERICA': '美國',
    'CANADA': '加拿大',
    'NEW_ZEALAND': '新西蘭',
    'AUSTRALIA': '澳大利亞',
    'PARTNER': '合作夥伴',

    'ALIBABA': '阿里巴巴集團',
    'TABAO': '淘寶網',
    'TMALL': '天貓',
    'JU_TAOBAO': '聚划算',
    'ALIEXPRESS': '全球速賣通',
    'ALI_MARKET': '阿里巴巴國際交易市場',
    'ALIMAMA': '阿里媽媽',
    'ALIYUN': '阿里雲計算',
    'NET': '萬網',
    'TAOBAO_TRIP': '淘寶旅行',
    'XIAMI': '蝦米',
    'LAIWANG': '來往',
    'ALIPAY': '支付寶',

    'ABOUT_TAOBAO': '關於淘寶',
    'MARKET_CENTER': '營銷中心',
    'INTELLECTUAL_PROPERTY': '知識產權',
    'LIANZHENG': '廉正舉報',
    'OPEN_CONSOLE': '開放平台',
    'RECRUIT': '誠征英才',
    'SITE_MAP': '網站地圖',
    'LAW_STATEMENT': '法律聲明',
    'COPYRIGHT': '版權所有',
    'NET_CULTURE_LICENSE': '網絡文化經營許可證',
    'WENWANGWEN': '文網文[2010]040號',
    'CT_LICENSE': '增值電信業務經營許可證：浙B2-20080224-1',
    'MEDIA_LICENSE': '信息網絡傳播視聽節目許可證：1109364號'
  },
  'en': {
    'TAOBAO_CONSUMER': 'Taobao Consumer Protection',
    'TAOBAO_CONSUMER_CONTENT': 'Did not receive the goods, a full refund; merchandise and description does not match, return a refund',
    'ALIPAY_PROMISE': 'Alipay Secured Transactions',
    'ALIPAY_PROMISE_CONTENT': 'Without your consent, we will not deliver your money to the seller',
    'HELP_ONLINE': '24-hours online help',
    'HELP_ONLINE_CONTENT': 'Shopping assistant, to provide you with worry-free shopping experience',

    'CONSUMER_GUIDE': '消费者指南',
    'NEW_USER_GUIDE': '新手入门',
    'REGISTER_ACCOUNT': '註冊賬戶',
    'PAY_TYPE': '付款方式',
    'INTERNATIONAL_TRANSPORT': '國際運送',
    'FREQUENT_ASK': '常見問題',
    'BUSINESS_GUIDE': '商家指南',
    'SELLER_CENTER': '卖家中心',
    'SELLER_RULES': '卖家规则',
    'LOGISTICS_SERVICES': '物流服务',
    'TM_HELP': '喵言喵语',
    'CONTACT_SERVICE': 'Contact Customer Service',
    'CONTACT_US': 'Contact us',
    'TAOBAO_OPEN_CONSOLE': 'Taobao Open Platform',
    'TAOBAO_LEAGUE': 'Taobao Alliance',
    'ALI_BAICHUAN': 'Ali Rivers',
    'COUNTRY_CONSUMER_ON_TAOBAO': 'Consumers in more than 200 countries have successfully shopping in the Taobao network',

    'COUNTRY_AREA': 'Countries and Regions',
    'GLOBAL': 'Global',
    'CHINA': 'China',
    'TAIWAN': 'Taiwan',
    'HONGKONG': 'Hong Kong',
    'MACAO': 'Macao',
    'JAPAN': 'Japan',
    'KOREA': 'Korea',
    'SINGAPORE': 'Singapore',
    'MALAYSIA': 'Malaysia',
    'AMERICA': 'United States',
    'CANADA': 'Canada',
    'NEW_ZEALAND': 'New Zealand',
    'AUSTRALIA': 'Australia',
    'PARTNER': 'Partner',

    'ALIBABA': 'Alibaba group',
    'TABAO': 'TaoBao',
    'TMALL': 'Tmall',
    'JU_TAOBAO': 'Juhuasuan',
    'ALIEXPRESS': 'AliExpress',
    'ALI_MARKET': 'Alibaba International',
    'ALIMAMA': 'AliMama',
    'ALIYUN': 'AliCloud',
    'NET': 'Net.cn',
    'TAOBAO_TRIP': 'AliTravel',
    'XIAMI': 'Xiami',
    'LAIWANG': 'Laiwang',
    'ALIPAY': 'Alipay',

    'ABOUT_TAOBAO': 'About Taobao',
    'MARKET_CENTER': 'Marketing Center',
    'INTELLECTUAL_PROPERTY': 'Intellectual property',
    'LIANZHENG': 'Integrity Report',
    'OPEN_CONSOLE': 'Open platform',
    'RECRUIT': 'Careers',
    'SITE_MAP': 'Site map',
    'LAW_STATEMENT': 'Legal declaration',
    'COPYRIGHT': 'All Rights Reserved',
    'NET_CULTURE_LICENSE': 'Network Culture Operation License',
    'WENWANGWEN': 'Wen Wang Wen [2010] No.040',
    'CT_LICENSE': 'Value-added Telecom Service Operation License:Zhe B2-20080224-1',
    'MEDIA_LICENSE': 'Information Network Communicated Audio-Video Programme License:No.1109364'
  }
};

var lang = window.g_config && window.g_config.language||'zh-CN';

var obj = fields[lang.toLocaleLowerCase()];

i18n.lang = function(word) {
  var text = obj[word];
  return text;
};


function WorldFooter(obj) {
  if (!obj || !obj.container)
    return;

  var contentStrArr = [];

  if (obj.hasTips) {
    contentStrArr.push('<div class="world-footer-tip-wrapper"><ul class="world-footer-tip">',
      '<li>',
      '<i class="world-footer-tip-icon">&#xe611;</i>',
      '<div>',
      '<span class="world-footer-tip-title">' + i18n.lang('TAOBAO_CONSUMER') + '</span>',
      '<span class="world-footer-tip-info">' + i18n.lang('TAOBAO_CONSUMER_CONTENT') + '</span>',
      '</div>',
      '</li>',
      '<li>',
      '<i class="world-footer-tip-icon">&#xe610;</i>',
      '<div>',
      '<span class="world-footer-tip-title">' + i18n.lang('ALIPAY_PROMISE') + '</span>',
      '<span class="world-footer-tip-info">' + i18n.lang('ALIPAY_PROMISE_CONTENT') + '</span>',
      '</div>',
      '</li>',
      '<li>',
      '<i class="world-footer-tip-icon">&#xe60f;</i>',
      '<div>',
      '<span class="world-footer-tip-title">' + i18n.lang('HELP_ONLINE') + '</span>',
      '<span class="world-footer-tip-info">' + i18n.lang('HELP_ONLINE_CONTENT') + '</span>',
      '</div>',
      '</li>',
      '</ul>',
      '</div>');
  }

  if (obj.hasLinks) {
    contentStrArr.push('<div class="world-footer-link-wrapper">',
      '<div class="world-footer-link">',
      '<a class="world-footer-link-logo" href="//world.taobao.com">淘宝海外全球站</a>',
      '<dl class="world-footer-list-1">',
      '<dt>' + i18n.lang('CONSUMER_GUIDE') + '</dt>',
      '<dd><a rel="nofollow" href="//world.taobao.com/helper/guide.htm">' + i18n.lang('NEW_USER_GUIDE') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/helper/knowledge.htm?kid=6541303">' + i18n.lang('REGISTER_ACCOUNT') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/helper/knowledge.htm?kid=6534306">' + i18n.lang('PAY_TYPE') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/helper/list.htm?cid=9004772">' + i18n.lang('INTERNATIONAL_TRANSPORT') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/helper/">' + i18n.lang('FREQUENT_ASK') + '</a></dd>',
      '</dl>',
      '<dl class="world-footer-list-2">',
      '<dt>' + i18n.lang('BUSINESS_GUIDE') + '</dt>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/markets/all/seller/index">' + i18n.lang('SELLER_CENTER') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/wow/oversea/act/seller-rule">' + i18n.lang('SELLER_RULES') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//world.taobao.com/markets/all/seller/logistics">' + i18n.lang('LOGISTICS_SERVICES') + '</a></dd>',
      '<dd><a rel="nofollow"  href="//maowo.tmall.com/">' + i18n.lang('TM_HELP') + '</a></dd>',
      '</dl>',
      '<dl class="world-footer-list-3">',
      '<dt>' + i18n.lang('CONTACT_SERVICE') + '</dt>',
      '<dd><a rel="nofollow" href="https://h5.m.taobao.com/alicare/alicarePC.html?spm=a312a.7762693.2015080302.5.bIyIg4&from=global_service_pc">' + i18n.lang('HELP_ONLINE') + '</a></dd>',
      '<dd><a rel="nofollow" href="//world.taobao.com/helper/flyleaf.htm?spm=a312a.7762693.2015080301.44.bjZukw&cid=9004727">' + i18n.lang('CONTACT_US') + '</a></dd>',
      '</dl>',
      '<dl class="world-footer-list-4">',
      '<dt>' + i18n.lang('TAOBAO_OPEN_CONSOLE') + '</dt>',
      '<dd><a rel="nofollow" href="//tw.taobao.com/market/tw/pt-index.php?spm=a213z.1224559.20150331FF08.1.xnGWsz#md1">' + i18n.lang('TAOBAO_LEAGUE') + '</a></dd>',
      '<dd><a rel="nofollow" href="//tw.taobao.com/market/tw/pt-index.php?spm=a213z.1224559.20150331FF08.2.xnGWsz#md2">' + i18n.lang('ALI_BAICHUAN') + '</a></dd>',
      '</dl>',
      '<div class="world-footer-code">',
      '<img src="//img.alicdn.com/tfs/TB1WrRkXL1TBuNjy0FjXXajyXXa-274-278.png" alt="" width="60" height="60">',
      '</div>',
      '</div>',
      '<div class="world-footer-map">',
      '<span class="world-footer-map-img"></span>',
      '<p>' + i18n.lang('COUNTRY_CONSUMER_ON_TAOBAO') + '</p>',
      '</div>',
      '<div class="world-footer-area">',
      '<div class="world-footer-site">',
      '<span>' + i18n.lang('COUNTRY_AREA') + ':</span>',
      '<a rel="nofollow" class="first" href="javascript:;" target="_self" data-nation="GLOBAL">' + i18n.lang('GLOBAL') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="CN">' + i18n.lang('CHINA') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="TW">' + i18n.lang('TAIWAN') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="HK">' + i18n.lang('HONGKONG') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="MO">' + i18n.lang('MACAO') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="JP">' + i18n.lang('JAPAN') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="KR">' + i18n.lang('KOREA') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="SG">' + i18n.lang('SINGAPORE') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="MY">' + i18n.lang('MALAYSIA') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="US">' + i18n.lang('AMERICA') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="CA">' + i18n.lang('CANADA') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="NZ">' + i18n.lang('NEW_ZEALAND') + '</a>',
      '<a rel="nofollow" href="javascript:;" target="_self" data-nation="AU">' + i18n.lang('AUSTRALIA') + '</a>',
      '</div>',
      '<div class="world-footer-partner">',
      '<span>' + i18n.lang('PARTNER') + ':</span>',
      '<img src="//gw.alicdn.com/tfs/TB17ut5RVXXXXcvXpXXXXXXXXXX-901-45.jpg" alt="">',
      '</div>',
      '</div>',
      '</div>');
  }

  var startStr = '<div class="world-footer">';
  var endStr = '</div>';
  var companyStr = '<div class="world-footer-company-wrapper">' +
    '<div class="world-footer-company">' +
    '<a  href="http://www.alibabagroup.com/cn/global/home">' + i18n.lang('ALIBABA') + '</a>' +
    '<a  href="//www.taobao.com">' + i18n.lang('TABAO') + '</a>' +
    '<a  href="//www.tmall.com">' + i18n.lang('TMALL') + '</a>' +
    '<a  href="//ju.taobao.com">' + i18n.lang('JU_TAOBAO') + '</a>' +
    '<a  href="http://www.aliexpress.com">' + i18n.lang('ALIEXPRESS') + '</a>' +
    '<a  href="//www.alibaba.com/">' + i18n.lang('ALI_MARKET') + '</a>' +
    '<a  href="//www.1688.com">1688</a>' +
    '<a  href="//www.alimama.com">' + i18n.lang('ALIMAMA') + '</a>' +
    '<a  href="//www.aliyun.com">' + i18n.lang('ALIYUN') + '</a>' +
    '<a  href="//www.yunos.com">YunOS</a>' +
    '<a  href="//www.net.cn">' + i18n.lang('NET') + '</a>' +
    '<a  href="//trip.taobao.com">' + i18n.lang('TAOBAO_TRIP') + '</a>' +
    '<a  href="//www.xiami.com">' + i18n.lang('XIAMI') + '</a>' +
    '<a  href="//www.laiwang.com/">' + i18n.lang('LAIWANG') + '</a>' +
    '<a  href="//www.alipay.com">' + i18n.lang('ALIPAY') + '</a>' +
    '</div>' +
    '<div class="world-footer-copyright">' +
    '<p>' +
    '<a href="//www.taobao.com/about">' + i18n.lang('ABOUT_TAOBAO') + '</a>' +
    '<a href="//www.taobao.com/about/partners.php">' + i18n.lang('PARTNER') + '</a>' +
    '<a href="//pro.taobao.com">' + i18n.lang('MARKET_CENTER') + '</a>' +
    '<a href="//ipp.alibabagroup.com/index.htm">' + i18n.lang('INTELLECTUAL_PROPERTY') + '</a>' +
    '<a href="mailto:lianzheng@taobao.com" title="lianzheng@taobao.com" target="_self">' + i18n.lang('LIANZHENG') + '</a>' +
    '<a href="//service.taobao.com/support/main/service_route.htm">' + i18n.lang('CONTACT_SERVICE') + '</a>' +
    '<a href="//open.taobao.com">' + i18n.lang('OPEN_CONSOLE') + '</a>' +
    '<a href="//www.taobao.com/about/join.php">' + i18n.lang('RECRUIT') + '</a>' +
    '<a href="//www.taobao.com/about/contact.php">' + i18n.lang('CONTACT_US') + '</a>' +
    '<a href="//www.taobao.com/sitemap.php">' + i18n.lang('SITE_MAP') + '</a>' +
    '<a href="//www.taobao.com/go/chn/tb-fp/2014/law.php">' + i18n.lang('LAW_STATEMENT') + '</a>' +
    '<em>© 2003-2017 Taobao.com ' + i18n.lang('COPYRIGHT') + '</em>' +
    '</p>' +
    '<p>' +
    '<span>' + i18n.lang('NET_CULTURE_LICENSE') + '：<a rel="nofollow" href="//img.alicdn.com/tps/i4/T1ysdvXtNeXXcPpEkQ-972-636.jpg">' + i18n.lang('WENWANGWEN') + '</a></span>' +
    '<b>|</b>' +
    '<span>' + i18n.lang('CT_LICENSE') + '</span>' +
    '<b>|</b>' +
    '<span>' + i18n.lang('MEDIA_LICENSE') + '</span>' +
    '</p>' +
    '</div>' +
    '</div>';

  obj.container.innerHTML = startStr + contentStrArr.join('') + companyStr + endStr;
}

new WorldFooter({
  container: document.getElementById('footer'),
  hasTips: true,
  hasLinks: true
});


// 切换站点
(function(){
  var hngHash = {
    CN: 'CN|zh-CN|CNY|156',
    HK: 'HK|zh-TW|HKD|344',
    TW: 'TW|zh-TW|TWD|158',
    MO: 'MO|zh-TW|MOP|446',
    KR: 'KR|zh-CN|KRW|410',
    MY: 'MY|zh-CN|MYR|458',
    AU: 'AU|zh-CN|AUD|36',
    SG: 'SG|zh-CN|SGD|702',
    NZ: 'NZ|zh-CN|NZD|554',
    CA: 'CA|zh-CN|CAD|124',
    US: 'US|zh-CN|USD|840',
    JP: 'JP|zh-CN|JPY|392',
    GLOBAL: 'GLOBAL|zh-CN|USD|999'
  };
  function shouldRedirectMainland(code) {
    // 如果是淘海外首页，且地区标记为大陆，则跳转到主站首页
    if (code === 'CN' && location.hostname === 'world.taobao.com' && location.pathname === '/') {
      location.href = 'https://www.taobao.com/';
    } else {
      location.reload();
    }
  }

  function set(code, reload, successCallback, errorCallback) {
      var val = hngHash[code] || hngHash.GLOBAL;

      KISSY.IO({
        url: '//ocservice.taobao.com/cookieController/processUserCookie',
        data: {
          site: val.replace(/\|/g, '_'),
          from: 1
        },
        dataType: 'jsonp',
        success: function (data) {
          if (data && data.ret) {
            sync(code, reload);
          } else {
          }
          successCallback && successCallback();
        },
        error: function(err, textStatus) {
          errorCallback && errorCallback();
        }
      });
  }

  function sync(code, reload, cb) {
      var timer;
      if (code === 'CN') {
        KISSY.Cookie && KISSY.Cookie.set('thw', 'cn', 360, '.taobao.com', '/');
      }

      // 下面这个接口可能挂，所以使用 setTimeout
      if (reload) {
        timer = setTimeout(function() {
          shouldRedirectMainland(code);
        }, 1000);
      }

      KISSY.getScript('https://login.taobao.com/jump?target=https://www.tmall.com', {
        success: function() {
          clearTimeout(timer);

          if (reload) {
            shouldRedirectMainland(code);
          }
        },
        error: function(err, textStatus) {
        }
      });
  }

  window.addEventListener('load', function (e){
    setTimeout(function(){
       KISSY.Event && KISSY.Event.delegate(document,'click','.world-footer-site a[data-nation]',function(e){
        var countryCode = e.target.getAttribute('data-nation');
        set(countryCode, true)
      })
    }, 500)
  })
})()
