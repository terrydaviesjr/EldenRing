import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { Material } from 'src/app/item/domain/material';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {

  @Input()
  material: Material = new Material();

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.material = Object.assign(new Material(), this.material);
  }

  saveItem(): void {
    this.httpService.saveItem(this.material).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
