"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import "./galeria.css";
import { fetchImages } from '../../data.js';
import { sora } from '@/app/fonts';

const Page = () => {
    const [imageUrls, setImageUrls] = useState([]);

    const [done, setDone] = useState(false);
    const [numberOfColumns, setNumberOfColumns] = useState(3);

    const [lastImageIndex, setLastImageIndex] = useState(0);


    const getData = async () => {
        const urls = await fetchImages(lastImageIndex);
        setImageUrls([...imageUrls, ...urls]);
        setLastImageIndex(lastImageIndex + urls.length);
        if (urls.length < 4) {
            setDone(true)
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
            {
                !done &&
                <div className='loadMoreContainer'>
                    <button className={`${sora.className} loadMoreButton`} onClick={() => getData()}>Cargar más</button>
                </div>
            }
        </>
    );
};

export default Page;
