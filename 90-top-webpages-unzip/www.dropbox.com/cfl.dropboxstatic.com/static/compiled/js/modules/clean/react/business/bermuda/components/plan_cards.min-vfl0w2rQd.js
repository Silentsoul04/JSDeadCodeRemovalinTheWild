define(["require","exports","tslib","react","modules/clean/raf_throttle","spectrum-arbor/components/arbor_plan_card","spectrum-arbor/atoms/arbor_headline","spectrum-arbor/atoms/arbor_button","spectrum-arbor/atoms/arbor_copy","spectrum-arbor/components/arbor_list","spectrum-arbor/atoms/arbor_link","spectrum-arbor/atoms/arbor_grid_container","spectrum-arbor/atoms/arbor_grid_element","modules/clean/react_format","modules/clean/react/business/bermuda/interfaces/plans"],function(e,t,r,a,n,o,i,l,s,d,c,m,u,p,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a);var b=(function(e){function t(t){var r=e.call(this,t)||this;return r.planCardTopSections=[],r.setPlanCardTopSectionsTallestHeight=function(){var e=r.planCardTopSections,t=e.map(function(e){return e.getBoundingClientRect().height}),a=t.reduce(function(e,t){return e>=t?e:t},0);r.setState({planCardTopSectionsTallestHeight:a})},r.renderPlanCard=function(e,t){var n=r.props.content[e],m=r.props,h=m.planType,b=m.trackingIds,f=m.purchaseCtaSize,g=b&&b[e],T=n.price[h],C=r.state.planCardTopSectionsTallestHeight,S={height:C+30+"px"},_=[a.default.createElement("div",{className:"plan-card__top-section",key:n.name+"-1",style:S},a.default.createElement("div",{ref:function(e){return r.planCardTopSections[t]=e}},a.default.createElement(i.ArborHeadline,{marginBottomSize:"micro",styleOverride:"title-5",tag:"h2"},n.name),a.default.createElement(i.ArborHeadline,{marginBottomSize:"micro",marginTopSize:"nano",styleOverride:"title-2",tag:"h2",weight:"book",width:"20"},T),n.userInfo&&n.userInfo[h]&&a.default.createElement(s.ArborCopy,{color:"shark"},p.reactFormat(n.userInfo[h],{p:a.default.createElement(s.ArborCopy,{color:"shark",tag:"span"})}))),a.default.createElement("hr",{className:"plan-card__dash"})),a.default.createElement("div",{key:n.name+"-2"},a.default.createElement(d.ArborList,{bulletStyle:"checkmark",listItems:n.listItems}),a.default.createElement(l.ArborButton,{className:n.highlight?"":"plan-card__button--dbx-blue-inverted",fullWidth:!0,href:n.button.url,outlined:!0,padding:"standard",marginTopSize:"large",theme:n.highlight?"dbx-blue":"panda-white",trackingId:g&&g.button?g.button:void 0},n.button.text),n.purchase?a.default.createElement(s.ArborCopy,{marginTopSize:"small",size:"small"},p.reactFormat(n.purchase.text,{a:a.default.createElement(c.ArborLink,{href:n.purchase.url,size:f?f:"micro",theme:"dbx-blue",trackingId:g&&g.purchase?g.purchase:void 0})})):a.default.createElement(s.ArborCopy,{marginTopSize:"small",size:"small"}," "))],E=n.borderChildrenText?a.default.createElement(i.ArborHeadline,{color:"panda-white",marginBottomSize:"none",styleOverride:"title-5",tag:"h3"},n.borderChildrenText):void 0;return a.default.createElement(u.ArborGridElement,{key:t,alignment:"stretch",className:"plan-card",columnWidth:{base:12,medium:7},direction:"row"},a.default.createElement(o.ArborPlanCard,{planColor:"panda-black",boxChildren:_,borderChildren:E}))},r.resizeThrottle=new n.RafThrottle(r.setPlanCardTopSectionsTallestHeight),r.state={planCardTopSectionsTallestHeight:0},r}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.setPlanCardTopSectionsTallestHeight(),"fonts"in document&&document.fonts.ready.then(this.setPlanCardTopSectionsTallestHeight),window.addEventListener("resize",this.resizeThrottle.request)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.resizeThrottle.request)},t.prototype.render=function(){return a.default.createElement(m.ArborGridContainer,{alignment:"stretch",verticalPaddingSize:"none",bottomPaddingSize:this.props.bottomPaddingSize?this.props.bottomPaddingSize:void 0},[h.PlanTier.STANDARD,h.PlanTier.ADVANCED,h.PlanTier.ENTERPRISE].map(this.renderPlanCard))},t})(a.default.PureComponent);t.PlanCards=b});
//# sourceMappingURL=plan_cards.min.js-vflpDAAXf.map