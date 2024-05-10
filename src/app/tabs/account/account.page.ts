import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AthenticationService } from '@app/athentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  user = {
    profilePhoto: '../assets/profile-pic.png',
    name: 'Lemuel Madriaga',
    email: 'lemmadriaga02@gmail.com',
    location: 'Red Bldg, Universe 2, Golden Country Homes, Alangilan, Batangas',
  };

  constructor(
    private navCtrl: NavController,
    private authService: AthenticationService,
    private router: Router
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  openEditProfile() {
    this.navCtrl.navigateForward('tabs/edit-profile', {
      state: { user: { ...this.user } },
    });
  }

  ionViewWillEnter() {
    const updatedUser = history.state.user;
    if (updatedUser) {
      this.user = { ...updatedUser };
    }
  }
}
