import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasyComponent } from './Components/easy/easy.component';
import { EasyAComponent } from './Components/easy-a/easy-a.component';
import { EasyBComponent } from './Components/easy-b/easy-b.component';
import { DrinkPageTableComponent } from './Components/drink-page/drink-page-table/drink-page-table.component';
import { DrinkPageComponent } from './Components/drink-page/drink-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyComponent,
    EasyAComponent,
    EasyBComponent,
    DrinkPageTableComponent,
    DrinkPageComponent
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
