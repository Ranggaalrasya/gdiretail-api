import { IsEmail, IsIn, IsString } from "class-validator";
import { Gender as PrismaGender, Posisi as PrismaPosisi, Status as PrismaStatus } from 'prisma'; // Replace 'path-to-prisma-generated-types' with the actual import path

enum Gender { unset, Pria, Wanita }
enum Posisi { unset, SuperAdmin, Admin, Sales }
enum Status { Active, Inactive }

export class CreateUserDto {
    @IsString()
    name: string;

    @IsIn(Object.values(Gender))
    gender: PrismaGender;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    alamat: string;

    @IsString()
    no_telp: string;

    @IsIn(Object.values(Posisi))
    posisi: PrismaPosisi;

    @IsIn(Object.values(Status))
    status: PrismaStatus;
}