"use client"

import { comfortaa, sora } from "@/app/fonts"
import { useScroll, motion, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Events = ({ eventos }) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ container: ref })
    const [selected, setSelected] = useState(1)


    const handleSelected = (value) => {
        if (value === 1) {
            setSelected((prev) => prev + 1)
        } else if (value === 2) {
            setSelected((prev) => prev - 1)
        }
    }


    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        handleSelected(1)
                    }
                })
            },
            {
                root: ref.current,
                threshold: 0.5
            }
        )

        const observer2 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        handleSelected(2)
                    }
                })
            },
            {
                root: ref.current,
                threshold: 0.8
            }
        )


        const selectedElement = document.querySelector(`.carrouselAgenda .evento.selected .description `);
        const prevElement = document.querySelector(`.carrouselAgenda .evento.prevSelected .data `);

        if (selectedElement) {
            observer.observe(selectedElement);
        }
        if (prevElement) {
            observer2.observe(prevElement)
        }
        return () => {
            if (selectedElement) {
                observer.unobserve(selectedElement);
            }
            if (prevElement) {
                observer2.unobserve(prevElement);
            }
        }


    }, [eventos, selected])



    return (
        <>


            <section ref={ref} className='carrouselAgenda'>

                {
                    eventos &&
                    eventos.map((evento, index) => {
                        return (
                            <motion.div
                                key={evento.id}
                                initial={{
                                    opacity: 0.5,
                                    scale: 0.9
                                }}
                                animate={{
                                    opacity: selected === (index + 1) ? 1 : (selected - 1) === (index + 1) ? 0.1 : 0.5,
                                    scale: selected === (index + 1) ? 1 : 0.9
                                }}

                                className={selected === (index + 1) ? 'evento selected' : (selected - 1) === (index + 1) ? 'evento prevSelected' : 'evento'}

                            >
                                <div className={`${sora.className} data`}>
                                    <h2 >{evento.titulo}</h2>
                                    <p>{evento.fecha}</p>
                                </div>
                                <p className={`${comfortaa.className} description`}>{evento.descripcion}</p>
                            </motion.div>
                        )
                    })

                }
            </section>
        </>
    )
}

export default Events

