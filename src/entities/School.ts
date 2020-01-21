import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { Campus } from './Campus';
import { ThirdParty } from './ThirdParty';
import { Town } from './Town';
import { Project } from './Project';
import { SchoolBankAccount } from './SchoolBankAccount';
import { SchoolProfileUser } from './SchoolProfileUser';
import { User } from './User';
import { Voucher } from './Voucher';
import { MenuPermissionProfile } from './MenuPermissionProfile';
import { BudgetNote } from './BudgetNote';

@Entity({ name: 'schools' })
export class School {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'nit', type: 'varchar' })
    nit: string;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'address', type: 'varchar', nullable: true })
    address: string;

    @Column({ name: 'neighborhood', type: 'varchar', nullable: true })
    neighborhood: string;

    @Column({ name: 'phones', type: 'varchar', nullable: true })
    phones: string;

    @Column({ name: 'fax', type: 'varchar', nullable: true })
    fax: string;

    @Column({ name: 'image_path', type: 'varchar', nullable: true })
    imagePath: string;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

    @Column({ name: 'town_id', type: 'integer' })
    cityId: number;

    @Column({
        name: 'comune_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    comuneId: number;

    @Column({
        name: 'sector_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    sectorId: number;

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
    @OneToMany(
        type => Campus,
        campus => campus.school
    )
    public campus!: Campus[];

    @ManyToOne(
        type => Town,
        town => town.schools,
        { nullable: true }
    )
    @JoinColumn({ name: 'town_id', referencedColumnName: 'id' })
    public town!: Town;

    @OneToMany(
        type => Project,
        project => project.school
    )
    public projects!: Project[];

    @OneToMany(
        type => SchoolBankAccount,
        schoolBankAccount => schoolBankAccount.school
    )
    public schoolBankAccounts!: SchoolBankAccount[];

    @OneToMany(
        type => SchoolProfileUser,
        schoolProfileUser => schoolProfileUser.school
    )
    public schoolProfileUser!: SchoolProfileUser[];

    @OneToMany(
        type => ThirdParty,
        thirdParties => thirdParties.school
    )
    public thirdParties!: ThirdParty[];

    @OneToMany(
        type => Voucher,
        voucher => voucher.school
    )
    public vouchers!: Voucher[];

    @OneToMany(
        type => MenuPermissionProfile,
        menuPermissionProfile => menuPermissionProfile.menu
    )
    public menuPermissionProfile!: MenuPermissionProfile[];

    @OneToMany(
        type => BudgetNote,
        budgetNote => budgetNote.school
    )
    public budgetNotes!: BudgetNote[];

    // comentar para generar migracion
    // @ManyToMany(
    //     type => User,
    //     school => school.schools
    // )
    // @JoinTable({
    //     name: 'school_profile_user',
    //     joinColumn: { referencedColumnName: 'id', name: 'school_id' },
    //     inverseJoinColumn: { referencedColumnName: 'id', name: 'user_id' }
    // })
    // users!: User[];
}
