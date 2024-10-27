interface OptionsDropdownProps {
    text: String;
}

export function OptionsDropdown({text} : OptionsDropdownProps) {
    return (
        <li>
            <a className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{text}</a>
        </li>
    );
}