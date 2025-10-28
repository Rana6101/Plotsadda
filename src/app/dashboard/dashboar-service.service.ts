import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboarServiceService {
  BASE_URL='http://localhost:3000';
  IMG_BASE_URL='http://localhost:3000/blog/file/'

  constructor(private _http:HttpClient) { }

  postBlog( data:any){
    let blog_url = this.BASE_URL + "/blog"
    return this._http.post(blog_url,data)
  }
  getBlogs(){
    let blog_url = this.BASE_URL + "/blog"
    return this._http.get(blog_url)
  }
  getBlog(id:any){
    let blog_url = this.BASE_URL + "/blog"
    return this._http.get(`${blog_url}/${id}`)
  }
  getProperty(id:any){
    let listing_url = this.BASE_URL + "/listing"
    return this._http.get(`${listing_url}/${id}`)
  }
  postListing(data:any){
    let listing_url = this.BASE_URL + "/listing"
    return this._http.post(listing_url,data)
  }

  getListing(){
    let listing_url = this.BASE_URL + "/listing"
    return this._http.get(listing_url)
  }
  postProject( data:any){
    let project_url = this.BASE_URL + "/project"
    return this._http.post(project_url,data)
  }

  getProject(){
    let project_url = this.BASE_URL + "/project"
    return this._http.get(project_url)
  }
  getSingleProject(id:any){
    let project_url = this.BASE_URL + "/project"
    return this._http.get(`${project_url}/${id}`)
  }

  postInquery(data:any){
    let inquery_url = this.BASE_URL + "/inquery"
    return this._http.post(inquery_url,data)
  }

  getInquery(){
    let inquery_url = this.BASE_URL + "/inquery"
    return this._http.get(inquery_url)
  }






}
