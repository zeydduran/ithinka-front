import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  allUser() {
    const url: string = `${environment.apiUrl}user`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    return this.http.get<User[]>(url, options).toPromise();
  }
  getUser(id: number) {
    const url: string = `${environment.apiUrl}user/${id}`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    return this.http.get<User>(url, options).toPromise();
  }
  update(id: number, email: string, password: string, name: string) {
    const url: string = `${environment.apiUrl}user/${id}`;
    const body: any = { email: email, password: password, name: name };
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    return this.http.put<User>(url, body, options).toPromise();
  }
  delete(id: number) {
    const url: string = `${environment.apiUrl}user/${id}`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    return this.http.delete<User>(url, options).toPromise();
  }

}
