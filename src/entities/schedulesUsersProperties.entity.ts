import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./real_state.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "date" })
    date: Date | string;

    @Column()
    hour: string;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;
}

export { Schedule };
