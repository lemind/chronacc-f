import { MigrationInterface, QueryRunner } from "typeorm";

export class Sync1699007336584 implements MigrationInterface {
    name = 'Sync1699007336584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "creationDate" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "creationDate"`);
    }

}
