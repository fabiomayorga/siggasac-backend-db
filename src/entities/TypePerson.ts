import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ThirdParty } from './ThirdParty';

@Entity({ name: 'types_people' })
export class TypePerson {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @OneToMany(
        type => ThirdParty,
        thirdParty => thirdParty.typePerson
    )
    public thirdParties: ThirdParty[];
}
