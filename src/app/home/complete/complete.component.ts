import { Component, OnInit, Input } from '@angular/core';
import { infoDetails } from '../../info';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  @Input() infoDetails: infoDetails;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.infoDetails = this.apiService.getFormData();
    console.log(this.infoDetails);
  }

  submit() {
    //this.infoDetails = this.apiService.createInfo(form);

    this.apiService.createInfo(this.infoDetails).subscribe(data => {
      console.log(data);
    });

    this.infoDetails = this.apiService.resetFormData();
  }

  reset() {
    this.infoDetails = this.apiService.resetFormData();
  }
}
