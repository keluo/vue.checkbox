<template>
  <!-- <label class="checkbox-wrap" v-if="options.length == 0"> -->
  <label class="vue-checkbox-wrap" :class="disabled ? 'vue-checkbox-disabled' : ''">
    <input type="checkbox" class="vue-checkbox-input" v-model="realValue" :disabled="disabled"/>
    <span class="vue-checkbox-inner"></span>
    <span class="vue-checkbox-txt" v-text="label" v-if="label"></span>
  </label>
  <!-- <div class="checkbox-group-wrap" v-else-if="options.length > 0">
    <label class="checkbox-wrap" v-for="item in options">
      <input type="checkbox" class="checkbox-input" :value="item.value" v-model="realValue"/>
      <span class="checkbox-inner"></span>
      <span class="checkbox-txt" v-text="item.label"></span>
    </label>
  </div> -->
</template>

<script>
export default {
  name: 'vue-checkbox',
  props: {
    // 'options':{
    //   default:() => {
    //     return [];
    //   },
    //   type:Array
    // },
    'label':{
      default:() => {
        return '';
      },
      type:String,
    },
    'disabled':{
      default:() => {
        return false;
      },
      type:Boolean,
    },
    'value':{
      default:() => {
        return false;
      },
      type:Boolean,
    },
  },
  data () {
    return {
      //realValue: this.options.length > 0 ? [] : false
      realValue: this.value
    }
  },
  mounted () {
  },
  computed: {
  },
  watch: {
    realValue (value) {
      this.$emit('input', value);
      this.$emit('click', value);
    }
  },
  methods: {
  }
}
</script>

<style scoped>
 /*checkbox css new*/
.vue-checkbox-group-wrap{
  display: inline-block;
}
.vue-checkbox-group-wrap .checkbox-wrap{
  margin-right: 10px;
}
.vue-checkbox-group-wrap .vue-checkbox-wrap:last-child{
  margin-right: 0px;
}
.vue-checkbox-wrap{
  white-space: nowrap;
  display: inline-block;
  position: relative;
  cursor: pointer;
  line-height: 1;
}
.vue-checkbox-wrap.vue-checkbox-disabled{
  cursor: not-allowed;
}
.vue-checkbox-wrap .vue-checkbox-input{
    position:absolute;
    top:0px;
    left:0px;
}
.vue-checkbox-wrap .vue-checkbox-txt {
    padding-left: 5px;
    float: left;
}
.vue-checkbox-wrap .vue-checkbox-inner{
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 14px;
    height: 14px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    background-color: #fff;
    -webkit-transition: all .3s;
    transition: all .3s;
    cursor: pointer;
    float: left;
}
.vue-checkbox-wrap .vue-checkbox-inner:after{
    -webkit-transform: rotate(45deg) scale(0);
    -ms-transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    position: absolute;
    left: 4px;
    top: 1px;
    display: table;
    width: 4px;
    height: 8px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: " ";
    -webkit-transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
    
}
.vue-checkbox-wrap.vue-checkbox-disabled .vue-checkbox-inner{  
  border-color: #d9d9d9 !important;
  background-color: #f5f5f5 !important;
  cursor: not-allowed;
}
.vue-checkbox-wrap.vue-checkbox-disabled .vue-checkbox-inner:after{
  -webkit-animation-name: none;
  animation-name: none;
  border-color: rgba(0, 0, 0, 0.25);
}
.vue-checkbox-wrap .vue-checkbox-input:checked + .vue-checkbox-inner{
  background-color: #108ee9;
  border-color: #108ee9;
}
.vue-checkbox-wrap .vue-checkbox-input:checked + .vue-checkbox-inner:after{
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}
.vue-checkbox-wrap.vue-checkbox-disabled .vue-checkbox-txt{
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
/*checkbox css new*/
</style>

