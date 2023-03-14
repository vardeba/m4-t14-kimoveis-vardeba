import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RealEstate } from "./real_state.entity";

@Entity("categories")
class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, unique: true })
    name: string;

    @OneToMany(() => RealEstate, (realState) => realState.category)
    realEstate: RealEstate[];
}

export { Category };
