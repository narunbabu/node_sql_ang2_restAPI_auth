import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    // title = 'app';
    // url = "http://localhost:5000/api/login";
    //  user = { "email":"ab@ameyem.com", "password":"arun@123" };
    username="ab@ameyem.com";password:"arun@123";
    login(username: string, password: string) {
        console.log("In athentication service "+username +' '+password);
        // return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
        return this.http.post(this.config.apiUrl + '/api/login', { email: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                let user = response.json();
                console.log(user )
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}