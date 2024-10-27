import { useState } from "react";
import { Dropdown } from "./Dropdown";

export function ButtonDropdown() {
    const [open, setOpen] = useState(false);

    const toggleOpenDropdown = () => {
        setOpen(!open);
    }

    return (
        <div className="flex flex-col items-center relative py-5">
            <button
                onClick={toggleOpenDropdown}
                className="text-white bg-[#262626] hover:bg-[#343434] focus:ring-2 focus:outline-none focus:ring-slate-700 font-medium rounded-lg text-md px-16 py-3 text-center inline-flex items-center dark:bg-[#dadada] dark:hover:bg-[#c6c6c6] dark:focus:ring-slate-300 dark:text-[#262626]"
                type="button">
                ...
                <svg className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <Dropdown open={open} />
        </div>
    );
}