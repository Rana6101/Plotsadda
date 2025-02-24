import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {NzCascaderOption } from 'ng-zorro-antd/cascader';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(
    private _service:AuthServiceService, 
    private _dashservice:DashboarServiceService,
    private router:Router
    
  ){
    this._dashservice.getListing().subscribe(data=>{
      this.property_list = data
      this.property_list = this.property_list.data
      console.log(data)
      this.filterProperty(this.property_list)
      console.log(this.buy_list)
    })
    this.filterMinPrice = this.minPrice
    this.filterMaxPrice = this.maxPrice

  }
  filterMinPrice:any=[]
  filterMaxPrice:any=[]
  property_list:any;
  buy_list:any=[];
  filterProperty(data:any){
    data.filter((element:any)=>{
      if(element.purpose == 'sell'){
        this.buy_list.push(element)
      }
    })
  }
  viewProperty(id:number){
    this.router.navigate(['/property_view',id])
  }
  minUpdate(data:any){
    if(data.target.value != ''){
      this.filterMinPrice = []
    }else if(data.target.value == ''){
      this.filterMinPrice = this.minPrice
    }
    this.maxPrice.filter(element=>{
      if(JSON.parse(element.value) < data.target.value){
        this.filterMinPrice.push(element)
      }
    })    
  }
  maxUpdate(data:any){
    if(data.target.value != ''){
      this.filterMaxPrice = []
    }else if(data.target.value == ''){
      this.filterMaxPrice = this.maxPrice
    }
    this.maxPrice.filter(element=>{
      if(JSON.parse(element.value) > data.target.value){
        this.filterMaxPrice.push(element)
      }
    })    
  }




  cityList=this._service.city_list
  minPrice=[
    { value:'500000' },
    { value:'1000000' },
    { value:'2000000' },
    { value:'3500000' },
    { value:'5000000' },
    { value:'6500000' },
    { value:'8000000' },
    { value:'10000000' },
    { value:'12500000' },
    { value:'15000000' },
    { value:'17500000' },
    { value:'20000000' },
    { value:'25000000' },
    { value:'30000000' },
    { value:'40000000' },
    { value:'50000000' },
    { value:'75000000' },
    { value:'100000000' },
    { value:'250000000' },
    { value:'500000000' },
  ]
  maxPrice=[
    { value:'500000' },
    { value:'1000000' },
    { value:'2000000' },
    { value:'3500000' },
    { value:'5000000' },
    { value:'6500000' },
    { value:'8000000' },
    { value:'10000000' },
    { value:'12500000' },
    { value:'15000000' },
    { value:'17500000' },
    { value:'20000000' },
    { value:'25000000' },
    { value:'30000000' },
    { value:'40000000' },
    { value:'50000000' },
    { value:'75000000' },
    { value:'100000000' },
    { value:'250000000' },
    { value:'500000000' },
    { value:'1000000000' },
  ]


  options: NzCascaderOption[] = [
    {
      value: 'home',
      label: 'Home',
      children: [
        {
          value: 'house',
          label: 'House',
          isLeaf: true
        },
        {
          value: 'flat',
          label: 'Flat',
          isLeaf: true
        },
        {
          value: 'upper_portion',
          label: 'Upper Portion',
          isLeaf: true
        },
        {
          value: 'lower-portion',
          label: 'Lower Portion',
          isLeaf: true
        },
        {
          value: 'farm-house',
          label: 'Farm House',
          isLeaf: true
        },
        {
          value: 'room',
          label: 'Room',
          isLeaf: true
        },
        {
          value: 'penthouse',
          label: 'Penthouse',
          isLeaf: true
        },
      ]
    },
    {
      value: 'plots',
      label: 'Plots',
      children: [
        {
          value: 'residential-plot',
          label: 'Residential Plot',
          isLeaf: true
        },
        {
          value: 'commercial-plot',
          label: 'Commercial Plot',
          isLeaf: true
        },
        {
          value: 'agriland',
          label: 'Agriculture Land',
          isLeaf: true
        },
        {
          value: 'indusland',
          label: 'industrial Land',
          isLeaf: true
        },
        {
          value: 'plot-file',
          label: 'Plot File',
          isLeaf: true
        },
        {
          value: 'plot-form',
          label: 'Plot Form',
          isLeaf: true
        }
      ]
    },
    {
      value: 'commercial',
      label: 'Commercial',
      children: [
        {
          value: 'shop',
          label: 'Shop',
          isLeaf: true
        },
        {
          value: 'office',
          label: 'Office',
          isLeaf: true
        },
        {
          value: 'warehouse',
          label: 'Warehouse',
          isLeaf: true
        },
        {
          value: 'factory',
          label: 'Factory',
          isLeaf: true
        },
        {
          value: 'building',
          label: 'Building',
          isLeaf: true
        },
        {
          value: 'other',
          label: 'other',
          isLeaf: true
        },
      ]
    }
  ];

  nzOptions: NzCascaderOption[] = this.options;
  values: string[] | null = null;

  typeChanges(values: string[]): void {
    console.log(values, this.values);
  }
    
}
