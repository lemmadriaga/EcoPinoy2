import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.page.html',
  styleUrls: ['./module3.page.scss'],
})
export class Module3Page implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  quiz(){
    this.router.navigateByUrl('/tabs/challenge');
  }
  goBack() {
    this.navCtrl.back();
  }

}
