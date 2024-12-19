// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aB9Nh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "93db45d2322b4a39";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6Xosl":[function(require,module,exports,__globalThis) {
// sending email
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _browser = require("@emailjs/browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
const service_key = "service_rsm0cx5";
const template_key = "template_o52gv6s";
const public_key = "u_I9q_rHVOlN-ya4M";
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById("senderName").value,
        email: document.getElementById("senderEmail").value,
        message: document.getElementById("message").value
    };
    console.log("FormData:", formData);
    (0, _browserDefault.default).send(service_key, template_key, formData, public_key).then(()=>{
        alert("Email sent successfully!");
        document.getElementById("senderName").value = "";
        document.getElementById("senderEmail").value = "";
        document.getElementById("message").value = "";
    }).catch((error)=>{
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
    });
});

},{"@emailjs/browser":"kbSqr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbSqr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>(0, _init.init));
parcelHelpers.export(exports, "send", ()=>(0, _send.send));
parcelHelpers.export(exports, "sendForm", ()=>(0, _sendForm.sendForm));
parcelHelpers.export(exports, "EmailJSResponseStatus", ()=>(0, _emailJSResponseStatus.EmailJSResponseStatus));
var _emailJSResponseStatus = require("./models/EmailJSResponseStatus");
var _init = require("./methods/init/init");
var _send = require("./methods/send/send");
var _sendForm = require("./methods/sendForm/sendForm");
exports.default = {
    init: (0, _init.init),
    send: (0, _send.send),
    sendForm: (0, _sendForm.sendForm),
    EmailJSResponseStatus: (0, _emailJSResponseStatus.EmailJSResponseStatus)
};

},{"./models/EmailJSResponseStatus":"oZ06T","./methods/init/init":"lqGq1","./methods/send/send":"m7CoX","./methods/sendForm/sendForm":"a1Cpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"oZ06T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmailJSResponseStatus", ()=>EmailJSResponseStatus);
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error'){
        this.status = _status;
        this.text = _text;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lqGq1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _store = require("../../store/store");
var _buildOptions = require("../../utils/buildOptions/buildOptions");
const init = (options, origin = 'https://api.emailjs.com')=>{
    if (!options) return;
    const opts = (0, _buildOptions.buildOptions)(options);
    (0, _store.store).publicKey = opts.publicKey;
    (0, _store.store).blockHeadless = opts.blockHeadless;
    (0, _store.store).storageProvider = opts.storageProvider;
    (0, _store.store).blockList = opts.blockList;
    (0, _store.store).limitRate = opts.limitRate;
    (0, _store.store).origin = opts.origin || origin;
};

},{"../../store/store":"3eehJ","../../utils/buildOptions/buildOptions":"4eXBo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eehJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
var _createWebStorage = require("../utils/createWebStorage/createWebStorage");
const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0, _createWebStorage.createWebStorage)()
};

},{"../utils/createWebStorage/createWebStorage":"jt24v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jt24v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createWebStorage", ()=>createWebStorage);
const createWebStorage = ()=>{
    if (typeof localStorage === 'undefined') return;
    return {
        get: (key)=>Promise.resolve(localStorage.getItem(key)),
        set: (key, value)=>Promise.resolve(localStorage.setItem(key, value)),
        remove: (key)=>Promise.resolve(localStorage.removeItem(key))
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eXBo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildOptions", ()=>buildOptions);
const buildOptions = (options)=>{
    if (!options) return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') return {
        publicKey: options
    };
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') return options;
    return {};
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"m7CoX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "send", ()=>send);
var _store = require("../../store/store");
var _sendPost = require("../../api/sendPost");
var _buildOptions = require("../../utils/buildOptions/buildOptions");
var _validateParams = require("../../utils/validateParams/validateParams");
var _validateTemplateParams = require("../../utils/validateTemplateParams/validateTemplateParams");
var _isHeadless = require("../../utils/isHeadless/isHeadless");
var _headlessError = require("../../errors/headlessError/headlessError");
var _isBlockedValueInParams = require("../../utils/isBlockedValueInParams/isBlockedValueInParams");
var _blockedEmailError = require("../../errors/blockedEmailError/blockedEmailError");
var _isLimitRateHit = require("../../utils/isLimitRateHit/isLimitRateHit");
var _limitRateError = require("../../errors/limitRateError/limitRateError");
const send = async (serviceID, templateID, templateParams, options)=>{
    const opts = (0, _buildOptions.buildOptions)(options);
    const publicKey = opts.publicKey || (0, _store.store).publicKey;
    const blockHeadless = opts.blockHeadless || (0, _store.store).blockHeadless;
    const storageProvider = opts.storageProvider || (0, _store.store).storageProvider;
    const blockList = {
        ...(0, _store.store).blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...(0, _store.store).limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, _isHeadless.isHeadless)(navigator)) return Promise.reject((0, _headlessError.headlessError)());
    (0, _validateParams.validateParams)(publicKey, serviceID, templateID);
    (0, _validateTemplateParams.validateTemplateParams)(templateParams);
    if (templateParams && (0, _isBlockedValueInParams.isBlockedValueInParams)(blockList, templateParams)) return Promise.reject((0, _blockedEmailError.blockedEmailError)());
    if (await (0, _isLimitRateHit.isLimitRateHit)(location.pathname, limitRate, storageProvider)) return Promise.reject((0, _limitRateError.limitRateError)());
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams
    };
    return (0, _sendPost.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
};

},{"../../store/store":"3eehJ","../../api/sendPost":"3pmzm","../../utils/buildOptions/buildOptions":"4eXBo","../../utils/validateParams/validateParams":"iiuvO","../../utils/validateTemplateParams/validateTemplateParams":"5fzBp","../../utils/isHeadless/isHeadless":"gRPJ4","../../errors/headlessError/headlessError":"cvzAa","../../utils/isBlockedValueInParams/isBlockedValueInParams":"2NbMP","../../errors/blockedEmailError/blockedEmailError":"jfpsi","../../utils/isLimitRateHit/isLimitRateHit":"1a6fm","../../errors/limitRateError/limitRateError":"2tHS0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pmzm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendPost", ()=>sendPost);
var _emailJSResponseStatus = require("../models/EmailJSResponseStatus");
var _store = require("../store/store");
const sendPost = async (url, data, headers = {})=>{
    const response = await fetch((0, _store.store).origin + url, {
        method: 'POST',
        headers,
        body: data
    });
    const message = await response.text();
    const responseStatus = new (0, _emailJSResponseStatus.EmailJSResponseStatus)(response.status, message);
    if (response.ok) return responseStatus;
    throw responseStatus;
};

},{"../models/EmailJSResponseStatus":"oZ06T","../store/store":"3eehJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiuvO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateParams", ()=>validateParams);
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey || typeof publicKey !== 'string') throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    if (!serviceID || typeof serviceID !== 'string') throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    if (!templateID || typeof templateID !== 'string') throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fzBp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateTemplateParams", ()=>validateTemplateParams);
const validateTemplateParams = (templateParams)=>{
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRPJ4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isHeadless", ()=>isHeadless);
const isHeadless = (navigator)=>{
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvzAa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headlessError", ()=>headlessError);
var _emailJSResponseStatus = require("../../models/EmailJSResponseStatus");
const headlessError = ()=>{
    return new (0, _emailJSResponseStatus.EmailJSResponseStatus)(451, 'Unavailable For Headless Browser');
};

},{"../../models/EmailJSResponseStatus":"oZ06T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2NbMP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBlockedValueInParams", ()=>isBlockedValueInParams);
var _validateBlockListParams = require("../validateBlockListParams/validateBlockListParams");
const isBlockListDisabled = (options)=>{
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name)=>{
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params)=>{
    if (isBlockListDisabled(options)) return false;
    (0, _validateBlockListParams.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string') return false;
    return options.list.includes(value);
};

},{"../validateBlockListParams/validateBlockListParams":"gLzPj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLzPj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateBlockListParams", ()=>validateBlockListParams);
const validateBlockListParams = (list, watchVariable)=>{
    if (!Array.isArray(list)) throw 'The BlockList list has to be an array';
    if (typeof watchVariable !== 'string') throw 'The BlockList watchVariable has to be a string';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfpsi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blockedEmailError", ()=>blockedEmailError);
var _emailJSResponseStatus = require("../../models/EmailJSResponseStatus");
const blockedEmailError = ()=>{
    return new (0, _emailJSResponseStatus.EmailJSResponseStatus)(403, 'Forbidden');
};

},{"../../models/EmailJSResponseStatus":"oZ06T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1a6fm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isLimitRateHit", ()=>isLimitRateHit);
var _validateLimitRateParams = require("../validateLimitRateParams/validateLimitRateParams");
const getLeftTime = async (id, throttle, storage)=>{
    const lastTime = Number(await storage.get(id) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage)=>{
    if (!options.throttle || !storage) return false;
    (0, _validateLimitRateParams.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) return true;
    await storage.set(id, Date.now().toString());
    return false;
};

},{"../validateLimitRateParams/validateLimitRateParams":"6r7mT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6r7mT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateLimitRateParams", ()=>validateLimitRateParams);
const validateLimitRateParams = (throttle, id)=>{
    if (typeof throttle !== 'number' || throttle < 0) throw 'The LimitRate throttle has to be a positive number';
    if (id && typeof id !== 'string') throw 'The LimitRate ID has to be a non-empty string';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tHS0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "limitRateError", ()=>limitRateError);
var _emailJSResponseStatus = require("../../models/EmailJSResponseStatus");
const limitRateError = ()=>{
    return new (0, _emailJSResponseStatus.EmailJSResponseStatus)(429, 'Too Many Requests');
};

},{"../../models/EmailJSResponseStatus":"oZ06T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1Cpe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendForm", ()=>sendForm);
var _store = require("../../store/store");
var _sendPost = require("../../api/sendPost");
var _buildOptions = require("../../utils/buildOptions/buildOptions");
var _validateForm = require("../../utils/validateForm/validateForm");
var _validateParams = require("../../utils/validateParams/validateParams");
var _isHeadless = require("../../utils/isHeadless/isHeadless");
var _headlessError = require("../../errors/headlessError/headlessError");
var _isBlockedValueInParams = require("../../utils/isBlockedValueInParams/isBlockedValueInParams");
var _blockedEmailError = require("../../errors/blockedEmailError/blockedEmailError");
var _isLimitRateHit = require("../../utils/isLimitRateHit/isLimitRateHit");
var _limitRateError = require("../../errors/limitRateError/limitRateError");
const findHTMLForm = (form)=>{
    return typeof form === 'string' ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options)=>{
    const opts = (0, _buildOptions.buildOptions)(options);
    const publicKey = opts.publicKey || (0, _store.store).publicKey;
    const blockHeadless = opts.blockHeadless || (0, _store.store).blockHeadless;
    const storageProvider = (0, _store.store).storageProvider || opts.storageProvider;
    const blockList = {
        ...(0, _store.store).blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...(0, _store.store).limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, _isHeadless.isHeadless)(navigator)) return Promise.reject((0, _headlessError.headlessError)());
    const currentForm = findHTMLForm(form);
    (0, _validateParams.validateParams)(publicKey, serviceID, templateID);
    (0, _validateForm.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0, _isBlockedValueInParams.isBlockedValueInParams)(blockList, formData)) return Promise.reject((0, _blockedEmailError.blockedEmailError)());
    if (await (0, _isLimitRateHit.isLimitRateHit)(location.pathname, limitRate, storageProvider)) return Promise.reject((0, _limitRateError.limitRateError)());
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0, _sendPost.sendPost)('/api/v1.0/email/send-form', formData);
};

},{"../../store/store":"3eehJ","../../api/sendPost":"3pmzm","../../utils/buildOptions/buildOptions":"4eXBo","../../utils/validateForm/validateForm":"8cmNG","../../utils/validateParams/validateParams":"iiuvO","../../utils/isHeadless/isHeadless":"gRPJ4","../../errors/headlessError/headlessError":"cvzAa","../../utils/isBlockedValueInParams/isBlockedValueInParams":"2NbMP","../../errors/blockedEmailError/blockedEmailError":"jfpsi","../../utils/isLimitRateHit/isLimitRateHit":"1a6fm","../../errors/limitRateError/limitRateError":"2tHS0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cmNG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateForm", ()=>validateForm);
const validateForm = (form)=>{
    if (!form || form.nodeName !== 'FORM') throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aB9Nh","6Xosl"], "6Xosl", "parcelRequire94c2")

//# sourceMappingURL=index.322b4a39.js.map
