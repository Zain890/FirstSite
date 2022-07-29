<script lang="ts">
	//line below is what allows you to pass props from body of each
	//async func on index.ts to here:
	export let serverResponse;
	//below converts from a JSON obj back to json string, so it can be displayed better
	const serverResponseStringified = JSON.stringify(serverResponse, null, 2);
</script>

<body>
	<div type="text" class="text-sky-400">bookList</div>
	<br />
	<!--Below line with pre tag tells browser to look for signs of pre-formatting like brackets, etc.-->
	<div id="div1">
		{#each serverResponse as book}
		<h1 class="tex t-3xl font-bold underline">{book.title}</h1>
		<hr style="margin: 1em 1em "/>
		<table>
			<tr>
				<th>Name</th>
				<th>Value</th>
			</tr>
			{#each Object.keys(book) as key}
			{#if key !== 'longDescription' && key !== 'thumbnailUrl'}
			<tr>
				<td>{key}</td>
				<td>{book[key]}</td>
			</tr>
			{/if}
			{/each}
			<tr>
				<td>description</td>
				<td id="mouseover-longDescription">Mouseover Here!</td>
			</tr>
		</table>
		{/each}
	</div>
	<!--
		make dropdown menu that has each property as an option to click on
		clicking on that property opens up a second larger box that has that prop's info,
		When choosing that prop, there should be a hoverable dropdown with shortned info.
	-->
</body>
	
<style lang="scss">
body {
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 18px;
color:firebrick;
background-color: rgba(23, 136, 136, .35);
}

table, th, td {
border: 1px solid black;
}
</style>
 