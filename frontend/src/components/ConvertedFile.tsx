interface ConvertedFile {
    downloadUrl: string;
    fileName: string;
}

export function ConvertedFile({ downloadUrl, fileName }: ConvertedFile) {
    return (
        <div className="my-8 text-[#868686] dark:text-[#828282] w-full sm:w-96 overflow-auto p-3 flex justify-center font-semibold items-center h-20 rounded-lg bg-[#e7e7e7] dark:bg-[#151515]">
            <img
                className="w-8 mr-2"
                src="https://img.icons8.com/?size=100&id=frlIxSuEDkbi&format=png&color=3b82f6"
                alt="Baixar arquivo" />
            <a
                href={downloadUrl}
                download={fileName}
                className="text-blue-500 hover:underline">
                {fileName}
            </a>
        </div>
    )
}