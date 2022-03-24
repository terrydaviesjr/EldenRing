import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { Item } from 'src/app/item/domain/item';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-basic-item-edit',
  templateUrl: './basic-item-edit.component.html',
  styleUrls: ['./basic-item-edit.component.scss']
})
export class BasicItemEditComponent implements OnInit {

  @Input()
  item: Item = new Item();

  form: FormGroup = new FormGroup({});

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.item = Object.assign(new Item(), this.item);

    Object.keys(this.item).forEach((key: string, _index: number) => {
        this.form.addControl(key, new FormControl(this.item[key]));
    })

    this.form?.valueChanges.subscribe((data) => {
      this.item = Object.assign(this.item, data);
    })

  }

  saveItem(): void {
    this.httpService.saveItem(this.item).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
