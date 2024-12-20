<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let container: HTMLDivElement;
	let scene: any;
	let camera: any;
	let renderer: any;
	let animationFrameId: number;
	let THREE: any;

	let isAnimating = true;
	let rotationSpeed = 0.01;
	let cubes: any[] = [];

	async function initThree() {
		THREE = await import('three');
		init();
		animate();
	}

	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshNormalMaterial();

		// Create three cubes and position them
		for (let i = 0; i < 3; i++) {
			const cube = new THREE.Mesh(geometry, material);
			cube.position.x = (i - 1) * 2.5; // Space them 2.5 units apart
			scene.add(cube);
			cubes.push(cube);
		}

		camera.position.z = 8; // Move camera back to see all cubes
	}

	function toggleAnimation() {
		isAnimating = !isAnimating;
		if (isAnimating) {
			animate();
		} else if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
		}
	}

	function animate() {
		animationFrameId = requestAnimationFrame(animate);
		if (isAnimating) {
			cubes.forEach((cube) => {
				cube.rotation.x += rotationSpeed;
				cube.rotation.y += rotationSpeed;
			});
		}
		renderer?.render(scene, camera);
	}

	function handleResize() {
		if (camera && renderer && container) {
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		}
	}

	onMount(() => {
		initThree();
		window.addEventListener('resize', handleResize);
	});

	onDestroy(() => {
		window.removeEventListener('resize', handleResize);
		if (renderer) {
			renderer.dispose();
		}
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
		}
	});
</script>

<div bind:this={container} class="h-screen w-full cursor-pointer" on:click={toggleAnimation}></div>
