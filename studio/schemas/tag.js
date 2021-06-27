import { RiPriceTag3Line } from "react-icons/Ri";

export default {
  name: "tag",
  title: "Tags",
  type: "document",
  icon: RiPriceTag3Line,
  fields: [
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
  ],
};
