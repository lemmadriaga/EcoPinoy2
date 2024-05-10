import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getUserUnlockingState(userId: string): Observable<any> {
    return this.firestore.collection('userModules').doc(userId).valueChanges();
  }

  updateUserUnlockingState(userId: string, unlockingState: any): Promise<void> {
    return this.firestore.collection('userModules').doc(userId).set(unlockingState, { merge: true });
  }
}
