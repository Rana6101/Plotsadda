import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {
projectDetail: any;
   
  
    constructor(
      private route: ActivatedRoute,
      private _fb: FormBuilder,
      private _service: DashboarServiceService
    ) {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(this.route.snapshot.paramMap.get('id'))
      this._service.getSingleProject(id).subscribe(data => {
        console.log(data)
        this.projectDetail = data;
        this.projectDetail = this.projectDetail.data
        console.log(this.projectDetail)
      });
     }

     queryForm:FormGroup = this._fb.group({
      property_id:['',Validators.required],
      property_no:['',Validators.required],
      user_name:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required],
      role:['',Validators.required]
     })

     sendQuery(){
      this.queryForm.patchValue({property_id:this.projectDetail._id,property_no:'10003'})
      if(this.queryForm.valid){
        this._service.postInquery(this.queryForm.value).subscribe(data=>{
          alert("Your Message send Successfully!!! your team will be contact you soon!!")
          this.queryForm.reset();
          console.log(data)
        })
      }else{
        alert("Query don't send!!!!!! kindly fill all required fields")
      }
     }


}
