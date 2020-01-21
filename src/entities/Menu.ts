import {
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { MenuPermissionProfile } from './MenuPermissionProfile';
import { Profile } from './Profile';
import { Permission } from './Permission';

@Entity({ name: 'menus' })
export class Menu {
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

    @Column({ name: 'father', type: 'integer', width: 10, nullable: true })
    father: number;

    @Column({ name: 'is_father', type: 'smallint', default: 0 })
    isFather: number;

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
        menuPermissionProfile => menuPermissionProfile.menu
    )
    public menuPermissionProfile!: MenuPermissionProfile[];

    @OneToMany(
        type => Menu,
        menu => menu.submenu,
        { nullable: true }
    )
    public submenus!: Menu[];

    @ManyToOne(
        type => Menu,
        menu => menu.submenus
    )
    @JoinColumn({ name: 'father', referencedColumnName: 'id' })
    submenu!: Menu;

    // comentar para generar migracion
    @ManyToMany(
        type => Permission,
        permissions => permissions.menus
    )
    @JoinTable({
        name: 'menu_permission_profile',
        joinColumn: { referencedColumnName: 'id', name: 'menu_id' },
        inverseJoinColumn: { referencedColumnName: 'id', name: 'permission_id' }
    })
    permissions!: Permission[];

    @ManyToMany(
        type => Profile,
        profile => profile.menus
    )
    @JoinTable({
        name: 'menu_permission_profile',
        joinColumn: { referencedColumnName: 'id', name: 'menu_id' },
        inverseJoinColumn: { referencedColumnName: 'id', name: 'profile_id' }
    })
    profiles!: Profile[];
}
