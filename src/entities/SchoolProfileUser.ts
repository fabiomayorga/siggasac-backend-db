import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

import { School } from './School';
import { Profile } from './Profile';
import { User } from './User';

@Entity({ name: 'school_profile_user' })
export class SchoolProfileUser {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'school_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true,
        default: null
    })
    schoolId!: number;

    @Column({
        name: 'profile_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    profileId!: number;

    @Column({
        name: 'user_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    userId!: number;

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
    @ManyToOne(
        type => School,
        school => school.schoolProfileUser,
        {
            nullable: true
        }
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    public school!: School;

    @ManyToOne(
        type => Profile,
        profile => profile.schoolProfileUser
    )
    @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
    public profile!: Profile;

    @ManyToOne(
        type => User,
        user => user.schoolProfileUser
    )
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    public user!: User;
}
