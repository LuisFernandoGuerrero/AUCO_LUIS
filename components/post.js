import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/post.module.css'

export default function Post({ post, user, favoritos, borrarFavorito, agregarFavorito }) {
    const { body, title, id, userId } = post;
    
    const marcarFavorito = () => {
        const postAgregado = {
            id: post.id,
            title,
            body,
            userId,
            usuarioPost: user
        }

        agregarFavorito(postAgregado)
    }

    return (
        <div className='w-full bg-gray-100 relative pb-4'>
            <div>
                <Image src="/img/pajaro.jpg" width={400} height={300} className='w-full h-auto' alt={`Imagen de post llamado ${title}`} />
            </div>
            <div className='pt-4 px-5 md:px-4 py-4'>
                <h4 className={`text-2xl text-gray-700 ${styles.limitLetterTitle}`}>{title}</h4>
                <p className='text-xs text-blue-400 font-black'>
                    Escrito por: {user.map(usuario => (
                        <span key={usuario.id} className='text-gray-700 font-medium'>
                            {` ${usuario.id == userId ? usuario.name : ''}`}
                        </span>
                    )
                    )}
                </p>
                <p className={`text-base text-gray-500 my-3 ${styles.limitLetter}`}>{body}</p>
            </div>
            <div className='grid grid-cols-2'>
                <Link href={`/posts/${id}`} className='no-underline bg-blue-400 text-gray-700 text-center font-medium px-4 py-1 capitalize w-5/6 mx-auto flex items-center justify-center'>ver más</Link>
                <button
                    type='button'
                    className={`flex items-center justify-center text-gray-700 text-center text-xs font-medium px-4 py-1 capitalize w-5/6 mx-auto ${favoritos.some(favoritoState => favoritoState.id === id) ? 'bg-red-400' : 'bg-yellow-400'}`}
                    onClick={() => favoritos.some(favoritoState => favoritoState.id === id) ? borrarFavorito(id) : marcarFavorito()}
                > {favoritos.some(favoritoState => favoritoState.id === id) ? 'Eliminar de favoritos' : 'Agregar a Favoritos'}
                </button>
            </div>
        </div>
    )
}
