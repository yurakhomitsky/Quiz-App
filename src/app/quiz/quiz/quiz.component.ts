import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';

import { Answer, Question, Quiz, Score } from '../../interfaces/intefaces';
import { LoaderService } from '../../shared/components/loader/loader.service';
import { QuizService } from '../../shared/services/quiz.service';
import {
    getStyleByScore,
    getTitleByScore,
} from '../../shared/utils/utils.functions';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
    private mapAnswers: Answer = {};

    public isTestDone = false;
    public currentQuestion = 0;
    public questions: Question[];
    public mapQuestions: { [key: number]: Question } = {};
    public score: Score;

    constructor(
        private quizService: QuizService,
        public loaderService: LoaderService
    ) { }

    ngOnInit(): void {
        this.loaderService.show();
        this.quizService.findAll()
            .pipe(
                map((data: Quiz) => Object.values(data)),
                finalize(() => this.loaderService.hide())
            )
            .subscribe((data: Question[]) => {
                this.questions = data;
                this.mapQuestions = this.serializeQuestions(this.questions);
            });
    }
    onSelectedAnswer(selectedAnswer: string): void {
        this.mapAnswers = this.setAnswer(this.mapAnswers, selectedAnswer);
    }

    onNext(): void {
        if (this.isLastPage()) {
            this.isTestDone = true;
            this.score = this.calculateScore(this.mapAnswers, this.mapQuestions);
        }
        if (!this.isLastPage()) {
            this.currentQuestion++;
        }
    }

    isLastPage(): boolean {
        return this.currentQuestion === this.questions?.length - 1;
    }

    private serializeQuestions(questions: Question[]) {
        return questions.reduce((acc, question, index) => {
            acc[index] = question;
            return acc;
        }, {});
    }

    private setAnswer(object: Answer, answer: string): Answer {
        return {
            ...object,
            [this.currentQuestion]: answer,
        };
    }

    private calculateScore(
        mapAnswer: Answer,
        mapQuestion: { [key: number]: Question }
    ): Score {
        let numberOfTrueAnswers = 0;
        for (const key in mapQuestion) {
            if (mapQuestion[key].correct_answers.includes(mapAnswer[key])) {
                numberOfTrueAnswers++;
            }
        }
        const scoreInPercent = +(
            (numberOfTrueAnswers / this.questions.length) *
            100
        ).toFixed();

        const score = {
            numberOfTrueAnswers,
            scoreInPercent,
            maxMark: this.questions.length,
        };
        return score;
    }

    getTitleByScore(score: Score): string {
        return getTitleByScore(score);
    }

    getStyleByScore(score: Score) {
        return getStyleByScore(score);
    }
}
