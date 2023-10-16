import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasyComponent } from './Components/easy/easy.component';
import { EasyAComponent } from './Components/easy-a/easy-a.component';
import { EasyBComponent } from './Components/easy-b/easy-b.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyComponent,
    EasyAComponent,
    EasyBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
