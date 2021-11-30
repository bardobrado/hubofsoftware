<script context="module">
	import { browser, dev } from "$app/env";

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	import { onMount } from "svelte";

	let origin = "Funciona melhor com textos menores.";
	let final = "Mas ainda assim é um efeito legal";
	let part;
	let k = 0;
	let rnd;
	let rndList = [];
	let speed = 5;

	onMount(() => {
		part = document.getElementById("demo").innerHTML;
	});

	function nextText() {
		if (final.length >= origin.length) {
			if (k < final.length && part != final) {
				document.getElementById("demo").innerHTML =
					randSliceReplaceNext(part, final, k);

				setTimeout(nextText, speed);
			} else {
				rndList = [];
				k = 0;
				part = final;
				console.log("Terminou");
			}
		} else {
			if (k < final.length && part.slice(0, final.length) != final) {
				document.getElementById("demo").innerHTML =
					randSliceReplaceNext(part, final, k);
				setTimeout(nextText, speed);
			} else {
				k = 0;
				nextTextDesc();
				rndList = [];
				part = final;
				console.log("Terminou");
			}
		}
	}

	function nextTextDesc() {
		document.getElementById("demo").innerHTML = removeExcedent(
			origin,
			final,
			k
		);
		setTimeout(nextTextDesc, speed);
	}

	function removeExcedent(origin, final, kj) {
		if (k < origin.length - final.length) {
			part =
				part.slice(0, final.length) +
				part.slice(final.length, origin.length - k);
			kj++;
			k = kj;
			console.log("oi");
		}
		return part;
	}

	function randSliceReplaceNext(origin, final, k) {
		rnd = Math.random() * final.length;

		if (rndList.includes(rnd)) {
			return randSliceReplace(origin, final, k);
		} else {
			rndList.concat(rnd);
			k++;
		}
		part = origin.slice(0, rnd);
		part += final.charAt(rnd) + origin.slice(rnd + 1);
		return part;
	}

	function backText() {
		if (origin.length >= final.length) {
			if (k < origin.length && part != origin) {
				document.getElementById("demo").innerHTML =
					randSliceReplaceNext(part, origin, k);

				setTimeout(backText, speed);
			} else {
				rndList = [];
				k = 0;
				part = origin;
				console.log("Terminou");
			}
		} else {
			if (k < origin.length && part.slice(0, origin.length) != origin) {
				document.getElementById("demo").innerHTML =
					randSliceReplaceNext(part, origin, k);
				setTimeout(backText, speed);
			} else {
				k = 0;
				backTextDesc();
				rndList = [];
				part = final;
				console.log("Terminou");
			}
		}
	}

	function backTextDesc() {
		document.getElementById("demo").innerHTML = removeExcedent(
			final,
			origin,
			k
		);
		setTimeout(backTextDesc, speed);
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<div
		class="a"
		on:click={() => {
			backText();
		}}
	>
		back
	</div>

	<p id="demo">Funciona melhor com textos menores.</p>

	<div
		class="a"
		on:click={() => {
			nextText();
		}}
	>
		next
	</div>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	.a {
		text-decoration: underline;
	}
	p {
		font-size: 2em;
	}
</style>
