<template>
<div>
  <div class="block"  style="width: 80%;">
    <span class="demonstration">基本点击</span>
    <code>
      
    </code>
    <div>
      <vue-checkbox :value="checkboxValue" v-model="checkboxValue" label="选我"></vue-checkbox>
    </div>
  </div>
  <div class="block"  style="width: 80%;">
    <span class="demonstration">基本点击</span>
    <code>
      
    </code>
    <div>
      <vue-checkbox  :value="checkboxValue" :disabled="checkboxDisabled" label="不可点击"></vue-checkbox>
    </div>
  </div>

 <!--  <div>
  <vue-checkbox :options="options" v-model="checkboxGroupValue"></vue-checkbox>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      checkboxDisabled:true,
      checkboxValue:true,
      checkboxGroupValue:[],
      options:[
        {'label':'苹果','value':'1'},
        {'label':'三星','value':'2'},
        {'label':'小米','value':'3'},
      ]
    }
  },
  watch: {
    checkboxValue (value) {
      console.log(value);
    },
    checkboxGroupValue (value) {
      console.log(value);
    }
  },
  methods: {
  }
}
</script>
<style>
.block {
    padding: 30px 0;
    -ms-flex: 1;
    flex: 1;
}
</style>
