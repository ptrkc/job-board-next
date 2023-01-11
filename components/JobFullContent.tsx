import { Job } from '../types/Jobs';

export function JobFullContent({ job }: { job: Job }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="font-bold text-3xl">{job.jobTitle}</h2>
        <p>{job.companyName}</p>
        <p>{job.location}</p>
        <p>{job.estimatedSalary}</p>
      </div>
      <hr />
      <div>
        <h2 className="text-2xl">Job Description</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: job.jobDescription,
          }}
        />
      </div>
    </div>
  );
}
