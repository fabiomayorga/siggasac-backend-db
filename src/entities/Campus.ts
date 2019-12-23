import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { School } from './School';

@Entity({ name: 'campus' })
export class Campus {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'varchar' })
    code: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'school_id', type: 'varchar' })
    schoolId: string;

    // relationships
    @ManyToOne(
        type => School,
        school => school.campus
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    school!: School;
}
