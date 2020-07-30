(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons end>\n      <ion-col>\n        <ion-button (click)=\"openMenu()\">\n          <ion-icon name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-button (click)=\"quickOrderFn()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"wishListFn()\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <div class=\"qntyColor\">{{wishlistCount}}</div>\n      </ion-button>\n      <ion-button (click)=\"cartFn()\" class=\"badge-button\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge class=\"cart-badge\" color=\"danger\">{{cartCount}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--side menu starts here-->\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{loginData.data.customer.company_name}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"account()\" menuClose>\n        <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n        <ion-label>My account</ion-label>\n      </ion-item>\n      <ion-item (click)=\"wishListFn()\" menuClose>\n        <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Wish List</ion-label>\n      </ion-item>\n      <ion-item (click)=\"cartFn()\" menuClose>\n        <ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\n        <ion-label>My cart</ion-label>\n      </ion-item>\n      <ion-item (click)=\"sellerinfo()\" menuClose>\n        <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Seller Info</ion-label>\n      </ion-item>\n      <ion-item (click)=\"call()\" menuClose>\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Contact Us</ion-label>\n      </ion-item>\n      <ion-item (click)=\"logout()\" menuClose>\n        <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Logout</ion-label>\n      </ion-item>\n      <ion-item menuClose>\n        <i>Version :{{appVersionnumber}}</i>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-content [fullscreen]=\"true\" id=\"main\">\n  <ion-card class=\"card-header\" *ngIf=\"productCategory.length != 0\">\n    <ion-card-header class=\"ion-align-items-center\">\n      <i>Promotional Products:</i>\n      <a color=\"primary\" (click)=\"allProduct()\" class=\"ion-justify-content-end\">\n        View All\n      </a>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-row class=\"topProducSlidSize\">\n    <ion-slides\n      *ngIf=\"topProducts && topProducts.length > 0\"\n      loop=\"true\"\n      speed=\"3000\"\n      autoplay=\"5000\"\n      pager=\"true\"\n      #slider\n      (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n    >\n      <ion-slide *ngFor=\"let product of topProducts\">\n        <!--please replace the below string interpolation-->\n        <img src=\"{{tempimg}}\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-row class=\"prodCatindex\">\n    <ion-slides [options]=\"categories\">\n      <ion-slide\n        *ngFor=\"let prodCat of productCategory;let idx = index\"\n        class=\"product1\"\n      >\n        <ion-col *ngIf=\"idx <= 8\">\n          <ion-card class=\"productcategoryioncol\">\n            <ion-item-sliding #item>\n              <ion-item class=\"ionitemhome\"> <b>{{prodCat.name}}</b> </ion-item>\n            </ion-item-sliding>\n            <ion-item>\n              <p claas=\"valueelement\">{{prodCat.model}}</p>\n            </ion-item>\n\n            <p *ngIf=\"prodCat.option1[0].price != 0\">\n              <b>{{prodCat.option1[0].price}}</b>\n            </p>\n            <p\n              class=\"discount_amt\"\n              *ngIf=\"prodCat.option1[0].salesprice > prodCat.option1[0].price && prodCat.option1[0].salesprice != 0\"\n            >\n              {{prodCat.option1[0].salesprice}}\n            </p>\n\n            <ion-row class=\"homeclassionrow\">\n              <ion-col class=\"quantityborder\">\n                <div\n                  *ngIf=\"productCategory[idx].quantity > 0\"\n                  class=\"quantity ion-margin-start\"\n                >\n                  <ion-input\n                    class=\"quantityhome\"\n                    type=\"number\"\n                    value=\"\"\n                    [(ngModel)]=\"productCategory[idx].required\"\n                  >\n                  </ion-input>\n                </div>\n              </ion-col>\n              <ion-col class=\"cartforhome\">\n                <div *ngIf=\"productCategory[idx].quantity > 0\">\n                  <ion-button\n                    (click)=\"addToCart(productCategory[idx])\"\n                    expand=\"full\"\n                    fill=\"clear\"\n                    color=\"medium\"\n                  >\n                    <ion-icon name=\"cart\"></ion-icon>\n                  </ion-button>\n                </div>\n                <div\n                  *ngIf=\"productCategory[idx].quantity <= 0\"\n                  class=\"icon_home_color\"\n                >\n                  <div>Out of stock</div>\n                  <br />\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-card class=\"card-header\">\n    <ion-card-header>\n      <span class=\"right_textcategories\"><b>CATEGORIES:</b></span>\n    </ion-card-header>\n  </ion-card>\n  <ion-row class=\"brandNameSlideSize\">\n    <div *ngFor=\"let catName of brandName\">\n      <ion-col class=\"brandNameSlideSizeforcol\">\n        <ion-card class=\"brandNamehome\" (click)=\"infoBrandItem(catName);\">\n          <ion-item>\n            <!--please replace the temp image-->\n            <img class=\"imageCat\" src=\"{{tempimg}}\" />\n          </ion-item>\n          <ion-item>\n            <p class=\"nameinhome\">{{catName.sub_category_name}}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </div>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.cart-badge {\n  position: absolute;\n  top: 0px;\n  right: -6px;\n  font-size: 0.6em;\n  --padding-start: 3px;\n  --padding-end: 3px;\n}\n\n.price {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2FydC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtNnB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgLS1wYWRkaW5nLWVuZDogM3B4O1xufVxuLnByaWNlIHtcbiAgcGFkZGluZy1sZWZ0OjVweDtcbn1cbiIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5jYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IC02cHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIC0tcGFkZGluZy1zdGFydDogM3B4O1xuICAtLXBhZGRpbmctZW5kOiAzcHg7XG59XG5cbi5wcmljZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/holders/holders */ "./src/providers/holders/holders.ts");
/* harmony import */ var src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");












// import { AppVersion } from "@ionic-native/app-version/ngx";

let HomePage = class HomePage {
    constructor(menu, router, toastCtrl, navCtrl, productServices, popoverCtrl, user, networkService, loadingCtrl, logger, storage, device, holders, oneSignal, 
    // private appVersion: AppVersion,
    platform, alertCtrl) {
        this.menu = menu;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.popoverCtrl = popoverCtrl;
        this.user = user;
        this.networkService = networkService;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.storage = storage;
        this.device = device;
        this.holders = holders;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.mySlideOptions = {
            initialSlide: 2,
            loop: true,
            autoplay: 1000,
            pager: true,
        };
        this.mySlideOptionsCategory = {
            slidesPerView: 4,
        };
        this.mySlideOptionsProduct = {
            slidesPerView: 2,
        };
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
        this.topProducts = [];
        this.brandName = [];
        this.productCategory = [];
        this.shopProductCategory = [];
        this.slideOptions = {
            initialSlide: 1,
            speed: 400,
        };
        this.categories = {
            slidesPerView: 2.5,
        };
        var _this = this;
        // this loads the company name
        _this.loginData = this.holders.getLoginData();
        _this.logger.info("logdata " + JSON.stringify(_this.loginData));
        // _this.appVersion.getVersionNumber().then((version) => {
        //   _this.appVersionnumber = version;
        // });
        if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
        }
        else {
            // loading.present();
            this.loader();
            this.productServices.getBanners(function (data) {
                _this.logger.debug("checking Array" + JSON.stringify(data));
                _this.topProducts = data.data;
            });
            this.productServices.getBrandName(function (data) {
                _this.logger.debug("checking procutName" + data);
                if (data.data && data.data.categories[0]) {
                    _this.brandName = data.data.categories[0].sub_categories;
                }
            });
            this.productServices.getPromotionalProducts(function (data) {
                _this.logger.debug("checking productCategory" + JSON.stringify(data));
                _this.productCategory = data.data.products;
                _this.cat_id = data["cat_id"];
                _this.logger.debug("checking productCategory" + JSON.stringify(_this.productCategory));
                // loading.dismiss();
            });
        }
    }
    // to make slider to slide
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ionViewDidEnter() {
        var _this = this;
        _this.logger.info("invoking the Home page ionView did load ");
        if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
        }
        else {
            this.productServices.getCartCount().subscribe((data) => {
                _this.logger.debug("checking getCartCount" + JSON.stringify(data));
                _this.cartCount = data.count;
                _this.logger.debug("getCartCount " + _this.cartCount);
            });
            this.productServices.getWishlistCount().subscribe((data) => {
                _this.logger.debug("checking getWishlistCount" + JSON.stringify(data));
                _this.wishlistCount = data.count;
                _this.logger.debug("getWishlistCount " + _this.wishlistCount);
            });
        }
    }
    loader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: ``,
                duration: 2000,
            });
            loading.present();
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            toast.present();
        });
    }
    // routes
    infoBrandItem(catName) {
        this.logger.info("invoking Brand item");
        let navigationExtras = {
            queryParams: {
                sub_category_id: catName.sub_category_id,
                sub_category_name: catName.sub_category_name,
                image: catName.image,
                subSubCategories: JSON.stringify(catName.subSubCategories),
            },
        };
        this.router.navigate(["/product-sub-category"], navigationExtras);
    }
    openMenu() {
        this.menu.enable(true, "first");
        this.menu.open("first");
    }
    aboutUs() {
        this.logger.info("invoking aboutus page");
        return this.router.navigateByUrl("/about-us");
    }
    //my account
    account() {
        this.logger.info("invoking account page");
        this.router.navigateByUrl("/account");
    }
    cartFn() {
        this.logger.info("invoking Shopingcart page");
        this.router.navigateByUrl("/shoppingcart");
    }
    call() {
        var _this = this;
        _this.toastMessage = "tel:8310914770";
        _this.presentToast();
    }
    logout() {
        this.storage.remove("loginId");
        this.storage.remove("passwd");
        this.router.navigateByUrl("/login");
    }
    quickOrderFn() {
        this.router.navigateByUrl("/search-products");
    }
    sellerinfo() {
        this.logger.info("invoking aboutus page");
        this.router.navigateByUrl("/seller-info");
    }
    wishListFn() {
        var _this = this;
        if (_this.wishlistCount == 0) {
            _this.toastMessage = "There are no products in your wishlist";
            _this.presentToast();
        }
        else {
            _this.router.navigateByUrl("/wish-list");
        }
    }
    addToCart(productCategory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (productCategory.alternate_brand == "YES") {
                let alert = yield this.alertCtrl.create({
                    header: "Ivipni",
                    message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
                    buttons: [
                        {
                            text: "No",
                            role: "cancel",
                            handler: () => {
                                productCategory.alternate = "NO";
                                this.addToCartDataInsert(productCategory);
                            },
                        },
                        {
                            text: "Yes",
                            handler: () => {
                                productCategory.alternate = "YES";
                                this.addToCartDataInsert(productCategory);
                            },
                        },
                    ],
                });
                alert.present();
            }
            else {
                productCategory.alternate = "";
                this.addToCartDataInsert(productCategory);
            }
        });
    }
    addToCartDataInsert(productCategory) {
        let addProduct;
        let option;
        var _this = this;
        _this.logger.info("invoking add to cart function:-");
        _this.logger.debug("checking addtocart object" + JSON.stringify(productCategory));
        option = productCategory.option1;
        _this.logger.debug("checking addtocart object " + JSON.stringify(option));
        addProduct = {
            product_id: productCategory.product_id,
            product_option: productCategory.option1[0]["product_option_id"],
            product_option_value: productCategory.option1[0]["product_option_value_id"],
            product_quantity: productCategory["required"],
            alternate_brand: productCategory.alternate,
        };
        _this.logger.debug("checking addtocart object " + JSON.stringify(addProduct));
        if (productCategory["required"] > 0) {
            if (productCategory.quantity_check == "NO") {
                _this.user.addToCart(addProduct, function (result, data) {
                    if (result == "1") {
                        var _dataObj = JSON.parse(data);
                        _this.toastMessage = _dataObj.message;
                        _this.cartCount = _dataObj.count;
                        _this.presentToast();
                    }
                    else {
                        _this.networkService.showErrorAlert();
                    }
                });
            }
            else {
                if (Number(productCategory.required) <= Number(productCategory.quantity)) {
                    _this.user.addToCart(addProduct, function (result, data) {
                        if (result == "1") {
                            var _dataObj = JSON.parse(data);
                            _this.toastMessage = _dataObj.message;
                            _this.cartCount = _dataObj.count;
                            _this.presentToast();
                        }
                        else {
                            _this.networkService.showErrorAlert();
                        }
                    });
                }
                else {
                    _this.networkService.showSuccessAlert("We have maximum qnty of " + productCategory.quantity);
                }
            }
        }
        else {
            _this.networkService.showSuccessAlert("minimum quantity 1");
        }
    }
    allProduct() {
        // this.navCtrl.push(CategoryProductDetailsPage, { category_id: this.cat_id });
        let navigationExtras = {
            queryParams: {
                category_id: this.cat_id,
            },
        };
        this.router.navigate(["/category-product-details"], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_7__["Users"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"] },
    { type: src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__["Holders"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_7__["Users"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
        src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__["Holders"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map