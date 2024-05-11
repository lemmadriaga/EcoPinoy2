import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirestoreService } from '@app/firestore.service';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  standalone: true, 
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class taskComponent implements OnInit {

  userUnlockingState: any; 
  @Input() slides: any[] =[];
  swiperQuizs = [IonicSlides];

  constructor(
    private firestoreService: FirestoreService, 
    private router: Router, 
    private angularFireAuth: AngularFireAuth) { }

    ngOnInit(): void {

      this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          const userId = user.uid;

          this.firestoreService.getUserUnlockingState2(userId).subscribe((unlockingState: any) => {
            this.userUnlockingState = unlockingState; 
          });
        }
      });
    }
    navigateToQuiz(quizId: string): void {

      if (this.isQuizUnlocked(quizId)) {

        this.router.navigate(['/tabs', quizId]);
    

        const nextQuizId = this.getNextQuizId(quizId);
        if (nextQuizId) {
          this.unlockQuiz(nextQuizId);
        }
      } else {
        console.log('Quiz is locked. Cannot navigate.');
      }
    }
    private getNextQuizId(currentQuizId: string): string {

      switch (currentQuizId) {
        case 'quiz':
          return 'quiz2';
        case 'quiz2':
          return 'quiz3';
        case 'quiz3':
          return 'quiz4';
        case 'quiz4':
          return 'quiz5';
        default:
          return null; 
      }
    }
    private unlockQuiz(quizId: string): void {

      this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          const userId = user.uid;
   
          this.firestoreService.updateUserUnlockingState2(userId, { [quizId]: true });
        }
      });
    }

  isQuizUnlocked(quizId: string): boolean {

    return this.userUnlockingState && this.userUnlockingState[quizId] === true;
  }








}
