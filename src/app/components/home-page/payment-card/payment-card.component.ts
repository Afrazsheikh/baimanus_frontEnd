import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css',
})
export class PaymentCardComponent {
  isExpanded = false;

  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }
}
