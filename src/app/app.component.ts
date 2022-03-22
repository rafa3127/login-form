import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'login-form';
  form: FormGroup 

  constructor(
    public fb: FormBuilder
  ){
    this.form = this.createForm()
  }
  createForm():FormGroup{
    var form:any = this.fb.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['',Validators.compose([
        Validators.required
      ])],
      remember: [false]
    })
    return form
  }

  logIn(){
    //Here must be the service function that controls the logIn process
    return this.form.value
  }
}
