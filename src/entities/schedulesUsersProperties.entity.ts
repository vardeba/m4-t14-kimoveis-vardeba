import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./real_state.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    date: Date;

    @Column()
    hour: string;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.users)
    realEstate: RealEstate;

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;
}

export { Schedule };
