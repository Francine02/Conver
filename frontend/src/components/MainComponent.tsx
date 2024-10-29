import { useState } from "react"
import { convertRequest } from "../service/convertRequest"
import { Dropzone } from "./Dropzone.js"
import { ButtonDropdown } from "../components/ButtonDropdown"
import { ButtonConvert } from "./ButtonConvert.js"
import { ConvertedFile } from "./ConvertedFile.js"

export function MainComponent() {
    const [file, setFile] = useState<File | null>(null)
    const [selectedOption, setSelectedOption] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [convertedFileUrl, setConvertedFileUrl] = useState<string>("")
    const [converted, setConverted] = useState<boolean>(false)
    const [fileName, setFileName] = useState<string>("")

    const handleConvert = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); //Enquanto a requisição está sendo processada, aparece o loading no botão
        setError(null);

        const formData = new FormData();
        if (file) {
            formData.append("file", file, file.name);
        }
        formData.append("extension", selectedOption);

        const result = await convertRequest(formData);

        if (result.sucess) {// Se a requisição for ok, define de varios estados para o componente ConvertedFile
            setConvertedFileUrl(result.downloadUrl); //Salva a url
            setConverted(true);
            setFileName(result.fileName) // Pega e salva o nome do arquivo
        }

        if (result.error) {// Se ocorrer um erro, muda a mensagem de erro para ser exibida ao usuário caso a conversão falhe
            setError(result.error);
            setConverted(false);
        }

        setLoading(false); // Para de aparecer o loading
    }
    
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <form onSubmit={handleConvert}>
                {converted ? (
                    <ConvertedFile downloadUrl={convertedFileUrl} fileName={fileName} />
                ) : (
                    <div>
                        <Dropzone onFileChange={setFile} />
                        <h5 className="text-center font-bold text-base sm:text-lg lg:text-2xl tracking-wide text-[#262626] dark:text-[#dadada]">Para:</h5>
                        <ButtonDropdown onOptionChange={setSelectedOption} />
                        <ButtonConvert loading={loading} selectedOption={selectedOption} file={file} />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                )}
            </form>
        </div>
    )
}