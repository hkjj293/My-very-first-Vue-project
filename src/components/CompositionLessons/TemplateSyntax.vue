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
var seen = true;
const href = "https://chrishui.cc";
function add(a, b) {
    return a + b;
}
function doSomething() {
    seen = !seen;
}
</script>

<template>
    <br />
    <!-- Text Interpolation -->
    <span>Message: {{ msg }}</span>
    <!-- Raw HTML -->
    <p>Text Interp: {{ rawHtml }}</P>
    <p>Raw HTML v-html: <span v-html="rawHtml"></span></p>
    <!-- Attribute Bindings -->
    <div v-bind:id="dynamicId">dynamicId</div>
    <div :id="dynamicId">dynamicId</div> <!-- shorthand -->
    <!-- Boolean attribute -->
    <button :disabled="disableButton">Button</button>
    <!-- Dynamic Binding multiple sttribute -->
    <div v-bind="objectOfAttrs">objectOfAttrs</div>
    <!-- Use js expressions (not statments)-->
    {{ add(1, 1) + " (Example of js expression)" }}
    <!-- Directives -->
    <p v-if="seen">Now you see me (Directives)</p>
    <!-- Arguments href is the argument-->
    <a v-bind:href="url">Link</a>
    <a v-on:click="doSomething"> ... </a>
    <a @click="doSomething"> ... </a>
</template>

<style scoped>
button {
    font-weight: bold;
}

#button {
    color: pink;
}
</style>
