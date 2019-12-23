import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { Department } from './Department';
import { School } from './School';

@Entity({ name: 'towns' })
export class Town {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'integer', width: 11 })
    code: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'department_code', type: 'integer', width: 11 })
    departmentCode: number;

    // relationships
    @ManyToOne(
        type => Department,
        department => department.towns,
        {
            nullable: false
        }
    )
    @JoinColumn({ name: 'department_code', referencedColumnName: 'code' })
    public department!: Department;

    @OneToMany(
        type => School,
        school => school.town
    )
    schools!: School[];
}
