<script setup lang="ts">
import NavBar from './NavBar.vue';
import {ref} from 'vue';
let showPopup = ref<boolean>(false);
function handleClickPopup(){
    console.log(showPopup);
    showPopup.value = true;
}
</script>
<template>
<div class="h-full">
    <NavBar/>
    <slot></slot>
</div>
</template>
<style scoped>
</style>