function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if("production"!==process.env.NODE_ENV){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return !!n&&!!n[Q]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);if(null===t)return !0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t);}function _(){return "production"===process.env.NODE_ENV||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t);}function O(n){g(n),n.p.forEach(S),n.p=null;}function g(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if("production"!==process.env.NODE_ENV&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r);}function z(n,t){var r=n[Q];return (r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1;}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return "production"!==process.env.NODE_ENV&&f(t),en.get(t,n)},set:function(t){var r=this[Q];"production"!==process.env.NODE_ENV&&f(r),en.set(r,n,t);}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r);}}}function o(n){for(var t=n.t,r=n.k,e=nn(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return !0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return !0}}var v=!!t[Q];return e.length!==nn(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return !0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return !(!r||r.get)}function f(t){t.O&&n(3,JSON.stringify(p(t)));}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tn(t);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,k(r)));})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(r));}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return !0;E(n),k(n);}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),on.deleteProperty=function(t,r){return "production"!==process.env.NODE_ENV&&isNaN(parseInt(r))&&n(13),en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return "production"!==process.env.NODE_ENV&&"length"!==r&&isNaN(parseInt(r))&&n(14),en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return (r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t);},this.produceWithPatches=function(n,t){return "function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t;})),r,i];var r,i;},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q];"production"!==process.env.NODE_ENV&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);var createNextState2 = fn;

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

createSelectorCreator(defaultMemoize);

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _b = __getOwnPropSymbols(b); _i < _b.length; _i++) {
            var prop = _b[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
/** @class */ ((function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
})(Array));
// src/immutableStateInvariantMiddleware.ts
process.env.NODE_ENV === "production";
// src/configureStore.ts
process.env.NODE_ENV === "production";
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (process.env.NODE_ENV !== "production") {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (process.env.NODE_ENV !== "production") {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (process.env.NODE_ENV !== "production") {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    var _b = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _b[0], finalActionMatchers = _b[1], finalDefaultCaseReducer = _b[2];
    var frozenInitialState = createNextState2(initialState, function () {
    });
    return function (state, action) {
        if (state === void 0) { state = frozenInitialState; }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_b) {
            var matcher = _b.matcher;
            return matcher(action);
        }).map(function (_b) {
            var reducer = _b.reducer;
            return reducer;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if (t(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (typeof result === "undefined") {
                        return previousState;
                    }
                    return result;
                }
                else if (!r(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (typeof result === "undefined") {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return createNextState2(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    };
}
// src/createSlice.ts
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name, initialState = options.initialState;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    var reducers = options.reducers || {};
    var _b = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _c = _b[0], extraReducers = _c === void 0 ? {} : _c, _d = _b[1], actionMatchers = _d === void 0 ? [] : _d, _e = _b[2], defaultCaseReducer = _e === void 0 ? void 0 : _e;
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    return {
        name: name,
        reducer: reducer,
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName
    };
}
// src/index.ts
N();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dist = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

var indexMinimal = {};

var minimal$1 = {};

var aspromise = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}

var base64$1 = {};

(function (exports) {

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};
}(base64$1));

var eventemitter = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};

var float = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}

var inquire_1 = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}

var utf8$2 = {};

(function (exports) {

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};
}(utf8$2));

var pool_1 = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}

var longbits = LongBits$2;

var util$5 = minimal$1;

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits$2(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits$2.zero = new LongBits$2(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits$2.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits$2.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits$2(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits$2.from = function from(value) {
    if (typeof value === "number")
        return LongBits$2.fromNumber(value);
    if (util$5.isString(value)) {
        /* istanbul ignore else */
        if (util$5.Long)
            value = util$5.Long.fromString(value);
        else
            return LongBits$2.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits$2(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits$2.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits$2.prototype.toLong = function toLong(unsigned) {
    return util$5.Long
        ? new util$5.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits$2.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits$2(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits$2.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits$2.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits$2.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits$2.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};

(function (exports) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = aspromise;

// converts to / from base64 encoded strings
util.base64 = base64$1;

// base class of rpc.Service
util.EventEmitter = eventemitter;

// float handling accross browsers
util.float = float;

// requires modules optionally and hides the call from bundlers
util.inquire = inquire_1;

// converts to / from utf8 encoded strings
util.utf8 = utf8$2;

// provides a node-like buffer pool in the browser
util.pool = pool_1;

// utility to work with the low and high bits of a 64 bit value
util.LongBits = longbits;

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof commonjsGlobal$1 !== "undefined" && commonjsGlobal$1
           || typeof self   !== "undefined" && self
           || commonjsGlobal$1; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};
}(minimal$1));

var writer = Writer$1;

var util$4      = minimal$1;

var BufferWriter$1; // cyclic

var LongBits$1  = util$4.LongBits,
    base64    = util$4.base64,
    utf8$1      = util$4.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer$1() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create$1 = function create() {
    return util$4.Buffer
        ? function create_buffer_setup() {
            return (Writer$1.create = function create_buffer() {
                return new BufferWriter$1();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer$1();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer$1.create = create$1();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer$1.alloc = function alloc(size) {
    return new util$4.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util$4.Array !== Array)
    Writer$1.alloc = util$4.pool(Writer$1.alloc, util$4.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer$1.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits$1.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer$1.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits$1.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer$1.prototype.int64 = Writer$1.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer$1.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits$1.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.sfixed32 = Writer$1.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer$1.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits$1.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer$1.prototype.sfixed64 = Writer$1.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.float = function write_float(value) {
    return this._push(util$4.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.double = function write_double(value) {
    return this._push(util$4.float.writeDoubleLE, 8, value);
};

var writeBytes = util$4.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util$4.isString(value)) {
        var buf = Writer$1.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer$1.prototype.string = function write_string(value) {
    var len = utf8$1.length(value);
    return len
        ? this.uint32(len)._push(utf8$1.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer$1.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer$1.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer$1.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer$1.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer$1._configure = function(BufferWriter_) {
    BufferWriter$1 = BufferWriter_;
    Writer$1.create = create$1();
    BufferWriter$1._configure();
};

var writer_buffer = BufferWriter;

// extends Writer
var Writer = writer;
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util$3 = minimal$1;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util$3._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util$3.Buffer && util$3.Buffer.prototype instanceof Uint8Array && util$3.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util$3.isString(value))
        value = util$3._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util$3.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util$3.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();

var reader = Reader$1;

var util$2      = minimal$1;

var BufferReader$1; // cyclic

var LongBits  = util$2.LongBits,
    utf8      = util$2.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader$1(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader$1(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader$1(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util$2.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader$1.create = function create_buffer(buffer) {
                return util$2.Buffer.isBuffer(buffer)
                    ? new BufferReader$1(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader$1.create = create();

Reader$1.prototype._slice = util$2.Array.prototype.subarray || /* istanbul ignore next */ util$2.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader$1.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader$1.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader$1.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader$1.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader$1.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader$1.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader$1.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util$2.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader$1.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util$2.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader$1.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader$1.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader$1.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader$1.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader$1._configure = function(BufferReader_) {
    BufferReader$1 = BufferReader_;
    Reader$1.create = create();
    BufferReader$1._configure();

    var fn = util$2.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util$2.merge(Reader$1.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};

var reader_buffer = BufferReader;

// extends Reader
var Reader = reader;
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util$1 = minimal$1;

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util$1.Buffer)
        BufferReader.prototype._slice = util$1.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();

var rpc = {};

var service = Service;

var util = minimal$1;

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};

(function (exports) {

/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = service;
}(rpc));

var roots = {};

(function (exports) {
var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = writer;
protobuf.BufferWriter = writer_buffer;
protobuf.Reader       = reader;
protobuf.BufferReader = reader_buffer;

// Utility
protobuf.util         = minimal$1;
protobuf.rpc          = rpc;
protobuf.roots        = roots;
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();
}(indexMinimal));

var minimal = indexMinimal;

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/

var $protobuf = minimal;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Action = (function() {

    /**
     * Properties of an Action.
     * @exports IAction
     * @interface IAction
     * @property {string|null} [id] Action id
     * @property {ISetDevice|null} [setDevice] Action setDevice
     * @property {IRemoveDevice|null} [removeDevice] Action removeDevice
     * @property {ISetWebRTCStream|null} [setWebRtcStream] Action setWebRtcStream
     * @property {ISetActivityStream|null} [setActivity] Action setActivity
     * @property {ISetHost|null} [setHost] Action setHost
     * @property {IAddTrophy|null} [addTrophy] Action addTrophy
     * @property {ISetContent|null} [setContent] Action setContent
     * @property {ISendChatMessage|null} [sendChatMessage] Action sendChatMessage
     * @property {IUserJoin|null} [userJoin] Action userJoin
     * @property {IUserLeave|null} [userLeave] Action userLeave
     * @property {IEndClass|null} [endClass] Action endClass
     * @property {IHeartbeat|null} [heartbeat] Action heartbeat
     */

    /**
     * Constructs a new Action.
     * @exports Action
     * @classdesc Represents an Action.
     * @implements IAction
     * @constructor
     * @param {IAction=} [properties] Properties to set
     */
    function Action(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Action id.
     * @member {string} id
     * @memberof Action
     * @instance
     */
    Action.prototype.id = "";

    /**
     * Action setDevice.
     * @member {ISetDevice|null|undefined} setDevice
     * @memberof Action
     * @instance
     */
    Action.prototype.setDevice = null;

    /**
     * Action removeDevice.
     * @member {IRemoveDevice|null|undefined} removeDevice
     * @memberof Action
     * @instance
     */
    Action.prototype.removeDevice = null;

    /**
     * Action setWebRtcStream.
     * @member {ISetWebRTCStream|null|undefined} setWebRtcStream
     * @memberof Action
     * @instance
     */
    Action.prototype.setWebRtcStream = null;

    /**
     * Action setActivity.
     * @member {ISetActivityStream|null|undefined} setActivity
     * @memberof Action
     * @instance
     */
    Action.prototype.setActivity = null;

    /**
     * Action setHost.
     * @member {ISetHost|null|undefined} setHost
     * @memberof Action
     * @instance
     */
    Action.prototype.setHost = null;

    /**
     * Action addTrophy.
     * @member {IAddTrophy|null|undefined} addTrophy
     * @memberof Action
     * @instance
     */
    Action.prototype.addTrophy = null;

    /**
     * Action setContent.
     * @member {ISetContent|null|undefined} setContent
     * @memberof Action
     * @instance
     */
    Action.prototype.setContent = null;

    /**
     * Action sendChatMessage.
     * @member {ISendChatMessage|null|undefined} sendChatMessage
     * @memberof Action
     * @instance
     */
    Action.prototype.sendChatMessage = null;

    /**
     * Action userJoin.
     * @member {IUserJoin|null|undefined} userJoin
     * @memberof Action
     * @instance
     */
    Action.prototype.userJoin = null;

    /**
     * Action userLeave.
     * @member {IUserLeave|null|undefined} userLeave
     * @memberof Action
     * @instance
     */
    Action.prototype.userLeave = null;

    /**
     * Action endClass.
     * @member {IEndClass|null|undefined} endClass
     * @memberof Action
     * @instance
     */
    Action.prototype.endClass = null;

    /**
     * Action heartbeat.
     * @member {IHeartbeat|null|undefined} heartbeat
     * @memberof Action
     * @instance
     */
    Action.prototype.heartbeat = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Action action.
     * @member {"setDevice"|"removeDevice"|"setWebRtcStream"|"setActivity"|"setHost"|"addTrophy"|"setContent"|"sendChatMessage"|"userJoin"|"userLeave"|"endClass"|"heartbeat"|undefined} action
     * @memberof Action
     * @instance
     */
    Object.defineProperty(Action.prototype, "action", {
        get: $util.oneOfGetter($oneOfFields = ["setDevice", "removeDevice", "setWebRtcStream", "setActivity", "setHost", "addTrophy", "setContent", "sendChatMessage", "userJoin", "userLeave", "endClass", "heartbeat"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Action instance using the specified properties.
     * @function create
     * @memberof Action
     * @static
     * @param {IAction=} [properties] Properties to set
     * @returns {Action} Action instance
     */
    Action.create = function create(properties) {
        return new Action(properties);
    };

    /**
     * Encodes the specified Action message. Does not implicitly {@link Action.verify|verify} messages.
     * @function encode
     * @memberof Action
     * @static
     * @param {IAction} message Action message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Action.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.heartbeat != null && Object.hasOwnProperty.call(message, "heartbeat"))
            $root.Heartbeat.encode(message.heartbeat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.setDevice != null && Object.hasOwnProperty.call(message, "setDevice"))
            $root.SetDevice.encode(message.setDevice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.removeDevice != null && Object.hasOwnProperty.call(message, "removeDevice"))
            $root.RemoveDevice.encode(message.removeDevice, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.setWebRtcStream != null && Object.hasOwnProperty.call(message, "setWebRtcStream"))
            $root.SetWebRTCStream.encode(message.setWebRtcStream, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.setActivity != null && Object.hasOwnProperty.call(message, "setActivity"))
            $root.SetActivityStream.encode(message.setActivity, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.setHost != null && Object.hasOwnProperty.call(message, "setHost"))
            $root.SetHost.encode(message.setHost, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.addTrophy != null && Object.hasOwnProperty.call(message, "addTrophy"))
            $root.AddTrophy.encode(message.addTrophy, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.setContent != null && Object.hasOwnProperty.call(message, "setContent"))
            $root.SetContent.encode(message.setContent, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.sendChatMessage != null && Object.hasOwnProperty.call(message, "sendChatMessage"))
            $root.SendChatMessage.encode(message.sendChatMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.userJoin != null && Object.hasOwnProperty.call(message, "userJoin"))
            $root.UserJoin.encode(message.userJoin, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.userLeave != null && Object.hasOwnProperty.call(message, "userLeave"))
            $root.UserLeave.encode(message.userLeave, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.endClass != null && Object.hasOwnProperty.call(message, "endClass"))
            $root.EndClass.encode(message.endClass, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Action message, length delimited. Does not implicitly {@link Action.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Action
     * @static
     * @param {IAction} message Action message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Action.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Action message from the specified reader or buffer.
     * @function decode
     * @memberof Action
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Action} Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Action.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Action();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 3:
                message.setDevice = $root.SetDevice.decode(reader, reader.uint32());
                break;
            case 4:
                message.removeDevice = $root.RemoveDevice.decode(reader, reader.uint32());
                break;
            case 5:
                message.setWebRtcStream = $root.SetWebRTCStream.decode(reader, reader.uint32());
                break;
            case 6:
                message.setActivity = $root.SetActivityStream.decode(reader, reader.uint32());
                break;
            case 7:
                message.setHost = $root.SetHost.decode(reader, reader.uint32());
                break;
            case 8:
                message.addTrophy = $root.AddTrophy.decode(reader, reader.uint32());
                break;
            case 9:
                message.setContent = $root.SetContent.decode(reader, reader.uint32());
                break;
            case 10:
                message.sendChatMessage = $root.SendChatMessage.decode(reader, reader.uint32());
                break;
            case 11:
                message.userJoin = $root.UserJoin.decode(reader, reader.uint32());
                break;
            case 12:
                message.userLeave = $root.UserLeave.decode(reader, reader.uint32());
                break;
            case 13:
                message.endClass = $root.EndClass.decode(reader, reader.uint32());
                break;
            case 2:
                message.heartbeat = $root.Heartbeat.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Action message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Action
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Action} Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Action.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Action message.
     * @function verify
     * @memberof Action
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Action.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.setDevice != null && message.hasOwnProperty("setDevice")) {
            properties.action = 1;
            {
                var error = $root.SetDevice.verify(message.setDevice);
                if (error)
                    return "setDevice." + error;
            }
        }
        if (message.removeDevice != null && message.hasOwnProperty("removeDevice")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.RemoveDevice.verify(message.removeDevice);
                if (error)
                    return "removeDevice." + error;
            }
        }
        if (message.setWebRtcStream != null && message.hasOwnProperty("setWebRtcStream")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetWebRTCStream.verify(message.setWebRtcStream);
                if (error)
                    return "setWebRtcStream." + error;
            }
        }
        if (message.setActivity != null && message.hasOwnProperty("setActivity")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetActivityStream.verify(message.setActivity);
                if (error)
                    return "setActivity." + error;
            }
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetHost.verify(message.setHost);
                if (error)
                    return "setHost." + error;
            }
        }
        if (message.addTrophy != null && message.hasOwnProperty("addTrophy")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.AddTrophy.verify(message.addTrophy);
                if (error)
                    return "addTrophy." + error;
            }
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetContent.verify(message.setContent);
                if (error)
                    return "setContent." + error;
            }
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SendChatMessage.verify(message.sendChatMessage);
                if (error)
                    return "sendChatMessage." + error;
            }
        }
        if (message.userJoin != null && message.hasOwnProperty("userJoin")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.UserJoin.verify(message.userJoin);
                if (error)
                    return "userJoin." + error;
            }
        }
        if (message.userLeave != null && message.hasOwnProperty("userLeave")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.UserLeave.verify(message.userLeave);
                if (error)
                    return "userLeave." + error;
            }
        }
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.EndClass.verify(message.endClass);
                if (error)
                    return "endClass." + error;
            }
        }
        if (message.heartbeat != null && message.hasOwnProperty("heartbeat")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.Heartbeat.verify(message.heartbeat);
                if (error)
                    return "heartbeat." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Action message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Action
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Action} Action
     */
    Action.fromObject = function fromObject(object) {
        if (object instanceof $root.Action)
            return object;
        var message = new $root.Action();
        if (object.id != null)
            message.id = String(object.id);
        if (object.setDevice != null) {
            if (typeof object.setDevice !== "object")
                throw TypeError(".Action.setDevice: object expected");
            message.setDevice = $root.SetDevice.fromObject(object.setDevice);
        }
        if (object.removeDevice != null) {
            if (typeof object.removeDevice !== "object")
                throw TypeError(".Action.removeDevice: object expected");
            message.removeDevice = $root.RemoveDevice.fromObject(object.removeDevice);
        }
        if (object.setWebRtcStream != null) {
            if (typeof object.setWebRtcStream !== "object")
                throw TypeError(".Action.setWebRtcStream: object expected");
            message.setWebRtcStream = $root.SetWebRTCStream.fromObject(object.setWebRtcStream);
        }
        if (object.setActivity != null) {
            if (typeof object.setActivity !== "object")
                throw TypeError(".Action.setActivity: object expected");
            message.setActivity = $root.SetActivityStream.fromObject(object.setActivity);
        }
        if (object.setHost != null) {
            if (typeof object.setHost !== "object")
                throw TypeError(".Action.setHost: object expected");
            message.setHost = $root.SetHost.fromObject(object.setHost);
        }
        if (object.addTrophy != null) {
            if (typeof object.addTrophy !== "object")
                throw TypeError(".Action.addTrophy: object expected");
            message.addTrophy = $root.AddTrophy.fromObject(object.addTrophy);
        }
        if (object.setContent != null) {
            if (typeof object.setContent !== "object")
                throw TypeError(".Action.setContent: object expected");
            message.setContent = $root.SetContent.fromObject(object.setContent);
        }
        if (object.sendChatMessage != null) {
            if (typeof object.sendChatMessage !== "object")
                throw TypeError(".Action.sendChatMessage: object expected");
            message.sendChatMessage = $root.SendChatMessage.fromObject(object.sendChatMessage);
        }
        if (object.userJoin != null) {
            if (typeof object.userJoin !== "object")
                throw TypeError(".Action.userJoin: object expected");
            message.userJoin = $root.UserJoin.fromObject(object.userJoin);
        }
        if (object.userLeave != null) {
            if (typeof object.userLeave !== "object")
                throw TypeError(".Action.userLeave: object expected");
            message.userLeave = $root.UserLeave.fromObject(object.userLeave);
        }
        if (object.endClass != null) {
            if (typeof object.endClass !== "object")
                throw TypeError(".Action.endClass: object expected");
            message.endClass = $root.EndClass.fromObject(object.endClass);
        }
        if (object.heartbeat != null) {
            if (typeof object.heartbeat !== "object")
                throw TypeError(".Action.heartbeat: object expected");
            message.heartbeat = $root.Heartbeat.fromObject(object.heartbeat);
        }
        return message;
    };

    /**
     * Creates a plain object from an Action message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Action
     * @static
     * @param {Action} message Action
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Action.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.heartbeat != null && message.hasOwnProperty("heartbeat")) {
            object.heartbeat = $root.Heartbeat.toObject(message.heartbeat, options);
            if (options.oneofs)
                object.action = "heartbeat";
        }
        if (message.setDevice != null && message.hasOwnProperty("setDevice")) {
            object.setDevice = $root.SetDevice.toObject(message.setDevice, options);
            if (options.oneofs)
                object.action = "setDevice";
        }
        if (message.removeDevice != null && message.hasOwnProperty("removeDevice")) {
            object.removeDevice = $root.RemoveDevice.toObject(message.removeDevice, options);
            if (options.oneofs)
                object.action = "removeDevice";
        }
        if (message.setWebRtcStream != null && message.hasOwnProperty("setWebRtcStream")) {
            object.setWebRtcStream = $root.SetWebRTCStream.toObject(message.setWebRtcStream, options);
            if (options.oneofs)
                object.action = "setWebRtcStream";
        }
        if (message.setActivity != null && message.hasOwnProperty("setActivity")) {
            object.setActivity = $root.SetActivityStream.toObject(message.setActivity, options);
            if (options.oneofs)
                object.action = "setActivity";
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            object.setHost = $root.SetHost.toObject(message.setHost, options);
            if (options.oneofs)
                object.action = "setHost";
        }
        if (message.addTrophy != null && message.hasOwnProperty("addTrophy")) {
            object.addTrophy = $root.AddTrophy.toObject(message.addTrophy, options);
            if (options.oneofs)
                object.action = "addTrophy";
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            object.setContent = $root.SetContent.toObject(message.setContent, options);
            if (options.oneofs)
                object.action = "setContent";
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            object.sendChatMessage = $root.SendChatMessage.toObject(message.sendChatMessage, options);
            if (options.oneofs)
                object.action = "sendChatMessage";
        }
        if (message.userJoin != null && message.hasOwnProperty("userJoin")) {
            object.userJoin = $root.UserJoin.toObject(message.userJoin, options);
            if (options.oneofs)
                object.action = "userJoin";
        }
        if (message.userLeave != null && message.hasOwnProperty("userLeave")) {
            object.userLeave = $root.UserLeave.toObject(message.userLeave, options);
            if (options.oneofs)
                object.action = "userLeave";
        }
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            object.endClass = $root.EndClass.toObject(message.endClass, options);
            if (options.oneofs)
                object.action = "endClass";
        }
        return object;
    };

    /**
     * Converts this Action to JSON.
     * @function toJSON
     * @memberof Action
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Action.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Action;
})();

$root.ActionAcknowledgement = (function() {

    /**
     * Properties of an ActionAcknowledgement.
     * @exports IActionAcknowledgement
     * @interface IActionAcknowledgement
     * @property {string|null} [id] ActionAcknowledgement id
     * @property {string|null} [error] ActionAcknowledgement error
     * @property {number|null} [code] ActionAcknowledgement code
     */

    /**
     * Constructs a new ActionAcknowledgement.
     * @exports ActionAcknowledgement
     * @classdesc Represents an ActionAcknowledgement.
     * @implements IActionAcknowledgement
     * @constructor
     * @param {IActionAcknowledgement=} [properties] Properties to set
     */
    function ActionAcknowledgement(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActionAcknowledgement id.
     * @member {string} id
     * @memberof ActionAcknowledgement
     * @instance
     */
    ActionAcknowledgement.prototype.id = "";

    /**
     * ActionAcknowledgement error.
     * @member {string} error
     * @memberof ActionAcknowledgement
     * @instance
     */
    ActionAcknowledgement.prototype.error = "";

    /**
     * ActionAcknowledgement code.
     * @member {number} code
     * @memberof ActionAcknowledgement
     * @instance
     */
    ActionAcknowledgement.prototype.code = 0;

    /**
     * Creates a new ActionAcknowledgement instance using the specified properties.
     * @function create
     * @memberof ActionAcknowledgement
     * @static
     * @param {IActionAcknowledgement=} [properties] Properties to set
     * @returns {ActionAcknowledgement} ActionAcknowledgement instance
     */
    ActionAcknowledgement.create = function create(properties) {
        return new ActionAcknowledgement(properties);
    };

    /**
     * Encodes the specified ActionAcknowledgement message. Does not implicitly {@link ActionAcknowledgement.verify|verify} messages.
     * @function encode
     * @memberof ActionAcknowledgement
     * @static
     * @param {IActionAcknowledgement} message ActionAcknowledgement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionAcknowledgement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.code);
        return writer;
    };

    /**
     * Encodes the specified ActionAcknowledgement message, length delimited. Does not implicitly {@link ActionAcknowledgement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActionAcknowledgement
     * @static
     * @param {IActionAcknowledgement} message ActionAcknowledgement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionAcknowledgement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActionAcknowledgement message from the specified reader or buffer.
     * @function decode
     * @memberof ActionAcknowledgement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActionAcknowledgement} ActionAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionAcknowledgement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionAcknowledgement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.error = reader.string();
                break;
            case 3:
                message.code = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActionAcknowledgement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActionAcknowledgement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActionAcknowledgement} ActionAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionAcknowledgement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActionAcknowledgement message.
     * @function verify
     * @memberof ActionAcknowledgement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActionAcknowledgement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };

    /**
     * Creates an ActionAcknowledgement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActionAcknowledgement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActionAcknowledgement} ActionAcknowledgement
     */
    ActionAcknowledgement.fromObject = function fromObject(object) {
        if (object instanceof $root.ActionAcknowledgement)
            return object;
        var message = new $root.ActionAcknowledgement();
        if (object.id != null)
            message.id = String(object.id);
        if (object.error != null)
            message.error = String(object.error);
        if (object.code != null)
            message.code = object.code >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an ActionAcknowledgement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActionAcknowledgement
     * @static
     * @param {ActionAcknowledgement} message ActionAcknowledgement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActionAcknowledgement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.error = "";
            object.code = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this ActionAcknowledgement to JSON.
     * @function toJSON
     * @memberof ActionAcknowledgement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActionAcknowledgement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActionAcknowledgement;
})();

$root.UserJoin = (function() {

    /**
     * Properties of a UserJoin.
     * @exports IUserJoin
     * @interface IUserJoin
     */

    /**
     * Constructs a new UserJoin.
     * @exports UserJoin
     * @classdesc Represents a UserJoin.
     * @implements IUserJoin
     * @constructor
     * @param {IUserJoin=} [properties] Properties to set
     */
    function UserJoin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserJoin instance using the specified properties.
     * @function create
     * @memberof UserJoin
     * @static
     * @param {IUserJoin=} [properties] Properties to set
     * @returns {UserJoin} UserJoin instance
     */
    UserJoin.create = function create(properties) {
        return new UserJoin(properties);
    };

    /**
     * Encodes the specified UserJoin message. Does not implicitly {@link UserJoin.verify|verify} messages.
     * @function encode
     * @memberof UserJoin
     * @static
     * @param {IUserJoin} message UserJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserJoin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserJoin message, length delimited. Does not implicitly {@link UserJoin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserJoin
     * @static
     * @param {IUserJoin} message UserJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserJoin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserJoin message from the specified reader or buffer.
     * @function decode
     * @memberof UserJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserJoin} UserJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserJoin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserJoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserJoin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserJoin} UserJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserJoin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserJoin message.
     * @function verify
     * @memberof UserJoin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserJoin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserJoin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserJoin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserJoin} UserJoin
     */
    UserJoin.fromObject = function fromObject(object) {
        if (object instanceof $root.UserJoin)
            return object;
        return new $root.UserJoin();
    };

    /**
     * Creates a plain object from a UserJoin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserJoin
     * @static
     * @param {UserJoin} message UserJoin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserJoin.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserJoin to JSON.
     * @function toJSON
     * @memberof UserJoin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserJoin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserJoin;
})();

$root.UserLeave = (function() {

    /**
     * Properties of a UserLeave.
     * @exports IUserLeave
     * @interface IUserLeave
     */

    /**
     * Constructs a new UserLeave.
     * @exports UserLeave
     * @classdesc Represents a UserLeave.
     * @implements IUserLeave
     * @constructor
     * @param {IUserLeave=} [properties] Properties to set
     */
    function UserLeave(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserLeave instance using the specified properties.
     * @function create
     * @memberof UserLeave
     * @static
     * @param {IUserLeave=} [properties] Properties to set
     * @returns {UserLeave} UserLeave instance
     */
    UserLeave.create = function create(properties) {
        return new UserLeave(properties);
    };

    /**
     * Encodes the specified UserLeave message. Does not implicitly {@link UserLeave.verify|verify} messages.
     * @function encode
     * @memberof UserLeave
     * @static
     * @param {IUserLeave} message UserLeave message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserLeave.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link UserLeave.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserLeave
     * @static
     * @param {IUserLeave} message UserLeave message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserLeave message from the specified reader or buffer.
     * @function decode
     * @memberof UserLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserLeave} UserLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserLeave.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserLeave();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserLeave message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserLeave} UserLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserLeave.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserLeave message.
     * @function verify
     * @memberof UserLeave
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserLeave.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserLeave
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserLeave} UserLeave
     */
    UserLeave.fromObject = function fromObject(object) {
        if (object instanceof $root.UserLeave)
            return object;
        return new $root.UserLeave();
    };

    /**
     * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserLeave
     * @static
     * @param {UserLeave} message UserLeave
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserLeave.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserLeave to JSON.
     * @function toJSON
     * @memberof UserLeave
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserLeave.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserLeave;
})();

$root.EndClass = (function() {

    /**
     * Properties of an EndClass.
     * @exports IEndClass
     * @interface IEndClass
     */

    /**
     * Constructs a new EndClass.
     * @exports EndClass
     * @classdesc Represents an EndClass.
     * @implements IEndClass
     * @constructor
     * @param {IEndClass=} [properties] Properties to set
     */
    function EndClass(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EndClass instance using the specified properties.
     * @function create
     * @memberof EndClass
     * @static
     * @param {IEndClass=} [properties] Properties to set
     * @returns {EndClass} EndClass instance
     */
    EndClass.create = function create(properties) {
        return new EndClass(properties);
    };

    /**
     * Encodes the specified EndClass message. Does not implicitly {@link EndClass.verify|verify} messages.
     * @function encode
     * @memberof EndClass
     * @static
     * @param {IEndClass} message EndClass message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClass.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EndClass message, length delimited. Does not implicitly {@link EndClass.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EndClass
     * @static
     * @param {IEndClass} message EndClass message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClass.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EndClass message from the specified reader or buffer.
     * @function decode
     * @memberof EndClass
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EndClass} EndClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClass.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EndClass();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EndClass message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EndClass
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EndClass} EndClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClass.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EndClass message.
     * @function verify
     * @memberof EndClass
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EndClass.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EndClass message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EndClass
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EndClass} EndClass
     */
    EndClass.fromObject = function fromObject(object) {
        if (object instanceof $root.EndClass)
            return object;
        return new $root.EndClass();
    };

    /**
     * Creates a plain object from an EndClass message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EndClass
     * @static
     * @param {EndClass} message EndClass
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EndClass.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EndClass to JSON.
     * @function toJSON
     * @memberof EndClass
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EndClass.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EndClass;
})();

$root.Heartbeat = (function() {

    /**
     * Properties of a Heartbeat.
     * @exports IHeartbeat
     * @interface IHeartbeat
     */

    /**
     * Constructs a new Heartbeat.
     * @exports Heartbeat
     * @classdesc Represents a Heartbeat.
     * @implements IHeartbeat
     * @constructor
     * @param {IHeartbeat=} [properties] Properties to set
     */
    function Heartbeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Heartbeat instance using the specified properties.
     * @function create
     * @memberof Heartbeat
     * @static
     * @param {IHeartbeat=} [properties] Properties to set
     * @returns {Heartbeat} Heartbeat instance
     */
    Heartbeat.create = function create(properties) {
        return new Heartbeat(properties);
    };

    /**
     * Encodes the specified Heartbeat message. Does not implicitly {@link Heartbeat.verify|verify} messages.
     * @function encode
     * @memberof Heartbeat
     * @static
     * @param {IHeartbeat} message Heartbeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heartbeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link Heartbeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Heartbeat
     * @static
     * @param {IHeartbeat} message Heartbeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heartbeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Heartbeat message from the specified reader or buffer.
     * @function decode
     * @memberof Heartbeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Heartbeat} Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heartbeat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Heartbeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Heartbeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Heartbeat} Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heartbeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Heartbeat message.
     * @function verify
     * @memberof Heartbeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Heartbeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Heartbeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Heartbeat} Heartbeat
     */
    Heartbeat.fromObject = function fromObject(object) {
        if (object instanceof $root.Heartbeat)
            return object;
        return new $root.Heartbeat();
    };

    /**
     * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Heartbeat
     * @static
     * @param {Heartbeat} message Heartbeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Heartbeat.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Heartbeat to JSON.
     * @function toJSON
     * @memberof Heartbeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Heartbeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Heartbeat;
})();

$root.SetDevice = (function() {

    /**
     * Properties of a SetDevice.
     * @exports ISetDevice
     * @interface ISetDevice
     * @property {string|null} [deviceId] SetDevice deviceId
     * @property {IDevice|null} [device] SetDevice device
     */

    /**
     * Constructs a new SetDevice.
     * @exports SetDevice
     * @classdesc Represents a SetDevice.
     * @implements ISetDevice
     * @constructor
     * @param {ISetDevice=} [properties] Properties to set
     */
    function SetDevice(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetDevice deviceId.
     * @member {string} deviceId
     * @memberof SetDevice
     * @instance
     */
    SetDevice.prototype.deviceId = "";

    /**
     * SetDevice device.
     * @member {IDevice|null|undefined} device
     * @memberof SetDevice
     * @instance
     */
    SetDevice.prototype.device = null;

    /**
     * Creates a new SetDevice instance using the specified properties.
     * @function create
     * @memberof SetDevice
     * @static
     * @param {ISetDevice=} [properties] Properties to set
     * @returns {SetDevice} SetDevice instance
     */
    SetDevice.create = function create(properties) {
        return new SetDevice(properties);
    };

    /**
     * Encodes the specified SetDevice message. Does not implicitly {@link SetDevice.verify|verify} messages.
     * @function encode
     * @memberof SetDevice
     * @static
     * @param {ISetDevice} message SetDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.device != null && Object.hasOwnProperty.call(message, "device"))
            $root.Device.encode(message.device, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetDevice message, length delimited. Does not implicitly {@link SetDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetDevice
     * @static
     * @param {ISetDevice} message SetDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetDevice message from the specified reader or buffer.
     * @function decode
     * @memberof SetDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetDevice} SetDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                message.device = $root.Device.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetDevice} SetDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetDevice message.
     * @function verify
     * @memberof SetDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.device != null && message.hasOwnProperty("device")) {
            var error = $root.Device.verify(message.device);
            if (error)
                return "device." + error;
        }
        return null;
    };

    /**
     * Creates a SetDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetDevice} SetDevice
     */
    SetDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.SetDevice)
            return object;
        var message = new $root.SetDevice();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.device != null) {
            if (typeof object.device !== "object")
                throw TypeError(".SetDevice.device: object expected");
            message.device = $root.Device.fromObject(object.device);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetDevice
     * @static
     * @param {SetDevice} message SetDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetDevice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.device = null;
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.device != null && message.hasOwnProperty("device"))
            object.device = $root.Device.toObject(message.device, options);
        return object;
    };

    /**
     * Converts this SetDevice to JSON.
     * @function toJSON
     * @memberof SetDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetDevice;
})();

$root.RemoveDevice = (function() {

    /**
     * Properties of a RemoveDevice.
     * @exports IRemoveDevice
     * @interface IRemoveDevice
     * @property {string|null} [id] RemoveDevice id
     */

    /**
     * Constructs a new RemoveDevice.
     * @exports RemoveDevice
     * @classdesc Represents a RemoveDevice.
     * @implements IRemoveDevice
     * @constructor
     * @param {IRemoveDevice=} [properties] Properties to set
     */
    function RemoveDevice(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveDevice id.
     * @member {string} id
     * @memberof RemoveDevice
     * @instance
     */
    RemoveDevice.prototype.id = "";

    /**
     * Creates a new RemoveDevice instance using the specified properties.
     * @function create
     * @memberof RemoveDevice
     * @static
     * @param {IRemoveDevice=} [properties] Properties to set
     * @returns {RemoveDevice} RemoveDevice instance
     */
    RemoveDevice.create = function create(properties) {
        return new RemoveDevice(properties);
    };

    /**
     * Encodes the specified RemoveDevice message. Does not implicitly {@link RemoveDevice.verify|verify} messages.
     * @function encode
     * @memberof RemoveDevice
     * @static
     * @param {IRemoveDevice} message RemoveDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified RemoveDevice message, length delimited. Does not implicitly {@link RemoveDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveDevice
     * @static
     * @param {IRemoveDevice} message RemoveDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveDevice message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveDevice} RemoveDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RemoveDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveDevice} RemoveDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveDevice message.
     * @function verify
     * @memberof RemoveDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a RemoveDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveDevice} RemoveDevice
     */
    RemoveDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveDevice)
            return object;
        var message = new $root.RemoveDevice();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a RemoveDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveDevice
     * @static
     * @param {RemoveDevice} message RemoveDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveDevice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this RemoveDevice to JSON.
     * @function toJSON
     * @memberof RemoveDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RemoveDevice;
})();

$root.SetWebRTCStream = (function() {

    /**
     * Properties of a SetWebRTCStream.
     * @exports ISetWebRTCStream
     * @interface ISetWebRTCStream
     * @property {string|null} [deviceId] SetWebRTCStream deviceId
     * @property {Array.<IWebRTCStream>|null} [streams] SetWebRTCStream streams
     */

    /**
     * Constructs a new SetWebRTCStream.
     * @exports SetWebRTCStream
     * @classdesc Represents a SetWebRTCStream.
     * @implements ISetWebRTCStream
     * @constructor
     * @param {ISetWebRTCStream=} [properties] Properties to set
     */
    function SetWebRTCStream(properties) {
        this.streams = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetWebRTCStream deviceId.
     * @member {string} deviceId
     * @memberof SetWebRTCStream
     * @instance
     */
    SetWebRTCStream.prototype.deviceId = "";

    /**
     * SetWebRTCStream streams.
     * @member {Array.<IWebRTCStream>} streams
     * @memberof SetWebRTCStream
     * @instance
     */
    SetWebRTCStream.prototype.streams = $util.emptyArray;

    /**
     * Creates a new SetWebRTCStream instance using the specified properties.
     * @function create
     * @memberof SetWebRTCStream
     * @static
     * @param {ISetWebRTCStream=} [properties] Properties to set
     * @returns {SetWebRTCStream} SetWebRTCStream instance
     */
    SetWebRTCStream.create = function create(properties) {
        return new SetWebRTCStream(properties);
    };

    /**
     * Encodes the specified SetWebRTCStream message. Does not implicitly {@link SetWebRTCStream.verify|verify} messages.
     * @function encode
     * @memberof SetWebRTCStream
     * @static
     * @param {ISetWebRTCStream} message SetWebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetWebRTCStream.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.streams != null && message.streams.length)
            for (var i = 0; i < message.streams.length; ++i)
                $root.WebRTCStream.encode(message.streams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetWebRTCStream message, length delimited. Does not implicitly {@link SetWebRTCStream.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetWebRTCStream
     * @static
     * @param {ISetWebRTCStream} message SetWebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetWebRTCStream.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetWebRTCStream message from the specified reader or buffer.
     * @function decode
     * @memberof SetWebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetWebRTCStream} SetWebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetWebRTCStream.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetWebRTCStream();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                if (!(message.streams && message.streams.length))
                    message.streams = [];
                message.streams.push($root.WebRTCStream.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetWebRTCStream message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetWebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetWebRTCStream} SetWebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetWebRTCStream.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetWebRTCStream message.
     * @function verify
     * @memberof SetWebRTCStream
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetWebRTCStream.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.streams != null && message.hasOwnProperty("streams")) {
            if (!Array.isArray(message.streams))
                return "streams: array expected";
            for (var i = 0; i < message.streams.length; ++i) {
                var error = $root.WebRTCStream.verify(message.streams[i]);
                if (error)
                    return "streams." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SetWebRTCStream message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetWebRTCStream
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetWebRTCStream} SetWebRTCStream
     */
    SetWebRTCStream.fromObject = function fromObject(object) {
        if (object instanceof $root.SetWebRTCStream)
            return object;
        var message = new $root.SetWebRTCStream();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.streams) {
            if (!Array.isArray(object.streams))
                throw TypeError(".SetWebRTCStream.streams: array expected");
            message.streams = [];
            for (var i = 0; i < object.streams.length; ++i) {
                if (typeof object.streams[i] !== "object")
                    throw TypeError(".SetWebRTCStream.streams: object expected");
                message.streams[i] = $root.WebRTCStream.fromObject(object.streams[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SetWebRTCStream message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetWebRTCStream
     * @static
     * @param {SetWebRTCStream} message SetWebRTCStream
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetWebRTCStream.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.streams = [];
        if (options.defaults)
            object.deviceId = "";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.streams && message.streams.length) {
            object.streams = [];
            for (var j = 0; j < message.streams.length; ++j)
                object.streams[j] = $root.WebRTCStream.toObject(message.streams[j], options);
        }
        return object;
    };

    /**
     * Converts this SetWebRTCStream to JSON.
     * @function toJSON
     * @memberof SetWebRTCStream
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetWebRTCStream.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetWebRTCStream;
})();

$root.SetActivityStream = (function() {

    /**
     * Properties of a SetActivityStream.
     * @exports ISetActivityStream
     * @interface ISetActivityStream
     * @property {string|null} [deviceId] SetActivityStream deviceId
     * @property {string|null} [activityId] SetActivityStream activityId
     * @property {string|null} [activityStreamId] SetActivityStream activityStreamId
     */

    /**
     * Constructs a new SetActivityStream.
     * @exports SetActivityStream
     * @classdesc Represents a SetActivityStream.
     * @implements ISetActivityStream
     * @constructor
     * @param {ISetActivityStream=} [properties] Properties to set
     */
    function SetActivityStream(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetActivityStream deviceId.
     * @member {string} deviceId
     * @memberof SetActivityStream
     * @instance
     */
    SetActivityStream.prototype.deviceId = "";

    /**
     * SetActivityStream activityId.
     * @member {string} activityId
     * @memberof SetActivityStream
     * @instance
     */
    SetActivityStream.prototype.activityId = "";

    /**
     * SetActivityStream activityStreamId.
     * @member {string} activityStreamId
     * @memberof SetActivityStream
     * @instance
     */
    SetActivityStream.prototype.activityStreamId = "";

    /**
     * Creates a new SetActivityStream instance using the specified properties.
     * @function create
     * @memberof SetActivityStream
     * @static
     * @param {ISetActivityStream=} [properties] Properties to set
     * @returns {SetActivityStream} SetActivityStream instance
     */
    SetActivityStream.create = function create(properties) {
        return new SetActivityStream(properties);
    };

    /**
     * Encodes the specified SetActivityStream message. Does not implicitly {@link SetActivityStream.verify|verify} messages.
     * @function encode
     * @memberof SetActivityStream
     * @static
     * @param {ISetActivityStream} message SetActivityStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivityStream.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.activityId != null && Object.hasOwnProperty.call(message, "activityId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.activityId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.activityStreamId);
        return writer;
    };

    /**
     * Encodes the specified SetActivityStream message, length delimited. Does not implicitly {@link SetActivityStream.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetActivityStream
     * @static
     * @param {ISetActivityStream} message SetActivityStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivityStream.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetActivityStream message from the specified reader or buffer.
     * @function decode
     * @memberof SetActivityStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetActivityStream} SetActivityStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivityStream.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetActivityStream();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                message.activityId = reader.string();
                break;
            case 3:
                message.activityStreamId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetActivityStream message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetActivityStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetActivityStream} SetActivityStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivityStream.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetActivityStream message.
     * @function verify
     * @memberof SetActivityStream
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetActivityStream.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            if (!$util.isString(message.activityId))
                return "activityId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        return null;
    };

    /**
     * Creates a SetActivityStream message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetActivityStream
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetActivityStream} SetActivityStream
     */
    SetActivityStream.fromObject = function fromObject(object) {
        if (object instanceof $root.SetActivityStream)
            return object;
        var message = new $root.SetActivityStream();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.activityId != null)
            message.activityId = String(object.activityId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        return message;
    };

    /**
     * Creates a plain object from a SetActivityStream message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetActivityStream
     * @static
     * @param {SetActivityStream} message SetActivityStream
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetActivityStream.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.activityId = "";
            object.activityStreamId = "";
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            object.activityId = message.activityId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        return object;
    };

    /**
     * Converts this SetActivityStream to JSON.
     * @function toJSON
     * @memberof SetActivityStream
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetActivityStream.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetActivityStream;
})();

$root.SetHost = (function() {

    /**
     * Properties of a SetHost.
     * @exports ISetHost
     * @interface ISetHost
     * @property {string|null} [id] SetHost id
     */

    /**
     * Constructs a new SetHost.
     * @exports SetHost
     * @classdesc Represents a SetHost.
     * @implements ISetHost
     * @constructor
     * @param {ISetHost=} [properties] Properties to set
     */
    function SetHost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetHost id.
     * @member {string} id
     * @memberof SetHost
     * @instance
     */
    SetHost.prototype.id = "";

    /**
     * Creates a new SetHost instance using the specified properties.
     * @function create
     * @memberof SetHost
     * @static
     * @param {ISetHost=} [properties] Properties to set
     * @returns {SetHost} SetHost instance
     */
    SetHost.create = function create(properties) {
        return new SetHost(properties);
    };

    /**
     * Encodes the specified SetHost message. Does not implicitly {@link SetHost.verify|verify} messages.
     * @function encode
     * @memberof SetHost
     * @static
     * @param {ISetHost} message SetHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified SetHost message, length delimited. Does not implicitly {@link SetHost.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetHost
     * @static
     * @param {ISetHost} message SetHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetHost message from the specified reader or buffer.
     * @function decode
     * @memberof SetHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetHost} SetHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHost.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetHost();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetHost message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetHost} SetHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetHost message.
     * @function verify
     * @memberof SetHost
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetHost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a SetHost message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetHost
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetHost} SetHost
     */
    SetHost.fromObject = function fromObject(object) {
        if (object instanceof $root.SetHost)
            return object;
        var message = new $root.SetHost();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a SetHost message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetHost
     * @static
     * @param {SetHost} message SetHost
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetHost.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this SetHost to JSON.
     * @function toJSON
     * @memberof SetHost
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetHost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetHost;
})();

$root.AddTrophy = (function() {

    /**
     * Properties of an AddTrophy.
     * @exports IAddTrophy
     * @interface IAddTrophy
     * @property {string|null} [trophyId] AddTrophy trophyId
     * @property {number|Long|null} [timestamp] AddTrophy timestamp
     * @property {string|null} [userId] AddTrophy userId
     */

    /**
     * Constructs a new AddTrophy.
     * @exports AddTrophy
     * @classdesc Represents an AddTrophy.
     * @implements IAddTrophy
     * @constructor
     * @param {IAddTrophy=} [properties] Properties to set
     */
    function AddTrophy(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddTrophy trophyId.
     * @member {string} trophyId
     * @memberof AddTrophy
     * @instance
     */
    AddTrophy.prototype.trophyId = "";

    /**
     * AddTrophy timestamp.
     * @member {number|Long} timestamp
     * @memberof AddTrophy
     * @instance
     */
    AddTrophy.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AddTrophy userId.
     * @member {string} userId
     * @memberof AddTrophy
     * @instance
     */
    AddTrophy.prototype.userId = "";

    /**
     * Creates a new AddTrophy instance using the specified properties.
     * @function create
     * @memberof AddTrophy
     * @static
     * @param {IAddTrophy=} [properties] Properties to set
     * @returns {AddTrophy} AddTrophy instance
     */
    AddTrophy.create = function create(properties) {
        return new AddTrophy(properties);
    };

    /**
     * Encodes the specified AddTrophy message. Does not implicitly {@link AddTrophy.verify|verify} messages.
     * @function encode
     * @memberof AddTrophy
     * @static
     * @param {IAddTrophy} message AddTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddTrophy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophyId != null && Object.hasOwnProperty.call(message, "trophyId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.trophyId);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified AddTrophy message, length delimited. Does not implicitly {@link AddTrophy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddTrophy
     * @static
     * @param {IAddTrophy} message AddTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddTrophy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddTrophy message from the specified reader or buffer.
     * @function decode
     * @memberof AddTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddTrophy} AddTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddTrophy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddTrophy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.trophyId = reader.string();
                break;
            case 2:
                message.timestamp = reader.uint64();
                break;
            case 3:
                message.userId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AddTrophy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddTrophy} AddTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddTrophy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddTrophy message.
     * @function verify
     * @memberof AddTrophy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddTrophy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trophyId != null && message.hasOwnProperty("trophyId"))
            if (!$util.isString(message.trophyId))
                return "trophyId: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        return null;
    };

    /**
     * Creates an AddTrophy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddTrophy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddTrophy} AddTrophy
     */
    AddTrophy.fromObject = function fromObject(object) {
        if (object instanceof $root.AddTrophy)
            return object;
        var message = new $root.AddTrophy();
        if (object.trophyId != null)
            message.trophyId = String(object.trophyId);
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from an AddTrophy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddTrophy
     * @static
     * @param {AddTrophy} message AddTrophy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddTrophy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.trophyId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.userId = "";
        }
        if (message.trophyId != null && message.hasOwnProperty("trophyId"))
            object.trophyId = message.trophyId;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this AddTrophy to JSON.
     * @function toJSON
     * @memberof AddTrophy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddTrophy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddTrophy;
})();

$root.SetContent = (function() {

    /**
     * Properties of a SetContent.
     * @exports ISetContent
     * @interface ISetContent
     * @property {IContent|null} [content] SetContent content
     */

    /**
     * Constructs a new SetContent.
     * @exports SetContent
     * @classdesc Represents a SetContent.
     * @implements ISetContent
     * @constructor
     * @param {ISetContent=} [properties] Properties to set
     */
    function SetContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetContent content.
     * @member {IContent|null|undefined} content
     * @memberof SetContent
     * @instance
     */
    SetContent.prototype.content = null;

    /**
     * Creates a new SetContent instance using the specified properties.
     * @function create
     * @memberof SetContent
     * @static
     * @param {ISetContent=} [properties] Properties to set
     * @returns {SetContent} SetContent instance
     */
    SetContent.create = function create(properties) {
        return new SetContent(properties);
    };

    /**
     * Encodes the specified SetContent message. Does not implicitly {@link SetContent.verify|verify} messages.
     * @function encode
     * @memberof SetContent
     * @static
     * @param {ISetContent} message SetContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetContent message, length delimited. Does not implicitly {@link SetContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetContent
     * @static
     * @param {ISetContent} message SetContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetContent message from the specified reader or buffer.
     * @function decode
     * @memberof SetContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetContent} SetContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetContent} SetContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetContent message.
     * @function verify
     * @memberof SetContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        return null;
    };

    /**
     * Creates a SetContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetContent} SetContent
     */
    SetContent.fromObject = function fromObject(object) {
        if (object instanceof $root.SetContent)
            return object;
        var message = new $root.SetContent();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".SetContent.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetContent
     * @static
     * @param {SetContent} message SetContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = null;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        return object;
    };

    /**
     * Converts this SetContent to JSON.
     * @function toJSON
     * @memberof SetContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetContent;
})();

$root.SendChatMessage = (function() {

    /**
     * Properties of a SendChatMessage.
     * @exports ISendChatMessage
     * @interface ISendChatMessage
     * @property {string|null} [message] SendChatMessage message
     */

    /**
     * Constructs a new SendChatMessage.
     * @exports SendChatMessage
     * @classdesc Represents a SendChatMessage.
     * @implements ISendChatMessage
     * @constructor
     * @param {ISendChatMessage=} [properties] Properties to set
     */
    function SendChatMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendChatMessage message.
     * @member {string} message
     * @memberof SendChatMessage
     * @instance
     */
    SendChatMessage.prototype.message = "";

    /**
     * Creates a new SendChatMessage instance using the specified properties.
     * @function create
     * @memberof SendChatMessage
     * @static
     * @param {ISendChatMessage=} [properties] Properties to set
     * @returns {SendChatMessage} SendChatMessage instance
     */
    SendChatMessage.create = function create(properties) {
        return new SendChatMessage(properties);
    };

    /**
     * Encodes the specified SendChatMessage message. Does not implicitly {@link SendChatMessage.verify|verify} messages.
     * @function encode
     * @memberof SendChatMessage
     * @static
     * @param {ISendChatMessage} message SendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified SendChatMessage message, length delimited. Does not implicitly {@link SendChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendChatMessage
     * @static
     * @param {ISendChatMessage} message SendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendChatMessage} SendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SendChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendChatMessage} SendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendChatMessage message.
     * @function verify
     * @memberof SendChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a SendChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendChatMessage} SendChatMessage
     */
    SendChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SendChatMessage)
            return object;
        var message = new $root.SendChatMessage();
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a SendChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendChatMessage
     * @static
     * @param {SendChatMessage} message SendChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.message = "";
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this SendChatMessage to JSON.
     * @function toJSON
     * @memberof SendChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendChatMessage;
})();

$root.StateChanges = (function() {

    /**
     * Properties of a StateChanges.
     * @exports IStateChanges
     * @interface IStateChanges
     * @property {Array.<IStateDiff>|null} [changes] StateChanges changes
     */

    /**
     * Constructs a new StateChanges.
     * @exports StateChanges
     * @classdesc Represents a StateChanges.
     * @implements IStateChanges
     * @constructor
     * @param {IStateChanges=} [properties] Properties to set
     */
    function StateChanges(properties) {
        this.changes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StateChanges changes.
     * @member {Array.<IStateDiff>} changes
     * @memberof StateChanges
     * @instance
     */
    StateChanges.prototype.changes = $util.emptyArray;

    /**
     * Creates a new StateChanges instance using the specified properties.
     * @function create
     * @memberof StateChanges
     * @static
     * @param {IStateChanges=} [properties] Properties to set
     * @returns {StateChanges} StateChanges instance
     */
    StateChanges.create = function create(properties) {
        return new StateChanges(properties);
    };

    /**
     * Encodes the specified StateChanges message. Does not implicitly {@link StateChanges.verify|verify} messages.
     * @function encode
     * @memberof StateChanges
     * @static
     * @param {IStateChanges} message StateChanges message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateChanges.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.changes != null && message.changes.length)
            for (var i = 0; i < message.changes.length; ++i)
                $root.StateDiff.encode(message.changes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StateChanges message, length delimited. Does not implicitly {@link StateChanges.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StateChanges
     * @static
     * @param {IStateChanges} message StateChanges message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateChanges.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StateChanges message from the specified reader or buffer.
     * @function decode
     * @memberof StateChanges
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StateChanges} StateChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateChanges.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StateChanges();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.changes && message.changes.length))
                    message.changes = [];
                message.changes.push($root.StateDiff.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StateChanges message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StateChanges
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StateChanges} StateChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateChanges.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StateChanges message.
     * @function verify
     * @memberof StateChanges
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StateChanges.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.changes != null && message.hasOwnProperty("changes")) {
            if (!Array.isArray(message.changes))
                return "changes: array expected";
            for (var i = 0; i < message.changes.length; ++i) {
                var error = $root.StateDiff.verify(message.changes[i]);
                if (error)
                    return "changes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StateChanges message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StateChanges
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StateChanges} StateChanges
     */
    StateChanges.fromObject = function fromObject(object) {
        if (object instanceof $root.StateChanges)
            return object;
        var message = new $root.StateChanges();
        if (object.changes) {
            if (!Array.isArray(object.changes))
                throw TypeError(".StateChanges.changes: array expected");
            message.changes = [];
            for (var i = 0; i < object.changes.length; ++i) {
                if (typeof object.changes[i] !== "object")
                    throw TypeError(".StateChanges.changes: object expected");
                message.changes[i] = $root.StateDiff.fromObject(object.changes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a StateChanges message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StateChanges
     * @static
     * @param {StateChanges} message StateChanges
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StateChanges.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.changes = [];
        if (message.changes && message.changes.length) {
            object.changes = [];
            for (var j = 0; j < message.changes.length; ++j)
                object.changes[j] = $root.StateDiff.toObject(message.changes[j], options);
        }
        return object;
    };

    /**
     * Converts this StateChanges to JSON.
     * @function toJSON
     * @memberof StateChanges
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StateChanges.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StateChanges;
})();

$root.StateDiff = (function() {

    /**
     * Properties of a StateDiff.
     * @exports IStateDiff
     * @interface IStateDiff
     * @property {IState|null} [setState] StateDiff setState
     * @property {IAddParticipants|null} [addParticipants] StateDiff addParticipants
     * @property {IRemoveParticipants|null} [removeParticipants] StateDiff removeParticipants
     * @property {IChangeContent|null} [changeContent] StateDiff changeContent
     * @property {IChangeHost|null} [changeHost] StateDiff changeHost
     * @property {IAppendChatMessage|null} [appendChatMessage] StateDiff appendChatMessage
     * @property {IReceiveTrophy|null} [receiveTrophy] StateDiff receiveTrophy
     * @property {IClassEnded|null} [classEnded] StateDiff classEnded
     */

    /**
     * Constructs a new StateDiff.
     * @exports StateDiff
     * @classdesc Represents a StateDiff.
     * @implements IStateDiff
     * @constructor
     * @param {IStateDiff=} [properties] Properties to set
     */
    function StateDiff(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StateDiff setState.
     * @member {IState|null|undefined} setState
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.setState = null;

    /**
     * StateDiff addParticipants.
     * @member {IAddParticipants|null|undefined} addParticipants
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.addParticipants = null;

    /**
     * StateDiff removeParticipants.
     * @member {IRemoveParticipants|null|undefined} removeParticipants
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.removeParticipants = null;

    /**
     * StateDiff changeContent.
     * @member {IChangeContent|null|undefined} changeContent
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.changeContent = null;

    /**
     * StateDiff changeHost.
     * @member {IChangeHost|null|undefined} changeHost
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.changeHost = null;

    /**
     * StateDiff appendChatMessage.
     * @member {IAppendChatMessage|null|undefined} appendChatMessage
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.appendChatMessage = null;

    /**
     * StateDiff receiveTrophy.
     * @member {IReceiveTrophy|null|undefined} receiveTrophy
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.receiveTrophy = null;

    /**
     * StateDiff classEnded.
     * @member {IClassEnded|null|undefined} classEnded
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.classEnded = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * StateDiff action.
     * @member {"setState"|"addParticipants"|"removeParticipants"|"changeContent"|"changeHost"|"appendChatMessage"|"receiveTrophy"|"classEnded"|undefined} action
     * @memberof StateDiff
     * @instance
     */
    Object.defineProperty(StateDiff.prototype, "action", {
        get: $util.oneOfGetter($oneOfFields = ["setState", "addParticipants", "removeParticipants", "changeContent", "changeHost", "appendChatMessage", "receiveTrophy", "classEnded"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new StateDiff instance using the specified properties.
     * @function create
     * @memberof StateDiff
     * @static
     * @param {IStateDiff=} [properties] Properties to set
     * @returns {StateDiff} StateDiff instance
     */
    StateDiff.create = function create(properties) {
        return new StateDiff(properties);
    };

    /**
     * Encodes the specified StateDiff message. Does not implicitly {@link StateDiff.verify|verify} messages.
     * @function encode
     * @memberof StateDiff
     * @static
     * @param {IStateDiff} message StateDiff message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateDiff.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.setState != null && Object.hasOwnProperty.call(message, "setState"))
            $root.State.encode(message.setState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.addParticipants != null && Object.hasOwnProperty.call(message, "addParticipants"))
            $root.AddParticipants.encode(message.addParticipants, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.removeParticipants != null && Object.hasOwnProperty.call(message, "removeParticipants"))
            $root.RemoveParticipants.encode(message.removeParticipants, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.changeContent != null && Object.hasOwnProperty.call(message, "changeContent"))
            $root.ChangeContent.encode(message.changeContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.changeHost != null && Object.hasOwnProperty.call(message, "changeHost"))
            $root.ChangeHost.encode(message.changeHost, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.appendChatMessage != null && Object.hasOwnProperty.call(message, "appendChatMessage"))
            $root.AppendChatMessage.encode(message.appendChatMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.receiveTrophy != null && Object.hasOwnProperty.call(message, "receiveTrophy"))
            $root.ReceiveTrophy.encode(message.receiveTrophy, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.classEnded != null && Object.hasOwnProperty.call(message, "classEnded"))
            $root.ClassEnded.encode(message.classEnded, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StateDiff message, length delimited. Does not implicitly {@link StateDiff.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StateDiff
     * @static
     * @param {IStateDiff} message StateDiff message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateDiff.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StateDiff message from the specified reader or buffer.
     * @function decode
     * @memberof StateDiff
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StateDiff} StateDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateDiff.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StateDiff();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.setState = $root.State.decode(reader, reader.uint32());
                break;
            case 2:
                message.addParticipants = $root.AddParticipants.decode(reader, reader.uint32());
                break;
            case 3:
                message.removeParticipants = $root.RemoveParticipants.decode(reader, reader.uint32());
                break;
            case 4:
                message.changeContent = $root.ChangeContent.decode(reader, reader.uint32());
                break;
            case 5:
                message.changeHost = $root.ChangeHost.decode(reader, reader.uint32());
                break;
            case 6:
                message.appendChatMessage = $root.AppendChatMessage.decode(reader, reader.uint32());
                break;
            case 7:
                message.receiveTrophy = $root.ReceiveTrophy.decode(reader, reader.uint32());
                break;
            case 16:
                message.classEnded = $root.ClassEnded.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StateDiff message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StateDiff
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StateDiff} StateDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateDiff.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StateDiff message.
     * @function verify
     * @memberof StateDiff
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StateDiff.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.setState != null && message.hasOwnProperty("setState")) {
            properties.action = 1;
            {
                var error = $root.State.verify(message.setState);
                if (error)
                    return "setState." + error;
            }
        }
        if (message.addParticipants != null && message.hasOwnProperty("addParticipants")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.AddParticipants.verify(message.addParticipants);
                if (error)
                    return "addParticipants." + error;
            }
        }
        if (message.removeParticipants != null && message.hasOwnProperty("removeParticipants")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.RemoveParticipants.verify(message.removeParticipants);
                if (error)
                    return "removeParticipants." + error;
            }
        }
        if (message.changeContent != null && message.hasOwnProperty("changeContent")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ChangeContent.verify(message.changeContent);
                if (error)
                    return "changeContent." + error;
            }
        }
        if (message.changeHost != null && message.hasOwnProperty("changeHost")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ChangeHost.verify(message.changeHost);
                if (error)
                    return "changeHost." + error;
            }
        }
        if (message.appendChatMessage != null && message.hasOwnProperty("appendChatMessage")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.AppendChatMessage.verify(message.appendChatMessage);
                if (error)
                    return "appendChatMessage." + error;
            }
        }
        if (message.receiveTrophy != null && message.hasOwnProperty("receiveTrophy")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ReceiveTrophy.verify(message.receiveTrophy);
                if (error)
                    return "receiveTrophy." + error;
            }
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ClassEnded.verify(message.classEnded);
                if (error)
                    return "classEnded." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StateDiff message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StateDiff
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StateDiff} StateDiff
     */
    StateDiff.fromObject = function fromObject(object) {
        if (object instanceof $root.StateDiff)
            return object;
        var message = new $root.StateDiff();
        if (object.setState != null) {
            if (typeof object.setState !== "object")
                throw TypeError(".StateDiff.setState: object expected");
            message.setState = $root.State.fromObject(object.setState);
        }
        if (object.addParticipants != null) {
            if (typeof object.addParticipants !== "object")
                throw TypeError(".StateDiff.addParticipants: object expected");
            message.addParticipants = $root.AddParticipants.fromObject(object.addParticipants);
        }
        if (object.removeParticipants != null) {
            if (typeof object.removeParticipants !== "object")
                throw TypeError(".StateDiff.removeParticipants: object expected");
            message.removeParticipants = $root.RemoveParticipants.fromObject(object.removeParticipants);
        }
        if (object.changeContent != null) {
            if (typeof object.changeContent !== "object")
                throw TypeError(".StateDiff.changeContent: object expected");
            message.changeContent = $root.ChangeContent.fromObject(object.changeContent);
        }
        if (object.changeHost != null) {
            if (typeof object.changeHost !== "object")
                throw TypeError(".StateDiff.changeHost: object expected");
            message.changeHost = $root.ChangeHost.fromObject(object.changeHost);
        }
        if (object.appendChatMessage != null) {
            if (typeof object.appendChatMessage !== "object")
                throw TypeError(".StateDiff.appendChatMessage: object expected");
            message.appendChatMessage = $root.AppendChatMessage.fromObject(object.appendChatMessage);
        }
        if (object.receiveTrophy != null) {
            if (typeof object.receiveTrophy !== "object")
                throw TypeError(".StateDiff.receiveTrophy: object expected");
            message.receiveTrophy = $root.ReceiveTrophy.fromObject(object.receiveTrophy);
        }
        if (object.classEnded != null) {
            if (typeof object.classEnded !== "object")
                throw TypeError(".StateDiff.classEnded: object expected");
            message.classEnded = $root.ClassEnded.fromObject(object.classEnded);
        }
        return message;
    };

    /**
     * Creates a plain object from a StateDiff message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StateDiff
     * @static
     * @param {StateDiff} message StateDiff
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StateDiff.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.setState != null && message.hasOwnProperty("setState")) {
            object.setState = $root.State.toObject(message.setState, options);
            if (options.oneofs)
                object.action = "setState";
        }
        if (message.addParticipants != null && message.hasOwnProperty("addParticipants")) {
            object.addParticipants = $root.AddParticipants.toObject(message.addParticipants, options);
            if (options.oneofs)
                object.action = "addParticipants";
        }
        if (message.removeParticipants != null && message.hasOwnProperty("removeParticipants")) {
            object.removeParticipants = $root.RemoveParticipants.toObject(message.removeParticipants, options);
            if (options.oneofs)
                object.action = "removeParticipants";
        }
        if (message.changeContent != null && message.hasOwnProperty("changeContent")) {
            object.changeContent = $root.ChangeContent.toObject(message.changeContent, options);
            if (options.oneofs)
                object.action = "changeContent";
        }
        if (message.changeHost != null && message.hasOwnProperty("changeHost")) {
            object.changeHost = $root.ChangeHost.toObject(message.changeHost, options);
            if (options.oneofs)
                object.action = "changeHost";
        }
        if (message.appendChatMessage != null && message.hasOwnProperty("appendChatMessage")) {
            object.appendChatMessage = $root.AppendChatMessage.toObject(message.appendChatMessage, options);
            if (options.oneofs)
                object.action = "appendChatMessage";
        }
        if (message.receiveTrophy != null && message.hasOwnProperty("receiveTrophy")) {
            object.receiveTrophy = $root.ReceiveTrophy.toObject(message.receiveTrophy, options);
            if (options.oneofs)
                object.action = "receiveTrophy";
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            object.classEnded = $root.ClassEnded.toObject(message.classEnded, options);
            if (options.oneofs)
                object.action = "classEnded";
        }
        return object;
    };

    /**
     * Converts this StateDiff to JSON.
     * @function toJSON
     * @memberof StateDiff
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StateDiff.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StateDiff;
})();

$root.Participant = (function() {

    /**
     * Properties of a Participant.
     * @exports IParticipant
     * @interface IParticipant
     * @property {string|null} [name] Participant name
     * @property {Object.<string,IDevice>|null} [devices] Participant devices
     * @property {Array.<ITrophy>|null} [trophies] Participant trophies
     */

    /**
     * Constructs a new Participant.
     * @exports Participant
     * @classdesc Represents a Participant.
     * @implements IParticipant
     * @constructor
     * @param {IParticipant=} [properties] Properties to set
     */
    function Participant(properties) {
        this.devices = {};
        this.trophies = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Participant name.
     * @member {string} name
     * @memberof Participant
     * @instance
     */
    Participant.prototype.name = "";

    /**
     * Participant devices.
     * @member {Object.<string,IDevice>} devices
     * @memberof Participant
     * @instance
     */
    Participant.prototype.devices = $util.emptyObject;

    /**
     * Participant trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof Participant
     * @instance
     */
    Participant.prototype.trophies = $util.emptyArray;

    /**
     * Creates a new Participant instance using the specified properties.
     * @function create
     * @memberof Participant
     * @static
     * @param {IParticipant=} [properties] Properties to set
     * @returns {Participant} Participant instance
     */
    Participant.create = function create(properties) {
        return new Participant(properties);
    };

    /**
     * Encodes the specified Participant message. Does not implicitly {@link Participant.verify|verify} messages.
     * @function encode
     * @memberof Participant
     * @static
     * @param {IParticipant} message Participant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Participant.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.devices != null && Object.hasOwnProperty.call(message, "devices"))
            for (var keys = Object.keys(message.devices), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                $root.Device.encode(message.devices[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.trophies != null && message.trophies.length)
            for (var i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Participant message, length delimited. Does not implicitly {@link Participant.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Participant
     * @static
     * @param {IParticipant} message Participant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Participant.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Participant message from the specified reader or buffer.
     * @function decode
     * @memberof Participant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Participant} Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Participant.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Participant(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                reader.skip().pos++;
                if (message.devices === $util.emptyObject)
                    message.devices = {};
                key = reader.uint32();
                reader.pos++;
                message.devices[key] = $root.Device.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.trophies && message.trophies.length))
                    message.trophies = [];
                message.trophies.push($root.Trophy.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Participant message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Participant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Participant} Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Participant.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Participant message.
     * @function verify
     * @memberof Participant
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Participant.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!$util.isObject(message.devices))
                return "devices: object expected";
            var key = Object.keys(message.devices);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "devices: integer key{k:uint32} expected";
                {
                    var error = $root.Device.verify(message.devices[key[i]]);
                    if (error)
                        return "devices." + error;
                }
            }
        }
        if (message.trophies != null && message.hasOwnProperty("trophies")) {
            if (!Array.isArray(message.trophies))
                return "trophies: array expected";
            for (var i = 0; i < message.trophies.length; ++i) {
                var error = $root.Trophy.verify(message.trophies[i]);
                if (error)
                    return "trophies." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Participant message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Participant
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Participant} Participant
     */
    Participant.fromObject = function fromObject(object) {
        if (object instanceof $root.Participant)
            return object;
        var message = new $root.Participant();
        if (object.name != null)
            message.name = String(object.name);
        if (object.devices) {
            if (typeof object.devices !== "object")
                throw TypeError(".Participant.devices: object expected");
            message.devices = {};
            for (var keys = Object.keys(object.devices), i = 0; i < keys.length; ++i) {
                if (typeof object.devices[keys[i]] !== "object")
                    throw TypeError(".Participant.devices: object expected");
                message.devices[keys[i]] = $root.Device.fromObject(object.devices[keys[i]]);
            }
        }
        if (object.trophies) {
            if (!Array.isArray(object.trophies))
                throw TypeError(".Participant.trophies: array expected");
            message.trophies = [];
            for (var i = 0; i < object.trophies.length; ++i) {
                if (typeof object.trophies[i] !== "object")
                    throw TypeError(".Participant.trophies: object expected");
                message.trophies[i] = $root.Trophy.fromObject(object.trophies[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Participant message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Participant
     * @static
     * @param {Participant} message Participant
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Participant.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.trophies = [];
        if (options.objects || options.defaults)
            object.devices = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        var keys2;
        if (message.devices && (keys2 = Object.keys(message.devices)).length) {
            object.devices = {};
            for (var j = 0; j < keys2.length; ++j)
                object.devices[keys2[j]] = $root.Device.toObject(message.devices[keys2[j]], options);
        }
        if (message.trophies && message.trophies.length) {
            object.trophies = [];
            for (var j = 0; j < message.trophies.length; ++j)
                object.trophies[j] = $root.Trophy.toObject(message.trophies[j], options);
        }
        return object;
    };

    /**
     * Converts this Participant to JSON.
     * @function toJSON
     * @memberof Participant
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Participant.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Participant;
})();

$root.State = (function() {

    /**
     * Properties of a State.
     * @exports IState
     * @interface IState
     * @property {Object.<string,IParticipant>|null} [participants] State participants
     * @property {string|null} [host] State host
     * @property {IContent|null} [content] State content
     * @property {Array.<IChatMessage>|null} [chatMessages] State chatMessages
     * @property {number|null} [endTimestamp] State endTimestamp
     */

    /**
     * Constructs a new State.
     * @exports State
     * @classdesc Represents a State.
     * @implements IState
     * @constructor
     * @param {IState=} [properties] Properties to set
     */
    function State(properties) {
        this.participants = {};
        this.chatMessages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * State participants.
     * @member {Object.<string,IParticipant>} participants
     * @memberof State
     * @instance
     */
    State.prototype.participants = $util.emptyObject;

    /**
     * State host.
     * @member {string} host
     * @memberof State
     * @instance
     */
    State.prototype.host = "";

    /**
     * State content.
     * @member {IContent|null|undefined} content
     * @memberof State
     * @instance
     */
    State.prototype.content = null;

    /**
     * State chatMessages.
     * @member {Array.<IChatMessage>} chatMessages
     * @memberof State
     * @instance
     */
    State.prototype.chatMessages = $util.emptyArray;

    /**
     * State endTimestamp.
     * @member {number} endTimestamp
     * @memberof State
     * @instance
     */
    State.prototype.endTimestamp = 0;

    /**
     * Creates a new State instance using the specified properties.
     * @function create
     * @memberof State
     * @static
     * @param {IState=} [properties] Properties to set
     * @returns {State} State instance
     */
    State.create = function create(properties) {
        return new State(properties);
    };

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @function encode
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.participants != null && Object.hasOwnProperty.call(message, "participants"))
            for (var keys = Object.keys(message.participants), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Participant.encode(message.participants[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.chatMessages != null && message.chatMessages.length)
            for (var i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.endTimestamp != null && Object.hasOwnProperty.call(message, "endTimestamp"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.endTimestamp);
        return writer;
    };

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @function encodeDelimited
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a State message from the specified reader or buffer.
     * @function decode
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.State(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.participants === $util.emptyObject)
                    message.participants = {};
                key = reader.string();
                reader.pos++;
                message.participants[key] = $root.Participant.decode(reader, reader.uint32());
                break;
            case 2:
                message.host = reader.string();
                break;
            case 3:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.chatMessages && message.chatMessages.length))
                    message.chatMessages = [];
                message.chatMessages.push($root.ChatMessage.decode(reader, reader.uint32()));
                break;
            case 5:
                message.endTimestamp = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a State message.
     * @function verify
     * @memberof State
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    State.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.participants != null && message.hasOwnProperty("participants")) {
            if (!$util.isObject(message.participants))
                return "participants: object expected";
            var key = Object.keys(message.participants);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Participant.verify(message.participants[key[i]]);
                if (error)
                    return "participants." + error;
            }
        }
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        if (message.chatMessages != null && message.hasOwnProperty("chatMessages")) {
            if (!Array.isArray(message.chatMessages))
                return "chatMessages: array expected";
            for (var i = 0; i < message.chatMessages.length; ++i) {
                var error = $root.ChatMessage.verify(message.chatMessages[i]);
                if (error)
                    return "chatMessages." + error;
            }
        }
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            if (!$util.isInteger(message.endTimestamp))
                return "endTimestamp: integer expected";
        return null;
    };

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof State
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {State} State
     */
    State.fromObject = function fromObject(object) {
        if (object instanceof $root.State)
            return object;
        var message = new $root.State();
        if (object.participants) {
            if (typeof object.participants !== "object")
                throw TypeError(".State.participants: object expected");
            message.participants = {};
            for (var keys = Object.keys(object.participants), i = 0; i < keys.length; ++i) {
                if (typeof object.participants[keys[i]] !== "object")
                    throw TypeError(".State.participants: object expected");
                message.participants[keys[i]] = $root.Participant.fromObject(object.participants[keys[i]]);
            }
        }
        if (object.host != null)
            message.host = String(object.host);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".State.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".State.chatMessages: array expected");
            message.chatMessages = [];
            for (var i = 0; i < object.chatMessages.length; ++i) {
                if (typeof object.chatMessages[i] !== "object")
                    throw TypeError(".State.chatMessages: object expected");
                message.chatMessages[i] = $root.ChatMessage.fromObject(object.chatMessages[i]);
            }
        }
        if (object.endTimestamp != null)
            message.endTimestamp = object.endTimestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @function toObject
     * @memberof State
     * @static
     * @param {State} message State
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    State.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.chatMessages = [];
        if (options.objects || options.defaults)
            object.participants = {};
        if (options.defaults) {
            object.host = "";
            object.content = null;
            object.endTimestamp = 0;
        }
        var keys2;
        if (message.participants && (keys2 = Object.keys(message.participants)).length) {
            object.participants = {};
            for (var j = 0; j < keys2.length; ++j)
                object.participants[keys2[j]] = $root.Participant.toObject(message.participants[keys2[j]], options);
        }
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        if (message.chatMessages && message.chatMessages.length) {
            object.chatMessages = [];
            for (var j = 0; j < message.chatMessages.length; ++j)
                object.chatMessages[j] = $root.ChatMessage.toObject(message.chatMessages[j], options);
        }
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            object.endTimestamp = message.endTimestamp;
        return object;
    };

    /**
     * Converts this State to JSON.
     * @function toJSON
     * @memberof State
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    State.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return State;
})();

$root.AddParticipants = (function() {

    /**
     * Properties of an AddParticipants.
     * @exports IAddParticipants
     * @interface IAddParticipants
     * @property {Object.<string,IParticipant>|null} [participants] AddParticipants participants
     */

    /**
     * Constructs a new AddParticipants.
     * @exports AddParticipants
     * @classdesc Represents an AddParticipants.
     * @implements IAddParticipants
     * @constructor
     * @param {IAddParticipants=} [properties] Properties to set
     */
    function AddParticipants(properties) {
        this.participants = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddParticipants participants.
     * @member {Object.<string,IParticipant>} participants
     * @memberof AddParticipants
     * @instance
     */
    AddParticipants.prototype.participants = $util.emptyObject;

    /**
     * Creates a new AddParticipants instance using the specified properties.
     * @function create
     * @memberof AddParticipants
     * @static
     * @param {IAddParticipants=} [properties] Properties to set
     * @returns {AddParticipants} AddParticipants instance
     */
    AddParticipants.create = function create(properties) {
        return new AddParticipants(properties);
    };

    /**
     * Encodes the specified AddParticipants message. Does not implicitly {@link AddParticipants.verify|verify} messages.
     * @function encode
     * @memberof AddParticipants
     * @static
     * @param {IAddParticipants} message AddParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddParticipants.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.participants != null && Object.hasOwnProperty.call(message, "participants"))
            for (var keys = Object.keys(message.participants), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Participant.encode(message.participants[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified AddParticipants message, length delimited. Does not implicitly {@link AddParticipants.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddParticipants
     * @static
     * @param {IAddParticipants} message AddParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddParticipants.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddParticipants message from the specified reader or buffer.
     * @function decode
     * @memberof AddParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddParticipants} AddParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddParticipants.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddParticipants(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.participants === $util.emptyObject)
                    message.participants = {};
                key = reader.string();
                reader.pos++;
                message.participants[key] = $root.Participant.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AddParticipants message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddParticipants} AddParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddParticipants.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddParticipants message.
     * @function verify
     * @memberof AddParticipants
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddParticipants.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.participants != null && message.hasOwnProperty("participants")) {
            if (!$util.isObject(message.participants))
                return "participants: object expected";
            var key = Object.keys(message.participants);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Participant.verify(message.participants[key[i]]);
                if (error)
                    return "participants." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AddParticipants message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddParticipants
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddParticipants} AddParticipants
     */
    AddParticipants.fromObject = function fromObject(object) {
        if (object instanceof $root.AddParticipants)
            return object;
        var message = new $root.AddParticipants();
        if (object.participants) {
            if (typeof object.participants !== "object")
                throw TypeError(".AddParticipants.participants: object expected");
            message.participants = {};
            for (var keys = Object.keys(object.participants), i = 0; i < keys.length; ++i) {
                if (typeof object.participants[keys[i]] !== "object")
                    throw TypeError(".AddParticipants.participants: object expected");
                message.participants[keys[i]] = $root.Participant.fromObject(object.participants[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AddParticipants message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddParticipants
     * @static
     * @param {AddParticipants} message AddParticipants
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddParticipants.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.participants = {};
        var keys2;
        if (message.participants && (keys2 = Object.keys(message.participants)).length) {
            object.participants = {};
            for (var j = 0; j < keys2.length; ++j)
                object.participants[keys2[j]] = $root.Participant.toObject(message.participants[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this AddParticipants to JSON.
     * @function toJSON
     * @memberof AddParticipants
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddParticipants.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddParticipants;
})();

$root.RemoveParticipants = (function() {

    /**
     * Properties of a RemoveParticipants.
     * @exports IRemoveParticipants
     * @interface IRemoveParticipants
     * @property {Array.<string>|null} [participants] RemoveParticipants participants
     */

    /**
     * Constructs a new RemoveParticipants.
     * @exports RemoveParticipants
     * @classdesc Represents a RemoveParticipants.
     * @implements IRemoveParticipants
     * @constructor
     * @param {IRemoveParticipants=} [properties] Properties to set
     */
    function RemoveParticipants(properties) {
        this.participants = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveParticipants participants.
     * @member {Array.<string>} participants
     * @memberof RemoveParticipants
     * @instance
     */
    RemoveParticipants.prototype.participants = $util.emptyArray;

    /**
     * Creates a new RemoveParticipants instance using the specified properties.
     * @function create
     * @memberof RemoveParticipants
     * @static
     * @param {IRemoveParticipants=} [properties] Properties to set
     * @returns {RemoveParticipants} RemoveParticipants instance
     */
    RemoveParticipants.create = function create(properties) {
        return new RemoveParticipants(properties);
    };

    /**
     * Encodes the specified RemoveParticipants message. Does not implicitly {@link RemoveParticipants.verify|verify} messages.
     * @function encode
     * @memberof RemoveParticipants
     * @static
     * @param {IRemoveParticipants} message RemoveParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveParticipants.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.participants != null && message.participants.length)
            for (var i = 0; i < message.participants.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.participants[i]);
        return writer;
    };

    /**
     * Encodes the specified RemoveParticipants message, length delimited. Does not implicitly {@link RemoveParticipants.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveParticipants
     * @static
     * @param {IRemoveParticipants} message RemoveParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveParticipants.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveParticipants message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveParticipants} RemoveParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveParticipants.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveParticipants();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.participants && message.participants.length))
                    message.participants = [];
                message.participants.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RemoveParticipants message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveParticipants} RemoveParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveParticipants.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveParticipants message.
     * @function verify
     * @memberof RemoveParticipants
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveParticipants.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.participants != null && message.hasOwnProperty("participants")) {
            if (!Array.isArray(message.participants))
                return "participants: array expected";
            for (var i = 0; i < message.participants.length; ++i)
                if (!$util.isString(message.participants[i]))
                    return "participants: string[] expected";
        }
        return null;
    };

    /**
     * Creates a RemoveParticipants message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveParticipants
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveParticipants} RemoveParticipants
     */
    RemoveParticipants.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveParticipants)
            return object;
        var message = new $root.RemoveParticipants();
        if (object.participants) {
            if (!Array.isArray(object.participants))
                throw TypeError(".RemoveParticipants.participants: array expected");
            message.participants = [];
            for (var i = 0; i < object.participants.length; ++i)
                message.participants[i] = String(object.participants[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a RemoveParticipants message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveParticipants
     * @static
     * @param {RemoveParticipants} message RemoveParticipants
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveParticipants.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.participants = [];
        if (message.participants && message.participants.length) {
            object.participants = [];
            for (var j = 0; j < message.participants.length; ++j)
                object.participants[j] = message.participants[j];
        }
        return object;
    };

    /**
     * Converts this RemoveParticipants to JSON.
     * @function toJSON
     * @memberof RemoveParticipants
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveParticipants.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RemoveParticipants;
})();

$root.ChangeContent = (function() {

    /**
     * Properties of a ChangeContent.
     * @exports IChangeContent
     * @interface IChangeContent
     * @property {IContent|null} [content] ChangeContent content
     */

    /**
     * Constructs a new ChangeContent.
     * @exports ChangeContent
     * @classdesc Represents a ChangeContent.
     * @implements IChangeContent
     * @constructor
     * @param {IChangeContent=} [properties] Properties to set
     */
    function ChangeContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeContent content.
     * @member {IContent|null|undefined} content
     * @memberof ChangeContent
     * @instance
     */
    ChangeContent.prototype.content = null;

    /**
     * Creates a new ChangeContent instance using the specified properties.
     * @function create
     * @memberof ChangeContent
     * @static
     * @param {IChangeContent=} [properties] Properties to set
     * @returns {ChangeContent} ChangeContent instance
     */
    ChangeContent.create = function create(properties) {
        return new ChangeContent(properties);
    };

    /**
     * Encodes the specified ChangeContent message. Does not implicitly {@link ChangeContent.verify|verify} messages.
     * @function encode
     * @memberof ChangeContent
     * @static
     * @param {IChangeContent} message ChangeContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChangeContent message, length delimited. Does not implicitly {@link ChangeContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeContent
     * @static
     * @param {IChangeContent} message ChangeContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeContent message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeContent} ChangeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeContent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeContent} ChangeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeContent message.
     * @function verify
     * @memberof ChangeContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        return null;
    };

    /**
     * Creates a ChangeContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeContent} ChangeContent
     */
    ChangeContent.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeContent)
            return object;
        var message = new $root.ChangeContent();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".ChangeContent.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChangeContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeContent
     * @static
     * @param {ChangeContent} message ChangeContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = null;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        return object;
    };

    /**
     * Converts this ChangeContent to JSON.
     * @function toJSON
     * @memberof ChangeContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeContent;
})();

$root.ChangeHost = (function() {

    /**
     * Properties of a ChangeHost.
     * @exports IChangeHost
     * @interface IChangeHost
     * @property {string|null} [hostId] ChangeHost hostId
     */

    /**
     * Constructs a new ChangeHost.
     * @exports ChangeHost
     * @classdesc Represents a ChangeHost.
     * @implements IChangeHost
     * @constructor
     * @param {IChangeHost=} [properties] Properties to set
     */
    function ChangeHost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeHost hostId.
     * @member {string} hostId
     * @memberof ChangeHost
     * @instance
     */
    ChangeHost.prototype.hostId = "";

    /**
     * Creates a new ChangeHost instance using the specified properties.
     * @function create
     * @memberof ChangeHost
     * @static
     * @param {IChangeHost=} [properties] Properties to set
     * @returns {ChangeHost} ChangeHost instance
     */
    ChangeHost.create = function create(properties) {
        return new ChangeHost(properties);
    };

    /**
     * Encodes the specified ChangeHost message. Does not implicitly {@link ChangeHost.verify|verify} messages.
     * @function encode
     * @memberof ChangeHost
     * @static
     * @param {IChangeHost} message ChangeHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeHost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hostId != null && Object.hasOwnProperty.call(message, "hostId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostId);
        return writer;
    };

    /**
     * Encodes the specified ChangeHost message, length delimited. Does not implicitly {@link ChangeHost.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeHost
     * @static
     * @param {IChangeHost} message ChangeHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeHost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeHost message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeHost} ChangeHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeHost.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeHost();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hostId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeHost message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeHost} ChangeHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeHost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeHost message.
     * @function verify
     * @memberof ChangeHost
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeHost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hostId != null && message.hasOwnProperty("hostId"))
            if (!$util.isString(message.hostId))
                return "hostId: string expected";
        return null;
    };

    /**
     * Creates a ChangeHost message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeHost
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeHost} ChangeHost
     */
    ChangeHost.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeHost)
            return object;
        var message = new $root.ChangeHost();
        if (object.hostId != null)
            message.hostId = String(object.hostId);
        return message;
    };

    /**
     * Creates a plain object from a ChangeHost message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeHost
     * @static
     * @param {ChangeHost} message ChangeHost
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeHost.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.hostId = "";
        if (message.hostId != null && message.hasOwnProperty("hostId"))
            object.hostId = message.hostId;
        return object;
    };

    /**
     * Converts this ChangeHost to JSON.
     * @function toJSON
     * @memberof ChangeHost
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeHost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeHost;
})();

$root.AppendChatMessage = (function() {

    /**
     * Properties of an AppendChatMessage.
     * @exports IAppendChatMessage
     * @interface IAppendChatMessage
     * @property {Array.<IChatMessage>|null} [messages] AppendChatMessage messages
     */

    /**
     * Constructs a new AppendChatMessage.
     * @exports AppendChatMessage
     * @classdesc Represents an AppendChatMessage.
     * @implements IAppendChatMessage
     * @constructor
     * @param {IAppendChatMessage=} [properties] Properties to set
     */
    function AppendChatMessage(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppendChatMessage messages.
     * @member {Array.<IChatMessage>} messages
     * @memberof AppendChatMessage
     * @instance
     */
    AppendChatMessage.prototype.messages = $util.emptyArray;

    /**
     * Creates a new AppendChatMessage instance using the specified properties.
     * @function create
     * @memberof AppendChatMessage
     * @static
     * @param {IAppendChatMessage=} [properties] Properties to set
     * @returns {AppendChatMessage} AppendChatMessage instance
     */
    AppendChatMessage.create = function create(properties) {
        return new AppendChatMessage(properties);
    };

    /**
     * Encodes the specified AppendChatMessage message. Does not implicitly {@link AppendChatMessage.verify|verify} messages.
     * @function encode
     * @memberof AppendChatMessage
     * @static
     * @param {IAppendChatMessage} message AppendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppendChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                $root.ChatMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AppendChatMessage message, length delimited. Does not implicitly {@link AppendChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppendChatMessage
     * @static
     * @param {IAppendChatMessage} message AppendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppendChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof AppendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppendChatMessage} AppendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppendChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppendChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.messages && message.messages.length))
                    message.messages = [];
                message.messages.push($root.ChatMessage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppendChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppendChatMessage} AppendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppendChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppendChatMessage message.
     * @function verify
     * @memberof AppendChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppendChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i) {
                var error = $root.ChatMessage.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AppendChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppendChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppendChatMessage} AppendChatMessage
     */
    AppendChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.AppendChatMessage)
            return object;
        var message = new $root.AppendChatMessage();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".AppendChatMessage.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".AppendChatMessage.messages: object expected");
                message.messages[i] = $root.ChatMessage.fromObject(object.messages[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AppendChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppendChatMessage
     * @static
     * @param {AppendChatMessage} message AppendChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppendChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.ChatMessage.toObject(message.messages[j], options);
        }
        return object;
    };

    /**
     * Converts this AppendChatMessage to JSON.
     * @function toJSON
     * @memberof AppendChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppendChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppendChatMessage;
})();

$root.ReceiveTrophy = (function() {

    /**
     * Properties of a ReceiveTrophy.
     * @exports IReceiveTrophy
     * @interface IReceiveTrophy
     * @property {ITrophy|null} [trophy] ReceiveTrophy trophy
     */

    /**
     * Constructs a new ReceiveTrophy.
     * @exports ReceiveTrophy
     * @classdesc Represents a ReceiveTrophy.
     * @implements IReceiveTrophy
     * @constructor
     * @param {IReceiveTrophy=} [properties] Properties to set
     */
    function ReceiveTrophy(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReceiveTrophy trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof ReceiveTrophy
     * @instance
     */
    ReceiveTrophy.prototype.trophy = null;

    /**
     * Creates a new ReceiveTrophy instance using the specified properties.
     * @function create
     * @memberof ReceiveTrophy
     * @static
     * @param {IReceiveTrophy=} [properties] Properties to set
     * @returns {ReceiveTrophy} ReceiveTrophy instance
     */
    ReceiveTrophy.create = function create(properties) {
        return new ReceiveTrophy(properties);
    };

    /**
     * Encodes the specified ReceiveTrophy message. Does not implicitly {@link ReceiveTrophy.verify|verify} messages.
     * @function encode
     * @memberof ReceiveTrophy
     * @static
     * @param {IReceiveTrophy} message ReceiveTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveTrophy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ReceiveTrophy message, length delimited. Does not implicitly {@link ReceiveTrophy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveTrophy
     * @static
     * @param {IReceiveTrophy} message ReceiveTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveTrophy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveTrophy message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReceiveTrophy} ReceiveTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveTrophy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReceiveTrophy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.trophy = $root.Trophy.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReceiveTrophy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveTrophy} ReceiveTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveTrophy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveTrophy message.
     * @function verify
     * @memberof ReceiveTrophy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveTrophy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trophy != null && message.hasOwnProperty("trophy")) {
            var error = $root.Trophy.verify(message.trophy);
            if (error)
                return "trophy." + error;
        }
        return null;
    };

    /**
     * Creates a ReceiveTrophy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReceiveTrophy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReceiveTrophy} ReceiveTrophy
     */
    ReceiveTrophy.fromObject = function fromObject(object) {
        if (object instanceof $root.ReceiveTrophy)
            return object;
        var message = new $root.ReceiveTrophy();
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".ReceiveTrophy.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a ReceiveTrophy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReceiveTrophy
     * @static
     * @param {ReceiveTrophy} message ReceiveTrophy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReceiveTrophy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.trophy = null;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = $root.Trophy.toObject(message.trophy, options);
        return object;
    };

    /**
     * Converts this ReceiveTrophy to JSON.
     * @function toJSON
     * @memberof ReceiveTrophy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReceiveTrophy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReceiveTrophy;
})();

$root.ClassEnded = (function() {

    /**
     * Properties of a ClassEnded.
     * @exports IClassEnded
     * @interface IClassEnded
     */

    /**
     * Constructs a new ClassEnded.
     * @exports ClassEnded
     * @classdesc Represents a ClassEnded.
     * @implements IClassEnded
     * @constructor
     * @param {IClassEnded=} [properties] Properties to set
     */
    function ClassEnded(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ClassEnded instance using the specified properties.
     * @function create
     * @memberof ClassEnded
     * @static
     * @param {IClassEnded=} [properties] Properties to set
     * @returns {ClassEnded} ClassEnded instance
     */
    ClassEnded.create = function create(properties) {
        return new ClassEnded(properties);
    };

    /**
     * Encodes the specified ClassEnded message. Does not implicitly {@link ClassEnded.verify|verify} messages.
     * @function encode
     * @memberof ClassEnded
     * @static
     * @param {IClassEnded} message ClassEnded message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEnded.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ClassEnded message, length delimited. Does not implicitly {@link ClassEnded.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassEnded
     * @static
     * @param {IClassEnded} message ClassEnded message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEnded.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassEnded message from the specified reader or buffer.
     * @function decode
     * @memberof ClassEnded
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassEnded} ClassEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEnded.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassEnded();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassEnded message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassEnded
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassEnded} ClassEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEnded.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassEnded message.
     * @function verify
     * @memberof ClassEnded
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassEnded.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ClassEnded message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassEnded
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassEnded} ClassEnded
     */
    ClassEnded.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassEnded)
            return object;
        return new $root.ClassEnded();
    };

    /**
     * Creates a plain object from a ClassEnded message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassEnded
     * @static
     * @param {ClassEnded} message ClassEnded
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassEnded.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ClassEnded to JSON.
     * @function toJSON
     * @memberof ClassEnded
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassEnded.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassEnded;
})();

$root.Device = (function() {

    /**
     * Properties of a Device.
     * @exports IDevice
     * @interface IDevice
     * @property {IActivity|null} [activity] Device activity
     * @property {Array.<IWebRTCStream>|null} [webRTCStreams] Device webRTCStreams
     */

    /**
     * Constructs a new Device.
     * @exports Device
     * @classdesc Represents a Device.
     * @implements IDevice
     * @constructor
     * @param {IDevice=} [properties] Properties to set
     */
    function Device(properties) {
        this.webRTCStreams = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Device activity.
     * @member {IActivity|null|undefined} activity
     * @memberof Device
     * @instance
     */
    Device.prototype.activity = null;

    /**
     * Device webRTCStreams.
     * @member {Array.<IWebRTCStream>} webRTCStreams
     * @memberof Device
     * @instance
     */
    Device.prototype.webRTCStreams = $util.emptyArray;

    /**
     * Creates a new Device instance using the specified properties.
     * @function create
     * @memberof Device
     * @static
     * @param {IDevice=} [properties] Properties to set
     * @returns {Device} Device instance
     */
    Device.create = function create(properties) {
        return new Device(properties);
    };

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @function encode
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.activity != null && Object.hasOwnProperty.call(message, "activity"))
            $root.Activity.encode(message.activity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.webRTCStreams != null && message.webRTCStreams.length)
            for (var i = 0; i < message.webRTCStreams.length; ++i)
                $root.WebRTCStream.encode(message.webRTCStreams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Device message, length delimited. Does not implicitly {@link Device.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @function decode
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Device();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.activity = $root.Activity.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.webRTCStreams && message.webRTCStreams.length))
                    message.webRTCStreams = [];
                message.webRTCStreams.push($root.WebRTCStream.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Device message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Device message.
     * @function verify
     * @memberof Device
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Device.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.activity != null && message.hasOwnProperty("activity")) {
            var error = $root.Activity.verify(message.activity);
            if (error)
                return "activity." + error;
        }
        if (message.webRTCStreams != null && message.hasOwnProperty("webRTCStreams")) {
            if (!Array.isArray(message.webRTCStreams))
                return "webRTCStreams: array expected";
            for (var i = 0; i < message.webRTCStreams.length; ++i) {
                var error = $root.WebRTCStream.verify(message.webRTCStreams[i]);
                if (error)
                    return "webRTCStreams." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Device message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Device
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Device} Device
     */
    Device.fromObject = function fromObject(object) {
        if (object instanceof $root.Device)
            return object;
        var message = new $root.Device();
        if (object.activity != null) {
            if (typeof object.activity !== "object")
                throw TypeError(".Device.activity: object expected");
            message.activity = $root.Activity.fromObject(object.activity);
        }
        if (object.webRTCStreams) {
            if (!Array.isArray(object.webRTCStreams))
                throw TypeError(".Device.webRTCStreams: array expected");
            message.webRTCStreams = [];
            for (var i = 0; i < object.webRTCStreams.length; ++i) {
                if (typeof object.webRTCStreams[i] !== "object")
                    throw TypeError(".Device.webRTCStreams: object expected");
                message.webRTCStreams[i] = $root.WebRTCStream.fromObject(object.webRTCStreams[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Device message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Device
     * @static
     * @param {Device} message Device
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Device.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.webRTCStreams = [];
        if (options.defaults)
            object.activity = null;
        if (message.activity != null && message.hasOwnProperty("activity"))
            object.activity = $root.Activity.toObject(message.activity, options);
        if (message.webRTCStreams && message.webRTCStreams.length) {
            object.webRTCStreams = [];
            for (var j = 0; j < message.webRTCStreams.length; ++j)
                object.webRTCStreams[j] = $root.WebRTCStream.toObject(message.webRTCStreams[j], options);
        }
        return object;
    };

    /**
     * Converts this Device to JSON.
     * @function toJSON
     * @memberof Device
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Device.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Device;
})();

$root.Activity = (function() {

    /**
     * Properties of an Activity.
     * @exports IActivity
     * @interface IActivity
     * @property {string|null} [id] Activity id
     * @property {string|null} [streamId] Activity streamId
     */

    /**
     * Constructs a new Activity.
     * @exports Activity
     * @classdesc Represents an Activity.
     * @implements IActivity
     * @constructor
     * @param {IActivity=} [properties] Properties to set
     */
    function Activity(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Activity id.
     * @member {string} id
     * @memberof Activity
     * @instance
     */
    Activity.prototype.id = "";

    /**
     * Activity streamId.
     * @member {string} streamId
     * @memberof Activity
     * @instance
     */
    Activity.prototype.streamId = "";

    /**
     * Creates a new Activity instance using the specified properties.
     * @function create
     * @memberof Activity
     * @static
     * @param {IActivity=} [properties] Properties to set
     * @returns {Activity} Activity instance
     */
    Activity.create = function create(properties) {
        return new Activity(properties);
    };

    /**
     * Encodes the specified Activity message. Does not implicitly {@link Activity.verify|verify} messages.
     * @function encode
     * @memberof Activity
     * @static
     * @param {IActivity} message Activity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Activity.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.streamId);
        return writer;
    };

    /**
     * Encodes the specified Activity message, length delimited. Does not implicitly {@link Activity.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Activity
     * @static
     * @param {IActivity} message Activity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Activity.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Activity message from the specified reader or buffer.
     * @function decode
     * @memberof Activity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Activity} Activity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Activity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Activity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.streamId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Activity message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Activity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Activity} Activity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Activity.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Activity message.
     * @function verify
     * @memberof Activity
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Activity.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.streamId != null && message.hasOwnProperty("streamId"))
            if (!$util.isString(message.streamId))
                return "streamId: string expected";
        return null;
    };

    /**
     * Creates an Activity message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Activity
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Activity} Activity
     */
    Activity.fromObject = function fromObject(object) {
        if (object instanceof $root.Activity)
            return object;
        var message = new $root.Activity();
        if (object.id != null)
            message.id = String(object.id);
        if (object.streamId != null)
            message.streamId = String(object.streamId);
        return message;
    };

    /**
     * Creates a plain object from an Activity message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Activity
     * @static
     * @param {Activity} message Activity
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Activity.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.streamId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
        return object;
    };

    /**
     * Converts this Activity to JSON.
     * @function toJSON
     * @memberof Activity
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Activity.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Activity;
})();

$root.WebRTCStream = (function() {

    /**
     * Properties of a WebRTCStream.
     * @exports IWebRTCStream
     * @interface IWebRTCStream
     * @property {string|null} [id] WebRTCStream id
     * @property {string|null} [label] WebRTCStream label
     * @property {Array.<IWebRTCTrack>|null} [tracks] WebRTCStream tracks
     */

    /**
     * Constructs a new WebRTCStream.
     * @exports WebRTCStream
     * @classdesc Represents a WebRTCStream.
     * @implements IWebRTCStream
     * @constructor
     * @param {IWebRTCStream=} [properties] Properties to set
     */
    function WebRTCStream(properties) {
        this.tracks = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WebRTCStream id.
     * @member {string} id
     * @memberof WebRTCStream
     * @instance
     */
    WebRTCStream.prototype.id = "";

    /**
     * WebRTCStream label.
     * @member {string} label
     * @memberof WebRTCStream
     * @instance
     */
    WebRTCStream.prototype.label = "";

    /**
     * WebRTCStream tracks.
     * @member {Array.<IWebRTCTrack>} tracks
     * @memberof WebRTCStream
     * @instance
     */
    WebRTCStream.prototype.tracks = $util.emptyArray;

    /**
     * Creates a new WebRTCStream instance using the specified properties.
     * @function create
     * @memberof WebRTCStream
     * @static
     * @param {IWebRTCStream=} [properties] Properties to set
     * @returns {WebRTCStream} WebRTCStream instance
     */
    WebRTCStream.create = function create(properties) {
        return new WebRTCStream(properties);
    };

    /**
     * Encodes the specified WebRTCStream message. Does not implicitly {@link WebRTCStream.verify|verify} messages.
     * @function encode
     * @memberof WebRTCStream
     * @static
     * @param {IWebRTCStream} message WebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStream.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
        if (message.tracks != null && message.tracks.length)
            for (var i = 0; i < message.tracks.length; ++i)
                $root.WebRTCTrack.encode(message.tracks[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WebRTCStream message, length delimited. Does not implicitly {@link WebRTCStream.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WebRTCStream
     * @static
     * @param {IWebRTCStream} message WebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStream.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WebRTCStream message from the specified reader or buffer.
     * @function decode
     * @memberof WebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WebRTCStream} WebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStream.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCStream();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.label = reader.string();
                break;
            case 3:
                if (!(message.tracks && message.tracks.length))
                    message.tracks = [];
                message.tracks.push($root.WebRTCTrack.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WebRTCStream message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WebRTCStream} WebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStream.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WebRTCStream message.
     * @function verify
     * @memberof WebRTCStream
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WebRTCStream.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message.tracks != null && message.hasOwnProperty("tracks")) {
            if (!Array.isArray(message.tracks))
                return "tracks: array expected";
            for (var i = 0; i < message.tracks.length; ++i) {
                var error = $root.WebRTCTrack.verify(message.tracks[i]);
                if (error)
                    return "tracks." + error;
            }
        }
        return null;
    };

    /**
     * Creates a WebRTCStream message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WebRTCStream
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WebRTCStream} WebRTCStream
     */
    WebRTCStream.fromObject = function fromObject(object) {
        if (object instanceof $root.WebRTCStream)
            return object;
        var message = new $root.WebRTCStream();
        if (object.id != null)
            message.id = String(object.id);
        if (object.label != null)
            message.label = String(object.label);
        if (object.tracks) {
            if (!Array.isArray(object.tracks))
                throw TypeError(".WebRTCStream.tracks: array expected");
            message.tracks = [];
            for (var i = 0; i < object.tracks.length; ++i) {
                if (typeof object.tracks[i] !== "object")
                    throw TypeError(".WebRTCStream.tracks: object expected");
                message.tracks[i] = $root.WebRTCTrack.fromObject(object.tracks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a WebRTCStream message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WebRTCStream
     * @static
     * @param {WebRTCStream} message WebRTCStream
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WebRTCStream.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.tracks = [];
        if (options.defaults) {
            object.id = "";
            object.label = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message.tracks && message.tracks.length) {
            object.tracks = [];
            for (var j = 0; j < message.tracks.length; ++j)
                object.tracks[j] = $root.WebRTCTrack.toObject(message.tracks[j], options);
        }
        return object;
    };

    /**
     * Converts this WebRTCStream to JSON.
     * @function toJSON
     * @memberof WebRTCStream
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WebRTCStream.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WebRTCStream;
})();

$root.WebRTCTrack = (function() {

    /**
     * Properties of a WebRTCTrack.
     * @exports IWebRTCTrack
     * @interface IWebRTCTrack
     * @property {string|null} [id] WebRTCTrack id
     * @property {string|null} [sfu] WebRTCTrack sfu
     */

    /**
     * Constructs a new WebRTCTrack.
     * @exports WebRTCTrack
     * @classdesc Represents a WebRTCTrack.
     * @implements IWebRTCTrack
     * @constructor
     * @param {IWebRTCTrack=} [properties] Properties to set
     */
    function WebRTCTrack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WebRTCTrack id.
     * @member {string} id
     * @memberof WebRTCTrack
     * @instance
     */
    WebRTCTrack.prototype.id = "";

    /**
     * WebRTCTrack sfu.
     * @member {string} sfu
     * @memberof WebRTCTrack
     * @instance
     */
    WebRTCTrack.prototype.sfu = "";

    /**
     * Creates a new WebRTCTrack instance using the specified properties.
     * @function create
     * @memberof WebRTCTrack
     * @static
     * @param {IWebRTCTrack=} [properties] Properties to set
     * @returns {WebRTCTrack} WebRTCTrack instance
     */
    WebRTCTrack.create = function create(properties) {
        return new WebRTCTrack(properties);
    };

    /**
     * Encodes the specified WebRTCTrack message. Does not implicitly {@link WebRTCTrack.verify|verify} messages.
     * @function encode
     * @memberof WebRTCTrack
     * @static
     * @param {IWebRTCTrack} message WebRTCTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCTrack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.sfu != null && Object.hasOwnProperty.call(message, "sfu"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sfu);
        return writer;
    };

    /**
     * Encodes the specified WebRTCTrack message, length delimited. Does not implicitly {@link WebRTCTrack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WebRTCTrack
     * @static
     * @param {IWebRTCTrack} message WebRTCTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCTrack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WebRTCTrack message from the specified reader or buffer.
     * @function decode
     * @memberof WebRTCTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WebRTCTrack} WebRTCTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCTrack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCTrack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.sfu = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WebRTCTrack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WebRTCTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WebRTCTrack} WebRTCTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCTrack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WebRTCTrack message.
     * @function verify
     * @memberof WebRTCTrack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WebRTCTrack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.sfu != null && message.hasOwnProperty("sfu"))
            if (!$util.isString(message.sfu))
                return "sfu: string expected";
        return null;
    };

    /**
     * Creates a WebRTCTrack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WebRTCTrack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WebRTCTrack} WebRTCTrack
     */
    WebRTCTrack.fromObject = function fromObject(object) {
        if (object instanceof $root.WebRTCTrack)
            return object;
        var message = new $root.WebRTCTrack();
        if (object.id != null)
            message.id = String(object.id);
        if (object.sfu != null)
            message.sfu = String(object.sfu);
        return message;
    };

    /**
     * Creates a plain object from a WebRTCTrack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WebRTCTrack
     * @static
     * @param {WebRTCTrack} message WebRTCTrack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WebRTCTrack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.sfu = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.sfu != null && message.hasOwnProperty("sfu"))
            object.sfu = message.sfu;
        return object;
    };

    /**
     * Converts this WebRTCTrack to JSON.
     * @function toJSON
     * @memberof WebRTCTrack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WebRTCTrack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WebRTCTrack;
})();

$root.Trophy = (function() {

    /**
     * Properties of a Trophy.
     * @exports ITrophy
     * @interface ITrophy
     * @property {string|null} [trophy] Trophy trophy
     * @property {number|null} [timestamp] Trophy timestamp
     */

    /**
     * Constructs a new Trophy.
     * @exports Trophy
     * @classdesc Represents a Trophy.
     * @implements ITrophy
     * @constructor
     * @param {ITrophy=} [properties] Properties to set
     */
    function Trophy(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Trophy trophy.
     * @member {string} trophy
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.trophy = "";

    /**
     * Trophy timestamp.
     * @member {number} timestamp
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.timestamp = 0;

    /**
     * Creates a new Trophy instance using the specified properties.
     * @function create
     * @memberof Trophy
     * @static
     * @param {ITrophy=} [properties] Properties to set
     * @returns {Trophy} Trophy instance
     */
    Trophy.create = function create(properties) {
        return new Trophy(properties);
    };

    /**
     * Encodes the specified Trophy message. Does not implicitly {@link Trophy.verify|verify} messages.
     * @function encode
     * @memberof Trophy
     * @static
     * @param {ITrophy} message Trophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trophy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.trophy);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified Trophy message, length delimited. Does not implicitly {@link Trophy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Trophy
     * @static
     * @param {ITrophy} message Trophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trophy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Trophy message from the specified reader or buffer.
     * @function decode
     * @memberof Trophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Trophy} Trophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trophy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trophy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.trophy = reader.string();
                break;
            case 2:
                message.timestamp = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Trophy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Trophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Trophy} Trophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trophy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Trophy message.
     * @function verify
     * @memberof Trophy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Trophy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            if (!$util.isString(message.trophy))
                return "trophy: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        return null;
    };

    /**
     * Creates a Trophy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Trophy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Trophy} Trophy
     */
    Trophy.fromObject = function fromObject(object) {
        if (object instanceof $root.Trophy)
            return object;
        var message = new $root.Trophy();
        if (object.trophy != null)
            message.trophy = String(object.trophy);
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Trophy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Trophy
     * @static
     * @param {Trophy} message Trophy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Trophy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.trophy = "";
            object.timestamp = 0;
        }
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = message.trophy;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        return object;
    };

    /**
     * Converts this Trophy to JSON.
     * @function toJSON
     * @memberof Trophy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Trophy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Trophy;
})();

$root.ChatMessage = (function() {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {string|null} [message] ChatMessage message
     * @property {string|null} [fromUser] ChatMessage fromUser
     * @property {number|null} [timestamp] ChatMessage timestamp
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage message.
     * @member {string} message
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.message = "";

    /**
     * ChatMessage fromUser.
     * @member {string} fromUser
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.fromUser = "";

    /**
     * ChatMessage timestamp.
     * @member {number} timestamp
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.timestamp = 0;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        if (message.fromUser != null && Object.hasOwnProperty.call(message, "fromUser"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUser);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = reader.string();
                break;
            case 2:
                message.fromUser = reader.string();
                break;
            case 3:
                message.timestamp = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.fromUser != null && message.hasOwnProperty("fromUser"))
            if (!$util.isString(message.fromUser))
                return "fromUser: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        var message = new $root.ChatMessage();
        if (object.message != null)
            message.message = String(object.message);
        if (object.fromUser != null)
            message.fromUser = String(object.fromUser);
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.message = "";
            object.fromUser = "";
            object.timestamp = 0;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.fromUser != null && message.hasOwnProperty("fromUser"))
            object.fromUser = message.fromUser;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatMessage;
})();

/**
 * ContentType enum.
 * @exports ContentType
 * @enum {number}
 * @property {number} Blank=0 Blank value
 * @property {number} WebRtcStream=1 WebRtcStream value
 * @property {number} ActivityStream=2 ActivityStream value
 * @property {number} H5P=3 H5P value
 * @property {number} Image=4 Image value
 * @property {number} Video=5 Video value
 * @property {number} Audio=6 Audio value
 */
$root.ContentType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Blank"] = 0;
    values[valuesById[1] = "WebRtcStream"] = 1;
    values[valuesById[2] = "ActivityStream"] = 2;
    values[valuesById[3] = "H5P"] = 3;
    values[valuesById[4] = "Image"] = 4;
    values[valuesById[5] = "Video"] = 5;
    values[valuesById[6] = "Audio"] = 6;
    return values;
})();

$root.Content = (function() {

    /**
     * Properties of a Content.
     * @exports IContent
     * @interface IContent
     * @property {ContentType|null} [type] Content type
     * @property {string|null} [id] Content id
     * @property {string|null} [url] Content url
     */

    /**
     * Constructs a new Content.
     * @exports Content
     * @classdesc Represents a Content.
     * @implements IContent
     * @constructor
     * @param {IContent=} [properties] Properties to set
     */
    function Content(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Content type.
     * @member {ContentType} type
     * @memberof Content
     * @instance
     */
    Content.prototype.type = 0;

    /**
     * Content id.
     * @member {string} id
     * @memberof Content
     * @instance
     */
    Content.prototype.id = "";

    /**
     * Content url.
     * @member {string} url
     * @memberof Content
     * @instance
     */
    Content.prototype.url = "";

    /**
     * Creates a new Content instance using the specified properties.
     * @function create
     * @memberof Content
     * @static
     * @param {IContent=} [properties] Properties to set
     * @returns {Content} Content instance
     */
    Content.create = function create(properties) {
        return new Content(properties);
    };

    /**
     * Encodes the specified Content message. Does not implicitly {@link Content.verify|verify} messages.
     * @function encode
     * @memberof Content
     * @static
     * @param {IContent} message Content message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Content.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified Content message, length delimited. Does not implicitly {@link Content.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Content
     * @static
     * @param {IContent} message Content message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Content.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Content message from the specified reader or buffer.
     * @function decode
     * @memberof Content
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Content} Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Content.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Content();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.id = reader.string();
                break;
            case 3:
                message.url = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Content message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Content
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Content} Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Content.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Content message.
     * @function verify
     * @memberof Content
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Content.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a Content message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Content
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Content} Content
     */
    Content.fromObject = function fromObject(object) {
        if (object instanceof $root.Content)
            return object;
        var message = new $root.Content();
        switch (object.type) {
        case "Blank":
        case 0:
            message.type = 0;
            break;
        case "WebRtcStream":
        case 1:
            message.type = 1;
            break;
        case "ActivityStream":
        case 2:
            message.type = 2;
            break;
        case "H5P":
        case 3:
            message.type = 3;
            break;
        case "Image":
        case 4:
            message.type = 4;
            break;
        case "Video":
        case 5:
            message.type = 5;
            break;
        case "Audio":
        case 6:
            message.type = 6;
            break;
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a Content message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Content
     * @static
     * @param {Content} message Content
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Content.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "Blank" : 0;
            object.id = "";
            object.url = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ContentType[message.type] : message.type;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this Content to JSON.
     * @function toJSON
     * @memberof Content
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Content.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Content;
})();

var dist = $root;

exports['default'] = dist;

}(dist));

var pb = /*@__PURE__*/getDefaultExportFromCjs(dist);

/**
 * Fetches the devices for a given user
 */
function getDevices(userId, participants) {
    const user = participants[userId];
    if (!user) {
        throw new Error(`Unable to find user with ID: ${userId} in the class participant list`);
    }
    if (!user.devices) {
        user.devices = {};
    }
    return user.devices;
}
/**
 * Attempts to find the device with the given DeviceID for that user
 */
function getDevice(userId, deviceId, participants) {
    if (!deviceId)
        throw new Error('No device ID was provided');
    const devices = getDevices(userId, participants);
    const device = devices[deviceId];
    if (!device) {
        throw new Error(`Unable to find Device ID: '${deviceId}' in registered devices for user ${userId}`);
    }
    return device;
}

function generateStateDiff(old, latest) {
    const differences = parseParticipants(old.participants || {}, latest.participants || {});
    if ((old.chatMessages || []).length < (latest.chatMessages || []).length) {
        differences.push({
            appendChatMessage: {
                messages: (latest.chatMessages || []).slice(Math.max((old.chatMessages || []).length, 0)),
            },
        });
    }
    if (old.host !== latest.host) {
        differences.push({ changeHost: { hostId: latest.host } });
    }
    if (old.content !== latest.content) {
        differences.push({ changeContent: { content: latest.content } });
    }
    if (latest.endTimestamp || 0 > 0) {
        differences.push({ classEnded: {} });
    }
    return differences;
}
function parseParticipants(old, latest) {
    const differences = [];
    const oldKeys = new Set(Object.keys(old));
    const newKeys = Object.keys(latest);
    const addParticipants = {};
    for (const userId of newKeys) {
        if (!oldKeys.has(userId)) {
            addParticipants[userId] = latest[userId];
            continue;
        }
        if (old[userId] !== latest[userId]) {
            addParticipants[userId] = latest[userId];
        }
        oldKeys.delete(userId);
    }
    if (Object.keys(addParticipants).length > 0) {
        differences.push({ addParticipants: { participants: addParticipants } });
    }
    if (oldKeys.size > 0) {
        differences.push({ removeParticipants: { participants: [...oldKeys] } });
    }
    return differences;
}

const initialState = {
    participants: {},
    host: null,
    chatMessages: [],
    content: pb.ContentType.Blank,
    endTimestamp: null,
};
const userJoinReducer = (state, action) => {
    const { context: { userId, name }, } = action.payload;
    let { participants } = state;
    if (!participants) {
        participants = {};
    }
    const participant = {
        name,
        devices: {},
        trophies: [],
    };
    participants[userId] = participant;
    return state;
};
const userLeaveReducer = (state, action) => {
    const { context: { userId }, } = action.payload;
    let { participants } = state;
    if (!participants) {
        participants = {};
    }
    delete participants[userId];
    return state;
};
const sendChatMessageReducer = (state, action) => {
    const { context: { userId }, payload: { message }, } = action.payload;
    if (!message || message.length === 0)
        return state;
    const msg = {
        fromUser: userId,
        message,
        timestamp: Date.now(),
    };
    if (!state.chatMessages) {
        state.chatMessages = [];
    }
    state.chatMessages.push(msg);
    return state;
};
// @TODO - Probably want to make it so only teacher/internal server can set host?
const setHostReducer = (state, action) => {
    const { payload: { id }, } = action.payload;
    state.host = id;
    return state;
};
const addTrophyReducer = (state, action) => {
    const participants = state.participants || {};
    const trophy = action.payload.payload;
    let idsToProcess;
    if (trophy.userId) {
        idsToProcess = [trophy.userId];
    }
    else {
        idsToProcess = Object.keys(participants);
    }
    idsToProcess.forEach((id) => {
        const user = participants[id];
        if (!user) {
            throw new Error(`Unable to find user with ID: ${id} in the class participant list`);
        }
        const trophies = user.trophies || [];
        if (trophies.length === 0) {
            user.trophies = trophies;
        }
        trophies.push(trophy);
    });
    return state;
};
const setDeviceReducer = (state, action) => {
    const { context: { userId }, payload: { device, deviceId }, } = action.payload;
    if (!device)
        throw new Error('No device was provided');
    if (!deviceId)
        throw new Error('No device id was provided');
    const { participants } = state;
    const devices = getDevices(userId, participants || {});
    devices[deviceId] = device;
    return state;
};
const setWebRtcStreamReducer = (state, action) => {
    const { context: { userId }, payload: { deviceId, streams }, } = action.payload;
    const { participants } = state;
    const device = getDevice(userId, deviceId, participants || {});
    device.webRTCStreams = streams;
    return state;
};
const setActivityStreamReducer = (state, action) => {
    const { context: { userId }, payload: { deviceId, activityId, activityStreamId }, } = action.payload;
    const { participants } = state;
    const device = getDevice(userId, deviceId, participants || {});
    const activity = {
        id: activityId,
        streamId: activityStreamId,
    };
    device.activity = activity;
    return state;
};
const setContentReducer = (state, action) => {
    const { payload: { content }, } = action.payload;
    state.content = content;
    return state;
};
const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        userJoin: userJoinReducer,
        userLeave: userLeaveReducer,
        sendChatMessage: sendChatMessageReducer,
        setHost: setHostReducer,
        addTrophy: addTrophyReducer,
        setDevice: setDeviceReducer,
        setWebRtcStream: setWebRtcStreamReducer,
        setActivityStream: setActivityStreamReducer,
        setContent: setContentReducer,
    },
});
const Actions = roomSlice.actions;
const roomReducer = roomSlice.reducer;
const INITIAL_ROOM_STATE = initialState;

export { Actions, INITIAL_ROOM_STATE, generateStateDiff, roomReducer };
//# sourceMappingURL=index.mjs.map
