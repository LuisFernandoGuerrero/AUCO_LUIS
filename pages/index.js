import Layout from '../components/layout'
import Post from '../components/post'

export default function Home({ resultados, resultadoUsuarios, favoritos, borrarFavorito, agregarFavorito }) {
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
          {resultados.map(resultado => (
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