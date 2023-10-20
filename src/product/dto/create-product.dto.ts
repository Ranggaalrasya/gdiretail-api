import { IsNotEmpty, IsString, IsNumber } from "class-validator"

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    product_name: string;

    @IsNumber()
    @IsNotEmpty()
    product_price: number;

    @IsNumber()
    @IsNotEmpty()
    product_quantity: number;
}
