import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
//slakjsdlkfjalkfj
//////slkjflskj
  //public property for event EventEmitter
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('the cake is a lie Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('french fry', 222)
   ]
 ),

    new Recipe('sandwich',
     'This is simply a test',
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [
       new Ingredient('buns',2),
       new Ingredient('meat',1)
     ]
   )
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipe(index: number){
    return this.recipes[index];
  }


  addIngredientsToShoppingList(ings: Ingredient[]){
    this.slService.addIngredients(ings);
  }

  getRecipes(){
    return this.recipes.slice();
  }
  app(){
    console.log('hello');
  }
}
