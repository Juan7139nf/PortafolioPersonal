import { FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";

export default function Portafolio() {
  return (
    <div
      className="bg-white mx-auto shadow flex"
      style={{ width: "816px", height: "1056px" }}
    >
      {/* Columna izquierda */}
      <div className="w-1/3 rounded-tl-[130] rounded-br-[70] p-6 text-white bg-gradient-to-bl from-[#0a0a29] via-[#131359] to-[#583576]">
        {/* Foto */}
        <div className="my-4">
          <img
            src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/21/Winter_Soldier_Infobox.jpg"
            alt="Foto de perfil"
            className="rounded-full w-50 h-50 mx-auto object-cover"
          />
        </div>

        {/* Perfil */}
        <div className="mb-4">
          <h2 className="text-blue-400 font-bold uppercase">Perfil</h2>
          <p className="text-sm text-justify">
            Estudiante de Ingeniería de Sistemas apasionado por la tecnología y
            desarrollo aplicaciones. Tengo conocimientos sólidos en
            programación, bases de datos, desarrollo web y aplicaciones. Busco
            oportunidades para aplicar y ampliar mis habilidades técnicas en
            proyectos reales. Aprendo rápido, soy proactivo, con un fuerte deseo
            de crecer en el campo del desarrollo web y aplicaciones.
          </p>
        </div>

        {/* Contacto */}
        <div className="mb-4">
          <h2 className="text-blue-400 font-bold uppercase">Contacto</h2>
          <div className="text-sm">
            <p className="uppercase font-semibold">Celular</p>
            <p>+591 73495284</p>
          </div>
          <div className="text-sm">
            <p className="uppercase font-semibold">Correo electrónico</p>
            <p>juannerrors.nothing@gmail.com</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">GitHub: Juan7139nf</p>
            <a
              href="https://github.com/Juan7139nf"
              target="_blank"
              className="underline text-blue-300"
            >
              https://github.com/Juan7139nf
            </a>
            <p className="font-semibold">Portafolio: Next</p>
            <a
              href="https://juan7139nf.infinityfreeapp.com/"
              target="_blank"
              className="underline text-blue-300"
            >
              https://juan7139nf.infinityfreeapp.com
            </a>
          </div>
        </div>

        {/* Lenguajes */}
        <div className="mb-4">
          <h2 className="text-blue-400 font-bold uppercase">
            Lenguajes de programación
          </h2>
          <div className="text-sm space-y-1">
            <div className="flex items-center space-x-1">
              <FaJsSquare className="text-yellow-500" />
              <span>JavaScript, </span>
              <FaCss3Alt className="text-sky-500" />
              <span>CSS, </span>
              <FaHtml5 className="text-orange-500"/>
              <span>HTML</span>
            </div>
            <div>C++</div>
            <div>C#</div>
            <div>PHP</div>
            <div>SQL</div>
            <div>Python</div>
          </div>
        </div>

        {/* Herramientas */}
        <div>
          <h2 className="text-blue-400 font-bold uppercase">Herramientas</h2>
          <p className="text-sm">
            Visual Studio
            <br /> Visual Studio Code
            <br /> Node.js
            <br /> Apache
          </p>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="w-2/3 text-black text-sm bg-white h-full">
        <div className="text-lg text-white font-bold bg-[#0a0a29] p-3 pl-5">
          <h2>Programador - estudiante de Ingeniería de Sistemas</h2>
        </div>
        <div className="text-black bg-[#0a0a29]">
          <div className="bg-white p-5 pb-2 rounded-tl-[50]">
            <h1 className="text-3xl font-bold uppercase">
              Juan Nicolas Flores Delgado
            </h1>
          </div>
        </div>
        <div className="p-5 pt-2">
          {/* Formación académica */}
          <div className="mb-4">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Formación académica
            </h3>
            <p>
              <strong>Ingeniería de Sistemas (UPDS-Tarija)</strong> Febrero 2022
              - Actual
            </p>
            <p className="text-justify">
              Como estudiante de Ingeniería de Sistemas he adquirido
              conocimientos en desarrollo de software, bases de datos,
              estructuras de datos, redes y metodologías ágiles. Me apasiona
              resolver problemas con lógica y crear soluciones tecnológicas
              eficientes.
            </p>
          </div>

          {/* Actividades extracurriculares */}
          <div className="mb-4">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Actividades Extracurriculares
            </h3>
            <p>
              <strong>ICPC (Competencias de programación)</strong> Enero 2023 -
              Junio 2024
            </p>
            <p className="text-justify">
              Estuve en ese club de programación por un año y medio. Participe
              en la competencias de programación ICPC representando a
              UPDS-Tarija.
            </p>
          </div>

          {/* Experiencia laboral */}
          <div className="mb-4">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Experiencia laboral
            </h3>
            <p>
              <strong>
                Concejo Municipal de Tarija (Fondo Editorial del Concejo
                Municipal de Tarija)
              </strong>{" "}
              Septiembre 2024 - Diciembre 2024
            </p>
            <p className="text-justify">
              Realicé mi práctica profesional, donde colaboré en el
              mantenimiento y mejora de una biblioteca virtual. Me encargué de
              realizar arreglos y correcciones en el sistema utilizando
              tecnologías como Angular y PHP.
            </p>
          </div>

          {/* Enfoque y actitud */}
          <div className="mb-2">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Enfoque y Actitud
            </h3>
            <p className="text-justify">
              He desarrollado varios proyectos en la universidad, principalmente
              en desarrollo web, bases de datos, asi como algunos juegos. Mi
              enfoque es aprender constantemente, esforzándose por mejorar y
              resolver problemas a través de la práctica y la perseverancia.
            </p>
          </div>

          {/* Frameworks */}
          <div className="mb-2">
            <h2 className="font-bold uppercase">Frameworks</h2>
            <p className="text-sm">
              React, Next, Laravel, NET MAUI Blazor, Angular, Django, ASP.NET
            </p>
          </div>

          {/* Librerias */}
          <div className="mb-2">
            <h2 className="font-bold uppercase">Librerias</h2>
            <p className="text-sm">
              React, Next, Laravel, NET MAUI Blazor, Angular, Django, ASP.NET
            </p>
          </div>

          {/* Bases de Datos */}
          <div className="mb-2">
            <h2 className="font-bold uppercase">Bases de Datos</h2>
            <p className="text-sm">
              MySQL, SQL Server Management Studio, PostgreSQL, ORACLE
            </p>
          </div>

          {/* Otros */}
          <div className="mb-4">
            <h2 className="font-bold uppercase">Otros</h2>
            <p className="text-sm">
              MySQL, SQL Server Management Studio, PostgreSQL, ORACLE
            </p>
          </div>

          {/* Conocimientos con barras */}
          <div>
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Conocimientos
            </h3>
            {[
              { label: "Desarrollo Web", percent: 45 },
              { label: "Base de Datos", percent: 25 },
              { label: "Back-end", percent: 60 },
              { label: "Front-end", percent: 80 },
            ].map((item, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{item.label}</p>
                <div className="w-full bg-gray-200 h-5 rounded">
                  <div
                    className="h-5 bg-blue-500 rounded"
                    style={{ width: `${item.percent}%` }}
                  >
                    <span className="pl-3 text-white font-bold">
                      {item.percent} %
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
