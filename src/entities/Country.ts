import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

import { Department } from './Department';

@Entity({ name: 'countries' })
export class Country {
    @PrimaryColumn({ name: 'code', type: 'integer', width: 11 })
    code: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    // relationships
    @OneToMany(type => Department, department => department.country)
    public departments!: Department[];
}
