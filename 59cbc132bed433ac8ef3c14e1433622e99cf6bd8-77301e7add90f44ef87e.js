(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=a("q1tI"),o=r(n),c=r(a("Gytx"));function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),T.canUseDOM?t(s):a&&(s=a(s))}var T=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.peek=function(){return s},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=n.prototype;return i.shouldComponentUpdate=function(e){return!c(e,this.props)},i.componentWillMount=function(){u.push(this),f()},i.componentDidUpdate=function(){f()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},i.render=function(){return o.createElement(r,this.props)},n}(n.Component);return i(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(T,"canUseDOM",l),T}}},Gytx:function(e,t){e.exports=function(e,t,a,r){var n=a?a.call(r,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),c=Object.keys(t);if(o.length!==c.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var s=o[l];if(!i(s))return!1;var u=e[s],f=t[s];if(!1===(n=a?a.call(r,u,f,s):void 0)||void 0===n&&u!==f)return!1}return!0}},TJpk:function(e,t,a){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=f(a("q1tI")),c=f(a("17x9")),i=f(a("8+s/")),l=f(a("bmMU")),s=a("v1p5"),u=a("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,p,A,h=(0,i.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(d=h,A=p=function(e){function t(){return E(this,t),m(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,n=e.arrayTypeChildren,o=e.newChildProps,c=e.nestedChildren;return r({},n,((t={})[a.type]=[].concat(n[a.type]||[],[r({},o,this.mapNestedChildrenToProps(a,c))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,a,n=e.child,o=e.newProps,c=e.newChildProps,i=e.nestedChildren;switch(n.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[n.type]=i,t.titleAttributes=r({},c),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},c)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},c)})}return r({},o,((a={})[n.type]=r({},c),a))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=r({},t);return Object.keys(e).forEach((function(t){var n;a=r({},a,((n={})[t]=e[t],n))})),a},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var a=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,o=n.children,c=T(n,["children"]),i=(0,s.convertReactPropstoHtmlAttributes)(c);switch(a.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,a=T(e,["children"]),n=r({},a);return t&&(n=this.mapChildrenToProps(t,n)),o.default.createElement(d,n)},n(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:c.default.object,bodyAttributes:c.default.object,children:c.default.oneOfType([c.default.arrayOf(c.default.node),c.default.node]),defaultTitle:c.default.string,defer:c.default.bool,encodeSpecialCharacters:c.default.bool,htmlAttributes:c.default.object,link:c.default.arrayOf(c.default.object),meta:c.default.arrayOf(c.default.object),noscript:c.default.arrayOf(c.default.object),onChangeClientState:c.default.func,script:c.default.arrayOf(c.default.object),style:c.default.arrayOf(c.default.object),title:c.default.string,titleAttributes:c.default.object,titleTemplate:c.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=d.peek,p.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,a){"use strict";var r=Array.isArray,n=Object.keys,o=Object.prototype.hasOwnProperty,c="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){var i,l,s,u=r(t),f=r(a);if(u&&f){if((l=t.length)!=a.length)return!1;for(i=l;0!=i--;)if(!e(t[i],a[i]))return!1;return!0}if(u!=f)return!1;var T=t instanceof Date,E=a instanceof Date;if(T!=E)return!1;if(T&&E)return t.getTime()==a.getTime();var m=t instanceof RegExp,d=a instanceof RegExp;if(m!=d)return!1;if(m&&d)return t.toString()==a.toString();var p=n(t);if((l=p.length)!==n(a).length)return!1;for(i=l;0!=i--;)if(!o.call(a,p[i]))return!1;if(c&&t instanceof Element&&a instanceof Element)return t===a;for(i=l;0!=i--;)if(!("_owner"===(s=p[i])&&t.$$typeof||e(t[s],a[s])))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||-2146828260===a.number)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var a=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(a).map((function(e){return a[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[a.NOSCRIPT,a.SCRIPT,a.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},hTlr:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),c=function(e){var t;e.siteTitle;return n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"logo"},n.a.createElement(o.Link,{to:"/",className:"header-logo"},n.a.createElement("img",{src:"https://res.cloudinary.com/daeq8bixw/image/upload/v1622455008/luis_manzanero_edbee4271a.png",alt:"Luis Manzanero"}))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.Link,{to:"/",className:"nav-link",activeClassName:"active"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"space-station-moon-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"},n.a.createElement("g",{className:"fa-group"},n.a.createElement("path",{fill:"currentColor",d:"M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z",className:"fa-secondary"}),n.a.createElement("path",{fill:"currentColor",d:"M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z",className:"fa-primary"}))),n.a.createElement("span",{className:"link-text"},"Home"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.Link,{to:"/about",className:"nav-link",activeClassName:"active"},n.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",className:"svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"},n.a.createElement("path",((t={fill:"currentColor",className:"fa-secondary"}).className="cls-1",t.d="M63.99993,6.0564A57.9436,57.9436,0,1,0,121.9436,63.99993,58.00916,58.00916,0,0,0,63.99993,6.0564Zm0,104.44631a46.50272,46.50272,0,1,1,46.50278-46.50278A46.55537,46.55537,0,0,1,63.99993,110.50272Z",t)),n.a.createElement("circle",{fill:"currentColor",className:"fa-secondary",cx:"61.48833",cy:"39.26524",r:"7.74597"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M56.41651,53.95439A4.60509,4.60509,0,0,0,52.616,58.48922h0a4.60348,4.60348,0,0,0,4.60463,4.60463H57.677V88.60052H55.21362a3.94011,3.94011,0,0,0-3.94011,3.94011h0a3.94011,3.94011,0,0,0,3.94011,3.94011H72.78638a3.94011,3.94011,0,0,0,3.94011-3.94011h0a3.94011,3.94011,0,0,0-3.94011-3.94011H70.34982V56.04026A3.97591,3.97591,0,0,0,65.60173,52.14C61.62628,52.92712,56.57417,53.92668,56.41651,53.95439Z"})),n.a.createElement("span",{className:"link-text"},"About"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.Link,{to:"/resume",className:"nav-link",activeClassName:"active"},n.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},n.a.createElement("defs",null,n.a.createElement("style",null)),n.a.createElement("title",null,"b"),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M107.85862,1.9495h-65.678A4.582,4.582,0,0,0,38.91975,3.301L13.20025,29.02062a4.57286,4.57286,0,0,0-1.35156,3.26074v85.474a8.30572,8.30572,0,0,0,8.29766,8.29511h87.71227a8.30306,8.30306,0,0,0,8.29268-8.29511V10.24716A8.30532,8.30532,0,0,0,107.85862,1.9495Zm-.932,86.46872v28.41023H21.07336V36.89373H38.49775a8.3037,8.3037,0,0,0,8.29517-8.29523V11.17416h60.13372Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M64.82067,103.63479H37.31734a2.15847,2.15847,0,1,0,0,4.31694H64.82067a2.15847,2.15847,0,1,0,0-4.31694Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M35.15887,94.235a2.163,2.163,0,0,0,2.15847,2.15853H90.68272a2.15853,2.15853,0,0,0,0-4.31706H37.31734A2.15649,2.15649,0,0,0,35.15887,94.235Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M45.33184,53.8263l1.02881,5.30307a6.73963,6.73963,0,0,0,13.23125,0l1.02881-5.30307a7.09933,7.09933,0,0,0-7.03341-8.056H52.36525A7.09933,7.09933,0,0,0,45.33184,53.8263Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M52.97631,73.53253l-6.89219-6.89219-7.18288,2.55109a2.002,2.002,0,0,0-1.28842,1.47043l-2.454,11.549H70.79369l-2.454-11.549a2.00193,2.00193,0,0,0-1.28842-1.47043l-7.18288-2.55109Z"})),n.a.createElement("span",{className:"link-text"},"Resume"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.Link,{to:"/projects",className:"nav-link",activeClassName:"active"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"space-shuttle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"},n.a.createElement("g",{className:"fa-group"},n.a.createElement("path",{fill:"currentColor",d:"M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z",className:"fa-secondary"}),n.a.createElement("path",{fill:"currentColor",d:"M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z",className:"fa-primary"}))),n.a.createElement("span",{className:"link-text"},"Projects"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.Link,{to:"/blog",className:"nav-link",activeClassName:"active"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"512",height:"512"},n.a.createElement("g",{id:"Outline"},n.a.createElement("g",null,n.a.createElement("circle",{cx:"7",cy:"7",r:"1"}),n.a.createElement("circle",{cx:"11",cy:"7",r:"1"}),n.a.createElement("circle",{cx:"15",cy:"7",r:"1"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M24,6a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M39,6a1,1,0,0,0,0,2H54a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M61,36a1,1,0,0,0-1,1V60H4V24a1,1,0,0,0-2,0V61a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V37A1,1,0,0,0,61,36Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M61,2H3A1,1,0,0,0,2,3V20a1,1,0,0,0,2,0V12H57a1,1,0,0,0,0-2H20V4H60V33a1,1,0,0,0,2,0V3A1,1,0,0,0,61,2ZM18,10H4V4H18Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M57,16a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1V34a1,1,0,0,0,1,1H56a1,1,0,0,0,1-1ZM47,18a1,1,0,1,1-1-1A1,1,0,0,1,47,18ZM14,30a1,1,0,0,1-1-1,6.19,6.19,0,0,1,1-2.92A6.19,6.19,0,0,1,15,29,1,1,0,0,1,14,30Zm4.62,3L24,22.24,29.38,33Zm13,0-2.5-5L31,24.24,35.38,33ZM40,30a1,1,0,0,1-1-1,6.19,6.19,0,0,1,1-2.92A6.19,6.19,0,0,1,41,29,1,1,0,0,1,40,30Zm8,0a1,1,0,0,1-1-1,6.19,6.19,0,0,1,1-2.92A6.19,6.19,0,0,1,49,29,1,1,0,0,1,48,30Zm7,3H49V31.82A3,3,0,0,0,51,29c0-1.16-.94-5-3-5s-3,3.84-3,5a3,3,0,0,0,2,2.82V33H41V31.82A3,3,0,0,0,43,29c0-1.16-.94-5-3-5s-3,3.84-3,5a3,3,0,0,0,2,2.82V33H37.62L31.89,21.55a1,1,0,0,0-1.78,0L28,25.76l-3.11-6.21a1,1,0,0,0-1.78,0L16.38,33H15V31.82A3,3,0,0,0,17,29c0-1.16-.94-5-3-5s-3,3.84-3,5a3,3,0,0,0,2,2.82V33H9V17H43.18a3,3,0,1,0,5.64,0H55Z"}),n.a.createElement("circle",{cx:"41",cy:"20",r:"1"}),n.a.createElement("circle",{cx:"44",cy:"23",r:"1"}),n.a.createElement("circle",{cx:"50",cy:"22",r:"1"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M30,38H16a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M30,42H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M30,46H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M30,50H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M30,54H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M34,48h8a1,1,0,0,0,1-1V39a1,1,0,0,0-1-1H34a1,1,0,0,0-1,1v8A1,1,0,0,0,34,48Zm7-8v6H35V44h3a1,1,0,0,0,0-2H35V40Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M56,38H48a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M56,42H46a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M56,46H46a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M56,50H34a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M56,54H34a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"}),n.a.createElement("path",{fill:"currentColor",className:"fa-secondary",d:"M15.42,19.18a3.07,3.07,0,0,0-3.54.53,1,1,0,0,0,1.41,1.41,1,1,0,0,1,1.42,0,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,1,1.42,0,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41A3,3,0,0,0,15.42,19.18Z"})))),n.a.createElement("span",{className:"link-text"},"Blog"))),n.a.createElement("li",{className:"nav-item",id:"socialMediaIcons"},n.a.createElement("a",{href:"https://github.com/lmanzanero",target:"_blank",className:"nav-link"},n.a.createElement("svg",{viewBox:"0 0 512 512"},n.a.createElement("path",{className:"fa-secondary",d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}))),n.a.createElement("a",{href:"https://www.instagram.com/manzanero.luis1995/",target:"_blank",className:"nav-link"},n.a.createElement("svg",{viewBox:"0 0 512 512"},n.a.createElement("g",null,n.a.createElement("path",{d:"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"}),n.a.createElement("path",{d:"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"}),n.a.createElement("circle",{cx:"351.5",cy:"160.5",r:"21.5"})))),n.a.createElement("a",{href:"https://www.linkedin.com/in/luis-manzanero/",target:"_blank",className:"nav-link"},n.a.createElement("svg",{viewBox:"0 0 512 512"},n.a.createElement("path",{d:"M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"})))))))};a("w69F"),t.a=function(e){var t=e.children,a=Object(o.useStaticQuery)("3649515864");return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:"100%"}},n.a.createElement("main",null,t)))}},v1p5:function(e,t,a){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=l(a("q1tI")),c=l(a("YVoz")),i=a("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=p(e,i.TAG_NAMES.TITLE),a=p(e,i.HELMET_PROPS.TITLE_TEMPLATE);if(a&&t)return a.replace(/%s/g,(function(){return t}));var r=p(e,i.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return p(e,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return n({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[i.TAG_NAMES.BASE]})).map((function(e){return e[i.TAG_NAMES.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var r=Object.keys(a),n=0;n<r.length;n++){var o=r[n].toLowerCase();if(-1!==e.indexOf(o)&&a[o])return t.concat(a)}return t}),[])},d=function(e,t,a){var n={};return a.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var r={};a.filter((function(e){for(var a=void 0,o=Object.keys(e),c=0;c<o.length;c++){var l=o[c],s=l.toLowerCase();-1===t.indexOf(s)||a===i.TAG_PROPERTIES.REL&&"canonical"===e[a].toLowerCase()||s===i.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(a=s),-1===t.indexOf(l)||l!==i.TAG_PROPERTIES.INNER_HTML&&l!==i.TAG_PROPERTIES.CSS_TEXT&&l!==i.TAG_PROPERTIES.ITEM_PROP||(a=l)}if(!a||!e[a])return!1;var u=e[a].toLowerCase();return n[a]||(n[a]={}),r[a]||(r[a]={}),!n[a][u]&&(r[a][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var s=o[l],u=(0,c.default)({},n[s],r[s]);n[s]=u}return e}),[]).reverse()},p=function(e,t){for(var a=e.length-1;a>=0;a--){var r=e[a];if(r.hasOwnProperty(t))return r[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},M=null,_=function(e,t){var a=e.baseTag,r=e.bodyAttributes,n=e.htmlAttributes,o=e.linkTags,c=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,T=e.title,E=e.titleAttributes;N(i.TAG_NAMES.BODY,r),N(i.TAG_NAMES.HTML,n),g(T,E);var m={baseTag:C(i.TAG_NAMES.BASE,a),linkTags:C(i.TAG_NAMES.LINK,o),metaTags:C(i.TAG_NAMES.META,c),noscriptTags:C(i.TAG_NAMES.NOSCRIPT,l),scriptTags:C(i.TAG_NAMES.SCRIPT,u),styleTags:C(i.TAG_NAMES.STYLE,f)},d={},p={};Object.keys(m).forEach((function(e){var t=m[e],a=t.newTags,r=t.oldTags;a.length&&(d[e]=a),r.length&&(p[e]=m[e].oldTags)})),t&&t(),s(e,d,p)},b=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),N(i.TAG_NAMES.TITLE,t)},N=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var r=a.getAttribute(i.HELMET_ATTRIBUTE),n=r?r.split(","):[],o=[].concat(n),c=Object.keys(t),l=0;l<c.length;l++){var s=c[l],u=t[s]||"";a.getAttribute(s)!==u&&a.setAttribute(s,u),-1===n.indexOf(s)&&n.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var T=o.length-1;T>=0;T--)a.removeAttribute(o[T]);n.length===o.length?a.removeAttribute(i.HELMET_ATTRIBUTE):a.getAttribute(i.HELMET_ATTRIBUTE)!==c.join(",")&&a.setAttribute(i.HELMET_ATTRIBUTE,c.join(","))}},C=function(e,t){var a=document.head||document.querySelector(i.TAG_NAMES.HEAD),r=a.querySelectorAll(e+"["+i.HELMET_ATTRIBUTE+"]"),n=Array.prototype.slice.call(r),o=[],c=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===i.TAG_PROPERTIES.INNER_HTML)a.innerHTML=t.innerHTML;else if(r===i.TAG_PROPERTIES.CSS_TEXT)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];a.setAttribute(r,l)}a.setAttribute(i.HELMET_ATTRIBUTE,"true"),n.some((function(e,t){return c=t,a.isEqualNode(e)}))?n.splice(c,1):o.push(a)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return a.appendChild(e)})),{oldTags:n,newTags:o}},w=function(e){return Object.keys(e).reduce((function(t,a){var r=void 0!==e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+r:r}),"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[i.REACT_TAG_MAP[a]||a]=e[a],t}),t)},P=function(e,t,a){switch(e){case i.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,a=t.titleAttributes,(r={key:e})[i.HELMET_ATTRIBUTE]=!0,n=R(a,r),[o.default.createElement(i.TAG_NAMES.TITLE,n,e)];var e,a,r,n},toString:function(){return function(e,t,a,r){var n=w(a),o=b(t);return n?"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+n+">"+u(o,r)+"</"+e+">":"<"+e+" "+i.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var r,n=((r={key:a})[i.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var a=i.REACT_TAG_MAP[e]||e;if(a===i.TAG_PROPERTIES.INNER_HTML||a===i.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:r}}else n[a]=t[e]})),o.default.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,r){var n=Object.keys(r).filter((function(e){return!(e===i.TAG_PROPERTIES.INNER_HTML||e===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var n=void 0===r[t]?t:t+'="'+u(r[t],a)+'"';return e?e+" "+n:n}),""),o=r.innerHTML||r.cssText||"",c=-1===i.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+n+(c?"/>":">"+o+"</"+e+">")}),"")}(e,t,a)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[i.HTML_TAG_MAP[a]||a]=e[a],t}),t)},t.handleClientStateChange=function(e){M&&v(M),e.defer?M=y((function(){_(e,(function(){M=null}))})):(_(e),M=null)},t.mapStateOnServer=function(e){var t=e.baseTag,a=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,o=e.linkTags,c=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,T=void 0===f?"":f,E=e.titleAttributes;return{base:P(i.TAG_NAMES.BASE,t,r),bodyAttributes:P(i.ATTRIBUTE_NAMES.BODY,a,r),htmlAttributes:P(i.ATTRIBUTE_NAMES.HTML,n,r),link:P(i.TAG_NAMES.LINK,o,r),meta:P(i.TAG_NAMES.META,c,r),noscript:P(i.TAG_NAMES.NOSCRIPT,l,r),script:P(i.TAG_NAMES.SCRIPT,s,r),style:P(i.TAG_NAMES.STYLE,u,r),title:P(i.TAG_NAMES.TITLE,{title:T,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:m([i.TAG_PROPERTIES.HREF],e),bodyAttributes:E(i.ATTRIBUTE_NAMES.BODY,e),defer:p(e,i.HELMET_PROPS.DEFER),encode:p(e,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(i.ATTRIBUTE_NAMES.HTML,e),linkTags:d(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],e),metaTags:d(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:E(i.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S}).call(this,a("yLpj"))},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("TJpk"),c=a.n(o),i=a("Wbzz");function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=e.isHomePage,s=e.image,u=Object(i.useStaticQuery)("63159454").site,f=t||u.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:l?u.siteMetadata.title+" | %s":"%s | "+u.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:o},{property:"og:description",content:f},{property:"og:image",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:f}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},w69F:function(e,t,a){},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=59cbc132bed433ac8ef3c14e1433622e99cf6bd8-77301e7add90f44ef87e.js.map