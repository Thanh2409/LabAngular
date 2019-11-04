import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { StudentInfoService } from './student-info.service'
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DetailstudentComponent } from './detailstudent/detailstudent.component';
import { FormComponent } from './form/form.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { TinhthuongComponent } from './tinhthuong/tinhthuong.component';
import { TinhthuongcheckComponent } from './tinhthuongcheck/tinhthuongcheck.component';
import { GiaikhatComponent } from './giaikhat/giaikhat.component';
import { Lab6Component } from './lab6/lab6.component';
import { Detaillab6Component } from './detaillab6/detaillab6.component';
import { Lab7Component } from './lab7/lab7.component';
import { Lab8Component } from './lab8/lab8.component';
import { Detaillab8Component } from './detaillab8/detaillab8.component';
import { BycateComponent } from './bycate/bycate.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DetailstudentComponent,
    FormComponent,
    SinhvienComponent,
    TinhthuongComponent,
    TinhthuongcheckComponent,
    GiaikhatComponent,
    Lab6Component,
    Detaillab6Component,
    Lab7Component,
    Lab8Component,
    Detaillab8Component,
    BycateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', component: Lab8Component},
        {path: 'student', component: StudentComponent},
        {path: 'lab6', component: Lab6Component},
        {path: 'lab7', component: Lab7Component},
        {path: 'lab8', component: Lab8Component},
        {path: 'bycate/:id', component: BycateComponent},
        {path: 'detaillab8/:id', component: Detaillab8Component},
        {path: 'film/:url', component: Detaillab6Component},
        {path: 'form', component: FormComponent},
        {path: 'sinhvien', component: SinhvienComponent},
        {path: 'tinhthuong', component: TinhthuongComponent},
        {path: 'giaikhat', component: GiaikhatComponent},
        {path: 'tinhthuongcheck', component: TinhthuongcheckComponent},
        {path: 'student/:id', component: DetailstudentComponent},
        {path: '**', redirectTo: '', pathMatch: 'full'}
      ]
    )
  ],
  providers: [StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
