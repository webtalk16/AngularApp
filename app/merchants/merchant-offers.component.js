System.register(['angular2/core', 'angular2/router', '../merchants/merchant.service'], function(exports_1, context_1) {
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
    var core_1, router_1, merchant_service_1;
    var MerchantOffersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (merchant_service_1_1) {
                merchant_service_1 = merchant_service_1_1;
            }],
        execute: function() {
            MerchantOffersComponent = (function () {
                function MerchantOffersComponent(_merchantService, _routeParams, _router) {
                    this._merchantService = _merchantService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.pageTitle = 'Merchant Offers';
                    this.imageWidth = "100%";
                    this.imageHeight = 100;
                    this.imageMargin = 2;
                    var id = +this._routeParams.get('id');
                    this.pageTitle += ": " + id;
                }
                MerchantOffersComponent.prototype.onBack = function () {
                    this._router.navigate(['Products']);
                };
                MerchantOffersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('In OnInit');
                    this._merchantService.getOffers()
                        .subscribe(function (offers) { return _this.offers = offers; }, function (error) { return _this.errorMessage = error; });
                };
                MerchantOffersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/merchants/merchant-offers.component.html'
                    }), 
                    __metadata('design:paramtypes', [merchant_service_1.MerchantService, router_1.RouteParams, router_1.Router])
                ], MerchantOffersComponent);
                return MerchantOffersComponent;
            }());
            exports_1("MerchantOffersComponent", MerchantOffersComponent);
        }
    }
});
//# sourceMappingURL=merchant-offers.component.js.map