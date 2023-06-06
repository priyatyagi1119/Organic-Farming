import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-farmerr',
  templateUrl: './farmerr.page.html',
  styleUrls: ['./farmerr.page.scss'],
})
export class FarmerrPage implements OnInit {

  num:any=1;
  caseno:any=1;
  mysegment:any=1
  formdata:any;
  userdata:any;
  fordata:any;
PhoneNo:any;
pwd:any;
fn:any;
ln:any;
mn:any;
email:any;
uname:any;
pwrd:any;
conpwd:any;
otp:any;
c:any;

  constructor(private fb: FormBuilder,private nav:NavController) { 
    this.formdata=fb.group({

      PhoneNo:new FormControl('',[Validators.required,Validators.email]),
      pwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
      
      
      cap:new FormControl('',[Validators.required]),
     ut:new FormControl('',[Validators.required])
    });
      this.userdata=new FormGroup({
      fn:new FormControl('',[Validators.required]),
      
      ln:new FormControl('',[Validators.required]),
      mn:new FormControl('',[Validators.required,Validators.minLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      uname:new FormControl('',[Validators.required]),
      
      pwrd:new FormControl('',[Validators.required,Validators.minLength(8)]),
      conpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
      otp:new FormControl('',[Validators.required,Validators.minLength(6)])
    });
    this.fordata=new FormGroup({
      emailid:new FormControl('',[Validators.required,Validators.email]),
      
      c:new FormControl('',[Validators.required,Validators.minLength(6)]),
      newpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
      repwd:new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  ngOnInit() {
  }

  verify(){
    this.mysegment=2;
    console.log(this.mysegment);
  }
  forgot(){
    this.mysegment=3;
   console.log(this.mysegment);
  }
  setcaseno(temp:any)
  {

    this.caseno=temp;
    console.log("new caseno="+this.caseno);
  }
  getdata(data:any){
    console.log("emailid ="+data.emailid);
   console.log("pwd="+data.pwd);
   console.log("cap="+data.cap);
    console.log("ut="+data.ut);
    this.mysegment=3;
  }
  getdata1(d:any){
    console.log("fn="+d.fn);
    console.log("ln="+d.ln);
    console.log("mn="+d.mn);
    console.log("email="+d.email);
    console.log("uname="+d.uname);
    console.log("pwrd="+d.pwrd);
    console.log("conpwd="+d.conpwd);
    this.caseno=2;
  }
  getdata2(da:any){
    console.log("otp="+da.otp);
    this.mysegment=2;
  }
  getdata3(form:any){
    console.log("emailid="+form.emailid);
    this.caseno=3;
  }
  getdata4(form:any){
    console.log("c="+form.c);
    this.caseno=4;
  }
  getdata5(form:any){
    console.log("newpwd="+form.newpwd);
    console.log("repwd="+form.repwd);
  }
  add(){
    console.log("category");
    this.nav.navigateForward("category");
  console.log("case2");
  }
  }


