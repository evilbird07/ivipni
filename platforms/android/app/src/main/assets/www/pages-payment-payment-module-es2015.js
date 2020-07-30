(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payment Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div *ngIf=\"paymenttype\">\n      <ion-list radio-group [(ngModel)]=\"paymentMethods\" ngDefaultControl>\n        <ion-item>\n          <ion-label>Online Payment <b>(₹{{totalamount}})</b>\n            <p><small>(Incl 2% extra)</small></p>\n          </ion-label>\n          <ion-radio value=\"Online Payment\" (click)=\"onlinepay()\"></ion-radio>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label>Bank Transfer <b>(₹{{onlineamount}})</b>\n            <p><small>(NEFT/RTGS/IMPS)</small></p>\n          </ion-label>\n          <ion-radio value=\"Bank Transfer\" (click)=\"change()\"></ion-radio>\n        </ion-item> -->\n\n        <ion-item>\n          <ion-label>COD <b>(₹{{totalamount}})</b>\n            <p><small>(Incl 2% extra)</small></p>\n          </ion-label>\n          <ion-radio value=\"COD\" (click)=\"placeOrderforCod()\"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-card>\n  <ion-card class=\"ion-card\" *ngIf=\"paymentmodeltype\">\n    <ion-item>\n      <ion-label color=\"primary\">Select Bank</ion-label>\n      <ion-select [interfaceOptions]=\"selectOptions\" (ionChange)=\"optionsFn($event);\">\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of bankdata\">\n          <span>{{item.bank_name}}</span>\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n  <ion-card class=\"ion-card\">\n    <div *ngIf=\"paymentmodeltype\">\n      <ion-item>\n        <ion-label>\n          <h2><b>Bank Transaction Details</b></h2>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"paymentpageionlabel\"><b>Date :</b> </ion-label>\n        <ion-label class=\"paymentamount\">\n          <!-- TODO please do fix it bug  -->\n          <!-- <span [(value)]=\"localDate\" [max]=\"datetoday\" clear class=\"ScheduleDate\"> -->\n          <span>{{localDate | date: 'dd/MM/yyyy'}}\n            <ion-icon name=\"clipboard\" item-left></ion-icon>\n          </span>\n          <!-- </span> -->\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label><b>Amount :</b> </ion-label>\n        <ion-label class=\"paymentamount\"><b>{{onlineamount | currency:'INR':true}}</b></ion-label>\n      </ion-item>\n      <ion-item [(ngModel)]=\"twentyfivetransaction_id\" ngDefaultControl>\n        <ion-label class=\"paymenttransaction\"><b>Transaction Id:</b>\n        </ion-label>\n        <ion-input class=\"textboox\" type=\"text\" placeholder=\"XXXXXXXXX\" onfocus=\"this.placeholder = ''\"\n          onblur=\"this.placeholder = 'XXXXXXXXXX'\"></ion-input>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"caseondelivery\">\n  <ion-toolbar>\n    <ion-button (click)=\"placeOrderforCod()\">\n      <b> PLACE ORDER </b>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf=\"paymentmodeltype\">\n  <ion-toolbar>\n    <ion-button (click)=\"placeOrders()\">\n      <b> PLACE ORDER </b>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".payment {\n  background-color: WhiteSmoke;\n}\n.payment ion-item {\n  background-color: WhiteSmoke;\n}\n.payment .text-color {\n  color: #387ef5;\n  font-size: 15px;\n  padding-top: 15px;\n}\n.payment .button1 {\n  text-transform: lowercase;\n  font-size: 13px;\n  float: right;\n}\n.payment .ion-card ion-item {\n  background-color: white;\n  height: 20px;\n}\n.payment ion-label {\n  color: black;\n  font-weight: normal;\n}\n.payment .ion-item ion-select {\n  text-align: center;\n}\n.payment .align-left {\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment ion-item ion-input {\n  text-align: right;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment .color1 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment .color2 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-bottom: -10px;\n  padding-top: -10px;\n}\n.paymentamount {\n  text-align: right;\n}\n.paymenttransaction {\n  padding-right: 80px;\n}\n.textboox {\n  margin-left: 20px;\n}\n.paymentcard {\n  height: 55px;\n  font-size: 14px;\n  font-weight: bold;\n}\n.paymentpageionlabel b {\n  color: black;\n  padding-right: 20%;\n}\n.paymenttransaction b {\n  color: black;\n}\n.addrespayment {\n  max-height: 105px;\n  margin-top: 20px;\n  background-color: lightgray;\n}\n.addrespayment ion-row {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBRENJO0VBQ0UsNEJBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRE47QURJSTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNITjtBREtJO0VBQ0Usa0JBQUE7QUNITjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDSk47QURPSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0xOO0FEUUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNQTjtBRFVFO0VBQ0UsaUJBQUE7QUNQSjtBRFNFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsaUJBQUE7QUNMSjtBRE9FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0pKO0FET0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE1FO0VBQ0UsWUFBQTtBQ0hKO0FES0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNGSjtBRElFO0VBQ0UsZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgICB9XG4gIFxuICAgIC50ZXh0LWNvbG9yIHtcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgfVxuICBcbiAgICAuYnV0dG9uMSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgXG4gICAgLmlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgIC5pb24taXRlbSBpb24tc2VsZWN0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5hbGlnbi1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nLXRvcDogLTEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG4gICAgfVxuICBcbiAgICAuY29sb3IxIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nLXRvcDogLTEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG4gICAgfVxuICBcbiAgICAuY29sb3IyIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogLTEwcHg7XG4gICAgfVxuICB9XG4gIC5wYXltZW50YW1vdW50IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAucGF5bWVudHRyYW5zYWN0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICB9XG4gIC50ZXh0Ym9veCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnBheW1lbnRjYXJkIHtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAucGF5bWVudHBhZ2Vpb25sYWJlbCBiIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xuICB9XG4gIC5wYXltZW50dHJhbnNhY3Rpb24gYiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5hZGRyZXNwYXltZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgfVxuICAuYWRkcmVzcGF5bWVudCBpb24tcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gICIsIi5wYXltZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5wYXltZW50IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5wYXltZW50IC50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMzODdlZjU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ucGF5bWVudCAuYnV0dG9uMSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBheW1lbnQgLmlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMjBweDtcbn1cbi5wYXltZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5wYXltZW50IC5pb24taXRlbSBpb24tc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnQgLmFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnQgLmNvbG9yMSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnQgLmNvbG9yMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbiAgcGFkZGluZy10b3A6IC0xMHB4O1xufVxuXG4ucGF5bWVudGFtb3VudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGF5bWVudHRyYW5zYWN0aW9uIHtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cblxuLnRleHRib294IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wYXltZW50Y2FyZCB7XG4gIGhlaWdodDogNTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBheW1lbnRwYWdlaW9ubGFiZWwgYiB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1yaWdodDogMjAlO1xufVxuXG4ucGF5bWVudHRyYW5zYWN0aW9uIGIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hZGRyZXNwYXltZW50IHtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmFkZHJlc3BheW1lbnQgaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// has errors at line number 194 ,370








let PaymentPage = class PaymentPage {
    // calendar = {
    //   mode: 'month',
    //   currentDate : new Date()
    // };
    constructor(navCtrl, productServices, users, platform, networkService, loadingCtrl, logger, iab, route, router) {
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.users = users;
        this.platform = platform;
        this.networkService = networkService;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.iab = iab;
        this.route = route;
        this.router = router;
        this.selectOptions = {
            title: "Select",
        };
        this.dataArray = [];
        this.allTotal = [];
        this.paymenttype = true;
        this.caseondelivery = false;
        this.paymentmodeltype = false;
        this.allowFutureDates = false;
        this.datetoday = new Date();
        this.localDate = new Date();
    }
    closeDatepicker() {
        // this.datepickerDirective.modal.dismiss();
    }
    codchange() {
        var _this = this;
        this.paymentMethod = this.paymentMethods;
        if (_this.paymentMethods == "COD") {
            _this.caseondelivery = true;
            _this.paymentmodeltype = false;
            _this.paymenttype = true;
        }
        else {
            _this.caseondelivery = false;
            _this.paymentmodeltype = true;
            _this.paymenttype = false;
        }
    }
    onlinepay() {
        this.paymentMethods == "Online Payment";
        var options = {
            description: "Online Payment",
            image: "http://kmartprod1298.cloudapp.net/ivipni/image/logo.png",
            currency: "INR",
            key: "rzp_test_ITL1czDoYxnnqj",
            amount: this.firstTermAmount,
            name: "Ivipani",
            prefill: {
                email: this.email,
                contact: this.telephone,
                name: this.firstname,
            },
            theme: {
                color: "royal-blue",
            },
            modal: {
                ondismiss: function () {
                    alert("dismissed");
                },
            },
        };
        var successCallback = (payment_id) => {
            //alert('payment_id: ' + payment_id);
            let payDetailsObj = {
                dataArray: this.dataArray,
                email: this.email,
                totalamount: this.totalamount,
                firstTermAmount: this.totalamount,
                twentyfivetransaction_id: payment_id,
                date: this.localDate.toISOString(),
                telephone: this.telephone,
                address_id: this.address_id,
                customer_id: this.customer_id,
                firstname: this.firstname,
                lastname: this.lastname,
                company: this.company,
                address_1: this.address_1,
                address_2: this.address_2,
                city: this.city,
                postcode: this.postcode,
                zone_id: this.zone_id,
                name: this.name,
                cartTotal: this.cartTotal,
                coupon: this.coupon,
                paymentMethod: this.paymentMethods,
                totals: this.allTotal,
            };
            let myThankYouObj;
            this.users.placeOrder(payDetailsObj, (result, data) => {
                if (result == "1") {
                    myThankYouObj = {
                        pay: payDetailsObj,
                        data: data,
                    };
                    // this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                    let navagationExtras = {
                        queryParams: {
                            data: JSON.stringify(myThankYouObj),
                        },
                    };
                    this.router.navigate(["/thank-you"], navagationExtras);
                }
                else {
                    // this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                    let navagationExtras = {
                        queryParams: {
                            data: JSON.stringify(myThankYouObj),
                        },
                    };
                    this.router.navigate(["/thank-you"], navagationExtras);
                }
            });
        };
        var cancelCallback = function (error) {
            alert(error.description + " (Error " + error.code + ")");
        };
        this.platform.ready().then(() => {
            RazorpayCheckout.open(options, successCallback, cancelCallback);
        });
    }
    change() {
        var _this = this;
        this.paymentMethod = this.paymentMethods;
        if (_this.paymentMethods == "COD") {
            _this.caseondelivery = true;
            _this.paymentmodeltype = false;
            _this.paymenttype = true;
        }
        else {
            _this.caseondelivery = false;
            _this.paymentmodeltype = true;
            _this.paymenttype = true;
        }
        this.productServices.getBanks(function (data) {
            _this.logger.debug("checking Array" + JSON.stringify(data));
            _this.bankdata = data.data;
        });
    }
    placeOrderforCod() {
        var _this = this;
        _this.paymentMethods = "COD";
        let payDetailsObj2 = {
            totalamount: _this.totalamount,
            date: _this.localDate.toISOString(),
            address_id: _this.address_id,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal,
        };
        let payDetailsObj = {
            totalamount: _this.totalamount,
            dataArray: _this.dataArray,
            email: _this.email,
            firstTermAmount: _this.totalamount,
            twentyfivetransaction_id: _this.twentyfivetransaction_id,
            date: _this.localDate.toISOString(),
            telephone: _this.telephone,
            address_id: _this.address_id,
            customer_id: _this.customer_id,
            firstname: _this.firstname,
            lastname: _this.lastname,
            company: _this.company,
            address_1: _this.address_1,
            address_2: _this.address_2,
            city: _this.city,
            postcode: _this.postcode,
            zone_id: _this.zone_id,
            name: _this.name,
            cartTotal: _this.cartTotal,
            coupon: _this.coupon,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal,
        };
        let loading = _this.loadingCtrl.create({
            message: ``,
        });
        _this.logger.debug("checking the myThankYouObj" + JSON.stringify(payDetailsObj2));
        let myThankYouObj;
        if (_this.paymentMethods == "COD") {
            // loading.present();
            this.users.CODplaceOrder(payDetailsObj2, function (result, data) {
                _this.logger.debug("data " + JSON.stringify(data));
                _this.logger.debug("parse data " + JSON.parse(data));
                if (result == "1") {
                    myThankYouObj = {
                        pay: payDetailsObj,
                        data: data,
                    };
                    _this.logger.debug("checking the myThankYouObj" + JSON.stringify(myThankYouObj));
                    // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                    // loading.dismiss();
                }
                else {
                    _this.networkService.showErrorAlert();
                    // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                    // loading.dismiss();
                }
            });
        }
        else {
            // loading.dismiss();
            _this.networkService.showSuccessAlert("please select payment method");
        }
    }
    placeOrders() {
        var _this = this;
        let payDetailsObj1 = {
            totalamount: _this.onlineamount,
            firstTermAmount: _this.onlineamount,
            twentyfivetransaction_id: _this.twentyfivetransaction_id,
            date: _this.localDate.toISOString(),
            address_id: _this.address_id,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal,
        };
        let payDetailsObj = {
            dataArray: _this.dataArray,
            email: _this.email,
            totalamount: _this.onlineamount,
            firstTermAmount: _this.onlineamount,
            twentyfivetransaction_id: _this.twentyfivetransaction_id,
            date: _this.localDate.toISOString(),
            telephone: _this.telephone,
            address_id: _this.address_id,
            customer_id: _this.customer_id,
            firstname: _this.firstname,
            lastname: _this.lastname,
            company: _this.company,
            address_1: _this.address_1,
            address_2: _this.address_2,
            city: _this.city,
            postcode: _this.postcode,
            zone_id: _this.zone_id,
            name: _this.name,
            cartTotal: _this.cartTotal,
            coupon: _this.coupon,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal,
        };
        let loading = _this.loadingCtrl.create({
            message: ``,
        });
        _this.logger.debug("paydetailsobj " + JSON.stringify(payDetailsObj1));
        _this.logger.debug("paymentmethods " + JSON.stringify(_this.paymentMethods));
        let myThankYouObj;
        if (_this.paymentMethods != "COD") {
            if (_this.twentyfivetransaction_id) {
                // loading.present();
                this.users.placeOrder(payDetailsObj1, function (result, data) {
                    _this.logger.debug("data " + JSON.stringify(data));
                    _this.logger.debug("parse data " + JSON.parse(data));
                    if (result == "1") {
                        myThankYouObj = {
                            pay: payDetailsObj,
                            data: data,
                        };
                        _this.logger.debug("checking the myThankYouObj" + JSON.stringify(myThankYouObj));
                        // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                        // loading.dismiss();
                    }
                    else {
                        _this.networkService.showErrorAlert();
                        // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                        // loading.dismiss();
                    }
                });
            }
            else {
                // loading.dismiss();
                _this.networkService.showSuccessAlert("Please insert transaction id");
            }
        }
    }
    optionsFn(event) {
        const browser = this.iab.create(event.bank_url, "_self", {
            location: "yes",
            closebuttoncaption: "Close",
        });
        browser.insertCSS({ code: "{color: royal-blue;}" });
    }
    ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            let orderDetails = JSON.parse(param["data"]);
            this.email = orderDetails.email;
            this.telephone = orderDetails.telephone;
            this.address_id = orderDetails.address_id;
            this.customer_id = orderDetails.customer_id;
            this.firstname = orderDetails.firstname;
            this.lastname = orderDetails.lastname;
            this.company = orderDetails.company;
            this.address_1 = orderDetails.address_1;
            this.address_2 = orderDetails.address_2;
            this.city = orderDetails.city;
            this.postcode = orderDetails.postcode;
            this.zone_id = orderDetails.zone_id;
            this.name = orderDetails.name;
            this.dataArray = orderDetails.dataArray;
            this.cartTotal = orderDetails.cartTotal;
            this.totalamount = (this.cartTotal + (this.cartTotal * 2) / 100).toFixed(2);
            this.allTotal = orderDetails.allTotal;
            this.onlineamount = this.cartTotal.toFixed(2);
            this.firstTermAmount = Math.round((this.cartTotal + (this.cartTotal * 2) / 100) * 100);
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_7__["Products"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-payment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_7__["Products"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map