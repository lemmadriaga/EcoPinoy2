import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AthenticationService {
  constructor(public ngFireAuth: AngularFireAuth, private firestoreService: FirestoreService) {}
  
  async registerUser(email: string, password: string, displayName: string): Promise<string> {
    const credential = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    await this.updateProfile(displayName); 
    return credential.user.uid; 
  }


  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return await this.ngFireAuth.signOut();
  }

  async updateProfile(displayName: string) {
    const user = await this.ngFireAuth.currentUser;
    if (user) {
      await user.updateProfile({ displayName });
    }
  }

  async getProfile() {
    return await this.ngFireAuth.currentUser;
  }
}
