import { useState } from "react";
//import styles from "../styles/sectionMenu.module.scss";

interface SectionMenuProps {
  sectionHeadings: string[];
}

const SectionMenu = ({ sectionHeadings }: SectionMenuProps) => {
  const [activeSection, setActiveSection] = useState(sectionHeadings[0]);
  return (
    <div className="sectionMenu">
      <ul>
        {sectionHeadings.map((heading, i) => (
          <li
            className={
              sectionHeadings[i] == activeSection ? "selected" : undefined
            }
            onClick={() => setActiveSection(sectionHeadings[i])}
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
