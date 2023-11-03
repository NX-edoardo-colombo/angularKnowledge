import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn, CanActivate, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { DrinkInfoPageService } from './drink-info-page.service';



export const drinkInfoGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  return inject(DrinkInfoPageService).isDrinkAlcholic$(route.params['id']).pipe(
    map((isAlcoholic: boolean) => isAlcoholic ? true : router.parseUrl('/forbidden-drink')),
    catchError(e => {
      return of(router.parseUrl('/error'))
    })
  )
};
