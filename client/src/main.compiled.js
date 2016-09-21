/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/9/20.
	 */
	
	'use strict';
	
	var app = __webpack_require__(1);
	var env = __webpack_require__(96);
	var StartAppCommand = __webpack_require__(97);
	
	// main entrance
	cc.game.onRealStart = function () {
	  // start the first command
	  app.instance().registerCommand(env.CMD.START_APP, StartAppCommand);
	  app.instance().sendNotification(env.CMD.START_APP, {});
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(76);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by leo on 2016/8/1.
	 */
	
	var puremvc = __webpack_require__(93);
	var env = __webpack_require__(96);
	
	module.exports = function (_puremvc$Facade) {
	  (0, _inherits3.default)(AppFacade, _puremvc$Facade);
	
	  function AppFacade() {
	    (0, _classCallCheck3.default)(this, AppFacade);
	    return (0, _possibleConstructorReturn3.default)(this, (AppFacade.__proto__ || (0, _getPrototypeOf2.default)(AppFacade)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(AppFacade, null, [{
	    key: 'instance',
	
	    /**
	     * Return instance of facade.
	     * @returns {Object}
	     */
	    value: function instance() {
	      var instance = puremvc.Facade.instanceMap[env.APP.KEY];
	      if (!instance) {
	        instance = new AppFacade(env.APP.KEY);
	      }
	      return instance;
	    }
	  }]);
	  return AppFacade;
	}(puremvc.Facade);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(4)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	module.exports = __webpack_require__(4).Object.keys;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(8)
	  , $keys    = __webpack_require__(10);
	
	__webpack_require__(25)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(9);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(11)
	  , enumBugKeys = __webpack_require__(24);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(12)
	  , toIObject    = __webpack_require__(13)
	  , arrayIndexOf = __webpack_require__(16)(false)
	  , IE_PROTO     = __webpack_require__(20)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(14)
	  , defined = __webpack_require__(9);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(15);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(13)
	  , toLength  = __webpack_require__(17)
	  , toIndex   = __webpack_require__(19);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(18)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(18)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(21)('keys')
	  , uid    = __webpack_require__(23);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(22)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(26)
	  , core    = __webpack_require__(4)
	  , fails   = __webpack_require__(35);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(22)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(28);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(30)
	  , createDesc = __webpack_require__(38);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(37)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function(){
	  return Object.defineProperty(__webpack_require__(36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32)
	  , document = __webpack_require__(22).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(32);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(40);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(60);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(55);
	module.exports = __webpack_require__(59).f('iterator');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(43)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(44)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(18)
	  , defined   = __webpack_require__(9);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(45)
	  , $export        = __webpack_require__(26)
	  , redefine       = __webpack_require__(46)
	  , hide           = __webpack_require__(29)
	  , has            = __webpack_require__(12)
	  , Iterators      = __webpack_require__(47)
	  , $iterCreate    = __webpack_require__(48)
	  , setToStringTag = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(54)
	  , ITERATOR       = __webpack_require__(53)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(49)
	  , descriptor     = __webpack_require__(38)
	  , setToStringTag = __webpack_require__(52)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(53)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(31)
	  , dPs         = __webpack_require__(50)
	  , enumBugKeys = __webpack_require__(24)
	  , IE_PROTO    = __webpack_require__(20)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(36)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(51).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(30)
	  , anObject = __webpack_require__(31)
	  , getKeys  = __webpack_require__(10);
	
	module.exports = __webpack_require__(34) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22).document && document.documentElement;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(30).f
	  , has = __webpack_require__(12)
	  , TAG = __webpack_require__(53)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(21)('wks')
	  , uid        = __webpack_require__(23)
	  , Symbol     = __webpack_require__(22).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(12)
	  , toObject    = __webpack_require__(8)
	  , IE_PROTO    = __webpack_require__(20)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	var global        = __webpack_require__(22)
	  , hide          = __webpack_require__(29)
	  , Iterators     = __webpack_require__(47)
	  , TO_STRING_TAG = __webpack_require__(53)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(57)
	  , step             = __webpack_require__(58)
	  , Iterators        = __webpack_require__(47)
	  , toIObject        = __webpack_require__(13);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(44)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(53);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	module.exports = __webpack_require__(4).Symbol;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(22)
	  , has            = __webpack_require__(12)
	  , DESCRIPTORS    = __webpack_require__(34)
	  , $export        = __webpack_require__(26)
	  , redefine       = __webpack_require__(46)
	  , META           = __webpack_require__(63).KEY
	  , $fails         = __webpack_require__(35)
	  , shared         = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(52)
	  , uid            = __webpack_require__(23)
	  , wks            = __webpack_require__(53)
	  , wksExt         = __webpack_require__(59)
	  , wksDefine      = __webpack_require__(64)
	  , keyOf          = __webpack_require__(65)
	  , enumKeys       = __webpack_require__(66)
	  , isArray        = __webpack_require__(69)
	  , anObject       = __webpack_require__(31)
	  , toIObject      = __webpack_require__(13)
	  , toPrimitive    = __webpack_require__(37)
	  , createDesc     = __webpack_require__(38)
	  , _create        = __webpack_require__(49)
	  , gOPNExt        = __webpack_require__(70)
	  , $GOPD          = __webpack_require__(72)
	  , $DP            = __webpack_require__(30)
	  , $keys          = __webpack_require__(10)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(68).f  = $propertyIsEnumerable;
	  __webpack_require__(67).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(45)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(29)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(23)('meta')
	  , isObject = __webpack_require__(32)
	  , has      = __webpack_require__(12)
	  , setDesc  = __webpack_require__(30).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(35)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(22)
	  , core           = __webpack_require__(4)
	  , LIBRARY        = __webpack_require__(45)
	  , wksExt         = __webpack_require__(59)
	  , defineProperty = __webpack_require__(30).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(10)
	  , toIObject = __webpack_require__(13);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(10)
	  , gOPS    = __webpack_require__(67)
	  , pIE     = __webpack_require__(68);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 68 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(15);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(13)
	  , gOPN      = __webpack_require__(71).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(11)
	  , hiddenKeys = __webpack_require__(24).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(68)
	  , createDesc     = __webpack_require__(38)
	  , toIObject      = __webpack_require__(13)
	  , toPrimitive    = __webpack_require__(37)
	  , has            = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(34) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 73 */
/***/ function(module, exports) {



/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64)('asyncIterator');

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64)('observable');

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	module.exports = __webpack_require__(4).Object.getPrototypeOf;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(8)
	  , $getPrototypeOf = __webpack_require__(54);
	
	__webpack_require__(25)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(81);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	var $Object = __webpack_require__(4).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(26);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(34), 'Object', {defineProperty: __webpack_require__(30).f});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(86);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(90);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	module.exports = __webpack_require__(4).Object.setPrototypeOf;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(26);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(89).set});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(32)
	  , anObject = __webpack_require__(31);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(27)(Function.call, __webpack_require__(72).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(92);
	var $Object = __webpack_require__(4).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(26)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(49)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(94);
	module.exports.statemachine = __webpack_require__(95);

/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * @fileOverview
	 * PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * Reuse governed by Creative Commons Attribution 3.0 
	 * http://creativecommons.org/licenses/by/3.0/us/
	 * @author david.foley@puremvc.org 
	 */
	
	
	 	/* implementation begin */
		
		
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Observer
	 * 
	 * A base Observer implementation.
	 * 
	 * An Observer is an object that encapsulates information
	 * about an interested object with a method that should 
	 * be called when a particular Notification is broadcast. 
	 * 
	 * In PureMVC, the Observer class assumes these responsibilities:
	 * 
	 * - Encapsulate the notification (callback) method of the interested object.
	 * - Encapsulate the notification context (this) of the interested object.
	 * - Provide methods for setting the notification method and context.
	 * - Provide a method for notifying the interested object.
	 * 
	 * 
	 * The notification method on the interested object should take 
	 * one parameter of type Notification.
	 * 
	 * 
	 * @param {Function} notifyMethod 
	 *  the notification method of the interested object
	 * @param {Object} notifyContext 
	 *  the notification context of the interested object
	 * @constructor
	 */
	function Observer (notifyMethod, notifyContext)
	{
	    this.setNotifyMethod(notifyMethod);
	    this.setNotifyContext(notifyContext);
	};
	
	/**
	 * Set the Observers notification method.
	 * 
	 * The notification method should take one parameter of type Notification
	 * @param {Function} notifyMethod
	 *  the notification (callback) method of the interested object.
	 * @return {void}
	 */
	Observer.prototype.setNotifyMethod= function (notifyMethod)
	{
	    this.notify= notifyMethod;
	};
	
	/**
	 * Set the Observers notification context.
	 * 
	 * @param {Object} notifyContext
	 *  the notification context (this) of the interested object.
	 * 
	 * @return {void}
	 */
	Observer.prototype.setNotifyContext= function (notifyContext)
	{
	    this.context= notifyContext;
	};
	
	/**
	 * Get the Function that this Observer will invoke when it is notified.
	 * 
	 * @private
	 * @return {Function}
	 */
	Observer.prototype.getNotifyMethod= function ()
	{
	    return this.notify;
	};
	
	/**
	 * Get the Object that will serve as the Observers callback execution context
	 * 
	 * @private
	 * @return {Object}
	 */
	Observer.prototype.getNotifyContext= function ()
	{
	    return this.context;
	};
	
	/**
	 * Notify the interested object.
	 * 
	 * @param {puremvc.Notification} notification
	 *  The Notification to pass to the interested objects notification method
	 * @return {void}
	 */
	Observer.prototype.notifyObserver= function (notification)
	{
	    this.getNotifyMethod().call(this.getNotifyContext(), notification);
	};
	
	/**
	 * Compare an object to this Observers notification context.
	 * 
	 * @param {Object} object
	 *  
	 * @return {boolean}
	 */
	Observer.prototype.compareNotifyContext= function (object)
	{
	    return object === this.context;
	};
	
	/**
	 * The Observers callback Function
	 * 
	 * @private
	 * @type {Function}
	 */
	Observer.prototype.notify= null;
	
	/**
	 * The Observers callback Object
	 * @private
	 * @type {Object}
	 */
	Observer.prototype.context= null;
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Notification
	 * 
	 * A base Notification implementation.
	 * 
	 * PureMVC does not rely upon underlying event models such as the one provided 
	 * with the DOM or other browser centric W3C event models.
	 * 
	 * The Observer Pattern as implemented within PureMVC exists to support 
	 * event-driven communication between the application and the actors of the MVC 
	 * triad.
	 * 
	 * Notifications are not meant to be a replacement for events in the browser. 
	 * Generally, Mediator implementors place event listeners on their view 
	 * components, which they then handle in the usual way. This may lead to the 
	 * broadcast of Notifications to trigger commands or to communicate with other 
	 * Mediators. {@link puremvc.Proxy Proxy},
	 * {@link puremvc.SimpleCommand SimpleCommand}
	 * and {@link puremvc.MacroCommand MacroCommand}
	 * instances communicate with each other and 
	 * {@link puremvc.Mediator Mediator}s
	 * by broadcasting Notifications.
	 * 
	 * A key difference between browser events and PureMVC Notifications is that
	 * events follow the 'Chain of Responsibility' pattern, 'bubbling' up the 
	 * display hierarchy until some parent component handles the event, while 
	 * PureMVC Notification follow a 'Publish/Subscribe' pattern. PureMVC classes 
	 * need not be related to each other in a parent/child relationship in order to 
	 * communicate with one another using Notifications.
	 * 
	 * @constructor 
	 * @param {string} name
	 *  The Notification name
	 * @param {Object} [body]
	 *  The Notification body
	 * @param {Object} [type]
	 *  The Notification type
	 */
	function Notification(name, body, type)
	{
	    this.name= name;
	    this.body= body;
	    this.type= type;
	};
	
	/**
	 * Get the name of the Notification instance
	 *
	 * @return {string}
	 *  The name of the Notification instance
	 */
	Notification.prototype.getName= function()
	{
	    return this.name;
	};
	
	/**
	 * Set this Notifications body. 
	 * @param {Object} body
	 * @return {void}
	 */
	Notification.prototype.setBody= function(body)
	{
	    this.body= body;
	};
	
	/**
	 * Get the Notification body.
	 *
	 * @return {Object}
	 */
	Notification.prototype.getBody= function()
	{
	    return this.body
	};
	
	/**
	 * Set the type of the Notification instance.
	 *
	 * @param {Object} type
	 * @return {void}
	 */
	Notification.prototype.setType= function(type)
	{
	    this.type= type;
	};
	
	/**
	 * Get the type of the Notification instance.
	 * 
	 * @return {Object}
	 */
	Notification.prototype.getType= function()
	{
	    return this.type;
	};
	
	/**
	 * Get a string representation of the Notification instance
	 *
	 * @return {string}
	 */
	Notification.prototype.toString= function()
	{
	    var msg= "Notification Name: " + this.getName();
	    msg+= "\nBody:" + ((this.body == null ) ? "null" : this.body.toString());
	    msg+= "\nType:" + ((this.type == null ) ? "null" : this.type);
	    return msg;
	};
	
	/**
	 * The Notifications name.
	 *
	 * @type {string}
	 * @private
	 */
	Notification.prototype.name= null;
	
	/**
	 * The Notifications type.
	 *
	 * @type {string}
	 * @private
	 */
	Notification.prototype.type= null;
	
	/**
	 * The Notifications body.
	 *
	 * @type {Object}
	 * @private
	 */
	Notification.prototype.body= null;
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Notifier
	 * 
	 * A Base Notifier implementation.
	 * 
	 * {@link puremvc.MacroCommand MacroCommand}, 
	 * {@link puremvc.SimpleCommand SimpleCommand}, 
	 * {@link puremvc.Mediator Mediator} and 
	 * {@link puremvc.Proxy Proxy}
	 * all have a need to send Notifications
	 * 
	 * The Notifier interface provides a common method called #sendNotification that 
	 * relieves implementation code of the necessity to actually construct 
	 * Notifications.
	 * 
	 * The Notifier class, which all of the above mentioned classes
	 * extend, provides an initialized reference to the 
	 * {@link puremvc.Facade Facade}
	 * Multiton, which is required for the convienience method
	 * for sending Notifications but also eases implementation as these
	 * classes have frequent 
	 * {@link puremvc.Facade Facade} interactions 
	 * and usually require access to the facade anyway.
	 * 
	 * NOTE: In the MultiCore version of the framework, there is one caveat to
	 * notifiers, they cannot send notifications or reach the facade until they
	 * have a valid multitonKey. 
	 * 
	 * The multitonKey is set:
	 *   - on a Command when it is executed by the Controller
	 *   - on a Mediator is registered with the View
	 *   - on a Proxy is registered with the Model. 
	 * 
	 * @constructor
	 */
	function Notifier()
	{
	};
	
	/**
	 * Create and send a Notification.
	 *
	 * Keeps us from having to construct new Notification instances in our 
	 * implementation code.
	 * 
	 * @param {string} notificationName
	 *  A notification name
	 * @param {Object} [body]
	 *  The body of the notification
	 * @param {string} [type]
	 *  The notification type
	 * @return {void}
	 */
	Notifier.prototype.sendNotification = function(notificationName, body, type)
	{
	    var facade = this.getFacade();
	    if(facade)
	    {
	        facade.sendNotification(notificationName, body, type);
	    }
	};
	
	
	/**
	 * @protected
	 * A reference to this Notifier's Facade. This reference will not be available
	 * until #initializeNotifier has been called. 
	 * 
	 * @type {puremvc.Facade}
	 */
	Notifier.prototype.facade;
	
	/**
	 * Initialize this Notifier instance.
	 * 
	 * This is how a Notifier gets its multitonKey. 
	 * Calls to #sendNotification or to access the
	 * facade will fail until after this method 
	 * has been called.
	 * 
	 * Mediators, Commands or Proxies may override 
	 * this method in order to send notifications
	 * or access the Multiton Facade instance as
	 * soon as possible. They CANNOT access the facade
	 * in their constructors, since this method will not
	 * yet have been called.
	 * 
	 *
	 * @param {string} key
	 *  The Notifiers multiton key;
	 * @return {void}
	 */
	Notifier.prototype.initializeNotifier = function(key)
	{
	    this.multitonKey = String(key);
	    this.facade= this.getFacade();
	};
	
	/**
	 * Retrieve the Multiton Facade instance
	 *
	 *
	 * @protected
	 * @return {puremvc.Facade}
	 */
	Notifier.prototype.getFacade = function()
	{
	    if(this.multitonKey == null)
	    {
	        throw new Error(Notifier.MULTITON_MSG);
	    };
	
	    return Facade.getInstance(this.multitonKey);
	};
	
	/**
	 * @ignore
	 * The Notifiers internal multiton key.
	 *
	 * @protected
	 * @type string
	 */
	Notifier.prototype.multitonKey = null;
	
	/**
	 * @ignore
	 * The error message used if the Notifier is not initialized correctly and
	 * attempts to retrieve its own multiton key
	 *
	 * @static
	 * @protected
	 * @const
	 * @type string
	 */
	Notifier.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.SimpleCommand
	 * @extends puremvc.Notifier
	 *
	 * SimpleCommands encapsulate the business logic of your application. Your 
	 * subclass should override the #execute method where your business logic will
	 * handle the 
	 * {@link puremvc.Notification Notification}
	 * 
	 * Take a look at 
	 * {@link puremvc.Facade#registerCommand Facade's registerCommand}
	 * or {@link puremvc.Controller#registerCommand Controllers registerCommand}
	 * methods to see how to add commands to your application.
	 * 
	 * @constructor
	 */
	function SimpleCommand () { };
	
	SimpleCommand.prototype= new Notifier;
	SimpleCommand.prototype.constructor= SimpleCommand;
	
	/**
	 * Fulfill the use-case initiated by the given Notification
	 * 
	 * In the Command Pattern, an application use-case typically begins with some
	 * user action, which results in a Notification is handled by the business logic
	 * in the #execute method of a command.
	 * 
	 * @param {puremvc.Notification} notification
	 *  The notification to handle.
	 * @return {void}
	 */
	SimpleCommand.prototype.execute= function (notification) { };
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.MacroCommand
	 * @extends puremvc.Notifier
	 * 
	 * A base command implementation that executes other commands, such as
	 * {@link puremvc.SimpleCommand SimpleCommand}
	 * or {@link puremvc.MacroCommand MacroCommand}
	 * subclasses.
	 *  
	 * A MacroCommand maintains an list of
	 * command constructor references called *SubCommands*.
	 * 
	 * When #execute is called, the MacroCommand
	 * instantiates and calls #execute on each of its *SubCommands* in turn.
	 * Each *SubCommand* will be passed a reference to the original
	 * {@link puremvc.Notification Notification} 
	 * that was passed to the MacroCommands #execute method
	 * 
	 * Unlike {@link puremvc.SimpleCommand SimpleCommand}, 
	 * your subclass should not override #execute but instead, should 
	 * override the #initializeMacroCommand method, calling #addSubCommand once for 
	 * each *SubCommand* to be executed.
	 * 
	 * If your subclass does define a constructor, be sure to call "super" like so
	 * 
	 *     function MyMacroCommand ()
	 *     {
	 *         MacroCommand.call(this);
	 *     };
	 * @constructor
	 */
	function MacroCommand()
	{
	    this.subCommands= [];
	    this.initializeMacroCommand();
	};
	
	/* subclass Notifier */
	MacroCommand.prototype= new Notifier;
	MacroCommand.prototype.constructor= MacroCommand;
	
	/**
	 * @private
	 * @type {Array.<puremvc.SimpleCommand|puremvc.MacroCommand>}
	 */
	MacroCommand.prototype.subCommands= null;
	
	/**
	 * @protected
	 * Initialize the MacroCommand.
	 * 
	 * In your subclass, override this method to 
	 * initialize the MacroCommand's *SubCommand*  
	 * list with command class references like 
	 * this:
	 * 
	 *     // Initialize MyMacroCommand
	 *     MyMacroCommand.prototype.initializeMacroCommand= function ()
	 *     {
	 *         this.addSubCommand( com.me.myapp.controller.FirstCommand );
	 *         this.addSubCommand( com.me.myapp.controller.SecondCommand );
	 *         this.addSubCommand( com.me.myapp.controller.ThirdCommand );
	 *     };
	 * 
	 * Note that *SubCommand*s may be any command implementor,
	 * MacroCommands or SimpleCommands are both acceptable.
	 * @return {void}
	 */
	MacroCommand.prototype.initializeMacroCommand= function() {}
	
	/**
	 * @protected
	 * Add a *SubCommand*
	 * 
	 * The *SubCommand*s will be called in First In / First Out (FIFO) order
	 * @param {Function} commandClassRef
	 *  A reference to a subclassed SimpleCommand or MacroCommand constructor
	 */
	MacroCommand.prototype.addSubCommand= function(commandClassRef)
	{
	    this.subCommands.push(commandClassRef);
	};
	
	/**
	 * Execute this MacroCommands *SubCommands*
	 * 
	 * The *SubCommand*s will be called in First In / First Out (FIFO) order
	 * @param {puremvc.Notification} note
	 *  The Notification object to be passed to each *SubCommand*
	 */
	MacroCommand.prototype.execute= function(note)
	{
	    // SIC- TODO optimize
	    while(this.subCommands.length > 0)
	    {
	        var ref= this.subCommands.shift();
	        var cmd= new ref;
	        cmd.initializeNotifier(this.multitonKey);
	        cmd.execute(note);
	    }
	};
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Mediator
	 * @extends puremvc.Notifier
	 * 
	 * A base Mediator implementation.
	 *
	 * In PureMVC, Mediator classes are used to mediate communication between a view 
	 * component and the rest of the application.
	 *
	 * A Mediator should listen to its view components for events, and handle them 
	 * by sending notifications (to be handled by other Mediators, 
	 * {@link puremvc.SimpleCommand SimpleCommands} 
	 * or
	 * {@link puremvc.MacroCommand MacroCommands}) 
	 * or passing data from the view component directly to a 
	 * {@link puremvc.Proxy Proxy}, such as submitting 
	 * the contents of a form to a service.
	 * 
	 * Mediators should not perform business logic, maintain state or other 
	 * information for its view component, or break the encapsulation of the view 
	 * component by manipulating the view component's children. It should only call 
	 * methods or set properties on the view component.
	 *  
	 * The view component should encapsulate its own behavior and implementation by 
	 * exposing methods and properties that the Mediator can call without having to 
	 * know about the view component's children.
	 * 
	 * @constructor
	 * @param {string} [mediatorName]
	 *  The Mediators name. The Mediators static #NAME value is used by default
	 * @param {Object} [viewComponent]
	 *  The Mediators {@link #setViewComponent viewComponent}.
	 */
	function Mediator (mediatorName, viewComponent)
	{
	    this.mediatorName= mediatorName || this.constructor.NAME;
	    this.viewComponent=viewComponent;  
	};
	
	/**
	 * @static
	 * The name of the Mediator.
	 * 
	 * Typically, a Mediator will be written to serve one specific control or group
	 * of controls and so, will not have a need to be dynamically named.
	 * 
	 * @type {string}
	 */
	Mediator.NAME= "Mediator";
	
	/* subclass */
	Mediator.prototype= new Notifier;
	Mediator.prototype.constructor= Mediator;
	
	/**
	 * Get the name of the Mediator
	 * 
	 * @return {string}
	 *  The Mediator name
	 */
	Mediator.prototype.getMediatorName= function ()
	{
	    return this.mediatorName;
	};
	
	/**
	 * Set the Mediators view component. This could
	 * be a HTMLElement, a bespoke UiComponent wrapper
	 * class, a MooTools Element, a jQuery result or a
	 * css selector, depending on which DOM abstraction 
	 * library you are using.
	 * 
	 * 
	 * @param {Object} the view component
	 * @return {void}
	 */
	Mediator.prototype.setViewComponent= function (viewComponent)
	{
	    this.viewComponent= viewComponent;
	};
	
	/**
	 * Get the Mediators view component.
	 * 
	 * Additionally, an optional explicit getter can be
	 * be defined in the subclass that defines the 
	 * view components, providing a more semantic interface
	 * to the Mediator.
	 * 
	 * This is different from the AS3 implementation in
	 * the sense that no casting is required from the
	 * object supplied as the view component.
	 * 
	 *     MyMediator.prototype.getComboBox= function ()
	 *     {
	 *         return this.viewComponent;  
	 *     }
	 * 
	 * @return {Object}
	 *  The view component
	 */
	Mediator.prototype.getViewComponent= function ()
	{
	    return this.viewComponent;
	};
	
	/**
	 * List the Notification names this Mediator is interested
	 * in being notified of.
	 * 
	 * @return {Array} 
	 *  The list of Notification names.
	 */
	Mediator.prototype.listNotificationInterests= function ()
	{
	    return [];
	};
	
	/**
	 * Handle Notifications.
	 * 
	 * Typically this will be handled in a switch statement
	 * with one 'case' entry per Notification the Mediator
	 * is interested in
	 * 
	 * @param {puremvc.Notification} notification
	 * @return {void}
	 */
	Mediator.prototype.handleNotification= function (notification)
	{
	    return;
	};
	
	/**
	 * Called by the View when the Mediator is registered
	 * @return {void}
	 */
	Mediator.prototype.onRegister= function ()
	{
	    return;
	};
	
	/**
	 * Called by the View when the Mediator is removed
	 */
	Mediator.prototype.onRemove= function ()
	{
	    return;
	};
	
	/**
	 * @ignore
	 * The Mediators name. Should only be accessed by Mediator subclasses.
	 * 
	 * @protected
	 * @type string
	 */
	Mediator.prototype.mediatorName= null;
	
	/**
	 * @ignore
	 * The Mediators viewComponent. Should only be accessed by Mediator subclasses.
	 * 
	 * @protected
	 * @type Object
	 */
	Mediator.prototype.viewComponent=null;
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Proxy
	 * @extends puremvc.Notifier
	 *
	 * A base Proxy implementation. 
	 * 
	 * In PureMVC, Proxy classes are used to manage parts of the application's data 
	 * model.
	 * 
	 * A Proxy might simply manage a reference to a local data object, in which case 
	 * interacting with it might involve setting and getting of its data in 
	 * synchronous fashion.
	 * 
	 * Proxy classes are also used to encapsulate the application's interaction with 
	 * remote services to save or retrieve data, in which case, we adopt an 
	 * asyncronous idiom; setting data (or calling a method) on the Proxy and 
	 * listening for a 
	 * {@link puremvc.Notification Notification} 
	 * to be sent  when the Proxy has retrieved the data from the service. 
	 * 
	 * 
	 * @param {string} [proxyName]
	 *  The Proxy's name. If none is provided, the Proxy will use its constructors
	 *  NAME property.
	 * @param {Object} [data]
	 *  The Proxy's data object
	 * @constructor
	 */
	function Proxy(proxyName, data)
	{
	    this.proxyName= proxyName || this.constructor.NAME;
	    if(data != null)
	    {
	        this.setData(data);
	    }
	};
	
	
	Proxy.NAME= "Proxy";
	
	Proxy.prototype= new Notifier;
	Proxy.prototype.constructor= Proxy;
	
	/**
	 * Get the Proxy's name.
	 *
	 * @return {string}
	 */
	Proxy.prototype.getProxyName= function()
	{
	    return this.proxyName;
	};
	
	/**
	 * Set the Proxy's data object
	 *
	 * @param {Object} data
	 * @return {void}
	 */
	Proxy.prototype.setData= function(data)
	{
	    this.data= data;
	};
	
	/**
	 * Get the Proxy's data object
	 *
	 * @return {Object}
	 */
	Proxy.prototype.getData= function()
	{
	    return this.data;
	};
	
	/**
	 * Called by the {@link puremvc.Model Model} when
	 * the Proxy is registered.
	 *
	 * @return {void}
	 */
	Proxy.prototype.onRegister= function()
	{
	    return;
	};
	
	/**
	 * Called by the {@link puremvc.Model Model} when
	 * the Proxy is removed.
	 * 
	 * @return {void}
	 */
	Proxy.prototype.onRemove= function()
	{
	    return;
	};
	
	/**
	 * @ignore
	 * The Proxys name.
	 *
	 * @protected
	 * @type String
	 */
	Proxy.prototype.proxyName= null;
	
	/**
	 * @ignore
	 * The Proxy's data object.
	 *
	 * @protected
	 * @type Object
	 */
	Proxy.prototype.data= null;
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Facade
	 * Facade exposes the functionality of the Controller, Model and View
	 * actors to client facing code. 
	 * 
	 * This Facade implementation is a Multiton, so you should not call the 
	 * constructor directly, but instead call the static Factory method, 
	 * passing the unique key for this instance to #getInstance
	 *
	 * @constructor
	 * @param {string} key
	 * 	The multiton key to use to retrieve the Facade instance.
	 * @throws {Error} 
	 *  If an attempt is made to instantiate Facade directly
	 */
	function Facade(key)
	{
	    if(Facade.instanceMap[key] != null)
	    {
	        throw new Error(Facade.MULTITON_MSG);
	    }
	
	    this.initializeNotifier(key);
	    Facade.instanceMap[key] = this;
	    this.initializeFacade();
	};
	
	/**
	 * Initialize the Multiton Facade instance.
	 * 
	 * Called automatically by the constructor. Override in your subclass to any
	 * subclass specific initializations. Be sure to call the 'super' 
	 * initializeFacade method, though
	 * 
	 *     MyFacade.prototype.initializeFacade= function ()
	 *     {
	 *         Facade.call(this);
	 *     };
	 * @protected
	 * @return {void}
	 */
	Facade.prototype.initializeFacade = function()
	{
	    this.initializeModel();
	    this.initializeController();
	    this.initializeView();
	};
	
	/**
	 * Facade Multiton Factory method. 
	 * Note that this method will return null if supplied a
	 * null or undefined multiton key.
	 * 
	 * @param {string} key
	 * 	The multiton key use to retrieve a particular Facade instance
	 * @return {puremvc.Facade}
	 */
	Facade.getInstance = function(key)
	{
		if (null == key)
			return null;
			
	    if(Facade.instanceMap[key] == null)
	    {
	        Facade.instanceMap[key] = new Facade(key);
	    }
	
	    return Facade.instanceMap[key];
	};
	
	/**
	 * Initialize the {@link puremvc.Controller Controller}.
	 * 
	 * Called by the #initializeFacade method.
	 * 
	 * Override this method in your subclass of Facade
	 * if one or both of the following are true:
	
	 * - You wish to initialize a different Controller
	 * - You have 
	 * {@link puremvc.SimpleCommand SimpleCommand}s
	 * or {@link puremvc.MacroCommand MacroCommand}s
	 * to register with the Controllerat startup.   
	 * 
	 * If you don't want to initialize a different Controller, 
	 * call the 'super' initializeControlle method at the beginning of your
	 * method, then register commands.
	 * 
	 *     MyFacade.prototype.initializeController= function ()
	 *     {
	 *         Facade.prototype.initializeController.call(this);
	 *         this.registerCommand(AppConstants.A_NOTE_NAME, ABespokeCommand)
	 *     }
	 * 
	 * @protected
	 * @return {void}
	 */
	Facade.prototype.initializeController = function()
	{
	    if(this.controller != null)
	        return;
	
	    this.controller = Controller.getInstance(this.multitonKey);
	};
	
	/**
	 * @protected
	 * Initialize the {@link puremvc.Model Model};
	 * 
	 * Called by the #initializeFacade method.
	 * Override this method in your subclass of Facade if one of the following are
	 * true:
	 * 
	 * - You wish to initialize a different Model.
	 * 
	 * - You have {@link puremvc.Proxy Proxy}s to 
	 *   register with the Model that do not retrieve a reference to the Facade at 
	 *   construction time.
	 * 
	 * If you don't want to initialize a different Model
	 * call 'super' #initializeModel at the beginning of your method, then register 
	 * Proxys.
	 * 
	 * Note: This method is *rarely* overridden; in practice you are more
	 * likely to use a command to create and registerProxys with the Model>, 
	 * since Proxys with mutable data will likely
	 * need to send Notifications and thus will likely want to fetch a reference to 
	 * the Facade during their construction. 
	 * 
	 * @return {void}
	 */
	Facade.prototype.initializeModel = function()
	{
	    if(this.model != null)
	        return;
	
	    this.model = Model.getInstance(this.multitonKey);
	};
	
	/**
	 * @protected
	 * 
	 * Initialize the {@link puremvc.View View}.
	 * 
	 * Called by the #initializeFacade method.
	 * 
	 * Override this method in your subclass of Facade if one or both of the 
	 * following are true:
	 *
	 * - You wish to initialize a different View.
	 * - You have Observers to register with the View
	 * 
	 * If you don't want to initialize a different View 
	 * call 'super' #initializeView at the beginning of your
	 * method, then register Mediator instances.
	 * 
	 *     MyFacade.prototype.initializeView= function ()
	 *     {
	 *         Facade.prototype.initializeView.call(this);
	 *         this.registerMediator(new MyMediator());
	 *     };
	 * 
	 * Note: This method is *rarely* overridden; in practice you are more
	 * likely to use a command to create and register Mediators
	 * with the View, since Mediator instances will need to send 
	 * Notifications and thus will likely want to fetch a reference 
	 * to the Facade during their construction. 
	 * @return {void}
	 */
	Facade.prototype.initializeView = function()
	{
	    if(this.view != null)
	        return;
	
	    this.view = View.getInstance(this.multitonKey);
	};
	
	/**
	 * Register a command with the Controller by Notification name
	 * @param {string} notificationName
	 *  The name of the Notification to associate the command with
	 * @param {Function} commandClassRef
	 *  A reference ot the commands constructor.
	 * @return {void}
	 */
	Facade.prototype.registerCommand = function(notificationName, commandClassRef)
	{
	    this.controller.registerCommand(notificationName, commandClassRef);
	};
	
	/**
	 * Remove a previously registered command to Notification mapping from the
	 * {@link puremvc.Controller#removeCommand Controller}
	 * @param {string} notificationName
	 *  The name of the the Notification to remove from the command mapping for.
	 * @return {void}
	 */
	Facade.prototype.removeCommand = function(notificationName)
	{
	    this.controller.removeCommand(notificationName);
	};
	
	/**
	 * Check if a command is registered for a given notification.
	 * 
	 * @param {string} notificationName
	 *  A Notification name
	 * @return {boolean}
	 *  Whether a comman is currently registered for the given notificationName
	 */
	Facade.prototype.hasCommand = function(notificationName)
	{
	    return this.controller.hasCommand(notificationName);
	};
	
	/**
	 * Register a Proxy with the {@link puremvc.Model#registerProxy Model}
	 * by name.
	 * 
	 * @param {puremvc.Proxy} proxy
	 *  The Proxy instance to be registered with the Model.
	 * @return {void}
	 */
	Facade.prototype.registerProxy = function(proxy)
	{
	    this.model.registerProxy(proxy);
	};
	
	/**
	 * Retrieve a Proxy from the Model
	 * 
	 * @param {string} proxyName
	 * @return {puremvc.Proxy}
	 */
	Facade.prototype.retrieveProxy = function(proxyName)
	{
	    return this.model.retrieveProxy(proxyName);
	};
	
	/**
	 * Remove a Proxy from the Model by name
	 * @param {string} proxyName
	 *  The name of the Proxy
	 * @return {puremvc.Proxy}
	 *  The Proxy that was removed from the Model
	 */
	Facade.prototype.removeProxy = function(proxyName)
	{
	    var proxy = null;
	    if(this.model != null)
	    {
	        proxy = this.model.removeProxy(proxyName);
	    }
	
	    return proxy;
	};
	
	/**
	 * Check it a Proxy is registered.
	 * @param {string} proxyName
	 *  A Proxy name
	 * @return {boolean}
	 *  Whether a Proxy is currently registered with the given proxyName
	 */
	Facade.prototype.hasProxy = function(proxyName)
	{
	    return this.model.hasProxy(proxyName);
	};
	
	/**
	 * Register a Mediator with with the View.
	 * 
	 * @param {puremvc.Mediator} mediator
	 *  A reference to the Mediator to register
	 * @return {void}
	 */
	Facade.prototype.registerMediator = function(mediator)
	{
	    if(this.view != null)
	    {
	        this.view.registerMediator(mediator);
	    }
	};
	
	/**
	 * Retrieve a Mediator from the View by name
	 * 
	 * @param {string} mediatorName
	 *  The Mediators name
	 * @return {puremvc.Mediator}
	 *  The retrieved Mediator
	 */
	Facade.prototype.retrieveMediator = function(mediatorName)
	{
	    return this.view.retrieveMediator(mediatorName);
	};
	
	/**
	 * Remove a Mediator from the View.
	 * 
	 * @param {string} mediatorName
	 *  The name of the Mediator to remove.
	 * @return {puremvc.Mediator}
	 *  The removed Mediator
	 */
	Facade.prototype.removeMediator = function(mediatorName)
	{
	    var mediator = null;
	    if(this.view != null)
	    {
	        mediator = this.view.removeMediator(mediatorName);
	    }
	
	    return mediator;
	};
	
	/**
	 * Check if a Mediator is registered or not.
	 * 
	 * @param {string} mediatorName
	 *  A Mediator name
	 * @return {boolean}
	 *  Whether a Mediator is registered with the given mediatorName
	 */
	Facade.prototype.hasMediator = function(mediatorName)
	{
	    return this.view.hasMediator(mediatorName);
	};
	
	/**
	 * Create and send a 
	 * {@link puremvc.Notification Notification}
	 * 
	 * Keeps us from having to construct new Notification instances in our
	 * implementation
	 * 
	 * @param {string} notificationName
	 *  The name of the Notification to send
	 * @param {Object} [body]
	 *  The body of the notification
	 * @param {string} [type]
	 *  The type of the notification
	 * @return {void}
	 */
	Facade.prototype.sendNotification = function(notificationName, body, type)
	{
	    this.notifyObservers(new Notification(notificationName, body, type));
	};
	
	/**
	 * Notify {@link puremvc.Observer Observer}s
	 * 
	 * This method is left public mostly for backward compatibility, and to allow
	 * you to send custom notification classes using the facade.
	 * 
	 * Usually you should just call sendNotification and pass the parameters, never 
	 * having to construct the notification yourself.
	 * 
	 * @param {puremvc.Notification} notification
	 *  The Notification to send
	 * @return {void}
	 */
	Facade.prototype.notifyObservers = function(notification)
	{
	    if(this.view != null)
	    {
	        this.view.notifyObservers(notification);
	    }
	};
	
	/**
	 * Initialize the Facades Notifier capabilities by setting the Multiton key for 
	 * this facade instance.
	 * 
	 * Not called directly, but instead from the constructor when #getInstance is 
	 * invoked. It is necessary to be public in order to implement Notifier
	 * 
	 * @param {string} key
	 * @return {void}
	 */
	Facade.prototype.initializeNotifier = function(key)
	{
	    this.multitonKey = key;
	};
	
	/**
	 * Check if a *Core* is registered or not
	 *
	 * @static
	 * @param {string} key
	 *  The multiton key for the *Core* in question
	 * @return {boolean}
	 *  Whether a *Core* is registered with the given key
	 */
	Facade.hasCore = function(key)
	{
	    return Facade.instanceMap[key] != null;
	};
	
	/**
	 * Remove a *Core* 
	 * 
	 * Remove the Model, View, Controller and Facade for a given key.
	 *
	 * @static
	 * @param {string} key
	 * @return {void}
	 */
	Facade.removeCore = function(key)
	{
	    if(Facade.instanceMap[key] == null)
	        return;
	
	    Model.removeModel(key);
	    View.removeView(key);
	    Controller.removeController(key);
	    delete Facade.instanceMap[key];
	};
	
	/**
	 * @ignore
	 * The Facades corresponding Controller
	 *
	 * @protected
	 * @type puremvc.Controller
	 */
	Facade.prototype.controller = null;
	
	/**
	 * @ignore
	 * The Facades corresponding Model instance
	 *
	 * @protected
	 * @type puremvc.Model
	 */
	Facade.prototype.model = null;
	
	/**
	 * @ignore
	 * The Facades correspnding View instance.
	 *
	 * @protected
	 * @type puremvc.View
	 */
	Facade.prototype.view = null;
	
	/**
	 * @ignore
	 * The Facades multiton key.
	 *
	 * @protected
	 * @type string
	 */
	Facade.prototype.multitonKey = null;
	
	/**
	 * @ignore
	 * The Multiton Facade instance map.
	 * @static
	 * @protected
	 * @type Array
	 */
	Facade.instanceMap = [];
	
	/**
	 * @ignore
	 * Message Constants
	 * @protected
	 * @type {string}
	 * @const
	 * @static
	 */
	Facade.MULTITON_MSG = "Facade instance for this Multiton key already constructed!";
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.View
	 * 
	 * A Multiton View implementation.
	 * 
	 * In PureMVC, the View class assumes these responsibilities
	 * 
	 * - Maintain a cache of {@link puremvc.Mediator Mediator}
	 *   instances.
	 * 
	 * - Provide methods for registering, retrieving, and removing 
	 *   {@link puremvc.Mediator Mediator}.
	 * 
	 * - Notifiying {@link puremvc.Mediator Mediator} when they are registered or 
	 *   removed.
	 * 
	 * - Managing the observer lists for each {@link puremvc.Notification Notification}  
	 *   in the application.
	 * 
	 * - Providing a method for attaching {@link puremvc.Observer Observer} to an 
	 *   {@link puremvc.Notification Notification}'s observer list.
	 * 
	 * - Providing a method for broadcasting a {@link puremvc.Notification Notification}.
	 * 
	 * - Notifying the {@link puremvc.Observer Observer}s of a given 
	 *   {@link puremvc.Notification Notification} when it broadcast.
	 * 
	 * This View implementation is a Multiton, so you should not call the 
	 * constructor directly, but instead call the static Multiton 
	 * Factory #getInstance method.
	 * 
	 * @param {string} key
	 * @constructor
	 * @throws {Error} 
	 *  if instance for this Multiton key has already been constructed
	 */
	function View(key)
	{
	    if(View.instanceMap[key] != null)
	    {
	        throw new Error(View.MULTITON_MSG);
	    };
	
	    this.multitonKey = key;
	    View.instanceMap[this.multitonKey] = this;
	    this.mediatorMap = [];
	    this.observerMap = [];
	    this.initializeView();
	};
	
	/**
	 * @protected
	 * Initialize the Singleton View instance
	 * 
	 * Called automatically by the constructor, this is your opportunity to
	 * initialize the Singleton instance in your subclass without overriding the
	 * constructor
	 * 
	 * @return {void}
	 */
	View.prototype.initializeView = function()
	{
	    return;
	};
	
	/**
	 * View Singleton Factory method.
	 * Note that this method will return null if supplied a null 
	 * or undefined multiton key.
	 *  
	 * @return {puremvc.View}
	 *  The Singleton instance of View
	 */
	View.getInstance = function(key)
	{
		if (null == key)
			return null;
			
	    if(View.instanceMap[key] == null)
	    {
	        View.instanceMap[key] = new View(key);
	    };
	
	    return View.instanceMap[key];
	};
	
	/**
	 * Register an Observer to be notified of Notifications with a given name
	 * 
	 * @param {string} notificationName
	 *  The name of the Notifications to notify this Observer of
	 * @param {puremvc.Observer} observer
	 *  The Observer to register.
	 * @return {void}
	 */
	View.prototype.registerObserver = function(notificationName, observer)
	{
	    if(this.observerMap[notificationName] != null)
	    {
	        this.observerMap[notificationName].push(observer);
	    }
	    else
	    {
	        this.observerMap[notificationName] = [observer];
	    }
	};
	
	/**
	 * Notify the Observersfor a particular Notification.
	 * 
	 * All previously attached Observers for this Notification's
	 * list are notified and are passed a reference to the INotification in 
	 * the order in which they were registered.
	 * 
	 * @param {puremvc.Notification} notification
	 *  The Notification to notify Observers of
	 * @return {void}
	 */
	View.prototype.notifyObservers = function(notification)
	{
	    // SIC
	    if(this.observerMap[notification.getName()] != null)
	    {
	        var observers_ref = this.observerMap[notification.getName()], observers = [], observer
	
	        for(var i = 0; i < observers_ref.length; i++)
	        {
	            observer = observers_ref[i];
	            observers.push(observer);
	        }
	
	        for(var i = 0; i < observers.length; i++)
	        {
	            observer = observers[i];
	            observer.notifyObserver(notification);
	        }
	    }
	};
	
	/**
	 * Remove the Observer for a given notifyContext from an observer list for
	 * a given Notification name
	 * 
	 * @param {string} notificationName
	 *  Which observer list to remove from
	 * @param {Object} notifyContext
	 *  Remove the Observer with this object as its notifyContext
	 * @return {void}
	 */
	View.prototype.removeObserver = function(notificationName, notifyContext)
	{
	    // SIC
	    var observers = this.observerMap[notificationName];
	    for(var i = 0; i < observers.length; i++)
	    {
	        if(observers[i].compareNotifyContext(notifyContext) == true)
	        {
	            observers.splice(i, 1);
	            break;
	        }
	    }
	
	    if(observers.length == 0)
	    {
	        delete this.observerMap[notificationName];
	    }
	};
	
	/**
	 * Register a Mediator instance with the View.
	 * 
	 * Registers the Mediator so that it can be retrieved by name,
	 * and further interrogates the Mediator for its 
	 * {@link puremvc.Mediator#listNotificationInterests interests}.
	 *
	 * If the Mediator returns any Notification
	 * names to be notified about, an Observer is created encapsulating 
	 * the Mediator instance's 
	 * {@link puremvc.Mediator#handleNotification handleNotification}
	 * method and registering it as an Observer for all Notifications the 
	 * Mediator is interested in.
	 * 
	 * @param {puremvc.Mediator} 
	 *  a reference to the Mediator instance
	 */
	View.prototype.registerMediator = function(mediator)
	{
	    if(this.mediatorMap[mediator.getMediatorName()] != null)
	    {
	        return;
	    }
	
	    mediator.initializeNotifier(this.multitonKey);
	    // register the mediator for retrieval by name
	    this.mediatorMap[mediator.getMediatorName()] = mediator;
	
	    // get notification interests if any
	    var interests = mediator.listNotificationInterests();
	
	    // register mediator as an observer for each notification
	    if(interests.length > 0)
	    {
	        // create observer referencing this mediators handleNotification method
	        var observer = new Observer(mediator.handleNotification, mediator);
	        for(var i = 0; i < interests.length; i++)
	        {
	            this.registerObserver(interests[i], observer);
	        }
	    }
	
	    mediator.onRegister();
	}
	
	/**
	 * Retrieve a Mediator from the View
	 * 
	 * @param {string} mediatorName
	 *  The name of the Mediator instance to retrieve
	 * @return {puremvc.Mediator}
	 *  The Mediator instance previously registered with the given mediatorName
	 */
	View.prototype.retrieveMediator = function(mediatorName)
	{
	    return this.mediatorMap[mediatorName];
	};
	
	/**
	 * Remove a Mediator from the View.
	 * 
	 * @param {string} mediatorName
	 *  Name of the Mediator instance to be removed
	 * @return {puremvc.Mediator}
	 *  The Mediator that was removed from the View
	 */
	View.prototype.removeMediator = function(mediatorName)
	{
	    var mediator = this.mediatorMap[mediatorName];
	    if(mediator)
	    {
	        // for every notification the mediator is interested in...
	        var interests = mediator.listNotificationInterests();
	        for(var i = 0; i < interests.length; i++)
	        {
	            // remove the observer linking the mediator to the notification
	            // interest
	            this.removeObserver(interests[i], mediator);
	        }
	
	        // remove the mediator from the map
	        delete this.mediatorMap[mediatorName];
	
	        // alert the mediator that it has been removed
	        mediator.onRemove();
	    }
	
	    return mediator;
	};
	
	/**
	 * Check if a Mediator is registered or not.
	 * 
	 * @param {string} mediatorName
	 * @return {boolean}
	 *  Whether a Mediator is registered with the given mediatorname
	 */
	View.prototype.hasMediator = function(mediatorName)
	{
	    return this.mediatorMap[mediatorName] != null;
	};
	
	/**
	 * Remove a View instance
	 * 
	 * @return {void}
	 */
	View.removeView = function(key)
	{
	    delete View.instanceMap[key];
	};
	
	/**
	 * @ignore
	 * The Views internal mapping of mediator names to mediator instances
	 *
	 * @type Array
	 * @protected
	 */
	View.prototype.mediatorMap = null;
	
	/**
	 * @ignore
	 * The Views internal mapping of Notification names to Observer lists
	 *
	 * @type Array
	 * @protected
	 */
	View.prototype.observerMap = null;
	
	/**
	 * @ignore
	 * The internal map used to store multiton View instances
	 *
	 * @type Array
	 * @protected
	 */
	View.instanceMap = [];
	
	/**
	 * @ignore
	 * The Views internal multiton key.
	 *
	 * @type string
	 * @protected
	 */
	View.prototype.multitonKey = null;
	
	/**
	 * @ignore
	 * The error message used if an attempt is made to instantiate View directly
	 *
	 * @type string
	 * @protected
	 * @const
	 * @static
	 */
	View.MULTITON_MSG = "View instance for this Multiton key already constructed!";
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Model
	 *
	 * A Multiton Model implementation.
	 *
	 * In PureMVC, the Model class provides
	 * access to model objects (Proxies) by named lookup.
	 *
	 * The Model assumes these responsibilities:
	 *
	 * - Maintain a cache of {@link puremvc.Proxy Proxy}
	 *   instances.
	 * - Provide methods for registering, retrieving, and removing
	 *   {@link puremvc.Proxy Proxy} instances.
	 *
	 * Your application must register 
	 * {@link puremvc.Proxy Proxy} instances with the Model. 
	 * Typically, you use a 
	 * {@link puremvc.SimpleCommand SimpleCommand} 
	 * or
	 * {@link puremvc.MacroCommand MacroCommand} 
	 * to create and register Proxy instances once the Facade has initialized the 
	 * *Core* actors.
	 *
	 * This Model implementation is a Multiton, so you should not call the 
	 * constructor directly, but instead call the 
	 * {@link #getInstance static Multiton Factory method} 
	 * @constructor
	 * @param {string} key
	 *  The Models multiton key
	 * @throws {Error}
	 *  An error is thrown if this multitons key is already in use by another instance
	 */
	function Model(key)
	{
	    if(Model.instanceMap[key])
	    {
	        throw new Error(Model.MULTITON_MSG);
	    }
	
	    this.multitonKey= key;
	    Model.instanceMap[key]= this;
	    this.proxyMap= [];
	    this.initializeModel();
	};
	
	/**
	 * Initialize the Model instance.
	 * 
	 * Called automatically by the constructor, this
	 * is your opportunity to initialize the Singleton
	 * instance in your subclass without overriding the
	 * constructor.
	 * 
	 * @return void
	 */
	Model.prototype.initializeModel= function(){};
	
	
	/**
	 * Model Multiton Factory method.
	 * Note that this method will return null if supplied a null 
	 * or undefined multiton key.
	 *  
	 * @param {string} key
	 *  The multiton key for the Model to retrieve
	 * @return {puremvc.Model}
	 *  the instance for this Multiton key 
	 */
	Model.getInstance= function(key)
	{
		if (null == key)
			return null;
			
	    if(Model.instanceMap[key] == null)
	    {
	        Model.instanceMap[key]= new Model(key);
	    }
	
	    return Model.instanceMap[key];
	};
	
	/**
	 * Register a Proxy with the Model
	 * @param {puremvc.Proxy}
	 */
	Model.prototype.registerProxy= function(proxy)
	{
	    proxy.initializeNotifier(this.multitonKey);
	    this.proxyMap[proxy.getProxyName()]= proxy;
	    proxy.onRegister();
	};
	
	/**
	 * Retrieve a Proxy from the Model
	 * 
	 * @param {string} proxyName
	 * @return {puremvc.Proxy}
	 *  The Proxy instance previously registered with the provided proxyName
	 */
	Model.prototype.retrieveProxy= function(proxyName)
	{
	    return this.proxyMap[proxyName];
	};
	
	/**
	 * Check if a Proxy is registered
	 * @param {string} proxyName
	 * @return {boolean}
	 *  whether a Proxy is currently registered with the given proxyName.
	 */
	Model.prototype.hasProxy= function(proxyName)
	{
	    return this.proxyMap[proxyName] != null;
	};
	
	/**
	 * Remove a Proxy from the Model.
	 * 
	 * @param {string} proxyName
	 *  The name of the Proxy instance to remove
	 * @return {puremvc.Proxy}
	 *  The Proxy that was removed from the Model
	 */
	Model.prototype.removeProxy= function(proxyName)
	{
	    var proxy= this.proxyMap[proxyName];
	    if(proxy)
	    {
	        this.proxyMap[proxyName]= null;
	        proxy.onRemove();
	    }
	
	    return proxy;
	};
	
	/**
	 * @static
	 * Remove a Model instance.
	 * 
	 * @param {string} key
	 * @return {void}
	 */
	Model.removeModel= function(key)
	{
	    delete Model.instanceMap[key];
	};
	
	/**
	 * @ignore
	 * The map used by the Model to store Proxy instances.
	 *
	 * @protected
	 * @type Array
	 */
	Model.prototype.proxyMap= null;
	
	/**
	 * @ignore
	 * The map used by the Model to store multiton instances
	 *
	 * @protected
	 * @static
	 * @type Array
	 */
	Model.instanceMap= [];
	
	/**
	 * @ignore
	 * The Models multiton key.
	 *
	 * @protected
	 * @type string
	 */
	Model.prototype.multitonKey;
	
	/**
	 * @ignore
	 * Message Constants
	 * 
	 * @static
	 * @type {string}
	 */
	Model.MULTITON_MSG= "Model instance for this Multiton key already constructed!";
	/**
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @class puremvc.Controller
	 * 
	 * In PureMVC, the Controller class follows the 'Command and Controller' 
	 * strategy, and assumes these responsibilities:
	 * 
	 * - Remembering which
	 * {@link puremvc.SimpleCommand SimpleCommand}s
	 * or 
	 * {@link puremvc.MacroCommand MacroCommand}s
	 * are intended to handle which 
	 * {@link puremvc.Notification Notification}s
	 * - Registering itself as an 
	 * {@link puremvc.Observer Observer} with
	 * the {@link puremvc.View View} for each 
	 * {@link puremvc.Notification Notification}
	 * that it has an 
	 * {@link puremvc.SimpleCommand SimpleCommand} 
	 * or {@link puremvc.MacroCommand MacroCommand} 
	 * mapping for.
	 * - Creating a new instance of the proper 
	 * {@link puremvc.SimpleCommand SimpleCommand}s
	 * or 
	 * {@link puremvc.MacroCommand MacroCommand}s
	 * to handle a given 
	 * {@link puremvc.Notification Notification} 
	 * when notified by the
	 * {@link puremvc.View View}.
	 * - Calling the command's execute method, passing in the 
	 * {@link puremvc.Notification Notification}.
	 *
	 * Your application must register 
	 * {@link puremvc.SimpleCommand SimpleCommand}s
	 * or {@link puremvc.MacroCommand MacroCommand}s 
	 * with the Controller.
	 *
	 * The simplest way is to subclass 
	 * {@link puremvc.Facade Facade},
	 * and use its 
	 * {@link puremvc.Facade#initializeController initializeController} 
	 * method to add your registrations.
	 *
	 * @constructor
	 * This Controller implementation is a Multiton, so you should not call the 
	 * constructor directly, but instead call the static #getInstance factory method, 
	 * passing the unique key for this instance to it.
	 * @param {string} key
	 * @throws {Error}
	 *  If instance for this Multiton key has already been constructed
	 */
	function Controller(key)
	{
	    if(Controller.instanceMap[key] != null)
	    {
	        throw new Error(Controller.MULTITON_MSG);
	    }
	
	    this.multitonKey= key;
	    Controller.instanceMap[this.multitonKey]= this;
	    this.commandMap= new Array();
	    this.initializeController();
	}
	
	/**
	 * @protected
	 * 
	 * Initialize the multiton Controller instance.
	 *
	 * Called automatically by the constructor.
	 *
	 * Note that if you are using a subclass of View
	 * in your application, you should *also* subclass Controller
	 * and override the initializeController method in the
	 * following way.
	 * 
	 *     MyController.prototype.initializeController= function ()
	 *     {
	 *         this.view= MyView.getInstance(this.multitonKey);
	 *     };
	 * 
	 * @return {void}
	 */
	Controller.prototype.initializeController= function()
	{
	    this.view= View.getInstance(this.multitonKey);
	};
	
	/**
	 * The Controllers multiton factory method. 
	 * Note that this method will return null if supplied a null 
	 * or undefined multiton key. 
	 *
	 * @param {string} key
	 *  A Controller's multiton key
	 * @return {puremvc.Controller}
	 *  the Multiton instance of Controller
	 */
	Controller.getInstance= function(key)
	{
		if (null == key)
			return null;
			
	    if(null == this.instanceMap[key])
	    {
	        this.instanceMap[key]= new this(key);
	    }
	
	    return this.instanceMap[key];
	};
	
	/**
	 * If a SimpleCommand or MacroCommand has previously been registered to handle
	 * the given Notification then it is executed.
	 *
	 * @param {puremvc.Notification} note
	 * @return {void}
	 */
	Controller.prototype.executeCommand= function(note)
	{
	    var commandClassRef= this.commandMap[note.getName()];
	    if(commandClassRef == null)
	        return;
	
	    var commandInstance= new commandClassRef();
	    commandInstance.initializeNotifier(this.multitonKey);
	    commandInstance.execute(note);
	};
	
	/**
	 * Register a particular SimpleCommand or MacroCommand class as the handler for 
	 * a particular Notification.
	 *
	 * If an command already been registered to handle Notifications with this name, 
	 * it is no longer used, the new command is used instead.
	 *
	 * The Observer for the new command is only created if this the irst time a
	 * command has been regisered for this Notification name.
	 *
	 * @param {string} notificationName
	 *  the name of the Notification
	 * @param {Function} commandClassRef
	 *  a command constructor
	 * @return {void}
	 */
	Controller.prototype.registerCommand= function(notificationName, commandClassRef)
	{
	    if(this.commandMap[notificationName] == null)
	    {
	        this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
	    }
	
	    this.commandMap[notificationName]= commandClassRef;
	};
	
	/**
	 * Check if a command is registered for a given Notification
	 *
	 * @param {string} notificationName
	 * @return {boolean}
	 *  whether a Command is currently registered for the given notificationName.
	 */
	Controller.prototype.hasCommand= function(notificationName)
	{
	    return this.commandMap[notificationName] != null;
	};
	
	/**
	 * Remove a previously registered command to
	 * {@link puremvc.Notification Notification}
	 * mapping.
	 *
	 * @param {string} notificationName
	 *  the name of the Notification to remove the command mapping for
	 * @return {void}
	 */
	Controller.prototype.removeCommand= function(notificationName)
	{
	    if(this.hasCommand(notificationName))
	    {
	        this.view.removeObserver(notificationName, this);
	        this.commandMap[notificationName]= null;
	    }
	};
	
	/**
	 * @static
	 * Remove a Controller instance.
	 *
	 * @param {string} key 
	 *  multitonKey of Controller instance to remove
	 * @return {void}
	 */
	Controller.removeController= function(key)
	{
	    delete this.instanceMap[key];
	};
	
	/**
	 * Local reference to the Controller's View
	 * 
	 * @protected
	 * @type {puremvc.View}
	 */
	Controller.prototype.view= null;
	
	/**
	 * Note name to command constructor mappings
	 * 
	 * @protected
	 * @type {Object}
	 */
	Controller.prototype.commandMap= null;
	
	/**
	 * The Controller's multiton key
	 * 
	 * @protected
	 * @type {string}
	 */
	Controller.prototype.multitonKey= null;
	
	/**
	 * Multiton key to Controller instance mappings
	 * 
	 * @static
	 * @protected
	 * @type {Object}
	 */
	Controller.instanceMap= [];
	
	/**
	 * @ignore
	 * 
	 * Message constants
	 * @static
	 * @protected
	 * @type {string}
	 */
	Controller.MULTITON_MSG= "controller key for this Multiton key already constructed"
	/*
	 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
	 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * 
	 * @hide
	 * A an internal helper class used to assist classlet implementation. This
	 * class is not accessible by client code.
	 */
	var OopHelp=
	{
	    /*
	     * @private
	     * A reference to the global scope. We use this rather than window
	     * in order to support both browser based and non browser baed 
	     * JavaScript interpreters.
	     * @type {Object}
	     */
		global: (function(){return this})()
	    
	    /*
	     * @private
	     * Extend one Function's prototype by another, emulating classic
	     * inheritance.
	     * 
	     * @param {Function} child
	     *  The Function to extend (subclass)
	     * 
	     * @param {Function} parent
	     *  The Function to extend from (superclass)
	     * 
	     * @return {Function}
	     * 
	     *  A reference to the extended Function (subclass)
	     */
	,   extend: function (child, parent)
	    {
	        if ('function' !== typeof child)
	            throw new TypeError('#extend- child should be Function');            
	        
	        if ('function' !== typeof parent)
	            throw new TypeError('#extend- parent should be Function');
	            
	        if (parent === child)
	            return;
	            
	        var Transitive= new Function;
	        Transitive.prototype= parent.prototype;
	        child.prototype= new Transitive;
	        return child.prototype.constructor= child;
	    }
	    
	    /*
	     * @private
	     * Decoarate one object with the properties of another. 
	     * 
	     * @param {Object} object
	     *  The object to decorate.
	     * 
	     * @param {Object} traits
	     *  The object providing the properites that the first object
	     *  will be decorated with. Note that only properties defined on 
	     *  this object will be copied- i.e. inherited properties will
	     *  be ignored.
	     * 
	     * @return {Object}
	     *  THe decorated object (first argument)
	     */
	,   decorate: function (object, traits)
	    {   
	        for (var accessor in traits)
	        {
	            object[accessor]= traits[accessor];
	        }    
	        
	        return object;
	    }
	};
	
	
	/**
	 * @member puremvc
	 * 
	 * Declare a namespace and optionally make an Object the referent
	 * of that namespace.
	 * 
	 *     console.assert(null == window.tld, 'No tld namespace');
	 *     // declare the tld namespace
	 *     puremvc.declare('tld');
	 *     console.assert('object' === typeof tld, 'The tld namespace was declared');
	 * 
	 *     // the method returns a reference to last namespace node in a created hierarchy
	 *     var reference= puremvc.declare('tld.domain.app');
	 *     console.assert(reference === tld.domain.app)
	 *    
	 *     // of course you can also declare your own objects as well
	 *     var AppConstants=
	 *         {
	 * 	           APP_NAME: 'tld.domain.app.App'
	 *         };
	 * 
	 *     puremvc.declare('tld.domain.app.AppConstants', AppConstants);
	 *     console.assert(AppConstants === tld.domain.app.AppConstants
	 * 	   , 'AppConstants was exported to the namespace');
	 * 
	 * Note that you can also #declare within a closure. That way you
	 * can selectively export Objects to your own namespaces without
	 * leaking variables into the global scope.
	 *    
	 *     (function(){
	 *         // this var is not accessible outside of this
	 *         // closures call scope
	 *         var hiddenValue= 'defaultValue';
	 * 
	 *         // export an object that references the hidden
	 *         // variable and which can mutate it
	 *         puremvc.declare
	 *         (
	 *              'tld.domain.app.backdoor'
	 * 
	 *         ,    {
	 *                  setValue: function (value)
	 *                  {
	 *                      // assigns to the hidden var
	 *                      hiddenValue= value;
	 *                  }
	 * 
	 *         ,        getValue: function ()
	 *                  {
	 *                      // reads from the hidden var
	 *                      return hiddenValue;
	 *                  }
	 *              }
	 *         );
	 *     })();
	 *     // indirectly retrieve the hidden variables value
	 *     console.assert('defaultValue' === tld.domain.app.backdoor.getValue());
	 *     // indirectly set the hidden variables value
	 *     tld.domain.app.backdoor.setValue('newValue');
	 *     // the hidden var was mutated
	 *     console.assert('newValue' === tld.domain.app.backdoor.getValue());
	 * 
	 * On occasion, primarily during testing, you may want to use declare, 
	 * but not have the global object be the namespace root. In these cases you
	 * can supply the optional third scope argument.
	 * 
	 *     var localScope= {}
	 *     ,   object= {}
	 * 
	 *     puremvc.declare('mock.object', object, localScope);
	 * 
	 *     console.assert(null == window.mock, 'mock namespace is not in global scope');
	 *     console.assert(object === localScope.mock.object, 'mock.object is available in localScope');    
	 * 
	 * @param {string} string
	 *  A qualified object name, e.g. 'com.example.Class'
	 * 
	 * @param {Object} [object]
	 *  An object to make the referent of the namespace. 
	 * 
	 * @param {Object} [scope]
	 *  The namespace's root node. If not supplied, the global
	 *  scope will be namespaces root node.
	 * 
	 * @return {Object}
	 * 
	 *  A reference to the last node of the Object hierarchy created.
	 */
	function declare (qualifiedName, object, scope)
	{
	    var nodes= qualifiedName.split('.')
	    ,   node= scope || OopHelp.global
	    ,   lastNode
	    ,   newNode
	    ,   nodeName;
	                
	    for (var i= 0, n= nodes.length; i < n; i++)
	    {
	        lastNode= node;
	        nodeName= nodes[i];
	        
	        node= (null == node[nodeName] ? node[nodeName] = {} : node[nodeName]);
	    }
	                    
	    if (null == object)
	        return node;
	                        
	    return lastNode[nodeName]= object;
	};
	
	
	
	
	/**
	 * @member puremvc
	 * 
	 * Define a new classlet. Current editions of JavaScript do not have classes,
	 * but they can be emulated, and this method does this for you, saving you
	 * from having to work with Function prototype directly. The method does
	 * not extend any Native objects and is entirely opt in. Its particularly
	 * usefull if you want to make your PureMvc applications more portable, by
	 * decoupling them from a specific OOP abstraction library.
	 * 
	 * 
	 *     puremvc.define
	 *     (
	 *         // the first object supplied is a class descriptor. None of these
	 *         // properties are added to your class, the exception being the
	 *         // constructor property, which if supplied, will be your classes
	 *         // constructor.
	 *         {
	 *             // your classes namespace- if supplied, it will be 
	 *             // created for you
	 *             name: 'com.example.UserMediator'
	 * 
	 *             // your classes parent class. If supplied, inheritance 
	 *             // will be taken care of for you
	 *         ,   parent: puremvc.Mediator
	 * 
	 *             // your classes constructor. If not supplied, one will be 
	 *             // created for you
	 *         ,   constructor: function UserMediator (component)
	 *             {
	 *                  puremvc.Mediator.call(this, this.constructor.NAME, component);  
	 *             }
	 *         }
	 *         
	 *         // the second object supplied defines your class traits, that is
	 *         // the properties that will be defined on your classes prototype
	 *         // and thereby on all instances of this class
	 *     ,   {
	 *             businessMethod: function ()
	 *             {
	 *                 // impl 
	 *             }
	 *         }
	 * 
	 *         // the third object supplied defines your classes 'static' traits
	 *         // that is, the methods and properties which will be defined on
	 *         // your classes constructor
	 *     ,   {
	 *             NAME: 'userMediator'
	 *         }
	 *     );
	 * 
	 * @param {Object} [classinfo]
	 *  An object describing the class. This object can have any or all of
	 *  the following properties:
	 * 
	 *  - name: String  
	 *      The classlets name. This can be any arbitrary qualified object
	 *      name. 'com.example.Classlet' or simply 'MyClasslet' for example 
	 *      The method will automatically create an object hierarchy refering
	 *      to your class for you. Note that you will need to capture the 
	 *      methods return value to retrieve a reference to your class if the
	 *      class name property is not defined.
	
	 *  - parent: Function
	 *      The classlets 'superclass'. Your class will be extended from this
	 *      if supplied.
	 * 
	 *  - constructor: Function
	 *      The classlets constructor. Note this is *not* a post construct 
	 *      initialize method, but your classes constructor Function.
	 *      If this attribute is not defined, a constructor will be created for 
	 *      you automatically. If you have supplied a parent class
	 *      value and not defined the classes constructor, the automatically
	 *      created constructor will invoke the super class constructor
	 *      automatically. If you have supplied your own constructor and you
	 *      wish to invoke it's super constructor, you must do this manually, as
	 *      there is no reference to the classes parent added to the constructor
	 *      prototype.
	 *      
	 *  - scope: Object.
	 *      For use in advanced scenarios. If the name attribute has been supplied,
	 *      this value will be the root of the object hierarchy created for you.
	 *      Use it do define your own class hierarchies in private scopes,
	 *      accross iFrames, in your unit tests, or avoid collision with third
	 *      party library namespaces.
	 * 
	 * @param {Object} [traits]
	 *  An Object, the properties of which will be added to the
	 *  class constructors prototype.
	 * 
	 * @param {Object} [staitcTraits]
	 *  An Object, the properties of which will be added directly
	 *  to this class constructor
	 * 
	 * @return {Function}
	 *  A reference to the classlets constructor
	 */
	function define (classInfo, traits, staticTraits)
	{
	    if (!classInfo)
	    {
	        classInfo= {}
	    }
	
	    var className= classInfo.name
	    ,   classParent= classInfo.parent
	    ,   doExtend= 'function' === typeof classParent
	    ,   classConstructor
	    ,   classScope= classInfo.scope || null
	    ,   prototype
	
	    if ('parent' in classInfo && !doExtend)
	    {
	        throw new TypeError('Class parent must be Function');
	    }
	        
	    if (classInfo.hasOwnProperty('constructor'))
	    {
	        classConstructor= classInfo.constructor
	        if ('function' !== typeof classConstructor)
	        {
	            throw new TypeError('Class constructor must be Function')
	        }   
	    }
	    else // there is no constructor, create one
	    {
	        if (doExtend) // ensure to call the super constructor
	        {
	            classConstructor= function ()
	            {
	                classParent.apply(this, arguments);
	            }
	        }
	        else // just create a Function
	        {
	            classConstructor= new Function;
	        } 
	    }
	
	    if (doExtend)
	    {
	        OopHelp.extend(classConstructor, classParent);
	    }
	    
	    if (traits)
	    {
	        prototype= classConstructor.prototype
	        OopHelp.decorate(prototype, traits);
	        // reassign constructor 
	        prototype.constructor= classConstructor;
	    }
	    
	    if (staticTraits)
	    {
	        OopHelp.decorate(classConstructor, staticTraits)
	    }
	    
	    if (className)
	    {
	        if ('string' !== typeof className)
	        {
	            throw new TypeError('Class name must be primitive string');
	        }
	            
	        declare (className, classConstructor, classScope);
	    }    
	    
	    return classConstructor;            
	};
	
	
		
	 	/* implementation end */
	 	 
	 	// define the puremvc global namespace and export the actors
	var puremvc =
	 	{
	 		View: View
	 	,	Model: Model
	 	,	Controller: Controller
	 	,	SimpleCommand: SimpleCommand
	 	,	MacroCommand: MacroCommand
	 	,	Facade: Facade
	 	,	Mediator: Mediator
	 	,	Observer: Observer
	 	,	Notification: Notification
	 	,	Notifier: Notifier
	 	,	Proxy: Proxy
	 	,	define: define
	 	,	declare: declare
	 	};
	
	
	
	module.exports = puremvc;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview
	 * PureMVC State Machine Utility JS Native Port by Saad Shams
	 * Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
	 * Reuse governed by Creative Commons Attribution 3.0 
	 * http://creativecommons.org/licenses/by/3.0/us/
	 * @author saad.shams@puremvc.org 
	 */
	
	var puremvc = __webpack_require__( 94 );
	    
	/**
	 * Constructor
	 *
	 * Defines a State.
	 * @method State
	 * @param {string} name id the id of the state
	 * @param {string} entering an optional notification name to be sent when entering this state
	 * @param {string} exiting an optional notification name to be sent when exiting this state
	 * @param {string} changed an optional notification name to be sent when fully transitioned to this state
	 * @return 
	 */
	
	function State(name, entering, exiting, changed) {  
	    this.name = name;
	    if(entering) this.entering = entering;
	    if(exiting) this.exiting = exiting;
	    if(changed) this.changed = changed;
	    this.transitions = {};
	}
	
	/**
	 * Define a transition.
	 * @method defineTrans
	 * @param {string} action the name of the StateMachine.ACTION Notification type.
	 * @param {string} target the name of the target state to transition to.
	 * @return 
	 */
	State.prototype.defineTrans = function(action, target) {
	    if(this.getTarget(action) != null) return;
	    this.transitions[action] = target;
	}
	
	/**
	 * Remove a previously defined transition.
	 * @method removeTrans
	 * @param {string} action
	 * @return 
	 */
	State.prototype.removeTrans = function(action) {
	    delete this.transitions[action];
	}
	
	/**
	 * Get the target state name for a given action.
	 * @method getTarget
	 * @param {string} action
	 * @return State
	 */
	/**
	 * 
	 */
	State.prototype.getTarget = function(action) {
	    return this.transitions[action] ? this.transitions[action] : null;
	}
	
	// The state name
	State.prototype.name = null;
	
	// The notification to dispatch when entering the state
	State.prototype.entering = null;
	
	// The notification to dispatch when exiting the state
	State.prototype.exiting = null;
	
	// The notification to dispatch when the state has actually changed
	State.prototype.changed = null;
	
	/**
	 *  Transition map of actions to target states
	 */ 
	State.prototype.transitions = null;
	    
	
	    
	 /**
	 * A Finite State Machine implimentation.
	 * <P>
	 * Handles regisistration and removal of state definitions, 
	 * which include optional entry and exit commands for each 
	 * state.</P>
	 */
	
	/**
	 * Constructor
	 *
	 * @method StateMachine
	 * @return 
	 */
	function StateMachine() {
	    puremvc.Mediator.call(this, StateMachine.NAME, null);
	    this.states = {};
	}
	    
	StateMachine.prototype = new puremvc.Mediator;
	StateMachine.prototype.constructor = StateMachine;
	
	/**
	 * Transitions to initial state once registered with Facade
	 * @method onRegister
	 * @return 
	 */
	StateMachine.prototype.onRegister = function() {
	    if(this.initial) this.transitionTo(this.initial, null);
	}
	
	/**
	 * Registers the entry and exit commands for a given state.
	 * @method registerState
	 * @param {State} state the state to which to register the above commands
	 * @param {boolean} initial boolean telling if this is the initial state of the system
	 * @return 
	 */
	StateMachine.prototype.registerState = function(state, initial) {
	    if(state == null || this.states[state.name] != null) return;
	    this.states[state.name] = state;
	    if(initial) this.initial = state;
	}
	
	/**
	 * Remove a state mapping. Removes the entry and exit commands for a given state as well as the state mapping itself.
	 * @method removeState
	 * @param {string} stateName
	 * @return 
	 */
	StateMachine.prototype.removeState = function(stateName) {
	    var state = this.states[stateName];
	    if(state == null) return;
	    this.states[stateName] = null;
	}
	
	/**
	 * Transitions to the given state from the current state.
	 * <P>
	 * Sends the <code>exiting</code> notification for the current state 
	 * followed by the <code>entering</code> notification for the new state.
	 * Once finally transitioned to the new state, the <code>changed</code> 
	 * notification for the new state is sent.</P>
	 * <P>
	 * If a data parameter is provided, it is included as the body of all
	 * three state-specific transition notes.</P>
	 * <P>
	 * Finally, when all the state-specific transition notes have been
	 * sent, a <code>StateMachine.CHANGED</code> note is sent, with the
	 * new <code>State</code> object as the <code>body</code> and the name of the 
	 * new state in the <code>type</code>.
	 *
	 * @method transitionTo
	 * @param {State} nextState the next State to transition to.
	 * @param {Object} data is the optional Object that was sent in the <code>StateMachine.ACTION</code> notification body
	 * @return 
	 */
	StateMachine.prototype.transitionTo = function(nextState, data) {
	    // Going nowhere?
	    if(nextState == null) return;
	    
	    // Clear the cancel flag
	    this.canceled = false;
	    
	    // Exit the current State 
	    if(this.getCurrentState() && this.getCurrentState().exiting) 
	        this.sendNotification(this.getCurrentState().exiting, data, nextState.name);
	    
	    // Check to see whether the exiting guard has canceled the transition
	    if(this.canceled) {
	        this.canceled = false;
	        return;
	    }
	    
	    // Enter the next State 
	    if(nextState.entering)
	        this.sendNotification(nextState.entering, data);
	    
	    // Check to see whether the entering guard has canceled the transition
	    if(this.canceled) {
	        this.canceled = false;
	        return;
	    }
	    
	    // change the current state only when both guards have been passed
	    this.setCurrentState(nextState);
	    
	    // Send the notification configured to be sent when this specific state becomes current 
	    if(nextState.changed) {
	        this.sendNotification(this.getCurrentState().changed, data);
	    }
	    
	    // Notify the app generally that the state changed and what the new state is 
	    this.sendNotification(StateMachine.CHANGED, this.getCurrentState(), this.getCurrentState().name);
	}
	
	/**
	 * Notification interests for the StateMachine.
	 * @method listNotificationInterests
	 * @return {Array} Array of Notifications
	 */
	
	StateMachine.prototype.listNotificationInterests = function() {
	    return [
	        StateMachine.ACTION,
	        StateMachine.CANCEL
	    ];
	}
	
	/**
	 * Handle notifications the <code>StateMachine</code> is interested in.
	 * <P>
	 * <code>StateMachine.ACTION</code>: Triggers the transition to a new state.<BR>
	 * <code>StateMachine.CANCEL</code>: Cancels the transition if sent in response to the exiting note for the current state.<BR>
	 *
	 * @method handleNotification
	 * @param {Notification} notification
	 * @return 
	 */
	StateMachine.prototype.handleNotification = function(notification) {
	    switch(notification.getName()) {
	        case StateMachine.ACTION:
	            var action = notification.getType();
	            var target = this.getCurrentState().getTarget(action);
	            var newState = this.states[target];
	            if(newState) this.transitionTo(newState, notification.getBody());
	            break;
	            
	        case StateMachine.CANCEL:
	            this.canceled = true;
	            break;
	    }
	}
	
	/**
	 * Get the current state.
	 * @method getCurrentState
	 * @return a State defining the machine's current state
	 */
	StateMachine.prototype.getCurrentState = function() {
	    return this.viewComponent;
	}
	
	/**
	 * Set the current state.
	 * @method setCurrentState
	 * @param {State} state
	 * @return 
	 */
	StateMachine.prototype.setCurrentState = function(state) {
	    this.viewComponent = state;
	}
	
	/**
	 * Map of States objects by name.
	 */
	StateMachine.prototype.states = null;
	
	/**
	 * The initial state of the FSM.
	 */
	StateMachine.prototype.initial = null;
	
	/**
	 * The transition has been canceled.
	 */
	StateMachine.prototype.canceled = null;
	    
	StateMachine.NAME = "StateMachine";
	
	/**
	 * Action Notification name. 
	 */ 
	StateMachine.ACTION = StateMachine.NAME + "/notes/action";
	
	/**
	 *  Changed Notification name  
	 */ 
	StateMachine.CHANGED = StateMachine.NAME + "/notes/changed";
	
	/**
	 *  Cancel Notification name  
	 */ 
	StateMachine.CANCEL = StateMachine.NAME + "/notes/cancel";
	    
	    
	/**
	 * Creates and registers a StateMachine described in JSON.
	 * 
	 * <P>
	 * This allows reconfiguration of the StateMachine 
	 * without changing any code, as well as making it 
	 * easier than creating all the <code>State</code> 
	 * instances and registering them with the 
	 * <code>StateMachine</code> at startup time.
	 * 
	 * @ see State
	 * @ see StateMachine
	 */
	
	/**
	 * Constructor
	 * @method FSMInjector
	 * @param {Object} fsm JSON Object
	 * @return 
	 */
	function FSMInjector(fsm) {
	    puremvc.Notifier.call(this);
	    this.fsm = fsm;
	}
	  
	FSMInjector.prototype = new puremvc.Notifier;
	FSMInjector.prototype.constructor = FSMInjector;
	
	/**
	 * Inject the <code>StateMachine</code> into the PureMVC apparatus.
	 * <P>
	 * Creates the <code>StateMachine</code> instance, registers all the states
	 * and registers the <code>StateMachine</code> with the <code>IFacade</code>.
	 * @method inject
	 * @return 
	 */
	FSMInjector.prototype.inject = function() {
	    // Create the StateMachine
	    var stateMachine = new puremvc.statemachine.StateMachine();
	    
	    // Register all the states with the StateMachine
	    var states = this.getStates();
	    for(var i=0; i<states.length; i++) {
	        stateMachine.registerState(states[i], this.isInitial(states[i].name));
	    }
	    
	    // Register the StateMachine with the facade
	    this.facade.registerMediator(stateMachine);
	}
	
	/**
	 * Get the state definitions.
	 * <P>
	 * Creates and returns the array of State objects 
	 * from the FSM on first call, subsequently returns
	 * the existing array.</P>
	 *
	 * @method getStates
	 * @return {Array} Array of States
	 */
	FSMInjector.prototype.getStates = function() {
	    if(this.stateList == null) {
	        this.stateList = [];
	
	        var stateDefs = this.fsm.state ? this.fsm.state : [];
	        for(var i=0; i<stateDefs.length; i++) {
	            var stateDef = stateDefs[i];
	            var state = this.createState(stateDef);
	            this.stateList.push(state);
	        }
	    }
	    return this.stateList;
	}
	
	/**
	 * Creates a <code>State</code> instance from its JSON definition.
	 * @method createState
	 * @param {Object} stateDef JSON Object
	 * @return {State} 
	 */
	/**
	
	 */
	FSMInjector.prototype.createState = function(stateDef) {
	    // Create State object
	    var name = stateDef['@name'];
	    var exiting = stateDef['@exiting'];
	    var entering = stateDef['@entering'];
	    var changed = stateDef['@changed'];
	    var state = new puremvc.statemachine.State(name, entering, exiting, changed);
	    
	    // Create transitions
	    var transitions = stateDef.transition ? stateDef.transition : [];
	    for(var i=0; i<transitions.length; i++) {
	        var transDef = transitions[i];
	        state.defineTrans(transDef['@action'], transDef['@target']);
	    }
	    return state;
	}
	
	/**
	 * Is the given state the initial state?
	 * @method isInitial
	 * @param {string} stateName
	 * @return {boolean}
	 */
	FSMInjector.prototype.isInitial = function(stateName) {
	    var initial = this.fsm['@initial'];
	    return stateName == initial;
	}
	
	// The JSON FSM definition
	FSMInjector.prototype.fsm = null;
	
	// The List of State objects
	FSMInjector.prototype.stateList = null;
	
	
	puremvc.statemachine =
	{
	    State: State
	    ,	StateMachine: StateMachine
	    ,	FSMInjector: FSMInjector
	};
	
	module.exports = puremvc.statemachine;

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Created by leo on 2016/9/12.
	 */
	
	'use strict';
	
	module.exports = {
	  APP: {
	    KEY: 'cocosDemo'
	  },
	  CMD: {
	    START_APP: 'StartApp',
	    RUN_SCENE: 'RunScene',
	    PUSH_SCENE: 'PushScene',
	    POP_SCENE: 'PopScene',
	
	    SUSHI_TOUCH: 'SushiTouch'
	  },
	  MVC: {
	    DIRECTOR: 'Director',
	    LOADER_SCENE: 'LoaderScene',
	    START_SCENE: 'StartScene',
	    PLAY_SCENE: 'PlayScene'
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/8/1.
	 */
	
	'use strict';
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(5);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getPrototypeOf = __webpack_require__(76);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var puremvc = __webpack_require__(93);
	var env = __webpack_require__(96);
	var ConnectProxy = __webpack_require__(98);
	var DirectorMediator = __webpack_require__(136);
	var SceneMediator = __webpack_require__(137);
	
	module.exports = function (_puremvc$SimpleComman) {
	  (0, _inherits3.default)(StartAppCommand, _puremvc$SimpleComman);
	
	  function StartAppCommand() {
	    (0, _classCallCheck3.default)(this, StartAppCommand);
	    return (0, _possibleConstructorReturn3.default)(this, (StartAppCommand.__proto__ || (0, _getPrototypeOf2.default)(StartAppCommand)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(StartAppCommand, [{
	    key: 'execute',
	
	    /**
	     * @override
	     * @param notification
	     */
	    value: function execute(notify) {
	      if (!(notify instanceof puremvc.Notification)) {
	        throw new TypeError('Value of argument "notify" violates contract.\n\nExpected:\npuremvc.Notification\n\nGot:\n' + _inspect(notify));
	      }
	
	      // register proxy
	      this.facade.registerProxy(new ConnectProxy());
	
	      // register mediator
	      this.facade.registerMediator(new DirectorMediator(env.MVC.DIRECTOR));
	      // this.facade.registerMediator(new SceneMediator(env.MVC.LOADER_SCENE));
	      // this.facade.registerMediator(new SceneMediator(env.MVC.START_SCENE));
	      // this.facade.registerMediator(new SceneMediator(env.MVC.PLAY_SCENE));
	
	      // run first scene
	      this.facade.sendNotification(env.CMD.RUN_SCENE, { name: env.MVC.LOADER_SCENE });
	    }
	  }]);
	  return StartAppCommand;
	}(puremvc.SimpleCommand);
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/8/12.
	 */
	
	'use strict';
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _promise = __webpack_require__(99);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _getPrototypeOf = __webpack_require__(76);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var puremvc = __webpack_require__(93);
	var pomelo = __webpack_require__(115);
	
	module.exports = function (_puremvc$Proxy) {
	  (0, _inherits3.default)(ConnectProxy, _puremvc$Proxy);
	
	  function ConnectProxy() {
	    (0, _classCallCheck3.default)(this, ConnectProxy);
	    return (0, _possibleConstructorReturn3.default)(this, (ConnectProxy.__proto__ || (0, _getPrototypeOf2.default)(ConnectProxy)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ConnectProxy, [{
	    key: 'onRegister',
	
	    /**
	     * @override
	     */
	    value: function onRegister() {
	      var uid = 1000666;
	      var key = 'test';
	
	      // connect to gate
	      pomelo.init({
	        host: '127.0.0.1',
	        port: 3014,
	        log: true
	      }).then(function () {
	        // query entry
	        return pomelo.request('gate.default.queryEntry', { uid: uid });
	      }).then(function (rsp) {
	        // check return
	        if (!rsp || rsp.error !== 0) {
	          return _promise2.default.reject('request queryEntry failed, ' + (0, _stringify2.default)(rsp));
	        }
	
	        // disconn
	        pomelo.disconnect();
	
	        // connect to conn
	        var host = rsp.host;
	        var port = rsp.port;
	
	        return pomelo.init({ host: host, port: port, log: true });
	      }).then(function () {
	        // request login
	        return pomelo.request('conn.default.login', { uid: uid, key: key });
	      }).then(function (rsp) {
	        // check return
	        if (!rsp || rsp.error !== 0) {
	          return _promise2.default.reject('request login failed, ' + (0, _stringify2.default)(rsp));
	        }
	
	        // info
	        cc.log('login success');
	        return _promise2.default.resolve();
	      }).catch(function (errStr) {
	        cc.log('catch error, ' + errStr);
	      });
	    }
	  }]);
	  return ConnectProxy;
	}(puremvc.Proxy);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(42);
	__webpack_require__(55);
	__webpack_require__(101);
	module.exports = __webpack_require__(4).Promise;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(45)
	  , global             = __webpack_require__(22)
	  , ctx                = __webpack_require__(27)
	  , classof            = __webpack_require__(102)
	  , $export            = __webpack_require__(26)
	  , isObject           = __webpack_require__(32)
	  , aFunction          = __webpack_require__(28)
	  , anInstance         = __webpack_require__(103)
	  , forOf              = __webpack_require__(104)
	  , speciesConstructor = __webpack_require__(108)
	  , task               = __webpack_require__(109).set
	  , microtask          = __webpack_require__(111)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(53)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(112)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(52)($Promise, PROMISE);
	__webpack_require__(113)(PROMISE);
	Wrapper = __webpack_require__(4)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(114)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(15)
	  , TAG = __webpack_require__(53)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(27)
	  , call        = __webpack_require__(105)
	  , isArrayIter = __webpack_require__(106)
	  , anObject    = __webpack_require__(31)
	  , toLength    = __webpack_require__(17)
	  , getIterFn   = __webpack_require__(107)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(31);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(47)
	  , ITERATOR   = __webpack_require__(53)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(102)
	  , ITERATOR  = __webpack_require__(53)('iterator')
	  , Iterators = __webpack_require__(47);
	module.exports = __webpack_require__(4).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(31)
	  , aFunction = __webpack_require__(28)
	  , SPECIES   = __webpack_require__(53)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(27)
	  , invoke             = __webpack_require__(110)
	  , html               = __webpack_require__(51)
	  , cel                = __webpack_require__(36)
	  , global             = __webpack_require__(22)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(15)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(22)
	  , macrotask = __webpack_require__(109).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(15)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(29);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(22)
	  , core        = __webpack_require__(4)
	  , dP          = __webpack_require__(30)
	  , DESCRIPTORS = __webpack_require__(34)
	  , SPECIES     = __webpack_require__(53)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(53)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _promise = __webpack_require__(99);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _setPrototypeOf = __webpack_require__(86);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by leo on 2016/8/30.
	 */
	
	__webpack_require__(116);
	
	// this is a pomelo wrapper for promise-like api
	var pomelo = window.pomelo;
	var pomeloWrapper = (0, _setPrototypeOf2.default)({}, window.pomelo);
	
	pomeloWrapper.init = function (params) {
	  return new _promise2.default(function (resolve, reject) {
	    return pomelo.init(params, resolve);
	  });
	};
	
	pomeloWrapper.request = function (route, msg) {
	  return new _promise2.default(function (resolve, reject) {
	    return pomelo.request(route, msg, resolve);
	  });
	};
	
	pomeloWrapper.notify = function (route, params) {
	  return new _promise2.default(function (resolve, reject) {
	    return pomelo.notify(route, params);
	  });
	};
	
	pomeloWrapper.on = function (route) {
	  return new _promise2.default(function (resolve, reject) {
	    return pomelo.on(route, resolve);
	  });
	};
	
	module.exports = pomeloWrapper;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Util = __webpack_require__(117);
	
	function checkCocos2dJsb() {
		if (typeof cc !== 'undefined' && cc && cc.sys && cc.sys.isNative) {
			return true;
		}
	
		return false;
	}
	
	var Root;
	(function() {
		Root = this;
	}());
	
	if (checkCocos2dJsb()) {
		var console = cc;
		Root.console = console;
		cc.formatStr = Util.format;
	}
	
	var EventEmitter = __webpack_require__(121).EventEmitter;
	Root.EventEmitter = EventEmitter;
	var protobuf = __webpack_require__(122);
	Root.protobuf = protobuf;
	var Protocol = __webpack_require__(133);
	Root.Protocol = Protocol;
	var pomelo = __webpack_require__(135);
	Root.pomelo = pomelo;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(119);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(120);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(118)))

/***/ },
/* 118 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    } else {
	        return cachedSetTimeout.call(null, fun, 0);
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        clearTimeout(marker);
	    } else {
	        cachedClearTimeout.call(null, marker);
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


/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 120 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 121 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var encoder = __webpack_require__(127);
	var decoder = __webpack_require__(131);
	var parser = __webpack_require__(132);
	
	var Protobuf = module.exports;
	
	/**
	 * [encode the given message, return a Buffer represent the message encoded by protobuf]
	 * @param  {[type]} key The key to identify the message type.
	 * @param  {[type]} msg The message body, a js object.
	 * @return {[type]} The binary encode result in a Buffer.
	 */
	Protobuf.encode = function(key, msg){
		return encoder.encode(key, msg);
	};
	
	Protobuf.encode2Bytes = function(key, msg){
		var buffer = this.encode(key, msg);
		if(!buffer || !buffer.length){
			console.warn('encode msg failed! key : %j, msg : %j', key, msg);
			return null;
		}
		var bytes = new Uint8Array(buffer.length);
		for(var offset = 0; offset < buffer.length; offset++){
			bytes[offset] = buffer.readUInt8(offset);
		}
	
		return bytes;
	};
	
	Protobuf.encodeStr = function(key, msg, code){
		code = code || 'base64';
		var buffer = Protobuf.encode(key, msg);
		return !!buffer?buffer.toString(code):buffer;
	};
	
	Protobuf.decode = function(key, msg){
		return decoder.decode(key, msg);
	};
	
	Protobuf.decodeStr = function(key, str, code){
		code = code || 'base64';
		var buffer = new Buffer(str, code);
	
		return !!buffer?Protobuf.decode(key, buffer):buffer;
	};
	
	Protobuf.parse = function(json){
		return parser.parse(json);
	};
	
	Protobuf.setEncoderProtos = function(protos){
		encoder.init(protos);
	};
	
	Protobuf.setDecoderProtos = function(protos){
		decoder.init(protos);
	};
	
	Protobuf.init = function(opts){
		//On the serverside, use serverProtos to encode messages send to client
		encoder.init(opts.encoderProtos);
	
		//On the serverside, user clientProtos to decode messages receive from clients
		decoder.init(opts.decoderProtos);
	
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123).Buffer))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(124)
	var ieee754 = __webpack_require__(125)
	var isArray = __webpack_require__(126)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var rootParent = {}
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }
	
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }
	
	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }
	
	  // Unusual.
	  return fromObject(this, arg)
	}
	
	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'
	
	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)
	
	  that.write(string, encoding)
	  return that
	}
	
	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)
	
	  if (isArray(object)) return fromArray(that, object)
	
	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }
	
	  if (object.length) return fromArrayLike(that, object)
	
	  return fromJsonObject(that, object)
	}
	
	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}
	
	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0
	
	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)
	
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}
	
	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }
	
	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent
	
	  return that
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)
	
	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break
	
	    ++i
	  }
	
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0
	
	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1
	
	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)
	
	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }
	
	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'binary':
	        return binaryWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  if (newBuf.length) newBuf.parent = this.parent || this
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }
	
	  return len
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new RangeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set
	
	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123).Buffer, (function() { return this; }())))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 125 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 126 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var codec = __webpack_require__(128);
	var constant = __webpack_require__(129);
	var util = __webpack_require__(130);
	
	var Encoder = module.exports;
	
	Encoder.init = function(protos){
		this.protos = protos || {};
	};
	
	Encoder.encode = function(route, msg){
		if(!route || !msg){
			console.warn('Route or msg can not be null! route : %j, msg %j', route, msg);
			return null;
		}
	
		//Get protos from protos map use the route as key
		var protos = this.protos[route];
	
		//Check msg
		if(!checkMsg(msg, protos)){
			console.warn('check msg failed! msg : %j, proto : %j', msg, protos);
			return null;
		}
	
		//Set the length of the buffer 2 times bigger to prevent overflow
		var length = Buffer.byteLength(JSON.stringify(msg))*2;
	
		//Init buffer and offset
		var buffer = new Buffer(length);
		var offset = 0;
	
		if(!!protos){
			offset = encodeMsg(buffer, offset, protos, msg);
			if(offset > 0){
				return buffer.slice(0, offset);
			}
		}
	
		return null;
	};
	
	/**
	 * Check if the msg follow the defination in the protos
	 */
	function checkMsg(msg, protos){
		if(!protos || !msg){
			console.warn('no protos or msg exist! msg : %j, protos : %j', msg, protos);
			return false;
		}
	
		for(var name in protos){
			var proto = protos[name];
	
			//All required element must exist
			switch(proto.option){
				case 'required' :
					if(typeof(msg[name]) === 'undefined'){
						console.warn('no property exist for required! name: %j, proto: %j, msg: %j', name, proto, msg);
						return false;
					}
				case 'optional' :
					if(typeof(msg[name]) !== 'undefined'){
						var message = protos.__messages[proto.type] || Encoder.protos['message ' + proto.type];
						if(!!message && !checkMsg(msg[name], message)){
							console.warn('inner proto error! name: %j, proto: %j, msg: %j', name, proto, msg);
							return false;
						}
					}
				break;
				case 'repeated' :
					//Check nest message in repeated elements
					var message = protos.__messages[proto.type] || Encoder.protos['message ' + proto.type];
					if(!!msg[name] && !!message){
						for(var i = 0; i < msg[name].length; i++){
							if(!checkMsg(msg[name][i], message)){
								return false;
							}
						}
					}
				break;
			}
		}
	
		return true;
	}
	
	function encodeMsg(buffer, offset, protos, msg){
		for(var name in msg){
			if(!!protos[name]){
				var proto = protos[name];
	
				switch(proto.option){
					case 'required' :
					case 'optional' :
						offset = writeBytes(buffer, offset, encodeTag(proto.type, proto.tag));
						offset = encodeProp(msg[name], proto.type, offset, buffer, protos);
					break;
					case 'repeated' :
						if(!!msg[name] && msg[name].length > 0){
							offset = encodeArray(msg[name], proto, offset, buffer, protos);
						}
					break;
				}
			}
		}
	
		return offset;
	}
	
	function encodeProp(value, type, offset, buffer, protos){
		var length = 0;
	
		switch(type){
			case 'uInt32':
				offset = writeBytes(buffer, offset, codec.encodeUInt32(value));
			break;
			case 'int32' :
			case 'sInt32':
				offset = writeBytes(buffer, offset, codec.encodeSInt32(value));
			break;
			case 'float':
				buffer.writeFloatLE(value, offset);
				offset += 4;
			break;
			case 'double':
				buffer.writeDoubleLE(value, offset);
				offset += 8;
			break;
			case 'string':
				length = Buffer.byteLength(value);
	
				//Encode length
				offset = writeBytes(buffer, offset, codec.encodeUInt32(length));
				//write string
				buffer.write(value, offset, length);
				offset += length;
			break;
			default :
				var message = protos.__messages[type] || Encoder.protos['message ' + type];
				if(!!message){
					//Use a tmp buffer to build an internal msg
					var tmpBuffer = new Buffer(Buffer.byteLength(JSON.stringify(value))*2);
					length = 0;
	
					length = encodeMsg(tmpBuffer, length, message, value);
					//Encode length
					offset = writeBytes(buffer, offset, codec.encodeUInt32(length));
					//contact the object
					tmpBuffer.copy(buffer, offset, 0, length);
	
					offset += length;
				}
			break;
		}
	
		return offset;
	}
	
	/**
	 * Encode reapeated properties, simple msg and object are decode differented
	 */
	function encodeArray(array, proto, offset, buffer, protos){
		var i = 0;
		if(util.isSimpleType(proto.type)){
			offset = writeBytes(buffer, offset, encodeTag(proto.type, proto.tag));
			offset = writeBytes(buffer, offset, codec.encodeUInt32(array.length));
			for(i = 0; i < array.length; i++){
				offset = encodeProp(array[i], proto.type, offset, buffer);
			}
		}else{
			for(i = 0; i < array.length; i++){
				offset = writeBytes(buffer, offset, encodeTag(proto.type, proto.tag));
				offset = encodeProp(array[i], proto.type, offset, buffer, protos);
			}
		}
	
		return offset;
	}
	
	function writeBytes(buffer, offset, bytes){
		for(var i = 0; i < bytes.length; i++){
			buffer.writeUInt8(bytes[i], offset);
			offset++;
		}
	
		return offset;
	}
	
	function encodeTag(type, tag){
		var value = constant.TYPES[type];
	
		if(value === undefined) value = 2;
	
		return codec.encodeUInt32((tag<<3)|value);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123).Buffer))

/***/ },
/* 128 */
/***/ function(module, exports) {

	var Encoder = module.exports;
	
	/**
	 * [encode an uInt32, return a array of bytes]
	 * @param  {[integer]} num
	 * @return {[array]}
	 */
	Encoder.encodeUInt32 = function(num){
		var n = parseInt(num);
		if(isNaN(n) || n < 0){
			console.log(n);
			return null;
		}
	
		var result = [];
		do{
			var tmp = n % 128;
			var next = Math.floor(n/128);
	
			if(next !== 0){
				tmp = tmp + 128;
			}
			result.push(tmp);
			n = next;
		} while(n !== 0);
	
		return result;
	};
	
	/**
	 * [encode a sInt32, return a byte array]
	 * @param  {[sInt32]} num  The sInt32 need to encode
	 * @return {[array]} A byte array represent the integer
	 */
	Encoder.encodeSInt32 = function(num){
		var n = parseInt(num);
		if(isNaN(n)){
			return null;
		}
		n = n<0?(Math.abs(n)*2-1):n*2;
	
		return Encoder.encodeUInt32(n);
	};
	
	Encoder.decodeUInt32 = function(bytes){
		var n = 0;
	
		for(var i = 0; i < bytes.length; i++){
			var m = parseInt(bytes[i]);
			n = n + ((m & 0x7f) * Math.pow(2,(7*i)));
			if(m < 128){
				return n;
			}
		}
	
		return n;
	};
	
	
	Encoder.decodeSInt32 = function(bytes){
		var n = this.decodeUInt32(bytes);
		var flag = ((n%2) === 1)?-1:1;
	
		n = ((n%2 + n)/2)*flag;
	
		return n;
	};


/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {
		TYPES : {
			uInt32 : 0,
			sInt32 : 0,
			int32 : 0,
			double : 1,
			string : 2,
			message : 2,
			float : 5
		}
	}

/***/ },
/* 130 */
/***/ function(module, exports) {

	var util = module.exports;
	
	util.isSimpleType = function(type){
		return ( type === 'uInt32' ||
						 type === 'sInt32' ||
						 type === 'int32'  ||
						 type === 'uInt64' ||
						 type === 'sInt64' ||
						 type === 'float'  ||
						 type === 'double');
	};
	
	util.equal = function(obj0, obj1){
		for(var key in obj0){
			var m = obj0[key];
			var n = obj1[key];
	
			if(typeof(m) === 'object'){
				if(!util.equal(m, n)){
					return false;
				}
			}else if(m !== n){
				return false;
			}
		}
	
		return true;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var codec = __webpack_require__(128);
	var util = __webpack_require__(130);
	
	var Decoder = module.exports;
	
	var buffer;
	var offset = 0;
	
	Decoder.init = function(protos){
		this.protos = protos || {};
	};
	
	Decoder.setProtos = function(protos){
		if(!!protos){
			this.protos = protos;
		}
	};
	
	Decoder.decode = function(route, buf){
		var protos = this.protos[route];
	
		buffer = buf;
		offset = 0;
	
		if(!!protos){
			return decodeMsg({}, protos, buffer.length);
		}
	
		return null;
	};
	
	function decodeMsg(msg, protos, length){
		while(offset<length){
			var head = getHead();
			var type = head.type;
			var tag = head.tag;
			var name = protos.__tags[tag];
	
			switch(protos[name].option){
				case 'optional' :
				case 'required' :
					msg[name] = decodeProp(protos[name].type, protos);
				break;
				case 'repeated' :
					if(!msg[name]){
						msg[name] = [];
					}
					decodeArray(msg[name], protos[name].type, protos);
				break;
			}
		}
	
		return msg;
	}
	
	/**
	 * Test if the given msg is finished
	 */
	function isFinish(msg, protos){
		return (!protos.__tags[peekHead().tag]);
	}
	/**
	 * Get property head from protobuf
	 */
	function getHead(){
		var tag = codec.decodeUInt32(getBytes());
	
		return {
			type : tag&0x7,
			tag	: tag>>3
		};
	}
	
	/**
	 * Get tag head without move the offset
	 */
	function peekHead(){
		var tag = codec.decodeUInt32(peekBytes());
	
		return {
			type : tag&0x7,
			tag	: tag>>3
		};
	}
	
	function decodeProp(type, protos){
		switch(type){
			case 'uInt32':
				return codec.decodeUInt32(getBytes());
			case 'int32' :
			case 'sInt32' :
				return codec.decodeSInt32(getBytes());
			case 'float' :
				var float = buffer.readFloatLE(offset);
				offset += 4;
				return float;
			case 'double' :
				var double = buffer.readDoubleLE(offset);
				offset += 8;
				return double;
			case 'string' :
				var length = codec.decodeUInt32(getBytes());
	
				var str =  buffer.toString('utf8', offset, offset+length);
				offset += length;
	
				return str;
			default :
				var message = protos && (protos.__messages[type] || Decoder.protos['message ' + type]);
				if(message){
					var length = codec.decodeUInt32(getBytes());
					var msg = {};
					decodeMsg(msg, message, offset+length);
					return msg;
				}
			break;
		}
	}
	
	function decodeArray(array, type, protos){
		if(util.isSimpleType(type)){
			var length = codec.decodeUInt32(getBytes());
	
			for(var i = 0; i < length; i++){
				array.push(decodeProp(type));
			}
		}else{
			array.push(decodeProp(type, protos));
		}
	}
	
	function getBytes(flag){
		var bytes = [];
		var pos = offset;
		flag = flag || false;
	
		var b;
		do{
			var b = buffer.readUInt8(pos);
			bytes.push(b);
			pos++;
		}while(b >= 128);
	
		if(!flag){
			offset = pos;
		}
		return bytes;
	}
	
	function peekBytes(){
		return getBytes(true);
	}

/***/ },
/* 132 */
/***/ function(module, exports) {

	var Parser = module.exports;
	
	/**
	 * [parse the original protos, give the paresed result can be used by protobuf encode/decode.]
	 * @param  {[Object]} protos Original protos, in a js map.
	 * @return {[Object]} The presed result, a js object represent all the meta data of the given protos.
	 */
	Parser.parse = function(protos){
		var maps = {};
		for(var key in protos){
			maps[key] = parseObject(protos[key]);
		}
	
		return maps;
	};
	
	/**
	 * [parse a single protos, return a object represent the result. The method can be invocked recursively.]
	 * @param  {[Object]} obj The origin proto need to parse.
	 * @return {[Object]} The parsed result, a js object.
	 */
	function parseObject(obj){
		var proto = {};
		var nestProtos = {};
		var tags = {};
	
		for(var name in obj){
			var tag = obj[name];
			var params = name.split(' ');
	
			switch(params[0]){
				case 'message':
					if(params.length !== 2){
						continue;
					}
					nestProtos[params[1]] = parseObject(tag);
					continue;
				case 'required':
				case 'optional':
				case 'repeated':{
					//params length should be 3 and tag can't be duplicated
					if(params.length !== 3 || !!tags[tag]){
						continue;
					}
					proto[params[2]] = {
						option : params[0],
						type : params[1],
						tag : tag
					};
					tags[tag] = params[2];
				}
			}
		}
	
		proto.__messages = nestProtos;
		proto.__tags = tags;
		return proto;
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {(function (exports, ByteArray, global) {
	  var Protocol = exports;
	
	  var PKG_HEAD_BYTES = 4;
	  var MSG_FLAG_BYTES = 1;
	  var MSG_ROUTE_CODE_BYTES = 2;
	  var MSG_ID_MAX_BYTES = 5;
	  var MSG_ROUTE_LEN_BYTES = 1;
	
	  var MSG_ROUTE_CODE_MAX = 0xffff;
	
	  var MSG_COMPRESS_ROUTE_MASK = 0x1;
	  var MSG_TYPE_MASK = 0x7;
	
	  var Package = Protocol.Package = {};
	  var Message = Protocol.Message = {};
	
	  Package.TYPE_HANDSHAKE = 1;
	  Package.TYPE_HANDSHAKE_ACK = 2;
	  Package.TYPE_HEARTBEAT = 3;
	  Package.TYPE_DATA = 4;
	  Package.TYPE_KICK = 5;
	
	  Message.TYPE_REQUEST = 0;
	  Message.TYPE_NOTIFY = 1;
	  Message.TYPE_RESPONSE = 2;
	  Message.TYPE_PUSH = 3;
	
	  /**
	   * pomele client encode
	   * id message id;
	   * route message route
	   * msg message body
	   * socketio current support string
	   */
	  Protocol.strencode = function(str) {
	    if(typeof Buffer !== "undefined" && ByteArray === Buffer) {
	      // encoding defaults to 'utf8'
	      return (new Buffer(str));
	    } else {
	      var byteArray = new ByteArray(str.length * 3);
	      var offset = 0;
	      for(var i = 0; i < str.length; i++){
	        var charCode = str.charCodeAt(i);
	        var codes = null;
	        if(charCode <= 0x7f){
	          codes = [charCode];
	        }else if(charCode <= 0x7ff){
	          codes = [0xc0|(charCode>>6), 0x80|(charCode & 0x3f)];
	        }else{
	          codes = [0xe0|(charCode>>12), 0x80|((charCode & 0xfc0)>>6), 0x80|(charCode & 0x3f)];
	        }
	        for(var j = 0; j < codes.length; j++){
	          byteArray[offset] = codes[j];
	          ++offset;
	        }
	      }
	      var _buffer = new ByteArray(offset);
	      copyArray(_buffer, 0, byteArray, 0, offset);
	      return _buffer;
	    }
	  };
	
	  /**
	   * client decode
	   * msg String data
	   * return Message Object
	   */
	  Protocol.strdecode = function(buffer) {
	    if(typeof Buffer !== "undefined" && ByteArray === Buffer) {
	      // encoding defaults to 'utf8'
	      return buffer.toString();
	    } else {
	      var bytes = new ByteArray(buffer);
	      var array = [];
	      var offset = 0;
	      var charCode = 0;
	      var end = bytes.length;
	      while(offset < end){
	        if(bytes[offset] < 128){
	          charCode = bytes[offset];
	          offset += 1;
	        }else if(bytes[offset] < 224){
	          charCode = ((bytes[offset] & 0x1f)<<6) + (bytes[offset+1] & 0x3f);
	          offset += 2;
	        }else{
	          charCode = ((bytes[offset] & 0x0f)<<12) + ((bytes[offset+1] & 0x3f)<<6) + (bytes[offset+2] & 0x3f);
	          offset += 3;
	        }
	        array.push(charCode);
	      }
	      return String.fromCharCode.apply(null, array);
	    }
	  };
	
	  /**
	   * Package protocol encode.
	   *
	   * Pomelo package format:
	   * +------+-------------+------------------+
	   * | type | body length |       body       |
	   * +------+-------------+------------------+
	   *
	   * Head: 4bytes
	   *   0: package type,
	   *      1 - handshake,
	   *      2 - handshake ack,
	   *      3 - heartbeat,
	   *      4 - data
	   *      5 - kick
	   *   1 - 3: big-endian body length
	   * Body: body length bytes
	   *
	   * @param  {Number}    type   package type
	   * @param  {ByteArray} body   body content in bytes
	   * @return {ByteArray}        new byte array that contains encode result
	   */
	  Package.encode = function(type, body){
	    var length = body ? body.length : 0;
	    var buffer = new ByteArray(PKG_HEAD_BYTES + length);
	    var index = 0;
	    buffer[index++] = type & 0xff;
	    buffer[index++] = (length >> 16) & 0xff;
	    buffer[index++] = (length >> 8) & 0xff;
	    buffer[index++] = length & 0xff;
	    if(body) {
	      copyArray(buffer, index, body, 0, length);
	    }
	    return buffer;
	  };
	
	  /**
	   * Package protocol decode.
	   * See encode for package format.
	   *
	   * @param  {ByteArray} buffer byte array containing package content
	   * @return {Object}           {type: package type, buffer: body byte array}
	   */
	  Package.decode = function(buffer){
	    var offset = 0;
	    var bytes = new ByteArray(buffer);
	    var length = 0;
	    var rs = [];
	    while(offset < bytes.length) {
	      var type = bytes[offset++];
	      length = ((bytes[offset++]) << 16 | (bytes[offset++]) << 8 | bytes[offset++]) >>> 0;
	      var body = length ? new ByteArray(length) : null;
	      if(body) {
	        copyArray(body, 0, bytes, offset, length);
	      }
	      offset += length;
	      rs.push({'type': type, 'body': body});
	    }
	    return rs.length === 1 ? rs[0]: rs;
	  };
	
	  /**
	   * Message protocol encode.
	   *
	   * @param  {Number} id            message id
	   * @param  {Number} type          message type
	   * @param  {Number} compressRoute whether compress route
	   * @param  {Number|String} route  route code or route string
	   * @param  {Buffer} msg           message body bytes
	   * @return {Buffer}               encode result
	   */
	  Message.encode = function(id, type, compressRoute, route, msg){
	    // caculate message max length
	    var idBytes = msgHasId(type) ? caculateMsgIdBytes(id) : 0;
	    var msgLen = MSG_FLAG_BYTES + idBytes;
	
	    if(msgHasRoute(type)) {
	      if(compressRoute) {
	        if(typeof route !== 'number'){
	          throw new Error('error flag for number route!');
	        }
	        msgLen += MSG_ROUTE_CODE_BYTES;
	      } else {
	        msgLen += MSG_ROUTE_LEN_BYTES;
	        if(route) {
	          route = Protocol.strencode(route);
	          if(route.length>255) {
	            throw new Error('route maxlength is overflow');
	          }
	          msgLen += route.length;
	        }
	      }
	    }
	
	    if(msg) {
	      msgLen += msg.length;
	    }
	
	    var buffer = new ByteArray(msgLen);
	    var offset = 0;
	
	    // add flag
	    offset = encodeMsgFlag(type, compressRoute, buffer, offset);
	
	    // add message id
	    if(msgHasId(type)) {
	      offset = encodeMsgId(id, buffer, offset);
	    }
	
	    // add route
	    if(msgHasRoute(type)) {
	      offset = encodeMsgRoute(compressRoute, route, buffer, offset);
	    }
	
	    // add body
	    if(msg) {
	      offset = encodeMsgBody(msg, buffer, offset);
	    }
	
	    return buffer;
	  };
	
	  /**
	   * Message protocol decode.
	   *
	   * @param  {Buffer|Uint8Array} buffer message bytes
	   * @return {Object}            message object
	   */
	  Message.decode = function(buffer) {
	    var bytes =  new ByteArray(buffer);
	    var bytesLen = bytes.length || bytes.byteLength;
	    var offset = 0;
	    var id = 0;
	    var route = null;
	
	    // parse flag
	    var flag = bytes[offset++];
	    var compressRoute = flag & MSG_COMPRESS_ROUTE_MASK;
	    var type = (flag >> 1) & MSG_TYPE_MASK;
	
	    // parse id
	    if(msgHasId(type)) {
	      var m = 0;
	      var i = 0;
	      do{
	        m = parseInt(bytes[offset]);
	        id += (m & 0x7f) << (7 * i);
	        offset++;
	        i++;
	      }while(m >= 128);
	    }
	
	    // parse route
	    if(msgHasRoute(type)) {
	      if(compressRoute) {
	        route = (bytes[offset++]) << 8 | bytes[offset++];
	      } else {
	        var routeLen = bytes[offset++];
	        if(routeLen) {
	          route = new ByteArray(routeLen);
	          copyArray(route, 0, bytes, offset, routeLen);
	          route = Protocol.strdecode(route);
	        } else {
	          route = '';
	        }
	        offset += routeLen;
	      }
	    }
	
	    // parse body
	    var bodyLen = bytesLen - offset;
	    var body = new ByteArray(bodyLen);
	
	    copyArray(body, 0, bytes, offset, bodyLen);
	
	    return {'id': id, 'type': type, 'compressRoute': compressRoute,
	            'route': route, 'body': body};
	  };
	
	  var copyArray = function(dest, doffset, src, soffset, length) {
	    if('function' === typeof src.copy) {
	      // Buffer
	      src.copy(dest, doffset, soffset, soffset + length);
	    } else {
	      // Uint8Array
	      for(var index=0; index<length; index++){
	        dest[doffset++] = src[soffset++];
	      }
	    }
	  };
	
	  var msgHasId = function(type) {
	    return type === Message.TYPE_REQUEST || type === Message.TYPE_RESPONSE;
	  };
	
	  var msgHasRoute = function(type) {
	    return type === Message.TYPE_REQUEST || type === Message.TYPE_NOTIFY ||
	           type === Message.TYPE_PUSH;
	  };
	
	  var caculateMsgIdBytes = function(id) {
	    var len = 0;
	    do {
	      len += 1;
	      id >>= 7;
	    } while(id > 0);
	    return len;
	  };
	
	  var encodeMsgFlag = function(type, compressRoute, buffer, offset) {
	    if(type !== Message.TYPE_REQUEST && type !== Message.TYPE_NOTIFY &&
	       type !== Message.TYPE_RESPONSE && type !== Message.TYPE_PUSH) {
	      throw new Error('unkonw message type: ' + type);
	    }
	
	    buffer[offset] = (type << 1) | (compressRoute ? 1 : 0);
	
	    return offset + MSG_FLAG_BYTES;
	  };
	
	  var encodeMsgId = function(id, buffer, offset) {
	    do{
	      var tmp = id % 128;
	      var next = Math.floor(id/128);
	
	      if(next !== 0){
	        tmp = tmp + 128;
	      }
	      buffer[offset++] = tmp;
	
	      id = next;
	    } while(id !== 0);
	
	    return offset;
	  };
	
	  var encodeMsgRoute = function(compressRoute, route, buffer, offset) {
	    if (compressRoute) {
	      if(route > MSG_ROUTE_CODE_MAX){
	        throw new Error('route number is overflow');
	      }
	
	      buffer[offset++] = (route >> 8) & 0xff;
	      buffer[offset++] = route & 0xff;
	    } else {
	      if(route) {
	        buffer[offset++] = route.length & 0xff;
	        copyArray(buffer, offset, route, 0, route.length);
	        offset += route.length;
	      } else {
	        buffer[offset++] = 0;
	      }
	    }
	
	    return offset;
	  };
	
	  var encodeMsgBody = function(msg, buffer, offset) {
	    copyArray(buffer, offset, msg, 0, msg.length);
	    return offset + msg.length;
	  };
	
	  module.exports = Protocol;
	  if(typeof(window) != "undefined") {
	    window.Protocol = Protocol;
	  }
	})(typeof(window)=="undefined" ? module.exports : (this.Protocol = {}),typeof(window)=="undefined"  ? Buffer : Uint8Array, this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123).Buffer))

/***/ },
/* 135 */
/***/ function(module, exports) {

	(function() {
	  var JS_WS_CLIENT_TYPE = 'js-websocket';
	  var JS_WS_CLIENT_VERSION = '0.0.1';
	
	  var Protocol = window.Protocol;
	  var protobuf = window.protobuf;
	  var decodeIO_protobuf = window.decodeIO_protobuf;
	  var decodeIO_encoder = null;
	  var decodeIO_decoder = null;
	  var Package = Protocol.Package;
	  var Message = Protocol.Message;
	  var EventEmitter = window.EventEmitter;
	  var rsa = window.rsa;
	
	  if(typeof(window) != "undefined" && typeof(sys) != 'undefined' && sys.localStorage) {
	    window.localStorage = sys.localStorage;
	  }
	  
	  var RES_OK = 200;
	  var RES_FAIL = 500;
	  var RES_OLD_CLIENT = 501;
	
	  if (typeof Object.create !== 'function') {
	    Object.create = function (o) {
	      function F() {}
	      F.prototype = o;
	      return new F();
	    };
	  }
	
	  var root = window;
	  var pomelo = Object.create(EventEmitter.prototype); // object extend from object
	  root.pomelo = pomelo;
	  var socket = null;
	  var reqId = 0;
	  var callbacks = {};
	  var handlers = {};
	  //Map from request id to route
	  var routeMap = {};
	  var dict = {};    // route string to code
	  var abbrs = {};   // code to route string
	  var serverProtos = {};
	  var clientProtos = {};
	  var protoVersion = 0;
	
	  var heartbeatInterval = 0;
	  var heartbeatTimeout = 0;
	  var nextHeartbeatTimeout = 0;
	  var gapThreshold = 100;   // heartbeat gap threashold
	  var heartbeatId = null;
	  var heartbeatTimeoutId = null;
	  var handshakeCallback = null;
	
	  var decode = null;
	  var encode = null;
	
	  var reconnect = false;
	  var reconncetTimer = null;
	  var reconnectUrl = null;
	  var reconnectAttempts = 0;
	  var reconnectionDelay = 5000;
	  var DEFAULT_MAX_RECONNECT_ATTEMPTS = 10;
	
	  var useCrypto;
	
	  var handshakeBuffer = {
	    'sys': {
	      type: JS_WS_CLIENT_TYPE,
	      version: JS_WS_CLIENT_VERSION,
	      rsa: {}
	    },
	    'user': {
	    }
	  };
	
	  var initCallback = null;
	
	  pomelo.init = function(params, cb) {
	    initCallback = cb;
	    var host = params.host;
	    var port = params.port;
	
	    encode = params.encode || defaultEncode;
	    decode = params.decode || defaultDecode;
	
	    var url = 'ws://' + host;
	    if(port) {
	      url +=  ':' + port;
	    }
	
	    handshakeBuffer.user = params.user;
	    if(params.encrypt) {
	      useCrypto = true;
	      rsa.generate(1024, "10001");
	      var data = {
	        rsa_n: rsa.n.toString(16),
	        rsa_e: rsa.e
	      }
	      handshakeBuffer.sys.rsa = data;
	    }
	    handshakeCallback = params.handshakeCallback;
	    connect(params, url, cb);
	  };
	
	  var defaultDecode = pomelo.decode = function(data) {
	    //probuff decode
	    var msg = Message.decode(data);
	
	    if(msg.id > 0){
	      msg.route = routeMap[msg.id];
	      delete routeMap[msg.id];
	      if(!msg.route){
	        return;
	      }
	    }
	
	    msg.body = deCompose(msg);
	    return msg;
	  };
	
	  var defaultEncode = pomelo.encode = function(reqId, route, msg) {
	    var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
	
	    //compress message by protobuf
	    if(protobuf && clientProtos[route]) {
	      msg = protobuf.encode(route, msg);
	    } else if(decodeIO_encoder && decodeIO_encoder.lookup(route)) {
	      var Builder = decodeIO_encoder.build(route);
	      msg = new Builder(msg).encodeNB();
	    } else {
	      msg = Protocol.strencode(JSON.stringify(msg));
	    }
	
	    var compressRoute = 0;
	    if(dict && dict[route]) {
	      route = dict[route];
	      compressRoute = 1;
	    }
	
	    return Message.encode(reqId, type, compressRoute, route, msg);
	  };
	
	  var connect = function(params, url, cb) {
	    console.log('connect to ' + url);
	
	    var params = params || {};
	    var maxReconnectAttempts = params.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
	    reconnectUrl = url;
	    //Add protobuf version
	    if(window.localStorage && window.localStorage.getItem('protos') && protoVersion === 0) {
	      var protos = JSON.parse(window.localStorage.getItem('protos'));
	
	      protoVersion = protos.version || 0;
	      serverProtos = protos.server || {};
	      clientProtos = protos.client || {};
	
	      if(!!protobuf) {
	        protobuf.init({encoderProtos: clientProtos, decoderProtos: serverProtos});
	      } 
	      if(!!decodeIO_protobuf) {
	        decodeIO_encoder = decodeIO_protobuf.loadJson(clientProtos);
	        decodeIO_decoder = decodeIO_protobuf.loadJson(serverProtos);
	      }
	    }
	    //Set protoversion
	    handshakeBuffer.sys.protoVersion = protoVersion;
	
	    var onopen = function(event) {
	      if(!!reconnect) {
	        pomelo.emit('reconnect');
	      }
	      reset();
	      var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(handshakeBuffer)));
	      send(obj);
	    };
	    var onmessage = function(event) {
	      processPackage(Package.decode(event.data), cb);
	      // new package arrived, update the heartbeat timeout
	      if(heartbeatTimeout) {
	        nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
	      }
	    };
	    var onerror = function(event) {
	      pomelo.emit('io-error', event);
	      console.error('socket error: ', event);
	    };
	    var onclose = function(event) {
	      pomelo.emit('close',event);
	      pomelo.emit('disconnect', event);
	      console.error('socket close: ', event);
	      if(!!params.reconnect && reconnectAttempts < maxReconnectAttempts) {
	        reconnect = true;
	        reconnectAttempts++;
	        reconncetTimer = setTimeout(function() {
	          connect(params, reconnectUrl, cb);
	        }, reconnectionDelay);
	        reconnectionDelay *= 2;
	      }
	    };
	    socket = new WebSocket(url);
	    socket.binaryType = 'arraybuffer';
	    socket.onopen = onopen;
	    socket.onmessage = onmessage;
	    socket.onerror = onerror;
	    socket.onclose = onclose;
	  };
	
	  pomelo.disconnect = function() {
	    if(socket) {
	      if(socket.disconnect) socket.disconnect();
	      if(socket.close) socket.close();
	      console.log('disconnect');
	      socket = null;
	    }
	
	    if(heartbeatId) {
	      clearTimeout(heartbeatId);
	      heartbeatId = null;
	    }
	    if(heartbeatTimeoutId) {
	      clearTimeout(heartbeatTimeoutId);
	      heartbeatTimeoutId = null;
	    }
	  };
	
	  var reset = function() {
	    reconnect = false;
	    reconnectionDelay = 1000 * 5;
	    reconnectAttempts = 0;
	    clearTimeout(reconncetTimer);
	  };
	
	  pomelo.request = function(route, msg, cb) {
	    if(arguments.length === 2 && typeof msg === 'function') {
	      cb = msg;
	      msg = {};
	    } else {
	      msg = msg || {};
	    }
	    route = route || msg.route;
	    if(!route) {
	      return;
	    }
	
	    reqId++;
	    sendMessage(reqId, route, msg);
	
	    callbacks[reqId] = cb;
	    routeMap[reqId] = route;
	  };
	
	  pomelo.notify = function(route, msg) {
	    msg = msg || {};
	    sendMessage(0, route, msg);
	  };
	
	  var sendMessage = function(reqId, route, msg) {
	    if(useCrypto) {
	      msg = JSON.stringify(msg);
	      var sig = rsa.signString(msg, "sha256");
	      msg = JSON.parse(msg);
	      msg['__crypto__'] = sig;
	    }
	
	    if(encode) {
	      msg = encode(reqId, route, msg);
	    }
	
	    var packet = Package.encode(Package.TYPE_DATA, msg);
	    send(packet);
	  };
	
	  var send = function(packet) {
	    if(socket)
	      socket.send(packet.buffer);
	  };
	
	  var handler = {};
	
	  var heartbeat = function(data) {
	    if(!heartbeatInterval) {
	      // no heartbeat
	      return;
	    }
	
	    var obj = Package.encode(Package.TYPE_HEARTBEAT);
	    if(heartbeatTimeoutId) {
	      clearTimeout(heartbeatTimeoutId);
	      heartbeatTimeoutId = null;
	    }
	
	    if(heartbeatId) {
	      // already in a heartbeat interval
	      return;
	    }
	    heartbeatId = setTimeout(function() {
	      heartbeatId = null;
	      send(obj);
	
	      nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
	      heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, heartbeatTimeout);
	    }, heartbeatInterval);
	  };
	
	  var heartbeatTimeoutCb = function() {
	    var gap = nextHeartbeatTimeout - Date.now();
	    if(gap > gapThreshold) {
	      heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, gap);
	    } else {
	      console.error('server heartbeat timeout');
	      pomelo.emit('heartbeat timeout');
	      pomelo.disconnect();
	    }
	  };
	
	  var handshake = function(data) {
	    data = JSON.parse(Protocol.strdecode(data));
	    if(data.code === RES_OLD_CLIENT) {
	      pomelo.emit('error', 'client version not fullfill');
	      return;
	    }
	
	    if(data.code !== RES_OK) {
	      pomelo.emit('error', 'handshake fail');
	      return;
	    }
	
	    handshakeInit(data);
	
	    var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
	    send(obj);
	    if(initCallback) {
	      initCallback(socket);
	    }
	  };
	
	  var onData = function(data) {
	    var msg = data;
	    if(decode) {
	      msg = decode(msg);
	    }
	    processMessage(pomelo, msg);
	  };
	
	  var onKick = function(data) {
	    data = JSON.parse(Protocol.strdecode(data));
	    pomelo.emit('onKick', data);
	  };
	
	  handlers[Package.TYPE_HANDSHAKE] = handshake;
	  handlers[Package.TYPE_HEARTBEAT] = heartbeat;
	  handlers[Package.TYPE_DATA] = onData;
	  handlers[Package.TYPE_KICK] = onKick;
	
	  var processPackage = function(msgs) {
	    if(Array.isArray(msgs)) {
	      for(var i=0; i<msgs.length; i++) {
	        var msg = msgs[i];
	        handlers[msg.type](msg.body);
	      }
	    } else {
	      handlers[msgs.type](msgs.body);
	    }
	  };
	
	  var processMessage = function(pomelo, msg) {
	    if(!msg.id) {
	      // server push message
	      pomelo.emit(msg.route, msg.body);
	      return;
	    }
	
	    //if have a id then find the callback function with the request
	    var cb = callbacks[msg.id];
	
	    delete callbacks[msg.id];
	    if(typeof cb !== 'function') {
	      return;
	    }
	
	    cb(msg.body);
	    return;
	  };
	
	  var processMessageBatch = function(pomelo, msgs) {
	    for(var i=0, l=msgs.length; i<l; i++) {
	      processMessage(pomelo, msgs[i]);
	    }
	  };
	
	  var deCompose = function(msg) {
	    var route = msg.route;
	
	    //Decompose route from dict
	    if(msg.compressRoute) {
	      if(!abbrs[route]){
	        return {};
	      }
	
	      route = msg.route = abbrs[route];
	    }
	    if(protobuf && serverProtos[route]) {
	      return protobuf.decodeStr(route, msg.body);
	    } else if(decodeIO_decoder && decodeIO_decoder.lookup(route)) {
	      return decodeIO_decoder.build(route).decode(msg.body);
	    } else {
	      return JSON.parse(Protocol.strdecode(msg.body));
	    }
	
	    return msg;
	  };
	
	  var handshakeInit = function(data) {
	    if(data.sys && data.sys.heartbeat) {
	      heartbeatInterval = data.sys.heartbeat * 1000;   // heartbeat interval
	      heartbeatTimeout = heartbeatInterval * 2;        // max heartbeat timeout
	    } else {
	      heartbeatInterval = 0;
	      heartbeatTimeout = 0;
	    }
	
	    initData(data);
	
	    if(typeof handshakeCallback === 'function') {
	      handshakeCallback(data.user);
	    }
	  };
	
	  //Initilize data used in pomelo client
	  var initData = function(data) {
	    if(!data || !data.sys) {
	      return;
	    }
	    dict = data.sys.dict;
	    var protos = data.sys.protos;
	
	    //Init compress dict
	    if(dict) {
	      dict = dict;
	      abbrs = {};
	
	      for(var route in dict) {
	        abbrs[dict[route]] = route;
	      }
	    }
	
	    //Init protobuf protos
	    if(protos) {
	      protoVersion = protos.version || 0;
	      serverProtos = protos.server || {};
	      clientProtos = protos.client || {};
	
	        //Save protobuf protos to localStorage
	        window.localStorage.setItem('protos', JSON.stringify(protos));
	
	        if(!!protobuf) {
	          protobuf.init({encoderProtos: protos.client, decoderProtos: protos.server});
	        }
	        if(!!decodeIO_protobuf) {
	          decodeIO_encoder = decodeIO_protobuf.loadJson(clientProtos);
	          decodeIO_decoder = decodeIO_protobuf.loadJson(serverProtos);
	        }
	      }
	    };
	
	    module.exports = pomelo;
	  })();


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/9/13.
	 */
	
	'use strict';
	
	var _keys = __webpack_require__(5);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(76);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var puremvc = __webpack_require__(93);
	var env = __webpack_require__(96);
	var SceneMediator = __webpack_require__(137);
	
	module.exports = function (_puremvc$Mediator) {
	  (0, _inherits3.default)(DirectorMediator, _puremvc$Mediator);
	
	  /**
	   * Constructor.
	   */
	  function DirectorMediator(name) {
	    (0, _classCallCheck3.default)(this, DirectorMediator);
	
	    if (!(typeof name === 'string')) {
	      throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
	    }
	
	    return (0, _possibleConstructorReturn3.default)(this, (DirectorMediator.__proto__ || (0, _getPrototypeOf2.default)(DirectorMediator)).call(this, name, null));
	  }
	
	  /**
	   * @override
	   */
	
	
	  (0, _createClass3.default)(DirectorMediator, [{
	    key: 'onRegister',
	    value: function onRegister() {
	      // If referenced loading.js, please remove it
	      if (!cc.sys.isNative && document.getElementById('cocosLoading')) {
	        document.body.removeChild(document.getElementById('cocosLoading'));
	      }
	
	      // Pass true to enable retina display, on Android disabled by default to improve performance
	      cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS);
	
	      // Adjust viewport meta
	      cc.view.adjustViewPort(true);
	
	      // Uncomment the following line to set a fixed orientation for your game
	      cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);
	
	      // Setup the resolution policy and design resolution size
	      cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.SHOW_ALL);
	
	      // The game will be resized when browser size change
	      cc.view.resizeWithBrowserSize(true);
	    }
	
	    /**
	     * @override
	     * @returns {*[]}
	     */
	
	  }, {
	    key: 'listNotificationInterests',
	    value: function listNotificationInterests() {
	      return [env.CMD.RUN_SCENE, env.CMD.PUSH_SCENE, env.CMD.POP_SCENE];
	    }
	
	    /**
	     * @override
	     * @param notify
	     */
	
	  }, {
	    key: 'handleNotification',
	    value: function handleNotification(notify) {
	      if (!(notify instanceof puremvc.Notification)) {
	        throw new TypeError('Value of argument "notify" violates contract.\n\nExpected:\npuremvc.Notification\n\nGot:\n' + _inspect(notify));
	      }
	
	      switch (notify.getName()) {
	        case env.CMD.RUN_SCENE:
	          this.handleRunScene(notify);
	          break;
	
	        case env.CMD.PUSH_SCENE:
	          break;
	
	        case env.CMD.POP_SCENE:
	          break;
	
	        default:
	          console.error('unknow type ' + notify);
	      }
	    }
	
	    /**
	     * Handle run scene.
	     * @param notify
	     */
	
	  }, {
	    key: 'handleRunScene',
	    value: function handleRunScene(notify) {
	      if (!(notify instanceof puremvc.Notification)) {
	        throw new TypeError('Value of argument "notify" violates contract.\n\nExpected:\npuremvc.Notification\n\nGot:\n' + _inspect(notify));
	      }
	
	      // check existance
	      var sceneName = notify.getBody().name;
	
	      if (!(typeof sceneName === 'string')) {
	        throw new TypeError('Value of variable "sceneName" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(sceneName));
	      }
	
	      if (this.facade.hasMediator(sceneName)) {
	        console.error('scene already exist, ' + (0, _stringify2.default)(notify));
	        return;
	      }
	
	      // register new mediator
	      var scene = new SceneMediator(sceneName);
	      this.facade.registerMediator(scene);
	
	      // remove current mediator
	      var current = cc.director.getRunningScene();
	      if (!!current) {
	        var mediator = current.getMediator();
	
	        if (!(mediator instanceof puremvc.Mediator)) {
	          throw new TypeError('Value of variable "mediator" violates contract.\n\nExpected:\npuremvc.Mediator\n\nGot:\n' + _inspect(mediator));
	        }
	
	        this.facade.removeMediator(mediator.mediatorName);
	      }
	
	      // run scene
	      cc.director.runScene(scene.getViewComponent());
	    }
	  }]);
	  return DirectorMediator;
	}(puremvc.Mediator);
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/9/20.
	 */
	
	'use strict';
	
	var _keys = __webpack_require__(5);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _toConsumableArray2 = __webpack_require__(138);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(76);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var puremvc = __webpack_require__(93);
	var env = __webpack_require__(96);
	var LoaderScene = __webpack_require__(143);
	var StartScene = __webpack_require__(153);
	var PlayScene = __webpack_require__(154);
	
	module.exports = function (_puremvc$Mediator) {
	  (0, _inherits3.default)(SceneMediator, _puremvc$Mediator);
	
	  /**
	   * Constructor.
	   * @param scene
	   */
	  function SceneMediator(name) {
	    (0, _classCallCheck3.default)(this, SceneMediator);
	
	    if (!(typeof name === 'string')) {
	      throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
	    }
	
	    // decide which scene to create
	    var scene = void 0;
	    switch (name) {
	      case env.MVC.LOADER_SCENE:
	        scene = new LoaderScene();break;
	      case env.MVC.START_SCENE:
	        scene = new StartScene();break;
	      case env.MVC.PLAY_SCENE:
	        scene = new PlayScene();break;
	      default:
	        console.error('invalid scene name, ' + name);
	    }
	
	    // init
	
	    // register mediator in scene
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SceneMediator.__proto__ || (0, _getPrototypeOf2.default)(SceneMediator)).call(this, name, scene));
	
	    scene.getMediator = function () {
	      return _this;
	    };
	    return _this;
	  }
	
	  /**
	   * @override
	   */
	
	
	  (0, _createClass3.default)(SceneMediator, [{
	    key: 'onRegister',
	    value: function onRegister() {
	      var scene = this.getViewComponent();
	
	      if (!(scene instanceof cc.Scene)) {
	        throw new TypeError('Value of variable "scene" violates contract.\n\nExpected:\ncc.Scene\n\nGot:\n' + _inspect(scene));
	      }
	
	      scene.init();
	      scene.retain();
	    }
	
	    /**
	     * @override
	     */
	
	  }, {
	    key: 'onRemove',
	    value: function onRemove() {
	      var scene = this.getViewComponent();
	
	      if (!(scene instanceof cc.Scene)) {
	        throw new TypeError('Value of variable "scene" violates contract.\n\nExpected:\ncc.Scene\n\nGot:\n' + _inspect(scene));
	      }
	
	      scene.release();
	    }
	
	    /**
	     * @override
	     * @returns {*[]}
	     */
	
	  }, {
	    key: 'listNotificationInterests',
	    value: function listNotificationInterests() {
	      // add component's interests
	      var scene = this.getViewComponent();
	
	      if (!(scene instanceof cc.Scene)) {
	        throw new TypeError('Value of variable "scene" violates contract.\n\nExpected:\ncc.Scene\n\nGot:\n' + _inspect(scene));
	      }
	
	      var interests = [];
	      if (typeof scene.listNotificationInterests === 'function') {
	        interests.push.apply(interests, (0, _toConsumableArray3.default)(scene.listNotificationInterests()));
	      }
	
	      return interests;
	    }
	
	    /**
	     * @override
	     * @param notify
	     */
	
	  }, {
	    key: 'handleNotification',
	    value: function handleNotification(notify) {
	      if (!(notify instanceof puremvc.Notification)) {
	        throw new TypeError('Value of argument "notify" violates contract.\n\nExpected:\npuremvc.Notification\n\nGot:\n' + _inspect(notify));
	      }
	
	      // check component has handle function
	      var scene = this.getViewComponent();
	
	      if (!(scene instanceof cc.Scene)) {
	        throw new TypeError('Value of variable "scene" violates contract.\n\nExpected:\ncc.Scene\n\nGot:\n' + _inspect(scene));
	      }
	
	      if (typeof scene.handleNotification !== 'function') {
	        console.error('scene do not have handleNotification, ' + scene.getName() + ', ' + (0, _stringify2.default)(notify));
	        return;
	      }
	
	      scene.handleNotification(notify);
	    }
	  }]);
	  return SceneMediator;
	}(puremvc.Mediator);
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(139);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(141);
	module.exports = __webpack_require__(4).Array.from;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(27)
	  , $export        = __webpack_require__(26)
	  , toObject       = __webpack_require__(8)
	  , call           = __webpack_require__(105)
	  , isArrayIter    = __webpack_require__(106)
	  , toLength       = __webpack_require__(17)
	  , createProperty = __webpack_require__(142)
	  , getIterFn      = __webpack_require__(107);
	
	$export($export.S + $export.F * !__webpack_require__(114)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(30)
	  , createDesc      = __webpack_require__(38);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/8/2.
	 */
	
	'use strict';
	
	var loaderTexture = __webpack_require__(144);
	
	var _require = __webpack_require__(145);
	
	var preload = _require.preload;
	
	var app = __webpack_require__(1);
	var env = __webpack_require__(96);
	
	module.exports = cc.Scene.extend({
	  _label: null,
	  _progressTimer: null,
	
	  // _bgLayer: null,
	  // _processLayer: null,
	  // _processLayerLength: null,
	
	  /**
	   * @override
	   */
	  init: function init() {
	    this._super();
	
	    // logo
	    var winSize = cc.director.getWinSize();
	    var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
	
	    // bg
	    var bgImg = new Image();
	    bgImg.src = loaderTexture;
	    var bgTexture = new cc.Texture2D();
	    bgTexture.initWithElement(bgImg);
	    var bgSprite = cc.Sprite.createWithTexture(bgTexture);
	    bgSprite.setPosition(centerPos);
	    this.addChild(bgSprite, 0);
	
	    // loading bar
	    // const barSprite = new cc.Rect(centerPos.x, centerPos.y, winSize.width * 3 / 4, 30);
	    // const ptSprite = cc.Sprite.create(res.Start_N_png);
	    // ptSprite.setTextureRect(cc.rect(0, 0, winSize.width * 3 / 4, 30));
	    // ptSprite.setColor(cc.color(255, 100, 100, 128));
	    // this._progressTimer = cc.ProgressTimer.create(cc.Sprite.create(res.Start_N_png));
	    // this._progressTimer.setPercentage(0.0);
	    // this._progressTimer.setPosition(centerPos);
	    // this.addChild(this._progressTimer, 10);
	
	    // loading text
	    this._label = cc.LabelTTF.create('Loading... 0%', 'Arial', 32);
	    this._label.setColor(cc.color(0, 0, 0));
	    this._label.setPosition(cc.pAdd(centerPos, cc.p(0, -50)));
	    this.addChild(this._label, 10);
	  },
	  onEnter: function onEnter() {
	    this._super();
	    this.scheduleOnce(this._startLoading, 0.3);
	  },
	  onExit: function onExit() {
	    this._super();
	  },
	  _startLoading: function _startLoading() {
	    var _this = this;
	
	    cc.loader.load(preload, {
	      trigger: function trigger(result, count, loadedCount) {
	        var percent = loadedCount / count * 100;
	        _this._label.setString('Loading... ' + percent + '%');
	      },
	      triggerTarget: this,
	      cb: function cb() {
	        return app.instance().sendNotification(env.CMD.RUN_SCENE, { name: env.MVC.START_SCENE });
	      }
	    });
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports) {

	/**
	 * Created by leo on 2016/9/13.
	 */'use strict';/* eslint-disable */module.exports='data:image/png;base64,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';/* eslint-enable */

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/7/22.
	 */
	
	'use strict';
	
	var _getIterator2 = __webpack_require__(146);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(5);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _iterator2 = __webpack_require__(40);
	
	var _iterator3 = _interopRequireDefault(_iterator2);
	
	var _values = __webpack_require__(149);
	
	var _values2 = _interopRequireDefault(_values);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var preload = [];
	var res = {
	  backgroundPng: 'res/background.png',
	  startNPng: 'res/start_N.png',
	  startSPng: 'res/start_S.png',
	  sushiPng: 'res/sushi_1n/sushi_1n.png',
	  sushiPlist: 'res/sushi.plist'
	};
	
	// generate allRes res for preload
	_Object$values = (0, _values2.default)(res);
	
	if (!(_Object$values && (typeof _Object$values[_iterator3.default] === 'function' || Array.isArray(_Object$values)))) {
	  throw new TypeError('Expected _Object$values to be iterable, got ' + _inspect(_Object$values));
	}
	
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	  for (var _iterator = (0, _getIterator3.default)(_Object$values), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	    var _Object$values;
	
	    var value = _step.value;
	
	    preload.push(value);
	  }
	} catch (err) {
	  _didIteratorError = true;
	  _iteratorError = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion && _iterator.return) {
	      _iterator.return();
	    }
	  } finally {
	    if (_didIteratorError) {
	      throw _iteratorError;
	    }
	  }
	}
	
	module.exports = {
	  preload: preload,
	  res: res
	};
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	__webpack_require__(42);
	module.exports = __webpack_require__(148);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(31)
	  , get      = __webpack_require__(107);
	module.exports = __webpack_require__(4).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(151);
	module.exports = __webpack_require__(4).Object.values;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(26)
	  , $values = __webpack_require__(152)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(10)
	  , toIObject = __webpack_require__(13)
	  , isEnum    = __webpack_require__(68).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/7/22.
	 */
	
	'use strict';
	
	var _require = __webpack_require__(145);
	
	var res = _require.res;
	
	var app = __webpack_require__(1);
	var env = __webpack_require__(96);
	
	var StartLayer = cc.Layer.extend({
	
	  /** @override */
	  ctor: function ctor() {
	    this._super();
	    var size = cc.winSize;
	
	    // add bg
	    this.bgSprite = new cc.Sprite(res.backgroundPng);
	    this.bgSprite.attr({
	      x: size.width / 2,
	      y: size.height / 2
	    });
	    this.addChild(this.bgSprite, 0);
	
	    // add start menu
	    var startItem = new cc.MenuItemImage(res.startNPng, res.startSPng, function () {
	      return app.instance().sendNotification(env.CMD.RUN_SCENE, { name: env.MVC.PLAY_SCENE });
	    }, this);
	    startItem.attr({
	      x: size.width / 2,
	      y: size.height / 2,
	      anchorX: 0.5,
	      anchorY: 0.5
	    });
	    var menu = new cc.Menu(startItem);
	    menu.attr({
	      x: 0,
	      y: 0
	    });
	    this.addChild(menu, 1);
	
	    return true;
	  }
	});
	
	module.exports = cc.Scene.extend({
	  /** @override */
	  init: function init() {
	    this._super();
	    console.log('start scene init');
	  },
	
	
	  /** @override */
	  cleanup: function cleanup() {
	    this._super();
	    console.log('start scene cleanup');
	  },
	
	
	  /** @override */
	  onEnter: function onEnter() {
	    this._super();
	    var layer = new StartLayer();
	    this.addChild(layer);
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/7/22.
	 */
	
	'use strict';
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(5);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(39);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(145);
	
	var res = _require.res;
	
	var SushiSprite = __webpack_require__(155);
	// const app = require('../../app');
	var env = __webpack_require__(96);
	var puremvc = __webpack_require__(93);
	
	var PlayLayer = cc.Layer.extend({
	  sushiArray: null,
	  score: 0,
	  scoreLabel: null,
	  timeoutLabel: null,
	  timeout: null,
	
	  ctor: function ctor() {
	    this._super();
	    this.sushiArray = [];
	    this.timeout = 60;
	
	    // add bg
	    var size = cc.winSize;
	    this.bgSprite = new cc.Sprite(res.backgroundPng);
	    this.bgSprite.attr({
	      x: size.width / 2,
	      y: size.height / 2,
	      rotation: 180
	    });
	    this.addChild(this.bgSprite, 0);
	
	    // add score
	    this.scoreLabel = new cc.LabelTTF('', 'Arial', 38);
	    this.scoreLabel.attr({
	      x: size.width / 2 + 240,
	      y: size.height - 30
	    });
	    this.addChild(this.scoreLabel, 5);
	    this.updateScore(0);
	
	    // add timeout
	    this.timeoutLabel = new cc.LabelTTF('' + this.timeout, 'Arial', 38);
	    this.timeoutLabel.attr({
	      x: 50,
	      y: size.height - 30
	    });
	    this.addChild(this.timeoutLabel, 5);
	
	    // load cache
	    cc.spriteFrameCache.addSpriteFrames(res.sushiPlist);
	
	    // add sushi schedule
	    this.schedule(this.addSushi, 1, cc.REPEAT_FOREVER, 1);
	    this.schedule(this.cleanSushi, 1, cc.REPEAT_FOREVER, 1);
	
	    return true;
	  },
	  cleanSushi: function cleanSushi() {
	    // clean
	    for (var i = 0; i < this.sushiArray.length; i++) {
	      if (this.sushiArray[i].y <= 0) {
	        console.log('remove sushi');
	        this.sushiArray[i].removeFromParent();
	        this.sushiArray[i] = undefined;
	        this.sushiArray.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  addSushi: function addSushi() {
	    // add image
	    var sushi = new SushiSprite(res.sushiPng);
	    var size = cc.winSize;
	    var x = sushi.width / 2 + size.width / 2 * cc.random0To1();
	    sushi.attr({
	      x: x,
	      y: size.height - 30
	    });
	
	    // animation
	    var dropAction = cc.MoveTo.create(5, cc.p(sushi.x, -30));
	    sushi.runAction(dropAction);
	
	    // add
	    this.sushiArray.push(sushi);
	    this.addChild(sushi);
	  },
	  updateScore: function updateScore(score) {
	    if (!(typeof score === 'number')) {
	      throw new TypeError('Value of argument "score" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(score));
	    }
	
	    this.score = score;
	    this.scoreLabel.setString('score: ' + this.score);
	  }
	});
	
	module.exports = cc.Scene.extend({
	  /** @override */
	  init: function init() {
	    this._super();
	    console.log('play scene init');
	  },
	
	
	  /** @override */
	  cleanup: function cleanup() {
	    this._super();
	    console.log('play scene cleanup');
	  },
	
	
	  /** @override */
	  onEnter: function onEnter() {
	    this._super();
	    var player = new PlayLayer();
	    player.setTag(1);
	    this.addChild(player);
	  },
	  listNotificationInterests: function listNotificationInterests() {
	    return [env.CMD.SUSHI_TOUCH];
	  },
	  handleNotification: function handleNotification(notify) {
	    if (!(notify instanceof puremvc.Notification)) {
	      throw new TypeError('Value of argument "notify" violates contract.\n\nExpected:\npuremvc.Notification\n\nGot:\n' + _inspect(notify));
	    }
	
	    var layer = this.getChildByTag(1);
	
	    if (!(layer instanceof PlayLayer)) {
	      throw new TypeError('Value of variable "layer" violates contract.\n\nExpected:\nPlayLayer\n\nGot:\n' + _inspect(layer));
	    }
	
	    layer.updateScore(layer.score + 1);
	  }
	});
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by leo on 2016/7/28.
	 */
	
	'use strict';
	
	var _stringify = __webpack_require__(2);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = __webpack_require__(1);
	var env = __webpack_require__(96);
	
	module.exports = cc.Sprite.extend({
	  _disappearAction: null,
	  _touchListener: null,
	
	  /** @override */
	  onEnter: function onEnter() {
	    var _this = this;
	
	    this._super();
	
	    // create disappear action
	    var frames = [];
	    for (var i = 0; i < 10; i++) {
	      var str = 'sushi_1n_' + i + '.png';
	      var frame = cc.spriteFrameCache.getSpriteFrame(str);
	      frames.push(frame);
	    }
	    this._disappearAction = new cc.Animate(new cc.Animation(frames, 0.02));
	    this._disappearAction.retain();
	
	    // add event listener
	    this._touchListener = cc.EventListener.create({
	      event: cc.EventListener.TOUCH_ONE_BY_ONE,
	      swallowTouches: true,
	      onTouchBegan: function onTouchBegan(touch, event) {
	        cc.log('touched at ' + (0, _stringify2.default)(touch.getLocation()));
	
	        // check touch hit
	        var target = event.getCurrentTarget();
	        if (!cc.rectContainsPoint(target.getBoundingBox(), touch.getLocation())) {
	          return false;
	        }
	
	        // unregiter event
	        cc.eventManager.removeListener(_this._touchListener);
	
	        // play disappear
	        target.stopAllActions();
	        target.runAction(cc.sequence(_this._disappearAction, cc.callFunc(target.removeFromParent, target)));
	
	        // add scroe
	        app.instance().sendNotification(env.CMD.SUSHI_TOUCH, {});
	        return true;
	      }
	    });
	    cc.eventManager.addListener(this._touchListener, this);
	  },
	
	
	  /** @override */
	  onExit: function onExit() {
	    this._disappearAction.release();
	    this._super();
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=main.compiled.js.map