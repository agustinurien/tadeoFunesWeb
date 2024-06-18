import { comfortaa, sora } from "@/app/fonts"


const FormFooter = () => {
    return (
        <div className='formSection'>
            <form className="contenedorForm">
                <div className="fill">
                    <div className="titleForm">
                        <h3 className={`${sora.className} comunicate`}>Comunícate con Nosotros</h3>
                    </div>
                    <input
                        className={`${comfortaa.className}`}
                        type="text" placeholder="Nombre" />
                    <input
                        className={`${comfortaa.className}`}
                        type="text" placeholder="Email" />
                    <textarea
                        className={`${comfortaa.className}`} placeholder="Mensaje" />
                </div>
                <div className="botonEnviarContainer">
                    <button
                        type="submit"
                        className={`${sora.className} botonEnviar`}>Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormFooter
