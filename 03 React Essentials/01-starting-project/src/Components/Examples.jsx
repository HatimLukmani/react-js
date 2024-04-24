import ButtonTab from "./ButtonTab.jsx";
import React, { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handelSelect(selectedButton) {
    setTabContent(selectedButton);
    console.log(EXAMPLES[tabContent].title);
  }
  return (
    <Section id="examples" title="Examples">
      {/* <h2></h2> */}
      <Tabs
        // ButtonContainer="menu"
        button={
          <>
            <ButtonTab
              onClick={() => handelSelect("components")}
              isSelected={tabContent === "components"}
            >
              Components
            </ButtonTab>
            <ButtonTab
              onClick={() => handelSelect("jsx")}
              isSelected={tabContent === "jsx"}
            >
              JSX
            </ButtonTab>
            <ButtonTab
              onClick={() => handelSelect("props")}
              isSelected={tabContent === "props"}
            >
              Props
            </ButtonTab>
            <ButtonTab
              onClick={() => handelSelect("state")}
              isSelected={tabContent === "state"}
            >
              State
            </ButtonTab>
          </>
        }
      >
        {!tabContent && <h3>Please select any topic</h3>}
        {tabContent && (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
