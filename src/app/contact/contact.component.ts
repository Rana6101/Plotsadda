import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private _service:AuthServiceService, private _fb:FormBuilder){}
  isAgent:boolean=false;
  personType(){
    this.isAgent = true
    console.log(this.isAgent)
  }
  cityList=this._service.city_list;
  messageForm= this._fb.group({
    user_name:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.required],
    city:['',Validators.required],
    subject:['',Validators.required],
    message:['',Validators.required],
    role_check:[''],
    role_type:['']
  })
  sendQuery(){
    if(this.messageForm.valid){
      this._service.postMessage(this.messageForm.value).subscribe((data:any)=>
      {
        console.log(data)
        this.messageForm.reset();
        alert("Your message delivered to us Our team member will be approach you soon.")
      }
      )
    }else{
      alert('plz fill all the required filled')
    }
    console.log(this.messageForm.value)
  }
}
