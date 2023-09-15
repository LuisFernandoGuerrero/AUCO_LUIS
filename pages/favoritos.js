import Layout from '../components/layout'
import Post from '../components/post'

export default function Favoritos({ favoritos, borrarFavorito, agregarFavorito }) {
    return (
        <Layout
            title='Favoritos'>
            <section className='w-4/5 mx-auto'>
                <div className='text-center my-4 mx-auto'>
                    <h1 className='uppercase font-black text-blue-950 text-3xl'>favoritos</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto my-8'>
                    {favoritos.length === 0 ? 'No tienes favoritos' : (
                        favoritos.map(favorito => (
                            <Post
                                key={favorito.id}
                                post={favorito}
                                user={favorito.usuarioPost}
                                favoritos={favoritos}
                                borrarFavorito={borrarFavorito}
                                agregarFavorito={agregarFavorito}
                            />
                        )
                        )
                    )}
                </div>
            </section>

        </Layout>
    )
}
