import { RiLink } from "react-icons/Ri";
import { VscLink } from "react-icons/vsc";

export default {
  name: "simpleLink",
  title: "Link",
  type: "object",
  icon: RiLink,
  fields: [
    {
      name: "title",
      title: "Label",
      type: "string",
    },
    {
      name: "href",
      title: "Link (full path)",
      type: "string",
    },
  ],
};
