"use client";

import React from 'react';
import { CustomButtonProps } from './types';
import Image from 'next/image';
import rightarrow from '../../public/Image/svgImage/right-arrow.svg'

const CustomButtons = ({ title, containerStyle, handleClick, btnType, textStyles, rightIcon}: CustomButtonProps) => {
     
    return (
        <button 
        
        disabled={false} 
        type={btnType || "button"}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightarrow && (
                <div className="relative w-6 h-6">
                    <Image src={rightarrow} alt='/' className='object-contain' fill/>
                </div>
            )}
        </button>
    );
};

export default CustomButtons;