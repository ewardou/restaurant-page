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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu', sans-serif;\n}\n#content{\n    min-height:100vh;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n}\nimg{\n    height: 60px;\n}\n.tabs{\n    position: sticky;\n    top: 0px;\n}\ndiv>ul{\n    list-style: none;\n    display: flex;\n    padding: 5px;\n    gap:40px;\n    font-size: 1.2rem;\n    color:white;\n    background-color: rgb(6, 6, 204);\n    justify-content: center;\n    font-weight: bold;\n}\nheader{\n    background-color: rgb(6, 6, 204);\n    padding: 5px;\n    display:grid;\n    grid-auto-rows: min-content;\n    justify-items: center;\n    gap:5px;\n}\nmain{\n    /* background-color: rgb(252, 232, 232); */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 330px;\n    padding: 40px 0px;\n}\nsection{\n    border:2px solid black;\n    width: fit-content;\n    padding: 15px;\n    margin: 10px auto;\n    background-color: rgba(255,255,255,0.9);\n} \nsection>img{\n    height: 180px;\n    width: auto;\n}\ndiv>ul>li{\n    cursor: pointer;\n    border-bottom: 2px solid rgba(255, 255, 255, 0);\n}\ndiv>ul>li:hover{\n    color: rgb(143, 144, 229);\n    position:relative;\n    bottom: 3px;\n}\ndiv>ul>li:active{\n    color: rgb(68, 88, 204);\n}\ndiv>ul>li.active{\n    border-bottom: 2px solid white;\n    transition: 100ms ease-in-out;\n    position: relative;\n    bottom: 3px;\n}\n.policies h2{\n    margin-bottom: 10px;\n}\n.policies li{\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    list-style-position: inside;\n    font-size: 1.2rem;\n}\n.policies{\n    width:50%;\n}\n.policies li+li{\n    margin-top:10px;\n}\n.menu{\n    border:none;\n    width:min(80%);\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    gap:20px;\n    background-color: rgba(255,255,255,0);\n    padding:0;\n}\n.menu>div{\n    background-color: rgba(255,255,255,0.9);\n    padding: 10px;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    column-gap: 10px;\n    border:solid black 2px;\n}\n.menu>div:hover{\n    transform: scale(1.05);\n    transition: 150ms ease-in-out;\n}\n.menu img{\n    grid-column: 2 / 3;\n    grid-row: 1 / 4;\n    height: 150px;\n    width: auto;\n}\n.contact>div{\n    display: flex;\n    align-items: center;\n    gap:5px;\n}\n.contact>div>img{\n    height: 40px;\n}\n.contact>img{\n    height: 360px;\n}\nform>div{\n    display: grid;\n    grid-template-columns: 80px 65%;\n    margin-top: 10px;\n}\ntextarea{\n    height: 80px;\n    resize: none;\n}\ninput,\ntextarea{\n    padding: 3px;\n    font-size: 1rem;\n}\nform button{\n    padding: 5px 10px;\n    background-color: blue;\n    color:white;\n    font-weight: bold;\n    border: solid white 2px;\n}\nform button:hover{\n    background-color: rgb(27, 148, 189);\n}\nform button:active{\n    background-color: rgb(3, 3, 184);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,QAAQ;IACR,sBAAsB;IACtB,iCAAiC;AACrC;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,+CAA+C;AACnD;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,QAAQ;AACZ;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,iBAAiB;IACjB,WAAW;IACX,gCAAgC;IAChC,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,gCAAgC;IAChC,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,qBAAqB;IACrB,OAAO;AACX;AACA;IACI,0CAA0C;IAC1C,yDAAmG;IACnG,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,uCAAuC;AAC3C;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;IACf,+CAA+C;AACnD;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,mBAAmB;AACvB;AACA;IACI,yDAA0D;IAC1D,2BAA2B;IAC3B,iBAAiB;AACrB;AACA;IACI,SAAS;AACb;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yDAAyD;IACzD,QAAQ;IACR,qCAAqC;IACrC,SAAS;AACb;AACA;IACI,uCAAuC;IACvC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,OAAO;AACX;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;;IAEI,YAAY;IACZ,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,mCAAmC;AACvC;AACA;IACI,gCAAgC;AACpC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n\n*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu', sans-serif;\n}\n#content{\n    min-height:100vh;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n}\nimg{\n    height: 60px;\n}\n.tabs{\n    position: sticky;\n    top: 0px;\n}\ndiv>ul{\n    list-style: none;\n    display: flex;\n    padding: 5px;\n    gap:40px;\n    font-size: 1.2rem;\n    color:white;\n    background-color: rgb(6, 6, 204);\n    justify-content: center;\n    font-weight: bold;\n}\nheader{\n    background-color: rgb(6, 6, 204);\n    padding: 5px;\n    display:grid;\n    grid-auto-rows: min-content;\n    justify-items: center;\n    gap:5px;\n}\nmain{\n    /* background-color: rgb(252, 232, 232); */\n    background-image: url(./images/img_freepik_com-bubbles-seamless-pattern-blue_1284-43368\\ \\(1\\).jpg);\n    background-size: 330px;\n    padding: 40px 0px;\n}\nsection{\n    border:2px solid black;\n    width: fit-content;\n    padding: 15px;\n    margin: 10px auto;\n    background-color: rgba(255,255,255,0.9);\n} \nsection>img{\n    height: 180px;\n    width: auto;\n}\ndiv>ul>li{\n    cursor: pointer;\n    border-bottom: 2px solid rgba(255, 255, 255, 0);\n}\ndiv>ul>li:hover{\n    color: rgb(143, 144, 229);\n    position:relative;\n    bottom: 3px;\n}\ndiv>ul>li:active{\n    color: rgb(68, 88, 204);\n}\ndiv>ul>li.active{\n    border-bottom: 2px solid white;\n    transition: 100ms ease-in-out;\n    position: relative;\n    bottom: 3px;\n}\n.policies h2{\n    margin-bottom: 10px;\n}\n.policies li{\n    list-style-image: url(\"./images/burger-svgrepo-com-2.svg\");\n    list-style-position: inside;\n    font-size: 1.2rem;\n}\n.policies{\n    width:50%;\n}\n.policies li+li{\n    margin-top:10px;\n}\n.menu{\n    border:none;\n    width:min(80%);\n    display: grid;\n    grid-auto-rows: 1fr;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    gap:20px;\n    background-color: rgba(255,255,255,0);\n    padding:0;\n}\n.menu>div{\n    background-color: rgba(255,255,255,0.9);\n    padding: 10px;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    column-gap: 10px;\n    border:solid black 2px;\n}\n.menu>div:hover{\n    transform: scale(1.05);\n    transition: 150ms ease-in-out;\n}\n.menu img{\n    grid-column: 2 / 3;\n    grid-row: 1 / 4;\n    height: 150px;\n    width: auto;\n}\n.contact>div{\n    display: flex;\n    align-items: center;\n    gap:5px;\n}\n.contact>div>img{\n    height: 40px;\n}\n.contact>img{\n    height: 360px;\n}\nform>div{\n    display: grid;\n    grid-template-columns: 80px 65%;\n    margin-top: 10px;\n}\ntextarea{\n    height: 80px;\n    resize: none;\n}\ninput,\ntextarea{\n    padding: 3px;\n    font-size: 1rem;\n}\nform button{\n    padding: 5px 10px;\n    background-color: blue;\n    color:white;\n    font-weight: bold;\n    border: solid white 2px;\n}\nform button:hover{\n    background-color: rgb(27, 148, 189);\n}\nform button:active{\n    background-color: rgb(3, 3, 184);\n}"],"sourceRoot":""}]);
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




function createHomeSection(){

    let homeSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("section");

    let headerSection=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("div");
    let header=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("h2","Welcome to the Krusty Krab, home of the famous Krabby Patty!");
    let lorem=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("p","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet. Neque gravida in fermentum et. Ullamcorper a lacus vestibulum sed arcu non. Mauris a diam maecenas sed enim ut sem. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.")
    let krabbyPatty=(0,_element__WEBPACK_IMPORTED_MODULE_0__["default"])().createElement("img");
    krabbyPatty.setAttribute("src",_images_krabby_patty_jpg__WEBPACK_IMPORTED_MODULE_2__);

    headerSection.append(header,lorem,krabbyPatty);
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

    homeSection.append(headerSection,locationSection,scheduleSection);

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

(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])().render();

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
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])().render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsb0RBQVk7O0FBRTlFLGlEQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFpQjtBQUNyQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBaUI7QUFDckIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQXFCO0FBQ3pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFvQjtBQUN4QixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcG9saWNpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2ltZ19mcmVlcGlrX2NvbS1idWJibGVzLXNlYW1sZXNzLXBhdHRlcm4tYmx1ZV8xMjg0LTQzMzY4ICgxKS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9idXJnZXItc3ZncmVwby1jb20tMi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5pbWd7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuLnRhYnN7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbn1cXG5kaXY+dWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOjQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDIwNCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMjA0KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6NXB4O1xcbn1cXG5tYWlue1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzIsIDIzMik7ICovXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzMwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcbn1cXG5zZWN0aW9ue1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxufSBcXG5zZWN0aW9uPmltZ3tcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbmRpdj51bD5saXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuZGl2PnVsPmxpOmhvdmVye1xcbiAgICBjb2xvcjogcmdiKDE0MywgMTQ0LCAyMjkpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzcHg7XFxufVxcbmRpdj51bD5saTphY3RpdmV7XFxuICAgIGNvbG9yOiByZ2IoNjgsIDg4LCAyMDQpO1xcbn1cXG5kaXY+dWw+bGkuYWN0aXZle1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogM3B4O1xcbn1cXG4ucG9saWNpZXMgaDJ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5wb2xpY2llcyBsaXtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLnBvbGljaWVze1xcbiAgICB3aWR0aDo1MCU7XFxufVxcbi5wb2xpY2llcyBsaStsaXtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG4ubWVudXtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIHdpZHRoOm1pbig4MCUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoNDAwcHgsMWZyKSk7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcbi5tZW51PmRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYm9yZGVyOnNvbGlkIGJsYWNrIDJweDtcXG59XFxuLm1lbnU+ZGl2OmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLm1lbnUgaW1ne1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5jb250YWN0PmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjVweDtcXG59XFxuLmNvbnRhY3Q+ZGl2PmltZ3tcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29udGFjdD5pbWd7XFxuICAgIGhlaWdodDogMzYwcHg7XFxufVxcbmZvcm0+ZGl2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggNjUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbmlucHV0LFxcbnRleHRhcmVhe1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuZm9ybSBidXR0b257XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcbn1cXG5mb3JtIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxNDgsIDE4OSk7XFxufVxcbmZvcm0gYnV0dG9uOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDE4NCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixPQUFPO0FBQ1g7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyx5REFBbUc7SUFDbkcsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLCtDQUErQztBQUNuRDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlEQUEwRDtJQUMxRCwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5REFBeUQ7SUFDekQsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyxTQUFTO0FBQ2I7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87QUFDWDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcbiNjb250ZW50e1xcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IDFmcjtcXG59XFxuaW1ne1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcbi50YWJze1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG59XFxuZGl2PnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDo0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAyMDQpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDIwNCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjVweDtcXG59XFxubWFpbntcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjMyLCAyMzIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvaW1nX2ZyZWVwaWtfY29tLWJ1YmJsZXMtc2VhbWxlc3MtcGF0dGVybi1ibHVlXzEyODQtNDMzNjhcXFxcIFxcXFwoMVxcXFwpLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzMwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcbn1cXG5zZWN0aW9ue1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxufSBcXG5zZWN0aW9uPmltZ3tcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbmRpdj51bD5saXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuZGl2PnVsPmxpOmhvdmVye1xcbiAgICBjb2xvcjogcmdiKDE0MywgMTQ0LCAyMjkpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzcHg7XFxufVxcbmRpdj51bD5saTphY3RpdmV7XFxuICAgIGNvbG9yOiByZ2IoNjgsIDg4LCAyMDQpO1xcbn1cXG5kaXY+dWw+bGkuYWN0aXZle1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogM3B4O1xcbn1cXG4ucG9saWNpZXMgaDJ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5wb2xpY2llcyBsaXtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9idXJnZXItc3ZncmVwby1jb20tMi5zdmdcXFwiKTtcXG4gICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLnBvbGljaWVze1xcbiAgICB3aWR0aDo1MCU7XFxufVxcbi5wb2xpY2llcyBsaStsaXtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG4ubWVudXtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIHdpZHRoOm1pbig4MCUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoNDAwcHgsMWZyKSk7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcbi5tZW51PmRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYm9yZGVyOnNvbGlkIGJsYWNrIDJweDtcXG59XFxuLm1lbnU+ZGl2OmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLm1lbnUgaW1ne1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5jb250YWN0PmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjVweDtcXG59XFxuLmNvbnRhY3Q+ZGl2PmltZ3tcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29udGFjdD5pbWd7XFxuICAgIGhlaWdodDogMzYwcHg7XFxufVxcbmZvcm0+ZGl2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggNjUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbmlucHV0LFxcbnRleHRhcmVhe1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuZm9ybSBidXR0b257XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcbn1cXG5mb3JtIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxNDgsIDE4OSk7XFxufVxcbmZvcm0gYnV0dG9uOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDE4NCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlTGF5b3V0IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBwaG9uZUltYWdlIGZyb20gXCIuL2ltYWdlcy9waG9uZV9pY29uLnN2Z1wiO1xuaW1wb3J0IHBhY2lmaWNPY2VhbkltYWdlIGZyb20gXCIuL2ltYWdlcy9wYWNpZmljX29jZWFuLnBuZ1wiO1xuaW1wb3J0IGxvY2F0aW9uSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2xvY2F0aW9uX2ljb24uc3ZnXCI7XG5pbXBvcnQgbWFpbEljb24gZnJvbSBcIi4vaW1hZ2VzL21haWxfaWNvbi5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKXtcbiAgICBsZXQgY29udGFjdFNlY3Rpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBsZXQgY3JlYXRlR3JvdXA9KHRleHRDb250ZW50LGltYWdlKT0+e1xuICAgICAgICBsZXQgZGl2PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCB0ZXh0PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsdGV4dENvbnRlbnQpO1xuICAgICAgICBsZXQgaWNvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLGltYWdlKTtcbiAgICAgICAgZGl2LmFwcGVuZChpY29uLHRleHQpO1xuICAgICAgICByZXR1cm4gZGl2OyAgICBcbiAgICB9XG4gICAgbGV0IHRsZj1jcmVhdGVHcm91cChcIig1NTUpLTU1NS01NTU1XCIscGhvbmVJbWFnZSk7XG4gICAgbGV0IGxvY2F0aW9uPWNyZWF0ZUdyb3VwKFwiODMxIEJvdHRvbWZlZWRlciBMYW5lLCBCaWtpbmkgQm90dG9tLCBQYWNpZmljIE9jZWFuXCIsbG9jYXRpb25JbWFnZSk7XG4gICAgbGV0IG1lc3NhZ2U9Y3JlYXRlR3JvdXAoXCJNZXNzYWdlIHVzXCIsbWFpbEljb24pO1xuXG4gICAgbGV0IGNyZWF0ZUZvcm1FbGVtZW50PSh0eXBlLGlkLGxhYmVsVGV4dCk9PntcbiAgICAgICAgbGV0IGRpdj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgbGFiZWw9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImlkXCIsbGFiZWxUZXh0KTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsaWQpO1xuICAgICAgICBsZXQgaW5wdXQ9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdHlwZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsaWQpO1xuICAgICAgICBpZiAodHlwZT09PVwidGV4dGFyZWFcIil7aW5wdXQ9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpfTtcbiAgICAgICAgZGl2LmFwcGVuZChsYWJlbCxpbnB1dCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcblxuICAgIGxldCBuYW1lSW5wdXQ9Y3JlYXRlRm9ybUVsZW1lbnQoXCJ0ZXh0XCIsXCJuYW1lXCIsXCJGdWxsIG5hbWVcIik7XG4gICAgbGV0IGVtYWlsSW5wdXQ9Y3JlYXRlRm9ybUVsZW1lbnQoXCJlbWFpbFwiLFwiZW1haWxcIixcIkUtbWFpbFwiKTtcbiAgICBsZXQgdGV4dEFyZWE9Y3JlYXRlRm9ybUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLFwibWVzc2FnZVwiLFwiV3JpdGUgeW91ciBtZXNzYWdlXCIpO1xuXG4gICAgbGV0IGJ1dHRvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJTdWJtaXRcIik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcbiAgICBsZXQgZm9ybT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmFwcGVuZChuYW1lSW5wdXQsZW1haWxJbnB1dCx0ZXh0QXJlYSxidXR0b24pO1xuXG4gICAgbGV0IHBhY2lmaWNPY2Vhbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBhY2lmaWNPY2Vhbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixwYWNpZmljT2NlYW5JbWFnZSk7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kKHRsZixsb2NhdGlvbixtZXNzYWdlLGZvcm0scGFjaWZpY09jZWFuKTtcblxuICAgIGxldCByZW5kZXI9ZnVuY3Rpb24oKXtcbiAgICAgICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0U2VjdGlvbjsiLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWFnZXMvUG5nSXRlbV8zNDMzMzg0LnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVMYXlvdXQoKXtcbiAgICBsZXQgY3JlYXRlRWxlbWVudD0odHlwZSxjb250ZW50PVwiXCIpPT57XG4gICAgICAgIGxldCBlbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQ9Y29udGVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9O1xuXG4gICAgbGV0IGltYWdlPWNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsbG9nbyk7XG5cbiAgICBsZXQgaGVhZGVyPWNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgbGV0IHRhYnNCYXI9Y3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBob21lVGFiPWNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgbWVudVRhYj1jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IGNvbnRhY3RUYWI9Y3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBwb2xpY2llc1RhYj1jcmVhdGVFbGVtZW50KFwibGlcIilcblxuICAgIGhvbWVUYWIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoXCJhXCIsXCJIb21lXCIpKTtcbiAgICBtZW51VGFiLmFwcGVuZChjcmVhdGVFbGVtZW50KFwiYVwiLFwiTWVudVwiKSk7XG4gICAgY29udGFjdFRhYi5hcHBlbmQoY3JlYXRlRWxlbWVudChcImFcIixcIkNvbnRhY3RcIikpO1xuICAgIHBvbGljaWVzVGFiLmFwcGVuZChjcmVhdGVFbGVtZW50KFwiYVwiLFwiUG9saWNpZXNcIikpO1xuXG4gICAgdGFic0Jhci5hcHBlbmQoaG9tZVRhYixtZW51VGFiLGNvbnRhY3RUYWIscG9saWNpZXNUYWIpO1xuXG4gICAgaGVhZGVyLmFwcGVuZChpbWFnZSk7XG4gICAgbGV0IHRhYnNDb250YWluZXI9Y3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJzQ29udGFpbmVyLmFwcGVuZCh0YWJzQmFyKTtcbiAgICB0YWJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpXG5cbiAgICBsZXQgbWFpbj1jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgdGFic0NvbnRhaW5lcixcbiAgICAgICAgbWFpbixcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGF5b3V0OyIsImltcG9ydCBjcmVhdGVMYXlvdXQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IGtydXN0eWtyYWIgZnJvbSBcIi4vaW1hZ2VzL015X1R3b19LcmFic2VzXzAwMS5qcGdcIjtcbmltcG9ydCBrcmFiYnlQYXR0eUltYWdlIGZyb20gXCIuL2ltYWdlcy9rcmFiYnlfcGF0dHkuanBnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCl7XG5cbiAgICBsZXQgaG9tZVNlY3Rpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBsZXQgaGVhZGVyU2VjdGlvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBoZWFkZXI9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImgyXCIsXCJXZWxjb21lIHRvIHRoZSBLcnVzdHkgS3JhYiwgaG9tZSBvZiB0aGUgZmFtb3VzIEtyYWJieSBQYXR0eSFcIik7XG4gICAgbGV0IGxvcmVtPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldC4gTmVxdWUgZ3JhdmlkYSBpbiBmZXJtZW50dW0gZXQuIFVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQgYXJjdSBub24uIE1hdXJpcyBhIGRpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtLiBUaW5jaWR1bnQgdG9ydG9yIGFsaXF1YW0gbnVsbGEgZmFjaWxpc2kgY3JhcyBmZXJtZW50dW0gb2RpbyBldS5cIilcbiAgICBsZXQga3JhYmJ5UGF0dHk9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBrcmFiYnlQYXR0eS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixrcmFiYnlQYXR0eUltYWdlKTtcblxuICAgIGhlYWRlclNlY3Rpb24uYXBwZW5kKGhlYWRlcixsb3JlbSxrcmFiYnlQYXR0eSk7XG4gICAgLy9Mb2NhdGlvbiBzZWN0aW9uXG4gICAgbGV0IGxvY2F0aW9uU2VjdGlvbj1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBsb2NhdGlvblRpdGxlPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLFwiVmlzaXQgdXMgYXRcIik7XG4gICAgbGV0IGxvY2F0aW9uUGFyYT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLFwiODMxIEJvdHRvbWZlZWRlciBMYW5lLCBCaWtpbmkgQm90dG9tLCBQYWNpZmljIE9jZWFuXCIpO1xuXG4gICAgbGV0IGltYWdlPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsa3J1c3R5a3JhYik7XG5cbiAgICBsb2NhdGlvblNlY3Rpb24uYXBwZW5kKGxvY2F0aW9uVGl0bGUsbG9jYXRpb25QYXJhLGltYWdlKTtcblxuICAgIC8vU2NoZWR1bGUgc2VjdGlvblxuICAgIGxldCBzY2hlZHVsZVNlY3Rpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgc2NoZWR1bGVUaXRsZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaDJcIixcIlNjaGVkdWxlXCIpO1xuICAgIGxldCBTdW5kYXk9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixcIlN1bmRheTogOGFtIC0gOHBtXCIpO1xuICAgIGxldCBNb25kYXk9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixcIk1vbmRheTogNmFtIC0gNnBtXCIpO1xuICAgIGxldCBUdWVzZGF5PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJUdWVzZGF5OiA2YW0gLSA2cG1cIik7XG4gICAgbGV0IFdlZG5lc2RheT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwicFwiLFwiV2VkbmVzZGF5OiA2YW0gLSA2cG1cIik7XG4gICAgbGV0IFRodXJzZGF5PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJUaHVyc2RheTogNmFtIC0gMTBwbVwiKTtcbiAgICBsZXQgRnJpZGF5PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJGcmlkYXk6IDZhbSAtIDEwcG1cIik7XG4gICAgbGV0IFNhdHVyZGF5PWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiKTtcblxuICAgIHNjaGVkdWxlU2VjdGlvbi5hcHBlbmQoc2NoZWR1bGVUaXRsZSxTdW5kYXksTW9uZGF5LFR1ZXNkYXksV2VkbmVzZGF5LFRodXJzZGF5LEZyaWRheSxTYXR1cmRheSk7XG5cbiAgICBob21lU2VjdGlvbi5hcHBlbmQoaGVhZGVyU2VjdGlvbixsb2NhdGlvblNlY3Rpb24sc2NoZWR1bGVTZWN0aW9uKTtcblxuICAgIGxldCByZW5kZXI9ZnVuY3Rpb24oKXtcbiAgICAgICAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTsgICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVNlY3Rpb247IiwiaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgY29yYWxCaXRzSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0NvcmFsX0JpdHMuanBnXCI7XG5pbXBvcnQga2VscFNoYWtlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2tlbHBfc2hha2UuanBnXCI7XG5pbXBvcnQga3JhYnlTdXByZW1lSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3N1cGVyX2tyYWJ5X3N1cHJlbWUuanBnXCI7XG5pbXBvcnQga3JhYmJ5UGF0dHlJbWFnZSBmcm9tIFwiLi9pbWFnZXMva3JhYmJ5X3BhdHR5LmpwZ1wiO1xuaW1wb3J0IHBpenphIGZyb20gXCIuL2ltYWdlcy9waXp6YS5qcGdcIjtcbmltcG9ydCBrZWxwRnJpZXNJbWFnZSBmcm9tIFwiLi9pbWFnZXMva2VscF9mcmllcy5qcGVnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uKCl7XG5cbiAgICBsZXQgY3JlYXRlSXRlbT1mdW5jdGlvbih0aXRsZSxkZXNjcmlwdGlvbixwcmljZSxpbWFnZSl7XG4gICAgICAgIGxldCBjb250YWluZXI9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGl0ZW1UaXRsZT1jcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwiaDRcIix0aXRsZSk7XG4gICAgICAgIGxldCBpdGVtRGVzY3JpcHRpb249Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixkZXNjcmlwdGlvbik7XG4gICAgICAgIGxldCBpdGVtUHJpY2U9Y3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcInBcIixgUHJpY2U6ICQke3ByaWNlfWApO1xuICAgICAgICBsZXQgaXRlbUltYWdlPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGl0ZW1JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixpbWFnZSk7XG4gICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbVRpdGxlLGl0ZW1EZXNjcmlwdGlvbixpdGVtUHJpY2UsaXRlbUltYWdlKTsgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgbGV0IGtyYWJieVBhdHR5PWNyZWF0ZUl0ZW0oXCJUaGUgS3JhYmJ5IFBhdHR5XCIsXCJPdXIgc2lnbmF0dXJlIGl0ZW0uIEl0IGlzIGEgbWVhdGxlc3MgaGFtYnVyZ2VyIG9mIHNvcnRzIG1hZGUgZnJvbSBzZWF3ZWVkLXNlYSBidW5zLCB1bmRlcnNlYSB2ZWdldGFibGVzLCBjb25kaW1lbnRzLCBhbmQgdGhlIHBhdHR5IG1hZGUgd2l0aCBvdXIgc2VjcmV0IGZvcm11bGEuIEl0IGNhbiBhbHNvIGJlIG9yZGVyZWQgd2l0aCBjaGVlc2UuXCIsNCxrcmFiYnlQYXR0eUltYWdlKTtcblxuICAgIGxldCBjb3JhbEJpdHM9Y3JlYXRlSXRlbShcIkNvcmFsIEJpdHNcIixcIlNpZGUgZGlzaCB0aGF0IGNvbnNpc3Qgb2Ygc21hbGwgYml0cyBvZiBwYWxlIHBpbmsgY29yYWxzIHNlcnZlZCBpbiBhIHJlZCBhbmQgeWVsbG93IHBhcGVyIGZvb2QgdHJheS4gVGhlcmUgaXMgYWxzbyBhIGNoaWxpIHZhcmlhdGlvbiBvZiB0aGUgcHJvZHVjdC5cIiwxLjA1LGNvcmFsQml0c0ltYWdlKTtcblxuICAgIGxldCBrZWxwU2hha2U9Y3JlYXRlSXRlbShcIktlbHAgU2hha2VcIixcIkFuIGFkZGljdGl2ZSBzb2Z0IGRyaW5rIG1hZGUgOTklIG9mIGtlbHAganVpY2UsIHRoZSByZW1haW5pbmcgcGVyY2VudGlsZSBpcyBhbiB1bmtub3duIG1hdGVyaWFsLiBJdCBtaWdodCBwcm9kdWNlIHNpZGUgZWZmZWN0cy5cIiwyLGtlbHBTaGFrZUltYWdlKTtcblxuICAgIGxldCB1bHRyYUtyYWJ5U3VwcmVtZT1jcmVhdGVJdGVtKFwiVWx0cmEgS3JhYmJ5IFN1cHJlbWVcIixcIkxhcmdlciB2YXJpYXRpb24gb2YgdGhlIEtyYWJieSBQYXR0eS4gVGhlIG91dHNpZGUgaXMgYSB5ZWxsb3ctaXNoIGNvbG9yIGxpa2UgYmF0dGVyLiBJdCBjYW4gYWxzbyBiZSBiYXR0ZXItZnJpZWQgdHdpY2UsIG9yIGJlIG9uIGEgc3RpY2ssIG9ubHkgaWYgdGhlIGN1c3RvbWVyIHJlcXVlc3RzIGl0LlwiLDYsa3JhYnlTdXByZW1lSW1hZ2UpO1xuXG4gICAgbGV0IGtydXN0eUtyYWJQaXp6YT1jcmVhdGVJdGVtKFwiS3J1c3R5IEtyYWIgUGl6emFcIixcIkEgdHJheSBvZiBLcmFiYnkgUGF0dGllcyBmdXNlZCB0b2dldGhlciwgYW5kIGZsYXR0ZW5lZCBpbiB0aGUgZm9ybSBvZiBhIHBpenphLiBJdCBoYXMgZWlnaHQgc2xpY2VzLlwiLDQuNTAscGl6emEpO1xuICAgIGxldCBrZWxwRnJpZXM9Y3JlYXRlSXRlbShcIktlbHAgRnJpZXNcIixcIkZyaWVzIHRoYXQgcmVzZW1ibGUgc2Vhd2VlZCB3aXRoIHRoZSB3YXkgdGhleSBhcmUgc2hhcGVkLlwiLDEsa2VscEZyaWVzSW1hZ2UpO1xuXG4gICAgbGV0IG1lbnVTZWN0aW9uPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZChrcmFiYnlQYXR0eSxjb3JhbEJpdHMsa2VscFNoYWtlLHVsdHJhS3JhYnlTdXByZW1lLGtydXN0eUtyYWJQaXp6YSxrZWxwRnJpZXMpO1xuXG4gICAgbGV0IHJlbmRlcj1mdW5jdGlvbigpe1xuICAgICAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVNlY3Rpb247IiwiaW1wb3J0IGNyZWF0ZUxheW91dCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvbGljaWVzU2VjdGlvbigpe1xuICAgIGxldCBzZWN0aW9uPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGxldCBwb2xpY2llc1RpdGxlPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLFwiUG9saWNpZXNcIik7XG4gICAgbGV0IHVsPWNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsZXQgcnVsZXM9W1xuICAgICAgICBjcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwibGlcIixcIk5vYm9keSBlYXRzIGluIHRoZSBLcnVzdHkgS3JhYiBmb3IgZnJlZSAocm95YWx0eSBvciBub3QpLlwiKSxcbiAgICAgICAgY3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImxpXCIsXCJPbmNlIHRoZSBwYXR0eSBoYXMgcmVhY2hlZCB0aGUgY3VzdG9tZXIsIGl0IGlzIGhpcyAvIGhlciByZXNwb25zaWJpbGl0eS5cIiksXG4gICAgICAgIGNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLFwiTm8gZnJlZSBuYXBraW5zLlwiKSxcbiAgICAgICAgY3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImxpXCIsXCJObyBmcmVlIHJlZmlsbHMuXCIpLFxuICAgICAgICBjcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwibGlcIixcIkEgc3RhbmRpbmcgZmVlIHdpbGwgYmUgZ2l2ZW4gaWYgYSBjdXN0b21lciBkb2VzIG5vdCBvcmRlciBhbnl0aGluZy5cIiksXG4gICAgICAgIGNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLFwiTm8gcmVmdW5kcy5cIiksXG4gICAgICAgIGNyZWF0ZUxheW91dCgpLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLFwiQW55IG1vbmV5IGJyb3VnaHQgaW50byB0aGUgS3J1c3R5IEtyYWIgbXVzdCBiZSBzcGVudCBpbiB0aGUgS3J1c3R5IEtyYWIuXCIpLFxuICAgICAgICBjcmVhdGVMYXlvdXQoKS5jcmVhdGVFbGVtZW50KFwibGlcIixcIlRoZXJlIGlzIGEgNSBkb2xsYXIgY29tcGxhaW50IGZlZVwiKSxcbiAgICAgICAgY3JlYXRlTGF5b3V0KCkuY3JlYXRlRWxlbWVudChcImxpXCIsXCJUaGUgS3JhYmJ5IFBhdHR5IHNlY3JldCBmb3JtdWxhIGlzIHRoZSBzb2xlIHByb3BlcnR5IG9mIHRoZSBLcnVzdHkgS3JhYiBhbmQgaXMgb25seSB0byBiZSBkaXNjdXNzZWQgaW4gcGFydCBvciBpbiB3aG9sZSB3aXRoIGl0cyBjcmVhdG9yIE1yLiBLcmFicy4gRHVwbGljYXRpb24gb2YgdGhpcyBmb3JtdWxhIGlzIHB1bmlzaGFibGUgYnkgbGF3LiBSZXN0cmljdGlvbnMgYXBwbHksIHJlc3VsdHMgbWF5IHZhcnkuXCIpXG4gICAgXTtcbiAgICBydWxlcy5mb3JFYWNoKHJ1bGU9PntcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQocnVsZSk7XG4gICAgfSk7XG4gICAgc2VjdGlvbi5hcHBlbmQocG9saWNpZXNUaXRsZSx1bCk7XG4gICAgbGV0IHJlbmRlcj1mdW5jdGlvbigpe1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwb2xpY2llc1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb2xpY2llc1NlY3Rpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVMYXlvdXQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjcmVhdGVIb21lU2VjdGlvbiBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlUG9saWNpZXNTZWN0aW9uIGZyb20gXCIuL3BvbGljaWVzXCI7XG5pbXBvcnQgY3JlYXRlTWVudVNlY3Rpb24gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RcIjtcblxubGV0IGNvbnRlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmQoY3JlYXRlTGF5b3V0KCkuaGVhZGVyLGNyZWF0ZUxheW91dCgpLnRhYnNDb250YWluZXIsY3JlYXRlTGF5b3V0KCkubWFpbik7XG5cbmNyZWF0ZUhvbWVTZWN0aW9uKCkucmVuZGVyKCk7XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQoKXtcbiAgICBsZXQgY29udGVudFRvUmVtb3ZlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnRlbnRUb1JlbW92ZS5mb3JFYWNoKHNlY3Rpb249PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikucmVtb3ZlQ2hpbGQoc2VjdGlvbik7XG4gICAgfSk7XG4gICAgbGV0IHRhYnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdj51bD5saVwiKTtcbiAgICB0YWJzLmZvckVhY2godGFiPT57XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pXG59O1xuXG5sZXQgaG9tZVRhYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2PnVsPmxpOmZpcnN0LW9mLXR5cGVcIik7XG5ob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVtb3ZlQ29udGVudCgpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjcmVhdGVIb21lU2VjdGlvbigpLnJlbmRlcigpO1xufSlcblxubGV0IG1lbnVUYWI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdj51bD5saTpudGgtb2YtdHlwZSgyKVwiKTtcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGNyZWF0ZU1lbnVTZWN0aW9uKCkucmVuZGVyKCk7XG59KTtcblxubGV0IHBvbGljaWVzVGFiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXY+dWw+bGk6bGFzdC1vZi10eXBlXCIpO1xucG9saWNpZXNUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICByZW1vdmVDb250ZW50KCk7XG4gICAgcG9saWNpZXNUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjcmVhdGVQb2xpY2llc1NlY3Rpb24oKS5yZW5kZXIoKTtcbn0pO1xuXG5sZXQgY29udGFjdFRhYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2PnVsPmxpOm50aC1vZi10eXBlKDMpXCIpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgY3JlYXRlQ29udGFjdFNlY3Rpb24oKS5yZW5kZXIoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9