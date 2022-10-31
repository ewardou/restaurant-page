/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/img_freepik_com-bubbles-seamless-pattern-blue_1284-43368 (1).jpg */ "./src/images/img_freepik_com-bubbles-seamless-pattern-blue_1284-43368 (1).jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/burger-svgrepo-com-2.svg */ "./src/images/burger-svgrepo-com-2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu', sans-serif;\n}\n#content{\n    min-height:100vh;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n}\nimg{\n    height: 60px;\n}\n.tabs{\n    position: sticky;\n    top: 0px;\n}\ndiv>ul{\n    list-style: none;\n    display: flex;\n    padding: 5px;\n    gap:40px;\n    font-size: 1.2rem;\n    color:white;\n    background-color: rgb(6, 6, 204);\n    justify-content: center;\n    font-weight: bold;\n}\nheader{\n    background-color: rgb(6, 6, 204);\n    padding: 5px;\n    display:grid;\n    grid-auto-rows: min-content;\n    justify-items: center;\n    gap:5px;\n}\nmain{\n    /* background-color: rgb(252, 232, 232); */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 330px;\n    padding: 40px 0px;\n}\nsection{\n    border:2px solid black;\n    width: fit-content;\n    padding: 15px;\n    margin: 10px auto;\n    background-color: rgba(255,255,255,0.9);\n} \nsection>img{\n    height: 180px;\n    width: auto;\n}\ndiv>ul>li{\n    cursor: pointer;\n    border-bottom: 2px solid rgba(255, 255, 255, 0);\n}\ndiv>ul>li:hover{\n    color: rgb(143, 144, 229);\n    position:relative;\n    bottom: 3px;\n}\ndiv>ul>li:active{\n    color: rgb(68, 88, 204);\n}\ndiv>ul>li.active{\n    border-bottom: 2px solid white;\n    transition: 100ms ease-in-out;\n    position: relative;\n    bottom: 3px;\n}\n.policies h2{\n    margin-bottom: 10px;\n}\n.policies li{\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    list-style-position: inside;\n    font-size: 1.2rem;\n}\n.policies{\n    width:50%;\n}\n.policies li+li{\n    margin-top:10px;\n}\n.menu{\n    border:none;\n    width:min(80%);\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    gap:20px;\n    background-color: rgba(255,255,255,0);\n    padding:0;\n}\n.menu>div{\n    background-color: rgba(255,255,255,0.9);\n    padding: 10px;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    column-gap: 10px;\n    border:solid black 2px;\n}\n.menu>div:hover{\n    transform: scale(1.05);\n    transition: 150ms ease-in-out;\n}\n.menu img{\n    grid-column: 2 / 3;\n    grid-row: 1 / 4;\n    height: 150px;\n    width: auto;\n}\n.contact>div{\n    display: flex;\n    align-items: center;\n    gap:5px;\n}\n.contact>div>img{\n    height: 40px;\n}\n.contact>img{\n    height: 360px;\n}\nform>div{\n    display: grid;\n    grid-template-columns: 80px 65%;\n    margin-top: 10px;\n}\ntextarea{\n    height: 80px;\n    resize: none;\n}\ninput,\ntextarea{\n    padding: 3px;\n    font-size: 1rem;\n}\nform button,\n.home>div:first-of-type>button{\n    padding: 5px 10px;\n    background-color: blue;\n    color:white;\n    font-weight: bold;\n    border: solid white 2px;\n}\nform button:hover,\n.home>div:first-of-type>button:hover{\n    background-color: rgb(27, 148, 189);\n}\nform button:active,\n.home>div:first-of-type>button:active{\n    background-color: rgb(3, 3, 184);\n}\n.home{\n    width: min(850px,80%);\n    padding: 15px 0px;\n    /* width:fit-content */\n}\n.home>*{\n    margin: 0 15px;\n}\n.home>div:first-of-type{\n    display:grid;\n    grid-template-columns: 1fr min-content;\n    row-gap: 10px;\n    margin-bottom: 15px;\n}\n.home>div:first-of-type>img{\n    height: 150px;\n    grid-column: 2/3;\n    grid-row:1/4;\n}\n.home>div:first-of-type>button{\n    justify-self:flex-start;\n}\n.home>div:nth-child(2){\n    display: grid;\n    background-color: rgb(71, 207, 231);\n    box-shadow: 0px 5px 8px #00000082;\n    margin: 0;\n    padding: 10px;\n    row-gap: 15px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: min-content 1fr;\n    text-align: center;\n    margin-bottom: 15px;\n}\n.home>div:nth-child(2)>h3{\n    grid-column: 1/4;\n}\n.home>div:nth-child(2) img{\n    height: 150px;\n}\n.home>div:nth-child(2) p:first-of-type{\n    font-weight: bold;\n}\n.home>div:nth-child(3) img{\n    height: 200px;\n    margin-top: 5px;\n}\n.home>div:nth-child(3){\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n}\n.home>div:nth-child(3)>div:nth-of-type(2)>p{\n    margin-top: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,QAAQ;IACR,sBAAsB;IACtB,iCAAiC;AACrC;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,+CAA+C;AACnD;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,QAAQ;AACZ;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,iBAAiB;IACjB,WAAW;IACX,gCAAgC;IAChC,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,gCAAgC;IAChC,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,qBAAqB;IACrB,OAAO;AACX;AACA;IACI,0CAA0C;IAC1C,yDAAmG;IACnG,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,uCAAuC;AAC3C;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;IACf,+CAA+C;AACnD;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,mBAAmB;AACvB;AACA;IACI,yDAA0D;IAC1D,2BAA2B;IAC3B,iBAAiB;AACrB;AACA;IACI,SAAS;AACb;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yDAAyD;IACzD,QAAQ;IACR,qCAAqC;IACrC,SAAS;AACb;AACA;IACI,uCAAuC;IACvC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,OAAO;AACX;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,YAAY;IACZ,eAAe;AACnB;AACA;;IAEI,iBAAiB;IACjB,sBAAsB;IACtB,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;;IAEI,mCAAmC;AACvC;AACA;;IAEI,gCAAgC;AACpC;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA;IACI,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,iCAAiC;IACjC,SAAS;IACT,aAAa;IACb,aAAa;IACb,qCAAqC;IACrC,mCAAmC;IACnC,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n\n*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu', sans-serif;\n}\n#content{\n    min-height:100vh;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n}\nimg{\n    height: 60px;\n}\n.tabs{\n    position: sticky;\n    top: 0px;\n}\ndiv>ul{\n    list-style: none;\n    display: flex;\n    padding: 5px;\n    gap:40px;\n    font-size: 1.2rem;\n    color:white;\n    background-color: rgb(6, 6, 204);\n    justify-content: center;\n    font-weight: bold;\n}\nheader{\n    background-color: rgb(6, 6, 204);\n    padding: 5px;\n    display:grid;\n    grid-auto-rows: min-content;\n    justify-items: center;\n    gap:5px;\n}\nmain{\n    /* background-color: rgb(252, 232, 232); */\n    background-image: url(./images/img_freepik_com-bubbles-seamless-pattern-blue_1284-43368\\ \\(1\\).jpg);\n    background-size: 330px;\n    padding: 40px 0px;\n}\nsection{\n    border:2px solid black;\n    width: fit-content;\n    padding: 15px;\n    margin: 10px auto;\n    background-color: rgba(255,255,255,0.9);\n} \nsection>img{\n    height: 180px;\n    width: auto;\n}\ndiv>ul>li{\n    cursor: pointer;\n    border-bottom: 2px solid rgba(255, 255, 255, 0);\n}\ndiv>ul>li:hover{\n    color: rgb(143, 144, 229);\n    position:relative;\n    bottom: 3px;\n}\ndiv>ul>li:active{\n    color: rgb(68, 88, 204);\n}\ndiv>ul>li.active{\n    border-bottom: 2px solid white;\n    transition: 100ms ease-in-out;\n    position: relative;\n    bottom: 3px;\n}\n.policies h2{\n    margin-bottom: 10px;\n}\n.policies li{\n    list-style-image: url(\"./images/burger-svgrepo-com-2.svg\");\n    list-style-position: inside;\n    font-size: 1.2rem;\n}\n.policies{\n    width:50%;\n}\n.policies li+li{\n    margin-top:10px;\n}\n.menu{\n    border:none;\n    width:min(80%);\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    gap:20px;\n    background-color: rgba(255,255,255,0);\n    padding:0;\n}\n.menu>div{\n    background-color: rgba(255,255,255,0.9);\n    padding: 10px;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    column-gap: 10px;\n    border:solid black 2px;\n}\n.menu>div:hover{\n    transform: scale(1.05);\n    transition: 150ms ease-in-out;\n}\n.menu img{\n    grid-column: 2 / 3;\n    grid-row: 1 / 4;\n    height: 150px;\n    width: auto;\n}\n.contact>div{\n    display: flex;\n    align-items: center;\n    gap:5px;\n}\n.contact>div>img{\n    height: 40px;\n}\n.contact>img{\n    height: 360px;\n}\nform>div{\n    display: grid;\n    grid-template-columns: 80px 65%;\n    margin-top: 10px;\n}\ntextarea{\n    height: 80px;\n    resize: none;\n}\ninput,\ntextarea{\n    padding: 3px;\n    font-size: 1rem;\n}\nform button,\n.home>div:first-of-type>button{\n    padding: 5px 10px;\n    background-color: blue;\n    color:white;\n    font-weight: bold;\n    border: solid white 2px;\n}\nform button:hover,\n.home>div:first-of-type>button:hover{\n    background-color: rgb(27, 148, 189);\n}\nform button:active,\n.home>div:first-of-type>button:active{\n    background-color: rgb(3, 3, 184);\n}\n.home{\n    width: min(850px,80%);\n    padding: 15px 0px;\n    /* width:fit-content */\n}\n.home>*{\n    margin: 0 15px;\n}\n.home>div:first-of-type{\n    display:grid;\n    grid-template-columns: 1fr min-content;\n    row-gap: 10px;\n    margin-bottom: 15px;\n}\n.home>div:first-of-type>img{\n    height: 150px;\n    grid-column: 2/3;\n    grid-row:1/4;\n}\n.home>div:first-of-type>button{\n    justify-self:flex-start;\n}\n.home>div:nth-child(2){\n    display: grid;\n    background-color: rgb(71, 207, 231);\n    box-shadow: 0px 5px 8px #00000082;\n    margin: 0;\n    padding: 10px;\n    row-gap: 15px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: min-content 1fr;\n    text-align: center;\n    margin-bottom: 15px;\n}\n.home>div:nth-child(2)>h3{\n    grid-column: 1/4;\n}\n.home>div:nth-child(2) img{\n    height: 150px;\n}\n.home>div:nth-child(2) p:first-of-type{\n    font-weight: bold;\n}\n.home>div:nth-child(3) img{\n    height: 200px;\n    margin-top: 5px;\n}\n.home>div:nth-child(3){\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n}\n.home>div:nth-child(3)>div:nth-of-type(2)>p{\n    margin-top: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
/* harmony import */ var _images_phone_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/phone_icon.svg */ "./src/images/phone_icon.svg");
/* harmony import */ var _images_pacific_ocean_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pacific_ocean.png */ "./src/images/pacific_ocean.png");
/* harmony import */ var _images_location_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/location_icon.svg */ "./src/images/location_icon.svg");
/* harmony import */ var _images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mail_icon.svg */ "./src/images/mail_icon.svg");






function createContactSection(){
    let contactSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("section");

    let createGroup=(textContent,image)=>{
        let div=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
        let text=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p",textContent);
        let icon=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
        icon.setAttribute("src",image);
        div.append(icon,text);
        return div;    
    }
    let tlf=createGroup("(555)-555-5555",_images_phone_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
    let location=createGroup("831 Bottomfeeder Lane, Bikini Bottom, Pacific Ocean",_images_location_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
    let message=createGroup("Message us",_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_4__);

    let createFormElement=(type,id,labelText)=>{
        let div=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
        let label=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("id",labelText);
        label.setAttribute("for",id);
        let input=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("input");
        input.setAttribute("type",type);
        input.setAttribute("id",id);
        if (type==="textarea"){input=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("textarea")};
        div.append(label,input);
        return div;
    };

    let nameInput=createFormElement("text","name","Full name");
    let emailInput=createFormElement("email","email","E-mail");
    let textArea=createFormElement("textarea","message","Write your message");

    let button=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("button","Submit");
    button.setAttribute("type","button");
    let form=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("form");
    form.append(nameInput,emailInput,textArea,button);

    let pacificOcean=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
    pacificOcean.setAttribute("src",_images_pacific_ocean_png__WEBPACK_IMPORTED_MODULE_2__);
    contactSection.append(tlf,location,message,form,pacificOcean);

    let render=function(){
        contactSection.classList.add("contact");
        document.querySelector("main").appendChild(contactSection);
    };
    return {
        render
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactSection);

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_PngItem_3433384_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/PngItem_3433384.png */ "./src/images/PngItem_3433384.png");


function createLayout(){
    let createElement=(type,content="")=>{
        let element=document.createElement(type);
        element.textContent=content;
        return element
    };

    let image=createElement("img");
    image.setAttribute("src",_images_PngItem_3433384_png__WEBPACK_IMPORTED_MODULE_0__);

    let header=createElement("header");
    let tabsBar=createElement("ul");
    let homeTab=createElement("li");
    let menuTab=createElement("li");
    let contactTab=createElement("li");
    let policiesTab=createElement("li")

    homeTab.append(createElement("a","Home"));
    menuTab.append(createElement("a","Menu"));
    contactTab.append(createElement("a","Contact"));
    policiesTab.append(createElement("a","Policies"));

    tabsBar.append(homeTab,menuTab,contactTab,policiesTab);

    header.append(image);
    let tabsContainer=createElement("div");
    tabsContainer.append(tabsBar);
    tabsContainer.classList.add("tabs")

    let main=createElement("main");

    return {
        header,
        tabsContainer,
        main,
        createElement
    };
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLayout);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
/* harmony import */ var _images_My_Two_Krabses_001_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/My_Two_Krabses_001.jpg */ "./src/images/My_Two_Krabses_001.jpg");
/* harmony import */ var _images_krabby_patty_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/krabby_patty.jpg */ "./src/images/krabby_patty.jpg");
/* harmony import */ var _images_mrkrabs_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/mrkrabs.jpg */ "./src/images/mrkrabs.jpg");
/* harmony import */ var _images_spongebob_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/spongebob.jpg */ "./src/images/spongebob.jpg");
/* harmony import */ var _images_squidward_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/squidward.png */ "./src/images/squidward.png");







function createHomeSection(){

    let homeSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("section");

    let headerSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
    let header=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h2","Welcome to the Krusty Krab, home of the famous Krabby Patty!");
    let lorem=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet. Neque gravida in fermentum et. Ullamcorper a lacus vestibulum sed arcu non. Mauris a diam maecenas sed enim ut sem. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.")
    let krabbyPatty=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
    krabbyPatty.setAttribute("src",_images_krabby_patty_jpg__WEBPACK_IMPORTED_MODULE_2__);
    let orderButton=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("button","Order now");

    headerSection.append(header,lorem,krabbyPatty,orderButton);

    //Team section
    let teamSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
    let teamTitle=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h3","The Krusty Krew");
    let createMember=function(image,name,position){
        let div=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
        let memberPicture=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
        memberPicture.setAttribute("src",image);
        let memberName=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p",name);
        let memberPosition=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p",position);

        div.append(memberPicture,memberName,memberPosition);
        return div;
    };
    let mrKrabs=createMember(_images_mrkrabs_jpg__WEBPACK_IMPORTED_MODULE_3__,"Eugene H. Krabs","Owner");
    let spongebob=createMember(_images_spongebob_jpg__WEBPACK_IMPORTED_MODULE_4__,"SpongeBob SquarePants","Fry cook");
    let squidward=createMember(_images_squidward_png__WEBPACK_IMPORTED_MODULE_5__,"Squidward Tentacles","Cashier and waiter");
    teamSection.append(teamTitle,mrKrabs,spongebob,squidward);

    //Location section
    let locationSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
    let locationTitle=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h2","Visit us at");
    let locationPara=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","831 Bottomfeeder Lane, Bikini Bottom, Pacific Ocean");

    let image=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
    image.setAttribute("src",_images_My_Two_Krabses_001_jpg__WEBPACK_IMPORTED_MODULE_1__);

    locationSection.append(locationTitle,locationPara,image);

    //Schedule section
    let scheduleSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
    let scheduleTitle=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h2","Schedule");
    let Sunday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Sunday: 8am - 8pm");
    let Monday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Monday: 6am - 6pm");
    let Tuesday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Tuesday: 6am - 6pm");
    let Wednesday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Wednesday: 6am - 6pm");
    let Thursday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Thursday: 6am - 10pm");
    let Friday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Friday: 6am - 10pm");
    let Saturday=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Saturday: 8am - 10pm");

    scheduleSection.append(scheduleTitle,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday);

    let container=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
    container.append(locationSection,scheduleSection)
    homeSection.append(headerSection,teamSection,container);


    let render=function(){
        homeSection.classList.add("home");
        document.querySelector("main").appendChild(homeSection);        
    }
    return {
        render
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeSection);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
/* harmony import */ var _images_Coral_Bits_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Coral_Bits.jpg */ "./src/images/Coral_Bits.jpg");
/* harmony import */ var _images_kelp_shake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/kelp_shake.jpg */ "./src/images/kelp_shake.jpg");
/* harmony import */ var _images_super_kraby_supreme_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/super_kraby_supreme.jpg */ "./src/images/super_kraby_supreme.jpg");
/* harmony import */ var _images_krabby_patty_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/krabby_patty.jpg */ "./src/images/krabby_patty.jpg");
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pizza.jpg */ "./src/images/pizza.jpg");
/* harmony import */ var _images_kelp_fries_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/kelp_fries.jpeg */ "./src/images/kelp_fries.jpeg");








function createMenuSection(){

    let createItem=function(title,description,price,image){
        let container=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
        let itemTitle=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h4",title);
        let itemDescription=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p",description);
        let itemPrice=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p",`Price: $${price}`);
        let itemImage=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
        itemImage.setAttribute("src",image);
    
        container.append(itemTitle,itemDescription,itemPrice,itemImage);    
        container.classList.add("item");
        return container;
    };

    let krabbyPatty=createItem("The Krabby Patty","Our signature item. It is a meatless hamburger of sorts made from seaweed-sea buns, undersea vegetables, condiments, and the patty made with our secret formula. It can also be ordered with cheese.",4,_images_krabby_patty_jpg__WEBPACK_IMPORTED_MODULE_4__);

    let coralBits=createItem("Coral Bits","Side dish that consist of small bits of pale pink corals served in a red and yellow paper food tray. There is also a chili variation of the product.",1.05,_images_Coral_Bits_jpg__WEBPACK_IMPORTED_MODULE_1__);

    let kelpShake=createItem("Kelp Shake","An addictive soft drink made 99% of kelp juice, the remaining percentile is an unknown material. It might produce side effects.",2,_images_kelp_shake_jpg__WEBPACK_IMPORTED_MODULE_2__);

    let ultraKrabySupreme=createItem("Ultra Krabby Supreme","Larger variation of the Krabby Patty. The outside is a yellow-ish color like batter. It can also be batter-fried twice, or be on a stick, only if the customer requests it.",6,_images_super_kraby_supreme_jpg__WEBPACK_IMPORTED_MODULE_3__);

    let krustyKrabPizza=createItem("Krusty Krab Pizza","A tray of Krabby Patties fused together, and flattened in the form of a pizza. It has eight slices.",4.50,_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__);
    let kelpFries=createItem("Kelp Fries","Fries that resemble seaweed with the way they are shaped.",1,_images_kelp_fries_jpeg__WEBPACK_IMPORTED_MODULE_6__);

    let menuSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("section");
    menuSection.append(krabbyPatty,coralBits,kelpShake,ultraKrabySupreme,krustyKrabPizza,kelpFries);

    let render=function(){
        menuSection.classList.add("menu");
        document.querySelector("main").appendChild(menuSection);
    };
    return {
        render
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuSection);

/***/ }),

/***/ "./src/policies.js":
/*!*************************!*\
  !*** ./src/policies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");


function createPoliciesSection(){
    let section=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("section");
    let policiesTitle=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h2","Policies");
    let ul=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("ul");
    let rules=[
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","Nobody eats in the Krusty Krab for free (royalty or not)."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","Once the patty has reached the customer, it is his / her responsibility."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","No free napkins."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","No free refills."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","A standing fee will be given if a customer does not order anything."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","No refunds."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","Any money brought into the Krusty Krab must be spent in the Krusty Krab."),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","There is a 5 dollar complaint fee"),
        (0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("li","The Krabby Patty secret formula is the sole property of the Krusty Krab and is only to be discussed in part or in whole with its creator Mr. Krabs. Duplication of this formula is punishable by law. Restrictions apply, results may vary.")
    ];
    rules.forEach(rule=>{
        ul.appendChild(rule);
    });
    section.append(policiesTitle,ul);
    let render=function(){
        section.classList.add("policies");
        document.querySelector("main").appendChild(section);
    };
    return {
        render
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPoliciesSection);

/***/ }),

/***/ "./src/images/Coral_Bits.jpg":
/*!***********************************!*\
  !*** ./src/images/Coral_Bits.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67402394824de6d1da58.jpg";

/***/ }),

/***/ "./src/images/My_Two_Krabses_001.jpg":
/*!*******************************************!*\
  !*** ./src/images/My_Two_Krabses_001.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d3cc34d2dbe5684814f.jpg";

/***/ }),

/***/ "./src/images/PngItem_3433384.png":
/*!****************************************!*\
  !*** ./src/images/PngItem_3433384.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5ed5dec89f24c9ec43b.png";

/***/ }),

/***/ "./src/images/burger-svgrepo-com-2.svg":
/*!*********************************************!*\
  !*** ./src/images/burger-svgrepo-com-2.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56274f3a5363e29b69ce.svg";

/***/ }),

/***/ "./src/images/img_freepik_com-bubbles-seamless-pattern-blue_1284-43368 (1).jpg":
/*!*************************************************************************************!*\
  !*** ./src/images/img_freepik_com-bubbles-seamless-pattern-blue_1284-43368 (1).jpg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f77bc4d8cc46b6bd7bb.jpg";

/***/ }),

/***/ "./src/images/kelp_fries.jpeg":
/*!************************************!*\
  !*** ./src/images/kelp_fries.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8d813e38fee3222a6bd.jpeg";

/***/ }),

/***/ "./src/images/kelp_shake.jpg":
/*!***********************************!*\
  !*** ./src/images/kelp_shake.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0854801b20e5d694d0d2.jpg";

/***/ }),

/***/ "./src/images/krabby_patty.jpg":
/*!*************************************!*\
  !*** ./src/images/krabby_patty.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a0d19d78cb262688348.jpg";

/***/ }),

/***/ "./src/images/location_icon.svg":
/*!**************************************!*\
  !*** ./src/images/location_icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f059afe05723edb3a73.svg";

/***/ }),

/***/ "./src/images/mail_icon.svg":
/*!**********************************!*\
  !*** ./src/images/mail_icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a387e74dbef285fe81a.svg";

/***/ }),

/***/ "./src/images/mrkrabs.jpg":
/*!********************************!*\
  !*** ./src/images/mrkrabs.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f547c3b1de631c8ff645.jpg";

/***/ }),

/***/ "./src/images/pacific_ocean.png":
/*!**************************************!*\
  !*** ./src/images/pacific_ocean.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2925456480b84dbeb2ba.png";

/***/ }),

/***/ "./src/images/phone_icon.svg":
/*!***********************************!*\
  !*** ./src/images/phone_icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02af061e66783ca2006e.svg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d12da1309a1847ebb62b.jpg";

/***/ }),

/***/ "./src/images/spongebob.jpg":
/*!**********************************!*\
  !*** ./src/images/spongebob.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b741cc7268844354e9f.jpg";

/***/ }),

/***/ "./src/images/squidward.png":
/*!**********************************!*\
  !*** ./src/images/squidward.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55babbac05f9d370ad1b.png";

/***/ }),

/***/ "./src/images/super_kraby_supreme.jpg":
/*!********************************************!*\
  !*** ./src/images/super_kraby_supreme.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b52daf11819e3092894.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _policies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policies */ "./src/policies.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







let content=document.querySelector("#content");
content.append((0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().header,(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().tabsContainer,(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().main);

function initializePage(){
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])().render();
    document.querySelector("button").addEventListener("click",()=>{
        removeContent();
        menuTab.classList.add("active");
        (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])().render();
    });
};
initializePage();

document.querySelector("button").addEventListener("click",()=>{
    removeContent();
    menuTab.classList.add("active");
    (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])().render();
})

function removeContent(){
    let contentToRemove=document.querySelectorAll("section");
    contentToRemove.forEach(section=>{
        document.querySelector("main").removeChild(section);
    });
    let tabs=document.querySelectorAll("div>ul>li");
    tabs.forEach(tab=>{
        tab.classList.remove("active");
    })
};

let homeTab=document.querySelector("div>ul>li:first-of-type");
homeTab.classList.add("active");
homeTab.addEventListener("click",()=>{
    removeContent();
    homeTab.classList.add("active");
    initializePage();
})

let menuTab=document.querySelector("div>ul>li:nth-of-type(2)");
menuTab.addEventListener("click",()=>{
    removeContent();
    menuTab.classList.add("active");
    (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])().render();
});

let policiesTab=document.querySelector("div>ul>li:last-of-type");
policiesTab.addEventListener("click",()=>{
    removeContent();
    policiesTab.classList.add("active");
    (0,_policies__WEBPACK_IMPORTED_MODULE_3__["default"])().render();
});

let contactTab=document.querySelector("div>ul>li:nth-of-type(3)");
contactTab.addEventListener("click",()=>{
    removeContent();
    contactTab.classList.add("active");
    (0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])().render();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ2hCO0FBQ2tCO0FBQ1E7QUFDUjtBQUNNOztBQUU3QztBQUNBLGVBQWUsb0RBQVksVUFBVSxvREFBWSxpQkFBaUIsb0RBQVk7O0FBRTlFO0FBQ0EsSUFBSSxpREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBaUI7QUFDckIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWlCO0FBQ3JCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFxQjtBQUN6QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBb0I7QUFDeEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BvbGljaWVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pbWdfZnJlZXBpa19jb20tYnViYmxlcy1zZWFtbGVzcy1wYXR0ZXJuLWJsdWVfMTI4NC00MzM2OCAoMSkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYnVyZ2VyLXN2Z3JlcG8tY29tLTIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcbiNjb250ZW50e1xcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IDFmcjtcXG59XFxuaW1ne1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcbi50YWJze1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG59XFxuZGl2PnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDo0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAyMDQpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDIwNCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjVweDtcXG59XFxubWFpbntcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjMyLCAyMzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcXG59XFxuc2VjdGlvbntcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbn0gXFxuc2VjdGlvbj5pbWd7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5kaXY+dWw+bGl7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcbmRpdj51bD5saTpob3ZlcntcXG4gICAgY29sb3I6IHJnYigxNDMsIDE0NCwgMjI5KTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGJvdHRvbTogM3B4O1xcbn1cXG5kaXY+dWw+bGk6YWN0aXZle1xcbiAgICBjb2xvcjogcmdiKDY4LCA4OCwgMjA0KTtcXG59XFxuZGl2PnVsPmxpLmFjdGl2ZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDNweDtcXG59XFxuLnBvbGljaWVzIGgye1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ucG9saWNpZXMgbGl7XFxuICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5wb2xpY2llc3tcXG4gICAgd2lkdGg6NTAlO1xcbn1cXG4ucG9saWNpZXMgbGkrbGl7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuLm1lbnV7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICB3aWR0aDptaW4oODAlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDQwMHB4LDFmcikpO1xcbiAgICBnYXA6MjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG4gICAgcGFkZGluZzowO1xcbn1cXG4ubWVudT5kaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGJvcmRlcjpzb2xpZCBibGFjayAycHg7XFxufVxcbi5tZW51PmRpdjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5tZW51IGltZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4uY29udGFjdD5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDo1cHg7XFxufVxcbi5jb250YWN0PmRpdj5pbWd7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmNvbnRhY3Q+aW1ne1xcbiAgICBoZWlnaHQ6IDM2MHB4O1xcbn1cXG5mb3JtPmRpdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDY1JTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxudGV4dGFyZWF7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5pbnB1dCxcXG50ZXh0YXJlYXtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbmZvcm0gYnV0dG9uLFxcbi5ob21lPmRpdjpmaXJzdC1vZi10eXBlPmJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxufVxcbmZvcm0gYnV0dG9uOmhvdmVyLFxcbi5ob21lPmRpdjpmaXJzdC1vZi10eXBlPmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxNDgsIDE4OSk7XFxufVxcbmZvcm0gYnV0dG9uOmFjdGl2ZSxcXG4uaG9tZT5kaXY6Zmlyc3Qtb2YtdHlwZT5idXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMywgMTg0KTtcXG59XFxuLmhvbWV7XFxuICAgIHdpZHRoOiBtaW4oODUwcHgsODAlKTtcXG4gICAgcGFkZGluZzogMTVweCAwcHg7XFxuICAgIC8qIHdpZHRoOmZpdC1jb250ZW50ICovXFxufVxcbi5ob21lPip7XFxuICAgIG1hcmdpbjogMCAxNXB4O1xcbn1cXG4uaG9tZT5kaXY6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmhvbWU+ZGl2OmZpcnN0LW9mLXR5cGU+aW1ne1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzoxLzQ7XFxufVxcbi5ob21lPmRpdjpmaXJzdC1vZi10eXBlPmJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOmZsZXgtc3RhcnQ7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMil7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMjA3LCAyMzEpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDhweCAjMDAwMDAwODI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcm93LWdhcDogMTVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmhvbWU+ZGl2Om50aC1jaGlsZCgyKT5oM3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuLmhvbWU+ZGl2Om50aC1jaGlsZCgyKSBpbWd7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMikgcDpmaXJzdC1vZi10eXBle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhvbWU+ZGl2Om50aC1jaGlsZCgzKSBpbWd7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmhvbWU+ZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMyk+ZGl2Om50aC1vZi10eXBlKDIpPnB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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QjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1JmRpc3BsYXk9c3dhcCcpO1xcblxcbip7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5pbWd7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuLnRhYnN7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbn1cXG5kaXY+dWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOjQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDIwNCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMjA0KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6NXB4O1xcbn1cXG5tYWlue1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzIsIDIzMik7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9pbWdfZnJlZXBpa19jb20tYnViYmxlcy1zZWFtbGVzcy1wYXR0ZXJuLWJsdWVfMTI4NC00MzM2OFxcXFwgXFxcXCgxXFxcXCkuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMzBweDtcXG4gICAgcGFkZGluZzogNDBweCAwcHg7XFxufVxcbnNlY3Rpb257XFxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcXG59IFxcbnNlY3Rpb24+aW1ne1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuZGl2PnVsPmxpe1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5kaXY+dWw+bGk6aG92ZXJ7XFxuICAgIGNvbG9yOiByZ2IoMTQzLCAxNDQsIDIyOSk7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206IDNweDtcXG59XFxuZGl2PnVsPmxpOmFjdGl2ZXtcXG4gICAgY29sb3I6IHJnYig2OCwgODgsIDIwNCk7XFxufVxcbmRpdj51bD5saS5hY3RpdmV7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzcHg7XFxufVxcbi5wb2xpY2llcyBoMntcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnBvbGljaWVzIGxpe1xcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2J1cmdlci1zdmdyZXBvLWNvbS0yLnN2Z1xcXCIpO1xcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4ucG9saWNpZXN7XFxuICAgIHdpZHRoOjUwJTtcXG59XFxuLnBvbGljaWVzIGxpK2xpe1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcbi5tZW51e1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgd2lkdGg6bWluKDgwJSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCg0MDBweCwxZnIpKTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuLm1lbnU+ZGl2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6c29saWQgYmxhY2sgMnB4O1xcbn1cXG4ubWVudT5kaXY6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubWVudSBpbWd7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuLmNvbnRhY3Q+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6NXB4O1xcbn1cXG4uY29udGFjdD5kaXY+aW1ne1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5jb250YWN0PmltZ3tcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG59XFxuZm9ybT5kaXZ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCA2NSU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbnRleHRhcmVhe1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuaW5wdXQsXFxudGV4dGFyZWF7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5mb3JtIGJ1dHRvbixcXG4uaG9tZT5kaXY6Zmlyc3Qtb2YtdHlwZT5idXR0b257XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcbn1cXG5mb3JtIGJ1dHRvbjpob3ZlcixcXG4uaG9tZT5kaXY6Zmlyc3Qtb2YtdHlwZT5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMTQ4LCAxODkpO1xcbn1cXG5mb3JtIGJ1dHRvbjphY3RpdmUsXFxuLmhvbWU+ZGl2OmZpcnN0LW9mLXR5cGU+YnV0dG9uOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDE4NCk7XFxufVxcbi5ob21le1xcbiAgICB3aWR0aDogbWluKDg1MHB4LDgwJSk7XFxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xcbiAgICAvKiB3aWR0aDpmaXQtY29udGVudCAqL1xcbn1cXG4uaG9tZT4qe1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG59XFxuLmhvbWU+ZGl2OmZpcnN0LW9mLXR5cGV7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ob21lPmRpdjpmaXJzdC1vZi10eXBlPmltZ3tcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6MS80O1xcbn1cXG4uaG9tZT5kaXY6Zmlyc3Qtb2YtdHlwZT5idXR0b257XFxuICAgIGp1c3RpZnktc2VsZjpmbGV4LXN0YXJ0O1xcbn1cXG4uaG9tZT5kaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDIwNywgMjMxKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA4cHggIzAwMDAwMDgyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHJvdy1nYXA6IDE1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMik+aDN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMikgaW1ne1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uaG9tZT5kaXY6bnRoLWNoaWxkKDIpIHA6Zmlyc3Qtb2YtdHlwZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMykgaW1ne1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5ob21lPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZT5kaXY6bnRoLWNoaWxkKDMpPmRpdjpudGgtb2YtdHlwZSgyKT5we1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgcGhvbmVJbWFnZSBmcm9tIFwiLi9pbWFnZXMvcGhvbmVfaWNvbi5zdmdcIjtcbmltcG9ydCBwYWNpZmljT2NlYW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvcGFjaWZpY19vY2Vhbi5wbmdcIjtcbmltcG9ydCBsb2NhdGlvbkltYWdlIGZyb20gXCIuL2ltYWdlcy9sb2NhdGlvbl9pY29uLnN2Z1wiO1xuaW1wb3J0IG1haWxJY29uIGZyb20gXCIuL2ltYWdlcy9tYWlsX2ljb24uc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCl7XG4gICAgbGV0IGNvbnRhY3RTZWN0aW9uPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gICAgbGV0IGNyZWF0ZUdyb3VwPSh0ZXh0Q29udGVudCxpbWFnZSk9PntcbiAgICAgICAgbGV0IGRpdj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgdGV4dD1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLHRleHRDb250ZW50KTtcbiAgICAgICAgbGV0IGljb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmQoaWNvbix0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGRpdjsgICAgXG4gICAgfVxuICAgIGxldCB0bGY9Y3JlYXRlR3JvdXAoXCIoNTU1KS01NTUtNTU1NVwiLHBob25lSW1hZ2UpO1xuICAgIGxldCBsb2NhdGlvbj1jcmVhdGVHcm91cChcIjgzMSBCb3R0b21mZWVkZXIgTGFuZSwgQmlraW5pIEJvdHRvbSwgUGFjaWZpYyBPY2VhblwiLGxvY2F0aW9uSW1hZ2UpO1xuICAgIGxldCBtZXNzYWdlPWNyZWF0ZUdyb3VwKFwiTWVzc2FnZSB1c1wiLG1haWxJY29uKTtcblxuICAgIGxldCBjcmVhdGVGb3JtRWxlbWVudD0odHlwZSxpZCxsYWJlbFRleHQpPT57XG4gICAgICAgIGxldCBkaXY9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGxhYmVsPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJpZFwiLGxhYmVsVGV4dCk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLGlkKTtcbiAgICAgICAgbGV0IGlucHV0PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLHR5cGUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGlkKTtcbiAgICAgICAgaWYgKHR5cGU9PT1cInRleHRhcmVhXCIpe2lucHV0PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKX07XG4gICAgICAgIGRpdi5hcHBlbmQobGFiZWwsaW5wdXQpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBsZXQgbmFtZUlucHV0PWNyZWF0ZUZvcm1FbGVtZW50KFwidGV4dFwiLFwibmFtZVwiLFwiRnVsbCBuYW1lXCIpO1xuICAgIGxldCBlbWFpbElucHV0PWNyZWF0ZUZvcm1FbGVtZW50KFwiZW1haWxcIixcImVtYWlsXCIsXCJFLW1haWxcIik7XG4gICAgbGV0IHRleHRBcmVhPWNyZWF0ZUZvcm1FbGVtZW50KFwidGV4dGFyZWFcIixcIm1lc3NhZ2VcIixcIldyaXRlIHlvdXIgbWVzc2FnZVwiKTtcblxuICAgIGxldCBidXR0b249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwiU3VibWl0XCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XG4gICAgbGV0IGZvcm09Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5hcHBlbmQobmFtZUlucHV0LGVtYWlsSW5wdXQsdGV4dEFyZWEsYnV0dG9uKTtcblxuICAgIGxldCBwYWNpZmljT2NlYW49Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwYWNpZmljT2NlYW4uc2V0QXR0cmlidXRlKFwic3JjXCIscGFjaWZpY09jZWFuSW1hZ2UpO1xuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZCh0bGYsbG9jYXRpb24sbWVzc2FnZSxmb3JtLHBhY2lmaWNPY2Vhbik7XG5cbiAgICBsZXQgcmVuZGVyPWZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFNlY3Rpb247IiwiaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1hZ2VzL1BuZ0l0ZW1fMzQzMzM4NC5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTGF5b3V0KCl7XG4gICAgbGV0IGNyZWF0ZUVsZW1lbnQ9KHR5cGUsY29udGVudD1cIlwiKT0+e1xuICAgICAgICBsZXQgZWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50PWNvbnRlbnQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfTtcblxuICAgIGxldCBpbWFnZT1jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLGxvZ28pO1xuXG4gICAgbGV0IGhlYWRlcj1jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGxldCB0YWJzQmFyPWNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsZXQgaG9tZVRhYj1jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IG1lbnVUYWI9Y3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBjb250YWN0VGFiPWNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgcG9saWNpZXNUYWI9Y3JlYXRlRWxlbWVudChcImxpXCIpXG5cbiAgICBob21lVGFiLmFwcGVuZChjcmVhdGVFbGVtZW50KFwiYVwiLFwiSG9tZVwiKSk7XG4gICAgbWVudVRhYi5hcHBlbmQoY3JlYXRlRWxlbWVudChcImFcIixcIk1lbnVcIikpO1xuICAgIGNvbnRhY3RUYWIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoXCJhXCIsXCJDb250YWN0XCIpKTtcbiAgICBwb2xpY2llc1RhYi5hcHBlbmQoY3JlYXRlRWxlbWVudChcImFcIixcIlBvbGljaWVzXCIpKTtcblxuICAgIHRhYnNCYXIuYXBwZW5kKGhvbWVUYWIsbWVudVRhYixjb250YWN0VGFiLHBvbGljaWVzVGFiKTtcblxuICAgIGhlYWRlci5hcHBlbmQoaW1hZ2UpO1xuICAgIGxldCB0YWJzQ29udGFpbmVyPWNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFic0NvbnRhaW5lci5hcHBlbmQodGFic0Jhcik7XG4gICAgdGFic0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFic1wiKVxuXG4gICAgbGV0IG1haW49Y3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHRhYnNDb250YWluZXIsXG4gICAgICAgIG1haW4sXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxheW91dDsiLCJpbXBvcnQgY3JlYXRlTGF5b3V0IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBrcnVzdHlrcmFiIGZyb20gXCIuL2ltYWdlcy9NeV9Ud29fS3JhYnNlc18wMDEuanBnXCI7XG5pbXBvcnQga3JhYmJ5UGF0dHlJbWFnZSBmcm9tIFwiLi9pbWFnZXMva3JhYmJ5X3BhdHR5LmpwZ1wiO1xuaW1wb3J0IG1ya3JhYnNJbWFnZSBmcm9tIFwiLi9pbWFnZXMvbXJrcmFicy5qcGdcIjtcbmltcG9ydCBzcG9uZ2Vib2JJbWFnZSBmcm9tIFwiLi9pbWFnZXMvc3BvbmdlYm9iLmpwZ1wiO1xuaW1wb3J0IHNxdWlkd2FyZEltYWdlIGZyb20gXCIuL2ltYWdlcy9zcXVpZHdhcmQucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCl7XG5cbiAgICBsZXQgaG9tZVNlY3Rpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBsZXQgaGVhZGVyU2VjdGlvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBoZWFkZXI9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImgyXCIsXCJXZWxjb21lIHRvIHRoZSBLcnVzdHkgS3JhYiwgaG9tZSBvZiB0aGUgZmFtb3VzIEtyYWJieSBQYXR0eSFcIik7XG4gICAgbGV0IGxvcmVtPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldC4gTmVxdWUgZ3JhdmlkYSBpbiBmZXJtZW50dW0gZXQuIFVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQgYXJjdSBub24uIE1hdXJpcyBhIGRpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtLiBUaW5jaWR1bnQgdG9ydG9yIGFsaXF1YW0gbnVsbGEgZmFjaWxpc2kgY3JhcyBmZXJtZW50dW0gb2RpbyBldS5cIilcbiAgICBsZXQga3JhYmJ5UGF0dHk9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBrcmFiYnlQYXR0eS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixrcmFiYnlQYXR0eUltYWdlKTtcbiAgICBsZXQgb3JkZXJCdXR0b249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwiT3JkZXIgbm93XCIpO1xuXG4gICAgaGVhZGVyU2VjdGlvbi5hcHBlbmQoaGVhZGVyLGxvcmVtLGtyYWJieVBhdHR5LG9yZGVyQnV0dG9uKTtcblxuICAgIC8vVGVhbSBzZWN0aW9uXG4gICAgbGV0IHRlYW1TZWN0aW9uPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRlYW1UaXRsZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaDNcIixcIlRoZSBLcnVzdHkgS3Jld1wiKTtcbiAgICBsZXQgY3JlYXRlTWVtYmVyPWZ1bmN0aW9uKGltYWdlLG5hbWUscG9zaXRpb24pe1xuICAgICAgICBsZXQgZGl2PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtZW1iZXJQaWN0dXJlPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG1lbWJlclBpY3R1cmUuc2V0QXR0cmlidXRlKFwic3JjXCIsaW1hZ2UpO1xuICAgICAgICBsZXQgbWVtYmVyTmFtZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLG5hbWUpO1xuICAgICAgICBsZXQgbWVtYmVyUG9zaXRpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixwb3NpdGlvbik7XG5cbiAgICAgICAgZGl2LmFwcGVuZChtZW1iZXJQaWN0dXJlLG1lbWJlck5hbWUsbWVtYmVyUG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG4gICAgbGV0IG1yS3JhYnM9Y3JlYXRlTWVtYmVyKG1ya3JhYnNJbWFnZSxcIkV1Z2VuZSBILiBLcmFic1wiLFwiT3duZXJcIik7XG4gICAgbGV0IHNwb25nZWJvYj1jcmVhdGVNZW1iZXIoc3BvbmdlYm9iSW1hZ2UsXCJTcG9uZ2VCb2IgU3F1YXJlUGFudHNcIixcIkZyeSBjb29rXCIpO1xuICAgIGxldCBzcXVpZHdhcmQ9Y3JlYXRlTWVtYmVyKHNxdWlkd2FyZEltYWdlLFwiU3F1aWR3YXJkIFRlbnRhY2xlc1wiLFwiQ2FzaGllciBhbmQgd2FpdGVyXCIpO1xuICAgIHRlYW1TZWN0aW9uLmFwcGVuZCh0ZWFtVGl0bGUsbXJLcmFicyxzcG9uZ2Vib2Isc3F1aWR3YXJkKTtcblxuICAgIC8vTG9jYXRpb24gc2VjdGlvblxuICAgIGxldCBsb2NhdGlvblNlY3Rpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbG9jYXRpb25UaXRsZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaDJcIixcIlZpc2l0IHVzIGF0XCIpO1xuICAgIGxldCBsb2NhdGlvblBhcmE9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixcIjgzMSBCb3R0b21mZWVkZXIgTGFuZSwgQmlraW5pIEJvdHRvbSwgUGFjaWZpYyBPY2VhblwiKTtcblxuICAgIGxldCBpbWFnZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLGtydXN0eWtyYWIpO1xuXG4gICAgbG9jYXRpb25TZWN0aW9uLmFwcGVuZChsb2NhdGlvblRpdGxlLGxvY2F0aW9uUGFyYSxpbWFnZSk7XG5cbiAgICAvL1NjaGVkdWxlIHNlY3Rpb25cbiAgICBsZXQgc2NoZWR1bGVTZWN0aW9uPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHNjaGVkdWxlVGl0bGU9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImgyXCIsXCJTY2hlZHVsZVwiKTtcbiAgICBsZXQgU3VuZGF5PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJTdW5kYXk6IDhhbSAtIDhwbVwiKTtcbiAgICBsZXQgTW9uZGF5PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJNb25kYXk6IDZhbSAtIDZwbVwiKTtcbiAgICBsZXQgVHVlc2RheT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLFwiVHVlc2RheTogNmFtIC0gNnBtXCIpO1xuICAgIGxldCBXZWRuZXNkYXk9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixcIldlZG5lc2RheTogNmFtIC0gNnBtXCIpO1xuICAgIGxldCBUaHVyc2RheT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLFwiVGh1cnNkYXk6IDZhbSAtIDEwcG1cIik7XG4gICAgbGV0IEZyaWRheT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLFwiRnJpZGF5OiA2YW0gLSAxMHBtXCIpO1xuICAgIGxldCBTYXR1cmRheT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIik7XG5cbiAgICBzY2hlZHVsZVNlY3Rpb24uYXBwZW5kKHNjaGVkdWxlVGl0bGUsU3VuZGF5LE1vbmRheSxUdWVzZGF5LFdlZG5lc2RheSxUaHVyc2RheSxGcmlkYXksU2F0dXJkYXkpO1xuXG4gICAgbGV0IGNvbnRhaW5lcj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobG9jYXRpb25TZWN0aW9uLHNjaGVkdWxlU2VjdGlvbilcbiAgICBob21lU2VjdGlvbi5hcHBlbmQoaGVhZGVyU2VjdGlvbix0ZWFtU2VjdGlvbixjb250YWluZXIpO1xuXG5cbiAgICBsZXQgcmVuZGVyPWZ1bmN0aW9uKCl7XG4gICAgICAgIGhvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChob21lU2VjdGlvbik7ICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVTZWN0aW9uOyIsImltcG9ydCBjcmVhdGVMYXlvdXQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IGNvcmFsQml0c0ltYWdlIGZyb20gXCIuL2ltYWdlcy9Db3JhbF9CaXRzLmpwZ1wiO1xuaW1wb3J0IGtlbHBTaGFrZUltYWdlIGZyb20gXCIuL2ltYWdlcy9rZWxwX3NoYWtlLmpwZ1wiO1xuaW1wb3J0IGtyYWJ5U3VwcmVtZUltYWdlIGZyb20gXCIuL2ltYWdlcy9zdXBlcl9rcmFieV9zdXByZW1lLmpwZ1wiO1xuaW1wb3J0IGtyYWJieVBhdHR5SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2tyYWJieV9wYXR0eS5qcGdcIjtcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi9pbWFnZXMvcGl6emEuanBnXCI7XG5pbXBvcnQga2VscEZyaWVzSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2tlbHBfZnJpZXMuanBlZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpe1xuXG4gICAgbGV0IGNyZWF0ZUl0ZW09ZnVuY3Rpb24odGl0bGUsZGVzY3JpcHRpb24scHJpY2UsaW1hZ2Upe1xuICAgICAgICBsZXQgY29udGFpbmVyPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBpdGVtVGl0bGU9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImg0XCIsdGl0bGUpO1xuICAgICAgICBsZXQgaXRlbURlc2NyaXB0aW9uPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsZGVzY3JpcHRpb24pO1xuICAgICAgICBsZXQgaXRlbVByaWNlPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsYFByaWNlOiAkJHtwcmljZX1gKTtcbiAgICAgICAgbGV0IGl0ZW1JbWFnZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsaW1hZ2UpO1xuICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGl0ZW1UaXRsZSxpdGVtRGVzY3JpcHRpb24saXRlbVByaWNlLGl0ZW1JbWFnZSk7ICAgIFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIGxldCBrcmFiYnlQYXR0eT1jcmVhdGVJdGVtKFwiVGhlIEtyYWJieSBQYXR0eVwiLFwiT3VyIHNpZ25hdHVyZSBpdGVtLiBJdCBpcyBhIG1lYXRsZXNzIGhhbWJ1cmdlciBvZiBzb3J0cyBtYWRlIGZyb20gc2Vhd2VlZC1zZWEgYnVucywgdW5kZXJzZWEgdmVnZXRhYmxlcywgY29uZGltZW50cywgYW5kIHRoZSBwYXR0eSBtYWRlIHdpdGggb3VyIHNlY3JldCBmb3JtdWxhLiBJdCBjYW4gYWxzbyBiZSBvcmRlcmVkIHdpdGggY2hlZXNlLlwiLDQsa3JhYmJ5UGF0dHlJbWFnZSk7XG5cbiAgICBsZXQgY29yYWxCaXRzPWNyZWF0ZUl0ZW0oXCJDb3JhbCBCaXRzXCIsXCJTaWRlIGRpc2ggdGhhdCBjb25zaXN0IG9mIHNtYWxsIGJpdHMgb2YgcGFsZSBwaW5rIGNvcmFscyBzZXJ2ZWQgaW4gYSByZWQgYW5kIHllbGxvdyBwYXBlciBmb29kIHRyYXkuIFRoZXJlIGlzIGFsc28gYSBjaGlsaSB2YXJpYXRpb24gb2YgdGhlIHByb2R1Y3QuXCIsMS4wNSxjb3JhbEJpdHNJbWFnZSk7XG5cbiAgICBsZXQga2VscFNoYWtlPWNyZWF0ZUl0ZW0oXCJLZWxwIFNoYWtlXCIsXCJBbiBhZGRpY3RpdmUgc29mdCBkcmluayBtYWRlIDk5JSBvZiBrZWxwIGp1aWNlLCB0aGUgcmVtYWluaW5nIHBlcmNlbnRpbGUgaXMgYW4gdW5rbm93biBtYXRlcmlhbC4gSXQgbWlnaHQgcHJvZHVjZSBzaWRlIGVmZmVjdHMuXCIsMixrZWxwU2hha2VJbWFnZSk7XG5cbiAgICBsZXQgdWx0cmFLcmFieVN1cHJlbWU9Y3JlYXRlSXRlbShcIlVsdHJhIEtyYWJieSBTdXByZW1lXCIsXCJMYXJnZXIgdmFyaWF0aW9uIG9mIHRoZSBLcmFiYnkgUGF0dHkuIFRoZSBvdXRzaWRlIGlzIGEgeWVsbG93LWlzaCBjb2xvciBsaWtlIGJhdHRlci4gSXQgY2FuIGFsc28gYmUgYmF0dGVyLWZyaWVkIHR3aWNlLCBvciBiZSBvbiBhIHN0aWNrLCBvbmx5IGlmIHRoZSBjdXN0b21lciByZXF1ZXN0cyBpdC5cIiw2LGtyYWJ5U3VwcmVtZUltYWdlKTtcblxuICAgIGxldCBrcnVzdHlLcmFiUGl6emE9Y3JlYXRlSXRlbShcIktydXN0eSBLcmFiIFBpenphXCIsXCJBIHRyYXkgb2YgS3JhYmJ5IFBhdHRpZXMgZnVzZWQgdG9nZXRoZXIsIGFuZCBmbGF0dGVuZWQgaW4gdGhlIGZvcm0gb2YgYSBwaXp6YS4gSXQgaGFzIGVpZ2h0IHNsaWNlcy5cIiw0LjUwLHBpenphKTtcbiAgICBsZXQga2VscEZyaWVzPWNyZWF0ZUl0ZW0oXCJLZWxwIEZyaWVzXCIsXCJGcmllcyB0aGF0IHJlc2VtYmxlIHNlYXdlZWQgd2l0aCB0aGUgd2F5IHRoZXkgYXJlIHNoYXBlZC5cIiwxLGtlbHBGcmllc0ltYWdlKTtcblxuICAgIGxldCBtZW51U2VjdGlvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmQoa3JhYmJ5UGF0dHksY29yYWxCaXRzLGtlbHBTaGFrZSx1bHRyYUtyYWJ5U3VwcmVtZSxrcnVzdHlLcmFiUGl6emEsa2VscEZyaWVzKTtcblxuICAgIGxldCByZW5kZXI9ZnVuY3Rpb24oKXtcbiAgICAgICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVTZWN0aW9uOyIsImltcG9ydCBjcmVhdGVMYXlvdXQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQb2xpY2llc1NlY3Rpb24oKXtcbiAgICBsZXQgc2VjdGlvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBsZXQgcG9saWNpZXNUaXRsZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaDJcIixcIlBvbGljaWVzXCIpO1xuICAgIGxldCB1bD1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGV0IHJ1bGVzPVtcbiAgICAgICAgY3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImxpXCIsXCJOb2JvZHkgZWF0cyBpbiB0aGUgS3J1c3R5IEtyYWIgZm9yIGZyZWUgKHJveWFsdHkgb3Igbm90KS5cIiksXG4gICAgICAgIGNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLFwiT25jZSB0aGUgcGF0dHkgaGFzIHJlYWNoZWQgdGhlIGN1c3RvbWVyLCBpdCBpcyBoaXMgLyBoZXIgcmVzcG9uc2liaWxpdHkuXCIpLFxuICAgICAgICBjcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwibGlcIixcIk5vIGZyZWUgbmFwa2lucy5cIiksXG4gICAgICAgIGNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLFwiTm8gZnJlZSByZWZpbGxzLlwiKSxcbiAgICAgICAgY3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImxpXCIsXCJBIHN0YW5kaW5nIGZlZSB3aWxsIGJlIGdpdmVuIGlmIGEgY3VzdG9tZXIgZG9lcyBub3Qgb3JkZXIgYW55dGhpbmcuXCIpLFxuICAgICAgICBjcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwibGlcIixcIk5vIHJlZnVuZHMuXCIpLFxuICAgICAgICBjcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwibGlcIixcIkFueSBtb25leSBicm91Z2h0IGludG8gdGhlIEtydXN0eSBLcmFiIG11c3QgYmUgc3BlbnQgaW4gdGhlIEtydXN0eSBLcmFiLlwiKSxcbiAgICAgICAgY3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImxpXCIsXCJUaGVyZSBpcyBhIDUgZG9sbGFyIGNvbXBsYWludCBmZWVcIiksXG4gICAgICAgIGNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLFwiVGhlIEtyYWJieSBQYXR0eSBzZWNyZXQgZm9ybXVsYSBpcyB0aGUgc29sZSBwcm9wZXJ0eSBvZiB0aGUgS3J1c3R5IEtyYWIgYW5kIGlzIG9ubHkgdG8gYmUgZGlzY3Vzc2VkIGluIHBhcnQgb3IgaW4gd2hvbGUgd2l0aCBpdHMgY3JlYXRvciBNci4gS3JhYnMuIER1cGxpY2F0aW9uIG9mIHRoaXMgZm9ybXVsYSBpcyBwdW5pc2hhYmxlIGJ5IGxhdy4gUmVzdHJpY3Rpb25zIGFwcGx5LCByZXN1bHRzIG1heSB2YXJ5LlwiKVxuICAgIF07XG4gICAgcnVsZXMuZm9yRWFjaChydWxlPT57XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHJ1bGUpO1xuICAgIH0pO1xuICAgIHNlY3Rpb24uYXBwZW5kKHBvbGljaWVzVGl0bGUsdWwpO1xuICAgIGxldCByZW5kZXI9ZnVuY3Rpb24oKXtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicG9saWNpZXNcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9saWNpZXNTZWN0aW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlTGF5b3V0IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlSG9tZVNlY3Rpb24gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZVBvbGljaWVzU2VjdGlvbiBmcm9tIFwiLi9wb2xpY2llc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnVTZWN0aW9uIGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmxldCBjb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kKGNyZWF0ZUxheW91dCgpLmhlYWRlcixjcmVhdGVMYXlvdXQoKS50YWJzQ29udGFpbmVyLGNyZWF0ZUxheW91dCgpLm1haW4pO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplUGFnZSgpe1xuICAgIGNyZWF0ZUhvbWVTZWN0aW9uKCkucmVuZGVyKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgY3JlYXRlTWVudVNlY3Rpb24oKS5yZW5kZXIoKTtcbiAgICB9KTtcbn07XG5pbml0aWFsaXplUGFnZSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVtb3ZlQ29udGVudCgpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjcmVhdGVNZW51U2VjdGlvbigpLnJlbmRlcigpO1xufSlcblxuZnVuY3Rpb24gcmVtb3ZlQ29udGVudCgpe1xuICAgIGxldCBjb250ZW50VG9SZW1vdmU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG4gICAgY29udGVudFRvUmVtb3ZlLmZvckVhY2goc2VjdGlvbj0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5yZW1vdmVDaGlsZChzZWN0aW9uKTtcbiAgICB9KTtcbiAgICBsZXQgdGFicz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2PnVsPmxpXCIpO1xuICAgIHRhYnMuZm9yRWFjaCh0YWI9PntcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSlcbn07XG5cbmxldCBob21lVGFiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXY+dWw+bGk6Zmlyc3Qtb2YtdHlwZVwiKTtcbmhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGluaXRpYWxpemVQYWdlKCk7XG59KVxuXG5sZXQgbWVudVRhYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2PnVsPmxpOm50aC1vZi10eXBlKDIpXCIpO1xubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgY3JlYXRlTWVudVNlY3Rpb24oKS5yZW5kZXIoKTtcbn0pO1xuXG5sZXQgcG9saWNpZXNUYWI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdj51bD5saTpsYXN0LW9mLXR5cGVcIik7XG5wb2xpY2llc1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICBwb2xpY2llc1RhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGNyZWF0ZVBvbGljaWVzU2VjdGlvbigpLnJlbmRlcigpO1xufSk7XG5cbmxldCBjb250YWN0VGFiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXY+dWw+bGk6bnRoLW9mLXR5cGUoMylcIik7XG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVtb3ZlQ29udGVudCgpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjcmVhdGVDb250YWN0U2VjdGlvbigpLnJlbmRlcigpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=