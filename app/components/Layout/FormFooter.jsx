import { comfortaa, sora } from "@/app/fonts"
import { Snackbar } from "@mui/material";
import { useState } from "react";


const FormFooter = () => {

    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            setOpen(true)
            e.target.reset();

        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className='formSection'>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Email Sent!"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <form className="contenedorForm" onSubmit={handleSubmit}>
                <div className="fill">
                    <div className="titleForm">
                        <h3 className={`${sora.className} comunicate`}>Comunícate con Nosotros</h3>
                    </div>
                    <input
                        className={`${comfortaa.className}`}
                        type="text" placeholder="Nombre" name="name" required />
                    <input
                        className={`${comfortaa.className}`}
                        type="text" placeholder="Email" name="email" required />
                    <textarea
                        className={`${comfortaa.className}`} name="message" placeholder="Mensaje" required />
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
