<script>
	import { page } from "$app/stores";
	import logo from "./favicon.png";
	
	// var k = 0;
	// onMount(() => {
	// 	document.getElementById("demo").innerHTML = title2;
	// 	setTimeout(() => {
	// 		typeWriter(0);
	// 	}, speed);
	// });

	// let title1 = "Your sales place";
	// let title2 = "Software Hub";

	// var speed = 150;

	// String.prototype.replaceAt = function (index, replacement) {
	// 	return (
	// 		this.substr(0, index) +
	// 		replacement +
	// 		this.substr(index + replacement.length)
	// 	);
	// };

	// function typeWriter(k) {
	// 	if (k < title1.length) {
	// 		let title = document.getElementById("demo").innerHTML;
	// 		if (k >= title.length) {
	// 			title += title1[k];
	// 		} else {
	// 			title = title.replaceAt(k, title1[k]);
	// 		}
	// 		document.getElementById("demo").innerHTML = title;
	// 		setTimeout(() => {
	// 			typeWriter(k + 1);
	// 		}, speed);
	// 	}
	// }
</script>

<header>
	<div class="corner">
		<a href="https://hubofsoftware.com">
			<img src={logo} alt="SvelteKit" />
		</a>

		<div  class="title" > H.o.S </div>
	</div>

	<nav>
		<ul>
			<li class:active={$page.path === "/"}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.path === "/about"}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.path === "/todos"}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	.title {
		color: #9ecbf7;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		padding: 1.2em 1em;
		transition: color 0.2s linear;
		justify-content: space-between;
	}

	.corner {
		width: 10%;
		display: flex;
		position: absolute;
		z-index: 1;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		width: 100%;
		justify-content: center;
		--background: #0c1829;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: #9ecbf7;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
