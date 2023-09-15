import Image from "next/image";
import Layout from '../../components/layout'
import Comment from "../../components/comment";
import Link from "next/link";

export default function Post({ posts, usuarios, comentarios }) {
    const { body, title, userId } = posts;
    return (
        <Layout
            title={title}
        >
            <div className='w-full bg-gray-100 relative flex flex-col justify-center items-center h-full py-10'>
                <div>
                    <Image src="/img/pajaro.jpg" width={400} height={300} className='w-full h-auto' alt={`Imagen de post llamado ${title}`} />
                </div>
                <div className='pt-4 px-5 py-4 md:w-3/5'>
                    <h4 className={`text-4xl text-gray-700 capitalize`}>{title}</h4>
                    <p className='text-xs text-blue-400 font-black mb-4'>
                        Escrito por: {usuarios.map(usuario => (
                            <span key={usuario.id} className='text-gray-700 font-medium'>
                                {` ${usuario.id == userId ? usuario.name : ''}`}
                            </span>
                        )
                        )}
                    </p>
                    <p className={`text-lg text-gray-500 my-3`}>{body}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <Link href={"/"} className='no-underline inline-block bg-blue-400 text-gray-700 font-medium px-4 py-1 capitalize text-center'>Volver a la página de inicio</Link>
                    <Link href={"/"} className='no-underline inline-block bg-blue-400 text-gray-700 font-medium px-4 py-1 capitalize text-center'>Marcar como favorito</Link>
                </div>
                <div className="my-10 w-11/12 md:w-4/6 h-auto p-7 md:p-10 bg-gray-700 rounded-xl">
                    <div className="text-white">
                        <h4 className="text-xl md:text-2xl font-black text-white">{comentarios.length} comentarios</h4>
                        {
                            comentarios.map(comentario => (
                                <Comment
                                    key={comentario.id}
                                    comment={comentario}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

// Consultando con getStaticPaths y getStaticProps
/* En este caso hago uso de este metodo ya que es mejor para esta API; Debido a que existe 
routing dinamico*/
export async function getStaticPaths() {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const resultado = await respuesta.json();

    const paths = resultado.map(post => ({
        params: {
            id: String(post.id)
        }
    }))

    return {
        paths,
        fallback: false
    }
}
// Con promise
export async function getStaticProps({ params: { id } }) {
    const respuesta = `https://jsonplaceholder.typicode.com/posts/${id}`
    const respuestaUsuarios = `https://jsonplaceholder.typicode.com/users/`
    const respuestaComentarios = `https://jsonplaceholder.typicode.com/comments?postId=${id}`

    const [resultado, resultadoUsuarios, resultadoComentarios] = await Promise.all([
        fetch(respuesta),
        fetch(respuestaUsuarios),
        fetch(respuestaComentarios)
    ])

    const [posts, usuarios, comentarios] = await Promise.all([
        resultado.json(),
        resultadoUsuarios.json(),
        resultadoComentarios.json()
    ])

    return {
        props: {
            posts,
            usuarios,
            comentarios
        }
    }
}

/* 
// Consultando con getServerSideProps
export async function getServerSideProps({ query: { id } }) {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const resultado = await respuesta.json();

    return {
        props: {
            resultado
        }
    }
}*/