import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {  Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  routeData:any;
  loginStatus:any=false;
  LoginData:any;
  IMG_BASE_URL=this._service.IMG_BASE_URL
  constructor(private _service:AuthServiceService, private _router:Router){  
     console.log(this._service.isLoggedIn())
     this._service.loginUser.subscribe((data:any)=>{
      this.loginStatus = data;
      console.log(data)
     })
     this.LoginData = this._service.loginUser.value
     this.LoginData = JSON.parse(this.LoginData)
     console.log('login user', this.LoginData)  
    }

  sign_out(){
    this._service.logoutUser()
    console.log('status',this.loginStatus)
    this._router.navigateByUrl('/home')
    // this._router.navigateByUrl('/home')
  }
  agent(){
    this._service.isAgent.next(true)
  }
  nonAgent(){
    this._service.isAgent.next(false)
  }


}
