import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import { School } from './School';
import { BudgetNotesDetail } from './BudgetNotesDetail';

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
        school => school.projects
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    school!: School;

    @OneToMany(
        type => BudgetNotesDetail,
        budgetNotesDetail => budgetNotesDetail.project
    )
    public budgetNotesDetail!: BudgetNotesDetail[];
}
