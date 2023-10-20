-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL DEFAULT 'unset',
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,
    `posisi` VARCHAR(191) NOT NULL DEFAULT 'unset',
    `status` VARCHAR(191) NOT NULL DEFAULT 'Aktif',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
