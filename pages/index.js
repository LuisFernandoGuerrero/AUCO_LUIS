import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import Link from 'next/link';

export default function Home({ resultados, resultadoUsuarios, favoritos, borrarFavorito, agregarFavorito }) {

  const paginadorLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('paginaActual')) ?? 1 ?? localStorage.removeItem('paginaActual') : []

  const [paginaActual, setPaginaActual] = useState(paginadorLS);
  const postPorPagina = 9;

  const ultimaPagina = paginaActual * postPorPagina;
  const primerPagina = ultimaPagina - postPorPagina;

  const posts = resultados.slice(primerPagina, ultimaPagina)
  const numeroPagina = Math.ceil(resultados.length / postPorPagina)

  const numeros = [...Array(numeroPagina + 1).keys()].slice(1)

  useEffect(() => {
    localStorage.setItem('paginaActual', JSON.stringify(paginaActual))
  }, [paginaActual])

  function paginaAnterior() {
    if (paginaActual !== primerPagina) {
      setPaginaActual(paginaActual - 1)
      return
    }

    setPaginaActual(paginaActual)

  }
  function paginaSiguiente() {
    if (paginaActual !== ultimaPagina) {
      setPaginaActual(paginaActual + 1)
      return;
    }
  }

  function cambiarNumeroPagina(numero) {
    setPaginaActual(numero)
  }

  return (
    <Layout
      title={'Inicio'}
      description={'Blog posts prueba tecnica Auco'}
    >
      <div className='w-4/5 mx-auto'>
        <div className='text-center my-4 mx-auto'>
          <h1 className='uppercase font-black text-blue-950 text-3xl'>lista de posts</h1>
        </div>
        <article className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto my-8'>
          {posts.map(resultado => (
            <Post
              key={resultado.id}
              post={resultado}
              user={resultadoUsuarios}
              favoritos={favoritos}
              borrarFavorito={borrarFavorito}
              agregarFavorito={agregarFavorito}
            />
          ))}
        </article>
      </div>
      <nav className='w-full mx-auto flex justify-center py-4 border-t-[1px]'>
        <Link href="" className={`relative cursor-pointer  items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex ${numeros[0] === paginaActual ? 'pointer-events-none cursor-default ' : 'cursor-pointer text-gray-900'} text-gray-300`} onClick={paginaAnterior}>Anterior</Link>
        {
          numeros.map(numero => (
            <Link key={numero} href={""} className={`relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ${paginaActual === numero ? 'bg-blue-400' : 'ring-gray-300'} hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex`} onClick={() => cambiarNumeroPagina(numero)}>{numero}</Link>
          ))
        }
        {
          <Link href={""} className={`relative md:hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset bg-blue-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}>{Number(numeros[0])}</Link>
        }
        {
          <Link href={""} className={`relative md:hidden pointer-events-none cursor-default items-center px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-gray-300`}>{paginaActual}</Link>
        }
        {
          <Link href={""} className={`relative md:hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset bg-blue-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}>{paginaActual === numeros.length ? paginaActual : paginaActual + 1}</Link>
        }
        <Link href="" className={`relative items-center px-4 py-2 text-sm font-bold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex ${numeros.length === paginaActual ? 'pointer-events-none cursor-default text-gray-300' : 'cursor-pointer text-gray-900'}`} onClick={paginaSiguiente}>Siguiente</Link>
      </nav>
    </Layout>
  )
}

// Sin Promise 
export async function getStaticProps() {
  const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const resultados = await respuesta.json();

  const respuestaUsuarios = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const resultadoUsuarios = await respuestaUsuarios.json()

  return {
    props: {
      resultados,
      resultadoUsuarios
    }
  }
}