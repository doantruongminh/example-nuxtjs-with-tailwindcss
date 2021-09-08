import {
  Length,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export default class LoginModel {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(8, 20)
  @IsNotEmpty()
  password: string;

}