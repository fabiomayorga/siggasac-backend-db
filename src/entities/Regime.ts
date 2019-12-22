import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'regimes' })
export class Regime {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'description', type: 'varchar' })
    description: string;
}
