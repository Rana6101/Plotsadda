import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  userData:any;
  constructor(private _service:AuthServiceService){
    this.userData = this._service.loginUser.value
    this.userData = JSON.parse(this.userData)
  }
  IMG_BASE_URL=this._service.IMG_BASE_URL
  cityList:any=this._service.city_list
}
