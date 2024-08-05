import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getAllJobsAction } from '@/utils/actions';
import JobCard from './JobCard';

export default function JobsList() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const jobStatus = searchParams.get('jobStatus') || 'all';
  const page = Number(searchParams.get('page')) || 1;

  const { data, isPending } = useQuery({
    queryKey: ['jobs', search ?? '', jobStatus, page],
    queryFn: () => getAllJobsAction({ search, jobStatus, page }),
  });
  const jobs = data?.jobs || [];

  if (isPending) {
    return <h2 className="text-xl">Please Wait...</h2>;
  }

  if (jobs.length < 1) {
    return <h2 className="text-xl">No Jobs Found...</h2>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
