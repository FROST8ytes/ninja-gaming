<script>
	import Title from '$lib/Title.svelte';
	import '$styles/global.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<header>
	<nav>
		<Title title="Ninja Gaming Guides" />
		<div class="links">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</nav>
</header>

<main>
	<!-- page content -->
	<slot />
</main>

<footer>
	<p>Copyright&copy; 2024 FROST8ytes' Kingdom</p>
</footer>

<style>
	header {
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
	}

	main {
		max-width: 960px;
		margin: 20px auto;
	}

	footer {
		text-align: center;
	}

	.links {
		margin-left: auto;
	}

	a {
		margin-left: 10px;
	}

	nav {
		display: flex;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
