import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { Menu } from './Menu';
import { Permission } from './Permission';
import { Profile } from './Profile';

@Entity({ name: 'menu_permission_profile' })
export class MenuPermissionProfile {
    @PrimaryColumn({
        name: 'profile_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    profileId!: number;

    @PrimaryColumn({
        name: 'menu_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    menuId!: number;

    @PrimaryColumn({
        name: 'permission_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    permissionId!: number;

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
    @ManyToOne(type => Profile, profile => profile.menuPermissionProfile)
    @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
    public profile!: Profile;

    @ManyToOne(type => Menu, menu => menu.menuPermissionProfile)
    @JoinColumn({ name: 'menu_id', referencedColumnName: 'id' })
    public menu!: Menu;

    @ManyToOne(
        type => Permission,
        permission => permission.menuPermissionProfile
    )
    @JoinColumn({ name: 'permission_id', referencedColumnName: 'id' })
    public permission!: Permission;
}
