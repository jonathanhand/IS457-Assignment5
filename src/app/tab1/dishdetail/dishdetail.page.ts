import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  item: Dish;
  id: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private dishService: DishService) { }

    dish: { id: string; title: string; description: string; image: string; price: number; };
    orderedDish: { id: string };
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('dishId');
    this.item = this.dishService.getDish(this.id);
  }
  onBookDish(remove = false) {
    alert(this.id);
    this.router.navigateByUrl('/tabs/tab1');
    this.modalCtrl.dismiss(remove);
    this.orderedDish.id = this.route.snapshot.paramMap.get('dishId');
    
  }
}
