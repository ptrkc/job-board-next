import { Job } from '../types/Jobs';

export function JobCard({
  job,
  isSelected,
  setSelectedJob,
}: {
  job: Job;
  isSelected: boolean;
  setSelectedJob: (job: Job) => void;
}) {
  const onClick = () => setSelectedJob(job);
  return (
    <li
      className={[
        'border rounded-md p-4 border-gray-300 shadow-md hover:shadow-xl cursor-pointer w-full pl-[16px]',
        isSelected && 'border-l-4 border-l-blue-500 pl-[13px]  ',
      ].join(' ')}
      onClick={onClick}
    >
      <h3 className=" text-xl font-bold">{job.jobTitle}</h3>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.estimatedSalary}</p>
    </li>
  );
}
