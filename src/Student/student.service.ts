import { Injectable, NotFoundException } from '@nestjs/common';

import { Student } from './student.modul';
@Injectable()
export class StudentService {
  private student : Student [] = [];

  AddAStudent(F_name: String, L_name: String, dob: String, adress: String, number: number) {
    const stuID = Math.random().toString()
    const newStudent = new Student(stuID, F_name, L_name, dob, adress, number)
    this.student.push(newStudent)
    return stuID
  }

  GetStudents() {
    return [...this.student];
  }

  FindStudent(studentId) {
    const student = this.student.find((stu) => stu.id === studentId);
    if(!student){
      throw new NotFoundException('Could not found that student');
    }
    return {...student}
  }

  UpdateStudent(studentId, F_name: string, L_name: string, dob: string, address: string, number: number) {
    const { student, studentIndex } = this.FindStudentIndex(studentId);
    const updatedStudent = { ...student };
    if (F_name) {
      updatedStudent.FirstName = F_name;
    }
    if (L_name) {
      updatedStudent.LastName = L_name;
    }
    if (dob) {
      updatedStudent.DOB = dob;
    }
    if (address) {
      updatedStudent.Address = address;
    }
    if (number) {
      updatedStudent.Number = number;
    }
    this.student[studentIndex] = updatedStudent;
  }

  FindStudentIndex(studentId): { student: Student; studentIndex: number } {
    const studentIndex = this.student.findIndex((stu) => stu.id === studentId);
    const student = this.student[studentIndex];
    if (!student) {
      throw new NotFoundException('Could not find that student');
    }
    return { student, studentIndex };
  }

  DeleteStudent(studentId) {
    const index = this.FindStudentIndex(studentId).studentIndex;
    this.student.splice(index, 1);
  }
}