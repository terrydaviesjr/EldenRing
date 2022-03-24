import { Component, Input, OnInit } from '@angular/core';
import { Armament } from 'src/app/item/domain/armament';

@Component({
  selector: 'app-armament-display',
  templateUrl: './armament-display.component.html',
  styleUrls: ['./armament-display.component.scss']
})
export class ArmamentDisplayComponent implements OnInit {
  
  @Input()
  armament: Armament = new Armament();

  constructor() { }

  ngOnInit(): void {
  }

}
