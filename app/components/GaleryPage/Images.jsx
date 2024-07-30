"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import "./galeria.css";
import { fetchImages } from '../../data.js';
import { sora } from '@/app/fonts';
import { AiOutlineReload } from "react-icons/ai";

const Page = () => {
    const [imageUrls, setImageUrls] = useState([]);

    const [done, setDone] = useState(true);
    console.log(done)
    const [numberOfColumns, setNumberOfColumns] = useState(3);

    const [lastImageIndex, setLastImageIndex] = useState(0);


    const getData = async () => {
        const urls = await fetchImages(lastImageIndex);
        setImageUrls([...imageUrls, ...urls]);
        setLastImageIndex(lastImageIndex + urls.length);
        setDone(false)
        if (urls.length < 8) {
            setDone(null)

            return
        }
    };

    useEffect(() => {

        getData();
    }, []);


    const handleResize = () => {
        if (window.innerWidth < 768) {
            setNumberOfColumns(2);
        } else {
            setNumberOfColumns(3);
        }
    };


    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columns = Array.from({ length: numberOfColumns }, () => []);

    imageUrls.forEach((url, index) => {
        columns[index % numberOfColumns].push(url);
    });

    return (
        <>
            <section className="contenedorGaleria">
                {columns.map((column, colIndex) => (
                    <div key={colIndex}>
                        {column.map((url, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="containerImagesGaleria"
                            >
                                <Image
                                    src={url}
                                    alt={`Image ${imgIndex}`}
                                    width={5000}
                                    height={5000}
                                    loading='lazy'
                                    className="imageGaleria"
                                    onLoad={(e) => {
                                        e.target.classList.add('loaded');
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </section>
            <div className='buttonContainer'>

                {
                    done === false ?
                        <div className='loadMoreContainer'>
                            <button className={`${sora.className} loadMoreButton`} onClick={() => (getData(), setDone(true))}>Cargar más</button>
                        </div>
                        :
                        done === null ? null :
                            <div className='loadMoreContainer'>
                                <AiOutlineReload className='load' />
                            </div>

                }
            </div>
        </>
    );
};

export default Page;
