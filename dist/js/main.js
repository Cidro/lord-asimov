(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":2}],2:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":3}],3:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],4:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dragula=e()}}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],6:[function(require,module,exports){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  var match = id.match(/[^\/]+\.vue$/)
  return match ? match[0] : id
}

},{}],7:[function(require,module,exports){
"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};!function(e,t){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"object"==(typeof module==="undefined"?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?exports.VueStrap=t():e.VueStrap=t();}(undefined,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports;}var n={};return t.m=e,t.c=n,t.p="",t(0);}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}var o=n(27),r=i(o),a=n(95),s=i(a),l=n(99),c=i(l),u=n(102),d=i(u),p=n(109),f=i(p),h=n(114),v=i(h),y=n(117),b=i(y),m=n(122),g=i(m),x=n(127),w=i(x),_=n(132),k=i(_),S=n(137),M=i(S),O=n(140),$=i(O),D=n(145),j=i(D),C=n(154),N=i(C),B=n(157),L=i(B),A=n(160),P=i(A),T=n(165),E=i(T),R=n(171),z=i(R),I=n(174),V=i(I),W=n(179),F=i(W),Y=n(199),X=i(Y),H=n(202),G=i(H),q=n(207),U=i(q),J=n(210),Z=i(J),K=n(215),Q=i(K),ee=n(220),te=i(ee),ne=n(225),ie=i(ne),oe={$:r["default"],accordion:s["default"],affix:c["default"],alert:d["default"],aside:f["default"],buttonGroup:v["default"],carousel:b["default"],checkbox:g["default"],datepicker:w["default"],dropdown:k["default"],formGroup:M["default"],input:$["default"],modal:j["default"],navbar:N["default"],option:L["default"],panel:P["default"],popover:E["default"],progressbar:z["default"],radio:V["default"],select:F["default"],slider:X["default"],spinner:G["default"],tab:U["default"],tabGroup:Z["default"],tabset:Q["default"],tooltip:te["default"],typeahead:ie["default"]};e.exports=oe;},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}function o(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=(0,h["default"])(e);!(i=(a=s.next()).done);i=!0){var l=a.value;if(l instanceof Node||null===l)~n.indexOf(l)||n.push(l);else{if(!(l instanceof window.NodeList||l instanceof S||l instanceof HTMLCollection||l instanceof Array))return e.get=M.get,e.set=M.set,e.call=M.call,e.owner=t,e;var c=!0,u=!1,d=void 0;try{for(var p,f=(0,h["default"])(l);!(c=(p=f.next()).done);c=!0){var v=p.value;n.push(v);}}catch(y){u=!0,d=y;}finally{try{!c&&f["return"]&&f["return"]();}finally{if(u)throw d;}}}}}catch(y){o=!0,r=y;}finally{try{!i&&s["return"]&&s["return"]();}finally{if(o)throw r;}}return new S([n,t]);}function r(e){var t=this,n=arguments;O[e]instanceof Function?M[e]=function(){var i=[],r=!0,a=!0,s=!1,l=void 0;try{for(var c,u=(0,h["default"])(M);!(a=(c=u.next()).done);a=!0){var d=c.value;d&&d[e]instanceof Function?(d=d[e].apply(d,n),i.push(d),r&&void 0!==d&&(r=!1)):i.push(void 0);}}catch(p){s=!0,l=p;}finally{try{!a&&u["return"]&&u["return"]();}finally{if(s)throw l;}}return r?t:o(i,t);}:(0,l["default"])(M,e,{get:function get(){var t=[],n=!0,i=!1,r=void 0;try{for(var a,s=(0,h["default"])(this);!(n=(a=s.next()).done);n=!0){var l=a.value;null!==l&&(l=l[e]),t.push(l);}}catch(c){i=!0,r=c;}finally{try{!n&&s["return"]&&s["return"]();}finally{if(i)throw r;}}return o(t,this);},set:function set(t){var n=!0,i=!1,o=void 0;try{for(var r,a=(0,h["default"])(this);!(n=(r=a.next()).done);n=!0){var s=r.value;s&&e in s&&(s[e]=t);}}catch(l){i=!0,o=l;}finally{try{!n&&a["return"]&&a["return"]();}finally{if(i)throw o;}}}});}function a(){return new S(arguments);}Object.defineProperty(t,"__esModule",{value:!0});var s=n(28),l=i(s),c=n(46),u=i(c),d=n(82),p=i(d),f=n(88),h=i(f),v=n(93),y=i(v),b=n(94),m=i(b),g=Array.prototype,x=new Error("Passed arguments must be of Node"),w=void 0,_=[],k=[],S=function(){function e(t){(0,y["default"])(this,e);var n=t;if(t[0]===window?n=[window]:"string"==typeof t[0]?(n=(t[1]||document).querySelectorAll(t[0]),t[1]&&(this.owner=t[1])):0 in t&&!(t[0]instanceof Node)&&t[0]&&"length"in t[0]&&(n=t[0],t[1]&&(this.owner=t[1])),n){for(var i in n){this[i]=n[i];}this.length=n.length;}else this.length=0;}return(0,m["default"])(e,[{key:"concat",value:function value(){function t(e){var i=!0,o=!1,r=void 0;try{for(var a,s=(0,h["default"])(e);!(i=(a=s.next()).done);i=!0){var l=a.value;l instanceof Node?~n.indexOf(l)||n.push(l):l&&t(l);}}catch(c){o=!0,r=c;}finally{try{!i&&s["return"]&&s["return"]();}finally{if(o)throw r;}}}var n=g.slice.call(this),i=!0,o=!1,r=void 0;try{for(var a,s=(0,h["default"])(arguments);!(i=(a=s.next()).done);i=!0){var l=a.value;if(l instanceof Node)~n.indexOf(l)||n.push(l);else{if(!(l instanceof window.NodeList||l instanceof e||l instanceof HTMLCollection||l instanceof Array))throw Error("Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)");t(l);}}}catch(c){o=!0,r=c;}finally{try{!i&&s["return"]&&s["return"]();}finally{if(o)throw r;}}return new e([n,this]);}},{key:"each",value:function value(){return g.forEach.apply(this,arguments),this;}},{key:"parent",value:function value(){return this.map(function(e){return e.parentNode;});}},{key:"filter",value:function value(){return new e([g.filter.apply(this,arguments),this]);}},{key:"find",value:function value(e){var t=[],n=!0,i=!1,r=void 0;try{for(var a,s=(0,h["default"])(o(this));!(n=(a=s.next()).done);n=!0){var l=a.value,c=l.querySelectorAll(e);c&&c.length&&t.push(c);}}catch(u){i=!0,r=u;}finally{try{!n&&s["return"]&&s["return"]();}finally{if(i)throw r;}}return o(t,this.owner);}},{key:"findChildren",value:function value(e){var t=this;return this.find(e).filter(function(e){return t.includes(e.parentElement);});}},{key:"forEach",value:function value(){return g.forEach.apply(this,arguments),this;}},{key:"includes",value:function value(e,t){return~this.indexOf(e,t);}},{key:"map",value:function value(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++){t[n]=arguments[n];}return o(g.map.apply(this,t),this);}},{key:"pop",value:function t(n){"number"!=typeof n&&(n=1);for(var i=[],t=g.pop.bind(this);n--;){i.push(t());}return new e([i,this]);}},{key:"push",value:function value(){var e=!0,t=!1,n=void 0;try{for(var i,o=(0,h["default"])(arguments);!(e=(i=o.next()).done);e=!0){var r=i.value;if(!(r instanceof Node))throw x;~this.indexOf(r)||g.push.call(this,r);}}catch(a){t=!0,n=a;}finally{try{!e&&o["return"]&&o["return"]();}finally{if(t)throw n;}}return this;}},{key:"delete",value:function value(){for(var t=(new e([[],this.owner]),this.length-1),n=this[t];n;n=this[--t]){n.remove?(n.remove(),g.splice.call(this,t,1)):n.parentNode&&(n.parentNode.removeChild(n),g.splice.call(this,t,1));}return this;}},{key:"shift",value:function n(t){"number"!=typeof t&&(t=1);for(var i=[],n=g.shift.bind(this);t--;){i.push(n());}return new e([i,this]);}},{key:"slice",value:function value(){return new e([g.slice.apply(this,arguments),this]);}},{key:"splice",value:function value(){for(var t=2,n=arguments.length;t<n;t++){if(!(arguments[t]instanceof Node))throw x;}return new e([g.splice.apply(this,arguments),this]);}},{key:"unshift",value:function i(){var i=g.unshift.bind(this),e=!0,t=!1,n=void 0;try{for(var o,r=(0,h["default"])(arguments);!(e=(o=r.next()).done);e=!0){var a=o.value;if(!(a instanceof Node))throw x;~this.indexOf(a)||i(a);}}catch(s){t=!0,n=s;}finally{try{!e&&r["return"]&&r["return"]();}finally{if(t)throw n;}}return this;}},{key:"addClass",value:function value(e){return this.toggleClass(e,!0);}},{key:"removeClass",value:function value(e){return this.toggleClass(e,!1);}},{key:"toggleClass",value:function value(e,t){var n=this,i=void 0===t||null===t?"toggle":t?"add":"remove";return"string"==typeof e&&(e=e.trim().replace(/\s+/," ").split(" ")),e.forEach(function(e){return n.each(function(t){return t.classList[i](e);});}),this;}},{key:"get",value:function value(e){var t=[],n=!0,i=!1,r=void 0;try{for(var a,s=(0,h["default"])(this);!(n=(a=s.next()).done);n=!0){var l=a.value;null!==l&&(l=l[e]),t.push(l);}}catch(c){i=!0,r=c;}finally{try{!n&&s["return"]&&s["return"]();}finally{if(i)throw r;}}return o(t,this);}},{key:"set",value:function value(e,t){if(e.constructor===Object){var n=!0,i=!1,o=void 0;try{for(var r,a=(0,h["default"])(this);!(n=(r=a.next()).done);n=!0){var s=r.value;if(s)for(key in e){key in s&&(s[key]=e[key]);}}}catch(l){i=!0,o=l;}finally{try{!n&&a["return"]&&a["return"]();}finally{if(i)throw o;}}}else{var c=!0,u=!1,d=void 0;try{for(var p,f=(0,h["default"])(this);!(c=(p=f.next()).done);c=!0){var v=p.value;e in v&&(v[e]=t);}}catch(l){u=!0,d=l;}finally{try{!c&&f["return"]&&f["return"]();}finally{if(u)throw d;}}}return this;}},{key:"call",value:function value(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++){t[n]=arguments[n];}var i=g.shift.call(t),r=[],a=!0,s=!0,l=!1,c=void 0;try{for(var u,d=(0,h["default"])(this);!(s=(u=d.next()).done);s=!0){var p=u.value;p&&p[i]instanceof Function?(p=p[i].apply(p,t),r.push(p),a&&void 0!==p&&(a=!1)):r.push(void 0);}}catch(f){l=!0,c=f;}finally{try{!s&&d["return"]&&d["return"]();}finally{if(l)throw c;}}return a?this:o(r,this);}},{key:"item",value:function value(t){return new e([[this[t]],this]);}},{key:"on",value:function value(t,n,i){if("string"==typeof t&&(t=t.trim().replace(/\s+/," ").split(" ")),!this||!this.length)return this;if(void 0===i&&(i=n,n=null),!i)return this;var o=i;i=n?function(t){var i=new e([n,this]);i.length&&i.some(function(e){var n=e.contains(t.target);return n&&o.call(e,t,e),n;});}:function(e){o.apply(this,[e,this]);};var r=!0,a=!1,s=void 0;try{for(var l,c=(0,h["default"])(t);!(r=(l=c.next()).done);r=!0){var u=l.value,d=!0,p=!1,f=void 0;try{for(var v,y=(0,h["default"])(this);!(d=(v=y.next()).done);d=!0){var b=v.value;b.addEventListener(u,i,!1),k.push({el:b,event:u,callback:i});}}catch(m){p=!0,f=m;}finally{try{!d&&y["return"]&&y["return"]();}finally{if(p)throw f;}}}}catch(m){a=!0,s=m;}finally{try{!r&&c["return"]&&c["return"]();}finally{if(a)throw s;}}return this;}},{key:"off",value:function value(e,t){if(e instanceof Function&&(t=e,e=null),"string"==typeof e&&t instanceof Function){var n=!0,i=!1,o=void 0;try{for(var r,a=(0,h["default"])(this);!(n=(r=a.next()).done);n=!0){var s=r.value;for(var l in k){var c=!0,u=!1,d=void 0;try{for(var p,f=(0,h["default"])(e.split(" "));!(c=(p=f.next()).done);c=!0){var v=p.value;k[l]&&k[l].el===s&&k[l].event===v&&k[l].callback===t&&(k[l].el.removeEventListener(k[l].event,k[l].callback),delete k[l]);}}catch(y){u=!0,d=y;}finally{try{!c&&f["return"]&&f["return"]();}finally{if(u)throw d;}}}}}catch(y){i=!0,o=y;}finally{try{!n&&a["return"]&&a["return"]();}finally{if(i)throw o;}}}else if("string"==typeof e){var b=!0,m=!1,g=void 0;try{for(var x,w=(0,h["default"])(this);!(b=(x=w.next()).done);b=!0){var _=x.value;for(var S in k){var M=!0,O=!1,$=void 0;try{for(var D,j=(0,h["default"])(e.split(" "));!(M=(D=j.next()).done);M=!0){var C=D.value;k[S]&&k[S].el===_&&k[S].event===C&&(k[S].el.removeEventListener(k[S].event,k[S].callback),delete k[S]);}}catch(y){O=!0,$=y;}finally{try{!M&&j["return"]&&j["return"]();}finally{if(O)throw $;}}}}}catch(y){m=!0,g=y;}finally{try{!b&&w["return"]&&w["return"]();}finally{if(m)throw g;}}}else if(t instanceof Function){var N=!0,B=!1,L=void 0;try{for(var A,P=(0,h["default"])(this);!(N=(A=P.next()).done);N=!0){var T=A.value;for(var E in k){k[E]&&k[E].el===T&&k[E].callback===t&&(k[E].el.removeEventListener(k[E].event,k[E].callback),delete k[E]);}}}catch(y){B=!0,L=y;}finally{try{!N&&P["return"]&&P["return"]();}finally{if(B)throw L;}}}else{var R=!0,z=!1,I=void 0;try{for(var V,W=(0,h["default"])(this);!(R=(V=W.next()).done);R=!0){var F=V.value;for(var Y in k){k[Y]&&k[Y].el===F&&(k[Y].el.removeEventListener(k[Y].event,k[Y].callback),delete k[Y]);}}}catch(y){z=!0,I=y;}finally{try{!R&&W["return"]&&W["return"]();}finally{if(z)throw I;}}}return k=k.filter(function(e){return void 0!==e;}),this;}},{key:"onBlur",value:function value(e){return this&&this.length&&e?(this.each(function(t){_.push({el:t,callback:e});}),w||(w=function w(e){var t=!0,n=!1,i=void 0;try{for(var o,r=(0,h["default"])(_);!(t=(o=r.next()).done);t=!0){var a=o.value,s=a.el.contains(e.target)||a.el===e.target;s||a.callback.call(a.el,e,a.el);}}catch(l){n=!0,i=l;}finally{try{!t&&r["return"]&&r["return"]();}finally{if(n)throw i;}}},document.addEventListener("click",w,!1),document.addEventListener("touchstart",w,!1)),this):this;}},{key:"offBlur",value:function value(e){return this.each(function(t){for(var n in _){!_[n]||_[n].el!==t||e&&_[n].callback!==e||delete _[n];}}),_=_.filter(function(e){return void 0!==e;}),this;}},{key:"asArray",get:function get(){return g.slice.call(this);}}]),e;}(),M=S.prototype;(0,p["default"])(g).forEach(function(e){"join"!==e&&"copyWithin"!==e&&"fill"!==e&&void 0===M[e]&&(M[e]=g[e]);}),window.Symbol&&u["default"]&&(M[u["default"]]=M.values=g[u["default"]]);var O=document.createElement("div");for(var $ in O){r($);}window.NL=a,t["default"]=a;},function(e,t,n){e.exports={"default":n(29),__esModule:!0};},function(e,t,n){n(30);var i=n(33).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n);};},function(e,t,n){var i=n(31);i(i.S+i.F*!n(41),"Object",{defineProperty:n(37).f});},function(e,t,n){var i=n(32),o=n(33),r=n(34),a=n(36),s="prototype",l=function l(e,t,n){var c,u,d,p=e&l.F,f=e&l.G,h=e&l.S,v=e&l.P,y=e&l.B,b=e&l.W,m=f?o:o[t]||(o[t]={}),g=m[s],x=f?i:h?i[t]:(i[t]||{})[s];f&&(n=t);for(c in n){u=!p&&x&&void 0!==x[c],u&&c in m||(d=u?x[c]:n[c],m[c]=f&&"function"!=typeof x[c]?n[c]:y&&u?r(d,i):b&&x[c]==d?function(e){var t=function t(_t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e();case 1:return new e(_t);case 2:return new e(_t,n);}return new e(_t,n,i);}return e.apply(this,arguments);};return t[s]=e[s],t;}(d):v&&"function"==typeof d?r(Function.call,d):d,v&&((m.virtual||(m.virtual={}))[c]=d,e&l.R&&g&&!g[c]&&a(g,c,d)));}};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l;},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n);},function(e,t,n){var i=n(35);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n);};case 2:return function(n,i){return e.call(t,n,i);};case 3:return function(n,i,o){return e.call(t,n,i,o);};}return function(){return e.apply(t,arguments);};};},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e;};},function(e,t,n){var i=n(37),o=n(45);e.exports=n(41)?function(e,t,n){return i.f(e,t,o(1,n));}:function(e,t,n){return e[t]=n,e;};},function(e,t,n){var i=n(38),o=n(40),r=n(44),a=Object.defineProperty;t.f=n(41)?Object.defineProperty:function(e,t,n){if(i(e),t=r(t,!0),i(n),o)try{return a(e,t,n);}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e;};},function(e,t,n){var i=n(39);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e;};},function(e,t){e.exports=function(e){return"object"==(typeof e==="undefined"?"undefined":_typeof(e))?null!==e:"function"==typeof e;};},function(e,t,n){e.exports=!n(41)&&!n(42)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function get(){return 7;}}).a;});},function(e,t,n){e.exports=!n(42)(function(){return 7!=Object.defineProperty({},"a",{get:function get(){return 7;}}).a;});},function(e,t){e.exports=function(e){try{return!!e();}catch(t){return!0;}};},function(e,t,n){var i=n(39),o=n(32).document,r=i(o)&&i(o.createElement);e.exports=function(e){return r?o.createElement(e):{};};},function(e,t,n){var i=n(39);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value");};},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t};};},function(e,t,n){e.exports={"default":n(47),__esModule:!0};},function(e,t,n){n(48),n(77),e.exports=n(81).f("iterator");},function(e,t,n){"use strict";var i=n(49)(!0);n(52)(String,"String",function(e){this._t=String(e),this._i=0;},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1});});},function(e,t,n){var i=n(50),o=n(51);e.exports=function(e){return function(t,n){var r,a,s=String(o(t)),l=i(n),c=s.length;return l<0||l>=c?e?"":void 0:(r=s.charCodeAt(l),r<55296||r>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?e?s.charAt(l):r:e?s.slice(l,l+2):(r-55296<<10)+(a-56320)+65536);};};},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e);};},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e;};},function(e,t,n){"use strict";var i=n(53),o=n(31),r=n(54),a=n(36),s=n(55),l=n(56),c=n(57),u=n(73),d=n(75),p=n(74)("iterator"),f=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",y="values",b=function b(){return this;};e.exports=function(e,t,n,m,g,x,w){c(n,t,m);var _,k,S,M=function M(e){if(!f&&e in j)return j[e];switch(e){case v:return function(){return new n(this,e);};case y:return function(){return new n(this,e);};}return function(){return new n(this,e);};},O=t+" Iterator",$=g==y,D=!1,j=e.prototype,C=j[p]||j[h]||g&&j[g],N=C||M(g),B=g?$?M("entries"):N:void 0,L="Array"==t?j.entries||C:C;if(L&&(S=d(L.call(new e())),S!==Object.prototype&&(u(S,O,!0),i||s(S,p)||a(S,p,b))),$&&C&&C.name!==y&&(D=!0,N=function N(){return C.call(this);}),i&&!w||!f&&!D&&j[p]||a(j,p,N),l[t]=N,l[O]=b,g)if(_={values:$?N:M(y),keys:x?N:M(v),entries:B},w)for(k in _){k in j||r(j,k,_[k]);}else o(o.P+o.F*(f||D),t,_);return _;};},function(e,t){e.exports=!0;},function(e,t,n){e.exports=n(36);},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t);};},function(e,t){e.exports={};},function(e,t,n){"use strict";var i=n(58),o=n(45),r=n(73),a={};n(36)(a,n(74)("iterator"),function(){return this;}),e.exports=function(e,t,n){e.prototype=i(a,{next:o(1,n)}),r(e,t+" Iterator");};},function(e,t,n){var i=n(38),o=n(59),r=n(71),a=n(68)("IE_PROTO"),s=function s(){},l="prototype",_c=function c(){var e,t=n(43)("iframe"),i=r.length,o="<",a=">";for(t.style.display="none",n(72).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(o+"script"+a+"document.F=Object"+o+"/script"+a),e.close(),_c=e.F;i--;){delete _c[l][r[i]];}return _c();};e.exports=Object.create||function(e,t){var n;return null!==e?(s[l]=i(e),n=new s(),s[l]=null,n[a]=e):n=_c(),void 0===t?n:o(n,t);};},function(e,t,n){var i=n(37),o=n(38),r=n(60);e.exports=n(41)?Object.defineProperties:function(e,t){o(e);for(var n,a=r(t),s=a.length,l=0;s>l;){i.f(e,n=a[l++],t[n]);}return e;};},function(e,t,n){var i=n(61),o=n(71);e.exports=Object.keys||function(e){return i(e,o);};},function(e,t,n){var i=n(55),o=n(62),r=n(65)(!1),a=n(68)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),l=0,c=[];for(n in s){n!=a&&i(s,n)&&c.push(n);}for(;t.length>l;){i(s,n=t[l++])&&(~r(c,n)||c.push(n));}return c;};},function(e,t,n){var i=n(63),o=n(51);e.exports=function(e){return i(o(e));};},function(e,t,n){var i=n(64);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e);};},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1);};},function(e,t,n){var i=n(62),o=n(66),r=n(67);e.exports=function(e){return function(t,n,a){var s,l=i(t),c=o(l.length),u=r(a,c);if(e&&n!=n){for(;c>u;){if(s=l[u++],s!=s)return!0;}}else for(;c>u;u++){if((e||u in l)&&l[u]===n)return e||u||0;}return!e&&-1;};};},function(e,t,n){var i=n(50),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0;};},function(e,t,n){var i=n(50),o=Math.max,r=Math.min;e.exports=function(e,t){return e=i(e),e<0?o(e+t,0):r(e,t);};},function(e,t,n){var i=n(69)("keys"),o=n(70);e.exports=function(e){return i[e]||(i[e]=o(e));};},function(e,t,n){var i=n(32),o="__core-js_shared__",r=i[o]||(i[o]={});e.exports=function(e){return r[e]||(r[e]={});};},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36));};},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},function(e,t,n){e.exports=n(32).document&&document.documentElement;},function(e,t,n){var i=n(37).f,o=n(55),r=n(74)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,r)&&i(e,r,{configurable:!0,value:t});};},function(e,t,n){var i=n(69)("wks"),o=n(70),r=n(32).Symbol,a="function"==typeof r,s=e.exports=function(e){return i[e]||(i[e]=a&&r[e]||(a?r:o)("Symbol."+e));};s.store=i;},function(e,t,n){var i=n(55),o=n(76),r=n(68)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),i(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null;};},function(e,t,n){var i=n(51);e.exports=function(e){return Object(i(e));};},function(e,t,n){n(78);for(var i=n(32),o=n(36),r=n(56),a=n(74)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],l=0;l<5;l++){var c=s[l],u=i[c],d=u&&u.prototype;d&&!d[a]&&o(d,a,c),r[c]=r.Array;}},function(e,t,n){"use strict";var i=n(79),o=n(80),r=n(56),a=n(62);e.exports=n(52)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t;},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,n):"values"==t?o(0,e[n]):o(0,[n,e[n]]);},"values"),r.Arguments=r.Array,i("keys"),i("values"),i("entries");},function(e,t){e.exports=function(){};},function(e,t){e.exports=function(e,t){return{value:t,done:!!e};};},function(e,t,n){t.f=n(74);},function(e,t,n){e.exports={"default":n(83),__esModule:!0};},function(e,t,n){n(84);var i=n(33).Object;e.exports=function(e){return i.getOwnPropertyNames(e);};},function(e,t,n){n(85)("getOwnPropertyNames",function(){return n(86).f;});},function(e,t,n){var i=n(31),o=n(33),r=n(42);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),i(i.S+i.F*r(function(){n(1);}),"Object",a);};},function(e,t,n){var i=n(62),o=n(87).f,r={}.toString,a="object"==(typeof window==="undefined"?"undefined":_typeof(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function s(e){try{return o(e);}catch(t){return a.slice();}};e.exports.f=function(e){return a&&"[object Window]"==r.call(e)?s(e):o(i(e));};},function(e,t,n){var i=n(61),o=n(71).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o);};},function(e,t,n){e.exports={"default":n(89),__esModule:!0};},function(e,t,n){n(77),n(48),e.exports=n(90);},function(e,t,n){var i=n(38),o=n(91);e.exports=n(33).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e));};},function(e,t,n){var i=n(92),o=n(74)("iterator"),r=n(56);e.exports=n(33).getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||r[i(e)];};},function(e,t,n){var i=n(64),o=n(74)("toStringTag"),r="Arguments"==i(function(){return arguments;}()),a=function a(e,t){try{return e[t];}catch(n){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),o))?n:r?i(t):"Object"==(s=i(t))&&"function"==typeof t.callee?"Arguments":s;};},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");};},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}t.__esModule=!0;var o=n(28),r=i(o);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r["default"])(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t;};}();},function(e,t,n){e.exports=n(96),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(98);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{type:{type:String,"default":null},oneAtAtime:{type:Boolean,coerce:i.coerce["boolean"],"default":!1}},created:function created(){var e=this;this._isAccordion=!0,this.$on("isOpenEvent",function(t){e.oneAtAtime&&e.$children.forEach(function(e){t!==e&&(e.isOpen=!1);});});}};},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}function o(e){for(var t=new window.XMLHttpRequest(),n={},i={then:function then(e,t){return i.done(e).fail(t);},"catch":function _catch(e){return i.fail(e);},always:function always(e){return i.done(e).fail(e);}},o=["done","fail"],r=function r(){var e=o[a];n[e]=[],i[e]=function(t){return t instanceof Function&&n[e].push(t),i;};},a=0;a<o.length;a++){r();}return i.done(JSON.parse),t.onreadystatechange=function(){if(4===t.readyState){var e={status:t.status};if(200===t.status)try{var i=void 0,o=t.responseText,r=!0,a=!1,s=void 0;try{for(var c,u=(0,l["default"])(n.done);!(r=(c=u.next()).done);r=!0){var d=c.value;void 0!==(i=d(o))&&(o=i);}}catch(p){a=!0,s=p;}finally{try{!r&&u["return"]&&u["return"]();}finally{if(a)throw s;}}}catch(e){var f=!0,h=!1,v=void 0;try{for(var y,b=(0,l["default"])(n.fail);!(f=(y=b.next()).done);f=!0){var m=y.value;m(e);}}catch(p){h=!0,v=p;}finally{try{!f&&b["return"]&&b["return"]();}finally{if(h)throw v;}}}else{var g=!0,x=!1,w=void 0;try{for(var _,k=(0,l["default"])(n.fail);!(g=(_=k.next()).done);g=!0){var S=_.value;S(e);}}catch(p){x=!0,w=p;}finally{try{!g&&k["return"]&&k["return"]();}finally{if(x)throw w;}}}}},t.open("GET",e),t.setRequestHeader("Accept","application/json"),t.send(),i;}function r(){if(document.documentElement.scrollHeight<=document.documentElement.clientHeight)return 0;var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;return n===i&&(i=t.clientWidth),document.body.removeChild(t),n-i;}function a(e){e=e||"en";var t={daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],limit:"Limit reached ({{limit}} items max).",loading:"Loading...",minLength:"Min. Length",months:["January","February","March","April","May","June","July","August","September","October","November","December"],notSelected:"Nothing Selected",required:"Required",search:"Search"};return window.VueStrapLang?window.VueStrapLang(e):t;}Object.defineProperty(t,"__esModule",{value:!0}),t.coerce=void 0;var s=n(88),l=i(s);t.getJSON=o,t.getScrollBarWidth=r,t.translations=a;t.coerce={"boolean":function boolean(e){return"string"==typeof e?"false"!==e&&"null"!==e&&"undefined"!==e&&("true"===e||e):e;},number:function number(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return"number"==typeof e?e:void 0===e||null===e||isNaN(Number(e))?t:Number(e);},string:function string(e){return void 0===e||null===e?"":e+"";},pattern:function pattern(e){return e instanceof Function||e instanceof RegExp?e:"string"==typeof e?new RegExp(e):null;}};},function(e,t){e.exports="<div class=panel-group> <slot></slot> </div>";},function(e,t,n){e.exports=n(100),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(101);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{offset:{type:Number,coerce:o.coerce.number,"default":0}},data:function data(){return{affixed:!1};},computed:{top:function top(){return this.offset>0?this.offset+"px":null;}},methods:{checkScroll:function checkScroll(){if(this.$el.offsetWidth||this.$el.offsetHeight||this.$el.getClientRects().length){for(var e={},t={},n=this.$el.getBoundingClientRect(),i=document.body,o=["Top","Left"],r=0;r<o.length;r++){var a=o[r],s=a.toLowerCase(),l=window["page"+("Top"===a?"Y":"X")+"Offset"],c="scroll"+a;"number"!=typeof l&&(l=document.documentElement[c],"number"!=typeof l&&(l=document.body[c])),e[s]=l,t[s]=e[s]+n[s]-(this.$el["client"+a]||i["client"+a]||0);}var u=e.top>t.top-this.offset;this.affixed!==u&&(this.affixed=u);}}},ready:function ready(){var e=this;this.checkScroll(),(0,a["default"])(window).on("scroll resize",function(){return e.checkScroll();});},beforeDestroy:function beforeDestroy(){var e=this;(0,a["default"])(window).off("scroll resize",function(){return e.checkScroll();});}};},function(e,t){e.exports='<div class="hidden-print hidden-xs hidden-sm"> <nav class=bs-docs-sidebar :class={affix:affixed} :style={marginTop:top}> <slot></slot> </nav> </div>';},function(e,t,n){n(103),e.exports=n(107),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(108);},function(e,t,n){var i=n(104);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".fade-transition{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.fade-enter,.fade-leave{height:0;opacity:0}.alert.top{margin:0 auto;left:0;right:0}.alert.top,.alert.top-right{position:fixed;top:30px;z-index:1050}.alert.top-right{right:50px}",""]);},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1]);}return e.join("");},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0);}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a));}},e;};},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=f[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++){o.parts[r](i.parts[r]);}for(;r<i.parts.length;r++){o.parts.push(c(i.parts[r],t));}}else{for(var a=[],r=0;r<i.parts.length;r++){a.push(c(i.parts[r],t));}f[i.id]={id:i.id,refs:1,parts:a};}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],a=o[1],s=o[2],l=o[3],c={css:a,media:s,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]});}return t;}function r(e,t){var n=y(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t);}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1);}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t;}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t;}function c(e,t){var n,i,o;if(t.singleton){var r=m++;n=b||(b=s(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0);}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=p.bind(null,n),o=function o(){a(n),n.href&&URL.revokeObjectURL(n.href);}):(n=s(t),i=d.bind(null,n),o=function o(){a(n);});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t);}else o();};}function u(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r);}}function d(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;){e.removeChild(e.firstChild);}e.appendChild(document.createTextNode(n));}}function p(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r);}var f={},h=function h(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t;};},v=h(function(){return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());}),y=h(function(){return document.head||document.getElementsByTagName("head")[0];}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=f[s.id];l.refs--,r.push(l);}if(e){var c=o(e);i(c,t);}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++){l.parts[u]();}delete f[l.id];}}};};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n");};}();},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{type:{type:String},dismissable:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},show:{type:Boolean,coerce:i.coerce["boolean"],"default":!0,twoWay:!0},duration:{type:Number,coerce:i.coerce.number,"default":0},width:{type:String},placement:{type:String}},watch:{show:function show(e){var t=this;this._timeout&&clearTimeout(this._timeout),e&&Boolean(this.duration)&&(this._timeout=setTimeout(function(){t.show=!1;},this.duration));}}};},function(e,t){e.exports="<div v-show=show v-bind:class=\"{\r\n      'alert':\t\ttrue,\r\n      'alert-success':(type == 'success'),\r\n      'alert-warning':(type == 'warning'),\r\n      'alert-info':\t(type == 'info'),\r\n      'alert-danger':\t(type == 'danger'),\r\n      'top': \t\t\t(placement === 'top'),\r\n      'top-right': \t(placement === 'top-right')\r\n    }\" transition=fade v-bind:style={width:width} role=alert> <button v-show=dismissable type=button class=close @click=\"show = false\"> <span>&times;</span> </button> <slot></slot> </div>";},function(e,t,n){n(110),e.exports=n(112),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(113);},function(e,t,n){var i=n(111);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".aside-open{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.aside-open.has-push-right{-webkit-transform:translateX(-300px);transform:translateX(-300px)}.aside{position:fixed;top:0;bottom:0;z-index:1049;overflow:auto;background:#fff}.aside.left{left:0;right:auto}.aside.right{left:auto;right:0}.slideleft-enter{-webkit-animation:slideleft-in .3s;animation:slideleft-in .3s}.slideleft-leave{-webkit-animation:slideleft-out .3s;animation:slideleft-out .3s}@-webkit-keyframes slideleft-in{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slideleft-in{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes slideleft-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}@keyframes slideleft-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(-100%);transform:translateX(-100%);opacity:0}}.slideright-enter{-webkit-animation:slideright-in .3s;animation:slideright-in .3s}.slideright-leave{-webkit-animation:slideright-out .3s;animation:slideright-out .3s}@-webkit-keyframes slideright-in{0%{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slideright-in{0%{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes slideright-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}}@keyframes slideright-out{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}to{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}}.aside:focus{outline:0}@media (max-width:991px){.aside{min-width:240px}}.aside.left{right:auto;left:0}.aside.right{right:0;left:auto}.aside .aside-dialog .aside-header{border-bottom:1px solid #e5e5e5;min-height:16.43px;padding:6px 15px;background:#337ab7;color:#fff}.aside .aside-dialog .aside-header .close{margin-right:-8px;padding:4px 8px;color:#fff;font-size:25px;opacity:.8}.aside .aside-dialog .aside-body{position:relative;padding:15px}.aside .aside-dialog .aside-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.aside .aside-dialog .aside-footer .btn+.btn{margin-left:5px;margin-bottom:0}.aside .aside-dialog .aside-footer .btn-group .btn+.btn{margin-left:-1px}.aside .aside-dialog .aside-footer .btn-block+.btn-block{margin-left:0}.aside-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;background-color:#000}.aside-backdrop.in{opacity:.5;filter:alpha(opacity=50)}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{show:{type:Boolean,coerce:o.coerce["boolean"],required:!0,twoWay:!0},placement:{type:String,"default":"right"},header:{type:String},width:{type:Number,coerce:o.coerce.number,"default":320}},watch:{show:function show(e){var t=this,n=document.body,i=(0,o.getScrollBarWidth)();if(e){this._backdrop||(this._backdrop=document.createElement("div")),this._backdrop.className="aside-backdrop",n.appendChild(this._backdrop),n.classList.add("modal-open"),0!==i&&(n.style.paddingRight=i+"px");this._backdrop.clientHeight;this._backdrop.classList.add("in"),(0,a["default"])(this._backdrop).on("click",function(){return t.close();});}else(0,a["default"])(this._backdrop).on("transitionend",function(){(0,a["default"])(t._backdrop).off();try{n.classList.remove("modal-open"),n.style.paddingRight="0",n.removeChild(t._backdrop),t._backdrop=null;}catch(e){}}),this._backdrop.className="aside-backdrop";}},methods:{close:function close(){this.show=!1;}}};},function(e,t){e.exports="<div class=aside v-bind:style=\"{width:width + 'px'}\" v-bind:class=\"{\r\n    left:placement === 'left',\r\n    right:placement === 'right'\r\n    }\" v-show=show :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\"> <div class=aside-dialog> <div class=aside-content> <div class=aside-header> <button type=button class=close @click=close><span>&times;</span></button> <h4 class=aside-title> <slot name=header> {{ header }} </slot> </h4> </div> <div class=aside-body> <slot></slot> </div> </div> </div> </div>";},function(e,t,n){e.exports=n(115),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(116);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{value:null,buttons:{type:Boolean,coerce:i.coerce["boolean"],"default":!0},type:{type:String,"default":"default"}},watch:{value:{deep:!0,handler:function handler(e){this.$children.forEach(function(e){e.group&&e.eval&&e.eval();});}}},created:function created(){this._btnGroup=!0;}};},function(e,t){e.exports="<div :class=\"{'btn-group':buttons}\" :data-toggle=\"buttons&&'buttons'\"> <slot></slot> </div>";},function(e,t,n){n(118),e.exports=n(120),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(121);},function(e,t,n){var i=n(119);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".carousel-control[_v-322dee41]{cursor:pointer}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{indicators:{type:Boolean,coerce:o.coerce["boolean"],"default":!0},controls:{type:Boolean,coerce:o.coerce["boolean"],"default":!0},interval:{type:Number,coerce:o.coerce.number,"default":5e3}},data:function data(){return{indicator:[],index:0,isAnimating:!1};},watch:{index:function index(e,t){this.slide(e>t?"left":"right",e,t);}},methods:{indicatorClick:function indicatorClick(e){return!this.isAnimating&&this.index!==e&&(this.isAnimating=!0,void(this.index=e));},slide:function slide(e,t,n){var i=this;if(this.$el){var o=(0,a["default"])(".item",this.$el);if(o.length){var r=o[t]||o[0];(0,a["default"])(r).addClass("left"===e?"next":"prev");r.clientHeight;(0,a["default"])([o[n],r]).addClass(e).on("transitionend",function(){o.off("transitionend").className="item",(0,a["default"])(r).addClass("active"),i.isAnimating=!1;});}}},next:function next(){return!(!this.$el||this.isAnimating)&&(this.isAnimating=!0,void(this.index+1<(0,a["default"])(".item",this.$el).length?this.index+=1:this.index=0));},prev:function prev(){return!(!this.$el||this.isAnimating)&&(this.isAnimating=!0,void(0===this.index?this.index=(0,a["default"])(".item",this.$el).length-1:this.index-=1));},toggleInterval:function toggleInterval(e){void 0===e&&(e=this._intervalID),this._intervalID&&(clearInterval(this._intervalID),delete this._intervalID),e&&this.interval>0&&(this._intervalID=setInterval(this.next,this.interval));}},ready:function ready(){var e=this;this.toggleInterval(!0),(0,a["default"])(this.$el).on("mouseenter",function(){return e.toggleInterval(!1);}).on("mouseleave",function(){return e.toggleInterval(!0);});},beforeDestroy:function beforeDestroy(){this.toggleInterval(!1),(0,a["default"])(this.$el).off("mouseenter mouseleave");}};},function(e,t){e.exports='<div class="carousel slide" data-ride=carousel _v-322dee41=""> <ol class=carousel-indicators v-show=indicators _v-322dee41=""> <li v-for="i in indicator" @click=indicatorClick($index) v-bind:class="{active:$index === index}" _v-322dee41=""><span _v-322dee41=""></span></li> </ol> <div class=carousel-inner role=listbox _v-322dee41=""> <slot _v-322dee41=""></slot> </div> <div v-show=controls class="carousel-controls hidden-xs" _v-322dee41=""> <a class="left carousel-control" role=button @click=prev _v-322dee41=""> <span class="glyphicon glyphicon-chevron-left" aria-hidden=true _v-322dee41=""></span> </a> <a class="right carousel-control" role=button @click=next _v-322dee41=""> <span class="glyphicon glyphicon-chevron-right" aria-hidden=true _v-322dee41=""></span> </a> </div> </div>';},function(e,t,n){n(123),e.exports=n(125),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(126);},function(e,t,n){var i=n(124);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,"label.checkbox[_v-6922bf24]{position:relative;padding-left:18px}label.checkbox>input[_v-6922bf24]{box-sizing:border-box;position:absolute;z-index:-1;padding:0;opacity:0;margin:0}label.checkbox>.icon[_v-6922bf24]{position:absolute;top:.2rem;left:0;display:block;width:1.4rem;height:1.4rem;line-height:1rem;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:.35rem;background-repeat:no-repeat;background-position:50%;background-size:50% 50%}label.checkbox:not(.active)>.icon[_v-6922bf24]{background-color:#ddd;border:1px solid #bbb}label.checkbox>input:focus~.icon[_v-6922bf24]{outline:0;border:1px solid #66afe9;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}label.checkbox.active>.icon[_v-6922bf24]{background-size:1rem 1rem;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+)}label.checkbox.active .btn-default[_v-6922bf24]{-webkit-filter:brightness(75%);filter:brightness(75%)}.btn.readonly[_v-6922bf24],label.checkbox.disabled[_v-6922bf24],label.checkbox.readonly[_v-6922bf24]{filter:alpha(opacity=65);box-shadow:none;opacity:.65}label.btn>input[type=checkbox][_v-6922bf24]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}",""]);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{value:{"default":!0},checked:{twoWay:!0},button:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},disabled:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},name:{type:String,"default":null},readonly:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},type:{type:String,"default":null}},computed:{active:function active(){return"boolean"!=typeof this.value&&this.group?~this.$parent.value.indexOf(this.value):this.checked===this.value;},isButton:function isButton(){return this.button||this.group&&this.$parent.buttons;},group:function group(){return this.$parent&&this.$parent._checkboxGroup;},typeColor:function typeColor(){return this.type||this.$parent&&this.$parent.type||"default";}},watch:{checked:function checked(e){"boolean"!=typeof this.value&&this.group&&(this.checked&&!~this.$parent.value.indexOf(this.value)&&this.$parent.value.push(this.value),!this.checked&&~this.$parent.value.indexOf(this.value)&&this.$parent.value.$remove(this.value));}},created:function created(){if("boolean"!=typeof this.value){var e=this.$parent;e&&e._btnGroup&&!e._radioGroup&&(e._checkboxGroup=!0,e.value instanceof Array||(e.value=[]));}},ready:function ready(){this.$parent._checkboxGroup&&"boolean"!=typeof this.value&&(this.$parent.value.length?this.checked=~this.$parent.value.indexOf(this.value):this.checked&&this.$parent.value.push(this.value));},methods:{eval:function _eval(){"boolean"!=typeof this.value&&this.group&&(this.checked=~this.$parent.value.indexOf(this.value));},focus:function focus(){this.$els.input.focus();},toggle:function toggle(){if(!this.disabled&&(this.focus(),!this.readonly&&(this.checked=this.checked?null:this.value,this.group&&"boolean"!=typeof this.value))){var e=this.$parent.value.indexOf(this.value);this.$parent.value[~e?"$remove":"push"](this.value);}return!1;}}};},function(e,t){e.exports='<label :class="[isButton?\'btn btn-\'+typeColor:\'open checkbox \'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent=toggle _v-6922bf24=""> <input type=checkbox autocomplete=off v-el:input="" :checked=active :value=value :name=name :readonly=readonly :disabled=disabled _v-6922bf24=""> <span v-if=!isButton class="icon dropdown-toggle" :class="[active?\'btn-\'+typeColor:\'\',{bg:typeColor===\'default\'}]" _v-6922bf24=""></span> <span v-if="!isButton&amp;active&amp;&amp;typeColor===\'default\'" class=icon _v-6922bf24=""></span> <slot _v-6922bf24=""></slot> </label>';},function(e,t,n){n(128),e.exports=n(130),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(131);},function(e,t,n){var i=n(129);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".datepicker{position:relative;display:inline-block}input.datepicker-input.with-reset-button{padding-right:25px}.datepicker>button.close{position:absolute;top:0;right:0;outline:none;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center}.datepicker>button.close:focus{opacity:.2}.datepicker-popup{position:absolute;border:1px solid #ccc;border-radius:5px;background:#fff;margin-top:2px;z-index:1000;box-shadow:0 6px 12px rgba(0,0,0,.175)}.datepicker-inner{width:218px}.datepicker-body{padding:10px}.datepicker-body span,.datepicker-ctrl p,.datepicker-ctrl span{display:inline-block;width:28px;line-height:28px;height:28px;border-radius:4px}.datepicker-ctrl p{width:65%}.datepicker-ctrl span{position:absolute}.datepicker-body span{text-align:center}.datepicker-monthRange span{width:48px;height:50px;line-height:45px}.datepicker-item-disable{background-color:#fff!important;cursor:not-allowed!important}.datepicker-item-disable,.datepicker-item-gray,.decadeRange span:first-child,.decadeRange span:last-child{color:#999}.datepicker-dateRange-item-active,.datepicker-dateRange-item-active:hover{background:#3276b1!important;color:#fff!important}.datepicker-monthRange{margin-top:10px}.datepicker-ctrl p,.datepicker-ctrl span,.datepicker-dateRange span,.datepicker-monthRange span{cursor:pointer}.datepicker-ctrl i:hover,.datepicker-ctrl p:hover,.datepicker-dateRange-item-hover,.datepicker-dateRange span:hover,.datepicker-monthRange span:hover{background-color:#eee}.datepicker-weekRange span{font-weight:700}.datepicker-label{background-color:#f8f8f8;font-weight:700;padding:7px 0;text-align:center}.datepicker-ctrl{position:relative;height:30px;line-height:30px;font-weight:700;text-align:center}.month-btn{font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker-preBtn{left:2px}.datepicker-nextBtn{right:2px}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{value:{type:String,twoWay:!0},format:{"default":"MM/dd/yyyy"},disabledDaysOfWeek:{type:Array,"default":function _default(){return[];}},width:{type:String,"default":"200px"},clearButton:{type:Boolean,"default":!1},lang:{type:String,"default":navigator.language},placeholder:{type:String}},ready:function ready(){var e=this;this._blur=function(t){e.$el.contains(t.target)||e.close();},this.$dispatch("child-created",this),this.currDate=this.parse(this.value)||this.parse(new Date()),(0,a["default"])(window).on("click",this._blur);},beforeDestroy:function beforeDestroy(){(0,a["default"])(window).off("click",this._blur);},data:function data(){return{currDate:new Date(),dateRange:[],decadeRange:[],displayDayView:!1,displayMonthView:!1,displayYearView:!1};},watch:{currDate:function currDate(){this.getDateRange();}},computed:{text:function text(){return(0,o.translations)(this.lang);}},methods:{close:function close(){this.displayDayView=this.displayMonthView=this.displayYearView=!1;},inputClick:function inputClick(){this.currDate=this.parse(this.value)||this.parse(new Date()),this.displayMonthView||this.displayYearView?this.displayDayView=!1:this.displayDayView=!this.displayDayView;},preNextDecadeClick:function preNextDecadeClick(e){var t=this.currDate.getFullYear(),n=this.currDate.getMonth(),i=this.currDate.getDate();0===e?this.currDate=new Date(t-10,n,i):this.currDate=new Date(t+10,n,i);},preNextMonthClick:function preNextMonthClick(e){var t=this.currDate.getFullYear(),n=this.currDate.getMonth(),i=this.currDate.getDate();if(0===e){var o=this.getYearMonth(t,n-1);this.currDate=new Date(o.year,o.month,i);}else{var r=this.getYearMonth(t,n+1);this.currDate=new Date(r.year,r.month,i);}},preNextYearClick:function preNextYearClick(e){var t=this.currDate.getFullYear(),n=this.currDate.getMonth(),i=this.currDate.getDate();0===e?this.currDate=new Date(t-1,n,i):this.currDate=new Date(t+1,n,i);},yearSelect:function yearSelect(e){this.displayYearView=!1,this.displayMonthView=!0,this.currDate=new Date(e,this.currDate.getMonth(),this.currDate.getDate());},daySelect:function daySelect(e,t){return"datepicker-item-disable"!==t.$el.classList[0]&&(this.currDate=e,this.value=this.stringify(this.currDate),this.displayDayView=!1,void 0);},switchMonthView:function switchMonthView(){this.displayDayView=!1,this.displayMonthView=!0;},switchDecadeView:function switchDecadeView(){this.displayMonthView=!1,this.displayYearView=!0;},monthSelect:function monthSelect(e){this.displayMonthView=!1,this.displayDayView=!0,this.currDate=new Date(this.currDate.getFullYear(),e,this.currDate.getDate());},getYearMonth:function getYearMonth(e,t){return t>11?(e++,t=0):t<0&&(e--,t=11),{year:e,month:t};},stringifyDecadeHeader:function stringifyDecadeHeader(e){var t=e.getFullYear().toString(),n=t.substring(0,t.length-1)+0,i=parseInt(n,10)+10;return n+"-"+i;},stringifyDayHeader:function stringifyDayHeader(e){return this.text.months[e.getMonth()]+" "+e.getFullYear();},parseMonth:function parseMonth(e){return this.text.months[e.getMonth()];},stringifyYearHeader:function stringifyYearHeader(e){return e.getFullYear();},stringify:function stringify(e){var t=arguments.length<=1||void 0===arguments[1]?this.format:arguments[1];if(e||(e=this.parse()),!e)return"";var n=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),r=this.parseMonth(e);return t.replace(/yyyy/g,n).replace(/MMMM/g,r).replace(/MMM/g,r.substring(0,3)).replace(/MM/g,("0"+i).slice(-2)).replace(/dd/g,("0"+o).slice(-2)).replace(/yy/g,n).replace(/M(?!a)/g,i).replace(/d/g,o);},parse:function parse(){var e=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0],t=void 0;return t=10!==e.length||"dd-MM-yyyy"!==this.format&&"dd/MM/yyyy"!==this.format?new Date(e):new Date(e.substring(6,10),e.substring(3,5),e.substring(0,2)),isNaN(t.getFullYear())?new Date(null):t;},getDayCount:function getDayCount(e,t){var n=[31,28,31,30,31,30,31,31,30,31,30,31];return 1===t&&(e%400===0||e%4===0&&e%100!==0)?29:n[t];},getDateRange:function getDateRange(){var e=this;this.dateRange=[],this.decadeRange=[];for(var t={year:this.currDate.getFullYear(),month:this.currDate.getMonth(),day:this.currDate.getDate()},n=t.year.toString(),i=n.substring(0,n.length-1)+0-1,o=0;o<12;o++){this.decadeRange.push({text:i+o});}var r=new Date(t.year,t.month,1),a=r.getDay()+1;0===a&&(a=7);var s=this.getDayCount(t.year,t.month);if(a>1)for(var l=this.getYearMonth(t.year,t.month-1),c=this.getDayCount(l.year,l.month),u=1;u<a;u++){var d=c-a+u+1;this.dateRange.push({text:d,date:new Date(l.year,l.month,d),sclass:"datepicker-item-gray"});}for(var p=function p(n){var i=new Date(t.year,t.month,n),o=i.getDay(),r="";if(e.disabledDaysOfWeek.forEach(function(e){o===parseInt(e,10)&&(r="datepicker-item-disable");}),n===t.day&&e.value){var a=e.parse(e.value);a&&a.getFullYear()===t.year&&a.getMonth()===t.month&&(r="datepicker-dateRange-item-active");}e.dateRange.push({text:n,date:i,sclass:r});},f=1;f<=s;f++){p(f);}if(this.dateRange.length<42)for(var h=42-this.dateRange.length,v=this.getYearMonth(t.year,t.month+1),y=1;y<=h;y++){this.dateRange.push({text:y,date:new Date(v.year,v.month,y),sclass:"datepicker-item-gray"});}}}};},function(e,t){e.exports='<div class=datepicker> <input class="form-control datepicker-input" :class="{\'with-reset-button\': clearButton}" type=text :placeholder=placeholder :style={width:width} @click=inputClick v-model=value /> <button v-if="clearButton && value" type=button class=close @click="value = \'\'"> <span>&times;</span> </button> <div class=datepicker-popup v-show=displayDayView> <div class=datepicker-inner> <div class=datepicker-body> <div class=datepicker-ctrl> <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden=true @click=preNextMonthClick(0)></span> <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden=true @click=preNextMonthClick(1)></span> <p @click=switchMonthView>{{stringifyDayHeader(currDate)}}</p> </div> <div class=datepicker-weekRange> <span v-for="w in text.daysOfWeek">{{w}}</span> </div> <div class=datepicker-dateRange> <span v-for="d in dateRange" :class=d.sclass @click=daySelect(d.date,this)>{{d.text}}</span> </div> </div> </div> </div> <div class=datepicker-popup v-show=displayMonthView> <div class=datepicker-inner> <div class=datepicker-body> <div class=datepicker-ctrl> <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden=true @click=preNextYearClick(0)></span> <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden=true @click=preNextYearClick(1)></span> <p @click=switchDecadeView>{{stringifyYearHeader(currDate)}}</p> </div> <div class=datepicker-monthRange> <template v-for="m in text.months"> <span :class="{\'datepicker-dateRange-item-active\':\r\n                  (text.months[parse(value).getMonth()]  === m) &&\r\n                  currDate.getFullYear() === parse(value).getFullYear()}" @click=monthSelect($index)>{{m.substr(0,3)}}</span> </template> </div> </div> </div> </div> <div class=datepicker-popup v-show=displayYearView> <div class=datepicker-inner> <div class=datepicker-body> <div class=datepicker-ctrl> <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden=true @click=preNextDecadeClick(0)></span> <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden=true @click=preNextDecadeClick(1)></span> <p>{{stringifyDecadeHeader(currDate)}}</p> </div> <div class="datepicker-monthRange decadeRange"> <template v-for="decade in decadeRange"> <span :class="{\'datepicker-dateRange-item-active\':\r\n                  parse(this.value).getFullYear() === decade.text}" @click.stop=yearSelect(decade.text)>{{decade.text}}</span> </template> </div> </div> </div> </div> </div>';},function(e,t,n){n(133),e.exports=n(135),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(136);},function(e,t,n){var i=n(134);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".secret[_v-39be1072]{position:absolute;clip:rect(0 0 0 0);overflow:hidden;margin:-1px;height:1px;width:1px;padding:0;border:0}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{show:{twoWay:!0,type:Boolean,coerce:o.coerce["boolean"],"default":!1},"class":null,disabled:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},text:{type:String,"default":null},type:{type:String,"default":null}},computed:{classes:function classes(){return[{open:this.show,disabled:this.disabled},this["class"]];},menu:function menu(){return!this.$parent||this.$parent.navbar;},submenu:function submenu(){return this.$parent&&(this.$parent.menu||this.$parent.submenu);},slots:function slots(){return this._slotContents;}},methods:{blur:function blur(){var e=this;this.unblur(),this._hide=setTimeout(function(){e._hide=null,e.show=!1;},100);},unblur:function unblur(){this._hide&&(clearTimeout(this._hide),this._hide=null);}},ready:function ready(){var e=this,t=(0,a["default"])(this.$els.dropdown);t.onBlur(function(t){e.show=!1;}),t.findChildren("a,button").on("click",function(t){return t.preventDefault(),!e.disabled&&(e.show=!e.show,!1);}),t.findChildren("ul").on("click","li>a",function(t){e.show=!1;});},beforeDestroy:function beforeDestroy(){var e=(0,a["default"])(this.$els.dropdown);e.offBlur(),e.findChildren("a,button").off(),e.findChildren("ul").off();}};},function(e,t){e.exports='<li v-if=$parent._navbar||$parent.menu||$parent._tabset v-el:dropdown="" class=dropdown :class=classes _v-39be1072=""> <a v-if=text class=dropdown-toggle role=button :class="{disabled: disabled}" @keyup.esc="show = false" _v-39be1072=""> {{ text }} <span class=caret _v-39be1072=""></span> </a> <slot v-else="" name=button _v-39be1072=""></slot> <slot v-if="slots[\'dropdown-menu\']" name=dropdown-menu _v-39be1072=""></slot> <ul v-else="" class=dropdown-menu _v-39be1072=""> <slot _v-39be1072=""></slot> </ul> </li> <div v-else="" v-el:dropdown="" class=btn-group :class=classes _v-39be1072=""> <button v-if=text type=button class="btn btn-{{type||\'default\'}} dropdown-toggle" @keyup.esc="show = false" :disabled=disabled _v-39be1072=""> {{ text }} <span class=caret _v-39be1072=""></span> </button> <slot v-else="" name=button _v-39be1072=""></slot> <slot v-if="slots[\'dropdown-menu\']" name=dropdown-menu _v-39be1072=""></slot> <ul v-else="" class=dropdown-menu _v-39be1072=""> <slot _v-39be1072=""></slot> </ul> </div>';},function(e,t,n){e.exports=n(138),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(139);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27);i(r);t["default"]={props:{valid:{twoWay:!0,"default":null},enterSubmit:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},icon:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},lang:{type:String,"default":navigator.language}},data:function data(){return{children:[],timeout:null};},watch:{valid:function valid(e,t){e!==t&&this._parent&&this._parent.validate();}},methods:{focus:function focus(){this.$els.input.focus();},validate:function validate(){var e=!0;return this.children.some(function(t){var n=t.validate?t.validate():void 0!==t.valid?t.valid:t.required&&!~["",null,void 0].indexOf(t.value);return n||(e=!1),!e;}),this.valid=e,e===!0;}},created:function created(){this._formGroup=!0;for(var e=this.$parent;e&&!e._formGroup;){e=e.$parent;}e&&e._formGroup&&(e.children.push(this),this._parent=e);},ready:function ready(){this.validate();},beforeDestroy:function beforeDestroy(){this._parent&&this._parent.children.$remove(this);}};},function(e,t){e.exports="<slot></slot>";},function(e,t,n){n(141),e.exports=n(143),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(144);},function(e,t,n){var i=n(142);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".form-group[_v-652ad7b9]{position:relative}label~.close[_v-652ad7b9]{top:25px}.close[_v-652ad7b9]{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center}.has-feedback.has-error button.close[_v-652ad7b9],.has-feedback.has-success button.close[_v-652ad7b9]{right:20px}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{value:{twoWay:!0,"default":null},match:{type:String,"default":null},clearButton:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},disabled:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},enterSubmit:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},error:{type:String,"default":null},help:{type:String,"default":null},hideHelp:{type:Boolean,coerce:o.coerce["boolean"],"default":!0},icon:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},label:{type:String,"default":null},lang:{type:String,"default":navigator.language},mask:null,max:{type:String,coerce:o.coerce.string,"default":null},maxlength:{type:Number,coerce:o.coerce.number,"default":null},min:{type:String,coerce:o.coerce.string,"default":null},minlength:{type:Number,coerce:o.coerce.number,"default":0},name:{type:String,"default":null},pattern:{coerce:o.coerce.pattern,"default":null},placeholder:{type:String,"default":null},readonly:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},required:{type:Boolean,coerce:o.coerce["boolean"],"default":!1},rows:{type:Number,coerce:o.coerce.number,"default":3},step:{type:Number,coerce:o.coerce.number,"default":null},type:{type:String,"default":"text"},validationDelay:{type:Number,coerce:o.coerce.number,"default":250}},data:function data(){return{valid:null,timeout:null};},computed:{slots:function slots(){return this._slotContents||{};},text:function text(){return(0,o.translations)(this.lang);},showHelp:function showHelp(){return this.help&&(!this.showError||!this.hideHelp);},showError:function showError(){return this.error&&this.valid===!1;},errorText:function errorText(){var e=this.value,t=[this.error];return!e&&this.required&&t.push("("+this.text.required.toLowerCase()+")"),e&&e.length<this.minlength&&t.push("("+this.text.minLength.toLowerCase()+": "+this.minlength+")"),t.join(" ");},nativeValidate:function nativeValidate(){return this.$els.input.checkValidity&&(~["url","email"].indexOf(this.type.toLowerCase())||this.min||this.max);},canValidate:function canValidate(){return!this.disabled&&!this.readonly&&(this.required||this.pattern||this.nativeValidate||null!==this.match);},title:function title(){return this.errorText||this.help||"";}},watch:{match:function match(e){this.eval();},valid:function valid(e,t){e!==t&&this._parent&&this._parent.validate();}},methods:{attr:function attr(e){return~["",null,void 0].indexOf(e)||e instanceof Function?void 0:e;},focus:function focus(){this.$els.input.focus();},eval:function _eval(){var e=this,t=(this.value||"").trim();this.mask instanceof Function&&(t=this.mask(t)),this.value!==t&&(this.value=t),this.timeout&&clearTimeout(this.timeout),this.canValidate?this.timeout=setTimeout(function(){e.valid=e.validate(),e.timeout=null;},this.validationDelay):this.valid=!0;},submit:function submit(){if(this.$parent._formGroup)return this.$parent.validate();if(this.$els.input.form){var e=(0,a["default"])(".form-group.validate:not(.has-success)",this.$els.input.form);e.length?e.find("input,textarea,select")[0].focus():this.$els.input.form.submit();}},validate:function validate(){if(!this.canValidate)return!0;var e=(this.value||"").trim();return e?null!==this.match?this.match===e:!(e.length<this.minlength)&&!(this.nativeValidate&&!this.$els.input.checkValidity())&&(!this.pattern||(this.pattern instanceof Function?this.pattern(this.value):this.pattern.test(this.value))):!this.required;}},created:function created(){for(var e=this.$parent;e&&!e._formGroup;){e=e.$parent;}e&&e._formGroup&&(e.children.push(this),this._parent=e);},ready:function ready(){var e=this;(0,a["default"])(this.$els.input).on("change keypress keydown keyup",function(){return e.eval();}).on("focus",function(t){return e.$emit("focus",t);}).on("blur",function(t){e.canValidate&&(e.valid=e.validate()),e.$emit("blur",t);});},beforeDestroy:function beforeDestroy(){this._parent&&this._parent.children.$remove(this),(0,a["default"])(this.$els.input).off();}};},function(e,t){e.exports='<div class=form-group @click=focus() :class="{validate:canValidate,\'has-feedback\':icon,\'has-error\':canValidate&amp;&amp;valid===false,\'has-success\':canValidate&amp;&amp;valid}" _v-652ad7b9=""> <slot name=label _v-652ad7b9=""><label v-if=label class=control-label _v-652ad7b9="">{{label}}</label></slot> <textarea v-if="type==\'textarea\'" class=form-control v-el:input="" v-model=value :cols=cols :rows=rows :name=name :title=attr(title) :readonly=readonly :required=required :disabled=disabled :maxlength=maxlength :placeholder=placeholder _v-652ad7b9=""></textarea> <template v-else="" _v-652ad7b9=""> <div v-if=slots.before||slots.after class=input-group _v-652ad7b9=""> <slot name=before _v-652ad7b9=""></slot> <input class=form-control v-el:input="" v-model=value :name=name :max=attr(max) :min=attr(min) :step=step :type=type :title=attr(title) :readonly=readonly :required=required :disabled=disabled :maxlength=maxlength :placeholder=placeholder @keyup.enter=enterSubmit&amp;&amp;submit() _v-652ad7b9=""> <slot name=after _v-652ad7b9=""></slot> </div> <input v-else="" class=form-control v-el:input="" v-model=value :name=name :max=attr(max) :min=attr(min) :type=type :title=attr(title) :readonly=readonly :required=required :disabled=disabled :maxlength=maxlength :placeholder=placeholder @keyup.enter=enterSubmit&amp;&amp;submit() _v-652ad7b9=""> </template> <span v-if="clearButton &amp;&amp; value" class=close @click="value = \'\'" _v-652ad7b9="">×</span> <span v-if="icon&amp;&amp;valid!==null" class="glyphicon glyphicon-{{valid?\'ok\':\'remove\'}} form-control-feedback" aria-hidden=true _v-652ad7b9=""></span> <div v-if=showHelp class=help-block _v-652ad7b9="">{{help}}</div> <div v-if=showError class="help-block with-errors" _v-652ad7b9="">{{errorText}}</div> </div>';},function(e,t,n){n(146),e.exports=n(148),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(153);},function(e,t,n){var i=n(147);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".modal{-webkit-transition:all .3s ease;transition:all .3s ease}.modal.in{background-color:rgba(0,0,0,.5)}.modal.zoom .modal-dialog{-webkit-transform:scale(.1);transform:scale(.1);top:300px;opacity:0;-webkit-transition:all .3s;transition:all .3s}.modal.zoom.in .modal-dialog{-webkit-transform:scale(1);transform:scale(1);-webkit-transform:translate3d(0,-300px,0);transform:translate3d(0,-300px,0);opacity:1}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(149),r=i(o),a=n(97),s=n(27),l=i(s);t["default"]={props:{okText:{type:String,"default":"Save changes"},cancelText:{type:String,"default":"Close"},title:{type:String,"default":""},show:{required:!0,type:Boolean,coerce:a.coerce["boolean"],twoWay:!0},width:{"default":null},callback:{type:Function,"default":function _default(){}},effect:{type:String,"default":null},backdrop:{type:Boolean,coerce:a.coerce["boolean"],"default":!0},large:{type:Boolean,coerce:a.coerce["boolean"],"default":!1},small:{type:Boolean,coerce:a.coerce["boolean"],"default":!1}},computed:{optionalWidth:function optionalWidth(){return null===this.width?null:(0,r["default"])(this.width)?this.width+"px":this.width;}},watch:{show:function show(e){var t=this,n=this.$el,i=document.body,o=(0,a.getScrollBarWidth)();e?((0,l["default"])(n).find(".modal-content").focus(),n.style.display="block",setTimeout(function(){return(0,l["default"])(n).addClass("in");},0),(0,l["default"])(i).addClass("modal-open"),0!==o&&(i.style.paddingRight=o+"px"),this.backdrop&&(0,l["default"])(n).on("click",function(e){e.target===n&&(t.show=!1);})):(i.style.paddingRight=null,(0,l["default"])(i).removeClass("modal-open"),(0,l["default"])(n).removeClass("in").on("transitionend",function(){(0,l["default"])(n).off("click transitionend"),n.style.display="none";}));}},methods:{close:function close(){this.show=!1;}}};},function(e,t,n){e.exports={"default":n(150),__esModule:!0};},function(e,t,n){n(151),e.exports=n(33).Number.isInteger;},function(e,t,n){var i=n(31);i(i.S,"Number",{isInteger:n(152)});},function(e,t,n){var i=n(39),o=Math.floor;e.exports=function(e){return!i(e)&&isFinite(e)&&o(e)===e;};},function(e,t){e.exports="<div role=dialog v-bind:class=\"{\r\n    'modal':true,\r\n    'fade':effect === 'fade',\r\n    'zoom':effect === 'zoom'\r\n    }\"> <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=document v-bind:style=\"{width: optionalWidth}\"> <div class=modal-content> <slot name=modal-header> <div class=modal-header> <button type=button class=close @click=close><span>&times;</span></button> <h4 class=modal-title> <slot name=title> {{title}} </slot> </h4> </div> </slot> <slot name=modal-body> <div class=modal-body></div> </slot> <slot name=modal-footer> <div class=modal-footer> <button type=button class=\"btn btn-default\" @click=close>{{ cancelText }}</button> <button type=button class=\"btn btn-primary\" @click=callback>{{ okText }}</button> </div> </slot> </div> </div> </div>";},function(e,t,n){e.exports=n(155),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(156);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(27),r=i(o);t["default"]={props:{type:{type:String,"default":"default"},placement:{type:String,"default":""}},data:function data(){return{id:"bs-example-navbar-collapse-1",collapsed:!0,styles:{}};},computed:{slots:function slots(){return this._slotContents;}},methods:{toggleCollapse:function toggleCollapse(e){e&&e.preventDefault(),this.collapsed=!this.collapsed;}},created:function created(){this._navbar=!0;},ready:function ready(){var e=this,t=(0,r["default"])('.dropdown>[data-toggle="dropdown"]',this.$el).parent();t.on("click",".dropdown-toggle",function(e){e.preventDefault(),t.each(function(t){t.contains(e.target)&&t.classList.toggle("open");});}).on("click",".dropdown-menu>li>a",function(e){t.each(function(t){t.contains(e.target)&&t.classList.remove("open");});}).onBlur(function(e){t.each(function(t){t.contains(e.target)||t.classList.remove("open");});}),(0,r["default"])(this.$el).on("click touchstart","li:not(.dropdown)>a",function(t){setTimeout(function(){e.collapsed=!0;},200);}).onBlur(function(t){e.$el.contains(t.target)||(e.collapsed=!0);});var n=this.$el.offsetHeight;"top"===this.placement&&(document.body.style.paddingTop=n+"px"),"bottom"===this.placement&&(document.body.style.paddingBottom=n+"px"),this.slots.collapse&&(0,r["default"])('[data-toggle="collapse"]',this.$el).on("click",function(t){return e.toggleCollapse(t);});},beforeDestroy:function beforeDestroy(){(0,r["default"])(".dropdown",this.$el).off("click").offBlur(),this.slots.collapse&&(0,r["default"])('[data-toggle="collapse"]',this.$el).off("click");}};},function(e,t){e.exports="<nav v-el:navbar :class=\"['navbar',{\r\n    'navbar-inverse':(type == 'inverse'),\r\n    'navbar-default':(type == 'default'),\r\n    'navbar-fixed-top':(placement === 'top'),\r\n    'navbar-fixed-bottom':(placement === 'bottom'),\r\n    'navbar-static-top':(placement === 'static')\r\n  }]\"> <div class=container-fluid> <div class=navbar-header> <button v-if=!slots.collapse type=button class=\"navbar-toggle collapsed\" aria-expanded=false @click=toggleCollapse> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <slot name=collapse></slot> <slot name=brand></slot> </div> <div :class=\"['navbar-collapse',{collapse:collapsed}]\"> <ul class=\"nav navbar-nav\"> <slot></slot> </ul> <ul v-if=slots.right class=\"nav navbar-nav navbar-right\"> <slot name=right></slot> </ul> </div> </div> </nav>";},function(e,t,n){e.exports=n(158),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(159);},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:null},data:function data(){return{loading:!0};},ready:function ready(){this.$parent._select?(this.$parent.options||(this.$parent.options=[]),this.$parent.options.push({value:this.value,label:this.$els.v.innerHTML}),this.loading=!1):console.warn("options only work inside a select component");}};},function(e,t){e.exports="<li v-el:v v-if=loading><slot></slot></li>";},function(e,t,n){n(161),e.exports=n(163),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(164);},function(e,t,n){var i=n(162);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".accordion-toggle{cursor:pointer}.collapse-transition{-webkit-transition:max-height .5s ease;transition:max-height .5s ease}.collapse-enter,.collapse-leave{max-height:0!important}",""]);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{header:{type:String},isOpen:{type:Boolean,coerce:i.coerce["boolean"],"default":null},type:{type:String,"default":null}},computed:{inAccordion:function inAccordion(){return this.$parent&&this.$parent._isAccordion;},panelType:function panelType(){return"panel-"+(this.type||this.$parent&&this.$parent.type||"default");}},methods:{toggle:function toggle(){this.isOpen=!this.isOpen,this.$dispatch("isOpenEvent",this);}},transitions:{collapse:{afterEnter:function afterEnter(e){e.style.maxHeight="",e.style.overflow="";},beforeLeave:function beforeLeave(e){return e.style.maxHeight=e.offsetHeight+"px",e.style.overflow="hidden",e.offsetHeight;}}},created:function created(){null===this.isOpen&&(this.isOpen=!this.inAccordion);}};},function(e,t){e.exports="<div class=\"panel {{panelType}}\"> <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=inAccordion&&toggle()> <slot name=header> <h4 class=panel-title>{{ header }}</h4> </slot> </div> <div class=panel-collapse v-el:panel v-show=isOpen transition=collapse> <div class=panel-body> <slot></slot> </div> </div> </div>";},function(e,t,n){n(166),e.exports=n(168),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(170);},function(e,t,n){var i=n(167);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".fade-transition,.scale-transition{display:block}.scale-enter{-webkit-animation:scale-in .15s ease-in;animation:scale-in .15s ease-in}.scale-leave{-webkit-animation:scale-out .15s ease-out;animation:scale-out .15s ease-out}@-webkit-keyframes scale-in{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes scale-out{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes scale-out{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(169),r=i(o);t["default"]={mixins:[r["default"]],props:{trigger:{type:String,"default":"click"}}};},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(27),a=i(r);t["default"]={props:{trigger:{type:String},effect:{type:String,"default":"fade"},title:{type:String},content:{type:String},header:{type:Boolean,coerce:o.coerce["boolean"],"default":!0},placement:{type:String}},data:function data(){return{position:{top:0,left:0},show:!0};},methods:{toggle:function toggle(e){this.show=!this.show,e&&"contextmenu"===this.trigger&&e.preventDefault();}},ready:function ready(){var e=this.$els.popover;if(!e)return console.error("Could not find popover v-el in your component that uses popoverMixin.");var t=this.$els.trigger.children[0];switch(this.placement){case"top":this.position.left=t.offsetLeft-e.offsetWidth/2+t.offsetWidth/2,this.position.top=t.offsetTop-e.offsetHeight;break;case"left":this.position.left=t.offsetLeft-e.offsetWidth,this.position.top=t.offsetTop+t.offsetHeight/2-e.offsetHeight/2;break;case"right":this.position.left=t.offsetLeft+t.offsetWidth,this.position.top=t.offsetTop+t.offsetHeight/2-e.offsetHeight/2;break;case"bottom":this.position.left=t.offsetLeft-e.offsetWidth/2+t.offsetWidth/2,this.position.top=t.offsetTop+t.offsetHeight;break;default:console.warn("Wrong placement prop");}e.style.top=this.position.top+"px",e.style.left=this.position.left+"px",e.style.display="none",this.show=!this.show;var n="contextmenu"===this.trigger?"contextmenu":"hover"===this.trigger?"mouseleave mouseenter":"focus"===this.trigger?"blur focus":"click";"focus"!==this.trigger||~t.tabIndex||(t=(0,a["default"])("a,input,select,textarea,button",t),t.length||(t=null)),t&&((0,a["default"])(t).on(n,this.toggle),this._trigger=t);},beforeDestroy:function beforeDestroy(){this._trigger&&(0,a["default"])(this._trigger).off();}};},function(e,t){e.exports="<span v-el:trigger> <slot></slot> </span> <div v-el:popover v-show=show :class=\"['popover',placement]\" :transition=effect> <div class=arrow></div> <h3 class=popover-title v-if=title> <slot name=title>{{title}}</slot> </h3> <div class=popover-content> <slot name=content>{{{content}}}</slot> </div> </div>";},function(e,t,n){e.exports=n(172),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(173);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{now:{type:Number,coerce:i.coerce.number,required:!0},label:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},type:{type:String},striped:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},animated:{type:Boolean,coerce:i.coerce["boolean"],"default":!1}}};},function(e,t){e.exports="<div role=progressbar :class=\"['progress-bar',{\r\n      'progress-bar-success':type == 'success',\r\n      'progress-bar-warning':type == 'warning',\r\n      'progress-bar-info':type == 'info',\r\n      'progress-bar-danger':type == 'danger',\r\n      'progress-bar-striped':striped,\r\n      'active':animated\r\n    }]\" :style=\"{width: now + '%'}\"> {{label ? now + '%' : ''}} </div>";},function(e,t,n){n(175),e.exports=n(177),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(178);},function(e,t,n){var i=n(176);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".radio{position:relative}.radio>label>input{position:absolute;margin:0;padding:0;opacity:0;z-index:-1;box-sizing:border-box}.radio>label>.icon{position:absolute;top:.15rem;left:0;display:block;width:1.4rem;height:1.4rem;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:.7rem;background-repeat:no-repeat;background-position:50%;background-size:50% 50%}.radio:not(.active)>label>.icon{background-color:#ddd;border:1px solid #bbb}.radio>label>input:focus~.icon{outline:0;border:1px solid #66afe9;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.radio.active>label>.icon{background-size:1rem 1rem;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+)}.radio.active .btn-default{-webkit-filter:brightness(75%);filter:brightness(75%)}.btn.readonly,.radio.disabled>label>.icon,.radio.readonly>label>.icon{filter:alpha(opacity=65);box-shadow:none;opacity:.65}label.btn>input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}",""]);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{value:{"default":!0},checked:{twoWay:!0},button:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},disabled:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},name:{type:String,"default":null},readonly:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},type:{type:String,"default":null}},computed:{active:function active(){return this.group?this.$parent.value===this.value:this.value===this.checked;},buttonStyle:function buttonStyle(){return this.button||this.group&&this.$parent.buttons;},group:function group(){return this.$parent&&this.$parent._radioGroup;},typeColor:function typeColor(){return this.type||this.$parent&&this.$parent.type||"default";}},created:function created(){var e=this.$parent;e&&e._btnGroup&&!e._checkboxGroup&&(e._radioGroup=!0);},ready:function ready(){this.$parent._radioGroup&&(this.$parent.value?this.checked=this.$parent.value===this.value:this.checked&&(this.$parent.value=this.value));},methods:{focus:function focus(){this.$els.input.focus();},toggle:function toggle(){this.disabled||(this.focus(),this.readonly||(this.checked=this.value,this.group&&(this.$parent.value=this.value)));}}};},function(e,t){e.exports="<label v-if=buttonStyle :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=toggle> <input type=radio autocomplete=off v-el:input v-show=!readonly :checked=active :value=value :name=name :readonly=readonly :disabled=disabled /> <slot></slot> </label> <div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=toggle> <label class=open> <input type=radio autocomplete=off v-el:input :checked=active :value=value :name=name :readonly=readonly :disabled=disabled /> <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span> <span v-if=\"active&&typeColor==='default'\" class=icon></span> <slot></slot> </label> </div>";},function(e,t,n){n(180),e.exports=n(182),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(198);},function(e,t,n){var i=n(181);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".btn-select[_v-e514dbc6]{display:inline-block}.btn-select>.btn-group>.dropdown-menu>li[_v-e514dbc6]{position:relative}.btn-select>.btn-group>.dropdown-menu>li>a[_v-e514dbc6]{cursor:pointer}.bs-searchbox[_v-e514dbc6]{position:relative;margin:4px 8px}.bs-searchbox .close[_v-e514dbc6]{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center}button>.close[_v-e514dbc6]{margin-left:5px}.notify.out[_v-e514dbc6]{position:relative}.notify.in[_v-e514dbc6],.notify>div[_v-e514dbc6]{position:absolute;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none}.notify>div[_v-e514dbc6]{top:5px;z-index:1}.notify.in[_v-e514dbc6]{opacity:.9;bottom:5px}.btn-group.btn-group-justified .dropdown-menu[_v-e514dbc6]{width:100%}span.caret[_v-e514dbc6]{float:right;margin-top:9px;margin-left:5px}.secret[_v-e514dbc6]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.bs-searchbox input[_v-e514dbc6]:focus,.secret:focus+button[_v-e514dbc6]{outline:0;border-color:#66afe9!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(183),r=i(o),a=n(88),s=i(a),l=n(97),c=n(27),u=i(c),d={};t["default"]={props:{value:{twoWay:!0},options:{type:Array,"default":function _default(){return[];}},multiple:{type:Boolean,coerce:l.coerce["boolean"],"default":!1},clearButton:{type:Boolean,coerce:l.coerce["boolean"],"default":!1},closeOnSelect:{type:Boolean,coerce:l.coerce["boolean"],"default":!1},disabled:{type:Boolean,coerce:l.coerce["boolean"],"default":!1},justified:{type:Boolean,coerce:l.coerce["boolean"],"default":!1},lang:{type:String,"default":navigator.language},limit:{type:Number,coerce:l.coerce.number,"default":1024},name:{type:String,"default":null},parent:{"default":!0},placeholder:{type:String,"default":null},readonly:{type:Boolean,coerce:l.coerce["boolean"],"default":null},required:{type:Boolean,coerce:l.coerce["boolean"],"default":null},minSearch:{type:Number,coerce:l.coerce.number,"default":0},search:{type:Boolean,coerce:l.coerce["boolean"],"default":!1},searchText:{type:String,"default":null},url:{type:String,"default":null}},data:function data(){return{loading:null,searchValue:null,show:!1,showNotify:!1,valid:null};},computed:{selectedItems:function selectedItems(){if(0===this.options.length)return"";var e=[],t=!0,n=!1,i=void 0;try{for(var o,a=(0,s["default"])(this.values);!(t=(o=a.next()).done);t=!0){var l=o.value;if(~["number","string"].indexOf("undefined"==typeof l?"undefined":(0,r["default"])(l))){var c=null;this.options.some(function(e){if(e instanceof Object?e.value===l:e===l)return c=e,!0;})&&e.push(c.label||c);}}}catch(u){n=!0,i=u;}finally{try{!t&&a["return"]&&a["return"]();}finally{if(n)throw i;}}return e.join(", ");},canSearch:function canSearch(){return this.minSearch?this.options.length>=this.minSearch:this.search;},limitText:function limitText(){return this.text.limit.replace("{{limit}}",this.limit);},showPlaceholder:function showPlaceholder(){return 0!==this.values.length&&this.hasParent?null:this.placeholder||this.text.notSelected;},text:function text(){return(0,l.translations)(this.lang);},hasParent:function hasParent(){return this.parent instanceof Array?this.parent.length:this.parent;},values:function values(){return this.value instanceof Array?this.value:null!==this.value&&void 0!==this.value?[this.value]:[];}},watch:{options:function options(e){var t=!1;if(e instanceof Array&&e.length)for(var n in e){e[n]instanceof Object||(e[n]={label:e[n],value:e[n]},t=!0);}t&&(this.options=e);},show:function show(e){e&&(this.$els.sel.focus(),this.$els.search&&this.$els.search.focus());},url:function url(){this.update();},value:function value(e){var t=this;this.value instanceof Array&&e.length>this.limit&&(this.showNotify=!0,d.limit&&clearTimeout(d.limit),d.limit=setTimeout(function(){d.limit=!1,t.showNotify=!1;},1500)),this.checkValue(),this.valid=this.validate();},valid:function valid(e,t){e!==t&&this._parent&&this._parent.validate();}},methods:{blur:function blur(){this.show=!1;},clear:function clear(){this.disabled||this.readonly||(this.value=this.value instanceof Array?[]:null,this.toggle());},clearSearch:function clearSearch(){this.searchValue="",this.$els.search.focus();},checkValue:function checkValue(){!this.multiple||this.value instanceof Array||(this.value=null===this.value||void 0===this.value?[]:[this.value]),!this.multiple&&this.value instanceof Array&&(this.value=this.value.length?this.value.pop():null),this.limit<1&&(this.limit=1),this.values.length>this.limit&&(this.value=this.value.slice(0,this.limit));},isSelected:function isSelected(e){return this.values.indexOf(e)>-1;},select:function select(e){this.value instanceof Array?(~this.value.indexOf(e)?this.value.$remove(e):this.value.push(e),this.closeOnSelect&&this.toggle()):(this.value=e,this.toggle());},toggle:function toggle(){this.show=!this.show;},update:function update(){var e=this;this.url&&(this.loading=!0,(0,l.getJSON)(this.url).then(function(t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,l=(0,s["default"])(t);!(i=(a=l.next()).done);i=!0){var c=a.value;void 0!==c.value&&void 0!==c.label&&n.push(c);}}catch(u){o=!0,r=u;}finally{try{!i&&l["return"]&&l["return"]();}finally{if(o)throw r;}}e.options=n,n.length||(e.value=e.value instanceof Array?[]:null);}).always(function(){e.loading=!1,e.checkValue();}));},validate:function validate(){return!this.required||(this.value instanceof Array?this.value.length>0:null!==this.value);}},created:function created(){this._select=!0,void 0!==this.value&&this.parent||(this.value=null),!this.multiple&&this.value instanceof Array&&(this.value=this.value.shift()),this.checkValue(),this.url&&this.update();for(var e=this.$parent;e&&!e._formGroup;){e=e.$parent;}e&&e._formGroup&&(e.children.push(this),this._parent=e);},ready:function ready(){var e=this;(0,u["default"])(this.$els.select).onBlur(function(t){e.show=!1;});},beforeDestroy:function beforeDestroy(){this._parent&&this._parent.children.$remove(this),(0,u["default"])(this.$els.select).offBlur();}};},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}t.__esModule=!0;var o=n(46),r=i(o),a=n(184),s=i(a),l="function"==typeof s["default"]&&"symbol"==_typeof(r["default"])?function(e){return typeof e==="undefined"?"undefined":_typeof(e);}:function(e){return e&&"function"==typeof s["default"]&&e.constructor===s["default"]?"symbol":typeof e==="undefined"?"undefined":_typeof(e);};t["default"]="function"==typeof s["default"]&&"symbol"===l(r["default"])?function(e){return"undefined"==typeof e?"undefined":l(e);}:function(e){return e&&"function"==typeof s["default"]&&e.constructor===s["default"]?"symbol":"undefined"==typeof e?"undefined":l(e);};},function(e,t,n){e.exports={"default":n(185),__esModule:!0};},function(e,t,n){n(186),n(195),n(196),n(197),e.exports=n(33).Symbol;},function(e,t,n){"use strict";var i=n(32),o=n(55),r=n(41),a=n(31),s=n(54),l=n(187).KEY,c=n(42),u=n(69),d=n(73),p=n(70),f=n(74),h=n(81),v=n(188),y=n(189),b=n(190),m=n(193),g=n(38),x=n(62),w=n(44),_=n(45),k=n(58),S=n(86),M=n(194),O=n(37),$=n(60),D=M.f,j=O.f,C=S.f,_N=i.Symbol,B=i.JSON,L=B&&B.stringify,A="prototype",P=f("_hidden"),T=f("toPrimitive"),E={}.propertyIsEnumerable,R=u("symbol-registry"),z=u("symbols"),I=u("op-symbols"),V=Object[A],W="function"==typeof _N,F=i.QObject,Y=!F||!F[A]||!F[A].findChild,X=r&&c(function(){return 7!=k(j({},"a",{get:function get(){return j(this,"a",{value:7}).a;}})).a;})?function(e,t,n){var i=D(V,t);i&&delete V[t],j(e,t,n),i&&e!==V&&j(V,t,i);}:j,H=function H(e){var t=z[e]=k(_N[A]);return t._k=e,t;},G=W&&"symbol"==_typeof(_N.iterator)?function(e){return"symbol"==(typeof e==="undefined"?"undefined":_typeof(e));}:function(e){return e instanceof _N;},q=function q(e,t,n){return e===V&&q(I,t,n),g(e),t=w(t,!0),g(n),o(z,t)?(n.enumerable?(o(e,P)&&e[P][t]&&(e[P][t]=!1),n=k(n,{enumerable:_(0,!1)})):(o(e,P)||j(e,P,_(1,{})),e[P][t]=!0),X(e,t,n)):j(e,t,n);},U=function U(e,t){g(e);for(var n,i=b(t=x(t)),o=0,r=i.length;r>o;){q(e,n=i[o++],t[n]);}return e;},J=function J(e,t){return void 0===t?k(e):U(k(e),t);},Z=function Z(e){var t=E.call(this,e=w(e,!0));return!(this===V&&o(z,e)&&!o(I,e))&&(!(t||!o(this,e)||!o(z,e)||o(this,P)&&this[P][e])||t);},K=function K(e,t){if(e=x(e),t=w(t,!0),e!==V||!o(z,t)||o(I,t)){var n=D(e,t);return!n||!o(z,t)||o(e,P)&&e[P][t]||(n.enumerable=!0),n;}},Q=function Q(e){for(var t,n=C(x(e)),i=[],r=0;n.length>r;){o(z,t=n[r++])||t==P||t==l||i.push(t);}return i;},ee=function ee(e){for(var t,n=e===V,i=C(n?I:x(e)),r=[],a=0;i.length>a;){!o(z,t=i[a++])||n&&!o(V,t)||r.push(z[t]);}return r;};W||(_N=function N(){if(this instanceof _N)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function t(n){this===V&&t.call(I,n),o(this,P)&&o(this[P],e)&&(this[P][e]=!1),X(this,e,_(1,n));};return r&&Y&&X(V,e,{configurable:!0,set:t}),H(e);},s(_N[A],"toString",function(){return this._k;}),M.f=K,O.f=q,n(87).f=S.f=Q,n(192).f=Z,n(191).f=ee,r&&!n(53)&&s(V,"propertyIsEnumerable",Z,!0),h.f=function(e){return H(f(e));}),a(a.G+a.W+a.F*!W,{Symbol:_N});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;){f(te[ne++]);}for(var te=$(f.store),ne=0;te.length>ne;){v(te[ne++]);}a(a.S+a.F*!W,"Symbol",{"for":function _for(e){return o(R,e+="")?R[e]:R[e]=_N(e);},keyFor:function keyFor(e){if(G(e))return y(R,e);throw TypeError(e+" is not a symbol!");},useSetter:function useSetter(){Y=!0;},useSimple:function useSimple(){Y=!1;}}),a(a.S+a.F*!W,"Object",{create:J,defineProperty:q,defineProperties:U,getOwnPropertyDescriptor:K,getOwnPropertyNames:Q,getOwnPropertySymbols:ee}),B&&a(a.S+a.F*(!W||c(function(){var e=_N();return"[null]"!=L([e])||"{}"!=L({a:e})||"{}"!=L(Object(e));})),"JSON",{stringify:function stringify(e){if(void 0!==e&&!G(e)){for(var t,n,i=[e],o=1;arguments.length>o;){i.push(arguments[o++]);}return t=i[1],"function"==typeof t&&(n=t),!n&&m(t)||(t=function t(e,_t2){if(n&&(_t2=n.call(this,e,_t2)),!G(_t2))return _t2;}),i[1]=t,L.apply(B,i);}}}),_N[A][T]||n(36)(_N[A],T,_N[A].valueOf),d(_N,"Symbol"),d(Math,"Math",!0),d(i.JSON,"JSON",!0);},function(e,t,n){var i=n(70)("meta"),o=n(39),r=n(55),a=n(37).f,s=0,l=Object.isExtensible||function(){return!0;},c=!n(42)(function(){return l(Object.preventExtensions({}));}),u=function u(e){a(e,i,{value:{i:"O"+ ++s,w:{}}});},d=function d(e,t){if(!o(e))return"symbol"==(typeof e==="undefined"?"undefined":_typeof(e))?e:("string"==typeof e?"S":"P")+e;if(!r(e,i)){if(!l(e))return"F";if(!t)return"E";u(e);}return e[i].i;},p=function p(e,t){if(!r(e,i)){if(!l(e))return!0;if(!t)return!1;u(e);}return e[i].w;},f=function f(e){return c&&h.NEED&&l(e)&&!r(e,i)&&u(e),e;},h=e.exports={KEY:i,NEED:!1,fastKey:d,getWeak:p,onFreeze:f};},function(e,t,n){var i=n(32),o=n(33),r=n(53),a=n(81),s=n(37).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=r?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)});};},function(e,t,n){var i=n(60),o=n(62);e.exports=function(e,t){for(var n,r=o(e),a=i(r),s=a.length,l=0;s>l;){if(r[n=a[l++]]===t)return n;}};},function(e,t,n){var i=n(60),o=n(191),r=n(192);e.exports=function(e){var t=i(e),n=o.f;if(n)for(var a,s=n(e),l=r.f,c=0;s.length>c;){l.call(e,a=s[c++])&&t.push(a);}return t;};},function(e,t){t.f=Object.getOwnPropertySymbols;},function(e,t){t.f={}.propertyIsEnumerable;},function(e,t,n){var i=n(64);e.exports=Array.isArray||function(e){return"Array"==i(e);};},function(e,t,n){var i=n(192),o=n(45),r=n(62),a=n(44),s=n(55),l=n(40),c=Object.getOwnPropertyDescriptor;t.f=n(41)?c:function(e,t){if(e=r(e),t=a(t,!0),l)try{return c(e,t);}catch(n){}if(s(e,t))return o(!i.f.call(e,t),e[t]);};},function(e,t){},function(e,t,n){n(188)("asyncIterator");},function(e,t,n){n(188)("observable");},function(e,t){e.exports='<div v-el:select="" :class="{\'btn-group btn-group-justified\': justified, \'btn-select\': !justified}" _v-e514dbc6=""> <slot name=before _v-e514dbc6=""></slot> <div :class={open:show,dropdown:!justified} _v-e514dbc6=""> <select v-el:sel="" v-model=value v-show=show name={{name}} class=secret :multiple=multiple :required=required :readonly=readonly :disabled=disabled _v-e514dbc6=""> <option v-if=required value="" _v-e514dbc6=""></option> <option v-for="option in options" :value=option.value||option _v-e514dbc6="">{{ option.label||option }}</option> </select> <button type=button class="form-control dropdown-toggle" :disabled="disabled || !hasParent" :readonly=readonly @click=toggle() @keyup.esc="show = false" _v-e514dbc6=""> <span class=btn-content _v-e514dbc6="">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span> <span class=caret _v-e514dbc6=""></span> <span v-if=clearButton&amp;&amp;values.length class=close @click=clear() _v-e514dbc6="">×</span> </button> <ul class=dropdown-menu _v-e514dbc6=""> <template v-if=options.length _v-e514dbc6=""> <li v-if=canSearch class=bs-searchbox _v-e514dbc6=""> <input type=text placeholder={{searchText||text.search}} class=form-control autocomplete=off v-el:search="" v-model=searchValue @keyup.esc="show = false" _v-e514dbc6=""> <span v-show=searchValue class=close @click=clearSearch _v-e514dbc6="">×</span> </li> <li v-if=required&amp;&amp;!clearButton _v-e514dbc6=""><a @mousedown.prevent="clear() &amp;&amp; blur()" _v-e514dbc6="">{{ placeholder || text.notSelected }}</a></li> <li v-for="option in options | filterBy searchValue" :id=option.value||option _v-e514dbc6=""> <a @mousedown.prevent=select(option.value||option) _v-e514dbc6=""> <span v-html=option.label||option _v-e514dbc6=""></span> <span class="glyphicon glyphicon-ok check-mark" v-show=isSelected(option.value||option) _v-e514dbc6=""></span> </a> </li> </template> <slot _v-e514dbc6=""></slot> <div v-if="showNotify &amp;&amp; !closeOnSelect" class="notify in" transition=fadein _v-e514dbc6="">{{limitText}}</div> </ul> <div v-if="showNotify &amp;&amp; closeOnSelect" class="notify out" transition=fadein _v-e514dbc6=""><div _v-e514dbc6="">{{limitText}}</div></div> </div> <slot name=after _v-e514dbc6=""></slot> </div>';},function(e,t,n){e.exports=n(200),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(201);},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function data(){return{index:0,show:!1};},computed:{show:function show(){return this.$parent.index===this.index;}},ready:function ready(){for(var e in this.$parent.$children){if(this.$parent.$children[e]===this){this.index=parseInt(e,10);break;}}this.$parent.indicator.push(this.index),0===this.index&&this.$el.classList.add("active");}};},function(e,t){e.exports="<div class=item> <slot></slot> </div>";},function(e,t,n){e.exports=n(203),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(206);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(204);var i=n(97),o=500;t["default"]={props:{size:{type:String,"default":"md"},text:{type:String,"default":""},fixed:{type:Boolean,coerce:i.coerce["boolean"],"default":!1}},data:function data(){return{active:!1};},computed:{spinnerSize:function spinnerSize(){return this.size?"spinner-"+this.size:"spinner-sm";}},ready:function ready(){this._body=document.querySelector("body"),this._bodyOverflow=this._body.style.overflowY||"";},methods:{getMinWait:function getMinWait(e){return e=e||0,new Date().getTime()-this._started.getTime()<o?o-parseInt(new Date().getTime()-this._started.getTime(),10)+e:0+e;},show:function show(e){e&&e.text&&(this.text=e.text),e&&e.size&&(this.size=e.size),e&&e.fixed&&(this.fixed=e.fixed),this._body.style.overflowY="hidden",this._started=new Date(),this.active=!0,this.$root.$broadcast("shown::spinner");},hide:function hide(){var e=this,t=0;this._spinnerAnimation=setTimeout(function(){e.active=!1,e._body.style.overflowY=e._bodyOverflow,e.$root.$broadcast("hidden::spinner");},this.getMinWait(t));}},events:{"show::spinner":function showSpinner(e){this.show(e);},"hide::spinner":function hideSpinner(){this.hide();},"start::ajax":function startAjax(e){this.show(e);},"end::ajax":function endAjax(){this.hide();}},beforeDestroy:function beforeDestroy(){clearTimeout(this._spinnerAnimation),this._body.style.overflowY=this._bodyOverflow;}};},function(e,t,n){var i=n(205);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,'/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */@keyframes spin{to{transform:rotate(1turn)}}.spinner-gritcode{top:0;left:0;bottom:0;right:0;z-index:9998;position:absolute;width:100%;text-align:center;background:hsla(0,0%,100%,.9)}.spinner-gritcode.spinner-fixed{position:fixed}.spinner-gritcode .spinner-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.spinner-gritcode .spinner-circle{position:relative;border:4px solid #ccc;border-right-color:#337ab7;border-radius:50%;display:inline-block;animation:spin .6s linear;animation-iteration-count:infinite;width:3em;height:3em;z-index:2}.spinner-gritcode .spinner-text{position:relative;text-align:center;margin-top:.5em;z-index:2;width:100%;font-size:95%;color:#337ab7}.spinner-gritcode.spinner-sm .spinner-circle{width:1.5em;height:1.5em}.spinner-gritcode.spinner-md .spinner-circle{width:2em;height:2em}.spinner-gritcode.spinner-lg .spinner-circle{width:2.5em;height:2.5em}.spinner-gritcode.spinner-xl .spinner-circle{width:3.5em;height:3.5em}.ie9 .spinner-gritcode .spinner-circle,.lt-ie10 .spinner-gritcode .spinner-circle,.no-csstransforms3d .spinner-gritcode .spinner-circle,.no-csstransitions .spinner-gritcode .spinner-circle,.oldie .spinner-gritcode .spinner-circle{background:url("http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif") 50% no-repeat;animation:none;margin-left:0;margin-top:5px;border:none;width:32px;height:32px}',""]);},function(e,t){e.exports="<div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=active> <div class=spinner-wrapper> <div class=spinner-circle></div> <div class=spinner-text>{{text}}</div> </div> </div>";},function(e,t,n){e.exports=n(208),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(209);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{header:{type:String},disabled:{type:Boolean,coerce:i.coerce["boolean"],"default":!1}},computed:{active:function active(){return this._tabset.show===this;},index:function index(){return this._tabset.tabs.indexOf(this);},show:function show(){return this._tabset&&this._tabset.show===this;},transition:function transition(){return this._tabset?this._tabset.effect:null;}},created:function created(){this._ingroup=this.$parent&&this.$parent._tabgroup;for(var e=this;e&&e._tabset!==!0&&e.$parent;){e=e.$parent;}e._tabset?(e.tabs.push(this),this._ingroup?~e.headers.indexOf(this.$parent)||e.headers.push(this.$parent):e.headers.push(this),this._tabset=e):(this._tabset={},console.warn('Warning: "tab" depend on "tabset" to work properly.')),this._ingroup&&this.$parent.tabs.push(this);},beforeDestroy:function beforeDestroy(){this._tabset.active===this.index&&(this._tabset.active=0),this._tabset.tabs.$remove(this);}};},function(e,t){e.exports='<div role=tabpanel class="tab-pane active" v-show=show :class={hide:!show} :transition=transition> <slot></slot> </div>';},function(e,t,n){n(211),e.exports=n(213),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(214);},function(e,t,n){var i=n(212);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".nav-tabs[_v-55faf3cb]{margin-bottom:15px}",""]);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97);t["default"]={props:{disabled:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},header:{type:String}},data:function data(){return{tabs:[],show:!1};},computed:{active:function active(){return~this.tabs.indexOf(this._tabset.show);}},created:function created(){this._tabgroup=!0;var e=this.$parent&&this.$parent._tabset===!0?this.$parent:{};for(this.$parent&&this.$parent._tabgroup&&console.error("Can't nest tabgroups.");e&&!e._tabset&&e.$parent;){e=e.$parent;}e._tabset?this._tabset=e:(this._tabset={},this.show=!0,console.warn("Warning: tabgroup depend on tabset to work properly."));},methods:{blur:function blur(){this.show=!1;},toggle:function toggle(){this.show=!this.show;}}};},function(e,t){e.exports='<slot _v-55faf3cb=""></slot>';},function(e,t,n){n(216),e.exports=n(218),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(219);},function(e,t,n){var i=n(217);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".nav-tabs[_v-09e2754e]{margin-bottom:15px}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),r=n(132),a=i(r);t["default"]={components:{dropdown:a["default"]},props:{navStyle:{type:String,"default":"tabs"},effect:{type:String,"default":"fadein"},active:{twoWay:!0,type:Number,coerce:o.coerce.number,"default":0}},data:function data(){return{show:null,headers:[],tabs:[]};},created:function created(){this._tabset=!0;},watch:{active:function active(e){this.show=this.tabs[e];}},ready:function ready(){this.show=this.tabs[this.active];},methods:{select:function select(e){e.disabled||(this.active=e.index);}}};},function(e,t){e.exports=' <ul class="nav nav-{{navStyle}}" role=tablist _v-09e2754e=""> <template v-for="t in headers" _v-09e2754e=""> <li v-if=!t._tabgroup :class="{active:t.active, disabled:t.disabled}" @click.prevent=select(t) _v-09e2754e=""> <a href=# _v-09e2754e=""><slot name=header _v-09e2754e="">{{{t.header}}}</slot></a> </li> <dropdown v-else="" :text=t.header :class={active:t.active} :disabled=t.disabled _v-09e2754e=""> <li v-for="tab in t.tabs" :class={disabled:tab.disabled} _v-09e2754e=""><a href=# @click.prevent=select(tab) _v-09e2754e="">{{tab.header}}</a></li> </dropdown> </template> </ul> <div class=tab-content v-el:tab-content="" _v-09e2754e=""> <slot _v-09e2754e=""></slot> </div>';},function(e,t,n){n(221),e.exports=n(223),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(224);},function(e,t,n){var i=n(222);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".tooltip{opacity:.9}.fadein-enter{-webkit-animation:fadein-in .3s ease-in;animation:fadein-in .3s ease-in}.fadein-leave{-webkit-animation:fadein-out .3s ease-out;animation:fadein-out .3s ease-out}@-webkit-keyframes fadein-in{0%{opacity:0}to{opacity:.9}}@keyframes fadein-in{0%{opacity:0}to{opacity:.9}}@-webkit-keyframes fadein-out{0%{opacity:.9}to{opacity:0}}@keyframes fadein-out{0%{opacity:.9}to{opacity:0}}",""]);},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var o=n(169),r=i(o);t["default"]={mixins:[r["default"]],props:{trigger:{type:String,"default":"hover"},effect:{type:String,"default":"scale"}}};},function(e,t){e.exports="<span v-el:trigger> <slot></slot> </span> <div v-el:popover v-show=show role=tooltip :class=\"['tooltip',placement]\" :transition=effect> <div class=tooltip-arrow></div> <div class=tooltip-inner> <slot name=content>{{{content}}}</slot> </div> </div>";},function(e,t,n){n(226),e.exports=n(228),e.exports.__esModule&&(e.exports=e.exports["default"]),("function"==typeof e.exports?e.exports.options:e.exports).template=n(229);},function(e,t,n){var i=n(227);"string"==typeof i&&(i=[[e.id,i,""]]);n(106)(i,{});i.locals&&(e.exports=i.locals);},function(e,t,n){t=e.exports=n(105)(),t.push([e.id,".dropdown-menu>li>a{cursor:pointer}",""]);},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97),o=window.Vue;t["default"]={created:function created(){this.items=this.primitiveData;},partials:{"default":'<span v-html="item | highlight query"></span>'},props:{value:{twoWay:!0,type:String,"default":""},data:{type:Array},limit:{type:Number,"default":8},async:{type:String},template:{type:String},templateName:{type:String,"default":"default"},key:{type:String,"default":null},matchCase:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},matchStart:{type:Boolean,coerce:i.coerce["boolean"],"default":!1},onHit:{type:Function,"default":function _default(e){this.reset(),this.value=e;}},placeholder:{type:String}},data:function data(){return{showDropdown:!1,noResults:!0,current:0,items:[]};},computed:{primitiveData:function primitiveData(){var e=this;if(this.data)return this.data.filter(function(t){t=e.matchCase?t:t.toLowerCase();var n=e.matchCase?e.value:e.value.toLowerCase();return e.matchStart?0===t.indexOf(n):t.indexOf(n)!==-1;}).slice(0,this.limit);}},ready:function ready(){this.templateName&&"default"!==this.templateName&&o.partial(this.templateName,this.template);},methods:{update:function update(){var e=this;return this.value?(this.data&&(this.items=this.primitiveData,this.showDropdown=this.items.length>0),void(this.async&&(0,i.getJSON)(this.async+this.value).then(function(t){e.items=(e.key?t[e.key]:t).slice(0,e.limit),e.showDropdown=e.items.length>0;}))):(this.reset(),!1);},reset:function reset(){this.items=[],this.value="",this.loading=!1,this.showDropdown=!1;},setActive:function setActive(e){this.current=e;},isActive:function isActive(e){return this.current===e;},hit:function hit(e){e.preventDefault(),this.onHit(this.items[this.current],this);},up:function up(){this.current>0&&this.current--;},down:function down(){this.current<this.items.length-1&&this.current++;}},filters:{highlight:function highlight(e,t){return e.replace(new RegExp("("+t+")","gi"),"<strong>$1</strong>");}}};},function(e,t){e.exports='<div style="position: relative" v-bind:class="{\'open\':showDropdown}"> <input type=text class=form-control :placeholder=placeholder autocomplete=off v-model=value @input=update @keydown.up=up @keydown.down=down @keydown.enter=hit @keydown.esc=reset @blur="showDropdown = false"/> <ul class=dropdown-menu v-el:dropdown> <li v-for="item in items" v-bind:class="{\'active\': isActive($index)}"> <a @mousedown.prevent=hit @mousemove=setActive($index)> <partial :name=templateName></partial> </a> </li> </ul> </div>';}]);});

},{}],8:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v1.0.27
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delimited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([^-])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore else */
  if (inBrowser && window.postMessage && !window.importScripts && // not in WebWorker
  !(isAndroid && !window.requestAnimationFrame) // not in Android <= 4.3
  ) {
      (function () {
        var NEXT_TICK_TOKEN = '__vue__nextTick__';
        window.addEventListener('message', function (e) {
          if (e.source === window && e.data === NEXT_TICK_TOKEN) {
            nextTickHandler();
          }
        });
        timerFunc = function () {
          window.postMessage(NEXT_TICK_TOKEN, '*');
        };
      })();
    } else {
    timerFunc = typeof global !== 'undefined' && global.setImmediate || setTimeout;
  }

  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var len;
var index;
var chr;
var state;
var startState = 0;
var filterState = 1;
var filterNameState = 2;
var filterArgState = 3;

var doubleChr = 0x22;
var singleChr = 0x27;
var pipeChr = 0x7C;
var escapeChr = 0x5C;
var spaceChr = 0x20;

var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

function peek() {
  return str.charCodeAt(index + 1);
}

function next() {
  return str.charCodeAt(++index);
}

function eof() {
  return index >= len;
}

function eatSpace() {
  while (peek() === spaceChr) {
    next();
  }
}

function isStringStart(chr) {
  return chr === doubleChr || chr === singleChr;
}

function isExpStart(chr) {
  return expStartChr[chr];
}

function isExpEnd(start, chr) {
  return expChrPair[start] === chr;
}

function parseString() {
  var stringQuote = next();
  var chr;
  while (!eof()) {
    chr = next();
    // escape char
    if (chr === escapeChr) {
      next();
    } else if (chr === stringQuote) {
      break;
    }
  }
}

function parseSpecialExp(chr) {
  var inExp = 0;
  var startChr = chr;

  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
      continue;
    }

    if (startChr === chr) {
      inExp++;
    }
    if (isExpEnd(startChr, chr)) {
      inExp--;
    }

    next();

    if (inExp === 0) {
      break;
    }
  }
}

/**
 * syntax:
 * expression | filterName  [arg  arg [| filterName arg arg]]
 */

function parseExpression() {
  var start = index;
  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
    } else if (isExpStart(chr)) {
      parseSpecialExp(chr);
    } else if (chr === pipeChr) {
      next();
      chr = peek();
      if (chr === pipeChr) {
        next();
      } else {
        if (state === startState || state === filterArgState) {
          state = filterState;
        }
        break;
      }
    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
      eatSpace();
      break;
    } else {
      if (state === filterState) {
        state = filterNameState;
      }
      next();
    }
  }

  return str.slice(start + 1, index) || null;
}

function parseFilterList() {
  var filters = [];
  while (!eof()) {
    filters.push(parseFilter());
  }
  return filters;
}

function parseFilter() {
  var filter = {};
  var args;

  state = filterState;
  filter.name = parseExpression().trim();

  state = filterArgState;
  args = parseFilterArguments();

  if (args.length) {
    filter.args = args;
  }
  return filter;
}

function parseFilterArguments() {
  var args = [];
  while (!eof() && state !== filterState) {
    var arg = parseExpression();
    if (!arg) {
      break;
    }
    args.push(processFilterArg(arg));
  }

  return args;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  dir = {};
  len = str.length;
  index = -1;
  chr = '';
  state = startState;

  var filters;

  if (str.indexOf('|') < 0) {
    dir.expression = str.trim();
  } else {
    dir.expression = parseExpression().trim();
    filters = parseFilterList();
    if (filters.length) {
      dir.filters = filters;
    }
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if (process.env.NODE_ENV !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	findVmFromFrag: findVmFromFrag,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to register itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression$1(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression$1(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression$1(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression$1,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression$1(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new instance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
        this.updateRef(value);
      }
    } else {
      this.updateRef(value);
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  updateRef: function updateRef(value) {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this.vm || this._scope).$refs;
    var refs = hash[ref];
    var key = this._frag.scope.$key;
    if (!refs) return;
    if (value) {
      if (Array.isArray(refs)) {
        refs.push(findVmFromFrag(this._frag));
      } else {
        refs[key] = findVmFromFrag(this._frag);
      }
    } else {
      if (Array.isArray(refs)) {
        refs.$remove(findVmFromFrag(this._frag));
      } else {
        refs[key] = null;
        delete refs[key];
      }
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.get();
      if (isArray(model)) {
        var val = self.getValue();
        var i = indexOf(model, val);
        if (el.checked) {
          if (i < 0) {
            self.set(model.concat(val));
          }
        } else if (i > -1) {
          self.set(model.slice(0, i).concat(model.slice(i + 1)));
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// logic control
// two-way binding
// event handling
// attributes
// ref & el
// cloak
// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var propsData = vm.$options.propsData;
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
      // has propsData
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  sortDirectives(dirs);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * sort directives by priority (stable sort)
 *
 * @param {Array} dirs
 */
function sortDirectives(dirs) {
  if (dirs.length === 0) return;

  var groupedMap = {};
  var i, j, k, l;
  for (i = 0, j = dirs.length; i < j; i++) {
    var dir = dirs[i];
    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
    var array = groupedMap[priority];
    if (!array) {
      array = groupedMap[priority] = [];
    }
    array.push(dir);
  }

  var index = 0;
  var priorities = Object.keys(groupedMap).sort(function (a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
  });
  for (i = 0, j = priorities.length; i < j; i++) {
    var group = groupedMap[priorities[i]];
    for (k = 0, l = group.length; k < l; k++) {
      dirs[index++] = group[k];
    }
  }
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;

      var componentName = options.el.tagName.toLowerCase();
      if (componentName === 'component' && options.name) {
        componentName += ':' + options.name;
      }

      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    // a textarea which has v-pre attr should skip complie.
    if (getAttr(el, 'v-pre') !== null) {
      return skip;
    }
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for, v-if and router-view
  if (dirName === 'for' || dirName === 'if' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    if (!replacer) {
      return frag;
    }
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression$1(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression$1(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression$1(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Order filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.27';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global VueStrap, dragula */

exports.default = {
    props: {
        widget: {
            type: Object,
            default: function _default() {
                return {
                    type: 'lord-asimov',
                    title: 'Lord Asimov',
                    children: []
                };
            }
        },
        availableWidgets: {
            type: Array,
            default: function _default() {
                return [{
                    type: 'row',
                    title: 'Row',
                    children: [],
                    config: {}
                }, {
                    type: 'column',
                    title: 'Column',
                    children: [],
                    config: {}
                }, {
                    type: 'field',
                    fieldType: 'fieldText',
                    title: 'Field Text',
                    children: [],
                    config: {}
                }, {
                    type: 'field',
                    fieldType: 'fieldTextarea',
                    title: 'Field Text Area',
                    children: [],
                    config: {}
                }];
            }
        },
        pickingWidget: Boolean
    },
    data: function data() {
        return {
            drake: null
        };
    },
    ready: function ready() {
        this.drake = dragula({
            moves: this.handleDragulaMoves
        });
    },

    components: {
        'modal': VueStrap.modal
    },
    methods: {
        showWidgetPicker: function showWidgetPicker() {
            this.$dispatch('showWidgetPicker', this.widget);
        },
        pickWidget: function pickWidget(widget) {
            this.$dispatch('widgetPicked', widget);
        },
        makeWidget: function makeWidget(type) {
            var fieldType = null;
            if (typeof type !== 'string') {
                fieldType = type.fieldType;
                type = type.type;
            }
            for (var w in this.availableWidgets) {
                if (this.availableWidgets[w].type === type && (fieldType == null || this.availableWidgets[w].fieldType && this.availableWidgets[w].fieldType === fieldType)) {
                    return JSON.parse((0, _stringify2.default)(this.availableWidgets[w]));
                }
            }
        },
        adjustWidgetNesting: function adjustWidgetNesting(parentType, child) {
            var fixedNesting = null;
            if (parentType === 'lord-asimov' && child.type !== 'row') {
                fixedNesting = this.makeWidget('row');
                fixedNesting.children.push(this.adjustWidgetNesting('row', child));
                return fixedNesting;
            }
            if (parentType === 'row' && child.type !== 'column') {
                fixedNesting = this.makeWidget('column');
                fixedNesting.children.push(this.adjustWidgetNesting('column', child));
                return fixedNesting;
            }
            return child;
        },
        handleDragulaMoves: function handleDragulaMoves(el, source, handle, sibling) {
            return handle.classList.contains('glyphicon-move');
        }
    },
    events: {
        showWidgetPicker: function showWidgetPicker(widget) {
            this.pickerTarget = widget;
            this.pickingWidget = true;
        },

        widgetPicked: function widgetPicked(widget) {
            this.pickingWidget = false;
            var newWidget = this.adjustWidgetNesting(this.pickerTarget.type, this.makeWidget(widget));
            this.pickerTarget.children.push(newWidget);
        },
        addDragulaContainer: function addDragulaContainer(container) {
            this.drake.containers.push(container);
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"lord-asimov\">\n            <div class=\"panel panel-default\">\n                <div v-if=\"widget.children.length\" class=\"panel-body\">\n                    <widget v-for=\"widget in widget.children\" track-by=\"$index\" :widget=\"widget\"></widget>\n                </div>\n                <div class=\"panel-footer text-center\">\n                    <button v-on:click=\"showWidgetPicker\" class=\"btn btn-default\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </div>\n            </div>\n            <modal :show.sync=\"pickingWidget\" class=\"lord-asimov-modal\">\n                <div slot=\"modal-header\" class=\"modal-header\">\n                    Pick a Widget\n                </div>\n                <div slot=\"modal-body\" class=\"modal-body\">\n                    <div class=\"row\">\n                        <div v-for=\"widget in availableWidgets\" class=\"col-sm-3\">\n                            <button v-on:click=\"pickWidget(widget)\" class=\"btn btn-default\">{{ widget.title }}</button>\n                        </div>\n                    </div>\n                </div>\n                <div slot=\"modal-footer\" class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" v-on:click=\"pickingWidget = false\">Cancel</button>\n                </div>\n            </modal>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <pre>{{ widget | json }}</pre>\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-02d7eacb", module.exports)
  } else {
    hotAPI.update("_v-02d7eacb", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"babel-runtime/core-js/json/stringify":1,"vue":8,"vue-hot-reload-api":6}],10:[function(require,module,exports){
'use strict';

window.dragula = require('dragula/dist/dragula.min.js');
window.VueStrap = require('vue-strap/dist/vue-strap.min.js');

},{"dragula/dist/dragula.min.js":4,"vue-strap/dist/vue-strap.min.js":7}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        widget: Object
    },
    methods: {
        showWidgetPicker: function showWidgetPicker() {
            this.$dispatch('showWidgetPicker', this.widget);
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"widget-column\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"glyphicon glyphicon-move\"></span> Column\n        </div>\n        <div class=\"panel-body\">\n            <widget v-for=\"child in widget.children\" track-by=\"$index\" :widget=\"child\"></widget>\n        </div>\n        <div class=\"panel-footer text-center\">\n            <button v-on:click=\"showWidgetPicker\" class=\"btn btn-xs btn-default\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n            </button>\n        </div>\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1d14ead9", module.exports)
  } else {
    hotAPI.update("_v-1d14ead9", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":8,"vue-hot-reload-api":6}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Text = require('./fields/Text.vue');

var _Text2 = _interopRequireDefault(_Text);

var _Textarea = require('./fields/Textarea.vue');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        widget: Object
    },
    computed: {
        fieldType: function fieldType() {
            return this.widget.fieldType;
        }
    },
    components: {
        'fieldText': _Text2.default,
        'fieldTextarea': _Textarea2.default
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"widget-field widget-field-{{ fieldType }}\">\n    <component :is=\"fieldType\" :widget=\"widget\"></component>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-9923c572", module.exports)
  } else {
    hotAPI.update("_v-9923c572", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./fields/Text.vue":15,"./fields/Textarea.vue":16,"vue":8,"vue-hot-reload-api":6}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        widget: Object
    },
    ready: function ready() {
        this.$dispatch('addDragulaContainer', this.$el.querySelector('.panel-body'));
    },
    destroyed: function destroyed() {
        this.$dispatch('removeDragulaContainer', this.$el.querySelector('.panel-body'));
    },

    methods: {
        showWidgetPicker: function showWidgetPicker() {
            this.$dispatch('showWidgetPicker', this.widget);
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"widget-row\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            Row\n        </div>\n        <div class=\"panel-body\">\n            <widget v-for=\"child in widget.children\" track-by=\"$index\" :widget=\"child\"></widget>\n        </div>\n        <div class=\"panel-footer text-center\">\n            <button v-on:click=\"showWidgetPicker\" class=\"btn btn-xs btn-default\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n            </button>\n        </div>\n    </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6fac2132", module.exports)
  } else {
    hotAPI.update("_v-6fac2132", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":8,"vue-hot-reload-api":6}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Row = require('./Row.vue');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('./Column.vue');

var _Column2 = _interopRequireDefault(_Column);

var _Field = require('./Field.vue');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        widget: Object
    },
    computed: {
        widgetType: function widgetType() {
            return this.widget.type;
        }
    },
    components: {
        Row: _Row2.default,
        Column: _Column2.default,
        Field: _Field2.default
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div><component :is=\"widgetType\" :widget=\"widget\"></component></div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-ef776a72", module.exports)
  } else {
    hotAPI.update("_v-ef776a72", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"./Column.vue":11,"./Field.vue":12,"./Row.vue":13,"vue":8,"vue-hot-reload-api":6}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        widget: Object
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" v-model=\"widget.config.text\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0cf4e310", module.exports)
  } else {
    hotAPI.update("_v-0cf4e310", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":8,"vue-hot-reload-api":6}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        widget: Object
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"form-group\">\n    <textarea class=\"form-control\" v-model=\"widget.config.text\"></textarea>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-94feadc6", module.exports)
  } else {
    hotAPI.update("_v-94feadc6", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":8,"vue-hot-reload-api":6}],17:[function(require,module,exports){
(function (global){
'use strict';

require('./bootstrap.js');

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _Widget = require('./components/Widget.vue');

var _Widget2 = _interopRequireDefault(_Widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('widget', _Widget2.default);

_vue2.default.config.debug = true;

global.App = new _vue2.default({
    el: 'body',
    components: {
        App: _App2.default
    }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./App.vue":9,"./bootstrap.js":10,"./components/Widget.vue":14,"vue":8}]},{},[17]);
