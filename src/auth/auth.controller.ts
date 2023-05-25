import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.authService.signup(authCredentialDto);
  }
}
