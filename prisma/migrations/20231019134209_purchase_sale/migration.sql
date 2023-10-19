-- CreateTable
CREATE TABLE `Purchase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplier_id` INTEGER NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `shipping_cost` INTEGER NOT NULL,
    `shipping_info` VARCHAR(191) NOT NULL,
    `other_cost` INTEGER NOT NULL,
    `other_info` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `payment` VARCHAR(191) NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Purchase_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sales_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `shipping_cost` INTEGER NOT NULL,
    `shipping_info` VARCHAR(191) NOT NULL,
    `other_cost` INTEGER NOT NULL,
    `other_info` VARCHAR(191) NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Sale_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
