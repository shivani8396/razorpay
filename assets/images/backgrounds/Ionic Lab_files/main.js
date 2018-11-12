webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openDashboard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Library/WebServer/Documents/logicly-mobile-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title float-left padding-left>\n      <button ion-button icon-end class="btn-back" float-left>\n        <ion-icon name="md-arrow-round-back" class="icon"></ion-icon>\n        Back\n      </button>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false">\n  \n  <div class="container">\n    <div class="login-header">\n      <img src="assets/imgs/logo.png" alt="" class="logo">\n      <h1 class="title">Logicly</h1> \n    </div>\n    \n    <div class="login-body">\n      <h5 class="text-signin text-secondary">Sign in to Logicly</h5>\n      <p class="subtext">Enter your Email and Password.</p>\n      <ion-list class="login-credentials">\n        <ion-item class="input-box">\n          <ion-input type="text" placeholder="Username" class="login-input"></ion-input>\n        </ion-item>\n        \n        <ion-item class="input-box">\n          <ion-input type="password" placeholder="Password" class="login-input"></ion-input>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n    <div class="login-footer" text-center>\n      <button ion-button block class="btn-cta btn-bg-primary" (click)= "openDashboard()">Login</button>\n      <!-- <p class="text-secondary div-text">- or -</p>\n        <button ion-button block class="btn-cta btn-bg-secondary">Create an account</button>\n        <div class="pt--15"><a class="text-link forgot-text">Forgot Password?</a></div> -->\n      </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Library/WebServer/Documents/logicly-mobile-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_screen_chat_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_notification_notification__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    DashboardPage.prototype.openNotificationModal = function (notif) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_modals_notification_notification__["a" /* NotificationModal */], { notification: notif });
        modal.present();
    };
    DashboardPage.prototype.openChatScreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_screen_chat_screen__["a" /* ChatScreenPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Library/WebServer/Documents/logicly-mobile-app/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="left">\n      <img src="assets/imgs/logo.png" alt="logo" class="logo">\n      <ion-title text-left>Logicly</ion-title>\n    </div>\n    \n    <div class="right" (click)="openNotificationModal()">\n      <ion-icon name="notifications" class="icon">\n        <span class="badge-bg"><ion-badge item-end class="badge">26</ion-badge></span>\n      </ion-icon>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n    \n    <!-- <ion-list-header class="title">Today</ion-list-header> -->\n    \n    <ion-item (click)="openChatScreen()">\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n  </ion-list>\n  \n  <ion-list>\n    \n    <!-- <ion-list-header class="title">Yesterday</ion-list-header> -->\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item>\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/logicly-mobile-app/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modals_fullscreen_image_image__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatScreenPage = /** @class */ (function () {
    function ChatScreenPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ChatScreenPage.prototype.openImageModal = function (source) {
        console.log('Working');
        console.log('full screen image');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_modals_fullscreen_image_image__["a" /* ImageModal */], { source: source });
        modal.present();
    };
    ChatScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-screen',template:/*ion-inline-start:"/Library/WebServer/Documents/logicly-mobile-app/src/pages/chat-screen/chat-screen.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-item>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC</h2>\n        <span class="phone">(619) 332-0471</span>\n      </div>\n      \n      <div class="sidebar">\n        <div class="icon-right">\n          <ion-icon class="icon" ios="ios-information-circle" md="md-information-circle"></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="card-sec sender">\n    <p class="date left">Wednesday, October 30th 2018</p>\n    <ion-card class="card-chat send">\n      \n      <ion-card-content class="message-box">\n        <div class="left">\n          <div class="message">Hi there! How are you?</div>\n          <div class="time-stamp" float-left>13:26 PM</div>\n        </div>\n        <div class="right">\n          <ion-icon name="md-checkmark" class="icon send"></ion-icon>\n        </div>\n      </ion-card-content>\n      \n    </ion-card>\n  </div>\n  \n  <div class="card-sec reciever">\n    <p class="date right">Wednesday, October 30th 2018</p>\n    <ion-card class="card-chat recieve">\n      \n      <ion-card-content class="message-box">\n        <div class="left">\n          <div class="message"> Hi there! I am good. What about you?</div>\n          <div class="time-stamp" float-left>13:28 PM</div>\n        </div>\n        <div class="right">\n          <ion-icon name="md-checkmark" class="icon"></ion-icon>\n        </div>\n      </ion-card-content>\n      \n    </ion-card>\n  </div>\n  \n  <div class="card-sec sender">\n    <p class="date">Wednesday, October 30th 2018</p>\n    <ion-card class="card-chat send">\n      <img src="https://placekitten.com/640/360" class="message-img" (click)="openImageModal(\'https://placekitten.com/640/360\')"/>\n      <ion-card-content class="message-box">\n        <div class="left">\n          <div class="time-stamp" float-left>13:26 PM</div>\n        </div>\n        <div class="right">\n          <ion-icon name="md-checkmark" class="icon send"></ion-icon>\n        </div>\n      </ion-card-content>\n      \n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer class="footer-send">\n  <label class="item-input-wrapper">\n    <input type="text" placeholder="Type your message here ..." />\n  </label>\n  <button ion-button icon-start class="footer-button link-btn">\n    <ion-icon name="link" class="footer-icon"></ion-icon>\n  </button>\n  <button ion-button icon-start class="footer-button img-btn">\n    <ion-icon name="image" class="footer-icon"></ion-icon>\n  </button>\n  <button ion-button class="send-btn">\n    Send\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Library/WebServer/Documents/logicly-mobile-app/src/pages/chat-screen/chat-screen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ChatScreenPage);
    return ChatScreenPage;
}());

//# sourceMappingURL=chat-screen.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageModal = /** @class */ (function () {
    function ImageModal(navCtrl, platform, params, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.source = params.get('source');
        console.log(this.source);
    }
    ImageModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ImageModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-image',template:/*ion-inline-start:"/Library/WebServer/Documents/logicly-mobile-app/src/components/modals/fullscreen-image/image.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Chat Media with \'Test Remote PC\'\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios" class="cancel-text">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows" class="text-white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="media">\n    <img [src]="source" alt="image" class="image">\n    <div class="footer">\n      <button ion-button icon-start class="download-btn">\n        <ion-icon name="md-download"></ion-icon>\n        Download\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/logicly-mobile-app/src/components/modals/fullscreen-image/image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ImageModal);
    return ImageModal;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationModal = /** @class */ (function () {
    function NotificationModal(navCtrl, platform, params, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.notif = params.get('notif');
    }
    NotificationModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NotificationModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Library/WebServer/Documents/logicly-mobile-app/src/components/modals/notification/notification.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios" class="cancel-text">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows" class="text-white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n    \n    <ion-list-header class="title">jake@xc159.com</ion-list-header>\n    \n    <ion-item (click)="openChatScreen()">\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n    <ion-item (click)="openChatScreen()">\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n      <div class="sidebar">\n        <div class="badge-div"><ion-badge class="badge" item-end>26</ion-badge></div>\n      </div>\n    </ion-item>\n    \n  </ion-list>\n  \n  <ion-list>\n    \n    <ion-list-header class="title">jake@logicly.io</ion-list-header>\n    \n    <ion-item (click)="openChatScreen()">\n      <div class="header">\n        <ion-avatar item-start class="icon-bg">\n          <ion-icon name="ios-chatbubbles" class="icon"></ion-icon>\n        </ion-avatar>\n      </div>\n      \n      <div class="body">\n        <div class="row">\n          <h2 class="name">Test Remote PC <span class="phone">(619) 332-0471</span></h2>\n        </div>\n        \n        <p class="message"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>\n      </div>\n      \n    </ion-item>\n    \n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/logicly-mobile-app/src/components/modals/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], NotificationModal);
    return NotificationModal;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_screen_chat_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_modals_fullscreen_image_image__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_modals_notification_notification__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chat_screen_chat_screen__["a" /* ChatScreenPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_modals_fullscreen_image_image__["a" /* ImageModal */],
                __WEBPACK_IMPORTED_MODULE_10__components_modals_notification_notification__["a" /* NotificationModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chat_screen_chat_screen__["a" /* ChatScreenPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_modals_fullscreen_image_image__["a" /* ImageModal */],
                __WEBPACK_IMPORTED_MODULE_10__components_modals_notification_notification__["a" /* NotificationModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.hide();
            // splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Library/WebServer/Documents/logicly-mobile-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Library/WebServer/Documents/logicly-mobile-app/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map