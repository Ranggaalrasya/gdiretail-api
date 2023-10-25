/*
  Warnings:

  - Added the required column `product_id` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_quantity` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_quantity` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `product_id` INTEGER NOT NULL,
    ADD COLUMN `product_quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sale` ADD COLUMN `product_id` INTEGER NOT NULL,
    ADD COLUMN `product_quantity` INTEGER NOT NULL;
