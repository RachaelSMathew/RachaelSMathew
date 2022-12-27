import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'

function CubeThreeFiber() {
  const texture_1 = useLoader(TextureLoader, '../images/CYE-icon-2.png')
  const texture_2 = useLoader(TextureLoader, '../images/iRobot-icon.png')
  const texture_3 = useLoader(TextureLoader, '../images/FP-icon-2.png')
  const texture_4 = useLoader(TextureLoader, '../images/Nuance-icon-2.png')
  const texture_5 = useLoader(TextureLoader, '../images/Neb-icon.png')
  const texture_6 = useLoader(TextureLoader, '../images/Neb2-icon.png')
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={texture_1} attach="material" />
      <meshStandardMaterial map={texture_2} attach="material" />
      <meshStandardMaterial map={texture_3} attach="material" />
      <meshStandardMaterial map={texture_4} attach="material" />
      <meshStandardMaterial map={texture_5} attach="material" />
      <meshStandardMaterial map={texture_6} attach="material" />
    </mesh>
  )
}
