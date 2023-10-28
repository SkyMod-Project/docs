import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Home = () => {
    return <Redirect to={useBaseUrl('/development/getting-started')} />
};

export default Home;