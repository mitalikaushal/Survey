import { Injectable } from '@angular/core';
import { Questions } from '../models/Questions'; //importing the model which contain the structure 

@Injectable()
export class DataService {
  //variable of class Questions which is an array
questions:Questions[];
  constructor() { 
    //making the array of objects which contain survey questions 
    this.questions = [
      {
        ques:"Q1. Do You Like Chocoloate Milk?",
        answer:""
      },
      {
        ques:"Q2. Do you like Pizza?",
        answer:""
      },
      {
        ques:"Q3. Do you like FIFA?",
        answer: ""
      },
      {
        ques:"Q4. Are you interested in going to Coldplay Concert?",
        answer:""
      },
      {
        ques:"Q5. Do you eat healthy?",
        answer:""
      }
    ];
  }
  //get function for returning the questions when someone calls
  getQuestions(){
   return this.questions;
  }

}
