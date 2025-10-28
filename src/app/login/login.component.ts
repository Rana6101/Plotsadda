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
  IMG_BASE_URL=this._service.IMG_BASE_URL
  selectedFile:any
  
  user_detail:any;
  ngOnInit():void{
    this.getElement()
    this._service.isAgent.subscribe((data:any)=> this.is_Agent=data)
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
    phone:[''],
    city:[''],
    gender:[''],
    profile_pic:[''],
    agree_check:['']
  })




 

  logIn(){
    if(this.loginForm.valid){
      
      this._service.login(this.loginForm.value).subscribe((data:any)=>{
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

  onFileSelected(event: any) {
    const file = event.target as HTMLInputElement
    if (file.files && file.files.length > 0) {
      this.selectedFile = file.files[0];
      this.registerForm.patchValue({ profile_pic: this.selectedFile });
      console.log(this.selectedFile)
    }
  }
  register(){
    if(this.registerForm.valid){
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
      const formData = new FormData();
      formData.append('profile_pic', this.selectedFile)
      formData.append('name', this.registerForm.get('name')?.value)
      formData.append('email', this.registerForm.get('email')?.value)
      formData.append('password', this.registerForm.get('password')?.value)
      formData.append('role', this.registerForm.get('role')?.value)
      formData.append('city', this.registerForm.get('city')?.value)
      formData.append('phone', this.registerForm.get('phone')?.value)
      formData.append('gender', this.registerForm.get('gender')?.value)
      formData.append('agree_check', this.registerForm.get('agree_check')?.value)
      this._service.register(formData).subscribe((data:any)=>{
        this.removeClass();
        console.log(data)
        this.registerForm.reset()  
      })
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
