(function () {
'use strict';

/* Analytics Code */

var _rzpAQ = [];
function emptyRzpAQ() {
  if (typeof ga === 'undefined' || (_rzpAQ && _rzpAQ.length === 0)) { return; }
  var q = [].concat(_rzpAQ);
  _rzpAQ = [];
  if (q.length > 0) {
    for (var i = 0; i < q.length; i++) {
      window.rzpAnalytics(q[i]);
    }
  }
}
var _qChckr = setInterval(emptyRzpAQ, 500);

/**
 * Method to track Google Analytics
 * @param {Object} eventData Data of the event
 * @param {Function} cb Callback
 */
window.rzpAnalytics = function(data, cb) {
  if ( cb === void 0 ) cb = function() {};

  // If there's no data, don't track anything
  if (!data) {
    cb(data);
    return;
  }

  // If ga is undefined, push to queue
  if (typeof ga === 'undefined') {
    _rzpAQ.push(data);
    cb(data);
    return;
  }

  // `ga` exists now, empty the queue.
  clearInterval(_qChckr);
  emptyRzpAQ();

  // Check if GA is noop.
  if (ga.hasOwnProperty('length') && ga.length === 0) {
    cb(data);
  }

  switch (data.name) {
    case 'set_dimensions': // Set the dimensions
      ga('set', data.dimensions);
      ga('old.set', data.dimensions);
      break;
    default:
      ga(
        'send',
        'event',
        data.eventCategory || window._eventCategory,
        data.eventAction || undefined,
        data.eventLabel || undefined,
        data.eventValue || undefined,
        {
          hitCallback: function() {
            cb(data);
          }
        }
      );
      ga(
        'old.send',
        'event',
        data.eventCategory || window._eventCategory,
        data.eventAction || undefined,
        data.eventLabel || undefined,
        data.eventValue || undefined,
        {
          hitCallback: function() {
            cb(data);
          }
        }
      );
  }
};

var analyticsScr = document.createElement('script');
analyticsScr.src = 'https://cdn.razorpay.com/static/analytics/bundle.js';
analyticsScr.onload = initAnalytics;
analyticsScr.async = true;
document.documentElement.appendChild(analyticsScr);

var prodUrl = 'razorpay.com';

function initAnalytics() {
  analytics.init(
    ['fb', 'twitter', 'quora', 'hotjar', 'linkedin', 'adroll'],
    window.location.hostname.indexOf(prodUrl) < 0
  );

  // Init old key as well
  // ga('create', 'UA-53341507-1', 'auto', 'old');

  // Init Google Optimize
  // ga('old.require', 'GTM-NCWFQ39');
  // ga('require', 'GTM-NCWFQ39');

  // analytics.track('ga', 'pageview');
  analytics.track('fb', 'PageView');
  analytics.track('twitter');
  analytics.track('quora', 'ViewContent');
  analytics.track('linkedin');

  // Init bing
  (function(w, d, t, r, u) {
    var f, n, i;
    (w[u] = w[u] || []),
      (f = function() {
        var o = { ti: '5963182' };
        (o.q = w[u]), (w[u] = new UET(o)), w[u].push('pageLoad');
      }),
      (n = d.createElement(t)),
      (n.src = r),
      (n.async = 1),
      (n.onload = n.onreadystatechange = function() {
        var s = this.readyState;
        (s && s !== 'loaded' && s !== 'complete') ||
          (f(), (n.onload = n.onreadystatechange = null));
      }),
      (i = d.getElementsByTagName(t)[0]),
      i.parentNode.insertBefore(n, i);
  })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq');
}

/* Load analytics only on prod */
if (location.hostname === prodUrl) {
  // Load help ninja if not disabled
  if (!window.DISABLE_HELPNINJA) {
    setTimeout(function() {
      // helpninja
      var s = document.createElement('script');
      //<script async="true" src="https://static.helpninja.com/helpninja.js" id="oc_script" convid="-Kvx6dgy972KCFPlQR0s"></script>
      s.src = 'https://static.helpninja.com/helpninja.js';
      s.id = 'oc_script';
      s.setAttribute('convid', '-Kvx6dgy972KCFPlQR0s');
      s.async = true;
      document.documentElement.appendChild(s);
    }, 1000);
  }
}

function goog_snippet_vars() {
  var w = window;
  w.google_conversion_id = 928471290;
  w.google_conversion_label = 'Hq25CNOYtXQQ-rHdugM';
  w.google_remarketing_only = false;
}

function goog_report_conversion(url) {
  document.cookie = 'signup_pixel=1;path=/;domain=.razorpay.com';
  goog_snippet_vars();
  window.google_conversion_format = '3';
  var opt = {};
  opt.onload_callback = function() {
    if (url) {
      window.location = url;
    }
  };
  var conv_handler = window['google_trackConversion'];
  if (typeof conv_handler == 'function') {
    conv_handler(opt);
  } else {
    // adblock
    opt.onload_callback();
  }
}

$(
  '.enterprise-form, .contact-form, .earlyaccess-form, .whatwentwrong-form' +
    ', .moo-form'
).each(function(index, form) {
  form.onsubmit = function(e) {
    e.preventDefault();
    var $form = $(this);
    var $button = $form.find('button');
    var origText = $button.html();
    $button.prop('disabled', 'true').html('Please Wait...');

    $(this)
      .find('input[name="ref_url"]')
      .remove();
    $(this).append(
      '<input type="hidden" name="ref_url" value="' +
        window.location.href.split('?')[0] +
        '" /> '
    );

    $.ajax({
      method: 'get',
      url: this.action,
      data: $(this).serialize(),
      complete: function(r) {
        $button.prop('disabled', false).html(origText);
        if (!r.responseJSON) {
          // submissionInfo(parent, 'There was an error, please check your network connection.');
        } else if (r.responseJSON.status === 'success') {
          $form[0].reset();
          $form.parents('.modal:eq(0)').addClass('success');
        } else {
          // submissionInfo(parent, 'There was an error in submitting your form');
        }
      }
    });
  };
});

(function() {
  /**
   * Returns path to node
   * @param {DOMNode} elem
   */
  var getPath = function (elem) {
    console.log('invoked');
    var path = [];

    while (elem) {
      path.push(elem);
      elem = elem.parentElement;
    }

    return path;
  };

  //
  // Navigation Analytics
  //
  var NavigationAnalytics = {
    // User unintentionally hovered above nav items.
    nullHover: function nullHover(item) {
      if (isMobile()) { return; }
      item = initcap(item);
      this.log('User unintentionally hovered above "%s"', item);

      this.send({
        action: 'Hover - Nav Category (null)',
        label: item
      });
    },
    // User clicked on nav item while it is open.
    navItemClick: function navItemClick(item) {
      if (isMobile()) { return; }
      item = initcap(item);
      this.log('User clicked on "%s" while it is open.', item);

      this.send({
        action: 'Click - Nav Category',
        label: item
      });
    },
    // User stayed on X section for T seconds.
    userStayedOnMenu: function userStayedOnMenu(x, time, direction) {
      if (isMobile()) { return; }
      if (time < 0.5) { return; } // Don't track interactions of less than 0.5 second.
      if (!direction) { return; }
      x = initcap(x);
      direction = initcap(direction);
      this.log(
        'User stayed on "%s" section for %f seconds. (%s)',
        x,
        time,
        direction
      );
      this.send({
        action: 'Hover - Nav Box (out direction)',
        label: x + ' - ' + direction,
        value: time
      });
    },
    // User clicks on menu item.
    userClicksOnMenu: function userClicksOnMenu(menu) {
      this.stopRecord(menu, 'inside');
      menu = initcap(menu);
      this.log('User clicked a link in %s menu.', menu);
      this.sendTagRecording('navigation_item_clicked');
      // Tracked by lytics.
    },
    calculateDirection: function calculateDirection(mouseEvent, bounds) {
      var clientX = mouseEvent.clientX;
      var clientY = mouseEvent.clientY;
      if (clientX <= bounds.left) { return 'left'; }
      if (clientX >= bounds.right) { return 'right'; }
      if (clientY <= bounds.top) { return 'top'; }
      if (clientY >= bounds.bottom) { return 'bottom'; }
      return 'inside';
    },
    _items: ['products', 'develop', 'resources'],
    _timings: {},
    _listeners: {},
    _entrySemaphore: {},
    enteredMenu: function enteredMenu(menu) {
      this._entrySemaphore[menu] = true;
    },
    exitedMenu: function exitedMenu(menu) {
      this._entrySemaphore[menu] = false;
    },
    didEnter: function didEnter(menu) {
      return this._entrySemaphore[menu] || false;
    },
    startRecord: function startRecord(menu) {
      if (isMobile()) { return; }
      if (this.isRecording(menu)) {
        return;
      }
      this.stopRecord(menu);
      this.enteredMenu(menu);
      var ref = this;
      this._timings[menu] = 0;
      this._listeners[menu] = setInterval(function() {
        ref._timings[menu] += 0.5;
      }, 500);
      this.sendTagRecording('navigation_category_hovered');
    },
    isRecording: function isRecording(menu) {
      return this._listeners[menu] && this._timings[menu] > 1;
    },
    stopRecord: function stopRecord$1(menu, direction) {
      if (isMobile()) { return; }
      if (menu && menu.length) {
        var listenerId = this._listeners[menu];
        if (listenerId) {
          clearInterval(listenerId);
        }

        var time = this._timings[menu];
        if (time) {
          this.userStayedOnMenu(menu, time, direction);
        }

        this._listeners[menu] = null;
        this._timings[menu] = null;
      } else {
        this._items.forEach(function (item) { return stopRecord(item); });
      }
    },
    log: function log() {
      // Log only on localhost.
      if (location.host.indexOf('localhost') > -1) {
        console.info.apply(console, arguments);
      }
    },
    send: function send(data) {
      if (!window.rzpAnalytics) { return; }
      this.log(data);
      window.rzpAnalytics({
        eventCategory: data.category || 'Website - Navigation',
        eventAction: data.action || undefined,
        eventLabel: data.label || undefined,
        eventValue: data.value || undefined
      });
    },
    sendTagRecording: function sendTagRecording(tag) {
      if (typeof window.hj === 'function') {
        window.hj('trigger', tag);
        window.hj('tagRecording', [tag]);
      }
    }
  };
  //
  // Navigation
  //
  function Navigation(selector) {
    this.nav = document.querySelector(selector);
    if (!this.nav) { return; }
    this.items = nodeListToArray(document.querySelectorAll('.nav-menu'));
    this.list = document.querySelector('ul');
    this.line = document.querySelector('.nav-line');
    this.itemBounds = [];
    this.lineTransition = this.line.style.transition;
    this.lineAnimation = this.line.style.animation;
    this.mobileBackdrop = document.querySelector('.backdrop.mob');
    this.hamMenu = document.querySelector('#ham-menu');
    this.hadCursor = false;

    this.classes = {
      OPEN_CLASS: 'opened',
      ACTIVE_CLASS: 'active',
      INACTIVE_CLASS: 'inactive',
      MOB_OPEN_CLASS: 'open-nav',
      BUTTON_INPUT_CLASS: 'active',
      SIGNUP_ACTIVE_CLASS: 'signup-active'
    };

    // IE11 Fixes
    if (isIE11() && !isMobile()) {
      var nav1 = document.querySelector('.nav1 .sub');
      var nav1col1 = document.querySelector('.nav1 .column:nth-child(1)');
      var nav1col2 = document.querySelector('.nav1 .column:nth-child(2)');
      var nav2 = document.querySelector('.nav2 .sub');
      var nav3 = document.querySelector('.nav3 .sub');
      if (nav1 && nav2 && nav3) {
        nav1.style.width = '1080px';
        nav2.style.width = '545px';
        nav3.style.width = '474px';
        nav1col1.style.width = nav1col2.style.width = '440px';
      }
    }
  }
  // Is the item being hovered?
  function currentHoverItem(item) {
    if (item instanceof HTMLElement) {
      return !!item.querySelector(':hover');
    }
    return !!document.querySelector(item + ':hover');
  }

  function isMobile() {
    return window.innerWidth < 1024;
  }
  // JS doesn't have a capitalize function. #JustJavascriptThings.
  function initcap(string) {
    if (string && string.length) {
      return string.charAt(0).toUpperCase() + string.substr(1);
    }
    return '';
  }

  // Wait for 200ms before calling onhover callback, if cursor out, fail.
  function waitForCommittedHover(target, onCommit, onRefrain, time) {
    if (!target) { return; }

    var COMMIT_TIME = time || 200; // ms

    var cancel = false;
    target.addEventListener('mouseleave', function onMouseLeave() {
      cancel = true;
      target.removeEventListener('mouseleave', onMouseLeave);
    });

    setTimeout(function() {
      if (cancel) {
        if (typeof onRefrain === 'function') {
          onRefrain();
        }
      } else {
        if (typeof onCommit === 'function') {
          onCommit();
        }
      }
    }, COMMIT_TIME);
  }

  Navigation.prototype = {
    init: function() {
      var ref = this;
      var ref$1 = this;
      var items = ref$1.items;
      var hamMenu = ref$1.hamMenu;
      var mobileBackdrop = ref$1.mobileBackdrop;
      var animateLine = ref$1.animateLine;
      var hasParent = ref$1.hasParent;
      var ref$2 = this.classes;
      var ACTIVE_CLASS = ref$2.ACTIVE_CLASS;
      var OPEN_CLASS = ref$2.OPEN_CLASS;
      var MOB_OPEN_CLASS = ref$2.MOB_OPEN_CLASS;
      var INACTIVE_CLASS = ref$2.INACTIVE_CLASS;
      var nav = this.nav;

      // Prevent 'sub' FOUC when the page is loading.
      setTimeout(function() {
        removeClass(nav, 'loading');
        addClass(nav, 'loaded');

        nodeListToArray(nav.querySelectorAll('.sub')).forEach(
          function (sub) { return (sub.style.animationDuration = ''); }
        );
      }, 100);

      this.calculateBounds();

      var setupEvents = function (item) {
        var openMenu = function(target, clickedOnAnchor) {
          addClass(nav, OPEN_CLASS);

          if (!isMobile()) {
            // Desktop Interactions.
            addClass(item, ACTIVE_CLASS);
            removeClass(item, INACTIVE_CLASS);

            NavigationAnalytics.startRecord(item.dataset.navItemId);
            animateLine.call(ref, target, nav.hadCursor);
          } else {
            // Mobile Interactions.
            if (hasClass(target, ACTIVE_CLASS)) {
              if (!clickedOnAnchor) {
                removeClass(target, ACTIVE_CLASS);
                addClass(target, INACTIVE_CLASS);

                target.style.maxHeight = '';
              }
              return;
            }
            var active = nav.querySelector('li.' + ACTIVE_CLASS);
            if (active) {
              removeClass(active, ACTIVE_CLASS);
              addClass(target, INACTIVE_CLASS);

              active.style.maxHeight = '';
            }
            var sub = target.querySelector('.sub');
            var maxHeight = 64 + 64 + sub.getBoundingClientRect().height;
            target.style.maxHeight = maxHeight + 'px';

            addClass(target, ACTIVE_CLASS);
            removeClass(target, INACTIVE_CLASS);
          }
        };

        item.addEventListener('click', function(mouseEvent) {
          // Was the click on an anchor?
          var clickedOnAnchor = false;
          var path = mouseEvent.path || getPath(mouseEvent.target);
          clickedOnAnchor =
            path
              .filter(function (e) { return e instanceof HTMLElement; })
              .map(function (e) { return e.tagName.toLowerCase(); })
              .indexOf('a') > -1;
          if (isMobile()) {
            openMenu(mouseEvent.currentTarget, clickedOnAnchor);
            return;
          }
          if (clickedOnAnchor) {
            NavigationAnalytics.userClicksOnMenu(item.dataset.navItemId);
          }
        });

        item.querySelector('span').addEventListener('click', function() {
          NavigationAnalytics.navItemClick(item.dataset.navItemId);
        });

        item.addEventListener('mouseenter', function() {
          if (isMobile()) { return; }
          if (nav.hadCursor) {
            // User is moving from one category to another.
            openMenu(item);
          } else {
            waitForCommittedHover(
              item,
              function onCommit() {
                animateLine.call(ref, item, false);
                openMenu(item);
              },
              function onRefrain() {
                NavigationAnalytics.nullHover(item.dataset.navItemId);
              }
            );
          }
        });

        item.addEventListener('mouseleave', function(mouseEvent) {
          if (isMobile()) { return; }

          nav.hadCursor = currentHoverItem('.nav-menu');
          removeClass(nav, OPEN_CLASS);

          var target = mouseEvent.currentTarget;
          if (hasParent(target, item)) {
            return;
          }

          removeClass(target, ACTIVE_CLASS);
          addClass(target, INACTIVE_CLASS);

          setTimeout(function() {
            if (!hasClass(target, ACTIVE_CLASS)) {
              var bounds = item.querySelector('.sub').getBoundingClientRect();
              var direction = NavigationAnalytics.calculateDirection(
                mouseEvent,
                bounds
              );
              // Did the user move from one category to another?
              var onAnotherCategory = nav.querySelector('.nav-menu.active');
              if (onAnotherCategory && onAnotherCategory !== target) {
                direction = onAnotherCategory.dataset.navItemId;
              }
              NavigationAnalytics.stopRecord(
                target.dataset.navItemId,
                direction
              );
            }
          }, 150);
        });
      };

      items.forEach(setupEvents);

      hamMenu.addEventListener('click', function() {
        var body = document.body;

        if (hasClass(body, MOB_OPEN_CLASS)) {
          removeClass(body, MOB_OPEN_CLASS);
        } else {
          addClass(body, MOB_OPEN_CLASS);
          mobileBackdrop.addEventListener('mouseup', function mouseUp(e) {
            removeClass(body, MOB_OPEN_CLASS);
            mobileBackdrop.removeEventListener('mouseup', mouseUp);
          });
        }
      });

      this.setupSignUpEvents();
    },
    hasParent: function hasParent(target, parent) {
      if (!target) { return; }
      while (target.parentElement !== document.body) {
        if (target.parentElement === parent) {
          return true;
        }
        target = target.parentElement;
      }
      return false;
    },
    calculateBounds: function() {
      var ref = this;
      var itemBounds = ref.itemBounds;
      var items = ref.items;
      itemBounds.length = 0;
      items.forEach(function (item) {
        var id = item.dataset.navItemId;
        itemBounds[id] = item.getBoundingClientRect();
      });
    },
    animateLine: function(item, skipAnimation) {
      var ref = this;
      var line = ref.line;
      var lineTransition = ref.lineTransition;
      var lineAnimation = ref.lineAnimation;
      var list = ref.list;

      if (!skipAnimation) {
        line.style.transition = 'none';
        line.style.animation = 'none';
      }

      var leftOffset = list.getBoundingClientRect().left;
      var bounds = item.getBoundingClientRect();
      var BOUNDARY = 32 + 4; // padding + margin

      line.style.width = bounds.width - BOUNDARY + 'px';
      line.style.opacity = 1;
      line.style.left = bounds.left - leftOffset + BOUNDARY / 2 + 'px';

      if (!skipAnimation) {
        setTimeout(function () {
          line.style.transition = lineTransition;
          line.style.animation = lineAnimation;
        }, 0);
      }
    },
    onResize: function onResize() {
      var ref = this.classes;
      var MOB_OPEN_CLASS = ref.MOB_OPEN_CLASS;
      this.calculateBounds();
      removeClass(document.body, MOB_OPEN_CLASS);
    },
    setupSignUpEvents: function setupSignUpEvents() {
      var ref = this.classes;
      var SIGNUP_ACTIVE_CLASS = ref.SIGNUP_ACTIVE_CLASS;
      var BUTTON_INPUT_CLASS = ref.BUTTON_INPUT_CLASS;
      var signup = document.querySelector('#nav-signup');
      var signupInput = signup.querySelector('input');
      var signupButton = signup.querySelector('button');
      var hiringButton = document.querySelector('#nav .hiring-btn.desktop');
      var body = document.body;
      var MOUSEOUT_SIGNUP_MINIMIZE_DELAY = 3000; // Delay for minimizing signup form after mouseout on nav.
      var minimizerTimeout;

      // Minimizes signup field
      var minimizeSignupField = function () {
        removeClass(nav, SIGNUP_ACTIVE_CLASS);
        removeClass(signup, BUTTON_INPUT_CLASS);
        if (hiringButton) {
          hiringButton.style.display = '';
        }
        signupInput.blur();
      };

      if (!signup || !signupInput) { return; }
      signup.addEventListener('mouseover', function() {
        if (hasClass(nav, SIGNUP_ACTIVE_CLASS)) { return; }
        addClass(nav, SIGNUP_ACTIVE_CLASS);
        addClass(signup, BUTTON_INPUT_CLASS);
        if (hiringButton) {
          hiringButton.style.display = 'none';
        }
        signupInput.focus();
      });
      signupButton.addEventListener('click', function() {
        var email = signupInput.value;
        NavigationAnalytics.send({
          action: 'Click - Sign Up',
          label: email
        });
      });

      var __DO_NOT_HIDE = false;
      nav.addEventListener('mouseout', function() {
        if (signupInput.value.length) { return; }

        if (!__DO_NOT_HIDE) {
          minimizeSignupField();
        }
      });

      var _minimizeWithDelay = function () {
        if (signupInput.value.length) {
          return;
        }

        __DO_NOT_HIDE = true;
        clearTimeout(minimizerTimeout);
        minimizerTimeout = setTimeout(function() {
          var hovering =
            signup.parentElement.querySelector(':hover') === signup;
          var hasInput = signupInput.value.length;

          if (!hovering && !hasInput) {
            minimizeSignupField();
            __DO_NOT_HIDE = false;
          }
        }, MOUSEOUT_SIGNUP_MINIMIZE_DELAY);
      };

      signupInput.addEventListener('click', _minimizeWithDelay);
      signupInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.keyCode === 40) {
          _minimizeWithDelay();
        }
      });

      body.addEventListener('click', function (e) {
        // If signup field is already minimzed or there's value in the input field, do nothing.
        if (!hasClass(signup, BUTTON_INPUT_CLASS) || signupInput.value.length) {
          return;
        }

        var path = e.path || getPath(e.target);

        // If signup form is not in path, minimize it.
        if (path.indexOf(signup) < 0) {
          minimizeSignupField();
        }
      });
    }
  };

  function hasClass(elem, lookupClass) {
    return (' ' + elem.className + ' ').indexOf(' ' + lookupClass + ' ') > -1;
  }

  function addClass(el, className) {
    if (el.classList) { el.classList.add(className); }
    else if (!hasClass(el, className)) { el.className += ' ' + className; }
  }

  function removeClass(el, className) {
    if (el.classList) { el.classList.remove(className); }
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }

  function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }

  //
  // animate-on-scroll
  //
  // Adds an 'appear-in' class to every element
  // that has an 'animate-on-scroll' class (when visible in viewport).
  //

  var animateOnScrollTargets = nodeListToArray(
    document.querySelectorAll('.animate-on-scroll')
  );

  if (animateOnScrollTargets.length) {
    // Make the target visible when it is 300px away.
    var TOP_OFFSET = 300; // px
    var APPEAR_IN_CLASS = 'appear-in';
    window.addEventListener('scroll', function () {
      animateOnScrollTargets.forEach(function (target) {
        var bounds = target.getBoundingClientRect();
        if (bounds.top - TOP_OFFSET < 0) {
          target.classList.add(APPEAR_IN_CLASS);
        }
      });
    });
  }

  // Compatible alternative to Array.prototype.from()
  function nodeListToArray(nodeList) {
    if (!(nodeList instanceof NodeList)) { return; }
    var array = [];
    for (var i = 0; i < nodeList.length; i++) {
      array.push(nodeList[i]);
    }
    return array;
  }

  $(window).ready(function() {
    var nav = new Navigation('#nav');
    nav.init();

    $(window).on('resize', function() {
      nav.onResize();
    });
  });

  function sendLandingParams(email, callback) {
    var url = 'https://hooks.zapier.com/hooks/catch/1088429/qlvapz/';
    var data = analytics.utils.getLandingParams();
    data.email = email;
    data.url = window.location.href.split('?')[0];

    $.ajax(
      {
        type: 'POST',
        url: url,
        data: JSON.stringify(data)
      },
      callback
    );
  }

  //
  // Sign-up form events
  //
  $('.signup-form').submit(function(e) {
    e.preventDefault();
    var emailField = $(this).find('input[name=email]');

    if (window.analytics) {
      analytics.utils.setCookie('pendingAction', {
        type: 'signup-form',
        timeStamp: new Date(),
        data: { email: emailField.val() }
      });
    }

    // TODO: CTA Logic
    goog_report_conversion(
      $(this).attr('action') + '?email=' + encodeURIComponent(emailField.val())
    );

    // Fire linkedin Pixel.
    var i = new Image();
    i.src =
      'https://dc.ads.linkedin.com/collect/?pid=155571&conversionId=391812&fmt=gif';

    var evtObj = lytics.getAttribsFromEl(this);
    if (evtObj.eventCategory) {
      if (evtObj.eventLabel || emailField.val()) {
        evtObj.eventLabel = 'filled';
      } else {
        evtObj.eventLabel = undefined;
      }
    }

    var location =
      $(this).attr('action') + '?email=' + encodeURIComponent(emailField.val());

    var _redirecting = false;
    var redirect = function() {
      if (!_redirecting) {
        _redirecting = true;
        window.location = location;
      }
    };

    var final = sendLandingParams(emailField.val(), function() {
      redirect();
    });

    setTimeout(function() {
      redirect();
    }, 1000);

    if (evtObj) {
      window.rzpAnalytics(evtObj, final);
    } else {
      final();
    }
  });

  $('.signup-form input[name=email]').focus(function() {
    $(document.body).addClass('no-helpninja-mob');
  });

  $('.signup-form input[name=email]').blur(function() {
    setTimeout(function() {
      $(document.body).removeClass('no-helpninja-mob');
    }, 100);
  });

  $('.subscribe-form')
    .submit(function(e) {
      e.preventDefault();
      var $form = $(this);
      var $button = $form.find('button');
      var origText = $button.html();
      var $emailInput = $(this).find('input[name="email"]');
      var email = $emailInput.val();
      $button
        .prop('disabled', 'true')
        .html('Please Wait...')
        .removeClass('action-success');

      $(this)
        .find('input[name="ref_url"]')
        .remove();
      $(this).append(
        '<input type="hidden" name="ref_url" value="' +
          window.location.href +
          '" /> '
      );

      $.ajax({
        method: 'get',
        url: this.action,
        data: $(this).serialize(),
        complete: function(r) {
          $button.prop('disabled', false).html(origText);
          if (!r.responseJSON) {
            // submissionInfo(parent, 'There was an error, please check your network connection.');
          } else if (r.responseJSON.status === 'success') {
            $button.html(
              origText
                .replace('Subscribed', 'Subscribe')
                .replace('Subscribe', 'Subscribed')
            );
            $button
              .find('i')
              .removeClass('i-arrow-foward')
              .addClass('i-tick');
            $button.addClass('action-success');
            $emailInput.attr('placeholder', email);
            $form[0].reset();
          } else {
            // submissionInfo(parent, 'There was an error in submitting your form');
          }
        }
      });
    })
    .not('.focus')
    .find('input')
    .focus(function() {
      $(this)
        .parent()
        .addClass('focus');
    })
    .blur(function() {
      $(this)
        .parent()
        .removeClass('focus');
    });
})();

//
// Social Icons "sticky" behaviour events
//

var sticky = document.querySelector('.social-share-stacked');
if (sticky && !nav.mobile) {
  // sticky behaviour only in desktop
  var startElement = sticky.parentElement || document.body;
  var endElementSelector =
    sticky.getAttribute('data-sticky-end-element') || 'body';
  var endElement = document.querySelector(endElementSelector);
  var TOP_OFFSET = 72;
  var FIXED_TOP_CLASS = 'fixed-top';
  window.addEventListener('scroll', function () {
    var start = startElement.getBoundingClientRect().top;
    var end = endElement.getBoundingClientRect().bottom;
    var stickyHeight = sticky.getBoundingClientRect().height;
    var stickyBottom = end - stickyHeight - TOP_OFFSET;
    if (start <= TOP_OFFSET) {
      sticky.classList.add(FIXED_TOP_CLASS);
    } else {
      sticky.classList.remove(FIXED_TOP_CLASS);
      sticky.style.top = '';
    }
    if (stickyBottom < 0) {
      sticky.style.top = stickyBottom + TOP_OFFSET + 'px';
    }
  });
}

// easing functions http://goo.gl/5HLl8
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

function scrollTo(to, callback, options) {
  var start = this
    ? this.scrollLeft
    : document.documentElement.scrollTop || document.body.scrollTop;
  var change = to - start,
    currentTime = 0,
    increment = 20,
    duration = 500,
    self = this;

  if (arguments.length < 3) {
    duration = 500;
  }

  var animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = easeInOutQuad(currentTime, start, change, duration);

    if (self) {
      self.scrollLeft = val;
    } else {
      // move the document container
      document.documentElement.scrollTop = val;
      document.body.scrollTop = val;
    }

    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (typeof callback === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}

function showContent(targetSelector) {
  var $content = $('#content-' + targetSelector.slice(1));
  $content
    .siblings('.btn')
    .hide()
    .prop('offsetWidth');
  var $prev = $content.siblings('.active').removeClass('active');

  setTimeout(function() {
    $content.show().prop('offsetWidth');
    $content.addClass('active');
  }, 200);
  setTimeout(function() {
    $content.siblings('.btn').show();
    $prev.hide();
  }, 300);
}

function switchTab() {
  var $this = $(this).addClass('active');
  var targetSelector = $this.data('content');
  var siblings = $this.siblings();

  siblings.filter('.active').removeClass('active');
  racerPosition($this);

  targetSelector && showContent(targetSelector);
}

function racerPosition($anchor) {
  $anchor.siblings('.tab-racer').css({
    width: $anchor.prop('offsetWidth'),
    left: $anchor.prop('offsetLeft')
  });
}

function onResize() {
  racerPosition($('.secnav .active'));
}

var $tabs = $('.tab-title').click(function(e) {
  switchTab.call(this);
});

$('.secnav .tab-title').click(function() {
  var isFirstChild = $(this).is(':first-child');
  if (isFirstChild) {
    history && history.pushState('', '', location.pathname + location.search);
  } else {
    location.hash = $(this).data('content');
  }

  scrollTo($('.secnav').offset().top + 2);
});

function applyInitialHash() {
  if (location.hash) {
    $(
      '.secnav .tab-title:not(:first-child)[data-content="' +
        location.hash +
        '"]'
    )
      .click()
      .siblings()
      .filter('.initial-active')
      .removeClass('initial-active');
  }
}

applyInitialHash();
onhashchange = applyInitialHash;

setTimeout(function() {
  applyInitialHash();
  $tabs
    .filter('.initial-active')
    .each(switchTab)
    .removeClass('initial-active');
}, 200);

/* For checkout features */
$('.f-tab-title').click(function(e) {
  var $this = $(this);
  var targetSelector = $this.data('content');

  $this
    .parents('.f-tabs')
    .find('.f-tab-title')
    .filter('.active')
    .removeClass('active');

  $this.addClass('active');

  showContent(targetSelector);
});

$('#products.tabs .tab-title').click(function() {
  $(("#products.tabs .light:nth-child(" + ($(this).index() + 1) + ")"))
    .addClass('active')
    .siblings('.light')
    .removeClass('active');
});

$('#products.tabs .light').click(function() {
  $(("#products.tabs .tab-title:nth-child(" + ($(this).index() + 1) + ")")).click();
});

$('#products.tabs').on('keyup', function(e) {
  e = e || window.event;
  switch (e.which || e.keyCode) {
    case 37:
      $('#products.tabs .tab-title.active')
        .prev('.tab-title')
        .click();
      break;
    case 39:
      $('#products.tabs .tab-title.active')
        .next('.tab-title')
        .click();
  }
});

/* This scroll keeps the item always in center of visible list whenever possible */

var OVERFLOW_THRESHOLD = 96;
var currentTestimonial = 0;

var getAnalyticsObj = function(el) {
  var category = $(el).attr('data-lytics-category');
  if (!category) {
    return;
  }

  return {
    eventCategory: category
  };
};

var nextTestimonial = function(e) {
  var $this = $(this),
    $scroller = $this.siblings('.scroller'),
    itemWidth = $scroller.find('.item')[0].offsetWidth,
    currentPos = $scroller.scrollLeft(),
    nextItem = (2 + (currentPos - itemWidth * 0.75) / itemWidth) >> 0,
    nextPos = itemWidth * nextItem;

  currentTestimonial = nextItem;

  var evtObj = getAnalyticsObj(this.parentElement);

  if (evtObj) {
    evtObj.eventAction = 'Click - Testimonial Card Right';

    if (e.originalEvent) {
      // Actually clicked the button.
      evtObj.eventAction = 'Click - Testimonial Right Arrow';
    }

    evtObj.eventLabel = nextItem - 1;

    window.rzpAnalytics(evtObj, function() {
      scrollTo.call($scroller[0], nextPos);
    });
  } else {
    scrollTo.call($scroller[0], nextPos);
  }
};

var prevTestimonial = function(e) {
  var $this = $(this),
    $scroller = $this.siblings('.scroller'),
    itemWidth = $scroller.find('.item')[0].offsetWidth,
    currentPos = $scroller.scrollLeft(),
    prevItem = ((currentPos - itemWidth * 0.75) / itemWidth) >> 0,
    prevPos = itemWidth * prevItem;

  currentTestimonial = prevItem;

  var evtObj = getAnalyticsObj(this.parentElement);

  if (evtObj) {
    evtObj.eventAction = 'Click - Testimonial Card Left';

    if (e.originalEvent) {
      // Actually clicked the button.
      evtObj.eventAction = 'Click - Testimonial Left Arrow';
    }

    evtObj.eventLabel = prevItem + 1;

    window.rzpAnalytics(evtObj, function() {
      scrollTo.call($scroller[0], prevPos);
    });
  } else {
    scrollTo.call($scroller[0], prevPos);
  }
};

$('.js-carousel .next-arrow').click(nextTestimonial);
$('.js-carousel .prev-arrow').click(prevTestimonial);

$('.js-carousel .scroller').each(function() {
  this.addEventListener(
    'scroll',
    function() {
      var $this = $(this),
        currentPos = $this.scrollLeft(),
        scrollWidth = this.scrollWidth,
        itemWidth = $this.find('.item').outerWidth();

      if (currentPos < OVERFLOW_THRESHOLD) {
        $this.siblings('.prev-arrow').addClass('hide');
      } else if (
        scrollWidth - currentPos - $this.find('.wrapper').innerWidth() <
        OVERFLOW_THRESHOLD
      ) {
        $this.siblings('.next-arrow').addClass('hide');
      } else {
        $this.siblings('.prev-arrow, .next-arrow').removeClass('hide');
      }
    },
    { passive: true }
  );
});

$('.testimonials .item').on('click', function(event) {
  var testimonial = $(this).index();
  if (currentTestimonial === testimonial || testimonial < 0) { return; }
  if (testimonial > currentTestimonial) {
    $('.js-carousel')
      .find('.next-arrow')
      .click();
  } else {
    $('.js-carousel')
      .find('.prev-arrow')
      .click();
  }
});

var COVER_HOVER_CLASS = 'over';

$('.testimonials .item').hover(
  function(event) {
    var testimonial = $(this).index();
    if (currentTestimonial === testimonial || testimonial < 0) { return; }
    if (testimonial > currentTestimonial) {
      $('.cover.right').addClass(COVER_HOVER_CLASS);
    } else {
      $('.cover.left').addClass(COVER_HOVER_CLASS);
    }
  },
  function() {
    $('.cover.right').removeClass(COVER_HOVER_CLASS);
    $('.cover.left').removeClass(COVER_HOVER_CLASS);
  }
);

var onResize$1;
var onScroll;
var $secnav = $('.secnav');

if ($secnav.length) {
  var elementTop, isFixed;
  var $tabsHead = $('.secnav .secnav-head');

  onResize$1 = function() {
    // 2 is for minute boundary enhancement
    elementTop = $('.secnav').offset().top + 2;
    onScroll();
  };

  onScroll = function() {
    // XOR
    if (pageYOffset < elementTop ? isFixed : !isFixed) {
      $tabsHead[(isFixed = !isFixed) ? 'addClass' : 'removeClass']('fixed');
    }
  };
}

var onResize$1;
var onScroll;

var $homeImage = $('#home .banner-image');

$('#demo-receipt-modal').appendTo('body');

function open(selector) {
  var $element = $(selector);
  $('body').append('<div class="overlay" id="modal-overlay"></div>');

  // Helpninja
  $(document.body).addClass('no-helpninja-mob');

  var $overlay = $('#modal-overlay');

  $overlay.fadeIn(300);
  $element
    .show(300, function() {
      $element.addClass('show');
    })
    .on('click', function(event) {
      var target = event.target;
      if (
        target === $element[0] ||
        $(target).closest($(this).find('.close')).length
      ) {
        $element.removeClass('success');
        hide($element, $overlay);
      }
    });
}

function hide($element, $overlay) {
  $overlay.fadeOut('fast', function() {
    $(this).remove();
  });
  $element
    .off('click')
    .removeClass('show')
    .hide(300);

  // Helpninja
  setTimeout(function() {
    $(document.body).removeClass('no-helpninja-mob');
  }, 300);

  if ($element[0].id === 'tech-hiring-modal') {
    var jobId = $element.find('.close').data('type');
    window.rzpAnalytics({
      eventAction: 'Close - Job Description',
      eventLabel: jobsDb[jobId] ? jobsDb[jobId].title : undefined
    });
  }
}

/**
 * Smooth scroll to sections in the same page.
 * Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/#comment-197181
 */
$('a.smooth-scroll[href*=\\#]:not([href=\\#])').click(function() {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    var topOffset = this.getAttribute('data-smooth-scroll-offset') || 0;
    if (target.length) {
      $('html,body').animate(
        {
          scrollTop: target.offset().top - Number(topOffset)
        },
        700
      );

      var evtObj = lytics.getAttribsFromEl(this);
      if (evtObj.trigger && evtObj.trigger === 'click') {
        window.rzpAnalytics(evtObj);
      }

      return false;
    }
  }
});

function initGrievances() {
  var form = $('#grievances_form');
  var clientOrCustomer;

  function setRequired(forWhom) {
    var enable = forWhom;
    var disable = enable === 'merchant' ? 'customer' : 'merchant';

    var enableContainer = '.section.' + enable;
    var disableContainer = '.section.' + disable;

    var enableFor = $(enableContainer + ' input:not(.optional)')
      .toArray()
      .concat($(enableContainer + ' select').toArray())
      .concat($('input.' + enable).toArray());
    var disableFor = $(disableContainer + ' input')
      .toArray()
      .concat($(disableContainer + ' select').toArray())
      .concat($('input.' + disable).toArray());

    for (var i = 0; i < enableFor.length; i++) {
      $(enableFor[i]).attr('required', true);
    }

    for (var i = 0; i < disableFor.length; i++) {
      $(disableFor[i]).removeAttr('required');
    }
  }

  form.on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    var $button = $form.find('button');
    var origText = $button.html();
    $button.prop('disabled', 'true').html('Please Wait...');

    var data = $(this).serialize();

    $.ajax({
      method: this.method,
      url: ("https://hooks.zapier.com/hooks/catch/1088429/" + (data.indexOf('client_or_customer=customer') ? 'kdkedd' : 'krj0on') + "/"),
      data: data,
      complete: function(r) {
        $button.prop('disabled', false).html(origText);
        if (!r.responseJSON) {
          // submissionInfo(parent, 'There was an error, please check your network connection.');
        } else if (r.responseJSON.status === 'success') {
          $form[0].reset();
          $('#content').addClass('hidden');
          $('#ticket_ref_container').addClass('hidden');
          $('#ticket_ref_container input').removeAttr('required');
          if (clientOrCustomer === 'client') {
            openModal('#grievance-merchant-modal');
          } else {
            openModal('#grievance-customer-modal');
          }
          $('html, body').animate({ scrollTop: 0 }, 'fast');
        } else {
          // submissionInfo(parent, 'There was an error in submitting your form');
        }
      }
    });
  });

  $('input[name="client_or_customer"]').on('change', function(e) {
    $('#content').removeClass('hidden');
    var val = $(this).val();
    clientOrCustomer = val;
    if (val === 'client') {
      form.removeClass('show-customer').addClass('show-merchant');
      setRequired('merchant');
    } else if (val === 'customer') {
      form.removeClass('show-merchant').addClass('show-customer');
      setRequired('customer');
    }
  });

  $('input[name="contacted_support"]').on('change', function(e) {
    var val = $(this).val();

    if (val === 'yes') {
      $('#ticket_ref_container').removeClass('hidden');
      $('#ticket_ref_container input').attr('required', true);
    } else if (val === 'no') {
      $('#ticket_ref_container').addClass('hidden');
      $('#ticket_ref_container input').removeAttr('required');
    }
  });

  $('.info').on('click', function(e) {
    var target = $(this).data('target');
    if (target) {
      $(target).removeClass('hidden');
    }
  });
}

if ($('.grievances') && $('.grievances').length) {
  initGrievances();
}

var invoke = function (func) { return func(); };
var isFunction = function (func) { return typeof func === 'function'; };

var enableTimer;
var $rootElement = $('html');

var disableHover = function (_) { return $rootElement.addClass('no-hover'); };
var enableHover = function (_) { return $rootElement.removeClass('no-hover'); };

var scrollListeners = [
  function () {
    disableHover();
    clearTimeout(enableTimer);
    enableTimer = setTimeout(enableHover, 500);
  },
  onScroll
].filter(isFunction);
var resizeListeners = [onResize$1, onResize].filter(isFunction);

var addListeners = function (event, listeners) { return listeners.length && addEventListener(event, function (e) { return listeners.forEach(invoke); }); };

addListeners('scroll', scrollListeners);
addListeners('resize', resizeListeners);

resizeListeners.forEach(invoke);

var listHeight = 40;

function closeDropdown() {
  $(window).off('click', closeDropdown);
  var $btn = $('.dropdown.open')
    .removeClass('open')
    .children('.btn');
  setTimeout(function() {
    $btn.height(listHeight);
  }, 70);
}

$('.dropdown').click(function(e) {
  var this$1 = this;

  e.stopPropagation();
  var $this = $(this);
  var isOpen = $this.hasClass('open');
  if (isOpen) {
    if (e.target.nodeName === 'LI') {
      var $target = $(e.target);
      var span = $this.find('span');
      var orig = span.html();
      setTimeout(function () {
        span.html($target.html());
        $target.remove();
        $(this$1)
          .children('ul')
          .prepend(("<li>" + orig + "</li>"));
      }, 300);
    }
    closeDropdown();
  } else {
    $(window).one('click', closeDropdown);
    var numLi = $this.find('li').length;
    $this
      .addClass('open')
      .children('.btn')
      .height((numLi + 1) * listHeight + 4);
  }
});

/* Demo checkout */

function demoSuccessHandler(transaction) {
  $('#paymentID').text(transaction.razorpay_payment_id);
  var paymentDate = new Date();
  $('#paymentDate').text(
    padStart(paymentDate.getDate()) +
      '.' +
      padStart(paymentDate.getMonth() + 1) +
      '.' +
      paymentDate.getFullYear() +
      ' ' +
      padStart(paymentDate.getHours()) +
      ':' +
      padStart(paymentDate.getMinutes())
  );
  setTimeout(function() {
    open('#demo-receipt-modal');
  }, 150);
}

function padStart(str) {
  return ('0' + str).slice(-2);
}

$('.demo-btn').click(function() {
  new Razorpay({
    key: 'rzp_live_ILgsfZCZoFIKMb',
    amount: '100',
    name: 'Merchant Name',
    description: 'Order ID',
    image: '/assets/razorpay-glyph-de537882d0.svg',
    handler: demoSuccessHandler,
    theme: {
      color: '#3583D2'
    }
  }).open();
});

window.openModal = open;

// $('#banner input').focus();

function gaEventForLink(action) {
  return function(e) {
    e.preventDefault();
    // Checking for length because GA might be noop. (Not the perfect check, but this is all I can think of.)
    if (ga && ga.length) {
      ga('old.send', 'event', action, 'click');
      ga('send', 'event', action, 'click', {
        hitCallback: function() {
          window.location.href = e.target.href;
        }
      });
    } else {
      window.location.href = e.target.href;
    }
  };
}

// GA for Hiring Banner.
$('.hiring-btn').click(gaEventForLink('Click - Join the team now'));

// GA for Tech page footer CTA
$('.footer_hiring_cta').click(
  gaEventForLink('Click - Apply Now on Tech Footer')
);

}());
