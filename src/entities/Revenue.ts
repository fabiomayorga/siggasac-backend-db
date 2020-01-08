import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { RevenueType } from './RevenueType';
import { BudgetNotesDetail } from './BudgetNotesDetail';

@Entity({ name: 'revenues' })
export class Revenue {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'code', type: 'varchar', nullable: true })
    code: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'classification', type: 'integer' })
    classification: number;

    @Column({ name: 'state', type: 'smallint', width: 1, default: 1 })
    state: number;

    // relationships
    @ManyToOne(
        type => RevenueType,
        revenueType => revenueType.revenues
    )
    @JoinColumn({ name: 'classification', referencedColumnName: 'id' })
    public revenueType!: RevenueType;

    @OneToMany(
        type => BudgetNotesDetail,
        budgetNotesDetail => budgetNotesDetail.revenue
    )
    public budgetNotesDetail!: BudgetNotesDetail[];
}
