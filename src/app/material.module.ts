import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule ({

    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ]
})

export class MaterialModule {
    
}