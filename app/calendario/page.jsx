"use client"

import '../calendario/calendario.css'
import Events from '../components/eventsCarrousel/Events'
import { sora } from '../fonts'
import Image1 from "../../public/assets/calendarioImages/evento1.png"
import Image2 from "../../public/assets/calendarioImages/evento2.png"
import Image3 from "../../public/assets/calendarioImages/evento3.png"
import Image4 from "../../public/assets/calendarioImages/evento4.png"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchDataEvents } from '../data'

const page = () => {
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const eventsData = await fetchDataEvents()
            setEventos(eventsData)
        }
        getEvents()
    }, [])

    const imagenesEventos = [Image1, Image2, Image3, Image4];
    return (
        <section className='contenedorEventos'>
            <section className="backgroundEventos">
                <div className="futureEvents">
                    {eventos.slice(-4).map((evento, index) => {
                        return (


                            <div className={`${sora.className} cardEvento`} key={evento.id} >
                                <h2>{evento.titulo}</h2>
                                <p>{evento.fecha}</p>
                                <div className='imageDesignCalendario'>
                                    {imagenesEventos &&
                                        <Image src={imagenesEventos[index]}
                                            width={1300}
                                            height={1300}
                                            alt="evento1"
                                            className='imageCalendario' />
                                    }
                                </div>
                            </div>


                        )
                    })
                    }
                </div>
            </section>
            <section className="carrouselAgendaContainer">

                <Events eventos={eventos} />
                <div className="effect">

                </div>
            </section>
        </section>
    )
}

export default page

