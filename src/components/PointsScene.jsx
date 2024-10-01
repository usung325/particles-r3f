import React from 'react'
import PointsModel from './PointsModel'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function PoinstScene() {
    return (
        <Canvas camera={{ position: [20.0, 10.0, 2.0] }}>
            <PointsModel />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                autoRotate />
        </Canvas>
    )
}