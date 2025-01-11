import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Next.js!</h1>
      <p>
        Go to <Link href="/about">About Page</Link>
      </p>
      <p>
        Check out the <a href="/api/hello">API Route</a>
      </p>
    </div>
  );
}
