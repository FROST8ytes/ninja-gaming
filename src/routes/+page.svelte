<script>
    let title = "Ninja Gaming Guides";

    const updateTitle = () => {
        title = "Something Completely Different";
    };
</script>

<div class="index">
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci doloribus, nobis similique, provident dignissimos, fugit cumque dicta iure temporibus rem. Eaque reiciendis corrupti ut voluptas repudiandae consectetur accusamus cumque, nesciunt labore libero esse. Cupiditate temporibus autem facilis expedita error sunt nemo inventore nisi dolores quaerat. Quam nam ut fugit consectetur incidunt sint ipsum culpa corporis! Necessitatibus amet vitae accusantium.</p>

    <button on:click={updateTitle}>Change Title</button>
    <input type="text" bind:value={title}>
</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>