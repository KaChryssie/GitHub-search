import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
private username : string;

  constructor(private http: HttpClient) { 
    console.log("service is now ready!");
    this.username = 'KaChryssie'
  }

getProfileInfo() {
  return this.http.get("https://api.github.com/users/" +  this.username + "access_token= 6215e047c9a212f13a2f4e9671d6b2bffe03ab19")
}


}
