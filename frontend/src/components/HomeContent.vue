<script scoped>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        products.value = res.data.products;
      } catch (err) {
        console.error(err);
      }
    });

    return { products };
  },
};
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
      {{ product.price }}
      <img :src="product.image" class="w-12"></img>
    </li>
  </ul>
</template>
