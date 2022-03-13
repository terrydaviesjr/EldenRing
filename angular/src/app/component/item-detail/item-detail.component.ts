import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/domain/item';
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item = new Item();

  //@ts-ignore
  itemForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['item']) {
        this.item = data['item'];
      }

      this.itemForm = new FormGroup({
        name: new FormControl(this.item.name),
        alias: new FormControl(this.item.alias),
        description: new FormControl(this.item.description),
        location: new FormControl(this.item.location)
      })
    });
    
    this.itemForm?.valueChanges.subscribe((data) => {
      this.item = {...this.item, ...data};
    })
  }

  saveItem(): void {
    console.log(this.item);
    this.httpService.saveItem(this.item).subscribe(() => {
      if (!this.item._id) {
        this.router.navigate(['../', this.item.alias], {relativeTo: this.route})
      }
    })
  }

}
