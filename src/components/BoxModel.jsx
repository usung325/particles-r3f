import React from 'react'
import { useRef, useEffect } from 'react'
import { BoxGeometry, Quaternion, Vector3 } from 'three'

export default function Model() {
    const mesh = useRef()
    const quaternion = new Quaternion()

    useEffect(() => {

        // Get the current attributes of the geometry
        const currAttrib = mesh.current.geometry.attributes.position.array
        // Copy the attributes
        console.log(currAttrib)
        const copyCurrAttrib = currAttrib.slice()
        // Go through each vector (series of 3 values) and modify the values
        for (let i = 0; i < copyCurrAttrib.length; i += 3) {
            debugger;
            const vectorCopy = new Vector3(copyCurrAttrib[i], copyCurrAttrib[i + 1], copyCurrAttrib[i + 2],)
            const vectorUp = new Vector3(0, 1, 0)

            quaternion.setFromAxisAngle(vectorUp, (Math.PI / 2) * (vectorCopy.y + 2))
            vectorCopy.applyQuaternion(quaternion)

            currAttrib[i] = vectorCopy.x
            currAttrib[i + 1] = vectorCopy.y
            currAttrib[i + 2] = vectorCopy.z

            // Set the needsUpdate flag to "true"
            currAttrib.needsUpdate = true

        }

    }, [])

    return (


        <mesh ref={mesh} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1, 10, 10, 10]} />
            <meshLambertMaterial color="hotpink" emissive="hotpink" wireframe={true} />
        </mesh>
    )
}