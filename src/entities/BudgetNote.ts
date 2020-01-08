import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    ManyToOne
} from 'typeorm';
import { Concept } from './Concept';
import { Subconcept } from './Subconcept';
import { ThirdParty } from './ThirdParty';
import { BudgetNotesDetail } from './BudgetNotesDetail';

@Entity({ name: 'budget_notes' })
export class BudgetNote {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'code',
        type: 'varchar',
        length: 100
    })
    code: string;

    @Column({
        name: 'note_date',
        type: 'date'
    })
    noteDate: Date;

    @Column({
        name: 'concept_id',
        type: 'integer',
        width: 11,
        unsigned: true
    })
    conceptId: number;

    @Column({
        name: 'subconcept_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    subconceptId: number;

    @Column({
        name: 'third_party_id',
        type: 'integer',
        width: 11,
        unsigned: true,
        nullable: true
    })
    thirdPartyId: number;

    // relationships
    @ManyToOne(
        type => Concept,
        concept => concept.budgetNotes
    )
    @JoinColumn({ name: 'concept_id', referencedColumnName: 'id' })
    public concept!: Concept;

    @ManyToOne(
        type => Subconcept,
        subconcept => subconcept.budgetNotes,
        { nullable: true }
    )
    @JoinColumn({ name: 'subconcept_id', referencedColumnName: 'id' })
    public subconcept!: Subconcept;

    @ManyToOne(
        type => ThirdParty,
        thirdParty => thirdParty.budgetNotes,
        { nullable: true }
    )
    @JoinColumn({ name: 'third_party_id', referencedColumnName: 'id' })
    public thirdParty!: ThirdParty;

    @OneToMany(
        type => BudgetNotesDetail,
        budgetNotesDetail => budgetNotesDetail.budgetNote
    )
    public budgetNotesDetail!: BudgetNotesDetail[];
}
