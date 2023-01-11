// Used https://quicktype.io/ to generate types from the endpoint response,
// stripping some keys I don't need.
//
// POST  https://www.zippia.com/api/jobs/
// Request payload:
// {
//   "companySkills": true,
//   "dismissedListingHashes": [],
//   "fetchJobDesc": true,
//   "jobTitle": "Business Analyst",
//   "locations": [],
//   "numJobs": 20,
//   "previousListingHashes": []
// }

export interface Jobs {
  jobs: Job[];
  totalJobs: number;
  remainingJobs: number;
}

export interface Job {
  jobId: string;
  jobTitle: string;
  location: string;
  estimatedSalary: string;
  companyName: string;
  companyLogo?: string;
  jobDescription: string;
  jobURL: string;
  url: string;
  listingHash: string;
  postedDate: string;
  postingDate: Date;
  jobLevels: JobLevel[];
}

export enum JobLevel {
  EntryLevel = "Entry Level",
  JuniorLevel = "Junior Level",
  MidLevel = "Mid Level",
  SeniorLevel = "Senior Level",
}
