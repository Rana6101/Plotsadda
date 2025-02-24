import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent {
  blogDetail: any;

  constructor(
    private route: ActivatedRoute,
    private _service: DashboarServiceService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'))
    this._service.getBlog(id).subscribe(data => {
      console.log(data)
      this.blogDetail = data;
      this.blogDetail = this.blogDetail.data
      console.log(this.blogDetail)
    });
   }

  ngOnInit(): void {
    
  }
}
