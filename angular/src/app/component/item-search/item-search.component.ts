import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/domain/item';
import { HttpService } from 'src/app/http/http.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  items: Item[] = [];
  displayedColumns: string[] = ['name', 'description'];

  constructor(private route: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.items = data['items'] || [];
      console.log(this.items);
    })

    this.httpService.findItem('club').subscribe((data) => {
      console.log(data);
    })
  }

}
