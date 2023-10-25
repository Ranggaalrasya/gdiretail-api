import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreatePurchaseDto {
    @IsNumber()
    @IsNotEmpty()
    supplier_id: number;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsNumber()
    shipping_cost: number;

    @IsString()
    shipping_info: string;

    @IsNumber()
    other_cost: number;

    @IsString()
    other_info: string;

    //PAID OR UNPAID
    @IsString()
    payment: string;

    @IsString()
    payment_method: string;

    @IsString()
    status: string;

    @IsNumber()
    total: number;

    @IsNotEmpty()
    @IsNumber()
    product_id: number;

    @IsNotEmpty()
    @IsNumber()
    product_quantity: number;
}
