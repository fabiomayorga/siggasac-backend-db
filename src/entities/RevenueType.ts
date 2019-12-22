import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Revenue } from './Revenue';

@Entity({ name: 'revenues_types' })
export class RevenueType {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    // relationships
    @OneToMany(
        type => Revenue,
        revenue => revenue.revenueType
    )
    public revenues!: Revenue[];
}
