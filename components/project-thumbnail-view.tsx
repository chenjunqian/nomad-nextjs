'use client'

import { LottieView } from "@/components/lottie-view";

export type ProjectThumbnailViewProps = {
    routerPath: string,
    thumbnailPath: string,
    videoPath?: string,
    animationData: string
}

export function ProjectThumbnailView(props: ProjectThumbnailViewProps) {

    return (
        <div className="w-full hover:cursor-pointer" onClick={() => window.location.href = props.routerPath}>
            <div className="w-full">
                {/* <img className="w-full hover:block hidden" src={props.thumbnailPath} alt={props.thumbnailPath} /> */}
                <div className="w-full relative overflow-hidden">
                    <LottieView className="transition ease-in-out delay-150 hover:scale-125" animationData={props.animationData} />
                </div>
            </div>
            <div className="md:text-sm text-xs mt-3">ESSE COFFE</div>
            <div className="md:text-xs text-gray-300">strategy, brand identity, package</div>
        </div>
    )
}