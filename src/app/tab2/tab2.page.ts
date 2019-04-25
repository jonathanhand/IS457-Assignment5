import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishService } from '../tab1/dish.service';
import { Dish } from '../tab1/dish.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  loadedDishes: Dish[];
  constructor (private dishService: DishService) {}
  ngOnInit () {
    this.loadedDishes = this.dishService.dishes;
  }
}
