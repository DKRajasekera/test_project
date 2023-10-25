import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  addStudent(
    @Body('first name') f_name: String,
    @Body('last name') l_name: String,
    @Body('date of birth') dob: String,
    @Body('address') address: String,
    @Body('number') number: number
    ): any {
      const generateID = this.studentService.AddAStudent(
        f_name,
        l_name,
        dob,
        address,
        number
        );
      return {id: generateID };
    }

    @Get()
    getAllStudents() {
      return this.studentService.GetStudents();
    }

    @Get(':id')
    getStudent(@Param('id') stuID: String) {
      return this.studentService.FindStudent(stuID);
    }

    @Patch(':id')
        @Patch(':id')
        updateStudent(
          @Param('id') stuId: string,
          @Body('first name') f_name: string,
          @Body('last name') l_name: string,
          @Body('date of birth') dob: string,
          @Body('address') address: string,
          @Body('number') number: number
        ): void {
          this.studentService.UpdateStudent(stuId, f_name, l_name, dob, address, number);
        }

        @Delete(':id')
        deleteStudent(@Param('id') stuId: string): void {
          this.studentService.DeleteStudent(stuId);
          return null;
        }
      }
