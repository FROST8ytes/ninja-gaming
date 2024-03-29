<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Title from '$lib/Title.svelte';
	import '$styles/global.css';

	function nav_back() {
		if (browser) window.history.back();
	}
</script>

<header>
	<Title title="Ninja Gaming Guides" />
</header>

<main>
	<div class="error">
		<h2>Error</h2>
		<p>Seems like you lost your way.</p>
		<button on:click={nav_back}>Go back</button>
	</div>
</main>

<footer>
	<p>Copyright&copy; 2024 FROST8ytes' Kingdom</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 960px;
		margin: 20px auto;
	}

	footer {
		text-align: center;
	}

	.error {
		margin-top: 40px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
		max-width: 960px;
	}

	button {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
		background: none;
		cursor: pointer;
	}

	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
	}
</style>
