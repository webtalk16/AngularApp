System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './merchants/merchant-details.component', './merchants/merchant.service', './home/sign-up.component', './merchants/merchant-offers.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, merchant_details_component_1, merchant_service_1, sign_up_component_1, merchant_offers_component_1, core_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (merchant_details_component_1_1) {
                merchant_details_component_1 = merchant_details_component_1_1;
            },
            function (merchant_service_1_1) {
                merchant_service_1 = merchant_service_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (merchant_offers_component_1_1) {
                merchant_offers_component_1 = merchant_offers_component_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            AppComponent = (function () {
                function AppComponent(_merchantService) {
                    this._merchantService = _merchantService;
                    this.pageTitle = 'Merchant Name'; //"Basic Plus"
                    this.logoUrl = 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('In OnInit');
                    this._merchantService.login()
                        .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n    <div>\n        <nav class='navbar navbar-default' style='background-color:#3d85c6;border-color:#000000'>\n            <div class='container-fluid' style='padding:10px 0px;'>\n                <div class='navbar-header' style=\"margin-right:4%\">\n                    <button class='btn btn-success navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                        <span class='glyphicon glyphicon-menu-hamburger'></span>\n                    </button>\n                    <a class='navbar-brand' style='padding:0px;margin-left:4%'><img src={{logoUrl}} class='img-responsive' style='max-height:100%;' /></a>\n                </div>\n                \n                <div class='navbar-collapse collapse'>\n                    <ul class='nav navbar-nav navbar-right' style='background-color:#FFFFFF;border:1px solid #000000; margin-right:4%;'>\n                        <li><a [routerLink]=\"['MerchantDetail']\" style='border-right:1px solid #000000; padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>General Info</a></li>\n                        <li><a [routerLink]=\"['MerchantOffers']\" style='border-right:1px solid #000000; padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>Offers</a></li>\n                        <li><a [routerLink]=\"['SignUp']\" style='padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>Sign Up</a></li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class='container'>\n            <div class='page-header' style='border:none;'><h1>{{pageTitle}}</h1></div>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <div class=\"panel-footer\" style='position:absolute;bottom:0px;left:0px;right:0px;margin-top:40px;'>\n        Powered by APPCARD  |  (c) 2016  |  Terms  |  Privacy Policy\n    </div>\n     ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [merchant_service_1.MerchantService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/stores/merchant-id/merchant-name/sign-up', name: 'SignUp', component: sign_up_component_1.SignUpComponent },
                        { path: '/stores/merchant-id/merchant-name', name: 'MerchantDetail', component: merchant_details_component_1.MerchantDetailsComponent, useAsDefault: true },
                        { path: '/stores/merchant-id/merchant-name/offers', name: 'MerchantOffers', component: merchant_offers_component_1.MerchantOffersComponent }
                    ]), 
                    __metadata('design:paramtypes', [merchant_service_1.MerchantService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map