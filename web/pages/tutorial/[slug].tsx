import { useRef, useState, useMemo, createRef } from "react";
import Head from "next/head";
import Image from "next/image";
import client from "../../client";
import Toggle from "../../components/Toggle";
import Carousel from "../../components/carousel";
import SectionMenu from "../../components/sectionMenu/sectionMenu";
import { PortableText } from "../../lib/sanity";

interface TutorialProps {
  tutorial: {
body:{
    title: string;
    slug: { current: string };
    scopeType: string;
    introduction: { no: string; en: string };
    objectives?: string[];
    sections?: any;
    slides?: any[];
    slidesLink?: any;
    }
  },
  locale: string;
}

export default function Tutorial({ tutorial, locale }: TutorialProps) {
  const { title = "", scopeType = "", introduction = [], objectives, sections= [{title:""}], slides, slidesLink } =
    tutorial.body;

    const [isSlides, setIsSlides] = useState(false);
    const toggleSlides = () => {
      setIsSlides(!isSlides);
    };

    //const sectionRefs = sections.map(()=> useRef())
   const sectionRefs = useMemo(() => {
    return sections.map(() => createRef());
  }, [locale])  

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <Carousel slides={slides} slidesLink={slidesLink}/>
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
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="content">
         {Array.isArray(sections) && (<SectionMenu
              scrollTo={scrollTo}
              sectionHeadings={sections.map((section: any, i: number) => ({
                heading: section.title,
                ref: sectionRefs[i],
              }))}
            />)} 
            <div className="intro">
              <p style={{ fontWeight: "bold" }}>{introduction}</p>
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
                  <div key={i+locale} ref={sectionRefs[i]}>
                    <h2>{section.title}</h2>
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

export async function getStaticPaths() {

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

export async function getStaticProps({ params, locale }: any) {
  const tutorial = await client.fetch(
    `
      *[_type == "tutorial" && slug.current == $slug][0]{_id, slug, 'body': ${locale.substr(0,2)}{..., _type == 'file' => {"asset": {
        "url": asset->url, "originalFilename": asset->originalFilename
      }}}}
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
