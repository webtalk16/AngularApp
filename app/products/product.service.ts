import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json'; // temp - ADD HTTP url to webservice here!!!!!
    //private _productUrl = 'https://appcard.com/api/images/{image-id}?size={w}x{h}';

    constructor(private _http: Http) { }

    getProducts(): Observable<any[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <any[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}