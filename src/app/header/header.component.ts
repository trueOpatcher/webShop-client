import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../shared/models/category.model';
import { Item } from '../shared/models/item.model';
import { CategoriesService } from '../shared/services/categories.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  
  constructor(private catService: CategoriesService,
              private router: Router,
              private authService: AuthService) {}

  categories: Category[] = [];
  

  ngOnInit(): void {

    this.catService.update().subscribe();
  
    this.sub = this.catService.categories.subscribe(categories => {
      this.categories = categories;
    });
  }

  onSelectCategory(catName: any, items?: Item[]) {
    this.catService.currentCategory.next({catName: catName, items: items});
    this.router.navigate(['/shop']);
  }

  onSelectSubCategory(catName: string, subName: string, items?: Item[]) {
    this.catService.currentCategory.next({catName: catName, subName: subName, items: items});
    this.router.navigate(['/shop']);

  }

  onLogout() {
    this.authService.logout().subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
