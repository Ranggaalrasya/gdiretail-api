import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { Inventory } from './inventory.model';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  getAllInventory(): Inventory[] {
    return this.inventoryService.getAllInventory();
  }

  @Get(':id')
  getInventoryById(@Param('id') id: number): Inventory {
    return this.inventoryService.getInventoryById(id);
  }

  @Post()
  createInventory(@Body() inventory: Inventory) {
    return this.inventoryService.createInventory(inventory);
  }

  @Put(':id')
  updateInventory(@Param('id') id: number, @Body() inventory: Inventory) {
    this.inventoryService.updateInventory(id, inventory);
    return `Product with id ${id} has been updated`;
  }
}
