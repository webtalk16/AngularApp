import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { MerchantService } from '../merchants/merchant.service';

@Component({
    templateUrl: 'app/merchants/merchant-offers.component.html'
})
export class MerchantOffersComponent {
    pageTitle: string = 'Merchant Offers';
    imageWidth: string = "100%";
    imageHeight: number = 100;
    imageMargin: number = 2;
    errorMessage: string;
    offers: any[]; 

    constructor(private _merchantService: MerchantService,
                private _routeParams: RouteParams,
                private _router: Router) {
        let id = +this._routeParams.get('id');
        this.pageTitle += ": " + id;
    }

    onBack(): void {
        this._router.navigate(['MerchantDetail']);
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._merchantService.getOffers()
            .subscribe(
            offers => this.offers = offers,
            error => this.errorMessage = <any>error);
    }
}