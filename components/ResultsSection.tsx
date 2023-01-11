import { PropsWithChildren } from 'react';

export function ResultsSection({ children }: PropsWithChildren) {
  return (
    <>
      <h2 className="text-2xl font-bold capitalize">Business Analyst Jobs</h2>
      <label>
        Filter by company
        <input type="text" className="border" />
      </label>
      <button className="border">Only last 7 days</button>
      <div>{children}</div>
    </>
  );
}
