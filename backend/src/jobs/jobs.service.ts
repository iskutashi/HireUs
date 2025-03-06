import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
    private Job = [
        {
            id: 1,
            title: 'Software Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
            location: 'New York',
            salary: '$100,000 - $200,000',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
            applyUrl: 'https://www.google.com',
         },
         {
            id: 2,
            title: 'Software Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
            location: 'New York',
            salary: '$100,000 - $200,000',         
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
            applyUrl: 'https://www.google.com',
         },
         {
            id: 3,
            title: 'Software Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
            location: 'New York',
            salary: '$100,000 - $200,000',         
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
            applyUrl: 'https://www.google.com',
         },
    ];

    getJobs() {
        return this.Job;
    }
}
