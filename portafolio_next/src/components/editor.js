import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import hljs from "highlight.js";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

export default function Editor() {
  const [value, setValue] = useState("");
  const editorRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
          syntax: { hljs },
        },
        placeholder: "Escribe algo...",
      });

      // Opcional: Puedes guardar el valor al escribir
      quill.on("text-change", () => {
        const editor = quill.root.cloneNode(true);
        editor.querySelectorAll(".ql-ui").forEach((el) => el.remove()); 

        const contenido = editor.innerHTML;
        console.log(contenido);
        setValue(contenido);
      });
    }
  }, [isClient]);

  return <div style={{ height: "300px" }} ref={editorRef}></div>;
}
