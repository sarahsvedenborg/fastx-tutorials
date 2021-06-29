import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import client from "../../client";
import styles from "../../styles/tutorial.module.scss";
import Toggle from "../../components/Toggle";
import Carousel from "../../components/carousel";
import { PortableText } from "../../lib/sanity";

interface TutorialProps {
  tutorial: {
    title: string;
    slug: { current: string };
    scopeType: string;
    introduction: { no: string; en: string };
    objectives: string[];
    sections: any;
    slides: any[];
  };
  locale: string;
}

export default function Tutorial({ tutorial, locale }: TutorialProps) {
  console.log("locale", locale);
  const { title, scopeType, introduction, objectives, sections, slides } =
    tutorial;
  const [isSlides, setIsSlides] = useState(false);
  const toggleSlides = () => {
    setIsSlides(!isSlides);
  };
  return (
    <div className={[styles.tutorialPage, "tutorialPage"].join(" ")}>
      <div className={styles.header}>
        <p className={styles.scopeTag}>{scopeType}</p>
        <h2>{title}</h2>
        <div className={styles.presentationToggle}>
          <div style={isSlides ? { opacity: "0.5" } : undefined}>
            Full tutorial
          </div>
          <Toggle
            toggleType="slides"
            toggleValue={toggleSlides}
            isDefault={!isSlides}
            trueValue=" "
            falseValue=" "
          />
          <div style={!isSlides ? { opacity: "0.5" } : undefined}>Slides</div>
        </div>
      </div>
      {isSlides && (
        <div className={styles.slideshowContainer}>
          <Carousel slides={slides} />
        </div>
      )}
      {!isSlides && (
        <div
          className={[styles.contentContainer, "contentContainer"].join(" ")}
        >
          {Array.isArray(sections) && (
            <div className={styles.sideMenu}>
              <ul>
                <li>
                  <h3>Sections</h3>
                </li>
                {sections.map((section) => (
                  <li>{section.title.no}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.content}>
            <div className={styles.intro}>
              <p style={{ fontWeight: "bold" }}>{introduction.no}</p>
              <div className={styles.objectives}>
                <h3>Objectives</h3>
                <ol>
                  {Array.isArray(objectives) &&
                    objectives.map((item) => <li>{item}</li>)}
                </ol>
              </div>
            </div>
            <div className={styles.body}>
              {Array.isArray(sections) &&
                sections.map((section) => (
                  <div>
                    <h2>{section.title.no}</h2>
                    <PortableText blocks={section.body} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths({ locales }) {
  /*   const res = await fetch("https://.../posts");
  const tutorials = await res.json(); */

  const tutorials = await client.fetch(`*[_type == "tutorial"]`);

  const pathsNO = tutorials.map(
    (tutorial: { title: string; slug: { current: string } }) => ({
      params: { slug: tutorial.slug.current },
      locale: "no-NB",
    })
  );
  const pathsENG = tutorials.map(
    (tutorial: { title: string; slug: { current: string } }) => ({
      params: { slug: tutorial.slug.current },
      locale: "en-US",
    })
  );
  return {
    paths: pathsNO.concat(pathsENG),
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }: any) {
  const locale = params.locale ?? "no-NB";
  const tutorial = await client.fetch(
    `
      *[_type == "tutorial" && slug.current == $slug][0]
    `,
    { slug: params.slug }
  );

  // By returning { props: { tutorial } }, the Tutorial component
  // will receive `tutorial` as a prop at build time
  return {
    props: {
      tutorial,
      locale,
    },
  };
}
