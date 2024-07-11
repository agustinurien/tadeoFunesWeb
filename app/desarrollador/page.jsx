"use client"

import { useState } from "react";
import { uploadEvent, uploadImages, uploadSponsors } from "../data";
import Image from "next/image";

const page = () => {
    const [fileData, setFileData] = useState(null);

    const upload = async (e) => {
        e.preventDefault();
        try {

            const title = e.target.title.value;
            const date = e.target.date.value;
            const description = e.target.description.value;
            await uploadEvent(title, date, description);
        } catch (error) {
            console.error('Error al crear el evento:', error.message);
        }
    }
    const handleUploadSponsor = async (e) => {
        e.preventDefault();
        try {
            const link = e.target.link.value;
            const file = e.target.file.files[0];

            const result = await uploadSponsors(link, file);
            setFileData(result)
        } catch (error) {
            console.error('Error al crear el evento:', error.message);
        }
    }



    return (
        <section style={{ margin: 170, display: "flex", justifyContent: "space-between" }}>
            <section>
                <h2>Eventos</h2>
                <div>
                    <form onSubmit={upload}>
                        <div>
                            <label htmlFor="title">Título:</label>
                            <input type="text" id="title" name="title" />
                        </div>
                        <div>
                            <label htmlFor="date">Fecha:</label>
                            <input type="date" id="date" name="date" />
                        </div>
                        <div>
                            <label htmlFor="description">Descripción:</label>
                            <textarea id="description" name="description" rows="4" cols="50"></textarea>
                        </div>
                        <input type="submit" />
                    </form>
                </div>
                <div className="contendorEventosEditables">

                </div>
            </section>
            <section>
                <h2>Imagenes</h2>
                <div>
                    <input type="file" id="imageUpload" multiple />
                    <button onClick={() => uploadImages()}>Subir Imágenes</button>
                </div>
            </section>
            <section>
                <h2>Sponsors</h2>
                <div>
                    <form onSubmit={handleUploadSponsor}>
                        <input type="text" id="link" />
                        <input type="file" id="file" />
                        <input type="submit" />
                    </form>

                </div>
            </section>
            <div>
                {fileData &&
                    <>


                        <p>Imagen subida correctamente</p>
                        <Image
                            src={fileData}
                            width={200}
                            height={200}
                            alt="imagen"
                        />
                    </>
                }


            </div>
        </section>
    )
}

export default page
