export const convertRequest = async (formData: FormData) => {
    try {
        const response = await fetch('https://conver-flask-api.onrender.com/converter', {
            method: 'POST',
            body: formData,
        })

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response:", errorData);
            return { error: "Erro ao converter arquivo!" };
        }

        const blob = await response.blob(); //Obtem a resposta com blob - que é um objeto que representa um arquivo
        const downloadUrl = URL.createObjectURL(blob); //Cria a url temporária para depois baixar o arquivo convertido

        const file = formData.get("file") as File;
        const extension = formData.get("extension");
        const fileName = `${file?.name.split('.')[0]}.${extension}`;

        return { sucess: true, downloadUrl, fileName };

    } catch (e) {
        console.error("Erro ao fazer a requisição:", e);
        return { error: "Erro ao converter arquivo!" };
    }
}
