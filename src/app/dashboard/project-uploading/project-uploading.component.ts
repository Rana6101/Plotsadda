import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboarServiceService } from '../dashboar-service.service';

@Component({
  selector: 'app-project-uploading',
  templateUrl: './project-uploading.component.html',
  styleUrls: ['./project-uploading.component.css']
})
export class ProjectUploadingComponent {
base64textString = [''];
  constructor(private _fb:FormBuilder, private _service:DashboarServiceService){}
  projectForm:FormGroup = this._fb.group(
    {
      user_id:['1016',Validators.required],
      user_name:['Rana',Validators.required],
      project_title:['',Validators.required],
      mark_as_hot:[''],
      project_cost:[''],
      project_location:[''],
      project_type:[''],
      project_area:[''],
      project_pic:['',Validators.required],
      project_pic_file:['',Validators.required],
      project_des:['',Validators.required]
    }
  )



  onUploadChange(evt: any) {
    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

    }
  }
  
  handleReaderLoaded(e:any) {
    this.base64textString = []
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    console.log("conversion",this.base64textString)
  }
  addProject(){
    this.projectForm.patchValue({project_pic_file:[this.base64textString[0]]})
    if(this.projectForm.valid){
      this._service.postProject(this.projectForm.value).subscribe(data=>{
        console.log('add project',data)
        alert('project added successfully')
        this.projectForm.reset()
      }
      )
    }else{
      alert('InValid Form')
    }    
  }
}
