import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  standalone: true, 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class RankingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
