import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { EditRoutingModule } from "./edit-routing.module";
import { EditComponent } from "./edit.component";
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
    declarations: [
    EditComponent,
    EditCategoriesComponent,
    EditItemsComponent,
    EditItemComponent
  ],
    imports: [
        RouterModule,
        EditRoutingModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})

export class EditModule {
    
}