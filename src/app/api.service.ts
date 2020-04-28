import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { infoDetails, pageOne, pageTwo } from './info';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private formData: infoDetails = new infoDetails();


  private infoFormData = new BehaviorSubject<any>("Something");
  currentFormData = this.infoFormData.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  public getPageOne(): pageOne {
    var page: pageOne = {
      question1: this.formData.question1,
      question2: this.formData.question2,
      question3: this.formData.question3,
      question4: this.formData.question4,
      question5: this.formData.question5,
      question6: this.formData.question6,
      question7: this.formData.question7,
      question8: this.formData.question8,
      question9: this.formData.question9,
      question10: this.formData.question10
    };
    return page;
  }

  public setPageOne(data: pageOne) {
    this.formData.question1 = data.question1;
    this.formData.question2 = data.question2;
    this.formData.question3 = data.question3;
    this.formData.question4 = data.question4;
    this.formData.question5 = data.question5;
    this.formData.question6 = data.question6;
    this.formData.question7 = data.question7;
    this.formData.question8 = data.question8;
    this.formData.question9 = data.question9;
    this.formData.question10 = data.question10;
  }

  public getPageTwo(): pageTwo {
    var page: pageTwo = {
      question11: this.formData.question11,
      question12: this.formData.question12,
      question13: this.formData.question13,
      question14: this.formData.question14,
      question15: this.formData.question15,
      question16: this.formData.question16,
      question17: this.formData.question17,
      question18: this.formData.question18,
      question19: this.formData.question19,
      question20: this.formData.question20
    };

    return page;
  }

  public setPageTwo(data: pageTwo) {
    this.formData.question11 = data.question11;
    this.formData.question12 = data.question12;
    this.formData.question13 = data.question13;
    this.formData.question14 = data.question14;
    this.formData.question15 = data.question15;
    this.formData.question16 = data.question16;
    this.formData.question17 = data.question17;
    this.formData.question18 = data.question18;
    this.formData.question19 = data.question19;
    this.formData.question20 = data.question20;
  }

  public getFormData(): infoDetails {
    //this.createInfo(this.formData);
    return this.formData;
  }

  public resetFormData(): infoDetails {
    this.formData.clear();
    return this.formData;
  }

  public createInfo(info): Observable<any> {
    return this.http.post('/', info).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
