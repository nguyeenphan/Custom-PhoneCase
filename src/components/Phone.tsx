import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
    className?: string;
}

const Phone = ({imgSrc, className, dark = false, ...props}: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden",
            className
        )}
        {...props}>
            <img src={dark ? "/phone-template-2.png": "/phone-template-2.png"} alt="phone image" className="pointer-events-none witdth-full z-50 select-none" />
            <div className="absolute -z-10 inset-0">
                <img src={imgSrc} className="object-cover object-center mx-1 w-[97%] h-full rounded-[2.4rem]" alt="overlaying phone image" />
            </div>
        </div>
    )
}

export default Phone;