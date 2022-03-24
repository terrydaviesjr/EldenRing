import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  form: FormGroup = new FormGroup({});

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.material = Object.assign(new Material(), this.material);

    Object.keys(this.material).forEach((key: string, _index: number) => {
        this.form.addControl(key, new FormControl(this.material[key]));
    })

    this.form?.valueChanges.subscribe((data) => {
      this.material = Object.assign(this.material, data);
    })

  }

  saveItem(): void {
    this.httpService.saveItem(this.material).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
