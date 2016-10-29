import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SubscriptionService {

  private email: string;
  private url: string = "http://demoapp.qat.obi.aol.com";

  constructor(private http: Http) { }

  getSubscriptions() {
    const url: string = this.url + "/listSub?email=" + this.email;
    return this.http.get(url).map(res => res.json());
  }

  getCards() {
    const url: string = this.url + "/listInstrument?email=" + this.email;
    return this.http.get(url).map(res => res.json());
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

}
