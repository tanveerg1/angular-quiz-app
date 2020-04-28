import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() formData;

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

  showPage1:boolean = true;
  showPage2:boolean = false;

  // infoForm = new FormGroup({
  //   question1: new FormControl(),
  //   question2: new FormControl()
  // });

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(){

    this.router.navigate(['home/page1']);

    this.formData = this.api.getFormData();
    
    const source = timer(1000, 2000);
    this.subscription = source.subscribe(val => {
      console.log(val);
      this.subscribeTime = this.timeLeft - val;
      
    });

  }

  togglePage1() {
    this.showPage1 = true;
    this.showPage2 = false;
  }

  togglePage2() {
    this.showPage2 = true;
    this.showPage1 = false;
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
