import { Component, ElementRef } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormGroup,FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _elementRef:ElementRef, private _service:AuthServiceService, private _fb:FormBuilder, private _router:Router){}
  is_Agent:any;
  user_detail:any;
  ngOnInit():void{
    this.getElement()
    this._service.isAgent.subscribe(data=> this.is_Agent=data)
  }
  
  container:any;
  landloadChk:boolean =false;
  
  loginForm:FormGroup = this._fb.group({
    email:['', Validators.required ],
    password:['', Validators.required]
  })
  

  registerForm:FormGroup = this._fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    role:[''],
    city:[''],
    agency_name:[''],
    company_email:[''],
    agency_address:[''],
    phone:[''],
    profile_pic:['']
  })




 

  logIn(){
    if(this.loginForm.valid){
      this._service.login(this.loginForm.value).subscribe((data)=>{
        this.user_detail = data
        this.user_detail = this.user_detail.user
        localStorage.setItem("PA_auth_info",JSON.stringify(this.user_detail))
        this._router.navigateByUrl('/dashboard')
        console.log(data)
      })
    }else{
      alert('check your email or password')
    }
  }
  register(){
    if(this.registerForm.valid){
      console.log('role', this.registerForm.value.role)
      if(this.registerForm.value.role == true){
        console.log('agent')
        this.registerForm.patchValue({
          role:"agent"
        })
      }else if(this.registerForm.value.role == false){
        this.registerForm.patchValue({
          role:'user'
        })
      }
      this._service.register(this.registerForm.value).subscribe((data)=>{
        console.log(data)
        this.removeClass();
        this.registerForm.reset()  
      })
      console.log(this.registerForm.value.role)

    }else{
      alert('plz fill all the required fields')
    }
  }

  



  getElement(){
    return this.container = this._elementRef.nativeElement.querySelector(`#container`)
  }
  addClass(){
     console.log('in add', this.container)
     if(this.container != null)
     this.container.classList.add("right-panel-active");
   }
   removeClass(){
     if(this.container != null)
     this.container.classList.remove("right-panel-active");
   }
   landlordCheck(){
    this.landloadChk = !this.landloadChk
   }
   cityList = this._service.city_list
   
  
  
  


}
