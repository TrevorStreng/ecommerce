<script setup>
import axios from "axios";
import { isReadonly, onMounted, ref } from "vue";

// ? If I store the whole product object in localstorage/cart I dont need to fetch the product from the backend
const cartItems = ref([]);

const getItems = async (productIds) => {
  let url = `http://localhost:3000/api/products?ids=`;
  let len = productIds.length;
  for (let i = 0; i < len; i++) {
    url += productIds[i] + ",";
  }
  try {
    const items = await axios.get(url);
    cartItems.value = items.data.products;
  } catch (err) {
    console.error(err);
  }
};
onMounted(() => getItems(JSON.parse(localStorage.getItem("cart"))));
</script>

<template>
  <div>
    <ul>
      <li v-for="item in cartItems" :key="item._id">
        <img :src="item.image" class="w-52"></img>
      </li>
    </ul>
  </div>
</template>
