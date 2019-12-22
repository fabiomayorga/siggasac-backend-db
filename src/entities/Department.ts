import {
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    Column,
    OneToMany
} from 'typeorm';

import { Country } from './Country';
import { Town } from './Town';

@Entity({ name: 'departments' })
export class Department {
    @PrimaryColumn({ name: 'code', type: 'integer', width: 11 })
    code: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'country_code', type: 'integer', width: 11 })
    countryCode: number;

    // relationships
    @ManyToOne(
        type => Country,
        country => country.departments,
        {
            nullable: false
        }
    )
    @JoinColumn({ name: 'country_code', referencedColumnName: 'code' })
    public country!: Country;

    @OneToMany(
        type => Town,
        town => town.department
    )
    public towns!: Town[];
}
