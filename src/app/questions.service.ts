import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  questions = [
    {
      id: 1,
      question:
        'Which of these is NOT a renewable resource? (Choose the answer that is used up and cannot be easily replaced)',
      answers: [
        { text: 'Solar Energy', correct: false },
        { text: 'Fossil Fuels (Coil, Oil, Natural Gas)', correct: true },
        { text: 'Wind Power', correct: false },
        { text: 'Not Sure', correct: false },
      ],
    },
    {
      id: 2,
      question:
        'What is the greenhouse gas most responsible for global warming? (Choose the gas that traps heat in the atmosphere)',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Nitrogen', correct: false },
        { text: 'Methane', correct: false },
      ],
    },
    {
      id: 3,
      question:
        'Composting is the process of turning organic waste into a nutrient-rich soil amendment. What type of waste is NOT suitable for composting? (Choose the item that can be harmful to the composting process)',
      answers: [
        { text: 'Eggshells', correct: false },
        { text: 'Meat scraps (in small quantities)', correct: false },
        { text: 'Plastic bags', correct: true },
        { text: 'Paper', correct: false },
      ],
    },
    {
      id: 4,
      question:
        'Deforestation, the large-scale removal of trees, has many negative environmental impacts. Which of these is NOT a consequence of deforestation? (Choose the outcome that is not directly related to deforestation)',
      answers: [
        { text: 'Increased soil erosion', correct: false },
        {
          text: 'Reduced biodiversity (loss of animal and plant life)',
          correct: false,
        },
        { text: 'Improved air quality', correct: true },
      ],
    },
    {
      id: 5,
      question:
        'Which of these everyday actions helps conserve water? (Choose the practice that reduces water usage)',
      answers: [
        { text: 'Taking shorter showers', correct: true },
        {
          text: 'Leaving the faucet running while brushing teeth',
          correct: false,
        },
        { text: 'Watering the lawn every day', correct: false },
      ],
    },
  ];
  questions2 = [
    {
      id: 1,
      question:
        'What is the process by which plants use sunlight, water, and carbon dioxide to produce food (sugar) and oxygen?',
      answers: [
        { text: 'Photosynthesis', correct: true },
        { text: 'Decomposition', correct: false },
        { text: 'Transpiration', correct: false },
      ],
    },
    {
      id: 2,
      question:
        'What are the three main types of pollution that can harm the environment?',
      answers: [
        { text: 'Light, Noise, Water', correct: false },
        { text: 'Land, Air, Water', correct: true },
        { text: 'Chemical, Thermal, Radioactive', correct: false },
      ],
    },
    {
      id: 3,
      question:
        'Endangered species are animals or plants at risk of disappearing forever. What is a MAJOR threat to endangered species?',
      answers: [
        { text: 'Loss of habitat', correct: false },
        { text: 'Overhunting', correct: false },
        { text: 'Both A and B', correct: true },
      ],
    },
    {
      id: 4,
      question:
        "What is the name of the layer in the Earth's atmosphere that protects us from most of the harmful radiation from the sun?",
      answers: [
        { text: 'Troposphere', correct: false },
        {
          text: 'Stratosphere',
          correct: true,
        },
        { text: 'Mesosphere', correct: false },
      ],
    },
    {
      id: 5,
      question:
        'What is a natural resource that can be reused and replenished at a relatively fast rate, unlike fossil fuels?',
      answers: [
        { text: 'Coal', correct: false },
        {
          text: 'Wind power',
          correct: true,
        },
        { text: 'Natural gas', correct: false },
      ],
    },
  ];
  questions3 = [
    {
      id: 1,
      question:
        'What is the process of separating waste materials into different categories for recycling or proper disposal?',
      answers: [
        { text: 'Composting', correct: false },
        { text: 'Repurposing', correct: false },
        { text: 'Recycling', correct: true },
      ],
    },
    {
      id: 2,
      question:
        'Which of the following materials is NOT typically accepted in curbside recycling programs?',
      answers: [
        { text: 'Aluminum cans', correct: false },
        { text: 'Glass bottles', correct: false },
        { text: 'Food-contaminated plastic containers', correct: true },
      ],
    },
    {
      id: 3,
      question:
        'What is the concept of "Reduce, Reuse, Recycle" and how does it contribute to a more sustainable waste management system?',
      answers: [
        {
          text: 'It prioritizes recycling as the main solution.',
          correct: false,
        },
        {
          text: 'It encourages a hierarchy of waste reduction strategies.',
          correct: true,
        },
        { text: 'It focuses solely on reusing items.', correct: false },
      ],
    },
    {
      id: 4,
      question:
        'Biodegradable waste breaks down naturally by decomposers like bacteria. What is an example of biodegradable waste?',
      answers: [
        { text: 'Plastic bags', correct: false },
        { text: 'Food scraps', correct: true },
        { text: 'Used batteries', correct: false },
      ],
    },
    {
      id: 5,
      question: 'Which everyday action helps minimize waste generation?',
      answers: [
        { text: 'Buying products with excessive packaging', correct: false },
        { text: 'Bringing your own reusable shopping bag', correct: true },
        { text: 'Throwing away slightly used items', correct: false },
      ],
    },
  ];

  questions4 = [
    {
      id: 1,
      question:
        "What is the percentage of Earth's water that is freshwater readily available for human use?",
      answers: [
        { text: '10%', correct: true },
        { text: '50%', correct: false },
        { text: '90%', correct: false },
      ],
    },
    {
      id: 2,
      question:
        'What everyday activity uses the most water in a typical household?',
      answers: [
        { text: 'Taking showers', correct: false },
        { text: 'Flushing the toilet', correct: true },
        { text: 'Watering the lawn', correct: false },
      ],
    },
    {
      id: 3,
      question:
        'What is a sustainable water management practice that helps conserve water for future generations?',
      answers: [
        {
          text: 'Leaving the faucet running while brushing your teeth',
          correct: false,
        },
        { text: 'Collecting rainwater for watering plants', correct: true },
        { text: 'Washing your car every day', correct: false },
      ],
    },
    {
      id: 4,
      question:
        'Water pollution can occur from a variety of sources. Which of the following is NOT a major contributor to water pollution?',
      answers: [
        { text: 'Industrial waste', correct: false },
        { text: 'Runoff from agricultural land', correct: true },
        { text: 'Littering', correct: false },
      ],
    },
    {
      id: 5,
      question: 'What simple action can you take at home to conserve water?',
      answers: [
        { text: 'Taking shorter showers', correct: false },
        {
          text: 'All of the above (Taking shorter showers, fixing leaks, and turning off the faucet while brushing teeth)',
          correct: true,
        },
        {
          text: 'Leaving the faucet running while washing dishes',
          correct: false,
        },
      ],
    },
  ];

  questions5 = [
    {
      id: 1,
      question: 'What are the two main categories of energy sources?',
      answers: [
        { text: 'Renewable and delicious', correct: true },
        { text: 'Hot and cold', correct: false },
        { text: 'Clean and dirty', correct: false },
      ],
    },
    {
      id: 2,
      question:
        'Which of the following is an example of a renewable energy source?',
      answers: [
        { text: 'Coal', correct: false },
        { text: 'Solar power', correct: true },
        { text: 'Natural gas', correct: false },
      ],
    },
    {
      id: 3,
      question:
        'What is the greenhouse gas most linked to global warming caused by human activities?',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Carbon dioxide', correct: true },
        { text: 'Nitrogen', correct: false },
      ],
    },
    {
      id: 4,
      question: 'What simple action can you take at home to conserve energy?',
      answers: [
        { text: 'Leaving lights on in empty rooms', correct: false },
        { text: "Unplugging electronics you're not using", correct: true },
        { text: 'Taking long, hot baths', correct: false },
      ],
    },
    {
      id: 5,
      question: 'What is the future of clean energy looking like?',
      answers: [
        { text: "We'll run out of resources soon.", correct: false },
        {
          text: 'Technological advancements offer promising solutions for renewable energy.',
          correct: true,
        },
        { text: "There's no hope for a clean energy future.", correct: false },
      ],
    },
  ];

  getQuestions() {
    return this.questions;
  }
  getQuestions2() {
    return this.questions2;
  }
  getQuestions3() {
    return this.questions3;
  }
  getQuestions4() {
    return this.questions4;
  }
  getQuestions5() {
    return this.questions5;
  }
}
