import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/common/service/search.service';
import { Npc } from '../../domain/npc';

@Component({
  selector: 'app-npc-search',
  templateUrl: './npc-search.component.html',
  styleUrls: ['./npc-search.component.scss']
})
export class NpcSearchComponent implements OnInit {

  npcs: Npc[] = [];
  filteredNpcs: Npc[] = [];

  displayedColumns: string[] = ['name', 'location'];

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    location: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.npcs = data['npcs'] || [];
      this.filteredNpcs = JSON.parse(JSON.stringify(this.npcs));
    })

    this.form.valueChanges.subscribe((data) => {
      this.filteredNpcs = this.searchService.filter(this.npcs, {
        name: data.name, 
        description: data.description, 
        location: data.location,
        type: data.type
      });
    })
  }

}
