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
    var MerchantDetailsComponent;
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
            MerchantDetailsComponent = (function () {
                function MerchantDetailsComponent(_merchantService) {
                    this._merchantService = _merchantService;
                    this.mapAppKey = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQv2nPnt7sZnqre0U9Mn7KdhnZiaO4Jrg&callback=initMap';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                MerchantDetailsComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                MerchantDetailsComponent.prototype.initMap = function (Lat, Lng) {
                    console.log("Lat, Lng" + Lat + " " + Lng);
                    var myLatLng = { lat: Lng, lng: Lng };
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: myLatLng
                    });
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Show hours!'
                    });
                };
                MerchantDetailsComponent.prototype.ngOnInit = function () {
                    //console.log('In OnInit - merchant-details.component');
                    //this._merchantService.login()
                    //    .subscribe(
                    //        //products => this.products = products,
                    //        error => this.errorMessage = <any>error);
                };
                MerchantDetailsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/merchants/merchant-details.component.html',
                        styleUrls: ['app/merchants/merchant-details.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [merchant_service_1.MerchantService])
                ], MerchantDetailsComponent);
                return MerchantDetailsComponent;
            }());
            exports_1("MerchantDetailsComponent", MerchantDetailsComponent);
        }
    }
});
//# sourceMappingURL=merchant-details.component.js.map