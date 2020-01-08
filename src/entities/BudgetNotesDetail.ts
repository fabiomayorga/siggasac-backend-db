import {
    Entity,
    JoinColumn,
    ManyToOne,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';
import { BudgetNote } from './BudgetNote';
import { BudgetAccount } from './BudgetAccount';
import { Campus } from './Campus';
import { Revenue } from './Revenue';
import { Project } from './Project';

@Entity()
export class BudgetNotesDetail {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'value',
        type: 'double precision',
        unsigned: true
    })
    value: number;

    @Column({
        name: 'budget_note_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    budgetNoteId: number;

    @Column({
        name: 'budget_account_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    budgetAccountId: number;

    @Column({
        name: 'campus_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    campusId: number;

    @Column({
        name: 'revenue_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    revenueId: number;

    @Column({
        name: 'project_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    projectId: number;

    // relationships
    @ManyToOne(
        type => BudgetNote,
        budgetNote => budgetNote.budgetNotesDetail
    )
    @JoinColumn({ name: 'budget_note_id', referencedColumnName: 'id' })
    public budgetNote!: BudgetNote;

    @ManyToOne(
        type => BudgetAccount,
        budgetAccount => budgetAccount.budgetNotesDetail,
        { nullable: true }
    )
    @JoinColumn({ name: 'budget_account_id', referencedColumnName: 'id' })
    public budgetAccount!: BudgetAccount;

    @ManyToOne(
        type => Campus,
        campus => campus.budgetNotesDetail,
        { nullable: true }
    )
    @JoinColumn({ name: 'campus_id', referencedColumnName: 'id' })
    public campus!: Campus;

    @ManyToOne(
        type => Revenue,
        revenue => revenue.budgetNotesDetail,
        { nullable: true }
    )
    @JoinColumn({ name: 'revenue_id', referencedColumnName: 'id' })
    public revenue!: Revenue;

    @ManyToOne(
        type => Project,
        project => project.budgetNotesDetail,
        { nullable: true }
    )
    @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
    public project!: Project;
}
