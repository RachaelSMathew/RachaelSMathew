import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'

function CubeThreeFiber() {
  const texture_1 = useLoader(TextureLoader, 'textures/dice_1.jpg')
  const texture_2 = useLoader(TextureLoader, 'textures/dice_2.jpg')
  const texture_3 = useLoader(TextureLoader, 'textures/dice_3.jpg')
  const texture_4 = useLoader(TextureLoader, 'textures/dice_4.jpg')
  const texture_5 = useLoader(TextureLoader, 'textures/dice_5.jpg')
  const texture_6 = useLoader(TextureLoader, 'textures/dice_6.jpg')
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
