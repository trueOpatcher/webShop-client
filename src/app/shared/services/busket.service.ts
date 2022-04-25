
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({providedIn: 'root'})

export class BusketService {

    // busket: Item[] = [];
    busket = new BehaviorSubject<Item[]>([]);



    
    addItem(item: any) {
        let newBusket = this.busket.getValue();
        newBusket.push(item);
        this.busket.next(newBusket);
    }


}

