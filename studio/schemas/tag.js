import { RiPriceTag3Line } from "react-icons/Ri";
import createLocaleDocument from "./objects/localeWrapper";

const tagFields = [
  {
    name: "title",
    title: "Title",
    type: "string",
  },
  {
    name: "description",
    title: "Description",
    type: "text",
  },
]

export default {
  name: "tag",
  title: "Tags",
  type: "document",
  icon: RiPriceTag3Line,
  fields: createLocaleDocument(tagFields),
  preview: {
    select: {
      title: "no.title",
    },
  },
};
