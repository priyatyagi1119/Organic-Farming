import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  farm(){
    console.log("Farmer");
    this.nav.navigateForward("farmerr");
  console.log("case2");
  }
  user(){
    console.log("Farmer");
    this.nav.navigateForward("userr");
  console.log("case2");
  }
}
