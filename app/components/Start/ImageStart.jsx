"use client"
import Image from "next/image";
import fondo from "../../../public/assets/fondo3.jpg"
import separacion from "../../../public/assets/separacion.png"
import { useScroll, useTransform, motion } from "framer-motion";


const ImageStart = () => {
    const { scrollYProgress } = useScroll();

    const separacionY = useTransform(scrollYProgress, [0, 1], [0, -1400]);
    const separacionY2 = useTransform(scrollYProgress, [0, 1], [0, 2000]);


    return (
        <div
            className="startContainer"
        >
            <motion.div
                style={{ y: separacionY2 }}
                className="imageStartContainer">
                < Image
                    src={fondo}
                    fill
                    quality={100}
                    sizes="100vw"
                    alt="fondoHome"
                    className="fondoHome"
                    priority={true}
                />
            </motion.div>
            <motion.div
                style={{ y: separacionY }}
                className="separacionContainer ">
                < Image
                    src={separacion}
                    width={2500}
                    height={1700}
                    quality={100}
                    priority={true}
                    alt="separacion"
                    className="separacion"
                />
            </motion.div>
        </div>
    )
}

export default ImageStart
