// module1.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-module1',
  templateUrl: './module1.page.html',
  styleUrls: ['./module1.page.scss'],
})
export class Module1Page {
  constructor( private router:Router, private navCtrl: NavController) { }

  
quiz(){
  this.router.navigateByUrl('/tabs/challenge');
}
goBack() {
  this.navCtrl.back();
}
}
