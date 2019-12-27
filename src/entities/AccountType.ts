import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { ThirdPartyAccounts } from './ThirdPartyAccounts';
import { SchoolBankAccount } from './SchoolBankAccount';

@Entity({ name: 'accounts_types' })
export class AccountType {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'name', type: 'varchar', nullable: true })
    name: string;

    // relations
    @OneToMany(
        type => SchoolBankAccount,
        schoolBankAccount => schoolBankAccount.accountType
    )
    schoolBankAccounts: SchoolBankAccount[];

    @OneToMany(
        type => ThirdPartyAccounts,
        schoolProfileUser => schoolProfileUser.accountType
    )
    thirdPartyAccounts: ThirdPartyAccounts[];
}
