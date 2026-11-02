'use client';
import React, { useState } from 'react'

const ImageCarousel = ({imageList}:{imageList:string[]}) => {
    const [currentImage,setCurrentImage] = useState<{ imageUrl:string,index:number}>({imageUrl:imageList[0],index:0});

    return (
        <div className='grid grid-cols-1 grid-rows-1 h-80 w-120 '>
            <div className='row-start-1 col-start-1 flex items-center justify-center'> {/*underneath*/}
                <img src={currentImage.imageUrl} alt={`Carousel image ${currentImage.index}`} className='' />
                
            </div>
            <div className='row-start-1 col-start-1 z-10 self-center justify-center bg-linear-to-t from-black/75 h-80 w-120'> {/*on top of*/}
                <div className='h-80 w-120 flex justify-center items-end gap-10 pb-2'>
                    <button type="button" className='bg-black text-white hover:cursor-pointer w-20 rounded'>Previous</button>
                    <button type="button" className='bg-black text-white hover:cursor-pointer w-20 rounded'>Next</button>
                </div>
            </div>
        </div>
    )
}

const onClickPrev = () =>{}

export default ImageCarousel