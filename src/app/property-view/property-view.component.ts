import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent {
   propertyDetail: any;
   
  
    constructor(
      private route: ActivatedRoute,
      private _fb: FormBuilder,
      private _service: DashboarServiceService
    ) {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(this.route.snapshot.paramMap.get('id'))
      this._service.getProperty(id).subscribe((data:any) => {
        console.log(data)
        this.propertyDetail = data;
        this.propertyDetail = this.propertyDetail.data
        console.log(this.propertyDetail)
      });
     }

     BASE_URL = this._service.BASE_URL
     lightboxOpen = false;
     selectedIndex = 0;
     photos:any
     imgArray:any =[]
   
     openLightbox(i: number, url:any) {
       this.lightboxOpen = false
       this.propertyDetail.property_img.forEach((element:any) => {
        this.imgArray.push(this.BASE_URL + '/listing/file/' + element)
       });
       this.selectedIndex = i;
       this.photos = this.imgArray
       console.log(this.imgArray)
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
      this.queryForm.patchValue({property_id:this.propertyDetail._id,property_no:'10003'})
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
