import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../../interfaces/intefaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    constructor(private httpClient: HttpClient) {}

    findAll(): Observable<Quiz> {
        return this.httpClient.get<Quiz>('http://localhost:9000/api/questions');
    }
}
// return of(
//     {
//         question_1: {
//             question: "Як називається найбільш популярна снайперська гвинтівка у грі CS:GO?",
//             answers: ["Fnatic", "Na`Vi", "Team Secret", "OG"],
//             correct_answers: ["OG"]
//         },
//         question_2: {
//             question: "Хто виграв головний турнір року по Dota 2 - The International 2019?",
//             answers: ["Fnatic", "Na`Vi", "Team Secret", "OG"],
//             correct_answers: ["OG"]
//         },
//         question_3: {
//             question: "Скільки карт використовується на офіційних турнірах СS:GO?",
//             answers: ["12", "24", "6", "7"],
//             correct_answers: ["7"]
//         },
//         question_4: {
//             question: "Найпопулярніша укарїнська кіберспортивна команда",
//             answers: ["VP", "Na`Vi", "Astralis", "HR"],
//             correct_answers: ["Na`Vi"]
//         },
//         question_5: {
//             question: "Яка гра є головним конкурентом дисципліни DOTA2",
//             answers: ["LOL", "WOW", "Startcraft", "Battlerite"],
//             correct_answers: ["LOL"]
//         },
//     }
// )
