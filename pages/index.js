import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Introduction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <h1 className={styles.title}>
          Welcome to <Link href="posts/first-post">JUN SEONG PYO</Link>
        </h1>

        <p className={styles.description}>
          The Greatest Of All Time
        </p>

        <div className={styles.grid}>
          <Link href="posts/first-page" className={styles.card}>
            <h3>WHO AM I</h3>
              <div className={styles.info}>
              <span>Find </span>
              <span className={styles.accent}>in-depth information<br/></span>
              <span>about me!</span>
              </div>
          </Link>
          

          <a href="./" className={styles.card}>
            <h3>MILESTONE </h3>
            <div className={styles.info}>
              <span>Let me introduce<br/></span>
              <span className={styles.accent}>The Path</span>
              <span> where I walked</span>
            </div>
          </a>

          <a href="https://www.hanyang.ac.kr/web/www/welcome-to-hanyang" className={styles.card}>
            <h3 className={styles.hanyangColor}>HANYANG UNIVERSITY </h3>
            <div className={styles.info}>
              <span className={styles.accent}>The Best Colleague<br/></span>
              <span>In the World</span>
            </div>
          </a>

          <a
            href="./"
            className={styles.card}
          >
            <h3>HOW IT'S MADE </h3>
            <div className={styles.info}>
              <span>Show{' '}</span>
              <span className={styles.accent}>the whole procedure</span>
              <span>{' '}how this website is made</span>
            </div>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
