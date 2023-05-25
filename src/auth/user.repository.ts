import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

export class UserRepository extends Repository<User> {
  constructor(@InjectRepository(User) private dataSource: DataSource) {
    super(User, dataSource.manager);
  }

  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.create({ username, password });
    try {
      await this.save(user);
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
