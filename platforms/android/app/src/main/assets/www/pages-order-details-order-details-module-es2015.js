(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n          </ion-buttons>\n        <ion-title>Order Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"order-details\">\n    <div class=\"order\">\n        <ion-row>\n            <ion-col>Order Number</ion-col>\n            <ion-col>{{order_id}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Date</ion-col>\n            <ion-col>{{date_added}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Total</ion-col>\n            <ion-col>{{total | currency:'INR':true}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Payment Method</ion-col>\n            <ion-col>{{payment_method}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Status</ion-col>\n            <ion-col>{{name}}</ion-col>\n        </ion-row>\n    </div>\n    <div>\n        <ion-item>\n            <ion-label><b>Order Details</b></ion-label>\n            <ion-icon name=\"cart\" color=\"success\" slot=\"end\" (click)=\"addToCart(order_id)\"></ion-icon>\n        </ion-item>\n        <ion-row class=\"ion-margin\">\n            <ion-col size=\"8\"><b>Products</b></ion-col>\n            <ion-col size=\"4\"><b>Total</b></ion-col>\n        </ion-row>\n        <ion-item class=\"ion-margin\" *ngFor=\"let orderDetails of productsArray\">\n            <ion-row>\n                <ion-col size=\"8\">{{orderDetails.name}} -{{orderDetails.model}} ({{orderDetails.quantity}} x {{orderDetails.price}})\n                    <div *ngIf=\"orderDetails.option.length >1\">(Size:{{orderDetails.option[0].value}})</div>\n                    <div *ngIf=\"orderDetails.option.length == 1\">{{orderDetails.option[0].value}}</div>\n                    <div *ngIf=\"orderDetails.option.length >1\">{{orderDetails.option[1].value}}-{{orderDetails.option[0].value}}</div>\n                </ion-col>\n                <ion-col size=\"4\">{{orderDetails.total | currency:'INR':true}}</ion-col>\n            </ion-row>\n        </ion-item>\n    </div>\n    <ion-card *ngFor=\"let cost of orderTotals\">\n        <ion-row class=\"backgroundTotals\">\n            <ion-col size=\"8\" class=\"orderTotalsTitle\">\n                {{cost.title}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"orderTotals\">\n                {{cost.value | currency:'INR':true}}\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <hr>\n    <ion-card>\n        <ion-card-header>\n            <ion-title>Delivery Details</ion-title>\n        </ion-card-header>\n        <ion-item>\n            <ion-label>\n                <h3>{{firstname}} {{lastname}}</h3>\n                <h3>{{payment_company}}</h3>\n                <h3>{{payment_address_1}}</h3>\n                <h3>{{payment_address_2}}</h3>\n                <h3>{{payment_city}}, {{payment_zone}}, {{payment_postcode}}</h3>\n                <ion-item lines=\"none\">\n                    <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n                    <ion-label>{{email}}</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n                    <ion-label>{{telephone}}</ion-label>\n                </ion-item>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/order-details/order-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");




const routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/pages/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");







let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-details .order ion-row {\n  width: 100%;\n}\n.order-details .order ion-row ion-col {\n  width: 40%;\n  float: left;\n  border: 1px solid #edebeb;\n  background-color: whitesmoke;\n}\n.order-details .order {\n  padding: 16px;\n  margin-top: 10px;\n}\n.order-details .subhead {\n  padding-top: 8px;\n}\n.order-details .subhead ion-row {\n  font-size: 16px;\n  color: #3d7ce2;\n  margin-left: 14px;\n  margin-right: 14px;\n}\n.order-details .subhead ion-row ion-col {\n  color: black;\n  border: 1px solid #edebeb !important;\n}\n.order-details .deliverDetails1 ion-row {\n  font-size: 16px;\n  color: #3d7ce2;\n  margin-left: 14px;\n}\n.order-details .deliverDetails1 p {\n  margin-left: 20px;\n  margin-bottom: -5px;\n  font-size: 1.5rem;\n}\n.order-details .cartion {\n  margin-left: 100px;\n}\n.order-details .cart {\n  padding-left: 80%;\n  font-size: 40px;\n  color: #15a033;\n}\n.order-details .subhead ion-row .ordercol1 {\n  border: 1px solid #edebeb !important;\n  width: 77%;\n}\n.order-details .subhead ion-row .ordercol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n.order-details .orderDetails ion-row {\n  padding-left: 15px;\n}\n.order-details .orderDetails ion-row .ordercol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n}\n.order-details .orderDetails ion-row .ordercol2 {\n  border: 1px solid #edebeb !important;\n  width: 21%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0MsV0FBQTtBQ0FMO0FERUc7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNBTDtBREVHO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQUw7QURFRztFQUNFLGdCQUFBO0FDQUw7QURFRztFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FMO0FERUc7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QUNBTDtBREdHO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RMO0FER0c7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNETDtBRGlCRztFQUNFLGtCQUFBO0FDZkw7QURpQkc7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZkw7QURrQkk7RUFDRyxvQ0FBQTtFQUNBLFVBQUE7QUNoQlA7QURrQks7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNoQkg7QURvQks7RUFDRixrQkFBQTtBQ2xCSDtBRG9CSztFQUNFLG9DQUFBO0VBQ0EsVUFBQTtBQ2xCUDtBRG9CSztFQUNFLG9DQUFBO0VBQ0osVUFBQTtBQ2xCSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItZGV0YWlsc3tcbiAgICAub3JkZXIgaW9uLXJvdyB7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuICAgLm9yZGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgIHdpZHRoOiA0MCU7XG4gICAgIGZsb2F0OiBsZWZ0O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgfVxuICAgLm9yZGVyIHtcbiAgICAgcGFkZGluZzogMTZweDtcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIH1cbiAgIC5zdWJoZWFkIHtcbiAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgIH1cbiAgIC5zdWJoZWFkIGlvbi1yb3cge1xuICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgIGNvbG9yOiAjM2Q3Y2UyO1xuICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgfVxuICAgLnN1YmhlYWQgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgY29sb3I6IGJsYWNrO1xuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICB9XG4gICBcbiAgIC5kZWxpdmVyRGV0YWlsczEgaW9uLXJvdyB7XG4gICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgY29sb3I6ICMzZDdjZTI7XG4gICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgfVxuICAgLmRlbGl2ZXJEZXRhaWxzMSBwIHtcbiAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgfVxuICAgLy8gLmFsaW5lIHtcbiAgIC8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgLy8gICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgLy8gICB9XG4gICAvLyAgIC5pdGVtIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAvLyAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XG4gICAvLyAgICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG4gICAvLyAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAvLyAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgLy8gICB9XG4gICAvLyAgIC5pdGVtIGlvbi1yb3cgLnRvdGFsIHtcbiAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgIC8vICAgfVxuICAgXG4gICAuY2FydGlvbiB7XG4gICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgIH1cbiAgIC5jYXJ0IHtcbiAgICAgcGFkZGluZy1sZWZ0OiA4MCU7XG4gICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgY29sb3I6ICMxNWEwMzM7XG4gICB9XG4gICAgLnN1YmhlYWQgaW9uLXJvdyB7XG4gICAgLm9yZGVyY29sMSB7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgICAgIHdpZHRoOjc3JTtcbiAgIH1cbiAgICAgLm9yZGVyY29sMntcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICB3aWR0aDoyMyU7XG4gICAgIH1cbiAgIFxuICAgfVxuICAgICAub3JkZXJEZXRhaWxzIGlvbi1yb3d7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgXG4gICAgIC5vcmRlcmNvbDEge1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgICAgICB3aWR0aDo3NSU7XG4gICB9XG4gICAgIC5vcmRlcmNvbDJ7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgd2lkdGg6MjElO1xuICAgICB9XG4gICB9XG4gICBcbiAgIFxuICAgXG4gICB9XG4gICAiLCIub3JkZXItZGV0YWlscyAub3JkZXIgaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjM2Q3Y2UyO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuLm9yZGVyLWRldGFpbHMgLnN1YmhlYWQgaW9uLXJvdyBpb24tY29sIHtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG59XG4ub3JkZXItZGV0YWlscyAuZGVsaXZlckRldGFpbHMxIGlvbi1yb3cge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjM2Q3Y2UyO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5kZWxpdmVyRGV0YWlsczEgcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5vcmRlci1kZXRhaWxzIC5jYXJ0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLm9yZGVyLWRldGFpbHMgLmNhcnQge1xuICBwYWRkaW5nLWxlZnQ6IDgwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzE1YTAzMztcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cgLm9yZGVyY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDc3JTtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cgLm9yZGVyY29sMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIzJTtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlckRldGFpbHMgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlckRldGFpbHMgaW9uLXJvdyAub3JkZXJjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyRGV0YWlscyBpb24tcm93IC5vcmRlcmNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear




let OrderDetailsPage = class OrderDetailsPage {
    constructor(navCtrl, users, toastCtrl, route) {
        this.navCtrl = navCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.myOrderDeliver = [];
        this.productsArray = [];
        this.orderTotals = [];
        var _this = this;
    }
    addToCart(order_id) {
        var _this = this;
        let addProduct;
        addProduct = {
            order_id: this.order_id,
        };
        _this.users.orderToCart(addProduct, function (result, data) {
            if (result == "1") {
                _this.toastMessage = "Products added to cart";
                _this.presentToast();
            }
            else {
                this.networkService.showErrorAlert();
            }
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        });
    }
    ngOnInit() {
        var _this = this;
        this.route.queryParams.subscribe((param) => {
            let orderDetails = JSON.parse(param["data"]);
            _this.order_id = orderDetails.order_id;
            _this.date_added = orderDetails.date_added;
            _this.total = orderDetails.total;
            _this.payment_method = orderDetails.payment_method;
            _this.productsArray = orderDetails.products;
            _this.firstname = orderDetails.firstname;
            _this.lastname = orderDetails.lastname;
            _this.payment_address_2 = orderDetails.payment_address_2;
            _this.payment_city = orderDetails.payment_city;
            _this.payment_zone = orderDetails.payment_zone;
            _this.payment_country = orderDetails.payment_country;
            _this.payment_method = orderDetails.payment_method;
            _this.payment_address_1 = orderDetails.payment_address_1;
            _this.payment_company = orderDetails.payment_company;
            _this.email = orderDetails.email;
            _this.telephone = orderDetails.telephone;
            _this.payment_postcode = orderDetails.payment_postcode;
            _this.name = orderDetails.name;
            _this.postcode = orderDetails.postcode;
            _this.orderTotals = orderDetails.totals;
        });
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-order-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map