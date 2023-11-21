<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  FName: string;

  @Column({ type: 'varchar' })
  LName: string;

  @Column({ type: 'varchar' })
  DOB: string;

  @Column({ type: 'varchar' })
  Address: string;

  @Column({ type: 'int' })
  age: number;
}
=======
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

 

@Entity()

export class Student {

  @PrimaryGeneratedColumn()

  id: number;

  @Column({ type: 'varchar' })

  FName: string;

  @Column({ type: 'varchar' })

  LName: string;
 
  @Column({ type: 'varchar' })

  DOB: string;

  @Column({ type: 'varchar' })

  Address: string;

  @Column({ type: 'int' })

  age: number;

}
>>>>>>> f2a6f3b3f16cfc500ad2a48e4702e487bbf5cb3a
