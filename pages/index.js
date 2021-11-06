import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Layout, { myName, siteTitle } from '../components/layout';


//이 index.js파일에 외부 데이터(=파싱한 markdown파일)를 가져와서 pre-render 하기
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! my name is {myName}.</p>
        <p>
          This blog was created with next.js{' '}
          {/* 외부링크: a */}
          ( <a href="https://nextjs.org">Check here</a> )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.heading}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

