"use client";

import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/animate-ui/buttons/copy";

function CodeEditor({
  children: code,
  lang = "javascript",
  themes = { light: "github-light", dark: "github-dark" },
  duration = 5,
  delay = 0,
  className = "",
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
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, lang]);

  return (
    <div
      className={cn(
        "relative w-full max-w-[150vh] border border-gray-900 overflow-hidden flex flex-col rounded-xl mx-auto",
        className
      )}
      {...props}
    >
      {header && (
        <div className="bg-gray-900 border border-gray-900 flex items-center justify-between h-10 px-4 relative">
          {dots && (
            <div className="flex gap-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-300" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          )}

          {title && (
            <div
              className={cn(
                "flex items-center gap-2",
                dots && "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              )}
            >
              {icon && (
                <div className="text-muted-foreground [&_svg]:size-3.5">
                  {typeof icon === "string" ? (
                    <span dangerouslySetInnerHTML={{ __html: icon }} />
                  ) : (
                    icon
                  )}
                </div>
              )}
              <figcaption className="truncate text-muted-foreground text-[13px]">
                {title}
              </figcaption>
            </div>
          )}

          {copyButton && (
            <CopyButton
              aria-label="Copiar código"
              content={code}
              size="sm"
              variant="ghost"
              className="-me-2 bg-transparent hover:bg-white/10"
              onCopy={onCopy}
            />
          )}
        </div>
      )}

      {!header && copyButton && (
        <CopyButton
          aria-label="Copiar código"
          content={code}
          size="sm"
          variant="ghost"
          className="absolute right-5 top-2 z-[2] backdrop-blur-md bg-transparent hover:bg-white/10"
          onCopy={onCopy}
        />
      )}

      <div className="not-prose rounded-lg ring-1 ring-white/5">
        <div className="max-h-[500px] overflow-auto">
          <pre className="m-0 text-sm leading-relaxed font-mono min-w-fit">
            <code ref={codeRef} className={`language-${lang} block`}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export { CodeEditor };
