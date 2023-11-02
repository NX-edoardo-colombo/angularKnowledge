export interface Ingredient {
    name: string,
    measure: string
}

export interface Drink {
    id: string,
    name: string,
    description: string,
    ingredients: Ingredient[],
    instructions: string,
    glass: string,
    category: string,
    image: string
}