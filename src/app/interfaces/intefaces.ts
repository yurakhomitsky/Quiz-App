export interface Quiz {
    [key: string]: Question
}

export interface Question {
    question: string;
    answers: string[];
    correct_answers: string[]
}

export interface Answer {
    [key: number]: string;
}

export interface Score {
    scoreInPercent: number; // 30%
    numberOfTrueAnswers: number; // 3
    maxMark: number;// 5
  }