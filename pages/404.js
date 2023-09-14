import Link from "next/link";
import Layout from "../components/layout";

export default function Pag404() {
    return (
        <Layout
            title="Página no encontrada"
        >
            <div className="bg-gray-100 h-screen relative">
                <div className="absolute top-[10%] bottom-[2%] left-[2%] right-[2%] md:top-[2%] md:bottom-[10%] md:left-[10%] md:right-[10%] flex justify-center items-center p-12 flex-col gap-5 bg-gray-950 shadow-xl rounded-xl">
                    <h2 className="text-9xl font-black text-white tracking-widest">404</h2>
                    <h4 className="text-2xl font-black text-center bg-white py-2 px-6 rounded-xl">Opps! Página no encontrada</h4>
                    <p className="text-base font-bold text-white text-center ">La página que está intentando buscar no existe. Es posible que haya escrito mal la dirección o que la página se haya movido o eliminado.</p>
                    <Link href="/" className="inline-block bg-white py-2 px-10 rounded-xl font-medium">Volver al Inicio</Link>
                </div>
            </div>
        </Layout>
    )
}
