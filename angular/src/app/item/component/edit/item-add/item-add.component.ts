import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { Item } from 'src/app/item/domain/item';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {
  
  item: Item = new Item();
  itemTypeOptions: ItemType[] = ItemTypeOptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
  }

  continue(): void {
    this.httpService.saveItem(this.item).subscribe(() => {
      this.router.navigate(['../', this.item.alias, 'edit'], {relativeTo: this.route});
    })
  }

}
