import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.scss']
})
export class EditItemsComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private catService: CategoriesService,
              private itemService: ItemService) { }

  sub!: Subscription;
  cardToggle: boolean = false;

  currentCategory: any;

  ngOnInit(): void {
    this.sub = this.catService.currentCategory.subscribe(category => {
      this.currentCategory = category;
    })
  }

  

  onClickAddCard() {
    this.router.navigate(['edit/item', 'new']);
  }

  onClickDelete(itemName: string) {
    const catName = this.currentCategory.catName;
    let subName;
    if(this.currentCategory.subName) {
      subName = this.currentCategory.subName;
    } else {
      subName = null;
    }
    
    const itemToDelete = {catName: catName, subName: subName, itemName: itemName};

    this.itemService.deleteItem(itemToDelete).subscribe(() => {
      this.catService.fetchCategories().subscribe();
      this.currentCategory = !this.currentCategory;
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  

}
