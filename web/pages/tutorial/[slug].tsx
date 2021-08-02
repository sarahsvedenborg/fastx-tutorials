import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import client from "../../client";
import Toggle from "../../components/Toggle";
import Carousel from "../../components/carousel";
import SectionMenu from "../../components/sectionMenu/sectionMenu";
import { PortableText } from "../../lib/sanity";
import { getCookieParser } from "next/dist/next-server/server/api-utils";

interface TutorialProps {
  tutorial: {
    title: string;
    slug: { current: string };
    scopeType: string;
    introduction: { no: string; en: string };
    objectives?: string[];
    sections?: any;
    slides?: any[];
  };
  locale: string;
}

export default function Tutorial({ tutorial, locale }: TutorialProps) {
  console.log("locale", locale);
  const { title, scopeType, introduction, objectives, sections, slides } =
    tutorial;

  const sectionRefs = sections.map(() => useRef());
  const [isSlides, setIsSlides] = useState(false);
  const toggleSlides = () => {
    setIsSlides(!isSlides);
  };

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView();
  };
  return (
    <div className="tutorialPage">
      <div className="header">
        <p className="scopeTag">{scopeType}</p>
        <h2>{title}</h2>
        <div className="presentationToggle">
          <div
            style={isSlides ? { opacity: "0.5" } : undefined}
            className="label"
          >
            Full tutorial
          </div>
          <Toggle
            toggleType="slides"
            toggleValue={toggleSlides}
            isDefault={!isSlides}
            trueValue=" "
            falseValue=" "
          />
          <div
            style={!isSlides ? { opacity: "0.5" } : undefined}
            className="label"
          >
            Slides
          </div>
        </div>
      </div>
      {isSlides && (
        <div className="slideshowContainer">
          <Carousel slides={slides} />
        </div>
      )}
      {!isSlides && (
        <div className="contentContainer">
          {Array.isArray(sections) && (
            <div className="sideMenu">
              <ul>
                <li>
                  <h3>Sections</h3>
                </li>
                {sections.map((section, i) => (
                  <li onClick={() => scrollTo(sectionRefs[i])}>
                    {section.title.no}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="content">
            <SectionMenu
              scrollTo={scrollTo}
              sectionHeadings={sections.map((section: any, i: number) => ({
                heading: section.title.no,
                ref: sectionRefs[i],
              }))}
            />
            <div className="intro">
              <p style={{ fontWeight: "bold" }}>{introduction.no}</p>
              <div className="objectives">
                <h3>Objectives</h3>
                <ol>
                  {Array.isArray(objectives) &&
                    objectives.map((item) => <li>{item}</li>)}
                </ol>
              </div>
            </div>
            <div className="body">
              {Array.isArray(sections) &&
                sections.map((section, i) => (
                  <div ref={sectionRefs[i]}>
                    <h2>{section.title.no}</h2>
                    <PortableText blocks={section.body} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <div className="tutorialFooter">Tutorial footer</div>
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
    //paths: pathsNO.concat(pathsENG),
    paths: pathsNO,
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
