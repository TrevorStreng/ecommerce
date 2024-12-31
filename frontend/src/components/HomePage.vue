<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

import TopAdd from "./TopAdd.vue";

  const products = ref([]);

  onMounted(async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products");
      products.value = res.data.products;
    } catch (err) {
      console.error(err);
    }
  });
  const addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    console.log(cart)
    if(!cart.includes(productId)) {
      cart.push(productId)
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(`adding ${productId} to cart`)
    } else {
      console.log('Item already in cart')
    }
  }
</script>

<template>
  <TopAdd/>
  <div class="flex justify-center">
    <ul class="grid md:grid-cols-3 gap-3">
      <li v-for="product in products" :key="product._id" class="flex flex-col justify-center items-center">
        <img :src="product.image" class="w-3/4"></img>
        <div class="flex w-full justify-evenly">
          <p class="text-center">{{ product.name }}</p>
          <p class="text-end">${{ product.price }}</p>
        </div>
        <button @click="addToCart(product._id)" class="text-center border border-black-1 rounded-lg w-1/2">add to cart</button>
      </li>
    </ul>
  </div>
</template>
