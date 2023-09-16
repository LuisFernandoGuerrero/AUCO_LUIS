
import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const favoritosLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favoritos')) ?? [] : []
  const [favoritos, setFavoritos] = useState(favoritosLS)
  const [paginaLista, setPaginaLista] = useState(false)


  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  const agregarFavorito = favorito => {
    if (favoritos.some(favoritoState => favoritoState.id === favorito.id)) {
      return;
    }
    setFavoritos([...favoritos, favorito])
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }

  const borrarFavorito = id => {
    const favoritoActualizado = favoritos.filter(post => post.id != id)
    setFavoritos(favoritoActualizado)
    window.localStorage.setItem('favoritos', JSON.stringify( favoritos ))
  }

  return paginaLista ? <Component {...pageProps}
    favoritos={favoritos}
    agregarFavorito={agregarFavorito}
    borrarFavorito={borrarFavorito}
  /> : null
}

export default MyApp
