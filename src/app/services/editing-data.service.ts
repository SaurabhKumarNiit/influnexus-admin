import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditingDataService {
  constructor(private http: HttpClient) {}

  data: any;

  baseurl = 'https://hardy-drawer-production.up.railway.app';
  // baseurl = 'http://localhost:1001';

  originurl ='http://localhost:1001';
  
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  getVedioRequestDatav(): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/videoRequestData`
    );
  }

  getVedioRequestData(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/videoRequestData`);
  }

  getThumbnailData(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/imgData`);
  }

  registerCustomer(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.baseurl}/userRegister`, data);
  }

  registerAdmin(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.baseurl}/addAdmin`, data);
  }

  loginCustomer(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/userLogin`, data);
  }

  loginAdmin(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/userLogin`, data);
  }

  uploadVideo(data: any) {
    return this.http.post(`${this.baseurl}/videoUpload`, data);
  }

  videoRequest(data: any) {
    console.log(data);
    return this.http.post(`${this.baseurl}/videoRequest`, data);
  }

  saveGoogleInfo(data: any) {
    console.log(data);
    return this.http.post(`${this.baseurl}/googleLogin`, data);
  }

  getAllLoginInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/userCredentials`);
  }

  saveFacebookInfo(data: any) {
    console.log(data);
    return this.http.post(`${this.baseurl}/facebookLogin`, data);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getSingleUser(): Observable<any> {
    this.data = this.getEmail();
    return this.http.get<any>(`${this.baseurl}/user/${this.data}`);
  }


  getSingleCustomerForAdmin(): Observable<any> {
    this.data = this.getEmail();
    return this.http.get<any>(`${this.baseurl}/customer/${this.data}`);
  }

  saveFeedbacks(formData:any) {
    console.log(formData);
    return this.http.post(`${this.baseurl}/feedback`, formData);
  }

  getAllFeedbacks(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/allFeedbacks`);
  }

  
  RemoveUser(email:string) {
    this.data = this.getEmail();
    return this.http.delete<any>(`${this.baseurl}/user/delete/${email}`);
  }
}
