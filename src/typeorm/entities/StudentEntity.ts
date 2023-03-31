import { isActive } from "src/utils/enums";
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { BaseEntity } from "./BaseEntity";
import { ProgrammeApplicationEntity } from "./ProgrammeApplicationEntity";
import { AssignmentSubmissionEntity } from "./AssignmentSubmissionEntity";
import { ProgrammeEntity } from "./ProgrammeEntity";

@Entity('students')
export class StudentEntity extends BaseEntity {
    @Column({nullable: true})
    firstname: string;

    @Column({nullable: true})
    middlename: string;

    @Column({nullable: true})
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    programme: string;

    @Column({
        type: 'enum',
        enum: isActive,
        default: isActive.NO,
    })
    isActive: boolean;

    // @Column({nullable : true})
    // applications: any;

    // @Column({nullable : true})
    // submittedAssignments: any;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @BeforeInsert()
    emailtoLowerCase() {
        this.email =  this.email.toLowerCase();
    }

    // async validatePassword(password: string): Promise<boolean> {
    //     //const ppassword = await bcrypt.hash(password, 10);
    //     return bcrypt.compare(password, this.password);
    // }

    @OneToMany(
        () => AssignmentSubmissionEntity,
        (submittedAssignment) => submittedAssignment.student,
      )
      submittedAssignments: AssignmentSubmissionEntity[];
    
      @OneToMany(
        () => ProgrammeApplicationEntity,
        (application) => application.student,
      )
      applications: ProgrammeApplicationEntity[];
    
      @ManyToMany(() => ProgrammeEntity)
      @JoinTable()
      programmes: ProgrammeEntity[];
}