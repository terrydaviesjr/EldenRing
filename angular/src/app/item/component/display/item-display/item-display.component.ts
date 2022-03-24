import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/item/domain/item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {

  // Assigned dynamically via components
  item: any ={};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['item']) {
        this.item = Object.assign(new Item(), data['item']);
      }
    });
  }

}
