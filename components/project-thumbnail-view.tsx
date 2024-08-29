'use client'

import { PlayerEvent } from "@lottiefiles/react-lottie-player";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

export type ProjectThumbnailViewProps = {
    routerPath: string,
    thumbnailPath: string,
    videoPath?: string,
    animationData: string
    title?: string
    subTitle?: string
}

export function ProjectThumbnailView(props: ProjectThumbnailViewProps) {

    const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(module => module.Player), { ssr: false });
    const [height, setHeight] = useState(200);
    const divRef = useRef<HTMLDivElement>(null);

    const updateDimensions = () => {
        if (divRef.current) {
            const width = divRef.current.offsetWidth;
            setHeight(width * 0.5);
        }
    };

    useEffect(() => {
        // Initial size
        updateDimensions();
        // Update size on window resize
        window.addEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className="w-full hover:cursor-pointer" onClick={() => window.location.href = props.routerPath}>
            <div className="w-full">
                <div className="w-full relative overflow-hidden bg-gray-300">
                    <div ref={divRef} className={`transition ease-in-out duration-700 hover:scale-125 w-full`} style={{ minHeight: `${height}px` }}>
                        <Player autoplay loop src={props.animationData} style={{ height: '100%', width: '100%' }}/>
                    </div>
                </div>
            </div>
            <div className={`md:text-base text-sm mt-3`}>{props.title}</div>
            <div className={`md:text-sm text-xs text-gray-500`}>{props.subTitle}</div>
        </div>
    )
}