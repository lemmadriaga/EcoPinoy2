import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  questions = [
    {
      id: 1,
      question: 'Which of these is NOT a renewable resource? (Choose the answer that is used up and cannot be easily replaced)',
      answers: [
        { text: 'Solar Energy', correct: false },
        { text: 'Fossil Fuels (Coil, Oil, Natural Gas)', correct: true },
        { text: 'Wind Power', correct: false },
        { text: 'Not Sure', correct: false }
      ]
    },
    {
      id: 2,
      question: 'What is the greenhouse gas most responsible for global warming? (Choose the gas that traps heat in the atmosphere)',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Nitrogen', correct: false },
        { text: 'Methane', correct: false }
      ]
    },
    {
      id: 3,
      question: 'Composting is the process of turning organic waste into a nutrient-rich soil amendment. What type of waste is NOT suitable for composting? (Choose the item that can be harmful to the composting process)',
      answers: [
        { text: 'Eggshells', correct: false },
        { text: 'Meat scraps (in small quantities)', correct: false },
        { text: 'Plastic bags', correct: true },
        { text: 'Paper', correct: false }
      ]
    },
    {
      id: 4,
      question: 'Deforestation, the large-scale removal of trees, has many negative environmental impacts. Which of these is NOT a consequence of deforestation? (Choose the outcome that is not directly related to deforestation)',
      answers: [
        { text: 'Increased soil erosion', correct: false },
        { text: 'Reduced biodiversity (loss of animal and plant life)', correct: false },
        { text: 'Improved air quality', correct: true}
      ]
    },
    {
      id: 5,
      question: 'Which of these everyday actions helps conserve water? (Choose the practice that reduces water usage)',
      answers: [
        { text: 'Taking shorter showers', correct: true },
        { text: 'Leaving the faucet running while brushing teeth', correct: false },
        { text: 'Watering the lawn every day', correct: false },
      ]
    },
  ];

  getQuestions() {
    return this.questions;
  }
}
