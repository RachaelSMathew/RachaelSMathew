import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <torusKnotGeometry args={[10, 1.6, 23, 5, 6, 13]} />
      <meshLambertMaterial color="#9b79d8" linewidth= "10" />
    </mesh>
  )
}

export default function CubeThreeFiber() {
  return (
    <Canvas >
      <ambientLight intensity={0.65} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, -25]} />
    </Canvas>
  )
}
