import { Component, OnInit } from '@angular/core';
import { Questions } from '../../models/Questions';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {
  results:Questions[];
  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.results = this.dataservice.getQuestions();
  }


}
