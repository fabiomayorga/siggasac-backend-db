import {
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

import { MenuPermissionProfile } from './MenuPermissionProfile';
import { SchoolProfileUser } from './SchoolProfileUser';

@Entity({ name: 'profiles' })
export class Profile {
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

    @Column({ name: 'state', type: 'smallint', default: 0 })
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

    // relationships
    @OneToMany(
        type => MenuPermissionProfile,
        menuPermissionProfile => menuPermissionProfile.profile
    )
    public menuPermissionProfile!: MenuPermissionProfile[];

    @OneToMany(
        type => SchoolProfileUser,
        schoolProfileUser => schoolProfileUser.profile
    )
    public schoolProfileUser!: SchoolProfileUser[];
}
