import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SubscriptionService } from '../shared/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  title: string = "Angular2 Demo App";
  email: string;
  subscriptions = [];
  cards = [];

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {

  }

  ngOnInit() {
    this.email = this.subscriptionService.getEmail();

    if(!this.email) {
      this.router.navigate(['']);
    }

    this.subscriptionService.getSubscriptions().subscribe(data => this.subscriptions = data);
    this.subscriptionService.getCards().subscribe(data => this.cards = data);
  }

  changeEmail() {
    this.router.navigate(['']);
  }

}
