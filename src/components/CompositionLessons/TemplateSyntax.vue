<script setup>

import { ref, onMounted } from 'vue'

const msg = 'Hello world';
const rawHtml = '<b style="color: red">Hi</b>';
const dynamicId = "button";
const disableButton = true;
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
}
function add(a, b) {
    return a + b;
}
</script>

<template>
    <br />
    <!-- Text Interpolation -->
    <span>Message: {{ msg }}</span>
    <!-- Raw HTML -->
    <p>Text Interp: {{ rawHtml }}<br />vs<br /> Raw HTML v-html: <span v-html="rawHtml"></span></p>
    <!-- Attribute Bindings -->
    <div v-bind:id="dynamicId">dynamicId</div>
    <div :id="dynamicId">dynamicId</div> <!-- shorthand -->
    <!-- Boolean attribute -->
    <button :disabled="disableButton">Button</button>
    <!-- Dynamic Binding multiple sttribute -->
    <div v-bind="objectOfAttrs">objectOfAttrs</div>
    <!-- Use js expressions (not statments)-->
    {{ add(1, 1) }}
</template>

<style scoped>
button {
    font-weight: bold;
}
</style>