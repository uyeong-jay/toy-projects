import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, //[id]
    fallback: false //경로에 맞지 않을때 무조건 404페이지로
  };
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData //data
    }
  };
}

// 최종 postData
// [
//   {
//     params: {
//       [id]: { //postData
//         id: "...",
//         title: "...",
//         date: "...",
//         contentHtml
//       } 
//     }
//   }
// ]

export default function Post({ postData }) {
  const { id, title, date, contentHtml } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <br /><br />
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
};