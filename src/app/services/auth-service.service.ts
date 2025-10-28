import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loginUser = new BehaviorSubject<any>('') 
  isLoggedIn(): boolean {
    this.loginUser.next(localStorage.getItem('PA_auth_info'))
    console.log('service login')
    if(localStorage.getItem('PA_auth_info') !== null)
    {
      return true
    }else {
      return false
    }
  }
  logoutUser(){
    localStorage.removeItem('PA_auth_info')
    this.loginUser.next('')
  }

  BASE_URL='http://localhost:3000';
  IMG_BASE_URL='http://localhost:3000/blog/file/';
  PRO_BASE_URL='http://localhost:3000/profile_pic/file/';
  isAgent = new BehaviorSubject<any>(false);

  constructor(private _http:HttpClient) { }

  login(data:any){
    let url = this.BASE_URL + "/login";
    return this._http.post(url, data);
  }
  register(data:any){
    let url = this.BASE_URL+"/register";
    return this._http.post(url, data);
  }
  agencyLogin(data:any){
    let url = this.BASE_URL + "/agency_login";
    return this._http.post(url, data);
  }
  agencyRegister(data:any){
    let url = this.BASE_URL+"/agency_register";
    return this._http.post(url, data);
  }
  getAllUser(){
    let url = this.BASE_URL + "/users"
    return this._http.get(url);
  }
  getAgency(){
    let url = this.BASE_URL + "/agencys"
    return this._http.get(url);
  }

  postMessage(data:any){
    let url = this.BASE_URL + "/contact"
    return this._http.post(url, data)
  }
  getMessage(){
    let url = this.BASE_URL + "/contact"
    return this._http.get(url);
  }







  city_list=[
    {cityName:"	Abbottabad	",value:"Abbottabad"},
    {cityName:"	Abdul Hakim	",value:"Abdul Hakim"},
    {cityName:"	Ahmadpur East	",value:"Ahmadpur East"},
    {cityName:"	Akora	",value:"Akora"},
    {cityName:"	Allahabad	",value:"Allahabad"},
    {cityName:"	Arandu	",value:"Arandu"},
    {cityName:"	Arifwala	",value:"Arifwala"},
    {cityName:"	Atharan Hazari	",value:"Atharan Hazari"},
    {cityName:"	Attock Khurd	",value:"Attock Khurd"},
    {cityName:"	Awan Patti	",value:"Awan Patti"},
    {cityName:"	Ayun	",value:"Ayun"},
    {cityName:"	Badin	",value:"Badin"},
    {cityName:"	Badrashni	",value:"Badrashni"},
    {cityName:"	Bagh	",value:"Bagh"},
    {cityName:"	Bagu Na Mohra	",value:"Bagu Na Mohra"},
    {cityName:"	Bahawalnagar	",value:"Bahawalnagar"},
    {cityName:"	Bahawalpur	",value:"Bahawalpur"},
    {cityName:"	Bahrain	",value:"Bahrain"},
    {cityName:"	Baltit	",value:"Baltit"},
    {cityName:"	Bandhi	",value:"Bandhi"},
    {cityName:"	Bannu	",value:"Bannu"},
    {cityName:"	Basla	",value:"Basla"},
    {cityName:"	Bat Khela	",value:"Bat Khela"},
    {cityName:"	Batgram	",value:"Batgram"},
    {cityName:"	Bela	",value:"Bela"},
    {cityName:"	Bhakkar	",value:"Bhakkar"},
    {cityName:"	Bhalwal	",value:"Bhalwal"},
    {cityName:"	Bhawana	",value:"Bhawana"},
    {cityName:"	Bhimbar	",value:"Bhimbar"},
    {cityName:"	Buni	",value:"Buni"},
    {cityName:"	Bunji	",value:"Bunji"},
    {cityName:"	Chakdarra	",value:"Chakdarra"},
    {cityName:"	Chakwal	",value:"Chakwal"},
    {cityName:"	Chaman	",value:"Chaman"},
    {cityName:"	Charbagh	",value:"Charbagh"},
    {cityName:"	Charsadda	",value:"Charsadda"},
    {cityName:"	Chauk Azam	",value:"Chauk Azam"},
    {cityName:"	Chenab Nagar	",value:"Chenab Nagar"},
    {cityName:"	Chilas	",value:"Chilas"},
    {cityName:"	Chiniot	",value:"Chiniot"},
    {cityName:"	Chishtian	",value:"Chishtian"},
    {cityName:"	Chitral	",value:"Chitral"},
    {cityName:"	Choa Saidan Shah	",value:"Choa Saidan Shah"},
    {cityName:"	Chunian	",value:"Chunian"},
    {cityName:"	Dadu	",value:"Dadu"},
    {cityName:"	Dainyor	",value:"Dainyor"},
    {cityName:"	Dera Allahyar	",value:"Dera Allahya"},
    {cityName:"	Dera Ghazi Khan	",value:"Dera Ghazi Khan"},
    {cityName:"	Dera Ismail Khan	",value:"Dera Ismail Khan"},
    {cityName:"	Dhanot	",value:"Dhanot"},
    {cityName:"	Dina	",value:"Dina"},
    {cityName:"	Dinga	",value:"Dinga"},
    {cityName:"	Dipalpur	",value:"Dipalpur"},
    {cityName:"	Doaba	",value:"Doaba"},
    {cityName:"	Drazinda	",value:"Drazinda"},
    {cityName:"	Dulmial	",value:"Dulmial"},
    {cityName:"	Eminabad	",value:"Eminabad"},
    {cityName:"	Faisalabad	",value:"Faisalabad"},
    {cityName:"	Faruka	",value:"Faruka"},
    {cityName:"	Firoza	",value:"Firoza"},
    {cityName:"	Gadani	",value:"Gadani"},
    {cityName:"	Gahi Mammar	",value:"Gahi Mammar"},
    {cityName:"	Gakuch	",value:"Gakuch"},
    {cityName:"	Ghora Gali	",value:"Ghora Gali"},
    {cityName:"	Ghota Fatehgarh	",value:"Ghota Fatehgarh"},
    {cityName:"	Ghotki	",value:"Ghotki"},
    {cityName:"	Ghuenke	",value:"Ghuenke"},
    {cityName:"	Gilgit	",value:"Gilgit"},
    {cityName:"	Gojra	",value:"	Gojra"},
    {cityName:"	Goth Tando Sumro	",value:"Goth Tando Sumro"},
    {cityName:"	Gujar Khan	",value:"Gujar Khan"},
    {cityName:"	Gujranwala	",value:"Gujranwala"},
    {cityName:"	Gujrat	",value:"Gujrat"},
    {cityName:"	Gwadar	",value:"Gwadar"},
    {cityName:"	Hadali	",value:"Hadali"},
    {cityName:"	Hafizabad	",value:"Hafizabad"},
    {cityName:"	Haider Khel	",value:"Haider Khel"},
    {cityName:"	Haji Shah	",value:"Haji Shah"},
    {cityName:"	Hajira	",value:"Hajira"},
    {cityName:"	Hala	",value:"Hala"},
    {cityName:"	Hangu	",value:"Hangu"},
    {cityName:"	Haripur	",value:"Haripur"},
    {cityName:"	Harnai	",value:"Harnai"},
    {cityName:"	Harunabad	",value:"Harunabad"},
    {cityName:"	Hasilpur	",value:"Hasilpur"},
    {cityName:"	Hassan Abdal	",value:"Hassan Abdal"},
    {cityName:"	Hattian Bala	",value:"Hattian Bala"},
    {cityName:"	Hujra Shah Muqim	",value:"Hujra Shah Muqim"},
    {cityName:"	Hyderabad City	",value:"Hyderabad City"},
    {cityName:"	Idak	",value:"Idak"},
    {cityName:"	Islamabad	",value:"Islamabad"},
    {cityName:"	Jacobabad	",value:"Jacobabad"},
    {cityName:"	Jaglot	",value:"Jaglot"},
    {cityName:"	Jalalabad	",value:"Jalalabad"},
    {cityName:"	Jalalpur Bhattian	",value:"Jalalpur Bhattian"},
    {cityName:"	Jalalpur Jattan	",value:"Jalalpur Jattan"},
    {cityName:"	Jamshoro	",value:"Jamshoro"},
    {cityName:"	Jandola	",value:"Jandola"},
    {cityName:"	Jaranwala	",value:"Jaranwala"},
    {cityName:"	Jauharabad	",value:"Jauharabad"},
    {cityName:"	Jhang City	",value:"Jhang City"},
    {cityName:"	Jhelum	",value:"Jhelum"},
    {cityName:"	Johi	",value:"Johi"},
    {cityName:"	Kabirwala	",value:"Kabirwala"},
    {cityName:"	Kahan	",value:"Kahan"},
    {cityName:"	Kahror Pakka	",value:"Kahror Pakka"},
    {cityName:"	Kalat	",value:"Kalat"},
    {cityName:"	Kalu Khan	",value:"Kalu Khan"},
    {cityName:"	Kamalia	",value:"Kamalia"},
    {cityName:"	Kambar	",value:"Kambar"},
    {cityName:"	Kandhkot	",value:"Kandhkot"},
    {cityName:"	Karachi	",value:"Karachi"},
    {cityName:"	Karak	",value:"Karak"},
    {cityName:"	Kasur	",value:"Kasur"},
    {cityName:"	Kathri	",value:"Kathri"},
    {cityName:"	Khairpur Tamewah	",value:"Khairpur Tamewah"},
    {cityName:"	Khanewal	",value:"Khanewal"},
    {cityName:"	Khanpur	",value:"Khanpur"},
    {cityName:"	Khapalu	",value:"Khapalu"},
    {cityName:"	Kharan	",value:"Kharan"},
    {cityName:"	Kharian	",value:"Kharian"},
    {cityName:"	Khewra	",value:"Khewra"},
    {cityName:"	Khipro	",value:"Khipro"},
    {cityName:"	Khushab	",value:"Khushab"},
    {cityName:"	Khuzdar	",value:"Khuzdar"},
    {cityName:"	Khwazakhela	",value:"Khwazakhela"},
    {cityName:"	Kohat	",value:"Kohat"},
    {cityName:"	Kot Addu	",value:"Kot Addu"},
    {cityName:"	Kot Mumin	",value:"Kot Mumin"},
    {cityName:"	Kot Radha Kishan	",value:"Kot Radha Kishan"},
    {cityName:"	Kotla Qasim Khan	",value:"Kotla Qasim Khan"},
    {cityName:"	Kotli	",value:"Kotli"},
    {cityName:"	Kotri	",value:"Kotri"},
    {cityName:"	Kuchlagh	",value:"Kuchlagh"},
    {cityName:"	Kulachi	",value:"Kulachi"},
    {cityName:"	Kundian	",value:"Kundian"},
    {cityName:"	Lahore	",value:"Lahore"},
    {cityName:"	Lala Musa	",value:"Lala Musa"},
    {cityName:"	Lalian	",value:"Lalian"},
    {cityName:"	Landi Kotal	",value:"Landi Kotal"},
    {cityName:"	Larkana	",value:"Larkana"},
    {cityName:"	Liaquatpur	",value:"Liaquatpur"},
    {cityName:"	Lodhran	",value:"Lodhran"},
    {cityName:"	Malak Abad	",value:"Malak Abad"},
    {cityName:"	Malakwal	",value:"Malakwal"},
    {cityName:"	Mandi Bahauddin	",value:"Mandi Bahauddin"},
    {cityName:"	Mandi Burewala	",value:"Mandi Burewala"},
    {cityName:"	Mankera	",value:"Mankera"},
    {cityName:"	Mansehra	",value:"Mansehra"},
    {cityName:"	Mardan	",value:"Mardan"},
    {cityName:"	Masho Khel	",value:"Masho Khel"},
    {cityName:"	Mehrabpur	",value:"Mehrabpur"},
    {cityName:"	Mian Channun	",value:"Mian Channun"},
    {cityName:"	Mian Sahib	",value:"Mian Sahib"},
    {cityName:"	Mianwali	",value:"Mianwali"},
    {cityName:"	Mingaora	",value:"Mingaora"},
    {cityName:"	Miro Khan	",value:"Miro Khan"},
    {cityName:"	Mirpur Bhtoro	",value:"Mirpur Bhtoro"},
    {cityName:"	Mirpur Khas	",value:"Mirpur Khas"},
    {cityName:"	Mirpur Mathelo	",value:"Mirpur Mathelo"},
    {cityName:"	Mithi	",value:"Mithi"},
    {cityName:"	Multan	",value:"Multan"},
    {cityName:"	Muridke	",value:"Muridke"},
    {cityName:"	Murree	",value:"Murree"},
    {cityName:"	Muzaffarabad	",value:"Muzaffarabad"},
    {cityName:"	Muzaffargarh	",value:"Muzaffargarh"},
    {cityName:"	Nankana Sahib	",value:"Nankana Sahib"},
    {cityName:"	Nasatta	",value:"Nasatta"},
    {cityName:"	Naushahro Firoz	",value:"Naushahro Firoz"},
    {cityName:"	Nawabshah	",value:"Nawabshah"},
    {cityName:"	Nawan Shahr	",value:"Nawan Shahr"},
    {cityName:"	New Mirpur	",value:"New Mirpur"},
    {cityName:"	Nowshera	",value:"Nowshera"},
    {cityName:"	Nurkot	",value:"Nurkot"},
    {cityName:"	Okara	",value:"Okara"},
    {cityName:"	Pakpattan	",value:"Pakpattan"},
    {cityName:"	Panjgur	",value:"Panjgur"},
    {cityName:"	Parachinar	",value:"Parachinar"},
    {cityName:"	Pasni	",value:"Pasni"},
    {cityName:"	Pasrur	",value:"Pasrur"},
    {cityName:"	Pattoki	",value:"Pattoki"},
    {cityName:"	Peshawar	",value:"Peshawar"},
    {cityName:"	Phalia	",value:"Phalia"},
    {cityName:"	Phularwan	",value:"Phularwan"},
    {cityName:"	Pind Dadan Khan	",value:"Pind Dadan Khan"},
    {cityName:"	Pindi Bhattian	",value:"Pindi Bhattian"},
    {cityName:"	Pishin	",value:"Pishin"},
    {cityName:"	Qazi Ahmad	",value:"Qazi Ahmad"},
    {cityName:"	Quetta	",value:"Quetta"},
    {cityName:"	Rahimyar Khan	",value:"Rahimyar Khan"},
    {cityName:"	Rangewala	",value:"Rangewala"},
    {cityName:"	Ranipur	",value:"Ranipur"},
    {cityName:"	Ratodero	",value:"Ratodero"},
    {cityName:"	Rawalpindi	",value:"Rawalpindi"},
    {cityName:"	Renala Khurd	",value:"Renala Khurd"},
    {cityName:"	Risalpur Cantonment	",value:"Risalpur Cantonment"},
    {cityName:"	Rohri	",value:"Rohri"},
    {cityName:"	Roulia	",value:"Roulia"},
    {cityName:"	Rukan	",value:"Rukan"},
    {cityName:"	Sadda	",value:"Sadda"},
    {cityName:"	Saddiqabad	",value:"Saddiqabad"},
    {cityName:"	Safdarabad	",value:"Safdarabad"},
    {cityName:"	Sahiwal	",value:"Sahiwal"},
    {cityName:"	Saidpur	",value:"Saidpur"},
    {cityName:"	Saidu Sharif	",value:"Saidu Sharif"},
    {cityName:"	Sakrand	",value:"Sakrand"},
    {cityName:"	Sambrial	",value:"Sambrial"},
    {cityName:"	Samundri	",value:"Samundri"},
    {cityName:"	Sanghar	",value:"Sanghar"},
    {cityName:"	Sangota	",value:"Sangota"},
    {cityName:"	Sarai Alamgir	",value:"Sarai Alamgir"},
    {cityName:"	Sargodha	",value:"Sargodha"},
    {cityName:"	Sarhari	",value:"Sarhari"},
    {cityName:"	Shabqadar	",value:"Shabqadar"},
    {cityName:"	Shah Latif Town	",value:"Shah Latif Town"},
    {cityName:"	Shahdadpur	",value:"Shahdadpur"},
    {cityName:"	Shakargarh	",value:"Shakargarh"},
    {cityName:"	Shekhupura	",value:"Shekhupura"},
    {cityName:"	Shergarh	",value:"Shergarh"},
    {cityName:"	Shujaabad	",value:"Shujaabad"},
    {cityName:"	Sialkot City	",value:"Sialkot City"},
    {cityName:"	Sillanwali	",value:"Sillanwali"},
    {cityName:"	Skardu	",value:"Skardu"},
    {cityName:"	Sukheke Mandi	",value:"Sukheke Mandi"},
    {cityName:"	Sukkur	",value:"Sukkur"},
    {cityName:"	Sultanpur Mor	",value:"Sultanpur Mor"},
    {cityName:"	Surab	",value:"	Surab	"},
    {cityName:"	Surmon Chogga Grong	",value:"Surmon Chogga Grong"},
    {cityName:"	Swabi	",value:"Swabi"},
    {cityName:"	Talamba	",value:"Talamba"},
    {cityName:"	Talhar	",value:"Talhar"},
    {cityName:"	Tando Allahyar	",value:"Tando Allahyar"},
    {cityName:"	Tando Muhammad Khan	",value:"Tando Muhammad Khan"},
    {cityName:"	Tank	",value:"Tank"},
    {cityName:"	Taxila	",value:"Taxila"},
    {cityName:"	Thal	",value:"Thal"},
    {cityName:"	Thari Mir Wah	",value:"Thari Mir Wah"},
    {cityName:"	Thatta	",value:"Thatta"},
    {cityName:"	Timargara	",value:"Timargara"},
    {cityName:"	Toba Tek Singh	",value:"Toba Tek Singh"},
    {cityName:"	Turbat	",value:"Turbat"},
    {cityName:"	Uch Sharif	",value:"Uch Sharif"},
    {cityName:"	Umarkot	",value:"Umarkot"},
    {cityName:"	Usta Muhammad	",value:"Usta Muhammad"},
    {cityName:"	Uthal	",value:"Uthal"},
    {cityName:"	Vihari	",value:"Vihari"},
    {cityName:"	Wadala Sandhuan	",value:"Wadala Sandhuan"},
    {cityName:"	Wahga	",value:"Wahga"},
    {cityName:"	Wazirabad	",value:"Wazirabad"},
    {cityName:"	Zafarwal	",value:"Zafarwal"},
    {cityName:"	Zhob	",value:"Zhob"},
    {cityName:"	Ziarat	",value:"Ziarat"},
  ]
}
