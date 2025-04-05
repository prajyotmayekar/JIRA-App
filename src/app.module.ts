import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
