import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private UserName="Abinash";
    private password="password";
    private CustName="Manoj";
    private Custpassword="password";
    formdata;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      UserName: new FormControl(Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
   
   });
  }
  
  onClickSubmit(data) {
    console.log(data.UserName);
    console.log(data.password);
    if(data.UserName==this.UserName && data.password==this.password){
      alert("correct username and password");
      localStorage.setItem("isLogin","true");
      this.router.navigateByUrl('/admin');
    }
   else if(data.UserName==this.CustName && data.password==this.Custpassword){
      alert("correct username and password");
      localStorage.setItem("isLogin","true");
      this.router.navigateByUrl('/admin');
    }
    else{
     
      alert("incorect username or password");
    }
    

 }
}
