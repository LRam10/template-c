<script setup lang="ts">
import {ref} from 'vue'
import moneyIcon from '../../assets/money.png'
const list = ref([
    {
      heading:'Affordable',
      subtext:'The best price available',
      icon:moneyIcon
    },
    {
      heading:'Bilingual',
      subtext:'The best price available',
      icon:''
    },
    {
      heading:'Excellent Costumer Service',
      subtext:'The best price available',
      icon:'',
    },
    {
      heading:'Friendly',
      subtext:'The best price available',
      icon:''
    }
    
])
</script>

<template>
<div class="px-[50px] py-[45px] flex items-center justify-evenly bg-sec-color-100">
  <div v-for="(item,index) in list" :key="index" class="flex items-center">
    <div>
      <img :src="item.icon" class="h-[30px]" />
    </div>
    <div class="text-center">
      <h3 class="font-bold">{{ item.heading }}</h3>
      <p class="text-[12px]">{{ item.heading }}</p>
    </div>
  </div>
</div>
</template>

<style scoped
></style>