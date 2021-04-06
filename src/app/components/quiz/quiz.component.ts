import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questionForm:FormGroup;
  questionBank:any;
  question:any;
  index = 0;
  correctAnswer = 0;
  totalQuestions = 0;
  showResult: boolean;
  constructor(private fb: FormBuilder) { 
    this.questionForm = this.fb.group({
      option1: ['',Validators.required]
    })
  }

  ngOnInit() {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple&key=AIzaSyB9RCaEIGG3q_LRAQvQ6lRivCoYLf8WAow')
    .then((res) => res.json())
    .then((result) => {
      this.questionBank = result;
      console.log(this.questionBank);
      if(this.questionBank && this.questionBank.results){
        this.totalQuestions = this.questionBank.results.length;
        this.renderQuestions();
      }
    });
  }

  private renderQuestions(){
    this.getNextQuestion(this.index);
  }
  public onSubmit(){
    console.log("forms values>>",this.questionForm.value);
    if(this.index < this.questionBank.results.length-1){
      this.checkAnswer(this.index);
      this.index++;
      this.getNextQuestion(this.index);
    }else {
      this.showResult = true;
    }
  }
  private getNextQuestion(index:number){
    this.question  = this.questionBank.results[index];
    console.log(this.question.correct_answer);
    this.questionForm.reset();
    this.questionForm.updateValueAndValidity();
  }

  private checkAnswer(index:number){
    if(this.questionForm.value['option1'] === this.questionBank.results[index].correct_answer){
      console.log("right");
      this.correctAnswer++;
    }else{
      console.log("wrong");
    }
  }
}
