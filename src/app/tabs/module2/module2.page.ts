import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.page.html',
  styleUrls: ['./module2.page.scss'],
})
export class Module2Page implements OnInit {

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
