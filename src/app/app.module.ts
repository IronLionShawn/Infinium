import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule, RoutedComponents } from './app-routing.module';

import { Utilities } from './services/utilities/utilities.service';
import { DataStore } from './services/data-store/data-store.service';
import { HttpService } from './services/http-service/http-service.service';
import { RequestClientService } from './services/request-client/request-client.service';



@NgModule({
  declarations: [
  	AppComponent,
  	RoutedComponents,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [Utilities, DataStore, HttpService, RequestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
