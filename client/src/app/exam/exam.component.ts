import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [UserService]
})
export class ExamComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}
