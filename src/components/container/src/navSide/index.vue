<template>
  <sun-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></sun-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang="scss" scoped></style>
