import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

<<<<<<< HEAD
=======
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Student } from './student.entity';

 

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
@Injectable()

export class StudentService {
<<<<<<< HEAD
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async addAStudent(fName: string, lName: string, dob: string, address: string, age: number): Promise<Student> {
    const newStudent = this.studentRepository.create({
      FName: fName,
      LName: lName,
      DOB: dob,
      Address: address,
      age: age,
    });

    await this.studentRepository.save(newStudent);
    return newStudent;
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findStudent(studentId: number): Promise<Student> {
    try {
      // Using an options object with a where clause
      return await this.studentRepository.findOneOrFail({ where: { id: studentId } });
    } catch (error) {
=======

  constructor(

    @InjectRepository(Student)

    private studentRepository: Repository<Student>,

  ) {}

 

  async addAStudent(fName: string, lName: string, dob: string, address: string, age: number): Promise<Student> {

    const newStudent = this.studentRepository.create({

      FName: fName,

      LName: lName,

      DOB: dob,

      Address: address,

      age: age,

    });

 

    await this.studentRepository.save(newStudent);

    return newStudent;

  }

 

  async getStudents(): Promise<Student[]> {

    return this.studentRepository.find();

  }

 

  async findStudent(studentId: number): Promise<Student> {

    try {

      // Using an options object with a where clause

      return await this.studentRepository.findOneOrFail({ where: { id: studentId } });

    } catch (error) {

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
      throw new NotFoundException('Could not find that student');

    }
<<<<<<< HEAD
  }
  

  async updateStudent(studentId: number, fName: string, lName: string, dob: string, address: string, age: number): Promise<Student> {
    const student = await this.findStudent(studentId);

    student.FName = fName || student.FName;
    student.LName = lName || student.LName;
    student.DOB = dob || student.DOB;
    student.Address = address || student.Address;
    student.age = age || student.age;

    await this.studentRepository.save(student);
    return student;
  }

  async deleteStudent(studentId: number): Promise<void> {
    const result = await this.studentRepository.delete(studentId);

    if (result.affected === 0) {
      throw new NotFoundException('Could not find the student to delete');
    }
=======

  }

 

 

  async updateStudent(studentId: number, fName: string, lName: string, dob: string, address: string, age: number): Promise<Student> {

    const student = await this.findStudent(studentId);

 

    student.FName = fName || student.FName;

    student.LName = lName || student.LName;

    student.DOB = dob || student.DOB;

    student.Address = address || student.Address;

    student.age = age || student.age;

 

    await this.studentRepository.save(student);

    return student;

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
  }

 

  async deleteStudent(studentId: number): Promise<void> {

    const result = await this.studentRepository.delete(studentId);

 

    if (result.affected === 0) {

      throw new NotFoundException('Could not find the student to delete');

    }

  }

}