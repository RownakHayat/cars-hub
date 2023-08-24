import {MouseEventHandler} from "react"
export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}