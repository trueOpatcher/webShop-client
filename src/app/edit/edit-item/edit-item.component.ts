import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})


export class EditItemComponent implements OnInit, OnDestroy {

  constructor(private itemService: ItemService,
              private catService: CategoriesService) { }

  sub!: Subscription;
  currentCategory!: any;

  ngOnInit(): void {
    this.sub = this.catService.currentCategory.subscribe(currentCategory => {
      this.currentCategory = currentCategory;
      
    })
  }

  onClickCard() {
    // console.log(this.cardToggle);
    // this.cardToggle = !this.cardToggle; 
  }

  @ViewChild('imgSrc') imgSrc!: ElementRef;

  infoForm = new FormGroup({
    image: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required]),
    desc: new FormControl(null, Validators.required)
  })

  

  onImgChange(file: any) {

    if(file.target.files[0]) {
      const img = file.target.files[0];
      let reader = new FileReader();

      reader.onload = e => {
        this.imgSrc.nativeElement.src = e.target?.result;
      };
      reader.readAsDataURL(img);

      this.infoForm.patchValue({
        image: img
      });
    }
  }

  onSubmit() {
    const catName = this.currentCategory.catName;
    const subName = this.currentCategory.subName;

    const img = this.infoForm.value.image;
    const name = this.infoForm.value.name;
    const price = this.infoForm.value.price;
    const desc = this.infoForm.value.desc;

    const file = img;

    this.itemService.createItem(file, name, price, desc, catName, subName).subscribe(() => {
      
      this.catService.update().subscribe();
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
