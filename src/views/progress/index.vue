<template>
  <div>
    <sun-progress isAnimate :percentage="60"></sun-progress>
    <br />
    <sun-progress isAnimate status="success" :stroke-width="20" :percentage="60"></sun-progress>
    <br />
    <sun-progress :time="5000" type="circle" isAnimate :percentage="60"></sun-progress>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
