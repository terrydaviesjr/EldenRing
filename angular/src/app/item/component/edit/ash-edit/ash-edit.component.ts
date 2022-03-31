import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { Ash } from 'src/app/item/domain/ash';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-ash-edit',
  templateUrl: './ash-edit.component.html',
  styleUrls: ['./ash-edit.component.scss']
})
export class AshEditComponent implements OnInit {

  @Input()
  ash: Ash = new Ash();

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.ash = Object.assign(new Ash(), this.ash);
  }

  saveItem(): void {
    this.httpService.saveItem(this.ash).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }


}
