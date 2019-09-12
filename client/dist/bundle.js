/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/client/src/index.jsx: Unexpected token (96:3)\\n\\n\\u001b[0m \\u001b[90m 94 | \\u001b[39m    getNearbyPosts() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 95 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m axios\\u001b[33m.\\u001b[39mget(\\u001b[32m'/posts'\\u001b[39m)\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 96 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 97 | \\u001b[39m        \\u001b[33m.\\u001b[39mthen(response \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 98 | \\u001b[39m            \\u001b[90m// debugger;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 99 | \\u001b[39m            response\\u001b[33m.\\u001b[39mdata\\u001b[0m\\n    at Object.raise (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Object.unexpected (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:7642:16)\\n    at Object.jsxParseIdentifier (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3379:12)\\n    at Object.jsxParseNamespacedName (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3389:23)\\n    at Object.jsxParseElementName (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3400:21)\\n    at Object.jsxParseOpeningElementAt (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3482:22)\\n    at Object.jsxParseElementAt (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3515:33)\\n    at Object.jsxParseElement (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3589:17)\\n    at Object.parseExprAtom (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:3596:19)\\n    at Object.parseExprSubscripts (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Object.parseMaybeUnary (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOpBaseRightExpr (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8352:34)\\n    at Object.parseExprOpRightExpr (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8345:21)\\n    at Object.parseExprOp (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8317:27)\\n    at Object.parseExprOps (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8277:17)\\n    at Object.parseMaybeConditional (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Object.parseExpression (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:8135:23)\\n    at Object.parseReturnStatement (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10198:28)\\n    at Object.parseStatementContent (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:9877:21)\\n    at Object.parseStatement (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Object.parseBlockBody (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Object.parseBlock (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10376:10)\\n    at Object.parseFunctionBody (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:9424:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:9394:10)\\n    at Object.parseMethod (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:9348:10)\\n    at Object.pushClassMethod (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10804:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10729:12)\\n    at Object.parseClassMember (/Users/Wesley/Documents/OpSpark/sr-immersion/greenfield/node_modules/@babel/parser/lib/index.js:10668:10)\");\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ })

/******/ });