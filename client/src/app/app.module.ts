import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { ExamLoginComponent } from './exam/exam-login/exam-login.component';
import { ExamDashboardComponent } from './exam/exam-dashboard/exam-dashboard.component';
import { UserService } from './user.service';
import { ExamService } from './exam.service';
import { ExamNewComponent } from './exam/exam-new/exam-new.component';
import { FilterPipe } from './filter.pipe';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    ExamLoginComponent,
    ExamDashboardComponent,
    ExamNewComponent,
    FilterPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
