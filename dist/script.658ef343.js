parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
"use strict";var e="slider-photo",t=document.getElementsByClassName(e),s=t.length,n=0,a=!0;function c(){t[s-1].classList.add("prev"),t[0].classList.add("active"),t[1].classList.add("next")}function i(){var e=document.getElementsByClassName("slider-button-next")[0],t=document.getElementsByClassName("slider-button-prev")[0];e.addEventListener("click",o),t.addEventListener("click",m)}function l(){a=!0,setTimeout(function(){a=!1},500)}function d(n){if(!a){l();var c=n-1,i=n+1,d=n-2,o=n+2;s-1>3&&(c<=0?d=s-1:i>=s-1&&(o=0),0===n?(c=s-1,d=s-2,o=n+1):n===s-1&&(c=n-1,i=0,o=1),t[d].className=e,t[o].className=e,t[c].className=e+" prev",t[n].className=e+" active",t[i].className=e+" next")}}function o(){a||(n===s-1?n=0:n++,d(n))}function m(){a||(0===n?n=s-1:n--,d(n))}function u(){c(),i(),a=!1}u();
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.658ef343.js.map