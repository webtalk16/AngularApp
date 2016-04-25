import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { MerchantService } from '../merchants/merchant.service';

@Component({
    templateUrl: 'app/merchants/merchant-details.component.html',
    styleUrls: ['app/merchants/merchant-details.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class MerchantDetailsComponent implements OnInit {
    mapAppKey: string = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQv2nPnt7sZnqre0U9Mn7KdhnZiaO4Jrg&callback=initMap';
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

    initMap(Lat, Lng): void {
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
    }

    ngOnInit(): void {  
        console.log('In OnInit');
        this._merchantService.login()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }
}