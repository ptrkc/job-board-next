import { useMemo, useReducer, useState } from 'react';
import { Job } from '../types/Jobs';
import { JobList } from './JobList';

export function ResultsSection({ jobs }: { jobs: Job[] }) {
  const [only7Days, setOnly7Days] = useState(false);
  const [company, setCompany] = useState('');
  const companiesList = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.companyName))).sort(),
    [jobs]
  );

  const resetFilters = () => {
    setOnly7Days(false);
    setCompany('');
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold capitalize">Business Analyst Jobs</h2>
      <div className="flex gap-2">
        <select
          className={[
            company !== ''
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-white border-gray-400 text-blue-500',
            'rounded-md border p-2 font-bold transition-all',
          ].join(' ')}
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        >
          <option value="">Filter by company</option>
          {companiesList.map((companyName) => (
            <option key={companyName} value={companyName}>
              {companyName}
            </option>
          ))}
        </select>
        <button
          className={[
            only7Days
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-white border-gray-400 text-blue-500',
            'rounded-md border p-2 font-bold transition-all',
          ].join(' ')}
          onClick={() => setOnly7Days(!only7Days)}
        >
          Only last 7 days
        </button>
        <button
          className="bg-white border-gray-400 text-blue-500 rounded-md border p-2 font-bold"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
      <JobList jobs={jobs} />
    </div>
  );
}
