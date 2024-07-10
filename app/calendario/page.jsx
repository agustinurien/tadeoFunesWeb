import '../calendario/calendario.css'
import Events from '../components/eventsCarrousel/Events'
import { sora } from '../fonts'
import Image1 from "../../public/assets/calendarioImages/evento1.png"
import Image2 from "../../public/assets/calendarioImages/evento2.png"
import Image3 from "../../public/assets/calendarioImages/evento3.png"
import Image4 from "../../public/assets/calendarioImages/evento4.png"
import Image from 'next/image'

const page = () => {
    const eventos = [
        {
            id: 1,
            nombre: 'Evento 1',
            fecha: 'dd/mm/aaaa',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi id obcaecati repellendus, quos, saepe molestias impedit a ex consequuntur tempora similique ad debitis enim magnam aut eos consectetur possimus.'
        },
        {
            id: 2,
            nombre: 'Evento 2',
            fecha: 'dd/mm/aaaa',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi id obcaecati repellendus, quos, saepe molestias impedit a ex consequuntur tempora similique ad debitis enim magnam aut eos consectetur possimus.'
        },
        {
            id: 3,
            nombre: 'Evento 3',
            fecha: 'dd/mm/aaaa',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi id obcaecati repellendus, quos, saepe molestias impedit a ex consequuntur tempora similique ad debitis enim magnam aut eos consectetur possimus.'
        },
        {
            id: 4,
            nombre: 'Evento 4',
            fecha: 'dd/mm/aaaa',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi id obcaecati repellendus, quos, saepe molestias impedit a ex consequuntur tempora similique ad debitis enim magnam aut eos consectetur possimus.'
        },
        {
            id: 5,
            nombre: 'Evento 4',
            fecha: 'dd/mm/aaaa',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi id obcaecati repellendus, quos, saepe molestias impedit a ex consequuntur tempora similique ad debitis enim magnam aut eos consectetur possimus.'
        },
        {
            id: 6,
            nombre: 'Evento 4',
            fecha: 'dd/mm/aaaa',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi id obcaecati repellendus, quos, saepe molestias impedit a ex consequuntur tempora similique ad debitis enim magnam aut eos consectetur possimus.'
        }
    ]
    const imagenesEventos = [Image1, Image2, Image3, Image4];
    return (
        <section className='contenedorEventos'>
            <section className="backgroundEventos">
                <div className="futureEvents">
                    {eventos.slice(-4).map((evento, index) => {
                        return (


                            <div className={`${sora.className} cardEvento`} key={evento.id} >
                                <h2>{evento.nombre}</h2>
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

