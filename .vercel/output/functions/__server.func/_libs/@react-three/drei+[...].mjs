import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { C as PlaneGeometry, D as SRGBColorSpace, E as RedFormat, M as Vector2, N as Vector3, O as Scene, P as WebGLRenderTarget, S as PerspectiveCamera, T as Raycaster, _ as LinearSRGBColorSpace, a as three_module_exports, b as MeshDepthMaterial, c as ColorManagement, d as DataUtils, f as FloatType, g as LinearFilter, h as Layers, i as WebGLRenderer, k as ShaderMaterial, l as CubeTextureLoader, m as IcosahedronGeometry, n as HDRJPGLoader, o as Clock, p as HalfFloatType, r as WebGLCubeRenderTarget, s as Color, t as GainMapLoader, u as DataTextureLoader, v as MathUtils, w as RGBAFormat, x as OrthographicCamera, y as Mesh } from "../monogrid__gainmap-js+three.mjs";
import { t as _extends } from "../babel__runtime.mjs";
import { createRequire } from "module";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var assign = Object.assign;
	var emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	var Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useState = React.useState;
	var useEffect = React.useEffect;
	var useLayoutEffect = React.useLayoutEffect;
	var useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	var shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useSyncExternalStore = shim.useSyncExternalStore;
	var useRef = React.useRef;
	var useEffect = React.useEffect;
	var useMemo = React.useMemo;
	var useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.7";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/zustand/esm/vanilla.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_with_selector = /* @__PURE__ */ __toESM(require_with_selector(), 1);
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore$1 = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
//#endregion
//#region node_modules/zustand/esm/traditional.mjs
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var identity = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
	const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
	import_react.useDebugValue(slice);
	return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
	const api = createStore$1(createState);
	const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
	Object.assign(useBoundStoreWithEqualityFn, api);
	return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = ((createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl);
//#endregion
//#region node_modules/suspend-react/index.js
var isPromise = (promise) => typeof promise === "object" && typeof promise.then === "function";
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {
	if (arrA === arrB) return true;
	if (!arrA || !arrB) return false;
	const len = arrA.length;
	if (arrB.length !== len) return false;
	for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;
	return true;
}
function query(fn, keys = null, preload = false, config = {}) {
	if (keys === null) keys = [fn];
	for (const entry of globalCache) if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
		if (preload) return void 0;
		if (Object.prototype.hasOwnProperty.call(entry, "error")) throw entry.error;
		if (Object.prototype.hasOwnProperty.call(entry, "response")) {
			if (config.lifespan && config.lifespan > 0) {
				if (entry.timeout) clearTimeout(entry.timeout);
				entry.timeout = setTimeout(entry.remove, config.lifespan);
			}
			return entry.response;
		}
		if (!preload) throw entry.promise;
	}
	const entry = {
		keys,
		equal: config.equal,
		remove: () => {
			const index = globalCache.indexOf(entry);
			if (index !== -1) globalCache.splice(index, 1);
		},
		promise: (isPromise(fn) ? fn : fn(...keys)).then((response) => {
			entry.response = response;
			if (config.lifespan && config.lifespan > 0) entry.timeout = setTimeout(entry.remove, config.lifespan);
		}).catch((error) => entry.error = error)
	};
	globalCache.push(entry);
	if (!preload) throw entry.promise;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);
var preload = (fn, keys, config) => void query(fn, keys, true, config);
var clear = (keys) => {
	if (keys === void 0 || keys.length === 0) globalCache.splice(0, globalCache.length);
	else {
		const entry = globalCache.find((entry) => shallowEqualArrays(keys, entry.keys, entry.equal));
		if (entry) entry.remove();
	}
};
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.js
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	function push(heap, node) {
		var index = heap.length;
		heap.push(node);
		a: for (; 0 < index;) {
			var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
			if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
			else break a;
		}
	}
	function peek(heap) {
		return 0 === heap.length ? null : heap[0];
	}
	function pop(heap) {
		if (0 === heap.length) return null;
		var first = heap[0], last = heap.pop();
		if (last !== first) {
			heap[0] = last;
			a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;) {
				var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
				if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
				else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
				else break a;
			}
		}
		return first;
	}
	function compare(a, b) {
		var diff = a.sortIndex - b.sortIndex;
		return 0 !== diff ? diff : a.id - b.id;
	}
	exports.unstable_now = void 0;
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var localPerformance = performance;
		exports.unstable_now = function() {
			return localPerformance.now();
		};
	} else {
		var localDate = Date, initialTime = localDate.now();
		exports.unstable_now = function() {
			return localDate.now() - initialTime;
		};
	}
	var taskQueue = [];
	var timerQueue = [];
	var taskIdCounter = 1;
	var currentTask = null;
	var currentPriorityLevel = 3;
	var isPerformingWork = !1;
	var isHostCallbackScheduled = !1;
	var isHostTimeoutScheduled = !1;
	var needsPaint = !1;
	var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
	var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
	var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
	function advanceTimers(currentTime) {
		for (var timer = peek(timerQueue); null !== timer;) {
			if (null === timer.callback) pop(timerQueue);
			else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
			else break;
			timer = peek(timerQueue);
		}
	}
	function handleTimeout(currentTime) {
		isHostTimeoutScheduled = !1;
		advanceTimers(currentTime);
		if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
		else {
			var firstTimer = peek(timerQueue);
			null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		}
	}
	var isMessageLoopRunning = !1;
	var taskTimeoutID = -1;
	var frameInterval = 5;
	var startTime = -1;
	function shouldYieldToHost() {
		return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
	}
	function performWorkUntilDeadline() {
		needsPaint = !1;
		if (isMessageLoopRunning) {
			var currentTime = exports.unstable_now();
			startTime = currentTime;
			var hasMoreWork = !0;
			try {
				a: {
					isHostCallbackScheduled = !1;
					isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
					isPerformingWork = !0;
					var previousPriorityLevel = currentPriorityLevel;
					try {
						b: {
							advanceTimers(currentTime);
							for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());) {
								var callback = currentTask.callback;
								if ("function" === typeof callback) {
									currentTask.callback = null;
									currentPriorityLevel = currentTask.priorityLevel;
									var continuationCallback = callback(currentTask.expirationTime <= currentTime);
									currentTime = exports.unstable_now();
									if ("function" === typeof continuationCallback) {
										currentTask.callback = continuationCallback;
										advanceTimers(currentTime);
										hasMoreWork = !0;
										break b;
									}
									currentTask === peek(taskQueue) && pop(taskQueue);
									advanceTimers(currentTime);
								} else pop(taskQueue);
								currentTask = peek(taskQueue);
							}
							if (null !== currentTask) hasMoreWork = !0;
							else {
								var firstTimer = peek(timerQueue);
								null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								hasMoreWork = !1;
							}
						}
						break a;
					} finally {
						currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
					}
					hasMoreWork = void 0;
				}
			} finally {
				hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
			}
		}
	}
	var schedulePerformWorkUntilDeadline;
	if ("function" === typeof localSetImmediate) schedulePerformWorkUntilDeadline = function() {
		localSetImmediate(performWorkUntilDeadline);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var channel = new MessageChannel(), port = channel.port2;
		channel.port1.onmessage = performWorkUntilDeadline;
		schedulePerformWorkUntilDeadline = function() {
			port.postMessage(null);
		};
	} else schedulePerformWorkUntilDeadline = function() {
		localSetTimeout(performWorkUntilDeadline, 0);
	};
	function requestHostTimeout(callback, ms) {
		taskTimeoutID = localSetTimeout(function() {
			callback(exports.unstable_now());
		}, ms);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(task) {
		task.callback = null;
	};
	exports.unstable_forceFrameRate = function(fps) {
		0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return currentPriorityLevel;
	};
	exports.unstable_next = function(eventHandler) {
		switch (currentPriorityLevel) {
			case 1:
			case 2:
			case 3:
				var priorityLevel = 3;
				break;
			default: priorityLevel = currentPriorityLevel;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_requestPaint = function() {
		needsPaint = !0;
	};
	exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
		switch (priorityLevel) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: priorityLevel = 3;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
		var currentTime = exports.unstable_now();
		"object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
		switch (priorityLevel) {
			case 1:
				var timeout = -1;
				break;
			case 2:
				timeout = 250;
				break;
			case 5:
				timeout = 1073741823;
				break;
			case 4:
				timeout = 1e4;
				break;
			default: timeout = 5e3;
		}
		timeout = options + timeout;
		priorityLevel = {
			id: taskIdCounter++,
			callback,
			priorityLevel,
			startTime: options,
			expirationTime: timeout,
			sortIndex: -1
		};
		options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
		return priorityLevel;
	};
	exports.unstable_shouldYield = shouldYieldToHost;
	exports.unstable_wrapCallback = function(callback) {
		var parentPriorityLevel = currentPriorityLevel;
		return function() {
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = parentPriorityLevel;
			try {
				return callback.apply(this, arguments);
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production();
}));
//#endregion
//#region node_modules/its-fine/dist/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_scheduler = /* @__PURE__ */ __toESM(require_scheduler());
/* @__PURE__ */ (() => {
	var e, t;
	return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? import_react.useLayoutEffect : import_react.useEffect;
function i$2(e, t, r) {
	if (!e) return;
	if (r(e) === !0) return e;
	let n = t ? e.return : e.child;
	for (; n;) {
		const u = i$2(n, t, r);
		if (u) return u;
		n = t ? null : n.sibling;
	}
}
function l(e) {
	try {
		return Object.defineProperties(e, {
			_currentRenderer: {
				get() {
					return null;
				},
				set() {}
			},
			_currentRenderer2: {
				get() {
					return null;
				},
				set() {}
			}
		});
	} catch (t) {
		return e;
	}
}
var a = /* @__PURE__ */ l(/* @__PURE__ */ import_react.createContext(null));
var m = class extends import_react.Component {
	render() {
		return /* @__PURE__ */ import_react.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
	}
};
function c() {
	const e = import_react.useContext(a);
	if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
	const t = import_react.useId();
	return import_react.useMemo(() => {
		for (const n of [e, e == null ? void 0 : e.alternate]) {
			if (!n) continue;
			const u = i$2(n, !1, (d) => {
				let s = d.memoizedState;
				for (; s;) {
					if (s.memoizedState === t) return !0;
					s = s.next;
				}
			});
			if (u) return u;
		}
	}, [e, t]);
}
var p$1 = Symbol.for("react.context");
var b = (e) => e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p$1;
function h() {
	const e = c(), [t] = import_react.useState(() => /* @__PURE__ */ new Map());
	t.clear();
	let r = e;
	for (; r;) {
		const n = r.type;
		b(n) && n !== a && !t.has(n) && t.set(n, import_react.use(l(n))), r = r.return;
	}
	return t;
}
function x$1() {
	const e = h();
	return import_react.useMemo(() => Array.from(e.keys()).reduce((t, r) => (n) => /* @__PURE__ */ import_react.createElement(t, null, /* @__PURE__ */ import_react.createElement(r.Provider, {
		...n,
		value: e.get(r)
	})), (t) => /* @__PURE__ */ import_react.createElement(m, { ...t })), [e]);
}
//#endregion
//#region node_modules/@react-three/fiber/dist/events-b389eeca.esm.js
/**
* Returns the instance's initial (outmost) root.
*/
function findInitialRoot(instance) {
	let root = instance.root;
	while (root.getState().previousRoot) root = root.getState().previousRoot;
	return root;
}
var isOrthographicCamera = (def) => def && def.isOrthographicCamera;
var isRef$1 = (obj) => obj && obj.hasOwnProperty("current");
var isColorRepresentation = (value) => value != null && (typeof value === "string" || typeof value === "number" || value.isColor);
/**
* An SSR-friendly useLayoutEffect.
*
* React currently throws a warning when using useLayoutEffect on the server.
* To get around it, we can conditionally useEffect on the server (no-op) and
* useLayoutEffect elsewhere.
*
* @see https://github.com/facebook/react/issues/14927
*/
var useIsomorphicLayoutEffect = /* @__PURE__ */ ((_window$document, _window$navigator) => typeof window !== "undefined" && (((_window$document = window.document) == null ? void 0 : _window$document.createElement) || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === "ReactNative"))() ? import_react.useLayoutEffect : import_react.useEffect;
function useMutableCallback(fn) {
	const ref = import_react.useRef(fn);
	useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
	return ref;
}
/**
* Bridges renderer Context and StrictMode from a primary renderer.
*/
function useBridge() {
	const fiber = c();
	const ContextBridge = x$1();
	return import_react.useMemo(() => ({ children }) => {
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(!!i$2(fiber, true, (node) => node.type === import_react.StrictMode) ? import_react.StrictMode : import_react.Fragment, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ContextBridge, { children }) });
	}, [fiber, ContextBridge]);
}
function Block({ set }) {
	useIsomorphicLayoutEffect(() => {
		set(new Promise(() => null));
		return () => set(false);
	}, [set]);
	return null;
}
var ErrorBoundary = /* @__PURE__ */ ((_ErrorBoundary) => (_ErrorBoundary = class ErrorBoundary extends import_react.Component {
	constructor(...args) {
		super(...args);
		this.state = { error: false };
	}
	componentDidCatch(err) {
		this.props.set(err);
	}
	render() {
		return this.state.error ? null : this.props.children;
	}
}, _ErrorBoundary.getDerivedStateFromError = () => ({ error: true }), _ErrorBoundary))();
function calculateDpr(dpr) {
	var _window$devicePixelRa;
	const target = typeof window !== "undefined" ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
	return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
/**
* Returns instance root state
*/
function getRootState(obj) {
	var _r3f;
	return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
}
var is = {
	obj: (a) => a === Object(a) && !is.arr(a) && typeof a !== "function",
	fun: (a) => typeof a === "function",
	str: (a) => typeof a === "string",
	num: (a) => typeof a === "number",
	boo: (a) => typeof a === "boolean",
	und: (a) => a === void 0,
	nul: (a) => a === null,
	arr: (a) => Array.isArray(a),
	equ(a, b, { arrays = "shallow", objects = "reference", strict = true } = {}) {
		if (typeof a !== typeof b || !!a !== !!b) return false;
		if (is.str(a) || is.num(a) || is.boo(a)) return a === b;
		const isObj = is.obj(a);
		if (isObj && objects === "reference") return a === b;
		const isArr = is.arr(a);
		if (isArr && arrays === "reference") return a === b;
		if ((isArr || isObj) && a === b) return true;
		let i;
		for (i in a) if (!(i in b)) return false;
		if (isObj && arrays === "shallow" && objects === "shallow") {
			for (i in strict ? b : a) if (!is.equ(a[i], b[i], {
				strict,
				objects: "reference"
			})) return false;
		} else for (i in strict ? b : a) if (a[i] !== b[i]) return false;
		if (is.und(i)) {
			if (isArr && a.length === 0 && b.length === 0) return true;
			if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
			if (a !== b) return false;
		}
		return true;
	}
};
function buildGraph(object) {
	const data = {
		nodes: {},
		materials: {},
		meshes: {}
	};
	if (object) object.traverse((obj) => {
		if (obj.name) data.nodes[obj.name] = obj;
		if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
		if (obj.isMesh && !data.meshes[obj.name]) data.meshes[obj.name] = obj;
	});
	return data;
}
function dispose(obj) {
	if (obj.type !== "Scene") obj.dispose == null || obj.dispose();
	for (const p in obj) {
		const prop = obj[p];
		if ((prop == null ? void 0 : prop.type) !== "Scene") prop == null || prop.dispose == null || prop.dispose();
	}
}
var REACT_INTERNAL_PROPS = [
	"children",
	"key",
	"ref"
];
function getInstanceProps(pendingProps) {
	const props = {};
	for (const key in pendingProps) if (!REACT_INTERNAL_PROPS.includes(key)) props[key] = pendingProps[key];
	return props;
}
function prepare(target, root, type, props) {
	const object = target;
	let instance = object == null ? void 0 : object.__r3f;
	if (!instance) {
		instance = {
			root,
			type,
			parent: null,
			children: [],
			props: getInstanceProps(props),
			object,
			eventCount: 0,
			handlers: {},
			isHidden: false
		};
		if (object) object.__r3f = instance;
	}
	return instance;
}
function resolve(root, key) {
	if (!key.includes("-")) return {
		root,
		key,
		target: root[key]
	};
	if (key in root) return {
		root,
		key,
		target: root[key]
	};
	let target = root;
	const parts = key.split("-");
	for (const part of parts) {
		if (typeof target !== "object" || target === null) {
			if (target !== void 0) {
				const remaining = parts.slice(parts.indexOf(part)).join("-");
				return {
					root: target,
					key: remaining,
					target: void 0
				};
			}
			return {
				root,
				key,
				target: void 0
			};
		}
		key = part;
		root = target;
		target = target[key];
	}
	return {
		root,
		key,
		target
	};
}
var INDEX_REGEX = /-\d+$/;
function attach(parent, child) {
	if (is.str(child.props.attach)) {
		if (INDEX_REGEX.test(child.props.attach)) {
			const index = child.props.attach.replace(INDEX_REGEX, "");
			const { root, key } = resolve(parent.object, index);
			if (!Array.isArray(root[key])) root[key] = [];
		}
		const { root, key } = resolve(parent.object, child.props.attach);
		child.previousAttach = root[key];
		root[key] = child.object;
	} else if (is.fun(child.props.attach)) child.previousAttach = child.props.attach(parent.object, child.object);
}
function detach(parent, child) {
	if (is.str(child.props.attach)) {
		const { root, key } = resolve(parent.object, child.props.attach);
		const previous = child.previousAttach;
		if (previous === void 0) delete root[key];
		else root[key] = previous;
	} else child.previousAttach == null || child.previousAttach(parent.object, child.object);
	delete child.previousAttach;
}
var RESERVED_PROPS = [
	...REACT_INTERNAL_PROPS,
	"args",
	"dispose",
	"attach",
	"object",
	"onUpdate",
	"dispose"
];
var MEMOIZED_PROTOTYPES = /* @__PURE__ */ new Map();
function getMemoizedPrototype(root) {
	let ctor = MEMOIZED_PROTOTYPES.get(root.constructor);
	try {
		if (!ctor) {
			ctor = new root.constructor();
			MEMOIZED_PROTOTYPES.set(root.constructor, ctor);
		}
	} catch (e) {}
	return ctor;
}
function diffProps(instance, newProps) {
	const changedProps = {};
	for (const prop in newProps) {
		if (RESERVED_PROPS.includes(prop)) continue;
		if (is.equ(newProps[prop], instance.props[prop])) continue;
		changedProps[prop] = newProps[prop];
		for (const other in newProps) if (other.startsWith(`${prop}-`)) changedProps[other] = newProps[other];
	}
	for (const prop in instance.props) {
		if (RESERVED_PROPS.includes(prop) || newProps.hasOwnProperty(prop)) continue;
		const { root, key } = resolve(instance.object, prop);
		if (root.constructor && root.constructor.length === 0) {
			const ctor = getMemoizedPrototype(root);
			if (!is.und(ctor)) changedProps[key] = ctor[key];
		} else changedProps[key] = 0;
	}
	return changedProps;
}
var colorMaps = [
	"map",
	"emissiveMap",
	"sheenColorMap",
	"specularColorMap",
	"envMap"
];
var EVENT_REGEX = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function applyProps(object, props) {
	var _instance$object;
	const instance = object.__r3f;
	const rootState = instance && findInitialRoot(instance).getState();
	const prevHandlers = instance == null ? void 0 : instance.eventCount;
	for (const prop in props) {
		let value = props[prop];
		if (RESERVED_PROPS.includes(prop)) continue;
		if (instance && EVENT_REGEX.test(prop)) {
			if (typeof value === "function") instance.handlers[prop] = value;
			else delete instance.handlers[prop];
			instance.eventCount = Object.keys(instance.handlers).length;
			continue;
		}
		if (value === void 0) continue;
		let { root, key, target } = resolve(object, prop);
		if (target === void 0 && (typeof root !== "object" || root === null)) throw Error(`R3F: Cannot set "${prop}". Ensure it is an object before setting "${key}".`);
		if (target instanceof Layers && value instanceof Layers) target.mask = value.mask;
		else if (target instanceof Color && isColorRepresentation(value)) target.set(value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof target.copy === "function" && value != null && value.constructor && target.constructor === value.constructor) target.copy(value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && Array.isArray(value)) if (typeof target.fromArray === "function") target.fromArray(value);
		else target.set(...value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof value === "number") if (typeof target.setScalar === "function") target.setScalar(value);
		else target.set(value);
		else if (root instanceof ShaderMaterial && key === "uniforms" && is.obj(value)) {
			if (!is.obj(root.uniforms)) root.uniforms = {};
			const uniforms = root.uniforms;
			const nextUniforms = value;
			for (const name in nextUniforms) {
				const uniform = nextUniforms[name];
				const targetUniform = uniforms[name];
				if (targetUniform) Object.assign(targetUniform, uniform);
				else uniforms[name] = { ...uniform };
			}
		} else {
			var _root$key;
			root[key] = value;
			if (rootState && !rootState.linear && colorMaps.includes(key) && (_root$key = root[key]) != null && _root$key.isTexture && root[key].format === 1023 && root[key].type === 1009) root[key].colorSpace = SRGBColorSpace;
		}
	}
	if (instance != null && instance.parent && rootState != null && rootState.internal && (_instance$object = instance.object) != null && _instance$object.isObject3D && prevHandlers !== instance.eventCount) {
		const object = instance.object;
		const index = rootState.internal.interaction.indexOf(object);
		if (index > -1) rootState.internal.interaction.splice(index, 1);
		if (instance.eventCount && object.raycast !== null) rootState.internal.interaction.push(object);
	}
	if (instance && instance.props.attach === void 0) {
		if (instance.object.isBufferGeometry) instance.props.attach = "geometry";
		else if (instance.object.isMaterial) instance.props.attach = "material";
	}
	if (instance) invalidateInstance(instance);
	return object;
}
function invalidateInstance(instance) {
	var _instance$root;
	if (!instance.parent) return;
	instance.props.onUpdate == null || instance.props.onUpdate(instance.object);
	const state = (_instance$root = instance.root) == null ? void 0 : _instance$root.getState == null ? void 0 : _instance$root.getState();
	if (state && state.internal.frames === 0) state.invalidate();
}
function updateCamera(camera, size) {
	if (camera.manual) return;
	if (isOrthographicCamera(camera)) {
		camera.left = size.width / -2;
		camera.right = size.width / 2;
		camera.top = size.height / 2;
		camera.bottom = size.height / -2;
	} else camera.aspect = size.width / size.height;
	camera.updateProjectionMatrix();
}
var isObject3D = (object) => object == null ? void 0 : object.isObject3D;
function makeId(event) {
	return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
/**
* Release pointer captures.
* This is called by releasePointerCapture in the API, and when an object is removed.
*/
function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
	const captureData = captures.get(obj);
	if (captureData) {
		captures.delete(obj);
		if (captures.size === 0) {
			capturedMap.delete(pointerId);
			captureData.target.releasePointerCapture(pointerId);
		}
	}
}
/** This function transfers all interactivity state from one object instance to another. Used when swapping instances due to reconstruction. */
function swapInteractivity(store, object, newObject) {
	const { internal } = store.getState();
	for (let i = 0; i < internal.interaction.length; i++) if (internal.interaction[i] === object) internal.interaction[i] = newObject;
	for (let i = 0; i < internal.initialHits.length; i++) if (internal.initialHits[i] === object) internal.initialHits[i] = newObject;
	internal.hovered.forEach((value, key) => {
		if (value.eventObject === object || value.object === object) {
			internal.hovered.delete(key);
			const next = {
				...value,
				eventObject: value.eventObject === object ? newObject : value.eventObject,
				object: value.object === object ? newObject : value.object
			};
			internal.hovered.set(makeId(next), next);
		}
	});
	internal.capturedMap.forEach((captures) => {
		const captureData = captures.get(object);
		if (captureData) {
			captures.delete(object);
			captures.set(newObject, captureData);
		}
	});
}
function removeInteractivity(store, object) {
	const { internal } = store.getState();
	internal.interaction = internal.interaction.filter((o) => o !== object);
	internal.initialHits = internal.initialHits.filter((o) => o !== object);
	internal.hovered.forEach((value, key) => {
		if (value.eventObject === object || value.object === object) internal.hovered.delete(key);
	});
	internal.capturedMap.forEach((captures, pointerId) => {
		releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
	});
}
function createEvents(store) {
	/** Calculates delta */
	function calculateDistance(event) {
		const { internal } = store.getState();
		const dx = event.offsetX - internal.initialClick[0];
		const dy = event.offsetY - internal.initialClick[1];
		return Math.round(Math.sqrt(dx * dx + dy * dy));
	}
	/** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */
	function filterPointerEvents(objects) {
		return objects.filter((obj) => [
			"Move",
			"Over",
			"Enter",
			"Out",
			"Leave"
		].some((name) => {
			var _r3f;
			return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers["onPointer" + name];
		}));
	}
	function intersect(event, filter) {
		const state = store.getState();
		const duplicates = /* @__PURE__ */ new Set();
		const intersections = [];
		const eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction;
		for (let i = 0; i < eventsObjects.length; i++) {
			const state = getRootState(eventsObjects[i]);
			if (state) state.raycaster.camera = void 0;
		}
		if (!state.previousRoot) state.events.compute == null || state.events.compute(event, state);
		function handleRaycast(obj) {
			const state = getRootState(obj);
			if (!state || !state.events.enabled || state.raycaster.camera === null) return [];
			if (state.raycaster.camera === void 0) {
				var _state$previousRoot;
				state.events.compute == null || state.events.compute(event, state, (_state$previousRoot = state.previousRoot) == null ? void 0 : _state$previousRoot.getState());
				if (state.raycaster.camera === void 0) state.raycaster.camera = null;
			}
			return state.raycaster.camera ? state.raycaster.intersectObject(obj, true) : [];
		}
		let hits = eventsObjects.flatMap(handleRaycast).sort((a, b) => {
			const aState = getRootState(a.object);
			const bState = getRootState(b.object);
			if (!aState || !bState) return a.distance - b.distance;
			return bState.events.priority - aState.events.priority || a.distance - b.distance;
		}).filter((item) => {
			const id = makeId(item);
			if (duplicates.has(id)) return false;
			duplicates.add(id);
			return true;
		});
		if (state.events.filter) hits = state.events.filter(hits, state);
		for (const hit of hits) {
			let eventObject = hit.object;
			while (eventObject) {
				var _r3f2;
				if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
					...hit,
					eventObject
				});
				eventObject = eventObject.parent;
			}
		}
		if ("pointerId" in event && state.internal.capturedMap.has(event.pointerId)) {
			for (let captureData of state.internal.capturedMap.get(event.pointerId).values()) if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
		}
		return intersections;
	}
	/**  Handles intersections by forwarding them to handlers */
	function handleIntersects(intersections, event, delta, callback) {
		if (intersections.length) {
			const localState = { stopped: false };
			for (const hit of intersections) {
				let state = getRootState(hit.object);
				if (!state) hit.object.traverseAncestors((obj) => {
					const parentState = getRootState(obj);
					if (parentState) {
						state = parentState;
						return false;
					}
				});
				if (state) {
					const { raycaster, pointer, camera, internal } = state;
					const unprojectedPoint = new Vector3(pointer.x, pointer.y, 0).unproject(camera);
					const hasPointerCapture = (id) => {
						var _internal$capturedMap, _internal$capturedMap2;
						return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
					};
					const setPointerCapture = (id) => {
						const captureData = {
							intersection: hit,
							target: event.target
						};
						if (internal.capturedMap.has(id)) internal.capturedMap.get(id).set(hit.eventObject, captureData);
						else internal.capturedMap.set(id, /* @__PURE__ */ new Map([[hit.eventObject, captureData]]));
						event.target.setPointerCapture(id);
					};
					const releasePointerCapture = (id) => {
						const captures = internal.capturedMap.get(id);
						if (captures) releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
					};
					let extractEventProps = {};
					for (let prop in event) {
						let property = event[prop];
						if (typeof property !== "function") extractEventProps[prop] = property;
					}
					let raycastEvent = {
						...hit,
						...extractEventProps,
						pointer,
						intersections,
						stopped: localState.stopped,
						delta,
						unprojectedPoint,
						ray: raycaster.ray,
						camera,
						stopPropagation() {
							const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
							if (!capturesForPointer || capturesForPointer.has(hit.eventObject)) {
								raycastEvent.stopped = localState.stopped = true;
								if (internal.hovered.size && Array.from(internal.hovered.values()).find((i) => i.eventObject === hit.eventObject)) cancelPointer([...intersections.slice(0, intersections.indexOf(hit)), hit]);
							}
						},
						target: {
							hasPointerCapture,
							setPointerCapture,
							releasePointerCapture
						},
						currentTarget: {
							hasPointerCapture,
							setPointerCapture,
							releasePointerCapture
						},
						nativeEvent: event
					};
					callback(raycastEvent);
					if (localState.stopped === true) break;
				}
			}
		}
		return intersections;
	}
	function cancelPointer(intersections) {
		const { internal } = store.getState();
		for (const hoveredObj of internal.hovered.values()) if (!intersections.length || !intersections.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
			const instance = hoveredObj.eventObject.__r3f;
			internal.hovered.delete(makeId(hoveredObj));
			if (instance != null && instance.eventCount) {
				const handlers = instance.handlers;
				const data = {
					...hoveredObj,
					intersections
				};
				handlers.onPointerOut == null || handlers.onPointerOut(data);
				handlers.onPointerLeave == null || handlers.onPointerLeave(data);
			}
		}
	}
	function pointerMissed(event, objects) {
		for (let i = 0; i < objects.length; i++) {
			const instance = objects[i].__r3f;
			instance == null || instance.handlers.onPointerMissed == null || instance.handlers.onPointerMissed(event);
		}
	}
	function handlePointer(name) {
		switch (name) {
			case "onPointerLeave":
			case "onPointerCancel": return () => cancelPointer([]);
			case "onLostPointerCapture": return (event) => {
				const { internal } = store.getState();
				if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) requestAnimationFrame(() => {
					if (internal.capturedMap.has(event.pointerId)) {
						internal.capturedMap.delete(event.pointerId);
						cancelPointer([]);
					}
				});
			};
		}
		return function handleEvent(event) {
			const { onPointerMissed, internal } = store.getState();
			internal.lastEvent.current = event;
			const isPointerMove = name === "onPointerMove";
			const isClickEvent = name === "onClick" || name === "onContextMenu" || name === "onDoubleClick";
			const hits = intersect(event, isPointerMove ? filterPointerEvents : void 0);
			const delta = isClickEvent ? calculateDistance(event) : 0;
			if (name === "onPointerDown") {
				internal.initialClick = [event.offsetX, event.offsetY];
				internal.initialHits = hits.map((hit) => hit.eventObject);
			}
			if (isClickEvent && !hits.length) {
				if (delta <= 2) {
					pointerMissed(event, internal.interaction);
					if (onPointerMissed) onPointerMissed(event);
				}
			}
			if (isPointerMove) cancelPointer(hits);
			function onIntersect(data) {
				const eventObject = data.eventObject;
				const instance = eventObject.__r3f;
				if (!(instance != null && instance.eventCount)) return;
				const handlers = instance.handlers;
				if (isPointerMove) {
					if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
						const id = makeId(data);
						const hoveredItem = internal.hovered.get(id);
						if (!hoveredItem) {
							internal.hovered.set(id, data);
							handlers.onPointerOver == null || handlers.onPointerOver(data);
							handlers.onPointerEnter == null || handlers.onPointerEnter(data);
						} else if (hoveredItem.stopped) data.stopPropagation();
					}
					handlers.onPointerMove == null || handlers.onPointerMove(data);
				} else {
					const handler = handlers[name];
					if (handler) {
						if (!isClickEvent || internal.initialHits.includes(eventObject)) {
							pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
							handler(data);
						}
					} else if (isClickEvent && internal.initialHits.includes(eventObject)) pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
				}
			}
			handleIntersects(hits, event, delta, onIntersect);
		};
	}
	return { handlePointer };
}
var isRenderer = (def) => !!(def != null && def.render);
var context = /* @__PURE__ */ import_react.createContext(null);
var createStore = (invalidate, advance) => {
	const rootStore = createWithEqualityFn((set, get) => {
		const position = new Vector3();
		const defaultTarget = new Vector3();
		const tempTarget = new Vector3();
		function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
			const { width, height, top, left } = size;
			const aspect = width / height;
			if (target.isVector3) tempTarget.copy(target);
			else tempTarget.set(...target);
			const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
			if (isOrthographicCamera(camera)) return {
				width: width / camera.zoom,
				height: height / camera.zoom,
				top,
				left,
				factor: 1,
				distance,
				aspect
			};
			else {
				const fov = camera.fov * Math.PI / 180;
				const h = 2 * Math.tan(fov / 2) * distance;
				const w = h * (width / height);
				return {
					width: w,
					height: h,
					top,
					left,
					factor: width / w,
					distance,
					aspect
				};
			}
		}
		let performanceTimeout = void 0;
		const setPerformanceCurrent = (current) => set((state) => ({ performance: {
			...state.performance,
			current
		} }));
		const pointer = new Vector2();
		return {
			set,
			get,
			gl: null,
			camera: null,
			raycaster: null,
			events: {
				priority: 1,
				enabled: true,
				connected: false
			},
			scene: null,
			xr: null,
			invalidate: (frames = 1) => invalidate(get(), frames),
			advance: (timestamp, runGlobalEffects) => advance(timestamp, runGlobalEffects, get()),
			legacy: false,
			linear: false,
			flat: false,
			controls: null,
			clock: new Clock(),
			pointer,
			mouse: pointer,
			frameloop: "always",
			onPointerMissed: void 0,
			performance: {
				current: 1,
				min: .5,
				max: 1,
				debounce: 200,
				regress: () => {
					const state = get();
					if (performanceTimeout) clearTimeout(performanceTimeout);
					if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min);
					performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state.performance.debounce);
				}
			},
			size: {
				width: 0,
				height: 0,
				top: 0,
				left: 0
			},
			viewport: {
				initialDpr: 0,
				dpr: 0,
				width: 0,
				height: 0,
				top: 0,
				left: 0,
				aspect: 0,
				distance: 0,
				factor: 0,
				getCurrentViewport
			},
			setEvents: (events) => set((state) => ({
				...state,
				events: {
					...state.events,
					...events
				}
			})),
			setSize: (width, height, top = 0, left = 0) => {
				const camera = get().camera;
				const size = {
					width,
					height,
					top,
					left
				};
				set((state) => ({
					size,
					viewport: {
						...state.viewport,
						...getCurrentViewport(camera, defaultTarget, size)
					}
				}));
			},
			setDpr: (dpr) => set((state) => {
				const resolved = calculateDpr(dpr);
				return { viewport: {
					...state.viewport,
					dpr: resolved,
					initialDpr: state.viewport.initialDpr || resolved
				} };
			}),
			setFrameloop: (frameloop = "always") => {
				const clock = get().clock;
				clock.stop();
				clock.elapsedTime = 0;
				if (frameloop !== "never") {
					clock.start();
					clock.elapsedTime = 0;
				}
				set(() => ({ frameloop }));
			},
			previousRoot: void 0,
			internal: {
				interaction: [],
				hovered: /* @__PURE__ */ new Map(),
				subscribers: [],
				initialClick: [0, 0],
				initialHits: [],
				capturedMap: /* @__PURE__ */ new Map(),
				lastEvent: /*#__PURE__*/ import_react.createRef(),
				active: false,
				frames: 0,
				priority: 0,
				subscribe: (ref, priority, store) => {
					const internal = get().internal;
					internal.priority = internal.priority + (priority > 0 ? 1 : 0);
					internal.subscribers.push({
						ref,
						priority,
						store
					});
					internal.subscribers = internal.subscribers.sort((a, b) => a.priority - b.priority);
					return () => {
						const internal = get().internal;
						if (internal != null && internal.subscribers) {
							internal.priority = internal.priority - (priority > 0 ? 1 : 0);
							internal.subscribers = internal.subscribers.filter((s) => s.ref !== ref);
						}
					};
				}
			}
		};
	});
	const state = rootStore.getState();
	let oldSize = state.size;
	let oldDpr = state.viewport.dpr;
	let oldCamera = state.camera;
	rootStore.subscribe(() => {
		const { camera, size, viewport, gl, set } = rootStore.getState();
		if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
			oldSize = size;
			oldDpr = viewport.dpr;
			updateCamera(camera, size);
			if (viewport.dpr > 0) gl.setPixelRatio(viewport.dpr);
			const updateStyle = typeof HTMLCanvasElement !== "undefined" && gl.domElement instanceof HTMLCanvasElement;
			gl.setSize(size.width, size.height, updateStyle);
		}
		if (camera !== oldCamera) {
			oldCamera = camera;
			set((state) => ({ viewport: {
				...state.viewport,
				...state.viewport.getCurrentViewport(camera)
			} }));
		}
	});
	rootStore.subscribe((state) => invalidate(state));
	return rootStore;
};
/**
* Returns the R3F Canvas' Zustand store. Useful for [transient updates](https://github.com/pmndrs/zustand#transient-updates-for-often-occurring-state-changes).
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usestore
*/
function useStore() {
	const store = import_react.useContext(context);
	if (!store) throw new Error("R3F: Hooks can only be used within the Canvas component!");
	return store;
}
/**
* Accesses R3F's internal state, containing renderer, canvas, scene, etc.
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usethree
*/
function useThree(selector = (state) => state, equalityFn) {
	return useStore()(selector, equalityFn);
}
/**
* Executes a callback before render in a shared frame loop.
* Can order effects with render priority or manually render with a positive priority.
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
*/
function useFrame(callback, renderPriority = 0) {
	const store = useStore();
	const subscribe = store.getState().internal.subscribe;
	const ref = useMutableCallback(callback);
	useIsomorphicLayoutEffect(() => subscribe(ref, renderPriority, store), [
		renderPriority,
		subscribe,
		store
	]);
	return null;
}
var memoizedLoaders = /* @__PURE__ */ new WeakMap();
var isConstructor$1 = (value) => {
	var _value$prototype;
	return typeof value === "function" && (value == null ? void 0 : (_value$prototype = value.prototype) == null ? void 0 : _value$prototype.constructor) === value;
};
function loadingFn(extensions, onProgress) {
	return function(Proto, ...input) {
		let loader;
		if (isConstructor$1(Proto)) {
			loader = memoizedLoaders.get(Proto);
			if (!loader) {
				loader = new Proto();
				memoizedLoaders.set(Proto, loader);
			}
		} else loader = Proto;
		if (extensions) extensions(loader);
		return Promise.all(input.map((input) => new Promise((res, reject) => loader.load(input, (data) => {
			if (isObject3D(data == null ? void 0 : data.scene)) Object.assign(data, buildGraph(data.scene));
			res(data);
		}, onProgress, (error) => reject(/* @__PURE__ */ new Error(`Could not load ${input}: ${error == null ? void 0 : error.message}`))))));
	};
}
/**
* Synchronously loads and caches assets with a three loader.
*
* Note: this hook's caller must be wrapped with `React.Suspense`
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
*/
function useLoader(loader, input, extensions, onProgress) {
	const keys = Array.isArray(input) ? input : [input];
	const results = suspend(loadingFn(extensions, onProgress), [loader, ...keys], { equal: is.equ });
	return Array.isArray(input) ? results : results[0];
}
/**
* Preloads an asset into cache as a side-effect.
*/
useLoader.preload = function(loader, input, extensions) {
	const keys = Array.isArray(input) ? input : [input];
	return preload(loadingFn(extensions), [loader, ...keys]);
};
/**
* Removes a loaded asset from cache.
*/
useLoader.clear = function(loader, input) {
	return clear([loader, ...Array.isArray(input) ? input : [input]]);
};
/**
* @license React
* react-reconciler-constants.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var t = 1;
var o = 8;
var r = 32;
var e = 2;
var packageData = {
	name: "@react-three/fiber",
	version: "9.6.1",
	description: "A React renderer for Threejs",
	keywords: [
		"react",
		"renderer",
		"fiber",
		"three",
		"threejs"
	],
	author: "Paul Henschel (https://github.com/drcmda)",
	license: "MIT",
	maintainers: [
		"Josh Ellis (https://github.com/joshuaellis)",
		"Cody Bennett (https://github.com/codyjasonbennett)",
		"Kris Baumgarter (https://github.com/krispya)"
	],
	bugs: { url: "https://github.com/pmndrs/react-three-fiber/issues" },
	homepage: "https://github.com/pmndrs/react-three-fiber#readme",
	repository: {
		type: "git",
		url: "git+https://github.com/pmndrs/react-three-fiber.git"
	},
	collective: {
		type: "opencollective",
		url: "https://opencollective.com/react-three-fiber"
	},
	main: "dist/react-three-fiber.cjs.js",
	module: "dist/react-three-fiber.esm.js",
	types: "dist/react-three-fiber.cjs.d.ts",
	"react-native": "native/dist/react-three-fiber-native.cjs.js",
	sideEffects: false,
	preconstruct: { entrypoints: ["index.tsx", "native.tsx"] },
	scripts: { prebuild: "cp ../../readme.md readme.md" },
	devDependencies: {
		"@types/react-reconciler": "^0.32.3",
		"react-reconciler": "^0.33.0"
	},
	dependencies: {
		"@babel/runtime": "^7.17.8",
		"@types/webxr": "*",
		"base64-js": "^1.5.1",
		buffer: "^6.0.3",
		"its-fine": "^2.0.0",
		"react-use-measure": "^2.1.7",
		scheduler: "^0.27.0",
		"suspend-react": "^0.1.3",
		"use-sync-external-store": "^1.4.0",
		zustand: "^5.0.3"
	},
	peerDependencies: {
		expo: ">=43.0",
		"expo-asset": ">=8.4",
		"expo-file-system": ">=11.0",
		"expo-gl": ">=11.0",
		react: ">=19 <19.3",
		"react-dom": ">=19 <19.3",
		"react-native": ">=0.78",
		three: ">=0.156"
	},
	peerDependenciesMeta: {
		"react-dom": { optional: true },
		"react-native": { optional: true },
		expo: { optional: true },
		"expo-asset": { optional: true },
		"expo-file-system": { optional: true },
		"expo-gl": { optional: true }
	}
};
function Xb(Tt) {
	return Tt && Tt.__esModule && Object.prototype.hasOwnProperty.call(Tt, "default") ? Tt.default : Tt;
}
var Rm = { exports: {} };
var Og = { exports: {} };
/**
* @license React
* react-reconciler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
Og.exports;
var _b$1;
function Kb() {
	return _b$1 || (_b$1 = 1, function(Tt) {
		Tt.exports = function(m) {
			function Yn(t, r, a, l) {
				return new uc(t, r, a, l);
			}
			function _d() {}
			function F(t) {
				var r = "https://react.dev/errors/" + t;
				if (1 < arguments.length) {
					r += "?args[]=" + encodeURIComponent(arguments[1]);
					for (var a = 2; a < arguments.length; a++) r += "&args[]=" + encodeURIComponent(arguments[a]);
				}
				return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
			}
			function Rd(t) {
				var r = t, a = t;
				if (t.alternate) for (; r.return;) r = r.return;
				else {
					t = r;
					do
						r = t, r.flags & 4098 && (a = r.return), t = r.return;
					while (t);
				}
				return r.tag === 3 ? a : null;
			}
			function du(t) {
				if (Rd(t) !== t) throw Error(F(188));
			}
			function fu(t) {
				var r = t.alternate;
				if (!r) {
					if (r = Rd(t), r === null) throw Error(F(188));
					return r !== t ? null : t;
				}
				for (var a = t, l = r;;) {
					var c = a.return;
					if (c === null) break;
					var d = c.alternate;
					if (d === null) {
						if (l = c.return, l !== null) {
							a = l;
							continue;
						}
						break;
					}
					if (c.child === d.child) {
						for (d = c.child; d;) {
							if (d === a) return du(c), t;
							if (d === l) return du(c), r;
							d = d.sibling;
						}
						throw Error(F(188));
					}
					if (a.return !== l.return) a = c, l = d;
					else {
						for (var h = !1, y = c.child; y;) {
							if (y === a) {
								h = !0, a = c, l = d;
								break;
							}
							if (y === l) {
								h = !0, l = c, a = d;
								break;
							}
							y = y.sibling;
						}
						if (!h) {
							for (y = d.child; y;) {
								if (y === a) {
									h = !0, a = d, l = c;
									break;
								}
								if (y === l) {
									h = !0, l = d, a = c;
									break;
								}
								y = y.sibling;
							}
							if (!h) throw Error(F(189));
						}
					}
					if (a.alternate !== l) throw Error(F(190));
				}
				if (a.tag !== 3) throw Error(F(188));
				return a.stateNode.current === a ? t : r;
			}
			function pu(t) {
				var r = t.tag;
				if (r === 5 || r === 26 || r === 27 || r === 6) return t;
				for (t = t.child; t !== null;) {
					if (r = pu(t), r !== null) return r;
					t = t.sibling;
				}
				return null;
			}
			function lt(t) {
				var r = t.tag;
				if (r === 5 || r === 26 || r === 27 || r === 6) return t;
				for (t = t.child; t !== null;) {
					if (t.tag !== 4 && (r = lt(t), r !== null)) return r;
					t = t.sibling;
				}
				return null;
			}
			function Fl(t) {
				return t === null || typeof t != "object" ? null : (t = Pf && t[Pf] || t["@@iterator"], typeof t == "function" ? t : null);
			}
			function hu(t) {
				if (t == null) return null;
				if (typeof t == "function") return t.$$typeof === xf ? null : t.displayName || t.name || null;
				if (typeof t == "string") return t;
				switch (t) {
					case $a: return "Fragment";
					case Cs: return "Profiler";
					case kf: return "StrictMode";
					case Va: return "Suspense";
					case Te: return "SuspenseList";
					case gc: return "Activity";
				}
				if (typeof t == "object") switch (t.$$typeof) {
					case sa: return "Portal";
					case Io: return t.displayName || "Context";
					case mc: return (t._context.displayName || "Context") + ".Consumer";
					case Zi:
						var r = t.render;
						return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
					case wf: return r = t.displayName || null, r !== null ? r : hu(t.type) || "Memo";
					case ua:
						r = t._payload, t = t._init;
						try {
							return hu(t(r));
						} catch {}
				}
				return null;
			}
			function Ir(t) {
				return { current: t };
			}
			function D(t) {
				0 > tl || (t.current = Hs[tl], Hs[tl] = null, tl--);
			}
			function Ce(t, r) {
				tl++, Hs[tl] = t.current, t.current = r;
			}
			function Em(t) {
				return t >>>= 0, t === 0 ? 32 : 31 - (Dh(t) / Wh | 0) | 0;
			}
			function Zo(t) {
				var r = t & 42;
				if (r !== 0) return r;
				switch (t & -t) {
					case 1: return 1;
					case 2: return 2;
					case 4: return 4;
					case 8: return 8;
					case 16: return 16;
					case 32: return 32;
					case 64: return 64;
					case 128: return 128;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072: return t & 261888;
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return t & 3932160;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return t & 62914560;
					case 67108864: return 67108864;
					case 134217728: return 134217728;
					case 268435456: return 268435456;
					case 536870912: return 536870912;
					case 1073741824: return 0;
					default: return t;
				}
			}
			function Lr(t, r, a) {
				var l = t.pendingLanes;
				if (l === 0) return 0;
				var c = 0, d = t.suspendedLanes, h = t.pingedLanes;
				t = t.warmLanes;
				var y = l & 134217727;
				return y !== 0 ? (l = y & ~d, l !== 0 ? c = Zo(l) : (h &= y, h !== 0 ? c = Zo(h) : a || (a = y & ~t, a !== 0 && (c = Zo(a))))) : (y = l & ~d, y !== 0 ? c = Zo(y) : h !== 0 ? c = Zo(h) : a || (a = l & ~t, a !== 0 && (c = Zo(a)))), c === 0 ? 0 : r !== 0 && r !== c && (r & d) === 0 && (d = c & -c, a = r & -r, d >= a || d === 32 && (a & 4194048) !== 0) ? r : c;
			}
			function Pi(t, r) {
				return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
			}
			function Tp(t, r) {
				switch (t) {
					case 1:
					case 2:
					case 4:
					case 8:
					case 64: return r + 250;
					case 16:
					case 32:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return r + 5e3;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return -1;
					case 67108864:
					case 134217728:
					case 268435456:
					case 536870912:
					case 1073741824: return -1;
					default: return -1;
				}
			}
			function Ed() {
				var t = rl;
				return rl <<= 1, !(rl & 62914560) && (rl = 4194304), t;
			}
			function mu(t) {
				for (var r = [], a = 0; 31 > a; a++) r.push(t);
				return r;
			}
			function xi(t, r) {
				t.pendingLanes |= r, r !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
			}
			function _p(t, r, a, l, c, d) {
				var h = t.pendingLanes;
				t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
				var y = t.entanglements, R = t.expirationTimes, L = t.hiddenUpdates;
				for (a = h & ~a; 0 < a;) {
					var j = 31 - vt(a), A = 1 << j;
					y[j] = 0, R[j] = -1;
					var W = L[j];
					if (W !== null) for (L[j] = null, j = 0; j < W.length; j++) {
						var V = W[j];
						V !== null && (V.lane &= -536870913);
					}
					a &= ~A;
				}
				l !== 0 && Yo(t, l, 0), d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(h & ~r));
			}
			function Yo(t, r, a) {
				t.pendingLanes |= r, t.suspendedLanes &= ~r;
				var l = 31 - vt(r);
				t.entangledLanes |= r, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
			}
			function $e(t, r) {
				var a = t.entangledLanes |= r;
				for (t = t.entanglements; a;) {
					var l = 31 - vt(a), c = 1 << l;
					c & r | t[l] & r && (t[l] |= r), a &= ~c;
				}
			}
			function G(t, r) {
				var a = r & -r;
				return a = (a & 42) !== 0 ? 1 : st(a), (a & (t.suspendedLanes | r)) !== 0 ? 0 : a;
			}
			function st(t) {
				switch (t) {
					case 2:
						t = 1;
						break;
					case 8:
						t = 4;
						break;
					case 32:
						t = 16;
						break;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
						t = 128;
						break;
					case 268435456:
						t = 134217728;
						break;
					default: t = 0;
				}
				return t;
			}
			function Ze(t) {
				return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
			}
			function pe(t) {
				if (typeof Lc == "function" && Uf(t), on && typeof on.setStrictMode == "function") try {
					on.setStrictMode(ei, t);
				} catch {}
			}
			function Im(t, r) {
				return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
			}
			function _t(t) {
				if (al === void 0) try {
					throw Error();
				} catch (a) {
					var r = a.stack.trim().match(/\n( *(at )?)/);
					al = r && r[1] || "", kt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
				}
				return `
` + al + t + kt;
			}
			function zi(t, r) {
				if (!t || Ds) return "";
				Ds = !0;
				var a = Error.prepareStackTrace;
				Error.prepareStackTrace = void 0;
				try {
					var l = { DetermineComponentFrameRoot: function() {
						try {
							if (r) {
								var A = function() {
									throw Error();
								};
								if (Object.defineProperty(A.prototype, "props", { set: function() {
									throw Error();
								} }), typeof Reflect == "object" && Reflect.construct) {
									try {
										Reflect.construct(A, []);
									} catch (V) {
										var W = V;
									}
									Reflect.construct(t, [], A);
								} else {
									try {
										A.call();
									} catch (V) {
										W = V;
									}
									t.call(A.prototype);
								}
							} else {
								try {
									throw Error();
								} catch (V) {
									W = V;
								}
								(A = t()) && typeof A.catch == "function" && A.catch(function() {});
							}
						} catch (V) {
							if (V && W && typeof V.stack == "string") return [V.stack, W.stack];
						}
						return [null, null];
					} };
					l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
					var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
					c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
					var d = l.DetermineComponentFrameRoot(), h = d[0], y = d[1];
					if (h && y) {
						var R = h.split(`
`), L = y.split(`
`);
						for (c = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot");) l++;
						for (; c < L.length && !L[c].includes("DetermineComponentFrameRoot");) c++;
						if (l === R.length || c === L.length) for (l = R.length - 1, c = L.length - 1; 1 <= l && 0 <= c && R[l] !== L[c];) c--;
						for (; 1 <= l && 0 <= c; l--, c--) if (R[l] !== L[c]) {
							if (l !== 1 || c !== 1) do
								if (l--, c--, 0 > c || R[l] !== L[c]) {
									var j = `
` + R[l].replace(" at new ", " at ");
									return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), j;
								}
							while (1 <= l && 0 <= c);
							break;
						}
					}
				} finally {
					Ds = !1, Error.prepareStackTrace = a;
				}
				return (a = t ? t.displayName || t.name : "") ? _t(a) : "";
			}
			function Hl(t, r) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5: return _t(t.type);
					case 16: return _t("Lazy");
					case 13: return t.child !== r && r !== null ? _t("Suspense Fallback") : _t("Suspense");
					case 19: return _t("SuspenseList");
					case 0:
					case 15: return zi(t.type, !1);
					case 11: return zi(t.type.render, !1);
					case 1: return zi(t.type, !0);
					case 31: return _t("Activity");
					default: return "";
				}
			}
			function Rp(t) {
				try {
					var r = "", a = null;
					do
						r += Hl(t, a), a = t, t = t.return;
					while (t);
					return r;
				} catch (l) {
					return `
Error generating stack: ` + l.message + `
` + l.stack;
				}
			}
			function ut(t, r) {
				if (typeof t == "object" && t !== null) {
					var a = Bh.get(t);
					return a !== void 0 ? a : (r = {
						value: t,
						source: r,
						stack: Rp(r)
					}, Bh.set(t, r), r);
				}
				return {
					value: t,
					source: r,
					stack: Rp(r)
				};
			}
			function or(t, r) {
				ni[il++] = x, ni[il++] = fn, fn = t, x = r;
			}
			function Ci(t, r, a) {
				Jt[Zt++] = ot, Jt[Zt++] = Zr, Jt[Zt++] = jo, jo = t;
				var l = ot;
				t = Zr;
				var c = 32 - vt(l) - 1;
				l &= ~(1 << c), a += 1;
				var d = 32 - vt(r) + c;
				if (30 < d) {
					var h = c - c % 5;
					d = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, ot = 1 << 32 - vt(r) + c | a << c | l, Zr = d + t;
				} else ot = 1 << d | a << c | l, Zr = t;
			}
			function Id(t) {
				t.return !== null && (or(t, 1), Ci(t, 1, 0));
			}
			function gu(t) {
				for (; t === fn;) fn = ni[--il], ni[il] = null, x = ni[--il], ni[il] = null;
				for (; t === jo;) jo = Jt[--Zt], Jt[Zt] = null, Zr = Jt[--Zt], Jt[Zt] = null, ot = Jt[--Zt], Jt[Zt] = null;
			}
			function Ld(t, r) {
				Jt[Zt++] = ot, Jt[Zt++] = Zr, Jt[Zt++] = jo, ot = r.id, Zr = r.overflow, jo = t;
			}
			function Al(t, r) {
				Ce(pa, r), Ce(Ws, t), Ce(Dn, null), t = Hm(r), D(Dn), Ce(Dn, t);
			}
			function Xo() {
				D(Dn), D(Ws), D(pa);
			}
			function yu(t) {
				t.memoizedState !== null && Ce(Fc, t);
				var r = Dn.current, a = Xp(r, t.type);
				r !== a && (Ce(Ws, t), Ce(Dn, a));
			}
			function jl(t) {
				Ws.current === t && (D(Dn), D(Ws)), Fc.current === t && (D(Fc), qt ? da._currentValue = rt : da._currentValue2 = rt);
			}
			function ar(t) {
				throw ct(ut(Error(F(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), Of;
			}
			function Ep(t, r) {
				if (!Hn) throw Error(F(175));
				Ki(t.stateNode, t.type, t.memoizedProps, r, t) || ar(t, !0);
			}
			function De(t) {
				for (bn = t.return; bn;) switch (bn.tag) {
					case 5:
					case 31:
					case 13:
						Yt = !1;
						return;
					case 27:
					case 3:
						Yt = !0;
						return;
					default: bn = bn.return;
				}
			}
			function Ti(t) {
				if (!Hn || t !== bn) return !1;
				if (!ue) return De(t), ue = !0, !1;
				var r = t.tag;
				if (dn ? r !== 3 && r !== 27 && (r !== 5 || Nh(t.type) && !Rs(t.type, t.memoizedProps)) && Ue && ar(t) : r !== 3 && (r !== 5 || Nh(t.type) && !Rs(t.type, t.memoizedProps)) && Ue && ar(t), De(t), r === 13) {
					if (!Hn) throw Error(F(316));
					if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(317));
					Ue = Th(t);
				} else if (r === 31) {
					if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(317));
					Ue = Ch(t);
				} else Ue = dn && r === 27 ? kh(t.type, Ue) : bn ? Nf(t.stateNode) : null;
				return !0;
			}
			function _a() {
				Hn && (Ue = bn = null, ue = !1);
			}
			function Dl() {
				var t = Do;
				return t !== null && (xt === null ? xt = t : xt.push.apply(xt, t), Do = null), t;
			}
			function ct(t) {
				Do === null ? Do = [t] : Do.push(t);
			}
			function fo(t, r, a) {
				qt ? (Ce(Yr, r._currentValue), r._currentValue = a) : (Ce(Yr, r._currentValue2), r._currentValue2 = a);
			}
			function En(t) {
				var r = Yr.current;
				qt ? t._currentValue = r : t._currentValue2 = r, D(Yr);
			}
			function Ot(t, r, a) {
				for (; t !== null;) {
					var l = t.alternate;
					if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === a) break;
					t = t.return;
				}
			}
			function _i(t, r, a, l) {
				var c = t.child;
				for (c !== null && (c.return = t); c !== null;) {
					var d = c.dependencies;
					if (d !== null) {
						var h = c.child;
						d = d.firstContext;
						e: for (; d !== null;) {
							var y = d;
							d = c;
							for (var R = 0; R < r.length; R++) if (y.context === r[R]) {
								d.lanes |= a, y = d.alternate, y !== null && (y.lanes |= a), Ot(d.return, a, t), l || (h = null);
								break e;
							}
							d = y.next;
						}
					} else if (c.tag === 18) {
						if (h = c.return, h === null) throw Error(F(341));
						h.lanes |= a, d = h.alternate, d !== null && (d.lanes |= a), Ot(h, a, t), h = null;
					} else h = c.child;
					if (h !== null) h.return = c;
					else for (h = c; h !== null;) {
						if (h === t) {
							h = null;
							break;
						}
						if (c = h.sibling, c !== null) {
							c.return = h.return, h = c;
							break;
						}
						h = h.return;
					}
					c = h;
				}
			}
			function po(t, r, a, l) {
				t = null;
				for (var c = r, d = !1; c !== null;) {
					if (!d) {
						if ((c.flags & 524288) !== 0) d = !0;
						else if ((c.flags & 262144) !== 0) break;
					}
					if (c.tag === 10) {
						var h = c.alternate;
						if (h === null) throw Error(F(387));
						if (h = h.memoizedProps, h !== null) {
							var y = c.type;
							jn(c.pendingProps.value, h.value) || (t !== null ? t.push(y) : t = [y]);
						}
					} else if (c === Fc.current) {
						if (h = c.alternate, h === null) throw Error(F(387));
						h.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(da) : t = [da]);
					}
					c = c.return;
				}
				t !== null && _i(r, t, a, l), r.flags |= 262144;
			}
			function Ri(t) {
				for (t = t.firstContext; t !== null;) {
					var r = t.context;
					if (!jn(qt ? r._currentValue : r._currentValue2, t.memoizedValue)) return !0;
					t = t.next;
				}
				return !1;
			}
			function Un(t) {
				at = t, Be = null, t = t.dependencies, t !== null && (t.firstContext = null);
			}
			function In(t) {
				return Nd(at, t);
			}
			function Wl(t, r) {
				return at === null && Un(t), Nd(t, r);
			}
			function Nd(t, r) {
				var a = qt ? r._currentValue : r._currentValue2;
				if (r = {
					context: r,
					memoizedValue: a,
					next: null
				}, Be === null) {
					if (t === null) throw Error(F(308));
					Be = r, t.dependencies = {
						lanes: 0,
						firstContext: r
					}, t.flags |= 524288;
				} else Be = Be.next = r;
				return a;
			}
			function Fd() {
				return {
					controller: new Xr(),
					data: /* @__PURE__ */ new Map(),
					refCount: 0
				};
			}
			function Ra(t) {
				t.refCount--, t.refCount === 0 && qn(Gm, function() {
					t.controller.abort();
				});
			}
			function bu() {}
			function ir(t) {
				t !== wt && t.next === null && (wt === null ? an = wt = t : wt = wt.next = t), ll = !0, Mf || (Mf = !0, Lm());
			}
			function Ea(t, r) {
				if (!ti && ll) {
					ti = !0;
					do
						for (var a = !1, l = an; l !== null;) {
							if (!r) if (t !== 0) {
								var c = l.pendingLanes;
								if (c === 0) var d = 0;
								else {
									var h = l.suspendedLanes, y = l.pingedLanes;
									d = (1 << 31 - vt(42 | t) + 1) - 1, d &= c & ~(h & ~y), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
								}
								d !== 0 && (a = !0, Su(l, d));
							} else d = he, d = Lr(l, l === Ne ? d : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== Lo), !(d & 3) || Pi(l, d) || (a = !0, Su(l, d));
							l = l.next;
						}
					while (a);
					ti = !1;
				}
			}
			function Ip() {
				Lp();
			}
			function Lp() {
				ll = Mf = !1;
				var t = 0;
				Pr !== 0 && _f() && (t = Pr);
				for (var r = ze(), a = null, l = an; l !== null;) {
					var c = l.next, d = vu(l, r);
					d === 0 ? (l.next = null, a === null ? an = c : a.next = c, c === null && (wt = a)) : (a = l, (t !== 0 || d & 3) && (ll = !0)), l = c;
				}
				Re !== 0 && Re !== 5 || Ea(t, !1), Pr !== 0 && (Pr = 0);
			}
			function vu(t, r) {
				for (var a = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d;) {
					var h = 31 - vt(d), y = 1 << h, R = c[h];
					R === -1 ? ((y & a) === 0 || (y & l) !== 0) && (c[h] = Tp(y, r)) : R <= r && (t.expiredLanes |= y), d &= ~y;
				}
				if (r = Ne, a = he, a = Lr(t, t === r ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== Lo), l = t.callbackNode, a === 0 || t === r && (_e === 2 || _e === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && le(l), t.callbackNode = null, t.callbackPriority = 0;
				if ((a & 3) === 0 || Pi(t, a)) {
					if (r = a & -a, r === t.callbackPriority) return r;
					switch (l !== null && le(l), Ze(a)) {
						case 2:
						case 8:
							a = Ho;
							break;
						case 32:
							a = Ao;
							break;
						case 268435456:
							a = ol;
							break;
						default: a = Ao;
					}
					return l = dt.bind(null, t), a = Ic(a, l), t.callbackPriority = r, t.callbackNode = a, r;
				}
				return l !== null && l !== null && le(l), t.callbackPriority = 2, t.callbackNode = null, 2;
			}
			function dt(t, r) {
				if (Re !== 0 && Re !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
				var a = t.callbackNode;
				if (rn() && t.callbackNode !== a) return null;
				var l = he;
				return l = Lr(t, t === Ne ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== Lo), l === 0 ? null : (uf(t, l, r), vu(t, ze()), t.callbackNode != null && t.callbackNode === a ? dt.bind(null, t) : null);
			}
			function Su(t, r) {
				if (rn()) return null;
				uf(t, r, !0);
			}
			function Lm() {
				ih ? Gr(function() {
					(ce & 6) !== 0 ? Ic(Uh, Ip) : Lp();
				}) : Ic(Uh, Ip);
			}
			function ku() {
				if (Pr === 0) {
					var t = sl;
					t === 0 && (t = As, As <<= 1, !(As & 261888) && (As = 256)), Pr = t;
				}
				return Pr;
			}
			function Np(t, r) {
				if (Us === null) {
					var a = Us = [];
					Qf = 0, sl = ku(), ul = {
						status: "pending",
						value: void 0,
						then: function(l) {
							a.push(l);
						}
					};
				}
				return Qf++, r.then(ft, ft), r;
			}
			function ft() {
				if (--Qf === 0 && Us !== null) {
					ul !== null && (ul.status = "fulfilled");
					var t = Us;
					Us = null, sl = 0, ul = null;
					for (var r = 0; r < t.length; r++) (0, t[r])();
				}
			}
			function ho(t, r) {
				var a = [], l = {
					status: "pending",
					value: null,
					reason: null,
					then: function(c) {
						a.push(c);
					}
				};
				return t.then(function() {
					l.status = "fulfilled", l.value = r;
					for (var c = 0; c < a.length; c++) (0, a[c])(r);
				}, function(c) {
					for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
				}), l;
			}
			function wu() {
				var t = ha.current;
				return t !== null ? t : Ne.pooledCache;
			}
			function Ei(t, r) {
				r === null ? Ce(ha, ha.current) : Ce(ha, r.pool);
			}
			function Pu() {
				var t = wu();
				return t === null ? null : {
					parent: qt ? qe._currentValue : qe._currentValue2,
					pool: t
				};
			}
			function Ul(t, r) {
				if (jn(t, r)) return !0;
				if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
				var a = Object.keys(t), l = Object.keys(r);
				if (a.length !== l.length) return !1;
				for (l = 0; l < a.length; l++) {
					var c = a[l];
					if (!Bf.call(r, c) || !jn(t[c], r[c])) return !1;
				}
				return !0;
			}
			function Hd(t) {
				return t = t.status, t === "fulfilled" || t === "rejected";
			}
			function mo(t, r, a) {
				switch (a = t[a], a === void 0 ? t.push(r) : a !== r && (r.then(bu, bu), r = a), r.status) {
					case "fulfilled": return r.value;
					case "rejected": throw t = r.reason, Ia(t), t;
					default:
						if (typeof r.status == "string") r.then(bu, bu);
						else {
							if (t = Ne, t !== null && 100 < t.shellSuspendCounter) throw Error(F(482));
							t = r, t.status = "pending", t.then(function(l) {
								if (r.status === "pending") {
									var c = r;
									c.status = "fulfilled", c.value = l;
								}
							}, function(l) {
								if (r.status === "pending") {
									var c = r;
									c.status = "rejected", c.reason = l;
								}
							});
						}
						switch (r.status) {
							case "fulfilled": return r.value;
							case "rejected": throw t = r.reason, Ia(t), t;
						}
						throw Xt = r, cl;
				}
			}
			function pt(t) {
				try {
					var r = t._init;
					return r(t._payload);
				} catch (a) {
					throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Xt = a, cl) : a;
				}
			}
			function Bl() {
				if (Xt === null) throw Error(F(459));
				var t = Xt;
				return Xt = null, t;
			}
			function Ia(t) {
				if (t === cl || t === jc) throw Error(F(483));
			}
			function Rt(t) {
				var r = Bs;
				return Bs += 1, Kt === null && (Kt = []), mo(Kt, t, r);
			}
			function La(t, r) {
				r = r.props.ref, t.ref = r !== void 0 ? r : null;
			}
			function Na(t, r) {
				throw r.$$typeof === hc ? Error(F(525)) : (t = Object.prototype.toString.call(r), Error(F(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t)));
			}
			function Ad(t) {
				function r(P, w) {
					if (t) {
						var C = P.deletions;
						C === null ? (P.deletions = [w], P.flags |= 16) : C.push(w);
					}
				}
				function a(P, w) {
					if (!t) return null;
					for (; w !== null;) r(P, w), w = w.sibling;
					return null;
				}
				function l(P) {
					for (var w = /* @__PURE__ */ new Map(); P !== null;) P.key !== null ? w.set(P.key, P) : w.set(P.index, P), P = P.sibling;
					return w;
				}
				function c(P, w) {
					return P = Qr(P, w), P.index = 0, P.sibling = null, P;
				}
				function d(P, w, C) {
					return P.index = C, t ? (C = P.alternate, C !== null ? (C = C.index, C < w ? (P.flags |= 67108866, w) : C) : (P.flags |= 67108866, w)) : (P.flags |= 1048576, w);
				}
				function h(P) {
					return t && P.alternate === null && (P.flags |= 67108866), P;
				}
				function y(P, w, C, H) {
					return w === null || w.tag !== 6 ? (w = Ps(C, P.mode, H), w.return = P, w) : (w = c(w, C), w.return = P, w);
				}
				function R(P, w, C, H) {
					var Q = C.type;
					return Q === $a ? j(P, w, C.props.children, H, C.key) : w !== null && (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ua && pt(Q) === w.type) ? (w = c(w, C.props), La(w, C), w.return = P, w) : (w = ws(C.type, C.key, C.props, null, P.mode, H), La(w, C), w.return = P, w);
				}
				function L(P, w, C, H) {
					return w === null || w.tag !== 4 || w.stateNode.containerInfo !== C.containerInfo || w.stateNode.implementation !== C.implementation ? (w = dc(C, P.mode, H), w.return = P, w) : (w = c(w, C.children || []), w.return = P, w);
				}
				function j(P, w, C, H, Q) {
					return w === null || w.tag !== 7 ? (w = Eo(C, P.mode, H, Q), w.return = P, w) : (w = c(w, C), w.return = P, w);
				}
				function A(P, w, C) {
					if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Ps("" + w, P.mode, C), w.return = P, w;
					if (typeof w == "object" && w !== null) {
						switch (w.$$typeof) {
							case zs: return C = ws(w.type, w.key, w.props, null, P.mode, C), La(C, w), C.return = P, C;
							case sa: return w = dc(w, P.mode, C), w.return = P, w;
							case ua: return w = pt(w), A(P, w, C);
						}
						if (ca(w) || Fl(w)) return w = Eo(w, P.mode, C, null), w.return = P, w;
						if (typeof w.then == "function") return A(P, Rt(w), C);
						if (w.$$typeof === Io) return A(P, Wl(P, w), C);
						Na(P, w);
					}
					return null;
				}
				function W(P, w, C, H) {
					var Q = w !== null ? w.key : null;
					if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return Q !== null ? null : y(P, w, "" + C, H);
					if (typeof C == "object" && C !== null) {
						switch (C.$$typeof) {
							case zs: return C.key === Q ? R(P, w, C, H) : null;
							case sa: return C.key === Q ? L(P, w, C, H) : null;
							case ua: return C = pt(C), W(P, w, C, H);
						}
						if (ca(C) || Fl(C)) return Q !== null ? null : j(P, w, C, H, null);
						if (typeof C.then == "function") return W(P, w, Rt(C), H);
						if (C.$$typeof === Io) return W(P, w, Wl(P, C), H);
						Na(P, C);
					}
					return null;
				}
				function V(P, w, C, H, Q) {
					if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return P = P.get(C) || null, y(w, P, "" + H, Q);
					if (typeof H == "object" && H !== null) {
						switch (H.$$typeof) {
							case zs: return P = P.get(H.key === null ? C : H.key) || null, R(w, P, H, Q);
							case sa: return P = P.get(H.key === null ? C : H.key) || null, L(w, P, H, Q);
							case ua: return H = pt(H), V(P, w, C, H, Q);
						}
						if (ca(H) || Fl(H)) return P = P.get(C) || null, j(w, P, H, Q, null);
						if (typeof H.then == "function") return V(P, w, C, Rt(H), Q);
						if (H.$$typeof === Io) return V(P, w, C, Wl(w, H), Q);
						Na(w, H);
					}
					return null;
				}
				function Oe(P, w, C, H) {
					for (var Q = null, Ge = null, J = w, Pe = w = 0, me = null; J !== null && Pe < C.length; Pe++) {
						J.index > Pe ? (me = J, J = null) : me = J.sibling;
						var be = W(P, J, C[Pe], H);
						if (be === null) {
							J === null && (J = me);
							break;
						}
						t && J && be.alternate === null && r(P, J), w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be, J = me;
					}
					if (Pe === C.length) return a(P, J), ue && or(P, Pe), Q;
					if (J === null) {
						for (; Pe < C.length; Pe++) J = A(P, C[Pe], H), J !== null && (w = d(J, w, Pe), Ge === null ? Q = J : Ge.sibling = J, Ge = J);
						return ue && or(P, Pe), Q;
					}
					for (J = l(J); Pe < C.length; Pe++) me = V(J, P, Pe, C[Pe], H), me !== null && (t && me.alternate !== null && J.delete(me.key === null ? Pe : me.key), w = d(me, w, Pe), Ge === null ? Q = me : Ge.sibling = me, Ge = me);
					return t && J.forEach(function(Oo) {
						return r(P, Oo);
					}), ue && or(P, Pe), Q;
				}
				function vn(P, w, C, H) {
					if (C == null) throw Error(F(151));
					for (var Q = null, Ge = null, J = w, Pe = w = 0, me = null, be = C.next(); J !== null && !be.done; Pe++, be = C.next()) {
						J.index > Pe ? (me = J, J = null) : me = J.sibling;
						var Oo = W(P, J, be.value, H);
						if (Oo === null) {
							J === null && (J = me);
							break;
						}
						t && J && Oo.alternate === null && r(P, J), w = d(Oo, w, Pe), Ge === null ? Q = Oo : Ge.sibling = Oo, Ge = Oo, J = me;
					}
					if (be.done) return a(P, J), ue && or(P, Pe), Q;
					if (J === null) {
						for (; !be.done; Pe++, be = C.next()) be = A(P, be.value, H), be !== null && (w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be);
						return ue && or(P, Pe), Q;
					}
					for (J = l(J); !be.done; Pe++, be = C.next()) be = V(J, P, Pe, be.value, H), be !== null && (t && be.alternate !== null && J.delete(be.key === null ? Pe : be.key), w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be);
					return t && J.forEach(function(qs) {
						return r(P, qs);
					}), ue && or(P, Pe), Q;
				}
				function li(P, w, C, H) {
					if (typeof C == "object" && C !== null && C.type === $a && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
						switch (C.$$typeof) {
							case zs:
								e: {
									for (var Q = C.key; w !== null;) {
										if (w.key === Q) {
											if (Q = C.type, Q === $a) {
												if (w.tag === 7) {
													a(P, w.sibling), H = c(w, C.props.children), H.return = P, P = H;
													break e;
												}
											} else if (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ua && pt(Q) === w.type) {
												a(P, w.sibling), H = c(w, C.props), La(H, C), H.return = P, P = H;
												break e;
											}
											a(P, w);
											break;
										} else r(P, w);
										w = w.sibling;
									}
									C.type === $a ? (H = Eo(C.props.children, P.mode, H, C.key), H.return = P, P = H) : (H = ws(C.type, C.key, C.props, null, P.mode, H), La(H, C), H.return = P, P = H);
								}
								return h(P);
							case sa:
								e: {
									for (Q = C.key; w !== null;) {
										if (w.key === Q) if (w.tag === 4 && w.stateNode.containerInfo === C.containerInfo && w.stateNode.implementation === C.implementation) {
											a(P, w.sibling), H = c(w, C.children || []), H.return = P, P = H;
											break e;
										} else {
											a(P, w);
											break;
										}
										else r(P, w);
										w = w.sibling;
									}
									H = dc(C, P.mode, H), H.return = P, P = H;
								}
								return h(P);
							case ua: return C = pt(C), li(P, w, C, H);
						}
						if (ca(C)) return Oe(P, w, C, H);
						if (Fl(C)) {
							if (Q = Fl(C), typeof Q != "function") throw Error(F(150));
							return C = Q.call(C), vn(P, w, C, H);
						}
						if (typeof C.then == "function") return li(P, w, Rt(C), H);
						if (C.$$typeof === Io) return li(P, w, Wl(P, C), H);
						Na(P, C);
					}
					return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, w !== null && w.tag === 6 ? (a(P, w.sibling), H = c(w, C), H.return = P, P = H) : (a(P, w), H = Ps(C, P.mode, H), H.return = P, P = H), h(P)) : a(P, w);
				}
				return function(P, w, C, H) {
					try {
						Bs = 0;
						var Q = li(P, w, C, H);
						return Kt = null, Q;
					} catch (J) {
						if (J === cl || J === jc) throw J;
						var Ge = Yn(29, J, null, P.mode);
						return Ge.lanes = H, Ge.return = P, Ge;
					}
				};
			}
			function Bn() {
				for (var t = xr, r = $f = xr = 0; r < t;) {
					var a = er[r];
					er[r++] = null;
					var l = er[r];
					er[r++] = null;
					var c = er[r];
					er[r++] = null;
					var d = er[r];
					if (er[r++] = null, l !== null && c !== null) {
						var h = l.pending;
						h === null ? c.next = c : (c.next = h.next, h.next = c), l.pending = c;
					}
					d !== 0 && Ii(a, c, d);
				}
			}
			function go(t, r, a, l) {
				er[xr++] = t, er[xr++] = r, er[xr++] = a, er[xr++] = l, $f |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
			}
			function yo(t, r, a, l) {
				return go(t, r, a, l), Fa(t);
			}
			function Ko(t, r) {
				return go(t, null, null, r), Fa(t);
			}
			function Ii(t, r, a) {
				t.lanes |= a;
				var l = t.alternate;
				l !== null && (l.lanes |= a);
				for (var c = !1, d = t.return; d !== null;) d.childLanes |= a, l = d.alternate, l !== null && (l.childLanes |= a), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (c = !0)), t = d, d = d.return;
				return t.tag === 3 ? (d = t.stateNode, c && r !== null && (c = 31 - vt(a), t = d.hiddenUpdates, l = t[c], l === null ? t[c] = [r] : l.push(r), r.lane = a | 536870912), d) : null;
			}
			function Fa(t) {
				if (50 < gl) throw gl = 0, nd = null, Error(F(185));
				for (var r = t.return; r !== null;) t = r, r = t.return;
				return t.tag === 3 ? t.stateNode : null;
			}
			function Ol(t) {
				t.updateQueue = {
					baseState: t.memoizedState,
					firstBaseUpdate: null,
					lastBaseUpdate: null,
					shared: {
						pending: null,
						lanes: 0,
						hiddenCallbacks: null
					},
					callbacks: null
				};
			}
			function Ha(t, r) {
				t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null
				});
			}
			function Et(t) {
				return {
					lane: t,
					tag: 0,
					payload: null,
					callback: null,
					next: null
				};
			}
			function Nr(t, r, a) {
				var l = t.updateQueue;
				if (l === null) return null;
				if (l = l.shared, (ce & 2) !== 0) {
					var c = l.pending;
					return c === null ? r.next = r : (r.next = c.next, c.next = r), l.pending = r, r = Fa(t), Ii(t, null, a), r;
				}
				return go(t, l, r, a), Fa(t);
			}
			function Ml(t, r, a) {
				if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194048) !== 0)) {
					var l = r.lanes;
					l &= t.pendingLanes, a |= l, r.lanes = a, $e(t, a);
				}
			}
			function jd(t, r) {
				var a = t.updateQueue, l = t.alternate;
				if (l !== null && (l = l.updateQueue, a === l)) {
					var c = null, d = null;
					if (a = a.firstBaseUpdate, a !== null) {
						do {
							var h = {
								lane: a.lane,
								tag: a.tag,
								payload: a.payload,
								callback: null,
								next: null
							};
							d === null ? c = d = h : d = d.next = h, a = a.next;
						} while (a !== null);
						d === null ? c = d = r : d = d.next = r;
					} else c = d = r;
					a = {
						baseState: l.baseState,
						firstBaseUpdate: c,
						lastBaseUpdate: d,
						shared: l.shared,
						callbacks: l.callbacks
					}, t.updateQueue = a;
					return;
				}
				t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = r : t.next = r, a.lastBaseUpdate = r;
			}
			function Li() {
				if (Vf) {
					var t = ul;
					if (t !== null) throw t;
				}
			}
			function Aa(t, r, a, l) {
				Vf = !1;
				var c = t.updateQueue;
				ma = !1;
				var d = c.firstBaseUpdate, h = c.lastBaseUpdate, y = c.shared.pending;
				if (y !== null) {
					c.shared.pending = null;
					var R = y, L = R.next;
					R.next = null, h === null ? d = L : h.next = L, h = R;
					var j = t.alternate;
					j !== null && (j = j.updateQueue, y = j.lastBaseUpdate, y !== h && (y === null ? j.firstBaseUpdate = L : y.next = L, j.lastBaseUpdate = R));
				}
				if (d !== null) {
					var A = c.baseState;
					h = 0, j = L = R = null, y = d;
					do {
						var W = y.lane & -536870913, V = W !== y.lane;
						if (V ? (he & W) === W : (l & W) === W) {
							W !== 0 && W === sl && (Vf = !0), j !== null && (j = j.next = {
								lane: 0,
								tag: y.tag,
								payload: y.payload,
								callback: null,
								next: null
							});
							e: {
								var Oe = t, vn = y;
								W = r;
								var li = a;
								switch (vn.tag) {
									case 1:
										if (Oe = vn.payload, typeof Oe == "function") {
											A = Oe.call(li, A, W);
											break e;
										}
										A = Oe;
										break e;
									case 3: Oe.flags = Oe.flags & -65537 | 128;
									case 0:
										if (Oe = vn.payload, W = typeof Oe == "function" ? Oe.call(li, A, W) : Oe, W == null) break e;
										A = Lt({}, A, W);
										break e;
									case 2: ma = !0;
								}
							}
							W = y.callback, W !== null && (t.flags |= 64, V && (t.flags |= 8192), V = c.callbacks, V === null ? c.callbacks = [W] : V.push(W));
						} else V = {
							lane: W,
							tag: y.tag,
							payload: y.payload,
							callback: y.callback,
							next: null
						}, j === null ? (L = j = V, R = A) : j = j.next = V, h |= W;
						if (y = y.next, y === null) {
							if (y = c.shared.pending, y === null) break;
							V = y, y = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
						}
					} while (!0);
					j === null && (R = A), c.baseState = R, c.firstBaseUpdate = L, c.lastBaseUpdate = j, d === null && (c.shared.lanes = 0), ba |= h, t.lanes = h, t.memoizedState = A;
				}
			}
			function Dd(t, r) {
				if (typeof t != "function") throw Error(F(191, t));
				t.call(r);
			}
			function Fp(t, r) {
				var a = t.callbacks;
				if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) Dd(a[t], r);
			}
			function B(t, r) {
				t = Uo, Ce(Wc, t), Ce(Kr, r), Uo = t | r.baseLanes;
			}
			function Ql() {
				Ce(Wc, Uo), Ce(Kr, Kr.current);
			}
			function bo() {
				Uo = Wc.current, D(Kr), D(Wc);
			}
			function vo(t) {
				var r = t.alternate;
				Ce(ln, ln.current & 1), Ce(Ft, t), zr === null && (r === null || Kr.current !== null || r.memoizedState !== null) && (zr = t);
			}
			function Ni(t) {
				Ce(ln, ln.current), Ce(Ft, t), zr === null && (zr = t);
			}
			function Fr(t) {
				t.tag === 22 ? (Ce(ln, ln.current), Ce(Ft, t), zr === null && (zr = t)) : So();
			}
			function So() {
				Ce(ln, ln.current), Ce(Ft, Ft.current);
			}
			function ht(t) {
				D(Ft), zr === t && (zr = null), D(ln);
			}
			function ko(t) {
				for (var r = t; r !== null;) {
					if (r.tag === 13) {
						var a = r.memoizedState;
						if (a !== null && (a = a.dehydrated, a === null || Ns(a) || Fs(a))) return r;
					} else if (r.tag === 19 && (r.memoizedProps.revealOrder === "forwards" || r.memoizedProps.revealOrder === "backwards" || r.memoizedProps.revealOrder === "unstable_legacy-backwards" || r.memoizedProps.revealOrder === "together")) {
						if ((r.flags & 128) !== 0) return r;
					} else if (r.child !== null) {
						r.child.return = r, r = r.child;
						continue;
					}
					if (r === t) break;
					for (; r.sibling === null;) {
						if (r.return === null || r.return === t) return null;
						r = r.return;
					}
					r.sibling.return = r.return, r = r.sibling;
				}
				return null;
			}
			function Ve() {
				throw Error(F(321));
			}
			function wo(t, r) {
				if (r === null) return !1;
				for (var a = 0; a < r.length && a < t.length; a++) if (!jn(t[a], r[a])) return !1;
				return !0;
			}
			function $l(t, r, a, l, c, d) {
				return Wo = d, ne = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, M.H = t === null || t.memoizedState === null ? Mh : qf, oi = !1, d = a(l, c), oi = !1, dl && (d = xu(r, a, l, c)), Fi(t), d;
			}
			function Fi(t) {
				M.H = Os;
				var r = Ie !== null && Ie.next !== null;
				if (Wo = 0, pn = Ie = ne = null, Uc = !1, fl = 0, pl = null, r) throw Error(F(300));
				t === null || hn || (t = t.dependencies, t !== null && Ri(t) && (hn = !0));
			}
			function xu(t, r, a, l) {
				ne = t;
				var c = 0;
				do {
					if (dl && (pl = null), fl = 0, dl = !1, 25 <= c) throw Error(F(301));
					if (c += 1, pn = Ie = null, t.updateQueue != null) {
						var d = t.updateQueue;
						d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
					}
					M.H = Qh, d = r(a, l);
				} while (dl);
				return d;
			}
			function zu() {
				var t = M.H, r = t.useState()[0];
				return r = typeof r.then == "function" ? sr(r) : r, t = t.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== t && (ne.flags |= 1024), r;
			}
			function Hr() {
				var t = Bc !== 0;
				return Bc = 0, t;
			}
			function lr(t, r, a) {
				r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~a;
			}
			function Vl(t) {
				if (Uc) {
					for (t = t.memoizedState; t !== null;) {
						var r = t.queue;
						r !== null && (r.pending = null), t = t.next;
					}
					Uc = !1;
				}
				Wo = 0, pn = Ie = ne = null, dl = !1, fl = Bc = 0, pl = null;
			}
			function Ln() {
				var t = {
					memoizedState: null,
					baseState: null,
					baseQueue: null,
					queue: null,
					next: null
				};
				return pn === null ? ne.memoizedState = pn = t : pn = pn.next = t, pn;
			}
			function He() {
				if (Ie === null) {
					var t = ne.alternate;
					t = t !== null ? t.memoizedState : null;
				} else t = Ie.next;
				var r = pn === null ? ne.memoizedState : pn.next;
				if (r !== null) pn = r, Ie = t;
				else {
					if (t === null) throw ne.alternate === null ? Error(F(467)) : Error(F(310));
					Ie = t, t = {
						memoizedState: Ie.memoizedState,
						baseState: Ie.baseState,
						baseQueue: Ie.baseQueue,
						queue: Ie.queue,
						next: null
					}, pn === null ? ne.memoizedState = pn = t : pn = pn.next = t;
				}
				return pn;
			}
			function ja() {
				return {
					lastEffect: null,
					events: null,
					stores: null,
					memoCache: null
				};
			}
			function sr(t) {
				var r = fl;
				return fl += 1, pl === null && (pl = []), t = mo(pl, t, r), r = ne, (pn === null ? r.memoizedState : pn.next) === null && (r = r.alternate, M.H = r === null || r.memoizedState === null ? Mh : qf), t;
			}
			function Ee(t) {
				if (t !== null && typeof t == "object") {
					if (typeof t.then == "function") return sr(t);
					if (t.$$typeof === Io) return In(t);
				}
				throw Error(F(438, String(t)));
			}
			function Hi(t) {
				var r = null, a = ne.updateQueue;
				if (a !== null && (r = a.memoCache), r == null) {
					var l = ne.alternate;
					l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (r = {
						data: l.data.map(function(c) {
							return c.slice();
						}),
						index: 0
					})));
				}
				if (r ??= {
					data: [],
					index: 0
				}, a === null && (a = ja(), ne.updateQueue = a), a.memoCache = r, a = r.data[r.index], a === void 0) for (a = r.data[r.index] = Array(t), l = 0; l < t; l++) a[l] = $r;
				return r.index++, a;
			}
			function Ar(t, r) {
				return typeof r == "function" ? r(t) : r;
			}
			function Ai(t) {
				return Po(He(), Ie, t);
			}
			function Po(t, r, a) {
				var l = t.queue;
				if (l === null) throw Error(F(311));
				l.lastRenderedReducer = a;
				var c = t.baseQueue, d = l.pending;
				if (d !== null) {
					if (c !== null) {
						var h = c.next;
						c.next = d.next, d.next = h;
					}
					r.baseQueue = c = d, l.pending = null;
				}
				if (d = t.baseState, c === null) t.memoizedState = d;
				else {
					r = c.next;
					var y = h = null, R = null, L = r, j = !1;
					do {
						var A = L.lane & -536870913;
						if (A !== L.lane ? (he & A) === A : (Wo & A) === A) {
							var W = L.revertLane;
							if (W === 0) R !== null && (R = R.next = {
								lane: 0,
								revertLane: 0,
								gesture: null,
								action: L.action,
								hasEagerState: L.hasEagerState,
								eagerState: L.eagerState,
								next: null
							}), A === sl && (j = !0);
							else if ((Wo & W) === W) {
								L = L.next, W === sl && (j = !0);
								continue;
							} else A = {
								lane: 0,
								revertLane: L.revertLane,
								gesture: null,
								action: L.action,
								hasEagerState: L.hasEagerState,
								eagerState: L.eagerState,
								next: null
							}, R === null ? (y = R = A, h = d) : R = R.next = A, ne.lanes |= W, ba |= W;
							A = L.action, oi && a(d, A), d = L.hasEagerState ? L.eagerState : a(d, A);
						} else W = {
							lane: A,
							revertLane: L.revertLane,
							gesture: L.gesture,
							action: L.action,
							hasEagerState: L.hasEagerState,
							eagerState: L.eagerState,
							next: null
						}, R === null ? (y = R = W, h = d) : R = R.next = W, ne.lanes |= A, ba |= A;
						L = L.next;
					} while (L !== null && L !== r);
					if (R === null ? h = d : R.next = y, !jn(d, t.memoizedState) && (hn = !0, j && (a = ul, a !== null))) throw a;
					t.memoizedState = d, t.baseState = h, t.baseQueue = R, l.lastRenderedState = d;
				}
				return c === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
			}
			function Da(t) {
				var r = He(), a = r.queue;
				if (a === null) throw Error(F(311));
				a.lastRenderedReducer = t;
				var l = a.dispatch, c = a.pending, d = r.memoizedState;
				if (c !== null) {
					a.pending = null;
					var h = c = c.next;
					do
						d = t(d, h.action), h = h.next;
					while (h !== c);
					jn(d, r.memoizedState) || (hn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), a.lastRenderedState = d;
				}
				return [d, l];
			}
			function ur(t, r, a) {
				var l = ne, c = He(), d = ue;
				if (d) {
					if (a === void 0) throw Error(F(407));
					a = a();
				} else a = r();
				var h = !jn((Ie || c).memoizedState, a);
				if (h && (c.memoizedState = a, hn = !0), c = c.queue, Tu(ql.bind(null, l, c, t), [t]), c.getSnapshot !== r || h || pn !== null && pn.memoizedState.tag & 1) {
					if (l.flags |= 2048, Kn(9, { destroy: void 0 }, jr.bind(null, l, c, a, r), null), Ne === null) throw Error(F(349));
					d || Wo & 127 || Hp(l, r, a);
				}
				return a;
			}
			function Hp(t, r, a) {
				t.flags |= 16384, t = {
					getSnapshot: r,
					value: a
				}, r = ne.updateQueue, r === null ? (r = ja(), ne.updateQueue = r, r.stores = [t]) : (a = r.stores, a === null ? r.stores = [t] : a.push(t));
			}
			function jr(t, r, a, l) {
				r.value = a, r.getSnapshot = l, ji(r) && Gl(t);
			}
			function ql(t, r, a) {
				return a(function() {
					ji(r) && Gl(t);
				});
			}
			function ji(t) {
				var r = t.getSnapshot;
				t = t.value;
				try {
					var a = r();
					return !jn(t, a);
				} catch {
					return !0;
				}
			}
			function Gl(t) {
				var r = Ko(t, 2);
				r !== null && nt(r, t, 2);
			}
			function Xn(t) {
				var r = Ln();
				if (typeof t == "function") {
					var a = t;
					if (t = a(), oi) {
						pe(!0);
						try {
							a();
						} finally {
							pe(!1);
						}
					}
				}
				return r.memoizedState = r.baseState = t, r.queue = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ar,
					lastRenderedState: t
				}, r;
			}
			function mt(t, r, a, l) {
				return t.baseState = a, Po(t, Ie, typeof l == "function" ? l : Ar);
			}
			function Dr(t, r, a, l, c) {
				if (na(t)) throw Error(F(485));
				if (t = r.action, t !== null) {
					var d = {
						payload: c,
						action: t,
						next: null,
						isTransition: !0,
						status: "pending",
						value: null,
						reason: null,
						listeners: [],
						then: function(h) {
							d.listeners.push(h);
						}
					};
					M.T !== null ? a(!0) : d.isTransition = !1, l(d), a = r.pending, a === null ? (d.next = r.pending = d, cr(r, d)) : (d.next = a.next, r.pending = a.next = d);
				}
			}
			function cr(t, r) {
				var a = r.action, l = r.payload, c = t.state;
				if (r.isTransition) {
					var d = M.T, h = {};
					M.T = h;
					try {
						var y = a(c, l), R = M.S;
						R !== null && R(h, y), dr(t, r, y);
					} catch (L) {
						Jl(t, r, L);
					} finally {
						d !== null && h.types !== null && (d.types = h.types), M.T = d;
					}
				} else try {
					d = a(c, l), dr(t, r, d);
				} catch (L) {
					Jl(t, r, L);
				}
			}
			function dr(t, r, a) {
				a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
					fr(t, r, l);
				}, function(l) {
					return Jl(t, r, l);
				}) : fr(t, r, a);
			}
			function fr(t, r, a) {
				r.status = "fulfilled", r.value = a, Cu(r), t.state = a, r = t.pending, r !== null && (a = r.next, a === r ? t.pending = null : (a = a.next, r.next = a, cr(t, a)));
			}
			function Jl(t, r, a) {
				var l = t.pending;
				if (t.pending = null, l !== null) {
					l = l.next;
					do
						r.status = "rejected", r.reason = a, Cu(r), r = r.next;
					while (r !== l);
				}
				t.action = null;
			}
			function Cu(t) {
				t = t.listeners;
				for (var r = 0; r < t.length; r++) (0, t[r])();
			}
			function Wd(t, r) {
				return r;
			}
			function pr(t, r) {
				if (ue) {
					var a = Ne.formState;
					if (a !== null) {
						e: {
							var l = ne;
							if (ue) {
								if (Ue) {
									var c = vh(Ue, Yt);
									if (c) {
										Ue = Nf(c), l = Sh(c);
										break e;
									}
								}
								ar(l);
							}
							l = !1;
						}
						l && (r = a[0]);
					}
				}
				a = Ln(), a.memoizedState = a.baseState = r, l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Wd,
					lastRenderedState: r
				}, a.queue = l, a = Nu.bind(null, ne, l), l.dispatch = a, l = Xn(!1);
				var d = Wi.bind(null, ne, !1, l.queue);
				return l = Ln(), c = {
					state: r,
					dispatch: null,
					action: t,
					pending: null
				}, l.queue = c, a = Dr.bind(null, ne, c, d, a), c.dispatch = a, l.memoizedState = t, [
					r,
					a,
					!1
				];
			}
			function Ud(t) {
				return hr(He(), Ie, t);
			}
			function hr(t, r, a) {
				if (r = Po(t, r, Wd)[0], t = Ai(Ar)[0], typeof r == "object" && r !== null && typeof r.then == "function") try {
					var l = sr(r);
				} catch (h) {
					throw h === cl ? jc : h;
				}
				else l = r;
				r = He();
				var c = r.queue, d = c.dispatch;
				return a !== r.memoizedState && (ne.flags |= 2048, Kn(9, { destroy: void 0 }, Zl.bind(null, c, a), null)), [
					l,
					d,
					t
				];
			}
			function Zl(t, r) {
				t.action = r;
			}
			function Yl(t) {
				var r = He(), a = Ie;
				if (a !== null) return hr(r, a, t);
				He(), r = r.memoizedState, a = He();
				var l = a.queue.dispatch;
				return a.memoizedState = t, [
					r,
					l,
					!1
				];
			}
			function Kn(t, r, a, l) {
				return t = {
					tag: t,
					create: a,
					deps: l,
					inst: r,
					next: null
				}, r = ne.updateQueue, r === null && (r = ja(), ne.updateQueue = r), a = r.lastEffect, a === null ? r.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, r.lastEffect = t), t;
			}
			function Wa() {
				return He().memoizedState;
			}
			function Xl(t, r, a, l) {
				var c = Ln();
				ne.flags |= t, c.memoizedState = Kn(1 | r, { destroy: void 0 }, a, l === void 0 ? null : l);
			}
			function Di(t, r, a, l) {
				var c = He();
				l = l === void 0 ? null : l;
				var d = c.memoizedState.inst;
				Ie !== null && l !== null && wo(l, Ie.memoizedState.deps) ? c.memoizedState = Kn(r, d, a, l) : (ne.flags |= t, c.memoizedState = Kn(1 | r, d, a, l));
			}
			function Bd(t, r) {
				Xl(8390656, 8, t, r);
			}
			function Tu(t, r) {
				Di(2048, 8, t, r);
			}
			function Ap(t) {
				ne.flags |= 4;
				var r = ne.updateQueue;
				if (r === null) r = ja(), ne.updateQueue = r, r.events = [t];
				else {
					var a = r.events;
					a === null ? r.events = [t] : a.push(t);
				}
			}
			function _u(t) {
				var r = He().memoizedState;
				return Ap({
					ref: r,
					nextImpl: t
				}), function() {
					if ((ce & 2) !== 0) throw Error(F(440));
					return r.impl.apply(void 0, arguments);
				};
			}
			function Od(t, r) {
				return Di(4, 2, t, r);
			}
			function Ru(t, r) {
				return Di(4, 4, t, r);
			}
			function jp(t, r) {
				if (typeof r == "function") {
					t = t();
					var a = r(t);
					return function() {
						typeof a == "function" ? a() : r(null);
					};
				}
				if (r != null) return t = t(), r.current = t, function() {
					r.current = null;
				};
			}
			function Md(t, r, a) {
				a = a != null ? a.concat([t]) : null, Di(4, 4, jp.bind(null, r, t), a);
			}
			function Qd() {}
			function Eu(t, r) {
				var a = He();
				r = r === void 0 ? null : r;
				var l = a.memoizedState;
				return r !== null && wo(r, l[1]) ? l[0] : (a.memoizedState = [t, r], t);
			}
			function Kl(t, r) {
				var a = He();
				r = r === void 0 ? null : r;
				var l = a.memoizedState;
				if (r !== null && wo(r, l[1])) return l[0];
				if (l = t(), oi) {
					pe(!0);
					try {
						t();
					} finally {
						pe(!1);
					}
				}
				return a.memoizedState = [l, r], l;
			}
			function Iu(t, r, a) {
				return a === void 0 || (Wo & 1073741824) !== 0 && (he & 261930) === 0 ? t.memoizedState = r : (t.memoizedState = a, t = ys(), ne.lanes |= t, ba |= t, a);
			}
			function es(t, r, a, l) {
				return jn(a, r) ? a : Kr.current !== null ? (t = Iu(t, a, l), jn(t, r) || (hn = !0), t) : (Wo & 42) === 0 || (Wo & 1073741824) !== 0 && (he & 261930) === 0 ? (hn = !0, t.memoizedState = a) : (t = ys(), ne.lanes |= t, ba |= t, r);
			}
			function $d(t, r, a, l, c) {
				var d = qr();
				yn(d !== 0 && 8 > d ? d : 8);
				var h = M.T, y = {};
				M.T = y, Wi(t, !1, r, a);
				try {
					var R = c(), L = M.S;
					if (L !== null && L(y, R), R !== null && typeof R == "object" && typeof R.then == "function") ea(t, r, ho(R, l), bt(t));
					else ea(t, r, l, bt(t));
				} catch (A) {
					ea(t, r, {
						then: function() {},
						status: "rejected",
						reason: A
					}, bt());
				} finally {
					yn(d), h !== null && y.types !== null && (h.types = y.types), M.T = h;
				}
			}
			function Vd(t) {
				var r = t.memoizedState;
				if (r !== null) return r;
				r = {
					memoizedState: rt,
					baseState: rt,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Ar,
						lastRenderedState: rt
					},
					next: null
				};
				var a = {};
				return r.next = {
					memoizedState: a,
					baseState: a,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Ar,
						lastRenderedState: a
					},
					next: null
				}, t.memoizedState = r, t = t.alternate, t !== null && (t.memoizedState = r), r;
			}
			function Lu() {
				return In(da);
			}
			function xo() {
				return He().memoizedState;
			}
			function qd() {
				return He().memoizedState;
			}
			function Dp(t) {
				for (var r = t.return; r !== null;) {
					switch (r.tag) {
						case 24:
						case 3:
							var a = bt();
							t = Et(a);
							var l = Nr(r, t, a);
							l !== null && (nt(l, r, a), Ml(l, r, a)), r = { cache: Fd() }, t.payload = r;
							return;
					}
					r = r.return;
				}
			}
			function Nn(t, r, a) {
				var l = bt();
				a = {
					lane: l,
					revertLane: 0,
					gesture: null,
					action: a,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, na(t) ? Gd(r, a) : (a = yo(t, r, a, l), a !== null && (nt(a, t, l), ns(a, r, l)));
			}
			function Nu(t, r, a) {
				ea(t, r, a, bt());
			}
			function ea(t, r, a, l) {
				var c = {
					lane: l,
					revertLane: 0,
					gesture: null,
					action: a,
					hasEagerState: !1,
					eagerState: null,
					next: null
				};
				if (na(t)) Gd(r, c);
				else {
					var d = t.alternate;
					if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
						var h = r.lastRenderedState, y = d(h, a);
						if (c.hasEagerState = !0, c.eagerState = y, jn(y, h)) return go(t, r, c, 0), Ne === null && Bn(), !1;
					} catch {}
					if (a = yo(t, r, c, l), a !== null) return nt(a, t, l), ns(a, r, l), !0;
				}
				return !1;
			}
			function Wi(t, r, a, l) {
				if (l = {
					lane: 2,
					revertLane: ku(),
					gesture: null,
					action: l,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, na(t)) {
					if (r) throw Error(F(479));
				} else r = yo(t, a, l, 2), r !== null && nt(r, t, 2);
			}
			function na(t) {
				var r = t.alternate;
				return t === ne || r !== null && r === ne;
			}
			function Gd(t, r) {
				dl = Uc = !0;
				var a = t.pending;
				a === null ? r.next = r : (r.next = a.next, a.next = r), t.pending = r;
			}
			function ns(t, r, a) {
				if ((a & 4194048) !== 0) {
					var l = r.lanes;
					l &= t.pendingLanes, a |= l, r.lanes = a, $e(t, a);
				}
			}
			function Fu(t, r, a, l) {
				r = t.memoizedState, a = a(l, r), a = a == null ? r : Lt({}, r, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
			}
			function ts(t, r, a, l, c, d, h) {
				return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Ul(a, l) || !Ul(c, d) : !0;
			}
			function Jd(t, r, a, l) {
				t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, l), r.state !== t && Oc.enqueueReplaceState(r, r.state, null);
			}
			function Wr(t, r) {
				var a = r;
				if ("ref" in r) {
					a = {};
					for (var l in r) l !== "ref" && (a[l] = r[l]);
				}
				if (t = t.defaultProps) {
					a === r && (a = Lt({}, a));
					for (var c in t) a[c] === void 0 && (a[c] = t[c]);
				}
				return a;
			}
			function rs(t, r) {
				try {
					var a = t.onUncaughtError;
					a(r.value, { componentStack: r.stack });
				} catch (l) {
					setTimeout(function() {
						throw l;
					});
				}
			}
			function Zd(t, r, a) {
				try {
					var l = t.onCaughtError;
					l(a.value, {
						componentStack: a.stack,
						errorBoundary: r.tag === 1 ? r.stateNode : null
					});
				} catch (c) {
					setTimeout(function() {
						throw c;
					});
				}
			}
			function Ui(t, r, a) {
				return a = Et(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
					rs(t, r);
				}, a;
			}
			function os(t) {
				return t = Et(t), t.tag = 3, t;
			}
			function Hu(t, r, a, l) {
				var c = a.type.getDerivedStateFromError;
				if (typeof c == "function") {
					var d = l.value;
					t.payload = function() {
						return c(d);
					}, t.callback = function() {
						Zd(r, a, l);
					};
				}
				var h = a.stateNode;
				h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
					Zd(r, a, l), typeof c != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
					var y = l.stack;
					this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
				});
			}
			function On(t, r, a, l, c) {
				if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
					if (r = a.alternate, r !== null && po(r, a, c, !0), a = Ft.current, a !== null) {
						switch (a.tag) {
							case 31:
							case 13: return zr === null ? Gi() : a.alternate === null && Xe === 0 && (Xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === Dc ? a.flags |= 16384 : (r = a.updateQueue, r === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : r.add(l), lc(t, l, c)), !1;
							case 22: return a.flags |= 65536, l === Dc ? a.flags |= 16384 : (r = a.updateQueue, r === null ? (r = {
								transitions: null,
								markerInstances: null,
								retryQueue: /* @__PURE__ */ new Set([l])
							}, a.updateQueue = r) : (a = r.retryQueue, a === null ? r.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), lc(t, l, c)), !1;
						}
						throw Error(F(435, a.tag));
					}
					return lc(t, l, c), Gi(), !1;
				}
				if (ue) return r = Ft.current, r !== null ? (!(r.flags & 65536) && (r.flags |= 256), r.flags |= 65536, r.lanes = c, l !== Of && (t = Error(F(422), { cause: l }), ct(ut(t, a)))) : (l !== Of && (r = Error(F(423), { cause: l }), ct(ut(r, a))), t = t.current.alternate, t.flags |= 65536, c &= -c, t.lanes |= c, l = ut(l, a), c = Ui(t.stateNode, l, c), jd(t, c), Xe !== 4 && (Xe = 2)), !1;
				var d = Error(F(520), { cause: l });
				if (d = ut(d, a), $s === null ? $s = [d] : $s.push(d), Xe !== 4 && (Xe = 2), r === null) return !0;
				l = ut(l, a), a = r;
				do {
					switch (a.tag) {
						case 3: return a.flags |= 65536, t = c & -c, a.lanes |= t, t = Ui(a.stateNode, l, t), jd(a, t), !1;
						case 1: if (r = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof r.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (va === null || !va.has(d)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = os(c), Hu(c, t, a, l), jd(a, c), !1;
					}
					a = a.return;
				} while (a !== null);
				return !1;
			}
			function wn(t, r, a, l) {
				r.child = t === null ? Oh(r, null, a, l) : ri(r, t.child, a, l);
			}
			function as(t, r, a, l, c) {
				a = a.render;
				var d = r.ref;
				if ("ref" in l) {
					var h = {};
					for (var y in l) y !== "ref" && (h[y] = l[y]);
				} else h = l;
				return Un(r), l = $l(t, r, a, h, d, c), y = Hr(), t !== null && !hn ? (lr(t, r, c), gt(t, r, c)) : (ue && y && Id(r), r.flags |= 1, wn(t, r, l, c), r.child);
			}
			function Au(t, r, a, l, c) {
				if (t === null) {
					var d = a.type;
					return typeof d == "function" && !ks(d) && d.defaultProps === void 0 && a.compare === null ? (r.tag = 15, r.type = d, ju(t, r, d, l, c)) : (t = ws(a.type, null, l, r, r.mode, c), t.ref = r.ref, t.return = r, r.child = t);
				}
				if (d = t.child, !Mi(t, c)) {
					var h = d.memoizedProps;
					if (a = a.compare, a = a !== null ? a : Ul, a(h, l) && t.ref === r.ref) return gt(t, r, c);
				}
				return r.flags |= 1, t = Qr(d, l), t.ref = r.ref, t.return = r, r.child = t;
			}
			function ju(t, r, a, l, c) {
				if (t !== null) {
					var d = t.memoizedProps;
					if (Ul(d, l) && t.ref === r.ref) if (hn = !1, r.pendingProps = l = d, Mi(t, c)) t.flags & 131072 && (hn = !0);
					else return r.lanes = t.lanes, gt(t, r, c);
				}
				return Yd(t, r, a, l, c);
			}
			function zo(t, r, a, l) {
				var c = l.children, d = t !== null ? t.memoizedState : null;
				if (t === null && r.stateNode === null && (r.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), l.mode === "hidden") {
					if ((r.flags & 128) !== 0) {
						if (d = d !== null ? d.baseLanes | a : a, t !== null) {
							for (l = r.child = t.child, c = 0; l !== null;) c = c | l.lanes | l.childLanes, l = l.sibling;
							l = c & ~d;
						} else l = 0, r.child = null;
						return Bi(t, r, d, a, l);
					}
					if ((a & 536870912) !== 0) r.memoizedState = {
						baseLanes: 0,
						cachePool: null
					}, t !== null && Ei(r, d !== null ? d.cachePool : null), d !== null ? B(r, d) : Ql(), Fr(r);
					else return l = r.lanes = 536870912, Bi(t, r, d !== null ? d.baseLanes | a : a, a, l);
				} else d !== null ? (Ei(r, d.cachePool), B(r, d), So(), r.memoizedState = null) : (t !== null && Ei(r, null), Ql(), So());
				return wn(t, r, c, a), r.child;
			}
			function Mt(t, r) {
				return t !== null && t.tag === 22 || r.stateNode !== null || (r.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), r.sibling;
			}
			function Bi(t, r, a, l, c) {
				var d = wu();
				return d = d === null ? null : {
					parent: qt ? qe._currentValue : qe._currentValue2,
					pool: d
				}, r.memoizedState = {
					baseLanes: a,
					cachePool: d
				}, t !== null && Ei(r, null), Ql(), Fr(r), t !== null && po(t, r, l, !0), r.childLanes = c, null;
			}
			function Ua(t, r) {
				return r = mr({
					mode: r.mode,
					children: r.children
				}, t.mode), r.ref = t.ref, t.child = r, r.return = t, r;
			}
			function Oi(t, r, a) {
				return ri(r, t.child, null, a), t = Ua(r, r.pendingProps), t.flags |= 2, ht(r), r.memoizedState = null, t;
			}
			function is(t, r, a) {
				var l = r.pendingProps, c = (r.flags & 128) !== 0;
				if (r.flags &= -129, t === null) {
					if (ue) {
						if (l.mode === "hidden") return t = Ua(r, l), r.lanes = 536870912, Mt(null, t);
						if (Ni(r), (t = Ue) ? (t = xh(t, Yt), t !== null && (r.memoizedState = {
							dehydrated: t,
							treeContext: jo !== null ? {
								id: ot,
								overflow: Zr
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, a = cc(t), a.return = r, r.child = a, bn = r, Ue = null)) : t = null, t === null) throw ar(r);
						return r.lanes = 536870912, null;
					}
					return Ua(r, l);
				}
				var d = t.memoizedState;
				if (d !== null) {
					var h = d.dehydrated;
					if (Ni(r), c) if (r.flags & 256) r.flags &= -257, r = Oi(t, r, a);
					else if (r.memoizedState !== null) r.child = t.child, r.flags |= 128, r = null;
					else throw Error(F(558));
					else if (hn || po(t, r, a, !1), c = (a & t.childLanes) !== 0, hn || c) {
						if (l = Ne, l !== null && (h = G(l, a), h !== 0 && h !== d.retryLane)) throw d.retryLane = h, Ko(t, h), nt(l, t, h), Mc;
						Gi(), r = Oi(t, r, a);
					} else t = d.treeContext, Hn && (Ue = Ff(h), bn = r, ue = !0, Do = null, Yt = !1, t !== null && Ld(r, t)), r = Ua(r, l), r.flags |= 4096;
					return r;
				}
				return t = Qr(t.child, {
					mode: l.mode,
					children: l.children
				}), t.ref = r.ref, r.child = t, t.return = r, t;
			}
			function ls(t, r) {
				var a = r.ref;
				if (a === null) t !== null && t.ref !== null && (r.flags |= 4194816);
				else {
					if (typeof a != "function" && typeof a != "object") throw Error(F(284));
					(t === null || t.ref !== a) && (r.flags |= 4194816);
				}
			}
			function Yd(t, r, a, l, c) {
				return Un(r), a = $l(t, r, a, l, void 0, c), l = Hr(), t !== null && !hn ? (lr(t, r, c), gt(t, r, c)) : (ue && l && Id(r), r.flags |= 1, wn(t, r, a, c), r.child);
			}
			function Xd(t, r, a, l, c, d) {
				return Un(r), r.updateQueue = null, a = xu(r, l, a, c), Fi(t), l = Hr(), t !== null && !hn ? (lr(t, r, d), gt(t, r, d)) : (ue && l && Id(r), r.flags |= 1, wn(t, r, a, d), r.child);
			}
			function Kd(t, r, a, l, c) {
				if (Un(r), r.stateNode === null) {
					var d = Ka, h = a.contextType;
					typeof h == "object" && h !== null && (d = In(h)), d = new a(l, d), r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Oc, r.stateNode = d, d._reactInternals = r, d = r.stateNode, d.props = l, d.state = r.memoizedState, d.refs = {}, Ol(r), h = a.contextType, d.context = typeof h == "object" && h !== null ? In(h) : Ka, d.state = r.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (Fu(r, a, h, l), d.state = r.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h !== d.state && Oc.enqueueReplaceState(d, d.state, null), Aa(r, l, d, c), Li(), d.state = r.memoizedState), typeof d.componentDidMount == "function" && (r.flags |= 4194308), l = !0;
				} else if (t === null) {
					d = r.stateNode;
					var y = r.memoizedProps, R = Wr(a, y);
					d.props = R;
					var L = d.context, j = a.contextType;
					h = Ka, typeof j == "object" && j !== null && (h = In(j));
					var A = a.getDerivedStateFromProps;
					j = typeof A == "function" || typeof d.getSnapshotBeforeUpdate == "function", y = r.pendingProps !== y, j || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y || L !== h) && Jd(r, d, l, h), ma = !1;
					var W = r.memoizedState;
					d.state = W, Aa(r, l, d, c), Li(), L = r.memoizedState, y || W !== L || ma ? (typeof A == "function" && (Fu(r, a, A, l), L = r.memoizedState), (R = ma || ts(r, a, R, l, W, L, h)) ? (j || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = L), d.props = l, d.state = L, d.context = h, l = R) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
				} else {
					d = r.stateNode, Ha(t, r), h = r.memoizedProps, j = Wr(a, h), d.props = j, A = r.pendingProps, W = d.context, L = a.contextType, R = Ka, typeof L == "object" && L !== null && (R = In(L)), y = a.getDerivedStateFromProps, (L = typeof y == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h !== A || W !== R) && Jd(r, d, l, R), ma = !1, W = r.memoizedState, d.state = W, Aa(r, l, d, c), Li();
					var V = r.memoizedState;
					h !== A || W !== V || ma || t !== null && t.dependencies !== null && Ri(t.dependencies) ? (typeof y == "function" && (Fu(r, a, y, l), V = r.memoizedState), (j = ma || ts(r, a, j, l, W, V, R) || t !== null && t.dependencies !== null && Ri(t.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, V, R), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, V, R)), typeof d.componentDidUpdate == "function" && (r.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = V), d.props = l, d.state = V, d.context = R, l = j) : (typeof d.componentDidUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && W === t.memoizedState || (r.flags |= 1024), l = !1);
				}
				return d = l, ls(t, r), l = (r.flags & 128) !== 0, d || l ? (d = r.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : d.render(), r.flags |= 1, t !== null && l ? (r.child = ri(r, t.child, null, c), r.child = ri(r, null, a, c)) : wn(t, r, a, c), r.memoizedState = d.state, t = r.child) : t = gt(t, r, c), t;
			}
			function Du(t, r, a, l) {
				return _a(), r.flags |= 256, wn(t, r, a, l), r.child;
			}
			function ss(t) {
				return {
					baseLanes: t,
					cachePool: Pu()
				};
			}
			function Ur(t, r, a) {
				return t = t !== null ? t.childLanes & ~a : 0, r && (t |= At), t;
			}
			function Wu(t, r, a) {
				var l = r.pendingProps, c = !1, d = (r.flags & 128) !== 0, h;
				if ((h = d) || (h = t !== null && t.memoizedState === null ? !1 : (ln.current & 2) !== 0), h && (c = !0, r.flags &= -129), h = (r.flags & 32) !== 0, r.flags &= -33, t === null) {
					if (ue) {
						if (c ? vo(r) : So(), (t = Ue) ? (t = Om(t, Yt), t !== null && (r.memoizedState = {
							dehydrated: t,
							treeContext: jo !== null ? {
								id: ot,
								overflow: Zr
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, a = cc(t), a.return = r, r.child = a, bn = r, Ue = null)) : t = null, t === null) throw ar(r);
						return Fs(t) ? r.lanes = 32 : r.lanes = 536870912, null;
					}
					var y = l.children;
					return l = l.fallback, c ? (So(), c = r.mode, y = mr({
						mode: "hidden",
						children: y
					}, c), l = Eo(l, c, a, null), y.return = r, l.return = r, y.sibling = l, r.child = y, l = r.child, l.memoizedState = ss(a), l.childLanes = Ur(t, h, a), r.memoizedState = Qc, Mt(null, l)) : (vo(r), Uu(r, y));
				}
				var R = t.memoizedState;
				if (R !== null && (y = R.dehydrated, y !== null)) {
					if (d) r.flags & 256 ? (vo(r), r.flags &= -257, r = et(t, r, a)) : r.memoizedState !== null ? (So(), r.child = t.child, r.flags |= 128, r = null) : (So(), y = l.fallback, c = r.mode, l = mr({
						mode: "visible",
						children: l.children
					}, c), y = Eo(y, c, a, null), y.flags |= 2, l.return = r, y.return = r, l.sibling = y, r.child = l, ri(r, t.child, null, a), l = r.child, l.memoizedState = ss(a), l.childLanes = Ur(t, h, a), r.memoizedState = Qc, r = Mt(null, l));
					else if (vo(r), Fs(y)) h = Za(y).digest, l = Error(F(419)), l.stack = "", l.digest = h, ct({
						value: l,
						source: null,
						stack: null
					}), r = et(t, r, a);
					else if (hn || po(t, r, a, !1), h = (a & t.childLanes) !== 0, hn || h) {
						if (h = Ne, h !== null && (l = G(h, a), l !== 0 && l !== R.retryLane)) throw R.retryLane = l, Ko(t, l), nt(h, t, l), Mc;
						Ns(y) || Gi(), r = et(t, r, a);
					} else Ns(y) ? (r.flags |= 192, r.child = t.child, r = null) : (t = R.treeContext, Hn && (Ue = wh(y), bn = r, ue = !0, Do = null, Yt = !1, t !== null && Ld(r, t)), r = Uu(r, l.children), r.flags |= 4096);
					return r;
				}
				return c ? (So(), y = l.fallback, c = r.mode, R = t.child, d = R.sibling, l = Qr(R, {
					mode: "hidden",
					children: l.children
				}), l.subtreeFlags = R.subtreeFlags & 65011712, d !== null ? y = Qr(d, y) : (y = Eo(y, c, a, null), y.flags |= 2), y.return = r, l.return = r, l.sibling = y, r.child = l, Mt(null, l), l = r.child, y = t.child.memoizedState, y === null ? y = ss(a) : (c = y.cachePool, c !== null ? (R = qt ? qe._currentValue : qe._currentValue2, c = c.parent !== R ? {
					parent: R,
					pool: R
				} : c) : c = Pu(), y = {
					baseLanes: y.baseLanes | a,
					cachePool: c
				}), l.memoizedState = y, l.childLanes = Ur(t, h, a), r.memoizedState = Qc, Mt(t.child, l)) : (vo(r), a = t.child, t = a.sibling, a = Qr(a, {
					mode: "visible",
					children: l.children
				}), a.return = r, a.sibling = null, t !== null && (h = r.deletions, h === null ? (r.deletions = [t], r.flags |= 16) : h.push(t)), r.child = a, r.memoizedState = null, a);
			}
			function Uu(t, r) {
				return r = mr({
					mode: "visible",
					children: r
				}, t.mode), r.return = t, t.child = r;
			}
			function mr(t, r) {
				return t = Yn(22, t, null, r), t.lanes = 0, t;
			}
			function et(t, r, a) {
				return ri(r, t.child, null, a), t = Uu(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
			}
			function us(t, r, a) {
				t.lanes |= r;
				var l = t.alternate;
				l !== null && (l.lanes |= r), Ot(t.return, r, a);
			}
			function ee(t, r, a, l, c, d) {
				var h = t.memoizedState;
				h === null ? t.memoizedState = {
					isBackwards: r,
					rendering: null,
					renderingStartTime: 0,
					last: l,
					tail: a,
					tailMode: c,
					treeForkCount: d
				} : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = a, h.tailMode = c, h.treeForkCount = d);
			}
			function N(t, r, a) {
				var l = r.pendingProps, c = l.revealOrder, d = l.tail;
				l = l.children;
				var h = ln.current, y = (h & 2) !== 0;
				if (y ? (h = h & 1 | 2, r.flags |= 128) : h &= 1, Ce(ln, h), wn(t, r, l, a), l = ue ? x : 0, !y && t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null;) {
					if (t.tag === 13) t.memoizedState !== null && us(t, a, r);
					else if (t.tag === 19) us(t, a, r);
					else if (t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === r) break e;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === r) break e;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
				switch (c) {
					case "forwards":
						for (a = r.child, c = null; a !== null;) t = a.alternate, t !== null && ko(t) === null && (c = a), a = a.sibling;
						a = c, a === null ? (c = r.child, r.child = null) : (c = a.sibling, a.sibling = null), ee(r, !1, c, a, d, l);
						break;
					case "backwards":
					case "unstable_legacy-backwards":
						for (a = null, c = r.child, r.child = null; c !== null;) {
							if (t = c.alternate, t !== null && ko(t) === null) {
								r.child = c;
								break;
							}
							t = c.sibling, c.sibling = a, a = c, c = t;
						}
						ee(r, !0, a, null, d, l);
						break;
					case "together":
						ee(r, !1, null, null, void 0, l);
						break;
					default: r.memoizedState = null;
				}
				return r.child;
			}
			function gt(t, r, a) {
				if (t !== null && (r.dependencies = t.dependencies), ba |= r.lanes, (a & r.childLanes) === 0) if (t !== null) {
					if (po(t, r, a, !1), (a & r.childLanes) === 0) return null;
				} else return null;
				if (t !== null && r.child !== t.child) throw Error(F(153));
				if (r.child !== null) {
					for (t = r.child, a = Qr(t, t.pendingProps), r.child = a, a.return = r; t.sibling !== null;) t = t.sibling, a = a.sibling = Qr(t, t.pendingProps), a.return = r;
					a.sibling = null;
				}
				return r.child;
			}
			function Mi(t, r) {
				return (t.lanes & r) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ri(t)));
			}
			function Ye(t, r, a) {
				switch (r.tag) {
					case 3:
						Al(r, r.stateNode.containerInfo), fo(r, qe, t.memoizedState.cache), _a();
						break;
					case 27:
					case 5:
						yu(r);
						break;
					case 4:
						Al(r, r.stateNode.containerInfo);
						break;
					case 10:
						fo(r, r.type, r.memoizedProps.value);
						break;
					case 31:
						if (r.memoizedState !== null) return r.flags |= 128, Ni(r), null;
						break;
					case 13:
						var l = r.memoizedState;
						if (l !== null) return l.dehydrated !== null ? (vo(r), r.flags |= 128, null) : (a & r.child.childLanes) !== 0 ? Wu(t, r, a) : (vo(r), t = gt(t, r, a), t !== null ? t.sibling : null);
						vo(r);
						break;
					case 19:
						var c = (t.flags & 128) !== 0;
						if (l = (a & r.childLanes) !== 0, l || (po(t, r, a, !1), l = (a & r.childLanes) !== 0), c) {
							if (l) return N(t, r, a);
							r.flags |= 128;
						}
						if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ce(ln, ln.current), l) break;
						return null;
					case 22: return r.lanes = 0, zo(t, r, a, r.pendingProps);
					case 24: fo(r, qe, t.memoizedState.cache);
				}
				return gt(t, r, a);
			}
			function Bu(t, r, a) {
				if (t !== null) if (t.memoizedProps !== r.pendingProps) hn = !0;
				else {
					if (!Mi(t, a) && (r.flags & 128) === 0) return hn = !1, Ye(t, r, a);
					hn = (t.flags & 131072) !== 0;
				}
				else hn = !1, ue && r.flags & 1048576 && Ci(r, x, r.index);
				switch (r.lanes = 0, r.tag) {
					case 16:
						e: {
							var l = r.pendingProps;
							if (t = pt(r.elementType), r.type = t, typeof t == "function") ks(t) ? (l = Wr(t, l), r.tag = 1, r = Kd(null, r, t, l, a)) : (r.tag = 0, r = Yd(null, r, t, l, a));
							else {
								if (t != null) {
									var c = t.$$typeof;
									if (c === Zi) {
										r.tag = 11, r = as(null, r, t, l, a);
										break e;
									} else if (c === wf) {
										r.tag = 14, r = Au(null, r, t, l, a);
										break e;
									}
								}
								throw r = hu(t) || t, Error(F(306, r, ""));
							}
						}
						return r;
					case 0: return Yd(t, r, r.type, r.pendingProps, a);
					case 1: return l = r.type, c = Wr(l, r.pendingProps), Kd(t, r, l, c, a);
					case 3:
						e: {
							if (Al(r, r.stateNode.containerInfo), t === null) throw Error(F(387));
							var d = r.pendingProps;
							c = r.memoizedState, l = c.element, Ha(t, r), Aa(r, d, null, a);
							var h = r.memoizedState;
							if (d = h.cache, fo(r, qe, d), d !== c.cache && _i(r, [qe], a, !0), Li(), d = h.element, Hn && c.isDehydrated) if (c = {
								element: d,
								isDehydrated: !1,
								cache: h.cache
							}, r.updateQueue.baseState = c, r.memoizedState = c, r.flags & 256) {
								r = Du(t, r, d, a);
								break e;
							} else if (d !== l) {
								l = ut(Error(F(424)), r), ct(l), r = Du(t, r, d, a);
								break e;
							} else for (Hn && (Ue = Pc(r.stateNode.containerInfo), bn = r, ue = !0, Do = null, Yt = !0), a = Oh(r, null, d, a), r.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
							else {
								if (_a(), d === l) {
									r = gt(t, r, a);
									break e;
								}
								wn(t, r, d, a);
							}
							r = r.child;
						}
						return r;
					case 26: if (Gt) return ls(t, r), t === null ? (a = nl(r.type, null, r.pendingProps, null)) ? r.memoizedState = a : ue || (r.stateNode = Ah(r.type, r.pendingProps, pa.current, r)) : r.memoizedState = nl(r.type, t.memoizedProps, r.pendingProps, t.memoizedState), null;
					case 27: if (dn) return yu(r), t === null && dn && ue && (l = r.stateNode = _c(r.type, r.pendingProps, pa.current, Dn.current, !1), bn = r, Yt = !0, Ue = Um(r.type, l, Ue)), wn(t, r, r.pendingProps.children, a), ls(t, r), t === null && (r.flags |= 4194304), r.child;
					case 5: return t === null && ue && ($m(r.type, r.pendingProps, Dn.current), (c = l = Ue) && (l = Bm(l, r.type, r.pendingProps, Yt), l !== null ? (r.stateNode = l, bn = r, Ue = wc(l), Yt = !1, c = !0) : c = !1), c || ar(r)), yu(r), c = r.type, d = r.pendingProps, h = t !== null ? t.memoizedProps : null, l = d.children, Rs(c, d) ? l = null : h !== null && Rs(c, h) && (r.flags |= 32), r.memoizedState !== null && (c = $l(t, r, zu, null, null, a), qt ? da._currentValue = c : da._currentValue2 = c), ls(t, r), wn(t, r, l, a), r.child;
					case 6: return t === null && ue && (jf(r.pendingProps, Dn.current), (t = a = Ue) && (a = Ph(a, r.pendingProps, Yt), a !== null ? (r.stateNode = a, bn = r, Ue = null, t = !0) : t = !1), t || ar(r)), null;
					case 13: return Wu(t, r, a);
					case 4: return Al(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = ri(r, null, l, a) : wn(t, r, l, a), r.child;
					case 11: return as(t, r, r.type, r.pendingProps, a);
					case 7: return wn(t, r, r.pendingProps, a), r.child;
					case 8: return wn(t, r, r.pendingProps.children, a), r.child;
					case 12: return wn(t, r, r.pendingProps.children, a), r.child;
					case 10: return l = r.pendingProps, fo(r, r.type, l.value), wn(t, r, l.children, a), r.child;
					case 9: return c = r.type._context, l = r.pendingProps.children, Un(r), c = In(c), l = l(c), r.flags |= 1, wn(t, r, l, a), r.child;
					case 14: return Au(t, r, r.type, r.pendingProps, a);
					case 15: return ju(t, r, r.type, r.pendingProps, a);
					case 19: return N(t, r, a);
					case 31: return is(t, r, a);
					case 22: return zo(t, r, a, r.pendingProps);
					case 24: return Un(r), l = In(qe), t === null ? (c = wu(), c === null && (c = Ne, d = Fd(), c.pooledCache = d, d.refCount++, d !== null && (c.pooledCacheLanes |= a), c = d), r.memoizedState = {
						parent: l,
						cache: c
					}, Ol(r), fo(r, qe, c)) : ((t.lanes & a) !== 0 && (Ha(t, r), Aa(r, null, null, a), Li()), c = t.memoizedState, d = r.memoizedState, c.parent !== l ? (c = {
						parent: l,
						cache: l
					}, r.memoizedState = c, r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = c), fo(r, qe, l)) : (l = d.cache, fo(r, qe, l), l !== c.cache && _i(r, [qe], a, !0))), wn(t, r, r.pendingProps.children, a), r.child;
					case 29: throw r.pendingProps;
				}
				throw Error(F(156, r.tag));
			}
			function It(t) {
				t.flags |= 4;
			}
			function cs(t) {
				Sr && (t.flags |= 8);
			}
			function Ou(t, r) {
				if (t !== null && t.child === r.child) return !1;
				if ((r.flags & 16) !== 0) return !0;
				for (t = r.child; t !== null;) {
					if ((t.flags & 8218) !== 0 || (t.subtreeFlags & 8218) !== 0) return !0;
					t = t.sibling;
				}
				return !1;
			}
			function ef(t, r, a, l) {
				if ($n) for (a = r.child; a !== null;) {
					if (a.tag === 5 || a.tag === 6) yc(t, a.stateNode);
					else if (!(a.tag === 4 || dn && a.tag === 27) && a.child !== null) {
						a.child.return = a, a = a.child;
						continue;
					}
					if (a === r) break;
					for (; a.sibling === null;) {
						if (a.return === null || a.return === r) return;
						a = a.return;
					}
					a.sibling.return = a.return, a = a.sibling;
				}
				else if (Sr) for (var c = r.child; c !== null;) {
					if (c.tag === 5) {
						var d = c.stateNode;
						a && l && (d = No(d, c.type, c.memoizedProps)), yc(t, d);
					} else if (c.tag === 6) d = c.stateNode, a && l && (d = Ls(d, c.memoizedProps)), yc(t, d);
					else if (c.tag !== 4) {
						if (c.tag === 22 && c.memoizedState !== null) d = c.child, d !== null && (d.return = c), ef(t, c, !0, !0);
						else if (c.child !== null) {
							c.child.return = c, c = c.child;
							continue;
						}
					}
					if (c === r) break;
					for (; c.sibling === null;) {
						if (c.return === null || c.return === r) return;
						c = c.return;
					}
					c.sibling.return = c.return, c = c.sibling;
				}
			}
			function Mu(t, r, a, l) {
				var c = !1;
				if (Sr) for (var d = r.child; d !== null;) {
					if (d.tag === 5) {
						var h = d.stateNode;
						a && l && (h = No(h, d.type, d.memoizedProps)), Lf(t, h);
					} else if (d.tag === 6) h = d.stateNode, a && l && (h = Ls(h, d.memoizedProps)), Lf(t, h);
					else if (d.tag !== 4) {
						if (d.tag === 22 && d.memoizedState !== null) c = d.child, c !== null && (c.return = d), Mu(t, d, !0, !0), c = !0;
						else if (d.child !== null) {
							d.child.return = d, d = d.child;
							continue;
						}
					}
					if (d === r) break;
					for (; d.sibling === null;) {
						if (d.return === null || d.return === r) return c;
						d = d.return;
					}
					d.sibling.return = d.return, d = d.sibling;
				}
				return c;
			}
			function Qu(t, r) {
				if (Sr && Ou(t, r)) {
					t = r.stateNode;
					var a = t.containerInfo, l = We();
					Mu(l, r, !1, !1), t.pendingChildren = l, It(r), yh(a, l);
				}
			}
			function ds(t, r, a, l) {
				if ($n) t.memoizedProps !== l && It(r);
				else if (Sr) {
					var c = t.stateNode, d = t.memoizedProps;
					if ((t = Ou(t, r)) || d !== l) {
						var h = Dn.current;
						d = gh(c, a, d, l, !t, null), d === c ? r.stateNode = c : (cs(r), Kp(d, a, l, h) && It(r), r.stateNode = d, t && ef(d, r, !1, !1));
					} else r.stateNode = c;
				}
			}
			function Fn(t, r, a, l, c) {
				if ((t.mode & 32) !== 0 && (a === null ? rh(r, l) : Dm(r, a, l))) {
					if (t.flags |= 16777216, (c & 335544128) === c || Yi(r, l)) if (An(t.stateNode, r, l)) t.flags |= 8192;
					else if (Vp()) t.flags |= 8192;
					else throw Xt = Dc, Ac;
				} else t.flags &= -16777217;
			}
			function xe(t, r) {
				if (Vm(r)) {
					if (t.flags |= 16777216, !Tc(r)) if (Vp()) t.flags |= 8192;
					else throw Xt = Dc, Ac;
				} else t.flags &= -16777217;
			}
			function Ba(t, r) {
				r !== null && (t.flags |= 4), t.flags & 16384 && (r = t.tag !== 22 ? Ed() : 536870912, t.lanes |= r, hl |= r);
			}
			function Co(t, r) {
				if (!ue) switch (t.tailMode) {
					case "hidden":
						r = t.tail;
						for (var a = null; r !== null;) r.alternate !== null && (a = r), r = r.sibling;
						a === null ? t.tail = null : a.sibling = null;
						break;
					case "collapsed":
						a = t.tail;
						for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
						l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
				}
			}
			function we(t) {
				var r = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
				if (r) for (var c = t.child; c !== null;) a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = t, c = c.sibling;
				else for (c = t.child; c !== null;) a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = t, c = c.sibling;
				return t.subtreeFlags |= l, t.childLanes = a, r;
			}
			function Oa(t, r, a) {
				var l = r.pendingProps;
				switch (gu(r), r.tag) {
					case 16:
					case 15:
					case 0:
					case 11:
					case 7:
					case 8:
					case 12:
					case 9:
					case 14: return we(r), null;
					case 1: return we(r), null;
					case 3: return a = r.stateNode, l = null, t !== null && (l = t.memoizedState.cache), r.memoizedState.cache !== l && (r.flags |= 2048), En(qe), Xo(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Ti(r) ? It(r) : t === null || t.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Dl())), Qu(t, r), we(r), null;
					case 26: if (Gt) {
						var c = r.type, d = r.memoizedState;
						return t === null ? (It(r), d !== null ? (we(r), xe(r, d)) : (we(r), Fn(r, c, null, l, a))) : d ? d !== t.memoizedState ? (It(r), we(r), xe(r, d)) : (we(r), r.flags &= -16777217) : (d = t.memoizedProps, $n ? d !== l && It(r) : ds(t, r, c, l), we(r), Fn(r, c, d, l, a)), null;
					}
					case 27: if (dn) {
						if (jl(r), a = pa.current, c = r.type, t !== null && r.stateNode != null) $n ? t.memoizedProps !== l && It(r) : ds(t, r, c, l);
						else {
							if (!l) {
								if (r.stateNode === null) throw Error(F(166));
								return we(r), null;
							}
							t = Dn.current, Ti(r) ? Ep(r, t) : (t = _c(c, l, a, t, !0), r.stateNode = t, It(r));
						}
						return we(r), null;
					}
					case 5:
						if (jl(r), c = r.type, t !== null && r.stateNode != null) ds(t, r, c, l);
						else {
							if (!l) {
								if (r.stateNode === null) throw Error(F(166));
								return we(r), null;
							}
							if (d = Dn.current, Ti(r)) Ep(r, d), Eh(r.stateNode, c, l, d) && (r.flags |= 64);
							else {
								var h = Vr(c, l, pa.current, d, r);
								cs(r), ef(h, r, !1, !1), r.stateNode = h, Kp(h, c, l, d) && It(r);
							}
						}
						return we(r), Fn(r, r.type, t === null ? null : t.memoizedProps, r.pendingProps, a), null;
					case 6:
						if (t && r.stateNode != null) a = t.memoizedProps, $n ? a !== l && It(r) : Sr && (a !== l ? (t = pa.current, a = Dn.current, cs(r), r.stateNode = bc(l, t, a, r)) : r.stateNode = t.stateNode);
						else {
							if (typeof l != "string" && r.stateNode === null) throw Error(F(166));
							if (t = pa.current, a = Dn.current, Ti(r)) {
								if (!Hn) throw Error(F(176));
								if (t = r.stateNode, a = r.memoizedProps, l = null, c = bn, c !== null) switch (c.tag) {
									case 27:
									case 5: l = c.memoizedProps;
								}
								xc(t, a, r, l) || ar(r, !0);
							} else cs(r), r.stateNode = bc(l, t, a, r);
						}
						return we(r), null;
					case 31:
						if (a = r.memoizedState, t === null || t.memoizedState !== null) {
							if (l = Ti(r), a !== null) {
								if (t === null) {
									if (!l) throw Error(F(318));
									if (!Hn) throw Error(F(556));
									if (t = r.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(557));
									zh(t, r);
								} else _a(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
								we(r), t = !1;
							} else a = Dl(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
							if (!t) return r.flags & 256 ? (ht(r), r) : (ht(r), null);
							if ((r.flags & 128) !== 0) throw Error(F(558));
						}
						return we(r), null;
					case 13:
						if (l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
							if (c = Ti(r), l !== null && l.dehydrated !== null) {
								if (t === null) {
									if (!c) throw Error(F(318));
									if (!Hn) throw Error(F(344));
									if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(F(317));
									Hf(c, r);
								} else _a(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
								we(r), c = !1;
							} else c = Dl(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c), c = !0;
							if (!c) return r.flags & 256 ? (ht(r), r) : (ht(r), null);
						}
						return ht(r), (r.flags & 128) !== 0 ? (r.lanes = a, r) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = r.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== c && (l.flags |= 2048)), a !== t && a && (r.child.flags |= 8192), Ba(r, r.updateQueue), we(r), null);
					case 4: return Xo(), Qu(t, r), t === null && jm(r.stateNode.containerInfo), we(r), null;
					case 10: return En(r.type), we(r), null;
					case 19:
						if (D(ln), l = r.memoizedState, l === null) return we(r), null;
						if (c = (r.flags & 128) !== 0, d = l.rendering, d === null) if (c) Co(l, !1);
						else {
							if (Xe !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null;) {
								if (d = ko(t), d !== null) {
									for (r.flags |= 128, Co(l, !1), t = d.updateQueue, r.updateQueue = t, Ba(r, t), r.subtreeFlags = 0, t = a, a = r.child; a !== null;) yf(a, t), a = a.sibling;
									return Ce(ln, ln.current & 1 | 2), ue && or(r, l.treeForkCount), r.child;
								}
								t = t.sibling;
							}
							l.tail !== null && ze() > ml && (r.flags |= 128, c = !0, Co(l, !1), r.lanes = 4194304);
						}
						else {
							if (!c) if (t = ko(d), t !== null) {
								if (r.flags |= 128, c = !0, t = t.updateQueue, r.updateQueue = t, Ba(r, t), Co(l, !0), l.tail === null && l.tailMode === "hidden" && !d.alternate && !ue) return we(r), null;
							} else 2 * ze() - l.renderingStartTime > ml && a !== 536870912 && (r.flags |= 128, c = !0, Co(l, !1), r.lanes = 4194304);
							l.isBackwards ? (d.sibling = r.child, r.child = d) : (t = l.last, t !== null ? t.sibling = d : r.child = d, l.last = d);
						}
						return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ze(), t.sibling = null, a = ln.current, Ce(ln, c ? a & 1 | 2 : a & 1), ue && or(r, l.treeForkCount), t) : (we(r), null);
					case 22:
					case 23: return ht(r), bo(), l = r.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (r.flags |= 8192) : l && (r.flags |= 8192), l ? a & 536870912 && !(r.flags & 128) && (we(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : we(r), a = r.updateQueue, a !== null && Ba(r, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048), t !== null && D(ha), null;
					case 24: return a = null, t !== null && (a = t.memoizedState.cache), r.memoizedState.cache !== a && (r.flags |= 2048), En(qe), we(r), null;
					case 25: return null;
					case 30: return null;
				}
				throw Error(F(156, r.tag));
			}
			function gr(t, r) {
				switch (gu(r), r.tag) {
					case 1: return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 3: return En(qe), Xo(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
					case 26:
					case 27:
					case 5: return jl(r), null;
					case 31:
						if (r.memoizedState !== null) {
							if (ht(r), r.alternate === null) throw Error(F(340));
							_a();
						}
						return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 13:
						if (ht(r), t = r.memoizedState, t !== null && t.dehydrated !== null) {
							if (r.alternate === null) throw Error(F(340));
							_a();
						}
						return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 19: return D(ln), null;
					case 4: return Xo(), null;
					case 10: return En(r.type), null;
					case 22:
					case 23: return ht(r), bo(), t !== null && D(ha), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 24: return En(qe), null;
					case 25: return null;
					default: return null;
				}
			}
			function $u(t, r) {
				switch (gu(r), r.tag) {
					case 3:
						En(qe), Xo();
						break;
					case 26:
					case 27:
					case 5:
						jl(r);
						break;
					case 4:
						Xo();
						break;
					case 31:
						r.memoizedState !== null && ht(r);
						break;
					case 13:
						ht(r);
						break;
					case 19:
						D(ln);
						break;
					case 10:
						En(r.type);
						break;
					case 22:
					case 23:
						ht(r), bo(), t !== null && D(ha);
						break;
					case 24: En(qe);
				}
			}
			function Br(t, r) {
				try {
					var a = r.updateQueue, l = a !== null ? a.lastEffect : null;
					if (l !== null) {
						var c = l.next;
						a = c;
						do {
							if ((a.tag & t) === t) {
								l = void 0;
								var d = a.create, h = a.inst;
								l = d(), h.destroy = l;
							}
							a = a.next;
						} while (a !== c);
					}
				} catch (y) {
					ve(r, r.return, y);
				}
			}
			function Or(t, r, a) {
				try {
					var l = r.updateQueue, c = l !== null ? l.lastEffect : null;
					if (c !== null) {
						var d = c.next;
						l = d;
						do {
							if ((l.tag & t) === t) {
								var h = l.inst, y = h.destroy;
								if (y !== void 0) {
									h.destroy = void 0, c = r;
									var R = a, L = y;
									try {
										L();
									} catch (j) {
										ve(c, R, j);
									}
								}
							}
							l = l.next;
						} while (l !== d);
					}
				} catch (j) {
					ve(r, r.return, j);
				}
			}
			function Qi(t) {
				var r = t.updateQueue;
				if (r !== null) {
					var a = t.stateNode;
					try {
						Fp(r, a);
					} catch (l) {
						ve(t, t.return, l);
					}
				}
			}
			function Vu(t, r, a) {
				a.props = Wr(t.type, t.memoizedProps), a.state = t.memoizedState;
				try {
					a.componentWillUnmount();
				} catch (l) {
					ve(t, r, l);
				}
			}
			function ta(t, r) {
				try {
					var a = t.ref;
					if (a !== null) {
						switch (t.tag) {
							case 26:
							case 27:
							case 5:
								var l = Ts(t.stateNode);
								break;
							case 30:
								l = t.stateNode;
								break;
							default: l = t.stateNode;
						}
						typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
					}
				} catch (c) {
					ve(t, r, c);
				}
			}
			function yr(t, r) {
				var a = t.ref, l = t.refCleanup;
				if (a !== null) if (typeof l == "function") try {
					l();
				} catch (c) {
					ve(t, r, c);
				} finally {
					t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
				}
				else if (typeof a == "function") try {
					a(null);
				} catch (c) {
					ve(t, r, c);
				}
				else a.current = null;
			}
			function nf(t) {
				var r = t.type, a = t.memoizedProps, l = t.stateNode;
				try {
					dh(l, r, a, t);
				} catch (c) {
					ve(t, t.return, c);
				}
			}
			function qu(t, r, a) {
				try {
					vc(t.stateNode, t.type, a, r, t);
				} catch (l) {
					ve(t, t.return, l);
				}
			}
			function tf(t) {
				return t.tag === 5 || t.tag === 3 || (Gt ? t.tag === 26 : !1) || (dn ? t.tag === 27 && Xa(t.type) : !1) || t.tag === 4;
			}
			function Gu(t) {
				e: for (;;) {
					for (; t.sibling === null;) {
						if (t.return === null || tf(t.return)) return null;
						t = t.return;
					}
					for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
						if (dn && t.tag === 27 && Xa(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
						t.child.return = t, t = t.child;
					}
					if (!(t.flags & 2)) return t.stateNode;
				}
			}
			function fs(t, r, a) {
				var l = t.tag;
				if (l === 5 || l === 6) t = t.stateNode, r ? ph(a, t, r) : ch(a, t);
				else if (l !== 4 && (dn && l === 27 && Xa(t.type) && (a = t.stateNode, r = null), t = t.child, t !== null)) for (fs(t, r, a), t = t.sibling; t !== null;) fs(t, r, a), t = t.sibling;
			}
			function $i(t, r, a) {
				var l = t.tag;
				if (l === 5 || l === 6) t = t.stateNode, r ? fh(a, t, r) : uh(a, t);
				else if (l !== 4 && (dn && l === 27 && Xa(t.type) && (a = t.stateNode), t = t.child, t !== null)) for ($i(t, r, a), t = t.sibling; t !== null;) $i(t, r, a), t = t.sibling;
			}
			function Ju(t, r, a) {
				t = t.containerInfo;
				try {
					bh(t, a);
				} catch (l) {
					ve(r, r.return, l);
				}
			}
			function rf(t) {
				var r = t.stateNode, a = t.memoizedProps;
				try {
					Rc(t.type, a, r, t);
				} catch (l) {
					ve(t, t.return, l);
				}
			}
			function Wp(t, r) {
				for (Am(t.containerInfo), Pn = r; Pn !== null;) if (t = Pn, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, Pn = r;
				else for (; Pn !== null;) {
					t = Pn;
					var a = t.alternate;
					switch (r = t.flags, t.tag) {
						case 0:
							if ((r & 4) !== 0 && (r = t.updateQueue, r = r !== null ? r.events : null, r !== null)) for (var l = 0; l < r.length; l++) {
								var c = r[l];
								c.ref.impl = c.nextImpl;
							}
							break;
						case 11:
						case 15: break;
						case 1:
							if ((r & 1024) !== 0 && a !== null) {
								r = void 0, l = t, c = a.memoizedProps, a = a.memoizedState;
								var d = l.stateNode;
								try {
									var h = Wr(l.type, c);
									r = d.getSnapshotBeforeUpdate(h, a), d.__reactInternalSnapshotBeforeUpdate = r;
								} catch (y) {
									ve(l, l.return, y);
								}
							}
							break;
						case 3:
							r & 1024 && $n && Nt(t.stateNode.containerInfo);
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17: break;
						default: if ((r & 1024) !== 0) throw Error(F(163));
					}
					if (r = t.sibling, r !== null) {
						r.return = t.return, Pn = r;
						break;
					}
					Pn = t.return;
				}
			}
			function of(t, r, a) {
				var l = a.flags;
				switch (a.tag) {
					case 0:
					case 11:
					case 15:
						$t(t, a), l & 4 && Br(5, a);
						break;
					case 1:
						if ($t(t, a), l & 4) if (t = a.stateNode, r === null) try {
							t.componentDidMount();
						} catch (h) {
							ve(a, a.return, h);
						}
						else {
							var c = Wr(a.type, r.memoizedProps);
							r = r.memoizedState;
							try {
								t.componentDidUpdate(c, r, t.__reactInternalSnapshotBeforeUpdate);
							} catch (h) {
								ve(a, a.return, h);
							}
						}
						l & 64 && Qi(a), l & 512 && ta(a, a.return);
						break;
					case 3:
						if ($t(t, a), l & 64 && (l = a.updateQueue, l !== null)) {
							if (t = null, a.child !== null) switch (a.child.tag) {
								case 27:
								case 5:
									t = Ts(a.child.stateNode);
									break;
								case 1: t = a.child.stateNode;
							}
							try {
								Fp(l, t);
							} catch (h) {
								ve(a, a.return, h);
							}
						}
						break;
					case 27: dn && r === null && l & 4 && rf(a);
					case 26:
					case 5:
						if ($t(t, a), r === null) {
							if (l & 4) nf(a);
							else if (l & 64) {
								t = a.type, r = a.memoizedProps, c = a.stateNode;
								try {
									_h(c, t, r, a);
								} catch (h) {
									ve(a, a.return, h);
								}
							}
						}
						l & 512 && ta(a, a.return);
						break;
					case 12:
						$t(t, a);
						break;
					case 31:
						$t(t, a), l & 4 && af(t, a);
						break;
					case 13:
						$t(t, a), l & 4 && Yu(t, a), l & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = sc.bind(null, a), Xi(l, a))));
						break;
					case 22:
						if (l = a.memoizedState !== null || eo, !l) {
							r = r !== null && r.memoizedState !== null || sn, c = eo;
							var d = sn;
							eo = l, (sn = r) && !d ? br(t, a, (a.subtreeFlags & 8772) !== 0) : $t(t, a), eo = c, sn = d;
						}
						break;
					case 30: break;
					default: $t(t, a);
				}
			}
			function Up(t) {
				var r = t.alternate;
				r !== null && (t.alternate = null, Up(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && th(r)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
			}
			function Qt(t, r, a) {
				for (a = a.child; a !== null;) Zu(t, r, a), a = a.sibling;
			}
			function Zu(t, r, a) {
				if (on && typeof on.onCommitFiberUnmount == "function") try {
					on.onCommitFiberUnmount(ei, a);
				} catch {}
				switch (a.tag) {
					case 26: if (Gt) {
						sn || yr(a, r), Qt(t, r, a), a.memoizedState ? Hh(a.memoizedState) : a.stateNode && Wf(a.stateNode);
						break;
					}
					case 27: if (dn) {
						sn || yr(a, r);
						var l = mn, c = Pt;
						Xa(a.type) && (mn = a.stateNode, Pt = !1), Qt(t, r, a), fa(a.stateNode), mn = l, Pt = c;
						break;
					}
					case 5: sn || yr(a, r);
					case 6:
						if ($n) {
							if (l = mn, c = Pt, mn = null, Qt(t, r, a), mn = l, Pt = c, mn !== null) if (Pt) try {
								If(mn, a.stateNode);
							} catch (d) {
								ve(a, r, d);
							}
							else try {
								Ef(mn, a.stateNode);
							} catch (d) {
								ve(a, r, d);
							}
						} else Qt(t, r, a);
						break;
					case 18:
						$n && mn !== null && (Pt ? Af(mn, a.stateNode) : Se(mn, a.stateNode));
						break;
					case 4:
						$n ? (l = mn, c = Pt, mn = a.stateNode.containerInfo, Pt = !0, Qt(t, r, a), mn = l, Pt = c) : (Sr && Ju(a.stateNode, a, We()), Qt(t, r, a));
						break;
					case 0:
					case 11:
					case 14:
					case 15:
						Or(2, a, r), sn || Or(4, a, r), Qt(t, r, a);
						break;
					case 1:
						sn || (yr(a, r), l = a.stateNode, typeof l.componentWillUnmount == "function" && Vu(a, r, l)), Qt(t, r, a);
						break;
					case 21:
						Qt(t, r, a);
						break;
					case 22:
						sn = (l = sn) || a.memoizedState !== null, Qt(t, r, a), sn = l;
						break;
					default: Qt(t, r, a);
				}
			}
			function af(t, r) {
				if (Hn && r.memoizedState === null && (t = r.alternate, t !== null && (t = t.memoizedState, t !== null))) {
					t = t.dehydrated;
					try {
						Rh(t);
					} catch (a) {
						ve(r, r.return, a);
					}
				}
			}
			function Yu(t, r) {
				if (Hn && r.memoizedState === null && (t = r.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
					el(t);
				} catch (a) {
					ve(r, r.return, a);
				}
			}
			function Bp(t) {
				switch (t.tag) {
					case 31:
					case 13:
					case 19:
						var r = t.stateNode;
						return r === null && (r = t.stateNode = new $c()), r;
					case 22: return t = t.stateNode, r = t._retryCache, r === null && (r = t._retryCache = new $c()), r;
					default: throw Error(F(435, t.tag));
				}
			}
			function ps(t, r) {
				var a = Bp(t);
				r.forEach(function(l) {
					if (!a.has(l)) {
						a.add(l);
						var c = Zp.bind(null, t, l);
						l.then(c, c);
					}
				});
			}
			function tn(t, r) {
				var a = r.deletions;
				if (a !== null) for (var l = 0; l < a.length; l++) {
					var c = a[l], d = t, h = r;
					if ($n) {
						var y = h;
						e: for (; y !== null;) {
							switch (y.tag) {
								case 27: if (dn) {
									if (Xa(y.type)) {
										mn = y.stateNode, Pt = !1;
										break e;
									}
									break;
								}
								case 5:
									mn = y.stateNode, Pt = !1;
									break e;
								case 3:
								case 4:
									mn = y.stateNode.containerInfo, Pt = !0;
									break e;
							}
							y = y.return;
						}
						if (mn === null) throw Error(F(160));
						Zu(d, h, c), mn = null, Pt = !1;
					} else Zu(d, h, c);
					d = c.alternate, d !== null && (d.return = null), c.return = null;
				}
				if (r.subtreeFlags & 13886) for (r = r.child; r !== null;) hs(r, t), r = r.sibling;
			}
			function hs(t, r) {
				var a = t.alternate, l = t.flags;
				switch (t.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
						tn(r, t), Mn(t), l & 4 && (Or(3, t, t.return), Br(3, t), Or(5, t, t.return));
						break;
					case 1:
						tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), l & 64 && eo && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
						break;
					case 26: if (Gt) {
						var c = Cr;
						if (tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), l & 4) {
							l = a !== null ? a.memoizedState : null;
							var d = t.memoizedState;
							a === null ? d === null ? t.stateNode === null ? t.stateNode = Ya(c, t.type, t.memoizedProps, t) : Cc(c, t.type, t.stateNode) : t.stateNode = Fh(c, d, t.memoizedProps) : l !== d ? (l === null ? a.stateNode !== null && Wf(a.stateNode) : Hh(l), d === null ? Cc(c, t.type, t.stateNode) : Fh(c, d, t.memoizedProps)) : d === null && t.stateNode !== null && qu(t, t.memoizedProps, a.memoizedProps);
						}
						break;
					}
					case 27: if (dn) {
						tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), a !== null && l & 4 && qu(t, t.memoizedProps, a.memoizedProps);
						break;
					}
					case 5:
						if (tn(r, t), Mn(t), l & 512 && (sn || a === null || yr(a, a.return)), $n) {
							if (t.flags & 32) {
								c = t.stateNode;
								try {
									Sc(c);
								} catch (A) {
									ve(t, t.return, A);
								}
							}
							l & 4 && t.stateNode != null && (c = t.memoizedProps, qu(t, c, a !== null ? a.memoizedProps : c)), l & 1024 && (Ms = !0);
						} else Sr && t.alternate !== null && (t.alternate.stateNode = t.stateNode);
						break;
					case 6:
						if (tn(r, t), Mn(t), l & 4 && $n) {
							if (t.stateNode === null) throw Error(F(162));
							l = t.memoizedProps, a = a !== null ? a.memoizedProps : l, c = t.stateNode;
							try {
								Is(c, a, l);
							} catch (A) {
								ve(t, t.return, A);
							}
						}
						break;
					case 3:
						if (Gt ? (jh(), c = Cr, Cr = zc(r.containerInfo), tn(r, t), Cr = c) : tn(r, t), Mn(t), l & 4) {
							if ($n && Hn && a !== null && a.memoizedState.isDehydrated) try {
								Mm(r.containerInfo);
							} catch (A) {
								ve(t, t.return, A);
							}
							if (Sr) {
								l = r.containerInfo, a = r.pendingChildren;
								try {
									bh(l, a);
								} catch (A) {
									ve(t, t.return, A);
								}
							}
						}
						Ms && (Ms = !1, Op(t));
						break;
					case 4:
						Gt ? (a = Cr, Cr = zc(t.stateNode.containerInfo), tn(r, t), Mn(t), Cr = a) : (tn(r, t), Mn(t)), l & 4 && Sr && Ju(t.stateNode, t, t.stateNode.pendingChildren);
						break;
					case 12:
						tn(r, t), Mn(t);
						break;
					case 31:
						tn(r, t), Mn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ps(t, l)));
						break;
					case 13:
						tn(r, t), Mn(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Vs = ze()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ps(t, l)));
						break;
					case 22:
						c = t.memoizedState !== null;
						var h = a !== null && a.memoizedState !== null, y = eo, R = sn;
						if (eo = y || c, sn = R || h, tn(r, t), sn = R, eo = y, Mn(t), l & 8192 && (r = t.stateNode, r._visibility = c ? r._visibility & -2 : r._visibility | 1, c && (a === null || h || eo || sn || Vt(t)), $n)) {
							e: if (a = null, $n) for (r = t;;) {
								if (r.tag === 5 || Gt && r.tag === 26) {
									if (a === null) {
										h = a = r;
										try {
											d = h.stateNode, c ? hh(d) : Wm(h.stateNode, h.memoizedProps);
										} catch (A) {
											ve(h, h.return, A);
										}
									}
								} else if (r.tag === 6) {
									if (a === null) {
										h = r;
										try {
											var L = h.stateNode;
											c ? kc(L) : mh(L, h.memoizedProps);
										} catch (A) {
											ve(h, h.return, A);
										}
									}
								} else if (r.tag === 18) {
									if (a === null) {
										h = r;
										try {
											var j = h.stateNode;
											c ? Qm(j) : Lh(h.stateNode);
										} catch (A) {
											ve(h, h.return, A);
										}
									}
								} else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === t) && r.child !== null) {
									r.child.return = r, r = r.child;
									continue;
								}
								if (r === t) break e;
								for (; r.sibling === null;) {
									if (r.return === null || r.return === t) break e;
									a === r && (a = null), r = r.return;
								}
								a === r && (a = null), r.sibling.return = r.return, r = r.sibling;
							}
						}
						l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, ps(t, a))));
						break;
					case 19:
						tn(r, t), Mn(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ps(t, l)));
						break;
					case 30: break;
					case 21: break;
					default: tn(r, t), Mn(t);
				}
			}
			function Mn(t) {
				var r = t.flags;
				if (r & 2) {
					try {
						for (var a, l = t.return; l !== null;) {
							if (tf(l)) {
								a = l;
								break;
							}
							l = l.return;
						}
						if ($n) {
							if (a == null) throw Error(F(160));
							switch (a.tag) {
								case 27: if (dn) {
									var c = a.stateNode;
									$i(t, Gu(t), c);
									break;
								}
								case 5:
									var h = a.stateNode;
									a.flags & 32 && (Sc(h), a.flags &= -33);
									$i(t, Gu(t), h);
									break;
								case 3:
								case 4:
									var R = a.stateNode.containerInfo;
									fs(t, Gu(t), R);
									break;
								default: throw Error(F(161));
							}
						}
					} catch (j) {
						ve(t, t.return, j);
					}
					t.flags &= -3;
				}
				r & 4096 && (t.flags &= -4097);
			}
			function Op(t) {
				if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) {
					var r = t;
					Op(r), r.tag === 5 && r.flags & 1024 && qa(r.stateNode), t = t.sibling;
				}
			}
			function $t(t, r) {
				if (r.subtreeFlags & 8772) for (r = r.child; r !== null;) of(t, r.alternate, r), r = r.sibling;
			}
			function Vt(t) {
				for (t = t.child; t !== null;) {
					var r = t;
					switch (r.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							Or(4, r, r.return), Vt(r);
							break;
						case 1:
							yr(r, r.return);
							var a = r.stateNode;
							typeof a.componentWillUnmount == "function" && Vu(r, r.return, a), Vt(r);
							break;
						case 27: dn && fa(r.stateNode);
						case 26:
						case 5:
							yr(r, r.return), Vt(r);
							break;
						case 22:
							r.memoizedState === null && Vt(r);
							break;
						case 30:
							Vt(r);
							break;
						default: Vt(r);
					}
					t = t.sibling;
				}
			}
			function br(t, r, a) {
				for (a = a && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null;) {
					var l = r.alternate, c = t, d = r, h = d.flags;
					switch (d.tag) {
						case 0:
						case 11:
						case 15:
							br(c, d, a), Br(4, d);
							break;
						case 1:
							if (br(c, d, a), l = d, c = l.stateNode, typeof c.componentDidMount == "function") try {
								c.componentDidMount();
							} catch (L) {
								ve(l, l.return, L);
							}
							if (l = d, c = l.updateQueue, c !== null) {
								var y = l.stateNode;
								try {
									var R = c.shared.hiddenCallbacks;
									if (R !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++) Dd(R[c], y);
								} catch (L) {
									ve(l, l.return, L);
								}
							}
							a && h & 64 && Qi(d), ta(d, d.return);
							break;
						case 27: dn && rf(d);
						case 26:
						case 5:
							br(c, d, a), a && l === null && h & 4 && nf(d), ta(d, d.return);
							break;
						case 12:
							br(c, d, a);
							break;
						case 31:
							br(c, d, a), a && h & 4 && af(c, d);
							break;
						case 13:
							br(c, d, a), a && h & 4 && Yu(c, d);
							break;
						case 22:
							d.memoizedState === null && br(c, d, a), ta(d, d.return);
							break;
						case 30: break;
						default: br(c, d, a);
					}
					r = r.sibling;
				}
			}
			function To(t, r) {
				var a = null;
				t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (t = r.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Ra(a));
			}
			function Qn(t, r) {
				t = null, r.alternate !== null && (t = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== t && (r.refCount++, t != null && Ra(t));
			}
			function yt(t, r, a, l) {
				if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) Mp(t, r, a, l), r = r.sibling;
			}
			function Mp(t, r, a, l) {
				var c = r.flags;
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						yt(t, r, a, l), c & 2048 && Br(9, r);
						break;
					case 1:
						yt(t, r, a, l);
						break;
					case 3:
						yt(t, r, a, l), c & 2048 && (t = null, r.alternate !== null && (t = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== t && (r.refCount++, t != null && Ra(t)));
						break;
					case 12:
						if (c & 2048) {
							yt(t, r, a, l), t = r.stateNode;
							try {
								var d = r.memoizedProps, h = d.id, y = d.onPostCommit;
								typeof y == "function" && y(h, r.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
							} catch (R) {
								ve(r, r.return, R);
							}
						} else yt(t, r, a, l);
						break;
					case 31:
						yt(t, r, a, l);
						break;
					case 13:
						yt(t, r, a, l);
						break;
					case 23: break;
					case 22:
						d = r.stateNode, h = r.alternate, r.memoizedState !== null ? d._visibility & 2 ? yt(t, r, a, l) : oa(t, r) : d._visibility & 2 ? yt(t, r, a, l) : (d._visibility |= 2, ra(t, r, a, l, (r.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && To(h, r);
						break;
					case 24:
						yt(t, r, a, l), c & 2048 && Qn(r.alternate, r);
						break;
					default: yt(t, r, a, l);
				}
			}
			function ra(t, r, a, l, c) {
				for (c = c && ((r.subtreeFlags & 10256) !== 0 || !1), r = r.child; r !== null;) {
					var d = t, h = r, y = a, R = l, L = h.flags;
					switch (h.tag) {
						case 0:
						case 11:
						case 15:
							ra(d, h, y, R, c), Br(8, h);
							break;
						case 23: break;
						case 22:
							var j = h.stateNode;
							h.memoizedState !== null ? j._visibility & 2 ? ra(d, h, y, R, c) : oa(d, h) : (j._visibility |= 2, ra(d, h, y, R, c)), c && L & 2048 && To(h.alternate, h);
							break;
						case 24:
							ra(d, h, y, R, c), c && L & 2048 && Qn(h.alternate, h);
							break;
						default: ra(d, h, y, R, c);
					}
					r = r.sibling;
				}
			}
			function oa(t, r) {
				if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) {
					var a = t, l = r, c = l.flags;
					switch (l.tag) {
						case 22:
							oa(a, l), c & 2048 && To(l.alternate, l);
							break;
						case 24:
							oa(a, l), c & 2048 && Qn(l.alternate, l);
							break;
						default: oa(a, l);
					}
					r = r.sibling;
				}
			}
			function _o(t, r, a) {
				if (t.subtreeFlags & ga) for (t = t.child; t !== null;) lf(t, r, a), t = t.sibling;
			}
			function lf(t, r, a) {
				switch (t.tag) {
					case 26:
						if (_o(t, r, a), t.flags & ga) if (t.memoizedState !== null) Fo(a, Cr, t.memoizedState, t.memoizedProps);
						else {
							var l = t.stateNode, c = t.type;
							t = t.memoizedProps, ((r & 335544128) === r || Yi(c, t)) && Vn(a, l, c, t);
						}
						break;
					case 5:
						_o(t, r, a), t.flags & ga && (l = t.stateNode, c = t.type, t = t.memoizedProps, ((r & 335544128) === r || Yi(c, t)) && Vn(a, l, c, t));
						break;
					case 3:
					case 4:
						Gt ? (l = Cr, Cr = zc(t.stateNode.containerInfo), _o(t, r, a), Cr = l) : _o(t, r, a);
						break;
					case 22:
						t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = ga, ga = 16777216, _o(t, r, a), ga = l) : _o(t, r, a));
						break;
					default: _o(t, r, a);
				}
			}
			function Xu(t) {
				var r = t.alternate;
				if (r !== null && (t = r.child, t !== null)) {
					r.child = null;
					do
						r = t.sibling, t.sibling = null, t = r;
					while (t !== null);
				}
			}
			function aa(t) {
				var r = t.deletions;
				if ((t.flags & 16) !== 0) {
					if (r !== null) for (var a = 0; a < r.length; a++) {
						var l = r[a];
						Pn = l, ec(l, t);
					}
					Xu(t);
				}
				if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Ku(t), t = t.sibling;
			}
			function Ku(t) {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						aa(t), t.flags & 2048 && Or(9, t, t.return);
						break;
					case 3:
						aa(t);
						break;
					case 12:
						aa(t);
						break;
					case 22:
						var r = t.stateNode;
						t.memoizedState !== null && r._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (r._visibility &= -3, Ma(t)) : aa(t);
						break;
					default: aa(t);
				}
			}
			function Ma(t) {
				var r = t.deletions;
				if ((t.flags & 16) !== 0) {
					if (r !== null) for (var a = 0; a < r.length; a++) {
						var l = r[a];
						Pn = l, ec(l, t);
					}
					Xu(t);
				}
				for (t = t.child; t !== null;) {
					switch (r = t, r.tag) {
						case 0:
						case 11:
						case 15:
							Or(8, r, r.return), Ma(r);
							break;
						case 22:
							a = r.stateNode, a._visibility & 2 && (a._visibility &= -3, Ma(r));
							break;
						default: Ma(r);
					}
					t = t.sibling;
				}
			}
			function ec(t, r) {
				for (; Pn !== null;) {
					var a = Pn;
					switch (a.tag) {
						case 0:
						case 11:
						case 15:
							Or(8, a, r);
							break;
						case 23:
						case 22:
							if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
								var l = a.memoizedState.cachePool.pool;
								l != null && l.refCount++;
							}
							break;
						case 24: Ra(a.memoizedState.cache);
					}
					if (l = a.child, l !== null) l.return = a, Pn = l;
					else e: for (a = t; Pn !== null;) {
						l = Pn;
						var c = l.sibling, d = l.return;
						if (Up(l), l === a) {
							Pn = null;
							break e;
						}
						if (c !== null) {
							c.return = d, Pn = c;
							break e;
						}
						Pn = d;
					}
				}
			}
			function Vi(t) {
				var r = nh(t);
				if (r != null) {
					if (typeof r.memoizedProps["data-testname"] != "string") throw Error(F(364));
					return r;
				}
				if (t = Rf(t), t === null) throw Error(F(362));
				return t.stateNode.current;
			}
			function ms(t, r) {
				var a = t.tag;
				switch (r.$$typeof) {
					case Vc:
						if (t.type === r.value) return !0;
						break;
					case qc:
						e: {
							for (r = r.value, t = [t, 0], a = 0; a < t.length;) {
								var l = t[a++], c = l.tag, d = t[a++], h = r[d];
								if (c !== 5 && c !== 26 && c !== 27 || !Jr(l)) {
									for (; h != null && ms(l, h);) d++, h = r[d];
									if (d === r.length) {
										r = !0;
										break e;
									} else for (l = l.child; l !== null;) t.push(l, d), l = l.sibling;
								}
							}
							r = !1;
						}
						return r;
					case Gc:
						if ((a === 5 || a === 26 || a === 27) && sh(t.stateNode, r.value)) return !0;
						break;
					case Zc:
						if ((a === 5 || a === 6 || a === 26 || a === 27) && (t = lh(t), t !== null && 0 <= t.indexOf(r.value))) return !0;
						break;
					case Jc:
						if ((a === 5 || a === 26 || a === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === r.value.toLowerCase())) return !0;
						break;
					default: throw Error(F(365));
				}
				return !1;
			}
			function nc(t) {
				switch (t.$$typeof) {
					case Vc: return "<" + (hu(t.value) || "Unknown") + ">";
					case qc: return ":has(" + (nc(t) || "") + ")";
					case Gc: return "[role=\"" + t.value + "\"]";
					case Zc: return "\"" + t.value + "\"";
					case Jc: return "[data-testname=\"" + t.value + "\"]";
					default: throw Error(F(365));
				}
			}
			function sf(t, r) {
				var a = [];
				t = [t, 0];
				for (var l = 0; l < t.length;) {
					var c = t[l++], d = c.tag, h = t[l++], y = r[h];
					if (d !== 5 && d !== 26 && d !== 27 || !Jr(c)) {
						for (; y != null && ms(c, y);) h++, y = r[h];
						if (h === r.length) a.push(c);
						else for (c = c.child; c !== null;) t.push(c, h), c = c.sibling;
					}
				}
				return a;
			}
			function gs(t, r) {
				if (!Ga) throw Error(F(363));
				t = Vi(t), t = sf(t, r), r = [], t = Array.from(t);
				for (var a = 0; a < t.length;) {
					var l = t[a++], c = l.tag;
					if (c === 5 || c === 26 || c === 27) Jr(l) || r.push(l.stateNode);
					else for (l = l.child; l !== null;) t.push(l), l = l.sibling;
				}
				return r;
			}
			function bt() {
				return (ce & 2) !== 0 && he !== 0 ? he & -he : M.T !== null ? ku() : kr();
			}
			function ys() {
				if (At === 0) if ((he & 536870912) === 0 || ue) {
					var t = js;
					js <<= 1, !(js & 3932160) && (js = 262144), At = t;
				} else At = 536870912;
				return t = Ft.current, t !== null && (t.flags |= 32), At;
			}
			function nt(t, r, a) {
				(t === Ne && (_e === 2 || _e === 9) || t.cancelPendingCommit !== null) && (la(t, 0), Ro(t, he, At, !1)), xi(t, a), (!(ce & 2) || t !== Ne) && (t === Ne && (!(ce & 2) && (ii |= a), Xe === 4 && Ro(t, he, At, !1)), ir(t));
			}
			function uf(t, r, a) {
				if ((ce & 6) !== 0) throw Error(F(327));
				var l = !a && (r & 127) === 0 && (r & t.expiredLanes) === 0 || Pi(t, r), c = l ? Gp(t, r) : Ji(t, r, !0), d = l;
				do {
					if (c === 0) {
						ai && !l && Ro(t, r, 0, !1);
						break;
					} else {
						if (a = t.current.alternate, d && !Qp(a)) {
							c = Ji(t, r, !1), d = !1;
							continue;
						}
						if (c === 2) {
							if (d = r, t.errorRecoveryDisabledLanes & d) var h = 0;
							else h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
							if (h !== 0) {
								r = h;
								e: {
									var y = t;
									c = $s;
									var R = Hn && y.current.memoizedState.isDehydrated;
									if (R && (la(y, h).flags |= 256), h = Ji(y, h, !1), h !== 2) {
										if (Gf && !R) {
											y.errorRecoveryDisabledLanes |= d, ii |= d, c = 4;
											break e;
										}
										d = xt, xt = c, d !== null && (xt === null ? xt = d : xt.push.apply(xt, d));
									}
									c = h;
								}
								if (d = !1, c !== 2) continue;
							}
						}
						if (c === 1) {
							la(t, 0), Ro(t, r, 0, !0);
							break;
						}
						e: {
							switch (l = t, d = c, d) {
								case 0:
								case 1: throw Error(F(345));
								case 4: if ((r & 4194048) !== r) break;
								case 6:
									Ro(l, r, At, !ya);
									break e;
								case 2:
									xt = null;
									break;
								case 3:
								case 5: break;
								default: throw Error(F(329));
							}
							if ((r & 62914560) === r && (c = Vs + 300 - ze(), 10 < c)) {
								if (Ro(l, r, At, !ya), Lr(l, 0, !0) !== 0) break e;
								no = r, l.timeoutHandle = eh(tc.bind(null, l, a, xt, Xc, Yc, r, At, ii, hl, ya, d, "Throttled", -0, 0), c);
								break e;
							}
							tc(l, a, xt, Xc, Yc, r, At, ii, hl, ya, d, null, -0, 0);
						}
					}
					break;
				} while (!0);
				ir(t);
			}
			function tc(t, r, a, l, c, d, h, y, R, L, j, A, W, V) {
				if (t.timeoutHandle = Lo, A = r.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
					A = oh(), lf(r, d, A);
					var Oe = (d & 62914560) === d ? Vs - ze() : (d & 4194048) === d ? Zf - ze() : 0;
					if (Oe = ah(A, Oe), Oe !== null) {
						no = d, t.cancelPendingCommit = Oe(pf.bind(null, t, r, d, a, l, c, h, y, R, j, A, null, W, V)), Ro(t, d, h, !L);
						return;
					}
				}
				pf(t, r, d, a, l, c, h, y, R);
			}
			function Qp(t) {
				for (var r = t;;) {
					var a = r.tag;
					if ((a === 0 || a === 11 || a === 15) && r.flags & 16384 && (a = r.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
						var c = a[l], d = c.getSnapshot;
						c = c.value;
						try {
							if (!jn(d(), c)) return !1;
						} catch {
							return !1;
						}
					}
					if (a = r.child, r.subtreeFlags & 16384 && a !== null) a.return = r, r = a;
					else {
						if (r === t) break;
						for (; r.sibling === null;) {
							if (r.return === null || r.return === t) return !0;
							r = r.return;
						}
						r.sibling.return = r.return, r = r.sibling;
					}
				}
				return !0;
			}
			function Ro(t, r, a, l) {
				r &= ~Jf, r &= ~ii, t.suspendedLanes |= r, t.pingedLanes &= ~r, l && (t.warmLanes |= r), l = t.expirationTimes;
				for (var c = r; 0 < c;) {
					var d = 31 - vt(c), h = 1 << d;
					l[d] = -1, c &= ~h;
				}
				a !== 0 && Yo(t, a, r);
			}
			function ia() {
				return (ce & 6) === 0 ? (Ea(0, !1), !1) : !0;
			}
			function bs() {
				if (de !== null) {
					if (_e === 0) var t = de.return;
					else t = de, Be = at = null, Vl(t), Kt = null, Bs = 0, t = de;
					for (; t !== null;) $u(t.alternate, t), t = t.return;
					de = null;
				}
			}
			function la(t, r) {
				var a = t.timeoutHandle;
				a !== Lo && (t.timeoutHandle = Lo, Tf(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), no = 0, bs(), Ne = t, de = a = Qr(t.current, null), he = r, _e = 0, Ht = null, ya = !1, ai = Pi(t, r), Gf = !1, hl = At = Jf = ii = ba = Xe = 0, xt = $s = null, Yc = !1, r & 8 && (r |= r & 32);
				var l = t.entangledLanes;
				if (l !== 0) for (t = t.entanglements, l &= r; 0 < l;) {
					var c = 31 - vt(l), d = 1 << c;
					r |= t[c], l &= ~d;
				}
				return Uo = r, Bn(), a;
			}
			function $p(t, r) {
				ne = null, M.H = Os, r === cl || r === jc ? (r = Bl(), _e = 3) : r === Ac ? (r = Bl(), _e = 4) : _e = r === Mc ? 8 : r !== null && typeof r == "object" && typeof r.then == "function" ? 6 : 1, Ht = r, de === null && (Xe = 1, rs(t, ut(r, t.current)));
			}
			function Vp() {
				var t = Ft.current;
				return t === null ? !0 : (he & 4194048) === he ? zr === null : (he & 62914560) === he || (he & 536870912) !== 0 ? t === zr : !1;
			}
			function cf() {
				var t = M.H;
				return M.H = Os, t === null ? Os : t;
			}
			function qi() {
				var t = M.A;
				return M.A = Zm, t;
			}
			function Gi() {
				Xe = 4, ya || (he & 4194048) !== he && Ft.current !== null || (ai = !0), !(ba & 134217727) && !(ii & 134217727) || Ne === null || Ro(Ne, he, At, !1);
			}
			function Ji(t, r, a) {
				var l = ce;
				ce |= 2;
				var c = cf(), d = qi();
				(Ne !== t || he !== r) && (Xc = null, la(t, r)), r = !1;
				var h = Xe;
				e: do
					try {
						if (_e !== 0 && de !== null) {
							var y = de, R = Ht;
							switch (_e) {
								case 8:
									bs(), h = 6;
									break e;
								case 3:
								case 2:
								case 9:
								case 6:
									Ft.current === null && (r = !0);
									var L = _e;
									if (_e = 0, Ht = null, Qa(t, y, R, L), a && ai) {
										h = 0;
										break e;
									}
									break;
								default: L = _e, _e = 0, Ht = null, Qa(t, y, R, L);
							}
						}
						qp(), h = Xe;
						break;
					} catch (j) {
						$p(t, j);
					}
				while (!0);
				return r && t.shellSuspendCounter++, Be = at = null, ce = l, M.H = c, M.A = d, de === null && (Ne = null, he = 0, Bn()), h;
			}
			function qp() {
				for (; de !== null;) rc(de);
			}
			function Gp(t, r) {
				var a = ce;
				ce |= 2;
				var l = cf(), c = qi();
				Ne !== t || he !== r ? (Xc = null, ml = ze() + 500, la(t, r)) : ai = Pi(t, r);
				e: do
					try {
						if (_e !== 0 && de !== null) {
							r = de;
							var d = Ht;
							n: switch (_e) {
								case 1:
									_e = 0, Ht = null, Qa(t, r, d, 1);
									break;
								case 2:
								case 9:
									if (Hd(d)) {
										_e = 0, Ht = null, ff(r);
										break;
									}
									r = function() {
										_e !== 2 && _e !== 9 || Ne !== t || (_e = 7), ir(t);
									}, d.then(r, r);
									break e;
								case 3:
									_e = 7;
									break e;
								case 4:
									_e = 5;
									break e;
								case 7:
									Hd(d) ? (_e = 0, Ht = null, ff(r)) : (_e = 0, Ht = null, Qa(t, r, d, 7));
									break;
								case 5:
									var h = null;
									switch (de.tag) {
										case 26: h = de.memoizedState;
										case 5:
										case 27:
											var y = de, R = y.type, L = y.pendingProps;
											if (h ? Tc(h) : An(y.stateNode, R, L)) {
												_e = 0, Ht = null;
												var j = y.sibling;
												if (j !== null) de = j;
												else {
													var A = y.return;
													A !== null ? (de = A, Mr(A)) : de = null;
												}
												break n;
											}
									}
									_e = 0, Ht = null, Qa(t, r, d, 5);
									break;
								case 6:
									_e = 0, Ht = null, Qa(t, r, d, 6);
									break;
								case 8:
									bs(), Xe = 6;
									break e;
								default: throw Error(F(462));
							}
						}
						df();
						break;
					} catch (W) {
						$p(t, W);
					}
				while (!0);
				return Be = at = null, M.H = l, M.A = c, ce = a, de !== null ? 0 : (Ne = null, he = 0, Bn(), Xe);
			}
			function df() {
				for (; de !== null && !qm();) rc(de);
			}
			function rc(t) {
				var r = Bu(t.alternate, t, Uo);
				t.memoizedProps = t.pendingProps, r === null ? Mr(t) : de = r;
			}
			function ff(t) {
				var r = t, a = r.alternate;
				switch (r.tag) {
					case 15:
					case 0:
						r = Xd(a, r, r.pendingProps, r.type, void 0, he);
						break;
					case 11:
						r = Xd(a, r, r.pendingProps, r.type.render, r.ref, he);
						break;
					case 5: Vl(r);
					default: $u(a, r), r = de = yf(r, Uo), r = Bu(a, r, Uo);
				}
				t.memoizedProps = t.pendingProps, r === null ? Mr(t) : de = r;
			}
			function Qa(t, r, a, l) {
				Be = at = null, Vl(r), Kt = null, Bs = 0;
				var c = r.return;
				try {
					if (On(t, c, r, a, he)) {
						Xe = 1, rs(t, ut(a, t.current)), de = null;
						return;
					}
				} catch (d) {
					if (c !== null) throw de = c, d;
					Xe = 1, rs(t, ut(a, t.current)), de = null;
					return;
				}
				r.flags & 32768 ? (ue || l === 1 ? t = !0 : ai || (he & 536870912) !== 0 ? t = !1 : (ya = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ft.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vs(r, t)) : Mr(r);
			}
			function Mr(t) {
				var r = t;
				do {
					if ((r.flags & 32768) !== 0) {
						vs(r, ya);
						return;
					}
					t = r.return;
					var a = Oa(r.alternate, r, Uo);
					if (a !== null) {
						de = a;
						return;
					}
					if (r = r.sibling, r !== null) {
						de = r;
						return;
					}
					de = r = t;
				} while (r !== null);
				Xe === 0 && (Xe = 5);
			}
			function vs(t, r) {
				do {
					var a = gr(t.alternate, t);
					if (a !== null) {
						a.flags &= 32767, de = a;
						return;
					}
					if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !r && (t = t.sibling, t !== null)) {
						de = t;
						return;
					}
					de = t = a;
				} while (t !== null);
				Xe = 6, de = null;
			}
			function pf(t, r, a, l, c, d, h, y, R) {
				t.cancelPendingCommit = null;
				do
					rn();
				while (Re !== 0);
				if ((ce & 6) !== 0) throw Error(F(327));
				if (r !== null) {
					if (r === t.current) throw Error(F(177));
					if (d = r.lanes | r.childLanes, d |= $f, _p(t, a, d, h, y, R), t === Ne && (de = Ne = null, he = 0), Sa = r, Bo = t, no = a, Kc = d, ed = c, $h = l, (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Nm(Ao, function() {
						return hf(), null;
					})) : (t.callbackNode = null, t.callbackPriority = 0), l = (r.flags & 13878) !== 0, (r.subtreeFlags & 13878) !== 0 || l) {
						l = M.T, M.T = null, c = qr(), yn(2), h = ce, ce |= 4;
						try {
							Wp(t, r, a);
						} finally {
							ce = h, yn(c), M.T = l;
						}
					}
					Re = 1, oc(), ac(), ic();
				}
			}
			function oc() {
				if (Re === 1) {
					Re = 0;
					var t = Bo, r = Sa, a = (r.flags & 13878) !== 0;
					if ((r.subtreeFlags & 13878) !== 0 || a) {
						a = M.T, M.T = null;
						var l = qr();
						yn(2);
						var c = ce;
						ce |= 4;
						try {
							hs(r, t), _s(t.containerInfo);
						} finally {
							ce = c, yn(l), M.T = a;
						}
					}
					t.current = r, Re = 2;
				}
			}
			function ac() {
				if (Re === 2) {
					Re = 0;
					var t = Bo, r = Sa, a = (r.flags & 8772) !== 0;
					if ((r.subtreeFlags & 8772) !== 0 || a) {
						a = M.T, M.T = null;
						var l = qr();
						yn(2);
						var c = ce;
						ce |= 4;
						try {
							of(t, r.alternate, r);
						} finally {
							ce = c, yn(l), M.T = a;
						}
					}
					Re = 3;
				}
			}
			function ic() {
				if (Re === 4 || Re === 3) {
					Re = 0, St();
					var t = Bo, r = Sa, a = no, l = $h;
					(r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0 ? Re = 5 : (Re = 0, Sa = Bo = null, Jp(t, t.pendingLanes));
					var c = t.pendingLanes;
					if (c === 0 && (va = null), Ze(a), r = r.stateNode, on && typeof on.onCommitFiberRoot == "function") try {
						on.onCommitFiberRoot(ei, r, void 0, (r.current.flags & 128) === 128);
					} catch {}
					if (l !== null) {
						r = M.T, c = qr(), yn(2), M.T = null;
						try {
							for (var d = t.onRecoverableError, h = 0; h < l.length; h++) {
								var y = l[h];
								d(y.value, { componentStack: y.stack });
							}
						} finally {
							M.T = r, yn(c);
						}
					}
					no & 3 && rn(), ir(t), c = t.pendingLanes, (a & 261930) !== 0 && (c & 42) !== 0 ? t === nd ? gl++ : (gl = 0, nd = t) : gl = 0, Hn && Ih(), Ea(0, !1);
				}
			}
			function Jp(t, r) {
				(t.pooledCacheLanes &= r) === 0 && (r = t.pooledCache, r != null && (t.pooledCache = null, Ra(r)));
			}
			function rn() {
				return oc(), ac(), ic(), hf();
			}
			function hf() {
				if (Re !== 5) return !1;
				var t = Bo, r = Kc;
				Kc = 0;
				var a = Ze(no), l = 32 > a ? 32 : a;
				a = M.T;
				var c = qr();
				try {
					yn(l), M.T = null, l = ed, ed = null;
					var d = Bo, h = no;
					if (Re = 0, Sa = Bo = null, no = 0, (ce & 6) !== 0) throw Error(F(331));
					var y = ce;
					if (ce |= 4, Ku(d.current), Mp(d, d.current, h, l), ce = y, Ea(0, !1), on && typeof on.onPostCommitFiberRoot == "function") try {
						on.onPostCommitFiberRoot(ei, d);
					} catch {}
					return !0;
				} finally {
					yn(c), M.T = a, Jp(t, r);
				}
			}
			function mf(t, r, a) {
				r = ut(a, r), r = Ui(t.stateNode, r, 2), t = Nr(t, r, 2), t !== null && (xi(t, 2), ir(t));
			}
			function ve(t, r, a) {
				if (t.tag === 3) mf(t, t, a);
				else for (; r !== null;) {
					if (r.tag === 3) {
						mf(r, t, a);
						break;
					} else if (r.tag === 1) {
						var l = r.stateNode;
						if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (va === null || !va.has(l))) {
							t = ut(a, t), a = os(2), l = Nr(r, a, 2), l !== null && (Hu(a, l, r, t), xi(l, 2), ir(l));
							break;
						}
					}
					r = r.return;
				}
			}
			function lc(t, r, a) {
				var l = t.pingCache;
				if (l === null) {
					l = t.pingCache = new Ym();
					var c = /* @__PURE__ */ new Set();
					l.set(r, c);
				} else c = l.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(r, c));
				c.has(a) || (Gf = !0, c.add(a), t = Ss.bind(null, t, r, a), r.then(t, t));
			}
			function Ss(t, r, a) {
				var l = t.pingCache;
				l !== null && l.delete(r), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ne === t && (he & a) === a && (Xe === 4 || Xe === 3 && (he & 62914560) === he && 300 > ze() - Vs ? !(ce & 2) && la(t, 0) : Jf |= a, hl === he && (hl = 0)), ir(t);
			}
			function gf(t, r) {
				r === 0 && (r = Ed()), t = Ko(t, r), t !== null && (xi(t, r), ir(t));
			}
			function sc(t) {
				var r = t.memoizedState, a = 0;
				r !== null && (a = r.retryLane), gf(t, a);
			}
			function Zp(t, r) {
				var a = 0;
				switch (t.tag) {
					case 31:
					case 13:
						var l = t.stateNode, c = t.memoizedState;
						c !== null && (a = c.retryLane);
						break;
					case 19:
						l = t.stateNode;
						break;
					case 22:
						l = t.stateNode._retryCache;
						break;
					default: throw Error(F(314));
				}
				l !== null && l.delete(r), gf(t, a);
			}
			function Nm(t, r) {
				return Ic(t, r);
			}
			function uc(t, r, a, l) {
				this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
			}
			function ks(t) {
				return t = t.prototype, !(!t || !t.isReactComponent);
			}
			function Qr(t, r) {
				var a = t.alternate;
				return a === null ? (a = Yn(t.tag, r, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = r, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, r = t.dependencies, a.dependencies = r === null ? null : {
					lanes: r.lanes,
					firstContext: r.firstContext
				}, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
			}
			function yf(t, r) {
				t.flags &= 65011714;
				var a = t.alternate;
				return a === null ? (t.childLanes = 0, t.lanes = r, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, r = a.dependencies, t.dependencies = r === null ? null : {
					lanes: r.lanes,
					firstContext: r.firstContext
				}), t;
			}
			function ws(t, r, a, l, c, d) {
				var h = 0;
				if (l = t, typeof t == "function") ks(t) && (h = 1);
				else if (typeof t == "string") h = Gt && dn ? Df(t, a, Dn.current) ? 26 : Ec(t) ? 27 : 5 : Gt ? Df(t, a, Dn.current) ? 26 : 5 : dn && Ec(t) ? 27 : 5;
				else e: switch (t) {
					case gc: return t = Yn(31, a, r, c), t.elementType = gc, t.lanes = d, t;
					case $a: return Eo(a.children, c, d, r);
					case kf:
						h = 8, c |= 24;
						break;
					case Cs: return t = Yn(12, a, r, c | 2), t.elementType = Cs, t.lanes = d, t;
					case Va: return t = Yn(13, a, r, c), t.elementType = Va, t.lanes = d, t;
					case Te: return t = Yn(19, a, r, c), t.elementType = Te, t.lanes = d, t;
					default:
						if (typeof t == "object" && t !== null) switch (t.$$typeof) {
							case Io:
								h = 10;
								break e;
							case mc:
								h = 9;
								break e;
							case Zi:
								h = 11;
								break e;
							case wf:
								h = 14;
								break e;
							case ua:
								h = 16, l = null;
								break e;
						}
						h = 29, a = Error(F(130, t === null ? "null" : typeof t, "")), l = null;
				}
				return r = Yn(h, a, r, c), r.elementType = t, r.type = l, r.lanes = d, r;
			}
			function Eo(t, r, a, l) {
				return t = Yn(7, t, l, r), t.lanes = a, t;
			}
			function Ps(t, r, a) {
				return t = Yn(6, t, null, r), t.lanes = a, t;
			}
			function cc(t) {
				var r = Yn(18, null, null, 0);
				return r.stateNode = t, r;
			}
			function dc(t, r, a) {
				return r = Yn(4, t.children !== null ? t.children : [], t.key, r), r.lanes = a, r.stateNode = {
					containerInfo: t.containerInfo,
					pendingChildren: null,
					implementation: t.implementation
				}, r;
			}
			function bf(t, r, a, l, c, d, h, y, R) {
				this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Lo, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mu(0), this.hiddenUpdates = mu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = /* @__PURE__ */ new Map();
			}
			function xs(t, r, a, l, c, d, h, y, R, L, j, A) {
				return t = new bf(t, r, a, h, R, L, j, A, y), r = 1, d === !0 && (r |= 24), d = Yn(3, null, null, r), t.current = d, d.stateNode = t, r = Fd(), r.refCount++, t.pooledCache = r, r.refCount++, d.memoizedState = {
					element: l,
					isDehydrated: a,
					cache: r
				}, Ol(d), t;
			}
			function fc(t) {
				return t ? (t = Ka, t) : Ka;
			}
			function vf(t) {
				var r = t._reactInternals;
				if (r === void 0) throw typeof t.render == "function" ? Error(F(188)) : (t = Object.keys(t).join(","), Error(F(268, t)));
				return t = fu(r), t = t !== null ? pu(t) : null, t === null ? null : Ts(t.stateNode);
			}
			function pc(t, r, a, l, c, d) {
				c = fc(c), l.context === null ? l.context = c : l.pendingContext = c, l = Et(r), l.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (l.callback = d), a = Nr(t, l, r), a !== null && (nt(a, t, r), Ml(a, t, r));
			}
			function Sf(t, r) {
				if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
					var a = t.retryLane;
					t.retryLane = a !== 0 && a < r ? a : r;
				}
			}
			function vr(t, r) {
				Sf(t, r), (t = t.alternate) && Sf(t, r);
			}
			var ie = {}, Fm = import_react.default, tt = import_scheduler.default, Lt = Object.assign, hc = Symbol.for("react.element"), zs = Symbol.for("react.transitional.element"), sa = Symbol.for("react.portal"), $a = Symbol.for("react.fragment"), kf = Symbol.for("react.strict_mode"), Cs = Symbol.for("react.profiler"), mc = Symbol.for("react.consumer"), Io = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Va = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), wf = Symbol.for("react.memo"), ua = Symbol.for("react.lazy");
			var gc = Symbol.for("react.activity");
			var $r = Symbol.for("react.memo_cache_sentinel");
			var Pf = Symbol.iterator, xf = Symbol.for("react.client.reference"), ca = Array.isArray, M = Fm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Yp = m.rendererVersion, zf = m.rendererPackageName, Cf = m.extraDevToolsConfig, Ts = m.getPublicInstance, Hm = m.getRootHostContext, Xp = m.getChildHostContext, Am = m.prepareForCommit, _s = m.resetAfterCommit, Vr = m.createInstance;
			m.cloneMutableInstance;
			var yc = m.appendInitialChild, Kp = m.finalizeInitialChildren, Rs = m.shouldSetTextContent, bc = m.createTextInstance;
			m.cloneMutableTextInstance;
			var eh = m.scheduleTimeout, Tf = m.cancelTimeout, Lo = m.noTimeout, qt = m.isPrimaryRenderer;
			m.warnsIfNotActing;
			var $n = m.supportsMutation, Sr = m.supportsPersistence, Hn = m.supportsHydration, nh = m.getInstanceFromNode;
			m.beforeActiveInstanceBlur;
			var jm = m.preparePortalMount;
			m.prepareScopeUpdate, m.getInstanceFromScope;
			var yn = m.setCurrentUpdatePriority, qr = m.getCurrentUpdatePriority, kr = m.resolveUpdatePriority;
			m.trackSchedulerEvent, m.resolveEventType, m.resolveEventTimeStamp;
			var _f = m.shouldAttemptEagerTransition, th = m.detachDeletedInstance;
			m.requestPostPaintCallback;
			var rh = m.maySuspendCommit, Dm = m.maySuspendCommitOnUpdate, Yi = m.maySuspendCommitInSyncRender, An = m.preloadInstance, oh = m.startSuspendingCommit, Vn = m.suspendInstance;
			m.suspendOnActiveViewTransition;
			var ah = m.waitForCommitToBeReady;
			m.getSuspendedCommitReason;
			var rt = m.NotPendingTransition, da = m.HostTransitionContext, qa = m.resetFormInstance;
			m.bindToConsole;
			var ih = m.supportsMicrotasks, Gr = m.scheduleMicrotask, Ga = m.supportsTestSelectors, Rf = m.findFiberRoot, wr = m.getBoundingRect, lh = m.getTextContent, Jr = m.isHiddenSubtree, sh = m.matchAccessibilityRole, Es = m.setFocusIfFocusable, Ja = m.setupIntersectionObserver, uh = m.appendChild, ch = m.appendChildToContainer, Is = m.commitTextUpdate, dh = m.commitMount, vc = m.commitUpdate, fh = m.insertBefore, ph = m.insertInContainerBefore, Ef = m.removeChild, If = m.removeChildFromContainer, Sc = m.resetTextContent, hh = m.hideInstance, kc = m.hideTextInstance, Wm = m.unhideInstance, mh = m.unhideTextInstance;
			m.cancelViewTransitionName, m.cancelRootViewTransitionName, m.restoreRootViewTransitionName, m.cloneRootViewTransitionContainer, m.removeRootViewTransitionClone, m.measureClonedInstance, m.hasInstanceChanged, m.hasInstanceAffectedParent, m.startViewTransition, m.startGestureTransition, m.stopViewTransition, m.getCurrentGestureOffset, m.createViewTransitionInstance;
			var Nt = m.clearContainer;
			m.createFragmentInstance, m.updateFragmentInstanceFiber, m.commitNewChildToFragmentInstance, m.deleteChildFromFragmentInstance;
			var gh = m.cloneInstance, We = m.createContainerChildSet, Lf = m.appendChildToContainerChildSet, yh = m.finalizeContainerChildren, bh = m.replaceContainerChildren, No = m.cloneHiddenInstance, Ls = m.cloneHiddenTextInstance, Ns = m.isSuspenseInstancePending, Fs = m.isSuspenseInstanceFallback, Za = m.getSuspenseInstanceFallbackErrorDetails, Xi = m.registerSuspenseInstanceRetry, vh = m.canHydrateFormStateMarker, Sh = m.isFormStateMarkerMatching, Nf = m.getNextHydratableSibling, kh = m.getNextHydratableSiblingAfterSingleton, wc = m.getFirstHydratableChild, Pc = m.getFirstHydratableChildWithinContainer, Ff = m.getFirstHydratableChildWithinActivityInstance, wh = m.getFirstHydratableChildWithinSuspenseInstance, Um = m.getFirstHydratableChildWithinSingleton, Bm = m.canHydrateInstance, Ph = m.canHydrateTextInstance, xh = m.canHydrateActivityInstance, Om = m.canHydrateSuspenseInstance, Ki = m.hydrateInstance, xc = m.hydrateTextInstance, zh = m.hydrateActivityInstance, Hf = m.hydrateSuspenseInstance, Ch = m.getNextHydratableInstanceAfterActivityInstance, Th = m.getNextHydratableInstanceAfterSuspenseInstance, _h = m.commitHydratedInstance, Mm = m.commitHydratedContainer, Rh = m.commitHydratedActivityInstance, el = m.commitHydratedSuspenseInstance, Eh = m.finalizeHydratedChildren, Ih = m.flushHydrationEvents;
			m.clearActivityBoundary;
			var Se = m.clearSuspenseBoundary;
			m.clearActivityBoundaryFromContainer;
			var Af = m.clearSuspenseBoundaryFromContainer, Qm = m.hideDehydratedBoundary, Lh = m.unhideDehydratedBoundary, Nh = m.shouldDeleteUnhydratedTailInstances;
			m.diffHydratedPropsForDevWarnings, m.diffHydratedTextForDevWarnings, m.describeHydratableInstanceForDevWarnings;
			var $m = m.validateHydratableInstance, jf = m.validateHydratableTextInstance, Gt = m.supportsResources, Df = m.isHostHoistableType, zc = m.getHoistableRoot, nl = m.getResource, Fh = m.acquireResource, Hh = m.releaseResource, Ya = m.hydrateHoistable, Cc = m.mountHoistable, Wf = m.unmountHoistable, Ah = m.createHoistableInstance, jh = m.prepareToCommitHoistables, Vm = m.mayResourceSuspendCommit, Tc = m.preloadResource, Fo = m.suspendResource, dn = m.supportsSingletons, _c = m.resolveSingletonInstance, Rc = m.acquireSingletonInstance, fa = m.releaseSingletonInstance, Ec = m.isHostSingletonType, Xa = m.isSingletonScope, Hs = [], tl = -1, Ka = {}, vt = Math.clz32 ? Math.clz32 : Em, Dh = Math.log, Wh = Math.LN2, As = 256, js = 262144, rl = 4194304, Ic = tt.unstable_scheduleCallback, le = tt.unstable_cancelCallback, qm = tt.unstable_shouldYield, St = tt.unstable_requestPaint, ze = tt.unstable_now, Uh = tt.unstable_ImmediatePriority, Ho = tt.unstable_UserBlockingPriority, Ao = tt.unstable_NormalPriority, ol = tt.unstable_IdlePriority, Lc = tt.log, Uf = tt.unstable_setDisableYieldValue, ei = null, on = null, jn = typeof Object.is == "function" ? Object.is : Im, Nc = typeof reportError == "function" ? reportError : function(t) {
				if (typeof window == "object" && typeof window.ErrorEvent == "function") {
					var r = new window.ErrorEvent("error", {
						bubbles: !0,
						cancelable: !0,
						message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
						error: t
					});
					if (!window.dispatchEvent(r)) return;
				} else if (typeof process == "object" && typeof process.emit == "function") {
					process.emit("uncaughtException", t);
					return;
				}
				console.error(t);
			}, Bf = Object.prototype.hasOwnProperty, al, kt, Ds = !1, Bh = /* @__PURE__ */ new WeakMap(), ni = [], il = 0, fn = null, x = 0, Jt = [], Zt = 0, jo = null, ot = 1, Zr = "", Dn = Ir(null), Ws = Ir(null), pa = Ir(null), Fc = Ir(null), bn = null, Ue = null, ue = !1, Do = null, Yt = !1, Of = Error(F(519)), Yr = Ir(null), at = null, Be = null, Xr = typeof AbortController < "u" ? AbortController : function() {
				var t = [], r = this.signal = {
					aborted: !1,
					addEventListener: function(a, l) {
						t.push(l);
					}
				};
				this.abort = function() {
					r.aborted = !0, t.forEach(function(a) {
						return a();
					});
				};
			}, qn = tt.unstable_scheduleCallback, Gm = tt.unstable_NormalPriority, qe = {
				$$typeof: Io,
				Consumer: null,
				Provider: null,
				_currentValue: null,
				_currentValue2: null,
				_threadCount: 0
			}, an = null, wt = null, Mf = !1, ll = !1, ti = !1, Pr = 0, Us = null, Qf = 0, sl = 0, ul = null, Hc = M.S;
			M.S = function(t, r) {
				Zf = ze(), typeof r == "object" && r !== null && typeof r.then == "function" && Np(t, r), Hc !== null && Hc(t, r);
			};
			var ha = Ir(null), cl = Error(F(460)), Ac = Error(F(474)), jc = Error(F(542)), Dc = { then: function() {} }, Xt = null, Kt = null, Bs = 0, ri = Ad(!0), Oh = Ad(!1), er = [], xr = 0, $f = 0, ma = !1, Vf = !1, Kr = Ir(null), Wc = Ir(0), Ft = Ir(null), zr = null, ln = Ir(0), Wo = 0, ne = null, Ie = null, pn = null, Uc = !1, dl = !1, oi = !1, Bc = 0, fl = 0, pl = null, Jm = 0, Os = {
				readContext: In,
				use: Ee,
				useCallback: Ve,
				useContext: Ve,
				useEffect: Ve,
				useImperativeHandle: Ve,
				useLayoutEffect: Ve,
				useInsertionEffect: Ve,
				useMemo: Ve,
				useReducer: Ve,
				useRef: Ve,
				useState: Ve,
				useDebugValue: Ve,
				useDeferredValue: Ve,
				useTransition: Ve,
				useSyncExternalStore: Ve,
				useId: Ve,
				useHostTransitionStatus: Ve,
				useFormState: Ve,
				useActionState: Ve,
				useOptimistic: Ve,
				useMemoCache: Ve,
				useCacheRefresh: Ve
			};
			Os.useEffectEvent = Ve;
			var Mh = {
				readContext: In,
				use: Ee,
				useCallback: function(t, r) {
					return Ln().memoizedState = [t, r === void 0 ? null : r], t;
				},
				useContext: In,
				useEffect: Bd,
				useImperativeHandle: function(t, r, a) {
					a = a != null ? a.concat([t]) : null, Xl(4194308, 4, jp.bind(null, r, t), a);
				},
				useLayoutEffect: function(t, r) {
					return Xl(4194308, 4, t, r);
				},
				useInsertionEffect: function(t, r) {
					Xl(4, 2, t, r);
				},
				useMemo: function(t, r) {
					var a = Ln();
					r = r === void 0 ? null : r;
					var l = t();
					if (oi) {
						pe(!0);
						try {
							t();
						} finally {
							pe(!1);
						}
					}
					return a.memoizedState = [l, r], l;
				},
				useReducer: function(t, r, a) {
					var l = Ln();
					if (a !== void 0) {
						var c = a(r);
						if (oi) {
							pe(!0);
							try {
								a(r);
							} finally {
								pe(!1);
							}
						}
					} else c = r;
					return l.memoizedState = l.baseState = c, t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: c
					}, l.queue = t, t = t.dispatch = Nn.bind(null, ne, t), [l.memoizedState, t];
				},
				useRef: function(t) {
					var r = Ln();
					return t = { current: t }, r.memoizedState = t;
				},
				useState: function(t) {
					t = Xn(t);
					var r = t.queue, a = Nu.bind(null, ne, r);
					return r.dispatch = a, [t.memoizedState, a];
				},
				useDebugValue: Qd,
				useDeferredValue: function(t, r) {
					return Iu(Ln(), t, r);
				},
				useTransition: function() {
					var t = Xn(!1);
					return t = $d.bind(null, ne, t.queue, !0, !1), Ln().memoizedState = t, [!1, t];
				},
				useSyncExternalStore: function(t, r, a) {
					var l = ne, c = Ln();
					if (ue) {
						if (a === void 0) throw Error(F(407));
						a = a();
					} else {
						if (a = r(), Ne === null) throw Error(F(349));
						he & 127 || Hp(l, r, a);
					}
					c.memoizedState = a;
					var d = {
						value: a,
						getSnapshot: r
					};
					return c.queue = d, Bd(ql.bind(null, l, d, t), [t]), l.flags |= 2048, Kn(9, { destroy: void 0 }, jr.bind(null, l, d, a, r), null), a;
				},
				useId: function() {
					var t = Ln(), r = Ne.identifierPrefix;
					if (ue) {
						var a = Zr, l = ot;
						a = (l & ~(1 << 32 - vt(l) - 1)).toString(32) + a, r = "_" + r + "R_" + a, a = Bc++, 0 < a && (r += "H" + a.toString(32)), r += "_";
					} else a = Jm++, r = "_" + r + "r_" + a.toString(32) + "_";
					return t.memoizedState = r;
				},
				useHostTransitionStatus: Lu,
				useFormState: pr,
				useActionState: pr,
				useOptimistic: function(t) {
					var r = Ln();
					r.memoizedState = r.baseState = t;
					var a = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: null,
						lastRenderedState: null
					};
					return r.queue = a, r = Wi.bind(null, ne, !0, a), a.dispatch = r, [t, r];
				},
				useMemoCache: Hi,
				useCacheRefresh: function() {
					return Ln().memoizedState = Dp.bind(null, ne);
				},
				useEffectEvent: function(t) {
					var r = Ln(), a = { impl: t };
					return r.memoizedState = a, function() {
						if ((ce & 2) !== 0) throw Error(F(440));
						return a.impl.apply(void 0, arguments);
					};
				}
			}, qf = {
				readContext: In,
				use: Ee,
				useCallback: Eu,
				useContext: In,
				useEffect: Tu,
				useImperativeHandle: Md,
				useInsertionEffect: Od,
				useLayoutEffect: Ru,
				useMemo: Kl,
				useReducer: Ai,
				useRef: Wa,
				useState: function() {
					return Ai(Ar);
				},
				useDebugValue: Qd,
				useDeferredValue: function(t, r) {
					return es(He(), Ie.memoizedState, t, r);
				},
				useTransition: function() {
					var t = Ai(Ar)[0], r = He().memoizedState;
					return [typeof t == "boolean" ? t : sr(t), r];
				},
				useSyncExternalStore: ur,
				useId: xo,
				useHostTransitionStatus: Lu,
				useFormState: Ud,
				useActionState: Ud,
				useOptimistic: function(t, r) {
					return mt(He(), Ie, t, r);
				},
				useMemoCache: Hi,
				useCacheRefresh: qd
			};
			qf.useEffectEvent = _u;
			var Qh = {
				readContext: In,
				use: Ee,
				useCallback: Eu,
				useContext: In,
				useEffect: Tu,
				useImperativeHandle: Md,
				useInsertionEffect: Od,
				useLayoutEffect: Ru,
				useMemo: Kl,
				useReducer: Da,
				useRef: Wa,
				useState: function() {
					return Da(Ar);
				},
				useDebugValue: Qd,
				useDeferredValue: function(t, r) {
					var a = He();
					return Ie === null ? Iu(a, t, r) : es(a, Ie.memoizedState, t, r);
				},
				useTransition: function() {
					var t = Da(Ar)[0], r = He().memoizedState;
					return [typeof t == "boolean" ? t : sr(t), r];
				},
				useSyncExternalStore: ur,
				useId: xo,
				useHostTransitionStatus: Lu,
				useFormState: Yl,
				useActionState: Yl,
				useOptimistic: function(t, r) {
					var a = He();
					return Ie !== null ? mt(a, Ie, t, r) : (a.baseState = t, [t, a.queue.dispatch]);
				},
				useMemoCache: Hi,
				useCacheRefresh: qd
			};
			Qh.useEffectEvent = _u;
			var Oc = {
				enqueueSetState: function(t, r, a) {
					t = t._reactInternals;
					var l = bt(), c = Et(l);
					c.payload = r, a != null && (c.callback = a), r = Nr(t, c, l), r !== null && (nt(r, t, l), Ml(r, t, l));
				},
				enqueueReplaceState: function(t, r, a) {
					t = t._reactInternals;
					var l = bt(), c = Et(l);
					c.tag = 1, c.payload = r, a != null && (c.callback = a), r = Nr(t, c, l), r !== null && (nt(r, t, l), Ml(r, t, l));
				},
				enqueueForceUpdate: function(t, r) {
					t = t._reactInternals;
					var a = bt(), l = Et(a);
					l.tag = 2, r != null && (l.callback = r), r = Nr(t, l, a), r !== null && (nt(r, t, a), Ml(r, t, a));
				}
			}, Mc = Error(F(461)), hn = !1, Qc = {
				dehydrated: null,
				treeContext: null,
				retryLane: 0,
				hydrationErrors: null
			}, eo = !1, sn = !1, Ms = !1, $c = typeof WeakSet == "function" ? WeakSet : Set, Pn = null, mn = null, Pt = !1, Cr = null, ga = 8192, Zm = {
				getCacheForType: function(t) {
					var r = In(qe), a = r.data.get(t);
					return a === void 0 && (a = t(), r.data.set(t, a)), a;
				},
				cacheSignal: function() {
					return In(qe).controller.signal;
				}
			}, Vc = 0, qc = 1, Gc = 2, Jc = 3, Zc = 4;
			if (typeof Symbol == "function" && Symbol.for) {
				var Qs = Symbol.for;
				Vc = Qs("selector.component"), qc = Qs("selector.has_pseudo_class"), Gc = Qs("selector.role"), Jc = Qs("selector.test_id"), Zc = Qs("selector.text");
			}
			var Ym = typeof WeakMap == "function" ? WeakMap : Map, ce = 0, Ne = null, de = null, he = 0, _e = 0, Ht = null, ya = !1, ai = !1, Gf = !1, Uo = 0, Xe = 0, ba = 0, ii = 0, Jf = 0, At = 0, hl = 0, $s = null, xt = null, Yc = !1, Vs = 0, Zf = 0, ml = Infinity, Xc = null, va = null, Re = 0, Bo = null, Sa = null, no = 0, Kc = 0, ed = null, $h = null, gl = 0, nd = null;
			return ie.attemptContinuousHydration = function(t) {
				if (t.tag === 13 || t.tag === 31) {
					var r = Ko(t, 67108864);
					r !== null && nt(r, t, 67108864), vr(t, 67108864);
				}
			}, ie.attemptHydrationAtCurrentPriority = function(t) {
				if (t.tag === 13 || t.tag === 31) {
					var r = bt();
					r = st(r);
					var a = Ko(t, r);
					a !== null && nt(a, t, r), vr(t, r);
				}
			}, ie.attemptSynchronousHydration = function(t) {
				switch (t.tag) {
					case 3:
						if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
							var r = Zo(t.pendingLanes);
							if (r !== 0) {
								for (t.pendingLanes |= 2, t.entangledLanes |= 2; r;) {
									var a = 1 << 31 - vt(r);
									t.entanglements[1] |= a, r &= ~a;
								}
								ir(t), !(ce & 6) && (ml = ze() + 500, Ea(0, !1));
							}
						}
						break;
					case 31:
					case 13: r = Ko(t, 2), r !== null && nt(r, t, 2), ia(), vr(t, 2);
				}
			}, ie.batchedUpdates = function(t, r) {
				return t(r);
			}, ie.createComponentSelector = function(t) {
				return {
					$$typeof: Vc,
					value: t
				};
			}, ie.createContainer = function(t, r, a, l, c, d, h, y, R, L) {
				return xs(t, r, !1, null, a, l, d, null, h, y, R, L);
			}, ie.createHasPseudoClassSelector = function(t) {
				return {
					$$typeof: qc,
					value: t
				};
			}, ie.createHydrationContainer = function(t, r, a, l, c, d, h, y, R, L, j, A, W, V) {
				var _r2;
				return t = xs(a, l, !0, t, c, d, y, V, R, L, j, A), t.context = fc(null), a = t.current, l = bt(), l = st(l), c = Et(l), c.callback = (_r2 = r) != null ? _r2 : null, Nr(a, c, l), r = l, t.current.lanes = r, xi(t, r), ir(t), t;
			}, ie.createPortal = function(t, r, a) {
				var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
				return {
					$$typeof: sa,
					key: l == null ? null : "" + l,
					children: t,
					containerInfo: r,
					implementation: a
				};
			}, ie.createRoleSelector = function(t) {
				return {
					$$typeof: Gc,
					value: t
				};
			}, ie.createTestNameSelector = function(t) {
				return {
					$$typeof: Jc,
					value: t
				};
			}, ie.createTextSelector = function(t) {
				return {
					$$typeof: Zc,
					value: t
				};
			}, ie.defaultOnCaughtError = function(t) {
				console.error(t);
			}, ie.defaultOnRecoverableError = function(t) {
				Nc(t);
			}, ie.defaultOnUncaughtError = function(t) {
				Nc(t);
			}, ie.deferredUpdates = function(t) {
				var r = M.T, a = qr();
				try {
					return yn(32), M.T = null, t();
				} finally {
					yn(a), M.T = r;
				}
			}, ie.discreteUpdates = function(t, r, a, l, c) {
				var d = M.T, h = qr();
				try {
					return yn(2), M.T = null, t(r, a, l, c);
				} finally {
					yn(h), M.T = d, ce === 0 && (ml = ze() + 500);
				}
			}, ie.findAllNodes = gs, ie.findBoundingRects = function(t, r) {
				if (!Ga) throw Error(F(363));
				r = gs(t, r), t = [];
				for (var a = 0; a < r.length; a++) t.push(wr(r[a]));
				for (r = t.length - 1; 0 < r; r--) {
					a = t[r];
					for (var l = a.x, c = l + a.width, d = a.y, h = d + a.height, y = r - 1; 0 <= y; y--) if (r !== y) {
						var R = t[y], L = R.x, j = L + R.width, A = R.y, W = A + R.height;
						if (l >= L && d >= A && c <= j && h <= W) {
							t.splice(r, 1);
							break;
						} else if (l !== L || a.width !== R.width || W < d || A > h) {
							if (!(d !== A || a.height !== R.height || j < l || L > c)) {
								L > l && (R.width += L - l, R.x = l), j < c && (R.width = c - L), t.splice(r, 1);
								break;
							}
						} else {
							A > d && (R.height += A - d, R.y = d), W < h && (R.height = h - A), t.splice(r, 1);
							break;
						}
					}
				}
				return t;
			}, ie.findHostInstance = vf, ie.findHostInstanceWithNoPortals = function(t) {
				return t = fu(t), t = t !== null ? lt(t) : null, t === null ? null : Ts(t.stateNode);
			}, ie.findHostInstanceWithWarning = function(t) {
				return vf(t);
			}, ie.flushPassiveEffects = rn, ie.flushSyncFromReconciler = function(t) {
				var r = ce;
				ce |= 1;
				var a = M.T, l = qr();
				try {
					if (yn(2), M.T = null, t) return t();
				} finally {
					yn(l), M.T = a, ce = r, !(ce & 6) && Ea(0, !1);
				}
			}, ie.flushSyncWork = ia, ie.focusWithin = function(t, r) {
				if (!Ga) throw Error(F(363));
				for (t = Vi(t), r = sf(t, r), r = Array.from(r), t = 0; t < r.length;) {
					var a = r[t++], l = a.tag;
					if (!Jr(a)) {
						if ((l === 5 || l === 26 || l === 27) && Es(a.stateNode)) return !0;
						for (a = a.child; a !== null;) r.push(a), a = a.sibling;
					}
				}
				return !1;
			}, ie.getFindAllNodesFailureDescription = function(t, r) {
				if (!Ga) throw Error(F(363));
				var a = 0, l = [];
				t = [Vi(t), 0];
				for (var c = 0; c < t.length;) {
					var d = t[c++], h = d.tag, y = t[c++], R = r[y];
					if ((h !== 5 && h !== 26 && h !== 27 || !Jr(d)) && (ms(d, R) && (l.push(nc(R)), y++, y > a && (a = y)), y < r.length)) for (d = d.child; d !== null;) t.push(d, y), d = d.sibling;
				}
				if (a < r.length) {
					for (t = []; a < r.length; a++) t.push(nc(r[a]));
					return `findAllNodes was able to match part of the selector:
  ` + (l.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
				}
				return null;
			}, ie.getPublicRootInstance = function(t) {
				if (t = t.current, !t.child) return null;
				switch (t.child.tag) {
					case 27:
					case 5: return Ts(t.child.stateNode);
					default: return t.child.stateNode;
				}
			}, ie.injectIntoDevTools = function() {
				var t = {
					bundleType: 0,
					version: Yp,
					rendererPackageName: zf,
					currentDispatcherRef: M,
					reconcilerVersion: "19.2.0"
				};
				if (Cf !== null && (t.rendererConfig = Cf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
				else {
					var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (r.isDisabled || !r.supportsFiber) t = !0;
					else {
						try {
							ei = r.inject(t), on = r;
						} catch {}
						t = !!r.checkDCE;
					}
				}
				return t;
			}, ie.isAlreadyRendering = function() {
				return (ce & 6) !== 0;
			}, ie.observeVisibleRects = function(t, r, a, l) {
				if (!Ga) throw Error(F(363));
				t = gs(t, r);
				var c = Ja(t, a, l).disconnect;
				return { disconnect: function() {
					c();
				} };
			}, ie.shouldError = function() {
				return null;
			}, ie.shouldSuspend = function() {
				return !1;
			}, ie.startHostTransition = function(t, r, a, l) {
				if (t.tag !== 5) throw Error(F(476));
				var c = Vd(t).queue;
				$d(t, c, r, rt, a === null ? _d : function() {
					var d = Vd(t);
					return d.next === null && (d = t.alternate.memoizedState), ea(t, d.next.queue, {}, bt()), a(l);
				});
			}, ie.updateContainer = function(t, r, a, l) {
				var c = r.current, d = bt();
				return pc(c, d, t, r, a, l), d;
			}, ie.updateContainerSync = function(t, r, a, l) {
				return pc(r.current, 2, t, r, a, l), 2;
			}, ie;
		}, Tt.exports.default = Tt.exports, Object.defineProperty(Tt.exports, "__esModule", { value: !0 });
	}(Og)), Og.exports;
}
/**
* @license React
* react-reconciler.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
({ exports: {} }).exports;
var Eb;
function n0() {
	return Eb || (Eb = 1, Rm.exports = Kb()), Rm.exports;
}
var r0 = Xb(n0());
function createReconciler(config) {
	const reconciler = r0(config);
	reconciler.injectIntoDevTools();
	return reconciler;
}
var NoEventPriority = 0;
var catalogue = {};
var PREFIX_REGEX = /^three(?=[A-Z])/;
var toPascalCase = (type) => `${type[0].toUpperCase()}${type.slice(1)}`;
var i$1 = 0;
var isConstructor = (object) => typeof object === "function";
function extend(objects) {
	if (isConstructor(objects)) {
		const Component = `${i$1++}`;
		catalogue[Component] = objects;
		return Component;
	} else Object.assign(catalogue, objects);
}
function validateInstance(type, props) {
	const name = toPascalCase(type);
	const target = catalogue[name];
	if (type !== "primitive" && !target) throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
	if (type === "primitive" && !props.object) throw new Error(`R3F: Primitives without 'object' are invalid!`);
	if (props.args !== void 0 && !Array.isArray(props.args)) throw new Error("R3F: The args prop must be an array!");
}
function createInstance(type, props, root) {
	var _props$object;
	type = toPascalCase(type) in catalogue ? type : type.replace(PREFIX_REGEX, "");
	validateInstance(type, props);
	if (type === "primitive" && (_props$object = props.object) != null && _props$object.__r3f) delete props.object.__r3f;
	return prepare(props.object, root, type, props);
}
function hideInstance(instance) {
	if (!instance.isHidden) {
		var _instance$parent;
		if (instance.props.attach && (_instance$parent = instance.parent) != null && _instance$parent.object) detach(instance.parent, instance);
		else if (isObject3D(instance.object)) instance.object.visible = false;
		instance.isHidden = true;
		invalidateInstance(instance);
	}
}
function unhideInstance(instance) {
	if (instance.isHidden) {
		var _instance$parent2;
		if (instance.props.attach && (_instance$parent2 = instance.parent) != null && _instance$parent2.object) attach(instance.parent, instance);
		else if (isObject3D(instance.object) && instance.props.visible !== false) instance.object.visible = true;
		instance.isHidden = false;
		invalidateInstance(instance);
	}
}
function handleContainerEffects(parent, child, beforeChild) {
	const state = child.root.getState();
	if (!parent.parent && parent.object !== state.scene) return;
	if (!child.object) {
		var _child$props$object, _child$props$args;
		const target = catalogue[toPascalCase(child.type)];
		child.object = (_child$props$object = child.props.object) != null ? _child$props$object : new target(...(_child$props$args = child.props.args) != null ? _child$props$args : []);
		child.object.__r3f = child;
	}
	applyProps(child.object, child.props);
	if (child.props.attach) attach(parent, child);
	else if (isObject3D(child.object) && isObject3D(parent.object)) {
		const childIndex = parent.object.children.indexOf(beforeChild == null ? void 0 : beforeChild.object);
		if (beforeChild && childIndex !== -1) {
			const existingIndex = parent.object.children.indexOf(child.object);
			if (existingIndex !== -1) {
				parent.object.children.splice(existingIndex, 1);
				const adjustedIndex = existingIndex < childIndex ? childIndex - 1 : childIndex;
				parent.object.children.splice(adjustedIndex, 0, child.object);
			} else {
				child.object.parent = parent.object;
				parent.object.children.splice(childIndex, 0, child.object);
				child.object.dispatchEvent({ type: "added" });
				parent.object.dispatchEvent({
					type: "childadded",
					child: child.object
				});
			}
		} else parent.object.add(child.object);
	}
	for (const childInstance of child.children) handleContainerEffects(child, childInstance);
	invalidateInstance(child);
}
function appendChild(parent, child) {
	if (!child) return;
	child.parent = parent;
	parent.children.push(child);
	handleContainerEffects(parent, child);
}
function insertBefore(parent, child, beforeChild) {
	if (!child || !beforeChild) return;
	child.parent = parent;
	const childIndex = parent.children.indexOf(beforeChild);
	if (childIndex !== -1) parent.children.splice(childIndex, 0, child);
	else parent.children.push(child);
	handleContainerEffects(parent, child, beforeChild);
}
function disposeOnIdle(object) {
	if (typeof object.dispose === "function") {
		const handleDispose = () => {
			try {
				object.dispose();
			} catch {}
		};
		if (typeof IS_REACT_ACT_ENVIRONMENT !== "undefined") handleDispose();
		else (0, import_scheduler.unstable_scheduleCallback)(import_scheduler.unstable_IdlePriority, handleDispose);
	}
}
function removeChild(parent, child, dispose) {
	if (!child) return;
	child.parent = null;
	const childIndex = parent.children.indexOf(child);
	if (childIndex !== -1) parent.children.splice(childIndex, 1);
	if (child.props.attach) detach(parent, child);
	else if (isObject3D(child.object) && isObject3D(parent.object)) {
		parent.object.remove(child.object);
		removeInteractivity(findInitialRoot(child), child.object);
	}
	const shouldDispose = child.props.dispose !== null && dispose !== false;
	for (let i = child.children.length - 1; i >= 0; i--) {
		const node = child.children[i];
		removeChild(child, node, shouldDispose);
	}
	child.children.length = 0;
	delete child.object.__r3f;
	if (shouldDispose && child.type !== "primitive" && child.object.type !== "Scene") disposeOnIdle(child.object);
	if (dispose === void 0) invalidateInstance(child);
}
function setFiberRef(fiber, publicInstance) {
	for (const _fiber of [fiber, fiber.alternate]) if (_fiber !== null) {
		if (typeof _fiber.ref === "function") {
			_fiber.refCleanup == null || _fiber.refCleanup();
			const cleanup = _fiber.ref(publicInstance);
			if (typeof cleanup === "function") _fiber.refCleanup = cleanup;
		} else if (_fiber.ref) _fiber.ref.current = publicInstance;
	}
}
var reconstructed = [];
function swapInstances() {
	for (const [instance] of reconstructed) {
		const parent = instance.parent;
		if (parent) {
			if (instance.props.attach) detach(parent, instance);
			else if (isObject3D(instance.object) && isObject3D(parent.object)) parent.object.remove(instance.object);
			for (const child of instance.children) if (child.props.attach) detach(instance, child);
			else if (isObject3D(child.object) && isObject3D(instance.object)) instance.object.remove(child.object);
		}
		if (instance.isHidden) unhideInstance(instance);
		if (instance.object.__r3f) delete instance.object.__r3f;
		if (instance.type !== "primitive") disposeOnIdle(instance.object);
	}
	for (const [instance, props, fiber] of reconstructed) {
		instance.props = props;
		const parent = instance.parent;
		if (parent) {
			var _instance$props$objec, _instance$props$args;
			const target = catalogue[toPascalCase(instance.type)];
			const prevObject = instance.object;
			instance.object = (_instance$props$objec = instance.props.object) != null ? _instance$props$objec : new target(...(_instance$props$args = instance.props.args) != null ? _instance$props$args : []);
			instance.object.__r3f = instance;
			setFiberRef(fiber, instance.object);
			swapInteractivity(findInitialRoot(instance), prevObject, instance.object);
			applyProps(instance.object, instance.props);
			if (instance.props.attach) attach(parent, instance);
			else if (isObject3D(instance.object) && isObject3D(parent.object)) parent.object.add(instance.object);
			for (const child of instance.children) if (child.props.attach) attach(instance, child);
			else if (isObject3D(child.object) && isObject3D(instance.object)) instance.object.add(child.object);
			invalidateInstance(instance);
		}
	}
	reconstructed.length = 0;
}
var handleTextInstance = () => {};
var NO_CONTEXT = {};
var currentUpdatePriority = NoEventPriority;
var NoFlags = 0;
var Update = 4;
var reconciler = /* @__PURE__ */ createReconciler({
	isPrimaryRenderer: false,
	warnsIfNotActing: false,
	supportsMutation: true,
	supportsPersistence: false,
	supportsHydration: false,
	createInstance,
	removeChild,
	appendChild,
	appendInitialChild: appendChild,
	insertBefore,
	appendChildToContainer(container, child) {
		const scene = container.getState().scene.__r3f;
		if (!child || !scene) return;
		appendChild(scene, child);
	},
	removeChildFromContainer(container, child) {
		const scene = container.getState().scene.__r3f;
		if (!child || !scene) return;
		removeChild(scene, child);
	},
	insertInContainerBefore(container, child, beforeChild) {
		const scene = container.getState().scene.__r3f;
		if (!child || !beforeChild || !scene) return;
		insertBefore(scene, child, beforeChild);
	},
	getRootHostContext: () => NO_CONTEXT,
	getChildHostContext: () => NO_CONTEXT,
	commitUpdate(instance, type, oldProps, newProps, fiber) {
		var _newProps$args, _oldProps$args, _newProps$args2;
		validateInstance(type, newProps);
		let reconstruct = false;
		if (instance.type === "primitive" && oldProps.object !== newProps.object) reconstruct = true;
		else if (((_newProps$args = newProps.args) == null ? void 0 : _newProps$args.length) !== ((_oldProps$args = oldProps.args) == null ? void 0 : _oldProps$args.length)) reconstruct = true;
		else if ((_newProps$args2 = newProps.args) != null && _newProps$args2.some((value, index) => {
			var _oldProps$args2;
			return value !== ((_oldProps$args2 = oldProps.args) == null ? void 0 : _oldProps$args2[index]);
		})) reconstruct = true;
		if (reconstruct) reconstructed.push([
			instance,
			{ ...newProps },
			fiber
		]);
		else {
			const changedProps = diffProps(instance, newProps);
			if (Object.keys(changedProps).length) {
				Object.assign(instance.props, changedProps);
				applyProps(instance.object, changedProps);
			}
		}
		if (fiber.sibling === null || (fiber.flags & Update) === NoFlags) swapInstances();
	},
	finalizeInitialChildren: () => false,
	commitMount() {},
	getPublicInstance: (instance) => instance == null ? void 0 : instance.object,
	prepareForCommit: () => null,
	preparePortalMount: (container) => prepare(container.getState().scene, container, "", {}),
	resetAfterCommit: () => {},
	shouldSetTextContent: () => false,
	clearContainer: () => false,
	hideInstance,
	unhideInstance,
	createTextInstance: handleTextInstance,
	hideTextInstance: handleTextInstance,
	unhideTextInstance: handleTextInstance,
	scheduleTimeout: typeof setTimeout === "function" ? setTimeout : void 0,
	cancelTimeout: typeof clearTimeout === "function" ? clearTimeout : void 0,
	noTimeout: -1,
	getInstanceFromNode: () => null,
	beforeActiveInstanceBlur() {},
	afterActiveInstanceBlur() {},
	detachDeletedInstance() {},
	prepareScopeUpdate() {},
	getInstanceFromScope: () => null,
	shouldAttemptEagerTransition: () => false,
	trackSchedulerEvent: () => {},
	resolveEventType: () => null,
	resolveEventTimeStamp: () => -1.1,
	requestPostPaintCallback() {},
	maySuspendCommit: () => false,
	preloadInstance: () => true,
	suspendInstance() {},
	waitForCommitToBeReady: () => null,
	NotPendingTransition: null,
	HostTransitionContext: /* @__PURE__ */ import_react.createContext(null),
	setCurrentUpdatePriority(newPriority) {
		currentUpdatePriority = newPriority;
	},
	getCurrentUpdatePriority() {
		return currentUpdatePriority;
	},
	resolveUpdatePriority() {
		var _window$event;
		if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
		switch (typeof window !== "undefined" && ((_window$event = window.event) == null ? void 0 : _window$event.type)) {
			case "click":
			case "contextmenu":
			case "dblclick":
			case "pointercancel":
			case "pointerdown":
			case "pointerup": return e;
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "pointerenter":
			case "pointerleave":
			case "wheel": return o;
			default: return r;
		}
	},
	resetFormInstance() {},
	rendererPackageName: "@react-three/fiber",
	rendererVersion: packageData.version,
	applyViewTransitionName(_instance, _name, _className) {},
	restoreViewTransitionName(_instance, _props) {},
	cancelViewTransitionName(_instance, _name, _props) {},
	cancelRootViewTransitionName(_rootContainer) {},
	restoreRootViewTransitionName(_rootContainer) {},
	InstanceMeasurement: null,
	measureInstance: (_instance) => null,
	wasInstanceInViewport: (_measurement) => true,
	hasInstanceChanged: (_oldMeasurement, _newMeasurement) => false,
	hasInstanceAffectedParent: (_oldMeasurement, _newMeasurement) => false,
	suspendOnActiveViewTransition(_state, _container) {},
	startGestureTransition: () => null,
	startViewTransition: () => null,
	stopViewTransition(_transition) {},
	createViewTransitionInstance: (_name) => null,
	getCurrentGestureOffset(_provider) {
		throw new Error("startGestureTransition is not yet supported in react-three-fiber.");
	},
	cloneMutableInstance(instance, _keepChildren) {
		return instance;
	},
	cloneMutableTextInstance(textInstance) {
		return textInstance;
	},
	cloneRootViewTransitionContainer(_rootContainer) {
		throw new Error("Not implemented.");
	},
	removeRootViewTransitionClone(_rootContainer, _clone) {
		throw new Error("Not implemented.");
	},
	createFragmentInstance: (_fiber) => null,
	updateFragmentInstanceFiber(_fiber, _instance) {},
	commitNewChildToFragmentInstance(_child, _fragmentInstance) {},
	deleteChildFromFragmentInstance(_child, _fragmentInstance) {},
	measureClonedInstance: (_instance) => null,
	maySuspendCommitOnUpdate: (_type, _oldProps, _newProps) => false,
	maySuspendCommitInSyncRender: (_type, _props) => false,
	startSuspendingCommit: () => null,
	getSuspendedCommitReason: (_state, _rootContainer) => null
});
var _roots = /* @__PURE__ */ new Map();
var shallowLoose = {
	objects: "shallow",
	strict: false
};
function computeInitialSize(canvas, size) {
	if (!size && typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
		const { width, height, top, left } = canvas.parentElement.getBoundingClientRect();
		return {
			width,
			height,
			top,
			left
		};
	} else if (!size && typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return {
		width: canvas.width,
		height: canvas.height,
		top: 0,
		left: 0
	};
	return {
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		...size
	};
}
function createRoot(canvas) {
	const prevRoot = _roots.get(canvas);
	const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
	const prevStore = prevRoot == null ? void 0 : prevRoot.store;
	if (prevRoot) console.warn("R3F.createRoot should only be called once!");
	const logRecoverableError = typeof reportError === "function" ? reportError : console.error;
	const store = prevStore || createStore(invalidate, advance);
	const fiber = prevFiber || reconciler.createContainer(store, t, null, false, null, "", logRecoverableError, logRecoverableError, logRecoverableError, null);
	if (!prevRoot) _roots.set(canvas, {
		fiber,
		store
	});
	let onCreated;
	let lastCamera;
	let configured = false;
	let pending = null;
	return {
		async configure(props = {}) {
			let resolve;
			pending = new Promise((_resolve) => resolve = _resolve);
			let { gl: glConfig, size: propsSize, scene: sceneOptions, events, onCreated: onCreatedCallback, shadows = false, linear = false, flat = false, legacy = false, orthographic = false, frameloop = "always", dpr = [1, 2], performance, raycaster: raycastOptions, camera: cameraOptions, onPointerMissed } = props;
			let state = store.getState();
			let gl = state.gl;
			if (!state.gl) {
				const defaultProps = {
					canvas,
					powerPreference: "high-performance",
					antialias: true,
					alpha: true
				};
				const customRenderer = typeof glConfig === "function" ? await glConfig(defaultProps) : glConfig;
				if (isRenderer(customRenderer)) gl = customRenderer;
				else gl = new WebGLRenderer({
					...defaultProps,
					...glConfig
				});
				state.set({ gl });
			}
			let raycaster = state.raycaster;
			if (!raycaster) state.set({ raycaster: raycaster = new Raycaster() });
			const { params, ...options } = raycastOptions || {};
			if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, { ...options });
			if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, { params: {
				...raycaster.params,
				...params
			} });
			if (!state.camera || state.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
				lastCamera = cameraOptions;
				const isCamera = cameraOptions == null ? void 0 : cameraOptions.isCamera;
				const camera = isCamera ? cameraOptions : orthographic ? new OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new PerspectiveCamera(75, 0, .1, 1e3);
				if (!isCamera) {
					camera.position.z = 5;
					if (cameraOptions) {
						applyProps(camera, cameraOptions);
						if (!camera.manual) {
							if ("aspect" in cameraOptions || "left" in cameraOptions || "right" in cameraOptions || "bottom" in cameraOptions || "top" in cameraOptions) {
								camera.manual = true;
								camera.updateProjectionMatrix();
							}
						}
					}
					if (!state.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
				}
				state.set({ camera });
				raycaster.camera = camera;
			}
			if (!state.scene) {
				let scene;
				if (sceneOptions != null && sceneOptions.isScene) {
					scene = sceneOptions;
					prepare(scene, store, "", {});
				} else {
					scene = new Scene();
					prepare(scene, store, "", {});
					if (sceneOptions) applyProps(scene, sceneOptions);
				}
				state.set({ scene });
			}
			if (events && !state.events.handlers) state.set({ events: events(store) });
			const size = computeInitialSize(canvas, propsSize);
			if (!is.equ(size, state.size, shallowLoose)) state.setSize(size.width, size.height, size.top, size.left);
			if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr);
			if (state.frameloop !== frameloop) state.setFrameloop(frameloop);
			if (!state.onPointerMissed) state.set({ onPointerMissed });
			if (performance && !is.equ(performance, state.performance, shallowLoose)) state.set((state) => ({ performance: {
				...state.performance,
				...performance
			} }));
			if (!state.xr) {
				var _gl$xr;
				const handleXRFrame = (timestamp, frame) => {
					const state = store.getState();
					if (state.frameloop === "never") return;
					advance(timestamp, true, state, frame);
				};
				const handleSessionChange = () => {
					const state = store.getState();
					state.gl.xr.enabled = state.gl.xr.isPresenting;
					state.gl.xr.setAnimationLoop(state.gl.xr.isPresenting ? handleXRFrame : null);
					if (!state.gl.xr.isPresenting) invalidate(state);
				};
				const xr = {
					connect() {
						const gl = store.getState().gl;
						gl.xr.addEventListener("sessionstart", handleSessionChange);
						gl.xr.addEventListener("sessionend", handleSessionChange);
					},
					disconnect() {
						const gl = store.getState().gl;
						gl.xr.removeEventListener("sessionstart", handleSessionChange);
						gl.xr.removeEventListener("sessionend", handleSessionChange);
					}
				};
				if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === "function") xr.connect();
				state.set({ xr });
			}
			if (gl.shadowMap) {
				const oldEnabled = gl.shadowMap.enabled;
				const oldType = gl.shadowMap.type;
				gl.shadowMap.enabled = !!shadows;
				if (is.boo(shadows)) gl.shadowMap.type = 2;
				else if (is.str(shadows)) {
					var _types$shadows;
					const types = {
						basic: 0,
						percentage: 1,
						soft: 2,
						variance: 3
					};
					gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : 2;
				} else if (is.obj(shadows)) Object.assign(gl.shadowMap, shadows);
				if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
			}
			ColorManagement.enabled = !legacy;
			if (!configured) {
				gl.outputColorSpace = linear ? LinearSRGBColorSpace : SRGBColorSpace;
				gl.toneMapping = flat ? 0 : 4;
			}
			if (state.legacy !== legacy) state.set(() => ({ legacy }));
			if (state.linear !== linear) state.set(() => ({ linear }));
			if (state.flat !== flat) state.set(() => ({ flat }));
			if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
			onCreated = onCreatedCallback;
			configured = true;
			resolve();
			return this;
		},
		render(children) {
			if (!configured && !pending) this.configure();
			pending.then(() => {
				reconciler.updateContainer(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(Provider, {
					store,
					children,
					onCreated,
					rootElement: canvas
				}), fiber, null, () => void 0);
			});
			return store;
		},
		unmount() {
			unmountComponentAtNode(canvas);
		}
	};
}
function Provider({ store, children, onCreated, rootElement }) {
	useIsomorphicLayoutEffect(() => {
		const state = store.getState();
		state.set((state) => ({ internal: {
			...state.internal,
			active: true
		} }));
		if (onCreated) onCreated(state);
		if (!store.getState().events.connected) state.events.connect == null || state.events.connect(rootElement);
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: store,
		children
	});
}
function unmountComponentAtNode(canvas, callback) {
	const root = _roots.get(canvas);
	const fiber = root == null ? void 0 : root.fiber;
	if (fiber) {
		const state = root == null ? void 0 : root.store.getState();
		if (state) state.internal.active = false;
		reconciler.updateContainer(null, fiber, null, () => {
			if (state) setTimeout(() => {
				try {
					var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
					state.events.disconnect == null || state.events.disconnect();
					(_state$gl = state.gl) == null || (_state$gl$renderLists = _state$gl.renderLists) == null || _state$gl$renderLists.dispose == null || _state$gl$renderLists.dispose();
					(_state$gl2 = state.gl) == null || _state$gl2.forceContextLoss == null || _state$gl2.forceContextLoss();
					if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
					dispose(state.scene);
					_roots.delete(canvas);
					if (callback) callback(canvas);
				} catch (e) {}
			}, 500);
		});
	}
}
function createPortal(children, container, state) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Portal, {
		children,
		container,
		state
	});
}
function Portal({ state = {}, children, container }) {
	/** This has to be a component because it would not be able to call useThree/useStore otherwise since
	*  if this is our environment, then we are not in r3f's renderer but in react-dom, it would trigger
	*  the "R3F hooks can only be used within the Canvas component!" warning:
	*  <Canvas>
	*    {createPortal(...)} */
	const { events, size, ...rest } = state;
	const previousRoot = useStore();
	const [raycaster] = import_react.useState(() => new Raycaster());
	const [pointer] = import_react.useState(() => new Vector2());
	const inject = useMutableCallback((rootState, injectState) => {
		let viewport = void 0;
		if (injectState.camera && size) {
			const camera = injectState.camera;
			viewport = rootState.viewport.getCurrentViewport(camera, new Vector3(), size);
			if (camera !== rootState.camera) updateCamera(camera, size);
		}
		return {
			...rootState,
			...injectState,
			scene: container,
			raycaster,
			pointer,
			mouse: pointer,
			previousRoot,
			events: {
				...rootState.events,
				...injectState.events,
				...events
			},
			size: {
				...rootState.size,
				...size
			},
			viewport: {
				...rootState.viewport,
				...viewport
			},
			setEvents: (events) => injectState.set((state) => ({
				...state,
				events: {
					...state.events,
					...events
				}
			}))
		};
	});
	const usePortalStore = import_react.useMemo(() => {
		const store = createWithEqualityFn((set, get) => ({
			...rest,
			set,
			get
		}));
		const onMutate = (prev) => store.setState((state) => inject.current(prev, state));
		onMutate(previousRoot.getState());
		previousRoot.subscribe(onMutate);
		return store;
	}, [previousRoot, container]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: reconciler.createPortal(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: usePortalStore,
		children
	}), usePortalStore, null) });
}
var globalEffects = /* @__PURE__ */ new Set();
var globalAfterEffects = /* @__PURE__ */ new Set();
var globalTailEffects = /* @__PURE__ */ new Set();
function run(effects, timestamp) {
	if (!effects.size) return;
	for (const { callback } of effects.values()) callback(timestamp);
}
function flushGlobalEffects(type, timestamp) {
	switch (type) {
		case "before": return run(globalEffects, timestamp);
		case "after": return run(globalAfterEffects, timestamp);
		case "tail": return run(globalTailEffects, timestamp);
	}
}
var subscribers;
var subscription;
function update(timestamp, state, frame) {
	let delta = state.clock.getDelta();
	if (state.frameloop === "never" && typeof timestamp === "number") {
		delta = timestamp - state.clock.elapsedTime;
		state.clock.oldTime = state.clock.elapsedTime;
		state.clock.elapsedTime = timestamp;
	}
	subscribers = state.internal.subscribers;
	for (let i = 0; i < subscribers.length; i++) {
		subscription = subscribers[i];
		subscription.ref.current(subscription.store.getState(), delta, frame);
	}
	if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera);
	state.internal.frames = Math.max(0, state.internal.frames - 1);
	return state.frameloop === "always" ? 1 : state.internal.frames;
}
var running = false;
var useFrameInProgress = false;
var repeat;
var frame;
var state;
function loop(timestamp) {
	frame = requestAnimationFrame(loop);
	running = true;
	repeat = 0;
	flushGlobalEffects("before", timestamp);
	useFrameInProgress = true;
	for (const root of _roots.values()) {
		var _state$gl$xr;
		state = root.store.getState();
		if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) repeat += update(timestamp, state);
	}
	useFrameInProgress = false;
	flushGlobalEffects("after", timestamp);
	if (repeat === 0) {
		flushGlobalEffects("tail", timestamp);
		running = false;
		return cancelAnimationFrame(frame);
	}
}
/**
* Invalidates the view, requesting a frame to be rendered. Will globally invalidate unless passed a root's state.
* @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#invalidate
*/
function invalidate(state, frames = 1) {
	var _state$gl$xr2;
	if (!state) return _roots.forEach((root) => invalidate(root.store.getState(), frames));
	if ((_state$gl$xr2 = state.gl.xr) != null && _state$gl$xr2.isPresenting || !state.internal.active || state.frameloop === "never") return;
	if (frames > 1) state.internal.frames = Math.min(60, state.internal.frames + frames);
	else if (useFrameInProgress) state.internal.frames = 2;
	else state.internal.frames = 1;
	if (!running) {
		running = true;
		requestAnimationFrame(loop);
	}
}
/**
* Advances the frameloop and runs render effects, useful for when manually rendering via `frameloop="never"`.
* @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#advance
*/
function advance(timestamp, runGlobalEffects = true, state, frame) {
	if (runGlobalEffects) flushGlobalEffects("before", timestamp);
	if (!state) for (const root of _roots.values()) update(timestamp, root.store.getState());
	else update(timestamp, state, frame);
	if (runGlobalEffects) flushGlobalEffects("after", timestamp);
}
var DOM_EVENTS = {
	onClick: ["click", false],
	onContextMenu: ["contextmenu", false],
	onDoubleClick: ["dblclick", false],
	onWheel: ["wheel", true],
	onPointerDown: ["pointerdown", true],
	onPointerUp: ["pointerup", true],
	onPointerLeave: ["pointerleave", true],
	onPointerMove: ["pointermove", true],
	onPointerCancel: ["pointercancel", true],
	onLostPointerCapture: ["lostpointercapture", true]
};
/** Default R3F event manager for web */
function createPointerEvents(store) {
	const { handlePointer } = createEvents(store);
	return {
		priority: 1,
		enabled: true,
		compute(event, state, previous) {
			state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
			state.raycaster.setFromCamera(state.pointer, state.camera);
		},
		connected: void 0,
		handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({
			...acc,
			[key]: handlePointer(key)
		}), {}),
		update: () => {
			var _internal$lastEvent;
			const { events, internal } = store.getState();
			if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
		},
		connect: (target) => {
			const { set, events } = store.getState();
			events.disconnect == null || events.disconnect();
			set((state) => ({ events: {
				...state.events,
				connected: target
			} }));
			if (events.handlers) for (const name in events.handlers) {
				const event = events.handlers[name];
				const [eventName, passive] = DOM_EVENTS[name];
				target.addEventListener(eventName, event, { passive });
			}
		},
		disconnect: () => {
			const { set, events } = store.getState();
			if (events.connected) {
				if (events.handlers) for (const name in events.handlers) {
					const event = events.handlers[name];
					const [eventName] = DOM_EVENTS[name];
					events.connected.removeEventListener(eventName, event);
				}
				set((state) => ({ events: {
					...state.events,
					connected: void 0
				} }));
			}
		}
	};
}
//#endregion
//#region node_modules/react-use-measure/dist/index.js
function g(n, t) {
	let o;
	return (...i) => {
		window.clearTimeout(o), o = window.setTimeout(() => n(...i), t);
	};
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
	debounce: 0,
	scroll: !1,
	offsetSize: !1
}) {
	const a = o || (typeof window == "undefined" ? class {} : window.ResizeObserver);
	if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
	const [c, h] = (0, import_react.useState)({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		bottom: 0,
		right: 0,
		x: 0,
		y: 0
	}), e = (0, import_react.useRef)({
		element: null,
		scrollContainers: null,
		resizeObserver: null,
		lastBounds: c,
		orientationHandler: null
	}), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(() => (w.current = !0, () => void (w.current = !1)));
	const [z, m, s] = (0, import_react.useMemo)(() => {
		const r = () => {
			if (!e.current.element) return;
			const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
				left: y,
				top: C,
				width: H,
				height: O,
				bottom: S,
				right: x,
				x: B,
				y: R
			};
			e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
		};
		return [
			r,
			f ? g(r, f) : r,
			d ? g(r, d) : r
		];
	}, [
		h,
		i,
		d,
		f
	]);
	function v() {
		e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
	}
	function b() {
		e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, {
			capture: !0,
			passive: !0
		})), e.current.orientationHandler = () => {
			s();
		}, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
	}
	const L = (r) => {
		!r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
	};
	return X(s, !!t), W(m), (0, import_react.useEffect)(() => {
		v(), b();
	}, [
		t,
		s,
		m
	]), (0, import_react.useEffect)(() => v, []), [
		L,
		c,
		z
	];
}
function W(n) {
	(0, import_react.useEffect)(() => {
		const t = n;
		return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
	}, [n]);
}
function X(n, t) {
	(0, import_react.useEffect)(() => {
		if (t) {
			const o = n;
			return window.addEventListener("scroll", o, {
				capture: !0,
				passive: !0
			}), () => void window.removeEventListener("scroll", o, !0);
		}
	}, [n, t]);
}
function E(n) {
	const t = [];
	if (!n || n === document.body) return t;
	const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
	return [
		o,
		i,
		a
	].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
var k = [
	"x",
	"y",
	"top",
	"bottom",
	"left",
	"right",
	"width",
	"height"
];
var D = (n, t) => k.every((o) => n[o] === t[o]);
//#endregion
//#region node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
function CanvasImpl({ ref, children, fallback, resize, style, gl, events = createPointerEvents, eventSource, eventPrefix, shadows, linear, flat, legacy, orthographic, frameloop, dpr, performance, raycaster, camera, scene, onPointerMissed, onCreated, ...props }) {
	import_react.useMemo(() => extend(three_module_exports), []);
	const Bridge = useBridge();
	const [containerRef, containerRect] = j({
		scroll: true,
		debounce: {
			scroll: 50,
			resize: 0
		},
		...resize
	});
	const canvasRef = import_react.useRef(null);
	const divRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => canvasRef.current);
	const handlePointerMissed = useMutableCallback(onPointerMissed);
	const [block, setBlock] = import_react.useState(false);
	const [error, setError] = import_react.useState(false);
	if (block) throw block;
	if (error) throw error;
	const root = import_react.useRef(null);
	useIsomorphicLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
			if (!root.current) root.current = createRoot(canvas);
			async function run() {
				await root.current.configure({
					gl,
					scene,
					events,
					shadows,
					linear,
					flat,
					legacy,
					orthographic,
					frameloop,
					dpr,
					performance,
					raycaster,
					camera,
					size: containerRect,
					onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
					onCreated: (state) => {
						state.events.connect == null || state.events.connect(eventSource ? isRef$1(eventSource) ? eventSource.current : eventSource : divRef.current);
						if (eventPrefix) state.setEvents({ compute: (event, state) => {
							const x = event[eventPrefix + "X"];
							const y = event[eventPrefix + "Y"];
							state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
							state.raycaster.setFromCamera(state.pointer, state.camera);
						} });
						onCreated?.(state);
					}
				});
				root.current.render(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(Bridge, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ErrorBoundary, {
					set: setError,
					children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Block, { set: setBlock }),
						children: children != null ? children : null
					})
				}) }));
			}
			run();
		}
	});
	import_react.useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) return () => unmountComponentAtNode(canvas);
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
		ref: divRef,
		style: {
			position: "relative",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			pointerEvents: eventSource ? "none" : "auto",
			...style
		},
		...props,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
			ref: containerRef,
			style: {
				width: "100%",
				height: "100%"
			},
			children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				style: { display: "block" },
				children: fallback
			})
		})
	});
}
/**
* A DOM canvas which accepts threejs elements as children.
* @see https://docs.pmnd.rs/react-three-fiber/api/canvas
*/
function Canvas(props) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(m, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CanvasImpl, { ...props }) });
}
//#endregion
//#region node_modules/react-dom/cjs/react-dom-client.production.js
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_client_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scheduler = require_scheduler();
	var React = require_react();
	var ReactDOM = require_react_dom();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function isValidContainer(node) {
		return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
	}
	function getNearestMountedFiber(fiber) {
		var node = fiber, nearestMounted = fiber;
		if (fiber.alternate) for (; node.return;) node = node.return;
		else {
			fiber = node;
			do
				node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
			while (fiber);
		}
		return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
		if (13 === fiber.tag) {
			var suspenseState = fiber.memoizedState;
			null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
			if (null !== suspenseState) return suspenseState.dehydrated;
		}
		return null;
	}
	function getActivityInstanceFromFiber(fiber) {
		if (31 === fiber.tag) {
			var activityState = fiber.memoizedState;
			null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
			if (null !== activityState) return activityState.dehydrated;
		}
		return null;
	}
	function assertIsMounted(fiber) {
		if (getNearestMountedFiber(fiber) !== fiber) throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
		var alternate = fiber.alternate;
		if (!alternate) {
			alternate = getNearestMountedFiber(fiber);
			if (null === alternate) throw Error(formatProdErrorMessage(188));
			return alternate !== fiber ? null : fiber;
		}
		for (var a = fiber, b = alternate;;) {
			var parentA = a.return;
			if (null === parentA) break;
			var parentB = parentA.alternate;
			if (null === parentB) {
				b = parentA.return;
				if (null !== b) {
					a = b;
					continue;
				}
				break;
			}
			if (parentA.child === parentB.child) {
				for (parentB = parentA.child; parentB;) {
					if (parentB === a) return assertIsMounted(parentA), fiber;
					if (parentB === b) return assertIsMounted(parentA), alternate;
					parentB = parentB.sibling;
				}
				throw Error(formatProdErrorMessage(188));
			}
			if (a.return !== b.return) a = parentA, b = parentB;
			else {
				for (var didFindChild = !1, child$0 = parentA.child; child$0;) {
					if (child$0 === a) {
						didFindChild = !0;
						a = parentA;
						b = parentB;
						break;
					}
					if (child$0 === b) {
						didFindChild = !0;
						b = parentA;
						a = parentB;
						break;
					}
					child$0 = child$0.sibling;
				}
				if (!didFindChild) {
					for (child$0 = parentB.child; child$0;) {
						if (child$0 === a) {
							didFindChild = !0;
							a = parentB;
							b = parentA;
							break;
						}
						if (child$0 === b) {
							didFindChild = !0;
							b = parentB;
							a = parentA;
							break;
						}
						child$0 = child$0.sibling;
					}
					if (!didFindChild) throw Error(formatProdErrorMessage(189));
				}
			}
			if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
		}
		if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
		return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
		var tag = node.tag;
		if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
		for (node = node.child; null !== node;) {
			tag = findCurrentHostFiberImpl(node);
			if (null !== tag) return tag;
			node = node.sibling;
		}
		return null;
	}
	var assign = Object.assign;
	var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
		if (null == type) return null;
		if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_FRAGMENT_TYPE: return "Fragment";
			case REACT_PROFILER_TYPE: return "Profiler";
			case REACT_STRICT_MODE_TYPE: return "StrictMode";
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			case REACT_ACTIVITY_TYPE: return "Activity";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_PORTAL_TYPE: return "Portal";
			case REACT_CONTEXT_TYPE: return type.displayName || "Context";
			case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
			case REACT_FORWARD_REF_TYPE:
				var innerType = type.render;
				type = type.displayName;
				type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
				return type;
			case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
			case REACT_LAZY_TYPE:
				innerType = type._payload;
				type = type._init;
				try {
					return getComponentNameFromType(type(innerType));
				} catch (x) {}
		}
		return null;
	}
	var isArrayImpl = Array.isArray;
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var sharedNotPendingObject = {
		pending: !1,
		data: null,
		method: null,
		action: null
	};
	var valueStack = [];
	var index = -1;
	function createCursor(defaultValue) {
		return { current: defaultValue };
	}
	function pop(cursor) {
		0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
	}
	function push(cursor, value) {
		index++;
		valueStack[index] = cursor.current;
		cursor.current = value;
	}
	var contextStackCursor = createCursor(null);
	var contextFiberStackCursor = createCursor(null);
	var rootInstanceStackCursor = createCursor(null);
	var hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
		push(rootInstanceStackCursor, nextRootInstance);
		push(contextFiberStackCursor, fiber);
		push(contextStackCursor, null);
		switch (nextRootInstance.nodeType) {
			case 9:
			case 11:
				fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
				break;
			default: if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI) nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
			else switch (fiber) {
				case "svg":
					fiber = 1;
					break;
				case "math":
					fiber = 2;
					break;
				default: fiber = 0;
			}
		}
		pop(contextStackCursor);
		push(contextStackCursor, fiber);
	}
	function popHostContainer() {
		pop(contextStackCursor);
		pop(contextFiberStackCursor);
		pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
		null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
		var context = contextStackCursor.current;
		var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
		context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
		contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
		hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
	}
	var prefix;
	var suffix;
	function describeBuiltInComponentFrame(name) {
		if (void 0 === prefix) try {
			throw Error();
		} catch (x) {
			var match = x.stack.trim().match(/\n( *(at )?)/);
			prefix = match && match[1] || "";
			suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + prefix + name + suffix;
	}
	var reentry = !1;
	function describeNativeComponentFrame(fn, construct) {
		if (!fn || reentry) return "";
		reentry = !0;
		var previousPrepareStackTrace = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var RunInRootFrame = { DetermineComponentFrameRoot: function() {
				try {
					if (construct) {
						var Fake = function() {
							throw Error();
						};
						Object.defineProperty(Fake.prototype, "props", { set: function() {
							throw Error();
						} });
						if ("object" === typeof Reflect && Reflect.construct) {
							try {
								Reflect.construct(Fake, []);
							} catch (x) {
								var control = x;
							}
							Reflect.construct(fn, [], Fake);
						} else {
							try {
								Fake.call();
							} catch (x$1) {
								control = x$1;
							}
							fn.call(Fake.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (x$2) {
							control = x$2;
						}
						(Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
					}
				} catch (sample) {
					if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
				}
				return [null, null];
			} };
			RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
			namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
			if (sampleStack && controlStack) {
				var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
				for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");) RunInRootFrame++;
				for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
				if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length) for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];) namePropDescriptor--;
				for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--) if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
					if (1 !== RunInRootFrame || 1 !== namePropDescriptor) do
						if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
							var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
							fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
							return frame;
						}
					while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
					break;
				}
			}
		} finally {
			reentry = !1, Error.prepareStackTrace = previousPrepareStackTrace;
		}
		return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
	}
	function describeFiber(fiber, childFiber) {
		switch (fiber.tag) {
			case 26:
			case 27:
			case 5: return describeBuiltInComponentFrame(fiber.type);
			case 16: return describeBuiltInComponentFrame("Lazy");
			case 13: return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
			case 19: return describeBuiltInComponentFrame("SuspenseList");
			case 0:
			case 15: return describeNativeComponentFrame(fiber.type, !1);
			case 11: return describeNativeComponentFrame(fiber.type.render, !1);
			case 1: return describeNativeComponentFrame(fiber.type, !0);
			case 31: return describeBuiltInComponentFrame("Activity");
			default: return "";
		}
	}
	function getStackByFiberInDevAndProd(workInProgress) {
		try {
			var info = "", previous = null;
			do
				info += describeFiber(workInProgress, previous), previous = workInProgress, workInProgress = workInProgress.return;
			while (workInProgress);
			return info;
		} catch (x) {
			return "\nError generating stack: " + x.message + "\n" + x.stack;
		}
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var scheduleCallback$3 = Scheduler.unstable_scheduleCallback;
	var cancelCallback$1 = Scheduler.unstable_cancelCallback;
	var shouldYield = Scheduler.unstable_shouldYield;
	var requestPaint = Scheduler.unstable_requestPaint;
	var now = Scheduler.unstable_now;
	var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
	var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
	var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
	var NormalPriority$1 = Scheduler.unstable_NormalPriority;
	var LowPriority = Scheduler.unstable_LowPriority;
	var IdlePriority = Scheduler.unstable_IdlePriority;
	var log$1 = Scheduler.log;
	var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
	var rendererID = null;
	var injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
		"function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
		if (injectedHook && "function" === typeof injectedHook.setStrictMode) try {
			injectedHook.setStrictMode(rendererID, newIsStrictMode);
		} catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
	var log = Math.log;
	var LN2 = Math.LN2;
	function clz32Fallback(x) {
		x >>>= 0;
		return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
	}
	var nextTransitionUpdateLane = 256;
	var nextTransitionDeferredLane = 262144;
	var nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
		var pendingSyncLanes = lanes & 42;
		if (0 !== pendingSyncLanes) return pendingSyncLanes;
		switch (lanes & -lanes) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return lanes & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return lanes & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return lanes & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return lanes;
		}
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
		var pendingLanes = root.pendingLanes;
		if (0 === pendingLanes) return 0;
		var nextLanes = 0, suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes;
		root = root.warmLanes;
		var nonIdlePendingLanes = pendingLanes & 134217727;
		0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
		return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
		return 0 === (root.pendingLanes & ~(root.suspendedLanes & ~root.pingedLanes) & renderLanes);
	}
	function computeExpirationTime(lane, currentTime) {
		switch (lane) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return currentTime + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return currentTime + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function claimNextRetryLane() {
		var lane = nextRetryLane;
		nextRetryLane <<= 1;
		0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
		return lane;
	}
	function createLaneMap(initial) {
		for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
		return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
		root.pendingLanes |= updateLane;
		268435456 !== updateLane && (root.suspendedLanes = 0, root.pingedLanes = 0, root.warmLanes = 0);
	}
	function markRootFinished(root, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
		var previouslyPendingLanes = root.pendingLanes;
		root.pendingLanes = remainingLanes;
		root.suspendedLanes = 0;
		root.pingedLanes = 0;
		root.warmLanes = 0;
		root.expiredLanes &= remainingLanes;
		root.entangledLanes &= remainingLanes;
		root.errorRecoveryDisabledLanes &= remainingLanes;
		root.shellSuspendCounter = 0;
		var entanglements = root.entanglements, expirationTimes = root.expirationTimes, hiddenUpdates = root.hiddenUpdates;
		for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes;) {
			var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
			entanglements[index$7] = 0;
			expirationTimes[index$7] = -1;
			var hiddenUpdatesForLane = hiddenUpdates[index$7];
			if (null !== hiddenUpdatesForLane) for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
				var update = hiddenUpdatesForLane[index$7];
				null !== update && (update.lane &= -536870913);
			}
			remainingLanes &= ~lane;
		}
		0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
		0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root.tag && (root.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
		root.pendingLanes |= spawnedLane;
		root.suspendedLanes &= ~spawnedLane;
		var spawnedLaneIndex = 31 - clz32(spawnedLane);
		root.entangledLanes |= spawnedLane;
		root.entanglements[spawnedLaneIndex] = root.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
	}
	function markRootEntangled(root, entangledLanes) {
		var rootEntangledLanes = root.entangledLanes |= entangledLanes;
		for (root = root.entanglements; rootEntangledLanes;) {
			var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
			lane & entangledLanes | root[index$8] & entangledLanes && (root[index$8] |= entangledLanes);
			rootEntangledLanes &= ~lane;
		}
	}
	function getBumpedLaneForHydration(root, renderLanes) {
		var renderLane = renderLanes & -renderLanes;
		renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
		return 0 !== (renderLane & (root.suspendedLanes | renderLanes)) ? 0 : renderLane;
	}
	function getBumpedLaneForHydrationByLane(lane) {
		switch (lane) {
			case 2:
				lane = 1;
				break;
			case 8:
				lane = 4;
				break;
			case 32:
				lane = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				lane = 128;
				break;
			case 268435456:
				lane = 134217728;
				break;
			default: lane = 0;
		}
		return lane;
	}
	function lanesToEventPriority(lanes) {
		lanes &= -lanes;
		return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
	}
	function resolveUpdatePriority() {
		var updatePriority = ReactDOMSharedInternals.p;
		if (0 !== updatePriority) return updatePriority;
		updatePriority = window.event;
		return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			return ReactDOMSharedInternals.p = priority, fn();
		} finally {
			ReactDOMSharedInternals.p = previousPriority;
		}
	}
	var randomKey = Math.random().toString(36).slice(2);
	var internalInstanceKey = "__reactFiber$" + randomKey;
	var internalPropsKey = "__reactProps$" + randomKey;
	var internalContainerInstanceKey = "__reactContainer$" + randomKey;
	var internalEventHandlersKey = "__reactEvents$" + randomKey;
	var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
	var internalEventHandlesSetKey = "__reactHandles$" + randomKey;
	var internalRootNodeResourcesKey = "__reactResources$" + randomKey;
	var internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
		delete node[internalInstanceKey];
		delete node[internalPropsKey];
		delete node[internalEventHandlersKey];
		delete node[internalEventHandlerListenersKey];
		delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
		var targetInst = targetNode[internalInstanceKey];
		if (targetInst) return targetInst;
		for (var parentNode = targetNode.parentNode; parentNode;) {
			if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
				parentNode = targetInst.alternate;
				if (null !== targetInst.child || null !== parentNode && null !== parentNode.child) for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode;) {
					if (parentNode = targetNode[internalInstanceKey]) return parentNode;
					targetNode = getParentHydrationBoundary(targetNode);
				}
				return targetInst;
			}
			targetNode = parentNode;
			parentNode = targetNode.parentNode;
		}
		return null;
	}
	function getInstanceFromNode(node) {
		if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
			var tag = node.tag;
			if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag) return node;
		}
		return null;
	}
	function getNodeFromInstance(inst) {
		var tag = inst.tag;
		if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
		throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
		var resources = root[internalRootNodeResourcesKey];
		resources || (resources = root[internalRootNodeResourcesKey] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		});
		return resources;
	}
	function markNodeAsHoistable(node) {
		node[internalHoistableMarker] = !0;
	}
	var allNativeEvents = /* @__PURE__ */ new Set();
	var registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
		registerDirectEvent(registrationName, dependencies);
		registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
		registrationNameDependencies[registrationName] = dependencies;
		for (registrationName = 0; registrationName < dependencies.length; registrationName++) allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
		if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
		if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
		if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
		illegalAttributeNameCache[attributeName] = !0;
		return !1;
	}
	function setValueForAttribute(node, name, value) {
		if (isAttributeNameSafe(name)) if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
					node.removeAttribute(name);
					return;
				case "boolean":
					var prefix$10 = name.toLowerCase().slice(0, 5);
					if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
						node.removeAttribute(name);
						return;
					}
			}
			node.setAttribute(name, "" + value);
		}
	}
	function setValueForKnownAttribute(node, name, value) {
		if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					node.removeAttribute(name);
					return;
			}
			node.setAttribute(name, "" + value);
		}
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
		if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					node.removeAttribute(name);
					return;
			}
			node.setAttributeNS(namespace, name, "" + value);
		}
	}
	function getToStringValue(value) {
		switch (typeof value) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return value;
			case "object": return value;
			default: return "";
		}
	}
	function isCheckable(elem) {
		var type = elem.type;
		return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
	}
	function trackValueOnNode(node, valueField, currentValue) {
		var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
		if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
			var get = descriptor.get, set = descriptor.set;
			Object.defineProperty(node, valueField, {
				configurable: !0,
				get: function() {
					return get.call(this);
				},
				set: function(value) {
					currentValue = "" + value;
					set.call(this, value);
				}
			});
			Object.defineProperty(node, valueField, { enumerable: descriptor.enumerable });
			return {
				getValue: function() {
					return currentValue;
				},
				setValue: function(value) {
					currentValue = "" + value;
				},
				stopTracking: function() {
					node._valueTracker = null;
					delete node[valueField];
				}
			};
		}
	}
	function track(node) {
		if (!node._valueTracker) {
			var valueField = isCheckable(node) ? "checked" : "value";
			node._valueTracker = trackValueOnNode(node, valueField, "" + node[valueField]);
		}
	}
	function updateValueIfChanged(node) {
		if (!node) return !1;
		var tracker = node._valueTracker;
		if (!tracker) return !0;
		var lastValue = tracker.getValue();
		var value = "";
		node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
		node = value;
		return node !== lastValue ? (tracker.setValue(node), !0) : !1;
	}
	function getActiveElement(doc) {
		doc = doc || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof doc) return null;
		try {
			return doc.activeElement || doc.body;
		} catch (e) {
			return doc.body;
		}
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
		return value.replace(escapeSelectorAttributeValueInsideDoubleQuotesRegex, function(ch) {
			return "\\" + ch.charCodeAt(0).toString(16) + " ";
		});
	}
	function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
		element.name = "";
		null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
		if (null != value) if ("number" === type) {
			if (0 === value && "" === element.value || element.value != value) element.value = "" + getToStringValue(value);
		} else element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
		else "submit" !== type && "reset" !== type || element.removeAttribute("value");
		null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
		null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
		null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
		null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
	}
	function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating) {
		null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
		if (null != value || null != defaultValue) {
			if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
				track(element);
				return;
			}
			defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
			value = null != value ? "" + getToStringValue(value) : defaultValue;
			isHydrating || value === element.value || (element.value = value);
			element.defaultValue = value;
		}
		checked = null != checked ? checked : defaultChecked;
		checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
		element.checked = isHydrating ? element.checked : !!checked;
		element.defaultChecked = !!checked;
		null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
		track(element);
	}
	function setDefaultValue(node, type, value) {
		"number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
		node = node.options;
		if (multiple) {
			multiple = {};
			for (var i = 0; i < propValue.length; i++) multiple["$" + propValue[i]] = !0;
			for (propValue = 0; propValue < node.length; propValue++) i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = !0);
		} else {
			propValue = "" + getToStringValue(propValue);
			multiple = null;
			for (i = 0; i < node.length; i++) {
				if (node[i].value === propValue) {
					node[i].selected = !0;
					setDefaultSelected && (node[i].defaultSelected = !0);
					return;
				}
				null !== multiple || node[i].disabled || (multiple = node[i]);
			}
			null !== multiple && (multiple.selected = !0);
		}
	}
	function updateTextarea(element, value, defaultValue) {
		if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
			element.defaultValue !== value && (element.defaultValue = value);
			return;
		}
		element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
		if (null == value) {
			if (null != children) {
				if (null != defaultValue) throw Error(formatProdErrorMessage(92));
				if (isArrayImpl(children)) {
					if (1 < children.length) throw Error(formatProdErrorMessage(93));
					children = children[0];
				}
				defaultValue = children;
			}
			defaultValue ??= "";
			value = defaultValue;
		}
		defaultValue = getToStringValue(value);
		element.defaultValue = defaultValue;
		children = element.textContent;
		children === defaultValue && "" !== children && null !== children && (element.value = children);
		track(element);
	}
	function setTextContent(node, text) {
		if (text) {
			var firstChild = node.firstChild;
			if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
				firstChild.nodeValue = text;
				return;
			}
		}
		node.textContent = text;
	}
	var unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function setValueForStyle(style, styleName, value) {
		var isCustomProperty = 0 === styleName.indexOf("--");
		null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style.setProperty(styleName, "") : "float" === styleName ? style.cssFloat = "" : style[styleName] = "" : isCustomProperty ? style.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style.cssFloat = value : style[styleName] = ("" + value).trim() : style[styleName] = value + "px";
	}
	function setValueForStyles(node, styles, prevStyles) {
		if (null != styles && "object" !== typeof styles) throw Error(formatProdErrorMessage(62));
		node = node.style;
		if (null != prevStyles) {
			for (var styleName in prevStyles) !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
			for (var styleName$16 in styles) styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
		} else for (var styleName$17 in styles) styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
		if (-1 === tagName.indexOf("-")) return !1;
		switch (tagName) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var aliases = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]);
	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
		return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
	}
	function noop$1() {}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
		nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
		nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
		return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null;
	var restoreQueue = null;
	function restoreStateOfTarget(target) {
		var internalInstance = getInstanceFromNode(target);
		if (internalInstance && (target = internalInstance.stateNode)) {
			var props = target[internalPropsKey] || null;
			a: switch (target = internalInstance.stateNode, internalInstance.type) {
				case "input":
					updateInput(target, props.value, props.defaultValue, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name);
					internalInstance = props.name;
					if ("radio" === props.type && null != internalInstance) {
						for (props = target; props.parentNode;) props = props.parentNode;
						props = props.querySelectorAll("input[name=\"" + escapeSelectorAttributeValueInsideDoubleQuotes("" + internalInstance) + "\"][type=\"radio\"]");
						for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
							var otherNode = props[internalInstance];
							if (otherNode !== target && otherNode.form === target.form) {
								var otherProps = otherNode[internalPropsKey] || null;
								if (!otherProps) throw Error(formatProdErrorMessage(90));
								updateInput(otherNode, otherProps.value, otherProps.defaultValue, otherProps.defaultValue, otherProps.checked, otherProps.defaultChecked, otherProps.type, otherProps.name);
							}
						}
						for (internalInstance = 0; internalInstance < props.length; internalInstance++) otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
					}
					break a;
				case "textarea":
					updateTextarea(target, props.value, props.defaultValue);
					break a;
				case "select": internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, !1);
			}
		}
	}
	var isInsideEventHandler = !1;
	function batchedUpdates$1(fn, a, b) {
		if (isInsideEventHandler) return fn(a, b);
		isInsideEventHandler = !0;
		try {
			return fn(a);
		} finally {
			if (isInsideEventHandler = !1, null !== restoreTarget || null !== restoreQueue) {
				if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn)) for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
			}
		}
	}
	function getListener(inst, registrationName) {
		var stateNode = inst.stateNode;
		if (null === stateNode) return null;
		var props = stateNode[internalPropsKey] || null;
		if (null === props) return null;
		stateNode = props[registrationName];
		a: switch (registrationName) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
				inst = !props;
				break a;
			default: inst = !1;
		}
		if (inst) return null;
		if (stateNode && "function" !== typeof stateNode) throw Error(formatProdErrorMessage(231, registrationName, typeof stateNode));
		return stateNode;
	}
	var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
	var passiveBrowserEventsSupported = !1;
	if (canUseDOM) try {
		var options = {};
		Object.defineProperty(options, "passive", { get: function() {
			passiveBrowserEventsSupported = !0;
		} });
		window.addEventListener("test", options, options);
		window.removeEventListener("test", options, options);
	} catch (e) {
		passiveBrowserEventsSupported = !1;
	}
	var root = null;
	var startText = null;
	var fallbackText = null;
	function getData() {
		if (fallbackText) return fallbackText;
		var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
		for (start = 0; start < startLength && startValue[start] === endValue[start]; start++);
		var minEnd = startLength - start;
		for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++);
		return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
	}
	function getEventCharCode(nativeEvent) {
		var keyCode = nativeEvent.keyCode;
		"charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
		10 === nativeEvent && (nativeEvent = 13);
		return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
		return !0;
	}
	function functionThatReturnsFalse() {
		return !1;
	}
	function createSyntheticEvent(Interface) {
		function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
			this._reactName = reactName;
			this._targetInst = targetInst;
			this.type = reactEventType;
			this.nativeEvent = nativeEvent;
			this.target = nativeEventTarget;
			this.currentTarget = null;
			for (var propName in Interface) Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
			this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : !1 === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
			this.isPropagationStopped = functionThatReturnsFalse;
			return this;
		}
		assign(SyntheticBaseEvent.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var event = this.nativeEvent;
				event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = !1), this.isDefaultPrevented = functionThatReturnsTrue);
			},
			stopPropagation: function() {
				var event = this.nativeEvent;
				event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = !0), this.isPropagationStopped = functionThatReturnsTrue);
			},
			persist: function() {},
			isPersistent: functionThatReturnsTrue
		});
		return SyntheticBaseEvent;
	}
	var EventInterface = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(event) {
			return event.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	};
	var SyntheticEvent = createSyntheticEvent(EventInterface);
	var UIEventInterface = assign({}, EventInterface, {
		view: 0,
		detail: 0
	});
	var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
	var lastMovementX;
	var lastMovementY;
	var lastMouseEvent;
	var MouseEventInterface = assign({}, UIEventInterface, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: getEventModifierState,
		button: 0,
		buttons: 0,
		relatedTarget: function(event) {
			return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
		},
		movementX: function(event) {
			if ("movementX" in event) return event.movementX;
			event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
			return lastMovementX;
		},
		movementY: function(event) {
			return "movementY" in event ? event.movementY : lastMovementY;
		}
	});
	var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
	var SyntheticDragEvent = createSyntheticEvent(assign({}, MouseEventInterface, { dataTransfer: 0 }));
	var SyntheticFocusEvent = createSyntheticEvent(assign({}, UIEventInterface, { relatedTarget: 0 }));
	var SyntheticAnimationEvent = createSyntheticEvent(assign({}, EventInterface, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var SyntheticClipboardEvent = createSyntheticEvent(assign({}, EventInterface, { clipboardData: function(event) {
		return "clipboardData" in event ? event.clipboardData : window.clipboardData;
	} }));
	var SyntheticCompositionEvent = createSyntheticEvent(assign({}, EventInterface, { data: 0 }));
	var normalizeKey = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	};
	var translateToKey = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	};
	var modifierKeyToProp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function modifierStateGetter(keyArg) {
		var nativeEvent = this.nativeEvent;
		return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : !1;
	}
	function getEventModifierState() {
		return modifierStateGetter;
	}
	var SyntheticKeyboardEvent = createSyntheticEvent(assign({}, UIEventInterface, {
		key: function(nativeEvent) {
			if (nativeEvent.key) {
				var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
				if ("Unidentified" !== key) return key;
			}
			return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: getEventModifierState,
		charCode: function(event) {
			return "keypress" === event.type ? getEventCharCode(event) : 0;
		},
		keyCode: function(event) {
			return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
		},
		which: function(event) {
			return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
		}
	}));
	var SyntheticPointerEvent = createSyntheticEvent(assign({}, MouseEventInterface, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}));
	var SyntheticTouchEvent = createSyntheticEvent(assign({}, UIEventInterface, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: getEventModifierState
	}));
	var SyntheticTransitionEvent = createSyntheticEvent(assign({}, EventInterface, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var SyntheticWheelEvent = createSyntheticEvent(assign({}, MouseEventInterface, {
		deltaX: function(event) {
			return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
		},
		deltaY: function(event) {
			return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}));
	var SyntheticToggleEvent = createSyntheticEvent(assign({}, EventInterface, {
		newState: 0,
		oldState: 0
	}));
	var END_KEYCODES = [
		9,
		13,
		27,
		32
	];
	var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
	var documentMode = null;
	canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
	var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode);
	var SPACEBAR_CHAR = String.fromCharCode(32);
	var hasSpaceKeypress = !1;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
		switch (domEventName) {
			case "keyup": return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
			case "keydown": return 229 !== nativeEvent.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function getDataFromCustomEvent(nativeEvent) {
		nativeEvent = nativeEvent.detail;
		return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
	}
	var isComposing = !1;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
		switch (domEventName) {
			case "compositionend": return getDataFromCustomEvent(nativeEvent);
			case "keypress":
				if (32 !== nativeEvent.which) return null;
				hasSpaceKeypress = !0;
				return SPACEBAR_CHAR;
			case "textInput": return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
			default: return null;
		}
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
		if (isComposing) return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = !1, domEventName) : null;
		switch (domEventName) {
			case "paste": return null;
			case "keypress":
				if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
					if (nativeEvent.char && 1 < nativeEvent.char.length) return nativeEvent.char;
					if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
				}
				return null;
			case "compositionend": return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
			default: return null;
		}
	}
	var supportedInputTypes = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function isTextInputElement(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? !0 : !1;
	}
	function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
		restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
		inst = accumulateTwoPhaseListeners(inst, "onChange");
		0 < inst.length && (nativeEvent = new SyntheticEvent("onChange", "change", null, nativeEvent, target), dispatchQueue.push({
			event: nativeEvent,
			listeners: inst
		}));
	}
	var activeElement$1 = null;
	var activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
		processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
		if (updateValueIfChanged(getNodeFromInstance(targetInst))) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
		if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = !1;
	if (canUseDOM) {
		var JSCompiler_inline_result$jscomp$286;
		if (canUseDOM) {
			var isSupported$jscomp$inline_427 = "oninput" in document;
			if (!isSupported$jscomp$inline_427) {
				var element$jscomp$inline_428 = document.createElement("div");
				element$jscomp$inline_428.setAttribute("oninput", "return;");
				isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
			}
			JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
		} else JSCompiler_inline_result$jscomp$286 = !1;
		isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
		activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
	}
	function handlePropertyChange(nativeEvent) {
		if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
			var dispatchQueue = [];
			createAndAccumulateChangeEvent(dispatchQueue, activeElementInst$1, nativeEvent, getEventTarget(nativeEvent));
			batchedUpdates$1(runEventInBatch, dispatchQueue);
		}
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
		"focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
		if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName) return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
		if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
		if ("input" === domEventName || "change" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
		if (objectIs(objA, objB)) return !0;
		if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB) return !1;
		var keysA = Object.keys(objA), keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return !1;
		for (keysB = 0; keysB < keysA.length; keysB++) {
			var currentKey = keysA[keysB];
			if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) return !1;
		}
		return !0;
	}
	function getLeafNode(node) {
		for (; node && node.firstChild;) node = node.firstChild;
		return node;
	}
	function getNodeForCharacterOffset(root, offset) {
		var node = getLeafNode(root);
		root = 0;
		for (var nodeEnd; node;) {
			if (3 === node.nodeType) {
				nodeEnd = root + node.textContent.length;
				if (root <= offset && nodeEnd >= offset) return {
					node,
					offset: offset - root
				};
				root = nodeEnd;
			}
			a: {
				for (; node;) {
					if (node.nextSibling) {
						node = node.nextSibling;
						break a;
					}
					node = node.parentNode;
				}
				node = void 0;
			}
			node = getLeafNode(node);
		}
	}
	function containsNode(outerNode, innerNode) {
		return outerNode && innerNode ? outerNode === innerNode ? !0 : outerNode && 3 === outerNode.nodeType ? !1 : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : !1 : !1;
	}
	function getActiveElementDeep(containerInfo) {
		containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
		for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement;) {
			try {
				var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
			} catch (err) {
				JSCompiler_inline_result = !1;
			}
			if (JSCompiler_inline_result) containerInfo = element.contentWindow;
			else break;
			element = getActiveElement(containerInfo.document);
		}
		return element;
	}
	function hasSelectionCapabilities(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
	}
	var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode;
	var activeElement = null;
	var activeElementInst = null;
	var lastSelection = null;
	var mouseDown = !1;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
		var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
		mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = {
			start: doc.selectionStart,
			end: doc.selectionEnd
		} : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
			anchorNode: doc.anchorNode,
			anchorOffset: doc.anchorOffset,
			focusNode: doc.focusNode,
			focusOffset: doc.focusOffset
		}), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
			event: nativeEvent,
			listeners: doc
		}), nativeEvent.target = activeElement)));
	}
	function makePrefixMap(styleProp, eventName) {
		var prefixes = {};
		prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
		prefixes["Webkit" + styleProp] = "webkit" + eventName;
		prefixes["Moz" + styleProp] = "moz" + eventName;
		return prefixes;
	}
	var vendorPrefixes = {
		animationend: makePrefixMap("Animation", "AnimationEnd"),
		animationiteration: makePrefixMap("Animation", "AnimationIteration"),
		animationstart: makePrefixMap("Animation", "AnimationStart"),
		transitionrun: makePrefixMap("Transition", "TransitionRun"),
		transitionstart: makePrefixMap("Transition", "TransitionStart"),
		transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
		transitionend: makePrefixMap("Transition", "TransitionEnd")
	};
	var prefixedEventNames = {};
	var style = {};
	canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
		if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
		if (!vendorPrefixes[eventName]) return eventName;
		var prefixMap = vendorPrefixes[eventName], styleProp;
		for (styleProp in prefixMap) if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) return prefixedEventNames[eventName] = prefixMap[styleProp];
		return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend");
	var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
	var ANIMATION_START = getVendorPrefixedEventName("animationstart");
	var TRANSITION_RUN = getVendorPrefixedEventName("transitionrun");
	var TRANSITION_START = getVendorPrefixedEventName("transitionstart");
	var TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel");
	var TRANSITION_END = getVendorPrefixedEventName("transitionend");
	var topLevelEventsToReactNames = /* @__PURE__ */ new Map();
	var simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
		topLevelEventsToReactNames.set(domEventName, reactName);
		registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	var concurrentQueues = [];
	var concurrentQueuesIndex = 0;
	var concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
		for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex;) {
			var fiber = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var queue = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var update = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var lane = concurrentQueues[i];
			concurrentQueues[i++] = null;
			if (null !== queue && null !== update) {
				var pending = queue.pending;
				null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
				queue.pending = update;
			}
			0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
		}
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
		concurrentQueues[concurrentQueuesIndex++] = fiber;
		concurrentQueues[concurrentQueuesIndex++] = queue;
		concurrentQueues[concurrentQueuesIndex++] = update;
		concurrentQueues[concurrentQueuesIndex++] = lane;
		concurrentlyUpdatedLanes |= lane;
		fiber.lanes |= lane;
		fiber = fiber.alternate;
		null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
		enqueueUpdate$1(fiber, queue, update, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
		enqueueUpdate$1(fiber, null, null, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
		sourceFiber.lanes |= lane;
		var alternate = sourceFiber.alternate;
		null !== alternate && (alternate.lanes |= lane);
		for (var isHidden = !1, parent = sourceFiber.return; null !== parent;) parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)), sourceFiber = parent, parent = parent.return;
		return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
		if (50 < nestedUpdateCount) throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
		for (var parent = sourceFiber.return; null !== parent;) sourceFiber = parent, parent = sourceFiber.return;
		return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
		this.tag = tag;
		this.key = key;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.refCleanup = this.ref = null;
		this.pendingProps = pendingProps;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = mode;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
		return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
		Component = Component.prototype;
		return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
		var workInProgress = current.alternate;
		null === workInProgress ? (workInProgress = createFiberImplClass(current.tag, pendingProps, current.key, current.mode), workInProgress.elementType = current.elementType, workInProgress.type = current.type, workInProgress.stateNode = current.stateNode, workInProgress.alternate = current, current.alternate = workInProgress) : (workInProgress.pendingProps = pendingProps, workInProgress.type = current.type, workInProgress.flags = 0, workInProgress.subtreeFlags = 0, workInProgress.deletions = null);
		workInProgress.flags = current.flags & 65011712;
		workInProgress.childLanes = current.childLanes;
		workInProgress.lanes = current.lanes;
		workInProgress.child = current.child;
		workInProgress.memoizedProps = current.memoizedProps;
		workInProgress.memoizedState = current.memoizedState;
		workInProgress.updateQueue = current.updateQueue;
		pendingProps = current.dependencies;
		workInProgress.dependencies = null === pendingProps ? null : {
			lanes: pendingProps.lanes,
			firstContext: pendingProps.firstContext
		};
		workInProgress.sibling = current.sibling;
		workInProgress.index = current.index;
		workInProgress.ref = current.ref;
		workInProgress.refCleanup = current.refCleanup;
		return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
		workInProgress.flags &= 65011714;
		var current = workInProgress.alternate;
		null === current ? (workInProgress.childLanes = 0, workInProgress.lanes = renderLanes, workInProgress.child = null, workInProgress.subtreeFlags = 0, workInProgress.memoizedProps = null, workInProgress.memoizedState = null, workInProgress.updateQueue = null, workInProgress.dependencies = null, workInProgress.stateNode = null) : (workInProgress.childLanes = current.childLanes, workInProgress.lanes = current.lanes, workInProgress.child = current.child, workInProgress.subtreeFlags = 0, workInProgress.deletions = null, workInProgress.memoizedProps = current.memoizedProps, workInProgress.memoizedState = current.memoizedState, workInProgress.updateQueue = current.updateQueue, workInProgress.type = current.type, renderLanes = current.dependencies, workInProgress.dependencies = null === renderLanes ? null : {
			lanes: renderLanes.lanes,
			firstContext: renderLanes.firstContext
		});
		return workInProgress;
	}
	function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
		var fiberTag = 0;
		owner = type;
		if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
		else if ("string" === typeof type) fiberTag = isHostHoistableType(type, pendingProps, contextStackCursor.current) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
		else a: switch (type) {
			case REACT_ACTIVITY_TYPE: return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
			case REACT_FRAGMENT_TYPE: return createFiberFromFragment(pendingProps.children, mode, lanes, key);
			case REACT_STRICT_MODE_TYPE:
				fiberTag = 8;
				mode |= 24;
				break;
			case REACT_PROFILER_TYPE: return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
			case REACT_SUSPENSE_TYPE: return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
			case REACT_SUSPENSE_LIST_TYPE: return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
			default:
				if ("object" === typeof type && null !== type) switch (type.$$typeof) {
					case REACT_CONTEXT_TYPE:
						fiberTag = 10;
						break a;
					case REACT_CONSUMER_TYPE:
						fiberTag = 9;
						break a;
					case REACT_FORWARD_REF_TYPE:
						fiberTag = 11;
						break a;
					case REACT_MEMO_TYPE:
						fiberTag = 14;
						break a;
					case REACT_LAZY_TYPE:
						fiberTag = 16;
						owner = null;
						break a;
				}
				fiberTag = 29;
				pendingProps = Error(formatProdErrorMessage(130, null === type ? "null" : typeof type, ""));
				owner = null;
		}
		key = createFiberImplClass(fiberTag, pendingProps, key, mode);
		key.elementType = type;
		key.type = owner;
		key.lanes = lanes;
		return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
		elements = createFiberImplClass(7, elements, key, mode);
		elements.lanes = lanes;
		return elements;
	}
	function createFiberFromText(content, mode, lanes) {
		content = createFiberImplClass(6, content, null, mode);
		content.lanes = lanes;
		return content;
	}
	function createFiberFromDehydratedFragment(dehydratedNode) {
		var fiber = createFiberImplClass(18, null, null, 0);
		fiber.stateNode = dehydratedNode;
		return fiber;
	}
	function createFiberFromPortal(portal, mode, lanes) {
		mode = createFiberImplClass(4, null !== portal.children ? portal.children : [], portal.key, mode);
		mode.lanes = lanes;
		mode.stateNode = {
			containerInfo: portal.containerInfo,
			pendingChildren: null,
			implementation: portal.implementation
		};
		return mode;
	}
	var CapturedStacks = /* @__PURE__ */ new WeakMap();
	function createCapturedValueAtFiber(value, source) {
		if ("object" === typeof value && null !== value) {
			var existing = CapturedStacks.get(value);
			if (void 0 !== existing) return existing;
			source = {
				value,
				source,
				stack: getStackByFiberInDevAndProd(source)
			};
			CapturedStacks.set(value, source);
			return source;
		}
		return {
			value,
			source,
			stack: getStackByFiberInDevAndProd(source)
		};
	}
	var forkStack = [];
	var forkStackIndex = 0;
	var treeForkProvider = null;
	var treeForkCount = 0;
	var idStack = [];
	var idStackIndex = 0;
	var treeContextProvider = null;
	var treeContextId = 1;
	var treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
		forkStack[forkStackIndex++] = treeForkCount;
		forkStack[forkStackIndex++] = treeForkProvider;
		treeForkProvider = workInProgress;
		treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
		idStack[idStackIndex++] = treeContextId;
		idStack[idStackIndex++] = treeContextOverflow;
		idStack[idStackIndex++] = treeContextProvider;
		treeContextProvider = workInProgress;
		var baseIdWithLeadingBit = treeContextId;
		workInProgress = treeContextOverflow;
		var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
		baseIdWithLeadingBit &= ~(1 << baseLength);
		index += 1;
		var length = 32 - clz32(totalChildren) + baseLength;
		if (30 < length) {
			var numberOfOverflowBits = baseLength - baseLength % 5;
			length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
			baseIdWithLeadingBit >>= numberOfOverflowBits;
			baseLength -= numberOfOverflowBits;
			treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit;
			treeContextOverflow = length + workInProgress;
		} else treeContextId = 1 << length | index << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress;
	}
	function pushMaterializedTreeId(workInProgress) {
		null !== workInProgress.return && (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
		for (; workInProgress === treeForkProvider;) treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
		for (; workInProgress === treeContextProvider;) treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
	}
	function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
		idStack[idStackIndex++] = treeContextId;
		idStack[idStackIndex++] = treeContextOverflow;
		idStack[idStackIndex++] = treeContextProvider;
		treeContextId = suspendedContext.id;
		treeContextOverflow = suspendedContext.overflow;
		treeContextProvider = workInProgress;
	}
	var hydrationParentFiber = null;
	var nextHydratableInstance = null;
	var isHydrating = !1;
	var hydrationErrors = null;
	var rootOrSingletonContext = !1;
	var HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
		queueHydrationError(createCapturedValueAtFiber(Error(formatProdErrorMessage(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), fiber));
		throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
		var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
		instance[internalInstanceKey] = fiber;
		instance[internalPropsKey] = props;
		switch (type) {
			case "dialog":
				listenToNonDelegatedEvent("cancel", instance);
				listenToNonDelegatedEvent("close", instance);
				break;
			case "iframe":
			case "object":
			case "embed":
				listenToNonDelegatedEvent("load", instance);
				break;
			case "video":
			case "audio":
				for (type = 0; type < mediaEventTypes.length; type++) listenToNonDelegatedEvent(mediaEventTypes[type], instance);
				break;
			case "source":
				listenToNonDelegatedEvent("error", instance);
				break;
			case "img":
			case "image":
			case "link":
				listenToNonDelegatedEvent("error", instance);
				listenToNonDelegatedEvent("load", instance);
				break;
			case "details":
				listenToNonDelegatedEvent("toggle", instance);
				break;
			case "input":
				listenToNonDelegatedEvent("invalid", instance);
				initInput(instance, props.value, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name, !0);
				break;
			case "select":
				listenToNonDelegatedEvent("invalid", instance);
				break;
			case "textarea": listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
		}
		type = props.children;
		"string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || !0 === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = !0) : instance = !1;
		instance || throwOnHydrationMismatch(fiber, !0);
	}
	function popToNextHostParent(fiber) {
		for (hydrationParentFiber = fiber.return; hydrationParentFiber;) switch (hydrationParentFiber.tag) {
			case 5:
			case 31:
			case 13:
				rootOrSingletonContext = !1;
				return;
			case 27:
			case 3:
				rootOrSingletonContext = !0;
				return;
			default: hydrationParentFiber = hydrationParentFiber.return;
		}
	}
	function popHydrationState(fiber) {
		if (fiber !== hydrationParentFiber) return !1;
		if (!isHydrating) return popToNextHostParent(fiber), isHydrating = !0, !1;
		var tag = fiber.tag, JSCompiler_temp;
		if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
			if (JSCompiler_temp = 5 === tag) JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
			JSCompiler_temp = !JSCompiler_temp;
		}
		JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
		popToNextHostParent(fiber);
		if (13 === tag) {
			fiber = fiber.memoizedState;
			fiber = null !== fiber ? fiber.dehydrated : null;
			if (!fiber) throw Error(formatProdErrorMessage(317));
			nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
		} else if (31 === tag) {
			fiber = fiber.memoizedState;
			fiber = null !== fiber ? fiber.dehydrated : null;
			if (!fiber) throw Error(formatProdErrorMessage(317));
			nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
		} else 27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
		return !0;
	}
	function resetHydrationState() {
		nextHydratableInstance = hydrationParentFiber = null;
		isHydrating = !1;
	}
	function upgradeHydrationErrorsToRecoverable() {
		var queuedErrors = hydrationErrors;
		null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, queuedErrors), hydrationErrors = null);
		return queuedErrors;
	}
	function queueHydrationError(error) {
		null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null);
	var currentlyRenderingFiber$1 = null;
	var lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
		push(valueCursor, context._currentValue);
		context._currentValue = nextValue;
	}
	function popProvider(context) {
		context._currentValue = valueCursor.current;
		pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
		for (; null !== parent;) {
			var alternate = parent.alternate;
			(parent.childLanes & renderLanes) !== renderLanes ? (parent.childLanes |= renderLanes, null !== alternate && (alternate.childLanes |= renderLanes)) : null !== alternate && (alternate.childLanes & renderLanes) !== renderLanes && (alternate.childLanes |= renderLanes);
			if (parent === propagationRoot) break;
			parent = parent.return;
		}
	}
	function propagateContextChanges(workInProgress, contexts, renderLanes, forcePropagateEntireTree) {
		var fiber = workInProgress.child;
		null !== fiber && (fiber.return = workInProgress);
		for (; null !== fiber;) {
			var list = fiber.dependencies;
			if (null !== list) {
				var nextFiber = fiber.child;
				list = list.firstContext;
				a: for (; null !== list;) {
					var dependency = list;
					list = fiber;
					for (var i = 0; i < contexts.length; i++) if (dependency.context === contexts[i]) {
						list.lanes |= renderLanes;
						dependency = list.alternate;
						null !== dependency && (dependency.lanes |= renderLanes);
						scheduleContextWorkOnParentPath(list.return, renderLanes, workInProgress);
						forcePropagateEntireTree || (nextFiber = null);
						break a;
					}
					list = dependency.next;
				}
			} else if (18 === fiber.tag) {
				nextFiber = fiber.return;
				if (null === nextFiber) throw Error(formatProdErrorMessage(341));
				nextFiber.lanes |= renderLanes;
				list = nextFiber.alternate;
				null !== list && (list.lanes |= renderLanes);
				scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
				nextFiber = null;
			} else nextFiber = fiber.child;
			if (null !== nextFiber) nextFiber.return = fiber;
			else for (nextFiber = fiber; null !== nextFiber;) {
				if (nextFiber === workInProgress) {
					nextFiber = null;
					break;
				}
				fiber = nextFiber.sibling;
				if (null !== fiber) {
					fiber.return = nextFiber.return;
					nextFiber = fiber;
					break;
				}
				nextFiber = nextFiber.return;
			}
			fiber = nextFiber;
		}
	}
	function propagateParentContextChanges(current, workInProgress, renderLanes, forcePropagateEntireTree) {
		current = null;
		for (var parent = workInProgress, isInsidePropagationBailout = !1; null !== parent;) {
			if (!isInsidePropagationBailout) {
				if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
				else if (0 !== (parent.flags & 262144)) break;
			}
			if (10 === parent.tag) {
				var currentParent = parent.alternate;
				if (null === currentParent) throw Error(formatProdErrorMessage(387));
				currentParent = currentParent.memoizedProps;
				if (null !== currentParent) {
					var context = parent.type;
					objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
				}
			} else if (parent === hostTransitionProviderCursor.current) {
				currentParent = parent.alternate;
				if (null === currentParent) throw Error(formatProdErrorMessage(387));
				currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
			}
			parent = parent.return;
		}
		null !== current && propagateContextChanges(workInProgress, current, renderLanes, forcePropagateEntireTree);
		workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
		for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies;) {
			if (!objectIs(currentDependencies.context._currentValue, currentDependencies.memoizedValue)) return !0;
			currentDependencies = currentDependencies.next;
		}
		return !1;
	}
	function prepareToReadContext(workInProgress) {
		currentlyRenderingFiber$1 = workInProgress;
		lastContextDependency = null;
		workInProgress = workInProgress.dependencies;
		null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
		return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
		null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
		return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
		var value = context._currentValue;
		context = {
			context,
			memoizedValue: value,
			next: null
		};
		if (null === lastContextDependency) {
			if (null === consumer) throw Error(formatProdErrorMessage(308));
			lastContextDependency = context;
			consumer.dependencies = {
				lanes: 0,
				firstContext: context
			};
			consumer.flags |= 524288;
		} else lastContextDependency = lastContextDependency.next = context;
		return value;
	}
	var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
		var listeners = [], signal = this.signal = {
			aborted: !1,
			addEventListener: function(type, listener) {
				listeners.push(listener);
			}
		};
		this.abort = function() {
			signal.aborted = !0;
			listeners.forEach(function(listener) {
				return listener();
			});
		};
	};
	var scheduleCallback$2 = Scheduler.unstable_scheduleCallback;
	var NormalPriority = Scheduler.unstable_NormalPriority;
	var CacheContext = {
		$$typeof: REACT_CONTEXT_TYPE,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function createCache() {
		return {
			controller: new AbortControllerLocal(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function releaseCache(cache) {
		cache.refCount--;
		0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
			cache.controller.abort();
		});
	}
	var currentEntangledListeners = null;
	var currentEntangledPendingCount = 0;
	var currentEntangledLane = 0;
	var currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
		if (null === currentEntangledListeners) {
			var entangledListeners = currentEntangledListeners = [];
			currentEntangledPendingCount = 0;
			currentEntangledLane = requestTransitionLane();
			currentEntangledActionThenable = {
				status: "pending",
				value: void 0,
				then: function(resolve) {
					entangledListeners.push(resolve);
				}
			};
		}
		currentEntangledPendingCount++;
		thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
		return thenable;
	}
	function pingEngtangledActionScope() {
		if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
			null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
			var listeners = currentEntangledListeners;
			currentEntangledListeners = null;
			currentEntangledLane = 0;
			currentEntangledActionThenable = null;
			for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
		}
	}
	function chainThenableValue(thenable, result) {
		var listeners = [], thenableWithOverride = {
			status: "pending",
			value: null,
			reason: null,
			then: function(resolve) {
				listeners.push(resolve);
			}
		};
		thenable.then(function() {
			thenableWithOverride.status = "fulfilled";
			thenableWithOverride.value = result;
			for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
		}, function(error) {
			thenableWithOverride.status = "rejected";
			thenableWithOverride.reason = error;
			for (error = 0; error < listeners.length; error++) (0, listeners[error])(void 0);
		});
		return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function(transition, returnValue) {
		globalMostRecentTransitionTime = now();
		"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
		null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
		var cacheResumedFromPreviousRender = resumedCache.current;
		return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
		null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
		var cacheFromPool = peekCacheFromPool();
		return null === cacheFromPool ? null : {
			parent: CacheContext._currentValue,
			pool: cacheFromPool
		};
	}
	var SuspenseException = Error(formatProdErrorMessage(460));
	var SuspenseyCommitException = Error(formatProdErrorMessage(474));
	var SuspenseActionException = Error(formatProdErrorMessage(542));
	var noopSuspenseyCommitThenable = { then: function() {} };
	function isThenableResolved(thenable) {
		thenable = thenable.status;
		return "fulfilled" === thenable || "rejected" === thenable;
	}
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$1, noop$1), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
			default:
				if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
				else {
					thenableState = workInProgressRoot;
					if (null !== thenableState && 100 < thenableState.shellSuspendCounter) throw Error(formatProdErrorMessage(482));
					thenableState = thenable;
					thenableState.status = "pending";
					thenableState.then(function(fulfilledValue) {
						if ("pending" === thenable.status) {
							var fulfilledThenable = thenable;
							fulfilledThenable.status = "fulfilled";
							fulfilledThenable.value = fulfilledValue;
						}
					}, function(error) {
						if ("pending" === thenable.status) {
							var rejectedThenable = thenable;
							rejectedThenable.status = "rejected";
							rejectedThenable.reason = error;
						}
					});
				}
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	function resolveLazy(lazyType) {
		try {
			var init = lazyType._init;
			return init(lazyType._payload);
		} catch (x) {
			if (null !== x && "object" === typeof x && "function" === typeof x.then) throw suspendedThenable = x, SuspenseException;
			throw x;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
		if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException) throw Error(formatProdErrorMessage(483));
	}
	var thenableState$1 = null;
	var thenableIndexCounter$1 = 0;
	function unwrapThenable(thenable) {
		var index = thenableIndexCounter$1;
		thenableIndexCounter$1 += 1;
		null === thenableState$1 && (thenableState$1 = []);
		return trackUsedThenable(thenableState$1, thenable, index);
	}
	function coerceRef(workInProgress, element) {
		element = element.props.ref;
		workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
		if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE) throw Error(formatProdErrorMessage(525));
		returnFiber = Object.prototype.toString.call(newChild);
		throw Error(formatProdErrorMessage(31, "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber));
	}
	function createChildReconciler(shouldTrackSideEffects) {
		function deleteChild(returnFiber, childToDelete) {
			if (shouldTrackSideEffects) {
				var deletions = returnFiber.deletions;
				null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
			}
		}
		function deleteRemainingChildren(returnFiber, currentFirstChild) {
			if (!shouldTrackSideEffects) return null;
			for (; null !== currentFirstChild;) deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
			return null;
		}
		function mapRemainingChildren(currentFirstChild) {
			for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild;) null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
			return existingChildren;
		}
		function useFiber(fiber, pendingProps) {
			fiber = createWorkInProgress(fiber, pendingProps);
			fiber.index = 0;
			fiber.sibling = null;
			return fiber;
		}
		function placeChild(newFiber, lastPlacedIndex, newIndex) {
			newFiber.index = newIndex;
			if (!shouldTrackSideEffects) return newFiber.flags |= 1048576, lastPlacedIndex;
			newIndex = newFiber.alternate;
			if (null !== newIndex) return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
			newFiber.flags |= 67108866;
			return lastPlacedIndex;
		}
		function placeSingleChild(newFiber) {
			shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
			return newFiber;
		}
		function updateTextNode(returnFiber, current, textContent, lanes) {
			if (null === current || 6 !== current.tag) return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
			current = useFiber(current, textContent);
			current.return = returnFiber;
			return current;
		}
		function updateElement(returnFiber, current, element, lanes) {
			var elementType = element.type;
			if (elementType === REACT_FRAGMENT_TYPE) return updateFragment(returnFiber, current, element.props.children, lanes, element.key);
			if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type)) return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
			current = createFiberFromTypeAndProps(element.type, element.key, element.props, null, returnFiber.mode, lanes);
			coerceRef(current, element);
			current.return = returnFiber;
			return current;
		}
		function updatePortal(returnFiber, current, portal, lanes) {
			if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
			current = useFiber(current, portal.children || []);
			current.return = returnFiber;
			return current;
		}
		function updateFragment(returnFiber, current, fragment, lanes, key) {
			if (null === current || 7 !== current.tag) return current = createFiberFromFragment(fragment, returnFiber.mode, lanes, key), current.return = returnFiber, current;
			current = useFiber(current, fragment);
			current.return = returnFiber;
			return current;
		}
		function createChild(returnFiber, newChild, lanes) {
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return newChild = createFiberFromText("" + newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild;
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return lanes = createFiberFromTypeAndProps(newChild.type, newChild.key, newChild.props, null, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
					case REACT_PORTAL_TYPE: return newChild = createFiberFromPortal(newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild;
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return newChild = createFiberFromFragment(newChild, returnFiber.mode, lanes, null), newChild.return = returnFiber, newChild;
				if ("function" === typeof newChild.then) return createChild(returnFiber, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return createChild(returnFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function updateSlot(returnFiber, oldFiber, newChild, lanes) {
			var key = null !== oldFiber ? oldFiber.key : null;
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
					case REACT_PORTAL_TYPE: return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
				if ("function" === typeof newChild.then) return updateSlot(returnFiber, oldFiber, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateSlot(returnFiber, oldFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
					case REACT_PORTAL_TYPE: return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
				if ("function" === typeof newChild.then) return updateFromMap(existingChildren, returnFiber, newIdx, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateFromMap(existingChildren, returnFiber, newIdx, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
			for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
				oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
				var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
				if (null === newFiber) {
					null === oldFiber && (oldFiber = nextOldFiber);
					break;
				}
				shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
				currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
				null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
				previousNewFiber = newFiber;
				oldFiber = nextOldFiber;
			}
			if (newIdx === newChildren.length) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
			if (null === oldFiber) {
				for (; newIdx < newChildren.length; newIdx++) oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(oldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
				isHydrating && pushTreeFork(returnFiber, newIdx);
				return resultingFirstChild;
			}
			for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++) nextOldFiber = updateFromMap(oldFiber, returnFiber, newIdx, newChildren[newIdx], lanes), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(null === nextOldFiber.key ? newIdx : nextOldFiber.key), currentFirstChild = placeChild(nextOldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
			shouldTrackSideEffects && oldFiber.forEach(function(child) {
				return deleteChild(returnFiber, child);
			});
			isHydrating && pushTreeFork(returnFiber, newIdx);
			return resultingFirstChild;
		}
		function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
			if (null == newChildren) throw Error(formatProdErrorMessage(151));
			for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
				oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
				var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
				if (null === newFiber) {
					null === oldFiber && (oldFiber = nextOldFiber);
					break;
				}
				shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
				currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
				null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
				previousNewFiber = newFiber;
				oldFiber = nextOldFiber;
			}
			if (step.done) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
			if (null === oldFiber) {
				for (; !step.done; newIdx++, step = newChildren.next()) step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
				isHydrating && pushTreeFork(returnFiber, newIdx);
				return resultingFirstChild;
			}
			for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next()) step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
			shouldTrackSideEffects && oldFiber.forEach(function(child) {
				return deleteChild(returnFiber, child);
			});
			isHydrating && pushTreeFork(returnFiber, newIdx);
			return resultingFirstChild;
		}
		function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
			"object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE:
						a: {
							for (var key = newChild.key; null !== currentFirstChild;) {
								if (currentFirstChild.key === key) {
									key = newChild.type;
									if (key === REACT_FRAGMENT_TYPE) {
										if (7 === currentFirstChild.tag) {
											deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
											lanes = useFiber(currentFirstChild, newChild.props.children);
											lanes.return = returnFiber;
											returnFiber = lanes;
											break a;
										}
									} else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
										deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
										lanes = useFiber(currentFirstChild, newChild.props);
										coerceRef(lanes, newChild);
										lanes.return = returnFiber;
										returnFiber = lanes;
										break a;
									}
									deleteRemainingChildren(returnFiber, currentFirstChild);
									break;
								} else deleteChild(returnFiber, currentFirstChild);
								currentFirstChild = currentFirstChild.sibling;
							}
							newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(newChild.props.children, returnFiber.mode, lanes, newChild.key), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(newChild.type, newChild.key, newChild.props, null, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
						}
						return placeSingleChild(returnFiber);
					case REACT_PORTAL_TYPE:
						a: {
							for (key = newChild.key; null !== currentFirstChild;) {
								if (currentFirstChild.key === key) if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
									deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
									lanes = useFiber(currentFirstChild, newChild.children || []);
									lanes.return = returnFiber;
									returnFiber = lanes;
									break a;
								} else {
									deleteRemainingChildren(returnFiber, currentFirstChild);
									break;
								}
								else deleteChild(returnFiber, currentFirstChild);
								currentFirstChild = currentFirstChild.sibling;
							}
							lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
							lanes.return = returnFiber;
							returnFiber = lanes;
						}
						return placeSingleChild(returnFiber);
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
				}
				if (isArrayImpl(newChild)) return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
				if (getIteratorFn(newChild)) {
					key = getIteratorFn(newChild);
					if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
					newChild = key.call(newChild);
					return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
				}
				if ("function" === typeof newChild.then) return reconcileChildFibersImpl(returnFiber, currentFirstChild, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return reconcileChildFibersImpl(returnFiber, currentFirstChild, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
		}
		return function(returnFiber, currentFirstChild, newChild, lanes) {
			try {
				thenableIndexCounter$1 = 0;
				var firstChildFiber = reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
				thenableState$1 = null;
				return firstChildFiber;
			} catch (x) {
				if (x === SuspenseException || x === SuspenseActionException) throw x;
				var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
				fiber.lanes = lanes;
				fiber.return = returnFiber;
				return fiber;
			}
		};
	}
	var reconcileChildFibers = createChildReconciler(!0);
	var mountChildFibers = createChildReconciler(!1);
	var hasForceUpdate = !1;
	function initializeUpdateQueue(fiber) {
		fiber.updateQueue = {
			baseState: fiber.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function cloneUpdateQueue(current, workInProgress) {
		current = current.updateQueue;
		workInProgress.updateQueue === current && (workInProgress.updateQueue = {
			baseState: current.baseState,
			firstBaseUpdate: current.firstBaseUpdate,
			lastBaseUpdate: current.lastBaseUpdate,
			shared: current.shared,
			callbacks: null
		});
	}
	function createUpdate(lane) {
		return {
			lane,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function enqueueUpdate(fiber, update, lane) {
		var updateQueue = fiber.updateQueue;
		if (null === updateQueue) return null;
		updateQueue = updateQueue.shared;
		if (0 !== (executionContext & 2)) {
			var pending = updateQueue.pending;
			null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
			updateQueue.pending = update;
			update = getRootForUpdatedFiber(fiber);
			markUpdateLaneFromFiberToRoot(fiber, null, lane);
			return update;
		}
		enqueueUpdate$1(fiber, updateQueue, update, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
		fiber = fiber.updateQueue;
		if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
			var queueLanes = fiber.lanes;
			queueLanes &= root.pendingLanes;
			lane |= queueLanes;
			fiber.lanes = lane;
			markRootEntangled(root, lane);
		}
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
		var queue = workInProgress.updateQueue, current = workInProgress.alternate;
		if (null !== current && (current = current.updateQueue, queue === current)) {
			var newFirst = null, newLast = null;
			queue = queue.firstBaseUpdate;
			if (null !== queue) {
				do {
					var clone = {
						lane: queue.lane,
						tag: queue.tag,
						payload: queue.payload,
						callback: null,
						next: null
					};
					null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
					queue = queue.next;
				} while (null !== queue);
				null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
			} else newFirst = newLast = capturedUpdate;
			queue = {
				baseState: current.baseState,
				firstBaseUpdate: newFirst,
				lastBaseUpdate: newLast,
				shared: current.shared,
				callbacks: current.callbacks
			};
			workInProgress.updateQueue = queue;
			return;
		}
		workInProgress = queue.lastBaseUpdate;
		null === workInProgress ? queue.firstBaseUpdate = capturedUpdate : workInProgress.next = capturedUpdate;
		queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = !1;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
		if (didReadFromEntangledAsyncAction) {
			var entangledActionThenable = currentEntangledActionThenable;
			if (null !== entangledActionThenable) throw entangledActionThenable;
		}
	}
	function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes) {
		didReadFromEntangledAsyncAction = !1;
		var queue = workInProgress$jscomp$0.updateQueue;
		hasForceUpdate = !1;
		var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
		if (null !== pendingQueue) {
			queue.shared.pending = null;
			var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
			lastPendingUpdate.next = null;
			null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
			lastBaseUpdate = lastPendingUpdate;
			var current = workInProgress$jscomp$0.alternate;
			null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
		}
		if (null !== firstBaseUpdate) {
			var newState = queue.baseState;
			lastBaseUpdate = 0;
			current = firstPendingUpdate = lastPendingUpdate = null;
			pendingQueue = firstBaseUpdate;
			do {
				var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
				if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
					0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = !0);
					null !== current && (current = current.next = {
						lane: 0,
						tag: pendingQueue.tag,
						payload: pendingQueue.payload,
						callback: null,
						next: null
					});
					a: {
						var workInProgress = workInProgress$jscomp$0, update = pendingQueue;
						updateLane = props;
						var instance = instance$jscomp$0;
						switch (update.tag) {
							case 1:
								workInProgress = update.payload;
								if ("function" === typeof workInProgress) {
									newState = workInProgress.call(instance, newState, updateLane);
									break a;
								}
								newState = workInProgress;
								break a;
							case 3: workInProgress.flags = workInProgress.flags & -65537 | 128;
							case 0:
								workInProgress = update.payload;
								updateLane = "function" === typeof workInProgress ? workInProgress.call(instance, newState, updateLane) : workInProgress;
								if (null === updateLane || void 0 === updateLane) break a;
								newState = assign({}, newState, updateLane);
								break a;
							case 2: hasForceUpdate = !0;
						}
					}
					updateLane = pendingQueue.callback;
					null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
				} else isHiddenUpdate = {
					lane: updateLane,
					tag: pendingQueue.tag,
					payload: pendingQueue.payload,
					callback: pendingQueue.callback,
					next: null
				}, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
				pendingQueue = pendingQueue.next;
				if (null === pendingQueue) if (pendingQueue = queue.shared.pending, null === pendingQueue) break;
				else isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
			} while (1);
			null === current && (lastPendingUpdate = newState);
			queue.baseState = lastPendingUpdate;
			queue.firstBaseUpdate = firstPendingUpdate;
			queue.lastBaseUpdate = current;
			null === firstBaseUpdate && (queue.shared.lanes = 0);
			workInProgressRootSkippedLanes |= lastBaseUpdate;
			workInProgress$jscomp$0.lanes = lastBaseUpdate;
			workInProgress$jscomp$0.memoizedState = newState;
		}
	}
	function callCallback(callback, context) {
		if ("function" !== typeof callback) throw Error(formatProdErrorMessage(191, callback));
		callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
		var callbacks = updateQueue.callbacks;
		if (null !== callbacks) for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++) callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null);
	var prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
		fiber = entangledRenderLanes;
		push(prevEntangledRenderLanesCursor, fiber);
		push(currentTreeHiddenStackCursor, context);
		entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
		push(prevEntangledRenderLanesCursor, entangledRenderLanes);
		push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
		entangledRenderLanes = prevEntangledRenderLanesCursor.current;
		pop(currentTreeHiddenStackCursor);
		pop(prevEntangledRenderLanesCursor);
	}
	var suspenseHandlerStackCursor = createCursor(null);
	var shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
		var current = handler.alternate;
		push(suspenseStackCursor, suspenseStackCursor.current & 1);
		push(suspenseHandlerStackCursor, handler);
		null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushDehydratedActivitySuspenseHandler(fiber) {
		push(suspenseStackCursor, suspenseStackCursor.current);
		push(suspenseHandlerStackCursor, fiber);
		null === shellBoundary && (shellBoundary = fiber);
	}
	function pushOffscreenSuspenseHandler(fiber) {
		22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack(fiber);
	}
	function reuseSuspenseHandlerOnStack() {
		push(suspenseStackCursor, suspenseStackCursor.current);
		push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
		pop(suspenseHandlerStackCursor);
		shellBoundary === fiber && (shellBoundary = null);
		pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
		for (var node = row; null !== node;) {
			if (13 === node.tag) {
				var state = node.memoizedState;
				if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state))) return node;
			} else if (19 === node.tag && ("forwards" === node.memoizedProps.revealOrder || "backwards" === node.memoizedProps.revealOrder || "unstable_legacy-backwards" === node.memoizedProps.revealOrder || "together" === node.memoizedProps.revealOrder)) {
				if (0 !== (node.flags & 128)) return node;
			} else if (null !== node.child) {
				node.child.return = node;
				node = node.child;
				continue;
			}
			if (node === row) break;
			for (; null === node.sibling;) {
				if (null === node.return || node.return === row) return null;
				node = node.return;
			}
			node.sibling.return = node.return;
			node = node.sibling;
		}
		return null;
	}
	var renderLanes = 0;
	var currentlyRenderingFiber = null;
	var currentHook = null;
	var workInProgressHook = null;
	var didScheduleRenderPhaseUpdate = !1;
	var didScheduleRenderPhaseUpdateDuringThisPass = !1;
	var shouldDoubleInvokeUserFnsInHooksDEV = !1;
	var localIdCounter = 0;
	var thenableIndexCounter = 0;
	var thenableState = null;
	var globalClientIdCounter = 0;
	function throwInvalidHookError() {
		throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
		if (null === prevDeps) return !1;
		for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
		return !0;
	}
	function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderLanes) {
		renderLanes = nextRenderLanes;
		currentlyRenderingFiber = workInProgress;
		workInProgress.memoizedState = null;
		workInProgress.updateQueue = null;
		workInProgress.lanes = 0;
		ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
		shouldDoubleInvokeUserFnsInHooksDEV = !1;
		nextRenderLanes = Component(props, secondArg);
		shouldDoubleInvokeUserFnsInHooksDEV = !1;
		didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(workInProgress, Component, props, secondArg));
		finishRenderingHooks(current);
		return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
		ReactSharedInternals.H = ContextOnlyDispatcher;
		var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
		renderLanes = 0;
		workInProgressHook = currentHook = currentlyRenderingFiber = null;
		didScheduleRenderPhaseUpdate = !1;
		thenableIndexCounter = 0;
		thenableState = null;
		if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
		null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = !0));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
		currentlyRenderingFiber = workInProgress;
		var numberOfReRenders = 0;
		do {
			didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
			thenableIndexCounter = 0;
			didScheduleRenderPhaseUpdateDuringThisPass = !1;
			if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
			numberOfReRenders += 1;
			workInProgressHook = currentHook = null;
			if (null != workInProgress.updateQueue) {
				var children = workInProgress.updateQueue;
				children.lastEffect = null;
				children.events = null;
				children.stores = null;
				null != children.memoCache && (children.memoCache.index = 0);
			}
			ReactSharedInternals.H = HooksDispatcherOnRerender;
			children = Component(props, secondArg);
		} while (didScheduleRenderPhaseUpdateDuringThisPass);
		return children;
	}
	function TransitionAwareHostComponent() {
		var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
		maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
		dispatcher = dispatcher.useState()[0];
		(null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
		return maybeThenable;
	}
	function checkDidRenderIdHook() {
		var didRenderIdHook = 0 !== localIdCounter;
		localIdCounter = 0;
		return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
		workInProgress.updateQueue = current.updateQueue;
		workInProgress.flags &= -2053;
		current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
		if (didScheduleRenderPhaseUpdate) {
			for (workInProgress = workInProgress.memoizedState; null !== workInProgress;) {
				var queue = workInProgress.queue;
				null !== queue && (queue.pending = null);
				workInProgress = workInProgress.next;
			}
			didScheduleRenderPhaseUpdate = !1;
		}
		renderLanes = 0;
		workInProgressHook = currentHook = currentlyRenderingFiber = null;
		didScheduleRenderPhaseUpdateDuringThisPass = !1;
		thenableIndexCounter = localIdCounter = 0;
		thenableState = null;
	}
	function mountWorkInProgressHook() {
		var hook = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
		return workInProgressHook;
	}
	function updateWorkInProgressHook() {
		if (null === currentHook) {
			var nextCurrentHook = currentlyRenderingFiber.alternate;
			nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
		} else nextCurrentHook = currentHook.next;
		var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
		if (null !== nextWorkInProgressHook) workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
		else {
			if (null === nextCurrentHook) {
				if (null === currentlyRenderingFiber.alternate) throw Error(formatProdErrorMessage(467));
				throw Error(formatProdErrorMessage(310));
			}
			currentHook = nextCurrentHook;
			nextCurrentHook = {
				memoizedState: currentHook.memoizedState,
				baseState: currentHook.baseState,
				baseQueue: currentHook.baseQueue,
				queue: currentHook.queue,
				next: null
			};
			null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
		}
		return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function useThenable(thenable) {
		var index = thenableIndexCounter;
		thenableIndexCounter += 1;
		null === thenableState && (thenableState = []);
		thenable = trackUsedThenable(thenableState, thenable, index);
		index = currentlyRenderingFiber;
		null === (null === workInProgressHook ? index.memoizedState : workInProgressHook.next) && (index = index.alternate, ReactSharedInternals.H = null === index || null === index.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
		return thenable;
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable) {
			if ("function" === typeof usable.then) return useThenable(usable);
			if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
		}
		throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
		var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
		null !== updateQueue && (memoCache = updateQueue.memoCache);
		if (null == memoCache) {
			var current = currentlyRenderingFiber.alternate;
			null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
				data: current.data.map(function(array) {
					return array.slice();
				}),
				index: 0
			})));
		}
		memoCache ??= {
			data: [],
			index: 0
		};
		null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
		updateQueue.memoCache = memoCache;
		updateQueue = memoCache.data[memoCache.index];
		if (void 0 === updateQueue) for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++) updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
		memoCache.index++;
		return updateQueue;
	}
	function basicStateReducer(state, action) {
		return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
		return updateReducerImpl(updateWorkInProgressHook(), currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
		var queue = hook.queue;
		if (null === queue) throw Error(formatProdErrorMessage(311));
		queue.lastRenderedReducer = reducer;
		var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
		if (null !== pendingQueue) {
			if (null !== baseQueue) {
				var baseFirst = baseQueue.next;
				baseQueue.next = pendingQueue.next;
				pendingQueue.next = baseFirst;
			}
			current.baseQueue = baseQueue = pendingQueue;
			queue.pending = null;
		}
		pendingQueue = hook.baseState;
		if (null === baseQueue) hook.memoizedState = pendingQueue;
		else {
			current = baseQueue.next;
			var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = !1;
			do {
				var updateLane = update.lane & -536870913;
				if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
					var revertLane = update.revertLane;
					if (0 === revertLane) null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: update.action,
						hasEagerState: update.hasEagerState,
						eagerState: update.eagerState,
						next: null
					}), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = !0);
					else if ((renderLanes & revertLane) === revertLane) {
						update = update.next;
						revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = !0);
						continue;
					} else updateLane = {
						lane: 0,
						revertLane: update.revertLane,
						gesture: null,
						action: update.action,
						hasEagerState: update.hasEagerState,
						eagerState: update.eagerState,
						next: null
					}, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
					updateLane = update.action;
					shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
					pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
				} else revertLane = {
					lane: updateLane,
					revertLane: update.revertLane,
					gesture: update.gesture,
					action: update.action,
					hasEagerState: update.hasEagerState,
					eagerState: update.eagerState,
					next: null
				}, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
				update = update.next;
			} while (null !== update && update !== current);
			null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
			if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = !0, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer))) throw reducer;
			hook.memoizedState = pendingQueue;
			hook.baseState = baseFirst;
			hook.baseQueue = newBaseQueueLast;
			queue.lastRenderedState = pendingQueue;
		}
		null === baseQueue && (queue.lanes = 0);
		return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
		var hook = updateWorkInProgressHook(), queue = hook.queue;
		if (null === queue) throw Error(formatProdErrorMessage(311));
		queue.lastRenderedReducer = reducer;
		var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
		if (null !== lastRenderPhaseUpdate) {
			queue.pending = null;
			var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
			do
				newState = reducer(newState, update.action), update = update.next;
			while (update !== lastRenderPhaseUpdate);
			objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
			hook.memoizedState = newState;
			null === hook.baseQueue && (hook.baseState = newState);
			queue.lastRenderedState = newState;
		}
		return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
		if (isHydrating$jscomp$0) {
			if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
			getServerSnapshot = getServerSnapshot();
		} else getServerSnapshot = getSnapshot();
		var snapshotChanged = !objectIs((currentHook || hook).memoizedState, getServerSnapshot);
		snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = !0);
		hook = hook.queue;
		updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [subscribe]);
		if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
			fiber.flags |= 2048;
			pushSimpleEffect(9, { destroy: void 0 }, updateStoreInstance.bind(null, fiber, hook, getServerSnapshot, getSnapshot), null);
			if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
			isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
		}
		return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
		fiber.flags |= 16384;
		fiber = {
			getSnapshot,
			value: renderedSnapshot
		};
		getSnapshot = currentlyRenderingFiber.updateQueue;
		null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
		inst.value = nextSnapshot;
		inst.getSnapshot = getSnapshot;
		checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
		return subscribe(function() {
			checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
		});
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function forceStoreRerender(fiber) {
		var root = enqueueConcurrentRenderForLane(fiber, 2);
		null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
		var hook = mountWorkInProgressHook();
		if ("function" === typeof initialState) {
			var initialStateInitializer = initialState;
			initialState = initialStateInitializer();
			if (shouldDoubleInvokeUserFnsInHooksDEV) {
				setIsStrictModeForDevtools(!0);
				try {
					initialStateInitializer();
				} finally {
					setIsStrictModeForDevtools(!1);
				}
			}
		}
		hook.memoizedState = hook.baseState = initialState;
		hook.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: basicStateReducer,
			lastRenderedState: initialState
		};
		return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
		hook.baseState = passthrough;
		return updateReducerImpl(hook, currentHook, "function" === typeof reducer ? reducer : basicStateReducer);
	}
	function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
		if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
		fiber = actionQueue.action;
		if (null !== fiber) {
			var actionNode = {
				payload,
				action: fiber,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(listener) {
					actionNode.listeners.push(listener);
				}
			};
			null !== ReactSharedInternals.T ? setPendingState(!0) : actionNode.isTransition = !1;
			setState(actionNode);
			setPendingState = actionQueue.pending;
			null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
		}
	}
	function runActionStateAction(actionQueue, node) {
		var action = node.action, payload = node.payload, prevState = actionQueue.state;
		if (node.isTransition) {
			var prevTransition = ReactSharedInternals.T, currentTransition = {};
			ReactSharedInternals.T = currentTransition;
			try {
				var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
				null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
				handleActionReturnValue(actionQueue, node, returnValue);
			} catch (error) {
				onActionError(actionQueue, node, error);
			} finally {
				null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
			}
		} else try {
			prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
		} catch (error$66) {
			onActionError(actionQueue, node, error$66);
		}
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
		null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(function(nextState) {
			onActionSuccess(actionQueue, node, nextState);
		}, function(error) {
			return onActionError(actionQueue, node, error);
		}) : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
		actionNode.status = "fulfilled";
		actionNode.value = nextState;
		notifyActionListeners(actionNode);
		actionQueue.state = nextState;
		actionNode = actionQueue.pending;
		null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
		var last = actionQueue.pending;
		actionQueue.pending = null;
		if (null !== last) {
			last = last.next;
			do
				actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
			while (actionNode !== last);
		}
		actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
		actionNode = actionNode.listeners;
		for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
		return newState;
	}
	function mountActionState(action, initialStateProp) {
		if (isHydrating) {
			var ssrFormState = workInProgressRoot.formState;
			if (null !== ssrFormState) {
				a: {
					var JSCompiler_inline_result = currentlyRenderingFiber;
					if (isHydrating) {
						if (nextHydratableInstance) {
							b: {
								var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
								for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType;) {
									if (!inRootOrSingleton) {
										JSCompiler_inline_result$jscomp$0 = null;
										break b;
									}
									JSCompiler_inline_result$jscomp$0 = getNextHydratable(JSCompiler_inline_result$jscomp$0.nextSibling);
									if (null === JSCompiler_inline_result$jscomp$0) {
										JSCompiler_inline_result$jscomp$0 = null;
										break b;
									}
								}
								inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
								JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
							}
							if (JSCompiler_inline_result$jscomp$0) {
								nextHydratableInstance = getNextHydratable(JSCompiler_inline_result$jscomp$0.nextSibling);
								JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
								break a;
							}
						}
						throwOnHydrationMismatch(JSCompiler_inline_result);
					}
					JSCompiler_inline_result = !1;
				}
				JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
			}
		}
		ssrFormState = mountWorkInProgressHook();
		ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
		JSCompiler_inline_result = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: actionStateReducer,
			lastRenderedState: initialStateProp
		};
		ssrFormState.queue = JSCompiler_inline_result;
		ssrFormState = dispatchSetState.bind(null, currentlyRenderingFiber, JSCompiler_inline_result);
		JSCompiler_inline_result.dispatch = ssrFormState;
		JSCompiler_inline_result = mountStateImpl(!1);
		inRootOrSingleton = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !1, JSCompiler_inline_result.queue);
		JSCompiler_inline_result = mountWorkInProgressHook();
		JSCompiler_inline_result$jscomp$0 = {
			state: initialStateProp,
			dispatch: null,
			action,
			pending: null
		};
		JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
		ssrFormState = dispatchActionState.bind(null, currentlyRenderingFiber, JSCompiler_inline_result$jscomp$0, inRootOrSingleton, ssrFormState);
		JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
		JSCompiler_inline_result.memoizedState = action;
		return [
			initialStateProp,
			ssrFormState,
			!1
		];
	}
	function updateActionState(action) {
		return updateActionStateImpl(updateWorkInProgressHook(), currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
		currentStateHook = updateReducerImpl(stateHook, currentStateHook, actionStateReducer)[0];
		stateHook = updateReducer(basicStateReducer)[0];
		if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then) try {
			var state = useThenable(currentStateHook);
		} catch (x) {
			if (x === SuspenseException) throw SuspenseActionException;
			throw x;
		}
		else state = currentStateHook;
		currentStateHook = updateWorkInProgressHook();
		var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
		action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(9, { destroy: void 0 }, actionStateActionEffect.bind(null, actionQueue, action), null));
		return [
			state,
			dispatch,
			stateHook
		];
	}
	function actionStateActionEffect(actionQueue, action) {
		actionQueue.action = action;
	}
	function rerenderActionState(action) {
		var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
		if (null !== currentStateHook) return updateActionStateImpl(stateHook, currentStateHook, action);
		updateWorkInProgressHook();
		stateHook = stateHook.memoizedState;
		currentStateHook = updateWorkInProgressHook();
		var dispatch = currentStateHook.queue.dispatch;
		currentStateHook.memoizedState = action;
		return [
			stateHook,
			dispatch,
			!1
		];
	}
	function pushSimpleEffect(tag, inst, create, deps) {
		tag = {
			tag,
			create,
			deps,
			inst,
			next: null
		};
		inst = currentlyRenderingFiber.updateQueue;
		null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
		create = inst.lastEffect;
		null === create ? inst.lastEffect = tag.next = tag : (deps = create.next, create.next = tag, tag.next = deps, inst.lastEffect = tag);
		return tag;
	}
	function updateRef() {
		return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
		var hook = mountWorkInProgressHook();
		currentlyRenderingFiber.flags |= fiberFlags;
		hook.memoizedState = pushSimpleEffect(1 | hookFlags, { destroy: void 0 }, create, void 0 === deps ? null : deps);
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var inst = hook.memoizedState.inst;
		null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(1 | hookFlags, inst, create, deps));
	}
	function mountEffect(create, deps) {
		mountEffectImpl(8390656, 8, create, deps);
	}
	function updateEffect(create, deps) {
		updateEffectImpl(2048, 8, create, deps);
	}
	function useEffectEventImpl(payload) {
		currentlyRenderingFiber.flags |= 4;
		var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
		if (null === componentUpdateQueue) componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
		else {
			var events = componentUpdateQueue.events;
			null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
		}
	}
	function updateEvent(callback) {
		var ref = updateWorkInProgressHook().memoizedState;
		useEffectEventImpl({
			ref,
			nextImpl: callback
		});
		return function() {
			if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
			return ref.impl.apply(void 0, arguments);
		};
	}
	function updateInsertionEffect(create, deps) {
		return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
		return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
		if ("function" === typeof ref) {
			create = create();
			var refCleanup = ref(create);
			return function() {
				"function" === typeof refCleanup ? refCleanup() : ref(null);
			};
		}
		if (null !== ref && void 0 !== ref) return create = create(), ref.current = create, function() {
			ref.current = null;
		};
	}
	function updateImperativeHandle(ref, create, deps) {
		deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
		updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var prevState = hook.memoizedState;
		if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
		hook.memoizedState = [callback, deps];
		return callback;
	}
	function updateMemo(nextCreate, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var prevState = hook.memoizedState;
		if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
		prevState = nextCreate();
		if (shouldDoubleInvokeUserFnsInHooksDEV) {
			setIsStrictModeForDevtools(!0);
			try {
				nextCreate();
			} finally {
				setIsStrictModeForDevtools(!1);
			}
		}
		hook.memoizedState = [prevState, deps];
		return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
		if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930)) return hook.memoizedState = value;
		hook.memoizedState = initialValue;
		hook = requestDeferredLane();
		currentlyRenderingFiber.lanes |= hook;
		workInProgressRootSkippedLanes |= hook;
		return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
		if (objectIs(value, prevValue)) return value;
		if (null !== currentTreeHiddenStackCursor.current) return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = !0), hook;
		if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930)) return didReceiveUpdate = !0, hook.memoizedState = value;
		hook = requestDeferredLane();
		currentlyRenderingFiber.lanes |= hook;
		workInProgressRootSkippedLanes |= hook;
		return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
		var previousPriority = ReactDOMSharedInternals.p;
		ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		dispatchOptimisticSetState(fiber, !1, queue, pendingState);
		try {
			var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) dispatchSetStateInternal(fiber, queue, chainThenableValue(returnValue, finishedState), requestUpdateLane(fiber));
			else dispatchSetStateInternal(fiber, queue, finishedState, requestUpdateLane(fiber));
		} catch (error) {
			dispatchSetStateInternal(fiber, queue, {
				then: function() {},
				status: "rejected",
				reason: error
			}, requestUpdateLane());
		} finally {
			ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	}
	function noop() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
		if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
		var queue = ensureFormComponentIsStateful(formFiber).queue;
		startTransition(formFiber, queue, pendingState, sharedNotPendingObject, null === action ? noop : function() {
			requestFormReset$1(formFiber);
			return action(formData);
		});
	}
	function ensureFormComponentIsStateful(formFiber) {
		var existingStateHook = formFiber.memoizedState;
		if (null !== existingStateHook) return existingStateHook;
		existingStateHook = {
			memoizedState: sharedNotPendingObject,
			baseState: sharedNotPendingObject,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: sharedNotPendingObject
			},
			next: null
		};
		var initialResetState = {};
		existingStateHook.next = {
			memoizedState: initialResetState,
			baseState: initialResetState,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: initialResetState
			},
			next: null
		};
		formFiber.memoizedState = existingStateHook;
		formFiber = formFiber.alternate;
		null !== formFiber && (formFiber.memoizedState = existingStateHook);
		return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
		var stateHook = ensureFormComponentIsStateful(formFiber);
		null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
		dispatchSetStateInternal(formFiber, stateHook.next.queue, {}, requestUpdateLane());
	}
	function useHostTransitionStatus() {
		return readContext(HostTransitionContext);
	}
	function updateId() {
		return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
		return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
		for (var provider = fiber.return; null !== provider;) {
			switch (provider.tag) {
				case 24:
				case 3:
					var lane = requestUpdateLane();
					fiber = createUpdate(lane);
					var root$69 = enqueueUpdate(provider, fiber, lane);
					null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
					provider = { cache: createCache() };
					fiber.payload = provider;
					return;
			}
			provider = provider.return;
		}
	}
	function dispatchReducerAction(fiber, queue, action) {
		var lane = requestUpdateLane();
		action = {
			lane,
			revertLane: 0,
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
		dispatchSetStateInternal(fiber, queue, action, requestUpdateLane());
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
		var update = {
			lane,
			revertLane: 0,
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
		else {
			var alternate = fiber.alternate;
			if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate)) try {
				var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
				update.hasEagerState = !0;
				update.eagerState = eagerState;
				if (objectIs(eagerState, currentState)) return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), !1;
			} catch (error) {}
			action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
			if (null !== action) return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), !0;
		}
		return !1;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
		action = {
			lane: 2,
			revertLane: requestTransitionLane(),
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (isRenderPhaseUpdate(fiber)) {
			if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
		} else throwIfDuringRender = enqueueConcurrentHookUpdate(fiber, queue, action, 2), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
		var alternate = fiber.alternate;
		return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
	}
	function enqueueRenderPhaseUpdate(queue, update) {
		didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = !0;
		var pending = queue.pending;
		null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
		queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
		if (0 !== (lane & 4194048)) {
			var queueLanes = queue.lanes;
			queueLanes &= root.pendingLanes;
			lane |= queueLanes;
			queue.lanes = lane;
			markRootEntangled(root, lane);
		}
	}
	var ContextOnlyDispatcher = {
		readContext,
		use,
		useCallback: throwInvalidHookError,
		useContext: throwInvalidHookError,
		useEffect: throwInvalidHookError,
		useImperativeHandle: throwInvalidHookError,
		useLayoutEffect: throwInvalidHookError,
		useInsertionEffect: throwInvalidHookError,
		useMemo: throwInvalidHookError,
		useReducer: throwInvalidHookError,
		useRef: throwInvalidHookError,
		useState: throwInvalidHookError,
		useDebugValue: throwInvalidHookError,
		useDeferredValue: throwInvalidHookError,
		useTransition: throwInvalidHookError,
		useSyncExternalStore: throwInvalidHookError,
		useId: throwInvalidHookError,
		useHostTransitionStatus: throwInvalidHookError,
		useFormState: throwInvalidHookError,
		useActionState: throwInvalidHookError,
		useOptimistic: throwInvalidHookError,
		useMemoCache: throwInvalidHookError,
		useCacheRefresh: throwInvalidHookError
	};
	ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
	var HooksDispatcherOnMount = {
		readContext,
		use,
		useCallback: function(callback, deps) {
			mountWorkInProgressHook().memoizedState = [callback, void 0 === deps ? null : deps];
			return callback;
		},
		useContext: readContext,
		useEffect: mountEffect,
		useImperativeHandle: function(ref, create, deps) {
			deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
			mountEffectImpl(4194308, 4, imperativeHandleEffect.bind(null, create, ref), deps);
		},
		useLayoutEffect: function(create, deps) {
			return mountEffectImpl(4194308, 4, create, deps);
		},
		useInsertionEffect: function(create, deps) {
			mountEffectImpl(4, 2, create, deps);
		},
		useMemo: function(nextCreate, deps) {
			var hook = mountWorkInProgressHook();
			deps = void 0 === deps ? null : deps;
			var nextValue = nextCreate();
			if (shouldDoubleInvokeUserFnsInHooksDEV) {
				setIsStrictModeForDevtools(!0);
				try {
					nextCreate();
				} finally {
					setIsStrictModeForDevtools(!1);
				}
			}
			hook.memoizedState = [nextValue, deps];
			return nextValue;
		},
		useReducer: function(reducer, initialArg, init) {
			var hook = mountWorkInProgressHook();
			if (void 0 !== init) {
				var initialState = init(initialArg);
				if (shouldDoubleInvokeUserFnsInHooksDEV) {
					setIsStrictModeForDevtools(!0);
					try {
						init(initialArg);
					} finally {
						setIsStrictModeForDevtools(!1);
					}
				}
			} else initialState = initialArg;
			hook.memoizedState = hook.baseState = initialState;
			reducer = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: reducer,
				lastRenderedState: initialState
			};
			hook.queue = reducer;
			reducer = reducer.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber, reducer);
			return [hook.memoizedState, reducer];
		},
		useRef: function(initialValue) {
			var hook = mountWorkInProgressHook();
			initialValue = { current: initialValue };
			return hook.memoizedState = initialValue;
		},
		useState: function(initialState) {
			initialState = mountStateImpl(initialState);
			var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
			queue.dispatch = dispatch;
			return [initialState.memoizedState, dispatch];
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			return mountDeferredValueImpl(mountWorkInProgressHook(), value, initialValue);
		},
		useTransition: function() {
			var stateHook = mountStateImpl(!1);
			stateHook = startTransition.bind(null, currentlyRenderingFiber, stateHook.queue, !0, !1);
			mountWorkInProgressHook().memoizedState = stateHook;
			return [!1, stateHook];
		},
		useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
			var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
			if (isHydrating) {
				if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
				getServerSnapshot = getServerSnapshot();
			} else {
				getServerSnapshot = getSnapshot();
				if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
				0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
			}
			hook.memoizedState = getServerSnapshot;
			var inst = {
				value: getServerSnapshot,
				getSnapshot
			};
			hook.queue = inst;
			mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
			fiber.flags |= 2048;
			pushSimpleEffect(9, { destroy: void 0 }, updateStoreInstance.bind(null, fiber, inst, getServerSnapshot, getSnapshot), null);
			return getServerSnapshot;
		},
		useId: function() {
			var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
			if (isHydrating) {
				var JSCompiler_inline_result = treeContextOverflow;
				var idWithLeadingBit = treeContextId;
				JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
				identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
				JSCompiler_inline_result = localIdCounter++;
				0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
				identifierPrefix += "_";
			} else JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
			return hook.memoizedState = identifierPrefix;
		},
		useHostTransitionStatus,
		useFormState: mountActionState,
		useActionState: mountActionState,
		useOptimistic: function(passthrough) {
			var hook = mountWorkInProgressHook();
			hook.memoizedState = hook.baseState = passthrough;
			var queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			hook.queue = queue;
			hook = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !0, queue);
			queue.dispatch = hook;
			return [passthrough, hook];
		},
		useMemoCache,
		useCacheRefresh: function() {
			return mountWorkInProgressHook().memoizedState = refreshCache.bind(null, currentlyRenderingFiber);
		},
		useEffectEvent: function(callback) {
			var hook = mountWorkInProgressHook(), ref = { impl: callback };
			hook.memoizedState = ref;
			return function() {
				if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
				return ref.impl.apply(void 0, arguments);
			};
		}
	};
	var HooksDispatcherOnUpdate = {
		readContext,
		use,
		useCallback: updateCallback,
		useContext: readContext,
		useEffect: updateEffect,
		useImperativeHandle: updateImperativeHandle,
		useInsertionEffect: updateInsertionEffect,
		useLayoutEffect: updateLayoutEffect,
		useMemo: updateMemo,
		useReducer: updateReducer,
		useRef: updateRef,
		useState: function() {
			return updateReducer(basicStateReducer);
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			return updateDeferredValueImpl(updateWorkInProgressHook(), currentHook.memoizedState, value, initialValue);
		},
		useTransition: function() {
			var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
			return ["boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable), start];
		},
		useSyncExternalStore: updateSyncExternalStore,
		useId: updateId,
		useHostTransitionStatus,
		useFormState: updateActionState,
		useActionState: updateActionState,
		useOptimistic: function(passthrough, reducer) {
			return updateOptimisticImpl(updateWorkInProgressHook(), currentHook, passthrough, reducer);
		},
		useMemoCache,
		useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
	var HooksDispatcherOnRerender = {
		readContext,
		use,
		useCallback: updateCallback,
		useContext: readContext,
		useEffect: updateEffect,
		useImperativeHandle: updateImperativeHandle,
		useInsertionEffect: updateInsertionEffect,
		useLayoutEffect: updateLayoutEffect,
		useMemo: updateMemo,
		useReducer: rerenderReducer,
		useRef: updateRef,
		useState: function() {
			return rerenderReducer(basicStateReducer);
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			var hook = updateWorkInProgressHook();
			return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(hook, currentHook.memoizedState, value, initialValue);
		},
		useTransition: function() {
			var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
			return ["boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable), start];
		},
		useSyncExternalStore: updateSyncExternalStore,
		useId: updateId,
		useHostTransitionStatus,
		useFormState: rerenderActionState,
		useActionState: rerenderActionState,
		useOptimistic: function(passthrough, reducer) {
			var hook = updateWorkInProgressHook();
			if (null !== currentHook) return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
			hook.baseState = passthrough;
			return [passthrough, hook.queue.dispatch];
		},
		useMemoCache,
		useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnRerender.useEffectEvent = updateEvent;
	function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
		ctor = workInProgress.memoizedState;
		getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
		getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
		workInProgress.memoizedState = getDerivedStateFromProps;
		0 === workInProgress.lanes && (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
		enqueueSetState: function(inst, payload, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.payload = payload;
			void 0 !== callback && null !== callback && (update.callback = callback);
			payload = enqueueUpdate(inst, update, lane);
			null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
		},
		enqueueReplaceState: function(inst, payload, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.tag = 1;
			update.payload = payload;
			void 0 !== callback && null !== callback && (update.callback = callback);
			payload = enqueueUpdate(inst, update, lane);
			null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
		},
		enqueueForceUpdate: function(inst, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.tag = 2;
			void 0 !== callback && null !== callback && (update.callback = callback);
			callback = enqueueUpdate(inst, update, lane);
			null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
		}
	};
	function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
		workInProgress = workInProgress.stateNode;
		return "function" === typeof workInProgress.shouldComponentUpdate ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : !0;
	}
	function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
		workInProgress = instance.state;
		"function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
		"function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
		instance.state !== workInProgress && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
		var newProps = baseProps;
		if ("ref" in baseProps) {
			newProps = {};
			for (var propName in baseProps) "ref" !== propName && (newProps[propName] = baseProps[propName]);
		}
		if (Component = Component.defaultProps) {
			newProps === baseProps && (newProps = assign({}, newProps));
			for (var propName$73 in Component) void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
		}
		return newProps;
	}
	function defaultOnUncaughtError(error) {
		reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
		console.error(error);
	}
	function defaultOnRecoverableError(error) {
		reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
		try {
			var onUncaughtError = root.onUncaughtError;
			onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
		} catch (e$74) {
			setTimeout(function() {
				throw e$74;
			});
		}
	}
	function logCaughtError(root, boundary, errorInfo) {
		try {
			var onCaughtError = root.onCaughtError;
			onCaughtError(errorInfo.value, {
				componentStack: errorInfo.stack,
				errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
			});
		} catch (e$75) {
			setTimeout(function() {
				throw e$75;
			});
		}
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
		lane = createUpdate(lane);
		lane.tag = 3;
		lane.payload = { element: null };
		lane.callback = function() {
			logUncaughtError(root, errorInfo);
		};
		return lane;
	}
	function createClassErrorUpdate(lane) {
		lane = createUpdate(lane);
		lane.tag = 3;
		return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
		var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
		if ("function" === typeof getDerivedStateFromError) {
			var error = errorInfo.value;
			update.payload = function() {
				return getDerivedStateFromError(error);
			};
			update.callback = function() {
				logCaughtError(root, fiber, errorInfo);
			};
		}
		var inst = fiber.stateNode;
		null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
			logCaughtError(root, fiber, errorInfo);
			"function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
			var stack = errorInfo.stack;
			this.componentDidCatch(errorInfo.value, { componentStack: null !== stack ? stack : "" });
		});
	}
	function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
		sourceFiber.flags |= 32768;
		if (null !== value && "object" === typeof value && "function" === typeof value.then) {
			returnFiber = sourceFiber.alternate;
			null !== returnFiber && propagateParentContextChanges(returnFiber, sourceFiber, rootRenderLanes, !0);
			sourceFiber = suspenseHandlerStackCursor.current;
			if (null !== sourceFiber) {
				switch (sourceFiber.tag) {
					case 31:
					case 13: return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root, value, rootRenderLanes)), !1;
					case 22: return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([value])
					}, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root, value, rootRenderLanes)), !1;
				}
				throw Error(formatProdErrorMessage(435, sourceFiber.tag));
			}
			attachPingListener(root, value, rootRenderLanes);
			renderDidSuspendDelayIfPossible();
			return !1;
		}
		if (isHydrating) return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), { cause: value }), queueHydrationError(createCapturedValueAtFiber(returnFiber, sourceFiber))), root = root.current.alternate, root.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(root.stateNode, value, rootRenderLanes), enqueueCapturedUpdate(root, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), !1;
		var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
		wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
		null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
		4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
		if (null === returnFiber) return !0;
		value = createCapturedValueAtFiber(value, sourceFiber);
		sourceFiber = returnFiber;
		do {
			switch (sourceFiber.tag) {
				case 3: return sourceFiber.flags |= 65536, root = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root, root = createRootErrorUpdate(sourceFiber.stateNode, value, root), enqueueCapturedUpdate(sourceFiber, root), !1;
				case 1: if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))) return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(rootRenderLanes, root, sourceFiber, value), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), !1;
			}
			sourceFiber = sourceFiber.return;
		} while (null !== sourceFiber);
		return !1;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461));
	var didReceiveUpdate = !1;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
		workInProgress.child = null === current ? mountChildFibers(workInProgress, null, nextChildren, renderLanes) : reconcileChildFibers(workInProgress, current.child, nextChildren, renderLanes);
	}
	function updateForwardRef(current, workInProgress, Component, nextProps, renderLanes) {
		Component = Component.render;
		var ref = workInProgress.ref;
		if ("ref" in nextProps) {
			var propsWithoutRef = {};
			for (var key in nextProps) "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
		} else propsWithoutRef = nextProps;
		prepareToReadContext(workInProgress);
		nextProps = renderWithHooks(current, workInProgress, Component, propsWithoutRef, ref, renderLanes);
		key = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && key && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		return workInProgress.child;
	}
	function updateMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
		if (null === current) {
			var type = Component.type;
			if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare) return workInProgress.tag = 15, workInProgress.type = type, updateSimpleMemoComponent(current, workInProgress, type, nextProps, renderLanes);
			current = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);
			current.ref = workInProgress.ref;
			current.return = workInProgress;
			return workInProgress.child = current;
		}
		type = current.child;
		if (!checkScheduledUpdateOrContext(current, renderLanes)) {
			var prevProps = type.memoizedProps;
			Component = Component.compare;
			Component = null !== Component ? Component : shallowEqual;
			if (Component(prevProps, nextProps) && current.ref === workInProgress.ref) return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		}
		workInProgress.flags |= 1;
		current = createWorkInProgress(type, nextProps);
		current.ref = workInProgress.ref;
		current.return = workInProgress;
		return workInProgress.child = current;
	}
	function updateSimpleMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
		if (null !== current) {
			var prevProps = current.memoizedProps;
			if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref) if (didReceiveUpdate = !1, workInProgress.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes)) 0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
			else return workInProgress.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		}
		return updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes);
	}
	function updateOffscreenComponent(current, workInProgress, renderLanes, nextProps) {
		var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
		null === current && null === workInProgress.stateNode && (workInProgress.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		});
		if ("hidden" === nextProps.mode) {
			if (0 !== (workInProgress.flags & 128)) {
				prevState = null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
				if (null !== current) {
					nextProps = workInProgress.child = current.child;
					for (nextChildren = 0; null !== nextProps;) nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
					nextProps = nextChildren & ~prevState;
				} else nextProps = 0, workInProgress.child = null;
				return deferHiddenOffscreenComponent(current, workInProgress, prevState, renderLanes, nextProps);
			}
			if (0 !== (renderLanes & 536870912)) workInProgress.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, null !== current && pushTransition(workInProgress, null !== prevState ? prevState.cachePool : null), null !== prevState ? pushHiddenContext(workInProgress, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress);
			else return nextProps = workInProgress.lanes = 536870912, deferHiddenOffscreenComponent(current, workInProgress, null !== prevState ? prevState.baseLanes | renderLanes : renderLanes, renderLanes, nextProps);
		} else null !== prevState ? (pushTransition(workInProgress, prevState.cachePool), pushHiddenContext(workInProgress, prevState), reuseSuspenseHandlerOnStack(workInProgress), workInProgress.memoizedState = null) : (null !== current && pushTransition(workInProgress, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack(workInProgress));
		reconcileChildren(current, workInProgress, nextChildren, renderLanes);
		return workInProgress.child;
	}
	function bailoutOffscreenComponent(current, workInProgress) {
		null !== current && 22 === current.tag || null !== workInProgress.stateNode || (workInProgress.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		});
		return workInProgress.sibling;
	}
	function deferHiddenOffscreenComponent(current, workInProgress, nextBaseLanes, renderLanes, remainingChildLanes) {
		var JSCompiler_inline_result = peekCacheFromPool();
		JSCompiler_inline_result = null === JSCompiler_inline_result ? null : {
			parent: CacheContext._currentValue,
			pool: JSCompiler_inline_result
		};
		workInProgress.memoizedState = {
			baseLanes: nextBaseLanes,
			cachePool: JSCompiler_inline_result
		};
		null !== current && pushTransition(workInProgress, null);
		reuseHiddenContextOnStack();
		pushOffscreenSuspenseHandler(workInProgress);
		null !== current && propagateParentContextChanges(current, workInProgress, renderLanes, !0);
		workInProgress.childLanes = remainingChildLanes;
		return null;
	}
	function mountActivityChildren(workInProgress, nextProps) {
		nextProps = mountWorkInProgressOffscreenFiber({
			mode: nextProps.mode,
			children: nextProps.children
		}, workInProgress.mode);
		nextProps.ref = workInProgress.ref;
		workInProgress.child = nextProps;
		nextProps.return = workInProgress;
		return nextProps;
	}
	function retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes) {
		reconcileChildFibers(workInProgress, current.child, null, renderLanes);
		current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
		current.flags |= 2;
		popSuspenseHandler(workInProgress);
		workInProgress.memoizedState = null;
		return current;
	}
	function updateActivityComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, didSuspend = 0 !== (workInProgress.flags & 128);
		workInProgress.flags &= -129;
		if (null === current) {
			if (isHydrating) {
				if ("hidden" === nextProps.mode) return current = mountActivityChildren(workInProgress, nextProps), workInProgress.lanes = 536870912, bailoutOffscreenComponent(null, current);
				pushDehydratedActivitySuspenseHandler(workInProgress);
				(current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(current, rootOrSingletonContext), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress.memoizedState = {
					dehydrated: current,
					treeContext: null !== treeContextProvider ? {
						id: treeContextId,
						overflow: treeContextOverflow
					} : null,
					retryLane: 536870912,
					hydrationErrors: null
				}, renderLanes = createFiberFromDehydratedFragment(current), renderLanes.return = workInProgress, workInProgress.child = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null)) : current = null;
				if (null === current) throw throwOnHydrationMismatch(workInProgress);
				workInProgress.lanes = 536870912;
				return null;
			}
			return mountActivityChildren(workInProgress, nextProps);
		}
		var prevState = current.memoizedState;
		if (null !== prevState) {
			var dehydrated = prevState.dehydrated;
			pushDehydratedActivitySuspenseHandler(workInProgress);
			if (didSuspend) if (workInProgress.flags & 256) workInProgress.flags &= -257, workInProgress = retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes);
			else if (null !== workInProgress.memoizedState) workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null;
			else throw Error(formatProdErrorMessage(558));
			else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), didSuspend = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || didSuspend) {
				nextProps = workInProgressRoot;
				if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes), 0 !== dehydrated && dehydrated !== prevState.retryLane)) throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
				renderDidSuspendDelayIfPossible();
				workInProgress = retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, rootOrSingletonContext = !1, null !== current && restoreSuspendedTreeContext(workInProgress, current), workInProgress = mountActivityChildren(workInProgress, nextProps), workInProgress.flags |= 4096;
			return workInProgress;
		}
		current = createWorkInProgress(current.child, {
			mode: nextProps.mode,
			children: nextProps.children
		});
		current.ref = workInProgress.ref;
		workInProgress.child = current;
		current.return = workInProgress;
		return current;
	}
	function markRef(current, workInProgress) {
		var ref = workInProgress.ref;
		if (null === ref) null !== current && null !== current.ref && (workInProgress.flags |= 4194816);
		else {
			if ("function" !== typeof ref && "object" !== typeof ref) throw Error(formatProdErrorMessage(284));
			if (null === current || current.ref !== ref) workInProgress.flags |= 4194816;
		}
	}
	function updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes) {
		prepareToReadContext(workInProgress);
		Component = renderWithHooks(current, workInProgress, Component, nextProps, void 0, renderLanes);
		nextProps = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, Component, renderLanes);
		return workInProgress.child;
	}
	function replayFunctionComponent(current, workInProgress, nextProps, Component, secondArg, renderLanes) {
		prepareToReadContext(workInProgress);
		workInProgress.updateQueue = null;
		nextProps = renderWithHooksAgain(workInProgress, Component, nextProps, secondArg);
		finishRenderingHooks(current);
		Component = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && Component && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		return workInProgress.child;
	}
	function updateClassComponent(current, workInProgress, Component, nextProps, renderLanes) {
		prepareToReadContext(workInProgress);
		if (null === workInProgress.stateNode) {
			var context = emptyContextObject, contextType = Component.contextType;
			"object" === typeof contextType && null !== contextType && (context = readContext(contextType));
			context = new Component(nextProps, context);
			workInProgress.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
			context.updater = classComponentUpdater;
			workInProgress.stateNode = context;
			context._reactInternals = workInProgress;
			context = workInProgress.stateNode;
			context.props = nextProps;
			context.state = workInProgress.memoizedState;
			context.refs = {};
			initializeUpdateQueue(workInProgress);
			contextType = Component.contextType;
			context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
			context.state = workInProgress.memoizedState;
			contextType = Component.getDerivedStateFromProps;
			"function" === typeof contextType && (applyDerivedStateFromProps(workInProgress, Component, contextType, nextProps), context.state = workInProgress.memoizedState);
			"function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress, nextProps, context, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress.memoizedState);
			"function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308);
			nextProps = !0;
		} else if (null === current) {
			context = workInProgress.stateNode;
			var unresolvedOldProps = workInProgress.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
			context.props = oldProps;
			var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
			contextType = emptyContextObject;
			"object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
			var getDerivedStateFromProps = Component.getDerivedStateFromProps;
			contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
			unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
			contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(workInProgress, context, nextProps, contextType);
			hasForceUpdate = !1;
			var oldState = workInProgress.memoizedState;
			context.state = oldState;
			processUpdateQueue(workInProgress, nextProps, context, renderLanes);
			suspendIfUpdateReadFromEntangledAsyncAction();
			oldContext = workInProgress.memoizedState;
			unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(workInProgress, Component, getDerivedStateFromProps, nextProps), oldContext = workInProgress.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, oldProps, nextProps, oldState, oldContext, contextType)) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308), nextProps = !1);
		} else {
			context = workInProgress.stateNode;
			cloneUpdateQueue(current, workInProgress);
			contextType = workInProgress.memoizedProps;
			contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
			context.props = contextType$jscomp$0;
			getDerivedStateFromProps = workInProgress.pendingProps;
			oldState = context.context;
			oldContext = Component.contextType;
			oldProps = emptyContextObject;
			"object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
			unresolvedOldProps = Component.getDerivedStateFromProps;
			(oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(workInProgress, context, nextProps, oldProps);
			hasForceUpdate = !1;
			oldState = workInProgress.memoizedState;
			context.state = oldState;
			processUpdateQueue(workInProgress, nextProps, context, renderLanes);
			suspendIfUpdateReadFromEntangledAsyncAction();
			var newState = workInProgress.memoizedState;
			contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(workInProgress, Component, unresolvedOldProps, nextProps), newState = workInProgress.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, contextType$jscomp$0, nextProps, oldState, newState, oldProps) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(nextProps, newState, oldProps)), "function" === typeof context.componentDidUpdate && (workInProgress.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), nextProps = !1);
		}
		context = nextProps;
		markRef(current, workInProgress);
		nextProps = 0 !== (workInProgress.flags & 128);
		context || nextProps ? (context = workInProgress.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress.flags |= 1, null !== current && nextProps ? (workInProgress.child = reconcileChildFibers(workInProgress, current.child, null, renderLanes), workInProgress.child = reconcileChildFibers(workInProgress, null, Component, renderLanes)) : reconcileChildren(current, workInProgress, Component, renderLanes), workInProgress.memoizedState = context.state, current = workInProgress.child) : current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		return current;
	}
	function mountHostRootWithoutHydrating(current, workInProgress, nextChildren, renderLanes) {
		resetHydrationState();
		workInProgress.flags |= 256;
		reconcileChildren(current, workInProgress, nextChildren, renderLanes);
		return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
		return {
			baseLanes: renderLanes,
			cachePool: getSuspendedCache()
		};
	}
	function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes) {
		current = null !== current ? current.childLanes & ~renderLanes : 0;
		primaryTreeDidDefer && (current |= workInProgressDeferredLane);
		return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, showFallback = !1, didSuspend = 0 !== (workInProgress.flags & 128), JSCompiler_temp;
		(JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? !1 : 0 !== (suspenseStackCursor.current & 2));
		JSCompiler_temp && (showFallback = !0, workInProgress.flags &= -129);
		JSCompiler_temp = 0 !== (workInProgress.flags & 32);
		workInProgress.flags &= -33;
		if (null === current) {
			if (isHydrating) {
				showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress) : reuseSuspenseHandlerOnStack(workInProgress);
				(current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(current, rootOrSingletonContext), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress.memoizedState = {
					dehydrated: current,
					treeContext: null !== treeContextProvider ? {
						id: treeContextId,
						overflow: treeContextOverflow
					} : null,
					retryLane: 536870912,
					hydrationErrors: null
				}, renderLanes = createFiberFromDehydratedFragment(current), renderLanes.return = workInProgress, workInProgress.child = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null)) : current = null;
				if (null === current) throw throwOnHydrationMismatch(workInProgress);
				isSuspenseInstanceFallback(current) ? workInProgress.lanes = 32 : workInProgress.lanes = 536870912;
				return null;
			}
			var nextPrimaryChildren = nextProps.children;
			nextProps = nextProps.fallback;
			if (showFallback) return reuseSuspenseHandlerOnStack(workInProgress), showFallback = workInProgress.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber({
				mode: "hidden",
				children: nextPrimaryChildren
			}, showFallback), nextProps = createFiberFromFragment(nextProps, showFallback, renderLanes, null), nextPrimaryChildren.return = workInProgress, nextProps.return = workInProgress, nextPrimaryChildren.sibling = nextProps, workInProgress.child = nextPrimaryChildren, nextProps = workInProgress.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes), nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
			pushPrimaryTreeSuspenseHandler(workInProgress);
			return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
		}
		var prevState = current.memoizedState;
		if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
			if (didSuspend) workInProgress.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags &= -257, workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes)) : null !== workInProgress.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress), workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null) : (reuseSuspenseHandlerOnStack(workInProgress), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress.mode, nextProps = mountWorkInProgressOffscreenFiber({
				mode: "visible",
				children: nextProps.children
			}, showFallback), nextPrimaryChildren = createFiberFromFragment(nextPrimaryChildren, showFallback, renderLanes, null), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress, nextPrimaryChildren.return = workInProgress, nextProps.sibling = nextPrimaryChildren, workInProgress.child = nextProps, reconcileChildFibers(workInProgress, current.child, null, renderLanes), nextProps = workInProgress.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes), nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, workInProgress = bailoutOffscreenComponent(null, nextProps));
			else if (pushPrimaryTreeSuspenseHandler(workInProgress), isSuspenseInstanceFallback(nextPrimaryChildren)) {
				JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
				if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
				JSCompiler_temp = digest;
				nextProps = Error(formatProdErrorMessage(419));
				nextProps.stack = "";
				nextProps.digest = JSCompiler_temp;
				queueHydrationError({
					value: nextProps,
					source: null,
					stack: null
				});
				workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), JSCompiler_temp = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
				JSCompiler_temp = workInProgressRoot;
				if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes), 0 !== nextProps && nextProps !== prevState.retryLane)) throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
				isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
				workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress.flags |= 192, workInProgress.child = current.child, workInProgress = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(nextPrimaryChildren.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, rootOrSingletonContext = !1, null !== current && restoreSuspendedTreeContext(workInProgress, current), workInProgress = mountSuspensePrimaryChildren(workInProgress, nextProps.children), workInProgress.flags |= 4096);
			return workInProgress;
		}
		if (showFallback) return reuseSuspenseHandlerOnStack(workInProgress), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
			mode: "hidden",
			children: nextProps.children
		}), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(digest, nextPrimaryChildren) : (nextPrimaryChildren = createFiberFromFragment(nextPrimaryChildren, showFallback, renderLanes, null), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress, nextProps.return = workInProgress, nextProps.sibling = nextPrimaryChildren, workInProgress.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? {
			parent: prevState,
			pool: prevState
		} : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
			baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
			cachePool: showFallback
		}), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
		pushPrimaryTreeSuspenseHandler(workInProgress);
		renderLanes = current.child;
		current = renderLanes.sibling;
		renderLanes = createWorkInProgress(renderLanes, {
			mode: "visible",
			children: nextProps.children
		});
		renderLanes.return = workInProgress;
		renderLanes.sibling = null;
		null !== current && (JSCompiler_temp = workInProgress.deletions, null === JSCompiler_temp ? (workInProgress.deletions = [current], workInProgress.flags |= 16) : JSCompiler_temp.push(current));
		workInProgress.child = renderLanes;
		workInProgress.memoizedState = null;
		return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
		primaryChildren = mountWorkInProgressOffscreenFiber({
			mode: "visible",
			children: primaryChildren
		}, workInProgress.mode);
		primaryChildren.return = workInProgress;
		return workInProgress.child = primaryChildren;
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
		offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
		offscreenProps.lanes = 0;
		return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes) {
		reconcileChildFibers(workInProgress, current.child, null, renderLanes);
		current = mountSuspensePrimaryChildren(workInProgress, workInProgress.pendingProps.children);
		current.flags |= 2;
		workInProgress.memoizedState = null;
		return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
		fiber.lanes |= renderLanes;
		var alternate = fiber.alternate;
		null !== alternate && (alternate.lanes |= renderLanes);
		scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode, treeForkCount) {
		var renderState = workInProgress.memoizedState;
		null === renderState ? workInProgress.memoizedState = {
			isBackwards,
			rendering: null,
			renderingStartTime: 0,
			last: lastContentRow,
			tail,
			tailMode,
			treeForkCount
		} : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount);
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
		nextProps = nextProps.children;
		var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
		shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress.flags |= 128) : suspenseContext &= 1;
		push(suspenseStackCursor, suspenseContext);
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		nextProps = isHydrating ? treeForkCount : 0;
		if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128)) a: for (current = workInProgress.child; null !== current;) {
			if (13 === current.tag) null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
			else if (19 === current.tag) scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
			else if (null !== current.child) {
				current.child.return = current;
				current = current.child;
				continue;
			}
			if (current === workInProgress) break a;
			for (; null === current.sibling;) {
				if (null === current.return || current.return === workInProgress) break a;
				current = current.return;
			}
			current.sibling.return = current.return;
			current = current.sibling;
		}
		switch (revealOrder) {
			case "forwards":
				renderLanes = workInProgress.child;
				for (revealOrder = null; null !== renderLanes;) current = renderLanes.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes), renderLanes = renderLanes.sibling;
				renderLanes = revealOrder;
				null === renderLanes ? (revealOrder = workInProgress.child, workInProgress.child = null) : (revealOrder = renderLanes.sibling, renderLanes.sibling = null);
				initSuspenseListRenderState(workInProgress, !1, revealOrder, renderLanes, tailMode, nextProps);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				renderLanes = null;
				revealOrder = workInProgress.child;
				for (workInProgress.child = null; null !== revealOrder;) {
					current = revealOrder.alternate;
					if (null !== current && null === findFirstSuspended(current)) {
						workInProgress.child = revealOrder;
						break;
					}
					current = revealOrder.sibling;
					revealOrder.sibling = renderLanes;
					renderLanes = revealOrder;
					revealOrder = current;
				}
				initSuspenseListRenderState(workInProgress, !0, renderLanes, null, tailMode, nextProps);
				break;
			case "together":
				initSuspenseListRenderState(workInProgress, !1, null, null, void 0, nextProps);
				break;
			default: workInProgress.memoizedState = null;
		}
		return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
		null !== current && (workInProgress.dependencies = current.dependencies);
		workInProgressRootSkippedLanes |= workInProgress.lanes;
		if (0 === (renderLanes & workInProgress.childLanes)) if (null !== current) {
			if (propagateParentContextChanges(current, workInProgress, renderLanes, !1), 0 === (renderLanes & workInProgress.childLanes)) return null;
		} else return null;
		if (null !== current && workInProgress.child !== current.child) throw Error(formatProdErrorMessage(153));
		if (null !== workInProgress.child) {
			current = workInProgress.child;
			renderLanes = createWorkInProgress(current, current.pendingProps);
			workInProgress.child = renderLanes;
			for (renderLanes.return = workInProgress; null !== current.sibling;) current = current.sibling, renderLanes = renderLanes.sibling = createWorkInProgress(current, current.pendingProps), renderLanes.return = workInProgress;
			renderLanes.sibling = null;
		}
		return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
		if (0 !== (current.lanes & renderLanes)) return !0;
		current = current.dependencies;
		return null !== current && checkIfContextChanged(current) ? !0 : !1;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes) {
		switch (workInProgress.tag) {
			case 3:
				pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
				pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
				resetHydrationState();
				break;
			case 27:
			case 5:
				pushHostContext(workInProgress);
				break;
			case 4:
				pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
				break;
			case 10:
				pushProvider(workInProgress, workInProgress.type, workInProgress.memoizedProps.value);
				break;
			case 31:
				if (null !== workInProgress.memoizedState) return workInProgress.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress), null;
				break;
			case 13:
				var state$102 = workInProgress.memoizedState;
				if (null !== state$102) {
					if (null !== state$102.dehydrated) return pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags |= 128, null;
					if (0 !== (renderLanes & workInProgress.child.childLanes)) return updateSuspenseComponent(current, workInProgress, renderLanes);
					pushPrimaryTreeSuspenseHandler(workInProgress);
					current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
					return null !== current ? current.sibling : null;
				}
				pushPrimaryTreeSuspenseHandler(workInProgress);
				break;
			case 19:
				var didSuspendBefore = 0 !== (current.flags & 128);
				state$102 = 0 !== (renderLanes & workInProgress.childLanes);
				state$102 || (propagateParentContextChanges(current, workInProgress, renderLanes, !1), state$102 = 0 !== (renderLanes & workInProgress.childLanes));
				if (didSuspendBefore) {
					if (state$102) return updateSuspenseListComponent(current, workInProgress, renderLanes);
					workInProgress.flags |= 128;
				}
				didSuspendBefore = workInProgress.memoizedState;
				null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
				push(suspenseStackCursor, suspenseStackCursor.current);
				if (state$102) break;
				else return null;
			case 22: return workInProgress.lanes = 0, updateOffscreenComponent(current, workInProgress, renderLanes, workInProgress.pendingProps);
			case 24: pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
		}
		return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
		if (null !== current) if (current.memoizedProps !== workInProgress.pendingProps) didReceiveUpdate = !0;
		else {
			if (!checkScheduledUpdateOrContext(current, renderLanes) && 0 === (workInProgress.flags & 128)) return didReceiveUpdate = !1, attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes);
			didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
		}
		else didReceiveUpdate = !1, isHydrating && 0 !== (workInProgress.flags & 1048576) && pushTreeId(workInProgress, treeForkCount, workInProgress.index);
		workInProgress.lanes = 0;
		switch (workInProgress.tag) {
			case 16:
				a: {
					var props = workInProgress.pendingProps;
					current = resolveLazy(workInProgress.elementType);
					workInProgress.type = current;
					if ("function" === typeof current) shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress.tag = 1, workInProgress = updateClassComponent(null, workInProgress, current, props, renderLanes)) : (workInProgress.tag = 0, workInProgress = updateFunctionComponent(null, workInProgress, current, props, renderLanes));
					else {
						if (void 0 !== current && null !== current) {
							var $$typeof = current.$$typeof;
							if ($$typeof === REACT_FORWARD_REF_TYPE) {
								workInProgress.tag = 11;
								workInProgress = updateForwardRef(null, workInProgress, current, props, renderLanes);
								break a;
							} else if ($$typeof === REACT_MEMO_TYPE) {
								workInProgress.tag = 14;
								workInProgress = updateMemoComponent(null, workInProgress, current, props, renderLanes);
								break a;
							}
						}
						workInProgress = getComponentNameFromType(current) || current;
						throw Error(formatProdErrorMessage(306, workInProgress, ""));
					}
				}
				return workInProgress;
			case 0: return updateFunctionComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 1: return props = workInProgress.type, $$typeof = resolveClassComponentProps(props, workInProgress.pendingProps), updateClassComponent(current, workInProgress, props, $$typeof, renderLanes);
			case 3:
				a: {
					pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
					if (null === current) throw Error(formatProdErrorMessage(387));
					props = workInProgress.pendingProps;
					var prevState = workInProgress.memoizedState;
					$$typeof = prevState.element;
					cloneUpdateQueue(current, workInProgress);
					processUpdateQueue(workInProgress, props, null, renderLanes);
					var nextState = workInProgress.memoizedState;
					props = nextState.cache;
					pushProvider(workInProgress, CacheContext, props);
					props !== prevState.cache && propagateContextChanges(workInProgress, [CacheContext], renderLanes, !0);
					suspendIfUpdateReadFromEntangledAsyncAction();
					props = nextState.element;
					if (prevState.isDehydrated) if (prevState = {
						element: props,
						isDehydrated: !1,
						cache: nextState.cache
					}, workInProgress.updateQueue.baseState = prevState, workInProgress.memoizedState = prevState, workInProgress.flags & 256) {
						workInProgress = mountHostRootWithoutHydrating(current, workInProgress, props, renderLanes);
						break a;
					} else if (props !== $$typeof) {
						$$typeof = createCapturedValueAtFiber(Error(formatProdErrorMessage(424)), workInProgress);
						queueHydrationError($$typeof);
						workInProgress = mountHostRootWithoutHydrating(current, workInProgress, props, renderLanes);
						break a;
					} else {
						current = workInProgress.stateNode.containerInfo;
						switch (current.nodeType) {
							case 9:
								current = current.body;
								break;
							default: current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
						}
						nextHydratableInstance = getNextHydratable(current.firstChild);
						hydrationParentFiber = workInProgress;
						isHydrating = !0;
						hydrationErrors = null;
						rootOrSingletonContext = !0;
						renderLanes = mountChildFibers(workInProgress, null, props, renderLanes);
						for (workInProgress.child = renderLanes; renderLanes;) renderLanes.flags = renderLanes.flags & -3 | 4096, renderLanes = renderLanes.sibling;
					}
					else {
						resetHydrationState();
						if (props === $$typeof) {
							workInProgress = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
							break a;
						}
						reconcileChildren(current, workInProgress, props, renderLanes);
					}
					workInProgress = workInProgress.child;
				}
				return workInProgress;
			case 26: return markRef(current, workInProgress), null === current ? (renderLanes = getResource(workInProgress.type, null, workInProgress.pendingProps, null)) ? workInProgress.memoizedState = renderLanes : isHydrating || (renderLanes = workInProgress.type, current = workInProgress.pendingProps, props = getOwnerDocumentFromRootContainer(rootInstanceStackCursor.current).createElement(renderLanes), props[internalInstanceKey] = workInProgress, props[internalPropsKey] = current, setInitialProperties(props, renderLanes, current), markNodeAsHoistable(props), workInProgress.stateNode = props) : workInProgress.memoizedState = getResource(workInProgress.type, current.memoizedProps, workInProgress.pendingProps, current.memoizedState), null;
			case 27: return pushHostContext(workInProgress), null === current && isHydrating && (props = workInProgress.stateNode = resolveSingletonInstance(workInProgress.type, workInProgress.pendingProps, rootInstanceStackCursor.current), hydrationParentFiber = workInProgress, rootOrSingletonContext = !0, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), markRef(current, workInProgress), null === current && (workInProgress.flags |= 4194304), workInProgress.child;
			case 5:
				if (null === current && isHydrating) {
					if ($$typeof = props = nextHydratableInstance) props = canHydrateInstance(props, workInProgress.type, workInProgress.pendingProps, rootOrSingletonContext), null !== props ? (workInProgress.stateNode = props, hydrationParentFiber = workInProgress, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = !1, $$typeof = !0) : $$typeof = !1;
					$$typeof || throwOnHydrationMismatch(workInProgress);
				}
				pushHostContext(workInProgress);
				$$typeof = workInProgress.type;
				prevState = workInProgress.pendingProps;
				nextState = null !== current ? current.memoizedProps : null;
				props = prevState.children;
				shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress.flags |= 32);
				null !== workInProgress.memoizedState && ($$typeof = renderWithHooks(current, workInProgress, TransitionAwareHostComponent, null, null, renderLanes), HostTransitionContext._currentValue = $$typeof);
				markRef(current, workInProgress);
				reconcileChildren(current, workInProgress, props, renderLanes);
				return workInProgress.child;
			case 6:
				if (null === current && isHydrating) {
					if (current = renderLanes = nextHydratableInstance) renderLanes = canHydrateTextInstance(renderLanes, workInProgress.pendingProps, rootOrSingletonContext), null !== renderLanes ? (workInProgress.stateNode = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null, current = !0) : current = !1;
					current || throwOnHydrationMismatch(workInProgress);
				}
				return null;
			case 13: return updateSuspenseComponent(current, workInProgress, renderLanes);
			case 4: return pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo), props = workInProgress.pendingProps, null === current ? workInProgress.child = reconcileChildFibers(workInProgress, null, props, renderLanes) : reconcileChildren(current, workInProgress, props, renderLanes), workInProgress.child;
			case 11: return updateForwardRef(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 7: return reconcileChildren(current, workInProgress, workInProgress.pendingProps, renderLanes), workInProgress.child;
			case 8: return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 12: return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 10: return props = workInProgress.pendingProps, pushProvider(workInProgress, workInProgress.type, props.value), reconcileChildren(current, workInProgress, props.children, renderLanes), workInProgress.child;
			case 9: return $$typeof = workInProgress.type._context, props = workInProgress.pendingProps.children, prepareToReadContext(workInProgress), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress.flags |= 1, reconcileChildren(current, workInProgress, props, renderLanes), workInProgress.child;
			case 14: return updateMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 15: return updateSimpleMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 19: return updateSuspenseListComponent(current, workInProgress, renderLanes);
			case 31: return updateActivityComponent(current, workInProgress, renderLanes);
			case 22: return updateOffscreenComponent(current, workInProgress, renderLanes, workInProgress.pendingProps);
			case 24: return prepareToReadContext(workInProgress), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes), $$typeof = prevState), workInProgress.memoizedState = {
				parent: props,
				cache: $$typeof
			}, initializeUpdateQueue(workInProgress), pushProvider(workInProgress, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes) && (cloneUpdateQueue(current, workInProgress), processUpdateQueue(workInProgress, null, null, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress.memoizedState, $$typeof.parent !== props ? ($$typeof = {
				parent: props,
				cache: props
			}, workInProgress.memoizedState = $$typeof, 0 === workInProgress.lanes && (workInProgress.memoizedState = workInProgress.updateQueue.baseState = $$typeof), pushProvider(workInProgress, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(workInProgress, [CacheContext], renderLanes, !0))), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 29: throw workInProgress.pendingProps;
		}
		throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
		workInProgress.flags |= 4;
	}
	function preloadInstanceAndSuspendIfNeeded(workInProgress, type, oldProps, newProps, renderLanes) {
		if (type = 0 !== (workInProgress.mode & 32)) type = !1;
		if (type) {
			if (workInProgress.flags |= 16777216, (renderLanes & 335544128) === renderLanes) if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
			else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
			else throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
		} else workInProgress.flags &= -16777217;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
		if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4)) workInProgress.flags &= -16777217;
		else if (workInProgress.flags |= 16777216, !preloadResource(resource)) if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
		else throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
		null !== retryQueue && (workInProgress.flags |= 4);
		workInProgress.flags & 16384 && (retryQueue = 22 !== workInProgress.tag ? claimNextRetryLane() : 536870912, workInProgress.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
		if (!isHydrating) switch (renderState.tailMode) {
			case "hidden":
				hasRenderedATailFallback = renderState.tail;
				for (var lastTailNode = null; null !== hasRenderedATailFallback;) null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
				null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
				break;
			case "collapsed":
				lastTailNode = renderState.tail;
				for (var lastTailNode$106 = null; null !== lastTailNode;) null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
				null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
		}
	}
	function bubbleProperties(completedWork) {
		var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
		if (didBailout) for (var child$107 = completedWork.child; null !== child$107;) newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
		else for (child$107 = completedWork.child; null !== child$107;) newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
		completedWork.subtreeFlags |= subtreeFlags;
		completedWork.childLanes = newChildLanes;
		return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
		var newProps = workInProgress.pendingProps;
		popTreeContext(workInProgress);
		switch (workInProgress.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return bubbleProperties(workInProgress), null;
			case 1: return bubbleProperties(workInProgress), null;
			case 3:
				renderLanes = workInProgress.stateNode;
				newProps = null;
				null !== current && (newProps = current.memoizedState.cache);
				workInProgress.memoizedState.cache !== newProps && (workInProgress.flags |= 2048);
				popProvider(CacheContext);
				popHostContainer();
				renderLanes.pendingContext && (renderLanes.context = renderLanes.pendingContext, renderLanes.pendingContext = null);
				if (null === current || null === current.child) popHydrationState(workInProgress) ? markUpdate(workInProgress) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress.flags & 256) || (workInProgress.flags |= 1024, upgradeHydrationErrorsToRecoverable());
				bubbleProperties(workInProgress);
				return null;
			case 26:
				var type = workInProgress.type, nextResource = workInProgress.memoizedState;
				null === current ? (markUpdate(workInProgress), null !== nextResource ? (bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, nextResource)) : (bubbleProperties(workInProgress), preloadInstanceAndSuspendIfNeeded(workInProgress, type, null, newProps, renderLanes))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress), bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, nextResource)) : (bubbleProperties(workInProgress), workInProgress.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress), bubbleProperties(workInProgress), preloadInstanceAndSuspendIfNeeded(workInProgress, type, current, newProps, renderLanes));
				return null;
			case 27:
				popHostContext(workInProgress);
				renderLanes = rootInstanceStackCursor.current;
				type = workInProgress.type;
				if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if (!newProps) {
						if (null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
						bubbleProperties(workInProgress);
						return null;
					}
					current = contextStackCursor.current;
					popHydrationState(workInProgress) ? prepareToHydrateHostInstance(workInProgress, current) : (current = resolveSingletonInstance(type, newProps, renderLanes), workInProgress.stateNode = current, markUpdate(workInProgress));
				}
				bubbleProperties(workInProgress);
				return null;
			case 5:
				popHostContext(workInProgress);
				type = workInProgress.type;
				if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if (!newProps) {
						if (null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
						bubbleProperties(workInProgress);
						return null;
					}
					nextResource = contextStackCursor.current;
					if (popHydrationState(workInProgress)) prepareToHydrateHostInstance(workInProgress, nextResource);
					else {
						var ownerDocument = getOwnerDocumentFromRootContainer(rootInstanceStackCursor.current);
						switch (nextResource) {
							case 1:
								nextResource = ownerDocument.createElementNS("http://www.w3.org/2000/svg", type);
								break;
							case 2:
								nextResource = ownerDocument.createElementNS("http://www.w3.org/1998/Math/MathML", type);
								break;
							default: switch (type) {
								case "svg":
									nextResource = ownerDocument.createElementNS("http://www.w3.org/2000/svg", type);
									break;
								case "math":
									nextResource = ownerDocument.createElementNS("http://www.w3.org/1998/Math/MathML", type);
									break;
								case "script":
									nextResource = ownerDocument.createElement("div");
									nextResource.innerHTML = "<script><\/script>";
									nextResource = nextResource.removeChild(nextResource.firstChild);
									break;
								case "select":
									nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", { is: newProps.is }) : ownerDocument.createElement("select");
									newProps.multiple ? nextResource.multiple = !0 : newProps.size && (nextResource.size = newProps.size);
									break;
								default: nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
							}
						}
						nextResource[internalInstanceKey] = workInProgress;
						nextResource[internalPropsKey] = newProps;
						a: for (ownerDocument = workInProgress.child; null !== ownerDocument;) {
							if (5 === ownerDocument.tag || 6 === ownerDocument.tag) nextResource.appendChild(ownerDocument.stateNode);
							else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
								ownerDocument.child.return = ownerDocument;
								ownerDocument = ownerDocument.child;
								continue;
							}
							if (ownerDocument === workInProgress) break a;
							for (; null === ownerDocument.sibling;) {
								if (null === ownerDocument.return || ownerDocument.return === workInProgress) break a;
								ownerDocument = ownerDocument.return;
							}
							ownerDocument.sibling.return = ownerDocument.return;
							ownerDocument = ownerDocument.sibling;
						}
						workInProgress.stateNode = nextResource;
						a: switch (setInitialProperties(nextResource, type, newProps), type) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								newProps = !!newProps.autoFocus;
								break a;
							case "img":
								newProps = !0;
								break a;
							default: newProps = !1;
						}
						newProps && markUpdate(workInProgress);
					}
				}
				bubbleProperties(workInProgress);
				preloadInstanceAndSuspendIfNeeded(workInProgress, workInProgress.type, null === current ? null : current.memoizedProps, workInProgress.pendingProps, renderLanes);
				return null;
			case 6:
				if (current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if ("string" !== typeof newProps && null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
					current = rootInstanceStackCursor.current;
					if (popHydrationState(workInProgress)) {
						current = workInProgress.stateNode;
						renderLanes = workInProgress.memoizedProps;
						newProps = null;
						type = hydrationParentFiber;
						if (null !== type) switch (type.tag) {
							case 27:
							case 5: newProps = type.memoizedProps;
						}
						current[internalInstanceKey] = workInProgress;
						current = current.nodeValue === renderLanes || null !== newProps && !0 === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes) ? !0 : !1;
						current || throwOnHydrationMismatch(workInProgress, !0);
					} else current = getOwnerDocumentFromRootContainer(current).createTextNode(newProps), current[internalInstanceKey] = workInProgress, workInProgress.stateNode = current;
				}
				bubbleProperties(workInProgress);
				return null;
			case 31:
				renderLanes = workInProgress.memoizedState;
				if (null === current || null !== current.memoizedState) {
					newProps = popHydrationState(workInProgress);
					if (null !== renderLanes) {
						if (null === current) {
							if (!newProps) throw Error(formatProdErrorMessage(318));
							current = workInProgress.memoizedState;
							current = null !== current ? current.dehydrated : null;
							if (!current) throw Error(formatProdErrorMessage(557));
							current[internalInstanceKey] = workInProgress;
						} else resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4;
						bubbleProperties(workInProgress);
						current = !1;
					} else renderLanes = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes), current = !0;
					if (!current) {
						if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
						popSuspenseHandler(workInProgress);
						return null;
					}
					if (0 !== (workInProgress.flags & 128)) throw Error(formatProdErrorMessage(558));
				}
				bubbleProperties(workInProgress);
				return null;
			case 13:
				newProps = workInProgress.memoizedState;
				if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
					type = popHydrationState(workInProgress);
					if (null !== newProps && null !== newProps.dehydrated) {
						if (null === current) {
							if (!type) throw Error(formatProdErrorMessage(318));
							type = workInProgress.memoizedState;
							type = null !== type ? type.dehydrated : null;
							if (!type) throw Error(formatProdErrorMessage(317));
							type[internalInstanceKey] = workInProgress;
						} else resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4;
						bubbleProperties(workInProgress);
						type = !1;
					} else type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = !0;
					if (!type) {
						if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
						popSuspenseHandler(workInProgress);
						return null;
					}
				}
				popSuspenseHandler(workInProgress);
				if (0 !== (workInProgress.flags & 128)) return workInProgress.lanes = renderLanes, workInProgress;
				renderLanes = null !== newProps;
				current = null !== current && null !== current.memoizedState;
				renderLanes && (newProps = workInProgress.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
				renderLanes !== current && renderLanes && (workInProgress.child.flags |= 8192);
				scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
				bubbleProperties(workInProgress);
				return null;
			case 4: return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress.stateNode.containerInfo), bubbleProperties(workInProgress), null;
			case 10: return popProvider(workInProgress.type), bubbleProperties(workInProgress), null;
			case 19:
				pop(suspenseStackCursor);
				newProps = workInProgress.memoizedState;
				if (null === newProps) return bubbleProperties(workInProgress), null;
				type = 0 !== (workInProgress.flags & 128);
				nextResource = newProps.rendering;
				if (null === nextResource) if (type) cutOffTailIfNeeded(newProps, !1);
				else {
					if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128)) for (current = workInProgress.child; null !== current;) {
						nextResource = findFirstSuspended(current);
						if (null !== nextResource) {
							workInProgress.flags |= 128;
							cutOffTailIfNeeded(newProps, !1);
							current = nextResource.updateQueue;
							workInProgress.updateQueue = current;
							scheduleRetryEffect(workInProgress, current);
							workInProgress.subtreeFlags = 0;
							current = renderLanes;
							for (renderLanes = workInProgress.child; null !== renderLanes;) resetWorkInProgress(renderLanes, current), renderLanes = renderLanes.sibling;
							push(suspenseStackCursor, suspenseStackCursor.current & 1 | 2);
							isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount);
							return workInProgress.child;
						}
						current = current.sibling;
					}
					null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress.flags |= 128, type = !0, cutOffTailIfNeeded(newProps, !1), workInProgress.lanes = 4194304);
				}
				else {
					if (!type) if (current = findFirstSuspended(nextResource), null !== current) {
						if (workInProgress.flags |= 128, type = !0, current = current.updateQueue, workInProgress.updateQueue = current, scheduleRetryEffect(workInProgress, current), cutOffTailIfNeeded(newProps, !0), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating) return bubbleProperties(workInProgress), null;
					} else 2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes && (workInProgress.flags |= 128, type = !0, cutOffTailIfNeeded(newProps, !1), workInProgress.lanes = 4194304);
					newProps.isBackwards ? (nextResource.sibling = workInProgress.child, workInProgress.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress.child = nextResource, newProps.last = nextResource);
				}
				if (null !== newProps.tail) return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes = suspenseStackCursor.current, push(suspenseStackCursor, type ? renderLanes & 1 | 2 : renderLanes & 1), isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount), current;
				bubbleProperties(workInProgress);
				return null;
			case 22:
			case 23: return popSuspenseHandler(workInProgress), popHiddenContext(), newProps = null !== workInProgress.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress.flags |= 8192) : newProps && (workInProgress.flags |= 8192), newProps ? 0 !== (renderLanes & 536870912) && 0 === (workInProgress.flags & 128) && (bubbleProperties(workInProgress), workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192)) : bubbleProperties(workInProgress), renderLanes = workInProgress.updateQueue, null !== renderLanes && scheduleRetryEffect(workInProgress, renderLanes.retryQueue), renderLanes = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress.memoizedState && null !== workInProgress.memoizedState.cachePool && (newProps = workInProgress.memoizedState.cachePool.pool), newProps !== renderLanes && (workInProgress.flags |= 2048), null !== current && pop(resumedCache), null;
			case 24: return renderLanes = null, null !== current && (renderLanes = current.memoizedState.cache), workInProgress.memoizedState.cache !== renderLanes && (workInProgress.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
		popTreeContext(workInProgress);
		switch (workInProgress.tag) {
			case 1: return current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 3: return popProvider(CacheContext), popHostContainer(), current = workInProgress.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 26:
			case 27:
			case 5: return popHostContext(workInProgress), null;
			case 31:
				if (null !== workInProgress.memoizedState) {
					popSuspenseHandler(workInProgress);
					if (null === workInProgress.alternate) throw Error(formatProdErrorMessage(340));
					resetHydrationState();
				}
				current = workInProgress.flags;
				return current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 13:
				popSuspenseHandler(workInProgress);
				current = workInProgress.memoizedState;
				if (null !== current && null !== current.dehydrated) {
					if (null === workInProgress.alternate) throw Error(formatProdErrorMessage(340));
					resetHydrationState();
				}
				current = workInProgress.flags;
				return current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 19: return pop(suspenseStackCursor), null;
			case 4: return popHostContainer(), null;
			case 10: return popProvider(workInProgress.type), null;
			case 22:
			case 23: return popSuspenseHandler(workInProgress), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 24: return popProvider(CacheContext), null;
			case 25: return null;
			default: return null;
		}
	}
	function unwindInterruptedWork(current, interruptedWork) {
		popTreeContext(interruptedWork);
		switch (interruptedWork.tag) {
			case 3:
				popProvider(CacheContext);
				popHostContainer();
				break;
			case 26:
			case 27:
			case 5:
				popHostContext(interruptedWork);
				break;
			case 4:
				popHostContainer();
				break;
			case 31:
				null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
				break;
			case 13:
				popSuspenseHandler(interruptedWork);
				break;
			case 19:
				pop(suspenseStackCursor);
				break;
			case 10:
				popProvider(interruptedWork.type);
				break;
			case 22:
			case 23:
				popSuspenseHandler(interruptedWork);
				popHiddenContext();
				null !== current && pop(resumedCache);
				break;
			case 24: popProvider(CacheContext);
		}
	}
	function commitHookEffectListMount(flags, finishedWork) {
		try {
			var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
			if (null !== lastEffect) {
				var firstEffect = lastEffect.next;
				updateQueue = firstEffect;
				do {
					if ((updateQueue.tag & flags) === flags) {
						lastEffect = void 0;
						var create = updateQueue.create, inst = updateQueue.inst;
						lastEffect = create();
						inst.destroy = lastEffect;
					}
					updateQueue = updateQueue.next;
				} while (updateQueue !== firstEffect);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
		try {
			var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
			if (null !== lastEffect) {
				var firstEffect = lastEffect.next;
				updateQueue = firstEffect;
				do {
					if ((updateQueue.tag & flags) === flags) {
						var inst = updateQueue.inst, destroy = inst.destroy;
						if (void 0 !== destroy) {
							inst.destroy = void 0;
							lastEffect = finishedWork;
							var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
							try {
								destroy_();
							} catch (error) {
								captureCommitPhaseError(lastEffect, nearestMountedAncestor, error);
							}
						}
					}
					updateQueue = updateQueue.next;
				} while (updateQueue !== firstEffect);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitClassCallbacks(finishedWork) {
		var updateQueue = finishedWork.updateQueue;
		if (null !== updateQueue) {
			var instance = finishedWork.stateNode;
			try {
				commitCallbacks(updateQueue, instance);
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
		}
	}
	function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
		instance.props = resolveClassComponentProps(current.type, current.memoizedProps);
		instance.state = current.memoizedState;
		try {
			instance.componentWillUnmount();
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		}
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
		try {
			var ref = current.ref;
			if (null !== ref) {
				switch (current.tag) {
					case 26:
					case 27:
					case 5:
						var instanceToUse = current.stateNode;
						break;
					case 30:
						instanceToUse = current.stateNode;
						break;
					default: instanceToUse = current.stateNode;
				}
				"function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
			}
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		}
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
		var ref = current.ref, refCleanup = current.refCleanup;
		if (null !== ref) if ("function" === typeof refCleanup) try {
			refCleanup();
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		} finally {
			current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
		}
		else if ("function" === typeof ref) try {
			ref(null);
		} catch (error$140) {
			captureCommitPhaseError(current, nearestMountedAncestor, error$140);
		}
		else ref.current = null;
	}
	function commitHostMount(finishedWork) {
		var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
		try {
			a: switch (type) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					props.autoFocus && instance.focus();
					break a;
				case "img": props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
		try {
			var domElement = finishedWork.stateNode;
			updateProperties(domElement, finishedWork.type, oldProps, newProps);
			domElement[internalPropsKey] = newProps;
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function isHostParent(fiber) {
		return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
	}
	function getHostSibling(fiber) {
		a: for (;;) {
			for (; null === fiber.sibling;) {
				if (null === fiber.return || isHostParent(fiber.return)) return null;
				fiber = fiber.return;
			}
			fiber.sibling.return = fiber.return;
			for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;) {
				if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
				if (fiber.flags & 2) continue a;
				if (null === fiber.child || 4 === fiber.tag) continue a;
				else fiber.child.return = fiber, fiber = fiber.child;
			}
			if (!(fiber.flags & 2)) return fiber.stateNode;
		}
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
		var tag = node.tag;
		if (5 === tag || 6 === tag) node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
		else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node)) for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node;) insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
	}
	function insertOrAppendPlacementNode(node, before, parent) {
		var tag = node.tag;
		if (5 === tag || 6 === tag) node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
		else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node)) for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node;) insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	}
	function commitHostSingletonAcquisition(finishedWork) {
		var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
		try {
			for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length;) singleton.removeAttributeNode(attributes[0]);
			setInitialProperties(singleton, type, props);
			singleton[internalInstanceKey] = finishedWork;
			singleton[internalPropsKey] = props;
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	var offscreenSubtreeIsHidden = !1;
	var offscreenSubtreeWasHidden = !1;
	var needsFormReset = !1;
	var PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set;
	var nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
		root = root.containerInfo;
		eventsEnabled = _enabled;
		root = getActiveElementDeep(root);
		if (hasSelectionCapabilities(root)) {
			if ("selectionStart" in root) var JSCompiler_temp = {
				start: root.selectionStart,
				end: root.selectionEnd
			};
			else a: {
				JSCompiler_temp = (JSCompiler_temp = root.ownerDocument) && JSCompiler_temp.defaultView || window;
				var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
				if (selection && 0 !== selection.rangeCount) {
					JSCompiler_temp = selection.anchorNode;
					var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
					selection = selection.focusOffset;
					try {
						JSCompiler_temp.nodeType, focusNode.nodeType;
					} catch (e$20) {
						JSCompiler_temp = null;
						break a;
					}
					var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root, parentNode = null;
					b: for (;;) {
						for (var next;;) {
							node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
							node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
							3 === node.nodeType && (length += node.nodeValue.length);
							if (null === (next = node.firstChild)) break;
							parentNode = node;
							node = next;
						}
						for (;;) {
							if (node === root) break b;
							parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
							parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
							if (null !== (next = node.nextSibling)) break;
							node = parentNode;
							parentNode = node.parentNode;
						}
						node = next;
					}
					JSCompiler_temp = -1 === start || -1 === end ? null : {
						start,
						end
					};
				} else JSCompiler_temp = null;
			}
			JSCompiler_temp = JSCompiler_temp || {
				start: 0,
				end: 0
			};
		} else JSCompiler_temp = null;
		selectionInformation = {
			focusedElem: root,
			selectionRange: JSCompiler_temp
		};
		_enabled = !1;
		for (nextEffect = firstChild; null !== nextEffect;) if (firstChild = nextEffect, root = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root) root.return = firstChild, nextEffect = root;
		else for (; null !== nextEffect;) {
			firstChild = nextEffect;
			focusNode = firstChild.alternate;
			root = firstChild.flags;
			switch (firstChild.tag) {
				case 0:
					if (0 !== (root & 4) && (root = firstChild.updateQueue, root = null !== root ? root.events : null, null !== root)) for (JSCompiler_temp = 0; JSCompiler_temp < root.length; JSCompiler_temp++) anchorOffset = root[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (0 !== (root & 1024) && null !== focusNode) {
						root = void 0;
						JSCompiler_temp = firstChild;
						anchorOffset = focusNode.memoizedProps;
						focusNode = focusNode.memoizedState;
						selection = JSCompiler_temp.stateNode;
						try {
							var resolvedPrevProps = resolveClassComponentProps(JSCompiler_temp.type, anchorOffset);
							root = selection.getSnapshotBeforeUpdate(resolvedPrevProps, focusNode);
							selection.__reactInternalSnapshotBeforeUpdate = root;
						} catch (error) {
							captureCommitPhaseError(JSCompiler_temp, JSCompiler_temp.return, error);
						}
					}
					break;
				case 3:
					if (0 !== (root & 1024)) {
						if (root = firstChild.stateNode.containerInfo, JSCompiler_temp = root.nodeType, 9 === JSCompiler_temp) clearContainerSparingly(root);
						else if (1 === JSCompiler_temp) switch (root.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								clearContainerSparingly(root);
								break;
							default: root.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
			}
			root = firstChild.sibling;
			if (null !== root) {
				root.return = firstChild.return;
				nextEffect = root;
				break;
			}
			nextEffect = firstChild.return;
		}
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
		var flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitHookEffectListMount(5, finishedWork);
				break;
			case 1:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				if (flags & 4) if (finishedRoot = finishedWork.stateNode, null === current) try {
					finishedRoot.componentDidMount();
				} catch (error) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error);
				}
				else {
					var prevProps = resolveClassComponentProps(finishedWork.type, current.memoizedProps);
					current = current.memoizedState;
					try {
						finishedRoot.componentDidUpdate(prevProps, current, finishedRoot.__reactInternalSnapshotBeforeUpdate);
					} catch (error$139) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error$139);
					}
				}
				flags & 64 && commitClassCallbacks(finishedWork);
				flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
				break;
			case 3:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
					current = null;
					if (null !== finishedWork.child) switch (finishedWork.child.tag) {
						case 27:
						case 5:
							current = finishedWork.child.stateNode;
							break;
						case 1: current = finishedWork.child.stateNode;
					}
					try {
						commitCallbacks(finishedRoot, current);
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				break;
			case 27: null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
			case 26:
			case 5:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				null === current && flags & 4 && commitHostMount(finishedWork);
				flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
				break;
			case 12:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				break;
			case 31:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
				break;
			case 13:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
				flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(null, finishedWork), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
				break;
			case 22:
				flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
				if (!flags) {
					current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
					prevProps = offscreenSubtreeIsHidden;
					var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
					offscreenSubtreeIsHidden = flags;
					(offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, 0 !== (finishedWork.subtreeFlags & 8772)) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
					offscreenSubtreeIsHidden = prevProps;
					offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
				}
				break;
			case 30: break;
			default: recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
		}
	}
	function detachFiberAfterEffects(fiber) {
		var alternate = fiber.alternate;
		null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
		fiber.child = null;
		fiber.deletions = null;
		fiber.sibling = null;
		5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
		fiber.stateNode = null;
		fiber.return = null;
		fiber.dependencies = null;
		fiber.memoizedProps = null;
		fiber.memoizedState = null;
		fiber.pendingProps = null;
		fiber.stateNode = null;
		fiber.updateQueue = null;
	}
	var hostParent = null;
	var hostParentIsContainer = !1;
	function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
		for (parent = parent.child; null !== parent;) commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
	}
	function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
		if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount) try {
			injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
		} catch (err) {}
		switch (deletedFiber.tag) {
			case 26:
				offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
				break;
			case 27:
				offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
				var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
				isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = !1);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				releaseSingletonInstance(deletedFiber.stateNode);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				break;
			case 5: offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
			case 6:
				prevHostParent = hostParent;
				prevHostParentIsContainer = hostParentIsContainer;
				hostParent = null;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				if (null !== hostParent) if (hostParentIsContainer) try {
					(9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
				} catch (error) {
					captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
				}
				else try {
					hostParent.removeChild(deletedFiber.stateNode);
				} catch (error) {
					captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
				}
				break;
			case 18:
				null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot, deletedFiber.stateNode), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
				break;
			case 4:
				prevHostParent = hostParent;
				prevHostParentIsContainer = hostParentIsContainer;
				hostParent = deletedFiber.stateNode.containerInfo;
				hostParentIsContainer = !0;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
				offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 1:
				offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(deletedFiber, nearestMountedAncestor, prevHostParent));
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 21:
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 22:
				offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				offscreenSubtreeWasHidden = prevHostParent;
				break;
			default: recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
		}
	}
	function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
		if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
			finishedRoot = finishedRoot.dehydrated;
			try {
				retryIfBlockedOn(finishedRoot);
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
		}
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
		if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot)))) try {
			retryIfBlockedOn(finishedRoot);
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function getRetryCache(finishedWork) {
		switch (finishedWork.tag) {
			case 31:
			case 13:
			case 19:
				var retryCache = finishedWork.stateNode;
				null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
				return retryCache;
			case 22: return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
			default: throw Error(formatProdErrorMessage(435, finishedWork.tag));
		}
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
		var retryCache = getRetryCache(finishedWork);
		wakeables.forEach(function(wakeable) {
			if (!retryCache.has(wakeable)) {
				retryCache.add(wakeable);
				var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
				wakeable.then(retry, retry);
			}
		});
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
		var deletions = parentFiber.deletions;
		if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
			var childToDelete = deletions[i], root = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
			a: for (; null !== parent;) {
				switch (parent.tag) {
					case 27:
						if (isSingletonScope(parent.type)) {
							hostParent = parent.stateNode;
							hostParentIsContainer = !1;
							break a;
						}
						break;
					case 5:
						hostParent = parent.stateNode;
						hostParentIsContainer = !1;
						break a;
					case 3:
					case 4:
						hostParent = parent.stateNode.containerInfo;
						hostParentIsContainer = !0;
						break a;
				}
				parent = parent.return;
			}
			if (null === hostParent) throw Error(formatProdErrorMessage(160));
			commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
			hostParent = null;
			hostParentIsContainer = !1;
			root = childToDelete.alternate;
			null !== root && (root.return = null);
			childToDelete.return = null;
		}
		if (parentFiber.subtreeFlags & 13886) for (parentFiber = parentFiber.child; null !== parentFiber;) commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
		var current = finishedWork.alternate, flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
				break;
			case 1:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
				break;
			case 26:
				var hoistableRoot = currentHoistableRoot;
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				if (flags & 4) {
					var currentResource = null !== current ? current.memoizedState : null;
					flags = finishedWork.memoizedState;
					if (null === current) if (null === flags) if (null === finishedWork.stateNode) {
						a: {
							flags = finishedWork.type;
							current = finishedWork.memoizedProps;
							hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
							b: switch (flags) {
								case "title":
									currentResource = hoistableRoot.getElementsByTagName("title")[0];
									if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop")) currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(currentResource, hoistableRoot.querySelector("head > title"));
									setInitialProperties(currentResource, flags, current);
									currentResource[internalInstanceKey] = finishedWork;
									markNodeAsHoistable(currentResource);
									flags = currentResource;
									break a;
								case "link":
									var maybeNodes = getHydratableHoistableCache("link", "href", hoistableRoot).get(flags + (current.href || ""));
									if (maybeNodes) {
										for (var i = 0; i < maybeNodes.length; i++) if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
											maybeNodes.splice(i, 1);
											break b;
										}
									}
									currentResource = hoistableRoot.createElement(flags);
									setInitialProperties(currentResource, flags, current);
									hoistableRoot.head.appendChild(currentResource);
									break;
								case "meta":
									if (maybeNodes = getHydratableHoistableCache("meta", "content", hoistableRoot).get(flags + (current.content || ""))) {
										for (i = 0; i < maybeNodes.length; i++) if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
											maybeNodes.splice(i, 1);
											break b;
										}
									}
									currentResource = hoistableRoot.createElement(flags);
									setInitialProperties(currentResource, flags, current);
									hoistableRoot.head.appendChild(currentResource);
									break;
								default: throw Error(formatProdErrorMessage(468, flags));
							}
							currentResource[internalInstanceKey] = finishedWork;
							markNodeAsHoistable(currentResource);
							flags = currentResource;
						}
						finishedWork.stateNode = flags;
					} else mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode);
					else finishedWork.stateNode = acquireResource(hoistableRoot, flags, finishedWork.memoizedProps);
					else currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode) : acquireResource(hoistableRoot, flags, finishedWork.memoizedProps)) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
				}
				break;
			case 27:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				null !== current && flags & 4 && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
				break;
			case 5:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				if (finishedWork.flags & 32) {
					hoistableRoot = finishedWork.stateNode;
					try {
						setTextContent(hoistableRoot, "");
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(finishedWork, hoistableRoot, null !== current ? current.memoizedProps : hoistableRoot));
				flags & 1024 && (needsFormReset = !0);
				break;
			case 6:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				if (flags & 4) {
					if (null === finishedWork.stateNode) throw Error(formatProdErrorMessage(162));
					flags = finishedWork.memoizedProps;
					current = finishedWork.stateNode;
					try {
						current.nodeValue = flags;
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				break;
			case 3:
				tagCaches = null;
				hoistableRoot = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(root.containerInfo);
				recursivelyTraverseMutationEffects(root, finishedWork);
				currentHoistableRoot = hoistableRoot;
				commitReconciliationEffects(finishedWork);
				if (flags & 4 && null !== current && current.memoizedState.isDehydrated) try {
					retryIfBlockedOn(root.containerInfo);
				} catch (error) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error);
				}
				needsFormReset && (needsFormReset = !1, recursivelyResetForms(finishedWork));
				break;
			case 4:
				flags = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(finishedWork.stateNode.containerInfo);
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				currentHoistableRoot = flags;
				break;
			case 12:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				break;
			case 31:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 13:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 22:
				hoistableRoot = null !== finishedWork.memoizedState;
				var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
				offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
				offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
				recursivelyTraverseMutationEffects(root, finishedWork);
				offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
				offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
				commitReconciliationEffects(finishedWork);
				if (flags & 8192) a: for (root = finishedWork.stateNode, root._visibility = hoistableRoot ? root._visibility & -2 : root._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root = finishedWork;;) {
					if (5 === root.tag || 26 === root.tag) {
						if (null === current) {
							wasHidden = current = root;
							try {
								if (currentResource = wasHidden.stateNode, hoistableRoot) maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
								else {
									i = wasHidden.stateNode;
									var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
									i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
								}
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if (6 === root.tag) {
						if (null === current) {
							wasHidden = root;
							try {
								wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if (18 === root.tag) {
						if (null === current) {
							wasHidden = root;
							try {
								var instance = wasHidden.stateNode;
								hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, !0) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, !1);
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if ((22 !== root.tag && 23 !== root.tag || null === root.memoizedState || root === finishedWork) && null !== root.child) {
						root.child.return = root;
						root = root.child;
						continue;
					}
					if (root === finishedWork) break a;
					for (; null === root.sibling;) {
						if (null === root.return || root.return === finishedWork) break a;
						current === root && (current = null);
						root = root.return;
					}
					current === root && (current = null);
					root.sibling.return = root.return;
					root = root.sibling;
				}
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
				break;
			case 19:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 30: break;
			case 21: break;
			default: recursivelyTraverseMutationEffects(root, finishedWork), commitReconciliationEffects(finishedWork);
		}
	}
	function commitReconciliationEffects(finishedWork) {
		var flags = finishedWork.flags;
		if (flags & 2) {
			try {
				for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber;) {
					if (isHostParent(parentFiber)) {
						hostParentFiber = parentFiber;
						break;
					}
					parentFiber = parentFiber.return;
				}
				if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
				switch (hostParentFiber.tag) {
					case 27:
						var parent = hostParentFiber.stateNode;
						insertOrAppendPlacementNode(finishedWork, getHostSibling(finishedWork), parent);
						break;
					case 5:
						var parent$141 = hostParentFiber.stateNode;
						hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
						insertOrAppendPlacementNode(finishedWork, getHostSibling(finishedWork), parent$141);
						break;
					case 3:
					case 4:
						var parent$143 = hostParentFiber.stateNode.containerInfo;
						insertOrAppendPlacementNodeIntoContainer(finishedWork, getHostSibling(finishedWork), parent$143);
						break;
					default: throw Error(formatProdErrorMessage(161));
				}
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
			finishedWork.flags &= -3;
		}
		flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
		if (parentFiber.subtreeFlags & 1024) for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var fiber = parentFiber;
			recursivelyResetForms(fiber);
			5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
		if (parentFiber.subtreeFlags & 8772) for (parentFiber = parentFiber.child; null !== parentFiber;) commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedWork = parentFiber;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 1:
					safelyDetachRef(finishedWork, finishedWork.return);
					var instance = finishedWork.stateNode;
					"function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(finishedWork, finishedWork.return, instance);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 27: releaseSingletonInstance(finishedWork.stateNode);
				case 26:
				case 5:
					safelyDetachRef(finishedWork, finishedWork.return);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 22:
					null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 30:
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				default: recursivelyTraverseDisappearLayoutEffects(finishedWork);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
		includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 15:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					commitHookEffectListMount(4, finishedWork);
					break;
				case 1:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					current = finishedWork;
					finishedRoot = current.stateNode;
					if ("function" === typeof finishedRoot.componentDidMount) try {
						finishedRoot.componentDidMount();
					} catch (error) {
						captureCommitPhaseError(current, current.return, error);
					}
					current = finishedWork;
					finishedRoot = current.updateQueue;
					if (null !== finishedRoot) {
						var instance = current.stateNode;
						try {
							var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
							if (null !== hiddenCallbacks) for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++) callCallback(hiddenCallbacks[finishedRoot], instance);
						} catch (error) {
							captureCommitPhaseError(current, current.return, error);
						}
					}
					includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 27: commitHostSingletonAcquisition(finishedWork);
				case 26:
				case 5:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 12:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					break;
				case 31:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
					break;
				case 13:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
					break;
				case 22:
					null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 30: break;
				default: recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
		var previousCache = null;
		null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
		current = null;
		null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
		current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
		current = null;
		null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
		finishedWork = finishedWork.memoizedState.cache;
		finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(root, parentFiber, committedLanes, committedTransitions) {
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) commitPassiveMountOnFiber(root, parentFiber, committedLanes, committedTransitions), parentFiber = parentFiber.sibling;
	}
	function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
		var flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && commitHookEffectListMount(9, finishedWork);
				break;
			case 1:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 3:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
				break;
			case 12:
				if (flags & 2048) {
					recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
					finishedRoot = finishedWork.stateNode;
					try {
						var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
						"function" === typeof onPostCommit && onPostCommit(id, null === finishedWork.alternate ? "mount" : "update", finishedRoot.passiveEffectDuration, -0);
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				} else recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 31:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 13:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 23: break;
			case 22:
				_finishedWork$memoize2 = finishedWork.stateNode;
				id = finishedWork.alternate;
				null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, 0 !== (finishedWork.subtreeFlags & 10256) || !1));
				flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
				break;
			case 24:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
				break;
			default: recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
		}
	}
	function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
		includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || !1);
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 15:
					recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
					commitHookEffectListMount(8, finishedWork);
					break;
				case 23: break;
				case 22:
					var instance = finishedWork.stateNode;
					null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects));
					includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(finishedWork.alternate, finishedWork);
					break;
				case 24:
					recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
					break;
				default: recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 22:
					recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
					flags & 2048 && commitOffscreenPassiveMountEffects(finishedWork.alternate, finishedWork);
					break;
				case 24:
					recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
					flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
					break;
				default: recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
		if (parentFiber.subtreeFlags & suspenseyCommitFlag) for (parentFiber = parentFiber.child; null !== parentFiber;) accumulateSuspenseyCommitOnFiber(parentFiber, committedLanes, suspendedState), parentFiber = parentFiber.sibling;
	}
	function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
		switch (fiber.tag) {
			case 26:
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(suspendedState, currentHoistableRoot, fiber.memoizedState, fiber.memoizedProps);
				break;
			case 5:
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				break;
			case 3:
			case 4:
				var previousHoistableRoot = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				currentHoistableRoot = previousHoistableRoot;
				break;
			case 22:
				null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState));
				break;
			default: recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
		}
	}
	function detachAlternateSiblings(parentFiber) {
		var previousFiber = parentFiber.alternate;
		if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
			previousFiber.child = null;
			do
				previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
			while (null !== parentFiber);
		}
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
		var deletions = parentFiber.deletions;
		if (0 !== (parentFiber.flags & 16)) {
			if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
				var childToDelete = deletions[i];
				nextEffect = childToDelete;
				commitPassiveUnmountEffectsInsideOfDeletedTree_begin(childToDelete, parentFiber);
			}
			detachAlternateSiblings(parentFiber);
		}
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
				break;
			case 3:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			case 12:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			case 22:
				var instance = finishedWork.stateNode;
				null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			default: recursivelyTraversePassiveUnmountEffects(finishedWork);
		}
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
		var deletions = parentFiber.deletions;
		if (0 !== (parentFiber.flags & 16)) {
			if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
				var childToDelete = deletions[i];
				nextEffect = childToDelete;
				commitPassiveUnmountEffectsInsideOfDeletedTree_begin(childToDelete, parentFiber);
			}
			detachAlternateSiblings(parentFiber);
		}
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			deletions = parentFiber;
			switch (deletions.tag) {
				case 0:
				case 11:
				case 15:
					commitHookEffectListUnmount(8, deletions, deletions.return);
					recursivelyTraverseDisconnectPassiveEffects(deletions);
					break;
				case 22:
					i = deletions.stateNode;
					i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
					break;
				default: recursivelyTraverseDisconnectPassiveEffects(deletions);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
		for (; null !== nextEffect;) {
			var fiber = nextEffect;
			switch (fiber.tag) {
				case 0:
				case 11:
				case 15:
					commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
					break;
				case 23:
				case 22:
					if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
						var cache = fiber.memoizedState.cachePool.pool;
						null != cache && cache.refCount++;
					}
					break;
				case 24: releaseCache(fiber.memoizedState.cache);
			}
			cache = fiber.child;
			if (null !== cache) cache.return = fiber, nextEffect = cache;
			else a: for (fiber = deletedSubtreeRoot; null !== nextEffect;) {
				cache = nextEffect;
				var sibling = cache.sibling, returnFiber = cache.return;
				detachFiberAfterEffects(cache);
				if (cache === fiber) {
					nextEffect = null;
					break a;
				}
				if (null !== sibling) {
					sibling.return = returnFiber;
					nextEffect = sibling;
					break a;
				}
				nextEffect = returnFiber;
			}
		}
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
			void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
			return cacheForType;
		},
		cacheSignal: function() {
			return readContext(CacheContext).controller.signal;
		}
	};
	var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map;
	var executionContext = 0;
	var workInProgressRoot = null;
	var workInProgress = null;
	var workInProgressRootRenderLanes = 0;
	var workInProgressSuspendedReason = 0;
	var workInProgressThrownValue = null;
	var workInProgressRootDidSkipSuspendedSiblings = !1;
	var workInProgressRootIsPrerendering = !1;
	var workInProgressRootDidAttachPingListener = !1;
	var entangledRenderLanes = 0;
	var workInProgressRootExitStatus = 0;
	var workInProgressRootSkippedLanes = 0;
	var workInProgressRootInterleavedUpdatedLanes = 0;
	var workInProgressRootPingedLanes = 0;
	var workInProgressDeferredLane = 0;
	var workInProgressSuspendedRetryLanes = 0;
	var workInProgressRootConcurrentErrors = null;
	var workInProgressRootRecoverableErrors = null;
	var workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
	var globalMostRecentFallbackTime = 0;
	var globalMostRecentTransitionTime = 0;
	var workInProgressRootRenderTargetTime = Infinity;
	var workInProgressTransitions = null;
	var legacyErrorBoundariesThatAlreadyFailed = null;
	var pendingEffectsStatus = 0;
	var pendingEffectsRoot = null;
	var pendingFinishedWork = null;
	var pendingEffectsLanes = 0;
	var pendingEffectsRemainingLanes = 0;
	var pendingPassiveTransitions = null;
	var pendingRecoverableErrors = null;
	var nestedUpdateCount = 0;
	var rootWithNestedUpdates = null;
	function requestUpdateLane() {
		return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
	}
	function requestDeferredLane() {
		if (0 === workInProgressDeferredLane) if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
			var lane = nextTransitionDeferredLane;
			nextTransitionDeferredLane <<= 1;
			0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
			workInProgressDeferredLane = lane;
		} else workInProgressDeferredLane = 536870912;
		lane = suspenseHandlerStackCursor.current;
		null !== lane && (lane.flags |= 32);
		return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
		if (root === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root.cancelPendingCommit) prepareFreshStack(root, 0), markRootSuspended(root, workInProgressRootRenderLanes, workInProgressDeferredLane, !1);
		markRootUpdated$1(root, lane);
		if (0 === (executionContext & 2) || root !== workInProgressRoot) root === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(root, workInProgressRootRenderLanes, workInProgressDeferredLane, !1)), ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
		if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
		var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, !0), renderWasConcurrent = shouldTimeSlice;
		do {
			if (0 === exitStatus) {
				workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, !1);
				break;
			} else {
				forceSync = root$jscomp$0.current.alternate;
				if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
					exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
					renderWasConcurrent = !1;
					continue;
				}
				if (2 === exitStatus) {
					renderWasConcurrent = lanes;
					if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent) var JSCompiler_inline_result = 0;
					else JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
					if (0 !== JSCompiler_inline_result) {
						lanes = JSCompiler_inline_result;
						a: {
							var root = root$jscomp$0;
							exitStatus = workInProgressRootConcurrentErrors;
							var wasRootDehydrated = root.current.memoizedState.isDehydrated;
							wasRootDehydrated && (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
							JSCompiler_inline_result = renderRootSync(root, JSCompiler_inline_result, !1);
							if (2 !== JSCompiler_inline_result) {
								if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
									root.errorRecoveryDisabledLanes |= renderWasConcurrent;
									workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
									exitStatus = 4;
									break a;
								}
								renderWasConcurrent = workInProgressRootRecoverableErrors;
								workInProgressRootRecoverableErrors = exitStatus;
								null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, renderWasConcurrent));
							}
							exitStatus = JSCompiler_inline_result;
						}
						renderWasConcurrent = !1;
						if (2 !== exitStatus) continue;
					}
				}
				if (1 === exitStatus) {
					prepareFreshStack(root$jscomp$0, 0);
					markRootSuspended(root$jscomp$0, lanes, 0, !0);
					break;
				}
				a: {
					shouldTimeSlice = root$jscomp$0;
					renderWasConcurrent = exitStatus;
					switch (renderWasConcurrent) {
						case 0:
						case 1: throw Error(formatProdErrorMessage(345));
						case 4: if ((lanes & 4194048) !== lanes) break;
						case 6:
							markRootSuspended(shouldTimeSlice, lanes, workInProgressDeferredLane, !workInProgressRootDidSkipSuspendedSiblings);
							break a;
						case 2:
							workInProgressRootRecoverableErrors = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(formatProdErrorMessage(329));
					}
					if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
						markRootSuspended(shouldTimeSlice, lanes, workInProgressDeferredLane, !workInProgressRootDidSkipSuspendedSiblings);
						if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
						pendingEffectsLanes = lanes;
						shouldTimeSlice.timeoutHandle = scheduleTimeout(commitRootWhenReady.bind(null, shouldTimeSlice, forceSync, workInProgressRootRecoverableErrors, workInProgressTransitions, workInProgressRootDidIncludeRecursiveRenderUpdate, lanes, workInProgressDeferredLane, workInProgressRootInterleavedUpdatedLanes, workInProgressSuspendedRetryLanes, workInProgressRootDidSkipSuspendedSiblings, renderWasConcurrent, "Throttled", -0, 0), exitStatus);
						break a;
					}
					commitRootWhenReady(shouldTimeSlice, forceSync, workInProgressRootRecoverableErrors, workInProgressTransitions, workInProgressRootDidIncludeRecursiveRenderUpdate, lanes, workInProgressDeferredLane, workInProgressRootInterleavedUpdatedLanes, workInProgressSuspendedRetryLanes, workInProgressRootDidSkipSuspendedSiblings, renderWasConcurrent, null, -0, 0);
				}
			}
			break;
		} while (1);
		ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(root, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
		root.timeoutHandle = -1;
		suspendedCommitReason = finishedWork.subtreeFlags;
		if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
			suspendedCommitReason = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: noop$1
			};
			accumulateSuspenseyCommitOnFiber(finishedWork, lanes, suspendedCommitReason);
			var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
			timeoutOffset = waitForCommitToBeReady(suspendedCommitReason, timeoutOffset);
			if (null !== timeoutOffset) {
				pendingEffectsLanes = lanes;
				root.cancelPendingCommit = timeoutOffset(commitRoot.bind(null, root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes, exitStatus, suspendedCommitReason, null, completedRenderStartTime, completedRenderEndTime));
				markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
				return;
			}
		}
		commitRoot(root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes);
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
		for (var node = finishedWork;;) {
			var tag = node.tag;
			if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag))) for (var i = 0; i < tag.length; i++) {
				var check = tag[i], getSnapshot = check.getSnapshot;
				check = check.value;
				try {
					if (!objectIs(getSnapshot(), check)) return !1;
				} catch (error) {
					return !1;
				}
			}
			tag = node.child;
			if (node.subtreeFlags & 16384 && null !== tag) tag.return = node, node = tag;
			else {
				if (node === finishedWork) break;
				for (; null === node.sibling;) {
					if (null === node.return || node.return === finishedWork) return !0;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
			}
		}
		return !0;
	}
	function markRootSuspended(root, suspendedLanes, spawnedLane, didAttemptEntireTree) {
		suspendedLanes &= ~workInProgressRootPingedLanes;
		suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
		root.suspendedLanes |= suspendedLanes;
		root.pingedLanes &= ~suspendedLanes;
		didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
		didAttemptEntireTree = root.expirationTimes;
		for (var lanes = suspendedLanes; 0 < lanes;) {
			var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
			didAttemptEntireTree[index$6] = -1;
			lanes &= ~lane;
		}
		0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
		return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0, !1), !1) : !0;
	}
	function resetWorkInProgressStack() {
		if (null !== workInProgress) {
			if (0 === workInProgressSuspendedReason) var interruptedWork = workInProgress.return;
			else interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
			for (; null !== interruptedWork;) unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
			workInProgress = null;
		}
	}
	function prepareFreshStack(root, lanes) {
		var timeoutHandle = root.timeoutHandle;
		-1 !== timeoutHandle && (root.timeoutHandle = -1, cancelTimeout(timeoutHandle));
		timeoutHandle = root.cancelPendingCommit;
		null !== timeoutHandle && (root.cancelPendingCommit = null, timeoutHandle());
		pendingEffectsLanes = 0;
		resetWorkInProgressStack();
		workInProgressRoot = root;
		workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
		workInProgressRootRenderLanes = lanes;
		workInProgressSuspendedReason = 0;
		workInProgressThrownValue = null;
		workInProgressRootDidSkipSuspendedSiblings = !1;
		workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
		workInProgressRootDidAttachPingListener = !1;
		workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
		workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
		workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
		0 !== (lanes & 8) && (lanes |= lanes & 32);
		var allEntangledLanes = root.entangledLanes;
		if (0 !== allEntangledLanes) for (root = root.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes;) {
			var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
			lanes |= root[index$4];
			allEntangledLanes &= ~lane;
		}
		entangledRenderLanes = lanes;
		finishQueueingConcurrentUpdates();
		return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
		currentlyRenderingFiber = null;
		ReactSharedInternals.H = ContextOnlyDispatcher;
		thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
		workInProgressThrownValue = thrownValue;
		null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current)));
	}
	function shouldRemainOnPreviousScreen() {
		var handler = suspenseHandlerStackCursor.current;
		return null === handler ? !0 : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? !0 : !1 : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : !1;
	}
	function pushDispatcher() {
		var prevDispatcher = ReactSharedInternals.H;
		ReactSharedInternals.H = ContextOnlyDispatcher;
		return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
		var prevAsyncDispatcher = ReactSharedInternals.A;
		ReactSharedInternals.A = DefaultAsyncDispatcher;
		return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
		workInProgressRootExitStatus = 4;
		workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = !0);
		0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(workInProgressRoot, workInProgressRootRenderLanes, workInProgressDeferredLane, !1);
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
		var prevExecutionContext = executionContext;
		executionContext |= 2;
		var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
		if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) workInProgressTransitions = null, prepareFreshStack(root, lanes);
		lanes = !1;
		var exitStatus = workInProgressRootExitStatus;
		a: do
			try {
				if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
					var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
					switch (workInProgressSuspendedReason) {
						case 8:
							resetWorkInProgressStack();
							exitStatus = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							null === suspenseHandlerStackCursor.current && (lanes = !0);
							var reason = workInProgressSuspendedReason;
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
							if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
								exitStatus = 0;
								break a;
							}
							break;
						default: reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
					}
				}
				workLoopSync();
				exitStatus = workInProgressRootExitStatus;
				break;
			} catch (thrownValue$165) {
				handleThrow(root, thrownValue$165);
			}
		while (1);
		lanes && root.shellSuspendCounter++;
		lastContextDependency = currentlyRenderingFiber$1 = null;
		executionContext = prevExecutionContext;
		ReactSharedInternals.H = prevDispatcher;
		ReactSharedInternals.A = prevAsyncDispatcher;
		null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
		return exitStatus;
	}
	function workLoopSync() {
		for (; null !== workInProgress;) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
		var prevExecutionContext = executionContext;
		executionContext |= 2;
		var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
		workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
		a: do
			try {
				if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
					lanes = workInProgress;
					var thrownValue = workInProgressThrownValue;
					b: switch (workInProgressSuspendedReason) {
						case 1:
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
							break;
						case 2:
						case 9:
							if (isThenableResolved(thrownValue)) {
								workInProgressSuspendedReason = 0;
								workInProgressThrownValue = null;
								replaySuspendedUnitOfWork(lanes);
								break;
							}
							lanes = function() {
								2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root || (workInProgressSuspendedReason = 7);
								ensureRootIsScheduled(root);
							};
							thrownValue.then(lanes, lanes);
							break a;
						case 3:
							workInProgressSuspendedReason = 7;
							break a;
						case 4:
							workInProgressSuspendedReason = 5;
							break a;
						case 7:
							isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
							break;
						case 5:
							var resource = null;
							switch (workInProgress.tag) {
								case 26: resource = workInProgress.memoizedState;
								case 5:
								case 27:
									var hostFiber = workInProgress;
									if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
										workInProgressSuspendedReason = 0;
										workInProgressThrownValue = null;
										var sibling = hostFiber.sibling;
										if (null !== sibling) workInProgress = sibling;
										else {
											var returnFiber = hostFiber.return;
											null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
										}
										break b;
									}
							}
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
							break;
						case 6:
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
							break;
						case 8:
							resetWorkInProgressStack();
							workInProgressRootExitStatus = 6;
							break a;
						default: throw Error(formatProdErrorMessage(462));
					}
				}
				workLoopConcurrentByScheduler();
				break;
			} catch (thrownValue$167) {
				handleThrow(root, thrownValue$167);
			}
		while (1);
		lastContextDependency = currentlyRenderingFiber$1 = null;
		ReactSharedInternals.H = prevDispatcher;
		ReactSharedInternals.A = prevAsyncDispatcher;
		executionContext = prevExecutionContext;
		if (null !== workInProgress) return 0;
		workInProgressRoot = null;
		workInProgressRootRenderLanes = 0;
		finishQueueingConcurrentUpdates();
		return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
		for (; null !== workInProgress && !shouldYield();) performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
		var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
		unitOfWork.memoizedProps = unitOfWork.pendingProps;
		null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
		var next = unitOfWork;
		var current = next.alternate;
		switch (next.tag) {
			case 15:
			case 0:
				next = replayFunctionComponent(current, next, next.pendingProps, next.type, void 0, workInProgressRootRenderLanes);
				break;
			case 11:
				next = replayFunctionComponent(current, next, next.pendingProps, next.type.render, next.ref, workInProgressRootRenderLanes);
				break;
			case 5: resetHooksOnUnwind(next);
			default: unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
		}
		unitOfWork.memoizedProps = unitOfWork.pendingProps;
		null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, suspendedReason) {
		lastContextDependency = currentlyRenderingFiber$1 = null;
		resetHooksOnUnwind(unitOfWork);
		thenableState$1 = null;
		thenableIndexCounter$1 = 0;
		var returnFiber = unitOfWork.return;
		try {
			if (throwException(root, returnFiber, unitOfWork, thrownValue, workInProgressRootRenderLanes)) {
				workInProgressRootExitStatus = 1;
				logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current));
				workInProgress = null;
				return;
			}
		} catch (error) {
			if (null !== returnFiber) throw workInProgress = returnFiber, error;
			workInProgressRootExitStatus = 1;
			logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current));
			workInProgress = null;
			return;
		}
		if (unitOfWork.flags & 32768) {
			if (isHydrating || 1 === suspendedReason) root = !0;
			else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912)) root = !1;
			else if (workInProgressRootDidSkipSuspendedSiblings = root = !0, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason) suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
			unwindUnitOfWork(unitOfWork, root);
		} else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
		var completedWork = unitOfWork;
		do {
			if (0 !== (completedWork.flags & 32768)) {
				unwindUnitOfWork(completedWork, workInProgressRootDidSkipSuspendedSiblings);
				return;
			}
			unitOfWork = completedWork.return;
			var next = completeWork(completedWork.alternate, completedWork, entangledRenderLanes);
			if (null !== next) {
				workInProgress = next;
				return;
			}
			completedWork = completedWork.sibling;
			if (null !== completedWork) {
				workInProgress = completedWork;
				return;
			}
			workInProgress = completedWork = unitOfWork;
		} while (null !== completedWork);
		0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
		do {
			var next = unwindWork(unitOfWork.alternate, unitOfWork);
			if (null !== next) {
				next.flags &= 32767;
				workInProgress = next;
				return;
			}
			next = unitOfWork.return;
			null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
			if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
				workInProgress = unitOfWork;
				return;
			}
			workInProgress = unitOfWork = next;
		} while (null !== unitOfWork);
		workInProgressRootExitStatus = 6;
		workInProgress = null;
	}
	function commitRoot(root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
		root.cancelPendingCommit = null;
		do
			flushPendingEffects();
		while (0 !== pendingEffectsStatus);
		if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
		if (null !== finishedWork) {
			if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
			didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
			didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
			markRootFinished(root, lanes, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes);
			root === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
			pendingFinishedWork = finishedWork;
			pendingEffectsRoot = root;
			pendingEffectsLanes = lanes;
			pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
			pendingPassiveTransitions = transitions;
			pendingRecoverableErrors = recoverableErrors;
			0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root.callbackNode = null, root.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
				flushPassiveEffects();
				return null;
			})) : (root.callbackNode = null, root.callbackPriority = 0);
			recoverableErrors = 0 !== (finishedWork.flags & 13878);
			if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
				recoverableErrors = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				transitions = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				spawnedLane = executionContext;
				executionContext |= 4;
				try {
					commitBeforeMutationEffects(root, finishedWork, lanes);
				} finally {
					executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
				}
			}
			pendingEffectsStatus = 1;
			flushMutationEffects();
			flushLayoutEffects();
			flushSpawnedWork();
		}
	}
	function flushMutationEffects() {
		if (1 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
			if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
				rootMutationHasEffect = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				var previousPriority = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				var prevExecutionContext = executionContext;
				executionContext |= 4;
				try {
					commitMutationEffectsOnFiber(finishedWork, root);
					var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
					if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(priorFocusedElem.ownerDocument.documentElement, priorFocusedElem)) {
						if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
							var start = priorSelectionRange.start, end = priorSelectionRange.end;
							void 0 === end && (end = start);
							if ("selectionStart" in priorFocusedElem) priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(end, priorFocusedElem.value.length);
							else {
								var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
								if (win.getSelection) {
									var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
									!selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
									var startMarker = getNodeForCharacterOffset(priorFocusedElem, start$jscomp$0), endMarker = getNodeForCharacterOffset(priorFocusedElem, end$jscomp$0);
									if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
										var range = doc.createRange();
										range.setStart(startMarker.node, startMarker.offset);
										selection.removeAllRanges();
										start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
									}
								}
							}
						}
						doc = [];
						for (selection = priorFocusedElem; selection = selection.parentNode;) 1 === selection.nodeType && doc.push({
							element: selection,
							left: selection.scrollLeft,
							top: selection.scrollTop
						});
						"function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
						for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
							var info = doc[priorFocusedElem];
							info.element.scrollLeft = info.left;
							info.element.scrollTop = info.top;
						}
					}
					_enabled = !!eventsEnabled;
					selectionInformation = eventsEnabled = null;
				} finally {
					executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
				}
			}
			root.current = finishedWork;
			pendingEffectsStatus = 2;
		}
	}
	function flushLayoutEffects() {
		if (2 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
			if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
				rootHasLayoutEffect = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				var previousPriority = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				var prevExecutionContext = executionContext;
				executionContext |= 4;
				try {
					commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
				} finally {
					executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
				}
			}
			pendingEffectsStatus = 3;
		}
	}
	function flushSpawnedWork() {
		if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			requestPaint();
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
			0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root, root.pendingLanes));
			var remainingLanes = root.pendingLanes;
			0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
			lanesToEventPriority(lanes);
			finishedWork = finishedWork.stateNode;
			if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot) try {
				injectedHook.onCommitFiberRoot(rendererID, finishedWork, void 0, 128 === (finishedWork.current.flags & 128));
			} catch (err) {}
			if (null !== recoverableErrors) {
				finishedWork = ReactSharedInternals.T;
				remainingLanes = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				ReactSharedInternals.T = null;
				try {
					for (var onRecoverableError = root.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
						var recoverableError = recoverableErrors[i];
						onRecoverableError(recoverableError.value, { componentStack: recoverableError.stack });
					}
				} finally {
					ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
				}
			}
			0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
			ensureRootIsScheduled(root);
			remainingLanes = root.pendingLanes;
			0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root) : nestedUpdateCount = 0;
			flushSyncWorkAcrossRoots_impl(0, !1);
		}
	}
	function releaseRootPooledCache(root, remainingLanes) {
		0 === (root.pooledCacheLanes &= remainingLanes) && (remainingLanes = root.pooledCache, null != remainingLanes && (root.pooledCache = null, releaseCache(remainingLanes)));
	}
	function flushPendingEffects() {
		flushMutationEffects();
		flushLayoutEffects();
		flushSpawnedWork();
		return flushPassiveEffects();
	}
	function flushPassiveEffects() {
		if (5 !== pendingEffectsStatus) return !1;
		var root = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
		pendingEffectsRemainingLanes = 0;
		var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
			ReactSharedInternals.T = null;
			renderPriority = pendingPassiveTransitions;
			pendingPassiveTransitions = null;
			var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
			pendingEffectsStatus = 0;
			pendingFinishedWork = pendingEffectsRoot = null;
			pendingEffectsLanes = 0;
			if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
			var prevExecutionContext = executionContext;
			executionContext |= 4;
			commitPassiveUnmountOnFiber(root$jscomp$0.current);
			commitPassiveMountOnFiber(root$jscomp$0, root$jscomp$0.current, lanes, renderPriority);
			executionContext = prevExecutionContext;
			flushSyncWorkAcrossRoots_impl(0, !1);
			if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot) try {
				injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
			} catch (err) {}
			return !0;
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root, remainingLanes);
		}
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
		sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
		sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
		rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
		null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
		if (3 === sourceFiber.tag) captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
		else for (; null !== nearestMountedAncestor;) {
			if (3 === nearestMountedAncestor.tag) {
				captureCommitPhaseErrorOnRoot(nearestMountedAncestor, sourceFiber, error);
				break;
			} else if (1 === nearestMountedAncestor.tag) {
				var instance = nearestMountedAncestor.stateNode;
				if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
					sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
					error = createClassErrorUpdate(2);
					instance = enqueueUpdate(nearestMountedAncestor, error, 2);
					null !== instance && (initializeClassErrorUpdate(error, instance, nearestMountedAncestor, sourceFiber), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
					break;
				}
			}
			nearestMountedAncestor = nearestMountedAncestor.return;
		}
	}
	function attachPingListener(root, wakeable, lanes) {
		var pingCache = root.pingCache;
		if (null === pingCache) {
			pingCache = root.pingCache = new PossiblyWeakMap();
			var threadIDs = /* @__PURE__ */ new Set();
			pingCache.set(wakeable, threadIDs);
		} else threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
		threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = !0, threadIDs.add(lanes), root = pingSuspendedRoot.bind(null, root, wakeable, lanes), wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
		var pingCache = root.pingCache;
		null !== pingCache && pingCache.delete(wakeable);
		root.pingedLanes |= root.suspendedLanes & pingedLanes;
		root.warmLanes &= ~pingedLanes;
		workInProgressRoot === root && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
		ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
		0 === retryLane && (retryLane = claimNextRetryLane());
		boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
		null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
		var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
		null !== suspenseState && (retryLane = suspenseState.retryLane);
		retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
		var retryLane = 0;
		switch (boundaryFiber.tag) {
			case 31:
			case 13:
				var retryCache = boundaryFiber.stateNode;
				var suspenseState = boundaryFiber.memoizedState;
				null !== suspenseState && (retryLane = suspenseState.retryLane);
				break;
			case 19:
				retryCache = boundaryFiber.stateNode;
				break;
			case 22:
				retryCache = boundaryFiber.stateNode._retryCache;
				break;
			default: throw Error(formatProdErrorMessage(314));
		}
		null !== retryCache && retryCache.delete(wakeable);
		retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
		return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null;
	var lastScheduledRoot = null;
	var didScheduleMicrotask = !1;
	var mightHavePendingSyncWork = !1;
	var isFlushingWork = !1;
	var currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
		root !== lastScheduledRoot && null === root.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root : lastScheduledRoot = lastScheduledRoot.next = root);
		mightHavePendingSyncWork = !0;
		didScheduleMicrotask || (didScheduleMicrotask = !0, scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
		if (!isFlushingWork && mightHavePendingSyncWork) {
			isFlushingWork = !0;
			do {
				var didPerformSomeWork = !1;
				for (var root$170 = firstScheduledRoot; null !== root$170;) {
					if (!onlyLegacy) if (0 !== syncTransitionLanes) {
						var pendingLanes = root$170.pendingLanes;
						if (0 === pendingLanes) var JSCompiler_inline_result = 0;
						else {
							var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
							JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
							JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
							JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
						}
						0 !== JSCompiler_inline_result && (didPerformSomeWork = !0, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
					} else JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(root$170, root$170 === workInProgressRoot ? JSCompiler_inline_result : 0, null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = !0, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
					root$170 = root$170.next;
				}
			} while (didPerformSomeWork);
			isFlushingWork = !1;
		}
	}
	function processRootScheduleInImmediateTask() {
		processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
		mightHavePendingSyncWork = didScheduleMicrotask = !1;
		var syncTransitionLanes = 0;
		0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
		for (var currentTime = now(), prev = null, root = firstScheduledRoot; null !== root;) {
			var next = root.next, nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
			if (0 === nextLanes) root.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
			else if (prev = root, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3)) mightHavePendingSyncWork = !0;
			root = next;
		}
		0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
		0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
		for (var suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes, expirationTimes = root.expirationTimes, lanes = root.pendingLanes & -62914561; 0 < lanes;) {
			var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
			if (-1 === expirationTime) {
				if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes)) expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
			} else expirationTime <= currentTime && (root.expiredLanes |= lane);
			lanes &= ~lane;
		}
		currentTime = workInProgressRoot;
		suspendedLanes = workInProgressRootRenderLanes;
		suspendedLanes = getNextLanes(root, root === currentTime ? suspendedLanes : 0, null !== root.cancelPendingCommit || -1 !== root.timeoutHandle);
		pingedLanes = root.callbackNode;
		if (0 === suspendedLanes || root === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root.cancelPendingCommit) return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root.callbackNode = null, root.callbackPriority = 0;
		if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root, suspendedLanes)) {
			currentTime = suspendedLanes & -suspendedLanes;
			if (currentTime === root.callbackPriority) return currentTime;
			null !== pingedLanes && cancelCallback$1(pingedLanes);
			switch (lanesToEventPriority(suspendedLanes)) {
				case 2:
				case 8:
					suspendedLanes = UserBlockingPriority;
					break;
				case 32:
					suspendedLanes = NormalPriority$1;
					break;
				case 268435456:
					suspendedLanes = IdlePriority;
					break;
				default: suspendedLanes = NormalPriority$1;
			}
			pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
			suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
			root.callbackPriority = currentTime;
			root.callbackNode = suspendedLanes;
			return currentTime;
		}
		null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
		root.callbackPriority = 2;
		root.callbackNode = null;
		return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
		if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) return root.callbackNode = null, root.callbackPriority = 0, null;
		var originalCallbackNode = root.callbackNode;
		if (flushPendingEffects() && root.callbackNode !== originalCallbackNode) return null;
		var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
		workInProgressRootRenderLanes$jscomp$0 = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0, null !== root.cancelPendingCommit || -1 !== root.timeoutHandle);
		if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
		performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
		scheduleTaskForRootDuringMicrotask(root, now());
		return null != root.callbackNode && root.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root) : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
		if (flushPendingEffects()) return null;
		performWorkOnRoot(root, lanes, !0);
	}
	function scheduleImmediateRootScheduleTask() {
		scheduleMicrotask(function() {
			0 !== (executionContext & 6) ? scheduleCallback$3(ImmediatePriority, processRootScheduleInImmediateTask) : processRootScheduleInMicrotask();
		});
	}
	function requestTransitionLane() {
		if (0 === currentEventTransitionLane) {
			var actionScopeLane = currentEntangledLane;
			0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
			currentEventTransitionLane = actionScopeLane;
		}
		return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
		return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
		var temp = submitter.ownerDocument.createElement("input");
		temp.name = submitter.name;
		temp.value = submitter.value;
		form.id && temp.setAttribute("form", form.id);
		submitter.parentNode.insertBefore(temp, submitter);
		form = new FormData(form);
		temp.parentNode.removeChild(temp);
		return form;
	}
	function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
		if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
			var action = coerceFormActionProp((nativeEventTarget[internalPropsKey] || null).action), submitter = nativeEvent.submitter;
			submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
			var event = new SyntheticEvent("action", "action", null, nativeEvent, nativeEventTarget);
			dispatchQueue.push({
				event,
				listeners: [{
					instance: null,
					listener: function() {
						if (nativeEvent.defaultPrevented) {
							if (0 !== currentEventTransitionLane) {
								var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
								startHostTransition(maybeTargetInst, {
									pending: !0,
									data: formData,
									method: nativeEventTarget.method,
									action
								}, null, formData);
							}
						} else "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(maybeTargetInst, {
							pending: !0,
							data: formData,
							method: nativeEventTarget.method,
							action
						}, action, formData));
					},
					currentTarget: nativeEventTarget
				}]
			});
		}
	}
	for (var i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
		var eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577];
		registerSimpleEvent(eventName$jscomp$inline_1578.toLowerCase(), "on" + (eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1)));
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	registerTwoPhaseEvent("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	registerTwoPhaseEvent("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	registerTwoPhaseEvent("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	registerTwoPhaseEvent("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	registerTwoPhaseEvent("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
	var nonDelegatedEvents = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes));
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
		eventSystemFlags = 0 !== (eventSystemFlags & 4);
		for (var i = 0; i < dispatchQueue.length; i++) {
			var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
			_dispatchQueue$i = _dispatchQueue$i.listeners;
			a: {
				var previousInstance = void 0;
				if (eventSystemFlags) for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
					var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
					_dispatchListeners$i = _dispatchListeners$i.listener;
					if (instance !== previousInstance && event.isPropagationStopped()) break a;
					previousInstance = _dispatchListeners$i;
					event.currentTarget = currentTarget;
					try {
						previousInstance(event);
					} catch (error) {
						reportGlobalError(error);
					}
					event.currentTarget = null;
					previousInstance = instance;
				}
				else for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
					_dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
					instance = _dispatchListeners$i.instance;
					currentTarget = _dispatchListeners$i.currentTarget;
					_dispatchListeners$i = _dispatchListeners$i.listener;
					if (instance !== previousInstance && event.isPropagationStopped()) break a;
					previousInstance = _dispatchListeners$i;
					event.currentTarget = currentTarget;
					try {
						previousInstance(event);
					} catch (error) {
						reportGlobalError(error);
					}
					event.currentTarget = null;
					previousInstance = instance;
				}
			}
		}
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
		var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
		void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
		var listenerSetKey = domEventName + "__bubble";
		JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, !1), JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
		var eventSystemFlags = 0;
		isCapturePhaseListener && (eventSystemFlags |= 4);
		addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
		if (!rootContainerElement[listeningMarker]) {
			rootContainerElement[listeningMarker] = !0;
			allNativeEvents.forEach(function(domEventName) {
				"selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, !1, rootContainerElement), listenToNativeEvent(domEventName, !0, rootContainerElement));
			});
			var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
			null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = !0, listenToNativeEvent("selectionchange", !1, ownerDocument));
		}
	}
	function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
		switch (getEventPriority(domEventName)) {
			case 2:
				var listenerWrapper = dispatchDiscreteEvent;
				break;
			case 8:
				listenerWrapper = dispatchContinuousEvent;
				break;
			default: listenerWrapper = dispatchEvent;
		}
		eventSystemFlags = listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
		listenerWrapper = void 0;
		!passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = !0);
		isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
			capture: !0,
			passive: listenerWrapper
		}) : targetContainer.addEventListener(domEventName, eventSystemFlags, !0) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, { passive: listenerWrapper }) : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
	}
	function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
		var ancestorInst = targetInst$jscomp$0;
		if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0) a: for (;;) {
			if (null === targetInst$jscomp$0) return;
			var nodeTag = targetInst$jscomp$0.tag;
			if (3 === nodeTag || 4 === nodeTag) {
				var container = targetInst$jscomp$0.stateNode.containerInfo;
				if (container === targetContainer) break;
				if (4 === nodeTag) for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag;) {
					var grandTag = nodeTag.tag;
					if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer) return;
					nodeTag = nodeTag.return;
				}
				for (; null !== container;) {
					nodeTag = getClosestInstanceFromNode(container);
					if (null === nodeTag) return;
					grandTag = nodeTag.tag;
					if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
						targetInst$jscomp$0 = ancestorInst = nodeTag;
						continue a;
					}
					container = container.parentNode;
				}
			}
			targetInst$jscomp$0 = targetInst$jscomp$0.return;
		}
		batchedUpdates$1(function() {
			var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
			a: {
				var reactName = topLevelEventsToReactNames.get(domEventName);
				if (void 0 !== reactName) {
					var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
					switch (domEventName) {
						case "keypress": if (0 === getEventCharCode(nativeEvent)) break a;
						case "keydown":
						case "keyup":
							SyntheticEventCtor = SyntheticKeyboardEvent;
							break;
						case "focusin":
							reactEventType = "focus";
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "focusout":
							reactEventType = "blur";
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "beforeblur":
						case "afterblur":
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "click": if (2 === nativeEvent.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							SyntheticEventCtor = SyntheticMouseEvent;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							SyntheticEventCtor = SyntheticDragEvent;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							SyntheticEventCtor = SyntheticTouchEvent;
							break;
						case ANIMATION_END:
						case ANIMATION_ITERATION:
						case ANIMATION_START:
							SyntheticEventCtor = SyntheticAnimationEvent;
							break;
						case TRANSITION_END:
							SyntheticEventCtor = SyntheticTransitionEvent;
							break;
						case "scroll":
						case "scrollend":
							SyntheticEventCtor = SyntheticUIEvent;
							break;
						case "wheel":
							SyntheticEventCtor = SyntheticWheelEvent;
							break;
						case "copy":
						case "cut":
						case "paste":
							SyntheticEventCtor = SyntheticClipboardEvent;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							SyntheticEventCtor = SyntheticPointerEvent;
							break;
						case "toggle":
						case "beforetoggle": SyntheticEventCtor = SyntheticToggleEvent;
					}
					var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
					inCapturePhase = [];
					for (var instance = targetInst, lastHostComponent; null !== instance;) {
						var _instance = instance;
						lastHostComponent = _instance.stateNode;
						_instance = _instance.tag;
						5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(createDispatchListener(instance, _instance, lastHostComponent)));
						if (accumulateTargetOnly) break;
						instance = instance.return;
					}
					0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget), dispatchQueue.push({
						event: reactName,
						listeners: inCapturePhase
					}));
				}
			}
			if (0 === (eventSystemFlags & 7)) {
				a: {
					reactName = "mouseover" === domEventName || "pointerover" === domEventName;
					SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
					if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey])) break a;
					if (SyntheticEventCtor || reactName) {
						reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
						if (SyntheticEventCtor) {
							if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase)) reactEventType = null;
						} else SyntheticEventCtor = null, reactEventType = targetInst;
						if (SyntheticEventCtor !== reactEventType) {
							inCapturePhase = SyntheticMouseEvent;
							_instance = "onMouseLeave";
							reactEventName = "onMouseEnter";
							instance = "mouse";
							if ("pointerout" === domEventName || "pointerover" === domEventName) inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
							accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
							lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
							reactName = new inCapturePhase(_instance, instance + "leave", SyntheticEventCtor, nativeEvent, nativeEventTarget);
							reactName.target = accumulateTargetOnly;
							reactName.relatedTarget = lastHostComponent;
							_instance = null;
							getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(reactEventName, instance + "enter", reactEventType, nativeEvent, nativeEventTarget), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
							accumulateTargetOnly = _instance;
							if (SyntheticEventCtor && reactEventType) b: {
								inCapturePhase = getParent;
								reactEventName = SyntheticEventCtor;
								instance = reactEventType;
								lastHostComponent = 0;
								for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance)) lastHostComponent++;
								_instance = 0;
								for (var tempB = instance; tempB; tempB = inCapturePhase(tempB)) _instance++;
								for (; 0 < lastHostComponent - _instance;) reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
								for (; 0 < _instance - lastHostComponent;) instance = inCapturePhase(instance), _instance--;
								for (; lastHostComponent--;) {
									if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
										inCapturePhase = reactEventName;
										break b;
									}
									reactEventName = inCapturePhase(reactEventName);
									instance = inCapturePhase(instance);
								}
								inCapturePhase = null;
							}
							else inCapturePhase = null;
							null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(dispatchQueue, reactName, SyntheticEventCtor, inCapturePhase, !1);
							null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(dispatchQueue, accumulateTargetOnly, reactEventType, inCapturePhase, !0);
						}
					}
				}
				a: {
					reactName = targetInst ? getNodeFromInstance(targetInst) : window;
					SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
					if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type) var getTargetInstFunc = getTargetInstForChangeEvent;
					else if (isTextInputElement(reactName)) if (isInputEventSupported) getTargetInstFunc = getTargetInstForInputOrChangeEvent;
					else {
						getTargetInstFunc = getTargetInstForInputEventPolyfill;
						var handleEventFunc = handleEventsForInputEventPolyfill;
					}
					else SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
					if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
						createAndAccumulateChangeEvent(dispatchQueue, getTargetInstFunc, nativeEvent, nativeEventTarget);
						break a;
					}
					handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
					"focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
				}
				handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
				switch (domEventName) {
					case "focusin":
						if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable) activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
						break;
					case "focusout":
						lastSelection = activeElementInst = activeElement = null;
						break;
					case "mousedown":
						mouseDown = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						mouseDown = !1;
						constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
						break;
					case "selectionchange": if (skipSelectionChangeEvent) break;
					case "keydown":
					case "keyup": constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
				}
				var fallbackData;
				if (canUseCompositionEvent) b: {
					switch (domEventName) {
						case "compositionstart":
							var eventType = "onCompositionStart";
							break b;
						case "compositionend":
							eventType = "onCompositionEnd";
							break b;
						case "compositionupdate":
							eventType = "onCompositionUpdate";
							break b;
					}
					eventType = void 0;
				}
				else isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
				eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = !0)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget), dispatchQueue.push({
					event: eventType,
					listeners: handleEventFunc
				}), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
				if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent)) eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent("onBeforeInput", "beforeinput", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
					event: handleEventFunc,
					listeners: eventType
				}), handleEventFunc.data = fallbackData);
				extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
			}
			processDispatchQueue(dispatchQueue, eventSystemFlags);
		});
	}
	function createDispatchListener(instance, listener, currentTarget) {
		return {
			instance,
			listener,
			currentTarget
		};
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
		for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber;) {
			var _instance2 = targetFiber, stateNode = _instance2.stateNode;
			_instance2 = _instance2.tag;
			5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(createDispatchListener(targetFiber, _instance2, stateNode)), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(createDispatchListener(targetFiber, _instance2, stateNode)));
			if (3 === targetFiber.tag) return listeners;
			targetFiber = targetFiber.return;
		}
		return [];
	}
	function getParent(inst) {
		if (null === inst) return null;
		do
			inst = inst.return;
		while (inst && 5 !== inst.tag && 27 !== inst.tag);
		return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
		for (var registrationName = event._reactName, listeners = []; null !== target && target !== common;) {
			var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
			_instance3 = _instance3.tag;
			if (null !== alternate && alternate === common) break;
			5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(createDispatchListener(target, stateNode, alternate))) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(createDispatchListener(target, stateNode, alternate))));
			target = target.return;
		}
		0 !== listeners.length && dispatchQueue.push({
			event,
			listeners
		});
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
	var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
		return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
		clientText = normalizeMarkupForTextOrAttribute(clientText);
		return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
	}
	function setProp(domElement, tag, key, value, props, prevValue) {
		switch (key) {
			case "children":
				"string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
				break;
			case "className":
				setValueForKnownAttribute(domElement, "class", value);
				break;
			case "tabIndex":
				setValueForKnownAttribute(domElement, "tabindex", value);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				setValueForKnownAttribute(domElement, key, value);
				break;
			case "style":
				setValueForStyles(domElement, value, prevValue);
				break;
			case "data": if ("object" !== tag) {
				setValueForKnownAttribute(domElement, "data", value);
				break;
			}
			case "src":
			case "href":
				if ("" === value && ("a" !== tag || "href" !== key)) {
					domElement.removeAttribute(key);
					break;
				}
				if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
					domElement.removeAttribute(key);
					break;
				}
				value = sanitizeURL("" + value);
				domElement.setAttribute(key, value);
				break;
			case "action":
			case "formAction":
				if ("function" === typeof value) {
					domElement.setAttribute(key, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(domElement, tag, "formEncType", props.formEncType, props, null), setProp(domElement, tag, "formMethod", props.formMethod, props, null), setProp(domElement, tag, "formTarget", props.formTarget, props, null)) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
				if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
					domElement.removeAttribute(key);
					break;
				}
				value = sanitizeURL("" + value);
				domElement.setAttribute(key, value);
				break;
			case "onClick":
				null != value && (domElement.onclick = noop$1);
				break;
			case "onScroll":
				null != value && listenToNonDelegatedEvent("scroll", domElement);
				break;
			case "onScrollEnd":
				null != value && listenToNonDelegatedEvent("scrollend", domElement);
				break;
			case "dangerouslySetInnerHTML":
				if (null != value) {
					if ("object" !== typeof value || !("__html" in value)) throw Error(formatProdErrorMessage(61));
					key = value.__html;
					if (null != key) {
						if (null != props.children) throw Error(formatProdErrorMessage(60));
						domElement.innerHTML = key;
					}
				}
				break;
			case "multiple":
				domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
				break;
			case "muted":
				domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
					domElement.removeAttribute("xlink:href");
					break;
				}
				key = sanitizeURL("" + value);
				domElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", key);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
				break;
			case "capture":
			case "download":
				!0 === value ? domElement.setAttribute(key, "") : !1 !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
				break;
			case "rowSpan":
			case "start":
				null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
				break;
			case "popover":
				listenToNonDelegatedEvent("beforetoggle", domElement);
				listenToNonDelegatedEvent("toggle", domElement);
				setValueForAttribute(domElement, "popover", value);
				break;
			case "xlinkActuate":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:actuate", value);
				break;
			case "xlinkArcrole":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:arcrole", value);
				break;
			case "xlinkRole":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:role", value);
				break;
			case "xlinkShow":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:show", value);
				break;
			case "xlinkTitle":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:title", value);
				break;
			case "xlinkType":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:type", value);
				break;
			case "xmlBase":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:base", value);
				break;
			case "xmlLang":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:lang", value);
				break;
			case "xmlSpace":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:space", value);
				break;
			case "is":
				setValueForAttribute(domElement, "is", value);
				break;
			case "innerText":
			case "textContent": break;
			default: if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1]) key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
		}
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
		switch (key) {
			case "style":
				setValueForStyles(domElement, value, prevValue);
				break;
			case "dangerouslySetInnerHTML":
				if (null != value) {
					if ("object" !== typeof value || !("__html" in value)) throw Error(formatProdErrorMessage(61));
					key = value.__html;
					if (null != key) {
						if (null != props.children) throw Error(formatProdErrorMessage(60));
						domElement.innerHTML = key;
					}
				}
				break;
			case "children":
				"string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
				break;
			case "onScroll":
				null != value && listenToNonDelegatedEvent("scroll", domElement);
				break;
			case "onScrollEnd":
				null != value && listenToNonDelegatedEvent("scrollend", domElement);
				break;
			case "onClick":
				null != value && (domElement.onclick = noop$1);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!registrationNameDependencies.hasOwnProperty(key)) a: {
				if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
					"function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
					domElement.addEventListener(tag, value, props);
					break a;
				}
				key in domElement ? domElement[key] = value : !0 === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
			}
		}
	}
	function setInitialProperties(domElement, tag, props) {
		switch (tag) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				listenToNonDelegatedEvent("error", domElement);
				listenToNonDelegatedEvent("load", domElement);
				var hasSrc = !1, hasSrcSet = !1, propKey;
				for (propKey in props) if (props.hasOwnProperty(propKey)) {
					var propValue = props[propKey];
					if (null != propValue) switch (propKey) {
						case "src":
							hasSrc = !0;
							break;
						case "srcSet":
							hasSrcSet = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(137, tag));
						default: setProp(domElement, tag, propKey, propValue, props, null);
					}
				}
				hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
				hasSrc && setProp(domElement, tag, "src", props.src, props, null);
				return;
			case "input":
				listenToNonDelegatedEvent("invalid", domElement);
				var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
				for (hasSrc in props) if (props.hasOwnProperty(hasSrc)) {
					var propValue$184 = props[hasSrc];
					if (null != propValue$184) switch (hasSrc) {
						case "name":
							hasSrcSet = propValue$184;
							break;
						case "type":
							propValue = propValue$184;
							break;
						case "checked":
							checked = propValue$184;
							break;
						case "defaultChecked":
							defaultChecked = propValue$184;
							break;
						case "value":
							propKey = propValue$184;
							break;
						case "defaultValue":
							defaultValue = propValue$184;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (null != propValue$184) throw Error(formatProdErrorMessage(137, tag));
							break;
						default: setProp(domElement, tag, hasSrc, propValue$184, props, null);
					}
				}
				initInput(domElement, propKey, defaultValue, checked, defaultChecked, propValue, hasSrcSet, !1);
				return;
			case "select":
				listenToNonDelegatedEvent("invalid", domElement);
				hasSrc = propValue = propKey = null;
				for (hasSrcSet in props) if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue)) switch (hasSrcSet) {
					case "value":
						propKey = defaultValue;
						break;
					case "defaultValue":
						propValue = defaultValue;
						break;
					case "multiple": hasSrc = defaultValue;
					default: setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
				}
				tag = propKey;
				props = propValue;
				domElement.multiple = !!hasSrc;
				null != tag ? updateOptions(domElement, !!hasSrc, tag, !1) : null != props && updateOptions(domElement, !!hasSrc, props, !0);
				return;
			case "textarea":
				listenToNonDelegatedEvent("invalid", domElement);
				propKey = hasSrcSet = hasSrc = null;
				for (propValue in props) if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue)) switch (propValue) {
					case "value":
						hasSrc = defaultValue;
						break;
					case "defaultValue":
						hasSrcSet = defaultValue;
						break;
					case "children":
						propKey = defaultValue;
						break;
					case "dangerouslySetInnerHTML":
						if (null != defaultValue) throw Error(formatProdErrorMessage(91));
						break;
					default: setProp(domElement, tag, propValue, defaultValue, props, null);
				}
				initTextarea(domElement, hasSrc, hasSrcSet, propKey);
				return;
			case "option":
				for (checked in props) if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc)) switch (checked) {
					case "selected":
						domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
						break;
					default: setProp(domElement, tag, checked, hasSrc, props, null);
				}
				return;
			case "dialog":
				listenToNonDelegatedEvent("beforetoggle", domElement);
				listenToNonDelegatedEvent("toggle", domElement);
				listenToNonDelegatedEvent("cancel", domElement);
				listenToNonDelegatedEvent("close", domElement);
				break;
			case "iframe":
			case "object":
				listenToNonDelegatedEvent("load", domElement);
				break;
			case "video":
			case "audio":
				for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++) listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
				break;
			case "image":
				listenToNonDelegatedEvent("error", domElement);
				listenToNonDelegatedEvent("load", domElement);
				break;
			case "details":
				listenToNonDelegatedEvent("toggle", domElement);
				break;
			case "embed":
			case "source":
			case "link": listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (defaultChecked in props) if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc)) switch (defaultChecked) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(137, tag));
					default: setProp(domElement, tag, defaultChecked, hasSrc, props, null);
				}
				return;
			default: if (isCustomElement(tag)) {
				for (propValue$184 in props) props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(domElement, tag, propValue$184, hasSrc, props, void 0));
				return;
			}
		}
		for (defaultValue in props) props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
		switch (tag) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
				for (propKey in lastProps) {
					var lastProp = lastProps[propKey];
					if (lastProps.hasOwnProperty(propKey) && null != lastProp) switch (propKey) {
						case "checked": break;
						case "value": break;
						case "defaultValue": lastDefaultValue = lastProp;
						default: nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
					}
				}
				for (var propKey$201 in nextProps) {
					var propKey = nextProps[propKey$201];
					lastProp = lastProps[propKey$201];
					if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp)) switch (propKey$201) {
						case "type":
							type = propKey;
							break;
						case "name":
							name = propKey;
							break;
						case "checked":
							checked = propKey;
							break;
						case "defaultChecked":
							defaultChecked = propKey;
							break;
						case "value":
							value = propKey;
							break;
						case "defaultValue":
							defaultValue = propKey;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (null != propKey) throw Error(formatProdErrorMessage(137, tag));
							break;
						default: propKey !== lastProp && setProp(domElement, tag, propKey$201, propKey, nextProps, lastProp);
					}
				}
				updateInput(domElement, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name);
				return;
			case "select":
				propKey = value = defaultValue = propKey$201 = null;
				for (type in lastProps) if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue) switch (type) {
					case "value": break;
					case "multiple": propKey = lastDefaultValue;
					default: nextProps.hasOwnProperty(type) || setProp(domElement, tag, type, null, nextProps, lastDefaultValue);
				}
				for (name in nextProps) if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue)) switch (name) {
					case "value":
						propKey$201 = type;
						break;
					case "defaultValue":
						defaultValue = type;
						break;
					case "multiple": value = type;
					default: type !== lastDefaultValue && setProp(domElement, tag, name, type, nextProps, lastDefaultValue);
				}
				tag = defaultValue;
				lastProps = value;
				nextProps = propKey;
				null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, !1) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, !0) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
				return;
			case "textarea":
				propKey = propKey$201 = null;
				for (defaultValue in lastProps) if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue)) switch (defaultValue) {
					case "value": break;
					case "children": break;
					default: setProp(domElement, tag, defaultValue, null, nextProps, name);
				}
				for (value in nextProps) if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type)) switch (value) {
					case "value":
						propKey$201 = name;
						break;
					case "defaultValue":
						propKey = name;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (null != name) throw Error(formatProdErrorMessage(91));
						break;
					default: name !== type && setProp(domElement, tag, value, name, nextProps, type);
				}
				updateTextarea(domElement, propKey$201, propKey);
				return;
			case "option":
				for (var propKey$217 in lastProps) if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217)) switch (propKey$217) {
					case "selected":
						domElement.selected = !1;
						break;
					default: setProp(domElement, tag, propKey$217, null, nextProps, propKey$201);
				}
				for (lastDefaultValue in nextProps) if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey)) switch (lastDefaultValue) {
					case "selected":
						domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
						break;
					default: setProp(domElement, tag, lastDefaultValue, propKey$201, nextProps, propKey);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var propKey$222 in lastProps) propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
				for (checked in nextProps) if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey)) switch (checked) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (null != propKey$201) throw Error(formatProdErrorMessage(137, tag));
						break;
					default: setProp(domElement, tag, checked, propKey$201, nextProps, propKey);
				}
				return;
			default: if (isCustomElement(tag)) {
				for (var propKey$227 in lastProps) propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(domElement, tag, propKey$227, void 0, nextProps, propKey$201);
				for (defaultChecked in nextProps) propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(domElement, tag, defaultChecked, propKey$201, nextProps, propKey);
				return;
			}
		}
		for (var propKey$232 in lastProps) propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
		for (lastProp in nextProps) propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
	}
	function isLikelyStaticResource(initiatorType) {
		switch (initiatorType) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function estimateBandwidth() {
		if ("function" === typeof performance.getEntriesByType) {
			for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
				var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration = entry.duration;
				if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
					initiatorType = 0;
					duration = entry.responseEnd;
					for (i += 1; i < resourceEntries.length; i++) {
						var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
						if (overlapStartTime > duration) break;
						var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
						overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration ? 1 : (duration - overlapStartTime) / (overlapEntry - overlapStartTime)));
					}
					--i;
					bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
					count++;
					if (10 < count) break;
				}
			}
			if (0 < count) return bits / count / 1e6;
		}
		return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
	}
	var eventsEnabled = null;
	var selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
		return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
		switch (namespaceURI) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function getChildHostContextProd(parentNamespace, type) {
		if (0 === parentNamespace) switch (type) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
		return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
		var event = window.event;
		if (event && "popstate" === event.type) {
			if (event === currentPopstateTransitionEvent) return !1;
			currentPopstateTransitionEvent = event;
			return !0;
		}
		currentPopstateTransitionEvent = null;
		return !1;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0;
	var cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0;
	var localPromise = "function" === typeof Promise ? Promise : void 0;
	var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
		return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	} : scheduleTimeout;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	function isSingletonScope(type) {
		return "head" === type;
	}
	function clearHydrationBoundary(parentInstance, hydrationInstance) {
		var node = hydrationInstance, depth = 0;
		do {
			var nextNode = node.nextSibling;
			parentInstance.removeChild(node);
			if (nextNode && 8 === nextNode.nodeType) if (node = nextNode.data, "/$" === node || "/&" === node) {
				if (0 === depth) {
					parentInstance.removeChild(nextNode);
					retryIfBlockedOn(hydrationInstance);
					return;
				}
				depth--;
			} else if ("$" === node || "$?" === node || "$~" === node || "$!" === node || "&" === node) depth++;
			else if ("html" === node) releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
			else if ("head" === node) {
				node = parentInstance.ownerDocument.head;
				releaseSingletonInstance(node);
				for (var node$jscomp$0 = node.firstChild; node$jscomp$0;) {
					var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
					node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node.removeChild(node$jscomp$0);
					node$jscomp$0 = nextNode$jscomp$0;
				}
			} else "body" === node && releaseSingletonInstance(parentInstance.ownerDocument.body);
			node = nextNode;
		} while (node);
		retryIfBlockedOn(hydrationInstance);
	}
	function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
		var node = suspenseInstance;
		suspenseInstance = 0;
		do {
			var nextNode = node.nextSibling;
			1 === node.nodeType ? isHidden ? (node._stashedDisplay = node.style.display, node.style.display = "none") : (node.style.display = node._stashedDisplay || "", "" === node.getAttribute("style") && node.removeAttribute("style")) : 3 === node.nodeType && (isHidden ? (node._stashedText = node.nodeValue, node.nodeValue = "") : node.nodeValue = node._stashedText || "");
			if (nextNode && 8 === nextNode.nodeType) if (node = nextNode.data, "/$" === node) if (0 === suspenseInstance) break;
			else suspenseInstance--;
			else "$" !== node && "$?" !== node && "$~" !== node && "$!" !== node || suspenseInstance++;
			node = nextNode;
		} while (node);
	}
	function clearContainerSparingly(container) {
		var nextNode = container.firstChild;
		nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
		for (; nextNode;) {
			var node = nextNode;
			nextNode = nextNode.nextSibling;
			switch (node.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					clearContainerSparingly(node);
					detachDeletedInstance(node);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if ("stylesheet" === node.rel.toLowerCase()) continue;
			}
			container.removeChild(node);
		}
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
		for (; 1 === instance.nodeType;) {
			var anyProps = props;
			if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
				if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type)) break;
			} else if (!inRootOrSingleton) if ("input" === type && "hidden" === instance.type) {
				var name = null == anyProps.name ? null : "" + anyProps.name;
				if ("hidden" === anyProps.type && instance.getAttribute("name") === name) return instance;
			} else return instance;
			else if (!instance[internalHoistableMarker]) switch (type) {
				case "meta":
					if (!instance.hasAttribute("itemprop")) break;
					return instance;
				case "link":
					name = instance.getAttribute("rel");
					if ("stylesheet" === name && instance.hasAttribute("data-precedence")) break;
					else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title)) break;
					return instance;
				case "style":
					if (instance.hasAttribute("data-precedence")) break;
					return instance;
				case "script":
					name = instance.getAttribute("src");
					if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop")) break;
					return instance;
				default: return instance;
			}
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) break;
		}
		return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
		if ("" === text) return null;
		for (; 3 !== instance.nodeType;) {
			if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton) return null;
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) return null;
		}
		return instance;
	}
	function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
		for (; 8 !== instance.nodeType;) {
			if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton) return null;
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) return null;
		}
		return instance;
	}
	function isSuspenseInstancePending(instance) {
		return "$?" === instance.data || "$~" === instance.data;
	}
	function isSuspenseInstanceFallback(instance) {
		return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
	}
	function registerSuspenseInstanceRetry(instance, callback) {
		var ownerDocument = instance.ownerDocument;
		if ("$~" === instance.data) instance._reactRetry = callback;
		else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState) callback();
		else {
			var listener = function() {
				callback();
				ownerDocument.removeEventListener("DOMContentLoaded", listener);
			};
			ownerDocument.addEventListener("DOMContentLoaded", listener);
			instance._reactRetry = listener;
		}
	}
	function getNextHydratable(node) {
		for (; null != node; node = node.nextSibling) {
			var nodeType = node.nodeType;
			if (1 === nodeType || 3 === nodeType) break;
			if (8 === nodeType) {
				nodeType = node.data;
				if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType) break;
				if ("/$" === nodeType || "/&" === nodeType) return null;
			}
		}
		return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
		hydrationInstance = hydrationInstance.nextSibling;
		for (var depth = 0; hydrationInstance;) {
			if (8 === hydrationInstance.nodeType) {
				var data = hydrationInstance.data;
				if ("/$" === data || "/&" === data) {
					if (0 === depth) return getNextHydratable(hydrationInstance.nextSibling);
					depth--;
				} else "$" !== data && "$!" !== data && "$?" !== data && "$~" !== data && "&" !== data || depth++;
			}
			hydrationInstance = hydrationInstance.nextSibling;
		}
		return null;
	}
	function getParentHydrationBoundary(targetInstance) {
		targetInstance = targetInstance.previousSibling;
		for (var depth = 0; targetInstance;) {
			if (8 === targetInstance.nodeType) {
				var data = targetInstance.data;
				if ("$" === data || "$!" === data || "$?" === data || "$~" === data || "&" === data) {
					if (0 === depth) return targetInstance;
					depth--;
				} else "/$" !== data && "/&" !== data || depth++;
			}
			targetInstance = targetInstance.previousSibling;
		}
		return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
		props = getOwnerDocumentFromRootContainer(rootContainerInstance);
		switch (type) {
			case "html":
				type = props.documentElement;
				if (!type) throw Error(formatProdErrorMessage(452));
				return type;
			case "head":
				type = props.head;
				if (!type) throw Error(formatProdErrorMessage(453));
				return type;
			case "body":
				type = props.body;
				if (!type) throw Error(formatProdErrorMessage(454));
				return type;
			default: throw Error(formatProdErrorMessage(451));
		}
	}
	function releaseSingletonInstance(instance) {
		for (var attributes = instance.attributes; attributes.length;) instance.removeAttributeNode(attributes[0]);
		detachDeletedInstance(instance);
	}
	var preloadPropsMap = /* @__PURE__ */ new Map();
	var preconnectsSet = /* @__PURE__ */ new Set();
	function getHoistableRoot(container) {
		return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: flushSyncWork,
		r: requestFormReset,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function flushSyncWork() {
		var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
		return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
		var formInst = getInstanceFromNode(form);
		null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
		var ownerDocument = globalDocument;
		if (ownerDocument && "string" === typeof href && href) {
			var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
			limitedEscapedHref = "link[rel=\"" + rel + "\"][href=\"" + limitedEscapedHref + "\"]";
			"string" === typeof crossOrigin && (limitedEscapedHref += "[crossorigin=\"" + crossOrigin + "\"]");
			preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = {
				rel,
				crossOrigin,
				href
			}, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
		}
	}
	function prefetchDNS(href) {
		previousDispatcher.D(href);
		preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
		previousDispatcher.C(href, crossOrigin);
		preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
		previousDispatcher.L(href, as, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href && as) {
			var preloadSelector = "link[rel=\"preload\"][as=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(as) + "\"]";
			"image" === as ? options && options.imageSrcSet ? (preloadSelector += "[imagesrcset=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(options.imageSrcSet) + "\"]", "string" === typeof options.imageSizes && (preloadSelector += "[imagesizes=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(options.imageSizes) + "\"]")) : preloadSelector += "[href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]" : preloadSelector += "[href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]";
			var key = preloadSelector;
			switch (as) {
				case "style":
					key = getStyleKey(href);
					break;
				case "script": key = getScriptKey(href);
			}
			preloadPropsMap.has(key) || (href = assign({
				rel: "preload",
				href: "image" === as && options && options.imageSrcSet ? void 0 : href,
				as
			}, options), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
		}
	}
	function preloadModule(href, options) {
		previousDispatcher.m(href, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href) {
			var as = options && "string" === typeof options.as ? options.as : "script", preloadSelector = "link[rel=\"modulepreload\"][as=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(as) + "\"][href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]", key = preloadSelector;
			switch (as) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": key = getScriptKey(href);
			}
			if (!preloadPropsMap.has(key) && (href = assign({
				rel: "modulepreload",
				href
			}, options), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
				switch (as) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (ownerDocument.querySelector(getScriptSelectorFromKey(key))) return;
				}
				as = ownerDocument.createElement("link");
				setInitialProperties(as, "link", href);
				markNodeAsHoistable(as);
				ownerDocument.head.appendChild(as);
			}
		}
	}
	function preinitStyle(href, precedence, options) {
		previousDispatcher.S(href, precedence, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href) {
			var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
			precedence = precedence || "default";
			var resource = styles.get(key);
			if (!resource) {
				var state = {
					loading: 0,
					preload: null
				};
				if (resource = ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) state.loading = 5;
				else {
					href = assign({
						rel: "stylesheet",
						href,
						"data-precedence": precedence
					}, options);
					(options = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options);
					var link = resource = ownerDocument.createElement("link");
					markNodeAsHoistable(link);
					setInitialProperties(link, "link", href);
					link._p = new Promise(function(resolve, reject) {
						link.onload = resolve;
						link.onerror = reject;
					});
					link.addEventListener("load", function() {
						state.loading |= 1;
					});
					link.addEventListener("error", function() {
						state.loading |= 2;
					});
					state.loading |= 4;
					insertStylesheet(resource, precedence, ownerDocument);
				}
				resource = {
					type: "stylesheet",
					instance: resource,
					count: 1,
					state
				};
				styles.set(key, resource);
			}
		}
	}
	function preinitScript(src, options) {
		previousDispatcher.X(src, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && src) {
			var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
			resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({
				src,
				async: !0
			}, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
				type: "script",
				instance: resource,
				count: 1,
				state: null
			}, scripts.set(key, resource));
		}
	}
	function preinitModuleScript(src, options) {
		previousDispatcher.M(src, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && src) {
			var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
			resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({
				src,
				async: !0,
				type: "module"
			}, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
				type: "script",
				instance: resource,
				count: 1,
				state: null
			}, scripts.set(key, resource));
		}
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
		var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
		if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
		switch (type) {
			case "meta":
			case "title": return null;
			case "style": return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(JSCompiler_inline_result).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, pendingProps.set(currentProps, currentResource)), currentResource) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
					type = getStyleKey(pendingProps.href);
					var styles$243 = getResourcesFromRoot(JSCompiler_inline_result).hoistableStyles, resource$244 = styles$243.get(type);
					resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(getStylesheetSelectorFromKey(type))) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
						rel: "preload",
						as: "style",
						href: pendingProps.href,
						crossOrigin: pendingProps.crossOrigin,
						integrity: pendingProps.integrity,
						media: pendingProps.media,
						hrefLang: pendingProps.hrefLang,
						referrerPolicy: pendingProps.referrerPolicy
					}, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(JSCompiler_inline_result, type, pendingProps, resource$244.state)));
					if (currentProps && null === currentResource) throw Error(formatProdErrorMessage(528, ""));
					return resource$244;
				}
				if (currentProps && null !== currentResource) throw Error(formatProdErrorMessage(529, ""));
				return null;
			case "script": return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(JSCompiler_inline_result).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, pendingProps.set(currentProps, currentResource)), currentResource) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(formatProdErrorMessage(444, type));
		}
	}
	function getStyleKey(href) {
		return "href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"";
	}
	function getStylesheetSelectorFromKey(key) {
		return "link[rel=\"stylesheet\"][" + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
		return assign({}, rawProps, {
			"data-precedence": rawProps.precedence,
			precedence: null
		});
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
		ownerDocument.querySelector("link[rel=\"preload\"][as=\"style\"][" + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
			return state.loading |= 1;
		}), key.addEventListener("error", function() {
			return state.loading |= 2;
		}), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
		return "[src=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(src) + "\"]";
	}
	function getScriptSelectorFromKey(key) {
		return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
		resource.count++;
		if (null === resource.instance) switch (resource.type) {
			case "style":
				var instance = hoistableRoot.querySelector("style[data-href~=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + "\"]");
				if (instance) return resource.instance = instance, markNodeAsHoistable(instance), instance;
				var styleProps = assign({}, props, {
					"data-href": props.href,
					"data-precedence": props.precedence,
					href: null,
					precedence: null
				});
				instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement("style");
				markNodeAsHoistable(instance);
				setInitialProperties(instance, "style", styleProps);
				insertStylesheet(instance, props.precedence, hoistableRoot);
				return resource.instance = instance;
			case "stylesheet":
				styleProps = getStyleKey(props.href);
				var instance$249 = hoistableRoot.querySelector(getStylesheetSelectorFromKey(styleProps));
				if (instance$249) return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
				instance = stylesheetPropsFromRawProps(props);
				(styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
				instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
				markNodeAsHoistable(instance$249);
				var linkInstance = instance$249;
				linkInstance._p = new Promise(function(resolve, reject) {
					linkInstance.onload = resolve;
					linkInstance.onerror = reject;
				});
				setInitialProperties(instance$249, "link", instance);
				resource.state.loading |= 4;
				insertStylesheet(instance$249, props.precedence, hoistableRoot);
				return resource.instance = instance$249;
			case "script":
				instance$249 = getScriptKey(props.src);
				if (styleProps = hoistableRoot.querySelector(getScriptSelectorFromKey(instance$249))) return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
				instance = props;
				if (styleProps = preloadPropsMap.get(instance$249)) instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
				hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
				styleProps = hoistableRoot.createElement("script");
				markNodeAsHoistable(styleProps);
				setInitialProperties(styleProps, "link", instance);
				hoistableRoot.head.appendChild(styleProps);
				return resource.instance = styleProps;
			case "void": return null;
			default: throw Error(formatProdErrorMessage(443, resource.type));
		}
		else "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
		return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
		for (var nodes = root.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (node.dataset.precedence === precedence) prior = node;
			else if (prior !== last) break;
		}
		prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root.nodeType ? root.head : root, precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
		stylesheetProps.crossOrigin ??= preloadProps.crossOrigin;
		stylesheetProps.referrerPolicy ??= preloadProps.referrerPolicy;
		stylesheetProps.title ??= preloadProps.title;
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
		scriptProps.crossOrigin ??= preloadProps.crossOrigin;
		scriptProps.referrerPolicy ??= preloadProps.referrerPolicy;
		scriptProps.integrity ??= preloadProps.integrity;
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
		if (null === tagCaches) {
			var cache = /* @__PURE__ */ new Map();
			var caches = tagCaches = /* @__PURE__ */ new Map();
			caches.set(ownerDocument, cache);
		} else caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
		if (cache.has(type)) return cache;
		cache.set(type, null);
		ownerDocument = ownerDocument.getElementsByTagName(type);
		for (caches = 0; caches < ownerDocument.length; caches++) {
			var node = ownerDocument[caches];
			if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
				var nodeKey = node.getAttribute(keyAttribute) || "";
				nodeKey = type + nodeKey;
				var existing = cache.get(nodeKey);
				existing ? existing.push(node) : cache.set(nodeKey, [node]);
			}
		}
		return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
		hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
		hoistableRoot.head.insertBefore(instance, "title" === type ? hoistableRoot.querySelector("head > title") : null);
	}
	function isHostHoistableType(type, props, hostContext) {
		if (1 === hostContext || null != props.itemProp) return !1;
		switch (type) {
			case "meta":
			case "title": return !0;
			case "style":
				if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href) break;
				return !0;
			case "link":
				if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError) break;
				switch (props.rel) {
					case "stylesheet": return type = props.disabled, "string" === typeof props.precedence && null == type;
					default: return !0;
				}
			case "script": if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src) return !0;
		}
		return !1;
	}
	function preloadResource(resource) {
		return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? !1 : !0;
	}
	function suspendResource(state, hoistableRoot, resource, props) {
		if ("stylesheet" === resource.type && ("string" !== typeof props.media || !1 !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
			if (null === resource.instance) {
				var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(getStylesheetSelectorFromKey(key));
				if (instance) {
					hoistableRoot = instance._p;
					null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
					resource.state.loading |= 4;
					resource.instance = instance;
					markNodeAsHoistable(instance);
					return;
				}
				instance = hoistableRoot.ownerDocument || hoistableRoot;
				props = stylesheetPropsFromRawProps(props);
				(key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
				instance = instance.createElement("link");
				markNodeAsHoistable(instance);
				var linkInstance = instance;
				linkInstance._p = new Promise(function(resolve, reject) {
					linkInstance.onload = resolve;
					linkInstance.onerror = reject;
				});
				setInitialProperties(instance, "link", props);
				resource.instance = instance;
			}
			null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
			state.stylesheets.set(resource, hoistableRoot);
			(hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
		}
	}
	var estimatedBytesWithinLimit = 0;
	function waitForCommitToBeReady(state, timeoutOffset) {
		state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
		return 0 < state.count || 0 < state.imgCount ? function(commit) {
			var stylesheetTimer = setTimeout(function() {
				state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
				if (state.unsuspend) {
					var unsuspend = state.unsuspend;
					state.unsuspend = null;
					unsuspend();
				}
			}, 6e4 + timeoutOffset);
			0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
			var imgTimer = setTimeout(function() {
				state.waitingForImages = !1;
				if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
					var unsuspend = state.unsuspend;
					state.unsuspend = null;
					unsuspend();
				}
			}, (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset);
			state.unsuspend = commit;
			return function() {
				state.unsuspend = null;
				clearTimeout(stylesheetTimer);
				clearTimeout(imgTimer);
			};
		} : null;
	}
	function onUnsuspend() {
		this.count--;
		if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
			if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
			else if (this.unsuspend) {
				var unsuspend = this.unsuspend;
				this.unsuspend = null;
				unsuspend();
			}
		}
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
		state.stylesheets = null;
		null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
		if (!(resource.state.loading & 4)) {
			var precedences = precedencesByRoot.get(root);
			if (precedences) var last = precedences.get(null);
			else {
				precedences = /* @__PURE__ */ new Map();
				precedencesByRoot.set(root, precedences);
				for (var nodes = root.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < nodes.length; i++) {
					var node = nodes[i];
					if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media")) precedences.set(node.dataset.precedence, node), last = node;
				}
				last && precedences.set(null, last);
			}
			nodes = resource.instance;
			node = nodes.getAttribute("data-precedence");
			i = precedences.get(node) || last;
			i === last && precedences.set(null, nodes);
			precedences.set(node, nodes);
			this.count++;
			last = onUnsuspend.bind(this);
			nodes.addEventListener("load", last);
			nodes.addEventListener("error", last);
			i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root = 9 === root.nodeType ? root.head : root, root.insertBefore(nodes, root.firstChild));
			resource.state.loading |= 4;
		}
	}
	var HostTransitionContext = {
		$$typeof: REACT_CONTEXT_TYPE,
		Provider: null,
		Consumer: null,
		_currentValue: sharedNotPendingObject,
		_currentValue2: sharedNotPendingObject,
		_threadCount: 0
	};
	function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
		this.tag = 1;
		this.containerInfo = containerInfo;
		this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
		this.callbackPriority = 0;
		this.expirationTimes = createLaneMap(-1);
		this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = createLaneMap(0);
		this.hiddenUpdates = createLaneMap(null);
		this.identifierPrefix = identifierPrefix;
		this.onUncaughtError = onUncaughtError;
		this.onCaughtError = onCaughtError;
		this.onRecoverableError = onRecoverableError;
		this.pooledCache = null;
		this.pooledCacheLanes = 0;
		this.formState = formState;
		this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
		containerInfo = new FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState);
		tag = 1;
		!0 === isStrictMode && (tag |= 24);
		isStrictMode = createFiberImplClass(3, null, null, tag);
		containerInfo.current = isStrictMode;
		isStrictMode.stateNode = containerInfo;
		tag = createCache();
		tag.refCount++;
		containerInfo.pooledCache = tag;
		tag.refCount++;
		isStrictMode.memoizedState = {
			element: initialChildren,
			isDehydrated: hydrate,
			cache: tag
		};
		initializeUpdateQueue(isStrictMode);
		return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
		if (!parentComponent) return emptyContextObject;
		parentComponent = emptyContextObject;
		return parentComponent;
	}
	function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
		parentComponent = getContextForSubtree(parentComponent);
		null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
		container = createUpdate(lane);
		container.payload = { element };
		callback = void 0 === callback ? null : callback;
		null !== callback && (container.callback = callback);
		element = enqueueUpdate(rootFiber, container, lane);
		null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
		fiber = fiber.memoizedState;
		if (null !== fiber && null !== fiber.dehydrated) {
			var a = fiber.retryLane;
			fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
		}
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
		markRetryLaneImpl(fiber, retryLane);
		(fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
		if (13 === fiber.tag || 31 === fiber.tag) {
			var root = enqueueConcurrentRenderForLane(fiber, 67108864);
			null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
			markRetryLaneIfNotHydrated(fiber, 67108864);
		}
	}
	function attemptHydrationAtCurrentPriority(fiber) {
		if (13 === fiber.tag || 31 === fiber.tag) {
			var lane = requestUpdateLane();
			lane = getBumpedLaneForHydrationByLane(lane);
			var root = enqueueConcurrentRenderForLane(fiber, lane);
			null !== root && scheduleUpdateOnFiber(root, fiber, lane);
			markRetryLaneIfNotHydrated(fiber, lane);
		}
	}
	var _enabled = !0;
	function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
		var prevTransition = ReactSharedInternals.T;
		ReactSharedInternals.T = null;
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
		}
	}
	function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
		var prevTransition = ReactSharedInternals.T;
		ReactSharedInternals.T = null;
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
		}
	}
	function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		if (_enabled) {
			var blockedOn = findInstanceBlockingEvent(nativeEvent);
			if (null === blockedOn) dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer), clearIfContinuousEvent(domEventName, nativeEvent);
			else if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) nativeEvent.stopPropagation();
			else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
				for (; null !== blockedOn;) {
					var fiber = getInstanceFromNode(blockedOn);
					if (null !== fiber) switch (fiber.tag) {
						case 3:
							fiber = fiber.stateNode;
							if (fiber.current.memoizedState.isDehydrated) {
								var lanes = getHighestPriorityLanes(fiber.pendingLanes);
								if (0 !== lanes) {
									var root = fiber;
									root.pendingLanes |= 2;
									for (root.entangledLanes |= 2; lanes;) {
										var lane = 1 << 31 - clz32(lanes);
										root.entanglements[1] |= lane;
										lanes &= ~lane;
									}
									ensureRootIsScheduled(fiber);
									0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0, !1));
								}
							}
							break;
						case 31:
						case 13: root = enqueueConcurrentRenderForLane(fiber, 2), null !== root && scheduleUpdateOnFiber(root, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
					}
					fiber = findInstanceBlockingEvent(nativeEvent);
					null === fiber && dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer);
					if (fiber === blockedOn) break;
					blockedOn = fiber;
				}
				null !== blockedOn && nativeEvent.stopPropagation();
			} else dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
		}
	}
	function findInstanceBlockingEvent(nativeEvent) {
		nativeEvent = getEventTarget(nativeEvent);
		return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
		return_targetInst = null;
		targetNode = getClosestInstanceFromNode(targetNode);
		if (null !== targetNode) {
			var nearestMounted = getNearestMountedFiber(targetNode);
			if (null === nearestMounted) targetNode = null;
			else {
				var tag = nearestMounted.tag;
				if (13 === tag) {
					targetNode = getSuspenseInstanceFromFiber(nearestMounted);
					if (null !== targetNode) return targetNode;
					targetNode = null;
				} else if (31 === tag) {
					targetNode = getActivityInstanceFromFiber(nearestMounted);
					if (null !== targetNode) return targetNode;
					targetNode = null;
				} else if (3 === tag) {
					if (nearestMounted.stateNode.current.memoizedState.isDehydrated) return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
					targetNode = null;
				} else nearestMounted !== targetNode && (targetNode = null);
			}
		}
		return_targetInst = targetNode;
		return null;
	}
	function getEventPriority(domEventName) {
		switch (domEventName) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (getCurrentPriorityLevel()) {
				case ImmediatePriority: return 2;
				case UserBlockingPriority: return 8;
				case NormalPriority$1:
				case LowPriority: return 32;
				case IdlePriority: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hasScheduledReplayAttempt = !1;
	var queuedFocus = null;
	var queuedDrag = null;
	var queuedMouse = null;
	var queuedPointers = /* @__PURE__ */ new Map();
	var queuedPointerCaptures = /* @__PURE__ */ new Map();
	var queuedExplicitHydrationTargets = [];
	var discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function clearIfContinuousEvent(domEventName, nativeEvent) {
		switch (domEventName) {
			case "focusin":
			case "focusout":
				queuedFocus = null;
				break;
			case "dragenter":
			case "dragleave":
				queuedDrag = null;
				break;
			case "mouseover":
			case "mouseout":
				queuedMouse = null;
				break;
			case "pointerover":
			case "pointerout":
				queuedPointers.delete(nativeEvent.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": queuedPointerCaptures.delete(nativeEvent.pointerId);
		}
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent) return existingQueuedEvent = {
			blockedOn,
			domEventName,
			eventSystemFlags,
			nativeEvent,
			targetContainers: [targetContainer]
		}, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
		existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
		blockedOn = existingQueuedEvent.targetContainers;
		null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
		return existingQueuedEvent;
	}
	function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		switch (domEventName) {
			case "focusin": return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "dragenter": return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "mouseover": return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "pointerover":
				var pointerId = nativeEvent.pointerId;
				queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent));
				return !0;
			case "gotpointercapture": return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)), !0;
		}
		return !1;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
		var targetInst = getClosestInstanceFromNode(queuedTarget.target);
		if (null !== targetInst) {
			var nearestMounted = getNearestMountedFiber(targetInst);
			if (null !== nearestMounted) {
				if (targetInst = nearestMounted.tag, 13 === targetInst) {
					if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
						queuedTarget.blockedOn = targetInst;
						runWithPriority(queuedTarget.priority, function() {
							attemptHydrationAtCurrentPriority(nearestMounted);
						});
						return;
					}
				} else if (31 === targetInst) {
					if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
						queuedTarget.blockedOn = targetInst;
						runWithPriority(queuedTarget.priority, function() {
							attemptHydrationAtCurrentPriority(nearestMounted);
						});
						return;
					}
				} else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
					queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
					return;
				}
			}
		}
		queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
		if (null !== queuedEvent.blockedOn) return !1;
		for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length;) {
			var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
			if (null === nextBlockedOn) {
				nextBlockedOn = queuedEvent.nativeEvent;
				var nativeEventClone = new nextBlockedOn.constructor(nextBlockedOn.type, nextBlockedOn);
				currentReplayingEvent = nativeEventClone;
				nextBlockedOn.target.dispatchEvent(nativeEventClone);
				currentReplayingEvent = null;
			} else return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, !1;
			targetContainers.shift();
		}
		return !0;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
		attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
		hasScheduledReplayAttempt = !1;
		null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
		null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
		null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
		queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
		queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
		queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = !0, Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents)));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
		lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, function() {
			lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
			for (var i = 0; i < formReplayingQueue.length; i += 3) {
				var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
				if ("function" !== typeof submitterOrAction) if (null === findInstanceBlockingTarget(submitterOrAction || form)) continue;
				else break;
				var formInst = getInstanceFromNode(form);
				null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(formInst, {
					pending: !0,
					data: formData,
					method: form.method,
					action: submitterOrAction
				}, submitterOrAction, formData));
			}
		}));
	}
	function retryIfBlockedOn(unblocked) {
		function unblock(queuedEvent) {
			return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
		}
		null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
		null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
		null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
		queuedPointers.forEach(unblock);
		queuedPointerCaptures.forEach(unblock);
		for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
			var queuedTarget = queuedExplicitHydrationTargets[i];
			queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
		}
		for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn);) attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
		i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
		if (null != i) for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
			var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
			if ("function" === typeof submitterOrAction) formProps || scheduleReplayQueueIfNeeded(i);
			else if (formProps) {
				var action = null;
				if (submitterOrAction && submitterOrAction.hasAttribute("formAction")) {
					if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null) action = formProps.formAction;
					else if (null !== findInstanceBlockingTarget(form)) continue;
				} else action = formProps.action;
				"function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
				scheduleReplayQueueIfNeeded(i);
			}
		}
	}
	function defaultOnDefaultTransitionIndicator() {
		function handleNavigate(event) {
			event.canIntercept && "react-transition" === event.info && event.intercept({
				handler: function() {
					return new Promise(function(resolve) {
						return pendingResolve = resolve;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function handleNavigateComplete() {
			null !== pendingResolve && (pendingResolve(), pendingResolve = null);
			isCancelled || setTimeout(startFakeNavigation, 20);
		}
		function startFakeNavigation() {
			if (!isCancelled && !navigation.transition) {
				var currentEntry = navigation.currentEntry;
				currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
					state: currentEntry.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if ("object" === typeof navigation) {
			var isCancelled = !1, pendingResolve = null;
			navigation.addEventListener("navigate", handleNavigate);
			navigation.addEventListener("navigatesuccess", handleNavigateComplete);
			navigation.addEventListener("navigateerror", handleNavigateComplete);
			setTimeout(startFakeNavigation, 100);
			return function() {
				isCancelled = !0;
				navigation.removeEventListener("navigate", handleNavigate);
				navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
				navigation.removeEventListener("navigateerror", handleNavigateComplete);
				null !== pendingResolve && (pendingResolve(), pendingResolve = null);
			};
		}
	}
	function ReactDOMRoot(internalRoot) {
		this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
		var root = this._internalRoot;
		if (null === root) throw Error(formatProdErrorMessage(409));
		var current = root.current;
		updateContainerImpl(current, requestUpdateLane(), children, root, null, null);
	};
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
		var root = this._internalRoot;
		if (null !== root) {
			this._internalRoot = null;
			var container = root.containerInfo;
			updateContainerImpl(root.current, 2, null, root, null, null);
			flushSyncWork$1();
			container[internalContainerInstanceKey] = null;
		}
	};
	function ReactDOMHydrationRoot(internalRoot) {
		this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
		if (target) {
			var updatePriority = resolveUpdatePriority();
			target = {
				blockedOn: null,
				target,
				priority: updatePriority
			};
			for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++);
			queuedExplicitHydrationTargets.splice(i, 0, target);
			0 === i && attemptExplicitHydrationTarget(target);
		}
	};
	var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
	if ("19.2.7" !== isomorphicReactPackageVersion$jscomp$inline_1840) throw Error(formatProdErrorMessage(527, isomorphicReactPackageVersion$jscomp$inline_1840, "19.2.7"));
	ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
		var fiber = componentOrElement._reactInternals;
		if (void 0 === fiber) {
			if ("function" === typeof componentOrElement.render) throw Error(formatProdErrorMessage(188));
			componentOrElement = Object.keys(componentOrElement).join(",");
			throw Error(formatProdErrorMessage(268, componentOrElement));
		}
		componentOrElement = findCurrentFiberUsingSlowPath(fiber);
		componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
		componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
		return componentOrElement;
	};
	var internals$jscomp$inline_2347 = {
		bundleType: 0,
		version: "19.2.7",
		rendererPackageName: "react-dom",
		currentDispatcherRef: ReactSharedInternals,
		reconcilerVersion: "19.2.7"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber) try {
			rendererID = hook$jscomp$inline_2348.inject(internals$jscomp$inline_2347), injectedHook = hook$jscomp$inline_2348;
		} catch (err) {}
	}
	exports.createRoot = function(container, options) {
		if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
		var isStrictMode = !1, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
		null !== options && void 0 !== options && (!0 === options.unstable_strictMode && (isStrictMode = !0), void 0 !== options.identifierPrefix && (identifierPrefix = options.identifierPrefix), void 0 !== options.onUncaughtError && (onUncaughtError = options.onUncaughtError), void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError), void 0 !== options.onRecoverableError && (onRecoverableError = options.onRecoverableError));
		options = createFiberRoot(container, 1, !1, null, null, isStrictMode, identifierPrefix, null, onUncaughtError, onCaughtError, onRecoverableError, defaultOnDefaultTransitionIndicator);
		container[internalContainerInstanceKey] = options.current;
		listenToAllSupportedEvents(container);
		return new ReactDOMRoot(options);
	};
}));
//#endregion
//#region node_modules/@react-three/drei/web/Html.js
var import_client = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_client_production();
})))());
var v1 = /* @__PURE__ */ new Vector3();
var v2 = /* @__PURE__ */ new Vector3();
var v3 = /* @__PURE__ */ new Vector3();
var v4 = /* @__PURE__ */ new Vector2();
function defaultCalculatePosition(el, camera, size) {
	const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
	objectPos.project(camera);
	const widthHalf = size.width / 2;
	const heightHalf = size.height / 2;
	return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
}
function isObjectBehindCamera(el, camera) {
	const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
	const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
	const deltaCamObj = objectPos.sub(cameraPos);
	const camDir = camera.getWorldDirection(v3);
	return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}
function isObjectVisible(el, camera, raycaster, occlude) {
	const elPos = v1.setFromMatrixPosition(el.matrixWorld);
	const screenPos = elPos.clone();
	screenPos.project(camera);
	v4.set(screenPos.x, screenPos.y);
	raycaster.setFromCamera(v4, camera);
	const intersects = raycaster.intersectObjects(occlude, true);
	if (intersects.length) {
		const intersectionDistance = intersects[0].distance;
		return elPos.distanceTo(raycaster.ray.origin) < intersectionDistance;
	}
	return true;
}
function objectScale(el, camera) {
	if (camera instanceof OrthographicCamera) return camera.zoom;
	else if (camera instanceof PerspectiveCamera) {
		const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
		const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
		const vFOV = camera.fov * Math.PI / 180;
		const dist = objectPos.distanceTo(cameraPos);
		return 1 / (2 * Math.tan(vFOV / 2) * dist);
	} else return 1;
}
function objectZIndex(el, camera, zIndexRange) {
	if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
		const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
		const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
		const dist = objectPos.distanceTo(cameraPos);
		const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
		const B = zIndexRange[1] - A * camera.far;
		return Math.round(A * dist + B);
	}
}
var epsilon = (value) => Math.abs(value) < 1e-10 ? 0 : value;
function getCSSMatrix(matrix, multipliers, prepend = "") {
	let matrix3d = "matrix3d(";
	for (let i = 0; i !== 16; i++) matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? "," : ")");
	return prepend + matrix3d;
}
var getCameraCSSMatrix = ((multipliers) => {
	return (matrix) => getCSSMatrix(matrix, multipliers);
})([
	1,
	-1,
	1,
	1,
	1,
	-1,
	1,
	1,
	1,
	-1,
	1,
	1,
	1,
	-1,
	1,
	1
]);
var getObjectCSSMatrix = ((scaleMultipliers) => {
	return (matrix, factor) => getCSSMatrix(matrix, scaleMultipliers(factor), "translate(-50%,-50%)");
})((f) => [
	1 / f,
	1 / f,
	1 / f,
	1,
	-1 / f,
	-1 / f,
	-1 / f,
	-1,
	1 / f,
	1 / f,
	1 / f,
	1,
	1,
	1,
	1,
	1
]);
function isRefObject(ref) {
	return ref && typeof ref === "object" && "current" in ref;
}
var Html = /* @__PURE__ */ import_react.forwardRef(({ children, eps = .001, style, className, prepend, center, fullscreen, portal, distanceFactor, sprite = false, transform = false, occlude, onOcclude, castShadow, receiveShadow, material, geometry, zIndexRange = [16777271, 0], calculatePosition = defaultCalculatePosition, as = "div", wrapperClass, pointerEvents = "auto", ...props }, ref) => {
	const { gl, camera, scene, size, raycaster, events, viewport } = useThree();
	const [el] = import_react.useState(() => document.createElement(as));
	const root = import_react.useRef(null);
	const group = import_react.useRef(null);
	const oldZoom = import_react.useRef(0);
	const oldPosition = import_react.useRef([0, 0]);
	const transformOuterRef = import_react.useRef(null);
	const transformInnerRef = import_react.useRef(null);
	const target = (portal == null ? void 0 : portal.current) || events.connected || gl.domElement.parentNode;
	const occlusionMeshRef = import_react.useRef(null);
	const isMeshSizeSet = import_react.useRef(false);
	const isRayCastOcclusion = import_react.useMemo(() => {
		return occlude && occlude !== "blending" || Array.isArray(occlude) && occlude.length && isRefObject(occlude[0]);
	}, [occlude]);
	import_react.useLayoutEffect(() => {
		const el = gl.domElement;
		if (occlude && occlude === "blending") {
			el.style.zIndex = `${Math.floor(zIndexRange[0] / 2)}`;
			el.style.position = "absolute";
			el.style.pointerEvents = "none";
		} else {
			el.style.zIndex = null;
			el.style.position = null;
			el.style.pointerEvents = null;
		}
	}, [occlude]);
	import_react.useLayoutEffect(() => {
		if (group.current) {
			const currentRoot = root.current = import_client.createRoot(el);
			scene.updateMatrixWorld();
			if (transform) el.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;
			else {
				const vec = calculatePosition(group.current, camera, size);
				el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
			}
			if (target) if (prepend) target.prepend(el);
			else target.appendChild(el);
			return () => {
				if (target) target.removeChild(el);
				currentRoot.unmount();
			};
		}
	}, [target, transform]);
	import_react.useLayoutEffect(() => {
		if (wrapperClass) el.className = wrapperClass;
	}, [wrapperClass]);
	const styles = import_react.useMemo(() => {
		if (transform) return {
			position: "absolute",
			top: 0,
			left: 0,
			width: size.width,
			height: size.height,
			transformStyle: "preserve-3d",
			pointerEvents: "none"
		};
		else return {
			position: "absolute",
			transform: center ? "translate3d(-50%,-50%,0)" : "none",
			...fullscreen && {
				top: -size.height / 2,
				left: -size.width / 2,
				width: size.width,
				height: size.height
			},
			...style
		};
	}, [
		style,
		center,
		fullscreen,
		size,
		transform
	]);
	const transformInnerStyles = import_react.useMemo(() => ({
		position: "absolute",
		pointerEvents
	}), [pointerEvents]);
	import_react.useLayoutEffect(() => {
		isMeshSizeSet.current = false;
		if (transform) {
			var _root$current;
			(_root$current = root.current) == null || _root$current.render(/*#__PURE__*/ import_react.createElement("div", {
				ref: transformOuterRef,
				style: styles
			}, /*#__PURE__*/ import_react.createElement("div", {
				ref: transformInnerRef,
				style: transformInnerStyles
			}, /*#__PURE__*/ import_react.createElement("div", {
				ref,
				className,
				style,
				children
			}))));
		} else {
			var _root$current2;
			(_root$current2 = root.current) == null || _root$current2.render(/*#__PURE__*/ import_react.createElement("div", {
				ref,
				style: styles,
				className,
				children
			}));
		}
	});
	const visible = import_react.useRef(true);
	useFrame((gl) => {
		if (group.current) {
			camera.updateMatrixWorld();
			group.current.updateWorldMatrix(true, false);
			const vec = transform ? oldPosition.current : calculatePosition(group.current, camera, size);
			if (transform || Math.abs(oldZoom.current - camera.zoom) > eps || Math.abs(oldPosition.current[0] - vec[0]) > eps || Math.abs(oldPosition.current[1] - vec[1]) > eps) {
				const isBehindCamera = isObjectBehindCamera(group.current, camera);
				let raytraceTarget = false;
				if (isRayCastOcclusion) {
					if (Array.isArray(occlude)) raytraceTarget = occlude.map((item) => item.current);
					else if (occlude !== "blending") raytraceTarget = [scene];
				}
				const previouslyVisible = visible.current;
				if (raytraceTarget) {
					const isvisible = isObjectVisible(group.current, camera, raycaster, raytraceTarget);
					visible.current = isvisible && !isBehindCamera;
				} else visible.current = !isBehindCamera;
				if (previouslyVisible !== visible.current) if (onOcclude) onOcclude(!visible.current);
				else el.style.display = visible.current ? "block" : "none";
				const halfRange = Math.floor(zIndexRange[0] / 2);
				const zRange = occlude ? isRayCastOcclusion ? [zIndexRange[0], halfRange] : [halfRange - 1, 0] : zIndexRange;
				el.style.zIndex = `${objectZIndex(group.current, camera, zRange)}`;
				if (transform) {
					const [widthHalf, heightHalf] = [size.width / 2, size.height / 2];
					const fov = camera.projectionMatrix.elements[5] * heightHalf;
					const { isOrthographicCamera, top, left, bottom, right } = camera;
					const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse);
					const cameraTransform = isOrthographicCamera ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)` : `translateZ(${fov}px)`;
					let matrix = group.current.matrixWorld;
					if (sprite) {
						matrix = camera.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(group.current.scale);
						matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
						matrix.elements[15] = 1;
					}
					el.style.width = size.width + "px";
					el.style.height = size.height + "px";
					el.style.perspective = isOrthographicCamera ? "" : `${fov}px`;
					if (transformOuterRef.current && transformInnerRef.current) {
						transformOuterRef.current.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
						transformInnerRef.current.style.transform = getObjectCSSMatrix(matrix, 1 / ((distanceFactor || 10) / 400));
					}
				} else {
					const scale = distanceFactor === void 0 ? 1 : objectScale(group.current, camera) * distanceFactor;
					el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
				}
				oldPosition.current = vec;
				oldZoom.current = camera.zoom;
			}
		}
		if (!isRayCastOcclusion && occlusionMeshRef.current && !isMeshSizeSet.current) if (transform) {
			if (transformOuterRef.current) {
				const el = transformOuterRef.current.children[0];
				if (el != null && el.clientWidth && el != null && el.clientHeight) {
					const { isOrthographicCamera } = camera;
					if (isOrthographicCamera || geometry) {
						if (props.scale) if (!Array.isArray(props.scale)) occlusionMeshRef.current.scale.setScalar(1 / props.scale);
						else if (props.scale instanceof Vector3) occlusionMeshRef.current.scale.copy(props.scale.clone().divideScalar(1));
						else occlusionMeshRef.current.scale.set(1 / props.scale[0], 1 / props.scale[1], 1 / props.scale[2]);
					} else {
						const ratio = (distanceFactor || 10) / 400;
						const w = el.clientWidth * ratio;
						const h = el.clientHeight * ratio;
						occlusionMeshRef.current.scale.set(w, h, 1);
					}
					isMeshSizeSet.current = true;
				}
			}
		} else {
			const ele = el.children[0];
			if (ele != null && ele.clientWidth && ele != null && ele.clientHeight) {
				const ratio = 1 / viewport.factor;
				const w = ele.clientWidth * ratio;
				const h = ele.clientHeight * ratio;
				occlusionMeshRef.current.scale.set(w, h, 1);
				isMeshSizeSet.current = true;
			}
			occlusionMeshRef.current.lookAt(gl.camera.position);
		}
	});
	const shaders = import_react.useMemo(() => ({
		vertexShader: !transform ? `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      ` : void 0,
		fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `
	}), [transform]);
	return /*#__PURE__*/ import_react.createElement("group", _extends({}, props, { ref: group }), occlude && !isRayCastOcclusion && /*#__PURE__*/ import_react.createElement("mesh", {
		castShadow,
		receiveShadow,
		ref: occlusionMeshRef
	}, geometry || /*#__PURE__*/ import_react.createElement("planeGeometry", null), material || /*#__PURE__*/ import_react.createElement("shaderMaterial", {
		side: 2,
		vertexShader: shaders.vertexShader,
		fragmentShader: shaders.fragmentShader
	})));
});
//#endregion
//#region node_modules/three-stdlib/_polyfill/constants.js
var version = /* @__PURE__ */ (() => parseInt("185".replace(/\D+/g, "")))();
//#endregion
//#region node_modules/three-stdlib/node_modules/fflate/esm/index.mjs
var require$1 = createRequire("/");
try {
	require$1("worker_threads").Worker;
} catch (e) {}
var u8 = Uint8Array;
var u16 = Uint16Array;
var u32 = Uint32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new u32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return [b, r];
};
var _a = freb(fleb, 2);
var fl = _a[0];
var revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b[0];
_b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >>> 1 | (i & 21845) << 1;
	x = (x & 52428) >>> 2 | (x & 13107) << 2;
	x = (x & 61680) >>> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = (function(cd, mb, r) {
	var s = cd.length;
	var i = 0;
	var l = new u16(mb);
	for (; i < s; ++i) ++l[cd[i] - 1];
	var le = new u16(mb);
	for (i = 0; i < mb; ++i) le[i] = le[i - 1] + l[i - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i = 0; i < s; ++i) if (cd[i]) {
			var sv = i << 4 | cd[i];
			var r_1 = mb - cd[i];
			var v = le[cd[i] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >>> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i = 0; i < s; ++i) if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
	}
	return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flrm = /*#__PURE__*/ hMap(flt, 9, 1);
var fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
var max = function(a) {
	var m = a[0];
	for (var i = 1; i < a.length; ++i) if (a[i] > m) m = a[i];
	return m;
};
var bits = function(d, p, m) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
	return (p / 8 | 0) + (p & 7 && 1);
};
var slc = function(v, s, e) {
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
	n.set(v.subarray(s, e));
	return n;
};
var inflt = function(dat, buf, st) {
	var sl = dat.length;
	if (!sl || st && !st.l && sl < 5) return buf || new u8(0);
	var noBuf = !buf || st;
	var noSt = !st || st.i;
	if (!st) st = {};
	if (!buf) buf = new u8(sl * 3);
	var cbuf = function(l) {
		var bl = buf.length;
		if (l > bl) {
			var nbuf = new u8(Math.max(bl * 2, l));
			nbuf.set(buf);
			buf = nbuf;
		}
	};
	var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
	var tbts = sl * 8;
	do {
		if (!lm) {
			st.f = final = bits(dat, pos, 1);
			var type = bits(dat, pos + 1, 3);
			pos += 3;
			if (!type) {
				var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
				if (t > sl) {
					if (noSt) throw "unexpected EOF";
					break;
				}
				if (noBuf) cbuf(bt + l);
				buf.set(dat.subarray(s, t), bt);
				st.b = bt += l, st.p = pos = t * 8;
				continue;
			} else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
			else if (type == 2) {
				var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
				var tl = hLit + bits(dat, pos + 5, 31) + 1;
				pos += 14;
				var ldt = new u8(tl);
				var clt = new u8(19);
				for (var i = 0; i < hcLen; ++i) clt[clim[i]] = bits(dat, pos + i * 3, 7);
				pos += hcLen * 3;
				var clb = max(clt), clbmsk = (1 << clb) - 1;
				var clm = hMap(clt, clb, 1);
				for (var i = 0; i < tl;) {
					var r = clm[bits(dat, pos, clbmsk)];
					pos += r & 15;
					var s = r >>> 4;
					if (s < 16) ldt[i++] = s;
					else {
						var c = 0, n = 0;
						if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
						else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
						else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
						while (n--) ldt[i++] = c;
					}
				}
				var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
				lbt = max(lt);
				dbt = max(dt);
				lm = hMap(lt, lbt, 1);
				dm = hMap(dt, dbt, 1);
			} else throw "invalid block type";
			if (pos > tbts) {
				if (noSt) throw "unexpected EOF";
				break;
			}
		}
		if (noBuf) cbuf(bt + 131072);
		var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
		var lpos = pos;
		for (;; lpos = pos) {
			var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
			pos += c & 15;
			if (pos > tbts) {
				if (noSt) throw "unexpected EOF";
				break;
			}
			if (!c) throw "invalid length/literal";
			if (sym < 256) buf[bt++] = sym;
			else if (sym == 256) {
				lpos = pos, lm = null;
				break;
			} else {
				var add = sym - 254;
				if (sym > 264) {
					var i = sym - 257, b = fleb[i];
					add = bits(dat, pos, (1 << b) - 1) + fl[i];
					pos += b;
				}
				var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
				if (!d) throw "invalid distance";
				pos += d & 15;
				var dt = fd[dsym];
				if (dsym > 3) {
					var b = fdeb[dsym];
					dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
				}
				if (pos > tbts) {
					if (noSt) throw "unexpected EOF";
					break;
				}
				if (noBuf) cbuf(bt + 131072);
				var end = bt + add;
				for (; bt < end; bt += 4) {
					buf[bt] = buf[bt - dt];
					buf[bt + 1] = buf[bt + 1 - dt];
					buf[bt + 2] = buf[bt + 2 - dt];
					buf[bt + 3] = buf[bt + 3 - dt];
				}
				bt = end;
			}
		}
		st.l = lm, st.p = lpos, st.b = bt;
		if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
	} while (!final);
	return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /*#__PURE__*/ new u8(0);
var zlv = function(d) {
	if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw "invalid zlib data";
	if (d[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
/**
* Expands Zlib data
* @param data The data to decompress
* @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
* @returns The decompressed version of the data
*/
function unzlibSync(data, out) {
	return inflt((zlv(data), data.subarray(2, -4)), out);
}
var td = typeof TextDecoder != "undefined" && /*#__PURE__*/ new TextDecoder();
try {
	td.decode(et, { stream: true });
} catch (e) {}
//#endregion
//#region node_modules/three-stdlib/objects/GroundProjectedEnv.js
var isCubeTexture = (def) => def && def.isCubeTexture;
var GroundProjectedEnv = class extends Mesh {
	constructor(texture, options) {
		var _a, _b;
		const isCubeMap = isCubeTexture(texture);
		const cubeSize = ((_b = isCubeMap ? (_a = texture.image[0]) == null ? void 0 : _a.width : texture.image.width) != null ? _b : 1024) / 4;
		const _lodMax = Math.floor(Math.log2(cubeSize));
		const _cubeSize = Math.pow(2, _lodMax);
		const width = 3 * Math.max(_cubeSize, 112);
		const height = 4 * _cubeSize;
		const defines = [
			isCubeMap ? "#define ENVMAP_TYPE_CUBE" : "",
			`#define CUBEUV_TEXEL_WIDTH ${1 / width}`,
			`#define CUBEUV_TEXEL_HEIGHT ${1 / height}`,
			`#define CUBEUV_MAX_MIP ${_lodMax}.0`
		];
		const vertexShader = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `;
		const fragmentShader = defines.join("\n") + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `;
		const uniforms = {
			map: { value: texture },
			height: { value: (options == null ? void 0 : options.height) || 15 },
			radius: { value: (options == null ? void 0 : options.radius) || 100 }
		};
		const geometry = new IcosahedronGeometry(1, 16);
		const material = new ShaderMaterial({
			uniforms,
			fragmentShader,
			vertexShader,
			side: 2
		});
		super(geometry, material);
	}
	set radius(radius) {
		this.material.uniforms.radius.value = radius;
	}
	get radius() {
		return this.material.uniforms.radius.value;
	}
	set height(height) {
		this.material.uniforms.height.value = height;
	}
	get height() {
		return this.material.uniforms.height.value;
	}
};
//#endregion
//#region node_modules/three-stdlib/shaders/HorizontalBlurShader.js
var HorizontalBlurShader = {
	uniforms: {
		tDiffuse: { value: null },
		h: { value: 1 / 512 }
	},
	vertexShader: `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,
	fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
};
//#endregion
//#region node_modules/three-stdlib/shaders/VerticalBlurShader.js
var VerticalBlurShader = {
	uniforms: {
		tDiffuse: { value: null },
		v: { value: 1 / 512 }
	},
	vertexShader: `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,
	fragmentShader: `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
};
//#endregion
//#region node_modules/three-stdlib/loaders/RGBELoader.js
var RGBELoader = class extends DataTextureLoader {
	constructor(manager) {
		super(manager);
		this.type = HalfFloatType;
	}
	parse(buffer) {
		const rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
			switch (rgbe_error_code) {
				case rgbe_read_error: throw new Error("THREE.RGBELoader: Read Error: " + (msg || ""));
				case rgbe_write_error: throw new Error("THREE.RGBELoader: Write Error: " + (msg || ""));
				case rgbe_format_error: throw new Error("THREE.RGBELoader: Bad File Format: " + (msg || ""));
				default:
				case rgbe_memory_error: throw new Error("THREE.RGBELoader: Memory Error: " + (msg || ""));
			}
		}, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
			const chunkSize = 128;
			lineLimit = !lineLimit ? 1024 : lineLimit;
			let p = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
			while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer2.byteLength) {
				s += chunk;
				len += chunk.length;
				p += chunkSize;
				chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
			}
			if (-1 < i) {
				if (false !== consume) buffer2.pos += len + i + 1;
				return s + chunk.slice(0, i);
			}
			return false;
		}, RGBE_ReadHeader = function(buffer2) {
			const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
				valid: 0,
				string: "",
				comments: "",
				programtype: "RGBE",
				format: "",
				gamma: 1,
				exposure: 1,
				width: 0,
				height: 0
			};
			let line, match;
			if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) rgbe_error(rgbe_read_error, "no header found");
			if (!(match = line.match(magic_token_re))) rgbe_error(rgbe_format_error, "bad initial token");
			header.valid |= RGBE_VALID_PROGRAMTYPE;
			header.programtype = match[1];
			header.string += line + "\n";
			while (true) {
				line = fgets(buffer2);
				if (false === line) break;
				header.string += line + "\n";
				if ("#" === line.charAt(0)) {
					header.comments += line + "\n";
					continue;
				}
				if (match = line.match(gamma_re)) header.gamma = parseFloat(match[1]);
				if (match = line.match(exposure_re)) header.exposure = parseFloat(match[1]);
				if (match = line.match(format_re)) {
					header.valid |= RGBE_VALID_FORMAT;
					header.format = match[1];
				}
				if (match = line.match(dimensions_re)) {
					header.valid |= RGBE_VALID_DIMENSIONS;
					header.height = parseInt(match[1], 10);
					header.width = parseInt(match[2], 10);
				}
				if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
			}
			if (!(header.valid & RGBE_VALID_FORMAT)) rgbe_error(rgbe_format_error, "missing format specifier");
			if (!(header.valid & RGBE_VALID_DIMENSIONS)) rgbe_error(rgbe_format_error, "missing image size specifier");
			return header;
		}, RGBE_ReadPixels_RLE = function(buffer2, w2, h2) {
			const scanline_width = w2;
			if (scanline_width < 8 || scanline_width > 32767 || 2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128) return new Uint8Array(buffer2);
			if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) rgbe_error(rgbe_format_error, "wrong scanline width");
			const data_rgba = new Uint8Array(4 * w2 * h2);
			if (!data_rgba.length) rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
			let offset = 0, pos = 0;
			const ptr_end = 4 * scanline_width;
			const rgbeStart = /* @__PURE__ */ new Uint8Array(4);
			const scanline_buffer = new Uint8Array(ptr_end);
			let num_scanlines = h2;
			while (num_scanlines > 0 && pos < buffer2.byteLength) {
				if (pos + 4 > buffer2.byteLength) rgbe_error(rgbe_read_error);
				rgbeStart[0] = buffer2[pos++];
				rgbeStart[1] = buffer2[pos++];
				rgbeStart[2] = buffer2[pos++];
				rgbeStart[3] = buffer2[pos++];
				if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) rgbe_error(rgbe_format_error, "bad rgbe scanline format");
				let ptr = 0, count;
				while (ptr < ptr_end && pos < buffer2.byteLength) {
					count = buffer2[pos++];
					const isEncodedRun = count > 128;
					if (isEncodedRun) count -= 128;
					if (0 === count || ptr + count > ptr_end) rgbe_error(rgbe_format_error, "bad scanline data");
					if (isEncodedRun) {
						const byteValue = buffer2[pos++];
						for (let i = 0; i < count; i++) scanline_buffer[ptr++] = byteValue;
					} else {
						scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
						ptr += count;
						pos += count;
					}
				}
				const l = scanline_width;
				for (let i = 0; i < l; i++) {
					let off = 0;
					data_rgba[offset] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 1] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 2] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 3] = scanline_buffer[i + off];
					offset += 4;
				}
				num_scanlines--;
			}
			return data_rgba;
		};
		const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
			const e = sourceArray[sourceOffset + 3];
			const scale = Math.pow(2, e - 128) / 255;
			destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
			destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
			destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
			destArray[destOffset + 3] = 1;
		};
		const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
			const e = sourceArray[sourceOffset + 3];
			const scale = Math.pow(2, e - 128) / 255;
			destArray[destOffset + 0] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
			destArray[destOffset + 1] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
			destArray[destOffset + 2] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
			destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
		};
		const byteArray = new Uint8Array(buffer);
		byteArray.pos = 0;
		const rgbe_header_info = RGBE_ReadHeader(byteArray);
		const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
		let data, type;
		let numElements;
		switch (this.type) {
			case FloatType:
				numElements = image_rgba_data.length / 4;
				const floatArray = new Float32Array(numElements * 4);
				for (let j = 0; j < numElements; j++) RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
				data = floatArray;
				type = FloatType;
				break;
			case HalfFloatType:
				numElements = image_rgba_data.length / 4;
				const halfArray = new Uint16Array(numElements * 4);
				for (let j = 0; j < numElements; j++) RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
				data = halfArray;
				type = HalfFloatType;
				break;
			default: throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
		}
		return {
			width: w,
			height: h,
			data,
			header: rgbe_header_info.string,
			gamma: rgbe_header_info.gamma,
			exposure: rgbe_header_info.exposure,
			type
		};
	}
	setDataType(value) {
		this.type = value;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		function onLoadCallback(texture, texData) {
			switch (texture.type) {
				case FloatType:
				case HalfFloatType:
					if ("colorSpace" in texture) texture.colorSpace = "srgb-linear";
					else texture.encoding = 3e3;
					texture.minFilter = LinearFilter;
					texture.magFilter = LinearFilter;
					texture.generateMipmaps = false;
					texture.flipY = true;
					break;
			}
			if (onLoad) onLoad(texture, texData);
		}
		return super.load(url, onLoadCallback, onProgress, onError);
	}
};
//#endregion
//#region node_modules/three-stdlib/loaders/EXRLoader.js
var hasColorSpace = version >= 152;
var EXRLoader = class extends DataTextureLoader {
	constructor(manager) {
		super(manager);
		this.type = HalfFloatType;
	}
	parse(buffer) {
		const USHORT_RANGE = 65536;
		const BITMAP_SIZE = 8192;
		const HUF_DECBITS = 14;
		const HUF_ENCSIZE = 65537;
		const HUF_DECSIZE = 1 << HUF_DECBITS;
		const HUF_DECMASK = HUF_DECSIZE - 1;
		const NBITS = 16;
		const A_OFFSET = 1 << NBITS - 1;
		const MOD_MASK = (1 << NBITS) - 1;
		const SHORT_ZEROCODE_RUN = 59;
		const LONG_ZEROCODE_RUN = 63;
		const SHORTEST_LONG_RUN = 65 - SHORT_ZEROCODE_RUN;
		const ULONG_SIZE = 8;
		const FLOAT32_SIZE = 4;
		const INT32_SIZE = 4;
		const INT16_SIZE = 2;
		const INT8_SIZE = 1;
		const STATIC_HUFFMAN = 0;
		const DEFLATE = 1;
		const UNKNOWN = 0;
		const LOSSY_DCT = 1;
		const RLE = 2;
		const logBase = Math.pow(2.7182818, 2.2);
		function reverseLutFromBitmap(bitmap, lut) {
			var k = 0;
			for (var i = 0; i < USHORT_RANGE; ++i) if (i == 0 || bitmap[i >> 3] & 1 << (i & 7)) lut[k++] = i;
			var n = k - 1;
			while (k < USHORT_RANGE) lut[k++] = 0;
			return n;
		}
		function hufClearDecTable(hdec) {
			for (var i = 0; i < HUF_DECSIZE; i++) {
				hdec[i] = {};
				hdec[i].len = 0;
				hdec[i].lit = 0;
				hdec[i].p = null;
			}
		}
		const getBitsReturn = {
			l: 0,
			c: 0,
			lc: 0
		};
		function getBits(nBits, c, lc, uInt8Array2, inOffset) {
			while (lc < nBits) {
				c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
				lc += 8;
			}
			lc -= nBits;
			getBitsReturn.l = c >> lc & (1 << nBits) - 1;
			getBitsReturn.c = c;
			getBitsReturn.lc = lc;
		}
		const hufTableBuffer = new Array(59);
		function hufCanonicalCodeTable(hcode) {
			for (var i = 0; i <= 58; ++i) hufTableBuffer[i] = 0;
			for (var i = 0; i < HUF_ENCSIZE; ++i) hufTableBuffer[hcode[i]] += 1;
			var c = 0;
			for (var i = 58; i > 0; --i) {
				var nc = c + hufTableBuffer[i] >> 1;
				hufTableBuffer[i] = c;
				c = nc;
			}
			for (var i = 0; i < HUF_ENCSIZE; ++i) {
				var l = hcode[i];
				if (l > 0) hcode[i] = l | hufTableBuffer[l]++ << 6;
			}
		}
		function hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, hcode) {
			var p = inOffset;
			var c = 0;
			var lc = 0;
			for (; im <= iM; im++) {
				if (p.value - inOffset.value > ni) return false;
				getBits(6, c, lc, uInt8Array2, p);
				var l = getBitsReturn.l;
				c = getBitsReturn.c;
				lc = getBitsReturn.lc;
				hcode[im] = l;
				if (l == LONG_ZEROCODE_RUN) {
					if (p.value - inOffset.value > ni) throw "Something wrong with hufUnpackEncTable";
					getBits(8, c, lc, uInt8Array2, p);
					var zerun = getBitsReturn.l + SHORTEST_LONG_RUN;
					c = getBitsReturn.c;
					lc = getBitsReturn.lc;
					if (im + zerun > iM + 1) throw "Something wrong with hufUnpackEncTable";
					while (zerun--) hcode[im++] = 0;
					im--;
				} else if (l >= SHORT_ZEROCODE_RUN) {
					var zerun = l - SHORT_ZEROCODE_RUN + 2;
					if (im + zerun > iM + 1) throw "Something wrong with hufUnpackEncTable";
					while (zerun--) hcode[im++] = 0;
					im--;
				}
			}
			hufCanonicalCodeTable(hcode);
		}
		function hufLength(code) {
			return code & 63;
		}
		function hufCode(code) {
			return code >> 6;
		}
		function hufBuildDecTable(hcode, im, iM, hdecod) {
			for (; im <= iM; im++) {
				var c = hufCode(hcode[im]);
				var l = hufLength(hcode[im]);
				if (c >> l) throw "Invalid table entry";
				if (l > HUF_DECBITS) {
					var pl = hdecod[c >> l - HUF_DECBITS];
					if (pl.len) throw "Invalid table entry";
					pl.lit++;
					if (pl.p) {
						var p = pl.p;
						pl.p = new Array(pl.lit);
						for (var i = 0; i < pl.lit - 1; ++i) pl.p[i] = p[i];
					} else pl.p = new Array(1);
					pl.p[pl.lit - 1] = im;
				} else if (l) {
					var plOffset = 0;
					for (var i = 1 << HUF_DECBITS - l; i > 0; i--) {
						var pl = hdecod[(c << HUF_DECBITS - l) + plOffset];
						if (pl.len || pl.p) throw "Invalid table entry";
						pl.len = l;
						pl.lit = im;
						plOffset++;
					}
				}
			}
			return true;
		}
		const getCharReturn = {
			c: 0,
			lc: 0
		};
		function getChar(c, lc, uInt8Array2, inOffset) {
			c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
			lc += 8;
			getCharReturn.c = c;
			getCharReturn.lc = lc;
		}
		const getCodeReturn = {
			c: 0,
			lc: 0
		};
		function getCode(po, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outBufferOffset, outBufferEndOffset) {
			if (po == rlc) {
				if (lc < 8) {
					getChar(c, lc, uInt8Array2, inOffset);
					c = getCharReturn.c;
					lc = getCharReturn.lc;
				}
				lc -= 8;
				var cs = c >> lc;
				var cs = new Uint8Array([cs])[0];
				if (outBufferOffset.value + cs > outBufferEndOffset) return false;
				var s = outBuffer[outBufferOffset.value - 1];
				while (cs-- > 0) outBuffer[outBufferOffset.value++] = s;
			} else if (outBufferOffset.value < outBufferEndOffset) outBuffer[outBufferOffset.value++] = po;
			else return false;
			getCodeReturn.c = c;
			getCodeReturn.lc = lc;
		}
		function UInt16(value) {
			return value & 65535;
		}
		function Int16(value) {
			var ref = UInt16(value);
			return ref > 32767 ? ref - 65536 : ref;
		}
		const wdec14Return = {
			a: 0,
			b: 0
		};
		function wdec14(l, h) {
			var ls = Int16(l);
			var hi = Int16(h);
			var ai = ls + (hi & 1) + (hi >> 1);
			var as = ai;
			var bs = ai - hi;
			wdec14Return.a = as;
			wdec14Return.b = bs;
		}
		function wdec16(l, h) {
			var m = UInt16(l);
			var d = UInt16(h);
			var bb = m - (d >> 1) & MOD_MASK;
			var aa = d + bb - A_OFFSET & MOD_MASK;
			wdec14Return.a = aa;
			wdec14Return.b = bb;
		}
		function wav2Decode(buffer2, j, nx, ox, ny, oy, mx) {
			var w14 = mx < 16384;
			var n = nx > ny ? ny : nx;
			var p = 1;
			var p2;
			while (p <= n) p <<= 1;
			p >>= 1;
			p2 = p;
			p >>= 1;
			while (p >= 1) {
				var py = 0;
				var ey = py + oy * (ny - p2);
				var oy1 = oy * p;
				var oy2 = oy * p2;
				var ox1 = ox * p;
				var ox2 = ox * p2;
				var i00, i01, i10, i11;
				for (; py <= ey; py += oy2) {
					var px = py;
					var ex = py + ox * (nx - p2);
					for (; px <= ex; px += ox2) {
						var p01 = px + ox1;
						var p10 = px + oy1;
						var p11 = p10 + ox1;
						if (w14) {
							wdec14(buffer2[px + j], buffer2[p10 + j]);
							i00 = wdec14Return.a;
							i10 = wdec14Return.b;
							wdec14(buffer2[p01 + j], buffer2[p11 + j]);
							i01 = wdec14Return.a;
							i11 = wdec14Return.b;
							wdec14(i00, i01);
							buffer2[px + j] = wdec14Return.a;
							buffer2[p01 + j] = wdec14Return.b;
							wdec14(i10, i11);
							buffer2[p10 + j] = wdec14Return.a;
							buffer2[p11 + j] = wdec14Return.b;
						} else {
							wdec16(buffer2[px + j], buffer2[p10 + j]);
							i00 = wdec14Return.a;
							i10 = wdec14Return.b;
							wdec16(buffer2[p01 + j], buffer2[p11 + j]);
							i01 = wdec14Return.a;
							i11 = wdec14Return.b;
							wdec16(i00, i01);
							buffer2[px + j] = wdec14Return.a;
							buffer2[p01 + j] = wdec14Return.b;
							wdec16(i10, i11);
							buffer2[p10 + j] = wdec14Return.a;
							buffer2[p11 + j] = wdec14Return.b;
						}
					}
					if (nx & p) {
						var p10 = px + oy1;
						if (w14) wdec14(buffer2[px + j], buffer2[p10 + j]);
						else wdec16(buffer2[px + j], buffer2[p10 + j]);
						i00 = wdec14Return.a;
						buffer2[p10 + j] = wdec14Return.b;
						buffer2[px + j] = i00;
					}
				}
				if (ny & p) {
					var px = py;
					var ex = py + ox * (nx - p2);
					for (; px <= ex; px += ox2) {
						var p01 = px + ox1;
						if (w14) wdec14(buffer2[px + j], buffer2[p01 + j]);
						else wdec16(buffer2[px + j], buffer2[p01 + j]);
						i00 = wdec14Return.a;
						buffer2[p01 + j] = wdec14Return.b;
						buffer2[px + j] = i00;
					}
				}
				p2 = p;
				p >>= 1;
			}
			return py;
		}
		function hufDecode(encodingTable, decodingTable, uInt8Array2, inDataView, inOffset, ni, rlc, no, outBuffer, outOffset) {
			var c = 0;
			var lc = 0;
			var outBufferEndOffset = no;
			var inOffsetEnd = Math.trunc(inOffset.value + (ni + 7) / 8);
			while (inOffset.value < inOffsetEnd) {
				getChar(c, lc, uInt8Array2, inOffset);
				c = getCharReturn.c;
				lc = getCharReturn.lc;
				while (lc >= HUF_DECBITS) {
					var pl = decodingTable[c >> lc - HUF_DECBITS & HUF_DECMASK];
					if (pl.len) {
						lc -= pl.len;
						getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
						c = getCodeReturn.c;
						lc = getCodeReturn.lc;
					} else {
						if (!pl.p) throw "hufDecode issues";
						var j;
						for (j = 0; j < pl.lit; j++) {
							var l = hufLength(encodingTable[pl.p[j]]);
							while (lc < l && inOffset.value < inOffsetEnd) {
								getChar(c, lc, uInt8Array2, inOffset);
								c = getCharReturn.c;
								lc = getCharReturn.lc;
							}
							if (lc >= l) {
								if (hufCode(encodingTable[pl.p[j]]) == (c >> lc - l & (1 << l) - 1)) {
									lc -= l;
									getCode(pl.p[j], rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
									c = getCodeReturn.c;
									lc = getCodeReturn.lc;
									break;
								}
							}
						}
						if (j == pl.lit) throw "hufDecode issues";
					}
				}
			}
			var i = 8 - ni & 7;
			c >>= i;
			lc -= i;
			while (lc > 0) {
				var pl = decodingTable[c << HUF_DECBITS - lc & HUF_DECMASK];
				if (pl.len) {
					lc -= pl.len;
					getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
					c = getCodeReturn.c;
					lc = getCodeReturn.lc;
				} else throw "hufDecode issues";
			}
			return true;
		}
		function hufUncompress(uInt8Array2, inDataView, inOffset, nCompressed, outBuffer, nRaw) {
			var outOffset = { value: 0 };
			var initialInOffset = inOffset.value;
			var im = parseUint32(inDataView, inOffset);
			var iM = parseUint32(inDataView, inOffset);
			inOffset.value += 4;
			var nBits = parseUint32(inDataView, inOffset);
			inOffset.value += 4;
			if (im < 0 || im >= HUF_ENCSIZE || iM < 0 || iM >= HUF_ENCSIZE) throw "Something wrong with HUF_ENCSIZE";
			var freq = new Array(HUF_ENCSIZE);
			var hdec = new Array(HUF_DECSIZE);
			hufClearDecTable(hdec);
			hufUnpackEncTable(uInt8Array2, inDataView, inOffset, nCompressed - (inOffset.value - initialInOffset), im, iM, freq);
			if (nBits > 8 * (nCompressed - (inOffset.value - initialInOffset))) throw "Something wrong with hufUncompress";
			hufBuildDecTable(freq, im, iM, hdec);
			hufDecode(freq, hdec, uInt8Array2, inDataView, inOffset, nBits, iM, nRaw, outBuffer, outOffset);
		}
		function applyLut(lut, data, nData) {
			for (var i = 0; i < nData; ++i) data[i] = lut[data[i]];
		}
		function predictor(source) {
			for (var t = 1; t < source.length; t++) source[t] = source[t - 1] + source[t] - 128;
		}
		function interleaveScalar(source, out) {
			var t1 = 0;
			var t2 = Math.floor((source.length + 1) / 2);
			var s = 0;
			var stop = source.length - 1;
			while (true) {
				if (s > stop) break;
				out[s++] = source[t1++];
				if (s > stop) break;
				out[s++] = source[t2++];
			}
		}
		function decodeRunLength(source) {
			var size = source.byteLength;
			var out = new Array();
			var p = 0;
			var reader = new DataView(source);
			while (size > 0) {
				var l = reader.getInt8(p++);
				if (l < 0) {
					var count = -l;
					size -= count + 1;
					for (var i = 0; i < count; i++) out.push(reader.getUint8(p++));
				} else {
					var count = l;
					size -= 2;
					var value = reader.getUint8(p++);
					for (var i = 0; i < count + 1; i++) out.push(value);
				}
			}
			return out;
		}
		function lossyDctDecode(cscSet, rowPtrs, channelData, acBuffer, dcBuffer, outBuffer) {
			var dataView = new DataView(outBuffer.buffer);
			var width = channelData[cscSet.idx[0]].width;
			var height = channelData[cscSet.idx[0]].height;
			var numComp = 3;
			var numFullBlocksX = Math.floor(width / 8);
			var numBlocksX = Math.ceil(width / 8);
			var numBlocksY = Math.ceil(height / 8);
			var leftoverX = width - (numBlocksX - 1) * 8;
			var leftoverY = height - (numBlocksY - 1) * 8;
			var currAcComp = { value: 0 };
			var currDcComp = new Array(numComp);
			var dctData = new Array(numComp);
			var halfZigBlock = new Array(numComp);
			var rowBlock = new Array(numComp);
			var rowOffsets = new Array(numComp);
			for (let comp2 = 0; comp2 < numComp; ++comp2) {
				rowOffsets[comp2] = rowPtrs[cscSet.idx[comp2]];
				currDcComp[comp2] = comp2 < 1 ? 0 : currDcComp[comp2 - 1] + numBlocksX * numBlocksY;
				dctData[comp2] = /* @__PURE__ */ new Float32Array(64);
				halfZigBlock[comp2] = /* @__PURE__ */ new Uint16Array(64);
				rowBlock[comp2] = new Uint16Array(numBlocksX * 64);
			}
			for (let blocky = 0; blocky < numBlocksY; ++blocky) {
				var maxY = 8;
				if (blocky == numBlocksY - 1) maxY = leftoverY;
				var maxX = 8;
				for (let blockx = 0; blockx < numBlocksX; ++blockx) {
					if (blockx == numBlocksX - 1) maxX = leftoverX;
					for (let comp2 = 0; comp2 < numComp; ++comp2) {
						halfZigBlock[comp2].fill(0);
						halfZigBlock[comp2][0] = dcBuffer[currDcComp[comp2]++];
						unRleAC(currAcComp, acBuffer, halfZigBlock[comp2]);
						unZigZag(halfZigBlock[comp2], dctData[comp2]);
						dctInverse(dctData[comp2]);
					}
					csc709Inverse(dctData);
					for (let comp2 = 0; comp2 < numComp; ++comp2) convertToHalf(dctData[comp2], rowBlock[comp2], blockx * 64);
				}
				let offset2 = 0;
				for (let comp2 = 0; comp2 < numComp; ++comp2) {
					const type2 = channelData[cscSet.idx[comp2]].type;
					for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
						offset2 = rowOffsets[comp2][y2];
						for (let blockx = 0; blockx < numFullBlocksX; ++blockx) {
							const src = blockx * 64 + (y2 & 7) * 8;
							dataView.setUint16(offset2 + 0 * INT16_SIZE * type2, rowBlock[comp2][src + 0], true);
							dataView.setUint16(offset2 + 1 * INT16_SIZE * type2, rowBlock[comp2][src + 1], true);
							dataView.setUint16(offset2 + 2 * INT16_SIZE * type2, rowBlock[comp2][src + 2], true);
							dataView.setUint16(offset2 + 3 * INT16_SIZE * type2, rowBlock[comp2][src + 3], true);
							dataView.setUint16(offset2 + 4 * INT16_SIZE * type2, rowBlock[comp2][src + 4], true);
							dataView.setUint16(offset2 + 5 * INT16_SIZE * type2, rowBlock[comp2][src + 5], true);
							dataView.setUint16(offset2 + 6 * INT16_SIZE * type2, rowBlock[comp2][src + 6], true);
							dataView.setUint16(offset2 + 7 * INT16_SIZE * type2, rowBlock[comp2][src + 7], true);
							offset2 += 8 * INT16_SIZE * type2;
						}
					}
					if (numFullBlocksX != numBlocksX) for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
						const offset3 = rowOffsets[comp2][y2] + 8 * numFullBlocksX * INT16_SIZE * type2;
						const src = numFullBlocksX * 64 + (y2 & 7) * 8;
						for (let x2 = 0; x2 < maxX; ++x2) dataView.setUint16(offset3 + x2 * INT16_SIZE * type2, rowBlock[comp2][src + x2], true);
					}
				}
			}
			var halfRow = new Uint16Array(width);
			var dataView = new DataView(outBuffer.buffer);
			for (var comp = 0; comp < numComp; ++comp) {
				channelData[cscSet.idx[comp]].decoded = true;
				var type = channelData[cscSet.idx[comp]].type;
				if (channelData[comp].type != 2) continue;
				for (var y = 0; y < height; ++y) {
					const offset2 = rowOffsets[comp][y];
					for (var x = 0; x < width; ++x) halfRow[x] = dataView.getUint16(offset2 + x * INT16_SIZE * type, true);
					for (var x = 0; x < width; ++x) dataView.setFloat32(offset2 + x * INT16_SIZE * type, decodeFloat16(halfRow[x]), true);
				}
			}
		}
		function unRleAC(currAcComp, acBuffer, halfZigBlock) {
			var acValue;
			var dctComp = 1;
			while (dctComp < 64) {
				acValue = acBuffer[currAcComp.value];
				if (acValue == 65280) dctComp = 64;
				else if (acValue >> 8 == 255) dctComp += acValue & 255;
				else {
					halfZigBlock[dctComp] = acValue;
					dctComp++;
				}
				currAcComp.value++;
			}
		}
		function unZigZag(src, dst) {
			dst[0] = decodeFloat16(src[0]);
			dst[1] = decodeFloat16(src[1]);
			dst[2] = decodeFloat16(src[5]);
			dst[3] = decodeFloat16(src[6]);
			dst[4] = decodeFloat16(src[14]);
			dst[5] = decodeFloat16(src[15]);
			dst[6] = decodeFloat16(src[27]);
			dst[7] = decodeFloat16(src[28]);
			dst[8] = decodeFloat16(src[2]);
			dst[9] = decodeFloat16(src[4]);
			dst[10] = decodeFloat16(src[7]);
			dst[11] = decodeFloat16(src[13]);
			dst[12] = decodeFloat16(src[16]);
			dst[13] = decodeFloat16(src[26]);
			dst[14] = decodeFloat16(src[29]);
			dst[15] = decodeFloat16(src[42]);
			dst[16] = decodeFloat16(src[3]);
			dst[17] = decodeFloat16(src[8]);
			dst[18] = decodeFloat16(src[12]);
			dst[19] = decodeFloat16(src[17]);
			dst[20] = decodeFloat16(src[25]);
			dst[21] = decodeFloat16(src[30]);
			dst[22] = decodeFloat16(src[41]);
			dst[23] = decodeFloat16(src[43]);
			dst[24] = decodeFloat16(src[9]);
			dst[25] = decodeFloat16(src[11]);
			dst[26] = decodeFloat16(src[18]);
			dst[27] = decodeFloat16(src[24]);
			dst[28] = decodeFloat16(src[31]);
			dst[29] = decodeFloat16(src[40]);
			dst[30] = decodeFloat16(src[44]);
			dst[31] = decodeFloat16(src[53]);
			dst[32] = decodeFloat16(src[10]);
			dst[33] = decodeFloat16(src[19]);
			dst[34] = decodeFloat16(src[23]);
			dst[35] = decodeFloat16(src[32]);
			dst[36] = decodeFloat16(src[39]);
			dst[37] = decodeFloat16(src[45]);
			dst[38] = decodeFloat16(src[52]);
			dst[39] = decodeFloat16(src[54]);
			dst[40] = decodeFloat16(src[20]);
			dst[41] = decodeFloat16(src[22]);
			dst[42] = decodeFloat16(src[33]);
			dst[43] = decodeFloat16(src[38]);
			dst[44] = decodeFloat16(src[46]);
			dst[45] = decodeFloat16(src[51]);
			dst[46] = decodeFloat16(src[55]);
			dst[47] = decodeFloat16(src[60]);
			dst[48] = decodeFloat16(src[21]);
			dst[49] = decodeFloat16(src[34]);
			dst[50] = decodeFloat16(src[37]);
			dst[51] = decodeFloat16(src[47]);
			dst[52] = decodeFloat16(src[50]);
			dst[53] = decodeFloat16(src[56]);
			dst[54] = decodeFloat16(src[59]);
			dst[55] = decodeFloat16(src[61]);
			dst[56] = decodeFloat16(src[35]);
			dst[57] = decodeFloat16(src[36]);
			dst[58] = decodeFloat16(src[48]);
			dst[59] = decodeFloat16(src[49]);
			dst[60] = decodeFloat16(src[57]);
			dst[61] = decodeFloat16(src[58]);
			dst[62] = decodeFloat16(src[62]);
			dst[63] = decodeFloat16(src[63]);
		}
		function dctInverse(data) {
			const a = .5 * Math.cos(3.14159 / 4);
			const b = .5 * Math.cos(3.14159 / 16);
			const c = .5 * Math.cos(3.14159 / 8);
			const d = .5 * Math.cos(3 * 3.14159 / 16);
			const e = .5 * Math.cos(5 * 3.14159 / 16);
			const f = .5 * Math.cos(3 * 3.14159 / 8);
			const g = .5 * Math.cos(7 * 3.14159 / 16);
			var alpha = new Array(4);
			var beta = new Array(4);
			var theta = new Array(4);
			var gamma = new Array(4);
			for (var row = 0; row < 8; ++row) {
				var rowPtr = row * 8;
				alpha[0] = c * data[rowPtr + 2];
				alpha[1] = f * data[rowPtr + 2];
				alpha[2] = c * data[rowPtr + 6];
				alpha[3] = f * data[rowPtr + 6];
				beta[0] = b * data[rowPtr + 1] + d * data[rowPtr + 3] + e * data[rowPtr + 5] + g * data[rowPtr + 7];
				beta[1] = d * data[rowPtr + 1] - g * data[rowPtr + 3] - b * data[rowPtr + 5] - e * data[rowPtr + 7];
				beta[2] = e * data[rowPtr + 1] - b * data[rowPtr + 3] + g * data[rowPtr + 5] + d * data[rowPtr + 7];
				beta[3] = g * data[rowPtr + 1] - e * data[rowPtr + 3] + d * data[rowPtr + 5] - b * data[rowPtr + 7];
				theta[0] = a * (data[rowPtr + 0] + data[rowPtr + 4]);
				theta[3] = a * (data[rowPtr + 0] - data[rowPtr + 4]);
				theta[1] = alpha[0] + alpha[3];
				theta[2] = alpha[1] - alpha[2];
				gamma[0] = theta[0] + theta[1];
				gamma[1] = theta[3] + theta[2];
				gamma[2] = theta[3] - theta[2];
				gamma[3] = theta[0] - theta[1];
				data[rowPtr + 0] = gamma[0] + beta[0];
				data[rowPtr + 1] = gamma[1] + beta[1];
				data[rowPtr + 2] = gamma[2] + beta[2];
				data[rowPtr + 3] = gamma[3] + beta[3];
				data[rowPtr + 4] = gamma[3] - beta[3];
				data[rowPtr + 5] = gamma[2] - beta[2];
				data[rowPtr + 6] = gamma[1] - beta[1];
				data[rowPtr + 7] = gamma[0] - beta[0];
			}
			for (var column = 0; column < 8; ++column) {
				alpha[0] = c * data[16 + column];
				alpha[1] = f * data[16 + column];
				alpha[2] = c * data[48 + column];
				alpha[3] = f * data[48 + column];
				beta[0] = b * data[8 + column] + d * data[24 + column] + e * data[40 + column] + g * data[56 + column];
				beta[1] = d * data[8 + column] - g * data[24 + column] - b * data[40 + column] - e * data[56 + column];
				beta[2] = e * data[8 + column] - b * data[24 + column] + g * data[40 + column] + d * data[56 + column];
				beta[3] = g * data[8 + column] - e * data[24 + column] + d * data[40 + column] - b * data[56 + column];
				theta[0] = a * (data[column] + data[32 + column]);
				theta[3] = a * (data[column] - data[32 + column]);
				theta[1] = alpha[0] + alpha[3];
				theta[2] = alpha[1] - alpha[2];
				gamma[0] = theta[0] + theta[1];
				gamma[1] = theta[3] + theta[2];
				gamma[2] = theta[3] - theta[2];
				gamma[3] = theta[0] - theta[1];
				data[0 + column] = gamma[0] + beta[0];
				data[8 + column] = gamma[1] + beta[1];
				data[16 + column] = gamma[2] + beta[2];
				data[24 + column] = gamma[3] + beta[3];
				data[32 + column] = gamma[3] - beta[3];
				data[40 + column] = gamma[2] - beta[2];
				data[48 + column] = gamma[1] - beta[1];
				data[56 + column] = gamma[0] - beta[0];
			}
		}
		function csc709Inverse(data) {
			for (var i = 0; i < 64; ++i) {
				var y = data[0][i];
				var cb = data[1][i];
				var cr = data[2][i];
				data[0][i] = y + 1.5747 * cr;
				data[1][i] = y - .1873 * cb - .4682 * cr;
				data[2][i] = y + 1.8556 * cb;
			}
		}
		function convertToHalf(src, dst, idx) {
			for (var i = 0; i < 64; ++i) dst[idx + i] = DataUtils.toHalfFloat(toLinear(src[i]));
		}
		function toLinear(float) {
			if (float <= 1) return Math.sign(float) * Math.pow(Math.abs(float), 2.2);
			else return Math.sign(float) * Math.pow(logBase, Math.abs(float) - 1);
		}
		function uncompressRAW(info) {
			return new DataView(info.array.buffer, info.offset.value, info.size);
		}
		function uncompressRLE(info) {
			var compressed = info.viewer.buffer.slice(info.offset.value, info.offset.value + info.size);
			var rawBuffer = new Uint8Array(decodeRunLength(compressed));
			var tmpBuffer = new Uint8Array(rawBuffer.length);
			predictor(rawBuffer);
			interleaveScalar(rawBuffer, tmpBuffer);
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressZIP(info) {
			var rawBuffer = unzlibSync(info.array.slice(info.offset.value, info.offset.value + info.size));
			var tmpBuffer = new Uint8Array(rawBuffer.length);
			predictor(rawBuffer);
			interleaveScalar(rawBuffer, tmpBuffer);
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressPIZ(info) {
			var inDataView = info.viewer;
			var inOffset = { value: info.offset.value };
			var outBuffer = new Uint16Array(info.width * info.scanlineBlockSize * (info.channels * info.type));
			var bitmap = new Uint8Array(BITMAP_SIZE);
			var outBufferEnd = 0;
			var pizChannelData = new Array(info.channels);
			for (var i = 0; i < info.channels; i++) {
				pizChannelData[i] = {};
				pizChannelData[i]["start"] = outBufferEnd;
				pizChannelData[i]["end"] = pizChannelData[i]["start"];
				pizChannelData[i]["nx"] = info.width;
				pizChannelData[i]["ny"] = info.lines;
				pizChannelData[i]["size"] = info.type;
				outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
			}
			var minNonZero = parseUint16(inDataView, inOffset);
			var maxNonZero = parseUint16(inDataView, inOffset);
			if (maxNonZero >= BITMAP_SIZE) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
			if (minNonZero <= maxNonZero) for (var i = 0; i < maxNonZero - minNonZero + 1; i++) bitmap[i + minNonZero] = parseUint8(inDataView, inOffset);
			var lut = new Uint16Array(USHORT_RANGE);
			var maxValue = reverseLutFromBitmap(bitmap, lut);
			var length = parseUint32(inDataView, inOffset);
			hufUncompress(info.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
			for (var i = 0; i < info.channels; ++i) {
				var cd = pizChannelData[i];
				for (var j = 0; j < pizChannelData[i].size; ++j) wav2Decode(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
			}
			applyLut(lut, outBuffer, outBufferEnd);
			var tmpOffset2 = 0;
			var tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
			for (var y = 0; y < info.lines; y++) for (var c = 0; c < info.channels; c++) {
				var cd = pizChannelData[c];
				var n = cd.nx * cd.size;
				var cp = new Uint8Array(outBuffer.buffer, cd.end * INT16_SIZE, n * INT16_SIZE);
				tmpBuffer.set(cp, tmpOffset2);
				tmpOffset2 += n * INT16_SIZE;
				cd.end += n;
			}
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressPXR(info) {
			var rawBuffer = unzlibSync(info.array.slice(info.offset.value, info.offset.value + info.size));
			const sz = info.lines * info.channels * info.width;
			const tmpBuffer = info.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
			let tmpBufferEnd = 0;
			let writePtr = 0;
			const ptr = new Array(4);
			for (let y = 0; y < info.lines; y++) for (let c = 0; c < info.channels; c++) {
				let pixel = 0;
				switch (info.type) {
					case 1:
						ptr[0] = tmpBufferEnd;
						ptr[1] = ptr[0] + info.width;
						tmpBufferEnd = ptr[1] + info.width;
						for (let j = 0; j < info.width; ++j) {
							const diff = rawBuffer[ptr[0]++] << 8 | rawBuffer[ptr[1]++];
							pixel += diff;
							tmpBuffer[writePtr] = pixel;
							writePtr++;
						}
						break;
					case 2:
						ptr[0] = tmpBufferEnd;
						ptr[1] = ptr[0] + info.width;
						ptr[2] = ptr[1] + info.width;
						tmpBufferEnd = ptr[2] + info.width;
						for (let j = 0; j < info.width; ++j) {
							const diff = rawBuffer[ptr[0]++] << 24 | rawBuffer[ptr[1]++] << 16 | rawBuffer[ptr[2]++] << 8;
							pixel += diff;
							tmpBuffer[writePtr] = pixel;
							writePtr++;
						}
						break;
				}
			}
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressDWA(info) {
			var inDataView = info.viewer;
			var inOffset = { value: info.offset.value };
			var outBuffer = new Uint8Array(info.width * info.lines * (info.channels * info.type * INT16_SIZE));
			var dwaHeader = {
				version: parseInt64(inDataView, inOffset),
				unknownUncompressedSize: parseInt64(inDataView, inOffset),
				unknownCompressedSize: parseInt64(inDataView, inOffset),
				acCompressedSize: parseInt64(inDataView, inOffset),
				dcCompressedSize: parseInt64(inDataView, inOffset),
				rleCompressedSize: parseInt64(inDataView, inOffset),
				rleUncompressedSize: parseInt64(inDataView, inOffset),
				rleRawSize: parseInt64(inDataView, inOffset),
				totalAcUncompressedCount: parseInt64(inDataView, inOffset),
				totalDcUncompressedCount: parseInt64(inDataView, inOffset),
				acCompression: parseInt64(inDataView, inOffset)
			};
			if (dwaHeader.version < 2) throw "EXRLoader.parse: " + EXRHeader.compression + " version " + dwaHeader.version + " is unsupported";
			var channelRules = new Array();
			var ruleSize = parseUint16(inDataView, inOffset) - INT16_SIZE;
			while (ruleSize > 0) {
				var name = parseNullTerminatedString(inDataView.buffer, inOffset);
				var value = parseUint8(inDataView, inOffset);
				var compression = value >> 2 & 3;
				var csc = (value >> 4) - 1;
				var index = new Int8Array([csc])[0];
				var type = parseUint8(inDataView, inOffset);
				channelRules.push({
					name,
					index,
					type,
					compression
				});
				ruleSize -= name.length + 3;
			}
			var channels = EXRHeader.channels;
			var channelData = new Array(info.channels);
			for (var i = 0; i < info.channels; ++i) {
				var cd = channelData[i] = {};
				var channel = channels[i];
				cd.name = channel.name;
				cd.compression = UNKNOWN;
				cd.decoded = false;
				cd.type = channel.pixelType;
				cd.pLinear = channel.pLinear;
				cd.width = info.width;
				cd.height = info.lines;
			}
			var cscSet = { idx: new Array(3) };
			for (var offset2 = 0; offset2 < info.channels; ++offset2) {
				var cd = channelData[offset2];
				for (var i = 0; i < channelRules.length; ++i) {
					var rule = channelRules[i];
					if (cd.name == rule.name) {
						cd.compression = rule.compression;
						if (rule.index >= 0) cscSet.idx[rule.index] = offset2;
						cd.offset = offset2;
					}
				}
			}
			if (dwaHeader.acCompressedSize > 0) switch (dwaHeader.acCompression) {
				case STATIC_HUFFMAN:
					var acBuffer = new Uint16Array(dwaHeader.totalAcUncompressedCount);
					hufUncompress(info.array, inDataView, inOffset, dwaHeader.acCompressedSize, acBuffer, dwaHeader.totalAcUncompressedCount);
					break;
				case DEFLATE:
					var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.totalAcUncompressedCount);
					var data = unzlibSync(compressed);
					var acBuffer = new Uint16Array(data.buffer);
					inOffset.value += dwaHeader.totalAcUncompressedCount;
					break;
			}
			if (dwaHeader.dcCompressedSize > 0) {
				var zlibInfo = {
					array: info.array,
					offset: inOffset,
					size: dwaHeader.dcCompressedSize
				};
				var dcBuffer = new Uint16Array(uncompressZIP(zlibInfo).buffer);
				inOffset.value += dwaHeader.dcCompressedSize;
			}
			if (dwaHeader.rleRawSize > 0) {
				var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.rleCompressedSize);
				var data = unzlibSync(compressed);
				var rleBuffer = decodeRunLength(data.buffer);
				inOffset.value += dwaHeader.rleCompressedSize;
			}
			var outBufferEnd = 0;
			var rowOffsets = new Array(channelData.length);
			for (var i = 0; i < rowOffsets.length; ++i) rowOffsets[i] = new Array();
			for (var y = 0; y < info.lines; ++y) for (var chan = 0; chan < channelData.length; ++chan) {
				rowOffsets[chan].push(outBufferEnd);
				outBufferEnd += channelData[chan].width * info.type * INT16_SIZE;
			}
			lossyDctDecode(cscSet, rowOffsets, channelData, acBuffer, dcBuffer, outBuffer);
			for (var i = 0; i < channelData.length; ++i) {
				var cd = channelData[i];
				if (cd.decoded) continue;
				switch (cd.compression) {
					case RLE:
						var row = 0;
						var rleOffset = 0;
						for (var y = 0; y < info.lines; ++y) {
							var rowOffsetBytes = rowOffsets[i][row];
							for (var x = 0; x < cd.width; ++x) {
								for (var byte = 0; byte < INT16_SIZE * cd.type; ++byte) outBuffer[rowOffsetBytes++] = rleBuffer[rleOffset + byte * cd.width * cd.height];
								rleOffset++;
							}
							row++;
						}
						break;
					case LOSSY_DCT:
					default: throw "EXRLoader.parse: unsupported channel compression";
				}
			}
			return new DataView(outBuffer.buffer);
		}
		function parseNullTerminatedString(buffer2, offset2) {
			var uintBuffer = new Uint8Array(buffer2);
			var endOffset = 0;
			while (uintBuffer[offset2.value + endOffset] != 0) endOffset += 1;
			var stringValue = new TextDecoder().decode(uintBuffer.slice(offset2.value, offset2.value + endOffset));
			offset2.value = offset2.value + endOffset + 1;
			return stringValue;
		}
		function parseFixedLengthString(buffer2, offset2, size) {
			var stringValue = new TextDecoder().decode(new Uint8Array(buffer2).slice(offset2.value, offset2.value + size));
			offset2.value = offset2.value + size;
			return stringValue;
		}
		function parseRational(dataView, offset2) {
			return [parseInt32(dataView, offset2), parseUint32(dataView, offset2)];
		}
		function parseTimecode(dataView, offset2) {
			return [parseUint32(dataView, offset2), parseUint32(dataView, offset2)];
		}
		function parseInt32(dataView, offset2) {
			var Int32 = dataView.getInt32(offset2.value, true);
			offset2.value = offset2.value + INT32_SIZE;
			return Int32;
		}
		function parseUint32(dataView, offset2) {
			var Uint32 = dataView.getUint32(offset2.value, true);
			offset2.value = offset2.value + INT32_SIZE;
			return Uint32;
		}
		function parseUint8Array(uInt8Array2, offset2) {
			var Uint8 = uInt8Array2[offset2.value];
			offset2.value = offset2.value + INT8_SIZE;
			return Uint8;
		}
		function parseUint8(dataView, offset2) {
			var Uint8 = dataView.getUint8(offset2.value);
			offset2.value = offset2.value + INT8_SIZE;
			return Uint8;
		}
		const parseInt64 = function(dataView, offset2) {
			let int;
			if ("getBigInt64" in DataView.prototype) int = Number(dataView.getBigInt64(offset2.value, true));
			else int = dataView.getUint32(offset2.value + 4, true) + Number(dataView.getUint32(offset2.value, true) << 32);
			offset2.value += ULONG_SIZE;
			return int;
		};
		function parseFloat32(dataView, offset2) {
			var float = dataView.getFloat32(offset2.value, true);
			offset2.value += FLOAT32_SIZE;
			return float;
		}
		function decodeFloat32(dataView, offset2) {
			return DataUtils.toHalfFloat(parseFloat32(dataView, offset2));
		}
		function decodeFloat16(binary) {
			var exponent = (binary & 31744) >> 10, fraction = binary & 1023;
			return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 31 ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 1024) : 6103515625e-14 * (fraction / 1024));
		}
		function parseUint16(dataView, offset2) {
			var Uint16 = dataView.getUint16(offset2.value, true);
			offset2.value += INT16_SIZE;
			return Uint16;
		}
		function parseFloat16(buffer2, offset2) {
			return decodeFloat16(parseUint16(buffer2, offset2));
		}
		function parseChlist(dataView, buffer2, offset2, size) {
			var startOffset = offset2.value;
			var channels = [];
			while (offset2.value < startOffset + size - 1) {
				var name = parseNullTerminatedString(buffer2, offset2);
				var pixelType = parseInt32(dataView, offset2);
				var pLinear = parseUint8(dataView, offset2);
				offset2.value += 3;
				var xSampling = parseInt32(dataView, offset2);
				var ySampling = parseInt32(dataView, offset2);
				channels.push({
					name,
					pixelType,
					pLinear,
					xSampling,
					ySampling
				});
			}
			offset2.value += 1;
			return channels;
		}
		function parseChromaticities(dataView, offset2) {
			return {
				redX: parseFloat32(dataView, offset2),
				redY: parseFloat32(dataView, offset2),
				greenX: parseFloat32(dataView, offset2),
				greenY: parseFloat32(dataView, offset2),
				blueX: parseFloat32(dataView, offset2),
				blueY: parseFloat32(dataView, offset2),
				whiteX: parseFloat32(dataView, offset2),
				whiteY: parseFloat32(dataView, offset2)
			};
		}
		function parseCompression(dataView, offset2) {
			return [
				"NO_COMPRESSION",
				"RLE_COMPRESSION",
				"ZIPS_COMPRESSION",
				"ZIP_COMPRESSION",
				"PIZ_COMPRESSION",
				"PXR24_COMPRESSION",
				"B44_COMPRESSION",
				"B44A_COMPRESSION",
				"DWAA_COMPRESSION",
				"DWAB_COMPRESSION"
			][parseUint8(dataView, offset2)];
		}
		function parseBox2i(dataView, offset2) {
			return {
				xMin: parseUint32(dataView, offset2),
				yMin: parseUint32(dataView, offset2),
				xMax: parseUint32(dataView, offset2),
				yMax: parseUint32(dataView, offset2)
			};
		}
		function parseLineOrder(dataView, offset2) {
			return ["INCREASING_Y"][parseUint8(dataView, offset2)];
		}
		function parseV2f(dataView, offset2) {
			return [parseFloat32(dataView, offset2), parseFloat32(dataView, offset2)];
		}
		function parseV3f(dataView, offset2) {
			return [
				parseFloat32(dataView, offset2),
				parseFloat32(dataView, offset2),
				parseFloat32(dataView, offset2)
			];
		}
		function parseValue(dataView, buffer2, offset2, type, size) {
			if (type === "string" || type === "stringvector" || type === "iccProfile") return parseFixedLengthString(buffer2, offset2, size);
			else if (type === "chlist") return parseChlist(dataView, buffer2, offset2, size);
			else if (type === "chromaticities") return parseChromaticities(dataView, offset2);
			else if (type === "compression") return parseCompression(dataView, offset2);
			else if (type === "box2i") return parseBox2i(dataView, offset2);
			else if (type === "lineOrder") return parseLineOrder(dataView, offset2);
			else if (type === "float") return parseFloat32(dataView, offset2);
			else if (type === "v2f") return parseV2f(dataView, offset2);
			else if (type === "v3f") return parseV3f(dataView, offset2);
			else if (type === "int") return parseInt32(dataView, offset2);
			else if (type === "rational") return parseRational(dataView, offset2);
			else if (type === "timecode") return parseTimecode(dataView, offset2);
			else if (type === "preview") {
				offset2.value += size;
				return "skipped";
			} else {
				offset2.value += size;
				return;
			}
		}
		function parseHeader(dataView, buffer2, offset2) {
			const EXRHeader2 = {};
			if (dataView.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
			EXRHeader2.version = dataView.getUint8(4);
			const spec = dataView.getUint8(5);
			EXRHeader2.spec = {
				singleTile: !!(spec & 2),
				longName: !!(spec & 4),
				deepFormat: !!(spec & 8),
				multiPart: !!(spec & 16)
			};
			offset2.value = 8;
			var keepReading = true;
			while (keepReading) {
				var attributeName = parseNullTerminatedString(buffer2, offset2);
				if (attributeName == 0) keepReading = false;
				else {
					var attributeType = parseNullTerminatedString(buffer2, offset2);
					var attributeValue = parseValue(dataView, buffer2, offset2, attributeType, parseUint32(dataView, offset2));
					if (attributeValue === void 0) console.warn(`EXRLoader.parse: skipped unknown header attribute type '${attributeType}'.`);
					else EXRHeader2[attributeName] = attributeValue;
				}
			}
			if ((spec & -5) != 0) {
				console.error("EXRHeader:", EXRHeader2);
				throw "THREE.EXRLoader: provided file is currently unsupported.";
			}
			return EXRHeader2;
		}
		function setupDecoder(EXRHeader2, dataView, uInt8Array2, offset2, outputType) {
			const EXRDecoder2 = {
				size: 0,
				viewer: dataView,
				array: uInt8Array2,
				offset: offset2,
				width: EXRHeader2.dataWindow.xMax - EXRHeader2.dataWindow.xMin + 1,
				height: EXRHeader2.dataWindow.yMax - EXRHeader2.dataWindow.yMin + 1,
				channels: EXRHeader2.channels.length,
				bytesPerLine: null,
				lines: null,
				inputSize: null,
				type: EXRHeader2.channels[0].pixelType,
				uncompress: null,
				getter: null,
				format: null,
				[hasColorSpace ? "colorSpace" : "encoding"]: null
			};
			switch (EXRHeader2.compression) {
				case "NO_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressRAW;
					break;
				case "RLE_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressRLE;
					break;
				case "ZIPS_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressZIP;
					break;
				case "ZIP_COMPRESSION":
					EXRDecoder2.lines = 16;
					EXRDecoder2.uncompress = uncompressZIP;
					break;
				case "PIZ_COMPRESSION":
					EXRDecoder2.lines = 32;
					EXRDecoder2.uncompress = uncompressPIZ;
					break;
				case "PXR24_COMPRESSION":
					EXRDecoder2.lines = 16;
					EXRDecoder2.uncompress = uncompressPXR;
					break;
				case "DWAA_COMPRESSION":
					EXRDecoder2.lines = 32;
					EXRDecoder2.uncompress = uncompressDWA;
					break;
				case "DWAB_COMPRESSION":
					EXRDecoder2.lines = 256;
					EXRDecoder2.uncompress = uncompressDWA;
					break;
				default: throw "EXRLoader.parse: " + EXRHeader2.compression + " is unsupported";
			}
			EXRDecoder2.scanlineBlockSize = EXRDecoder2.lines;
			if (EXRDecoder2.type == 1) switch (outputType) {
				case FloatType:
					EXRDecoder2.getter = parseFloat16;
					EXRDecoder2.inputSize = INT16_SIZE;
					break;
				case HalfFloatType:
					EXRDecoder2.getter = parseUint16;
					EXRDecoder2.inputSize = INT16_SIZE;
					break;
			}
			else if (EXRDecoder2.type == 2) switch (outputType) {
				case FloatType:
					EXRDecoder2.getter = parseFloat32;
					EXRDecoder2.inputSize = FLOAT32_SIZE;
					break;
				case HalfFloatType:
					EXRDecoder2.getter = decodeFloat32;
					EXRDecoder2.inputSize = FLOAT32_SIZE;
			}
			else throw "EXRLoader.parse: unsupported pixelType " + EXRDecoder2.type + " for " + EXRHeader2.compression + ".";
			EXRDecoder2.blockCount = (EXRHeader2.dataWindow.yMax + 1) / EXRDecoder2.scanlineBlockSize;
			for (var i = 0; i < EXRDecoder2.blockCount; i++) parseInt64(dataView, offset2);
			EXRDecoder2.outputChannels = EXRDecoder2.channels == 3 ? 4 : EXRDecoder2.channels;
			const size = EXRDecoder2.width * EXRDecoder2.height * EXRDecoder2.outputChannels;
			switch (outputType) {
				case FloatType:
					EXRDecoder2.byteArray = new Float32Array(size);
					if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(1, 0, size);
					break;
				case HalfFloatType:
					EXRDecoder2.byteArray = new Uint16Array(size);
					if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(15360, 0, size);
					break;
				default:
					console.error("THREE.EXRLoader: unsupported type: ", outputType);
					break;
			}
			EXRDecoder2.bytesPerLine = EXRDecoder2.width * EXRDecoder2.inputSize * EXRDecoder2.channels;
			if (EXRDecoder2.outputChannels == 4) EXRDecoder2.format = RGBAFormat;
			else EXRDecoder2.format = RedFormat;
			if (hasColorSpace) EXRDecoder2.colorSpace = "srgb-linear";
			else EXRDecoder2.encoding = 3e3;
			return EXRDecoder2;
		}
		const bufferDataView = new DataView(buffer);
		const uInt8Array = new Uint8Array(buffer);
		const offset = { value: 0 };
		const EXRHeader = parseHeader(bufferDataView, buffer, offset);
		const EXRDecoder = setupDecoder(EXRHeader, bufferDataView, uInt8Array, offset, this.type);
		const tmpOffset = { value: 0 };
		const channelOffsets = {
			R: 0,
			G: 1,
			B: 2,
			A: 3,
			Y: 0
		};
		for (let scanlineBlockIdx = 0; scanlineBlockIdx < EXRDecoder.height / EXRDecoder.scanlineBlockSize; scanlineBlockIdx++) {
			const line = parseUint32(bufferDataView, offset);
			EXRDecoder.size = parseUint32(bufferDataView, offset);
			EXRDecoder.lines = line + EXRDecoder.scanlineBlockSize > EXRDecoder.height ? EXRDecoder.height - line : EXRDecoder.scanlineBlockSize;
			const viewer = EXRDecoder.size < EXRDecoder.lines * EXRDecoder.bytesPerLine ? EXRDecoder.uncompress(EXRDecoder) : uncompressRAW(EXRDecoder);
			offset.value += EXRDecoder.size;
			for (let line_y = 0; line_y < EXRDecoder.scanlineBlockSize; line_y++) {
				const true_y = line_y + scanlineBlockIdx * EXRDecoder.scanlineBlockSize;
				if (true_y >= EXRDecoder.height) break;
				for (let channelID = 0; channelID < EXRDecoder.channels; channelID++) {
					const cOff = channelOffsets[EXRHeader.channels[channelID].name];
					for (let x = 0; x < EXRDecoder.width; x++) {
						tmpOffset.value = (line_y * (EXRDecoder.channels * EXRDecoder.width) + channelID * EXRDecoder.width + x) * EXRDecoder.inputSize;
						const outIndex = (EXRDecoder.height - 1 - true_y) * (EXRDecoder.width * EXRDecoder.outputChannels) + x * EXRDecoder.outputChannels + cOff;
						EXRDecoder.byteArray[outIndex] = EXRDecoder.getter(viewer, tmpOffset);
					}
				}
			}
		}
		return {
			header: EXRHeader,
			width: EXRDecoder.width,
			height: EXRDecoder.height,
			data: EXRDecoder.byteArray,
			format: EXRDecoder.format,
			[hasColorSpace ? "colorSpace" : "encoding"]: EXRDecoder[hasColorSpace ? "colorSpace" : "encoding"],
			type: this.type
		};
	}
	setDataType(value) {
		this.type = value;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		function onLoadCallback(texture, texData) {
			if (hasColorSpace) texture.colorSpace = texData.colorSpace;
			else texture.encoding = texData.encoding;
			texture.minFilter = LinearFilter;
			texture.magFilter = LinearFilter;
			texture.generateMipmaps = false;
			texture.flipY = false;
			if (onLoad) onLoad(texture, texData);
		}
		return super.load(url, onLoadCallback, onProgress, onError);
	}
};
//#endregion
//#region node_modules/@react-three/drei/core/Float.js
var Float = /* @__PURE__ */ import_react.forwardRef(({ children, enabled = true, speed = 1, rotationIntensity = 1, floatIntensity = 1, floatingRange = [-.1, .1], autoInvalidate = false, ...props }, forwardRef) => {
	const ref = import_react.useRef(null);
	import_react.useImperativeHandle(forwardRef, () => ref.current, []);
	const offset = import_react.useRef(Math.random() * 1e4);
	useFrame((state) => {
		var _floatingRange$, _floatingRange$2;
		if (!enabled || speed === 0) return;
		if (autoInvalidate) state.invalidate();
		const t = offset.current + state.clock.elapsedTime;
		ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
		ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
		ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
		let yPosition = Math.sin(t / 4 * speed) / 10;
		yPosition = MathUtils.mapLinear(yPosition, -.1, .1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : .1);
		ref.current.position.y = yPosition * floatIntensity;
		ref.current.updateMatrix();
	});
	return /*#__PURE__*/ import_react.createElement("group", props, /*#__PURE__*/ import_react.createElement("group", {
		ref,
		matrixAutoUpdate: false
	}, children));
});
//#endregion
//#region node_modules/@react-three/drei/helpers/environment-assets.js
var presetsObj = {
	apartment: "lebombo_1k.hdr",
	city: "potsdamer_platz_1k.hdr",
	dawn: "kiara_1_dawn_1k.hdr",
	forest: "forest_slope_1k.hdr",
	lobby: "st_fagans_interior_1k.hdr",
	night: "dikhololo_night_1k.hdr",
	park: "rooitou_park_1k.hdr",
	studio: "studio_small_03_1k.hdr",
	sunset: "venice_sunset_1k.hdr",
	warehouse: "empty_warehouse_01_1k.hdr"
};
//#endregion
//#region node_modules/@react-three/drei/core/useEnvironment.js
var CUBEMAP_ROOT = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/";
var isArray = (arr) => Array.isArray(arr);
var defaultFiles = [
	"/px.png",
	"/nx.png",
	"/py.png",
	"/ny.png",
	"/pz.png",
	"/nz.png"
];
function useEnvironment({ files = defaultFiles, path = "", preset = void 0, colorSpace = void 0, extensions } = {}) {
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
		path = CUBEMAP_ROOT;
	}
	const multiFile = isArray(files);
	const { extension, isCubemap } = getExtension(files);
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	const gl = useThree((state) => state.gl);
	(0, import_react.useLayoutEffect)(() => {
		if (extension !== "webp" && extension !== "jpg" && extension !== "jpeg") return;
		function clearGainmapTexture() {
			useLoader.clear(loader, multiFile ? [files] : files);
		}
		gl.domElement.addEventListener("webglcontextlost", clearGainmapTexture, { once: true });
	}, [files, gl.domElement]);
	const loaderResult = useLoader(loader, multiFile ? [files] : files, (loader) => {
		if (extension === "webp" || extension === "jpg" || extension === "jpeg") loader.setRenderer(gl);
		loader.setPath == null || loader.setPath(path);
		if (extensions) extensions(loader);
	});
	let texture = multiFile ? loaderResult[0] : loaderResult;
	if (extension === "jpg" || extension === "jpeg" || extension === "webp") {
		var _renderTarget;
		texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
	}
	texture.mapping = isCubemap ? 301 : 303;
	texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? "srgb" : "srgb-linear";
	return texture;
}
var preloadDefaultOptions = {
	files: defaultFiles,
	path: "",
	preset: void 0,
	extensions: void 0
};
useEnvironment.preload = (preloadOptions) => {
	const options = {
		...preloadDefaultOptions,
		...preloadOptions
	};
	let { files, path = "" } = options;
	const { preset, extensions } = options;
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
		path = CUBEMAP_ROOT;
	}
	const { extension } = getExtension(files);
	if (extension === "webp" || extension === "jpg" || extension === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	useLoader.preload(loader, isArray(files) ? [files] : files, (loader) => {
		loader.setPath == null || loader.setPath(path);
		if (extensions) extensions(loader);
	});
};
var clearDefaultOptins = {
	files: defaultFiles,
	preset: void 0
};
useEnvironment.clear = (clearOptions) => {
	const options = {
		...clearDefaultOptins,
		...clearOptions
	};
	let { files } = options;
	const { preset } = options;
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
	}
	const { extension } = getExtension(files);
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	useLoader.clear(loader, isArray(files) ? [files] : files);
};
function validatePreset(preset) {
	if (!(preset in presetsObj)) throw new Error("Preset must be one of: " + Object.keys(presetsObj).join(", "));
}
function getExtension(files) {
	var _firstEntry$split$pop;
	const isCubemap = isArray(files) && files.length === 6;
	const isGainmap = isArray(files) && files.length === 3 && files.some((file) => file.endsWith("json"));
	const firstEntry = isArray(files) ? files[0] : files;
	return {
		extension: isCubemap ? "cube" : isGainmap ? "webp" : firstEntry.startsWith("data:application/exr") ? "exr" : firstEntry.startsWith("data:application/hdr") ? "hdr" : firstEntry.startsWith("data:image/jpeg") ? "jpg" : (_firstEntry$split$pop = firstEntry.split(".").pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split("?")) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase(),
		isCubemap,
		isGainmap
	};
}
function getLoader(extension) {
	return extension === "cube" ? CubeTextureLoader : extension === "hdr" ? RGBELoader : extension === "exr" ? EXRLoader : extension === "jpg" || extension === "jpeg" ? HDRJPGLoader : extension === "webp" ? GainMapLoader : null;
}
//#endregion
//#region node_modules/@react-three/drei/core/Environment.js
var isRef = (obj) => obj.current && obj.current.isScene;
var resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
	var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
	sceneProps = {
		backgroundBlurriness: 0,
		backgroundIntensity: 1,
		backgroundRotation: [
			0,
			0,
			0
		],
		environmentIntensity: 1,
		environmentRotation: [
			0,
			0,
			0
		],
		...sceneProps
	};
	const target = resolveScene(scene || defaultScene);
	const oldbg = target.background;
	const oldenv = target.environment;
	const oldSceneProps = {
		backgroundBlurriness: target.backgroundBlurriness,
		backgroundIntensity: target.backgroundIntensity,
		backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [
			0,
			0,
			0
		],
		environmentIntensity: target.environmentIntensity,
		environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [
			0,
			0,
			0
		]
	};
	if (background !== "only") target.environment = texture;
	if (background) target.background = texture;
	applyProps(target, sceneProps);
	return () => {
		if (background !== "only") target.environment = oldenv;
		if (background) target.background = oldbg;
		applyProps(target, oldSceneProps);
	};
}
function EnvironmentMap({ scene, background = false, map, ...config }) {
	const defaultScene = useThree((state) => state.scene);
	import_react.useLayoutEffect(() => {
		if (map) return setEnvProps(background, scene, defaultScene, map, config);
	});
	return null;
}
function EnvironmentCube({ background = false, scene, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, ...rest }) {
	const texture = useEnvironment(rest);
	const defaultScene = useThree((state) => state.scene);
	import_react.useLayoutEffect(() => {
		return setEnvProps(background, scene, defaultScene, texture, {
			backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
			backgroundIntensity,
			backgroundRotation,
			environmentIntensity,
			environmentRotation
		});
	});
	import_react.useEffect(() => {
		return () => {
			texture.dispose();
		};
	}, [texture]);
	return null;
}
function EnvironmentPortal({ children, near = .1, far = 1e3, resolution = 256, frames = 1, map, background = false, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, scene, files, path, preset = void 0, extensions }) {
	const gl = useThree((state) => state.gl);
	const defaultScene = useThree((state) => state.scene);
	const camera = import_react.useRef(null);
	const [virtualScene] = import_react.useState(() => new Scene());
	const fbo = import_react.useMemo(() => {
		const fbo = new WebGLCubeRenderTarget(resolution);
		fbo.texture.type = HalfFloatType;
		return fbo;
	}, [resolution]);
	import_react.useEffect(() => {
		return () => {
			fbo.dispose();
		};
	}, [fbo]);
	import_react.useLayoutEffect(() => {
		if (frames === 1) {
			const autoClear = gl.autoClear;
			gl.autoClear = true;
			camera.current.update(gl, virtualScene);
			gl.autoClear = autoClear;
		}
		return setEnvProps(background, scene, defaultScene, fbo.texture, {
			backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
			backgroundIntensity,
			backgroundRotation,
			environmentIntensity,
			environmentRotation
		});
	}, [
		children,
		virtualScene,
		fbo.texture,
		scene,
		defaultScene,
		background,
		frames,
		gl
	]);
	let count = 1;
	useFrame(() => {
		if (frames === Infinity || count < frames) {
			const autoClear = gl.autoClear;
			gl.autoClear = true;
			camera.current.update(gl, virtualScene);
			gl.autoClear = autoClear;
			count++;
		}
	});
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, createPortal(/*#__PURE__*/ import_react.createElement(import_react.Fragment, null, children, /*#__PURE__*/ import_react.createElement("cubeCamera", {
		ref: camera,
		args: [
			near,
			far,
			fbo
		]
	}), files || preset ? /*#__PURE__*/ import_react.createElement(EnvironmentCube, {
		background: true,
		files,
		preset,
		path,
		extensions
	}) : map ? /*#__PURE__*/ import_react.createElement(EnvironmentMap, {
		background: true,
		map,
		extensions
	}) : null), virtualScene));
}
function EnvironmentGround(props) {
	var _props$ground, _props$ground2, _scale, _props$ground3;
	const textureDefault = useEnvironment(props);
	const texture = props.map || textureDefault;
	import_react.useMemo(() => extend({ GroundProjectedEnvImpl: GroundProjectedEnv }), []);
	import_react.useEffect(() => {
		return () => {
			textureDefault.dispose();
		};
	}, [textureDefault]);
	const args = import_react.useMemo(() => [texture], [texture]);
	const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
	const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
	const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1e3;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(EnvironmentMap, _extends({}, props, { map: texture })), /*#__PURE__*/ import_react.createElement("groundProjectedEnvImpl", {
		args,
		scale,
		height,
		radius
	}));
}
function Environment(props) {
	return props.ground ? /*#__PURE__*/ import_react.createElement(EnvironmentGround, props) : props.map ? /*#__PURE__*/ import_react.createElement(EnvironmentMap, props) : props.children ? /*#__PURE__*/ import_react.createElement(EnvironmentPortal, props) : /*#__PURE__*/ import_react.createElement(EnvironmentCube, props);
}
//#endregion
//#region node_modules/@react-three/drei/core/ContactShadows.js
var ContactShadows = /* @__PURE__ */ import_react.forwardRef(({ scale = 10, frames = Infinity, opacity = 1, width = 1, height = 1, blur = 1, near = 0, far = 10, resolution = 512, smooth = true, color = "#000000", depthWrite = false, renderOrder, ...props }, fref) => {
	const ref = import_react.useRef(null);
	const scene = useThree((state) => state.scene);
	const gl = useThree((state) => state.gl);
	const shadowCamera = import_react.useRef(null);
	width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
	height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
	const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = import_react.useMemo(() => {
		const renderTarget = new WebGLRenderTarget(resolution, resolution);
		const renderTargetBlur = new WebGLRenderTarget(resolution, resolution);
		renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
		const planeGeometry = new PlaneGeometry(width, height).rotateX(Math.PI / 2);
		const blurPlane = new Mesh(planeGeometry);
		const depthMaterial = new MeshDepthMaterial();
		depthMaterial.depthTest = depthMaterial.depthWrite = false;
		depthMaterial.onBeforeCompile = (shader) => {
			shader.uniforms = {
				...shader.uniforms,
				ucolor: { value: new Color(color) }
			};
			shader.fragmentShader = shader.fragmentShader.replace(`void main() {`, `uniform vec3 ucolor;
           void main() {
          `);
			shader.fragmentShader = shader.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );", "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );");
		};
		const horizontalBlurMaterial = new ShaderMaterial(HorizontalBlurShader);
		const verticalBlurMaterial = new ShaderMaterial(VerticalBlurShader);
		verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
		return [
			renderTarget,
			planeGeometry,
			depthMaterial,
			blurPlane,
			horizontalBlurMaterial,
			verticalBlurMaterial,
			renderTargetBlur
		];
	}, [
		resolution,
		width,
		height,
		scale,
		color
	]);
	const blurShadows = (blur) => {
		blurPlane.visible = true;
		blurPlane.material = horizontalBlurMaterial;
		horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
		horizontalBlurMaterial.uniforms.h.value = blur * 1 / 256;
		gl.setRenderTarget(renderTargetBlur);
		gl.render(blurPlane, shadowCamera.current);
		blurPlane.material = verticalBlurMaterial;
		verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
		verticalBlurMaterial.uniforms.v.value = blur * 1 / 256;
		gl.setRenderTarget(renderTarget);
		gl.render(blurPlane, shadowCamera.current);
		blurPlane.visible = false;
	};
	let count = 0;
	let initialBackground;
	let initialOverrideMaterial;
	useFrame(() => {
		if (shadowCamera.current && (frames === Infinity || count < frames)) {
			count++;
			initialBackground = scene.background;
			initialOverrideMaterial = scene.overrideMaterial;
			ref.current.visible = false;
			scene.background = null;
			scene.overrideMaterial = depthMaterial;
			gl.setRenderTarget(renderTarget);
			gl.render(scene, shadowCamera.current);
			blurShadows(blur);
			if (smooth) blurShadows(blur * .4);
			gl.setRenderTarget(null);
			ref.current.visible = true;
			scene.overrideMaterial = initialOverrideMaterial;
			scene.background = initialBackground;
		}
	});
	import_react.useImperativeHandle(fref, () => ref.current, []);
	return /*#__PURE__*/ import_react.createElement("group", _extends({ "rotation-x": Math.PI / 2 }, props, { ref }), /*#__PURE__*/ import_react.createElement("mesh", {
		renderOrder,
		geometry: planeGeometry,
		scale: [
			1,
			-1,
			1
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		]
	}, /*#__PURE__*/ import_react.createElement("meshBasicMaterial", {
		transparent: true,
		map: renderTarget.texture,
		opacity,
		depthWrite
	})), /*#__PURE__*/ import_react.createElement("orthographicCamera", {
		ref: shadowCamera,
		args: [
			-width / 2,
			width / 2,
			height / 2,
			-height / 2,
			near,
			far
		]
	}));
});
//#endregion
export { Canvas as a, useThree as c, require_with_selector as d, require_jsx_runtime as f, Html as i, createStore$1 as l, Environment as n, useFrame as o, require_react as p, Float as r, useLoader as s, ContactShadows as t, require_react_dom as u };
