import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { Bank } from './Bank';
import { AccountType } from './AccountType';

@Entity({ name: 'third_party_accounts' })
export class ThirdPartyAccounts {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'bank_id', type: 'integer' })
    bankId: number;

    @Column({ name: 'account_type_id', type: 'integer' })
    accountTypeId: number;

    @Column({ name: 'account_number', type: 'integer' })
    accountNumber: string;

    // relationships
    @ManyToOne(
        type => Bank,
        bank => bank.thirdPartyAccounts
    )
    @JoinColumn({ name: 'bank_id', referencedColumnName: 'id' })
    public bank!: Bank;

    @ManyToOne(
        type => AccountType,
        accountType => accountType.thirdPartyAccounts
    )
    @JoinColumn({ name: 'account_type_id', referencedColumnName: 'id' })
    public accountType!: AccountType;
}
