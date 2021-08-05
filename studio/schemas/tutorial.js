import { RiFilePaper2Line } from "react-icons/Ri";
import createLocaleDocument from "./objects/localeWrapper";

const tutorialFields = [
  {
    name: "title",
    title: "Title",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
  },
  {
    name: "scopeType",
    title: "Scope type",
    type: "string",
    of: [{ type: "string" }],
    options: {
      list: [
        { title: "Lightning", value: "Lightning" },
        { title: "Normal", value: "Normal" },
        { title: "Extensive", value: "Extensive" },
        { title: "Combined", value: "Combined" },
      ],
    },
  },
  {
    name: "resources",
    title: "Useful links",
    type: "array",
    of: [{ type: "simpleLink" }],
  },
  {
    name: "introduction",
    title: "Introduction",
    type: "string",
  },
  {
    name: "objectives",
    title: "Objectives",
    type: "array",
    of: [{ type: "string" }],
  },
  {
    name: "sections",
    title: "Sections",
    type: "array",
    of: [{ type: "tutorialSection" }],
  },
  {
    name: "subtutorials",
    title: "Sub tutorials",
    type: "array",
    of: [{ type: "reference", to: { type: "tutorial" } }],
  },
  {
    name: "author",
    title: "Author",
    type: "reference",
    to: { type: "author" },
  },
  {
    name: "mainImage",
    title: "Main image",
    type: "image",
    options: {
      hotspot: true,
    },
  },
  {
    name: "slides",
    title: "Slides - images",
    type: "gallery",
  },
  {
    name: "slidesLink",
    title: "Slides downloadable",
    type: "file",
  },
  {
    name: "publishedAt",
    title: "Published at",
    type: "datetime",
  },
]

export const tutorial = {
  name: "tutorial",
  title: "Tutorials",
  type: "document",
  icon: RiFilePaper2Line,
  fields: [ {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
  },
  ...createLocaleDocument(tutorialFields)],

  preview: {
    select: {
      title: "no.title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};

export const tutorialSection = {
  name: "tutorialSection",
  type: "object",
  title: "Tutorial section",
  fields: [
    {
      name: "title",
      title: "Section title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
