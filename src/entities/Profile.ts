import {
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import { User } from './User';
import { Permission } from './Permission';

@Entity({ name: 'profiles' })
export class Profile {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'int',
        unsigned: true,
    })
    id: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'state', type: 'smallint', default: 0 })
    state: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone', select: false })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone', select: false })
    updatedAt: Date;

    // Relations
    @ManyToMany(type => Permission, permission => permission.profiles)
    @JoinTable({
        name: 'permission_profile',
        joinColumn: { name: 'profile_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' },
    })
    public permissions!: Permission[];

    @OneToMany(type => User, user => user.profile)
    public users: User[];
}
