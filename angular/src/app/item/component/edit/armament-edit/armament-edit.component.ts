import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { Armament } from 'src/app/item/domain/armament';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-armament-edit',
  templateUrl: './armament-edit.component.html',
  styleUrls: ['./armament-edit.component.scss']
})
export class ArmamentEditComponent implements OnInit {

  @Input()
  armament: Armament = new Armament();

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private httpService: ItemHttpService) {}

  ngOnInit(): void {
    this.armament = Object.assign(new Armament(), this.armament);
  }

  saveItem(): void {
    this.httpService.saveItem(this.armament).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
