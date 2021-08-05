import { RiHome2Line } from "react-icons/Ri";
import createLocaleDocument from "./objects/localeWrapper";

const homeFields =  [
    {
        name: 'title',
        title: 'Page heading',
        type: 'string'
    },
    {
        name: 'subtitle',
        title: 'Sub heading',
        type: 'string'
    }
]

export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: RiHome2Line,
    fields: createLocaleDocument(homeFields),
    preview: {
    
        prepare() {
            return {
              title: 'Home',
            };
          },
      },
}