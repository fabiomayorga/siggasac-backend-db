import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { TypeAdministratorDocument } from './TypeAdministratorDocument';

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

    // relationships
    @OneToMany(
        type => TypeAdministratorDocument,
        typeAdministratorDocument => typeAdministratorDocument.natureDocument
    )
    public typeAdministratorDocuments!: TypeAdministratorDocument[];
}
