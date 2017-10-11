import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../../models/Questions';// importing model
import { DataService } from '../../services/data.service';// calling service

@Component({
  selector: 'app-survey-panel',
  templateUrl: './survey-panel.component.html',
  styleUrls: ['./survey-panel.component.css']
})
export class SurveyPanelComponent implements OnInit {
  questions:Questions[];
  constructor( public router: Router, public dataservice: DataService) { }

  ngOnInit() {
    //calling the getQuestion method which is in DataService and putting the value in questions
    this.questions = this.dataservice.getQuestions();
  }

}
