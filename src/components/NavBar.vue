<script setup lang="ts">
import {ref} from 'vue'
const navLink = ref([
    'Luis',
    'Home'
])
</script>
<template >
    <nav class="p-6 bg-gray-950  h-full">
        <ul class="">
            <li v-for="item in navLink">{{item}}</li>
        </ul>
    </nav>
</template>