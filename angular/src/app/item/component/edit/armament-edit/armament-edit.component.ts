import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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

  form: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private route: ActivatedRoute,
              private httpService: ItemHttpService) {}

  ngOnInit(): void {
    this.armament = Object.assign(new Armament(), this.armament);

    this.armament.initStats();

    console.log(this.armament);

    Object.keys(this.armament).forEach((key: string, _index: number) => {

        if (key === 'stats') {

          let controlArray: any = [];
          
          let formArray = new FormArray([]);
          let formControl = new FormControl

          Object.keys(this.armament[key]).forEach((j: string, _index: number) => {
            //@ts-ignore
            controlArray.push(new FormControl(this.armament[key][j]));
            //this.form.controls[key].push(new FormControl(this.armament[key][j]));
          })

          this.form.addControl(key, new FormArray(controlArray));

          // this.form.addControl(key, new FormArray([
          //   new FormControl(this.armament[key].standard),
          //   new FormControl(this.armament[key].heavy),
          //   new FormControl(this.armament[key].keen),
          //   new FormControl(this.armament[key].quality),
          //   new FormControl(this.armament[key].fire),
          //   new FormControl(this.armament[key].flame),
          //   new FormControl(this.armament[key].lightning),
          //   new FormControl(this.armament[key].sacred),
          //   new FormControl(this.armament[key].magic),
          //   new FormControl(this.armament[key].cold),
          //   new FormControl(this.armament[key].poison),
          //   new FormControl(this.armament[key].blood),
          //   new FormControl(this.armament[key].occult)
          // ]));

        } else {
          this.form.addControl(key, new FormControl(this.armament[key]));
        }
    }) 

    this.form?.valueChanges.subscribe((data) => {
      this.armament = Object.assign(this.armament, data);
    })

  
    console.log(this.form);

  }

  saveItem(): void {
    delete this.armament['baseStats'];
    this.httpService.saveItem(this.armament).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

  private buildForm(): void {

  }
}
