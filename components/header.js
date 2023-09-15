import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {
    const root = useRouter();
    return (
        <header className="w-full m-0 py-6 border-b-2">
            <div className="w-11/12 md:w-4/5 mx-auto flex items-center justify-between">
                <Link legacyBehavior href={"/"}>
                    <a>
                        <Image src="/img/logo.svg" width={170} height={30} alt="Logo de Auco" />
                    </a>
                </Link>

                <nav className="flex gap-2 md:gap-8 font-bold text-sm items-center">
                    <Link
                        href={"/"}
                        className={`px-1 py-1 md:px-8 md:py-1 rounded-md border-2 ${root.pathname === '/' ? 'border-blue-400' : ''}`}>Blog</Link>
                    <Link
                        href={"/aboutme"}
                        className={`px-1 py-1 md:px-8 md:py-1 rounded-md border-2 ${root.pathname === '/aboutme' ? 'border-blue-400' : ''}`}>Sobre Mi</Link>
                    
                    <Link href={"/favoritos"}>
                            <Image src={"/img/favorite.svg"} width={0} height={0} className="w-5 h-5" alt={"Logo favoritos"}/>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
