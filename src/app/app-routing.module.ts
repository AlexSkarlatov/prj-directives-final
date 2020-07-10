import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
//step 2 is to  import all of the components you will be using in the <router-module> tag





//step 3 is define the Routes
// a route entry takes the form of
// {pathField: 'path/value/:isrequired', component(field): componentValueToBeDisplayedAtThisCurrentPath}
const appRoutes: Routes = [
 { path: '', redirectTo: '/recipes', pathMatch: 'full'},
 { path: 'recipes', component: RecipesComponent},
 { path: 'shopping-list', component: ShoppingListComponent},
 { path: '**', redirectTo: '/recipes'},
];
/// merge this guy with the primary routing branch

@NgModule({
    //below is a very important to import the routerModule and use it to assign
    //my local path array to the routerModule, then I exprot this in the exports
    //array of the ngmodule annotation
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
  //this name above is snet to the app.module.ts file where the  where
  //where it may take advantage of the routerModule object and the Routes object
}
