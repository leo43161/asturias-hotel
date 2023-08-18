import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <div>
            <div className="overflow-hidden">
                <header className="flex flex-col items-center text-white relative w-auto h-screen overflow-hidden">
                    <img src="img/habitacion1.jpg" alt="Habitación" className="absolute inset-0 w-full h-full object-cover filter brightness-50 z-[-100]" />
                    <NavBar></NavBar>
                    <div className="flex-1 w-full flex justify-center items-center">
                        <div>
                            <h1 className="font-title text-6xl text-center mb-3">Asturias</h1>
                            <h3 className="text-2xl text-center font-light mb-5">Veni a disfrutar de una estadia en El mollar con todas las comodidades</h3>
                            <div className="w-full flex justify-center">
                                <button className="px-4 py-2 font-semibold text-base border border-slate-300 rounded-md shadow-sm ring-violet-300 ring-offset-2 ring-offset-slate-50 focus:outline-none focus:ring-2 bg-yellow-700 text-slate-200 border-transparent">
                                    Contactate con nosotros
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <h3>Prueba en tailwindcss</h3>
        </div>
    )
}