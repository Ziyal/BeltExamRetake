import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "app/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-exam-login',
  templateUrl: './exam-login.component.html',
  styleUrls: ['./exam-login.component.css']
})
export class ExamLoginComponent implements OnInit {

  username: string;
  name: string;
  @Output() login = new EventEmitter();

  constructor(private _UserService: UserService, private router: Router) { }

  ngOnInit() {
  }

  LoginUser() {
    this._UserService.LoginUser(this.name)
        .then(() => {
            this.CheckStatus();
            this.name = '';
            this.router.navigate(['/dashboard'])
        })
        .catch(err => {
          console.log("Set Username Error", err)
        })
  }

  CheckStatus() {
    this._UserService.CheckStatus()
        .then(data => {
          if(data.user) {
            this.username = data.user.name;
            console.log("Current User:", this.username)
          } else {
            this.username = undefined;
          }
        })
  }

}
