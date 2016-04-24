import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { ProductService } from '../products/product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    imageHeight: number = 100;
    imageMargin: number = 2;
    errorMessage: string;
    offers: any[]; 

    constructor(private _productService: ProductService,
                private _routeParams: RouteParams,
                private _router: Router) {
        let id = +this._routeParams.get('id');
        this.pageTitle += ": " + id;
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._productService.getOffers()
            .subscribe(
            offers => this.offers = offers,
            error => this.errorMessage = <any>error);
    }
}