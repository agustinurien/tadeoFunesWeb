"use client"

import GaleryLeft from "./GaleryLeft"
import GaleryRight from "./GaleryRight"
import Horizontal3 from "../../../public/assets/galery/fotoH3.jpg"
import "../Galery/galery.css"
import { sora } from "@/app/fonts"
import { useEffect, useState } from "react"

import Image from "next/image"


const Galery = () => {


    const [windowWidth, setWindowWidth] = useState(false)



    const handleResize = () => {
        if (window.innerWidth < 768) {
            setWindowWidth(true)
        } else {
            setWindowWidth(false)
        }
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section

            className="galerySection">
            <div
                className="effectGallery">

                <div

                    className="galeryTextContainer">
                    <h3 className={`${sora.className}`}>conoce nuestra</h3>
                    <h2 className={`${sora.className}`}>galeria de fotos</h2>
                    <a className="irBoton" href="/galeria">ir</a>
                </div>
            </div>
            {
                windowWidth ?
                    <>

                        <div className="imagenMobileContainer">

                            <Image
                                src={Horizontal3}
                                width={2200}
                                height={2200}
                                quality={100}
                                priority={true}
                                className="imagenGaleryMobile"
                                alt='galeryInicio'

                            />
                            <div className="effectMobileImage"></div>
                        </div>
                    </>
                    :
                    <>
                        <GaleryLeft />
                        <GaleryRight />
                    </>

            }


        </section >
    )
}

export default Galery
