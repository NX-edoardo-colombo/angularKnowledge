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
        measures: [
            source.strMeasure1, source.strMeasure2, source.strMeasure3,
            source.strMeasure4, source.strMeasure5, source.strMeasure6,
            source.strMeasure7, source.strMeasure8, source.strMeasure9,
            source.strMeasure10, source.strMeasure11, source.strMeasure12,
            source.strMeasure13, source.strMeasure14, source.strMeasure15].filter(measures => measures),
        instructions: source.strInstructions,
        glass: source.strGlass,
        image: source.strDrinkThumb


    } as Drink


}