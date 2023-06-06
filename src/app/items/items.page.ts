import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  cart(){
    console.log("cart");
      this.nav.navigateForward("cart");
    console.log("case2");
  }
}
