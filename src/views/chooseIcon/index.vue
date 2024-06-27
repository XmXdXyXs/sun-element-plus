<template>
  <ChooseIcon title="icon图标" v-model:visible="visible"> 点击展示 </ChooseIcon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref<boolean>(false)
</script>

<style scoped></style>
