import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-swiper',
  standalone:true,
  imports:[NgFor,NgIf],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent {
   projectList:any;
    constructor(
      private _dService:DashboarServiceService, private router:Router){
        this._dService.getProject().subscribe(data=>{
          this.projectList = data
          this.projectList = this.projectList.data
          console.log(this.projectList)
        })
      }
      viewProject(id:number){
        this.router.navigate(['/project_view',id])
      }

}
