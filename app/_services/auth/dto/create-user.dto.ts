import { IsEmail, IsString, MinLength } from "class-validator"

export class CreateUserDto {
  @IsEmail()
  email: string
  
  @MinLength(8, {
    message: 'Пароль не может быть менее 8 символов'
  })
  @IsString()
  password: string
  
  @IsString()
  role: string
}
