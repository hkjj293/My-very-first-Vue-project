<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import Example from './Example.vue';

const items = ref([{ id: 0, message: 'Foo' }, { id: 1, message: 'Bar' }])
const parentMessage = ref('Parent')
const myObject = reactive({
    a: 'sd',
    b: 'nm',
    c: 'vb',
});
</script>

<template>
    <h2>List Rendering</h2>
    <br />
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <!-- With index -->
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <!-- Destructuring -->
    <li v-for="({ message }, index) in items">
        {{ message }} - {{ index }}
    </li>
    <!-- on Objects -->
    <li v-for="(value, key) in myObject">
        {{ key }}: {{ value }}
    </li>
    <!-- range -->
    <li v-for="num in 10">
        {{ num }}
    </li>
    <!-- with key -->
    <li v-for="item in items" :key="item.id">
        {{ item.id }}
    </li>
    <!-- With component, input being explicit  -->
    <Example v-for="item in items" :input="item.id" />
</template>

<style scoped></style>
