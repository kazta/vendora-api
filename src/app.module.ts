import { Module } from '@nestjs/common';
import { CommonsModule } from './commons/commons.module';

@Module({
  imports: [CommonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
