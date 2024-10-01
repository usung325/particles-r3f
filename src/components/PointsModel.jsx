import React, { useMemo, useRef } from 'react'
// import { Float32Array } from '@react-three/drei'
import { vertex, fragment } from './shader'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function PointsModel() {

    const points = useRef()
    const count = 400000
    const uniforms = useMemo(() => ({
        uTime: {
            value: 0.0
        },
        uRadius: {
            value: 10.0
        }
    }), [])

    useFrame((state) => {
        const { clock } = state

        points.current.material.uniforms.uTime.value = clock.elapsedTime
    })

    const particles = useMemo(() => {
        const newArr = new Float32Array(count * 3)

        // Generate random values for x, y, and z on every loop
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50
            const y = (Math.random() - 0.5) * 50
            const z = (Math.random() - 0.5) * 50
            // We add the 3 values to the attribute array for every loop

            newArr.set([x, y, z], i * 3)
        }
        return newArr
    }, [])
    console.log(particles)


    return (
        <points ref={points}>
            {/* <sphereGeometry args={[15, 32, 12]} /> */}
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles}
                    count={particles.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>


            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms}
            />
        </points>
    )
}