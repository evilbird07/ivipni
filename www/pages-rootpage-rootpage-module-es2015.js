(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rootpage-rootpage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rootpage/rootpage.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rootpage/rootpage.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div padding></div>\n  <div padding></div>\n  <div padding></div>\n\n  <div padding>\n      <img src=\"../../../assets/images/rootpage/rootpage.png\" />\n  </div>\n  <br>\n\n  <div padding></div>\n  <div padding></div>\n  <div padding></div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rootpage/rootpage-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/rootpage/rootpage-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RootpagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootpagePageRoutingModule", function() { return RootpagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rootpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootpage.page */ "./src/app/pages/rootpage/rootpage.page.ts");




const routes = [
    {
        path: '',
        component: _rootpage_page__WEBPACK_IMPORTED_MODULE_3__["RootpagePage"]
    }
];
let RootpagePageRoutingModule = class RootpagePageRoutingModule {
};
RootpagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RootpagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rootpage/rootpage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/rootpage/rootpage.module.ts ***!
  \***************************************************/
/*! exports provided: RootpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootpagePageModule", function() { return RootpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rootpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootpage-routing.module */ "./src/app/pages/rootpage/rootpage-routing.module.ts");
/* harmony import */ var _rootpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rootpage.page */ "./src/app/pages/rootpage/rootpage.page.ts");







let RootpagePageModule = class RootpagePageModule {
};
RootpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rootpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["RootpagePageRoutingModule"]
        ],
        declarations: [_rootpage_page__WEBPACK_IMPORTED_MODULE_6__["RootpagePage"]]
    })
], RootpagePageModule);



/***/ }),

/***/ "./src/app/pages/rootpage/rootpage.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/rootpage/rootpage.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-rootpage div img {\n  max-height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9yb290cGFnZS9yb290cGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jvb3RwYWdlL3Jvb3RwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jvb3RwYWdlL3Jvb3RwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2Utcm9vdHBhZ2Uge1xuICAgIGRpdiBpbWcge1xuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgXG4gICAgLmNvbnRlbnQtaW9zIHtcbiAgICAgXG4gICAgfVxuICAgIC5jb250ZW50LW1kIHtcbiAgICAgXG4gICAgfVxuICB9XG4gICIsInBhZ2Utcm9vdHBhZ2UgZGl2IGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rootpage/rootpage.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rootpage/rootpage.page.ts ***!
  \*************************************************/
/*! exports provided: RootpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootpagePage", function() { return RootpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

// all clear


let RootpagePage = class RootpagePage {
    constructor(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.platform.ready().then(() => { });
    }
    ngOnInit() { }
};
RootpagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
RootpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rootpage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rootpage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rootpage/rootpage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rootpage.page.scss */ "./src/app/pages/rootpage/rootpage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], RootpagePage);



/***/ })

}]);
//# sourceMappingURL=pages-rootpage-rootpage-module-es2015.js.map