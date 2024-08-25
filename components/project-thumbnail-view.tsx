'use client'

import { PlayerEvent } from "@lottiefiles/react-lottie-player";
import dynamic from "next/dynamic";
import { useState } from "react";

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
    const [isLottieLoaded, setIsLottieLoaded] = useState(false);

    const onEvent = (event: PlayerEvent) => {
        if (event === 'play') {
            setIsLottieLoaded(true);
        }
    }

    return (
        <div className="w-full hover:cursor-pointer" onClick={() => window.location.href = props.routerPath}>
            <div className="w-full">
                <div className="w-full relative overflow-hidden">
                    <div className="transition ease-in-out delay-150 hover:scale-125">
                        <Player autoplay loop src={props.animationData} style={{ height: '100%', width: '100%' }} onEvent={onEvent} />
                    </div>
                </div>
            </div>
            <div className={`md:text-sm text-xs mt-3 ${isLottieLoaded ? '' : 'hidden'}`}>{props.title}</div>
            <div className={`md:text-xs text-gray-300 ${isLottieLoaded ? '' : 'hidden'}`}>{props.subTitle}</div>
        </div>
    )
}