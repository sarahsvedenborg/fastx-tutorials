import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import client from "../client";
import styles from "../styles/Home.module.scss";

interface HomeProps {
  tutorials: any[];
  isDarkMode: boolean;
}

export default function Home({ tutorials, isDarkMode }: HomeProps) {
  const setBackground = (index: number) => {
    return {
      backgroundImage: `url(tutorialBackgrounds/background${index}.svg);`,
    };
  };

  return (
    <div
      className={[
        styles.container,
        isDarkMode ? styles.themeDark : styles.themeLight,
      ].join(" ")}
    >
      <Head>
        <title>Tutorials</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.child}>
            <p className={styles.tagline}>
              Synlighetsteamet i Xperience Solutions gir deg
            </p>
            <h1 className={styles.title}>Web tutorials og workshops</h1>
          </div>
          <div className={[styles.child, styles.image].join(" ")}>
            <object data="hero.svg" />
          </div>
        </div>

        <div className={styles.tutorials}>
          <ul>
            {Array.isArray(tutorials) &&
              tutorials.map((tutorial, i) => (
                <li key={tutorial.slug.current} style={setBackground(i + 1)}>
                  <Link href={`/tutorial/${tutorial.slug.current}`}>
                    <a>
                      <div className={styles.course}>
                        <h6>{tutorial.scopeType}</h6>
                        <h4>{tutorial.title}</h4>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Laget av ...</span>
      </footer>
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const locale = params?.locale ?? "no";
  const tutorials = await client.fetch(
    `
      *[_type == "tutorial"]
    `
  );

  // By returning { props: { tutorial } }, the Tutorial component
  // will receive `tutorial` as a prop at build time
  return {
    props: {
      tutorials,
      locale,
    },
  };
}