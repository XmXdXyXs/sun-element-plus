<template>
  <sun-choose-area @change="changeArea"></sun-choose-area>
</template>

<script lang="ts" setup>
let changeArea = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
