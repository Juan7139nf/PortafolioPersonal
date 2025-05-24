import { BiLogoPostgresql, BiSolidData } from "react-icons/bi";
import { FaJsSquare, FaCss3Alt, FaHtml5, FaLaravel, FaAngular, FaIcons } from "react-icons/fa";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { RiFirebaseFill, RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiPhp, SiXampp, SiGodotengine, SiNextdotjs, SiBlazor, SiDjango, SiDotnet, SiJquery, SiTailwindcss, SiReactbootstrap, SiBootstrap, SiSocketdotio, SiMysql, SiOracle, SiCpanel, SiBlender, SiPhotopea, SiPostman } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbBrandThreejs } from "react-icons/tb";
import { IconPythonManual } from "./iconos";

export default function Portafolio() {
  return (
    <div
      className="bg-white mx-auto shadow flex"
      style={{ width: "816px", height: "1056px" }}
    >
      {/* Columna izquierda */}
      <div className="w-1/3 rounded-tl-[130] rounded-br-[70] p-6 text-white bg-gradient-to-bl from-[#0a0a29] via-[#151539] to-[#171726] m-0">
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
          <p className="text-sm text-justify leading-4">
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
          <div className="text-sm leading-4 mb-1.5">
            <p className="uppercase font-semibold">Celular</p>
            <p>+591 73495284</p>
          </div>
          <div className="text-sm leading-4 mb-1.5">
            <p className="uppercase font-semibold">Correo electrónico</p>
            <p>juannerrors.nothing@gmail.com</p>
          </div>
          <div className="text-sm leading-4">
            <p className="font-semibold">GitHub: Juan7139nf</p>
            <a
              href="https://github.com/Juan7139nf"
              target="_blank"
              className="underline text-blue-300"
            >
              https://github.com/Juan7139nf
            </a>
            <p className="font-semibold mt-1.5">Portafolio: Next</p>
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
          <div className="space-y-1 leading-5">
            <div className="flex items-center space-x-1">
              <FaJsSquare className="text-yellow-400 text-xl" />
              <span>JavaScript, </span>
              <FaCss3Alt className="text-sky-500 text-xl" />
              <span>CSS, </span>
              <FaHtml5 className="text-orange-500 text-xl" />
              <span>HTML</span>
            </div>
            <div className="flex items-center space-x-1">
              <TbBrandCpp className="text-sky-500 text-xl" />
              <span>C++</span>
            </div>
            <div className="flex items-center space-x-1">
              <TbBrandCSharp className="text-purple-500 text-xl" />
              <span>C#</span>
            </div>
            <div className="flex items-center space-x-1">
              <SiPhp className="text-blue-500 text-xl" />
              <span>PHP</span>
            </div>
            <div className="flex items-center space-x-1">
              <BiSolidData className="text-yellow-300 text-xl" />
              <span>SQL</span>
            </div>
            <div className="flex items-center space-x-1">
              <IconPythonManual className="text-xl" />
              <span>Python</span>
            </div>
            <div className="flex items-center space-x-1">
              <SiGodotengine className="text-blue-400 text-xl" />
              <span>GDScript</span>
            </div>
          </div>
        </div>

        {/* Herramientas */}
        <div>
          <h2 className="text-blue-400 font-bold uppercase">Herramientas</h2>
          <div className="space-y-1 leading-5">
            <div className="flex items-center space-x-1 ml-1">
              <VscVscode className="text-sky-400 text-xl" />
              <span>Visual Studio Code</span>
            </div>
            <div className="flex items-center space-x-1">
              <DiVisualstudio className="text-purple-600 text-2xl" />
              <span>Visual Studio</span>
            </div>
            <div className="flex items-center space-x-1 ml-1">
              <RiNodejsLine className="text-lime-600 text-xl" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-1 ml-1">
              <SiXampp className="text-orange-400 bg-white rounded text-xl" />
              <span>Xampp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="w-2/3 text-black text-sm bg-white h-full m-0">
        <div className="text-lg text-white font-bold bg-[#0a0a29] p-3 pl-5 m-0">
          <h2>Programador - estudiante de Ingeniería de Sistemas</h2>
        </div>
        <div className="text-black bg-[#0a0a29] m-0 p-0">
          <div className="bg-white p-3 pb-1 rounded-tl-[45] m-0">
            <h1 className="text-5xl font-bold uppercase font-mono text-center leading-9 px-5">
              Juan Nicolas Flores Delgado
            </h1>
          </div>
        </div>
        <div className="p-5 pt-2 m-0">
          {/* Formación académica */}
          <div className="mb-4">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Formación académica
            </h3>
            <div className="leading-4">
              <p>
                <strong>Ingeniería de Sistemas (UPDS-Tarija)</strong> Febrero
                2022 - Actual
              </p>
              <p className="text-justify">
                Como estudiante de Ingeniería de Sistemas he adquirido
                conocimientos en desarrollo de software, bases de datos,
                estructuras de datos, redes y metodologías ágiles. Me apasiona
                resolver problemas con lógica y crear soluciones tecnológicas
                eficientes.
              </p>
            </div>
          </div>

          {/* Actividades extracurriculares */}
          <div className="mb-4">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Actividades Extracurriculares
            </h3>
            <div className="leading-4">
              <p>
                <strong>ICPC (Competencias de programación)</strong> Enero 2023
                - Junio 2024
              </p>
              <p className="text-justify">
                Estuve en ese club de programación por un año y medio. Participe
                en la competencias de programación ICPC representando a
                UPDS-Tarija.
              </p>
            </div>
          </div>

          {/* Experiencia laboral */}
          <div className="mb-4">
            <h3 className="font-bold uppercase border-b border-gray-400 mb-1">
              Experiencia laboral
            </h3>
            <div className="leading-4">
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
          </div>

          {/* Enfoque y actitud */}
          <div className="mb-2 leading-4">
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
            <div className="flex items-center space-x-0">
              <RiReactjsLine className="text-sky-400 text-2xl" />
              <span>React, </span>
              <SiNextdotjs className="text-black text-xl ml-1 mr-0.5" />
              <span>Next.js, </span>
              <FaLaravel className="text-orange-700 text-xl ml-1 mr-0.5" />
              <span>Laravel, </span>
              <SiBlazor className="text-purple-900 text-xl ml-1 mr-0.5" />
              <span>NET MAUIBlazor, </span>
              <FaAngular className="text-red-700 text-2xl ml-1 mr-0.5" />
              <span>Angular, </span>
              <SiDjango className="bg-green-800 text-white text-xl p-1 rounded-sm ml-1 mr-0.5" />
              <span>Django, </span>
            </div>
            <div className="flex items-center space-x-0">
              <SiDotnet className="bg-purple-800 text-white text-xl ml-1 mr-0.5 p-0.5 rounded-full" />
              <span>ASP.NET </span>
            </div>
          </div>

          {/* Librerias */}
          <div className="mb-2">
            <h2 className="font-bold uppercase">Librerias</h2>
            <div className="flex items-center space-x-0">
              <SiJquery className="text-blue-600 text-lg ml-1 mr-0.5" />
              <span>jQuery, </span>
              <SiTailwindcss className="text-sky-500 text-xl ml-1 mr-0.5" />
              <span>Tailwind CSS, </span>
              <SiBootstrap className="text-purple-600 text-xl ml-1 mr-0.5" />
              <span>Bootstrap, </span>
              <SiReactbootstrap className="text-sky-500 text-xl ml-1 mr-0.5" />
              <span>React Bootstrap, </span>
            </div>
            <div className="flex items-center space-x-0">
              <SiSocketdotio className="text-black text-xl ml-1 mr-0.5" />
              <span>Socket.IO, </span>
              <RiFirebaseFill className="text-orange-500 text-xl ml-1 mr-0.5" />
              <span>Firebase, </span>
              <FaIcons className="text-black text-xl ml-1 mr-0.5" />
              <span>Icons, </span>
              <TbBrandThreejs className="text-black text-xl ml-1 mr-0.5" />
              <span>Three.js, etc.</span>
            </div>
          </div>

          {/* Bases de Datos */}
          <div className="mb-2">
            <h2 className="font-bold uppercase">Bases de Datos</h2>
            <div className="flex items-center space-x-0">
              <SiMysql className="text-black text-2xl mr-0.5" />
              <span>MySQL, </span>
              <DiMsqlServer className="text-black text-2xl ml-1" />
              <span>SQL Server Management Studio, </span>
              <BiLogoPostgresql className="text-blue-500 text-xl ml-1 mr-0.5" />
              <span>PostgreSQL, </span>
              <SiOracle className="text-red-700 text-xl ml-1 mr-0.5" />
              <span>ORACLE</span>
            </div>
          </div>

          {/* Otros */}
          <div className="mb-2">
            <h2 className="font-bold uppercase">Otros</h2>
            <div className="flex items-center space-x-0">
              <SiCpanel className="text-black text-2xl mr-0.5" />
              <span>cPanel, </span>
              <SiGodotengine className="text-blue-600 text-xl ml-1 mr-0.5" />
              <span>Godot Engine, </span>
              <SiBlender className="text-orange-500 text-xl ml-1 mr-0.5" />
              <span>Blender, </span>
              <SiPostman className="text-orange-600 text-xl ml-1 mr-0.5" />
              <span>Postman, </span>
              <SiPhotopea className="text-sky-500 text-xl ml-1 mr-0.5" />
              <span>Photopea, etc.</span>
            </div>
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
                <div className="w-full bg-gray-200 h-5 rounded-lg">
                  <div
                    className="h-5 bg-blue-500 rounded-lg"
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
