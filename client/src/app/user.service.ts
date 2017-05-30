import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"
import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  LoginUser(name: String) {
    console.log("Service: ", name)
    return this._http.post("/login", {name: name})
        .toPromise()
  }

  CheckStatus() {
    return this._http.get("/login_status")
        .map(data => data.json())
        .toPromise()
  }

  logout() {
    return this._http.get('/logout')
        .toPromise()
  }

}
