<script setup lang="ts">
import {ref} from 'vue'
const navLink = ref([
    'Luis',
    'Home'
])
</script>
<template >
    <nav class="p-6 bg-slate-600 w-48 h-full">
        <ul class="">
            <li v-for="item in navLink">{{item}}</li>
        </ul>
    </nav>
</template>