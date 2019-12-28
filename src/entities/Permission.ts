import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
    JoinTable
} from 'typeorm';

import { Menu } from './Menu';
import { MenuPermissionProfile } from './MenuPermissionProfile';

@Entity({ name: 'permissions' })
export class Permission {
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
        type => MenuPermissionProfile,
        menuPermissionProfile => menuPermissionProfile.permission
    )
    public menuPermissionProfile!: MenuPermissionProfile[];

    // comentar para generar migracion
    @ManyToMany(
        type => Menu,
        menu => menu.permissions
    )
    @JoinTable({
        name: 'menu_permission_profile',
        joinColumn: { referencedColumnName: 'id', name: 'permission_id' },
        inverseJoinColumn: { referencedColumnName: 'id', name: 'menu_id' }
    })
    menus!: Menu[];
}
