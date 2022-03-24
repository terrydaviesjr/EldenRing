import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  form: FormGroup = new FormGroup({});

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.ash = Object.assign(new Ash(), this.ash);

    Object.keys(this.ash).forEach((key: string, _index: number) => {
        this.form.addControl(key, new FormControl(this.ash[key]));
    })

    this.form?.valueChanges.subscribe((data) => {
      this.ash = Object.assign(this.ash, data);
    })

  }

  saveItem(): void {
    this.httpService.saveItem(this.ash).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }


}
