export default function Home() {
    return (
        <div>
            <div className="overflow-hidden">
                <header className="flex flex-col items-center text-white relative w-auto h-screen overflow-hidden">
                <img src="img/habitacion1.jpg" alt="Habitación" className="absolute inset-0 w-full h-full object-cover filter brightness-50 z-0" />
                    <nav className="flex justify-center z-10">
                        <div>
                            <h2 className="font-title text-4xl">Aturias</h2>
                        </div>
                    </nav>
                </header>
            </div>
            <h3>Prueba en tailwindcss</h3>
        </div>
    )
}