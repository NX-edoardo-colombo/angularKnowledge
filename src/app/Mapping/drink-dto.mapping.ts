import { Drink, Ingredient } from "../Models/drink.model";
import { DrinkCardDto } from "../Infrastructure/DTOs/drink-card.dto";

export function DrinkImportDtoToDrink(source: DrinkCardDto): Drink {

    return {
        id: source.idDrink,
        name: source.strDrink,
        description: `${source.strCategory} ${source.strGlass}`,
        ingredients: [
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient2, source.strMeasure2),
            mapToIngredient(source.strIngredient3, source.strMeasure3),
            mapToIngredient(source.strIngredient4, source.strMeasure4),
            mapToIngredient(source.strIngredient5, source.strMeasure5),
            mapToIngredient(source.strIngredient6, source.strMeasure6),
            mapToIngredient(source.strIngredient7, source.strMeasure7),
            mapToIngredient(source.strIngredient8, source.strMeasure8),
            mapToIngredient(source.strIngredient9, source.strMeasure9),
            mapToIngredient(source.strIngredient10, source.strMeasure10),
            mapToIngredient(source.strIngredient11, source.strMeasure11),
            mapToIngredient(source.strIngredient12, source.strMeasure12),
            mapToIngredient(source.strIngredient13, source.strMeasure13),
            mapToIngredient(source.strIngredient14, source.strMeasure14),
            mapToIngredient(source.strIngredient15, source.strMeasure15)].filter(ingredient => ingredient.name),

        instructions: source.strInstructions,
        glass: source.strGlass,
        image: source.strDrinkThumb,
        alcoholic: source.strAlcoholic


    } as Drink


}

function mapToIngredient(name: string, measure: string) {
    return { name: name, measure: measure } as Ingredient
}