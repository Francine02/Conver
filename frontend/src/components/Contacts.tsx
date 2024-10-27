interface ContactsProps {
    github: string;
    name: string;
    linkedin: string;
}

export function Contacts({github, name, linkedin} : ContactsProps) {
    return (
        <>
            <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000" alt="Github" className="w-8" />
                    - {name}
                </a>
            </li>
            <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000" alt="Github" className="w-8" />

                    - {name}
                </a>
            </li>
        </>
    )
}