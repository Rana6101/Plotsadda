import { Component,ViewChild } from '@angular/core';
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
  editorContent:any='';
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
  onFileSelected(event: any) {
    const file = event.target as HTMLInputElement
    if (file.files && file.files.length > 0) {
      this.selectedFile = file.files[0];
      this.blogForm.patchValue({ blog_pic: this.selectedFile });
      console.log(this.selectedFile)
    }
  }

  addBlog(){
    if(this.blogForm.valid){
      const formData = new FormData();
      formData.append('blog_pic', this.selectedFile)
      formData.append('user_id', this.blogForm.get('user_id')?.value)
      formData.append('user_name', this.blogForm.get('user_name')?.value)
      formData.append('blog_title', this.blogForm.get('blog_title')?.value)
      formData.append('blog_des', this.blogForm.get('blog_des')?.value)
      this._service.postBlog(formData).subscribe((data:any)=>{
        console.log('addblog',data)
        alert('Blog added successfully')
        this.blogForm.reset()
        this.blogForm.patchValue({blog_pic:[]})
      }
      )
    }else{
      alert('InValid Form')
    }    
  }
}
