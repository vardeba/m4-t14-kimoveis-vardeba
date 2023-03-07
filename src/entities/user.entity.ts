import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from "typeorm";
import { Schedule } from "./schedulesUsersProperties.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column()
    admin: boolean;

    @Column({ length: 120 })
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn()
    deletedAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Schedule[];
}

export { User };
