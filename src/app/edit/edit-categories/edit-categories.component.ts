import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';
import { Item } from 'src/app/shared/models/item.model';
import { SubCategory } from 'src/app/shared/models/subCategory.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {

  constructor(private catService: CategoriesService,
              private router: Router) { }

  categories: Category[] = [];

  ngOnInit(): void {

    this.update();

    this.catService.categories.subscribe(categories => {
      console.log('new category');
      this.categories = categories;
    });
  } 

  onSelectCategory(catName: any, items?: Item[]) {
    this.catService.currentCategory.next({catName: catName, items: items});
    this.router.navigate(['/edit/items']);
  }

  onSelectSubCategory(catName: string, subName: string, items?: Item[]) {
    this.catService.currentCategory.next({catName: catName, subName: subName, items: items});
    this.router.navigate(['/edit/items']);
  }

  onDeleteCategory(categoryName: string) {

    this.catService.deleteCategory(categoryName).subscribe(() => {
      this.update();
      this.catService.currentCategory.next({});
    })

  }

  onDeleteSubCategory(categoryName: string, subName: string) {

    this.catService.deleteSubCategory(categoryName, subName).subscribe(() => {
      this.update();
      this.catService.currentCategory.next({});
    })

  }

  onAddCategory(categoryName: string) {
    if(categoryName === '') return;

    this.catService.addCategory(categoryName).subscribe(() => {
      this.update();
    });

  }

  onAddSubCategory(categoryName: string, subName: string) {
    if(categoryName === '') return;

    this.catService.addSubCategory(categoryName, subName).subscribe(() => {
      this.update();
    });
  }

  private update() {

    this.catService.fetchCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  

}
