import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Description of the Test Recipe', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_1280.jpg'),
    new Recipe('A Test Recipe', 'Description of the Test Recipe', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
