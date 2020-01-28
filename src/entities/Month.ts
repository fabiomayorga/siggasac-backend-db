import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

import { School } from './School';
import { State } from './State';

@Entity({ name: 'months' })
export class Month {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'start_date', type: 'date' })
    startDate: Date;

    @Column({ name: 'finish_date', type: 'date' })
    finishDate: Date;

    @Column({ name: 'closed_by', type: 'integer', width: 10, nullable: true })
    closedBy: number;

    @Column({ name: 'school_id', type: 'integer', width: 10 })
    schoolId: number;

    @Column({ name: 'state_id', type: 'integer', width: 10 })
    stateId: number;

    // relationships
    @ManyToOne(
        type => School,
        school => school.months
    )
    @JoinColumn({ name: 'school_id', referencedColumnName: 'id' })
    public school!: School;

    @ManyToOne(
        type => State,
        state => state.months
    )
    @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
    public state!: State;
}
