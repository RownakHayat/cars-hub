'use client'
import React from 'react';
import { useState } from 'react';
import { CarsProps } from './types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import headerImg from '../../public/Image/header.png'
import steeringwheel from '../../public/Image/svgImage/steering-wheel.svg'
import tire from '../../public/Image/svgImage/tire.svg'
import gas from '../../public/Image/svgImage/gas.svg'
import rightarrow from '.././../public/Image/svgImage/right-arrow.svg'
import { CustomButtons } from '..';
import CarDetails from '../CarDetails/CarDetails';

interface CarCardProps {
    car: CarsProps;
}

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

  
    return (
        <div className='car-card group'>
            <div className="car-card__contain">
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>
            <p className='flex mt-6 text-[30px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>$</span>{carRent}
                <span className='self-end text-[14px] font-medium'>{year}/day</span>
                </p>
                <div className="relative w-full h-40 my-3 object-contain">
                    <Image src={headerImg} alt='/'className='object-contain'/>
                </div>
                <div className="relative flex w-full mt-2">
                    <div className="flex group-hover:invisible w-full justify-between text-gray">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image src={steeringwheel}alt='/' width={20} height={20} className='steering wheel'/>
                            <p className='text-[14px]'>
                                {transmission === 'a' ? 'Automatic' : 'Manual'}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image src={tire}alt='/' width={20} height={20} className='steering wheel'/>
                            <p className='text-[14px]'>
                                {drive.toUpperCase()}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image src={gas}alt='/' width={20} height={20} className='steering wheel'/>
                            <p className='text-[14px]'>
                                {city_mpg}MPG
                            </p>
                        </div>
                    </div>
                    <div className="car-card__btn-container">
                        <CustomButtons 
                        title="View More"
                        containerStyle="w-full py-[16px] 
                        rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="rightarrow"
                        handleClick={()=> setIsOpen(true)}
                        />
                    </div>
                </div>
                <CarDetails isOpen={isOpen} 
                closeModal={() =>setIsOpen(false)} 
                car={car}
                />
        </div>
    );
};

export default CarCard;