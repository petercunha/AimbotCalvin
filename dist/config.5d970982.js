// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"config.js":[function(require,module,exports) {
/******************************************************************
	
	
	@ Item          Gravity // Coming Soon - Under Construction
	@ Version       3.4.4
	@ Author		Avanzare
	@ Website		http://themeforest.net/user/avanzare 
	

 ******************************************************************/

/******************************************************************


------------------------
-- TABLE OF CONTENTS --
------------------------

--  1. ReadMe
--  2. Overlay Config
--  3. Hero Config

	--  3.1 Hero Config [ Image Background ]
	--  3.2 Hero Config [ Slider Background ]
	--  3.3 Hero Config [ Kenburns Background ]
	--  3.4 Hero Config [ Youtube Background ]
	--  3.5 Hero Config [ Color Background ]
	--  3.6 Hero Config [ Gradient Background ]
	--  3.7 Hero Config [ Sphere Background ]
	--  3.8 Hero Config [ Waves Background ]
	--  3.9 Hero Config [ Mesh Background ]
	--  3.10 Hero Config [ Space Background ]
	--  3.11 Hero Config [ Abstract Background ]
       --  3.12 Hero Config [ Glitch Background ]
	--  3.13 Hero Config [ Custom Background ]
	
--  4. Google Analytics


******************************************************************/

/** 1. README
*******************************************************************/

// !!! 1. DO NOT REMOVE QUOTATION MARKS WHEN GIVEN !!!
// !!! 2. SAVE THE FILE AND REFRESH YOUR BROWSER TO SEE CHANGES !!!


/**	2. OVERLAY CONFIG
*******************************************************************/

// OVERLAY SKIN OPTION  [ "black" : "white" ]

// "black" = BLACK COLOR SCHEME
// "white" = WHITE COLOR SCHEME

var option_overlay_skin = "black";

// OVERLAY ANIMATION  [ "fade" : "slide" ]

// "fade" = FADE ANIMATION
// "slide" = SLIDE FROM BOTTOM ANIMATION

var option_overlay_animation = "fade";

// OVERLAY CONTENT ANIMATION  [ "fade" : "slide" ]

// "fade" = FADE ANIMATION
// "slide" = SLIDE FROM BOTTOM ANIMATION

var option_overlay_content_animation = "slide";

// OVERLAY BULLET NAVIGATION [ "on" : "off" ]

// "on" = ENABLE BULLET NAVIGATION
// "off" = DISABLE BULLET NAVIGATION

var option_overlay_bullet_navigation = "on";

/** 3. HERO CONFIG
*******************************************************************/

// HERO PARALLAX HOVER EFFECT - [ "on" : "off" ]

// "on" = OPTION ACTIVATED
// "off" = OPTION DEACTIVATED

var option_hero_parallax_hover_effect = "on";

// GRAVITY PARTICLE BACKGROUND EFFECT - [ "on" : "off" ]

// "on" = OPTION ACTIVATED
// "off" = OPTION DEACTIVATED

var option_hero_gravity_effect = "on";

// BACKGROUND MODE [ SEE OPTIONS BELOW ]

// "image" = IMAGE BACKGROUND
// "slider" = SLIDER BACKGROUND
// "kenburns" = KEN BURNS SLIDER BACKGROUND
// "youtube" = YOUTUBE VIDEO BACKGORUND - IMAGE BACKGROUND FALLBACK FOR MOBILE
// "color" = SOLID COLOR BACKGROUND
// "gradient" = ANIMATED GRADIENT BACKGROUND
// "waves" = SPHERE BACKGROUND
// "sphere" = WAVES BACKGROUND
// "mesh" = MESH BACKGROUND
// "space" = SPACE BACKGROUND
// "abstract" = ABSTRACT BACKGROUND
// "glitch" = GLITCH BACKGROUND
// "custom" = CUSTOM BACKGROUND

var option_hero_background_mode = "image";

/** 3.1 HERO CONFIG [ IMAGE BACKGROUND ]
*******************************************************************/

// IMAGE PATH / URL
var option_hero_background_image_path = [{ src: 'assets/images/5.jpg' }];

/** 3.2 HERO CONFIG [ SLIDER BACKGROUND ]
*******************************************************************/

// IMAGES PATH / URL
var option_hero_background_slider_path = [{ src: "assets/images/1.jpg" }, { src: "assets/images/2.jpg" }, { src: "assets/images/3.jpg" }];

// SLIDE DELAY / TIMEOUT IN MS
var option_hero_background_slider_delay = 6000;

//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]

// fade = FADE TRANSITION
// fade2 = FADE 2 TRANSITION

// slideLeft = SLIDE LEFT TRANSITION
// slideLeft2 = SLIDE LEFT 2 TRANSITION
// slideRight = SLIDE RIGHT TRANSITION
// slideRight2 = SLIDE RIGHT 2 TRANSITION
// slideUp = SLIDE UP TRANSITION
// slideUp2 = SLIDE UP 2 TRANSITION
// slideDown = SLIDE DOWN TRANSITION
// slideDown2 = SLIDE DOWN 2 TRANSITION

// zoomIn = ZOOM IN TRANSITION
// zoomIn2 = ZOOM IN 2 TRANSITION
// zoomOut = ZOOM OUT TRANSITION
// zoomOut2 = ZOOM OUT 2 TRANSITION

// swirlLeft = SWIRL LEFT TRANSITION
// swirlLeft2 = SWIRL LEFT 2 TRANSITION
// swirlRight = SWIRL RIGHT TRANSITION
// swirlRight2 = SWIRL RIGHT 2 TRANSITION

// burn = BURN TRANSITION
// burn2 = BURN 2 TRANSITION

// blur = BLUR TRANSITION
// blur2 = BLUR 2 TRANSITION

// flash = FLASH TRANSITION
// flash2 = FLASH 2 TRANSITION

var option_hero_background_slider_transition = "slideDown";

// TRANSITION DURATION IN MS
var option_hero_background_slider_transitionDuration = 800;

/** 3.3 HERO CONFIG [ KENBURNS BACKGROUND ]
*******************************************************************/

// IMAGES PATH / URL
var option_hero_background_kenburns_path = [{ src: "assets/images/1.jpg" }, { src: "assets/images/2.jpg" }, { src: "assets/images/3.jpg" }];

// SLIDE DELAY / TIMEOUT IN MS
var option_hero_background_kenburns_delay = 6000;

//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]

// fade = FADE TRANSITION
// fade2 = FADE 2 TRANSITION

// slideLeft = SLIDE LEFT TRANSITION
// slideLeft2 = SLIDE LEFT 2 TRANSITION
// slideRight = SLIDE RIGHT TRANSITION
// slideRight2 = SLIDE RIGHT 2 TRANSITION
// slideUp = SLIDE UP TRANSITION
// slideUp2 = SLIDE UP 2 TRANSITION
// slideDown = SLIDE DOWN TRANSITION
// slideDown2 = SLIDE DOWN 2 TRANSITION

// zoomIn = ZOOM IN TRANSITION
// zoomIn2 = ZOOM IN 2 TRANSITION
// zoomOut = ZOOM OUT TRANSITION
// zoomOut2 = ZOOM OUT 2 TRANSITION

// swirlLeft = SWIRL LEFT TRANSITION
// swirlLeft2 = SWIRL LEFT 2 TRANSITION
// swirlRight = SWIRL RIGHT TRANSITION
// swirlRight2 = SWIRL RIGHT 2 TRANSITION

// burn = BURN TRANSITION
// burn2 = BURN 2 TRANSITION

// blur = BLUR TRANSITION
// blur2 = BLUR 2 TRANSITION

// flash = FLASH TRANSITION
// flash2 = FLASH 2 TRANSITION

var option_hero_background_kenburns_transition = "slideDown";

// TRANSITION DURATION IN MS
var option_hero_background_kenburns_transitionDuration = 800;

/** 3.4 HERO CONFIG [ YOUTUBE BACKGROUND ]
*******************************************************************/

// YOUTUBE URL
var option_hero_background_youtube_url = "https://www.youtube.com/watch?v=kB5xkGZmf_Q";

// START POINT IN SECONDS
var option_hero_background_youtube_startPoint = 0;

// END POINT IN SECONDS
var option_hero_background_youtube_endPoint = 90;

// MUTE VIDEO - [ "on" : "off" ]

// "on" = VIDEO IS MUTED
// "off" = VIDEO IS NOT MUTED

var option_hero_background_youtube_mute = "off";

// ENDLESS REPLAY LOOP - [ "on" : "off" ]

// "on" = ENDLESS REPLAY LOOP
// "off" = NO ENDLESS REPLAY LOOP

var option_hero_background_youtube_loop = "on";

// SHOW CONTROLS - [ "on" : "off" ]

// "on" = SHOW VIDEO CONTROLS
// "off" = HIDE VIDEO CONTROLS

var option_hero_background_youtube_controls = "on";

// !!! NOTICE IMAGE BACKGROUND WILL BE YOUR FALLBACK FOR MOBILE  !!!


/** 3.5 HERO CONFIG [ COLOR BACKGROUND ]
*******************************************************************/

// CUSTOM COLOR ( FORMAT: ALL CSS FORMATS FOR COLORS )
var option_hero_background_color_custom_color = "#6e00ff";

/** 3.6 HERO CONFIG [ GRADIENT BACKGROUND ]
*******************************************************************/

// COLOR ARRAY ( FORMAT: RGB )
var option_hero_background_gradient_colorArray = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

// TRANSITION SPEED
var option_hero_background_gradient_stransitionSpeed = 8;

/** 3.7 HERO CONFIG [ SPHERE BACKGROUND ]
*******************************************************************/

// OBJECT DISTANCE
var option_hero_background_sphere_distance = 300;

// OBJECT ROTATION SPEED
var option_hero_background_sphere_rotation_speed = 0.2;

// SPHERE LINE COLOR
var option_hero_background_sphere_line_color = "#ffffff";

// SPHERE DOT COLOR
var option_hero_background_sphere_dot_color = "#ffffff";

// BACKGROUND COLOR
var option_hero_background_sphere_background_color = "#000000";

/** 3.8 HERO CONFIG [ WAVES BACKGROUND ]
*******************************************************************/

// OBJECT DISTANCE
var option_hero_background_waves_distance = 1500;

// DOT SPACING
var option_hero_background_waves_dotSpacing = 120;

// DOT AMOUNT ON X AXIS
var option_hero_background_waves_dotAmountX = 20;

// DOT AMOUNT ON Y AXIS
var option_hero_background_waves_dotAmountY = 60;

// DOT COLOR
var option_hero_background_waves_dot_color = "#ffffff";

// BACKGROUND COLOR
var option_hero_background_waves_background_color = "#000000";

/** 3.9 HERO CONFIG [ MESH BACKGROUND ]
*******************************************************************/

// MESH COLOR
var option_hero_background_mesh_color = "#ffffff";

// BACKGROUND COLOR
var option_hero_background_mesh_background_color = "#111111";

// MESH SPOTLIGHT SIZE
var option_hero_background_mesh_spotlight_size = 600;

/** 3.10 HERO CONFIG [ SPACE BACKGROUND ]
*******************************************************************/

// STAR AMOUNT
var option_hero_background_space_star_amount = 512;

// STAR MINIMUM SPEED
var option_hero_background_space_star_speed = 2.5;

// STAR COLOR
var option_hero_background_star_star_color = "#ffffff";

// BACKGROUND COLOR
var option_hero_background_star_background_color = "#000000";

/** 3.11 HERO CONFIG [ ABSTRACT BACKGROUND ]
*******************************************************************/

// BACKGROUND COLOR
var option_hero_background_abstract_bg_color = "#d1c395";

// MOVEMENT SPEED
var option_hero_background_move_speed = 10;

// BLACK MASS CORE WIDTH IN % (  MAX: 100 )
var option_hero_background_width = 75;

// BLACK MASS EXPANSION
var option_hero_background_width_expansion = 0.8;

/** 3.12 HERO CONFIG [ GLITCH BACKGROUND ]
*******************************************************************/

// GLITCH IMAGE
var option_hero_background_glitch_image = "assets/images/4.jpg";

/** 3.13 HERO CONFIG [ CUSTOM BACKGROUND ]
*******************************************************************/

// CUSTOM BACKGROUND FUNCTION
function customBackground() {

		// EXAMPLE CODE
		$("#canvas").css("background", "#00AB39");
}

/**	4. GOOGLE ANALYTICS
*******************************************************************/

// GOOGLE ANALYTICS - [ "on" : "off" ]

// "on" = GOOGLE ANALYTICS ON
// "off" = GOOGLE ANALYTICS OFF

var option_analytics_tracking = "off";

// TRACKING ID
var option_analytics_tracking_id = "UA-XXXXXXXX-X";
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '57265' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","config.js"], null)
//# sourceMappingURL=/config.5d970982.map