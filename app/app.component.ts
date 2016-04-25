import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { MerchantDetailsComponent } from './merchants/merchant-details.component';
import { MerchantService } from './merchants/merchant.service';
import { SignUpComponent } from './home/sign-up.component';
import { MerchantOffersComponent } from './merchants/merchant-offers.component';

import {enableProdMode} from 'angular2/core';
enableProdMode();

@Component({
    selector: 'pm-app',
    template:`
    <div>
        <nav class='navbar navbar-default' style='background-color:#3d85c6;border-color:#000000'>
            <div class='container-fluid' style='padding:10px 0px;'>
                <div class='navbar-header'>
                    <button class='btn btn-success navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span class='glyphicon glyphicon-menu-hamburger'></span>
                    </button>
                    <a class='navbar-brand' style='padding:0px;margin-left:4%'><img src='https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' class='img-responsive' style='max-height:100%;' /></a>
                </div>
                
                <div class='navbar-collapse collapse'>
                    <ul class='nav navbar-nav navbar-right' style='background-color:#FFFFFF;border:1px solid #000000; margin-right:4%;'>
                        <li><a [routerLink]="['Products']" style='border-right:1px solid #000000; padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>General Info</a></li>
                        <li><a [routerLink]="['MerchantOffers']" style='border-right:1px solid #000000; padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>Offers</a></li>
                        <li><a [routerLink]="['SignUp']" style='padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class='container'>
            <div class='page-header' style='border:none;'><h1>{{pageTitle}}</h1></div>
            <router-outlet></router-outlet>
        </div>
    </div>
    <div class="panel-footer" style='position:absolute;bottom:0px;left:0px;right:0px;margin-top:40px;'>
        Powered by APPCARD  |  (c) 2016  |  Terms  |  Privacy Policy
    </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [MerchantService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
        { path: '/stores/merchant-id/merchant-name/sign-up', name: 'SignUp', component: SignUpComponent },
        { path: '/stores/merchant-id/merchant-name', name: 'Products', component: MerchantDetailsComponent, useAsDefault: true },
        { path: '/stores/merchant-id/merchant-name/offers', name: 'MerchantOffers', component: MerchantOffersComponent }
])
export class AppComponent {
    pageTitle: string = 'Merchant Name'; //"Basic Plus"
}