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
      this._service.getSingleProject(id).subscribe((data:any) => {
        console.log(data)
        this.projectDetail = data;
        this.projectDetail = this.projectDetail.data
        console.log(this.projectDetail)
        console.log(this.projectDetail.project_payment_plan)
        console.log(this.projectDetail.project_map)
      });
     }
     BASE_URL = this._service.BASE_URL
     lightboxOpen = false;
  selectedIndex = 0;
  photos:any

  openLightbox(i: number, url:any) {
    this.selectedIndex = i;
    this.photos = [
      this.BASE_URL + '/project/file/pic/' + this.projectDetail.project_pic[0],
      this.BASE_URL + '/project/file/pic/' + this.projectDetail.project_pic[1],
      this.BASE_URL + '/project/file/pic/' + this.projectDetail.project_pic[2],
      this.BASE_URL + '/project/file/payment_plan/' + this.projectDetail.project_payment_plan[0],
      this.BASE_URL + '/project/file/map/' + this.projectDetail.project_map[0]
    ];
    console.log(url)
    this.lightboxOpen = true;
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
        this._service.postInquery(this.queryForm.value).subscribe((data:any)=>{
          alert("Your Message send Successfully!!! your team will be contact you soon!!")
          this.queryForm.reset();
          console.log(data)
        })
      }else{
        alert("Query don't send!!!!!! kindly fill all required fields")
      }
     }


}
