<script setup>
import { ref, computed,reactive } from 'vue'

const isActive = true
const isActive2 = ref(true)
const hasError2 = ref(false)
const dynamicId = "Button"
const reactiveClass = {active: isActive, Button: isActive2};
const comp = computed(()=>{return ({active: isActive,'text-danger':hasError2.value,Button: isActive2})});
const activeClass = ref('active');
const activeClass2 = reactive({status:'text-danger'});
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
</style>
