import { Module } from '@nestjs/common';
import { databaseProviders } from './application/implementations/PostgresqlDatabase';

@Module({
  imports: [],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class CommonsModule {}
