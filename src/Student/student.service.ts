import { Injectable } from '@nestjs/common';

import { Student } from './student.modul';
@Injectable()
export class AppService {
  student : Student [] = [];

  AddAStudent(F_name: String, L_name: String, dob: String, adress: String, number: number) {
    const stuID = new Date().toString()
    const newStudent = new Student(stuID, F_name, L_name, dob, adress, number)
    this.student.push(newStudent)
    return stuID
  }
}
