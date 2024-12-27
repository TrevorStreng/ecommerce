<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

// ? If I store the whole product object in localstorage/cart I dont need to fetch the product from the backend
const cartItemIds = ref([]);
const cartItems = ref([]);
const getCartItems = () => {
  cartItemIds.value = localStorage.getItem(cartItems);
};

const getProducts = async (productIds) => {
  try {
    const items = await axios.get("https://localhost:3000/api/products");
  } catch (err) {
    console.error(err);
  }
};
onMounted(() => getCartItems());
</script>

<template>
  <div>
    <ul>
      <li v-for="item in cartItems" :key="item._id"></li>
    </ul>
  </div>
</template>
