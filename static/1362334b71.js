window.FontAwesomeKitConfig = {"id":30736227,"version":"5.15.4","token":"1362334b71","method":"css","license":"free","baseUrl":"https://ka-f.fontawesome.com","asyncLoading":{"enabled":false},"autoA11y":{"enabled":true},"baseUrlKit":"https://kit.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"minify":{"enabled":true},"v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"v5FontFaceShim":{"enabled":false}};
!function(t){"function"==typeof define&&define.amd?define("kit-loader",t):t()}((function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c,u,s,f="classic",l="duotone",d="sharp",h="sharp-duotone",p=[f,l,d,h],m=(r(c={},f,"Classic"),r(c,l,"Duotone"),r(c,d,"Sharp"),r(c,h,"Sharp Duotone"),r(u={},"kit","Kit"),r(u,"kit-duotone","Kit Duotone"),["fak","fa-kit","fakd","fa-kit-duotone"]),b=["fa","fas","fa-solid","far","fa-regular","fal","fa-light","fat","fa-thin","fad","fa-duotone","fab","fa-brands","fass","fasr","fasl","fast","fasds"],y=[1,2,3,4,5,6,7,8,9,10],v=y.concat([11,12,13,14,15,16,17,18,19,20]),g="duotone-group",w="swap-opacity",A="primary",S="secondary";[].concat((s=Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),function(t){if(Array.isArray(t))return a(t)}(s)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(s)||i(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),["solid","regular","light","thin","duotone","brands"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",g,w,A,S]).concat(y.map((function(t){return"".concat(t,"x")}))).concat(v.map((function(t){return"w-".concat(t)})));function O(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,a=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+a+"/"+r+o+"."+i}function j(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var r=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&r){var o=t.createElement("span");o.innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling)}}))}var E,P=function(){},_="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,k="undefined"==typeof setImmediate?setTimeout:setImmediate,F=[];function x(){for(var t=0;t<F.length;t++)F[t][0](F[t][1]);F=[],E=!1}function C(t,e){F.push([t,e]),E||(E=!0,k(x,0))}function I(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(t){D(i,t)}}U(i,r)||("fulfilled"===n&&T(i,r),"rejected"===n&&D(i,r))}function U(t,e){var r;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===n(e))){var o=e.then;if("function"==typeof o)return o.call(e,(function(n){r||(r=!0,e===n?L(t,n):T(t,n))}),(function(e){r||(r=!0,D(t,e))})),!0}}catch(e){return r||D(t,e),!0}return!1}function T(t,e){t!==e&&U(t,e)||L(t,e)}function L(t,e){"pending"===t._state&&(t._state="settled",t._data=e,C(N,t))}function D(t,e){"pending"===t._state&&(t._state="settled",t._data=e,C(R,t))}function M(t){t._then=t._then.forEach(I)}function N(t){t._state="fulfilled",M(t)}function R(t){t._state="rejected",M(t),!t._handled&&_&&global.process.emit("unhandledRejection",t._data,t)}function K(t){global.process.emit("rejectionHandled",t)}function H(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof H==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){D(e,t)}try{t((function(t){T(e,t)}),n)}catch(t){n(t)}}(t,this)}H.prototype={constructor:H,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(P),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&_&&C(K,this)),"fulfilled"===this._state||"rejected"===this._state?C(I,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},H.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new H((function(e,n){var r=[],o=0;function i(t){return o++,function(n){r[t]=n,--o||e(r)}}for(var a,c=0;c<t.length;c++)(a=t[c])&&"function"==typeof a.then?a.then(i(c),n):r[c]=a;o||e(r)}))},H.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new H((function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&"function"==typeof r.then?r.then(e,n):e(r)}))},H.resolve=function(t){return t&&"object"===n(t)&&t.constructor===H?t:new H((function(e){e(t)}))},H.reject=function(t){return new H((function(e,n){n(t)}))};var q="function"==typeof Promise?Promise:H;function X(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return o&&!function(t){return t.indexOf("kit-upload.css")>-1}(t)&&("URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o)),i=i.toString(),new q((function(t,e){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(e){t(e)})).catch(e);else if("function"==typeof r){var o=new r;o.addEventListener("loadend",(function(){this.responseText?t(this.responseText):e(new Error(""))}));["abort","error","timeout"].map((function(t){o.addEventListener(t,(function(){e(new Error(""))}))})),o.open("GET",i),o.send()}else{e(new Error(""))}}))}function B(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,r){return"".concat(r).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=o(t,2),n=e[0],i=e[1];r=r.replace(n,i)})),r}function Y(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.document||o,i=j.bind(j,o,[].concat(b,m,p.map((function(t){return"fa-".concat(t)}))));t.autoA11y.enabled&&r(i);var a=t.subsetPath&&t.baseUrl+"/"+t.subsetPath,c=[{id:"fa-main",addOn:void 0,url:a}];if(t.v4shim&&t.v4shim.enabled&&c.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&&t.v5FontFaceShim.enabled&&c.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&&t.v4FontFaceShim.enabled&&c.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!a&&t.customIconsCssPath){var u=t.customIconsCssPath.indexOf("kit-upload.css")>-1?t.baseUrlKit:t.baseUrl,s=u+"/"+t.customIconsCssPath;c.push({id:"fa-kit-upload",url:s})}var f=c.map((function(r){return new q((function(o,i){var a=r.url||O(t,{addOn:r.addOn,minify:t.minify.enabled}),c={id:r.id},u=t.subset?c:e(e(e({},n),c),{},{baseUrl:t.baseUrl,version:t.version,id:r.id,contentFilter:function(t,e){return B(t,e.baseUrl,e.version)}});X(a,n).then((function(t){o(z(t,u))})).catch(i)}))}));return q.all(f)}function z(t,e){var n=e.contentFilter||function(t,e){return t},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function G(t,n){n.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(n.autoFetchSvg=!0,n.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",n.fetchUploadedSvgFrom=t.uploadsUrl);var r=[];return t.v4shim.enabled&&r.push(new q((function(r,o){X(O(t,{addOn:"-v4-shims",minify:t.minify.enabled}),n).then((function(t){r($(t,e(e({},n),{},{id:"fa-v4-shims"})))})).catch(o)}))),r.push(new q((function(r,o){X(t.subsetPath&&t.baseUrl+"/"+t.subsetPath||O(t,{minify:t.minify.enabled}),n).then((function(t){var o=$(t,e(e({},n),{},{id:"fa-main"}));r(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,r=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==r&&t.setAttribute("data-auto-a11y",r?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(o,n))})).catch(o)}))),q.all(r)}function $(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function J(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function Q(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var V=window.FontAwesomeKitConfig,W={detectingConflicts:V.detectConflictsUntil&&new Date<=new Date(V.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:V.token,XMLHttpRequest:window.XMLHttpRequest,document:document},Z=document.currentScript,tt=Z?Z.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?G(t,e):"css"===t.method?Y(t,e,(function(t){J(t),Q(t)})):void 0})(V,W).then((function(t){t.map((function(t){try{tt.insertBefore(t,Z?Z.nextSibling:null)}catch(e){tt.appendChild(t)}})),W.detectingConflicts&&Z&&J((function(){Z.setAttributeNode(document.createAttribute(W.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=O(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(V,W);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(f){console.error("".concat("Font Awesome Kit:"," ").concat(f))}}));on"==typeof define&&define.amd?define("kit-loader",t):t()}((function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c,u,s,f="classic",l="duotone",d="sharp",h="sharp-duotone",p=[f,l,d,h],m=(r(c={},f,"Classic"),r(c,l,"Duotone"),r(c,d,"Sharp"),r(c,h,"Sharp Duotone"),r(u={},"kit","Kit"),r(u,"kit-duotone","Kit Duotone"),["fak","fa-kit","fakd","fa-kit-duotone"]),b=["fa","fas","fa-solid","far","fa-regular","fal","fa-light","fat","fa-thin","fad","fa-duotone","fab","fa-brands","fass","fasr","fasl","fast","fasds"],y=[1,2,3,4,5,6,7,8,9,10],v=y.concat([11,12,13,14,15,16,17,18,19,20]),g="duotone-group",w="swap-opacity",A="primary",S="secondary";[].concat((s=Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),function(t){if(Array.isArray(t))return a(t)}(s)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(s)||i(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),["solid","regular","light","thin","duotone","brands"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",g,w,A,S]).concat(y.map((function(t){return"".concat(t,"x")}))).concat(v.map((function(t){return"w-".concat(t)})));function O(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,a=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+a+"/"+r+o+"."+i}function j(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var r=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&r){var o=t.createElement("span");o.innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling)}}))}var E,P=function(){},_="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,k="undefined"==typeof setImmediate?setTimeout:setImmediate,F=[];function x(){for(var t=0;t<F.length;t++)F[t][0](F[t][1]);F=[],E=!1}function C(t,e){F.push([t,e]),E||(E=!0,k(x,0))}function I(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(t){D(i,t)}}U(i,r)||("fulfilled"===n&&T(i,r),"rejected"===n&&D(i,r))}function U(t,e){var r;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===n(e))){var o=e.then;if("function"==typeof o)return o.call(e,(function(n){r||(r=!0,e===n?L(t,n):T(t,n))}),(function(e){r||(r=!0,D(t,e))})),!0}}catch(e){return r||D(t,e),!0}return!1}function T(t,e){t!==e&&U(t,e)||L(t,e)}function L(t,e){"pending"===t._state&&(t._state="settled",t._data=e,C(N,t))}function D(t,e){"pending"===t._state&&(t._state="settled",t._data=e,C(R,t))}function M(t){t._then=t._then.forEach(I)}function N(t){t._state="fulfilled",M(t)}function R(t){t._state="rejected",M(t),!t._handled&&_&&global.process.emit("unhandledRejection",t._data,t)}function K(t){global.process.emit("rejectionHandled",t)}function H(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof H==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){D(e,t)}try{t((function(t){T(e,t)}),n)}catch(t){n(t)}}(t,this)}H.prototype={constructor:H,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(P),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&_&&C(K,this)),"fulfilled"===this._state||"rejected"===this._state?C(I,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},H.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new H((function(e,n){var r=[],o=0;function i(t){return o++,function(n){r[t]=n,--o||e(r)}}for(var a,c=0;c<t.length;c++)(a=t[c])&&"function"==typeof a.then?a.then(i(c),n):r[c]=a;o||e(r)}))},H.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new H((function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&"function"==typeof r.then?r.then(e,n):e(r)}))},H.resolve=function(t){return t&&"object"===n(t)&&t.constructor===H?t:new H((function(e){e(t)}))},H.reject=function(t){return new H((function(e,n){n(t)}))};var q="function"==typeof Promise?Promise:H;function X(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return o&&!function(t){return t.indexOf("kit-upload.css")>-1}(t)&&("URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o)),i=i.toString(),new q((function(t,e){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(e){t(e)})).catch(e);else if("function"==typeof r){var o=new r;o.addEventListener("loadend",(function(){this.responseText?t(this.responseText):e(new Error(""))}));["abort","error","timeout"].map((function(t){o.addEventListener(t,(function(){e(new Error(""))}))})),o.open("GET",i),o.send()}else{e(new Error(""))}}))}function B(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,r){return"".concat(r).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=o(t,2),n=e[0],i=e[1];r=r.replace(n,i)})),r}function Y(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.document||o,i=j.bind(j,o,[].concat(b,m,p.map((function(t){return"fa-".concat(t)}))));t.autoA11y.enabled&&r(i);var a=t.subsetPath&&t.baseUrl+"/"+t.subsetPath,c=[{id:"fa-main",addOn:void 0,url:a}];if(t.v4shim&&t.v4shim.enabled&&c.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&&t.v5FontFaceShim.enabled&&c.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&&t.v4FontFaceShim.enabled&&c.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!a&&t.customIconsCssPath){var u=t.customIconsCssPath.indexOf("kit-upload.css")>-1?t.baseUrlKit:t.baseUrl,s=u+"/"+t.customIconsCssPath;c.push({id:"fa-kit-upload",url:s})}var f=c.map((function(r){return new q((function(o,i){var a=r.url||O(t,{addOn:r.addOn,minify:t.minify.enabled}),c={id:r.id},u=t.subset?c:e(e(e({},n),c),{},{baseUrl:t.baseUrl,version:t.version,id:r.id,contentFilter:function(t,e){return B(t,e.baseUrl,e.version)}});X(a,n).then((function(t){o(z(t,u))})).catch(i)}))}));return q.all(f)}function z(t,e){var n=e.contentFilter||function(t,e){return t},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function G(t,n){n.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(n.autoFetchSvg=!0,n.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",n.fetchUploadedSvgFrom=t.uploadsUrl);var r=[];return t.v4shim.enabled&&r.push(new q((function(r,o){X(O(t,{addOn:"-v4-shims",minify:t.minify.enabled}),n).then((function(t){r($(t,e(e({},n),{},{id:"fa-v4-shims"})))})).catch(o)}))),r.push(new q((function(r,o){X(t.subsetPath&&t.baseUrl+"/"+t.subsetPath||O(t,{minify:t.minify.enabled}),n).then((function(t){var o=$(t,e(e({},n),{},{id:"fa-main"}));r(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,r=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==r&&t.setAttribute("data-auto-a11y",r?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(o,n))})).catch(o)}))),q.all(r)}function $(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function J(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function Q(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var V=window.FontAwesomeKitConfig,W={detectingConflicts:V.detectConflictsUntil&&new Date<=new Date(V.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:V.token,XMLHttpRequest:window.XMLHttpRequest,document:document},Z=document.currentScript,tt=Z?Z.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?G(t,e):"css"===t.method?Y(t,e,(function(t){J(t),Q(t)})):void 0})(V,W).then((function(t){t.map((function(t){try{tt.insertBefore(t,Z?Z.nextSibling:null)}catch(e){tt.appendChild(t)}})),W.detectingConflicts&&Z&&J((function(){Z.setAttributeNode(document.createAttribute(W.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=O(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(V,W);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(f){console.error("".concat("Font Awesome Kit:"," ").concat(f))}}));