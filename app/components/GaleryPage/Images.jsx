"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import "./galeria.css";
import fetchImages from '@/app/data';

const Page = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [visibleCount, setVisibleCount] = useState(20);
    const [visibleImages, setVisibleImages] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const urls = await fetchImages();
            setImageUrls(urls);
            setVisibleImages(urls.slice(0, visibleCount));
            if (visibleCount >= urls.length) {
                setDone(true)
                return;
            }
        };
        getData();
    }, [visibleCount]);

    const loadMoreImages = () => {
        setVisibleCount(prevCount => prevCount + 20);
    };


    const numberOfColumns = 4;
    const columns = Array.from({ length: numberOfColumns }, () => []);

    visibleImages.forEach((url, index) => {
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
                                    className="imageGaleria"
                                    loading="lazy"
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
                    <button className='loadMoreButton' onClick={loadMoreImages}>Cargar más</button>
                </div>
            }
        </>
    );
};

export default Page;
