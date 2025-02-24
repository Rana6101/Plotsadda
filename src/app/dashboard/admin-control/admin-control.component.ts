import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent {
  userList:any;
  userRole:any[]=[];
  agentRole:any[]=[];
  userIndex:any = 0;
  messageList:any=[]
  constructor(private _service:AuthServiceService){
    this._service.getAllUser().subscribe((data)=>
    {
      this.userList = data
      this.userList = this.userList.data
      console.log('in admin Control',this.userList)
      this.filterUser(this.userList)
    }
    )
    this._service.getMessage().subscribe((data)=>{
      this.messageList = data
      this.messageList = this.messageList.data
      
    })
  }


  filterUser(data:any){
    data.filter((element:any)=>{
      if(element.role == 'user'){
        this.userRole.push(element)
      }else if(element.role == 'agent'){
        this.agentRole.push(element)
      }
    })
    console.log('user', this.userRole)  
    console.log('agent', this.agentRole)
  }

  




}
