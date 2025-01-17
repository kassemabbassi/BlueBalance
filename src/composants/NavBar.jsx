import React from 'react'

export default function NavBar() {
    return (
        <nav className="rounded-lg bg-transparent !fixed top-0 shadow-lg backdrop-blur-md w-full navbar  !z-50">
            <div className="bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="h-[48px] flex items-center space-x-3 rtl:space-x-reverse  transition-transform duration-300 hover:scale-105">
                    <img src="MenuLogo.png" className=" rounded-lg h-[48px] w-fit" alt="Flowbite Logo" />
                </a>
            </div>
        </nav>
    )
}
