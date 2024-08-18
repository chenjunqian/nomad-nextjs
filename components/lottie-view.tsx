'use client'

import dynamic from 'next/dynamic';

export type LottieViewProps = {
    animationData: {},
    className?: string
}

export function LottieView(props: LottieViewProps) {

    const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(module => module.Player), { ssr: false });
    return (
        <div className={props.className}>
            <Player autoplay loop src={props.animationData} style={{ height: '100%', width: '100%' }} />
        </div>
    )
}