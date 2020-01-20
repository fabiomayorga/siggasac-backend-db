import { Entity, Column, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

import { User } from './User';

@Entity({ name: 'users_logs' })
export class UserLog {
    @PrimaryColumn({
        name: 'user_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    userId: number;

    @Column({ name: 'last_login', type: 'timestamp without time zone' })
    lastLogin: Date;

    @Column({ name: 'from', type: 'varchar' })
    from: string;

    @Column({
        name: 'updated_password',
        type: 'smallint',
        width: 1,
        default: 0
    })
    updatedPassword: number;

    @Column({ name: 'password_update_date', type: 'timestamp without time zone', nullable: true })
    passwordUpdateDate: Date;

    @Column({
        name: 'updated_password_expiration_date',
        type: 'timestamp without time zone',
        nullable: true
    })
    updatedPasswordExpirationDate: Date;

    // relationships
    @OneToOne(
        type => User,
        user => user.userLog
    )
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user!: User;
}
