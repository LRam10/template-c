<script setup lang="ts">
import {ref} from 'vue'
const navLink = ref([
    'Home',
    'Services',
    'About'
])
</script>
<template class="w-full pb-3">
    <nav class="px-[50px] py-[25px] bg-gray-950 flex items-center justify-between bg-gray-100">
        <div class="flex items-center justify-center">
            <a class="flex-shrink-0">
            <img class="h-8 w-8 hover:text-gray cursor-pointer" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            </a>
        </div>
        <ul class="flex h-auto justify-center text-black">
            <li class="p-[20px] rounded hover:text-gray-400 " v-for="(item,index) in navLink" :key="index">{{item}}</li>
        </ul>
        <div class="flex items-center justify-center">
            <div class="flex-shrink-0">
                <button class="border-2 text-black border-gray-700 rounded px-5 py-2">Contact Us</button>
            </div>
        </div>
    </nav>
</template>