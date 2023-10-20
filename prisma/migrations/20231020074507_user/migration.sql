/*
  Warnings:

  - You are about to alter the column `gender` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `posisi` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `status` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `gender` ENUM('Pria', 'Wanita', 'unset') NOT NULL DEFAULT 'unset',
    MODIFY `posisi` ENUM('unset', 'SuperAdmin', 'Admin', 'Sales') NOT NULL DEFAULT 'unset',
    MODIFY `status` ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active';
