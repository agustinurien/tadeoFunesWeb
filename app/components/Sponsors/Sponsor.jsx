import React from 'react'
import "../Sponsors/sponsor.css"
import Image from 'next/image'
import fay from "../../../public/assets/fay.png"
import zik from "../../../public/assets/zik.png"
import yca from "../../../public/assets/yca3.png"
import deporte from "../../../public/assets/deporte.png"
import enard from "../../../public/assets/enard.png"

const Sponsor = () => {
    return (
        <section
            id='sponsors'
            className='sponsorSection'>
            <div

                className='sponsorsContainer'>
                <div className='logoSponsorContainer'>
                    <Image
                        src={fay}
                        width={1000}
                        height={1000}
                        alt='logoSponsor'
                        className='logoSponsor'

                    />
                </div>
                <div className='logoSponsorContainer'>
                    <Image
                        style={{ padding: 15 }}
                        src={zik}
                        width={1000}
                        height={1000}
                        alt='logoSponsor'
                        className='logoSponsor'

                    />
                </div>
                <div className='logoSponsorContainer'>
                    <Image
                        style={{ padding: 15 }}
                        src={enard}
                        width={1000}
                        height={1000}
                        alt='logoSponsor'
                        className='logoSponsor'

                    />
                </div>
                <div className='logoSponsorContainer'>
                    <Image
                        src={deporte}
                        width={1000}
                        height={1000}
                        alt='logoSponsor'
                        className='logoSponsor'

                    />
                </div>
                <div className='logoSponsorContainer'>
                    <Image
                        style={{ padding: 16 }}
                        src={yca}
                        width={1000}
                        height={1000}
                        alt='logoSponsor'
                        className='logoSponsor'

                    />
                </div>
            </div>
        </section>
    )
}

export default Sponsor
