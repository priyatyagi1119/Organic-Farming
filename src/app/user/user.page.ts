import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
caseno=0;
  constructor() { }

  ngOnInit() {
  }
  setcase(caseno: any) {
    this.caseno = caseno;
   console.log("caseno = "+caseno);
}
}
