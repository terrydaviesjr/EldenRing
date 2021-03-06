import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { Armor } from 'src/app/item/domain/armor';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-armor-edit',
  templateUrl: './armor-edit.component.html',
  styleUrls: ['./armor-edit.component.scss']
})
export class ArmorEditComponent implements OnInit {
  
  @Input()
  armor: Armor = new Armor();

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.armor = Object.assign(new Armor(), this.armor);
  }

  saveItem(): void {
    this.httpService.saveItem(this.armor).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
