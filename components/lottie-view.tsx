'use client'
import { Player } from '@lottiefiles/react-lottie-player';

export type LottieViewProps = {
    animationData: {}
}

export function LottieView(props: LottieViewProps) {

    return (
        <div className='w-full h-full'>
            <Player autoplay loop src={props.animationData} style={{ height: '100%', width: '100%' }} />
        </div>
    )
}