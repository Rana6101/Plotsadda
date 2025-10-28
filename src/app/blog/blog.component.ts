import { Component } from '@angular/core';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private _service:DashboarServiceService, private router:Router){
    this.getAllBlog();
    
  }
  IMG_BASE_URL:any = this._service.IMG_BASE_URL

  blog_list:any
  getAllBlog(){
    this._service.getBlogs().subscribe((data:any)=>{
      this.blog_list = data
      this.blog_list = this.blog_list.data
      console.log(this.blog_list)
    })
  }
  viewBlog(id:number){
    this.router.navigate(['/blog_view',id])
  }



}
