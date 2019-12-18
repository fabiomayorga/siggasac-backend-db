import {
    Column,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { compareSync, genSaltSync, hashSync } from 'bcrypt';

import { DocumentType } from './DocumentType';
import { SchoolProfileUser } from './SchoolProfileUser';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'name', type: 'varchar', nullable: true })
    name: string;

    @Column({ name: 'surname', type: 'varchar', nullable: true })
    surname: string;

    @Column({ name: 'email', type: 'varchar', unique: true })
    email: string;

    @Column({ name: 'document_number', type: 'varchar', unique: true })
    documentNumber: string;

    @Column({ name: 'type_identification_id', type: 'varchar', unique: true })
    documentTypeId: number;

    @Column({ name: 'password', type: 'varchar', select: false })
    password: string;

    @Column({ name: 'phone', type: 'varchar', nullable: true })
    phone: string;

    @Column({ name: 'cellphone', type: 'varchar', nullable: true })
    cellphone: string;

    @Column({ name: 'image_path', type: 'varchar', nullable: true })
    imagePath: string;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

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

    @BeforeInsert()
    @BeforeUpdate()
    encryptPassword(): void {
        this.password = hashSync(this.password, genSaltSync());
    }

    static isPassword(encodedPassword: string, password: string): boolean {
        return compareSync(password, encodedPassword);
    }

    // relationships
    @ManyToOne(
        type => DocumentType,
        typeIdentification => typeIdentification.users
    )
    @JoinColumn({ name: 'document_type_id', referencedColumnName: 'id' })
    public documentType!: DocumentType;

    @OneToMany(
        type => SchoolProfileUser,
        schoolProfileUser => schoolProfileUser.user
    )
    public schoolProfileUser!: SchoolProfileUser[];
}
