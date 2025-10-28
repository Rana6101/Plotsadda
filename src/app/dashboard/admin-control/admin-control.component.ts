import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DashboarServiceService } from '../dashboar-service.service';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent {
  userList:any;
  userRole:any[]=[];
  agentRole:any[]=[];
  userIndex:any[] = [];
  agentIndex:any[] = [];
  messageList:any=[];
  propertyQuery:any=[]
  agencyDetail:any = []
  BASE_URL:any
  constructor(private _service:AuthServiceService,private _dService:DashboarServiceService){
    this._service.getAllUser().subscribe((data:any)=>
    {
      this.userList = data
      this.userList = this.userList.data
      console.log('in admin Control',this.userList)
      this.filterUser(this.userList)
    }
    )
    this._service.getMessage().subscribe((data:any)=>{
      this.messageList = data
      this.messageList = this.messageList.data
      
    })
    this.getQuery()
    this.getAgency()
    this.BASE_URL=this._service.BASE_URL
  }
getQuery(){
  this._dService.getInquery().subscribe((data:any)=>{
    this.propertyQuery = data
    this.propertyQuery = this.propertyQuery.data
    
  })
}

getAgency(){
  this._service.getAgency().subscribe((data:any)=>{
    this.agencyDetail = data
    this.agencyDetail = this.agencyDetail.data
  })

}

  filterUser(data:any){
    let userI=0; 
    let agentI=0; 
    data.filter((element:any)=>{
      if(element.role == 'user'){
        userI++
        this.userIndex.push(userI)
        this.userRole.push(element)
      }else if(element.role == 'agent'){
        agentI++
        this.agentIndex.push(agentI)
        this.agentRole.push(element)
      }
    })
    console.log('user', this.userRole)  
    console.log('agent', this.agentIndex)
  }

  




}
