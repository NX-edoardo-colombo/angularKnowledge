import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkInfoPageComponent } from './Components/drink-info-page/drink-info-page.component';
import { DrinksPageComponent } from './Components/drinks-page/drinks-page.component';
import { drinkInfoGuard } from './Components/drink-info-page/drink-info.guard';
import { ForbiddenPageComponent } from './Components/forbidden-page/forbidden-page.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';

const routes: Routes = [
  { path: 'drink/:id', component: DrinkInfoPageComponent, canActivate: [drinkInfoGuard] },
  { path: 'forbidden-drink', component: ForbiddenPageComponent },
  { path: 'home', component: DrinksPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
