import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../shared/models/item.model';
import { BusketService } from '../shared/services/busket.service';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {

  constructor(private catService: CategoriesService,
              private busketService: BusketService) { }

  sub!: Subscription;

  category: any;

  ngOnInit(): void {
    this.sub = this.catService.currentCategory.subscribe(category => {
      this.category = category;
      
    })
  }

  onAddToBusket(item: Item) {
    this.busketService.addItem(item);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
