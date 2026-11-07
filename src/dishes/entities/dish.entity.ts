import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('dishes')
export class DishEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length: 120})
    title: string;

    @Column('decimal', {precision: 8, scale: 2 })
    price: number;

    @Column('integer')
    weightGrams: number;

    @Column('integer')
    calories: number;

    @Column('boolean')
    isSpicy: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}