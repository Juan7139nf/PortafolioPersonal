import RotatingText from "@/scripts/animations/reactbits/rotatingText";
import TrueFocus from "@/scripts/animations/reactbits/trueFocus";
import ThemeInicio from "@/scripts/customs/themeInicio";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";

export function HomePresentacion() {
  return (
    <div className=" pt-50 bg-gradient-to-bl from-[#ffffff] via-[#ffcb3a] to-[#fab700] dark:from-[#0a0a29] dark:via-[#131359] dark:to-[#583576] overflow-hidden">
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
      header={false}
    >
      {`"use client";

import * as React from "react";
import hljs from "highlight.js";
import { useInView } from "motion/react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/animate-ui/buttons/copy";

function CodeEditor({
  children: code,
  lang,

  themes = {
    light: "github-light",
    dark: "github-dark",
  },

  duration = 5,
  delay = 0,
  className,
  header = true,
  dots = true,
  icon,
  cursor = false,
  inView = false,
  inViewMargin = "0px",
  inViewOnce = true,
  copyButton = false,
  writing = true,
  title,
  onDone,
  onCopy,
  ...props
}) {
  const codeRef = React.useRef(null);

  React.useEffect(() => {
    hljs.highlightAll();
  }, []);

  const { resolvedTheme } = useTheme();

  const editorRef = React.useRef(null);
  const [visibleCode, setVisibleCode] = React.useState("");
  const [highlightedCode, setHighlightedCode] = React.useState("");
  const [isDone, setIsDone] = React.useState(false);

  const inViewResult = useInView(editorRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;

  React.useEffect(() => {
    if (!visibleCode.length || !isInView) return;

    const loadHighlightedCode = async () => {
      try {
        const { codeToHtml } = await import("shiki");

        const highlighted = await codeToHtml(visibleCode, {
          lang,
          themes: {
            light: themes.light,
            dark: themes.dark,
          },
          defaultColor: resolvedTheme === "dark" ? "dark" : "light",
        });

        setHighlightedCode(highlig
    };

    loadHighlightedCode();
  }, [
    lang,
    themes,
    writing,
    isInView,
    duration,
    delay,
    visibleCode,
    resolvedTheme,
  ]);

  React.useEffect(() => {
    if (!writing) {
      setVisibleCode(code);
      onDone?.();
      return;
    }

    if (!code.length || !isInView) return;

    const characters = Array.from(code);
    let index = 0;
    const totalDuration = duration * 1000;
    const interval = totalDuration / characters.length;
    let intervalId;

    const timeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < characters.length) {
          setVisibleCode((prev) => {
            const currentIndex = index;
            index += 1;
            return prev + characters[currentIndex];
          });
          editorRef.current?.scrollTo({
            top: editorRef.current?.scrollHeight,
            behavior: "smooth",
          });
        } else {
          clearInterval(intervalId);
          setIsDone(true);
          onDone?.();
        }
      }, interval);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);
    };
  }, [code, duration, delay, isInView, writing, onDone]);

  return (
    <div
      data-slot="code-editor"
      className={cn(
        "relative bg-muted/50 w-[600px] h-[400px] border border-border overflow-hidden flex flex-col rounded-xl",
        className
      )}
      {...props}
    >
      {header ? (
        <div className="bg-muted border-b border-border/75 dark:border-border/50 relative flex flex-row items-center justify-between gap-y-2 h-10 px-4">
          {dots && (
            <div className="flex flex-row gap-x-2">
              <div className="size-2 rounded-full bg-red-500"></div>
              <div className="size-2 rounded-full bg-yellow-500"></div>
              <div className="size-2 rounded-full bg-green-500"></div>
            </div>
          )}

          {title && (
            <div
              className={cn(
                "flex flex-row items-center gap-2",
                dots &&
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              )}
            >
              {icon ? (
                <div
                  className="text-muted-foreground [&_svg]:size-3.5"
                  dangerouslySetInnerHTML={
                    typeof icon === "string" ? {: icon } : undefined
                  }
                >
                  {typeof icon !== "string" ? icon : null}
                </div>
              ) : null}
              <figcaption className="flex-1 truncate text-muted-foreground text-[13px]">
                {title}
              </figcaption>
            </div>
          )}

          {copyButton ? (
            <CopyButton
              content={code}
              size="sm"
              variant="ghost"
              className="-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
              onCopy={onCopy}
            />
          ) : null}
        </div>
      ) : (
        copyButton && (
          <CopyButton
            content={code}
            size="sm"
            variant="ghost"
            className="absolute right-2 top-2 z-[2] backdrop-blur-md bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
            onCopy={onCopy}
          />
        )
      )}
      <div className="h-[calc(100%-2.75rem)] w-full text-sm font-mono relative overflow-auto flex-1">
        <pre>
          <code ref={codeRef} className=
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

export { CodeEditor };`}
    </CodeEditor>
  );
};
