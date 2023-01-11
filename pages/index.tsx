import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { JobsResponse, Job } from '../types/Jobs';
import { filterJob } from '../utils/filterJob';
import { JobList } from '../components/JobList';
import { Header } from '../components/Header';
import { ResultsSection } from '../components/ResultsSection';

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
      <Header />
      <main className="p-2 max-w-6xl mx-auto">
        <ResultsSection>
          <JobList jobs={jobsResponse.jobs} />
        </ResultsSection>
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
