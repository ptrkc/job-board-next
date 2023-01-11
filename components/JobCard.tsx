import { Job } from '../types/Jobs';

export function JobCard({ job }: { job: Job }) {
  return (
    <li className="border-2 rounded-md border-black">
      <h2 className="font-bold">{job.jobTitle}</h2>
      <p>{job.companyName}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: job.jobDescription,
        }}
      />
    </li>
  );
}
