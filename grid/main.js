(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");





const routes = [
    { path: '', redirectTo: '/grid', pathMatch: 'full' },
    { path: 'grid', component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'grid';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "head"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "E\u5927\u7F51\u683C\u753B\u8868\u5DE5\u5177");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".head[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: large;\n}\n.ant-layout-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovcHJvamVjdC9ncmlkL3NyYy9tYWluL2FuZ3VsYXIvZ3JpZC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4uYW50LWxheW91dC1oZWFkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnR7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuIiwiLmhlYWQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5hbnQtbGF5b3V0LWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid/grid.module */ "./src/app/grid/grid.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] }, { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NzLayoutModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NzPageHeaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NzLayoutModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NzPageHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _grid_grid_module__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NzLayoutModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NzPageHeaderModule"],
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] }, { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.service */ "./src/app/grid/grid.service.ts");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/space */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-space.js");











const _c0 = ["basicTable"];
function GridComponent_nz_form_item_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u6BCF\u683C\u5927\u5C0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-input-number", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_16_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.gridMetas[0].perGrid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzFormatter", ctx_r0.formatterPercent)("nzParser", ctx_r0.parserPercent)("ngModel", ctx_r0.gridMetas[0].perGrid);
} }
function GridComponent_nz_divider_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "nz-divider", 19);
} }
function GridComponent_nz_form_item_36_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u5229\u6DA6\u5954\u8DD1\u5C01\u9876\u4EF7\u683C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-input-number", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_36_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return (ctx_r15.maxProfitRunPercent / 100 + 1) * (ctx_r15.currentPrice = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", (ctx_r2.maxProfitRunPercent / 100 + 1) * ctx_r2.currentPrice)("disabled", true);
} }
function GridComponent_nz_form_item_37_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " \u5229\u6DA6\u5954\u8DD1\u5C01\u9876\u6DA8\u5E45\uFF08\u767E\u5206\u6BD4\uFF09 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-input-number", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_37_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.maxProfitRunPercent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzFormatter", ctx_r3.formatterPercent)("nzParser", ctx_r3.parserPercent)("ngModel", ctx_r3.maxProfitRunPercent);
} }
function GridComponent_nz_form_item_38_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " \u7559\u5B58\u5229\u6DA6\u4EFD\u6570 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-input-number", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_38_Template_nz_input_number_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r19.leftProfitMul = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.leftProfitMul)("nzMin", 1);
} }
function GridComponent_nz_divider_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "nz-divider", 24);
} }
function GridComponent_nz_form_item_40_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u6BCF\u683C\u52A0\u7801\u6570(\u767E\u5206\u6BD4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-input-number", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_40_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r21.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r6.weight)("nzFormatter", ctx_r6.formatterPercent)("nzParser", ctx_r6.parserPercent);
} }
function GridComponent_nz_form_item_41_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u8D77\u59CB\u52A0\u7801\u683C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-input-number", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_41_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r23.weightStart = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r7.weightStart);
} }
function GridComponent_nz_divider_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "nz-divider", 27);
} }
function GridComponent_nz_form_item_43_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u4E0B\u7F51\u6570\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-control", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-input-number", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_nz_form_item_43_Template_nz_input_number_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r25.gridNum = $event; })("ngModelChange", function GridComponent_nz_form_item_43_Template_nz_input_number_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r27.gridsChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r9.gridNum);
} }
function GridComponent_div_44_nz_space_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-space", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u7F51\u683C\u540D\u79F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_div_44_nz_space_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31); const grid_r29 = ctx.$implicit; return grid_r29.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u7F51\u683C\u5927\u5C0F(\u767E\u5206\u6BD4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "nz-input-number", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_div_44_nz_space_1_Template_nz_input_number_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31); const grid_r29 = ctx.$implicit; return grid_r29.perGrid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const grid_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", grid_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", grid_r29.perGrid)("nzFormatter", ctx_r28.formatterPercent)("nzParser", ctx_r28.parserPercent);
} }
function GridComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, GridComponent_div_44_nz_space_1_Template, 13, 4, "nz-space", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r10.gridMetas);
} }
function GridComponent_nz_spin_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "nz-spin", 33);
} }
function GridComponent_nz_tab_52_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u672C\u671F\u7559\u5B58\u6570\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function GridComponent_nz_tab_52_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u7559\u5B58\u5356\u51FA\u4EF7\u683C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function GridComponent_nz_tab_52_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u672C\u671F\u7559\u5B58\u5229\u6DA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function GridComponent_nz_tab_52_tr_27_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, row_r39.leftNum));
} }
function GridComponent_nz_tab_52_tr_27_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, row_r39.leftProfitSellPrice));
} }
function GridComponent_nz_tab_52_tr_27_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, row_r39.leftProfitSum));
} }
function GridComponent_nz_tab_52_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, GridComponent_nz_tab_52_tr_27_td_21_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, GridComponent_nz_tab_52_tr_27_td_22_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, GridComponent_nz_tab_52_tr_27_td_23_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](row_r39.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 12, row_r39.buyPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 14, row_r39.buyNum));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 16, row_r39.buyPriceSum));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 18, row_r39.sellPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 20, row_r39.sellNum));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 22, row_r39.sellPriceSum));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r38.profitRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r38.profitRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r38.profitRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 24, row_r39.profit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 26, row_r39.profitPercentage));
} }
const _c1 = function () { return [50, 100, 200]; };
const _c2 = function () { return { y: "600px" }; };
function GridComponent_nz_tab_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-tab", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-table", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u4E0E\u57FA\u51C6\u6BD4\u8F83");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u4E70\u5165\u4EF7\u683C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u4E70\u5165\u6570\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u4E70\u5165\u4EF7\u683C\u5408\u8BA1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u5356\u51FA\u4EF7\u683C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\u5356\u51FA\u6570\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\u5356\u51FA\u4EF7\u683C\u5408\u8BA1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, GridComponent_nz_tab_52_th_19_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, GridComponent_nz_tab_52_th_20_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, GridComponent_nz_tab_52_th_21_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\u76C8\u5229");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\u76C8\u5229\u767E\u5206\u6BD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, GridComponent_nz_tab_52_tr_27_Template, 30, 28, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const grid_r33 = ctx.$implicit;
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzTitle", grid_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzData", grid_r33.data)("nzShowSizeChanger", true)("nzPageSize", 50)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c1))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.profitRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.profitRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.profitRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _r34.data);
} }
class GridComponent {
    constructor(gridService) {
        this.gridService = gridService;
        this.formatterPercent = (value) => `${value} %`;
        this.parserPercent = (value) => value.replace(' %', '');
        this.name = '????????????';
        this.currentPrice = 0.455;
        this.gridMetas = [{
                name: '%5??????',
                perGrid: 5
            }];
        this.maxGridPrice = 0.600;
        this.maxLoss = 40;
        this.buyAmount = 10000;
        this.loading = false;
        // ????????????
        this.profitRun = false;
        this.maxProfitRunPercent = 40;
        this.leftProfitMul = 1;
        // ????????????
        this.weightMore = false;
        this.weight = 5;
        this.weightStart = 1;
        // ????????????
        this.allInOneGo = false;
        this.gridNum = 1;
        this.grids = [];
    }
    ngOnInit() {
    }
    calc() {
        this.loading = true;
        this.grids = this.gridMetas.map(gridMeta => {
            const grid = this.gridService.genGrid({
                currentPrice: this.currentPrice,
                maxGridPrice: this.maxGridPrice,
                perGrid: gridMeta.perGrid,
                maxLoss: this.maxLoss,
                buyAmount: this.buyAmount,
                profitRun: this.profitRun,
                weightMore: this.weightMore,
                weight: this.weight,
                weightStart: this.weightStart,
                allInOneGo: this.allInOneGo,
                maxProfitRunPercent: this.maxProfitRunPercent,
                leftProfitMul: this.leftProfitMul,
            });
            return {
                name: gridMeta.name,
                data: grid
            };
        });
        this.loading = false;
    }
    exportToExcel() {
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        this.grids.forEach(grid => {
            const rowData = this.getExcelRowData(grid.data);
            const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(rowData);
            // ??????????????? ??????https://github.com/rockboom/SheetJS-docs-zh-CN??? ????????????????????? ??????
            Object.keys(ws).forEach(key => {
                // ????????????????????????????????????
                if (!/^[A-Z]+1$|^!.*$/.test(key)) {
                    ws[key].z = '0.00';
                }
            });
            // ??????????????????
            const col = { width: 20 };
            const allCols = [];
            for (let i = 0; i < Object.keys(rowData[0]).length; i++) {
                allCols.push(col);
            }
            ws['!cols'] = allCols;
            xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, grid.name);
        });
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, `${this.name}.xlsx`);
    }
    getExcelRowData(data) {
        return data.map(value => {
            const res = {};
            res['???????????????'] = value.level;
            res['????????????'] = value.buyPrice;
            res['????????????'] = value.buyNum;
            res['??????????????????'] = value.buyPriceSum;
            res['????????????'] = value.sellPrice;
            res['????????????'] = value.sellNum;
            res['??????????????????'] = value.sellPriceSum;
            if (this.profitRun) {
                res['??????????????????'] = value.leftNum;
                res['??????????????????'] = value.leftProfitSellPrice;
                res['??????????????????'] = value.leftProfitSum;
            }
            res['??????'] = value.profit;
            res['???????????????'] = value.profitPercentage;
            return res;
        });
    }
    gridsChange() {
        if (this.gridNum > this.gridMetas.length) {
            const addNum = this.gridNum - this.gridMetas.length;
            for (let i = 0; i < addNum; i++) {
                this.gridMetas.push(this.genOneGridMeta(this.gridMetas.length + 1));
            }
        }
        else if (this.gridNum < this.gridMetas.length) {
            this.gridMetas = this.gridMetas.splice(0, this.gridNum);
        }
    }
    genOneGridMeta(index) {
        return {
            name: `??????${index}`,
            perGrid: 5
        };
    }
}
GridComponent.??fac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_grid_service__WEBPACK_IMPORTED_MODULE_2__["GridService"])); };
GridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GridComponent, selectors: [["grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.basicTable = _t.first);
    } }, decls: 53, vars: 23, consts: [[1, "form"], ["nzSpan", "8"], ["nzSpan", "4"], ["nz-input", "", "name", "name", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "nzFormatter", "nzParser", "ngModel", "ngModelChange"], ["nzText", "\u7F51\u683C2.0\u5BF9\u5E94\u5F00\u5173", 1, "divider"], [1, "checkbox"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["class", "divider", "nzText", "\u5229\u6DA6\u5954\u8DD1\u914D\u7F6E", 4, "ngIf"], ["class", "divider", "nzText", "\u9010\u5C42\u52A0\u7801\u914D\u7F6E", 4, "ngIf"], ["class", "divider", "nzText", "\u4E00\u7F51\u6253\u5C3D\u914D\u7F6E", 4, "ngIf"], ["class", "all-in-one-go", 4, "ngIf"], [1, "buttons"], ["nz-button", "", "nzType", "primary", 1, "button", 3, "click"], ["class", "spin", "nzSimple", "", 4, "ngIf"], [1, "grid"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["nzText", "\u5229\u6DA6\u5954\u8DD1\u914D\u7F6E", 1, "divider"], [3, "ngModel", "disabled", "ngModelChange"], ["nz-tooltip", "", "nzTooltipTitle", "\u7559\u5B58\u591A\u4EFD\u5229\u6DA6\u65F6\u586B\u5199\uFF0C\u4E0D\u5199\u9ED8\u8BA4\u4E3A1", 1, "tips"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline"], [3, "ngModel", "nzMin", "ngModelChange"], ["nzText", "\u9010\u5C42\u52A0\u7801\u914D\u7F6E", 1, "divider"], [3, "ngModel", "nzFormatter", "nzParser", "ngModelChange"], ["nzMin", "1", 3, "ngModel", "ngModelChange"], ["nzText", "\u4E00\u7F51\u6253\u5C3D\u914D\u7F6E", 1, "divider"], [1, "all-in-one-go"], ["class", "all-in-one-go-item", 4, "ngFor", "ngForOf"], [1, "all-in-one-go-item"], ["nz-input", "", 3, "ngModel", "ngModelChange"], ["nzMin", "1", 3, "ngModel", "nzFormatter", "nzParser", "ngModelChange"], ["nzSimple", "", 1, "spin"], [3, "nzTitle"], [1, "table", 3, "nzData", "nzShowSizeChanger", "nzPageSize", "nzPageSizeOptions", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u54C1\u79CD\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u5F53\u524D\u4EF7\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "nz-input-number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_nz_input_number_ngModelChange_10_listener($event) { return ctx.currentPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\u7F51\u683C\u4E70\u5165\u5C01\u9876\u4EF7\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "nz-input-number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_nz_input_number_ngModelChange_15_listener($event) { return ctx.maxGridPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, GridComponent_nz_form_item_16_Template, 5, 3, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\u9884\u8BA1\u81EA\u5F53\u524D\u4EF7\u683C\u7684\u6700\u5927\u8DCC\u5E45\uFF08\u767E\u5206\u6BD4\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nz-input-number", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_nz_input_number_ngModelChange_21_listener($event) { return ctx.maxLoss = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\u6BCF\u7B14\u4EA4\u6613\u91D1\u989D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nz-input-number", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_nz_input_number_ngModelChange_26_listener($event) { return ctx.buyAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "nz-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_label_ngModelChange_29_listener($event) { return ctx.profitRun = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\u5229\u6DA6\u5954\u8DD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_label_ngModelChange_31_listener($event) { return ctx.weightMore = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\u9010\u5C42\u52A0\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function GridComponent_Template_label_ngModelChange_33_listener($event) { return ctx.allInOneGo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\u4E00\u7F51\u6253\u5C3D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, GridComponent_nz_divider_35_Template, 1, 0, "nz-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, GridComponent_nz_form_item_36_Template, 5, 2, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, GridComponent_nz_form_item_37_Template, 5, 3, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, GridComponent_nz_form_item_38_Template, 7, 2, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, GridComponent_nz_divider_39_Template, 1, 0, "nz-divider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, GridComponent_nz_form_item_40_Template, 5, 3, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, GridComponent_nz_form_item_41_Template, 5, 1, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, GridComponent_nz_divider_42_Template, 1, 0, "nz-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, GridComponent_nz_form_item_43_Template, 5, 1, "nz-form-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, GridComponent_div_44_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridComponent_Template_button_click_46_listener() { return ctx.calc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\u70B9\u51FB\u8BA1\u7B97");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GridComponent_Template_button_click_48_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\u5BFC\u51FA\u81F3exlce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, GridComponent_nz_spin_50_Template, 1, 0, "nz-spin", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "nz-tabset", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, GridComponent_nz_tab_52_Template, 28, 12, "nz-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.currentPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.maxGridPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.allInOneGo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzFormatter", ctx.formatterPercent)("nzParser", ctx.parserPercent)("ngModel", ctx.maxLoss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.buyAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.profitRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.weightMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.allInOneGo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profitRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profitRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profitRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profitRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.weightMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.weightMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.weightMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.allInOneGo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.allInOneGo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.allInOneGo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.grids);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputNumberComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDividerComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzCheckboxComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["??NzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTooltipDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceItemComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSpinComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTabComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTbodyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: [".form[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  width: 60%;\n  text-align: center;\n}\n.ant-input-number[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.tips[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n.spin[_ngcontent-%COMP%] {\n  margin-left: 43%;\n  height: 30px;\n  margin-top: 30px;\n}\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: -17.5%;\n  margin-bottom: 10px;\n}\n.button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.divider[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n.checkbox[_ngcontent-%COMP%] {\n  margin-left: -20%;\n  margin-bottom: 24px;\n}\n.table[_ngcontent-%COMP%] {\n  clear: left;\n}\n.grid[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  margin-right: 150px;\n}\n.all-in-one-go[_ngcontent-%COMP%] {\n  margin-left: -20%;\n}\n.all-in-one-go-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9EOi9wcm9qZWN0L2dyaWQvc3JjL21haW4vYW5ndWxhci9ncmlkL3NyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0E7RUFDRSxzQkFBQTtBQ0NGO0FEQ0E7RUFDRSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7QUNGRjtBRElBO0VBQ0UsaUJBQUE7QUNGRjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRE9BO0VBQ0UsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFudC1pbnB1dC1udW1iZXJ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4udGlwc3tcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNwaW57XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJ1dHRvbnN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0xNy41JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbntcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uZGl2aWRlcntcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG59XG4uY2hlY2tib3h7XG4gIG1hcmdpbi1sZWZ0OiAtMjAlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4udGFibGV7XG4gIGNsZWFyOiBsZWZ0O1xufVxuXG4uZ3JpZHtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xufVxuXG4uYWxsLWluLW9uZS1nb3tcbiAgbWFyZ2luLWxlZnQ6IC0yMCU7XG59XG5cbi5hbGwtaW4tb25lLWdvLWl0ZW17XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuIiwiLmZvcm0ge1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB3aWR0aDogNjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYW50LWlucHV0LW51bWJlciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4udGlwcyB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uc3BpbiB7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTE3LjUlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmRpdmlkZXIge1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbn1cbi5jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjAlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnRhYmxlIHtcbiAgY2xlYXI6IGxlZnQ7XG59XG4uZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbn1cbi5hbGwtaW4tb25lLWdvIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMCU7XG59XG4uYWxsLWluLW9uZS1nby1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './grid.component.html',
                selector: 'grid',
                styleUrls: ['./grid.component.less']
            }]
    }], function () { return [{ type: _grid_service__WEBPACK_IMPORTED_MODULE_2__["GridService"] }]; }, { basicTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basicTable', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/grid/grid.module.ts":
/*!*************************************!*\
  !*** ./src/app/grid/grid.module.ts ***!
  \*************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/space */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-space.js");







const COMPONENTS = [_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]];
class GridModule {
}
GridModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: GridModule });
GridModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputNumberModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzToolTipModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzSpinModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzCheckboxModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDividerModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](GridModule, { declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]], imports: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputNumberModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzToolTipModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzSpinModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzCheckboxModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDividerModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzFormModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputNumberModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzToolTipModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzSpinModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzCheckboxModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDividerModule"],
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_5__["NzSpaceModule"],
                ],
                declarations: [...COMPONENTS]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/grid/grid.service.ts":
/*!**************************************!*\
  !*** ./src/app/grid/grid.service.ts ***!
  \**************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class GridService {
    constructor() {
    }
    genGrid(gridConfig) {
        let res = [];
        // res.push(...this.genPricesGtCurrentPrice(gridConfig));
        res.push(...this.genPricesLteCurrentPrice(gridConfig));
        res.sort((o1, o2) => o1.level - o2.level);
        if (gridConfig.profitRun) {
            res = res.map(grid => this.profitRun(grid, gridConfig));
        }
        res.push(this.genSum(res));
        return res;
    }
    /**
     * ???????????????????????????????????????
     *
     * @return
     */
    genPricesLteCurrentPrice(gridConfig) {
        const gridModels = [];
        const grids = gridConfig.maxLoss / gridConfig.perGrid;
        for (let i = 0; i < grids; i++) {
            const gridBuyLevel = 1.0 - gridConfig.perGrid * i / 100;
            const gridSellLevel = 1.0 - gridConfig.perGrid * (i - 1) / 100;
            const buyPrice = gridConfig.currentPrice * gridBuyLevel;
            const sellPrice = gridConfig.currentPrice * gridSellLevel;
            gridModels.push(this.createOneGrid(buyPrice, sellPrice, gridBuyLevel, gridConfig));
        }
        gridModels[0].benchmark = true;
        return gridModels;
    }
    /**
     * ???????????????
     *
     * @param gridModels
     * @return
     */
    genSum(gridModels) {
        const gridModel = {
            level: '??????',
            buyNum: gridModels.map(model => model.buyNum).reduce(((previousValue, currentValue) => previousValue + currentValue)),
            buyPriceSum: gridModels.map(model => model.buyPriceSum).reduce(((previousValue, currentValue) => previousValue + currentValue)),
            sellPriceSum: gridModels.map(model => model.sellPriceSum).reduce(((previousValue, currentValue) => previousValue + currentValue)),
            sellNum: gridModels.map(model => model.sellNum).reduce(((previousValue, currentValue) => previousValue + currentValue)),
            profit: gridModels.map(model => model.profit).reduce(((previousValue, currentValue) => previousValue + currentValue)),
            leftProfitSum: gridModels.map(model => model.leftProfitSum).reduce(((previousValue, currentValue) => previousValue + currentValue)),
        };
        gridModel.profitPercentage = gridModel.profit / gridModel.buyPriceSum * 100;
        return gridModel;
    }
    profitRun(_a, gridConfig) {
        var grid = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
        const leftNum = this.calLeftProfitNum(grid.buyPrice, grid.sellPrice, gridConfig, grid.buyNum);
        grid.leftNum = leftNum;
        grid.sellNum = grid.buyNum - leftNum;
        grid.sellPriceSum = grid.sellPrice * grid.sellNum;
        grid.leftProfitSellPrice = this.calLeftProfitSellPrice(grid.sellPrice, gridConfig);
        grid.leftProfitSum = grid.leftNum * grid.leftProfitSellPrice;
        grid.profit = leftNum * grid.leftProfitSellPrice + grid.sellPrice * grid.sellNum - grid.buyPriceSum;
        grid.profitPercentage = grid.profit / grid.buyPriceSum * 100;
        return grid;
    }
    /**
     * ???????????????
     * @return
     */
    calLeftProfitNum(buyPrice, sellPrice, gridConfig, buyNum) {
        const spread = sellPrice - buyPrice;
        const profit = spread * buyNum;
        const shouldLeftNum = parseInt((profit / sellPrice).toFixed(0), 10) * gridConfig.leftProfitMul;
        return this.calForChs(shouldLeftNum);
    }
    /**
     * ?????????????????????????????????
     */
    calLeftProfitSellPrice(sellPrice, gridConfig) {
        return gridConfig.currentPrice * (100 + gridConfig.maxProfitRunPercent) / 100;
    }
    createOneGrid(buyPrice, sellPrice, buyLevel, gridConfig) {
        const buyNum = this.genBuyNum(buyLevel, buyPrice, gridConfig);
        const gridModel = {
            level: buyLevel,
            buyPrice,
            buyNum,
            buyPriceSum: buyPrice * buyNum,
            sellPrice,
            sellNum: buyNum,
            sellPriceSum: buyNum * sellPrice,
        };
        gridModel.profit = gridModel.sellPriceSum - gridModel.buyPriceSum;
        // gridModel.profitPercentage = (gridModel.profit / (gridModel.buyNum * gridConfig.currentPrice)) * 100;
        return gridModel;
    }
    genBuyNum(buyLevel, buyPrice, gridConfig) {
        let buyNum = Math.floor(gridConfig.buyAmount / buyPrice);
        if (gridConfig.weightMore) {
            const currentLevel = Math.floor((100 - buyLevel * 100) / gridConfig.perGrid);
            if (currentLevel >= gridConfig.weightStart) {
                const extraBuyNum = Math.floor(buyNum * (currentLevel - gridConfig.weightStart + 1) * gridConfig.weight / 100);
                buyNum += extraBuyNum;
            }
        }
        return this.calForChs(buyNum);
    }
    // A????????????????????????100????????????????????????????????????
    calForChs(num) {
        return parseInt(String(num / 100), 10) * 100;
    }
}
GridService.??fac = function GridService_Factory(t) { return new (t || GridService)(); };
GridService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: GridService, factory: GridService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](GridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\grid\src\main\angular\grid\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map