(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,r,n){"use strict";var t=n(3848);r.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),i=n(4651),l=n(7426);var u={};function s(e,r,n,t){if(e&&c.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var r=c.resolveHref(o,e.href,!0),n=t(r,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var j=(r=a.default.Children.only(v))&&"object"===typeof r&&r.ref,O=l.useIntersection({rootMargin:"200px"}),k=t(O,2),m=k[0],x=k[1],w=a.default.useCallback((function(e){m(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,m]);a.default.useEffect((function(){var e=x&&n&&c.isLocalURL(d),r="undefined"!==typeof g?g:o&&o.locale,t=u[d+"%"+p+(r?"%"+r:"")];e&&!t&&s(o,d,p,{locale:r})}),[p,d,x,g,n,o]);var E={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](n,t,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,h,y,b,g)},onMouseEnter:function(e){c.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(p,_,o&&o.locales,o&&o.domainLocales);E.href=L||c.addBasePath(c.addLocale(p,_,o&&o.defaultLocale))}return a.default.cloneElement(r,E)};r.default=f},7426:function(e,r,n){"use strict";var t=n(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!c,l=o.useRef(),u=o.useState(!1),s=t(u,2),f=s[0],d=s[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=i.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return i.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,c=t.elements;return c.set(e,r),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[n,r,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},8094:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return w}});var t=n(9008),o=n(980),a=n(3850),c=n(8017),i=n(2809);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var u=n(7294),s=n(5063),f=n(63),d=n(2326),p=n(5284),v=n(3105),h=n(4461),y=n(3808);function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var g=(0,f.G)(((e,r)=>{var n=(0,d.m)("Link",e),t=(0,p.Lr)(e),{className:o,isExternal:a}=t,c=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["className","isExternal"]);return u.createElement(v.m$.a,b({target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,ref:r,className:(0,h.cx)("chakra-link",o)},c,{__css:n}))}));y.Ts&&(g.displayName="Link");var j=n(5893);function O(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?O(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var m=function(e){var r=l({},e),n=r.chackraLink,t=r.children,o=k(k({},r),{},{chackraLink:void 0,children:void 0});return(0,j.jsx)(s.default,k(k({},o),{},{passHref:!0,children:(0,j.jsx)(g,k(k({},n),{},{children:t}))}))};m.defaultProps={chackraLink:{}};var x=m;function w(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(t.default,{children:(0,j.jsx)("title",{children:"Hello World | vvvvoid main"})}),(0,j.jsxs)(a.W,{height:"100%",children:[(0,j.jsx)(c.xu,{children:(0,j.jsx)(o.chakra.h1,{color:"gray",children:"Hello World!"})}),(0,j.jsx)(c.xu,{children:(0,j.jsx)(x,{href:"/about",children:"- about page"})}),(0,j.jsx)(c.xu,{children:(0,j.jsx)(x,{href:"/query?id=222",children:"- query page"})})]})]})}},5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8094)}])},5063:function(e,r,n){e.exports=n(2167)}},function(e){e.O(0,[729,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);