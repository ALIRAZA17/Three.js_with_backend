import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';
// import {Loader} from '../Loader';


const Computers = ({isMobile}) => {
  const computer= useGLTF('./desktop_pc/scene.gltf');
  return (

    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"}/>
      <pointLight intensity={1}/>
      <spotLight intensity={1} position={[-20, 50, 10]} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive 
      scale={isMobile?  0.7 : 0.75}
      position={isMobile?[0,-3,-2.2]:[0, -3.45, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      object={computer.scene}/>
    </mesh>

  )
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');


    // Set the initial state
    setisMobile(mediaQuery.matches);

    // Add a listener for changes to the screen size
    const handlemediaQueryChange = (e) => {
      setisMobile(e.matches);
    }

    // Add the callback function as a listener for changes to the screen size
    mediaQuery.addEventListener('change', handlemediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handlemediaQueryChange);
    }
  }, []);
  
  return (
    <Canvas
    frameloop={'demand'}
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}        
        />
        <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>


    </Canvas>
  );
}

export default ComputersCanvas;