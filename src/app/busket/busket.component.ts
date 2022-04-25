import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { Item } from '../shared/models/item.model';
import { BusketService } from '../shared/services/busket.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss']
})
export class BusketComponent implements OnInit {

  constructor(private busketService: BusketService) { }

  items: Item[] = [];

  currentItems: Item[] = [];
  priceForAll!: number;

  ngOnInit(): void {
    this.items = [{name: 'sge', imageUrl: 'sdge', price: 'saseg', desc: 'asge'}, {name: 'sge', imageUrl: 'sdge', price: 'saseg', desc: 'asge'}];

    this.busketService.busket.subscribe(items => {
      this.items = items;

      let prices = 0;

      for(let item of items) {
        prices += +item.price;
      }
      
      this.priceForAll = prices;
    })
  }

  onShowItem(index:number) {
    this.currentItems = [this.items[index]];

  }

  onShowAll() {
    this.currentItems = this.items;
  }

  onRemoveItem(index: number) {
    
    let newItems = this.items;
    newItems.splice(index, 1);

    this.busketService.busket.next(newItems);
  }

}
