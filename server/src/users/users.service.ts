import {  Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.model';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

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
        return users 
    }


    async getUserByEmail(email:string){
        const user = await this.usersRepository.find({where: {email}})
        return user
    }

}
