import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AddflightComponent } from './addflight/addflight.component';
import { HttpClientModule } from '@angular/common/http';
import { AllflightComponent } from './allflight/allflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';


@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    AllflightComponent,
    UpdateflightComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
