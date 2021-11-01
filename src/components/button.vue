<template>
  <button class="z-button" :class="[`z-button--${type}`,{
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled':disabled
  }]"
  :disabled="disabled"
  @click="handleClick"
  >
  <i  v-if="icon" :class="icon"></i>
 <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ZButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
 .z-button{
     display: inline-block;
     line-height: 1;
     white-space: nowrap;
     cursor: pointer;
     background: #fff;
     border: 1px solid #dcdcdc;
     color: #606266;
     outline: none;
     margin: 0;
     font-weight: 500;
     transition: 0.1s;
     padding: 12px 20px;
     font-size: 14px;
     border-radius: 4px;
     &:hover,
     &:focus{
         color: #409eff;
         border-color: #c6e2ff;
         background-color: #ecf5ff;
     }
 }
 .z-button--primary{
     color: #fff;
     background-color: #409eff;
     border-color: #409eff;
     &:hover,
     &:focus{
         background-color: #66b1ff;
         border-color: #66b1ff;
         color: #fff;
     }
 }
  .z-button--success{
     color: #fff;
     background-color: #00cc00;
     border-color: #00cc00;
     &:hover,
     &:focus{
         background-color: #00ff66;
         border-color: #00ff66;
         color: #fff;
     }
 }
  .z-button--info{
     color: #fff;
     background-color: #a9a9a9;
     border-color: #a9a9a9;
     &:hover,
     &:focus{
         background-color: #dcdcdc;
         border-color: #dcdcdc;
         color: #fff;
     }
 }
  .z-button--warning{
     color: #fff;
     background-color: #b8860b;
     border-color: #b8860b;
     &:hover,
     &:focus{
         background-color: #daa520;
         border-color: #daa520;
         color: #fff;
     }
 }
  .z-button--danger{
     color: #fff;
     background-color: #dc143c;
     border-color: #dc143c;
     &:hover,
     &:focus{
         background-color: #f56c6c;
         border-color: #f56c6c;
         color: #fff;
     }
 }
//plain
  .z-button.is-plain{
      background-color: #fff;
 }
 .z-button--primary.is-plain{
     color: #409eff;
     background-color: #ecf5ff;
     border-color: #409eff;
     &:hover,
     &:focus{
         background-color: #66b1ff;
         border-color: #66b1ff;
         color: #fff;
     }
 }
  .z-button--success.is-plain{
     color: #00cc00;
     background-color: #f0f9eb;
     border-color: #00cc00;
     &:hover,
     &:focus{
         background-color: #00ff66;
         border-color: #00ff66;
         color: #fff;
     }
 }
  .z-button--info.is-plain{
     color: #a9a9a9;
     background-color: #f4f4f5;
     border-color: #a9a9a9;
     &:hover,
     &:focus{
         background-color: #dcdcdc;
         border-color: #dcdcdc;
         color: #fff;
     }
 }
  .z-button--warning.is-plain{
     color: #b8860b;
     background-color: #fdf6ec;
     border-color: #b8860b;
     &:hover,
     &:focus{
         background-color: #daa520;
         border-color: #daa520;
         color: #fff;
     }
 }
  .z-button--danger.is-plain{
     color: #dc143c;
     background-color: #fef0f0;
     border-color: #dc143c;
     &:hover,
     &:focus{
         background-color: #f56c6c;
         border-color: #f56c6c;
         color: #fff;
     }
 }
 //round
 .z-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
 }
//  circle
.z-button.is-circle{
    border-radius: 50%;
    padding: 10px;
 }
 .z-button [class*=z-icon-]+span {
     margin-left: 5px;
 }
 .z-button.is-disabled{
     cursor: no-drop
 }
</style>>
