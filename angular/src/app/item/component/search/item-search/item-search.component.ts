import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/common/service/search.service';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { Item } from 'src/app/item/domain/item';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {

  items: Item[] = [];
  filteredItems: Item[] = [];
  itemTypeOptions: ItemType[] = ItemTypeOptions;

  displayedColumns: string[] = ['name', 'description', 'location'];

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private searchService: SearchService,
              private httpService: ItemHttpService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.items = data['items'] || [];
      this.filteredItems = JSON.parse(JSON.stringify(this.items));
    })

    this.form.valueChanges.subscribe((data) => {
      this.filteredItems = this.searchService.filter(this.items, {
        name: data.name, 
        description: data.description, 
        location: data.location,
        type: data.type
      });
    })
  }


}
