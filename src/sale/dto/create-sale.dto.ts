import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateSaleDto {
    @IsNotEmpty()
    sales_id: number;

    @IsNumber()
    @IsNotEmpty()
    customer_id: number;

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

    @IsString()
    payment_method: string;

    @IsString()
    status: string;

    @IsNumber()
    total: number;
}
