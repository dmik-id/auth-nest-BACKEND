import {  HttpException, HttpStatus, Injectable, Options} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { User } from './users.model';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private roleService: RolesService
      ) {}



    async createUser(dto: CreateUserDto){
        const user = await this.usersRepository.create(dto)
        const role = await this.roleService.getRoleByValue("ADMIN")
        user.UserRoles = role
        await this.usersRepository.save(user)
        return user

    }

    async getAllUsers(){
        const users = await this.usersRepository.find()///////////////////////get role??
        // console.log(users)
        return users 
    }


    async getUserByEmail(email:string){
        const user = await this.usersRepository.find({where: {email}})
        return user
    }


    async addRole(dto:AddRoleDto){
        const userId = dto.userId
        const id = userId
        const user = await this.usersRepository.find({
            where: {id}
        })
        const role = await this.roleService.getRoleByValue(dto.value)
        if (user && role){

        
            user[0].UserRoles = role
           
    
            return dto
            
        }
        throw new HttpException('Пользователь или пароль не найдены', HttpStatus.NOT_FOUND)

    }
    // async getRoleByUserId(userId:number){
    //     const role = await this.usersRepository.find()
    //     return(role)
    // }

}
