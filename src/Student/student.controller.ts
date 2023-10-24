import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './student.service';

@Controller('stubent')
export class AppController {
  constructor(private readonly studentService: AppService) {}

  @Post()
  addStudent(
    @Body('first name') f_name: String,
    @Body('last name') l_name: String,
    @Body('date of birth') dob: String,
    @Body('address') address: String,
    @Body('number') number: number
    ): any {
      this.studentService.AddAStudent(f_name,l_name,dob,address,number);
  }
}
