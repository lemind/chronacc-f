import { MigrationInterface, QueryRunner } from "typeorm";

export class Sync1698829808348 implements MigrationInterface {
    name = 'Sync1698829808348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "timeframes" jsonb NOT NULL DEFAULT '[]', CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
