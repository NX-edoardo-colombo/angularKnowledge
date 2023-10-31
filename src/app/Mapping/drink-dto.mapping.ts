import { Drink } from "../Models/drink.model";
import { DrinkCardDto } from "../Infrastructure/DTOs/drink-card.dto";

export function DrinkImportDtoToDrink(source: DrinkCardDto): Drink {

    return {
        id: source.idDrink,
        name: source.strDrink,
        description: `${source.strCategory} ${source.strGlass}`,
        ingredients: [
            source.strIngredient1, source.strIngredient2, source.strIngredient3,
            source.strIngredient4, source.strIngredient5, source.strIngredient6,
            source.strIngredient7, source.strIngredient8, source.strIngredient9,
            source.strIngredient10, source.strIngredient11, source.strIngredient12,
            source.strIngredient13, source.strIngredient14, source.strIngredient15].filter(ingredient => ingredient),
        instructions: source.strInstructions


    } as Drink


}