import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule, FormControl } from '@angular/forms';

import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

// import { AlertService, AuthenticationService } from '../_services';
 

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(){}
  loginForm = this.fb.group({
    username: [null,Validators.required],
    password: [null,Validators.required]
  });

  constructor(private fb: FormBuilder,private router: Router,private toast:ToastrService) {}

  onSubmit() {
    debugger;
    var usr=this.loginForm.value.username;
if(this.loginForm.invalid)
{
this.toast.error("PLease fill all the fields.");
  return true;
}
    localStorage.setItem('user',usr);
    localStorage.setItem('token','asdcx234fertert456rtyrtyrtyrty');
    this.router.navigateByUrl('/Home');
  }
}