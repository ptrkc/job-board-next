import { Job } from '../types/Jobs';
import { JobFullCard } from './JobFullCard';
import { JobCardList } from './JobCardList';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import { JobFullOverlay } from './JobFullOverlay';

export function JobBoard({ jobs }: { jobs: Job[] }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [selectedJob, setSelectedJob] = useState(isMobile ? null : jobs[0]);

  useEffect(() => {
    if (!isMobile && jobs.length) {
      setSelectedJob(jobs[0]);
    }
  }, [isMobile, jobs]);

  if (!jobs.length)
    return (
      <span className="text-xl mt-4">
        No results, try resetting the filters.
      </span>
    );

  if (!isMobile && selectedJob !== null) {
    return (
      <div className="flex gap-2 p-2">
        <JobCardList
          jobs={jobs}
          setSelectedJob={setSelectedJob}
          selectedJob={selectedJob}
        />
        <JobFullCard job={selectedJob} />
      </div>
    );
  }

  return (
    <div className="p-2">
      <JobCardList jobs={jobs} setSelectedJob={setSelectedJob} />
      {selectedJob && (
        <JobFullOverlay
          job={selectedJob}
          closeOverlay={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}
