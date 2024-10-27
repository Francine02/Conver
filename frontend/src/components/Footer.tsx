import { Contacts } from "./Contacts"

export function Footer() {
    return (
        <footer className="bg-[#262626] dark:bg-[#dadada] mt-64 py-10 px-6 sm:px-12 md:px-20 lg:px-24 2xl:px-40 text-[#dadada] dark:text-[#262626]">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">

                <div className="mb-6 sm:mb-0 text-center sm:text-left">
                    <h4 className="text-3xl md:text-4xl font-bold">Conver</h4>
                </div>

                <div className="mb-6 sm:mb-0 text-center">
                    <h5 className="text-lg font-semibold">Desenvolvedores:</h5>
                    <p className="text-sm mt-2">Francine Cruz - Full Stack</p>
                    <p className="text-sm">George Victor - Backend</p>
                </div>

                <div className="text-center">
                    <h5 className="text-lg font-semibold">Contatos:</h5>
                    <ul className="mt-2 text-sm space-y-2">
                        <Contacts github="https://github.com/Francine02" name="Francine" linkedin="https://www.linkedin.com/in/francine-ccruz/" />
                        <Contacts github="https://github.com/id0ubl3g" name="George" linkedin="https://www.linkedin.com/in/id0ubl3g/" />
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-[#7a7a7a] pt-4 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Conver. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
