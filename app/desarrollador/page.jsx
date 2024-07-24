"use client"
import { useEffect, useState } from 'react'
import "../desarrollador/form.css"

import { verifyUser } from '../auth';
import { sora } from '../fonts';
import { uploadEvent } from '../data';


const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false)



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
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await verifyUser(email, password)
            console.log(user)
            if (user.email === 'agus.urien2@gmail.com') {
                setAuth(true)

                localStorage.setItem("user_id", user.uid)
            } else {
                alert('Unauthorized');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    useEffect(() => {
        const getUserId = async () => {

            const id = localStorage.getItem("user_id")
            if (id) {
                setAuth(true)
            }
        }
        getUserId()
    }, [])

    return (
        <>
            {
                auth ?
                    <section className={`${sora.className} contenedorDesarrollador`}>
                        <section className="eventos">
                            <h2>Eventos</h2>
                            <div>
                                <form onSubmit={upload}>
                                    <div className="datos">
                                        <input type="text" id="title" name="title" placeholder="Nombre del Evento" required />
                                        <input type="number" id="date" name="date" min="1900" max="2100" step="1" placeholder="YYYY" required />
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
                    :
                    <div className='containerForm' >
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', margin: '0px' }}>
                                <h2>LOG-IN</h2>
                            </div>
                            <div className='contenedorInput'>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button type="submit">Continuar</button>
                        </form>
                    </div >


            }
        </>
    )
}

export default page
