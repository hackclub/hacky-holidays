<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { T, extend, Canvas } from '@threlte/core';
	import { OrbitControls, Resize } from '@threlte/extras';
	import Model from './models/pcb.svelte';

	extend({ Canvas });

	const dimensions = writable({ width: '100%', height: '90vh' });

	const handleResize = () => {
		if (window.innerWidth >= 832) {
			dimensions.set({ width: '50%', height: '70vh' });
		} else if (window.innerWidth >= 640) {
			dimensions.set({ width: '75%', height: '70vh' });
		} else {
			dimensions.set({ width: '100%', height: '90vh' });
		}
	};

	onMount(() => {
		handleResize(); // Set initial dimensions
		window.addEventListener('resize', handleResize);
	});
</script>

<div class="model-container" style="--width: {$dimensions.width}; --height: {$dimensions.height};">
	<!-- <T.Canvas class="canvas-container"> -->
	<Canvas>
		<!-- Scene Lighting -->
		<T.AmbientLight intensity={0.5} />
		<T.DirectionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
		<T.DirectionalLight position={[-10, -10, 10]} intensity={0.8} />

		<!-- Camera and Controls -->
		<T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={10}>
			<OrbitControls autoRotate enableDamping dampingFactor={0.2} />
		</T.PerspectiveCamera>

		<Resize>
			<Model position={[0, 0, 0]} fallback={null} error={null} children={null}></Model>
		</Resize>
	</Canvas>
	<!-- </T.Canvas> -->
</div>

<style>
	.model-container {
		width: var(--width);
		height: var(--height);
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f0f0f0; /* Light background to enhance model visibility */
	}
</style>
