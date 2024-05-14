import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getUserProfile(userId: string): Observable<any> {
    return this.firestore.collection('userProfiles').doc(userId).valueChanges();
  }

  // Method to create or update user profile
  async createUserProfile(userId: string, profileData: any): Promise<void> {
    // Using set with merge: true to update or create document
    return this.firestore
      .collection('userProfiles')
      .doc(userId)
      .set(profileData, { merge: true });
  }

  getUserUnlockingState(userId: string): Observable<any> {
    return this.firestore.collection('userModules').doc(userId).valueChanges();
  }

  updateUserUnlockingState(userId: string, unlockingState: any): Promise<void> {
    return this.firestore
      .collection('userModules')
      .doc(userId)
      .set(unlockingState, { merge: true });
  }

  getUserUnlockingState2(userId: string): Observable<any> {
    return this.firestore.collection('userQuiz').doc(userId).valueChanges();
  }

  updateUserUnlockingState2(
    userId: string,
    unlockingState: any
  ): Promise<void> {
    return this.firestore
      .collection('userQuiz')
      .doc(userId)
      .set(unlockingState, { merge: true });
  }
}
