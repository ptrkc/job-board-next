import { Job } from '../types/Jobs';
import { BackButton } from './BackButton';
import { JobFullContent } from './JobFullContent';

export function JobFullOverlay({
  job,
  closeOverlay,
}: {
  job: Job;
  closeOverlay: () => void;
}) {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 overflow-auto bg-white p-4">
      <BackButton onClick={closeOverlay} />
      <JobFullContent job={job} />
      <BackButton onClick={closeOverlay} />
    </div>
  );
}
