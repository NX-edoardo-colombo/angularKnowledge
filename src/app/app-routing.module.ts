import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkInfoPageComponent } from './Components/drink-info-page/drink-info-page.component';
import { DrinksPageComponent } from './Components/drinks-page/drinks-page.component';

const routes: Routes = [
  { path: 'drink/:id', component: DrinkInfoPageComponent },
  { path: '**', component: DrinksPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
