import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../dish.model';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  dish: Dish;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private dishSerive: DishService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('dishId');
    this.dish = this.dishSerive.getDish(this.id);
  }

}
