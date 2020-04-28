import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { pageOne, pageTwo } from '../../info';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  pageOne: pageOne;
  pageTwo: pageTwo

  testForm: FormGroup;
  question11: pageTwo["question11"];
  question12: pageTwo["question12"];
  question13: pageTwo["question13"];
  question14: pageTwo["question14"];
  question15: pageTwo["question15"];
  question16: pageTwo["question16"];
  question17: pageTwo["question17"];
  question18: pageTwo["question18"];
  question19: pageTwo["question19"];
  question20: pageTwo["question20"];
  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.testForm = this.formBuilder.group({
      'question11': [''],
      'question12': [''],
      'question13': [''],
      'question14': [''],
      'question15': [''],
      'question16': [''],
      'question17': [''],
      'question18': [''],
      'question19': [''],
      'question20': [''],
    });

    this.pageOne = this.api.getPageOne();
    this.pageTwo = this.api.getPageTwo();

    console.log(this.pageOne);
  }

  reset(){
    //this.infoForm.reset();
  }

  goToPrevious(form: NgForm) {
    if(this.onFormSubmit(form)){
      this.router.navigate(['home/page1']);
    }
  }

  goToNext(form: NgForm) {
    if(this.onFormSubmit(form)) {
      this.router.navigate(['home/complete']);
    }
  }

  onFormSubmit(form: any): boolean{

    this.api.setPageTwo(form);

    return true;
  }
}
