import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import {NgModule} from '@angular/core'
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.component.html',
  styleUrls: ['./lab7.component.css']
})

export class Lab7Component implements OnInit {

  showFormEdit:boolean = false;

  formStudent = {
    id: 0,
    fullName: '',
    birthday: new Date(),
    mark: 0
  }


  students: Student[] = [
    {
      id: 1,
      fullName: 'Nguyen Van Teo',
      birthday: new Date(2019, 10, 14),
      mark: 8,
    },
    {
      id: 2,
      fullName: 'Phan Thi No',
      birthday: new Date(2019, 2, 15),
      mark: 10,
    },
  ]



  constructor() { }

  ngOnInit() {
  }

  gradeStudent(student: Student){
    if(student.mark>=0 && student.mark<5)
      return "Yeu/Kem"
    else
    {
      if(student.mark>=5 && student.mark<=8)
        return 'Trung Binh/Kha'
      if(student.mark>8)
        return 'Gioi/Xuat Sac'
    }
  }

  loadDataToEdit(p: Student)
  {
    this.showFormEdit=true;
   this.formStudent.id=p.id,
   this.formStudent.fullName=p.fullName,
   this.formStudent.mark=p.mark
  }
}
