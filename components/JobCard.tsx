import { Job } from '../types/Jobs';

export function JobCard({ job }: { job: Job }) {
  return (
    <li className="border-2 rounded-md border-black">
      <h3 className=" text-xl font-bold">{job.jobTitle}</h3>
      <p>{job.companyName}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: job.jobDescription,
        }}
      />
    </li>
  );
}
