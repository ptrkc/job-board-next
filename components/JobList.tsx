import { Job } from '../types/Jobs';
import { JobCard } from './JobCard';

export function JobList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) {
    return (
      <span className="text-xl mt-4 ">
        No results, try resetting the filters.
      </span>
    );
  }

  return (
    <ul className="flex flex-col gap-4 py-2">
      {jobs.slice(0, 10).map((job) => (
        <JobCard key={job.jobId} job={job} />
      ))}
    </ul>
  );
}
