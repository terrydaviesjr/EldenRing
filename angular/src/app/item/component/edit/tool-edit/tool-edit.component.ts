import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { ItemTypeOptions } from 'src/app/item/domain/const/item-type';
import { ItemType } from 'src/app/item/domain/item-type';
import { Tool } from 'src/app/item/domain/tool';
import { ItemHttpService } from 'src/app/item/http/item-http.service';

@Component({
  selector: 'app-tool-edit',
  templateUrl: './tool-edit.component.html',
  styleUrls: ['./tool-edit.component.scss']
})
export class ToolEditComponent implements OnInit {
  @Input()
  tool: Tool = new Tool();

  form: FormGroup = new FormGroup({});

  itemTypeOptions: ItemType[] = ItemTypeOptions;
  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: ItemHttpService) { }

  ngOnInit(): void {
    this.tool = Object.assign(new Tool(), this.tool);

    Object.keys(this.tool).forEach((key: string, _index: number) => {
        this.form.addControl(key, new FormControl(this.tool[key]));
    })

    this.form?.valueChanges.subscribe((data) => {
      this.tool = Object.assign(this.tool, data);
    })
  }

  saveItem(): void {
    this.httpService.saveItem(this.tool).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }

}
