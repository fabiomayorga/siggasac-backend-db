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

import { Menu } from './Menu';
import { MenuPermissionProfile } from './MenuPermissionProfile';
import { SchoolProfileUser } from './SchoolProfileUser';
import { User } from './User';

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

    @Column({ name: 'state', type: 'smallint', default: 1 })
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

    // comentar para generar migracion
    @ManyToMany(
        type => Menu,
        menu => menu.profiles
    )
    @JoinTable({
        name: 'menu_permission_profile',
        joinColumn: { referencedColumnName: 'id', name: 'profile_id' },
        inverseJoinColumn: { referencedColumnName: 'id', name: 'menu_id' }
    })
    menus!: Menu[];

    @ManyToMany(
        type => User,
        user => user.profiles
    )
    @JoinTable({
        name: 'school_profile_user',
        joinColumn: { referencedColumnName: 'id', name: 'profile_id' },
        inverseJoinColumn: { referencedColumnName: 'id', name: 'user_id' }
    })
    users!: User[];
}
