<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import {ref} from 'vue';
</script>
<template>
<div class="h-full flex">
    <NavBar/>
    <slot></slot>
</div>
</template>
<style scoped>
</style>