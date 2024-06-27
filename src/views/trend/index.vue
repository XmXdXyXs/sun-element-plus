<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <sun-trend text="营业额"></sun-trend>
      </div>
      <div>
        <sun-trend text="销售额" type="down"></sun-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div><sun-trend text="销售额" reverseColor></sun-trend></div>
      <div><sun-trend text="营业额" type="down" reverseColor></sun-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <sun-trend text="营业额" upIconColor="blue"></sun-trend>
      </div>
      <div>
        <sun-trend text="销售额" type="down" downIconColor="#123456"></sun-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div><sun-trend text="营业额" upTextColor="blue"></sun-trend></div>
      <div><sun-trend text="销售额" type="down" downTextColor="yellow"></sun-trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div><sun-trend upIcon="CaretTop">营业额</sun-trend></div>
      <div><sun-trend type="down" downIcon="CaretBottom">销售额</sun-trend></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
