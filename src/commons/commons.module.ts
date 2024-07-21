import { Module } from '@nestjs/common';
import { databaseProviders } from './application/implementations/postgresql.database';

@Module({
  imports: [],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class CommonsModule {}
