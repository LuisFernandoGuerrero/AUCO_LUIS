import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/post.module.css'

export default function Post({ post, user }) {
    const { body, title, id, userId } = post;
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
            <div>
                <Link href={`/posts/${id}`} className='no-underline inline-block bg-blue-400 text-gray-700 font-medium px-4 py-1 ml-5 capitalize'>ver más</Link>
            </div>
        </div>
    )
}
