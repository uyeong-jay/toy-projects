import Head from 'next/head';
import Layout, { myName, siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';


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
          ( <a herf="https://nextjs.org">Check here</a> )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.heading}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((v,i) => (
            <li key={v.id} className={utilStyles.listItem}>
              {v.date}
              <br />
              {v.id}
              <br />
              {v.title}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

