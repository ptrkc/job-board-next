import { Job } from '../types/Jobs';

export function JobCard({ job }: { job: Job }) {
  return (
    <li className="border rounded-md  p-4 border-gray-300 shadow-md hover:shadow-xl cursor-pointer">
      <h3 className=" text-xl font-bold">{job.jobTitle}</h3>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.estimatedSalary}</p>
    </li>
  );
}
