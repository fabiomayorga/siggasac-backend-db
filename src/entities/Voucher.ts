import {
    Entity,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToMany,
    UpdateDateColumn
} from 'typeorm';

import { TypeSchoolDocument } from './TypeSchoolDocument';

import { School } from './School';

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

    @Column({ name: 'school_id', type: 'integer' })
    schoolId: number;

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
        type => School,
        school => school.vouchers
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    school!: School;

    @OneToMany(
        type => TypeSchoolDocument,
        typeSchoolDocument => typeSchoolDocument.voucher
    )
    typeSchoolDocuments!: TypeSchoolDocument[];
}
