import { ApiProperty } from "@nestjs/swagger"


export class CreateUserDto {


    @ApiProperty({example: 'tron@gmail.ru', description: 'email'})
    readonly email:string
    @ApiProperty({example: '123123123', description: 'pasword'})
    readonly password:string
}