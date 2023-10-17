export interface DrinksLookupDto {
  drinks: DrinkLookupDto[]
}

export interface DrinkLookupDto {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}