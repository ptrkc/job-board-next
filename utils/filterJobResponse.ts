const keysToKeep = {
  jobId: true,
  jobTitle: true,
  location: true,
  estimatedSalary: true,
  companyName: true,
  companyLogo: true,
  jobDescription: true,
  jobURL: true,
  url: true,
  listingHash: true,
  postedDate: true,
  postingDate: true,
  jobLevels: true,
};

export const filterJobResponse = (fullJob: Record<string, any>) =>
  Object.keys(keysToKeep).reduce((obj, key) => {
    if (fullJob[key]) {
      return { ...obj, [key]: fullJob[key] };
    }
    return obj;
  }, {});
