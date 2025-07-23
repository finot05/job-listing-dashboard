"use client";

import { useParams } from "next/navigation";
import jobData from "../../../data/jobs.json";

export default function JobDetailPage() {
  const { id } = useParams();
  const jobId = id ? parseInt(id as string) : null;

  if (jobId === null || isNaN(jobId)) {
    return <div className="p-5 text-red-500">Invalid job ID</div>;
  }

  const job = jobData.job_postings[jobId];

  if (!job) {
    return <div className="p-5 text-red-500">Job not found</div>;
  }

  const colorMap = ["text-[#FFB836]", "text-red-400", "text-green-500"];
  const borderMap = ["border-blue-200", "border-red-200", "border-green-200"];
  const bgMap = ["bg-blue-100", "bg-red-100", "bg-green-100"];

  return (
    <div className="flex justify-center bg-white px-4 py-10">
      <div className="flex" style={{ width: "1229px", gap: "62px" }}>
        {/* LEFT MAIN CONTENT */}
        <div style={{ width: "815px" }}>
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-xl font-extrabold mb-3 font-epilogue">Description</h2>
            <p className="font-poppins text-gray-700 leading-relaxed">{job.description}</p>
          </section>

          {/* Responsibilities */}
          <section className="mb-8">
            <h2 className="text-xl font-extrabold mb-3 font-epilogue">Responsibilities</h2>
            {job.responsibilities.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-2 mb-2 font-poppins">
                <img src="/check.png" alt="Check" className="w-4 h-4 mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </section>

          {/* Ideal Candidate */}
          <section className="mb-8">
            <h2 className="text-xl font-extrabold mb-3 font-epilogue">Ideal Candidate we want</h2>
            <div className="flex gap-2 mb-2 font-poppins">
              <span className="font-bold">•</span>
              <p>{job.ideal_candidate.age} {job.ideal_candidate.gender}</p>
            </div>
            {job.ideal_candidate.traits.map((trait: string, index: number) => (
              <div key={index} className="flex gap-2 font-poppins">
                <span className="font-bold">•</span>
                <p>{trait}</p>
              </div>
            ))}
          </section>

          {/* When & Where */}
          <section className="mb-8">
            <h2 className="text-xl font-extrabold mb-3 font-epilogue">When & Where</h2>
            <div className="flex gap-3 items-start font-poppins">
              <img src="/location.png" className="w-11 h-11" alt="Location" />
              <p>{job.when_where}</p>
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div style={{ width: "293px" }}>
          {/* About Section */}
          <section className="mb-8">
            <h2 className="font-bold mb-3 font-epilogue">About</h2>
            {[
              { label: "Posted On", value: job.about.posted_on, icon: "/postedon.png" },
              { label: "Deadline", value: job.about.deadline, icon: "/deadline.png" },
              { label: "Location", value: job.about.location, icon: "/location.png" },
              { label: "Start Date", value: job.about.start_date, icon: "/starteddate.png" },
              { label: "End Date", value: job.about.end_date, icon: "/end.png" },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-center mb-3 font-epilogue">
                <img src={item.icon} alt={item.label} className="w-11 h-11" />
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Categories */}
          <section className="mb-8">
            <h2 className="font-extrabold mb-3 font-epilogue">Categories</h2>
            {job.about.categories.map((cat: string, index: number) => (
              <span
                key={index}
                className={`inline-block px-3 py-1 mr-2 mb-2 text-sm rounded-xl font-medium border transition
                ${colorMap[index % 3]} ${bgMap[index % 3]} ${borderMap[index % 3]} 
                hover:bg-${colorMap[index % 3].replace("text-", "")} hover:text-black`}
              >
                {cat}
              </span>
            ))}
          </section>

          {/* Required Skills */}
          <section>
            <h2 className="font-extrabold mb-3 font-epilogue">Required Skills</h2>
            {job.about.required_skills.map((skill: string, index: number) => (
              <span
                key={index}
                className="inline-block px-3 py-1 mr-2 mb-2 text-sm text-[#4640DE] bg-blue-100 border border-blue-200 rounded hover:bg-[#4640DE] hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
