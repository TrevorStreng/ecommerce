<script setup>
import { ref } from "vue";
import axios from "axios";
// import router from "../router/index.js";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const router = useRouter();

const login = async () => {
  try {
    const data = {
      email: email.value,
      password: password.value,
    };
    const res = await axios.post(
      "http://localhost:3000/api/users/login",
      data,
      {
        withCredentials: true,
      }
    );
    if (res.status === 200) router.push({ path: "/adminDashboard" });
  } catch (err) {
    console.error(err);
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div
    class="bg-gradient-to-br from-blue-500 to-indigo-700 w-full h-screen flex items-center justify-center"
  >
    <form
      class="flex flex-col w-[90%] max-w-sm p-6 bg-white rounded-lg shadow-lg md:w-full"
      @submit.prevent="login"
    >
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome Back
      </h2>

      <!-- Email Input -->
      <div class="mb-4">
        <label for="email" class="block text-gray-600 font-medium mb-2"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Enter your email"
          required
        />
      </div>

      <!-- Password Input -->
      <div class="mb-6 relative">
        <label for="password" class="block text-gray-600 font-medium mb-2"
          >Password</label
        >
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          id="password"
          class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Enter your password"
          required
        />
        <button
          type="button"
          @click="togglePasswordVisibility"
          class="absolute right-3 top-1/2 transform translate-y-1 text-gray-500 hover:text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            class="w-5 h-5"
          >
            <path
              d="M 43.9492 47.3227 C 44.2544 47.6280 44.6821 47.7909 45.0686 47.7909 C 45.8832 47.7909 46.6361 47.0580 46.6361 46.2234 C 46.6361 45.8163 46.4735 45.4092 46.1679 45.1038 L 12.1120 11.0682 C 11.8066 10.7629 11.3995 10.6204 10.9924 10.6204 C 10.1781 10.6204 9.4250 11.3532 9.4250 12.1674 C 9.4250 12.5949 9.5675 13.0020 9.8728 13.2870 Z M 45.8628 41.5619 C 52.2546 37.4295 56.0000 32.0555 56.0000 29.6738 C 56.0000 25.5415 44.7025 12.3710 28.0102 12.3710 C 24.5497 12.3710 21.3130 12.9613 18.3410 13.9384 L 23.6540 19.2311 C 24.9771 18.6611 26.4428 18.3354 28.0102 18.3354 C 34.3207 18.3354 39.3892 23.3226 39.3892 29.6738 C 39.3892 31.2209 39.0636 32.7069 38.4324 34.0097 Z M 28.0102 46.9766 C 31.7761 46.9766 35.2774 46.3049 38.4124 45.2056 L 33.0179 39.8112 C 31.5318 40.5848 29.8219 41.0122 28.0102 41.0122 C 21.6591 41.0122 16.6310 35.8621 16.6107 29.6738 C 16.6107 27.8418 17.0382 26.1115 17.8117 24.5848 L 10.7278 17.4600 C 4.0102 21.5924 0 27.2310 0 29.6738 C 0 33.7858 11.5013 46.9766 28.0102 46.9766 Z M 34.4835 29.2463 C 34.4835 25.6840 31.6133 22.7934 28.0102 22.7934 C 27.7456 22.7934 27.4809 22.8137 27.2367 22.8341 L 34.4428 30.0402 C 34.4632 29.7960 34.4835 29.5110 34.4835 29.2463 Z M 21.5166 29.2056 C 21.5166 32.7883 24.4682 35.6789 28.0306 35.6789 C 28.3156 35.6789 28.5802 35.6586 28.8652 35.6382 L 21.5573 28.3303 C 21.5369 28.6153 21.5166 28.9206 21.5166 29.2056 Z"
            />
          </svg>
        </button>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
      >
        Login
      </button>
    </form>
  </div>
</template>
