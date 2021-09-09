import { Body, Controller, Get, Post, RequestTimeoutException, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';



@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }


    @ApiOperation({summary: 'get user'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }



    @ApiOperation({summary: 'add role'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    // @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: 'resert password'})
    @Post('/resert')
    resertPassword(@Body() dto:CreateUserDto){
        return this.usersService.resertPassword(dto)
    }




}
