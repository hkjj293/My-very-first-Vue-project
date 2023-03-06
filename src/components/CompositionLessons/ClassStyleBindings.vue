<script setup>
import { ref, computed,reactive } from 'vue'
import Example from './Example.vue';

const isActive = true
const isActive2 = ref(true)
const hasError2 = ref(false)
const dynamicId = "Button"
const reactiveClass = {active: isActive, Button: isActive2};
const comp = computed(()=>{return ({active: isActive,'text-danger':hasError2.value,Button: isActive2})});
const activeClass = ref('active');
const activeClass2 = reactive({status:'text-danger'});
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
const styleObject2 = reactive({
  color: 'black',
  fontSize: '26px'
})
</script>

<template>
    <h2>Class and Style Binding</h2>
    <!-- Binding to Objects  -->
    <div :class="{ active: isActive }">Hi!</div>
    <!-- With two classes & using ref objects-->
    <div class="static" :class="{ active: isActive2, 'text-danger': hasError2 }"></div>
    <!-- Compared to... -->
    <div :class="dynamicId">dynamicId</div> 
    <!-- Using reactive class binding -->
    <div :class="reactiveClass">Yo</div>
    <!-- Using with computed object-->
    <div :class="comp">Computed {{ hasError2 }}</div>
    <!-- Binding to Arrays -->
    <div :class="[activeClass,activeClass2.status]">OK</div>
    <div :class="[isActive? activeClass:'',activeClass2.status]">OK</div>
    <!-- With components -->
    <Example class="child p"/>
    <!-- Binding inline style -->
    <div :style="{color: 'rgb(50,20,10)', textAlign: 'center', fontSize: 48+'px'}">Inline Style</div>
    <div :style="styleObject">StyledObject</div>
    <div :style="[styleObject,styleObject2]">arrays of styles</div>
    <div :style="{display: ['-webkit-box','flex']}">Multiple fallback options (last value which the browser support)</div>
    <div :style="{fontFamily: ['system-ui','comics sans']}">Multiple fallback options (last supported value if not comics sans {{ '=>>' }} system-ui)</div>
</template>

<style scoped>
.static{
    position: static;
}

.active{
    color: red;
}

.Button:hover{
    color: gray;
}

.text-danger{
    color: cyan;
}

.child{
    color: blue;
}
</style>
