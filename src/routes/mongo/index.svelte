<script>
    
    //line below is what allows you to pass props from body of each
    //async func on index.ts to here:
    export let serverResponse;
    //below converts from a JSON obj back to json string, so it can be displayed better
    serverResponse = JSON.stringify(serverResponse, null, 2);
</script>


<h1 class="text-3xl font-bold underline">MONGO ROUTE</h1>
<div type="text">bookList</div>
<!--Below line with pre tag tells browser to look for signs of pre-formatting like brackets, etc.-->
<pre>{serverResponse}</pre>