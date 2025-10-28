import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboarServiceService } from '../dashboar-service.service';

@Component({
  selector: 'app-project-uploading',
  templateUrl: './project-uploading.component.html',
  styleUrls: ['./project-uploading.component.css']
})
export class ProjectUploadingComponent {
  @ViewChild('editor') editor: any;

  name = 'Angular';
  modules = {
    formula: false,
    toolbar: [      
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['formula'], 
      ['image', 'code-block']
    ]
  };
  logChange($event:any) {
    console.log(this.editor);
    console.log($event);
  }

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
      project_pic:[[],Validators.required],
      project_payment_plan:[''],
      project_map:[''],
      project_des:['',Validators.required]
    }
  )



  selectedFiles: File[] = []; // store multiple files

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      // Convert FileList to Array
      const filesArray = Array.from(input.files);
  
      // If you want a max of 3 files:
      this.selectedFiles = filesArray.slice(0, 3);
  
      // Patch the first 3 files into form
      this.projectForm.patchValue({ project_pic: this.selectedFiles });
  
      console.log('selected file',this.selectedFiles);
    }
  }

  selectedMap:any;
  onMapSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedMap = input.files[0];
      this.projectForm.patchValue({ project_map: this.selectedMap });
      console.log('selected map',this.selectedMap);
    }
  }

  selectedPaymentPlan:any;
  onPlanSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedPaymentPlan = input.files[0];
      this.projectForm.patchValue({ project_payment_plan: this.selectedPaymentPlan });
      console.log('selected plan',this.selectedPaymentPlan);
    }
  }
  
  

  addProject() {
    if (this.projectForm.valid) {
      const formData = new FormData();
  
      // Append text fields (everything except file fields)
      Object.keys(this.projectForm.value).forEach(key => {
        if (key !== 'project_pic' && key !== 'project_map' && key !== 'project_payment_plan') {
          formData.append(key, this.projectForm.value[key]);
        }
      });
  
      // Append files from your selected variables
      this.selectedFiles.forEach(file => formData.append('project_pic', file)); // multiple pics
      if (this.selectedMap) {
        formData.append('project_map', this.selectedMap); // single map file
      }
      if (this.selectedPaymentPlan) {
        formData.append('project_payment_plan', this.selectedPaymentPlan); // single plan file
      }
      console.log('form', this.projectForm)
      console.log('formData', formData)
  
      // Send to API
      this._service.postProject(formData).subscribe({
        next: (data: any) => {
          console.log('add project', data);
          alert('Project added successfully');
          this.projectForm.reset();
          this.selectedFiles = [];
          this.selectedMap = null;
          this.selectedPaymentPlan = null;
        },
        error: (err:any) => {
          console.error('Error adding project', err);
          alert('Failed to add project');
        }
      });
  
    } else {
      alert('Invalid Form');
    }
  
    console.log(this.projectForm);
  }
  
}
