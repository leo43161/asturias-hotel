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
            <section className="container mx-auto px-5 pb-20">
                <div className="text-center py-24">
                    <h3 className="text-4xl font-title">Sobre nosotros</h3>
                    <h4>Te garantizamos una satisfacion inmediata</h4>
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex w-3/6">
                        <img src="img/nosotros1.jpg" className="shadow-[0_10px_80px_5px_rgba(0,0,0,0.3)]" alt="" />
                    </div>
                    <div className="w-3/6 ">
                        <h2 className="text-2xl mb-4">10 años empleados en servir un excelente servicion</h2>
                        <h3 className="mb-4 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem recusandae soluta iste a nobis quia praesentium voluptate, velit impedit?</h3>
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos ea commodi repudiandae officiis vel, quibusdam veritatis unde, quidem voluptate fugiat at recusandae! Eius nihil illo magni itaque hic obcaecati. Nesciunt quam veniam iusto quia fugit, ipsum sunt facere, aliquam nobis maiores optio molestias at, nisi repellendus facilis explicabo neque accusantium quisquam saepe amet culpa fugiat voluptatum laborum.  </p>
                    </div>
                </div>
            </section>
        </div>
    )
}