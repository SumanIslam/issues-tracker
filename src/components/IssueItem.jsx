import React from 'react';
import { GoComment, GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { getRelativeDate } from '../helpers/relativeDate';
import { userData } from '../helpers/useUserDate';

const IssueItem = ({
	title,
	number,
	assignee,
	commentCount,
	createdBy,
	createdDate,
	labels,
	status,
}) => {
	const isClosed = status === 'done' || status === 'canceled';
	const iconColor = isClosed ? 'green' : 'red';
	const icon = isClosed ? (
		<GoIssueClosed style={{ color: iconColor }} />
	) : (
		<GoIssueOpened style={{ color: iconColor }} />
	);
	const relativeDate = getRelativeDate(createdDate);

	const assigneeInfo = userData(assignee);
	const createdByInfo = userData(createdBy);

	console.log(createdByInfo);

	return (
		<li>
			<div>{icon}</div>
			<div className='issue-content'>
				<span>
					<Link to={`/issue/${number}`}>{title}</Link>
					{labels.map((label) => (
						<span key={label} className={`label red`}>
							{label}
						</span>
					))}
				</span>
				<small>
					#{number} opened {relativeDate} by{' '}
					{createdByInfo.status === 'success' ? createdByInfo.data.name : null}
				</small>
			</div>
			{assignee && assigneeInfo.status === 'success' ? (
				<img
					src={assigneeInfo.data.profilePictureUrl || ''
					}
					className='assigned-to'
					alt={`assigned to ${assigneeInfo.data.name || null}`}
				/>
			) : null}
			<div className='comment-count'>
				{commentCount > 0 && (
					<>
						<GoComment style={{ position: 'relative', top: '3px' }} />
						{commentCount}
					</>
				)}
			</div>
		</li>
	);
};

export default IssueItem;
