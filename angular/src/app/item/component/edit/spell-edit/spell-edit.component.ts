import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { Spell } from 'src/app/item/domain/spell';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.scss']
})
export class SpellEditComponent implements OnInit {

  @Input()
  spell: Spell = new Spell();

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.spell = Object.assign(new Spell(), this.spell);
  }

  saveItem(): void {
    this.httpService.saveItem(this.spell).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
