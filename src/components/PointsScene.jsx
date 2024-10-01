import React from 'react'
import PointsModel from './PointsModel'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function PoinstScene() {
    return (
        <Canvas camera={{ position: [30, 2, 2] }}>
            <PointsModel />
            <OrbitControls autoRotate />
        </Canvas>
    )
}