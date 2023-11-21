import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import { StudentService } from './student.service';

 

@Controller('student')

export class StudentController {

  constructor(private readonly studentService: StudentService) {}

 

  @Post()
<<<<<<< HEAD
addStudent(
  @Body('first name') fName: string,
  @Body('last name') lName: string,
  @Body('date of birth') dob: string,
  @Body('address') address: string,
  @Body('number') number: number
): Promise<{ id: number }> {
  return this.studentService.addAStudent(fName, lName, dob, address, number);
}

=======

addStudent(

  @Body('first name') fName: string,

  @Body('last name') lName: string,

  @Body('date of birth') dob: string,

  @Body('address') address: string,

  @Body('number') number: number

): Promise<{ id: number }> {

  return this.studentService.addAStudent(fName, lName, dob, address, number);

}

 
>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a

    @Get()

    getAllStudents() {
<<<<<<< HEAD
      return this.studentService.getStudents();
=======

      return this.studentService.getStudents();

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
    }

 

    @Get(':id')
<<<<<<< HEAD
    getStudent(@Param('id') stuID: number) {
      return this.studentService.findStudent(stuID);
=======

    getStudent(@Param('id') stuID: number) {

      return this.studentService.findStudent(stuID);

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
    }

 

    @Patch(':id')

        @Patch(':id')

        updateStudent(
<<<<<<< HEAD
          @Param('id') stuId: number,
=======

          @Param('id') stuId: number,

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
          @Body('first name') f_name: string,

          @Body('last name') l_name: string,

          @Body('date of birth') dob: string,

          @Body('address') address: string,

          @Body('number') number: number

        ): void {
<<<<<<< HEAD
          this.studentService.updateStudent(stuId, f_name, l_name, dob, address, number);
=======

          this.studentService.updateStudent(stuId, f_name, l_name, dob, address, number);

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
        }

 

        @Delete(':id')
<<<<<<< HEAD
        deleteStudent(@Param('id') stuId: number): void {
          this.studentService.deleteStudent(stuId);
=======

        deleteStudent(@Param('id') stuId: number): void {

          this.studentService.deleteStudent(stuId);

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
          return null;

        }

      }