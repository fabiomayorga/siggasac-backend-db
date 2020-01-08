import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { School } from './School';
import { TypeSchoolDocument } from './TypeSchoolDocument';
import { BudgetNotesDetail } from './BudgetNotesDetail';

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

    @Column({ name: 'state', type: 'smallint', default: 1 })
    state: number;

    @Column({ name: 'school_id', type: 'integer' })
    schoolId: number;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp without time zone',
        select: false
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp without time zone',
        select: false
    })
    updatedAt: Date;

    // relationships
    @ManyToOne(
        type => School,
        school => school.campus
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    school!: School;

    @OneToMany(
        type => TypeSchoolDocument,
        typeSchoolDocument => typeSchoolDocument.campus
    )
    typeSchoolDocuments!: TypeSchoolDocument[];

    @OneToMany(
        type => BudgetNotesDetail,
        budgetNotesDetail => budgetNotesDetail.campus
    )
    public budgetNotesDetail!: BudgetNotesDetail[];
}
