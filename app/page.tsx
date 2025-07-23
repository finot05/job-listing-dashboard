'use client';

import React, { useState } from 'react';
import jobsData from '../data/jobs.json';
import JobCard from '../components/JobCard';
import { Job } from '../types';

type SortOption = 'relevance' | 'date';

export default function JobList() {
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const jobs: Job[] = jobsData.job_postings;

  return (
    <div className="mx-auto pt-10" style={{ maxWidth: '919px' }}>
      {/* Header */}
      <div className="flex justify-between items-end mb-10 px-5">
        <div>
          <h1 className="font-bold text-3xl text-gray-900">Opportunities</h1>
          <p className="text-sm text-gray-500">Showing {jobs.length} results</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
          >
            <option value="relevance">Most relevant</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      {/* Job List */}
      <div className="space-y-7 px-5">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} index={i} />
        ))}
      </div>
    </div>
  );
}
