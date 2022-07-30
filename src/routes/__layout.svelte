<script>
    import "../app.css";
</script>

<style lang="scss">
/* define variables for the primary colors */
$primary_1: #746FCB;
$primary_2: #CB6F98;
$primary_3: #C6CB6F;
$primary_4: #6FCBA1;


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

<slot />  