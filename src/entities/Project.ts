import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { School } from './School';

@Entity({ name: 'projects' })
export class Project {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'varchar' })
    code: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'school_id', type: 'varchar' })
    schoolId: string;

    // relationships
    @ManyToOne(
        type => School,
        school => school.projects
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    school!: School;
}
