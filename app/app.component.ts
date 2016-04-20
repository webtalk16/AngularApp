import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { GeneralInfoComponent } from './home/general-info.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
    selector: 'pm-app',
    template:`
    <div>
        <nav class='navbar navbar-default' style='background-color:#3d85c6;border-color:#000000'>
            <div class='container-fluid' style='padding:10px 0px;'>
                <a class='navbar-brand' style='padding:0px;margin-left:4%'><img src='https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' class='img-responsive' style='max-height:100%;' /></a>
                <ul class='nav navbar-nav' style='float:right;background-color:#FFFFFF;border:1px solid #000000; margin-right:4%;'>
                    <li><a [routerLink]="['GeneralInfo']" style='border-right:1px solid #000000; padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>General Info</a></li>
                    <li><a [routerLink]="['Products']" style='border-right:1px solid #000000; padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>Offers</a></li>
                    <li><a [routerLink]="['ProductDetail']" style='padding-bottom:0px;padding-top:0px;margin-bottom:15px;margin-top:15px;'>Sign Up</a></li>
                </ul>
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
    providers: [ProductService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
        { path: '/general-info', name: 'GeneralInfo', component: GeneralInfoComponent, useAsDefault: true },
        { path: '/products', name: 'Products', component: ProductListComponent },
        { path: '/product-detail', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Merchant Name';
}