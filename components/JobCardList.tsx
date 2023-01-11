import { Job } from '../types/Jobs';
import { JobCard } from './JobCard';

export function JobCardList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) {
    return (
      <span className="text-xl mt-4">
        No results, try resetting the filters.
      </span>
    );
  }

  return (
    <ul className="flex flex-col gap-4 min-w-[300px]">
      {jobs.map((job) => (
        <JobCard key={job.jobId} job={job} />
      ))}
    </ul>
  );
}
