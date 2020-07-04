import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { LoaderComponent } from '../shared/components/loader/loader.component';
import { QuestionAnswersListComponent } from './components/question-answers-list/question-answers-list.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  {
    path: '', component: QuizComponent
  }
]
@NgModule({
  declarations: [QuizComponent, QuestionAnswersListComponent, LoaderComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoaderComponent],
  providers: []
})
export class QuizModule { }
