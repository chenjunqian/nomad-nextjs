'use client'

import { LottieView } from "@/components/lottie-view";
import { useState } from "react";

export type ProjectThumbnailViewProps = {
    routerPath: string,
    thumbnailPath: string,
    videoPath?: string,
    animationData: string
}

export function ProjectThumbnailView(props: ProjectThumbnailViewProps) {

    const [isHovered, setIsHovered] = useState(false);
    const handlerMouseEnter = () => {
        setIsHovered(true);
    }

    const handlerMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="w-full hover:cursor-pointer" onClick={() => window.location.href = props.routerPath}>
            <div className="w-full" onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
                <img className={`w-full h-auto ${isHovered ? `block` : `hidden`}`} src={props.thumbnailPath} alt={props.thumbnailPath} />
                <div className={`${isHovered ? `hidden` : `block`}`}>
                    <LottieView animationData={props.animationData} />
                </div>
            </div>
            <div className="md:text-sm text-xs mt-3">ESSE COFFE</div>
            <div className="md:text-xs text-gray-300">strategy, brand identity, package</div>
        </div>
    )
}