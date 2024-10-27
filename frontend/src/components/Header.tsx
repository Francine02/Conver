import { useEffect, useState } from "react"
import logoDark from "../assets/logo-dark.png"
import logoLight from "../assets/logo-light.png"
import dark from "../assets/dark.png"
import light from "../assets/light.png"

export function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])


    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode
            localStorage.setItem('darkMode', newMode.toString())
            return newMode
        })
    }
    return (
        <header className="flex justify-between items-center px-6 sm:px-12 md:px-20 lg:px-24 2xl:px-40 py-3 bg-white dark:bg-black border-b-2 border-[#e9e9e9] dark:border-[#181818]">
            <img
                className="w-12 sm:w-16"
                src={darkMode ? logoDark : logoLight}
                alt="Logo" />
            <button
                onClick={toggleDarkMode}>
                <img
                    className="w-8 sm:w-10"
                    src={darkMode ? light : dark}
                    alt={darkMode ? "Modo claro" : "Modo escuro"} />
            </button>
        </header>
    )
}