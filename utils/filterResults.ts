import { Job } from '../types/Jobs';

export const filterResults = (
  jobs: Job[],
  only7Days: boolean,
  company: string
) => {
  if (!only7Days && !company) return jobs;

  let filteredJobs = jobs;
  if (company) {
    filteredJobs = jobs.filter((job) => job.companyName === company);
  }
  if (only7Days) {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    filteredJobs = filteredJobs.filter(
      (job) => new Date(job.postingDate) > weekAgo
    );
  }
  return filteredJobs;
};
