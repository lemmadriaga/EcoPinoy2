import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AthenticationService {
  constructor(
    public ngFireAuth: AngularFireAuth,
    private firestoreService: FirestoreService
  ) {}

  async registerUser(
    email: string,
    password: string,
    displayName: string,
    photoURL: string,
    location: string
  ): Promise<string> {
    const credential = await this.ngFireAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { uid } = credential.user;

    // Update profile
    await this.updateProfile(displayName, photoURL);

    // Save additional user information to Firestore
    await this.firestoreService.createUserProfile(uid, {
      displayName,
      photoURL,
      location,
    });

    return uid;
  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return await this.ngFireAuth.signOut();
  }

  async updateProfile(displayName: string, photoURL: string) {
    const user = await this.ngFireAuth.currentUser;
    if (user) {
      await user.updateProfile({
        displayName,
        photoURL,
      });
    }
  }

  async getProfile() {
    return await this.ngFireAuth.currentUser;
  }
}
