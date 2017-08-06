<template>
  <div class="message">
    <p>Sorry, we couldn't find the page you requested.</p>
    <router-link to="home">To Homepage</router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

.message{
    padding: 15px;
}

.message a {
    padding: 5px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}

</style>