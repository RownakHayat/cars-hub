"use client";

import React from 'react'
import CustomButtons from '../CustomButtons/CustomButtons'
import Image from 'next/image';
import headerPng from '../../public/Image/header.png'
import headerbg from '../../public/Image/header-bg.png'

 
const Header = () => {
const handleScroll =() =>{

}
    return (
    <div className='header'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='header__title'>Find, Book, or Rent a car - quickly and easily</h1>

            <p className='header__subtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus provident officiis consequuntur!
            </p>
            <CustomButtons 
            title="Explore Cars"
            containerStyle="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
        <div className="header__image-container">
            <div className="header__image">
                <Image src={headerPng} alt="header" className='object-container absolute xl:top-[10rem]'/>
                <div
                style={{
                    backgroundImage: `url(${headerbg.src})`,
                    width: '69rem',
                    height: '100%' ,
                    marginTop: '-2rem'
                  }}
                 className="header__image-overlay absolute xl:-top-[9rem] xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h:[590px] overflow-hidden" />
            </div>
        </div>
    </div>
  )
}

export default Header