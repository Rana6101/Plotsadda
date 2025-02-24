import { Component} from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'  ],
})
export class HomeComponent {

  constructor(private _servie:AuthServiceService){}

  
  cityList = this._servie.city_list;

}

