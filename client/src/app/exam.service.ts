import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs'
const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class ExamService {

  constructor(private _http: Http) { }


  newAppointment(appointment) {
    return this._http.post("/add_appointment", appointment)
        .toPromise()
  }

  findAppointments(){
    return this._http.get("get_appointments")
        .map(data => data.json())
        .toPromise()
  }

  removeAppointment(id){
    return this._http.delete("delete/" + id)
        .toPromise()
  }

}
