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
      blog_des:['',Validators.required]
    }
  )
  onFileSelected(event: any) {
    const file = event.target as HTMLInputElement
    if (file.files && file.files.length > 0) {
      this.selectedFile = file.files[0];
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
      const formData = new FormData();
      formData.append('blog_pic', this.selectedFile)
      formData.append('user_id', this.blogForm.get('user_id')?.value)
      formData.append('user_name', this.blogForm.get('user_name')?.value)
      formData.append('blog_title', this.blogForm.get('blog_title')?.value)
      formData.append('blog_des', this.blogForm.get('blog_des')?.value)
      console.log(formData.get)
      console.log(formData.getAll)
      
      this._service.postBlog(formData).subscribe(data=>{
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
