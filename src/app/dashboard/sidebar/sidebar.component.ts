import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  loginData:any
  constructor(private _service:AuthServiceService){
    this._service.loginUser.subscribe((data:any) =>
      this.loginData = JSON.parse(data));

    console.log(this.loginData)
    console.log(this.loginData.role)
  }

}
