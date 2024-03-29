<script>
	import Title from '$lib/Title.svelte';
	import '$styles/global.css';
</script>

<header>
	<Title title="Ninja Gaming Guides" />
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
</style>
