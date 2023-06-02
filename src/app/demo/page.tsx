'use client'
import { useEffect } from 'react'

import init from '@/threejs'


type Props = {}

const DemoPage = (props: Props) => {
    useEffect(() => {
        init()
    }, [])

    return (
        <div>
            <canvas className="webgl"></canvas>
        </div>
    )
}

export default DemoPage
