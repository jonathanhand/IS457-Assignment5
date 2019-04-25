import { Component, OnInit } from '@angular/core';
import { Dish } from '../tab1/dish.model';
import { DishService } from '../tab1/dish.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dish: Dish[];
  constructor (
    private dishService: DishService) {}
  ionViewWillEnter() {
    this.dish = this.dishService.getOrderedDish();
  }
  onRemoveFromFavorites(dish: Dish) {
    this.dishService.removeDish(dish);
    this.dish = this.dishService.getOrderedDish();

  }
  isFavorite(dish: Dish) {
    return this.dishService.isDishOrdered(dish);
  }
}
