import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vouchers' })
export class Voucher {
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
    state: number;
}
