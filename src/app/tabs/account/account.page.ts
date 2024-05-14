import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AthenticationService } from '@app/athentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user: any = {}; // Initialize user object

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private authService: AthenticationService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // Fetch additional user information from Firestore
        this.firestore
          .collection('userProfiles')
          .doc(user.uid)
          .valueChanges()
          .subscribe((profile: any) => {
            if (profile) {
              this.user = {
                profilePhoto: user.photoURL || '../assets/profile-pic.png', // Use user's photoURL or default profile picture
                name: user.displayName || 'Anonymous', // Use user's displayName or 'Anonymous'
                email: user.email || '',
                location: profile.location || '',
              };
            }
          });
      }
    });
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
