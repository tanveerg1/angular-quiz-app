import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { ApiService } from '../api.service';
import { Info } from '../info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //info = new Info();
  timeLeft: number = 120;
  subscribeTime: any;
  subscription: any;

  infoForm: FormGroup;
  question1: String;
  question2: String;
  question3: String;
  question4: String;
  question5: String;
  question6: String;
  question7: String;
  question8: String;
  question9: String;
  question10: String;

  // infoForm = new FormGroup({
  //   question1: new FormControl(),
  //   question2: new FormControl()
  // });

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.infoForm = this.formBuilder.group({
      'question1': [''],
      'question2': [''],
      'question3': [''],
      'question4': [''],
      'question5': [''],
      'question6': [''],
      'question7': [''],
      'question8': [''],
      'question9': [''],
      'question10': [''],
    });

    const source = timer(1000, 2000);
    this.subscription = source.subscribe(val => {
      console.log(val);
      this.subscribeTime = this.timeLeft - val;
      
    });

  }

  onFormSubmit(form: NgForm){
    // this.info.question1 = this.infoForm.get('question1').value;
    // this.info.question2 = this.infoForm.get('question2').value;
    
    // console.log(this.info.question1, this.info.question2);

    this.api.createInfo(form).subscribe(data => {
      console.log(data);
      this.infoForm.reset();
    });

    this.subscription.unsubscribe();

  }

  reset(){
    this.infoForm.reset();
  }

}
