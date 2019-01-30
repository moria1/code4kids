import { Injectable } from '@angular/core';
import { users } from '../models/users';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _baseUrl:string;
  constructor(private _http:HttpClient) { }

  addUser(newUser:users){
     this._http.post(this._baseUrl + '/API/identity/user', newUser);
  }
}
