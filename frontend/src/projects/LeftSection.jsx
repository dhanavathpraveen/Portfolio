import React from 'react';

function LeftSection({
    image, 
    title, 
    technologies, 
    description
}) {
    return (
        <>
        <div className='left-section container m-20 flex  '>
            <div className='image-container grid grid-cols-1 w-[900px] '>
                <img src={image} alt="Image holded here" />
            </div>
            <div className='m-1 pl-7 text-xl' style={{paddingLeft: "40px"}}>
                <h1 className='text-bold titleHeading'>{title}</h1>
                <p className='italic'>{technologies}</p>
                <p className='leading-relaxed [word-spacing:3px]'>{description}</p>
            </div>
        </div>
        </>
    )
}

export default LeftSection;