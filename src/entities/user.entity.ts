import { getRounds, hashSync } from "bcryptjs";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    BeforeInsert,
    BeforeUpdate,
} from "typeorm";
import { Schedule } from "./schedule.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ default: false })
    admin: boolean;

    @Column({ length: 120 })
    password: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date | string;

    @DeleteDateColumn({ type: "date" })
    deletedAt: Date | string;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}

export { User };
