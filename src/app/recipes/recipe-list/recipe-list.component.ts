import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recService: RecipeService,
              private routerService: Router,
              private route: ActivatedRoute) { }

//activated route will inf orm us of the current route

  ngOnInit() {
    this.recipes = this.recService.getRecipes();
  }

  onNewRecipe(){
    //in this commit we learn how to use the routerservice module to navigate in the type script code
    //fo rthe purposes ofrelative file path navigation
    this.routerService.navigate(['new'], { relativeTo: this.route})
  }

}
