import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { DashboarServiceService } from '../dashboar-service.service';

@Component({
  selector: 'app-blog-posting',
  templateUrl: './blog-posting.component.html',
  styleUrls: ['./blog-posting.component.css']
})
export class BlogPostingComponent {
  base64textString = [''];
  selectedFile:any
  constructor(private _fb:FormBuilder, private _service:DashboarServiceService){}
  blogForm:FormGroup = this._fb.group(
    {
      user_id:['1012',Validators.required],
      user_name:['Rana',Validators.required],
      blog_title:['',Validators.required],
      blog_pic:['',Validators.required],
      blog_pic_file:[null,Validators.required],
      blog_des:['',Validators.required]
    }
  )
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.blogForm.patchValue({ blog_pic_file: this.selectedFile });
      console.log(this.selectedFile)
    }
  }



  // onUploadChange(evt: any) {
  //   const file = evt.target.files[0];
  
  //   if (file) {
  //     const reader = new FileReader();
  
  //     reader.onload = this.handleReaderLoaded.bind(this);
  //     reader.readAsBinaryString(file);

  //   }
  // }
  
  // handleReaderLoaded(e:any) {
  //   this.base64textString = []
  //   this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  //   console.log("conversion",this.base64textString)
  // }
  addBlog(){
    // this.blogForm.patchValue({blog_pic_file:[this.base64textString[0]]})
    if(this.blogForm.valid){
      this._service.postBlog(this.blogForm.value).subscribe(data=>{
        console.log('addblog',data)
        alert('Blog added successfully')
        this.blogForm.reset()
      }
      )
    }else{
      alert('InValid Form')
    }    
  }
}
