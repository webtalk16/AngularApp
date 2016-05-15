import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';


// import localStorage from 'localStorage';


@Injectable()
export class MerchantService {
    //private _productUrl = 'https://appcard.com/api/merchants/124';
    private _productUrl = 'https://appcard.com/api/merchants/124:443';
    private _tempUrl: string = 'api/products/products.json'; // temp - ADD HTTP url to webservice here!!!!!
    private _proxyPath: string = '/proxy_path/'; // temp - ADD HTTP url to webservice here!!!!!
    //private _tempUrl: string = 'https://appcard.com/api/users/token'; // temp - ADD HTTP url to webservice here!!!!!
    
    // Get Merchant Details
    // returns merchant name, logo-image - id, locations
    private merchantId: string = '124';
    private _getMerchantDetailsUrl = 'https://appcard.com/api/merchants/{merchant-id}'
    private _getMerchantDetailsUrl2 = 'https://appcard.com/api/merchants/' + this.merchantId;

    // Get Images
    // returns images
    private imageId: string = '22';
    private imageSizeWidth: string = '120';
    private imageSizeHeight: string = '50';
    private _getImagesUrl = 'https://appcard.com/api/images/' + this.imageId + '?size={' + this.imageSizeWidth + '}x{' + this.imageSizeHeight + '}';

    // Get Offers
    // returns merchant offers (prefer images.banner over images.legacy; use custom_text)
    private _getOffersUrl = 'https://appcard.com/api/users/me/offers/my-stores?location=0,0&sort=1&d=0&ts=0'

    // Sign-up
    private _postSignUpForm = 'https://appcard.com/api/users';
    /*
    creates user, paylod:
    {
      "username": "{email}",
      "password": "{pwd}",
      "birthday": "MM/DD/YYYY",
      "source": "micro-site"
    }
    */

    private _httpHeaders: Headers = new Headers();
    private bodyInputData: string = 'input data'; // TEMP !!!!!!!!!!!!!!

    constructor(private _http: Http) { }
    
    private handleError(error: Response) {
        console.error(error);
        //console.log("" + error.id_token)
        return Observable.throw(error.json().error || 'Server error')
    }

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

    getMerchantDetails(): Observable<any[]> {
        this._httpHeaders.append('Content-Type', 'application/json');
        this._httpHeaders.append('Authorization', 'Basic ' +
            btoa('jimmyjlevy@hotmail.com:Ap1632316'));
        this._httpHeaders.append('Access-Control-Allow-Origin', '*');

        return this._http.get(this._tempUrl,
            { headers: this._httpHeaders })
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
    }

    getOffers(): Observable<any[]> {
        this._httpHeaders.append('Content-Type', 'application/json');
        this._httpHeaders.append('Authorization', 'Basic ' +
            btoa('jimmyjlevy@hotmail.com:Ap1632316'));
        this._httpHeaders.append('Access-Control-Allow-Origin', '*');

        return this._http.get(this._tempUrl,
            { headers: this._httpHeaders })
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
    }

    getImages(): Observable<any[]> {
        this._httpHeaders.append('Content-Type', 'application/json');
        // let authToken = localStorage.getItem('auth_token');
        //  _httpHeaders.append('Authorization', `Bearer ${authToken}`);
        this._httpHeaders.append('Authorization', 'Basic ' +
            btoa('jimmyjlevy@hotmail.com:Ap1632316'));
        this._httpHeaders.append('Access-Control-Allow-Origin', '*');

        return this._http.get(this._tempUrl,
            { headers: this._httpHeaders })
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
    }

    signUp(): Observable<any[]> {
        this._httpHeaders.append('Content-Type', 'application/json');
        // let authToken = localStorage.getItem('auth_token');
        //  _httpHeaders.append('Authorization', `Bearer ${authToken}`);
        this._httpHeaders.append('Authorization', 'Basic ' +
            btoa('jimmyjlevy@hotmail.com:Ap1632316'));
        this._httpHeaders.append('Access-Control-Allow-Origin', '*');

        return this._http.post(this._tempUrl,
            'temp-bodyInputData',
            { headers: this._httpHeaders })
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
    }

    private tempData = { "username": 'jimmyjlevy@hotmail.com', "password": 'Ap1632316', 'permanent': false };
    login(): Observable<any[]> {
        this._httpHeaders.append('Content-Type', 'application/json');
        // let authToken = localStorage.getItem('auth_token');
        //  _httpHeaders.append('Authorization', `Bearer ${authToken}`);
        this._httpHeaders.append('Authorization', 'Basic ' +
            btoa('jimmyjlevy@hotmail.com:Ap1632316'));
        this._httpHeaders.append('Access-Control-Allow-Origin', '*');

        return this._http.post(this._proxyPath,
            JSON.stringify(this.tempData),
            { headers: this._httpHeaders })
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("All: " + data))
            .catch(this.handleError)
    }
}