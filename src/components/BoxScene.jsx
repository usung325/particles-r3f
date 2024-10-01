import React from 'react'
import Model from './BoxModel'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
    return (
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-1, -2, 4]} />
            <Model />
            <OrbitControls autoRotate />
        </Canvas>
    )
}