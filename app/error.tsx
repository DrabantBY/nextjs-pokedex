'use client';

import ErrorAlert from '../ui/ErrorAlert';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
	return <ErrorAlert message={error.message} />;
};

export default Error;
