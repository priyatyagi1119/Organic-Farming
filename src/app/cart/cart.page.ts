import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  user(){
    console.log("Orders");
      this.nav.navigateForward("user");
    console.log("case2");
  }
 
}
