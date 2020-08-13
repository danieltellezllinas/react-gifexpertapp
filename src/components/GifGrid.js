import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>
            {loading && <div className="loader-container">
                            <div className="loader"></div>
                            <div className="loader2"></div>
                        </div>
            }
            <div className="card-grid">
                    {
                        images.map(img => (
                            <GifGridItem 
                            key={img.id}
                            {...img}/>
                        ))
                    }
                </div>
        </>
    )
}
