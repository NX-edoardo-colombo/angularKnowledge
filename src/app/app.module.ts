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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {MatCardModule} from '@angular/material/card';
import { DrinkPageCardComponent } from './Components/drink-page/drink-page-card/drink-page-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    EasyComponent,
    EasyAComponent,
    EasyBComponent,
    DrinkPageTableComponent,
    DrinkPageComponent,
    DrinkPageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
