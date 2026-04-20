import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={1} />
        <Float>
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial color="#6D28D9" distort={0.4} speed={2} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}