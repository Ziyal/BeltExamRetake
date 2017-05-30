import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from "app/user.service";
import { ExamService } from "app/exam.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-exam-dashboard',
  templateUrl: './exam-dashboard.component.html',
  styleUrls: ['./exam-dashboard.component.css'],
  providers: [UserService]
})
export class ExamDashboardComponent implements OnInit {

  current_user = {};
  appointments = [];
  today = new Date();
  @Output() refresh = new EventEmitter;

  constructor(private _UserService: UserService, private _ExamService: ExamService, private router: Router) { }

  ngOnInit() {
    this.CheckStatus();
    this.GetAppointments();
  }

  GetAppointments() {
    this._ExamService.findAppointments()
        .then((data) => {
          this.appointments = data;
        })
        .catch(err => { console.log("Get Apointments Errors", err) })
  }

  CheckStatus() {
  this._UserService.CheckStatus()
      .then(data => {
        if(data) {
          this.current_user = data;
        } else {
          this.current_user = undefined;
          this.router.navigate(['/login'])
        }
      })
      .catch(err => { console.log(err) } )
  }  

  LogoutUser() {
  console.log("Logout Hit")
  this._UserService.logout()
      .then(() => { this.CheckStatus() 
          this.router.navigate(['/login'])}
      )
      .catch(err => {
        console.log("Logout User Errors", err)
      })
  }

  deleteAppointment(id) {
    console.log("Component: delete")

    this._ExamService.removeAppointment(id)
        .then(() => {
          this.appointments = [];
          this.GetAppointments();
        })
        .catch(err => { console.log("Error", err) })
  }


}
