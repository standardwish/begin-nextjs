import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function FirstPage() {
    return (
        <div className={styles.container}>
            <main>
                <h1 className={styles.title}>
                    WHO AM I
                </h1>
                <img style={{marginTop: "15px"}} src="/img/SelfShot.jpg" width="500px"/>
                <p className={styles.description}>
                    JUN SEONG PYO(2004/06/26)
                </p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 style={{fontSize: "1.3rem"}}>NAME : 표준성(表峻成)</h3>
                        <div style={{fontSize: "1.0rem", color: "black"}}>
                            <br/>
                            <span>표(表) : PRETENDING<br/></span>
                            <span>준(峻) : HIGH<br/></span>
                            <span>성(成) : ACCOMPLISHED<br/></span>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <h3 style={{fontSize: "1.3rem"}}>EDUCATION</h3>
                        <div style={{fontSize: "1.0rem"}}>
                            <Link className={styles.link} href="https://sangsoo.sen.es.kr/"
                                  target='_blank'>(2011~2016){' '}Sangsoo Elementary School<br/></Link>
                            <Link className={styles.link} href="http://galmae.ms.kr/" target='_blank'>(2017~2019){' '}Galmae
                                Middle School<br/></Link>
                            <Link className={styles.link} href="https://galmae.hs.kr/" target='_blank'>(2020~2022){' '}Galmae
                                High School<br/></Link>
                            <Link className={styles.linkHanynag} href="https://www.hanyang.ac.kr/web/eng"
                                  target='_blank'>(2023~){' '}Hanyang University<br/></Link>
                        </div>
                    </div>

                    <a href="https://www.hanyang.ac.kr/web/www/welcome-to-hanyang" className={styles.card}>
                        <h3 style={{fontSize: "1.3rem"}} className={styles.hanyangColor}>HANYANG UNIVERSITY &rarr;</h3>
                        <div className={styles.info}>
                            <span className={styles.accent}>The Best Colleague<br/></span>
                            <span>In the World</span>
                        </div>
                    </a>
                    <Link target="_blank" href="https://team-welfarecode.github.io" className={styles.card}>
                        <h3 style={{fontSize: "1.3rem"}}>MY PORTFOLIO &rarr;</h3>
                        <p className={styles.info}>
                            <Link className={styles.link} target="_blank" href="https://team-welfarecode.github.io/">High School
                                Club Homepage</Link>
                        </p>
                    </Link>
                </div>
            </main>
            <button className={`${styles.wBtn} ${styles.wBtnBlue}`}>
                <Link className={styles.BackToHome} href="/">
                    BACK TO HOME
                </Link>
            </button>
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