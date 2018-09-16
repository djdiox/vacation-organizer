import Link from 'next/link'

export default () => (
	<div>
		<p>Welcome to the Vacation Organizer!</p>
		<Link href="/about">
			<a>Contact me!</a>
		</Link>
	</div>
);