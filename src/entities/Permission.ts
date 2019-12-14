import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
    JoinTable
} from 'typeorm';

import { Profile } from './Profile';

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

    // Relationships
    @ManyToMany(type => Profile)
    @JoinTable({
        name: 'permission_profile',
        joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'profile_id', referencedColumnName: 'id' }
    })
    public profiles!: Profile[];
}
