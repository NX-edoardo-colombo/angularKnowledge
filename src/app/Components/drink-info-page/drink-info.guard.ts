import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DrinkInfoPageService } from './drink-info-page.service';

@Injectable({
  providedIn: 'root'
})
export class DrinkInfoGuard {
  constructor(private drinkInfoPageService: DrinkInfoPageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.drinkInfoPageService.isDrinkAlcholic$(route.params['id']).pipe(
      map((isAlcoholic: boolean) => {
        if (!isAlcoholic) {
          this.router.navigate(['/forbidden-drink']);
          return false;
        }
        return true;
      })
    );
  }
}
/* 
export const drinkInfoGuard: CanActivateFn = (route, state) => {
  return inject(DrinkInfoPageService).isDrinkAlcholic$(route.params['id'])
};
 */