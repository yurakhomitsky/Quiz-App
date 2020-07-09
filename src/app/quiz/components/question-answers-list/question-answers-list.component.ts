import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-question-answers-list',
  templateUrl: './question-answers-list.component.html',
  styleUrls: ['./question-answers-list.component.scss'],
})
export class QuestionAnswersListComponent implements OnInit, OnChanges {
  public currentQuestion = 0;

  answers = {};
  @Input() tests: string[] = [];
  @Output() selectedAnswer: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnChanges({ tests }: SimpleChanges) {
    this.currentQuestion++;
  }
  ngOnInit(): void {}

  onChange($event) {
    this.selectedAnswer.emit(this.answers[this.currentQuestion]);
  }
}
