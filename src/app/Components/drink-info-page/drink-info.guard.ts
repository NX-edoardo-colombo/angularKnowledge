import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DrinkInfoPageService } from './drink-info-page.service';

export const drinkInfoGuard: CanActivateFn = (route, state) => {
  return inject(DrinkInfoPageService).isDrinkAlcholic$(route.params['id'])
};
