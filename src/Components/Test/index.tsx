import React from 'react';

import { useAssetCollectionQuery } from './test.generated';

export const Test = () => {
	const [{ data, fetching, error }] = useAssetCollectionQuery();
	if (error != null) {
		return <div>error</div>;
	}
	if (fetching) {
		return <div>FETCHING</div>;
	}
	return <div>{JSON.stringify(data)}</div>;
};
