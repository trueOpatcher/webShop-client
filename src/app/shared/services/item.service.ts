import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, take, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { CategoriesService } from "./categories.service";

  

@Injectable({providedIn: 'root'})

export class ItemService {
    private serverUrl = environment.SERVER_URL;

    constructor(private http: HttpClient,
                private catService: CategoriesService) {

    }

    createItem(file: any, name: string, price: string, desc: string, categoryName: string, subCategoryName?: string) {

        let formData = new FormData();

        formData.append('img', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('desc', desc);
        formData.append('categoryName', categoryName);
        
        if(subCategoryName) {
        formData.append('subCategoryName', subCategoryName);
        }




        return this.http.post(this.serverUrl + '/item/create', formData).pipe(take(1));
    }

    deleteItem(itemToDelete: any) {
        return this.http.delete(this.serverUrl + '/item/delete', { body: itemToDelete }).pipe(take(1));
    }
}