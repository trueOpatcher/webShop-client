import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, map, pipe, take, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Category } from "../models/category.model";


@Injectable({ providedIn: 'root' })

export class CategoriesService {

    serverUrl = environment.SERVER_URL;

    currentCategory = new BehaviorSubject<any | null>(null);
    categories = new BehaviorSubject<any | null>(null);

    constructor(private http: HttpClient) { }



    fetchCategories() {
        return this.http.get<Category[]>(this.serverUrl + '/categories/fetch').pipe(
        take(1), 
        tap(categories => {
            console.log('next');
            this.categories.next(categories);
        }));
        
    }

    addCategory(categoryName: string) {
        return this.http.post<any>(this.serverUrl + '/categories/add/category', {name: categoryName}).pipe(take(1));
    }

    addSubCategory(categoryName: string,subCategoryName: string) {
   

        return this.http.post(this.serverUrl + '/categories/add/sub', {categoryName: categoryName, subName: subCategoryName}).pipe(take(1));
    }

    deleteCategory (catName: string) {
        return this.http.delete(this.serverUrl + '/categories/delete', {body: {categoryName: catName}}).pipe(take(1));
    }

    deleteSubCategory(catName: string, subName: string) {
        return this.http.delete(this.serverUrl + '/categories/delete/sub', { body: {categoryName: catName, subName: subName}}).pipe(take(1));
    }

    update() {
        return this.fetchCategories()
    }
}