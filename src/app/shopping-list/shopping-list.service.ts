import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
   private ingredients: Ingredient[] = [
    new Ingredient('Pears', 4),
    new Ingredient('Plums', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}