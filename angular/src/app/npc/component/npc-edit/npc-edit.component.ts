import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { aliasCompareFn } from 'src/app/common/domain/function/alias-compare.function';
import { Npc } from '../../domain/npc';
import { NpcHttpService } from '../../http/npc-http.service';

@Component({
  selector: 'app-npc-edit',
  templateUrl: './npc-edit.component.html',
  styleUrls: ['./npc-edit.component.scss']
})
export class NpcEditComponent implements OnInit {

  npc: Npc = new Npc();

  form: FormGroup = new FormGroup({});

  compareFn = aliasCompareFn;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: NpcHttpService) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {
      if (data && data['npc']) {
        this.npc = Object.assign(new Npc(), data['npc']);

        Object.keys(this.npc).forEach((key: string, _index: number) => {
          this.form.addControl(key, new FormControl(this.npc[key]));
      })
      }
    });
    
    this.form?.valueChanges.subscribe((data) => {
      this.npc = Object.assign(this.npc, data);
    })

  }

  save(): void {
    this.httpService.saveNpc(this.npc).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }


}
