<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const orders = ref([]);
const getOrders = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/orders", {
      withCredentials: true,
    });
    orders.value = res.data;
    console.log(orders.value);
  } catch (err) {
    console.error(err);
  }
};
onMounted(async () => {
  await getOrders();
});
</script>
<template>
  <ul>
    <li v-for="order in orders" class="">{{ order }}</li>
  </ul>
</template>
