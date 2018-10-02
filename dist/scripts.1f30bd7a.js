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
})({"assets/js/scripts.js":[function(require,module,exports) {
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
	
   --  1. Loading
   --  2. Overlay
   --  3. Ajax - Subscribe
   --  4. Ajax - Contact
   --  5. Google Analytics
 
 
******************************************************************/

/** 1. LOADING
*******************************************************************/
var blockProcess = false;

jQuery(window).on('load', function () {
	"use strict";

	setTimeout(function () {
		$("#page-loader").addClass("hide-this");
		$('#cycle').cycle("goto", "0");

		setTimeout(function () {
			$(".hero .background-content.page-enter-animated").addClass("show");

			setTimeout(function () {
				$(".hero .front-content.page-enter-animated").addClass("show");

				setTimeout(function () {
					blockProcess = false;
					$(".grcs_bullet_nav").addClass("init");
				}, 1000);
			}, 600);

			$(".social-icons li a").tooltip({
				container: 'body',
				delay: { "show": 150, "hide": 0 }
			});
		}, 200);
	}, 600);
});

/**	2. OVERLAY
*****************************************************/

$(document).ready(function () {
	"use strict";

	function overlaySystem(sectionContainerPT, sectionsPT, frontpagePT, frontpageContainerPT) {

		// VARIABLES
		var sectionContainer = $(sectionContainerPT),
		    sections = $(sectionContainerPT + ">" + sectionsPT),
		    clickedSectionIndex = 0,
		    bulletNavEvent = false,
		    upBtn = $(".go-up"),
		    downBtn = $(".go-down"),
		    frontpage = $(frontpagePT),
		    frontpageContainer = $(frontpageContainerPT),
		    amountOfSections = sections.length,
		    currentSection = 0,
		    currentSectionSelector;

		function hideFrontPage() {

			frontpageContainer.children().css("transition", "all 1000ms 500ms");
			frontpage.addClass("overlay-active");
			frontpage.removeClass("show");
			frontpage.find("div.controls").removeClass("show");

			$('#cycle').cycle('pause');
		}

		function showFrontPage() {

			frontpageContainer.children().css("transition", "all 800ms 200ms");
			frontpage.removeClass("overlay-active");
			frontpage.addClass("show");

			if (option_hero_background_mode === "youtube") {

				setTimeout(function () {
					frontpage.find("div.controls").addClass("show");
				}, 200);
			}

			setTimeout(function () {
				$('#cycle').cycle('resume');
			}, 1400);
		}

		function nextOverlay() {

			if (currentSection == amountOfSections || blockProcess === true) {
				return false;
			}

			blockProcess = true;

			if (currentSection === 0) {

				hideFrontPage();

				setTimeout(function () {
					sectionContainer.addClass("open");
				}, 200);
			}

			if (bulletNavEvent == false) {

				currentSection = currentSection + 1;
			} else {

				currentSection = clickedSectionIndex;
				bulletNavEvent = false;
			}

			sections.removeClass("active");
			currentSectionSelector = sections.eq(currentSection - 1);
			$(".social-icons li a").tooltip('hide');

			setTimeout(function () {

				currentSectionSelector.addClass("active");
				updateBulletNav();

				setTimeout(function () {

					upBtn.addClass("active");

					setTimeout(function () {
						blockProcess = false;
					}, 800);
				}, 400);
			}, 1000);
		}

		function prevOverlay() {

			if (currentSection === 0 || blockProcess === true) {
				return false;
			}

			blockProcess = true;

			if (bulletNavEvent == false) {
				currentSection = currentSection - 1;
			} else {
				currentSection = clickedSectionIndex;
				bulletNavEvent = false;
			}

			sections.removeClass("active");
			currentSectionSelector = sections.eq(currentSection - 1);

			setTimeout(function () {

				currentSectionSelector.addClass("active");
				updateBulletNav();

				setTimeout(function () {
					blockProcess = false;
				}, 800);
			}, 800);

			if (currentSection === 0) {

				upBtn.removeClass("active");

				setTimeout(function () {

					showFrontPage();
					sectionContainer.removeClass("open");
				}, 800);
			}
		}

		function updateBulletNav() {
			if (option_overlay_bullet_navigation === "on" && !$(".hero").hasClass("error-404")) {
				$(".grcs_bullet_nav .nav_dots").removeClass("active");
				$(".grcs_bullet_nav .nav_dots").eq(currentSection).addClass("active");
			}
		}

		function clickBulletNav() {

			$('.grcs_bullet_nav .nav_dots').click(function () {

				clickedSectionIndex = $('.grcs_bullet_nav .nav_dots').index(this);

				if (clickedSectionIndex != currentSection) {
					if (clickedSectionIndex < currentSection) {

						bulletNavEvent = true;
						prevOverlay();
					} else {

						bulletNavEvent = true;
						nextOverlay();
					}
				}
			});
		}

		function createBulletNav() {

			$("body").append('<div class="grcs_bullet_nav"></div>');

			for (var i = 0; i < amountOfSections + 1; i++) {
				$(".grcs_bullet_nav").append('<div class="nav_dots"></div>');
			}

			updateBulletNav();
			clickBulletNav();
		}

		if (option_overlay_bullet_navigation === "on" && !$(".hero").hasClass("error-404")) {
			createBulletNav();
		}

		// EVENT - ON DOWN BUTTON CLICK
		downBtn.click(function () {
			nextOverlay();
		});

		// EVENT - ON UP BUTTON CLICK
		upBtn.click(function () {
			prevOverlay();
		});

		// EVENT - ON DOWN SCROLL GLOBAL	
		$('html').on('DOMMouseScroll mousewheel', function (e) {

			var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;

			if (theEvent / 120 < 0) {
				nextOverlay();
			}
		});

		// EVENT - ON UP SCROLL GLOBAL	
		$('html').on('DOMMouseScroll mousewheel', function (e) {

			var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;

			if (theEvent / 120 > 0) {
				prevOverlay();
			}
		});

		// EVENT - KEYDOWN	
		$(document).keydown(function (e) {

			switch (e.which) {

				case 37:
					// left
					break;
				case 38:
					// up
					prevOverlay();
					break;
				case 39:
					// right
					break;
				case 40:
					// down
					nextOverlay();
					break;
				default:
					return; // exit this handler for other keys
			}

			e.preventDefault();
		});

		// SKIN CHANGER ( Controlled via Config.js )
		if (option_overlay_skin == "white") {
			$("body").addClass("white");
		}

		// SWITCH ANIMATION OVERLAY ( Controlled via Config.js )
		switch (option_overlay_animation) {

			case 'fade':
				sectionContainer.addClass("fade-In");
				break;
			case 'slide':
				sectionContainer.addClass("slide-from-bottom");
				break;
			default:
				sectionContainer.addClass("fade-In");
				break;

		}

		// SWITCH ANIMATION OVERLAY CONTENT ( Controlled via Config.js )
		switch (option_overlay_content_animation) {

			case 'fade':
				sections.addClass("fade-In");
				break;
			case 'slide':
				sections.addClass("slide-from-bottom");
				break;
			default:
				sections.addClass("slide-from-bottom");
				break;

		}
	}

	overlaySystem("#overlay", "section.overlay", "#hero .front-content", "#hero .front-content .container-mid");

	/**	3. AJAX - SUBSCRIBE
  *****************************************************/

	$('.subscribe-form').submit(function () {

		var postdata = $('.subscribe-form').serialize();

		$.ajax({

			type: 'POST',
			url: 'assets/php/subscribe.php',
			data: postdata,
			dataType: 'json',
			success: function success(json) {

				$('.subscribe-form').removeClass("error").removeClass("error-final");

				if (json.valid === 0) {

					$('.subscribe-form').addClass("error");
					$('.subscribe-form input').attr("placeholder", json.message);
					$('.subscribe-form input').val('');

					setTimeout(function () {
						$('.subscribe-form').addClass("error-final");
					}, 1500);
				} else {

					$('.subscribe-form input,.subscribe-form button').val('').prop('disabled', true);
					$('.subscribe-form input').attr("placeholder", json.message);
					$('.subscribe-form').addClass("success");
				}
			}

		});

		return false;
	});

	/**	4. AJAX - CONTACT
  *****************************************************/

	$("#contact-form").submit(function (e) {

		e.preventDefault();
		var postdata = $(this).serialize();

		$.ajax({

			type: "POST",
			url: "assets/php/contact.php",
			data: postdata,
			dataType: "json",
			success: function success(json) {

				$("#contact-form.error input, #contact-form.error textarea").removeClass("active");

				setTimeout(function () {

					if (json.nameMessage !== "") {

						$("#contact-form-name").addClass("active").attr("placeholder", json.nameMessage);
						$("#contact-form").addClass("error");
					}

					if (json.emailMessage !== "") {

						$("#contact-form-email").addClass("active").val("").attr("placeholder", json.emailMessage);
						$("#contact-form").addClass("error");
					}

					if (json.messageMessage !== "") {

						$("#contact-form-message").addClass("active").attr("placeholder", json.messageMessage);
						$("#contact-form").addClass("error");
					}
				}, 50);

				if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

					$('#contact-form').removeClass("error").addClass("success");
					$('#contact-form textarea, #contact-form input').attr("placeholder", "");
					$('#contact-form textarea').attr("placeholder", json.succesMessage);
					$('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);
				}
			}

		});
	});
});

/**	5. GOOGLE ANALYTICS
 *****************************************************/

if (option_analytics_tracking == "on") {
	var loadtracking = function loadtracking() {

		window._gaq.push(['_setAccount', option_analytics_tracking_id]);
		window._gaq.push(['_trackPageview']);
		(function () {
			var ga = document.createElement('script');ga.type = 'text/javascript';ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga, s);
		})();
	};

	var _gaq = _gaq || [];

	loadtracking();
}
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
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/scripts.js"], null)
//# sourceMappingURL=/scripts.1f30bd7a.map