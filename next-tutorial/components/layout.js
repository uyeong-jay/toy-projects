import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import layoutStyles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const myName = 'UYeong';
export const siteTitle = 'my Blog'

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <meta name="description" content="Welcome to my blog" />
        {/* <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} 
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter" content="large_image" /> */}
      </Head>
      <header className={layoutStyles.header}>
        {home ? (
          <>
            <Image 
              className={utilStyles.borderCircle}
              src="/images/profile.jpg"
              alt={myName}
              width={144}
              height={144}
              priority
            />
            <h1 className={utilStyles.heading2XL}>{myName}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image 
                  className={utilStyles.borderCircle}
                  src="/images/profile.jpg"
                  alt={myName}
                  width={108}
                  height={108}
                  priority
                />
              </a>
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>
                  {myName}
                </a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}