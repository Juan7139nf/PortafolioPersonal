"use client";

import {
  CodeEditorDemo,
  CodeEditorDemoTabs,
  EnterButtonDemas,
  HomePresentacion,
} from "@/components/interfaces/sectionHome";
import AnimatedList from "@/scripts/animations/reactbits/animatedList";

export default function Home() {
  return (
    <AnimatedList
      onItemSelect={(item, index) => console.log("Seleccionado:", index)}
    >
      <HomePresentacion />
      <div className="px-3">
        <EnterButtonDemas />
      </div>
      <div className="px-5">
        <CodeEditorDemo />
      </div>
      <div className="px-5">
        <CodeEditorDemoTabs />
      </div>
    </AnimatedList>
  );
}
