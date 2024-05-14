import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-module4',
  templateUrl: './module4.page.html',
  styleUrls: ['./module4.page.scss'],
})
export class Module4Page implements OnInit {

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
