import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { NatureDocument } from './NatureDocument';
import { TypeSchoolDocument } from './TypeSchoolDocument';

@Entity({ name: 'types_administrator_documents' })
export class TypeAdministratorDocument {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'varchar' })
    code: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'state', type: 'smallint', default: 1 })
    state: number;

    @Column({ name: 'nature_document_id', type: 'integer' })
    natureDocumentId: number;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp without time zone',
        select: false
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp without time zone',
        select: false
    })
    updatedAt: Date;

    // relationships
    @ManyToOne(
        type => NatureDocument,
        natureDocument => natureDocument.typeAdministratorDocuments
    )
    @JoinColumn({ name: 'nature_document_id', referencedColumnName: 'id' })
    natureDocument!: NatureDocument;

    @OneToMany(
        type => TypeSchoolDocument,
        typeSchoolDocument => typeSchoolDocument.typeAdministratorDocument
    )
    typeSchoolDocuments!: TypeSchoolDocument[];
}
