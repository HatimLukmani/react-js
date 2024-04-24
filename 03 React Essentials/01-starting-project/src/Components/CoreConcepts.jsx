import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";
import CoreSection from "../Components/CoreSection.jsx";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((ele) => (
          <CoreSection {...ele} />
        ))}
      </ul>
    </Section>
  );
}
