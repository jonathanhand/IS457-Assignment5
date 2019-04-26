import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../../tab1/dish.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../../tab1/dish.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage {
  @Input() selectedDish: Dish;
  dish: Dish[];

  constructor(private route: ActivatedRoute,
    private dishService: DishService,
    private modalCtrl: ModalController) { }
    onCancel() {
      this.modalCtrl.dismiss(null, 'cancel');
    }
    onOrderDish() {
      this.modalCtrl.dismiss(null, 'confirm');
      
    }
  isFavorite(dish: Dish) {
    return this.dishService.isDishOrdered(dish);
  }
  ionViewWillEnter() {
    this.dish = this.dishService.getOrderedDish();
  }

}
