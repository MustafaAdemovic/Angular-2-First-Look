import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppDetailComponent} from './app-detail.component';

@NgModule({
  imports:[ 
    BrowserModule 
  ],
  declarations:[ 
    AppComponent,
    AppDetailComponent
  ],
  bootstrap:[ 
    AppComponent 
  ]
})
export class AppModule { }
