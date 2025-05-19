"use client";

import { CodeEditorDemo, HomePresentacion } from "@/components/interfaces/sectionHome";
import AnimatedList from "@/scripts/animations/reactbits/animatedList";

export default function Home() {
  return (
    <AnimatedList
      onItemSelect={(item, index) => console.log("Seleccionado:", index)}
    >
      <HomePresentacion />
      <div className="px-5">
        <CodeEditorDemo />
      </div>
      <div>
        <h3 className="text-white">Sección 3</h3>
        <code className="text-gray-300">
          function saludo() {"{ return 'Hola'; }"}
        </code>
      </div>
      <div>
        <h3 className="text-white">Sección 1</h3>
        <pre className="text-gray-300">
          {`const x = 10;
console.log(x);`}
        </pre>
      </div>
      <div>
        <h3 className="text-white">Sección 2</h3>
        <p className="text-gray-300">Esto es una explicación personalizada</p>
      </div>
      <div>
        <h3 className="text-white">Sección 3</h3>
        <code className="text-gray-300">
          function saludo() {"{ return 'Hola'; }"}
        </code>
      </div>
      <div>
        <h3 className="text-white">Sección 1</h3>
        <pre className="text-gray-300">
          {`const x = 10;
console.log(x);`}
        </pre>
      </div>
      <div>
        <h3 className="text-white">Sección 2</h3>
        <p className="text-gray-300">Esto es una explicación personalizada</p>
      </div>
      <div>
        <h3 className="text-white">Sección 3</h3>
        <code className="text-gray-300">
          function saludo() {"{ return 'Hola'; }"}
        </code>
      </div>
      <div>
        <h3 className="text-white">Sección 2</h3>
        <p className="text-gray-300">Esto es una explicación personalizada</p>
      </div>
      <div>
        <h3 className="text-white">Sección 3</h3>
        <code className="text-gray-300">
          function saludo() {"{ return 'Hola'; }"}
        </code>
      </div>
      <div>
        <h3 className="text-white">Sección 1</h3>
        <pre className="text-gray-300">
          {`const x = 10;
console.log(x);`}
        </pre>
      </div>
      <div>
        <h3 className="text-white">Sección 2</h3>
        <p className="text-gray-300">Esto es una explicación personalizada</p>
      </div>
      <div>
        <h3 className="text-white">Sección 3</h3>
        <code className="text-gray-300">
          function saludo() {"{ return 'Hola'; }"}
        </code>
      </div>
      <div>
        <h3 className="text-white">Sección 1</h3>
        <pre className="text-gray-300">
          {`const x = 10;
console.log(x);`}
        </pre>
      </div>
      <div>
        <h3 className="text-white">Sección 2</h3>
        <p className="text-gray-300">Esto es una explicación personalizada</p>
      </div>
      <div>
        <h3 className="text-white">Sección 3</h3>
        <code className="text-gray-300">
          function saludo() {"{ return 'Hola'; }"}
        </code>
      </div>
    </AnimatedList>
  );
}
