import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { ExamLoginComponent } from './exam/exam-login/exam-login.component';
import { ExamDashboardComponent } from './exam/exam-dashboard/exam-dashboard.component';
import { ExamNewComponent } from "app/exam/exam-new/exam-new.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: ExamComponent },
    { path: 'dashboard', component: ExamDashboardComponent },
    { path: 'new_appointment', component: ExamNewComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);