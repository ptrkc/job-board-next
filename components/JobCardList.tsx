import { Job } from '../types/Jobs';
import { JobCard } from './JobCard';

export function JobCardList({
  jobs,
  selectedJob,
  setSelectedJob,
}: {
  jobs: Job[];
  selectedJob?: Job;
  setSelectedJob: (job: Job) => void;
}) {
  return (
    <ul className="flex flex-col gap-4 mx-auto max-w-lg w-full md:w-[270px] md:shrink-0">
      {jobs.map((job) => (
        <JobCard
          setSelectedJob={setSelectedJob}
          key={job.jobId}
          job={job}
          isSelected={selectedJob?.jobId === job.jobId}
        />
      ))}
    </ul>
  );
}
