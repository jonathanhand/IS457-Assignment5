import { Component, OnInit } from '@angular/core';
import { DishService } from './dish.service';
import { Dish } from './dish.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  loadedDishes: Dish[];
  constructor (private dishService: DishService) {}
  ngOnInit () {
    this.loadedDishes = this.dishService.dishes;
  }
}
