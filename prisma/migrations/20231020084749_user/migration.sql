-- AlterTable
ALTER TABLE `user` MODIFY `gender` ENUM('unset', 'Pria', 'Wanita') NOT NULL DEFAULT 'unset';
