import React, { useState, useEffect } from 'react'

export default function NavBar() {
    const [viewNav, setViewNav] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 750 ? setViewNav(true) : setViewNav(false);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className="flex justify-center flex-col lg:w-6/12 md:w-8/12 mb-3 w-full bg-black md:bg-transparent fixed md:relative md:block">
            <div className="container flex justify-between md:justify-center items-center px-4 py-4 mx-auto bg-transparent">
                <div className="text-center">
                    <h3 className="font-title text-3xl">Asturias</h3>
                </div>
                <div class="flex md:hidden h-full justify-center items-center" onClick={() => setViewNav(!viewNav)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </div>
            {viewNav && <div className="flex md:flex-row flex-col justify-around bg-black md:bg-transparent w-full">
                <div className="text-center"><a href="#">Sobre nosotros</a> </div>
                <div className="text-center"><a href="#">Amenities</a></div>
                <div className="text-center"><a href="#">Galeria</a></div>
                <div className="text-center"><a href="#">Packages</a></div>
                <div className="text-center"><a href="#">Contactanos</a></div>
            </div>}
        </nav>
    )
}
