import { Component, OnInit } from '@angular/core';
import { DishService } from '../../tab1/dish.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../../tab1/dish.model';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  dish: Dish;
  id: string;
  constructor(private route: ActivatedRoute,
    private dishSerive: DishService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('dishId');
    this.dish = this.dishSerive.getDish(this.id);
  }

}
