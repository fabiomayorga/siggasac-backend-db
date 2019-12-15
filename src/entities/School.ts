import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    UpdateDateColumn
} from 'typeorm';

import { User } from './User';

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

    @Column({ name: 'city_id', type: 'integer', width: 11, unsigned: true })
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

    // Relationships
    @OneToMany(type => User, user => user.school)
    public users: User[];
}
