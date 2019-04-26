import { Component, OnInit } from '@angular/core';
import { Dish } from '../tab1/dish.model';
import { DishService } from '../tab1/dish.service';
import { ModalController } from '@ionic/angular';
import { CreateOrderPage } from './create-order/create-order.page';
import { IonItemSliding } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dish: Dish[];
  constructor (
    private dishService: DishService,
    private modalCtrl: ModalController) {}
  ionViewWillEnter() {
    this.dish = this.dishService.getOrderedDish();
  }
  onRemoveFromFavorites(dish: Dish, slidingE1: IonItemSliding) {
    this.dishService.removeDish(dish);
    this.dish = this.dishService.getOrderedDish();
    slidingE1.close();

  }
  isFavorite(dish: Dish) {
    return this.dishService.isDishOrdered(dish);
  }
  deliveryInfo() {
  }
  async onOrderDish() {
    const modal = await this.modalCtrl.create({
      component: CreateOrderPage,
      componentProps: {selectedDish: this.dish}
    });
    await modal.present();
  }
}
