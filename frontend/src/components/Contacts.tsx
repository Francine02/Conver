import gith from "../assets/github.png"
import linkd from "../assets/linkedin.png"

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
                    <img src={gith} alt="Github" className="w-8" />
                    - {name}
                </a>
            </li>
            <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    <img src={linkd} alt="Github" className="w-8" />

                    - {name}
                </a>
            </li>
        </>
    )
}