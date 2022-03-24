import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from 'src/app/item/domain/item';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-item-query',
  templateUrl: './item-query.component.html',
  styleUrls: ['./item-query.component.scss']
})
export class ItemQueryComponent implements OnInit {
  
  filteredItems: Item[] = [];
  
  displayedColumns: string[] = ['name', 'description', 'location'];

  form: FormGroup = new FormGroup({
    query: new FormControl('')
  });

  constructor(private httpService: ItemHttpService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.httpService.searchItems(this.form.controls['query'].value).subscribe((data) => {
      this.filteredItems = data || [];
    })
  }

}
