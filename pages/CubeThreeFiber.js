import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

function CubeThreeFiber() {
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh {...props} ref={mesh}>
       <boxGeometry args={[3, 3, 3]} />
       <meshStandardMaterial color={"orange"} />
    </mesh>
 );
}
