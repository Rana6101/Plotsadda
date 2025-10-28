import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboarServiceService } from 'src/app/dashboard/dashboar-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-agency-listing',
  templateUrl: './agency-listing.component.html',
  styleUrls:['./agency-listing.component.css'] 
})
export class AgencyListingComponent {
  userDetail = JSON.parse(localStorage.getItem("PA_auth_info")||"")
  isIntallAvail= false;
  addOtherVideo = false;
  
  constructor(private _service:AuthServiceService, private _fb:FormBuilder, private _dashService:DashboarServiceService){}
  cityList= this._service.city_list;
  installAvail(){
    this.isIntallAvail = !this.isIntallAvail;
  }
  addVideo(){
    this.addOtherVideo = true;
  }

  listingForm = this._fb.group({
    poster_id:[''],
    purpose:[''],
    property_type:[''],
    city:[''],
    location:[''],
    area_size:[''],
    area_unit:[''],
    price:[''],
    installment_status:[''],
    advance:[''],
    no_of_installments:[''],
    installment_amount:[''],
    possession_status:[''],
    no_of_bedroom:[''],
    no_of_bath:[''],
    ad_title:[''],
    ad_description:[''],
    property_img:[[],Validators.required] ,
    property_vid1:[''],
    property_vid2:[''],
    email:[''],
    phone:[''],
    landline:['']
  })

  propertyImgs:File[] |any = []
  onUploadChange(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Convert FileList to Array
      const filesArray = Array.from(input.files);
      // If you want a max of 3 files:
      this.propertyImgs = filesArray.slice(0, 10);
      // Patch the first 3 files into form
      this.listingForm.patchValue({ property_img: this.propertyImgs }); 
      console.log('selected file',this.propertyImgs);
    }
  }





  postListing(){
    if (this.listingForm.valid) {
      this.listingForm.patchValue(      {poster_id:this.userDetail._id})
      const formData = new FormData();
      // Append text fields (everything except file fields)
      Object.entries(this.listingForm.value).forEach(([key, value]) => {
        if (key !== 'property_img' && value !== null && value !== undefined) {
          formData.append(key, value as any);
        }
      });
  
      // Append files from your selected variables
      this.propertyImgs.forEach((file:any) => formData.append('property_img', file)); // multiple pics
      console.log('formData', formData.getAll('property_img'))
  
      // Send to API
      this._dashService.postListing(formData).subscribe({
        next: (data: any) => {
          console.log('add property', data);
          alert('property added successfully');
          this.listingForm.reset();
          this.propertyImgs = [];
        },
        error: (err:any) => {
          console.error('Error adding property', err);
          alert('Failed to add property');
        }
      });
  
    } else {
      alert('Invalid Form');
    }
  }
  filterLocation:any[]=[]

oncitychange(data:any){
  this.filterLocation=[]
  if(data == "Lahore"){
    this.locationList.filter((element:any)=>{
      if(element.cityName == 'Lahore'){
        this.filterLocation.push(element)
      }
    })
  }else if(data == "Islamabad"){
    this.locationList.filter((element:any)=>{
      if(element.cityName == 'Islamabad'){
        this.filterLocation.push(element)
      }
    })
  }else if(data == "Karachi"){
    this.locationList.filter((element:any)=>{
      if(element.cityName == 'Karachi'){
        this.filterLocation.push(element)
      }
    })
  }else{
    this.filterLocation.push({cityName: 'other', location: 'Other'})
  }
  console.log('input', data)
  console.log('output', this.filterLocation )

   
}

locationList=[
  {    cityName:'Lahore',location:'DHA Defence (Phase 1-9, DHA Rahbar)'},
  {    cityName:'Lahore',location:'Bahria Town (Sector A-F)'},
  {    cityName:'Lahore',location:'Johar Town (Phase 1 & 2)'},
  {    cityName:'Lahore',location:'Model Town'},
  {    cityName:'Lahore',location:'Gulberg (I-V)'},
  {    cityName:'Lahore',location:'Cantt'},
  {    cityName:'Lahore',location:'Faisal Town'},
  {    cityName:'Lahore',location:'Garden Town'},
  {    cityName:'Lahore',location:'Wapda Town'},
  {    cityName:'Lahore',location:'PCSIR Housing Scheme'},
  {    cityName:'Lahore',location:'Valencia Town'},
  {    cityName:'Lahore',location:'Izmir Town'},
  {    cityName:'Lahore',location:'Eden Villas'},
  {    cityName:'Lahore',location:'LDA Avenue'},
  {    cityName:'Lahore',location:'Sabzazar'},
  {    cityName:'Lahore',location:'Allama Iqbal Town'},
  {    cityName:'Lahore',location:'Samanabad'},
  {    cityName:'Lahore',location:'Shadman'},
  {    cityName:'Lahore',location:'Canal View'},
  {    cityName:'Lahore',location:'Lake City'},
  {    cityName:'Lahore',location:'State Life Housing Society'},
  {    cityName:'Lahore',location:'EME Society'},
  {    cityName:'Lahore',location:'Khayaban-e-Amin'},
  {    cityName:'Lahore',location:'Park View Villas'},
  {    cityName:'Lahore',location:'Al Rehman Garden (Phase 1-7)'},
  {    cityName:'Lahore',location:'Al Noor Orchard'},
  {    cityName:'Lahore',location:'Central Park Housing Scheme'},
  {    cityName:'Lahore',location:'Bahria Orchard'},
  {    cityName:'Lahore',location:'Fazaia Housing Society'},
  {    cityName:'Lahore',location:'NFC Housing Society (Phase 1 & 2)'},
  {    cityName:'Lahore',location:'Mall Road'},
  {    cityName:'Lahore',location:'MM Alam Road'},
  {    cityName:'Lahore',location:'Liberty Market'},
  {    cityName:'Lahore',location:'Anarkali'},
  {    cityName:'Lahore',location:'Shahdara'},
  {    cityName:'Islamabad',location:'G-5 to G-16'},
  {    cityName:'Islamabad',location:'F-5 to F-11'},
  {    cityName:'Islamabad',location:'E-7 to E-11'},
  {    cityName:'Islamabad',location:'H-8 to H-13'},
  {    cityName:'Islamabad',location:'I-8 to I-16'},
  {    cityName:'Islamabad',location:'D-12'},
  {    cityName:'Islamabad',location:'D-17'},
  {    cityName:'Islamabad',location:'DHA Islamabad (Phase I-V)'},
  {    cityName:'Islamabad',location:'Bahria Town Islamabad (Phase I-VIII)'},
  {    cityName:'Islamabad',location:'Gulberg Islamabad'},
  {    cityName:'Islamabad',location:'Top City-1'},
  {    cityName:'Islamabad',location:'Mumtaz City'},
  {    cityName:'Islamabad',location:'B-17 Multi Gardens'},
  {    cityName:'Islamabad',location:'Pakistan Town'},
  {    cityName:'Islamabad',location:'Soan Garden'},
  {    cityName:'Islamabad',location:'PWD Housing Society'},
  {    cityName:'Islamabad',location:'Ghauri Town'},
  {    cityName:'Islamabad',location:'Airport Housing Society'},
  {    cityName:'Islamabad',location:'Naval Anchorage'},
  {    cityName:'Islamabad',location:'Jinnah Gardens'},
  {    cityName:'Islamabad',location:'MPCHS Housing Schemes'},
  {    cityName:'Islamabad',location:'Blue Area'},
  {    cityName:'Islamabad',location:'Kashmir Highway'},
  {    cityName:'Islamabad',location:'Expressway'},
  {    cityName:'Islamabad',location:'Murree Road'},
  {    cityName:'Karachi',location:'DHA Karachi (Phase I-VIII, DHA City)'},
  {    cityName:'Karachi',location:'Bahria Town Karachi'},
  {    cityName:'Karachi',location:'Gulshan-e-Iqbal'},
  {    cityName:'Karachi',location:'Gulistan-e-Jauhar'},
  {    cityName:'Karachi',location:'North Nazimabad'},
  {    cityName:'Karachi',location:'Nazimabad'},
  {    cityName:'Karachi',location:'Korangi'},
  {    cityName:'Karachi',location:'Malir'},
  {    cityName:'Karachi',location:'Gulshan-e-Maymar'},
  {    cityName:'Karachi',location:'Federal B Area (FB Area)'},
  {    cityName:'Karachi',location:'Scheme 33'},
  {    cityName:'Karachi',location:'PECHS'},
  {    cityName:'Karachi',location:'Clifton'},
  {    cityName:'Karachi',location:'Saddar Town'},
  {    cityName:'Karachi',location:'Surjani Town'},
  {    cityName:'Karachi',location:'Garden East'},
  {    cityName:'Karachi',location:'Garden West'},
  {    cityName:'Karachi',location:'Liaquatabad'},
  {    cityName:'Karachi',location:'Shah Faisal Colony'},
  {    cityName:'Karachi',location:'Saadi Town'},
  {    cityName:'Karachi',location:'Saadi Garden'},
  {    cityName:'Karachi',location:'Punjabi Saudagar Society'},
  {    cityName:'Karachi',location:'Gwalior Cooperative Housing Society'},
  {    cityName:'Karachi',location:'Lawyers Colony'},
  {    cityName:'Karachi',location:'Madras Cooperative Society'},
  {    cityName:'Karachi',location:'Tariq Road'},
  {    cityName:'Karachi',location:'Shahrah-e-Faisal'},
  {    cityName:'Karachi',location:'I.I. Chundrigar Road'},
  {    cityName:'Karachi',location:'Saddar'},
  {    cityName:'Karachi',location:'Super Highway (M-9)'},
  {    cityName:'Karachi',location:'Korangi Industrial Area'},
  {    cityName:'Karachi',location:'FB Area Block-wise'},
  {    cityName:'Karachi',location:'Orangi Town'},
  {    cityName:'Karachi',location:'Landhi'}
]


}
