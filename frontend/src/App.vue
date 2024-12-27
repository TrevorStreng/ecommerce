<script setup>
import Navbar from "./components/Navbar.vue";
import HomeContent from "./components/HomePage.vue";
import TopAdd from "./components/TopAdd.vue";
</script>

<template>
  <header class="flex justify-center">
    <Navbar />
  </header>

  <main class="flex w-screen justify-center">
    <div class="flex flex-col w-full items-center">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
