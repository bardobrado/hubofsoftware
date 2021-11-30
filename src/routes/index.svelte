<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";
	import StringCommutator from "string-commutator";

	let strComute;
	let origin = "Welcome to string commuter, try clicking next button below.";
	let final = "That's a nice effect, isn't it? Enjoy typing on the field above.";
	let part= "Welcome to string commuter, try clicking next button below";
	let k = 0;
    let rnd;
    let rndList = [];
	let speed = 5;
    let element = "demo";
	let running = false;
	strComute = new StringCommutator(
			origin, final, part, k, rnd, rndList, speed, element, running
		);

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
	</h1>

	<input
		id="text1"
		type="text"
		bind:value={strComute.origin}
		placeholder="Coloque seu texto 1 aqui"
	/>
	<br />

	<input
		id="text2"
		type="text"
		bind:value={strComute.final}
		placeholder="Coloque seu texto 2 aqui"
	/>
	<br />
	<button
		class="a"
		on:click={() => {
			if (strComute.isRunning() == false) strComute.backText();
		}}
	>
		back
	</button>

	<p id="demo" >{strComute.origin} </p>

	<button
		class="a"
		on:click={() => {
			if (strComute.isRunning()  == false) strComute.nextText();
		}}
	>
		next
	</button>
</section>

<style>
	#demo {
		font-size: 3em;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	p {
		font-size: 2em;
	}
</style>
