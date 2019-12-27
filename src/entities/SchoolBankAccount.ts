import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { School } from "./School";
import { AccountType } from "./AccountType";
import { SingleAccountPlan } from "./SingleAccountPlan";

@Entity({ name: 'school_bank_accounts' })
export class SchoolBankAccount {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'varchar', nullable: true })
    code: string;

    @Column({ name: 'description', type: 'varchar', nullable: true })
    description: string;

    @Column({ name: 'account_number', type: 'varchar', nullable: true })
    accountNumber: string;

    @Column({ name: 'print_check', type: 'smallint', width: 1, nullable: true })
    printCheck: number;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

    @Column({ name: 'account_type_id', type: 'integer' })
    accountTypeId: number;

    @Column({ name: 'school_id', type: 'integer' })
    schoolId: number;

    @Column({ name: 'single_account_plan_id', type: 'integer' })
    singleAccountPlanId: number;

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
        type => AccountType,
        accountType => accountType.schoolBankAccounts
    )
    @JoinColumn({ name: 'account_type_id', referencedColumnName: 'id' })
    public accountType!: AccountType;

    @ManyToOne(
        type => School,
        school => school.schoolBankAccounts
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    school!: School;

    @ManyToOne(
        type => SingleAccountPlan,
        singleAccountPlan => singleAccountPlan.schoolBankAccounts
    )
    @JoinColumn({ name: 'single_account_plan_id', referencedColumnName: 'id' })
    public singleAccountPlan!: SingleAccountPlan;
}
