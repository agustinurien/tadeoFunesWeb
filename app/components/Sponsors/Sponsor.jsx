import React from 'react'
import "../Sponsors/sponsor.css"
import Image from 'next/image'
import fay from "../../../public/assets/fay.png"
import zik from "../../../public/assets/zik.png"
import yca from "../../../public/assets/yca3.png"
import deporte from "../../../public/assets/deporte.png"
import enard from "../../../public/assets/enard.png"
import austral from "../../../public/assets/austral.png"


const Sponsor = () => {
    return (

        <section
            id='sponsors'
            className='sponsorSection'>

            <div className='sponsorsContainer'>
                <a href="https://fay.org/">

                    <div className='logoSponsorContainer'>
                        <Image
                            src={fay}
                            width={1000}
                            height={1000}
                            alt='logoSponsor'
                            className='logoSponsor'

                        />
                    </div>
                </a>
                <a href="https://es.zhik.com/">
                    <div className='logoSponsorContainer'>
                        <Image
                            style={{ padding: 21 }}
                            src={zik}
                            width={1000}
                            height={1000}
                            alt='logoSponsor'
                            className='logoSponsor'

                        />
                    </div>
                </a>
                <a href="https://infoenard.org.ar/">

                    <div className='logoSponsorContainer'>
                        <Image
                            style={{ padding: 19 }}
                            src={enard}
                            width={1000}
                            height={1000}
                            alt='logoSponsor'
                            className='logoSponsor'

                        />
                    </div>
                </a>
                <a href="https://www.argentina.gob.ar/interior/deportes">

                    <div className='logoSponsorContainer'>
                        <Image
                            src={deporte}
                            width={1000}
                            height={1000}
                            alt='logoSponsor'
                            className='logoSponsor'

                        />
                    </div>
                </a>
                <a href="https://yca.org.ar/">

                    <div className='logoSponsorContainer'>
                        <Image
                            style={{ padding: 25 }}
                            src={austral}
                            width={1000}
                            height={1000}
                            alt='logoSponsor'
                            className='logoSponsor'

                        />
                    </div>
                </a>
                <a href="https://yca.org.ar/">

                    <div className='logoSponsorContainer'>
                        <Image
                            style={{ padding: 25 }}
                            src={yca}
                            width={1000}
                            height={1000}
                            alt='logoSponsor'
                            className='logoSponsor'

                        />
                    </div>
                </a>

            </div>


        </section>
    )
}

export default Sponsor
