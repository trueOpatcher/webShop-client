import { Item } from "./item.model";
import { SubCategory } from "./subCategory.model";

export class Category {
    constructor(
        public name: string,
        public items?: Item[],
        public subCategories?: SubCategory[]
    ) {}
}