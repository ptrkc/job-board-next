import { Job } from '../types/Jobs';
import { JobFullCard } from './JobFullCard';
import { JobCardList } from './JobCardList';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { JobFullOverlay } from './JobFullOverlay';

export function JobBoard({ jobs }: { jobs: Job[] }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [selectedJob, setSelectedJob] = useState(jobs.length ? jobs[0] : null);
  const [isOpen, setIsOpen] = useState(false);

  const selectJob = (job: Job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  if (!jobs.length || !selectedJob)
    return (
      <span className="text-xl mt-4">
        No results, try resetting the filters.
      </span>
    );

  return (
    <div className="flex gap-2 p-2">
      <JobCardList
        jobs={jobs}
        selectJob={selectJob}
        selectedJob={selectedJob}
      />
      {!isMobile && <JobFullCard job={selectedJob} />}
      {isMobile && isOpen && (
        <JobFullOverlay
          job={selectedJob}
          closeOverlay={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
