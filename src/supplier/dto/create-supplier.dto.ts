import { IsNotEmpty, IsString } from "class-validator"

export class CreateSupplierDto {

    @IsString()
    @IsNotEmpty()
    supplier_name : string;

    @IsString()
    @IsNotEmpty()
    supplier_address : string;

    @IsString()
    phone_number :  string;
}
