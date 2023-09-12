import { useMemo, useRef } from "react";
import { IcosahedronGeometry } from "three";
import vertexShader from "./vertextShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";


function Blob() {

	const mesh = useRef();
	const hover = useRef(false);
	const uniforms = useMemo(() => {
		return {
			u_time: { value: 0.5 },
			u_intensity: { value: 0.3 },
		};
	});

	useFrame((state) => {
		const { clock } = state;
		if (mesh.current) {
			mesh.current.material.uniforms.u_time.value =
				0.1 * clock.getElapsedTime();

			mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
				mesh.current.material.uniforms.u_intensity.value,
				hover.current ? 0.4 : 0.15,
				0.02
			);
		}
	});

	return(
		<mesh ref={mesh} scale={1.75} onPointerOver={() => (hover.current = true)} onPointerOut={() => (hover.current = false)}>
			<icosahedronGeometry args={[2, 20]}/>
			<shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
		</mesh>
	)

};

export default Blob;
