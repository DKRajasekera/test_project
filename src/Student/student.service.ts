import { Injectable } from '@nestjs/common';

import { Student } from './student.module';
@Injectable()
export class AppService {
  student : Student [] = [];

  AddAStudent(F_name: String, L_name: String, dob: String, adress: String, number: number) {
    const newStudent = new Student(new Date().toString(), F_name, L_name, dob, adress, number)
    this.student.push(newStudent)
  }
}
