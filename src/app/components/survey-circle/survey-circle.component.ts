import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Questions } from '../../models/Questions';

@Component({
  selector: 'app-survey-circle',
  templateUrl: './survey-circle.component.html',
  styleUrls: ['./survey-circle.component.css']
})
export class SurveyCircleComponent implements OnInit {
  //taking the input of each question thrown by survey panel which contain questions
  @Input('question') ques:Questions;
  ans:string;

  constructor(public dataservice: DataService) { }

  ngOnInit() {
  }
  // setting the answer to yes/no/na(on click we are setting these values) on click
  setAnswer(){
    console.log(this.ans)
    this.ques.answer = this.ans;
  }

}
