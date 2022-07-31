<script>
	import '../app.css';
</script>

<slot />

<style lang="scss">
	/* define variables for the primary colors */
	$primary_1: #746fcb;
	$primary_2: #cb6f98;
	$primary_3: #c6cb6f;
	$primary_4: #6fcba1;

	/* use the variables */
	.main-header {
		background-color: $primary_1;
	}

	.menu-left {
		background-color: $primary_2;
	}

	.menu-right {
		background-color: $primary_3;
	}
</style>
