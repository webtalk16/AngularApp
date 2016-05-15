System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var MerchantService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            // import localStorage from 'localStorage';
            MerchantService = (function () {
                function MerchantService(_http) {
                    this._http = _http;
                    //private _productUrl = 'https://appcard.com/api/merchants/124';
                    this._productUrl = 'https://appcard.com/api/merchants/124:443';
                    this._tempUrl = 'api/products/products.json'; // temp - ADD HTTP url to webservice here!!!!!
                    this._proxyPath = '/proxy_path/'; // temp - ADD HTTP url to webservice here!!!!!
                    //private _tempUrl: string = 'https://appcard.com/api/users/token'; // temp - ADD HTTP url to webservice here!!!!!
                    // Get Merchant Details
                    // returns merchant name, logo-image - id, locations
                    this.merchantId = '124';
                    this._getMerchantDetailsUrl = 'https://appcard.com/api/merchants/{merchant-id}';
                    this._getMerchantDetailsUrl2 = 'https://appcard.com/api/merchants/' + this.merchantId;
                    // Get Images
                    // returns images
                    this.imageId = '22';
                    this.imageSizeWidth = '120';
                    this.imageSizeHeight = '50';
                    this._getImagesUrl = 'https://appcard.com/api/images/' + this.imageId + '?size={' + this.imageSizeWidth + '}x{' + this.imageSizeHeight + '}';
                    // Get Offers
                    // returns merchant offers (prefer images.banner over images.legacy; use custom_text)
                    this._getOffersUrl = 'https://appcard.com/api/users/me/offers/my-stores?location=0,0&sort=1&d=0&ts=0';
                    // Sign-up
                    this._postSignUpForm = 'https://appcard.com/api/users';
                    /*
                    creates user, paylod:
                    {
                      "username": "{email}",
                      "password": "{pwd}",
                      "birthday": "MM/DD/YYYY",
                      "source": "micro-site"
                    }
                    */
                    this._httpHeaders = new http_1.Headers();
                    this.bodyInputData = 'input data'; // TEMP !!!!!!!!!!!!!!
                    this.tempData = { "username": 'jimmyjlevy@hotmail.com', "password": 'Ap1632316', 'permanent': false };
                }
                MerchantService.prototype.handleError = function (error) {
                    console.error(error);
                    //console.log("" + error.id_token)
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                //login(): Observable<any[]> {
                //    this._httpHeaders.append('Content-Type', 'application/json');
                //    this._httpHeaders.append('Authorization', 'Basic ' +
                //        btoa('jimmyjlevy@hotmail.com:Ap1632316'));
                //    this._httpHeaders.append('Access-Control-Allow-Origin', '*');
                //    return this._http.get(this._tempUrl,
                //        { headers: this._httpHeaders })
                //        .map((response: Response) => <any[]>response.json())
                //        .do(data => console.log("All: " + JSON.stringify(data)))
                //        .do(data => console.log("TODO add -- localStorage.setItem('auth_token', response.Token)"))
                //        .catch(this.handleError)
                //}
                MerchantService.prototype.getMerchantDetails = function () {
                    this._httpHeaders.append('Content-Type', 'application/json');
                    this._httpHeaders.append('Authorization', 'Basic ' +
                        btoa('jimmyjlevy@hotmail.com:Ap1632316'));
                    this._httpHeaders.append('Access-Control-Allow-Origin', '*');
                    return this._http.get(this._tempUrl, { headers: this._httpHeaders })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                MerchantService.prototype.getOffers = function () {
                    this._httpHeaders.append('Content-Type', 'application/json');
                    this._httpHeaders.append('Authorization', 'Basic ' +
                        btoa('jimmyjlevy@hotmail.com:Ap1632316'));
                    this._httpHeaders.append('Access-Control-Allow-Origin', '*');
                    return this._http.get(this._tempUrl, { headers: this._httpHeaders })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                MerchantService.prototype.getImages = function () {
                    this._httpHeaders.append('Content-Type', 'application/json');
                    // let authToken = localStorage.getItem('auth_token');
                    //  _httpHeaders.append('Authorization', `Bearer ${authToken}`);
                    this._httpHeaders.append('Authorization', 'Basic ' +
                        btoa('jimmyjlevy@hotmail.com:Ap1632316'));
                    this._httpHeaders.append('Access-Control-Allow-Origin', '*');
                    return this._http.get(this._tempUrl, { headers: this._httpHeaders })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                MerchantService.prototype.signUp = function () {
                    this._httpHeaders.append('Content-Type', 'application/json');
                    // let authToken = localStorage.getItem('auth_token');
                    //  _httpHeaders.append('Authorization', `Bearer ${authToken}`);
                    this._httpHeaders.append('Authorization', 'Basic ' +
                        btoa('jimmyjlevy@hotmail.com:Ap1632316'));
                    this._httpHeaders.append('Access-Control-Allow-Origin', '*');
                    return this._http.post(this._tempUrl, 'temp-bodyInputData', { headers: this._httpHeaders })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                MerchantService.prototype.login = function () {
                    this._httpHeaders.append('Content-Type', 'application/json');
                    // let authToken = localStorage.getItem('auth_token');
                    //  _httpHeaders.append('Authorization', `Bearer ${authToken}`);
                    this._httpHeaders.append('Authorization', 'Basic ' +
                        btoa('jimmyjlevy@hotmail.com:Ap1632316'));
                    this._httpHeaders.append('Access-Control-Allow-Origin', '*');
                    return this._http.post(this._proxyPath, JSON.stringify(this.tempData), { headers: this._httpHeaders })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + data); })
                        .catch(this.handleError);
                };
                MerchantService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MerchantService);
                return MerchantService;
            }());
            exports_1("MerchantService", MerchantService);
        }
    }
});
//# sourceMappingURL=merchant.service.js.map