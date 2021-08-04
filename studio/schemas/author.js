import { RiUserLine } from "react-icons/Ri";
import createLocaleDocument from './objects/localeWrapper'

const authorFields = [   {
    name: "name",
    title: "Name",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "name",
      maxLength: 96,
    },
  },
  {
    name: "image",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    },
  },
  {
    name: "bio",
    title: "Bio",
    type: "array",
    of: [
      {
        title: "Block",
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
        lists: [],
      },
    ],
  },
]

export default {
  name: "author",
  title: "Authors",
  type: "document",
  icon: RiUserLine,
  fields: createLocaleDocument(authorFields),
  preview: {
    select: {
      title: "no.name",
      media: "no.image",
    },
  },
};
