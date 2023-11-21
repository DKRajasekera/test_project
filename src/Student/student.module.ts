import { Module } from "@nestjs/common";
<<<<<<< HEAD
import { TypeOrmModule } from "@nestjs/typeorm";
=======

import { TypeOrmModule } from "@nestjs/typeorm";

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
import { StudentController } from "./student.controller";

import { StudentService } from "./student.service";
import { Student } from "./student.entity";

<<<<<<< HEAD
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:'postgres',
      password:'12345',
      port:5432,
      host:'localhost',
      database:'test_nest',
      synchronize:true,
      entities:[Student],
      logging: true
    }),
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class studentModule {}

=======
import { Student } from "./student.entity";

 

@Module({

  imports: [

    TypeOrmModule.forRoot({

      type:'postgres',

      username:'postgres',

      password:'12345',

      port:5432,

      host:'localhost',

      database:'test_nest',

      synchronize:true,

      entities:[Student],

      logging: true

    }),

    TypeOrmModule.forFeature([Student])

  ],

  controllers: [StudentController],

  providers: [StudentService],

})

export class studentModule {}

 

>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
export { Student };