import { Job } from '../types/Jobs';
import { JobCard } from './JobCard';

export function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <ul className="flex flex-col gap-4 p-2">
      {jobs.map((job) => (
        <JobCard key={job.jobId} job={job} />
      ))}
    </ul>
  );
}
