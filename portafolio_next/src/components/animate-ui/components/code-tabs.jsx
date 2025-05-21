"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import hljs from "highlight.js";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsContents,
} from "@/components/animate-ui/components/tabs";
import { CopyButton } from "@/components/animate-ui/buttons/copy";

function CodeTabs({
  codes,
  lang = "bash",

  themes = {
    light: "github-light",
    dark: "github-dark",
  },

  className,
  defaultValue,
  value,
  onValueChange,
  copyButton = true,
  onCopy,
  ...props
}) {
  const { resolvedTheme } = useTheme();

  const [highlightedCodes, setHighlightedCodes] = React.useState(null);
  const [selectedCode, setSelectedCode] = React.useState(
    value ?? defaultValue ?? Object.keys(codes)[0] ?? ""
  );

  React.useEffect(() => {
    const newHighlightedCodes = {};
    for (const [key, val] of Object.entries(codes)) {
      try {
        const result = hljs.highlight(val, { language: lang });
        newHighlightedCodes[key] = result.value;
      } catch (error) {
        newHighlightedCodes[key] = hljs.highlightAuto(val).value;
      }
    }
    setHighlightedCodes(newHighlightedCodes);
  }, [codes, lang]);

  return (
    <Tabs
      data-slot="install-tabs"
      className={cn(
        "relative w-full max-w-[150vh] border border-gray-900 overflow-hidden flex flex-col rounded-xl mx-auto",
        className
      )}
      {...props}
      value={selectedCode}
      onValueChange={(val) => {
        setSelectedCode(val);
        onValueChange?.(val);
      }}
    >
      <TabsList
        data-slot="install-tabs-list"
        className="w-full bg-gray-900 border border-gray-900 flex items-center justify-between h-10 px-4 relative border-b text-current py-0"
        activeClassName="rounded-none shadow-none bg-transparent after:content-[''] after:absolute after:inset-x-0 after:h-1 after:bottom-1 after:bg-emerald-300 after:rounded-full"
      >
        <div className="flex gap-x-3 h-full">
          {highlightedCodes &&
            Object.keys(highlightedCodes).map((code) => (
              <TabsTrigger
                key={code}
                value={code}
                className="text-muted-foreground data-[state=active]:text-emerald-300 px-0"
              >
                {code}
              </TabsTrigger>
            ))}
        </div>

        {copyButton && highlightedCodes && (
          <CopyButton
            aria-label="Copiar código"
            content={codes[selectedCode]}
            size="sm"
            variant="ghost"
            className="-me-2 bg-transparent hover:bg-white/10"
            onCopy={onCopy}
          />
        )}
      </TabsList>
      <TabsContents data-slot="install-tabs-contents">
        {highlightedCodes &&
          Object.entries(highlightedCodes).map(([code, val]) => (
            <TabsContent
              data-slot="install-tabs-content"
              key={code}
              className="w-full text-sm flex items-center overflow-auto"
              value={code}
            >
              <div className="not-prose rounded-lg ring-1 ring-white/5 w-full">
                <div className="max-h-[500px] overflow-auto">
                  <pre className="m-0 text-sm leading-relaxed font-mono min-w-fit">
                    <code
                      className={`hljs language-${lang} block`}
                      dangerouslySetInnerHTML={{ __html: val }}
                    />
                  </pre>
                </div>
              </div>
            </TabsContent>
          ))}
      </TabsContents>
    </Tabs>
  );
}

export { CodeTabs };
