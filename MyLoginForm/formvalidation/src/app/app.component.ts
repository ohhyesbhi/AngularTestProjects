import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromvalidation';

  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  loginUser(){
    console.warn(this.loginForm.value)
    alert("added user successfully")
  }

  get user(){
    return this.loginForm.get("user")
  }

  get password(){
    return this.loginForm.get("password")
  }
}
