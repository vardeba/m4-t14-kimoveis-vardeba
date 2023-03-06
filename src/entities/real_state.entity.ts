// import {
//     Entity,
//     Column,
//     PrimaryGeneratedColumn,
//     CreateDateColumn,
//     UpdateDateColumn,
//     ManyToOne,
// } from "typeorm";
// import { Address } from "./address.entity";
// import { Category } from "./category.entity";

// @Entity("real_estate")
// class RealEstate {
//     @PrimaryGeneratedColumn("increment")
//     id: number;

//     @Column({ default: false, nullable: true })
//     sold: boolean;

//     @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
//     value: number | string;

//     @Column({ type: "integer" })
//     size: number;

//     @CreateDateColumn()
//     createdAt: string;

//     @UpdateDateColumn()
//     updatedAt: string;
// }

// export { RealEstate };
