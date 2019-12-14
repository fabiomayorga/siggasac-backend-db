import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ThirdParty } from './ThirdParty';

@Entity({ name: 'types_documents' })
export class DocumentType {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'integer',
        unsigned: true
    })
    id: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'description', type: 'varchar', nullable: true })
    description: string;

    // relationships
    @OneToMany(type => ThirdParty, thirdParty => thirdParty.documentType)
    public thirdParties: ThirdParty[];
}
