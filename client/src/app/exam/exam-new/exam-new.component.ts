import { Component, OnInit } from '@angular/core';
import { Appointment } from "app/appointment";
import { UserService } from "app/user.service";
import { ExamService } from "app/exam.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-exam-new',
  templateUrl: './exam-new.component.html',
  styleUrls: ['./exam-new.component.css']
})
export class ExamNewComponent implements OnInit {

  constructor(private _UserService: UserService, private _ExamService: ExamService, private router: Router) { }

  appointment: Appointment = new Appointment;
  val_errors = [];

  ngOnInit() {
  }

  submitAppointment() {
    this.val_errors = [];
    
  this._ExamService.newAppointment(this.appointment)
      .then(() => {
        this.appointment = new Appointment;
        console.log("Appointment Added")
        this.router.navigate(['/dashboard'])
      })
      .catch(err => { 
        let res=JSON.parse(err._body)
        for(var key in res.errors) {
          this.val_errors.push(res.errors[key].message)
        } 
      })
  }


}
