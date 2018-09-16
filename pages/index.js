import Link from 'next/link'
import React from 'react';
import Layout from '../components/DefaultLayout';

export default () => (
	<Layout>
		<p>Welcome to the Vacation Organizer!</p>
		<Link href="/about">
			<button>Go to About Page</button>
		</Link>
	</Layout>
);