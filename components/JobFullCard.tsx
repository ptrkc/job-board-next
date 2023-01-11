import { Job } from '../types/Jobs';
import { JobFullContent } from './JobFullContent';

export function JobFullCard({ job }: { job: Job }) {
  return (
    <div className="border border-gray-300 shadow-md rounded-md h-[calc(100vh-180px)] overflow-auto sticky top-10 p-4">
      <JobFullContent job={job} />
    </div>
  );
}
