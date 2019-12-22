import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nature_document' })
export class NatureDocument {
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
}
