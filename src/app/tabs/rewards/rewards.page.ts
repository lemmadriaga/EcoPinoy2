import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RankingComponent } from 'src/app/components/ranking/ranking.component';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: true,  
  imports: [IonicModule, RankingComponent], 
})
export class RewardsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
