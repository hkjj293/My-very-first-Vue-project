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
const url = "https://chrishui.cc";
const attributeName = "href";
const eventName = "click"

function add(a, b) {
    return a + b;
}
function doSomething() {
    seen = !seen;
}
function onSubmit(event) {

}
</script>

<template>
    <div>
        <h2>Template Syntax</h2>
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
        Arguments href is the argument<br />
        <a href="https://chrishui.cc">Link</a><br />
        <a v-bind:href="url">Link</a><br />
        <!-- Equal to <a v-bind="attr">Link</a>  ;   attr = {href: url} -->
        <a href="" v-on:click="doSomething"> v-on:click </a><br />
        <a href="" @click="doSomething"> @click </a><br /> <!-- shorthand -->
        <!-- Dynamic Arguments ==> js expressions are inside []-->
        <a v-bind:[attributeName]="url"> v-bind:[attributeName] </a><br />
        <a href="" v-on:[eventName]="doSomething"> v-on:[eventName] </a><br />
        <!-- DA constraints -->
        {{ `-- <a :['foo' + bar]="value"> ... </a> !!Error ` }}<br />
        {{ `-- <a :[someAttr]="value"> ... </a> !!someAttr will become someattr when not in SFC` }}<br />
        <!-- Modifiers -->
        <form @submit.prevent="onSubmit">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
a {
    color: lightgreen;
}

button {
    font-weight: bold;
}

#button {
    color: pink;
}
</style>
