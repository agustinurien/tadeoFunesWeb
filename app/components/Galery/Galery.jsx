"use client"

import GaleryLeft from "./GaleryLeft"
import GaleryRight from "./GaleryRight"
import Horizontal3 from "../../../public/assets/galery/fotoH3.jpg"
import "../Galery/galery.css"
import { sora } from "@/app/fonts"
import { useEffect, useRef } from "react"
import { useAnimation, useInView, motion } from "framer-motion"
import Image from "next/image"


const Galery = () => {
    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start("animate")
        }

    }, [isInView])

    return (
        <section

            className="galerySection">
            <div

                className="effectGallery">

                <motion.div
                    variants={{
                        animate: { scale: 1, opacity: 1 },
                        initial: { scale: 0.5, opacity: 0 }
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="galeryTextContainer">
                    <h3 className={`${sora.className}`}>conoce nuestra</h3>
                    <h2 className={`${sora.className}`}>galeria de fotos</h2>
                    <a ref={ref} className="irBoton" href="/galeria">ir</a>
                </motion.div>
            </div>
            {

                <Image
                    src={Horizontal3}
                    width={2200}
                    height={2200}
                    quality={100}
                    priority={true}
                    className="imagenGaleryMobile"
                    alt='galeryInicio'

                />

            }

        </section >
    )
}

export default Galery
