import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { MerchantService } from '../merchants/merchant.service';

@Component({
    templateUrl: 'app/merchants/merchant-details.component.html',
    styleUrls: ['app/merchants/merchant-details.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class MerchantDetailsComponent implements OnInit {
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    products: any[]; 

    constructor(private _merchantService: MerchantService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {  
        console.log('In OnInit');
        this._merchantService.login()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }
}