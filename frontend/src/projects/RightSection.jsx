import React from 'react';

function RightSection({
    image, 
    title, 
    technologies, 
    description
}) {
    return (
        <>
        <div className='right-section container m-35 flex  '>
            <div className='m-1 pl-7 text-xl' style={{paddingRight: "45px"}}>
                <h1 className='text-bold titleHeading'>{title}</h1>
                <p className='italic'>{technologies}</p>
                <p className='leading-relaxed [word-spacing:3px]'>{description}</p>
            </div>
            <div className='image-container grid grid-cols-1 w-[700px] '>
                <img src={image} alt="Image holded here" />
            </div>
        </div>
        </>
    )
}

export default RightSection;