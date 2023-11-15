import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../Models/user";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURI:String = "http://localhost:8080/registration";
  constructor(private http:HttpClient) { }


  // User Requests
  // public registerUser(user: User){
  //
  //   if (user.profileImage!=undefined) {
  //     formData.append('profilePicture', user.profileImage);
  //     return this.http.post(this.baseURI+'/user/register', formData,  {observe:'response', responseType:'text'})
  //   }
  //   return this.http.post(this.baseURI+'/user/registerP', formData,  {observe:'response',responseType:'text'})
  // }



  public registerUser(user: User){
      return this.http.post(this.baseURI + '/user/register', JSON.stringify(user), {
        observe: 'response',
        responseType: 'text',
        headers: {'Content-Type': 'application/json'}
      });
    }

  // public registerUser(user: User) {
  //   const formData = new FormData();
  //   formData.append('user', new Blob([JSON.stringify(user)], {
  //     type: 'application/json'
  //   }));
  //   formData.append('image', user.profileImage, user.profileImage.name);
  //
  //   return this.http.post(this.baseURI + '/user/register', formData, {
  //     observe: 'response',
  //     responseType: 'text'
  //   });
  // }

  // public registerUser(user: User) {
  //   const formData = new FormData();
  //   formData.append('firstName', user.firstName);
  //   formData.append('lastName', user.lastName);
  //   formData.append('email', user.email);
  //   formData.append('birthday', user.birthday.toISOString());
  //   formData.append('password', user.password);
  //   formData.append('profileImage', user.profileImage);
  //
  //   return this.http.post(this.baseURI + '/user/register', formData, {
  //     observe: 'response',
  //     responseType: 'text'
  //   })
  // }

  // registerUser(user: User) {
  //   const formData = new FormData();
  //   formData.append('firstName', user.firstName);
  //   formData.append('lastName', user.lastName);
  //   formData.append('birthday', user.birthday);
  //   formData.append('password', user.password);
  //   formData.append('email', user.email);
  //   if (user.profileImage) {
  //     formData.append('file', user.profileImage, user.profileImage.name);
  //     return this.http.post(this.baseURI + '/user/registerP', formData);
  //   } else {
  //     return this.http.post(this.baseURI + '/user/register', formData);
  //   }
  // }


  public getUserList() {
    return this.http.get<User[]>(this.baseURI+'/listUser');
  }
}
