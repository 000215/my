<template>
  <div id="app">
   <h2 style="color: #fe3000">按钮区域</h2>
   <div class="row">
      <z-button >正常按钮</z-button>
    <z-button type="primary"  @click="fn">主要按钮</z-button>
    <z-button type="success" @click="fn">成功按钮</z-button>
    <z-button type="info" @click="fn">信息按钮</z-button>
    <z-button type="warning" @click="fn">警告按钮</z-button>
    <z-button type="danger" @click="fn">危险按钮</z-button>
   </div>
    <div class="row">
      <z-button plain>朴素按钮</z-button>
    <z-button plain type="primary">按钮</z-button>
    <z-button plain type="success">按钮</z-button>
    <z-button plain type="info">按钮</z-button>
    <z-button plain type="warning">按钮</z-button>
    <z-button plain type="danger">按钮</z-button>
   </div>
    <div class="row">
      <z-button round >椭圆按钮</z-button>
    <z-button round type="primary">按钮</z-button>
    <z-button round type="success">按钮</z-button>
    <z-button round type="info">按钮</z-button>
    <z-button round type="warning">按钮</z-button>
    <z-button round type="danger">按钮</z-button>
   </div>
    <div class="row">
      <z-button circle >圆</z-button>
    <z-button circle type="primary">按</z-button>
    <z-button circle type="success">按</z-button>
    <z-button circle type="info">按</z-button>
    <z-button circle type="warning">按</z-button>
    <z-button circle type="danger">按</z-button>
   </div>
    <div class="row">
      <z-button icon="z-icon-drag">icon</z-button>
    <z-button  icon="z-icon-supervise" type="primary">哈</z-button>
    <z-button  icon="z-icon-supervise" type="success" ></z-button>
    <z-button  icon="z-icon-chart-bar" type="info">呵</z-button>
    <z-button  icon="z-icon-chart-bar" type="warning"></z-button>
    <z-button  icon="z-icon-chart-bar" type="danger"></z-button>
   </div>
    <div class="row">
      <z-button icon="z-icon-drag"></z-button>
    <z-button  icon="z-icon-supervise" disabled type="primary">哈</z-button>
    <z-button  icon="z-icon-supervise" disabled type="success" ></z-button>
    <z-button  icon="z-icon-chart-bar" disabled  disabledtype="info">呵</z-button>
    <z-button  icon="z-icon-chart-bar" disabled type="warning"></z-button>
    <z-button  icon="z-icon-chart-bar" disabled type="danger"></z-button>
   </div>
   <!-- dialog部分``````````````````````````````````````````````````````````````````````````` -->
   <h2 style="color: #fe3000">模态框区域</h2>
    <z-button type="success" @click="visible= true">按钮</z-button>
   <z-dialog width="40%" top="200px" :visible.sync="visible">
     <span>欢迎使用</span>
     <template v-slot:title>
       <h3>温馨提示</h3>
     </template>
     <template v-slot:footer>
       <z-button>取消</z-button>
      <z-button>确定</z-button>
     </template>
   </z-dialog>
   <h2 style="color: #fe3000">输入框区域</h2>
   <z-input type="text" placeholder="hh" width="30%"/>
   <h2 style="color: #fe3000">开关区域</h2>
   <z-switch v-model="active" active-color="green" inactive-color="red" name="username"></z-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      active: false,
      username: 'zz'
    }
  },
  methods: {
    fn () {
      console.log(1)
    },
    change () {
      this.value = !this.value
    }
  }
}
</script>

<style lang="less" scoped>
  .row{
    margin-bottom: 20px;
    .z-button{
      margin-right: 20px;
    }
  }
</style>
