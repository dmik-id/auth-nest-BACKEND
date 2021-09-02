import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RolesService {


    constructor(
        @InjectRepository(Role)
        private rolesRepository: Repository<Role>,
    ) {}


    async createRole(dto: CreateRoleDto){
        const role = await this.rolesRepository.create(dto)
        await this.rolesRepository.save(role)
        return role


    }

    async getRoleByValue(value: string){
        const role = await this.rolesRepository.find({where : {value}})
        return role
    }


}
