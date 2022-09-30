import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourpackagelistComponent } from './tourpackagelist/tourpackagelist.component';

import { CreatedetailsComponent } from './createdetails/createdetails.component';
import {FormsModule} from '@angular/forms';
import { FindcostComponent } from './findcost/findcost.component'
@NgModule({
  declarations: [
    AppComponent,
    TourpackagelistComponent,
    
    CreatedetailsComponent,
         FindcostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
