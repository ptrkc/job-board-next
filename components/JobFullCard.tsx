import { Job } from '../types/Jobs';

export function JobFullCard({ job }: { job: Job }) {
  return (
    <div className="border border-gray-300 shadow-md rounded-md p-4 flex flex-col gap-2 h-[calc(100vh-180px)] overflow-auto sticky top-10">
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
