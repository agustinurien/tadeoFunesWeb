
import React, { useEffect, useRef } from 'react'
import vertical3 from "../../../public/assets/galery/barcoV4.jpg"
import Horizontal2 from "../../../public/assets/galery/fotoH2.jpg"
import Horizontal3 from "../../../public/assets/galery/fotoH3.jpg"
import Image from 'next/image'
import { useAnimation, useInView, motion } from 'framer-motion'
const GaleryRight = () => {

    const ref = useRef()
    const controls = useAnimation();

    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {

            controls.start("animate")
        }

    }, [isInView])
    return (
        <div className='rightGaleryContainer'>
            <div className='bottomPicContainer'>
                <motion.div
                    variants={{
                        animate: { scale: [1, 1.03, 1], opacity: 1 },
                        initial: { scale: 0.5, opacity: 0 }
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className='leftPic2'>
                    <div style={{ height: 270, width: "85%" }}>
                        <Image
                            src={Horizontal3}
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
                    transition={{ duration: 0.3, delay: 0.5 }}
                    ref={ref}
                    className='rightPic2'>
                    <div style={{ height: "80%", width: "80%" }}>
                        <Image
                            src={vertical3}
                            width={2200}
                            height={2200}
                            alt='galeryInicio'
                            className='imagenGalery'
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={{
                    animate: { scale: [1, 1.03, 1], opacity: 1 },
                    initial: { scale: 0.5, opacity: 0 }
                }}
                initial='initial'
                animate={controls}
                transition={{ duration: 0.3, delay: 0.7 }}
                className='bottomPic2'>
                <div style={{ height: "100%", width: "60%", marginLeft: "6%" }}>
                    <Image
                        src={Horizontal2}
                        width={2200}
                        height={2200}
                        alt='galeryInicio'
                        className='imagenGalery'
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default GaleryRight
