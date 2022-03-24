import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Npc } from '../../domain/npc';

@Component({
  selector: 'app-npc-display',
  templateUrl: './npc-display.component.html',
  styleUrls: ['./npc-display.component.scss']
})
export class NpcDisplayComponent implements OnInit {

  npc: Npc = new Npc();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['npc']) {
        this.npc = Object.assign(new Npc(), data['npc']);
      }
    });
  }

}
