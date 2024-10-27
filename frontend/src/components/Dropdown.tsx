import { OptionsDropdown } from "./OptionsDropdown";

interface DropdownProps {
    open: boolean;
}

export function Dropdown({ open }: DropdownProps) {
    return (
        <div className={`z-10 ${open ? "block" : "hidden"} bg-[#dadada] divide-y divide-slate-900 rounded-md w-40 dark:bg-[#c6c6c6] absolute top-full mt-1 overflow-auto`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-[#262626]" aria-labelledby="dropdownRightButton">
                <OptionsDropdown text="PDF" />
                <OptionsDropdown text="DOC" />
                <OptionsDropdown text="DOCX" />
                <OptionsDropdown text="ODT" />
                <OptionsDropdown text="TXT" />
                <OptionsDropdown text="RTF" />
            </ul>
        </div>
    );
}