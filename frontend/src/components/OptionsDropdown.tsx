interface OptionsDropdownProps {
    text: String;
    onSelect: () => void;
}

export function OptionsDropdown({ text, onSelect }: OptionsDropdownProps) {
    return (
        <li>
            <a type="text" onClick={onSelect} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{text}</a>
        </li>
    );
}