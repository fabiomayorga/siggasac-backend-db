import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import { SchoolBankAccount } from './SchoolBankAccount';
import { BudgetNotesDetail } from './BudgetNotesDetail';

@Entity({ name: 'single_account_plan' })
export class SingleAccountPlan {
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

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

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
    @OneToMany(
        type => SchoolBankAccount,
        schoolBankAccount => schoolBankAccount.singleAccountPlan
    )
    public schoolBankAccounts!: SchoolBankAccount[];

    @OneToMany(
        type => BudgetNotesDetail,
        budgetNotesDetail => budgetNotesDetail.singleAccountPlan
    )
    public budgetNotesDetail!: BudgetNotesDetail[];
}
