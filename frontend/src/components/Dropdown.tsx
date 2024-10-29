import { OptionsDropdown } from "./OptionsDropdown";

interface DropdownProps {
    open: boolean;
    onSelect: (option: string) => void;
}

export function Dropdown({ open, onSelect }: DropdownProps) {
    return (
        <div className={`z-10 ${open ? "block" : "hidden"} bg-[#dadada] rounded-md w-40 absolute top-full mt-1 overflow-auto`}>
            <ul className="py-2 text-sm text-gray-700">
                {["pdf", "doc", "docx", "odt", "txt", "rtf"].map(option => (
                    <OptionsDropdown key={option} text={option.toUpperCase()} onSelect={() => onSelect(option)} />
                ))}
            </ul>
        </div>
    );
}