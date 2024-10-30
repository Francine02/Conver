import { useState } from "react"

export function Dropzone({ onFileChange }: { onFileChange: (file: File) => void }) { // Recebe a prop com o arquivo selecionado
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const acceptedFileTypes = ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.oasis.opendocument.text", "text/plain", "application/rtf"]; // Formatos de arquivos aceitos
    const ERROR_MESSAGES = { unsupportedType: "Tipo de arquivo não suportado. Aceitamos apenas DOC, DOCX, TXT, RTF ou ODT." }

    const validateFileType = (file: File): boolean => { // Verifica se o arquivo é aceitavel, estando dentro do acceptedFileTypes e retorna um true para válidos
        return acceptedFileTypes.includes(file.type);
    }

    const handleFileSelection = (file: File) => {
        if (validateFileType(file)) {
            setFile(file);
            onFileChange(file);
            setError(null);
        } else {
            setError(ERROR_MESSAGES.unsupportedType);
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Lida com a seleção por input, chama o handleFileSelection com o arquivo
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            handleFileSelection(selectedFile);
        }
    }

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => { //Lida com o arquivo sendo arrastado
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0]; //Obtem o primeiro arquivo, se houver, também chama handleFileSelection
        if (droppedFile) {
            handleFileSelection(droppedFile);
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();  // Evita o comportamento padrão ao arrastar
    }

    return (
        <div className="flex flex-col items-center justify-center py-8">
            {file ? (
                <p className="text-[#868686] dark:text-[#828282] w-full sm:w-96 overflow-auto p-3 flex justify-center items-center h-20 rounded-lg cursor-pointer bg-[#e7e7e7] dark:bg-[#151515]">
                    Arquivo: <span className="font-semibold">{file.name}</span>
                </p>
            ) : (
                <label
                    htmlFor="dropzone-file"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="flex flex-col items-center justify-center p-7 w-full sm:w-[31rem] md:w-[45rem] h-32 2xl:h-36 border-2 border-[#cfcfcf] hover:border-[#b6b6b6] border-dashed rounded-lg cursor-pointer bg-[#e7e7e7] dark:bg-[#151515] hover:bg-[#dedede] dark:border-[#616161] dark:hover:border-[#6a6a6a] dark:hover:bg-[#1f1f1f]">
                    <div
                        className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-2 text-[#868686] dark:text-[#828282]"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p
                            className="mb-2 text-sm text-[#666565] dark:text-[#828282]">
                            <span className="font-semibold">Click para carregar </span>ou arraste e solte
                        </p>
                        <p
                            className="text-xs text-[#868686] dark:text-[#828282]">
                            DOC, DOCX, TXT, RTF ou ODT
                        </p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange} />
                </label>
            )}
            {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
        </div>

    )
}