import { useState } from "react";
import { Dropdown } from "./Dropdown";

export function ButtonDropdown({ onOptionChange }: { onOptionChange: (option: string) => void }) {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const toggleOpenDropdown = () => {
        setOpen(!open);
    }

    const handleOptionSelect = (option: string) => { //Recebe a option como argumento
        setSelectedOption(option); //Atualiza com o valor da option escolhida
        onOptionChange(option); // Notifica o componente pai com a option escolhida
        setOpen(false); // Fecha o dropdown
    }

    return (
        <div className="flex flex-col items-center relative py-5">
            <button
                role="menu"
                onClick={toggleOpenDropdown}
                className="text-white bg-[#262626] hover:bg-[#343434] focus:ring-2 focus:outline-none focus:ring-slate-700 font-medium rounded-lg text-md w-40 h-12 text-center inline-flex items-center justify-center dark:bg-[#dadada] dark:hover:bg-[#c6c6c6] dark:focus:ring-slate-300 dark:text-[#262626]"
                type="button">
                {selectedOption?.toUpperCase() || "..."}
                <svg className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <Dropdown open={open} onSelect={handleOptionSelect} />
        </div>
    )
}