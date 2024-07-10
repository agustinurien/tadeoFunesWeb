
import Image from "next/image"
import Horizontal1 from "../../../public/assets/galery/fotoH1.jpg"

import vertical1 from "../../../public/assets/galery/barcoV.jpg"
import vertical2 from "../../../public/assets/galery/barcoV2.jpg"



const GaleryLeft = () => {


    return (
        <div className='leftGaleryContainer'>
            <div className='topPic'>
                <div
                    style={{ height: "80%", width: "40%" }}>
                    <Image
                        src={Horizontal1}
                        width={2200}
                        height={2200}
                        quality={100}
                        priority={true}
                        alt='galeryInicio'
                        className='imagenGalery'
                    />

                </div>
            </div>
            <div className='bottomPicContainer'>
                <div
                    className='leftPic'>
                    <div style={{ height: "80%", width: "80%" }}>
                        <Image
                            src={vertical1}
                            width={2200}
                            height={2200}
                            quality={100}
                            priority={true}
                            alt='galeryInicio'
                            className='imagenGalery'
                        />
                    </div>
                </div>
                <div
                    className='rightPic'>
                    <div style={{ height: "50%", width: "80%" }}>
                        <Image
                            src={vertical2}
                            width={2200}
                            height={2200}
                            quality={100}
                            priority={true}
                            alt='galeryInicio'
                            className='imagenGalery'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GaleryLeft
