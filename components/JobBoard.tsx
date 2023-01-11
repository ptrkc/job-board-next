import { Job } from '../types/Jobs';
import { JobFullCard } from './JobFullCard';
import { JobCardList } from './JobCardList';

export function JobBoard({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex gap-2 p-2">
      <JobCardList jobs={jobs} />
      <JobFullCard job={jobs[0]} />
    </div>
  );
}
