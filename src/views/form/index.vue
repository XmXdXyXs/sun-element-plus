<template>
  <div>
    <sun-form
      ref="form"
      label-width="100px"
      :options="options"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-exceed="handleExceed"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px">jpg/png files with a size less than 500kb</div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </sun-form>
  </div>
</template>

<script lang="ts" setup>
import { FormInstance, FormOptions } from '../../components/form/src/types/types'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

interface Scope {
  form: FormInstance
  model: any
}

let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择角色',
    prop: 'role',
    label: '角色',
    attrs: {
      style: {
        width: '100%'
      }
    },
    rules: [
      {
        required: true,
        message: '角色不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '超级管理员',
        value: '1'
      },
      {
        type: 'option',
        label: '管理员',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '技术栈',
    rules: [
      {
        required: true,
        message: '技术栈为必填项',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: 'vue',
        value: '1'
      },
      {
        type: 'checkbox',
        label: 'react',
        value: '2'
      },
      {
        type: 'checkbox',
        label: 'vite',
        value: '3'
      },
      {
        type: 'checkbox',
        label: 'webpack',
        value: '4'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      }
    ]
  },
  // {
  //   type: 'upload',
  //   label: '上传',
  //   prop: 'pic',
  //   uploadAttrs: {
  //     action: 'https://jsonplaceholder.typicode.com/posts/',
  //     multiple: true,
  //     limit: 3
  //   },
  //   rules: [
  //     {
  //       required: true,
  //       message: '图片不能为空',
  //       trigger: 'blur'
  //     }
  //   ],
  // },
  {
    type: 'editor',
    value: '',
    prop: 'desc',
    label: '自我评价',
    placeholder: '请输入自我评价',
    rules: [
      {
        required: true,
        message: '描自我评价不能为空',
        trigger: 'blur'
      }
    ]
  }
]
let form = ref()

let submitForm = (scope: Scope) => {
  scope.form.validate(valid => {
    if (valid) {
      console.log(scope.model)
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误,请检查')
    }
  })
}
// 重置表单
let resetForm = () => {
  form.value.resetFields()
}

let handleRemove = (file: any, fileList: any) => {
  console.log('handleRemove')
  console.log(file, fileList)
}
let handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
let beforeRemove = (val: any) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)
}
let handleExceed = (val: any) => {
  console.log('handleExceed', val)
  ElMessage.warning(
    `The limit is 3, you selected ${
      val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  )
}
let handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}
let handleChange = (val: any) => {
  console.log('change')
  console.log(val)
}
let handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
