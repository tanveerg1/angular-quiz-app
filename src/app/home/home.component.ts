import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Info } from '../info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //info = new Info();

  infoForm: FormGroup;
  question1: String;
  question2: String;

  // infoForm = new FormGroup({
  //   question1: new FormControl(),
  //   question2: new FormControl()
  // });

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.infoForm = this.formBuilder.group({
      'question1': [''],
      'question2': ['']
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

  }

  reset(){
    this.infoForm.reset();
  }

}
