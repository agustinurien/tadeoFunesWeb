
import Image from "next/image"
import Horizontal1 from "../../../public/assets/galery/fotoH1.jpg"

import vertical1 from "../../../public/assets/galery/barcoV.jpg"
import vertical2 from "../../../public/assets/galery/barcoV2.jpg"
import { useEffect, useRef } from "react"
import { useAnimation, useInView, motion } from "framer-motion"


const GaleryLeft = () => {
    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {

            controls.start("animate")
        }

    }, [isInView])

    return (
        <div className='leftGaleryContainer'>
            <div className='topPic'>
                <motion.div
                    variants={{
                        animate: { scale: [1, 1.03, 1], opacity: 1 },
                        initial: { scale: 0.5, opacity: 0 }
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    style={{ height: "80%", width: "40%" }}>
                    <Image
                        src={Horizontal1}
                        width={2200}
                        height={2200}
                        alt='galeryInicio'
                        className='imagenGalery'
                    />

                </motion.div>
            </div>
            <div className='bottomPicContainer'>
                <motion.div
                    variants={{
                        animate: { scale: [1, 1.03, 1], opacity: 1 },
                        initial: { scale: 0.5, opacity: 0 }
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    ref={ref}
                    className='leftPic'>
                    <div style={{ height: "80%", width: "80%" }}>
                        <Image
                            src={vertical1}
                            width={2200}
                            height={2200}
                            alt='galeryInicio'
                            className='imagenGalery'
                        />
                    </div>
                </motion.div>
                <motion.div
                    variants={{
                        animate: { scale: [1, 1.03, 1], opacity: 1 },
                        initial: { scale: 0.5, opacity: 0 }
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className='rightPic'>
                    <div style={{ height: "50%", width: "80%" }}>
                        <Image
                            src={vertical2}
                            width={2200}
                            height={2200}
                            alt='galeryInicio'
                            className='imagenGalery'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default GaleryLeft
