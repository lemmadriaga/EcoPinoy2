import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '@app/questions.service';

@Component({
  selector: 'app-quiz5',
  templateUrl: './quiz5.page.html',
  styleUrls: ['./quiz5.page.scss'],
})
export class Quiz5Page implements OnInit {
  questions: any;
  hasQuizStarted = false;
  filteredQuestions: any;
  id: number = 1;
  total: number = 0;
  isModalOpen: boolean = false;
  startQuiz() {
    this.hasQuizStarted = true;
  }

  constructor(private service: QuestionsService, private router: Router) {
    this.questions = this.service.getQuestions5();
    this.filteredQuestions = this.questions.filter(
      (question) => question.id === 1
    );
  }

  ngOnInit() {}

  nextQuestion = () => {
    if (this.id === 5) {
      return;
    }
    this.id += 1;
    this.filteredQuestions = this.questions.filter(
      (question) => question.id === this.id
    );
  };

  prevQuestion = () => {
    if (this.id === 1) {
      return;
    }
    this.id -= 1;
    this.filteredQuestions = this.questions.filter(
      (question) => question.id === this.id
    );
  };

  checkAnswer(questionId: number, selectedAnswer: string) {
    console.log('Question ID:', questionId);
    console.log('Selected Answer:', selectedAnswer);

    const question = this.questions.find(
      (question) => question.id === questionId
    );
    console.log('Question Object:', question);

    if (!question) return;

    const correctAnswer = question.answers.find((answer) => answer.correct);
    console.log('Correct Answer:', correctAnswer);

    if (!correctAnswer) return;

    if (
      selectedAnswer.trim().toLowerCase() ===
      correctAnswer.text.trim().toLowerCase()
    ) {
      this.total += 1;
      console.log('Correct Answer! Total:', this.total);
    }
  }

  setOpen(isOpen: boolean) {
    if (isOpen) {
      this.isModalOpen = true;
    } else {
      this.total = 0;
      this.isModalOpen = false;

      setTimeout(() => {
        this.hasQuizStarted = false;
      }, 5);
    }
  }

  module() {
    this.router.navigateByUrl('/tabs/learning-center');
  }
}
