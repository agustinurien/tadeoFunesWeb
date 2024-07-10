
import vertical3 from "../../../public/assets/galery/barcoV4.jpg"
import Horizontal2 from "../../../public/assets/galery/fotoH2.jpg"
import Horizontal3 from "../../../public/assets/galery/fotoH3.jpg"
import Image from 'next/image'

const GaleryRight = () => {


    return (
        <div className='rightGaleryContainer'>
            <div
                className='bottomPicContainer'>
                <div
                    className='leftPic2'>
                    <div style={{ height: 270, width: "85%" }}>
                        <Image
                            src={Horizontal3}
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


                    className='rightPic2'>
                    <div style={{ height: "80%", width: "80%" }}>
                        <Image
                            src={vertical3}
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
            <div

                className='bottomPic2'>
                <div style={{ height: "100%", width: "60%", marginLeft: "6%" }}>
                    <Image
                        src={Horizontal2}
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
    )
}

export default GaleryRight
