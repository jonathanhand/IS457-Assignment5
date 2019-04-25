import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private _dishes: Dish[] = [
    new Dish(
      'd1',
      'Bruschetta',
      'Diced tomatoes, basil, garlic, red onion and feta cheese drizzled with olive oil on crispy ciabatta bread',
      '../assets/imgs/bruschetta.jpg',
      8.95
    ),
    new Dish(
      'd2',
      'Stuffed Mushrooms',
      'Garlic seasoned breadcrumbs with white wine sauce',
      '../assets/imgs/stuffed_mushrooms.jpg',
      9.50
    ),
    new Dish(
      'd3',
      'Fried Calamari',
      'Served with Marinara sauce',
      '../assets/imgs/fried_calamari.jpg',
      10.50
    ),
    new Dish(
      'd4',
      'Sherry Mushrooms',
      'Fresh white mushrooms sautéed in a butter, sherry sauce',
      '../assets/imgs/sherry_mushrooms.jpg',
      8.95
    ),
    new Dish(
      'd5',
      'Oven Roasted Potatoes',
      'Garlic and dill infused oven roasted fingerling potatoes and root vegetables',
      '../assets/imgs/roasted_potatoes.jpg',
      7.50
    ),
    new Dish(
      'd6',
      'Rigatoni Al Forno',
      'Pasta baked with meat sauce, ricotta and mozzarella cheese',
      '../assets/imgs/rigatoni.jpg',
      14.95
    ),
    new Dish(
      'd7',
      'Penne Pomodoro Seco',
      'Pasta tossed in a creamy sundried tomato pesto sauce with chunks of chicken breast and asparagus',
      '../assets/imgs/penne.jpg',
      13.95
    ),
    new Dish(
      'd8',
      'Margarita',
      'Olive Oil, garlic, tomato, mozzarella cheese, fresh basil and Romano cheese',
      '../assets/imgs/margarita.jpg',
      12.50
    ),
    new Dish(
      'd9',
      'Patrizia',
      'Pizza sauce, Italian sausage, diced tomato, mozzarella cheese, Ricotto cheese and fresh basil',
      '../assets/imgs/patrizia.jpg',
      11.95
    )
  ];
  get dishes() {
    return [...this._dishes];
  }
  constructor() { }

  getDish(id: string) {
    return {...this._dishes.find(p => p.id === id)};
  }
}
