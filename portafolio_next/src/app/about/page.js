"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function About() {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const code = `export default function About() {
    const codeRef = useRef(null);
  
    useEffect(() => {
      hljs.highlightAll();
    }, []);
`;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Acerca de</h1>
      <p>Esta es la página de información.</p>

      <pre>
        <code ref={codeRef} className="language-javascript">
          {code}
        </code>
      </pre>

      <button onClick={log}>Log editor content</button>
      <Editor
        apiKey="2v7iblb0193k1wfcb0531muzux0gzydggbdo0srm2ax96ln2"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: "textarea#open-source-plugins",
          height: 600,
          plugins: [
            "advcode",
            "anchor",
            "autolink",
            "autosave",
            "charmap",
            "code",
            "codesample",
            "directionality",
            "emoticons",
            "fullscreen",
            "help",
            "image",
            "importcss",
            "link",
            "lists",
            "media",
            "pagebreak",
            "preview",
            "quickbars",
            "save",
            "searchreplace",
            "table",
            "visualblocks",
            "visualchars",
            "wordcount",
            "insertdatetime",
          ],
          toolbar:
            "undo redo | blocks fontselect fontsizeselect | bold italic underline strikethrough | " +
            "link image media | alignleft aligncenter alignright alignjustify | " +
            "outdent indent | numlist bullist | table | " +
            "code preview fullscreen | forecolor backcolor | emoticons charmap | " +
            "insertdatetime anchor pagebreak",

          menubar: "file edit view insert format tools table help",
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
          skin: "oxide-dark",
          content_css: "dark",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        }}
      />
    </main>
  );
}
