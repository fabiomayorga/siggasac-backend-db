import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { ThirdParty } from './ThirdParty';

@Entity({ name: 'third_party_types' })
export class ThirdPartyType {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: boolean;

    // relationships
    @OneToMany(
        type => ThirdParty,
        thirdParty => thirdParty.thirdPartyType
    )
    public thirdParties: ThirdParty[];
}
