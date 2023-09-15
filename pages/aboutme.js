import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";

export default function AboutMe() {
  return (
    <Layout
      title="Sobre Mi"
      description="Página sobre mi donde expresar tus aspiraciones profesionales, tus metas a corto y largo plazo, y cómo crees que tu contribución puede beneficiar a la empresa."
    >
      <div className='w-4/5 mx-auto'>
        <div className='w-4/5 md:w-3/5 text-center my-4 mx-auto'>
          <h1 className='uppercase font-black text-blue-950 text-3xl'>sobre mi - fernando guerrero</h1>
        </div>
        <div className='mx-auto my-8 flex flex-col gap-5'>
          <p>Soy estudiante de Ingeniería de Sistemas en la Universidad ECCI, cursando décimo semestre de mi carrera. Con mis 22 años de edad, estoy comprometido con el mundo de la tecnología y la informática, y me he especializado en el emocionante campo del desarrollo y calidad de software.</p>
          <p>A lo largo de mi carrera universitaria y también de forma autodidacta he adquirido un sólido conjunto de habilidades técnicas y conocimientos teóricos que me han permitido destacar en mi área de interés que es desarrollo web.</p>
          <p>El desarrollo de páginas web y analisis de calidad de software se ha convertido en mi pasión y en mi principal área de experiencia. He trabajado en diversos proyectos propios. Mi conocimiento en lenguajes de programación como HTML, CSS, JavaScript, y mi capacidad para trabajar con frameworks y tecnologías modernas, me han permitido crear experiencias web atractivas y funcionales. Además de mis habilidades técnicas, considero que la creatividad y la atención al detalle son elementos esenciales en el diseño y desarrollo web. Siempre busco la innovación y la usabilidad en mis proyectos, asegurándome de que los usuarios tengan una experiencia óptima.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto text-center">
          <div className="my-4 w-full">
            <h3 className="uppercase font-black text-blue-950 text-xl mb-2 ">Habilidades Técnicas</h3>
            <ul className="mt-2 px-5 py-3">
              <li>Desarrollo de Software</li>
              <li>Programación</li>
              <li>Bases de Datos</li>
              <li>Gestión de Proyectos de Software</li>
              <li>Automatización</li>
            </ul>
          </div>
          <div className="my-4 w-full">
            <h3 className="uppercase font-black text-blue-950 text-xl mb-2">Habilidades Blandas</h3>
            <ul className="mt-2 px-5 py-3">
              <li>Comunicación</li>
              <li>Trabajo en Equipo</li>
              <li>Adaptabilidad</li>
              <li>Liderazgo</li>
              <li>Pensamiento Crítico</li>
            </ul>
          </div>
        </div>

        <div className='w-4/5 md:w-3/5 text-center my-4 mx-auto'>
          <h2 className='uppercase font-black text-blue-950 text-3xl'>Metas - fernando guerrero</h2>
        </div>
        <div className='mx-auto my-8 flex flex-col gap-5'>
          <p><span className="text-blue-400 font-bold">Corto Plazo:</span> Mi principal aspiración es continuar creciendo y desarrollándome en mi carrera, aprovechando cada oportunidad para aprender y crecer en un entorno empresarial dinámico y desafiante. Dentro de esta meta se incluyen adquirir nuevas habilidades y conocimientos relevantes para mi campo, lo que me permitirá contribuir de manera más significativa en mi rol actual y asumir mayores responsabilidades.</p>
          <p><span className="text-blue-400 font-bold">Mediano Plazo:</span> Busco consolidar mi experiencia y convertirme en un líder dentro de mi área. Esto implica no solo alcanzar un alto nivel de competencia técnica, sino también desarrollar habilidades de liderazgo que me permitan guiar a mi equipo hacia el éxito. Esta meta está en curso actualmente debido a que he empezado un posgrado en Gerencias TIC.</p>
          <p><span className="text-blue-400 font-bold">Largo Plazo:</span> Aspiro a desempeñar un papel estratégico en la organización y contribuir de manera significativa a su crecimiento y éxito sostenible. Me gustaría influir en la toma de decisiones clave y participar en proyectos que tengan un impacto positivo en la empresa y en la comunidad en general.</p>
        </div>

        <div className='w-4/5 md:w-3/5 text-center my-4 mx-auto'>
          <h2 className='uppercase font-black text-blue-950 text-3xl'>¿Cómo mi contribución puede beneficiar a la empresa?</h2>
        </div>
        <div className='mx-auto my-8 flex flex-col gap-5'>
          <p>En primer lugar, soy un apasionado por mi trabajo y siempre estoy dispuesto a asumir nuevos desafíos. Mi capacidad para aprender rápidamente y mi enfoque en la resolución de problemas me permiten abordar situaciones complejas de manera efectiva. Además, me esfuerzo por mantenerme al tanto de las tendencias y avances en mi campo, lo que me permite aportar ideas frescas y soluciones innovadoras.</p>
          <p>Por otra parte, considero que la comunicación efectiva y la colaboración son clave para el éxito en cualquier empresa. Estoy comprometido en trabajar de manera colaborativa con mis compañeros y compartir conocimientos y experiencias para fortalecer el equipo. Mi habilidad para liderar y motivar a otros también puede ser un activo valioso en la consecución de los objetivos de la empresa.</p>
        </div>

        <div className='w-4/5 md:w-3/5 text-center my-4 mx-auto'>
          <h2 className='uppercase font-black text-blue-950 text-3xl'>información de contacto</h2>
        </div>
        <div className='mx-auto my-8 flex flex-col gap-4 items-center '>
          <Link href={"https://github.com/LuisFernandoGuerrero"} className="flex flex-col w-auto items-center mx-auto">
            <Image src={"/img/github.svg"} width={30} height={30} alt="contacto github"/>LuisFernandoGuerrero
          </Link>

          <Link href={"https://www.linkedin.com/in/luisfdoguerrerocr/"} className="flex flex-col w-auto items-center mx-auto">
            <Image src={"/img/linkedin.svg"} width={30} height={30} alt="contacto linkedin"/>LuisFernandoGuerrero
          </Link>

          <Link href="mailto:fernandoguerrero.free@gmail.com" className="flex flex-col w-auto items-center mx-auto">
            <Image src={"/img/email.svg"} width={30} height={30} alt="contacto correo"/>fernandoguerrero.free@gmail.com
          </Link>

          <p className="flex flex-col w-auto items-center mx-auto">
            <Image src={"/img/phone.svg"} width={30} height={30} alt="contacto telefono"/>+57 (323) 2453175
          </p>
        </div>
      </div>
    </Layout>
  )
}
