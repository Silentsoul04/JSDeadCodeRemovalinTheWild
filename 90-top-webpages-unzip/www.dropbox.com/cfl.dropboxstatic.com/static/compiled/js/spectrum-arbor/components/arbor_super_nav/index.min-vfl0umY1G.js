define(["require","exports","tslib","tslib","classnames","react","spectrum-arbor/util/raf_throttle","spectrum-arbor/atoms/arbor_link","spectrum-arbor/atoms/arbor_button"],function(e,t,n,r,s,i,o,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=n.__importStar(r),s=n.__importDefault(s),i=n.__importStar(i);var c=(function(e){function t(t){var n=e.call(this,t)||this;return n.sublinks=[],n.desktopWidth=1336,n.state={isBelowTheFold:!1,isTouchScreen:!1,linksAreVisible:!1,sublinksHeights:[],scrollPosition:0,isDesktop:!0},n.setIsDesktop=function(){n.setState({isDesktop:n.isDesktop()})},n.setIsTouchScreen=function(){document&&document.documentElement&&n.setState({isTouchScreen:"ontouchstart"in document.documentElement})},n.isDesktop=function(){return window.innerWidth>=n.desktopWidth},n.callIfDesktop=function(e){n.state.isDesktop&&e()},n.setSublinksChildrenHeights=function(){var e=n.sublinks.map(function(e){var t=e.clientHeight,n=e.offsetHeight;return Math.max(t,n)});n.setState({sublinksHeights:e})},n.handleWindowClick=function(e){var t=e.target,r=void 0===n.state.visibleSublinksIndex;["arbor-super-nav__sublinks__button__caret","arbor-super-nav__sublinks__button__text","arbor-super-nav__sublinks__button"].filter(function(e){return t.classList.contains(e)}).length||r||n.closeSublinks()},n.closeSublinks=function(){n.setState({visibleSublinksIndex:void 0})},n.setScrollStates=function(){var e=n.props.belowTheFold,t=void 0===e?300:e,r=n.state.isDesktop,s=window.pageYOffset;!r&&n.state.linksAreVisible?n.setState({isBelowTheFold:s>=t}):n.setState({isBelowTheFold:s>=t,scrollPosition:s})},n.handleSublinksButtonClick=function(e){var t=e===n.state.visibleSublinksIndex;n.setState({visibleSublinksIndex:t?void 0:e})},n.handleLinkToggleClick=function(){var e=!n.state.linksAreVisible;n.toggleBodyScrollBar(e),n.setState({linksAreVisible:e,isDesktop:n.isDesktop()})},n.toggleBodyScrollBar=function(e){var t=n.state.isTouchScreen,r=n.isDesktop&&e;t?(document&&document.documentElement&&document.documentElement.classList.toggle("arbor-no-scroll--is-touch-screen",r),r||window.scrollTo(0,n.state.scrollPosition)):document.body.classList.toggle("arbor-no-scroll",r)},n.constructOnClickProp=function(e){var t=e.keyName,r=e.arg,s=n.props.clickFunctions,i=void 0===s?{}:s,o=i[t];return o&&"function"==typeof o?{onClick:function(){return o(r)}}:{}},n.renderToggleButton=function(){var e=n.state.linksAreVisible;return i.createElement("button",{"aria-label":(e?"Hide":"Show")+" links",onClick:n.handleLinkToggleClick,className:"arbor-super-nav__links-toggle"},[1,2,3,4].map(function(e){var t,n=s.default((t={"arbor-super-nav__links-toggle__line":!0},t["arbor-super-nav__links-toggle__line--"+e]=!0,t));return i.createElement("i",{key:e,className:n})}))},n.renderLogoLink=function(){var e=n.props.logoLink,t=n.state,r=t.isBelowTheFold,s=t.linksAreVisible,o=e.ariaLabel,l=e.url,a=e.images,c=void 0===a?[]:a,u=r||s?c.length-1:0;return i.createElement("a",{className:"arbor-super-nav__logo-link",href:l,"aria-label":o},i.createElement("img",{alt:o,src:c[u].logoImgUrl,className:"arbor-super-nav__logo-link__logo"}),c[u].textImgUrl&&i.createElement("img",{alt:o,src:c[u].textImgUrl,className:"arbor-super-nav__logo-link__text"}))},n.renderCtaButton=function(){var e=n.state.isBelowTheFold;if(!n.props.cta)return null;var t=n.props.cta,s=t.clickFunction,o=t.url,l=t.outlined,c=void 0===l||l,u=t.padding,k=t.trackingId,d=t.text,b=s?n.constructOnClickProp(s):{href:o},_=r.__assign({outlined:c,size:"micro",padding:u,className:"arbor-super-nav__cta",theme:e?"dbx-blue":"panda-white"},b);return i.createElement(a.ArborButton,r.__assign({},_,{trackingId:k}),d)},n.renderLinks=function(){var e=n.props.links;return i.createElement("ul",{className:"arbor-super-nav__links"},e.map(n.renderLinkOrSubLinks))},n.renderLinkOrSubLinks=function(e,t){if(e.children)return n.renderSubLinks(e,t);var s=e.clickFunction?n.constructOnClickProp(e.clickFunction):{href:e.url},o=r.__assign({ariaLabel:e.text,className:"arbor-super-nav__parent-link",hoverStyle:"nav"},s);return i.createElement("li",{className:"arbor-super-nav__parent-li",key:t},i.createElement(l.ArborLink,r.__assign({},o,{trackingId:e.trackingId}),e.text))},n.renderSubLinks=function(e,t){var o=e.text,a=e.children,c=void 0===a?[]:a,u=n.state,k=u.visibleSublinksIndex,d=u.sublinksHeights,b=t===k,_=s.default({"arbor-super-nav__parent-li":!0,"arbor-super-nav__sublinks":!0,"arbor-super-nav__sublinks--visible":b}),p=function(e,t){var s=e.clickFunction?n.constructOnClickProp(e.clickFunction):{href:e.url},o=r.__assign({ariaLabel:e.text,className:"arbor-super-nav__child-link",hoverStyle:"nav",theme:"shark",size:"small"},s);return i.createElement("li",{className:"arbor-super-nav__child-li",key:t},i.createElement(l.ArborLink,r.__assign({},o),e.text))},h=b?{maxHeight:d[t]+"px"}:{};return i.createElement("li",{className:_,key:t,onMouseEnter:function(){return n.callIfDesktop(function(){return n.handleSublinksButtonClick(t)})},onMouseLeave:function(){return n.callIfDesktop(n.closeSublinks)}},i.createElement(l.ArborLink,{tag:"button",ariaLabel:(b?"Hide":"Show")+" links",onClick:function(){return n.handleSublinksButtonClick(t)},className:"arbor-super-nav__sublinks__button",hoverStyle:"nav"},i.createElement("span",{className:"arbor-super-nav__sublinks__button__text"},o),i.createElement("span",{className:"arbor-super-nav__sublinks__button__caret"})),i.createElement("div",{className:"arbor-super-nav__sublinks__children-wrapper",style:h},i.createElement("ul",{className:"arbor-super-nav__sublinks__children",ref:function(e){return n.sublinks[t]=e}},c.map(p))))},n.scrollThrottle=new o.RafThrottle(n.setScrollStates),n.resizeThrottle=new o.RafThrottle(function(){var e=n.state,t=e.linksAreVisible;!e.isTouchScreen&&n.toggleBodyScrollBar(t),n.setSublinksChildrenHeights(),n.setIsDesktop(),n.state.isDesktop&&n.setState({linksAreVisible:!1})}),n}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.setIsDesktop(),this.setIsTouchScreen(),this.setScrollStates(),this.setSublinksChildrenHeights(),window.addEventListener("click",this.handleWindowClick),window.addEventListener("resize",this.resizeThrottle.request),window.addEventListener("scroll",this.scrollThrottle.request)},t.prototype.componentWillUnmount=function(){window.removeEventListener("click",this.handleWindowClick),window.removeEventListener("resize",this.resizeThrottle.request),window.removeEventListener("scroll",this.scrollThrottle.request)},t.prototype.render=function(){var e=this.state,t=e.isBelowTheFold,n=e.linksAreVisible,r=e.isDesktop,o=this.props.zIndex,l=void 0===o?2:o,a=s.default({"arbor-super-nav__wrapper":!0,"arbor-super-nav__wrapper--is-below-the-fold":t}),c=s.default({"arbor-super-nav":!0,"arbor-super-nav--is-below-the-fold":t,"arbor-super-nav--links-are-visible":n,"arbor-super-nav--is-showing-background":t||n&&!r});return i.createElement("div",{style:{zIndex:l},className:a},i.createElement("nav",{className:c},this.renderLogoLink(),i.createElement("div",{className:"arbor-super-nav__right-side"},this.renderLinks(),this.renderCtaButton(),this.renderToggleButton())))},t})(i.PureComponent);t.ArborSuperNav=c});
//# sourceMappingURL=index.min.js-vflyGmKAX.map