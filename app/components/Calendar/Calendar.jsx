"use client"
import Image from "next/image"
import "../Calendar/calendar.css"
import separacion3 from "../../../public/assets/separacion3.png"
import olimpico from "../../../public/assets/olimpicos.webp"
import pana from "../../../public/assets/pana.png"
import linea from "../../../public/assets/lineaTiempo.png"
import { comfortaa, sora } from "@/app/fonts"
import { useScroll, useTransform, motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const Calendar = () => {
    const { scrollYProgress } = useScroll();
    const separacionY = useTransform(scrollYProgress, [0, 1], [0, -1600]);


    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

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
                    className={`${sora.className}`}>CALENDAR</motion.h2>
                <motion.p
                    variants={{
                        animate: { opacity: 1 },
                        initial: { opacity: 0 }
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{ duration: 0.4 }}
                    className={`${comfortaa.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis. Laudantium natus repellat iste consectetur, quos exercitationem odio doloribus recusandae praesentium, veniam vero provident delectus ea facere velit, voluptas est.</motion.p>
            </div>
            <section className={`${sora.className} backgroundEventos`}>
                <div className="eventosTopConainer">
                    <div className="eventosTop">

                        <motion.div
                            variants={{
                                animate: { opacity: 1, scale: [1, 1.1, 1] },
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.2, delay: 0.4, ease: "easeInOut" }}
                            className="juvenil">
                            <h3>Mundial Juvenil FX</h3>
                            <span>fecha</span>
                        </motion.div>

                        <motion.div
                            variants={{
                                animate: { opacity: 1, scale: [1, 1.1, 1] },
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.2, delay: 1.8, ease: "easeInOut" }}
                            className="panamericano">
                            <h3>Juegos Panamericanos</h3>
                            <span >fecha</span>
                            <div className="logoPanaContainer">
                                <Image
                                    src={pana}
                                    width={2500}
                                    height={1700}
                                    alt="logoPana"
                                    className="logoPana"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div ref={ref} className="lineaTiempoContainer">
                    <motion.div
                        variants={{
                            animate: { width: 0 },
                        }}
                        animate={controls}
                        transition={{ duration: 4.6, delay: 0.1 }}
                        style={{ backgroundColor: "#E2EEFC", position: "absolute", top: 0, right: 0, width: "100%", height: "80%" }}>

                    </motion.div>
                    <Image
                        src={linea}
                        width={2500}
                        height={1700}
                        alt="lineaTiempo"
                        className="lineaTiempo"
                    />
                </div>
                <div className="eventosBottomConainer">
                    <div className="eventosBottom">

                        <motion.div
                            variants={{
                                animate: { opacity: 1, scale: [1, 1.1, 1] },
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.2, delay: 0.7, ease: "easeInOut" }}
                            className="sudamericano">
                            <h3>Sudamericano 49er Fx</h3>
                            <span>fecha</span>
                        </motion.div>

                        <motion.div
                            variants={{
                                animate: { opacity: 1, scale: [1, 1.1, 1] },
                            }}
                            initial={{ opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.2, delay: 2.8, ease: "easeInOut" }}
                            className="olimpicos">
                            <h3>Juegos Olimpicos</h3>
                            <span>fecha</span>
                            <div className="logoOlimpicoContainer">
                                <Image
                                    src={olimpico}
                                    width={2500}
                                    height={1700}
                                    alt="logoOlimpico"
                                    className="logoOlimpico"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Calendar
