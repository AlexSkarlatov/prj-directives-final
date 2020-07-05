import { Ingredient } from '../shared/ingredient.model';

import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    // return this.ingredients.slice();
  }
  addIngredients(ings: Ingredient[]){
    this.ingredients.push(...ings);
    this.ingredientsChanged.emit(this.ingredients.slice());
    //this one has too many unnecessary event emisions
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
  }

}
