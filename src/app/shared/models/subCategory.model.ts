import { Item } from "./item.model";

export class SubCategory {
    constructor(
        public name: string,
        public items?: Item[]
    ) {}
}