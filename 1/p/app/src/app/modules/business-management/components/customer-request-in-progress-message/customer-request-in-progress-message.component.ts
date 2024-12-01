import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-request-in-progress-message',
  templateUrl: './customer-request-in-progress-message.component.html',
  styleUrls: ['./customer-request-in-progress-message.component.css']
})
export class CustomerRequestInProgressMessageComponent implements OnInit {
  message: string = '';

  ngOnInit(): void {
      this.message = $localize`:@@dfe0486ebe09dab2a93f2e62d99fef9c2cb4fcde45d8fbf1acf4630a3add5e65: module.business.management.customer.request.in.progress.message`;
  }
   
}