import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Board } from 'src/boards/board.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Wlffjt159!',
  database: 'board-app',
  entities: [User, Board],
  synchronize: true,
};
