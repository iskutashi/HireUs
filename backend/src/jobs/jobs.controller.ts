import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) {}  // Inject JobsService

    @Get()
    getJobs() {
        return this.jobsService.getJobs();  // Call getJobs() from JobsService
    }
}
