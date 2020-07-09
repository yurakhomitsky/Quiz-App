import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../../interfaces/intefaces';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Quiz> {
    // return this.httpClient.get<Quiz>('http://localhost:9000/api/questions'); // npm run server
    return this.httpClient
      .get<Quiz>('./assets/questions.json')
      .pipe(delay(1500));
  }
}
