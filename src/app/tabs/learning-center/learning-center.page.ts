import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '@app/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-learning-center',
  templateUrl: './learning-center.page.html',
  styleUrls: ['./learning-center.page.scss']
})
export class LearningCenterPage implements OnInit {
  userUnlockingState: any; 

  constructor(
    private firestoreService: FirestoreService, 
    private router: Router, 
    private angularFireAuth: AngularFireAuth) { }


    ngOnInit(): void {

      this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          const userId = user.uid;

          this.firestoreService.getUserUnlockingState(userId).subscribe((unlockingState: any) => {
            this.userUnlockingState = unlockingState; 
          });
        }
      });
    }

    navigateToModule(moduleId: string): void {

      if (this.isModuleUnlocked(moduleId)) {

        this.router.navigate(['/tabs', moduleId]);
    

        const nextModuleId = this.getNextModuleId(moduleId);
        if (nextModuleId) {
          this.unlockModule(nextModuleId);
        }
      } else {
        console.log('Module is locked. Cannot navigate.');
      }
    }
    private getNextModuleId(currentModuleId: string): string {

      switch (currentModuleId) {
        case 'module1':
          return 'module2';
        case 'module2':
          return 'module3';
        case 'module3':
          return 'module4';
        case 'module4':
          return 'module5';
        default:
          return null; 
      }
    }
    private unlockModule(moduleId: string): void {

      this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          const userId = user.uid;
   
          this.firestoreService.updateUserUnlockingState(userId, { [moduleId]: true });
        }
      });
    }

  isModuleUnlocked(moduleId: string): boolean {

    return this.userUnlockingState && this.userUnlockingState[moduleId] === true;
  }
}
