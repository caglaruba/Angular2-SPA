import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BasicValidators } from '../shared/basic-validators';
import { SubscriptionService } from '../shared/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  title: string = "Angular2 Demo App";
  email: string;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private subscriptionService: SubscriptionService
  ) {
    this.email = this.subscriptionService.getEmail();
    this.form = formBuilder.group({
      email: ['', [
        Validators.required,
        BasicValidators.email
      ]]
    });
  }

  ngOnInit() {
  }

  submit() {
    var formValue = this.form.value;

    this.subscriptionService.setEmail(formValue.email);

    this.router.navigate(['subscriptions']);
  }
}
