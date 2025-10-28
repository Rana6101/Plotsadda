import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-agency-login',
  templateUrl: './agency-login.component.html',
  styleUrls: ['./agency-login.component.css']
})
export class AgencyLoginComponent {
  container:any 
  constructor(private _elementRef:ElementRef, private _fb:FormBuilder, private _service:AuthServiceService, private _router:Router){
  }
  ngOnInit():void{
    this.getElement()
    this.container.classList.add('sign-in');
  }

  getElement(){
    this.container = this._elementRef.nativeElement.querySelector(`#container`)
    console.log( this.container)
    return this.container
  }
  agencyForm:FormGroup= this._fb.group({
    agencyName:[''],
    ownerName:[''],
    email:[''],
    phone:[''],
    city:[''],
    area:[''],
    password:[''],
    confirmPassword:[''],
    profilePic:[],
    status:['Pending'],
    agreeCheck:['']
  })
  loginForm:FormGroup = this._fb.group({
    email:[''],
    password:['']
  })
  user_detail:any

  login(){
    if(this.loginForm.valid){
      
      // this._service.agencyLogin(this.loginForm.value).subscribe((data:any)=>{
      //   this.user_detail = data
      //   this.user_detail = this.user_detail.user
        // localStorage.setItem("PA_auth_info",JSON.stringify(this.user_detail))
        // this._router.navigateByUrl('/dashboard')
      //   console.log(data)
      // })
    }else{
      // alert('check your email or password')
    }
    this._router.navigateByUrl('/agency_dashboard')
  }
  selectedFile:any

  onFileSelected(event: any) {
    const file = event.target as HTMLInputElement
    if (file.files && file.files.length > 0) {
      this.selectedFile = file.files[0];
      this.agencyForm.patchValue({ profilePic: this.selectedFile });
      console.log(this.selectedFile)
    }
  }
  registerAgency(){
    if(this.agencyForm.valid){
      // if(this.registerForm.value.role == true){
        // console.log('agent')
        // this.registerForm.patchValue({
          // role:"agent"
        // })
      // }else if(this.registerForm.value.role == false){
        // this.registerForm.patchValue({
          // role:'user'
        // })
      // }
      const formData = new FormData();
      formData.append('profilePic', this.selectedFile)
      formData.append('agencyName', this.agencyForm.get('agencyName')?.value)
      formData.append('ownerName', this.agencyForm.get('ownerName')?.value)
      formData.append('email', this.agencyForm.get('email')?.value)
      formData.append('password', this.agencyForm.get('password')?.value)
      formData.append('confirmPassword', this.agencyForm.get('confirmPassword')?.value)
      formData.append('status', this.agencyForm.get('status')?.value)
      formData.append('city', this.agencyForm.get('city')?.value)
      formData.append('phone', this.agencyForm.get('phone')?.value)
      formData.append('area', this.agencyForm.get('area')?.value)
      formData.append('agreeCheck', this.agencyForm.get('agreeCheck')?.value)
      console.log(formData)
      this._service.agencyRegister(formData).subscribe((data:any)=>{
        this.toggle();
        console.log(data)
        this.agencyForm.reset()  
      })
    }else{
      alert('plz fill all the required fields')
    }
  }


// Define toggle function with proper typing
toggle(){
  if (this.container) {
    this.container.classList.toggle('sign-in');
    this.container.classList.toggle('sign-up');
  }
};

}
