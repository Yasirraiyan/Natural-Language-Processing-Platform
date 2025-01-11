// pages/about.js

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <p>
        <Link href="/">Go back to Home</Link>
      </p>
    </div>
  );
}
