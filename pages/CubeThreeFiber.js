import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const color = ["#9b79d8", "#7a524d", "#3f6bf6"];
  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x= ref.current.rotation.y+= 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? color[Math.floor(Math.random() * 3)] : '#fdaf7f'} />
    </mesh>
  )
}

export default function CubeThreeFiber() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-2.5, 0, 0]} />
      <Box position={[2.5, 0, 0]} />
      <Box position={[0, 2.5, 0]} />
      <Box position={[0, -2.5, 0]} />
    </Canvas>
  )
}
