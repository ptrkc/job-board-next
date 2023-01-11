import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { JobsResponse, Job } from '../types/Jobs';
import { filterJob } from '../utils/filterJob';

export default function Home({
  jobsResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Job Board</title>
        <meta
          name="description"
          content="Job Board, find your next dream job!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Job Board!</h1>
        <ul className="flex flex-col gap-4 p-2">
          {jobsResponse.jobs.map((job) => (
            <li key={job.jobId} className="border-2 rounded-md border-black">
              <h2 className="font-bold">{job.jobTitle}</h2>
              <p>{job.companyName}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: job.jobDescription,
                }}
              ></div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  jobsResponse: JobsResponse;
}> = async () => {
  const rawResponse = await fetch('https://www.zippia.com/api/jobs/ ', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    }),
  });
  const parsedResponse: JobsResponse = await rawResponse.json();
  const jobsResponse = {
    jobs: parsedResponse.jobs.map((job) => filterJob(job) as Job), // remove unnecessary keys, avoid https://nextjs.org/docs/messages/large-page-data
    totalJobs: parsedResponse.totalJobs,
    remainingJobs: parsedResponse.remainingJobs,
  };

  return { props: { jobsResponse } };
};
