"use client"
import Image from "next/image"
import "../Calendar/calendar.css"
import separacion3 from "../../../public/assets/separacion3.png"
import separacion4 from "../../../public/assets/separacionEquipamiento.png"
import { comfortaa, sora } from "@/app/fonts"
import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { fetchDataEvents } from "@/app/data"

const Calendar = () => {

    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const eventsData = await fetchDataEvents()
            console.log(eventsData)
            setEvents(eventsData)
        }
        getEvents()
    }, [])

    useEffect(() => {
        if (isInView) {

            controls.start("animate")
        }

    }, [isInView])

    return (
        <section id="calendar" className="sectionCalendar">
            <motion.div className="separacionContainerCalendar2" >
                <Image
                    src={separacion3}
                    width={2500}
                    height={1700}
                    alt="separacion3"
                    className="separacion"
                />
            </motion.div>
            <div className="separacionContainerCalendar3" >
                <Image
                    src={separacion4}
                    width={2500}
                    height={1700}
                    alt="separacion3"
                    className="separacion"
                />
            </div>
            <div

                className="calendarTextContainer">
                <motion.h2
                    variants={{
                        animate: { opacity: 1 },
                        initial: { opacity: 0 }
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`${sora.className}`}>CALENDARIO</motion.h2>
                <motion.p
                    variants={{
                        animate: { opacity: 1 },
                        initial: { opacity: 0 }
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{ duration: 0.4 }}
                    className={`${comfortaa.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis. Laudantium natus repellat iste consectetur,
                    quos exercitationem odio doloribus recusandae praesentium, veniam vero provident delectus ea facere velit, voluptas est.</motion.p>
                <a className={`${sora.className} button`} href="/calendario">ver màs</a>
            </div>
            <section ref={ref} className={`${sora.className} backgroundEventos`}>
                <div className="futureEvents">
                    {events.slice(-4).map((evento, index) => {
                        return (
                            <div className={`${sora.className} cardEvento`} key={evento.id} >
                                <h2>{evento.titulo}</h2>
                                <p>{evento.fecha}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </section>

        </section>
    )
}

export default Calendar
