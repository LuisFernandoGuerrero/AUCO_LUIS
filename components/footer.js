import Image from "next/image"
import Link from "next/link"


export default function Footer() {
    return (
        <footer className="w-full py-20 border-t-2 bg-blue-950">
            <div className="flex w-11/12 md:w-3/5 mx-auto flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
                <Link legacyBehavior href={"/"}>
                    <a>
                        <Image src="/img/logo.svg" width={170} height={30} alt="Logo de Auco" />
                    </a>
                </Link>
                <p className="text-white font-bold text-sm">Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
}
