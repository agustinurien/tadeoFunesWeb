"use client"
import "../desarrollador/desarrollador.css"
import { uploadEvent, uploadImages, uploadSponsors } from "../data";
import { sora } from "../fonts";

const page = () => {

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
        <section className={`${sora.className} contenedorDesarrollador`}>
            <section className="eventos">
                <h2>Eventos</h2>
                <div>
                    <form onSubmit={upload}>
                        <div className="datos">
                            <input type="text" id="title" name="title" placeholder="Nombre del Evento" />
                            <input type="date" id="date" name="date" />
                            <textarea id="description" name="description" rows="4" cols="50"></textarea>
                        </div>
                        <input type="submit" className={`${sora.className} enviar`} />
                    </form>
                </div>
                <div className="contendorEventosEditables">

                </div>
            </section>
            <section className="imagenes">
                <h2>Imagenes</h2>
                <div>
                    <div className="subir">
                        <input type="file" id="imageUpload" multiple />
                    </div>
                    <button className={`${sora.className} enviar`} onClick={() => uploadImages()}>Subir Imágenes</button>
                </div>
            </section>
            <section className="sponsors">
                <h2>Sponsors</h2>
                <div>
                    <form onSubmit={handleUploadSponsor}>
                        <div className="datosSponsor">
                            <input type="text" id="link" placeholder="Link del sponsor (si tiene uno)" />
                            <div className="subirSponsor">
                                <input type="file" id="file" />
                            </div>
                        </div>
                        <input type="submit" className={`${sora.className} enviar`} />
                    </form>

                </div>
            </section>

        </section >
    )
}

export default page
