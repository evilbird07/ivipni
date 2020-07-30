(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privacy-policy-privacy-policy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <ion-nav color=\"primary\">\r\n      <ion-title>Privacy Policy</ion-title>\r\n  </ion-nav>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"privacy-policy\">\r\n  <ion-item no-lines text-wrap>\r\n      \"Auto Parts Recognizes the importance of maintaining your privacy.We value our relationship with you,and we appreciate the trust you show in providing information t us.Therefore,it is of utmost importance to us to explain how we collect,use,and prootect customer information.\"\r\n  </ion-item>\r\n\r\n  <ion-item no-lines text-wrap>\r\n      \"This is designed to tell you how we collect and use personal information(as defined below) so you can make an informed decision about using the Site.Please take note of this statement before using Auto Parts or submitting any personal information to us.\"\r\n  </ion-item>\r\n\r\n  <ion-item no-lines text-wrap>\r\n      \"We reserve the right to change the provisions of this Privacy Policy at any time. We will notify you of these changes by posting a revised Privacy Policy on Auto Parts and Indicating on the Privacy Policy the date it was last updated. Your use of Auto Parts and indicating on the Privacy Policy the date itwas last updated.Your use of Auto Parts following the posting of such changes or revised statement shall constitute your consent to any such changes.\"\r\n  </ion-item>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PrivacyPolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function() { return PrivacyPolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy-policy.page */ "./src/app/pages/privacy-policy/privacy-policy.page.ts");




const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
    }
];
let PrivacyPolicyPageRoutingModule = class PrivacyPolicyPageRoutingModule {
};
PrivacyPolicyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacyPolicyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.module.ts ***!
  \***************************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-policy-routing.module */ "./src/app/pages/privacy-policy/privacy-policy-routing.module.ts");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy.page */ "./src/app/pages/privacy-policy/privacy-policy.page.ts");







let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPageRoutingModule"]
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".privacy-policy {\n  background-color: WhiteSmoke;\n}\n.privacy-policy ion-item {\n  background-color: WhiteSmoke;\n  color: black;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmFjeS1wb2xpY3kvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxwcml2YWN5LXBvbGljeVxccHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaXZhY3ktcG9saWN5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi5wcml2YWN5LXBvbGljeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4ucHJpdmFjeS1wb2xpY3kgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.ts ***!
  \*************************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
};
PrivacyPolicyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-privacy-policy",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy-policy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy-policy.page.scss */ "./src/app/pages/privacy-policy/privacy-policy.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PrivacyPolicyPage);



/***/ })

}]);
//# sourceMappingURL=pages-privacy-policy-privacy-policy-module-es2015.js.map