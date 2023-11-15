import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string;

  constructor(private http:HttpClient) {this.userURL='http://localhost:8080/users' }

  findAll():Observable<User[]>{
    return this.http.get<User[]>(this.userURL)
  }
  public delete(user: User) {
    this.http.delete(this.userURL + "/" + user.id).subscribe()
  }
  public sendFriendRequest(requestedUser: String) {

    return this.http.post<any>(this.userURL + '/send-friend-request', { requestedUser });
  }


  public setFriendListPrivacy(isPublic: boolean): Observable<any> {

    return this.http.post<any>(this.userURL + '/set-friend-list-privacy', { isPublic });
  }



  public acceptFriendRequest(requester: String): Observable<any> {

    return this.http.post<any>(this.userURL + '/accept-friend-request', { requester });
  }

  public rejectFriendRequest(requester: String): Observable<any> {

    return this.http.post<any>(this.userURL + '/reject-friend-request', { requester });
  }

  public findByLastName(input: String)
  {
    return this.http.get<User[]>(this.userURL+"/lastname/"+input);
  }
  public findByFirstName(input:String)
  {
    return this.http.get<User[]>(this.userURL+"/firstname/"+input);
  }
  public findByEmail(input:String)
  {
    return this.http.get<User[]>(this.userURL+"/email/"+input);
  }
}
