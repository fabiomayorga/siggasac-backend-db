import {
    Column,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    Entity,
    Index,
    PrimaryColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { Profile } from './Profile';

@Entity({ name: 'users' })
@Index(['email'], { unique: true })
export class User {
    @Column({ name: 'id', type: 'integer', width: 11, default: 0 })
    id: number;

    @Column({ name: 'name', type: 'varchar', nullable: true })
    name: string;

    @Column({ name: 'surname', type: 'varchar', nullable: true })
    surname: string;

    @PrimaryColumn({ name: 'email', type: 'varchar', unique: true })
    email: string;

    @PrimaryColumn({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

    @Column({
        name: 'password',
        type: 'varchar',
        nullable: true,
        select: false
    })
    password: string;

    @Column({ name: 'phone', type: 'varchar', nullable: true })
    phone: string;

    @Column({ name: 'image_path', type: 'varchar', nullable: true })
    imagePath: string;

    @Column({ name: 'profile_id', type: 'int', width: 11, unsigned: true })
    profileId: number;

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

    @BeforeInsert()
    @BeforeUpdate()
    encryptPassword(): void {
        this.password = hashSync(this.password, genSaltSync());
    }

    static isPassword(encodedPassword: string, password: string): boolean {
        return compareSync(password, encodedPassword);
    }

    // Relations
    @ManyToOne(type => Profile, profile => profile.users, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
    public profile!: Profile;
}
