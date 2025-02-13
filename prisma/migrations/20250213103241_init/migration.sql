/*
  Warnings:

  - Made the column `post_content` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `post_content` VARCHAR(255) NOT NULL;
