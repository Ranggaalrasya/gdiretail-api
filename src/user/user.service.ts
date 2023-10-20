import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async register(dto: CreateUserDto) {
    const checkemail = await this.findByEmail(dto.email);// check email
    if (checkemail) {
      throw new ConflictException('Email telah didaftarkan sebelumnya');
    }

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      }
    });

    const { password, ...user } = newUser;
    return user;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      }
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      }
    });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // Check if the user exists
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // User exists, so update their data
    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto, // Update with the data from the DTO
    });

    return updatedUser;
  }
  async remove(id: number) {
    // Check if the user exists
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // User exists, so delete it
    await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return `User with ID ${id} has been deleted`;
  }
}
