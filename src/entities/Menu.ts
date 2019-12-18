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

    @OneToMany(type => Menu, menu => menu.father, { nullable: true })
    public menus!: Menu[];

    @ManyToOne(type => Menu, menu => menu.menus)
    @JoinColumn({ name: 'father', referencedColumnName: 'id' })
    menu!: Menu;
}
