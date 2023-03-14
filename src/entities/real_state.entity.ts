import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

@Entity("real_estate")
class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false, nullable: true })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({ type: "integer" })
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date | string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (category) => category.id)
    category: Category;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];
}

export { RealEstate };
