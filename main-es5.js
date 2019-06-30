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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <div class=\"container\">\n    <div class=\"logos\">\n      <img id=\"logo-x2one\" src=\"../assets/x2one_logo_color.png\"> <img id=\"logo-vaad\" src=\"../assets/vaad.png\" alt=\"\">\n      <h1>ניהול מספרים</h1>\n    </div>\n    <div class=\"main\">\n      <app-manage-numbers></app-manage-numbers>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-numbers/manage-numbers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-numbers/manage-numbers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-form\">\n  <div>\n    <mat-form-field>\n      <input matInput placeholder=\"מספר טלפון\" [(ngModel)]=\"options['number']\" name=\"number\">\n    </mat-form-field>\n  </div>\n  <div class=\"checkboxes\">\n    <mat-checkbox color=\"primary\" [(ngModel)]=\"options['incoming_calls']\"> שיחות נכנסות</mat-checkbox>\n  </div>\n  <div class=\"checkboxes\">\n    <mat-checkbox color=\"primary\" [(ngModel)]=\"options['outgoing_calls']\"> </mat-checkbox>\n    <span>שיחות יוצאות</span>\n  </div>\n  <div class=\"checkboxes\">\n    <mat-checkbox color=\"primary\" [(ngModel)]=\"options['incoming_sms']\"> הודעות נכנסות</mat-checkbox>\n  </div>\n  <div class=\"checkboxes\">\n    <mat-checkbox color=\"primary\" [(ngModel)]=\"options['outgoing_sms']\"> הודעות יוצאות</mat-checkbox>\n  </div>\n  <div class=\"buttons\">\n    <button type=\"button\" (click)=\"addNumber()\" mat-stroked-button>הוספה</button>\n    <button type=\"button\" (click)=\"checkNumber()\" mat-stroked-button>בדיקת מספר</button>\n    <button type=\"button\" (click)=\"search()\" mat-stroked-button matTooltip=\"חיפוש כל החוקים למספר\"> חיפוש חוקים לפי מספר</button>\n  </div>\n</div>\n<!-- <x21-alert></x21-alert> -->\n<div class=\"data\">\n  <div *ngIf=\"data?.length\">\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"active\">\n        <th mat-header-cell *matHeaderCellDef>פעיל </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon [ngClass]=\"element.active ? 'active':'not-active'\">fiber_manual_record</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>מספר </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.number.replace(\"972\",'0')}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"incomingCalls\">\n        <th mat-header-cell *matHeaderCellDef>שיחות נכנסות </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.incoming_calls\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.incoming_calls\">not_interested</mat-icon>\n      </ng-container>\n      <ng-container matColumnDef=\"outgoingCalls\">\n        <th mat-header-cell *matHeaderCellDef>שיחות יוצאות</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.outgoing_calls\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.outgoing_calls\">not_interested</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"incomingSms\">\n        <th mat-header-cell *matHeaderCellDef> הודעות נכנסות </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.incoming_sms\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.incoming_sms\">not_interested</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"outgoingSms\">\n        <th mat-header-cell *matHeaderCellDef> הודעות יוצאות</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.outgoing_sms\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.outgoing_sms\">not_interested</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"createdAt\">\n          <th mat-header-cell *matHeaderCellDef> החל מתאריך</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.created_at | date: 'short' }}</td>\n        </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  <!-- <div class=\"history\" *ngIf=\"data?.length > 1\">\n    <h4>נתונים לא פעילים</h4>\n    <table mat-table [dataSource]=\"data | slice:1:data.length\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"active\">\n        <th mat-header-cell *matHeaderCellDef>פעיל </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon [ngClass]=\"element.active ? 'active':'not-active'\">fiber_manual_record</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>מספר </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.number}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"incomingCalls\">\n        <th mat-header-cell *matHeaderCellDef>שיחות נכנסות </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.incoming_calls\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.incoming_calls\">not_interested</mat-icon>\n      </ng-container>\n      <ng-container matColumnDef=\"outgoingCalls\">\n        <th mat-header-cell *matHeaderCellDef>שיחות יוצאות</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.outgoing_calls\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.outgoing_calls\">not_interested</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"incomingSms\">\n        <th mat-header-cell *matHeaderCellDef> הודעות נכנסות </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.incoming_sms\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.incoming_sms\">not_interested</mat-icon>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"outgoingSms\">\n        <th mat-header-cell *matHeaderCellDef> הודעות יוצאות</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon *ngIf=\"element.outgoing_sms\">done</mat-icon>\n          <mat-icon *ngIf=\"!element.outgoing_sms\">not_interested</mat-icon>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div> -->\n"

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos{\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 2;\n  text-align: center;\n  margin-top: 20px;\n}\n#logo-x2one{\n  width: 20%;\n}\n#logo-vaad{\n  width: 10%;\n}\nbody{\n  height: 100vh;\n}\n.container{\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  grid-template-rows: 240px auto;\n}\n.main{\n  grid-row-start: 2;\n  grid-row-end: 3;\n  grid-column-start: 2;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3N7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDI7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4jbG9nby14Mm9uZXtcbiAgd2lkdGg6IDIwJTtcbn1cbiNsb2dvLXZhYWR7XG4gIHdpZHRoOiAxMCU7XG59XG5ib2R5e1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNjAlIDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNDBweCBhdXRvO1xufVxuLm1haW57XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xuICBncmlkLXJvdy1lbmQ6IDM7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

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


// import { X21AuthService } from '@x2one/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'number-list';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.logged()
        console.log("HI");
    };
    AppComponent.prototype.logged = function () {
        // return this.authService.isLoggedIn
    };
    AppComponent.prototype.logout = function () {
        // this.authService.logout().subscribe(response => {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HE_LOCALIZATIONS, LOCALIZATIONS, coreConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HE_LOCALIZATIONS", function() { return HE_LOCALIZATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALIZATIONS", function() { return LOCALIZATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreConfig", function() { return coreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _manage_numbers_manage_numbers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-numbers/manage-numbers.component */ "./src/app/manage-numbers/manage-numbers.component.ts");
/* harmony import */ var _x2one_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @x2one/core */ "./node_modules/@x2one/core/fesm5/x2one-core.js");
/* harmony import */ var _x2one_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @x2one/models */ "./node_modules/@x2one/models/fesm5/x2one-models.js");
/* harmony import */ var _x2one_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @x2one/common */ "./node_modules/@x2one/common/fesm5/x2one-common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);












var X21ServiceHost = "http://0.0.0.0:3000";
var X21AuthHost = "http://0.0.0.0:3005";
var HE_LOCALIZATIONS = {
    code: "HE",
    name: "עברית",
    direction: "rtl",
    translations: {
        ":x2one.validations.errors.invalid_format": "פורמט לא חוקי",
        ":x2one.validations.errors.invalid_choice": "בחירה לא חוקית",
        ":x2one.validations.errors.required": "חובה"
    }
};
var LOCALIZATIONS = {
    defaultLanguage: "EN",
    currentLanguage: "EN",
    supportedLanguages: {
        HE: HE_LOCALIZATIONS,
    }
};
var coreConfig = {
    serviceUrl: "" + X21ServiceHost,
    localizations: LOCALIZATIONS,
    authConfig: {
        loginEndpoint: X21AuthHost + "/client/login",
        logoutEndpoint: X21AuthHost + "/client/logout",
        checkUserEndpoint: X21AuthHost + "/client/check_user",
        forgotPasswordEndpoint: X21AuthHost + "/users/forgot_password",
        resetPasswordEndpoint: X21AuthHost + "/users/reset_password",
        registerEndpoint: X21AuthHost + "/users/create_customer",
        confirmationEndpoint: X21AuthHost + "/users/confirmation",
        resendConfirmationEndpoint: X21AuthHost + "/users/resend_confirmation",
        googleSignInEndpoint: X21AuthHost + "/users/auth/google_oauth2",
        googleLogInEndpoint: X21AuthHost + "/client/google_login",
        sendLoginCodeEndpoint: X21AuthHost + "/client/send_one_time_code",
        loginWithCodeEndpoint: X21AuthHost + "/client/login_with_code"
    },
    resolverConfig: {
        resolverUri: X21ServiceHost + "/entity_service/ui"
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _manage_numbers_manage_numbers_component__WEBPACK_IMPORTED_MODULE_7__["ManageNumbersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _x2one_core__WEBPACK_IMPORTED_MODULE_8__["X21CoreModule"].forRoot(coreConfig),
                _x2one_models__WEBPACK_IMPORTED_MODULE_9__["X21ModelsModule"],
                _x2one_common__WEBPACK_IMPORTED_MODULE_10__["X21CommonModule"].forRoot({ designStyle: 1 }),
                primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/manage-numbers/manage-numbers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/manage-numbers/manage-numbers.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main-form{\n  border: 1px dotted gray;\n  padding: 30px;\n  margin: auto;\n  width: 65%;\n}\nh1{\n  margin-top: 5px;\n}\n.buttons{\n  margin-top: 50px;\n}\n.checkboxes{\n  text-align: right;\n  width: 50%;\n  margin: 10px auto;\n}\n.mat-checkbox-layout .mat-checkbox-label{\n  margin-right: 10px;\n}\n.data{\n  padding-top:50px;\n  text-align: right;\n}\n.history{\n  margin-top: 110px;\n}\n.active{\n  color: green;\n}\n.not-active{\n  color: red;\n}\ntable {\n  width: 100%;\n}\nbutton{\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLW51bWJlcnMvbWFuYWdlLW51bWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtbnVtYmVycy9tYW5hZ2UtbnVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbi1mb3Jte1xuICBib3JkZXI6IDFweCBkb3R0ZWQgZ3JheTtcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjUlO1xufVxuaDF7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5idXR0b25ze1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmNoZWNrYm94ZXN7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbi5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5kYXRhe1xuICBwYWRkaW5nLXRvcDo1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5oaXN0b3J5e1xuICBtYXJnaW4tdG9wOiAxMTBweDtcbn1cbi5hY3RpdmV7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5ub3QtYWN0aXZle1xuICBjb2xvcjogcmVkO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b257XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/manage-numbers/manage-numbers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/manage-numbers/manage-numbers.component.ts ***!
  \************************************************************/
/*! exports provided: ManageNumbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageNumbersComponent", function() { return ManageNumbersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _x2one_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @x2one/core */ "./node_modules/@x2one/core/fesm5/x2one-core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var ManageNumbersComponent = /** @class */ (function () {
    function ManageNumbersComponent(dispatcher, _snackBar) {
        this.dispatcher = dispatcher;
        this._snackBar = _snackBar;
        this.options = {};
        this.data = [];
        this.displayedColumns = ['active', 'number', 'incomingCalls', 'outgoingCalls', 'incomingSms', 'outgoingSms', 'createdAt'];
    }
    ManageNumbersComponent.prototype.ngOnInit = function () {
    };
    ManageNumbersComponent.prototype.setStatus = function (message) {
        this._snackBar.open(message, "ok", {
            duration: 3000, verticalPosition: 'top'
        });
    };
    ManageNumbersComponent.prototype.validateNumber = function () {
        if (this.options["number"] != undefined)
            return true;
        else {
            this.setStatus("לא הוכנס מספר");
        }
    };
    ManageNumbersComponent.prototype.addNumber = function () {
        var _this = this;
        if (this.validateNumber()) {
            this.dispatcher.dispatch('http://0.0.0.0:3000/api/v1/number_list/add', this.options).subscribe(function (response) {
                _this.setStatus("!המספר נוסף בהצלחה");
                _this.clear();
            }, function (error) {
                console.log(error);
                _this.setStatus("בעיה בהוספת המספר");
            });
        }
    };
    ManageNumbersComponent.prototype.clear = function () {
        this.options = {};
    };
    ManageNumbersComponent.prototype.search = function (active) {
        var _this = this;
        if (active === void 0) { active = false; }
        if (this.validateNumber()) {
            this.dispatcher.dispatch('http://0.0.0.0:3000/api/v1/number_list/get', this.options).subscribe(function (response) {
                _this.data = response.data('data');
            }, function (error) {
                console.log(error);
                _this.setStatus("בעיה בחיפוש");
            });
        }
    };
    ManageNumbersComponent.prototype.checkNumber = function () {
        var _this = this;
        if (this.validateNumber()) {
            this.dispatcher.dispatch('http://0.0.0.0:3000/api/v1/number_list/check_number', this.options).subscribe(function (response) {
                _this.data = response.data('data');
                if (_this.data.length < 1) {
                    _this.data.push({ number: _this.options["number"], active: true, outgoing_calls: true, incoming_calls: true, incoming_sms: true, outgoing_sms: true });
                }
            }, function (error) {
                console.log(error);
                _this.setStatus("בעיה בבדיקה");
            });
        }
    };
    ManageNumbersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-numbers',
            template: __webpack_require__(/*! raw-loader!./manage-numbers.component.html */ "./node_modules/raw-loader/index.js!./src/app/manage-numbers/manage-numbers.component.html"),
            styles: [__webpack_require__(/*! ./manage-numbers.component.css */ "./src/app/manage-numbers/manage-numbers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_x2one_core__WEBPACK_IMPORTED_MODULE_2__["X21ServiceDispatcherService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ManageNumbersComponent);
    return ManageNumbersComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tzvika/Code/number-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map