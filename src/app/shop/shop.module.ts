import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShopRoutingModule } from "./shop-routing.module";
import { ShopComponent } from "./shop.component";



@NgModule({
    declarations: [
        ShopComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ShopRoutingModule
    ]
})

export class ShopModule {
    
}