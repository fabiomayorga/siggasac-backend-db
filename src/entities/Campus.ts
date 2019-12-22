import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campus {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'varchar' })
    code: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;
}
