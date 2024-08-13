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
        <div className="w-full hover:cursor-pointer" onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} onClick={() => window.location.href = props.routerPath}>
            {
                isHovered ?
                    <img className="w-full h-auto" src={props.thumbnailPath} alt={props.thumbnailPath} />
                    :
                    <LottieView animationData={props.animationData} />
            }
            <div className="text-lg"></div>
            <div className="text-base"></div>
        </div>
    )
}