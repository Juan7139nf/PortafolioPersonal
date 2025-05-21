import { useState } from "react";
import RotatingText from "@/scripts/animations/reactbits/rotatingText";
import TrueFocus from "@/scripts/animations/reactbits/trueFocus";
import ThemeInicio from "@/scripts/customs/themeInicio";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { FaJsSquare } from "react-icons/fa";
import Lightning from "@/scripts/animations/reactbits/lightning";
import { CodeTabs } from "../animate-ui/components/code-tabs";
import { LiquidButton } from "../animate-ui/buttons/liquid";
import Link from "next/link";

export function HomePresentacion() {
  return (
    <div className=" pt-30 bg-gradient-to-bl from-[#ffffff] via-[#ffcb3a] to-[#fab700] dark:from-[#0a0a29] dark:via-[#131359] dark:to-[#583576] overflow-hidden">
      <TrueFocus
        sentence="Juan Nicolas Flores Delgado"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <ThemeInicio />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <span className="uppercase font-mono font-semibold text-xl leading-loose text-gray-900 dark:text-white pb-2">
          programador
        </span>
        <RotatingText
          texts={[
            "Backend",
            "Frontend",
            "Bases_de_datos",
            "Despliegue_y_DevOps_básico",
          ]}
          mainClassName="relative p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 dark:from-green-400 to-orange-400 dark:to-blue-600 group-hover:from-pink-500 dark:group-hover:from-green-400 group-hover:to-orange-400 dark:group-hover:to-blue-600 hover:text-white dark:text-white"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden uppercase font-mono px-5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-xl font-semibold"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className="relative pb-30">
        <svg
          className="absolute bottom-0 w-full h-[50px]"
          viewBox="-1.226 451.7844 501.839 49.6456"
          preserveAspectRatio="none"
        >
          <path
            className="fill-white dark:fill-black"
            fillOpacity="1"
            d="M -1.226 481.821 C -1.226 481.821 13.765 457.308 36.151 456.698 C 73.225 455.687 79.657 489.175 120.711 488.562 C 161.765 487.949 169.399 450.972 189.338 451.798 C 215.384 452.876 240.196 489.788 270.22 490.401 C 300.244 491.014 304.533 472.63 338.848 459.763 C 373.163 446.896 376.226 489.788 402.574 490.4 C 428.922 491.012 435.908 465.072 462.622 465.889 C 487.148 466.639 501.839 486.111 501.839 486.111 L 501.839 501.839 L -1.613 501.839"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export const CodeEditorDemo = () => {
  return (
    <CodeEditor
      cursor
      className=""
      lang="javascript"
      title="component.jsx"
      duration={15}
      delay={0.5}
      copyButton
      header={true}
      icon={<FaJsSquare />}
    >
      {`";`}
    </CodeEditor>
  );
};

export const CodeEditorDemoTabs = () => {
  const codes = {
    Cursor: `// Copy and paste the code into .cursor/mcp.json
  {
    "mcpServers": {
      "shadcn": {
        "command": "npx",
        "args": ["-y", "shadcn@canary", "registry:mcp"],
        "env": {
          "REGISTRY_URL": "https://animate-ui.com/r/registry.json"
        }
      }
    }
  }`,
    Windsurf: `// Copy and paste the code into .codeium/windsurf/mcp_config.json
  {
    "mcpServers": {
      "shadcn": {
        "command": "npx",
        "args": ["-y", "shadcn@canary", "registry:mcp"],
        "env": {
          "REGISTRY_URL": "https://animate-ui.com/r/registry.json"
        }
      }
    }
  }`,
  };
  return <CodeTabs lang="json" codes={codes} />;
};

export const AnimationThunder = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
    </div>
  );
};

export const EnterButtonDemas = () => {
  return (
    <>
      <div className="w-full text-center">
        <Link href="/about">
          <LiquidButton
            className={"font-bold text-5xl sm:text-7xl md:text-9xl pb-3 underline"}
            variant={"design"}
            size={"xl"}
          >
            Entrar
          </LiquidButton>
        </Link>
      </div>
    </>
  );
};
