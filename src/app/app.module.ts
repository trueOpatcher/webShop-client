import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopModule } from './shop/shop.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppInterceptorService } from './app-interceptor.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EditModule } from './edit/edit.module';
import { BusketComponent } from './busket/busket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShopModule,
    MaterialModule,
    NoopAnimationsModule,
    HttpClientModule,
    EditModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptorService,
    multi: true
  },
 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
