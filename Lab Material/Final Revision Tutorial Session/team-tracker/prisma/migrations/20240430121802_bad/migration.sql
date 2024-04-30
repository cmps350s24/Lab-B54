/*
  Warnings:

  - You are about to drop the column `city` on the `Team` table. All the data in the column will be lost.
  - Added the required column `cit` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cit" TEXT NOT NULL,
    "division" TEXT NOT NULL
);
INSERT INTO "new_Team" ("division", "id", "name") SELECT "division", "id", "name" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
