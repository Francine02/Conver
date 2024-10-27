export function Dropzone() {
    return (
        <div className="flex items-center justify-center py-8">
            <label
                form="dropzone-file"
                className="flex flex-col items-center justify-center w-full sm:w-96 md:w-[45rem] h-32 2xl:h-36 border-2 border-[#cfcfcf] hover:border-[#b6b6b6] border-dashed rounded-lg cursor-pointer bg-[#e7e7e7] dark:bg-[#090909] hover:bg-[#dedede] dark:border-[#616161] dark:hover:border-[#6a6a6a] dark:hover:bg-[#181818]">
                <div
                    className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                        className="w-8 h-8 mb-4 text-[#868686] dark:text-[#828282]"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16">
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p
                        className="mb-2 text-sm text-[#666565] dark:text-[#828282]">
                        <span className="font-semibold">
                            Click para carregar
                        </span>
                        ou arraste e solte
                    </p>
                    <p
                        className="text-xs text-[#868686] dark:text-[#828282]">
                        DOC, DOCX ou ODT
                    </p>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    className="hidden" />
            </label>
        </div>

    )
}