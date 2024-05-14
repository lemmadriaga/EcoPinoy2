import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-module5',
  templateUrl: './module5.page.html',
  styleUrls: ['./module5.page.scss'],
})
export class Module5Page implements OnInit {

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
