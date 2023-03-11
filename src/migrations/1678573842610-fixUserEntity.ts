import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUserEntity1678573842610 implements MigrationInterface {
    name = 'fixUserEntity1678573842610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "date" TIMESTAMP NOT NULL`);
    }

}
