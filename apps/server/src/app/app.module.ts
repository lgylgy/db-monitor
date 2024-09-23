import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@lgy/libs/server'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
