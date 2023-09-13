import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { DirectionalLight } from "three";

function Square({ scale = 1 }) {
	const mesh = useRef();

	// Use useRef to store the rotation value
	const rotation = useRef(0);

	const { scene } = useThree(); // Access the Three.js scene

	// Add a directional light to the scene
	const light = new DirectionalLight(0xffffff, 1);
	light.position.set(-10, 10, -10); // Adjust the light's position

	const light2 = new DirectionalLight(0xffffff, 1);
	light.position.set(10, -10, 10); // Adjust the light's position

	scene.add(light); // Add the light to the scene
	scene.add(light2); // Add the light to the scene

	// Use useFrame to update the rotation on each frame
	useFrame(() => {
		// Increment the rotation angle on each frame
		rotation.current += 0.005;

		// Update the mesh's rotation
		mesh.current.rotation.x = rotation.current;
		mesh.current.rotation.y = rotation.current;
	});

	return (
		<mesh ref={mesh} scale={scale}>
			{/* <torusKnotGeometry args={[10, 3, 150, 8, 2, 3]} /> */}
			<boxGeometry args={[15, 15, 15, 1, 1, 1]} />
			<meshPhysicalMaterial
				color={"#900CD3"}
				roughness={1} // Adjust roughness value
				metalness={0} // Adjust metalness value
			/>
		</mesh>
	);
}

export default Square;
