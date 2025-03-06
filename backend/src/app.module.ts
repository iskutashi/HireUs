import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { JobsModule } from './jobs/jobs.module';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [JobsModule],
  controllers: [AppController, JobsController],
  providers: [AppService, JobsService],
})
export class AppModule {}
