(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7156:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(4754)}])},6005:function(e,t,r){"use strict";r.d(t,{x:function(){return a}});var n=r(8100);function o(e){return fetch(e).then((function(e){return e.json()}))}function a(){var e=(0,n.ZP)(window.location.protocol+"//"+window.location.host+"/api/user",o),t=e.data,r=e.mutate;return[null===t||void 0===t?void 0:t.user,{mutate:r}]}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),l=r(880),c=r(9246);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,y=e.replace,m=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],S=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=j&&r&&u.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,j,b,r,n]);var E={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,y,m,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof b?b:n&&n.locale,I=n&&n.isLocaleDomain&&u.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);E.href=I||u.addBasePath(u.addLocale(p,A,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(t?t.current:null),2),y=h[0],m=h[1],v=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&m(t.current)}),[t]),[v,d]};var a=r(7294),i=r(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},4754:function(e,t,r){"use strict";r.r(t);var n=r(4051),o=r.n(n),a=r(5893),i=r(7294),u=r(9008),l=r(1664),c=r(1163),s=r(6005);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,o,a,i){try{var u=e[a](i),l=u.value}catch(c){return void r(c)}u.done?t(l):Promise.resolve(l).then(n,o)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,c.useRouter)(),t=(0,i.useState)(""),r=t[0],n=t[1],f=p((0,s.x)(),2),h=f[0],y=f[1].mutate;(0,i.useEffect)((function(){h&&e.push("/posts/first-post")}),[h]);var m=function(){var e,t=(e=o().mark((function e(t){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={email:t.currentTarget.email.value,password:t.currentTarget.password.value},e.next=5,fetch(window.location.protocol+"//"+window.location.host+"/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:if(200!==(a=e.sent).status){e.next=13;break}return e.next=9,a.json();case 9:i=e.sent,y(i),e.next=14;break;case 13:n("Incorrect username or password. Try again!");case 14:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){d(a,n,o,i,u,"next",e)}function u(e){d(a,n,o,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{children:(0,a.jsx)("title",{children:"\ub85c\uadf8\uc778"})}),(0,a.jsxs)("div",{className:"px-4 py-5 my-5 text-center",children:[(0,a.jsx)("h1",{className:"display-5 fw-bold mb-5",children:"\ub85c\uadf8\uc778"}),(0,a.jsxs)("div",{className:"col-lg-6 mx-auto",children:[(0,a.jsxs)("form",{onSubmit:m,children:[r?(0,a.jsx)("p",{style:{color:"red"},children:r}):null,(0,a.jsxs)("div",{className:"form-floating mb-2",children:[(0,a.jsx)("input",{name:"id",type:"email",className:"form-control",placeholder:"\uc544\uc774\ub514"}),(0,a.jsx)("label",{forhtml:"id",children:"\uc544\uc774\ub514"})]}),(0,a.jsxs)("div",{className:"form-floating mb-2",children:[(0,a.jsx)("input",{id:"password",name:"password",type:"password",className:"form-control",placeholder:"\ube44\ubc00\ubc88\ud638"}),(0,a.jsx)("label",{forhtml:"password",children:"\ube44\ubc00\ubc88\ud638"})]}),(0,a.jsx)("button",{className:"w-100 btn btn-lg btn-primary mb-2",type:"submit",children:"\ub85c\uadf8\uc778"})]}),(0,a.jsx)("button",{type:"button",className:"w-100 btn btn-lg btn-secondary px-4 gap-3",onClick:function(){return e.replace("/")},children:"\ud648\uc73c\ub85c"}),(0,a.jsx)(l.default,{href:"/forget-password",children:"Forget password"})]})]})]})}},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[100,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);