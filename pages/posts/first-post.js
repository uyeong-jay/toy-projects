import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h2>First Post</h2>
      <p>Here is /posts/first-post</p>
      <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
    </Layout>
  );
}