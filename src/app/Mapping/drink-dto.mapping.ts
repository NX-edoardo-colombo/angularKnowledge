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
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1),
            mapToIngredient(source.strIngredient1, source.strMeasure1)].filter(ingredient => ingredient.name),

        instructions: source.strInstructions,
        glass: source.strGlass,
        image: source.strDrinkThumb


    } as Drink


}

function mapToIngredient(name: string, measure: string) {
    return { name: name, measure: measure } as Ingredient
}