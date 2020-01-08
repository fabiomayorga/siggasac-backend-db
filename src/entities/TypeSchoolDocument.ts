import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { Campus } from './Campus';
import { TypeAdministratorDocument } from './TypeAdministratorDocument';
import { Voucher } from './Voucher';

@Entity({ name: 'types_school_documents' })
export class TypeSchoolDocument {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'treasury_code', type: 'varchar' })
    treasuryCode: string;

    @Column({ name: 'show_date', type: 'smallint', default: 0 })
    showDate: number;

    @Column({ name: 'chronological_order', type: 'smallint' })
    chronologicalOrder: number;

    @Column({ name: 'state', type: 'smallint', default: 1 })
    state: number;

    @Column({ name: 'type_administrator_document_id', type: 'integer' })
    typeAdministratorDocumentId: number;

    @Column({
        name: 'utility_center',
        type: 'integer',
        nullable: true,
        comment:
            'columna de union con las sedes (campus) asociados a un colegio (schools)'
    })
    utilityCenter: number;

    @Column({ name: 'voucher_id', type: 'integer' })
    voucherId: number;

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
        type => Campus,
        campus => campus.typeSchoolDocuments,
        {
            nullable: true
        }
    )
    @JoinColumn({ name: 'utility_center', referencedColumnName: 'id' })
    campus!: Campus;

    @ManyToOne(
        type => TypeAdministratorDocument,
        typeAdministratorDocument =>
            typeAdministratorDocument.typeSchoolDocuments
    )
    @JoinColumn({
        name: 'type_administrator_document_id',
        referencedColumnName: 'id'
    })
    typeAdministratorDocument!: TypeAdministratorDocument;

    @ManyToOne(
        type => Voucher,
        voucher => voucher.typeSchoolDocuments
    )
    @JoinColumn({ name: 'voucher_id', referencedColumnName: 'id' })
    voucher!: Voucher;
}
