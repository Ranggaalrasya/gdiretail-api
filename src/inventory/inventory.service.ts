import { Injectable } from '@nestjs/common';
import { Inventory } from './inventory.model';

@Injectable()
export class InventoryService {
  private inventory: Inventory[] = [];

  getAllInventory(): Inventory[] {
    return this.inventory;
  }

  getInventoryById(id: number): Inventory {
    return this.inventory.find(item => item.id === id);
  }

  createInventory(inventory: Inventory) {
    this.inventory.push(inventory);
  }

  updateInventory(id: number, updatedInventory: Inventory) {
    const index = this.inventory.findIndex(item => item.id === id);
    if (index !== -1) {
      this.inventory[index] = { ...this.inventory[index], ...updatedInventory };
    }
  }
}
