import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
additem(){
  console.log("items");
    this.nav.navigateForward("items");
  console.log("case2");
}
}
