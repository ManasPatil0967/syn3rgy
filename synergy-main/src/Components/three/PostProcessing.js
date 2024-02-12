import { forwardRef } from 'react'
import { useThree } from '@react-three/fiber'
import { MeshDiscardMaterial } from '@react-three/drei'
import { Color } from 'three'


const PostProcessing = forwardRef((_, ref) => {
  const { viewport } = useThree()



  return(
    <mesh position={[0, 0, 1]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <MeshDiscardMaterial
        ref={ref}        
        opacity={0.0}
        transmission={0.7}
        roughness={0}
        thickness={0}
        chromaticAberration={0.06}
        anisotropy={0}
    
      />
    </mesh>
  )
})

export default PostProcessing