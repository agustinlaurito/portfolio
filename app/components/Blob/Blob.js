import { useMemo, useRef } from "react";
import { IcosahedronGeometry } from "three";
import vertexShader from "./vertextShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";


function Blob({ time = 0.5, intensity = 0.3, scale = 1}) {

	const mesh = useRef();
	const hover = useRef(false);
	const uniforms = useMemo(() => {
		return {
			u_time: { value: time },
			u_intensity: { value: intensity },
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		<mesh ref={mesh} scale={scale} onPointerOver={() => (hover.current = true)} onPointerOut={() => (hover.current = false)}>
			<icosahedronGeometry args={[4, 60]}/>
			<shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
		</mesh>
	)

};

export default Blob;
