import { useQuery } from 'react-query';

import IssueItem from './IssueItem';

export default function IssuesList() {
  const { data, status } = useQuery(['issues'], () =>
		fetch('api/issues').then((res) => res.json())
	);

  if(status === 'loading') return <p>Loading...</p>
  return (
		<div>
			<h2>Issues List</h2>
			<ul className='issues-list'>
				{data.map((issue) => (
					<IssueItem
						key={issue.id}
						title={issue.title}
						number={issue.number}
						assignee={issue.assignee}
						commentCount={issue.comments.length}
						createdBy={issue.createdBy}
						createdDate={issue.createdDate}
						labels={issue.labels}
						status={issue.labels}
					/>
				))}
			</ul>
		</div>
	);
}
