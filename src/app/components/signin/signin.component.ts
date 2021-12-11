import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm:FormGroup;

// user:{
//   user:string;
//   password:string;
// }
constructor(
  private authService: AuthService,
  private router: Router,
  private formBuilder: FormBuilder
) { }

  // user1 = {
  //   user: '1805019',
  //   password: 'M4s5dJbQ',
  // };



  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      user: [''],
      password: ['']
  });

  }

// tener un control de los formularios
  get f() { return this.loginForm.controls; }


  onSubmit() {
     // stop here if form is invalid
     if (this.loginForm.invalid) {
      return;
  }

  console.warn(this.loginForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']

    this.authService.signInUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
  }






  // signIn() {


  //   console.warn(this.user1); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']

  //   this.authService.signInUser(this.user1)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         localStorage.setItem('token', res.token);
  //         this.router.navigate(['/private']);
  //       },
  //       err => console.log(err)
  //     )
  // }

}
