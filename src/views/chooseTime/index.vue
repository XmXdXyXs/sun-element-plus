<template>
  <div>
    <sun-choose-time
      :startOptions="startOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></sun-choose-time>
    <br />
    <br />
    <sun-choose-date
      :disableToday="false"
      :startOptions="startOptions"
      @startChange="dateStartChange"
      @endChange="dateEndChange"
    ></sun-choose-date>
  </div>
</template>

<script lang="ts" setup>
interface endValue {
  startTime: string
  endTime: string
}
interface dateEndValue {
  startDate: Date
  endDate: Date
}
let startChange = (val: string) => {
  console.log('startChange', val)
}
let endChange = (val: endValue) => {
  console.log('endChange', val)
}
let dateStartChange = (val: Date) => {
  console.log(val)
}
let dateEndChange = (val: dateEndValue) => {
  console.log(val)
}
let startOptions = {
  // size: 'mini',
  // clearable: false
}
</script>

<style lang="scss" scoped></style>
