import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  option = {  
    slidesPerView:1.5,
    centeresSlides:true,
    loop:true,  
    spaceBetween:10,
  autoplay:true,
 };
  constructor(private nav:NavController) {}
  additem(){
    console.log("items");
      this.nav.navigateForward("items");
    console.log("case2");
  }
}
