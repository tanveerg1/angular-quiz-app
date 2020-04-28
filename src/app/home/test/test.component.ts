import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { pageOne } from '../../info';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //@Output() infoData = new EventEmitter<NgForm>();
  //@Output() formReady = new EventEmitter<FormGroup>();

  pageOne: pageOne;
  //form: any;

  subscribeTime: any;
  subscription: any;

  infoForm: FormGroup;
  question1: pageOne["question1"];
  question2: pageOne["question2"];
  question3: pageOne["question3"];
  question4: pageOne["question4"];
  question5: pageOne["question5"];
  question6: pageOne["question6"];
  question7: pageOne["question7"];
  question8: pageOne["question8"];
  question9: pageOne["question9"];
  question10: pageOne["question10"];

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
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

    //this.formReady.emit(this.infoForm);

    this.pageOne = this.api.getPageOne();

  }

  onFormSubmit(form: any): boolean{
    // this.info.question1 = this.infoForm.get('question1').value;
    // this.info.question2 = this.infoForm.get('question2').value;
    
    // console.log(this.info.question1, this.info.question2);


    // this.api.createInfo(form).subscribe(data => {
    //   console.log(data);
    //   this.infoForm.reset();
    // });

    // this.subscription.unsubscribe();

    //this.infoData.emit(form);
    this.api.setPageOne(form);
    //console.log(form);
    //this.router.navigate(['home/page2']);
    

    return true;
  }

  goToNext(form: NgForm) {
    if(this.onFormSubmit(form)){
      this.router.navigate(['home/page2']);
    }
  }

  reset(){
    this.infoForm.reset();
  }

}
