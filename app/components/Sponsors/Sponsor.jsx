"use client"

import React, { useEffect, useRef, useState } from 'react'
import "../Sponsors/sponsor.css"
import Image from 'next/image'
import { fetchDataSponsors } from '@/app/data'



const Sponsor = () => {

    const [sponsors, setSponsors] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const sponsorsPerPage = 3;

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex =>
                (prevIndex + sponsorsPerPage) % sponsors.length
            );
        }, 2000);
    };

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startInterval();
        return () => stopInterval();
    }, [sponsors.length]);

    const displayedSponsors = sponsors.slice(currentIndex, currentIndex + sponsorsPerPage);

    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const res = await fetchDataSponsors();
                setSponsors(res);
            } catch (error) {
                console.error('Error fetching sponsors:', error);
            }
        };

        fetchSponsors();
    }, []);

    return (
        <section className='sponsorSection'>
            <div className='sponsorsContainer'>
                {
                    displayedSponsors.length > 0 &&
                    displayedSponsors.map((sponsor, index) => (
                        <a
                            onMouseOver={stopInterval}
                            onMouseOut={startInterval}
                            href={sponsor.link} key={index}>
                            <div className='logoSponsorContainer'>
                                <Image
                                    src={sponsor.url}
                                    width={1000}
                                    height={1000}
                                    alt='logoSponsor'
                                    className='logoSponsor'

                                />
                            </div>
                        </a>
                    ))
                }
            </div>



        </section >
    )
}

export default Sponsor
