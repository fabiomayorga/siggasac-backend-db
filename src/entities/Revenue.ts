import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'revenues' })
export class Revenue {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'classification', type: 'varchar', nullable: true })
    classification: string;

    @Column({ name: 'code', type: 'varchar', nullable: true })
    code: string;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: boolean;
}
