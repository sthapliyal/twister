(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center\"> -->\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<div style=\"display:flex\">\n\n  <span>\n    <chart [options]=\"options\"></chart>\n  </span>\n  <span>\n    <app-tweet></app-tweet>\n  </span>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  height: 97vh;\n  width: 700px; }\n\n.example-item {\n  background-color: #F7F7F7;\n  margin: 6px;\n  border-radius: 4px;\n  box-shadow: 2px 3px 1px 0px grey; }\n\n.img-icon {\n  float: left;\n  width: 2rem; }\n\n.header {\n  margin: 0px;\n  padding: 5px; }\n\n.tweet {\n  margin: 2px;\n  padding: 5px;\n  word-break: break-word; }\n\n.user {\n  margin-left: 35px; }\n\n.user > div {\n  color: grey;\n  font-size: 12px; }\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzdXJlc2hcXERvY3VtZW50c1xcYW5ndWxhcjItcHJvamVjdFxcdHdpc3Rlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGlDQUFnQyxFQUNqQzs7QUFDSDtFQUNJLFlBQVc7RUFDWCxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxXQUFVO0VBQUcsNEJBQTRCO0VBQ3pDLHdCQUF1QjtFQUFHLDZDQUE2QyxFQUMxRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogOTd2aDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDFweCAwcHggZ3JleTtcclxuICB9XHJcbi5pbWctaWNvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50d2VldCB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLnVzZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuLnVzZXI+ZGl2IHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgIC8qIHJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgLyogb3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'twistere';
        this.options = {
            chart: {
                type: 'column'
            },
            title: { text: 'simple chart' },
            xAxis: {
                categories: ['Mon', 'Tues', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun']
            },
            series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 34, 56, 70],
                }]
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}()); // end of file.



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jsonSchemaFormModuleForRoot, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonSchemaFormModuleForRoot", function() { return jsonSchemaFormModuleForRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-highcharts */ "./node_modules/angular2-highcharts/index.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tweet/tweet.component */ "./src/app/tweet/tweet.component.ts");
/* harmony import */ var _dynamic_tweet_dynamic_tweet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-tweet/dynamic-tweet.component */ "./src/app/dynamic-tweet/dynamic-tweet.component.ts");
/* harmony import */ var _tweet_directive_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tweet-directive.directive */ "./src/app/tweet-directive.directive.ts");












var jsonSchemaFormModuleForRoot = angular2_highcharts__WEBPACK_IMPORTED_MODULE_7__["ChartModule"].forRoot(__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js"));
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_9__["TweetComponent"],
                _dynamic_tweet_dynamic_tweet_component__WEBPACK_IMPORTED_MODULE_10__["DynamicTweetComponent"],
                _tweet_directive_directive__WEBPACK_IMPORTED_MODULE_11__["TweetDirectiveDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                jsonSchemaFormModuleForRoot,
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatchModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]
            ],
            providers: [],
            entryComponents: [_dynamic_tweet_dynamic_tweet_component__WEBPACK_IMPORTED_MODULE_10__["DynamicTweetComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dynamic-tweet/dynamic-tweet.component.html":
/*!************************************************************!*\
  !*** ./src/app/dynamic-tweet/dynamic-tweet.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"header\">\n    <img src = \"./assets/images/download.png\" class =\"img-icon\">\n   <div class=\"user\">{{data.name}}<div>{{data.twitHandle}}</div>\n   </div>\n </div>\n <div class=\"tweet\">{{data.msg}}</div>\n"

/***/ }),

/***/ "./src/app/dynamic-tweet/dynamic-tweet.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dynamic-tweet/dynamic-tweet.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-icon {\n  float: left;\n  width: 2rem; }\n\n.header {\n  margin: 0px;\n  padding: 5px; }\n\n.tweet {\n  margin: 2px;\n  padding: 5px;\n  word-break: break-word; }\n\n.user {\n  margin-left: 35px; }\n\n.user > div {\n  color: grey;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy10d2VldC9DOlxcVXNlcnNcXHN1cmVzaFxcRG9jdW1lbnRzXFxhbmd1bGFyMi1wcm9qZWN0XFx0d2lzdGVyL3NyY1xcYXBwXFxkeW5hbWljLXR3ZWV0XFxkeW5hbWljLXR3ZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLFlBQVcsRUFDZDs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtdHdlZXQvZHluYW1pYy10d2VldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctaWNvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50d2VldCB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLnVzZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuLnVzZXI+ZGl2IHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dynamic-tweet/dynamic-tweet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-tweet/dynamic-tweet.component.ts ***!
  \**********************************************************/
/*! exports provided: DynamicTweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTweetComponent", function() { return DynamicTweetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DynamicTweetComponent = /** @class */ (function () {
    function DynamicTweetComponent() {
    }
    DynamicTweetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicTweetComponent.prototype, "data", void 0);
    DynamicTweetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dynamic-tweet.component.html */ "./src/app/dynamic-tweet/dynamic-tweet.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-tweet.component.scss */ "./src/app/dynamic-tweet/dynamic-tweet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicTweetComponent);
    return DynamicTweetComponent;
}());



/***/ }),

/***/ "./src/app/tweet-directive.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/tweet-directive.directive.ts ***!
  \**********************************************/
/*! exports provided: TweetDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetDirectiveDirective", function() { return TweetDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamic_tweet_dynamic_tweet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-tweet/dynamic-tweet.component */ "./src/app/dynamic-tweet/dynamic-tweet.component.ts");



var TweetDirectiveDirective = /** @class */ (function () {
    function TweetDirectiveDirective(viewContainerRef, componentFactoryResolver) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Object.defineProperty(TweetDirectiveDirective.prototype, "Item", {
        set: function (item) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dynamic_tweet_dynamic_tweet_component__WEBPACK_IMPORTED_MODULE_2__["DynamicTweetComponent"]);
            var viewContainerRef = this.viewContainerRef;
            viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = item;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTweetDirective'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TweetDirectiveDirective.prototype, "Item", null);
    TweetDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTweetDirective]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], TweetDirectiveDirective);
    return TweetDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/tweet/tweet.component.html":
/*!********************************************!*\
  !*** ./src/app/tweet/tweet.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item \">\n    <ng-template [appTweetDirective]=\"item\"></ng-template>\n  </div>\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./src/app/tweet/tweet.component.scss":
/*!********************************************!*\
  !*** ./src/app/tweet/tweet.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  height: 97vh;\n  width: 700px; }\n\n.example-item {\n  background-color: #F7F7F7;\n  margin: 6px;\n  border-radius: 4px;\n  box-shadow: 2px 3px 1px 0px grey; }\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* remove scrollbar space */\n  background: transparent;\n  /* optional: just make scrollbar invisible */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQvQzpcXFVzZXJzXFxzdXJlc2hcXERvY3VtZW50c1xcYW5ndWxhcjItcHJvamVjdFxcdHdpc3Rlci9zcmNcXGFwcFxcdHdlZXRcXHR3ZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGlDQUFnQyxFQUNqQzs7QUFFRDtFQUNFLFdBQVU7RUFBRyw0QkFBNEI7RUFDekMsd0JBQXVCO0VBQUcsNkNBQTZDLEVBQzFFIiwiZmlsZSI6InNyYy9hcHAvdHdlZXQvdHdlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDk3dmg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCAxcHggMHB4IGdyZXk7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwcHg7ICAvKiByZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIC8qIG9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tweet/tweet.component.ts":
/*!******************************************!*\
  !*** ./src/app/tweet/tweet.component.ts ***!
  \******************************************/
/*! exports provided: TweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetComponent", function() { return TweetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TweetComponent = /** @class */ (function () {
    function TweetComponent() {
    }
    TweetComponent.prototype.ngOnInit = function () {
        this.items = Array
            .from({ length: 100000 })
            .map(function (e, i) {
            var obj = {};
            obj['name'] = "user #" + i,
                obj['twitHandle'] = "user#" + i + "@twitter.com";
            obj['msg'] = "The quick brown fox jumps over a lazy dog. #" + i;
            return obj;
        });
    };
    TweetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tweet',
            template: __webpack_require__(/*! ./tweet.component.html */ "./src/app/tweet/tweet.component.html"),
            styles: [__webpack_require__(/*! ./tweet.component.scss */ "./src/app/tweet/tweet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TweetComponent);
    return TweetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\suresh\Documents\angular2-project\twister\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map