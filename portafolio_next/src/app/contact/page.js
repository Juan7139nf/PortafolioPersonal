"use client";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import('@/components/editor'), {
  ssr: false, // <- desactiva SSR
});

export default function Contact() {
  return (
    <>
      <main className="p-8">
        <h1 className="text-2xl font-bold">Contacto</h1>
        <p>Esta es la página de contacto.</p>
        <Editor />
      </main>
    </>
  );
}
