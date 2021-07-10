import { useState } from "react";
//import styles from "../styles/sectionMenu.module.scss";

interface SectionMenuProps {
  sectionHeadings: SectionType[];
  scrollTo: Function;
}

type SectionType = {
  heading: string;
  ref: any;
};

const SectionMenu = ({ sectionHeadings, scrollTo }: SectionMenuProps) => {
  const [activeSection, setActiveSection] = useState(
    sectionHeadings[0].heading
  );
  const handleClick = (index) => {
    scrollTo(sectionHeadings[index].ref);
    setActiveSection(sectionHeadings[index].heading);
  };
  return (
    <div className="sectionMenu">
      <ul>
        {sectionHeadings.map((heading, i) => (
          <li
            className={
              sectionHeadings[i].heading == activeSection
                ? "selected"
                : undefined
            }
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <h4>{activeSection}</h4>
    </div>
  );
};

export default SectionMenu;
