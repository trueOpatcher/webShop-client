import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { EditCategoriesComponent } from "./edit-categories/edit-categories.component";
import { EditItemComponent } from "./edit-item/edit-item.component";
import { EditItemsComponent } from "./edit-items/edit-items.component";
import { EditComponent } from "./edit.component";

 
const routes: Routes = [
    {
        path: '', component: EditComponent,
        canActivate: [AuthGuard],
        children: [
            // { path: '' },
            { path: 'categories', component: EditCategoriesComponent},
            { path: 'items', component: EditItemsComponent},
            { path: 'item/:name', component: EditItemComponent}
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EditRoutingModule {

}