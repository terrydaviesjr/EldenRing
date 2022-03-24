import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { AshOfWar } from 'src/app/item/domain/ash-of-war';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-ash-of-war-edit',
  templateUrl: './ash-of-war-edit.component.html',
  styleUrls: ['./ash-of-war-edit.component.scss']
})
export class AshOfWarEditComponent implements OnInit {

  @Input()
  ashOfWar: AshOfWar = new AshOfWar();

  form: FormGroup = new FormGroup({});

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.ashOfWar = Object.assign(new AshOfWar(), this.ashOfWar);

    Object.keys(this.ashOfWar).forEach((key: string, _index: number) => {
        this.form.addControl(key, new FormControl(this.ashOfWar[key]));
    })

    this.form?.valueChanges.subscribe((data) => {
      this.ashOfWar = Object.assign(this.ashOfWar, data);
    })

  }

  saveItem(): void {
    this.httpService.saveItem(this.ashOfWar).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }
}
