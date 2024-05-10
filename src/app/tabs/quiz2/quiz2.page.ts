import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '@app/questions.service';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
})
export class Quiz2Page implements OnInit {
  questions: any;
  hasQuizStarted = false;
  filteredQuestions: any;
  id: number = 1;
  total:number = 0;
  isModalOpen:boolean = false;
  startQuiz() {
    this.hasQuizStarted = true;
  }

  constructor(private service: QuestionsService) {
    this.questions = this.service.getQuestions2();
    this.filteredQuestions = this.questions.filter(question => question.id === 1);
  }

  ngOnInit() {
  }

  nextQuestion = () => {
    if (this.id === 5) { return; }
    this.id += 1;
    this.filteredQuestions = this.questions.filter(question => question.id === this.id);
  }
  
  prevQuestion = () => {
    if (this.id === 1) { return; }
    this.id -= 1;
    this.filteredQuestions = this.questions.filter(question => question.id === this.id);
  }
  
  checkAnswer(questionId: number, selectedAnswer: string) {
    console.log('Question ID:', questionId);
    console.log('Selected Answer:', selectedAnswer);
  
    const question = this.questions.find(question => question.id === questionId);
    console.log('Question Object:', question);
  
    if (!question) return;
  
    const correctAnswer = question.answers.find(answer => answer.correct);
    console.log('Correct Answer:', correctAnswer);
  
    if (!correctAnswer) return;
  
    if (selectedAnswer.trim().toLowerCase() === correctAnswer.text.trim().toLowerCase()) {
      this.total += 1;
      console.log('Correct Answer! Total:', this.total);
    }
  }
  
  
  

setOpen(isOpen: boolean) {
  if (isOpen) {
    this.isModalOpen = true;
  } else {
    this.total = 0; // This line resets the total score
    this.isModalOpen = false;

    setTimeout(() => {
      this.hasQuizStarted = false; // Corrected assignment
    }, 5);
  }
}
}
