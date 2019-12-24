import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { Bank } from './Bank';
import { AccountType } from './AccountType';
import { ThirdParty } from './ThirdParty';

@Entity({ name: 'third_party_accounts' })
export class ThirdPartyAccounts {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'third_party_id', type: 'integer' })
    thirdPartyId: number;

    @Column({ name: 'bank_id', type: 'integer' })
    bankId: number;

    @Column({ name: 'account_type_id', type: 'integer' })
    accountTypeId: number;

    @Column({ name: 'account_number', type: 'integer' })
    accountNumber: number;

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
    @ManyToOne(
        type => AccountType,
        accountType => accountType.thirdPartyAccounts
    )
    @JoinColumn({ name: 'account_type_id', referencedColumnName: 'id' })
    public accountType!: AccountType;

    @ManyToOne(
        type => Bank,
        bank => bank.thirdPartyAccounts
    )
    @JoinColumn({ name: 'bank_id', referencedColumnName: 'id' })
    public bank!: Bank;

    @ManyToOne(
        type => ThirdParty,
        thirdParty => thirdParty.thirdPartyAccounts
    )
    @JoinColumn({ name: 'third_party_id', referencedColumnName: 'id' })
    public thirdParty!: ThirdParty;
}
